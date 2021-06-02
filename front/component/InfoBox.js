import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default function InfoBox() {
  return (
    <Grid item xs={2}>
      <Card>
        <CardMedia
          image="./weather.jpg"
          title="Weather-image"
          style={{ height: 120 }}
        />

        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            2021.05.22
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            13:04 맑음
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
