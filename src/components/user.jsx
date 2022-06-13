import React,{Component} from "react";
import http from "../services/httpService";
class User extends Component{
  state={
         
  }
  async componentDidMount(url,obj){
    try{
        let response=await http.get("/user");
        let {data}=response;
        console.log(data);
        this.setState({user:data});
    }
    catch(ex){
      if(ex.response)
      {
        console.log(ex.response);
        let errMsg=`${ex.response.status} ${ex.response.statusText}`;
        this.setState({errMsg:errMsg});
       }
    }
}
render(){
         const {user ,errMsg}=this.state;
    return(<div className="container">
       <h4>Welcome to the User page</h4>
       {user && (
         <div>
          <strong>First Name :</strong> {user.firstname}
           <br />
           <strong>Last Name :</strong> {user.lastname}
           <br />
           <strong>User Name :</strong> {user.username}
           <br />
           <strong>Password :</strong> {user.password}
           <br />
         </div>
       )}
       {errMsg && <h6>{errMsg}</h6>}
    </div>
    );
}
}
export default User;