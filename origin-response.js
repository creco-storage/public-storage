const ContentType = {
  ["html"]: "text/html; charset=UTF-8",
  ["js"]: "text/javascript; charset=UTF-8",
  ["css"]: "text/css",
};

const RemoveHeaderList = [
  "x-content-type-options",
  "x-frame-options",
  "x-xss-protection",
  "x-github-request-id",
  "accept-ranges",
  "x-timer",
  "x-fastly-request-id",
  "source-age",
  "alt-svc",
  "content-security-policy",
  "strict-transport-security",
];

exports.handler = async (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const request = event.Records[0].cf.request;

  if(request.headers.host[0].value !== 'www.creco.services') {
    const redirect = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://creco.today/404',
            }],
        },
    };

    return callback(null, redirect);
  }
  
  
  try {
    const headers = response.headers;
    const request = event.Records[0].cf.request;
    const name = "Content-Type";
    const uri = request.uri;
    const type = (() => {
      if (uri.endsWith(".js")) {
        return "js";
      } else if (uri.endsWith(".css")) {
        return "css";
      } else {
        return "html";
      }
    })();

    if (headers[name.toLowerCase()] != null || headers[name] != null) {
      headers[name.toLowerCase()] = [
        {
          key: name,
          value: ContentType[type],
        },
      ];
    }

    for (const name of RemoveHeaderList) {
      delete headers[name];
      delete headers[name.toLowerCase()];
    }
  } catch (error) {
    console.error(error.message);
    console.error(error);
  }

  callback(null, response);
};
