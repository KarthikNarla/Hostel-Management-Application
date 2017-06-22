function admin()
{
    var uid = document.admin1.username;
    var passid = document.admin1.password;
    if (validateUsername(uid))
    {
        if (validatePassword(passid))
        {
           return true;
        }
    }
    return false;
}
function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    if (fld.value == "") {
        fld.style.background = '#F24D37';
        error = "Enter a username.\n";
        alert(error);
        document.admin1.username.focus();
        return false;

    }
    else if (illegalChars.test(fld.value)) {
        fld.style.background = '#F24D37';
        error = "The username can contain letters, numbers, and underscores only.\n";
        alert(error);
        document.admin1.username.focus();
        return false;

    } else {
        fld.style.background = 'White';
         return true;
    }
   
}

function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = '#F24D37';
        error = "Enter a password.\n";
        alert(error);
        document.admin1.password.focus();
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The password can contain letters and numbers only.\n";
        fld.style.background = '#F24D37';
        alert(error);
        document.admin1.password.focus();
        return false;

    }
    else {
        fld.style.background = 'White';
        return true;
    }
    
}

