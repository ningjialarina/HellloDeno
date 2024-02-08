let question1 = prompt("What's the first successful human mission to the moon?")
let question2 = prompt ("What the value of one plus one?")
let question3 = prompt ("How many states does the UNITED STATES have?")
let points= 0 

if (question1.toUpperCase() === "APOLLO ELEVEN"){
   points+=1;
}
    else{
     console.log("Right answer: Apollo Eleven")
    }


if(question2 === "2"){
    points+=1;

}
    else {
        console.log("Right answer: 2")
    }


if(question3 === "50"){
    points+=1;
}
    else {
        console.log("Right answer: 50")

}
console.log("you got "+points);