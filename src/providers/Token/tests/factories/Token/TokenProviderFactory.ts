import { TokenProviderFactoryDTO } from "./TokenProviderFactoryDTO";
import { sign } from "jsonwebtoken";
import { TokenProviderDTO } from "../../../TokenProviderDTO";

class TokenProviderFactory implements TokenProviderFactoryDTO.ITokenProvider {
  constructor(private readonly secret: string) {}

  async generate({
    id
  }: TokenProviderDTO.GenerateDTO): TokenProviderDTO.GenerateTokenResponseDTO {
    return sign({ id }, this.secret, {
      expiresIn: "30d"
    });
  }
}

export { TokenProviderFactory };
