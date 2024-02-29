// Import necessary dependencies
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import useSettings from "./components/hooks/useSettings";
import { createCustomTheme } from "./theme";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import ProjectManagementV2 from "./pages/dashboard/project-management-v2";
import RTL from "./components/RTL";
import "./i18n";
const App = () => {
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <RTL>
            <DashboardLayout>
              <ProjectManagementV2 />
            </DashboardLayout>
          </RTL>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

// Export the App component as default
export default App;
