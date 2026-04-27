import json
import logging
import urllib.parse
import boto3

s3 = boto3.client('s3')

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def lambda_handler(event, context):
	# Get the object from the event and show its content type
	bucket = event['Records'][0]['s3']['bucket']['name']
	key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
	try:
		response = s3.get_object(Bucket=bucket, Key=key)

		body = response['Body'].read().decode('utf-8')
		print("CONTENT BODY: " + body)

		return response['ContentType']
	except Exception as e:
		logger.info(
			f'Error getting object {key} from bucket {bucket}. Make sure they exist and your bucket is in the same region as this function.')
		raise e