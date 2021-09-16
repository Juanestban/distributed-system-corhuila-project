import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  padding: 10px 10%;
  width: 100%;
  background-color: var(--chakra-colors-gray-800);
  border-bottom: 1px solid var(--chakra-colors-whiteAlpha-300);
  height: 60px;

  z-index: 100;

  & .content-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  & nav ul {
    display: flex;
  }

  & nav ul li {
    list-style: none;
  }
`

export const ContentTitle = styled.div``
