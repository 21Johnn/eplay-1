import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  gap: 16px;
  margin-left: 40px;
`

export const LinkItem = styled.li``

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
`
