function unit5() {
var user = prompt("You are walking through the woods towards your grandma's house. Suddenly, a wolf approaches you. Do you ignore it (IGNORE) and keep walking, stop and talk (TALK), or run away (RUN)?").toUpperCase();

switch(user) {
    case('IGNORE'):
        var follow = prompt("Does he follow you? (YES/NO)").toUpperCase();
            if(follow === "YES") {
            console.log("Run as fast as you can!");
            } else {
                console.log("You're lucky this time.");
            }
    break;
    
    case('TALK'):
        var talk = prompt("Does he compliment you?").toUpperCase();
        var question = prompt("Does he ask where you are going?").toUpperCase();
            if(talk === "YES" || question === "YES") {
                console.log("You're going to get eaten! Run!!");
            } else {
                console.log("Really, really close call this time.");
            }
    break;
    
    case('RUN'):
        var distance = prompt("How far do you have to run? (NEAR/FAR)").toUpperCase();
        var speed = prompt("Are you a fast runner?").toUpperCase();
        if(distance === "NEAR" && speed === "YES") {
            console.log("You won't be the wolf's lunch today!");
        } else {
            console.log("You're going to be the wolf's lunch today.");
        }
    break;
    
    default:
        console.log("You can only IGNORE, TALK, or RUN.");   
    break;
}
};