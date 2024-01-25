let string = " Restaurants in Hanalei"
let urlFriendly = "";

for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i];
    }
}

console.log(urlFriendly);
