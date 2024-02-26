let username = "eduard";
let password = "123";
function validation(){
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    if(inputUsername === "" || inputPassword === ""){
        alert("Validation Error");
    }
    else if (inputUsername === username && inputPassword === password){
        alert("Hello :)")
    }
    else if (inputUsername === username && inputPassword !== password){
        alert("Incorrect password")
    }
    else if (inputUsername !== username && inputPassword === password){
        alert("Incorrect username")
    } else {
            alert("Error")
    }
}