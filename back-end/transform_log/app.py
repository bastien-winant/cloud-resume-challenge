import base64
import json


def lambda_handler(event, context):
	output = []

	for record in event['records']:
		payload = json.loads(base64.b64decode(record['data']).decode('utf-8'))

		try:
			entry = {
				'id': payload['requestContext']['requestId'],
				'source_ip': payload['requestContext']['identity'].get('sourceIp'),
				'user_agent': payload['requestContext']['identity']['userAgent'],
				'request_time': payload['requestContext']['requestTime'],
				'epoch': payload['requestContext']['requestTimeEpoch'],
			}

			output_record = {
				'recordId': record['recordId'],
				'result': 'Ok',
				'data': base64.b64encode(json.dumps(entry).encode('utf-8')).decode('utf-8')
			}
			output.append(output_record)
		except Exception as e:
			raise e

	return {'records': output}