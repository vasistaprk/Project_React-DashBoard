import { Box } from "@mui/material";
import Header from "../../Components/Header";

const DashBoard=()=>{
    return(
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    >
        <Header title="DASHBOARD" subtitle="Welcome to Admin Dashboard"/>
    </Box>
    )
}

export default DashBoard;