const keyName="jwtToken";

function getToken(){
    return  localStorage.getItem(keyName);
}
function storeToken(token){
    localStorage.setItem(keyName,token)
}
function removeToken(){
    localStorage.removeItem(keyName)
}
export default{
    getToken,
    storeToken,
    removeToken,
}

// const keyName="jwtToken";

// function getToken(){
//     return localStorage.getItem(keyName)
// }
// function storeToken(token){
//   
//     localStorage.setItem(keyName,token)
// }
// function removeToken(){
//     localStorage.removeItem(keyName)
// }
// export default{
//     getToken,
//     storeToken,
//     removeToken,
// }




















/*const keyName="manager";
function login(obj){
    let str=JSON.stringify(obj);
    localStorage.setItem(keyName,str)
}
function logout(){
    localStorage.removeItem(keyName)
}
function getUser(){
    let str = localStorage.getItem(keyName);
    let obj = str ? JSON.parse(str) : null;
    return obj;

}
export default{
    login,
    logout,
    getUser,
};*/