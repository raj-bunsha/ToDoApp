import React from 'react'
import {Drawer,Box,Typography,List,ListItem,ListItemButton} from "@mui/material"
import Image from "./Image"
import img from "../img1.jpeg"
const Accounts = ({drawerWidth,backgroundColor}) => {
  return (
    <Drawer anchor='left' variant='permanent' sx={{
      width: "60px",
      "& .MuiDrawer-paper": {
          width: "120px",
          height: '100%',
          position:"relative",
        boxSizing: "border-box",
        backgroundColor:"#d8d8d8",
        marginLeft: "-10px !important",
    },
  }}>

      {/* <Box p={2} textAlign="center" role="presentation">
        <Typography variant='h6' component="div">
          SidePanel
        </Typography>
      </Box> */}
      <List>
            <ListItem disablePadding >
              <ListItemButton >
                <Image src={img} alt="today" style={{width:"30px",height:"30px"}}/>
              </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
  )
}

export default Accounts