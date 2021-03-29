import styled from "styled-components";
import { Slider } from "antd";

const ThirdSlider = styled(Slider)`
  .ant-slider-rail {
    display: none;
  }

  .ant-slider-track {
    height: 12px;
    background-color: ${(props) =>
      props.color ? props.color + " !important" : "yellow !important"};
    z-index: 300;
  }

  .ant-slider-handle {
    cursor: e-resize;
    background-color: transparent;
    border: none;
    border-radius: none !important;
    height: 12px;
  }

  .ant-slider-dot {
    // background-color: #000;
    // color: #000;
    // border-color: #000;
    // border-width: 0px;
    // width: 1px;
    // border-radius: 0;
    // height: 64px;
    // top: 0;
    // margin: 0 !important;
    // z-index: 200;
    display: none;
  }

  .ant-slider-mark-text {
    display: none;
  }
`;
export default ThirdSlider;
