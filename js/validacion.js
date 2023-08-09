function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Validación de los checkbox

document.addEventListener("DOMContentLoaded", function(){
    let checkbox = document.getElementById("terminos");
    let boton = document.getElementById("regBtn");

    regBtn.addEventListener("click", function(){
        if (checkbox.boton) {
            showAlertSuccess()
        } else {
            showAlertError()
        }
    })
})
