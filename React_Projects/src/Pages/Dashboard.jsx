import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useNavigate } from "react-router-dom";
import { tokens } from "../theme";
import Header from "../components/Header";
import StatBox from "../components/StatBox";
import { projectCards } from "../utilities/projectLIstCards";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleStatBoxClick = (routeName) => {
    console.log("routeName",routeName);
    
    navigate(`/project/${routeName}`);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="REACT" subtitle="projects for showcase my knowledge" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          onClick={() => handleStatBoxClick("Counter")}
        >
          <StatBox
            title="Counter App"
            subtitle="by React js"
            // progress="0.75"
            increase="+100%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          onClick={() => handleStatBoxClick("TodoList")}
        >
          <StatBox
            title="TodoList App"
            subtitle="by React js"
            // progress="0.75"
            increase="+100%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box> */}

{projectCards.map(({ route, title, subtitle, icon }, index) => (
          <Box
            key={index}
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => handleStatBoxClick(route)}
          >
            <StatBox
              title={title}
              subtitle={subtitle}
              increase="+100%"
              icon={React.cloneElement(icon, {
                sx: { color: colors.greenAccent[600], fontSize: 26 },
              })}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
