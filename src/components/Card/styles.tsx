import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(5, 5, 5, 0.8);
  border-top: 20px solid rgba(202, 202, 202, 0.4);
  cursor: grab;
  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }
  p {
    font-weight: 500;
    line-height: 20px;
    color: #0f0f0f;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 2rem;
    margin-top: 5px;
  }
  ${props => props.isDragging && css`
    border: 2px dashed #DD6B20;
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    p, img, header {
      opacity: 0;
    }
  `}
`;

;