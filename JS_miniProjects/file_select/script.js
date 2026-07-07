let btn = document.querySelector("#btn");
let fileInput = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function (dets) {
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});
