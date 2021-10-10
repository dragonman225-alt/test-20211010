import { useReducer } from "react";

import { Card } from "./components/Card";
import { AppStateContext } from "./store/appStateContext";
import { appStateReducer } from "./store/appStateReducer";
import { defaultAppState } from "./store/defaultAppState";

function App() {
  const [state, dispatch] = useReducer(appStateReducer, defaultAppState);

  return (
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      <Card />
    </AppStateContext.Provider>
  );
}

export default App;
