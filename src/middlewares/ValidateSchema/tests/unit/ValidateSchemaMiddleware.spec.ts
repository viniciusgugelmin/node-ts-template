import { validateSchemaMiddleware } from "../..";
import { serverMock } from "../../../../application/services/api/Server/tests/mocks/Server";
import { schemaFactory } from "../../../../schemas/tests/factories/Schema";
import { ServerMockDTO } from "../../../../application/services/api/Server/tests/mocks/Server/ServerMockDTO";

afterEach(() => {
  jest.clearAllMocks();
});

describe("ValidateSchemaMiddleware", () => {
  it("should succeed when the schema is valid", () => {
    const body = schemaFactory.generateData({
      name: ""
    });
    const schema = schemaFactory.generateSchema(body);

    const req = serverMock.mockRequest({
      body
    } as ServerMockDTO.MockRequestDTO);
    const res = serverMock.mockResponse({});
    const next = serverMock.mockNext();

    const middleware = validateSchemaMiddleware.handle({
      schema,
      type: "body"
    });

    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it("should fail when the schema is invalid", () => {
    const body = schemaFactory.generateData({
      name: ""
    });
    const fakeBody = schemaFactory.generateData({
      name: 123
    });
    const schema = schemaFactory.generateSchema(body);

    const req = serverMock.mockRequest({
      body: fakeBody
    } as ServerMockDTO.MockRequestDTO);
    const res = serverMock.mockResponse({});
    const next = serverMock.mockNext();

    const middleware = validateSchemaMiddleware.handle({
      schema,
      type: "body"
    });

    middleware(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });
});
