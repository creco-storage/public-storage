const path = require('path');

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    const url = request.uri;

    const extension = path.extname(url);

    if(extension && extension.length > 0){
        return callback(null, request);
    }

    if (url.endsWith("/")) {
        request.uri = url + 'index.html';
        return callback(null, request);
    }

    const redirect = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: `${url}/`,
            }],
        },
    };
    
    return callback(null, redirect);
};
