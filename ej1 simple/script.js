"use strict";
const URL = "https://rjzh17nu94.execute-api.us-east-1.amazonaws.com/dev/buscar3/algo";

function get() {

    let filter = document.getElementById("filter").value;
    
    if (filter) {
        document.getElementById("res").innerHTML = "";
        document.getElementById("outlet").innerHTML = `buscando por "${filter}"`;
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                let keyJsonSort = Object.keys(json).sort();
                for (let element of keyJsonSort) {
                    document.getElementById("res").innerHTML += element + ":" + json[element] + "<br>";
                }
            })
    }

    else {
        alert("¡Campo vacio!")
    }
}

/*
A simply get function to request from an API

Using strict mode is the recommended way to write JS code.

I'm using const to store the URL since I won't change it.

With getElementById I get the data that filter input had 
when the user clicked the send button

I sorted the key values from the received JSON using Object.keys 
to get the keys in Array format then using the extension method sort 
of arrays. after that, I walked through each element in the
array with a forEach loop to append it in my template
*/

