import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function SliderCard(props) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sound settings in this application.
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          aria-label="Small steps"
          defaultValue={3}
          //   getAriaValueText={valuetext}
          step={1}
          marks
          min={0}
          max={10}
          valueLabelDisplay="autoS"
          style={{ margin: "20px" }}
          onChange={(event) => {
            props.setVolume(event.target.value);
          }}
        />
      </CardActions>
    </Card>
  );
}
