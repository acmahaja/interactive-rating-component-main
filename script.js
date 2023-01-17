const form = document.querySelector('form');
form.onsubmit = submitted.bind(form);

function submitted(event) {
    event.preventDefault()
    console.log("Submitting");
}