import throttle from 'lodash.throttle';
console.log(throttle);

// // ------------------ 6.8.--------------
// const formEl = document.querySelector(".feedback-form");
// formEl.addEventListener("submit", checkSubmit);

// const throttle = require("lodash.throttle");

// function checkSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, message }
//     } = event.currentTarget;
//     if (email.value.trim() === "" || message.value.trim() === "") {
//         return alert("Please fill in all the fields!");
//     }
//     console.log({ email:email.value, message:message.value.trim() })
//     event.currentTarget.reset();
// };
// -----------------------------------------------
    
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};
console.log(refs.form);
refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", onTextareaInput);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
// 7.Для того, чтобы поле майл тоже выводилось:
refs.form.addEventListener('input', throttle(e => {
    // console.log('FFFFFFFFFFFF', e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
    // Сделать так, чтобы сохраняло не только сообщение, но и имя, и все в одном обьекте?????
},500));

populateTextarea();

// 2.Останавливаем поведение по умолчанию
// убираем сообщение из хранилища
// Очищаем форму
function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
}

// 1.Получаем значение поля
// сохраняем его в хранилище
// 4.добавляем throttle
// 5.Меняем каррент таргет на таргет
function onTextareaInput(evt) {
    // const message = evt.currentTarget.value;
    const message = evt.target.value;
    console.log('процедура ontext')
    localStorage.setItem('STORAGE_KEY', message);
}

// 3.Получаем значение из хранилища
// Если там что-то было, обновляем DOM
function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage.message;
        refs.form[0].value = savedMessage.email;
    }
    
}
