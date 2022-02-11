
export const handlerRegister = () => {

    const parentElement = document.getElementById("displayScreen");
    
    parentElement.innerHTML=`<h2>Registration</h2>
    <p>Enter your information please to create an user account</p>
    <form action="">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="pwd">Password:</label><br>
        <input type="password" id="password" name="password"><br>
        <label for="passwordConfirm">Confirm Password:</label><br>
        <input type="password" id="passwordConfirm" name="passwordConfirm"><br>
        <label for="birthday">Birthday:</label><br>
        <input type="text" id="birthday" name="birthday" placeholder="12/10/1996"><br><br>
        <input type="submit" value="Submit">
    </form> `;

};