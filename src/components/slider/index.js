import { Slider } from "antd";
import styled from "styled-components";

export const SliderWrapper = styled(Slider)`
  .ant-slider-handle {
    cursor: ew-resize;
    // visibility: hidden;
    width: 1px;
    height: 20px;
    background-color: #353d46 !important;
    border: 1px solid #353d46 !important;
    color: #353d46 !important;
    margin: 0 !important;
  }

  .ant-slider-rail {
    background-color: #353d46;
    height: 20px;
    margin-top: 1px;
  }

  .ant-slider-track {
    background-color: #ef3854;
    height: 20px;
  }

  .ant-slider-dot:first-child {
    /* margin-left: 0; */
    // visibility: hidden;
  }
  .ant-slider-dot:last-child {
    /* margin-left: 0; */
    // visibility: hidden;
  }

  .ant-slider-dot {
    background-color: black;
    height: 24px;
    width: 1px;
    margin-top: -8px;
    margin-left: 0;
    left: 4px;
    border: black;
  }

  &.ant-slider:hover {
    .ant-slider-rail {
      background-color: #353d46;
    }

    .ant-slider-track {
      background-color: #ef3854;
    }
  }
`;
