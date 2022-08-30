const [preview, output, capture, result] = [
    document.getElementById('preview'),
    document.getElementById('output'),
    document.getElementById('capture'),
    document.getElementById('result')
    ]

// fungsi untuk menggunakan media device
navigator.mediaDevices.getUserMedia({

    id: Date(),
    audio: false,
    video: {
        video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
    facingMode: 'user'
  }
    }
})
.then(stream => {
    // menampilkan preview
    preview.srcObject = stream;

    // menjalankan preview
    preview.play();

    // menampilkan di console jika true 
    console.log(stream);
})
.catch(function(error) {
    alert("Kamera tidak dizinkan");

    // menampilkan di console jika false
    console.error(error);
})

// membuat aksi ketika tombol capture ditekan
capture.addEventListener('click', () => {
    // convert ke img
    const context = output.getContext('2d');
    
    output.width = 100,
    output.height = 100


    // memasukkan ke dalam canvas
    context.drawImage(preview, 0, 0, output.width, output.height);

    // memasukkan dalam tag img
    result.src = output.toDataURL();
});