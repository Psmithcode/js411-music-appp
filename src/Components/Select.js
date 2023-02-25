import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SelectCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection.
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small" sx={{ fontSize: "10px" }}>
            Sound Quality
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Sound Quality"
            onChange={handleChange}
          >
            <MenuItem value={10}>Low Quality</MenuItem>
            <MenuItem value={20}>Medium Quality</MenuItem>
            <MenuItem value={30}>High Quality</MenuItem>
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
}
