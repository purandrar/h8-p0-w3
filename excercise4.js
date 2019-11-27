function dataHandling2(input){
    var newInput = input.splice(0);
    newInput.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    newInput.splice(4,1,"Pria", "SMA Internasional");
    var tanggalLahir = newInput[3].split("/");
    var bulan = "";
    console.log(tanggalLahir[1]);
    switch (tanggalLahir[1]){
        case '01':
    	    bulan = "Januari";
    	    break;
        case '02':
    	    bulan = "Febuari";
    	    break;
        case '03':
    	    bulan = "Maret";
            break;
        case '04':
            bulan = "april";
            break;
        case '05':
    	    bulan = "Mei";
    	    break;
        case '06':
    	    bulan = "Juni";
    	    break;
   	    case '07':
    	    bulan = "July";
    	    break;
        case '08':
    	    bulan = "Agustus";
    	    break;
        case '09':
    	    bulan = "September";
    	    break;
        case '10':
    	    bulan = "Oktober";
    	    break;
        case '11':
    	    bulan = "November";
    	    break;
        case '12':
    	    bulan = "Desember";
    	    break;
        default:
		    break
    }
    console.log(newInput);
    console.log(bulan);
    var tanggalLahirGabung = tanggalLahir.join("-");
    var tanggalLahirSorting = tanggalLahir.sort(function(a, b){return b-a});
    console.log(tanggalLahirSorting);
    console.log("");
    console.log(tanggalLahirGabung);
    if( typeof newInput[1] === "string"){
        console.log(newInput[1].slice(0,14));
    } 
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
