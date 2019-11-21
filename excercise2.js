function balikString(sentence){
    var container = ""
    for(var i = sentence.length-1; i > 0; i--){
        container += sentence[i]
    }
    return container;
}

var kalimat = "Hallo World!";
var balikKalimat = balikString(kalimat);
console.log(kalimat)
console.log(balikKalimat);