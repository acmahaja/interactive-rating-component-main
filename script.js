let rating = 5;
let submitted = false;

function submit() {
    document.getElementById("FeedbackCard").classList.add('hidden')
    document.getElementById("ThankCard").classList.remove('hidden')
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
document.getElementById("UserRating").innerHTML = rating