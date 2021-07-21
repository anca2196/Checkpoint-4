import styled from "styled-components";
import { useState, useEffect } from "react";
import { Rate } from 'antd';
import "antd/dist/antd.css"
import ActionButton from "../Buttons/ActionButton";

const QuoteCard = styled.div` 
    width: 65%;
    min-height: 3rem;
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

    @media screen and (max-width: 1000px){
        width: 85%;
        margin:1rem;
        position:relative;
        top:-10rem;
        font-size: 1rem;
    }
`
const QuoteContainer = styled.div` 
    width: 100%;
    min-height:50rem;
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
    padding: 1rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        margin-top: .5rem;
    }

    input {
        color: black;
    }

    @media screen and (max-width: 1000px){
        width: 85%;
        position:relative;
        top:-10rem;
        font-size: 1rem;
    }

`


export const LoggedInQuote = () => {
const [kanyeQuote, setKanyeQuote] = useState(null)
const [ userFeedback, setUserFeedback] = useState("")
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

const handleChangeFeedback = (e) => {
    setUserFeedback( [  e.target.value]);
}

console.log(userFeedback)

    return (
        <QuoteContainer>
            <QuoteCard>
                { kanyeQuote ? <q> {kanyeQuote}</q> : "Loading awesome quote..."}
            </QuoteCard>
            <QuoteFeedBackCard>
                    <p>Please find the words to describe how much Kanye inspired you today: </p>
                    <input
                        name='feedback'
                        type='text'
                        id='userFeedback'
                        value={userFeedback}
                        onChange={handleChangeFeedback}>
                    </input>
                    <p>Rate how much you love this quote:  {" "} </p>
                    < Rate style={{display: "inline"}} count={"5"} onChange={(e) => handleRantingClick(e)} />
                   
                    <div>
                        <ActionButton text={"Submit your Kanye love"} />
                    </div>
            </QuoteFeedBackCard>
        </QuoteContainer>
    )
}
