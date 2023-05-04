import { environment } from "../../application/environment";
import { TokenProvider } from "./TokenProvider";

const { JWT_SECRET } = environment;

const tokenProvider = new TokenProvider(JWT_SECRET);

export { tokenProvider };
