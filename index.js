window.onload=function() {
    // VALIDACIONES

    var submitarray = [];
    var errorarray = [];

    // Nombre
    var fname = document.getElementById("fname");
    var ename = document.getElementById("name-err");
    ename.style.display = 'none';
    fname.addEventListener('blur',name);

    function name() {
        console.log('se ejecuto',fname.value);
        if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
            console.log('nombre valido');
            submitarray.push(fname.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('nombre invalido')
            ename.style.display = 'block';
            errorarray.push(fname.value);
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
         submitarray.push(femail.value);
         console.log(submitarray);
         return true;
        } else {
         console.log("email invalido");
         efemail.style.display = 'block';
         errorarray.push(femail.value);
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
            submitarray.push(pass.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('contraseña invalida');
            epass.style.display = 'block';
            errorarray.push(pass.value);
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
            submitarray.push(rpass.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('repetir contraseña invalido');
            erpass.style.display = 'block';
            errorarray.push(rpass.value);
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
            submitarray.push(age.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('edad invalido')
            eage.style.display = 'block';
            errorarray.push(age.value);
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
            submitarray.push(phone.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('telefono invalido');
            ephone.style.display = 'block';
            errorarray.push(phone.value);
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
        if (adress.value.length >= 5 && /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])/.test(adress.value)) {
            console.log('dirección valida');
            submitarray.push(adress.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('dirección invalida');
            eadress.style.display = 'block';
            errorarray.push(adress.value);
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
            submitarray.push(city.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('ciudad invalida');
            ecity.style.display = 'block';
            errorarray.push(city.value);
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
            submitarray.push(pc.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('codigo postal invalido')
            epc.style.display = 'block';
            errorarray.push(pc.value);
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
            submitarray.push(idn.value);
            console.log(submitarray);
            return true;
        } else {
            console.log('DNI invalido')
            eidn.style.display = 'block';
            errorarray.push(idn.value);
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
        if(submitarray.length >=10) {
            alert(submitarray);
        } else {
            alert( 'Error' + errorarray);
        }
    }

    // Titulo

    var newh2 = document.createElement('h2');
    newh2.innerHTML = 'Hola' + fname.value;
    fname.addEventListener('keydown',console.log(newh2))
   


    }
