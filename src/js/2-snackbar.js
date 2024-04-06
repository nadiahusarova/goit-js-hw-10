import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formOfDelay = document.querySelector(".form");
formOfDelay.addEventListener('submit', event => {
    event.preventDefault();
    const delay = parseInt(event.currentTarget.elements.delay.value);

    const selectedRadioButton = event.currentTarget.querySelector('input[name="state"]:checked');
    const promiseState = selectedRadioButton ? selectedRadioButton.value : null;

    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promiseState === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise.then((delayValue) => {
        iziToast.success({
            title: 'Success',
            color: 'green',
            position: "topRight",
            message: `Fulfilled promise in ${delayValue}ms`,
        });
    }).catch((delayValue) => {
        iziToast.error({
            title: 'Error',
            color: 'red',
            position: "topRight",
            message: `Rejected promise in ${delayValue}ms`,
        });
    });
});