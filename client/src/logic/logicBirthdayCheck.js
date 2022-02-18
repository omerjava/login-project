

// check that birthdayData consists of numbers and follows this format "12/01/2020" without any space
export const logicBirthdayCheck = (birthdayData) => {
        if(birthdayData.length!==10) return false;
        else if(String(birthdayData)[2]==="/"&&String(birthdayData)[5]==="/"){
            return String(birthdayData).split("/").join("").split("")
                    .filter(v=>v!==" ").every(v=>typeof Number(v)==='number');
        }
        return false;
    };