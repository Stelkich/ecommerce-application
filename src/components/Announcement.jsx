import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: #b800b8;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>Browse awesome items on affordable cost! Free delivery over 50BGN</Container>
  )
}

export default Announcement