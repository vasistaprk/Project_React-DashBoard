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
        color: colors.grey[2000],
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
                 background: `${colors.grey[100]} !important`,
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
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.blueAccent[500]}>
                  Admin Details
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
            <Item
              title="Dashboard"
              to="../DashBoard"
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
            <Item
              title="Manage Team"
              to="../Team/index.jsx"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="../Contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="../Invoices"
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
            <Item
              title="Profile Form"
              to="../Form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="../Calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
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
            <Item
              title="Bar Chart"
              to="../Bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="../Pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="../Line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="../Geography"
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