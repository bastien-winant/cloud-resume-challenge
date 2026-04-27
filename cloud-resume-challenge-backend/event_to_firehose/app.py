import json
import logging
import random
from datetime import datetime, timedelta

import backoff
import boto3

delivery_stream_name = "ENTER YOUR DELIVERY STREAM NAME HERE"
region = "eu-central-1"
firehose = boto3.client("firehose", region_name=region)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@backoff.on_exception(backoff.expo, Exception, max_tries=5, jitter=backoff.full_jitter)
def put_record(record: dict):
	"""
	Put individual records to Firehose with backoff and retry.

	Args:
			record (dict): The data record to be sent to Firehose.

	This method attempts to send an individual record to the Firehose delivery stream.
	It retries with exponential backoff in case of exceptions.
	"""
	try:
		entry = _create_record_entry(record)
		response = firehose.put_record(DeliveryStreamName=delivery_stream_name, Record=entry)
		_log_response(response, entry)
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
