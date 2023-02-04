import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../store/AppState";

interface Props {
  size?: number;
}

const Spinner: React.FC<Props> = ({ size }) => {
  const { theme } = useContext(AppContext);

  const color = theme === "dark" ? "#fff" : "#01192F";

  return (
    <Wrapper>
      <svg
        width={`${size ? size : 60}px`}
        height={`${size ? size : 60}px`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-1.1363636363636362s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(32.72727272727273 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-1.0227272727272727s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(65.45454545454545 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.9090909090909091s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(98.18181818181819 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.7954545454545454s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(130.9090909090909 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.6818181818181818s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(163.63636363636363 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.5681818181818181s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(196.36363636363637 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.45454545454545453s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(229.0909090909091 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.3409090909090909s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(261.8181818181818 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.22727272727272727s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(294.54545454545456 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="-0.11363636363636363s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(327.27272727272725 50 50)">
          <rect
            x="48.5"
            y="24.5"
            rx="0"
            ry="0"
            width="3"
            height="11"
            fill={color}
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.25s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background: transparent;
`;

export default Spinner;
