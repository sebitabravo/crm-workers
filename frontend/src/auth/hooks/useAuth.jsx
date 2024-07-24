import * as React from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  return React.useContext(AuthContext);
};
