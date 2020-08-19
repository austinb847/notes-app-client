export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-aws-tutorial-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kcy0aetudc.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_h22tlwys1",
    APP_CLIENT_ID: "5lqlch2g8thqo57u70sc45i8om",
    IDENTITY_POOL_ID: "us-east-2:771537cf-d324-48b8-9eff-1ecd8000d4c8"
  }
};