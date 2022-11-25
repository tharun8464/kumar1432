'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! yes tharun you made it',
        input: event,
      },
      null,
      2
    ),
  };
};
