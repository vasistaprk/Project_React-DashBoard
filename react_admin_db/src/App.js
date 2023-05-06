import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/Global/Topbar";
import Sidebar1 from "./Scenes/Global/Sidebar1";
import DashBoard from "./Scenes/DashBoard";
import {Routes, Route} from "react-router-dom";
import Team from "./Scenes/Team";
// import Invoices from "./Scenes/Invoices";
// import Contacts from "./Scenes/Contacts";
// import Bar from "./Scenes/Bar";
// import Form from "./Scenes/Form";
// import Line from "./Scenes/Line";
// import Pie from "./Scenes/Pie";
// import FAQ from "./Scenes/Freques";
// import Geography from "./Scenes/Geography";
// import Calendar from "./Scenes/Calendar";



function App() {
  const [theme, colorMode] =useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <Sidebar1 />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path = "/" element={<DashBoard />} />
          <Route path = "/Team" element={<Team />} />
          {/* <Route path = "/Invoices" element={<Invoices />} /> */}
          {/* <Route path = "/Contacts" element={<Contacts />} /> */}
          {/* <Route path = "/Form" element={<Form />} /> */}
          {/* <Route path = "/Bar" element={<Bar />} /> */}
          {/* <Route path = "/Line" element={<Line />} /> */}
          {/* <Route path = "/Pie" element={<Pie />} /> */}
          {/* <Route path = "/Freques" element={<FAQ />} /> */}
          {/* <Route path = "/Geograghy" element={<Geography />} /> */}
          {/* <Route path = "/Calendar" element={<Calendar />} /> */}
        </Routes>
      </main>
    </div>;
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
