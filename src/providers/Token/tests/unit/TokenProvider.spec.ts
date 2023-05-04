import { tokenProvider } from "../..";
import { tokenProviderFactory } from "../factories/Token";

describe("TokenProvider", () => {
  it("should generate a token", async () => {
    const token = await tokenProvider.generate({
      id: 1
    });

    expect(token).toBeTruthy();
  });

  it("should verify a token", async () => {
    const id = 1;
    const token = await tokenProviderFactory.generate({
      id
    });

    const decodedToken = await tokenProvider.verify(token);

    expect(decodedToken.id).toBe(id);
  });

  it("should return id null if token is invalid", async () => {
    const id = 1;
    const token = await tokenProviderFactory.generate({
      id
    });

    const decodedToken = await tokenProvider.verify(`${token}invalid`);

    expect(decodedToken.id).toBe(null);
  });
});
