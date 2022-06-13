import React, {Component} from 'react'
import {Route,Switch,Redirect, Link} from 'react-router-dom'
import auth from "../services/authService";
import User from './user';
import Login from './login'
import SignUp from './signup'
import Logout from './logout';
import AllUser from './allusers';
import UploadProduct from './uploadProduct';
class  MainComponents extends Component {
    render(){
          const user = auth.getToken();
        return (
              <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                      <img src="https://wobot.ai/_next/image?url=%2Fwobot_logo_blue.svg&w=1920&q=75" height={30}  alt="" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   {user && (
                   <li className="nav-item">
                   <Link className="nav-link" to={"/user"}>User Details</Link>
                   </li>
                   )}
                   {user && (
                   <li className="nav-item">
                   <Link className="nav-link" to={"/allusers"}>All Users</Link>
                   </li>
                   )}
                    {user && (
                   <li className="nav-item">
                   <Link className="nav-link" to={"/uploadProduct"}>Upload Product</Link>
                   </li>
                   )}
                    {user && (
                   <li className="nav-item">
                   <Link className="nav-link" to={"/allProducts"}>All Products</Link>
                   </li>
                   )}
                  </ul>
                      <ul className="navbar-nav ml-auto">
                        {!user && (
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-in'}>
                            Login
                          </Link>
                        </li>
                        )}
                        {user && (
                        <li className="nav-item">
                          <Link className="nav-link" to={'/logout'}>
                            LogOut
                          </Link>
                        </li>
                        )}
                        <li className="nav-item">
                          <Link className="nav-link" to={'/sign-up'}>
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="auth-wrapper">
                  <div className="auth-inner">
                    <Switch>
                      <Route path="/sign-in" component={Login}/>
                      <Route path="/user" component={User}/>
                      <Route path="/uploadProduct" component={UploadProduct}/>
                      <Route path="/allusers" component={AllUser}/>
                      <Route path="/logout" component={Logout}/>
                      <Route path="/sign-up" component={SignUp}/>
                      <Redirect from="/" to="/sign-in"/>
                    </Switch>
                  </div>
                </div>
              </div>
    
        )
    }
}
export default MainComponents