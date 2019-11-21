function angkaPalindrome(num) {
    var numString = numToString(num);
    if(palindrome(numString)){
        var numTemp = num+1;
        while(!palindrome(numToString(numTemp))){
            numTemp++;
        }
        return numTemp;
    }
    else{
        var numTemp = num+1;
        while(!palindrome(numToString(numTemp))){
            numTemp++;
        }
        return numTemp;
    }
    // you can only write your code here!
}

function numToString(num){
    return ""+num+"";
}

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
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001