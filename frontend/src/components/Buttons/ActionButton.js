import styled from "styled-components"

const StyledActionButton = styled.button` 
        width: 50%;
        min-width: 10rem;
       background: rgba( 100, 7, 7, 0.75 );
        box-shadow: 0 8px 32px 0 rgba( 32, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 15px;
        padding: 0.5em 1.5em;
        margin-top: 1rem;
        font-weight: 500;
        outline: none;
        cursor: pointer;
        text-align: center;
        text-decoration: none;

    &:hover, &:focus{
background: rgba( 58, 27, 27, 1 );
    }
`

const ActionButton = ({text}) => {
    return (
        <StyledActionButton>
            {text}
        </StyledActionButton>
    )
}

export default ActionButton