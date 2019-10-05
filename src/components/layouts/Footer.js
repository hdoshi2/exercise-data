import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
    margin: 20
  }
});

const Footer = () => {
  let classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        value={0}
        // onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        padding="40px"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};
export default Footer;
