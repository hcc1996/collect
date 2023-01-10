function sub() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    if (account === "admin" && password === "admin") {
        window.location.href = 'in/index.html';
    }
}