import { Request, Response } from "express";
import { ServerMockDTO } from "./ServerMockDTO";

class ServerMock implements ServerMockDTO.IServerMock {
  public mockRequest(data: ServerMockDTO.MockRequestDTO) {
    const req = {
      body: {},
      params: {},
      query: {}
    } as Request;

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        req[key] = data[key];
      }
    }

    return req;
  }

  public mockResponse({
    status = jest.fn().mockReturnThis(),
    sendStatus = jest.fn().mockReturnThis(),
    json = jest.fn().mockReturnThis(),
    send = jest.fn().mockReturnThis()
  }: ServerMockDTO.MockResponseDTO) {
    return {
      status,
      sendStatus,
      json,
      send
    } as Response;
  }

  public mockNext() {
    return jest.fn();
  }
}

export { ServerMock };
