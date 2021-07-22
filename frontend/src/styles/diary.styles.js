import styled from "styled-components";
import whitePhone from "../assets/white-phone.jpg"
import { Rate } from "antd";
import ActionButton from "../components/Buttons/ActionButton";
import { useState } from "react";

export const DiaryStyledContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin-top: -2rem;
    scroll-behavior: auto;
    background: url(${whitePhone}) center/ cover no-repeat;
`

export const EntriesContainer = styled.div` 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h1{ 
    margin: 20% 5%;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    font-style: italic;
    }
    
`

const StyledEntryCard = styled.div` 
    width: 30rem;
    margin: 1%;
    background: rgba( 148, 18, 18, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        font-size: 1.1rem ;
        font-weight: 600;
        margin-top: 1rem
    }

    q{
        width: 100%;
        background: rgba( 255, 255, 255, 0.55 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 2.0px );
        -webkit-backdrop-filter: blur( 2.0px );
        border-radius: 10px;
        padding: 0rem 1rem;
        font-size: 1.1rem ;
        font-style: italic;
        text-align: center;
        color: rgba( 75, 70, 70, 1.00 );;
    }

    input {
        width: 100%;
        color: black;
    }

    @media screen and (max-width: 511px){
        width: 80%;
        font-size: 1rem;

        div{
            display: flex;
            flex-direction: column;
        }
    }
`

export const EntryCard = ({kanye_quote, fan_testimony, rating, id, setEntries, entries}) => {
 const [editMode, setEditMode] = useState(false)  
 const [ editedFeedback, setEditedFeedback] = useState("")
    
const handleEdit= (e) =>{
        setEditMode( (prevState) => setEditMode(!prevState))
    }

    const handleChangeFeedback = (e) => {
        setEditedFeedback(e.target.value);
    }

    const handleDelete=(e) =>{
        fetch(`http://localhost:5000/diary/${e.target.id}`, {
            method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setEntries(data);
                });
        }

      const  handleSubmitEditedFeedback = (e) => {
          setEditedFeedback(e.target.value)
                fetch(`http://localhost:5000/diary/${e.target.id}`, {
            method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
            body: JSON.stringify({ "fan_testimony": editedFeedback })
        })

            .then((response) => {handleEdit()})
           

      }    

    return (
        <StyledEntryCard>
            <p> Kanye said: </p>
             <div>
                 <q> {kanye_quote}</q>
             </div>
            
            <div>
                <p> You said:</p>
                < Rate style={{display: "inline"}} count={"5"} value={rating} />
            </div> 

            <div>
                { !editMode 
                    ? (<q> { fan_testimony}</q>) 
                    :  (<input
                        name='feedback'
                        type='text'
                       placeholder = { fan_testimony }
                        onChange={handleChangeFeedback}>
                    </input>)}
            </div>
            <div>
               { editMode ? <ActionButton id={id} text={"Submit change"} onClick={(e, id) => handleSubmitEditedFeedback(e, id)}/> : <ActionButton id={id} text={"Edit your truth" } onClick={(e) => handleEdit(e)}/> }
                <ActionButton id={id} text={"Delete your truth" } onClick={(e) => handleDelete(e)}/>
            </div>
           
        </StyledEntryCard>
    )
}
