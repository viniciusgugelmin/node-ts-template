import { CryptProviderDTO } from "./CryptProviderDTO";
import bcrypt from "bcrypt";

class CryptProvider implements CryptProviderDTO.ICryptProvider {
  constructor(private salt: number) {}

  public async crypt(
    data: CryptProviderDTO.CryptDTO
  ): CryptProviderDTO.CryptResponseDTO {
    return bcrypt.hashSync(data, this.salt);
  }

  public async compare({
    data,
    encrypted
  }: CryptProviderDTO.CompareDTO): CryptProviderDTO.CompareResponseDTO {
    return bcrypt.compareSync(data, encrypted);
  }
}

export { CryptProvider };
