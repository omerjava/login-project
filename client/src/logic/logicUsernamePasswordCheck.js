

// check that username and password will have at least 4 characters without any space characters
export const logicUsernamePasswordCheck = (usernameData) => {
        return usernameData.split("").filter(v=>v!==" ").join("").length<4 ? true : false;
    };