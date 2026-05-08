function triggerUpload(){

    document.getElementById("fileUpload").click();

}


const uploadInput =
document.getElementById("fileUpload");

const fileName =
document.getElementById("fileName");

const previewImage =
document.getElementById("previewImage");

const loadingBox =
document.getElementById("loadingBox");

const resultCard =
document.getElementById("resultCard");



uploadInput.addEventListener("change", function(){

    if(uploadInput.files.length > 0){

        const file = uploadInput.files[0];

        fileName.innerHTML =
        ` Uploaded: ${file.name}`;

        fileName.style.color = "#facc15";


        // IMAGE PREVIEW

        previewImage.src = URL.createObjectURL(file);

        previewImage.classList.remove("d-none");


        // SHOW LOADING

        loadingBox.classList.remove("d-none");

        resultCard.classList.add("d-none");


        // FAKE AI PROCESSING

        setTimeout(() => {

            loadingBox.classList.add("d-none");

            resultCard.classList.remove("d-none");

        }, 3000);

    }

});




// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });

    });

});




// NAVBAR EFFECT

window.addEventListener("scroll", function(){

    const navbar =
    document.querySelector(".custom-navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.95)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,0.4)";

    }

});