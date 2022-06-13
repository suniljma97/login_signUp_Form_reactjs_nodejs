import axios from 'axios';
import auth from './authService';

const baseURL="http://localhost:2410"
function get(url){
     let token = auth.getToken();
     return axios.get(baseURL+url, {
         headers : {Authorization : "bearer " + token},
     });
   // return axios.get(baseURL + url);
}
function post(url,obj){
    return axios.post(baseURL+url, obj);
}

export default{
    get,
    post,
}
