checkEvenOdd(21);
checkAdmin("admin");
canVote(27);


console.log("--------------------------------------------------------------");

checkEvenOdd(18);
checkAdmin("LabAssistant");
canVote(15);


console.log("--------------------------------------------------------------");

checkEvenOdd(1245);
checkAdmin("Admin");
canVote(101);



function checkEvenOdd(num){
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}


function checkAdmin(role){
    if (role === "admin") {
        console.log("Is Admin");
    } else {
        console.log("Is Not Admin");
    }
}

function canVote(age){
    if (age >= 18 && age <= 100) {
        console.log("canVote");
    } else {
        console.log("can'tVote");
    }
}




