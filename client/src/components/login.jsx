import React from 'react';
import './style.css';
import './social_buttons.css';

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        // set the initial component state
        this.state = { };
    }

    render() {
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
                    <a href="#" className="forgot-password">Forgot the password?</a><br/>

                    <a href="/auth/facebook" className="social-button" id="facebook-connect">
                        <span>Connect with Facebook</span>
                    </a><br/>
                    <a href="/auth/google" className="social-button" id="google-connect">
                        <span>Connect with Google</span>
                    </a><br/>
                    <a href="/auth/twitter" className="social-button" id="twitter-connect">
                        <span>Connect with Twitter</span>
                    </a><br/>
                    <a href="/auth/linkedin" className="social-button" id="linkedin-connect">
                        <span>Connect with LinkedIn</span>
                    </a>
                </div>
            </div>
        )
    }
};

export default Login;