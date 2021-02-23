import React from "react";
import {useStyles} from './HomeStyles'

export function Home() {
  const classes = useStyles();
  return(
    <div className={classes.homeContainer}>
      Home
    </div>
  );
}
