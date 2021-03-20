import { Page } from "../components"
import { Link } from "react-router-dom"
import businessCat from "../assets/images/business-cat.png"
import styled from "styled-components"

const Image = styled.img`
  margin-top: 20vh;
  height: 200px;
  width: 200px;
  border-radius: 100%;
  box-shadow: 0 0 15px 2px black;
`

const Title = styled.h2`
  margin-top: 50px;
`

const Home = props => {
  return (
    <Page id="home" className="c-flex align-center">
      <Image src={businessCat} alt="Image of a cat in a suit" />
      <Title>
        Welcome to <Link to="/hell">hell</Link>. Grab a suit and get to work.
      </Title>
    </Page>
  )
}

export default Home
