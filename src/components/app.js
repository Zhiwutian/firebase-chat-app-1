import 'materialize-css/dist/css/materialize.min.css';
import React,  { Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { signInAction, signOutAction} from "../actions";
import { auth } from "../firebase";
import Nav from './nav';
import Home from './home';
import SignIn from "./sign_in";
import Chat from './chat';
import CreateChatRoom from './create_chat_room';
import ChatRooms from './chat_rooms';
import SignUp from './sign_up';
import routeAuth from "../hoc/auth";

class App extends Component {

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log("User:", user.displayName);
                this.props.signInAction(user)
            } else {
                console.log('No User');
                this.props.signOutAction();
            }
        });

    }





    render() {
        return(

            <div>
                <Nav/>
                <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/sign-in" component={routeAuth(SignIn, true, "/chat-rooms")}/>
                <Route path="/sign-up" component={routeAuth(SignUp, true, "/chat-rooms")}/>
                <Route path="/chat/:id" component={routeAuth(Chat)}/>
                <Route path="/chat-rooms" component={routeAuth(ChatRooms)}/>
                <Route path="/create-room" component={routeAuth(CreateChatRoom)}/>
                </div>
            </div>


        )
    }
}



export default withRouter(connect(null, { signInAction, signOutAction})(App));
