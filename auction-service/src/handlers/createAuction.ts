import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();
// event contains - headers, body(as string), param, etc
// ctx contains meta data bout req,
// meta-data(userId from middleware) should be added to context, ideally
const createAuction = async (event, context) => {
    const { title } = JSON.parse(event.body);

    const auction = {
        id: uuid(),
        title,
        createdAt: new Date().toISOString(),
        status: 'OPEN'
    };

    await dynamoDb
        .put({ TableName: process.env.AUCTIONS_TABLE_NAME, Item: auction }) // weird naming convention
        .promise(); // they use callbacks by def

    return {
        statusCode: 201,
        body: JSON.stringify(auction), // needs to be a string
    };
}

export const handler = createAuction;


