# Severless with graphql, dynamoDB example

## Stack

- Node
  (https://nodejs.org/)

- Serverless
  (https://serverless.com/)

- Graph QL
  (https://graphql.org/)

- DynamoDB
  (https://aws.amazon.com/dynamodb/)

## Serverless Plugins

- ecma script template

  `sls create --template aws-nodejs-ecma-script --path dev-pro-sls`

- serverless-offline

  `npm install --save-dev serverless-offline`

  `sls offline start`

- serverless-dynamodb-local

  `npm install --save-dev serverless-dynamodb-local`

  `sls dynamodb install`

## TODO

- [x] ES6,7
- [x] apollo
- [ ] prisma
- [ ] typescript
- [ ] test code
- [ ] RDS (mysql or postgre)
