const path = require('path')

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    if(request.headers.host[0].value !== 'www.creco.services') {
      const redirect = {
          status: '302',
          statusDescription: 'Bad Request',
          headers: {
              location: [{
                  key: 'Found',
                  value: 'https://creco.today/404',
              }],
          },
      };

      return callback(null, redirect);
    }

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
