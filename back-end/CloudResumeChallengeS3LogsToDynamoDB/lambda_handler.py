# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0
import json
import urllib.parse
import boto3
from decimal import Decimal

# s3 client
s3 = boto3.client('s3')

# DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CloudResumeVisitLogs')


def lambda_handler(event, context):
    # Get the object from the event
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    
    try:
        # Parse the object content as linebreak-separated json objects
        response = s3.get_object(Bucket=bucket, Key=key)
        content = response['Body'].read().decode('utf-8').strip("\n")
        entries = [json.loads(entry) for entry in content.split("\n")]

        # Load each log the DynamoDB
        for entry in entries:
            table.update_item(
                Key={
                    "id": entry["id"],
                    "timestamp": entry["timestamp"]
                },
                ExpressionAttributeNames={
                    '#IP': 'ip',
                    '#USER_AGENT': 'user_agent',
                    '#DESKTOP': 'desktop',
                    '#MOBILE': 'mobile',
                    '#TABLET': 'tablet',
                    '#COUNTRY': 'country'
                },
                ExpressionAttributeValues={
                    ":ip": entry["ip"],
                    ":user_agent": entry["user_agent"],
                    ":desktop": entry["desktop"],
                    ":mobile": entry["mobile"],
                    ":tablet": entry["tablet"],
                    ":country": entry["country"]
                },
                UpdateExpression='SET #IP = :ip, #USER_AGENT = :user_agent, #DESKTOP = :desktop, #MOBILE = :mobile, #TABLET = :tablet, #COUNTRY = :country'
            )

    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e
              
