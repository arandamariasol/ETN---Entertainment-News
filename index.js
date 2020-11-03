window.onload=function() {
    // VALIDACIONES

    var submitObject = {};
    var errorObject = {};

    // Nombre
    var fname = document.getElementById("fname");
    var ename = document.getElementById("name-err");
    ename.style.display = 'none';
    fname.addEventListener('blur',name);

    function name() {
        console.log('se ejecuto',fname.value);
        if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
            console.log('nombre valido');
            submitObject.fullName = fname.value;
            if (errorObject.fullName) {
                delete errorObject.fullName;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('nombre invalido')
            ename.textContent = 'Your full name must contain at least 6 characters and a space'
            ename.style.display = 'block';
            errorObject.fullName = 'Invalid Name';
            if (submitObject.fullName) {
                delete submitObject.fullName;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    fname.addEventListener('focus',nameError);

    function nameError() {
        ename.style.display = 'none';
    }

    // Email

    var femail = document.getElementById("email");
    var efemail = document.getElementById("email-err");
    efemail.style.display = 'none';
    femail.addEventListener('blur',Femail);

    function Femail() {
        console.log('se ejecuto',femail.value);
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(femail.value)){
            console.log("email valido");
            submitObject.fEmail = femail.value;
            if (errorObject.fEmail) {
                delete errorObject.fEmail;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log("email invalido");
            efemail.textContent = 'Invalid email format'
            efemail.style.display = 'block';
            errorObject.fEmail = 'Invalid Email';
            if (submitObject.fEmail) {
                delete submitObject.fEmail;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    femail.addEventListener('focus',emailError);

    function emailError() {
        efemail.style.display = 'none';
    }

    // Contraseña

    var pass = document.getElementById("pass");
    var epass = document.getElementById("pass-err");
    epass.style.display = 'none';
    pass.addEventListener('blur',Pass);

    function Pass() {
        console.log('se ejecuto',pass.value);
        if (pass.value.length >= 8 && /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])/.test(pass.value)) {
            console.log('contraseña valida');
            submitObject.Password = pass.value;
            if (errorObject.Password) {
                delete errorObject.Password;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('contraseña invalida');
            epass.textContent = 'Your password must contain at least 8 characters and it must content letters and numbers'
            epass.style.display = 'block';
            errorObject.Password = 'Invalid Password';
            if (submitObject.Password) {
                delete submitObject.Password;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    pass.addEventListener('focus',passError);

    function passError() {
        epass.style.display = 'none';
    }

    // Repetir contraseña

    var rpass = document.getElementById("rpass");
    var erpass = document.getElementById("rpass-err");
    erpass.style.display = 'none';
    rpass.addEventListener('blur',Rpass);

    function Rpass() {
        console.log('se ejecuto',rpass.value);
            if (rpass.value === pass.value) {
            console.log('repetir contraseña valido');
            submitObject.repPassword = rpass.value;
            if (errorObject.repPassword) {
                delete errorObject.repPassword;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);;
            return true;
        } else {
            console.log('repetir contraseña invalido');
            ename.textContent = 'Passwords do not match'
            erpass.style.display = 'block';
            errorObject.repPassword = 'Invalid Repeat Password';
            if (submitObject.repPassword) {
                delete submitObject.repPassword;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    rpass.addEventListener('focus',rpassError);

    function rpassError() {
        erpass.style.display = 'none';
    }
     
    // Edad

    var age = document.getElementById("age");
    var eage = document.getElementById("age-err");
    eage.style.display = 'none';
    age.addEventListener('blur',Age);

    function Age() {
        console.log('se ejecuto',age.value);
        var ageNumber = Number(age.value);

        if (/^([0-9])*$/.test(age.value) && Number.isInteger(ageNumber) && ageNumber >=18) {
            console.log('edad valido');
            submitObject.sAge = age.value;
            if (errorObject.sAge) {
                delete errorObject.sAge;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('edad invalido');
            eage.textContent = 'You have to be over 18 years old'
            eage.style.display = 'block';
            errorObject.sAge = 'Invalid Age';
            if (submitObject.sAge) {
                delete submitObject.sAge;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    age.addEventListener('focus',ageError);

    function ageError() {
        eage.style.display = 'none';
    }

    // Telefono
    var phone = document.getElementById("phone");
    var ephone = document.getElementById("phone-err");
    ephone.style.display = 'none';
    phone.addEventListener('blur',Phone);

    function Phone() {
        console.log('se ejecuto',phone.value);
        if (/^([0-9])*$/.test(phone.value) && phone.value.length >= 7 && phone.value.indexOf(" ") === -1 && phone.value.indexOf("-") === -1 && phone.value.indexOf(")") === -1 ) {
            console.log('telefono valido');
            submitObject.sPhone = phone.value;
            if (errorObject.sPhone) {
                delete errorObject.sPhone;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('telefono invalido');
            ephone.textContent = 'Your phone must contain at least 7 numbers without spaces, dashes or parentheses'
            ephone.style.display = 'block';
            errorObject.sPhone = 'Invalid Phone';
            if (submitObject.sPhone) {
                delete submitObject.sPhone;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    phone.addEventListener('focus',phoneError);

    function phoneError() {
        ephone.style.display = 'none';
    }

    // Dirección
    var adress = document.getElementById("adress");
    var eadress = document.getElementById("adress-err");
    eadress.style.display = 'none';
    adress.addEventListener('blur',Adress);

    function Adress() {
        console.log('se ejecuto',adress.value);
        if (adress.value.length >= 5 && /^[a-zA-Z0-9\s,'-]*$/.test(adress.value)) {
            console.log('dirección valida');
            submitObject.sAdress = adress.value;
            if (errorObject.sAdress) {
                delete errorObject.sAdress;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('dirección invalida');
            eadress.textContent = 'Your adress must contain at least 5 characters and it must content letters, numbers and a space'
            eadress.style.display = 'block';
            errorObject.sAdress = 'Invalid Adress';
            if (submitObject.sAdress) {
                delete submitObject.sAdress;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    adress.addEventListener('focus',adressError);

    function adressError() {
        eadress.style.display = 'none';
    }

    // Ciudad
    var city = document.getElementById("city");
    var ecity = document.getElementById("city-err");
    ecity.style.display = 'none';
    city.addEventListener('blur',City);

    function City() {
        console.log('se ejecuto',city.value);
        if (city.value.length >= 3) {
            console.log('ciudad valida');
            submitObject.sCity = city.value;
            if (errorObject.sCity) {
                delete errorObject.sCity;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('ciudad invalida');
            ecity.textContent = 'Your city must contain at least 3 characters'
            ecity.style.display = 'block';
            errorObject.sCity = 'Invalid City';
            if (submitObject.sCity) {
                delete submitObject.sCity;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    city.addEventListener('focus',cityError);

    function cityError() {
        ecity.style.display = 'none';
    }

    // Código Postal
    var pc = document.getElementById("pc");
    var epc = document.getElementById("pc-err");
    epc.style.display = 'none';
    pc.addEventListener('blur',PC);

    function PC() {
        console.log('se ejecuto',pc.value);
        if (pc.value.length >= 3) {
            console.log('codigo postal valido');
            submitObject.PostalCode = pc.value;
            if (errorObject.PostalCode) {
                delete errorObject.PostalCode;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('codigo postal invalido');
            epc.textContent = 'Your postal code must contain at least 3 characters'
            epc.style.display = 'block';
            errorObject.PostalCode = 'Invalid Postal Code';
            if (submitObject.PostalCode) {
                delete submitObject.PostalCode;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    pc.addEventListener('focus',pcError);

    function pcError() {
        epc.style.display = 'none';
    }

    // DNI
    var idn = document.getElementById("idn");
    var eidn = document.getElementById("idn-err");
    eidn.style.display = 'none';
    idn.addEventListener('blur',IDn);

    function IDn() {
        console.log('se ejecuto',idn.value);
        if (/^([0-9])*$/.test(idn.value) && idn.value.length >= 7 && idn.value.length <= 8) {
            console.log('DNI valido');
            submitObject.IdentificationNumber = idn.value;
            if (errorObject.IdentificationNumber) {
                delete errorObject.IdentificationNumber;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return true;
        } else {
            console.log('DNI invalido');
            eidn.textContent = 'Your identification number must contain between 7 and 8 numbers'
            eidn.style.display = 'block';
            errorObject.IdentificationNumber = 'Invalid Identification Number';
            if (submitObject.IdentificationNumber) {
                delete submitObject.IdentificationNumber;
            }
            console.log('SUBMIT OBJECT', submitObject);
            console.log('ERROR OBJECT', errorObject);
            return false;
        }
    }

    idn.addEventListener('focus',idnError);

    function idnError() {
        eidn.style.display = 'none';
    }
    // Enviar
    
    submit.addEventListener('click',Submit)

    function Submit(){
    var text1 = '';
    var text2 = '';
    var allFieldsOk = false;

    // valores actuales
    text1 = 'ACTUAL VALUES \n';
    if(submitObject.fullName) {
        text1 = text1 + 'Full name: ' + submitObject.fullName + '\n';
        allFieldsOk = true;
    }
    if(submitObject.fEmail) {
        text1 = text1 + 'Email: ' + submitObject.fEmail + '\n';
    }
    if(submitObject.Password) {
        text1 = text1 + 'Password: ' + submitObject.Password + '\n';
    }
    if(submitObject.repPassword) {
        text1 = text1 + 'Repeated password: ' + submitObject.repPassword + '\n';
    }
    if(submitObject.sAge) {
        text1 = text1 + 'Age: ' + submitObject.sAge + '\n';
    }
    if(submitObject.sPhone) {
        text1 = text1 + 'Phone: ' + submitObject.sPhone + '\n';
    }
    if(submitObject.sAdress) {
        text1 = text1 + 'Adress: ' + submitObject.sAdress + '\n';
    }
    if(submitObject.sCity) {
        text1 = text1 + 'City: ' + submitObject.sCity + '\n';
    }
    if(submitObject.PostalCode) {
        text1 = text1 + 'Postal Code: ' + submitObject.PostalCode + '\n';
    }
    if(submitObject.IdentificationNumber) {
        text1 = text1 + 'Identification Number: ' + submitObject.IdentificationNumber + '\n';
    }

    // valores de error
    text2 = text2 + 'ERRORS \n';
    if(errorObject.fullName) {
        text2 = text2 + '- Full Name \n';
        allFieldsOk = false;
    }
    if(errorObject.fEmail) {
        text2 = text2 + '- Email \n';
        allFieldsOk = false;
    }
    if(errorObject.Password) {
        text2 = text2 + '- Password \n';
        allFieldsOk = false;
    }
    if(errorObject.repPassword) {
        text2 = text2 + '- Repeated Password \n';
        allFieldsOk = false;
    }
    if(errorObject.sAge) {
        text2 = text2 + '- Age \n';
        allFieldsOk = false;
    }
    if(errorObject.sPhone) {
        text2 = text2 + '- Phone \n';
        allFieldsOk = false;
    }
    if(errorObject.sAdress) {
        text2 = text2 + '- Adress \n';
        allFieldsOk = false;
    }
    if(errorObject.sCity) {
        text2 = text2 + '- City \n';
        allFieldsOk = false;
    }
    if(errorObject.PostalCode) {
        text2 = text2 + '- Postal Code \n';
        allFieldsOk = false;
    }
    if(errorObject.IdentificationNumber) {
        text2 = text2 + '- Identification Number \n';
        allFieldsOk = false;
    }
    if (allFieldsOk) {
        alert(text1)
    } else {
        alert(text2)
    }
    
}


    // Titulo

    /* var newh2 = document.createElement('h2');
    newh2.innerHTML = 'Hola' + fname.value;
    fname.addEventListener('keydown',console.log(newh2))*/
   


    }
