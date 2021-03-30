import React from "react";
import styled from "styled-components";
import { Slider } from "antd";

const MainSlider = styled(Slider)`
  .ant-slider-rail {
    color: #fff;
    background-color: #dbdbdb !important;
    border-radius: 0px;
    height: 64px;
  }

  .ant-slider-track {
    height: 64px;
    background-color: #fff !important;
    // z-index: 300;
  }

  .ant-slider-handle {
    cursor: e-resize;
    background-color: transparent;
    border: none;
    border-radius: none !important;
    height: 64px;
  }

  .ant-slider-dot {
    background-color: #b2b2b2;
    color: #b2b2b2;
    border-color: #b2b2b2;
    border-width: 0px;
    width: 1px;
    border-radius: 0;
    height: 64px;
    top: 0;
    margin: 0 !important;
    z-index: 200;
  }

  .ant-slider-mark-text {
    display: none;
  }
`;
export default MainSlider;
