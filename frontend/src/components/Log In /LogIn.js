import styled from "styled-components"
import bgKanye1 from "../../assets/kanye.jpg"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ActionButton from "../Buttons/ActionButton";

const LogInContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgKanye1}) center/ cover no-repeat;
`

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '30%',
      },
    },
  }));

const LogIn = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <LogInContainer>
            <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="Username"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
            />
            <ActionButton text={"Log In"} bigMargin={"bigMargin"}/>
        </LogInContainer>
        </form>
    )
}

export default LogIn;