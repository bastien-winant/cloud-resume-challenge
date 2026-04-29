import os

import boto3
import pytest
import requests

class TestS3Trigger:

	@pytest.fixture
	def retrieve_stack_bucket(self):
		""" Get the API Gateway URL from Cloudformation Stack outputs """
		stack_name = os.environ.get("AWS_SAM_STACK_NAME")

		if stack_name is None:
			raise ValueError('Please set the AWS_SAM_STACK_NAME environment variable to the name of your stack')

		client = boto3.client("cloudformation")

		try:
			response = client.describe_stacks(StackName=stack_name)
		except Exception as e:
			raise Exception(
				f"Cannot find stack {stack_name} \n" f'Please make sure a stack with the name "{stack_name}" exists'
			) from e

		stacks = response["Stacks"]
		stack_outputs = stacks[0]["Outputs"]
		s3_bucket = stack_outputs.get("BucketName")

		if not s3_bucket:
			raise KeyError(f"Bucket name not found in stack {stack_name} outputs")

		return s3_bucket


	@pytest.fixture
	def create_s3_object(self, retrieve_stack_bucket):
		client = boto3.client('s3')

		try:
			test_data = json.dumps({ 'key1': 'value1', 'key2': 'value2'})\
				.encode("utf-8")

			response = client.put_object(
				Body=test_data,
				Bucket=retrieve_stack_bucket,
				Key="test_data.json"
			)

			return response
		except Exception as e:
			raise Exception(f"Unable to put test data into S3 bucket {retrieve_stack_bucket}.")

	def test_s3_trigger(self, retrieve_stack_bucket):
		assert retrieve_stack_bucket is not None