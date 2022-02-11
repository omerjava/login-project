// import { handlerRegister } from "../handlers/handlerRegister";

import { data } from "../../data";

alert("hello");

const handlerRegister = () => {

    const parentElement = document.getElementById("displayScreen");
    
    parentElement.innerHTML=`<div class="registerContainer"><h2>Registration</h2>
    <p>Enter your information please</p>
    <form action="">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="pwd">Password:</label><br>
        <input type="password" id="password" name="password"><br>
        <label for="passwordConfirm">Confirm Password:</label><br>
        <input type="password" id="passwordConfirm" name="passwordConfirm"><br>
        <label for="birthday">Birthday:</label><br>
        <input type="text" id="birthday" name="birthday" placeholder="12/10/1996"><br><br>
        <input type="submit" id="submitBtn" value="Submit">
    </form></div> `;

};

const handlerSubmit = () => {

    const usernameData = document.getElementById("username").value;
    const passwordData = document.getElementById("password").value;
    const birthdayData = document.getElementById("password").value;

    data.users.push({username:usernameData,password:passwordData,birthday:birthdayData});
    
    document.getElementById("displayScreen").innerHTML=`<div class="registerContainer"><h2>Greetings!</h2>
                                            <p>You can login now with your account information.</p></div> `;
};

document.getElementById("registerBtn").addEventListener("click", handlerRegister);


document.getElementById("submitBtn").addEventListener("click", handlerSubmit);

//document.getElementById("registerBtn").addEventListener("click", handlerRegister);

//document.getElementById("registerBtn").addEventListener("click", handlerRegister);
