let rating = -1;
let submitted = false;

function submit(event) {
    console.log("Submitting");
}


function selectedRating(number){
    rating = number;
    let buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++) {
        try {
            buttons[i].classList.remove('selected');
        } catch (error) {
            continue;
        }
    }
    document.getElementById(number).classList.add('selected')
}