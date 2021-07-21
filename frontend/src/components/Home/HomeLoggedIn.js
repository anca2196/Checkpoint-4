import bgKanye1 from "../../assets/kanye.jpg"
import styled from "styled-components";
import {LoggedInQuote} from "./LoggedInQuote";
import Title from "../Title/Title";

const LoggedInContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgKanye1}) center/ cover no-repeat;
`

const HomeLoggedIn = () => {
    return(
       <LoggedInContainer>
           <Title text={"Get Inspired"}/>
            <LoggedInQuote/>
       </LoggedInContainer>
    )
}

export default HomeLoggedIn