function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', () => {

    let inputs = document.getElementsByClassName('form-control');

    if (inputs == null) {
    showAlertError();
    }

})

document.getElementById('regBtn').addEventListener('click', () => {

    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;

    if (password1 == password2) {
        showAlertSuccess();
    }
    else {
        showAlertError();
    }
})