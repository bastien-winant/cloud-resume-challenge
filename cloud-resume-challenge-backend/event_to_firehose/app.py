import json
import logging
import random
from datetime import datetime, timedelta

import backoff
import boto3

delivery_stream_name = "cloud-resume-visitor-log-delivery-stream"
region = "eu-central-1"

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

firehose = boto3.client("firehose", region_name=region)

@backoff.on_exception(backoff.expo, Exception, max_tries=5, jitter=backoff.full_jitter)
def put_record(record: dict) -> dict:
	"""
	Put individual records to Firehose with backoff and retry.

	Args:
		record (dict): The data record to be sent to Firehose.

	This method attempts to send an individual record to the Firehose delivery stream.
	It retries with exponential backoff in case of exceptions.
	"""
	try:
		entry: dict = _create_record_entry(record)
		response: dict = firehose.put_record(DeliveryStreamName=delivery_stream_name, Record=entry)
		_log_response(response, entry)
		return { 'response': response }
	except Exception:
		logger.info(f"Fail record: {record}.")
		raise

def _create_record_entry(record: dict) -> dict:
	"""
	Create a record entry for Firehose.

	Args:
		record (dict): The data record to be sent.

	Returns:
		dict: The record entry formatted for Firehose.

	Raises:
		Exception: If a simulated network error occurs.
	"""
	if random.random() < 0.2:
		raise Exception("Simulated network error")
	elif random.random() < 0.1:
		return {"Data": '{"malformed": "data"'}

	return {"Data": json.dumps(record)}

def _log_response(response: dict, entry: dict):
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


def lambda_handler(event, context):
	result = put_record(event)
	return result
