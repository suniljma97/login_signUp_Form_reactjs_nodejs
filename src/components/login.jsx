import React, {Component} from 'react'
import http from '../services/httpService';
import auth from "../services/authService";
import { Link } from "react-router-dom";
class  Login extends Component {
  state={
     form:{username:'',password:''},

};
async postData(url,obj){
  try{
      let response=await http.post(url,obj);
      let {data}=response;
      console.log("Login data",data);
      auth.storeToken(data);
      window.location="/user";
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
   this.postData("/login",this.state.form);
}
    render(){
      let {username,password}=this.state.form;
      let {errMsg} =this.state;
        return (    
            <form>
            <h3>Sign In</h3>
            <div className="text-center text-danger fw-bold">
                    {errMsg && <h5>{errMsg}</h5>}
                    </div>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Enter username"
                onChange={this.handlechange}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Enter password"
                onChange={this.handlechange}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={this.handelSubmit}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
             <Link to={"/sign-up"}>Sign Up?</Link>
            </p>
          </form>
        )
    }
}
export default Login;