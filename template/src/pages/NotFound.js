import { Page } from "../components"
import styled from "styled-components"

const Pop = styled.h1`
  font-weight: 200;
  font-size: 15em;
  color: #e40b20;
  margin-top: 20vh;
`

const NotFound = props => {
  return (
    <Page id="not-found" className="c-flex align-center">
      <Pop>404</Pop>
      <h2>Sucks to be you</h2>
    </Page>
  )
}

export default NotFound
