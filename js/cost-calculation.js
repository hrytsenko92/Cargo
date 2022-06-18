function resetImg (){
    let myResetImg = document.getElementById("myimage");
        myResetImg.src = "";
        document.getElementById("upload-input-wrap").style.display = "block";
        document.getElementById("myimage").style.display = "none";
        document.getElementsByClassName("upload-photo-form__input")[0].style.border = "1px dashed var(--button-grey)";
}

function tab01 (){
    document.getElementById("two").disabled = false;
    document.getElementById("two").checked = true;
}

function tab02 (){
    document.getElementById("one").disabled = false;
    document.getElementById("one").checked = true;
}

function tab03 (){
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("three").checked = true;
    document.getElementById("tabs").style.display = "none"; 
    document.getElementById("three-panel").style.backgroundColor= "#282b38";
    document.getElementById("panels").style.backgroundColor= "#282b38";
}

// func changeHandler show uploadet photo. work, just turn off;

// function changeHandler(evt) {   
//     evt.stopPropagation();
//     evt.preventDefault();

//     let files = evt.target.files;

//     let file = files[0];

//     let fileReader = new FileReader();

//     fileReader.onload = function(progressEvent) {
//         let url = fileReader.result;

//         let myImg = document.getElementById("myimage");
//         myImg.src = url;
//         document.getElementById("upload-input-wrap").style.display = "none";
//     }

//     fileReader.readAsDataURL(file); 
// }  

function changeHandler(evt) {
        document.getElementById("myimage").style.display = "block";
        document.getElementById("myimage").style.width = "32px"
        document.getElementById("upload-input-wrap").style.display = "none";
        document.getElementsByClassName("upload-photo-form__input")[0].style.border = "none";
    }  