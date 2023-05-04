import { useState } from "react";
import {Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {Link} from "react-router-dom";
import { tokens } from "../../theme";
import {HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined} from "@mui/icons-material";
import {CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined} from "@mui/icons-material";
import {TimelineOutlined, MenuOutlined, MapOutlined} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[300],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const Sidebar1=()=>{
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const [isCollapsed, setIsCollapsed] = useState(false);
     const [selected, setSelected] = useState("DashBoard");
     return (
          <Box
          sx={{
               "& .pro-sidebar-inner": {
                 background: `${colors.primary[100]} !important`,
               },
               "& .pro-icon-wrapper": {
                 backgroundColor: "transparent !important",
               },
               "& .pro-inner-item": {
                 padding: "5px 35px 5px 20px !important",
               },
               "& .pro-inner-item:hover": {
                 color: "#868dfb !important",
               },
               "& .pro-menu-item.active": {
                 color: "#6870fa !important",
               },
             }}
             
          >
          <Sidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[500]}>
                  ADMIN IS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpeg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.blueAccent[600]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  P.R.K.VASISTA
                </Typography>
                <Typography variant="h4" color={colors.greenAccent[700]}>
                  DATABASE ADMIN
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <MenuItem
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <MenuItem
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <MenuItem
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItem
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          </Menu>
          </Sidebar>
          </Box>

     );
}

export default Sidebar1;