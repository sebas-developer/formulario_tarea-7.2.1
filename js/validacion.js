function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', () => {
    let inputs = document.getElementsByClassName('form-control');
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;

    if (password1 !== '' && password1 === password2 && inputs.length !== 0) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});
