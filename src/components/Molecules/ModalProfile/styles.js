import styled from 'styled-components'

export const FormControl = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid transparent;
  background-color: transparent;
  color: #fff;
  /* outline: 1px red; */
  border-radius: 4px;
  padding: 3px 5px;
  margin-left: 10px;

  &:hover {
    background-color: rgba(45, 55, 120);
  }
`
