import styled from "styled-components";

const TitleContainer = styled.div`
    margin: 2rem auto;
    font-size: 4rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Title = ({text}) => {
    return(
        <TitleContainer>{text}</TitleContainer>
    )
}

export default Title;