// check a use can drive or not with the help of license and age


canDrive(21, true);
canDrive(15, true);
canDrive(28, false);

console.log("--------------------------------------------------------------");


console.log(RockPaper("rock", "scissor"));
console.log(RockPaper("paper", "scissor"));
console.log(RockPaper("scissor", "scissor"));


function canDrive(age, hasLicense){
    if(age >= 18){
        if(hasLicense === true){
            console.log("Yes this user can Drive !");
        }
        else{
            console.log("No this user can Not can Drive !");
        }
    }
    else{
        console.log("No this user can Not can Drive !");
    }
}


function RockPaper(user1, user2){
    if(user1 == "rock" && user2 == "scissor"){
        return "User1 Wins!";
    }
    else if(user1 == "scissor" && user2 == "paper"){
        return "User1 wins!"
    }
    else if(user1 == "paper" && user2 == "rock"){
        return "User1 wins!"
    }
    else if(user1 == user2){
        return "Draw !!"
    }
    else{
        return "User2 Wins!"
    }
}

