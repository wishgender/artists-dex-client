//= laz r
//= 09-05-2025 13:52
//= weightScale.jsx

//= Dependencies =//
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

//= Animations =//
const swingBeam = keyframes`
  0%   { transform: rotate(0deg); }
  20%  { transform: rotate(6deg); }
  40%  { transform: rotate(-4deg); }
  60%  { transform: rotate(2deg); }
  80%  { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`;

const swingPan = keyframes`
  0%   { transform: rotate(0deg); }
  20%  { transform: rotate(-5deg); }
  40%  { transform: rotate(4deg); }
  60%  { transform: rotate(-2deg); }
  80%  { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
`;

//= Styling =//
const ScaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;   /* vertical padding around the whole scale */
  padding: 1rem;    /* inner padding so nothing touches edges */
`;

const Pole = styled.div`
  width: 8px;
  height: 64px;
  background: #444;
  position: relative;
  z-index: 0;
`;

const Beam = styled.div`
  width: 256px;
  height: 8px;
  background: #666;
  position: relative;
  transform-origin: center;
  z-index: 10;
  transition: transform 0.6s cubic-bezier(0.25, 1.25, 0.5, 1);
  animation: ${swingBeam} 1s ease-out;
`;

const Pivot = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 40px solid #444;
`;

const PanContainer = styled.div`
  position: absolute;
  top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top;
  animation: ${swingPan} 1s ease-out;

  &.left {
    left: -40px;
  }
  &.right {
    right: -40px;
  }
`;

const Chain = styled.div`
  width: 2px;
  background: #555;
  transition: height 0.6s ease;
`;

const Pan = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 0 0 50% 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s cubic-bezier(0.25, 1.25, 0.5, 1);

  &.person {
    background: #60a5fa;
  }
  &.pokemon {
    background: #4ade80;
  }
`;

const Labels = styled.p`
  margin-bottom: 2rem;
  font-family: sans-serif;
  font-size: 14px;
`;

//= Component =//
const WeightScale = ({ pokemonName, pokemonWeight, personWeight = 68 }) => {
  const [animateKey, setAnimateKey] = useState(0);
  const kilograms = pokemonWeight.metric;
  const pounds = pokemonWeight.imperial;
  useEffect(() => {
    setAnimateKey((k) => k + 1);
  }, [kilograms, personWeight]);

  // ratio of difference (-1 to 1)
  const diffRatio =
    (kilograms - personWeight) / Math.max(kilograms, personWeight);
  const maxTilt = 25; // max degrees of tilt
  const tilt = diffRatio * maxTilt;

  // === Chain length adjustment ===
  const baseChainLength = 32;
  const extraChain = Math.min(20, Math.abs(diffRatio) * 30); // stretch a bit on extremes
  const personChainLength =
    diffRatio < 0 ? baseChainLength + extraChain : baseChainLength;
  const pokemonChainLength =
    diffRatio > 0 ? baseChainLength + extraChain : baseChainLength;

  // Bounce effect (squash/stretch)
  const personScale = diffRatio < 0 ? 0.9 : 1.05;
  const pokemonScale = diffRatio > 0 ? 0.9 : 1.05;

  return (
    <ScaleContainer>
      <Labels>
        Human: {personWeight} kg/150 lbs | {pokemonName}: {kilograms} kg/{Math.round(pounds)} lbs
      </Labels>
      <Pole />
      <Beam key={animateKey} style={{ transform: `rotate(${tilt}deg)` }}>
        {/* Left Pan */}
        <PanContainer className="left">
          <Chain style={{ height: `${personChainLength}px` }} />
          <Pan
            className="person"
            style={{ transform: `scaleY(${personScale})` }}
          >
            👤
          </Pan>
        </PanContainer>

        {/* Right Pan */}
        <PanContainer className="right">
          <Chain style={{ height: `${pokemonChainLength}px` }} />
          <Pan
            className="pokemon"
            style={{ transform: `scaleY(${pokemonScale})` }}
          >
            🐉
          </Pan>
        </PanContainer>
      </Beam>
      <Pivot />
    </ScaleContainer>
  );
};

export default WeightScale;
