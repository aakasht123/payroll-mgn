var user_list = [{ email: 'akshat@gmail.com', password: '123456' },
    { email: 'akash@gmail.com', password: '123456' },
    { email: 'aakash@gmail.com', password: '123456' },
    { email: 'mohit@gmail.com', password: '123456' },
    { email: 'divyata@gmail.com', password: '123456' },
];

$(document).ready(function() {

    $("#loginBtn").click(function() {
        var email = $("#emailInput").val();
        var pasword = $("#passwordInput").val();
        if (email == "" || email == null)
            showWarning('Email required');
        else if (!isEmail(email))
            showWarning('Enter proper email');
        else if (pasword.length < 1 || pasword == null)
            showWarning('Password required');

        else {

            for (var i = 0; i < user_list.length; i++) {
                if (email == user_list[i].email && pasword == user_list[i].password)
                    location.href = 'hr/home.html';
            }
            showWarning('Login Failed!! Check username or password');
        }
    });

    $("#registerBtn").click(function() {
        var email = $("#emailRegister").val();
        var pasword = $("#passwordRegister").val();

        if (email == "" || email == null)
            showWarning('Email required');
        else if (!isEmail(email))
            showWarning('Enter proper email');
        else if (pasword = "" || pasword == null)
            showWarning('Password required');

        else {
            pasword = $("#passwordRegister").val();
            user_list.push({ email: email, password: pasword + "" });
            console.log(user_list);
            showSuccess('Registration Successful. Login to continue');
        }
    });


})

function showWarning(msg) {
    var ele = "<div class='alert alert-warning alert-dismissible'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<strong>Warning!</strong> <span>" + msg + "</span>" +
        "</div>";

    $("body").append(ele);
}

function showSuccess(msg) {
    var ele = "<div class='alert alert-success alert-dismissible'>" +
        "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
        "<span>" + msg + "</span>" +
        "</div>";

    $("body").append(ele);
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}