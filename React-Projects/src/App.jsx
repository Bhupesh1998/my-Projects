import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from './Pages/Dashboard';
import Team from './Pages/team';
import Counter from './React_Projects/01_Conter/Counter';
import TodoList from './React_Projects/02_Todo_list/TodoList';
import ProjectsBox from './global/ProjectsBox';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Counter" element={<Counter />}/>
              {/* <Route path="/TodoList" element={<TodoList />}/>
              <Route path="/team" element={<Team />}/> */}
              <Route path="/project/:ProjectName" element={<ProjectsBox />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
