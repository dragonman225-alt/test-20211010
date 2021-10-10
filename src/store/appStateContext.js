import { createContext } from "react";

import { defaultAppState } from "./defaultAppState";

export const AppStateContext = createContext(defaultAppState);
