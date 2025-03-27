export const LoginApi = (username,password,{history})=>{
    username === "user" &&
    password === "password" ? history.push('/home'):alert("fail");
}