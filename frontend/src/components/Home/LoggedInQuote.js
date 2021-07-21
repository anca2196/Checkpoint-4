import styled from "styled-components";
import { useState, useEffect } from "react";
import { Rate } from 'antd';
import "antd/dist/antd.css"

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
    margin: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-style: italic;
    text-align: center;
`
const QuoteContainer = styled.div` 
    width: 100%;
    height:90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const QuoteFeedBackCard = styled.div`
    width: 65%;
    background: rgba( 148, 18, 18, 0.7 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    color: white;
    padding: 0 1rem;

`


export const LoggedInQuote = () => {
const [kanyeQuote, setKanyeQuote] = useState(null)
const [ quoteRating, setQuoteRating] = useState(0)

const getKanyeQuote = () => {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => setKanyeQuote(data.quote))
        .catch((err) => {
            setKanyeQuote("I know I got angels watching me from the other side.")
        })
}

useEffect( getKanyeQuote, [])

const handleRantingClick = (e) => {
  setQuoteRating(e)
}

    return (
        <QuoteContainer>
            <QuoteCard>
                { kanyeQuote ? <q> {kanyeQuote}</q> : "Loading awesome quote..."}
            </QuoteCard>
            <QuoteFeedBackCard>
                <div>
                    <p>Please find the words to describe how much Kanye inspired you today: </p>
                    <input></input>
                </div>
                <div>
                    <p>Rate how much you love this quote:</p>
                    < Rate style={{display: "flex"}} count={"5"} onChange={(e) => handleRantingClick(e)} />
                </div>
                <button> Submit your kanye love</button>
            </QuoteFeedBackCard>
        </QuoteContainer>
    )
}
