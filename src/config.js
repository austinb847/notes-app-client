const dev = {
  STRIPE_KEY: "pk_test_51HHXNzFLedMKqreJKsRCAOjKrtofYitKl4Rtyj5iqGU8VnNJleD1Q1ivTzlBVos8e1g9JhRiugNF3iL3epF8vkUO002kPihVb0",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1iplphylu9jcb"
  },
  apiGateway: {
    REGION: "YOUR_DEV_API_GATEWAY_REGION",
    URL: "https://0rx1g44153.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PGrq2A9zW",
    APP_CLIENT_ID: "7r57gpt0fs6c2lik6m416ukvq5",
    IDENTITY_POOL_ID: "us-east-2:cfb2571e-e622-4d6b-83de-85127980b4fd"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HHXNzFLedMKqreJKsRCAOjKrtofYitKl4Rtyj5iqGU8VnNJleD1Q1ivTzlBVos8e1g9JhRiugNF3iL3epF8vkUO002kPihVb0",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-cauqijbtr7hr"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hwqsi23gq0.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_JujZLMjFm",
    APP_CLIENT_ID: "7usrlhh04q4l9bdv6u01nhpmi5",
    IDENTITY_POOL_ID: "us-east-2:aa6ac710-66c7-4159-8a96-0b7dc7ef8ed4"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};