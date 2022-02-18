// import { handlerRegister } from "../handlers/handlerRegister";

//import { data } from "../../data";
//import { logicBirthdayCheck } from "../logic/logicBirthdayCheck";

const data = {
    words: [],
    sort: "oldest",
    loginStatus: false,
    users: [{username: "john", password: "1234", birthday: "12/10/1989"}]
  };

const handlerRegister = () => {
    document.getElementById("loginContainerId").style.display="none";
    document.getElementById("resultRegistration").style.display="none";
    document.getElementById("registerContainerId").style.display="inline";
};

const handlerSubmitRegister = () => {

    const usernameData = document.getElementById("username").value;
    const passwordData = document.getElementById("password").value;
    const passwordConfirmData = document.getElementById("passwordConfirm").value;
    const birthdayData = document.getElementById("birthday").value;

    // check that username and password will have at least 4 characters without any space characters
    const logicUsernamePasswordCheck = (usernameData) => {
        return usernameData.split("").filter(v=>v!==" ").join("").length<4 ? true : false;
    };
    
    // check that birthdayData consists of numbers and follows this format "12/01/2020" without any space
    const logicBirthdayCheck = (birthdayData) => {
        if(birthdayData.length!==10) return false;
        else if(String(birthdayData)[2]==="/"&&String(birthdayData)[5]==="/"){
            return String(birthdayData).split("/").join("").split("")
                    .filter(v=>v!==" ").every(v=>typeof Number(v)==='number');
        }
        return false;
    };

    if(logicUsernamePasswordCheck(usernameData)){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "Enter your username!";
    }
    if(data.users.some(v=>v.username===usernameData)){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "This username is not available! Choose another username!";
    }
    if(logicUsernamePasswordCheck(passwordData)){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "Enter your password!";
    }
    if(logicUsernamePasswordCheck(passwordConfirmData)){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "Confirm your password!";
    }
    if(passwordData!==passwordConfirmData){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "Password and confirmed password must be same.";
    }
    if(logicBirthdayCheck(birthdayData)===false){
        return document.getElementById("invalidEntryRegister").innerHTML=
                                    "Enter a valid birthday!";
    }

    data.users.push({username:usernameData,password:passwordData,birthday:birthdayData});
    document.getElementById("registerContainerId").style.display="none";
    document.getElementById("loginContainerId").style.display="none";
    document.getElementById("resultRegistration").style.display="inline";
};

const handlerLogin = () => {
    if(data.loginStatus){
        document.getElementById("loginMessage").innerHTML="You are logged in!"
        document.getElementById("registerContainerId").style.display="none";
        document.getElementById("resultRegistration").style.display="none";
    }
    else{
        document.getElementById("registerContainerId").style.display="none";
        document.getElementById("resultRegistration").style.display="none";
        document.getElementById("loginContainerId").style.display="inline";
    }
};

const handlerSubmitLogin = () => {
    const usernameLogin = document.getElementById("usernameLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;

    if(data.users.some(v=>v.username===usernameLogin)){
        const index = data.users.findIndex(v=>v.username===usernameLogin);
        if(data.users[index].password ===passwordLogin){
            data.loginStatus=true;
        }
    }
    if(data.loginStatus){
        document.getElementById("greetingId").innerHTML = `Welcome ${usernameLogin}!`;
        document.getElementById("loginMessage").innerHTML="You are logged in!" 
    }
    document.getElementById("loginContainerId").style.display="none";

};
const handlerLogout = () => {
    document.getElementById("registerContainerId").style.display="none";
    document.getElementById("resultRegistration").style.display="none";
    document.getElementById("loginContainerId").style.display="none";
  
    data.loginStatus=false;
    if(data.loginStatus===false){
        document.getElementById("greetingId").innerHTML = `Welcome!`;
        document.getElementById("loginMessage").innerHTML="You are not logged in." 
    }
};


document.getElementById("registerBtn").addEventListener("click", handlerRegister);
document.getElementById("submitBtn").addEventListener("click", handlerSubmitRegister);
document.getElementById("loginBtn").addEventListener("click", handlerLogin);
document.getElementById("loginSubmitBtn").addEventListener("click", handlerSubmitLogin);
document.getElementById("logoutBtn").addEventListener("click", handlerLogout);

console.log(data.users);
