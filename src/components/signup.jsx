import React, {Component} from 'react'
import http from '../services/httpService';
import auth from "../services/authService";
import { Link } from "react-router-dom";
class  SignUp extends Component {
  state={
    form:{firstname:'',lastname:'',username:'',password:''},

};
async postData(url,obj){
  try{
      let response=await http.post(url,obj);
      let {data}=response;
      console.log("Sign up data",data);
      auth.storeToken(data);
      this.props.history.push("/sign-in")
  }
  catch(ex){
      console.log(ex.response);
       let errMsg=`${ex.response.status} ${ex.response.statusText}`;
       this.setState({errMsg:errMsg});
   }
}
handlechange=(e)=>{
  const { currentTarget : input}=e;
  let s1={...this.state};
  s1.form[input.name]= input.value
  this.setState(s1);
}
handelSubmit=(e)=>{
  e.preventDefault();
   this.postData("/signup",this.state.form);
}
    render(){
      let {firstname,lastname,username,password}=this.state.form;
      let {errMsg} =this.state;
        return (
            <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.handlechange}
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text"
              name="lastname"
              value={lastname}
              onChange={this.handlechange}
               className="form-control"
                placeholder="Last name" />
            </div>
            <div className="mb-3">
              <label>UserName</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handlechange}
                className="form-control"
                placeholder="username"
              />
            </div>
            <div className="mb-3">
              <label>password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handlechange}
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to={"/sign-in"}>sign in?</Link>
            </p>
          </form>
    
        )
    }
}
export default SignUp;