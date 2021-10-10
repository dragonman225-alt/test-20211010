import { useReducer } from "react";

import { Card } from "./components/Card";
import { AppStateContext } from "./store/appStateContext";
import { appStateReducer } from "./store/appStateReducer";
import { defaultAppState } from "./store/defaultAppState";

function App() {
  const [state, dispatch] = useReducer(appStateReducer, defaultAppState);

  return (
    /**
     * For simplicity, I inject `dispatch` to the context so the
     * components can call it.
     *
     * An improvement would be wrapping `dispatch` to a dictionary of
     * commands (functions) and pass it down with another context.
     * 
     * So for example, instead of writing
     *
     * dispatch({ type: ACTION.SWITCH_TO_TAB, data: TAB.ALL })
     * (see src/components/SecondHeader/index.js)
     *
     * in the components, we would write
     *
     * commands.switchToTab(TAB.ALL)
     *
     * , which would call `dispatch` for us and is easier to read.
     */
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      <Card />
    </AppStateContext.Provider>
  );
}

export default App;
