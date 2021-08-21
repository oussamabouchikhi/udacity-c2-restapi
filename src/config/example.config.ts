export const config = {
  "dev": {
    "username": "YOUR_AWS_RDS_USERNAME",
    "password": "YOUR_AWS_RDS_PASSWORD",
    "database": "YOUR_AWS_RDS_DBNAME",
    "host": "YOUR_AWS_RDS_HOST",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "YOUR_AWS_S3_BUCKET"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "YOUR_JWT_SECRET"
  }
}