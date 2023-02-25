// import { Select } from "@mui/material";
import React from "react";
import OnlineMode from "./OnlineMode";
import SliderCard from "./Slider";
import SelectCard from "./Select";

export default function Dashboard() {
  return (
    <div style={divStyle}>
      <OnlineMode />
      <SliderCard />
      <SelectCard />
    </div>
  );
}

const divStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "20px",
  gap: "20px",
};
