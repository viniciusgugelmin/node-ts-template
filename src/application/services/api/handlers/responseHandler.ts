type ResponseHandlerDTO = {
  message: string;
  statusCode?: number;
  data?: Object | Array<Object>;
};

type ResponseHandlerResponse = {
  message: string;
  status: string;
  statusCode: number;
  data: Object | Array<Object>;
};

function responseHandler({
  message,
  statusCode = 200,
  data = {}
}: ResponseHandlerDTO): ResponseHandlerResponse {
  const response: ResponseHandlerResponse = {
    message,
    status: "",
    statusCode,
    data
  };

  if (statusCode >= 500) {
    response.status = "INTERNAL_SERVER_ERROR";
  } else if (statusCode >= 400) {
    response.status = "BAD_REQUEST";
  } else if (statusCode >= 300) {
    response.status = "REDIRECT";
  } else if (statusCode >= 200) {
    response.status = "OK";
  } else {
    response.status = "UNKNOWN";
  }

  return response;
}

export { responseHandler };
