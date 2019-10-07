import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
    margin: 20
  }
});

const Footer = ({ muscles, onSelect, category }) => {
  let classes = useStyles();
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0
  console.log('index', index)
  const onIndexSelect = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1])

  return (
    <Paper className={classes.root}>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
        padding="40px"
      >
        <Tab label='ALL' />
        {muscles.map(muscleGroup => <Tab label={muscleGroup} key={muscleGroup} />)}
      </Tabs>
    </Paper>
  );
};
export default Footer;
