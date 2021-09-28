import React, { Component } from 'react'
import UserService from '../services/UserService';
import ReCAPTCHA from "react-google-recaptcha";


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            email: "",
            password: "",
            passwordDb: "",
            emailDb: "",
            isVerifled: false,
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getTickets = this.getTickets.bind(this);
        // this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
            {
                this.state.users.map(
                    user =>
                        this.setState({ emailDb: user.email, passwordDb: user.password })
                )
            }

        });
    }
    handleOnChange() {
        this.setState({ isVerifled: true })
    }
    getTickets() {
        if (this.state.email !== null && this.state.password !== null) {

            if (this.state.email === this.state.emailDb && this.state.password === this.state.passwordDb) {
                this.props.history.push("/tickets");

            } else {
                alert("Hatalı bir giriş yaptınız. Lütfen tekrar deneyiniz...");
                window.location.reload();

            }
        } else {
            alert("Boş geçemezsiniz. Lütfen tekrar deneyiniz...");
            window.location.reload();
        }
    }
    render() {
        return (

            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Login </h3>
                    <div className="card-body" >
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}>Email </label>
                            <input type="email" name="email" placeholder={"asd@asd.com"} value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}>Password </label>
                            <input type="password" name="password" placeholder={"****"} value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <br></br>
                        <div className="row" style={({ margin: "0px" })}>
                            <div>
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={this.handleOnChange} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: "10px" }}>
                            <button className="btn btn-success" onClick={() => this.getTickets()} disabled={!this.state.isVerifled}>Login</button>
                        </div>
                    </div>
                </div>
            </div>







        )
    }
}

export default LoginComponent
