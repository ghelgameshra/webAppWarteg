let waktu = setInterval(timer, 1000)
    function timer(){
        var jam = new Date();
        document.getElementById("waktuSaatIni").innerHTML = jam.toLocaleTimeString();

        // mendapatkan waktu shift
        var waktuShift = document.getElementById('waktu-shift').innerHTML = "Malam";

        // kondisi bila terlambat absen
        var waktuAbsen = document.getElementById('waktu-absen');
        if(waktuShift == "Siang"){
            if(jam.getHours() > 8 && jam.getHours() < 11){
                waktuAbsen.innerHTML = "Terlambat";
                waktuAbsen.classList.add('bg-red-400', 'text-white', 'font-semibold');
                waktuAbsen.classList.remove('border', 'border-gray-500');
            }
        } else if(waktuShift == "Malam"){
            if(jam.getHours() > 20 && jam.getHours() < 23){
                waktuAbsen.innerHTML = "Terlambat";
                waktuAbsen.classList.add('bg-red-400', 'text-white', 'font-semibold');
                waktuAbsen.classList.remove('border', 'border-gray-500');
            }
        }

        document.getElementById("tanggalSaatIni").innerHTML = jam.getDate() +'/'+ (jam.getMonth() + 1) +'/'+ jam.getUTCFullYear();
    }