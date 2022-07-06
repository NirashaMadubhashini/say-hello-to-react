import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'admin',
            pw: 'admin',
            formData: {
                user_name: '',
                password: ''
            }
        }
    }

    checkValidity() {
        console.log("Login button clicked!")
        console.log("User name: " + this.state.userName)
        console.log("Password: " + this.state.pw)

        console.log(this.state.formData)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({formData})
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({formData})
                            }}
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <GDSEButton
                            variant="contained"
                            label="Login"
                            onClick={() => {
                                this.checkValidity()
                            }}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)