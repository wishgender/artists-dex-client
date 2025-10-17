//= Card Component created by Giuxpro
//= https://uiverse.io/Giuxpro/quiet-warthog-95
import React from 'react';
import styled from 'styled-components';


function TradingCard(cardName,imageLink) {
    return (
        <StyledWrapper>
                <img className="card" alt={cardName} src={imageLink+'/low.webp'}></img>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
.card {
    width: 190px;
    height: 254px;
    transition: all 300ms;
    margin: 5px;
  }

  .card:hover {
   transform: scale(1.25);
  }`;

export default TradingCard;
