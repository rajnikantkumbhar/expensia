import "./App.css";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import { useSelector } from "react-redux";

function App() {
  const statex = useSelector((state) => state);

  return (
    <MantineProvider
      theme={{ colorScheme: statex.theme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">{statex.loggedIn ? <AppPage /> : <LoginPage />}</div>
    </MantineProvider>
  );
}

export default App;
