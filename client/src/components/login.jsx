import React from 'react';
import { xmlHttpGet } from '../util/api.jsx';
import Auth from '../util/auth.js';
import './style.css';
import './social_buttons.css';

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        // set the initial component state
        this.state = { };

        this.facebookLogin  = this.facebookLogin.bind(this);
        this.googleLogin    = this.googleLogin.bind(this);
        this.twitterLogin   = this.twitterLogin.bind(this);
        this.linkedinLogin  = this.linkedinLogin.bind(this);
    }

    saveToken(token) {
        Auth.authenticateUser(token);
    }

    facebookLogin() {
        // if token is exist, verify
        console.log("Facebook login...");

        // call fb login API
        xmlHttpGet(`/auth/facebook`, function(res) {
            if(res.status == 200) {
                console.log(res);
                this.saveToken(res.token);
            } else {
                alert(res.data);
            }
        });
    }

    googleLogin() {
        // call google login API
        // save token in local store for future API access
    }

    twitterLogin() {
        // call twitter login API
        // save token in local store for future API access
    }

    linkedinLogin() {
        // call linkedin login API
        // save token in local store for future API access
    }

    render() {
        let self = this;
        return (
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"/>
                    <form className="form-signin" action="/auth/">
                        <span id="reauth-email" className="reauth-email"/>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" autoFocus="autoFocus"/>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required"/>
                        <div id="remember" className="checkbox">
                            <label><input type="checkbox" value="remember-me"/> Remember me</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" value="Sign in">Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">Forgot the password?</a>

                    <a href="/auth/facebook" className="social-button" id="facebook-connect">
                        <span>Connect with Facebook</span>
                    </a>
                    <button className="social-button" id="facebook-connect" onClick={ self.facebookLogin }>
                        <span>Connect with Facebook</span>
                    </button>
                    <button className="social-button" id="google-connect" onClick={ self.googleLogin }>
                        <span>Connect with Google</span>
                    </button>
                    <button className="social-button" id="twitter-connect" onClick={ self.twitterLogin }>
                        <span>Connect with Twitter</span></button>
                    <button className="social-button" id="linkedin-connect" onClick={ self.linkedinLogin }>
                        <span>Connect with LinkedIn</span></button>
                </div>
            </div>
        )
    }
};

export default Login;