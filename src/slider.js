import React from "react";
import { Slider } from "antd";
import "./slider.css";

const SliderComponent = (props) => {
  return (
    <>
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
            position: "absolute",
            zIndex: 400,
            height: "100px",
          }}
        >
          <Slider
            min={0}
            max={210}
            step={15}
            marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[0, 0]}
          />
        </section>

        <section
          style={{
            display: "block",
            width: "80vw",
            height: "100px",
            position: "absolute",
            zIndex: 500,
          }}
        >
          <Slider
            className="se"
            min={0}
            max={210}
            range
            // step={15}
            // marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[30, 90]}
          />

          <Slider
            className="th"
            min={0}
            max={210}
            step={15}
            // marks={marks}
            range={{ draggableTrack: true }}
            defaultValue={[60, 120]}
          />
        </section>
      </div>
    </>
  );
};

export default SliderComponent;

const marks = {
  0: 0,
  15: 15,
  30: 30,
  45: 45,
  60: 60,
  75: 75,
  90: 90,
  105: 105,
  120: 120,
  135: 135,
  150: 150,
  165: 165,
  180: 180,
  195: 195,
  210: 210,
  // 225: 225,
  // 240: 240,
  // 255: 255,
  // 270: 270,
  // 285: 285,
  // 300: 300,
  // 315: 315,
  // 330: 330,
  // 345: 345,
  // 360: 360,
  // 375: 375,
  // 390: 390,
  // 405: 405,
  // 420: 420,
  // 435: 435,
  // 450: 450,
  // 465: 465,
  // 480: 480,
  // 495: 495,
  // 510: 510,
  // 525: 525,
  // 540: 540,
  // 555: 555,
  // 570: 570,
  // 585: 585,
  // 600: 600,
  // 615: 615,
  // 630: 630,
  // 645: 645,
  // 660: 660,
  // 675: 675,
  // 690: 690,
  // 705: 705,
  // 720: 720,
  // 735: 735,
  // 750: 750,
  // 765: 765,
  // 780: 780,
  // 795: 795,
  // 810: 810,
  // 825: 825,
  // 840: 840,
  // 855: 855,
  // 870: 870,
  // 885: 885,
  // 900: 900,
  // 915: 915,
  // 930: 930,
  // 945: 945,
  // 960: 960,
  // 975: 975,
  // 990: 990,
  // 1005: 1005,
  // 1020: 1020,
  // 1035: 1035,
  // 1050: 1050,
  // 1065: 1065,
  // 1080: 1080,
  // 1095: 1095,
  // 1110: 1110,
  // 1125: 1125,
  // 1140: 1140,
  // 1155: 1155,
  // 1170: 1170,
  // 1185: 1185,
  // 1200: 1200,
  // 1215: 1215,
  // 1230: 1230,
  // 1245: 1245,
  // 1260: 1260,
  // 1275: 1275,
  // 1290: 1290,
  // 1305: 1305,
  // 1320: 1320,
  // 1335: 1335,
  // 1350: 1350,
  // 1365: 1365,
  // 1380: 1380,
  // 1395: 1395,
  // 1410: 1410,
  // 1425: 1425,
  // 1440: 1440,
};
