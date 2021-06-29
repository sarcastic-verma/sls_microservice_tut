// event contains - headers, body(as string), param, etc
// ctx contains meta data bout req,
// meta-data(userId from middleware) should be added to context, ideally
const createAuction = async (event, context) => {
    const { title } = JSON.parse(event.body);

    const auction = {
        title,
        createdAt: new Date().toISOString(),
        status: 'OPEN'
    };

    return {
        statusCode: 201,
        body: JSON.stringify(auction), // needs to be a string
    };
}

export const handler = createAuction;


