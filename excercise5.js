function palindrome(kata) {
    // you can only write your code here!
    var akhir = kata.length-1;
    var awal=0;
    var bool = true;
    while(bool == true){
        if(kata[awal] !== kata[akhir]){
        bool = false;
        }
        if(awal === akhir || akhir - awal === 0 || akhir-awal === 1){
            break;
        }
        awal++;
        akhir--;
    } 
    return bool;
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false