import { Request, Response } from "express";

namespace ServerMockDTO {
  export interface IServerMock {
    mockRequest(data: MockRequestDTO): MockRequestResponseDTO;

    mockResponse(data: ServerMockDTO.MockResponseDTO): MockResponsResponseDTO;

    mockNext(): MockNextResponseDTO;
  }

  export interface IRequestBody {
    [key: string]: any;
  }

  export interface IRequestParams {
    [key: string]: any;
  }

  export interface IRequestQuery {
    [key: string]: any;
  }

  export type MockRequestDTO = {
    body?: IRequestBody;
    params?: IRequestParams;
    query?: IRequestQuery;
  };

  export type MockRequestResponseDTO = Request;

  export type MockResponseDTO = {
    status?: (code: number) => MockResponseDTO;
    sendStatus?: (code: number) => MockResponseDTO;
    json?: (data: any) => MockResponseDTO;
    send?: (data: any) => MockResponseDTO;
  };

  export type MockResponsResponseDTO = Response;

  export type MockNextResponseDTO = () => void;
}

export { ServerMockDTO };
