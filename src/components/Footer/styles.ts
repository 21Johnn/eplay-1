import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
`
export const Title = styled.h4`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

export const Link = styled.a`
  color: #a3a3a3;
  text-decoration: none;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
