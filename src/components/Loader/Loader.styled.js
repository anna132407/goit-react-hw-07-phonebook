import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 102;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100%;
  overflow: hidden;
`;
export const LoaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;