import React from "react";
import styled from "styled-components";

const CallingCodesStyled = styled.div`
  span {
    font-size: 0.8em;
    margin-left: 0.6em;
    display: flex;
  }
  i {
    color: green;
  }
`;

export const CallingCodes = ({ callingCodes }) => {
  return (
    <>
      <CallingCodesStyled>
        {callingCodes.map(
          (item) =>
            item && (
              <span key={item}>
                <i className="fas fa-phone-volume"></i>
                {item}
              </span>
            )
        )}
      </CallingCodesStyled>
    </>
  );
};
