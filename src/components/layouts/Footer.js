import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
    margin: 20
  }
});

const Footer = ({ muscles }) => {
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
        <Tab label='ALL' />
        {muscles.map(muscle => <Tab label={muscle} />)}

      </Tabs>
    </Paper>
  );
};
export default Footer;
