namespace CryptProviderDTO {
  export interface ICryptProvider {
    crypt(data: CryptDTO): CryptResponseDTO;

    compare(data: CompareDTO): CompareResponseDTO;
  }

  export type CryptDTO = string;

  export type CryptResponseDTO = Promise<string>;

  export type CompareDTO = {
    data: string;
    encrypted: string;
  };

  export type CompareResponseDTO = Promise<boolean>;
}

export { CryptProviderDTO };
