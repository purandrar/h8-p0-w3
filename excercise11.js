function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var index = 1;
    var difference = arr[index]-arr[index-1];
    var checker = true;
    while(index < arr.length-1 && checker){
        if(arr[index+1]-arr[index] !== difference){
            checker = false;
        }
        index+=1;
    }
    return checker;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false