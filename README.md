# webService
Cloud based episodes service

## project structure

    ├── README.md # Start here
    ├── .gitignore
    ├── .eslintrc.js
    ├── babel.config.js
    ├── jest.config.js
    ├── src # source code
    ├── __mock__ # mock data
    ├── __test__  # test files
    ├── serverless.yml # serverless config

## setup
```bash
  # Install serverless framework
  npm install -g serverless

  # configure AWS
  aws configure

  # Install dependencies
  yarn install
```

## deploy
web service is hosted on AWS, using api gateway and lambda
```bash
  yarn deploy:dev
```

## test
```bash
  yarn test
```

## CI
using github action to implement CI.
.github/workflows/ci.yml