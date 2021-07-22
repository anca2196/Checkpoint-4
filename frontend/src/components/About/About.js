import styled from "styled-components"
import kanye2 from "../../assets/kanye-about.jpeg"


const AboutContainer = styled.div` 
    background: url(${kanye2}) center/ cover no-repeat;
    width: 100%;
    height: 100vh;
    margin-top: -.2rem;
    text-align: left;

    h1{
        width: 20%;
        padding-top: 5rem;
        padding-left: 5rem;
        font-weight: 700;
        font-size: 4rem;
        color:#D93B3B;
    }

`

const About = () => {
    return (
        < AboutContainer> 
            <h1> He is who he is.</h1>
        </AboutContainer>
    )
}

export default About;