function greetUser() {
    var name = document.getElementById("nameInput").value;

    if (name === "") {
        document.getElementById("greeting").innerHTML = "Please enter your name first 😊";
    } else {
        document.getElementById("greeting").innerHTML =
            "Hello, " + name + "! 💖 Welcome to the Name Greeter App!";
    }
}