import React from "react";
// import { Provider } from "react-redux";

// import { store, persistor } from "./store";
import RouteManager from "./RouteManager";
// import { PersistGate } from "redux-persist/lib/integration/react";

const App = (props) => {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <RouteManager />
    // </PersistGate>
    // </Provider>
  );
};

export default App;
