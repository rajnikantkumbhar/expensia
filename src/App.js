import "./App.css";
import { MantineProvider } from "@mantine/core";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
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
