import styled from "styled-components";
import { useState, useEffect } from "react";

const QuoteCard = styled.div` 
    width: 65%;
    min-height: 30%;
    background: rgba( 148, 18, 18, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    color: white;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    position:relative;
    top:-10rem;
    align-items: center;
    font-size: 2rem;
    font-style: italic;
    text-align: center;

    @media screen and (max-width: 450px){
        top:-15rem;
    }
`
const QuoteContainer = styled.div` 
    width: 100%;
    height:90vh;
    display: flex;
    flex-direction: {loggedIn ? };
    justify-content: center;
    align-items: center;
`

export const Quote = () => {
const [kanyeQuote, setKanyeQuote] = useState(null)

const getKanyeQuote = () => {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => setKanyeQuote(data.quote))
        .catch((err) => {
            setKanyeQuote("I know I got angels watching me from the other side.")
        })
}

useEffect( getKanyeQuote, [])

    return (
        <QuoteContainer>
            <QuoteCard>
            { kanyeQuote ? <q> {kanyeQuote}</q> : "Loading awesome quote..."}
            </QuoteCard>
        </QuoteContainer>
    )
}

