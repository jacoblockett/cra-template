import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  background: hsl(0, 0%, 10%);
  color: hsl(0, 0%, 70%);
`

const Page = ({ id, className, children }) => {
  return (
    <Wrapper id={id} className={className}>
      {children}
    </Wrapper>
  )
}

Page.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Page
