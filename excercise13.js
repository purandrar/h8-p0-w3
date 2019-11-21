function targetTerdekat(arr) {
    // you can only write your code here!
  
    var counter = 0;
    for(var i = 0; i <arr.length; i++){
        var tempCounter = 0;
        var checker = false;
        if(arr[i] === "o" || arr[i]=== "x"){
            for(var j = i+1; j < arr.length; j++){
                if(arr[j] === " "){
                    tempCounter+=1;
                }
                else if((arr[j] === "x" && arr[i]=== "o")||(arr[i]==="x" && arr[j] === "o")){
                    tempCounter+=1;
                    checker = true;
                    break;
                }
                else if((arr[j] === "x" && arr[i]=== "x")||(arr[i]==="o" && arr[j] === "o")){
                    tempCounter = 0;
                    break;
                }
            }
        }
        if((counter === 0 & checker)|| (counter!== 0 && counter > tempCounter && checker)){
            counter = tempCounter;
        }
    }
    return counter
}
  
  // TEST CASES
    console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
    console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
    console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
    console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
    console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2|