import styled from 'styled-components'

export const WrapperCamera = styled.div`
  ::root {
    --animations-off: {
      animation: opacity 500ms ease-in-out;
      -moz-animation: opacity 500ms ease-in-out;
      --webkit-animation: opacity 500ms ease-in-out;
    }
    --animations-on: {
      animation: opacity 500ms ease-in-out;
      -moz-animation: opacity 500ms ease-in-out;
      --webkit-animation: opacity 500ms ease-in-out;
    }
  }

  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: transparent;

  &::before {
    background-color: transparent;
  }

  &::after {
    background-color: transparent;
  }

  &:hover {
    &::before {
      position: absolute;
      content: '';
      width: 100px;
      height: 100px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      animation: fadeIn 500ms ease-in-out;
      -moz-animation: fadeIn 500ms ease-in-out;
      --webkit-animation: fadeIn 500ms ease-in-out;

      z-index: -1;
    }

    &::after {
      content: 'change photo';
      position: absolute;
      width: 100px;
      bottom: 15px;
      text-align: center;
      font-size: 11px;
      color: #fff;
      font-weight: bold;
      animation: fadeIn 500ms ease-in-out;
      -moz-animation: fadeIn 500ms ease-in-out;
      --webkit-animation: fadeIn 500ms ease-in-out;

      z-index: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const InputCamera = styled.input`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background-color: transparent;
  opacity: 0;

  z-index: 1;
`
