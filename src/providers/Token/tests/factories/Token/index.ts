import { TokenProviderFactory } from "./TokenProviderFactory";
import { environment } from "../../../../../application/environment";

const { JWT_SECRET } = environment;

const tokenProviderFactory = new TokenProviderFactory(JWT_SECRET);

export { tokenProviderFactory };
