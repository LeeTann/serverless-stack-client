export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "leetann-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://irv2uq2k12.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SVH5tJnO9",
    APP_CLIENT_ID: "2jpld5sf664u4o19ch87epptjm",
    IDENTITY_POOL_ID: "us-east-1:ede05b63-667f-4446-b49b-93e2fa0d29f6"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51GtNEWADU1ayliGDjhfLTYYrzJFgrRERLHgswVwz5AxH84WbohQFtWWsk3fT1A7CKmkJKwfWPGfBoyBKAWfHEAFG00xi7bInUl",
};