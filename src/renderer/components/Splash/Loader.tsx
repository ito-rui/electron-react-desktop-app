/* eslint max-len: off */

import type { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg`
    display: block;
    width: 9.375em;
    height: 9.375em;
`;

const arrowsAnimation = keyframes`
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(405deg);
  }
`;

const ringRotateAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(720deg);
  }
`;

const ringStrokeAnimation = keyframes`
  from,
  to {
    stroke-dashoffset: 452;
    transform: rotate(-45deg);
  }

  50% {
    stroke-dashoffset: 169.5;
    transform: rotate(-180deg);
  }
`;

const tickAnimation = keyframes`
  from,
  3%,
  47%,
  to {
    stroke-dashoffset: -12;
  }

  14%,
  36% {
    stroke-dashoffset: 0;
  }
`;

const Pl = styled.g`
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;

const Arrows = styled.g`
    animation-name: ${arrowsAnimation};
    transform: rotate(45deg);
    transform-origin: 16px 52px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const RingRotate = styled.g`
    transform-origin: 80px 80px;
    animation-name: ${ringRotateAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const RingStroke = styled.circle`
    transform-origin: 80px 80px;
    animation-name: ${ringStrokeAnimation};
    transform: rotate(-45deg);
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const Tick = styled.polyline`
    animation-name: ${tickAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

const Loader: FC = () => {
    return (
        <Svg viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000" />
                    <stop offset="100%" stopColor="#fff" />
                </linearGradient>
                <mask id="mask1">
                    <rect x="0" y="0" width="160" height="160" fill="url(#grad)" />
                </mask>
                <mask id="mask2">
                    <rect x="28" y="28" width="104" height="104" fill="url(#grad)" />
                </mask>
            </defs>
            <Pl>
                <RingRotate className="pl__ring-rotate">
                    <RingStroke
                        className="pl__ring-stroke"
                        cx="80"
                        cy="80"
                        r="72"
                        fill="none"
                        stroke="hsl(223,90%,55%)"
                        strokeWidth="16"
                        strokeDasharray="452.39 452.39"
                        strokeDashoffset="452"
                        strokeLinecap="round"
                        transform="rotate(-45,80,80)"
                    />
                </RingRotate>
            </Pl>
            <g mask="url(#mask1)">
                <RingRotate className="pl__ring-rotate">
                    <RingStroke
                        className="pl__ring-stroke"
                        cx="80"
                        cy="80"
                        r="72"
                        fill="none"
                        stroke="hsl(193,90%,55%)"
                        strokeWidth="16"
                        strokeDasharray="452.39 452.39"
                        strokeDashoffset="452"
                        strokeLinecap="round"
                        transform="rotate(-45,80,80)"
                    />
                </RingRotate>
            </g>
            <g>
                <g
                    strokeWidth="4"
                    strokeDasharray="12 12"
                    strokeDashoffset="12"
                    strokeLinecap="round"
                    transform="translate(80,80)"
                >
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(-135,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(-90,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(-45,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(0,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(45,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(90,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(135,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,10%,90%)"
                        points="0,2 0,14"
                        transform="rotate(180,0,0) translate(0,40)"
                    />
                </g>
            </g>
            <g mask="url(#mask1)">
                <g
                    strokeWidth="4"
                    strokeDasharray="12 12"
                    strokeDashoffset="12"
                    strokeLinecap="round"
                    transform="translate(80,80)"
                >
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(-135,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(-90,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(-45,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(0,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(45,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(90,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(135,0,0) translate(0,40)"
                    />
                    <Tick
                        className="pl__tick"
                        stroke="hsl(223,90%,80%)"
                        points="0,2 0,14"
                        transform="rotate(180,0,0) translate(0,40)"
                    />
                </g>
            </g>
            <g>
                <g transform="translate(64,28)">
                    <Arrows className="pl__arrows" transform="rotate(45,16,52)">
                        <path
                            fill="hsl(3,90%,55%)"
                            d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                        />
                        <path
                            fill="hsl(223,10%,90%)"
                            d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                        />
                    </Arrows>
                </g>
            </g>
            {/* <g mask="url(#mask2)"> */}
            {/*     <g transform="translate(64,28)"> */}
            {/*         <g className="pl__arrows" transform="rotate(45,16,52)"> */}
            {/*             <path */}
            {/*                 fill="hsl(333,90%,55%)" */}
            {/*                 d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z" */}
            {/*             /> */}
            {/*             <path */}
            {/*                 fill="hsl(223,90%,80%)" */}
            {/*                 d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z" */}
            {/*             /> */}
            {/*         </g> */}
            {/*     </g> */}
            {/* </g> */}
        </Svg>
    );
};

export default Loader;
