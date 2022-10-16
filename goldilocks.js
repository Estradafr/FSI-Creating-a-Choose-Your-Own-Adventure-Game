let enterCabin = confirm("You come across a strange house in the woods. Do you want to go in?")

if(enterCabin == true) {
    //We enter the cabin
    let porridgeChoice = prompt("You walk into the cabin and see a lovely kitchen. On the table there are three bowls of porridge. Do you try 1, 2, or 3?")
    
    if(porridgeChoice == 1) {
        //We choose porridge #1
        alert("The porridge is too hot! The End.");
    }
    else if(porridgeChoice == 2) {
        //We choose porridge #2
        alert("The porridge is too cold! The End.");
    }
    else {
        //If choice is not 1 or 2, it must be porridge #3
        alert("This porridge is just right!");

        //If we eat the 'just right' porridge we want to go sit in some chairs!
        let chairChoice = prompt("You walk into the living room and see three chairs: A big one, a medium one, and a small one. Which one do you choose?");
            if(chairChoice == 'big') {
                alert("The chair is way too big! The End.");
            }
            else if(chairChoice == "medium") {
                alert("The chair is kind of too big. The End.");
            }
            else {
                alert("This chair is just right..!");


                //After eating the porridge you get sleepy. Next we will make a bed choice.
                let bedChoice = prompt("You walk into the bedroom and see three beds: A big one, a medium one, and a small one. Which bed do you choose?");
                    if(bedChoice == 'big') {
                        alert("The bed is too hard! The End.");
                    }
                    else if(bedChoice == 'medium') {
                        alert("This bed is too soft! The End.");
                    }
                    else {
                        alert("This bed is just right...");
                        alert("We fall into a nice long slumber only to be awoken by a bunch of angry bears!")
                    }
            }
    }

}
else {
    //We don't enter the cabin. (enterCabin is false)
    alert("You did not enter the cabin. The end.");

}