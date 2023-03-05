// import { Select } from "@mui/material";
import React, { useState } from "react";
import OnlineMode from "./OnlineMode";
import SliderCard from "./Slider";
import SelectCard from "./Select";

export default function Dashboard() {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(3);
  const [quality, setQuality] = useState(1);
  const [notifications, setNotifications] = useState([]);
  return (
    <div>
      <div style={divStyle}>
        <OnlineMode setOnline={setOnline} online={online} />
        <SliderCard setVolume={setVolume} volume={volume} />
        <SelectCard setQuality={setQuality} quality={quality} />
      </div>
      <div style={divStyle2}>
        <h2>Notifcations</h2>
        {online === false && (
          <p>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </p>
        )}
        {volume >= 7 && (
          <p>
            Listening to music at a high volume could cause long-term hearing
            loss.
          </p>
        )}
        {quality === 10 && (
          <p>
            Music quality is degraded. Increase quality if your connection
            allows it.
          </p>
        )}
      </div>
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

const divStyle2 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "20px",
};
