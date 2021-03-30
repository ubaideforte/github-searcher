import React from "react";
import { Slider } from "antd";
import "./slider.css";

import MainSlider from "./components/slider/mainSlider";
import SecondSlider from "./components/slider/secondSlider";
import ThirdSlider from "./components/slider/thirdSlider";

const SliderComponent = (props) => {
  return (
    <div style={{ backgroundColor: "tomato" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "block",
            width: "98vw",
            height: "100px",
            position: "absolute",
            top: 0,
            zIndex: 400,
          }}
        >
          <MainSlider
            className="se"
            min={0}
            max={96}
            range
            step={1}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[20, 75]}
          />

          <SecondSlider
            className="se"
            min={0}
            max={96}
            range
            step={1}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[30, 80]}
            color="cyan"
          />

          <SecondSlider
            className="se"
            min={0}
            max={96}
            range
            step={1}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[45, 50]}
            onChange={(e) => console.log(e)}
          />

          <ThirdSlider
            className="th"
            min={0}
            max={96}
            range
            step={1}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[0, 96]}
            color="magenta"
          />
        </section>
      </div>
    </div>
  );
};

export default SliderComponent;

const marks = {
  1: "00:00",
  2: "00:15",
  3: "00:30",
  4: "00:45",
  5: "01:00",
  6: "01:15",
  7: "01:30",
  8: "01:45",
  9: "02:00",
  10: "02:15",
  11: "02:30",
  12: "02:45",
  13: "03:00",
  14: "03:15",
  15: "03:30",
  16: "03:45",
  17: "04:00",
  18: "04:15",
  19: "04:30",
  20: "04:45",
  21: "05:00",
  22: "05:15",
  23: "05:30",
  24: "05:45",
  25: "06:00",
  26: "06:15",
  27: "06:30",
  28: "06:45",
  29: "07:00",
  30: "07:15",
  31: "07:30",
  32: "07:45",
  33: "08:00",
  34: "08:15",
  35: "08:30",
  36: "08:45",
  37: "09:00",
  38: "09:15",
  39: "09:30",
  40: "09:45",
  41: "10:00",
  42: "10:15",
  43: "10:30",
  44: "10:45",
  45: "11:00",
  46: "11:15",
  47: "11:30",
  48: "11:45",
  49: "12:00",
  50: "12:15",
  51: "12:30",
  52: "12:45",
  53: "13:00",
  54: "13:15",
  55: "13:30",
  56: "13:45",
  57: "14:00",
  58: "14:15",
  59: "14:30",
  60: "14:45",
  61: "15:00",
  62: "15:15",
  63: "15:30",
  64: "15:45",
  65: "16:00",
  66: "16:15",
  67: "16:30",
  68: "16:45",
  69: "17:00",
  70: "17:15",
  71: "17:30",
  72: "17:45",
  73: "18:00",
  74: "18:15",
  75: "18:30",
  76: "18:45",
  77: "19:00",
  78: "19:15",
  79: "19:30",
  80: "19:45",
  81: "20:00",
  82: "20:15",
  83: "20:30",
  84: "20:45",
  85: "21:00",
  86: "21:15",
  87: "21:30",
  88: "21:45",
  89: "22:00",
  90: "22:15",
  91: "22:30",
  92: "22:45",
  93: "23:00",
  94: "23:15",
  95: "23:30",
  96: "23:45",
};
