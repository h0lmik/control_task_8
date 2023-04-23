window.onload = function () {

    let inputFullName = document.getElementById('fullName');
    let inputUserName = document.getElementById('userName');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputRepeatPassword = document.getElementById('repeat_password');
    let inputCheckbox = document.getElementById('checkbox');
    let btnSubmit = document.getElementById('btn');
    let popupOpen = document.getElementById('popup');

//комментарий//
    inputFullName.oninput = function () {
        this.value = this.value.replace(/[0-9]/g, '');
    }


    inputUserName.oninput = function () {
        this.value = this.value.replace(/[,.]/g, '');
    }


    inputCheckbox.oninput = (event) => {
        if (event.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }


    btnSubmit.onclick = function () {
        if (inputFullName.value.trim() === '') {
            alert('Заполните поле Full Name');
            return;
        }
        if (inputUserName.value.trim() === '') {
            alert('Заполните поле Your username');
            return;
        }
        if (inputEmail.value.trim() === '') {
            alert('Заполните поле E-mail');
            return;
        }
        if (inputPassword.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }
        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!inputCheckbox.checked) {
            alert('Подтвердите согласие с нашими Условиями предоставления услуг и Заявлением о конфиденциальности');
        } else {
            popupOpen.classList.add('open');
        }
    }


    let popupClose = document.getElementById('popup_close');
    let popupBtn = document.getElementById('popup_btn');
    let consent = document.getElementById('account');

    function fn() {
        document.querySelector('form').reset();

        popupOpen.classList.remove('open');

        document.getElementsByClassName('form_title')[0].innerText = 'Log in to the system';

        document.getElementsByClassName('name')[0].remove();
        document.getElementsByClassName('email')[0].remove();
        document.getElementsByClassName('repeat_password')[0].remove();
        document.getElementsByClassName('form_label_checkbox')[0].remove();

        btnSubmit.innerText = 'Sign In';

        document.getElementById('account').remove();

        btnSubmit.onclick = function () {
            if (inputUserName.value.trim() === '') {
                alert('Заполните поле Your username');
                return;
            }
            if (inputPassword.value.trim() === '') {
                alert('Введите пароль');
            } else {
                alert('Добро пожаловать, ' + inputUserName.value + '!');
            }
        }
    }

    popupClose.addEventListener("click", fn);
    popupBtn.addEventListener('click', fn);
    consent.addEventListener('click', fn);
}
console.log('Привет, мир!')