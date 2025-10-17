//= laz r
//= 09-05-2025 14:05
//= heightComparison.jsx

//= Dependencies =//
import React from "react";
import styled from "styled-components";

//= Styling =//
const HeightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 4rem;          /* space between person & pokemon */
  margin: 2rem 0;     /* breathing room inside cards */
  padding: 1rem;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bar = styled.div`
  width: 60px;
  background: ${(props) => props.color || "#60a5fa"};
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.5rem;
  transition: height 0.6s ease;
`;

const Label = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
  font-family: sans-serif;
  text-align: center;
`;

// === Component ===
const HeightComparison = ({ pokemonName, pokemonHeight, personHeight = 170 }) => {
  // pokemonHeight and personHeight are in cm
  let centimeters = pokemonHeight.metric * 100;
  let inches = pokemonHeight.imperial;
  const maxHeight = Math.max(centimeters, personHeight);
  const scaleFactor = 200 / maxHeight; // scale so tallest is 200px tall

  const pokemonBarHeight = centimeters * scaleFactor;
  const personBarHeight = personHeight * scaleFactor;

  return (
    <HeightContainer>
      <BarWrapper>
        <Bar
          color="#60a5fa"
          style={{ height: `${personBarHeight}px` }}
        >
          👤
        </Bar>
        <Label>Human<br/>({personHeight} cm | 5 ft 7 in)</Label>
      </BarWrapper>

      <BarWrapper>
        <Bar
          color="#4ade80"
          style={{ height: `${pokemonBarHeight}px` }}
        >
          🐉
        </Bar>
        <Label>{pokemonName}<br/>({centimeters} cm | {Math.trunc(Math.round(inches)/12)} ft{(Math.round(inches)%12 != 0) && (' ' + Math.round(inches)%12+' in')})</Label>
      </BarWrapper>
    </HeightContainer>
  );
};

export default HeightComparison;
