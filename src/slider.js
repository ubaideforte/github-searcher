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
            width: "80vw",
            height: "100px",
            position: "absolute",
            top: 0,
            zIndex: 400,
          }}
        >
          <MainSlider
            className="se"
            min={0}
            max={144}
            range
            step={1.5}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[3, 18]}
          />

          <SecondSlider
            className="se"
            min={0}
            max={144}
            range
            step={1.5}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[3, 9]}
            color="cyan"
          />

          <SecondSlider
            className="se"
            min={0}
            max={144}
            range
            step={1.5}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[30, 90]}
            onChange={(e) => console.log(e)}
          />

          <ThirdSlider
            className="th"
            min={0}
            max={144}
            range
            step={1.5}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[0, 10]}
            color="magenta"
          />
        </section>
      </div>
    </div>
  );
};

export default SliderComponent;

const marks = {
  0: 0,
  1.5: 1.5,
  3.0: 3.0,
  4.5: 4.5,
  6.0: 6.0,
  7.5: 7.5,
  9.0: 9.0,
  10.5: 10.5,
  12.0: 12.0,
  13.5: 13.5,
  15.0: 15.0,
  16.5: 16.5,
  18.0: 18.0,
  19.5: 19.5,
  21.0: 21.0,
  22.5: 22.5,
  24.0: 24.0,
  25.5: 25.5,
  27.0: 27.0,
  28.5: 28.5,
  30.0: 30.0,
  31.5: 31.5,
  33.0: 33.0,
  34.5: 34.5,
  36.0: 36.0,
  37.5: 37.5,
  39.0: 39.0,
  40.5: 40.5,
  42.0: 42.0,
  43.5: 43.5,
  45.0: 45.0,
  46.5: 46.5,
  48.0: 48.0,
  49.5: 49.5,
  51.0: 51.0,
  52.5: 52.5,
  54.0: 54.0,
  55.5: 55.5,
  57.0: 57.0,
  58.5: 58.5,
  60.0: 60.0,
  61.5: 615,
  63.0: 63.0,
  64.5: 64.5,
  66.0: 66.0,
  67.5: 67.5,
  69.0: 69.0,
  70.5: 70.5,
  72.0: 72.0,
  73.5: 73.5,
  75.0: 75.0,
  76.5: 76.5,
  78.0: 78.0,
  79.5: 79.5,
  81.0: 81.0,
  82.5: 82.5,
  84.0: 84.0,
  85.5: 85.5,
  87.0: 87.0,
  88.5: 88.5,
  90.0: 90.0,
  91.5: 91.5,
  93.0: 93.0,
  94.5: 94.5,
  96.0: 96.0,
  97.5: 97.5,
  99.0: 99.0,
  100.5: 100.5,
  102.0: 102.0,
  103.5: 103.5,
  105.0: 105.0,
  106.5: 106.5,
  108.0: 108.0,
  109.5: 109.5,
  111.0: 111.0,
  112.5: 112.5,
  114.0: 114.0,
  115.5: 115.5,
  117.0: 117.0,
  118.5: 118.5,
  120.0: 120.0,
  121.5: 121.5,
  123.0: 123.0,
  124.5: 124.5,
  126.0: 126.0,
  127.5: 127.5,
  129.0: 129.0,
  130.5: 130.5,
  132.0: 132.0,
  133.5: 133.5,
  135.0: 135.0,
  136.5: 136.5,
  138.0: 138.0,
  139.5: 139.5,
  141.0: 141.0,
  142.5: 142.5,
  144.0: 144.0,
};
