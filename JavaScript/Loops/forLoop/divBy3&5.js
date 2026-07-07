divBy3and5(25);

function divBy3and5(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
}  