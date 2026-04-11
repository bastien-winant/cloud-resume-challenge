import botocore
import boto3
import json
import logging

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('CloudResumeVisitors')

logger = logging.getLogger(__name__)

def update_count(count):
    """
    Updates the visitor count in the table
    """
    try:
        table.update_item(
            Key={"Metric": "count"},
            UpdateExpression="SET Val = :val",
            ExpressionAttributeValues={":val": count + 1},
        )
    except botocore.exceptions.ClientError as err:
        logger.error(
            "Couldn't update metric 'count' from table %s. Here's why: %s: %s",
            table.name,
            err.response["Error"]["Code"],
            err.response["Error"]["Message"],
        )
        raise

def get_current_count():
        """
        Gets visitor count from the table.
        """
        try:
            response = table.get_item(Key={"Metric": "count"}, ProjectionExpression="Val")
        except botocore.exceptions.ClientError as err:
            logger.error(
                "Couldn't retrieve metric 'count' from table %s. Here's why: %s: %s",
                table.name,
                err.response["Error"]["Code"],
                err.response["Error"]["Message"],
            )
            raise
        else:
            if 'Item' in response:
                print(response["Item"]["Val"])
                return response["Item"]["Val"]
            return 0

def lambda_handler(event, context):
    current_count = get_current_count()
    update_count(current_count)
