import React,{Component} from "react";
import auth from "../services/authService";
class Logout extends Component{
  componentDidMount(){
    auth.removeToken();
    window.location="/sign-in";
  }
    render(){
        return(
              <div className="container">
                
              </div>
        );
  }
}
export default Logout;