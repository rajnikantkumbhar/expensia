import "./App.css";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

function App() {
  const themeState = useSelector((state) => state);

  return (
    <MantineProvider
      theme={{ colorScheme: themeState.theme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">
        <LoginPage />
      </div>
    </MantineProvider>
  );
}

export default App;
