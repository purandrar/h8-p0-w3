function pasanganTerbesar(num) {
    // you can only write your code here!
    var container = [];
    var satuan = num%10;
    num = (num-satuan)/10;
    var puluhan = num%10;
    var angka = puluhan*10+satuan;
    num = (num-puluhan)/10;
    while(num > 0){
      satuan = puluhan;
      if(num > 1){
        puluhan = num%10;
        num = (num-puluhan)/10;
      }
      else{
        var angka = 10+satuan;
        container.push(angka);
        break;
      }
      var angka = puluhan*10+satuan;
      container.push(angka);
    }
    console.log(container);
    return "Biggest number : " + findBiggestElement(container);
}
function findBiggestElement(container){
  var biggest = container[0];
  for(var i = 1; i < container.length; i++){
    if (biggest < container[i])
      biggest = container[i] 
    }
    return biggest;
}

  
  // TEST CASES
  console.log(pasanganTerbesar(64157311)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99