function resetImg (){
    let myResetImg = document.getElementById("myimage");
        myResetImg.src = "";
        document.getElementById("upload-input-wrap").style.display = "block";
}

function changeHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    let files = evt.target.files;

    let file = files[0];

    let fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        let url = fileReader.result;

        let myImg = document.getElementById("myimage");
        myImg.src = url;
        document.getElementById("upload-input-wrap").style.display = "none";
    }

    fileReader.readAsDataURL(file); 
}




 