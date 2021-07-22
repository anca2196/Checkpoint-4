import styled from "styled-components"
import bgKanye1 from "../../assets/kanye.jpg"
import {Quote} from "./Quote"
import whitePhone from "../../assets/white-phone.jpg"
import Title from "../Title/Title"

const HomeContainer = styled.div`
    width: 100%;
    margin-top: -2rem;
    background: url(${bgKanye1}) center/ cover no-repeat;
    scroll-behavior: none;
    
    @media screen and (max-width: 450px){
        background: url(${whitePhone}) center/ cover no-repeat;
    }
`
const QuoteContainer = styled.div` 
    width: 100%;
    height:90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const HomeGuest = () => {
    return (
        <HomeContainer>
            < Title text={ "The Wisdom of Kanye West"}/>
            <QuoteContainer >
                <Quote />
            </QuoteContainer>
        </HomeContainer>
    )
}

export default HomeGuest;