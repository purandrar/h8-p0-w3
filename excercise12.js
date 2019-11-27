function tentukanDeretGeometri(arr) {
    // you can only write your code here!
      var index = 0;
      var checker = true;
      var multiplier = arr[index+1] / arr[index]
      while(index < arr.length-1 && checker){
          index++;
          if(arr[index]/arr[index-1] !== multiplier){
              checker = false;
          }
      }
      return checker;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false