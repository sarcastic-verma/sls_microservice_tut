const hello = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from bruh' }),
    };
}

export const handler = hello;


