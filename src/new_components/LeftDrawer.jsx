import * as React from "react";
import {
  Drawer,
  Box,ListSubheader,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,Collapse,Divider
} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from "./Image";
import StarBorder from '@mui/icons-material/StarBorder';

function LeftDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: "250px",
        "& .MuiDrawer-paper": {
          width: "250px",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          backgroundColor: "#ededed",
        },
      }}
    >
      <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Image src="https://picsum.photos/200/300" alt="profile" />
            </ListItemIcon>
            <ListItemText primary="Raj bunsha" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
        {[["Today",1], ["Tomorrow",5], ["After Tomorrow",7], ["Past",8], ["All",4]].map(
          (text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemText >
                  <Typography display="flex" justifyContent={'space-between'} component='div'>
                    <div>
                      {text[0]}
                    </div>
                    <div>
                      {text[1]}
                    </div>
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          )
        )}
        {/* Add divider */}
        <Divider />
        {[["Todo",1], ["Hobby",3], ["Study",6],["Todo",1], ["Hobby",3], ["Study",6],["Todo",1], ["Hobby",3], ["Study",6],["Todo",1], ["Hobby",3], ["Study",6]].map(
          (text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemText >
                  <Typography display="flex" justifyContent={'space-between'} component='div'>
                    <div>
                      {text[0]}
                    </div>
                    <div>
                      {text[1]}
                    </div>
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <ListItem sx={{position:"fixed",bottom:"0px",width:'300px'}}>
        <ListItemButton>
          <ListItemText primary="Create new List"></ListItemText>
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
}

export default LeftDrawer;
