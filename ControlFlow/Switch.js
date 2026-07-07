presentDay(5);
console.log(CheckGrade(93));

console.log("--------------------------------------------------------------");

presentDay(2);
console.log(CheckGrade(16));

console.log("--------------------------------------------------------------");

presentDay(9);
console.log(CheckGrade(52));

console.log("--------------------------------------------------------------");

console.log(whoWins("rock", "scissor"));
console.log(whoWins("paper", "rock"));
console.log(whoWins("scissor", "paper"));

console.log("--------------------------------------------------------------");

console.log(whoWins("rock", "paper"));
console.log(whoWins("paper", "scissor"));
console.log(whoWins("scissor", "rock"));

console.log("--------------------------------------------------------------");

console.log(whoWins("rock", "rock"));
console.log(whoWins("paper", "paper"));

console.log("--------------------------------------------------------------");

console.log(whoWins("stone", "rock"));

function CheckGrade(Marks){
switch (true) {
    case (Marks >= 90 && Marks <= 100):
        return "Grade A+";
        break;

    case (Marks >= 80):
        return "Grade A";
        break;

    case (Marks >= 70):
        return "Grade B";
        break;

    case (Marks >= 60):
        return "Grade C";
        break;

    case (Marks >= 50):
        return "Grade D";
        break;

    case (Marks >= 0):
        return "Fail";
        break;

    default:
        return "Invalid Marks";
    }
}


function presentDay(day){
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
    }
}


function whoWins(user1, user2) {
    switch (true) {
        case (user1 === user2):
            return "It's a Draw!";
            break;

        case (user1 === "rock" && user2 === "scissor"):
        case (user1 === "paper" && user2 === "rock"):
        case (user1 === "scissor" && user2 === "paper"):
            return "User1 Wins!";
            break;

        case (user2 === "rock" && user1 === "scissor"):
        case (user2 === "paper" && user1 === "rock"):
        case (user2 === "scissor" && user1 === "paper"):
            return "User2 Wins!";
            break;

        default:
            return "Invalid Input! Enter rock, paper, or scissor.";
    }
}
