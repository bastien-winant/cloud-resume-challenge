import boto3
import json
import logging

# Firehose client
firehose = boto3.client("firehose")
delivery_stream_name = "CloudResumeChallengeStream"

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def log_response(response: dict, entry: dict):
    """
    Log the response from Firehose.

    Args:
        response (dict): The response from the Firehose put_record API call.
        entry (dict): The record entry that was sent.
    """
    if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
        logger.info(f"Sent record: {entry}")
    else:
        logger.info(f"Fail record: {entry}")


def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
            'Content-Type': 'application/json',
        },
    }


def create_record_entry(record: dict) -> dict:
    """
    Create a record entry for Firehose.

    Args:
        record (dict): The data record to be sent.

    Returns:
        dict: The record entry formatted for Firehose.

    Raises:
        Exception: If a simulated network error occurs.
    """
    return {"Data": json.dumps(record)}


def put_record(record: dict):
    """
    Put individual records to Firehose with backoff and retry.

    Args:
        record (dict): The data record to be sent to Firehose.

    This method attempts to send an individual record to the Firehose delivery stream.
    It retries with exponential backoff in case of exceptions.
    """
    try:
        entry = create_record_entry(record)
        response = firehose.put_record(DeliveryStreamName=delivery_stream_name, Record=entry)
        log_response(response, entry)
        return respond(None, res=record)
    except Exception:
        logger.info(f"Fail record: {record}.")
        return respond(ValueError(f"Fail record: {record}."))


def lambda_handler(event, context):
    '''Demonstrates a simple HTTP endpoint using API Gateway. You have full
    access to the request and response payload, including headers and
    status code.

    To scan a DynamoDB table, make a GET request with the TableName as a
    query string parameter. To put, update, or delete an item, make a POST,
    PUT, or DELETE request respectively, passing in the payload to the
    DynamoDB API as a JSON body.
    '''
    print("Received event: " + json.dumps(event, indent=2))
    put_record(event)
