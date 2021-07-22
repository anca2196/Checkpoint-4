import { DiaryStyledContainer, EntriesContainer, EntryCard } from "../../styles/diary.styles";
import Title from "../Title/Title";
import { useState, useEffect } from "react";

const DiaryLoggedIn = () => {
const [entries, setEntries] = useState(
    [{
        kanye_quote: "For me to say I wasn’t a genius, I would just be lying to you and to myself.",
        fan_testimony: "This quote is exactly how I feel. Kanye gets me",
        rating: 5
}]);

const getEntries =() => { 
    fetch("http://localhost:5000/diary/")
        .then((res) => res.json())
        .then((data) => {
                setEntries(data)
        } )
    
    }


useEffect( getEntries, [entries])


    return (
        < DiaryStyledContainer>
            <Title text={"Kanye West Fan Diary"}></Title>
                < EntriesContainer>
                   { entries.map((entry, index) => { return(< EntryCard 
                        key={ index}
                        kanye_quote={entry.kanye_quote} 
                        fan_testimony={entry.fan_testimony}
                        rating= {entry.rating}
                        id ={entry.testimony_id}
                        setEntries={setEntries}
                        entries={entries}
                        />)
                       
                   })}
                   
                   
                </EntriesContainer>
        </DiaryStyledContainer>
            
 
    )
}

export default DiaryLoggedIn;