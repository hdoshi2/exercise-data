import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";


const Footer = () => {
  return (
    <Paper>
      <Tabs value={1} aria-label="simple tabs example">
          <Tab label="Item One"/>
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
    </Paper>
  );
};

export default Footer;
