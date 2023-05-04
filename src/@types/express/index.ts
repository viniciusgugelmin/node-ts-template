import { User } from "../../entities";
import { Request } from "express";

namespace ExpressCustomTypes {
  export type AuthenticatedRequest = {
    user?: User;
  } & Request;
}

export { ExpressCustomTypes };
