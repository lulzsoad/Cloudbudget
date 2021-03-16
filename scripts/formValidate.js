window.addEventListener('DOMContentLoaded', (event) => {

    let inputFirstName = document.querySelector('#firstName');
    let inputLastName = document.querySelector('#lastName');
    let inputPhoneNumber = document.querySelector('#phoneNumber');
    let selectService = document.querySelector('#selectService');
    let btnSubmit = document.querySelector('#btnSubmit');
    let formAlert = document.querySelector('#formAlert');
    let form = document.querySelector('#form');

    btnSubmit.addEventListener("click", () => {
        if(inputFirstName.value.length < 1) {
            formAlert.style.display = "block";
        }
    });
})

