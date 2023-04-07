
//event delegation

const form = document.getElementById('formulaire')
form.addEventListener('click', function (e)){
    // si type == radio on sette citySelected à true
    if (e.target.type == "radio") {
        console.log('radio touché')
        selected = true
    }
}

let citySelected = false;

const myform = document.getElementById('myform')
myform.addEventListener('click', function (e) {
    if (e.target.type == 'radio') {
        console.log('radio touché')
        citySelected = true
    }
});