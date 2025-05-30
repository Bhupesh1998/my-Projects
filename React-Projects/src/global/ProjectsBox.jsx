import React from "react";
import { Box } from "@mui/material";
import Projects from "../components/Projects";

function ProjectsBox() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="center" alignItems="center" textAlign="center">
        <Projects />
      </Box>
    </Box>
  );
}

export default ProjectsBox;
