import React,{Component} from "react";
import http from "../services/httpService";
class AllUser extends Component{
  state={
         
  }
  async componentDidMount(url,obj){
    try{
        let response=await http.get("/allusers");
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
       <h4>All Users</h4>
       {user && (
         <table className="table table-bordered">
         <thead>
           <tr>
             <th scope="col">FirstName</th>
             <th scope="col">LastName</th>
             <th scope="col">UserName</th>
             <th scope="col">Password</th>
           </tr>
         </thead>
         {user.map((s)=>
         <tbody>
         <tr>
          <td>{s.firstname}</td>
          <td>{s.lastname}</td>
          <td>{s.username}</td>
          <td>{s.password}</td>
          </tr>
        </tbody>
         )}
     </table>

       )}
       {errMsg && <h6>{errMsg}</h6>}
    </div>
    );
}
}
export default AllUser;