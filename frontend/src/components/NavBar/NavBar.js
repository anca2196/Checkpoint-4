import MenuButton from "./MenuButton"
import styled from "styled-components";

const NavBarContainer = styled.div`
    margin: 0;
    background-color: rgba(0, 0, 0, 0.762);
    padding: .5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Navbar = () => {
    return (
        <NavBarContainer>
            <MenuButton />
            <p> Log In</p>
        </NavBarContainer>
    )
}

export default Navbar;