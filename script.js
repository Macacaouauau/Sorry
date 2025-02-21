// Upload de imagem
const imageInput = document.getElementById('imageInput'); 
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function() { 
    const file = this.files[0]; 
    if (file) { 
        const reader = new FileReader(); 
        reader.onload = function(e) { 
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Imagem enviada">`; 
        } 
        reader.readAsDataURL(file); 
    } 
});

const resolveButton = document.getElementById('resolveButton');

resolveButton.addEventListener('click', function() {
    const link = "https://youtu.be/Wjavakm7gMQ?si=Qmx2xZjXreLFyZvw";
    window.location.assign(link);
});