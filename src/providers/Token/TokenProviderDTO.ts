namespace TokenProviderDTO {
  export interface ITokenProvider {
    generate(data: GenerateDTO): GenerateTokenResponseDTO;

    verify(data: VerifyDTO): VerifyTokenResponseDTO;
  }

  export interface ITokenPayload {
    id: number;
  }

  export type GenerateDTO = ITokenPayload;

  export type GenerateTokenResponseDTO = Promise<string>;

  export type VerifyDTO = string;

  export type VerifyTokenResponseDTO = Promise<ITokenPayload | { id: null }>;
}

export { TokenProviderDTO };
