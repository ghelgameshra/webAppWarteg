const [preview, output, capture, result, closePreview] = [
    document.getElementById('preview'),
    document.getElementById('output'),
    document.getElementById('capture'),
    document.getElementById('result'),
    document.getElementById('close-capture')
    ]
    result.src = null;
    output.src = null;

// fungsi untuk menggunakan media device
navigator.mediaDevices.getUserMedia({

    id: Date(),
    audio: false,
    video: {
        width: 250,
        height: 160,
        facingMode: 'user'
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
    // menghilangkan preview
    // preview.classList.add("hidden");

    // convert ke img
    const context = output.getContext('2d');
    
    output.width = 250,
    output.height = 160


    // memasukkan ke dalam canvas
    context.drawImage(preview, 0, 0, output.width, output.height);

    // memasukkan dalam tag img
    result.src = output.toDataURL();
});

closePreview.addEventListener('click', () =>{
    var targetEl = document.getElementById('canvas-ambil-foto');
    preview.classList.remove("hidden");
    targetEl.classList.add("hidden");
});
