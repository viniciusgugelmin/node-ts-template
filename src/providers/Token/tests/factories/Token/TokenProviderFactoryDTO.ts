import { TokenProviderDTO } from "../../../TokenProviderDTO";

namespace TokenProviderFactoryDTO {
  export interface ITokenProvider {
    generate(
      data: TokenProviderDTO.GenerateDTO
    ): TokenProviderDTO.GenerateTokenResponseDTO;
  }
}

export { TokenProviderFactoryDTO };
