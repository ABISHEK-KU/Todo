import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./view/Login";
import ProtectedRoute from "./view/ProtectedRoute";
import DashBoard from "./components/DashBoard";
import { ThemeProvider } from "./context/useTheme";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/Layout";
import { Profile } from "./components/Profile";
import { Todo } from "./components/Todo";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<Layout />}>
                  <Route path="/" element={<DashBoard />} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/todo" element={<Todo/>} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
