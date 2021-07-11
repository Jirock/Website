

function start()
{
    var num = 0;
    var x = document.getElementById("Log").value;
    var y = document.getElementById("Pass").value;

    if (x == "Ermacro" && y == "qwe098njkl") {
        document.location.href = "../Desktop/panel.html";
    }
    else {
        alert("Неверный пароль или имя пользователя");
    }
}

