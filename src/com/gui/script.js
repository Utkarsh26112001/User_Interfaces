function validateForm() {

    let x = document.getElementById("fname").value;
    if (x == "") {
        alert("First name can not be empty!!!!!");
        return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last name can not be empty!!!!!");
        return false;
    }


    if (document.getElementById("male").checked) {
        alert("Congratulations!!! You are a Male");
    }
    if (document.getElementById("female").checked) {
        alert("Congratulations!!! You are a Female");
    }


    if (document.getElementById("h1").checked) {
        alert("You selected Singing");
    }if (document.getElementById("h2").checked) {
        alert("You selected Dancing");
    }if (document.getElementById("h3").checked) {
        alert("You selected Sports");
    }if (document.getElementById("h4").checked) {
        alert("You selected others");
    }


}

