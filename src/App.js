import * as React from "react";
// import MiniDrawer from "./components/minidrawer";
// import Button from "@mui/material/Button";
// import { Autocomplete } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import PermanentDrawerLeft from "./components/tododrawer";
import Box from "@mui/material/Box";
import Accounts from "./new_components/Accounts";
import LeftDrawer from "./new_components/LeftDrawer";
// import NestedList from "./components/dropdown";
function App() {
  // var top100Films = ['helo'];
  return (
    <div>
      <Box sx={{ display: "flex" ,height:"100vh"}}>
        <Accounts></Accounts>
        <LeftDrawer></LeftDrawer>
      </Box>
      {/* <PermanentDrawerLeft/> */}
    </div>
  );
}

export default App;
