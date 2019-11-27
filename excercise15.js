function groupAnimals(animals) {
    // you can only write your code here!
   var container = [];
   for(var i = 0; i<26; i++){
       container.push([]);
   }
    for(var i = 0; i<animals.length;i++){
        var index = animals[i].charCodeAt(0)-97;
        container[index].push(animals[i]);
    }

   var sum = [];
    for(var i = 0; i < 26; i++){
        if(container[i].length>=1){
            sum.push(container[i]);
        }
    }
    return sum;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]