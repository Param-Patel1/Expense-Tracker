import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
    const classes = useStyles();
  return (
  <div>
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Param"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance $100</Typography>
            <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                Try Saying: Demo Sentence
            </Typography>
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid items xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  </div>
);
};

export default Main;
