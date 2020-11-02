window.onload=function() {
    // VALIDACIONES

    // Nombre
    var fname = document.getElementById("fname");
    var efname = document.getElementsByClassName("f1");
    fname.addEventListener('blur',name);

    function name() {
        console.log('se ejecuto',fname.value);
        console.log('se ejecuto',efname);
        if (fname.value.length > 6 && fname.value.indexOf(" ") != -1) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
            efname.style.display = 'block';
        }
    }

    // Email

    var femail = document.getElementById("email");
    femail.addEventListener('blur',Femail);

    function Femail() {
        console.log('se ejecuto',femail.value);
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(femail.value)){
         console.log("La dirección de email es correcta.");
         return true;
        } else {
         console.log("La dirección de email es incorrecta.");
         return false;
        }
      }

    // Contraseña

    var pass = document.getElementById("pass");
    pass.addEventListener('blur',Pass);

    function Pass() {
        console.log('se ejecuto',pass.value);
            if (pass.value.length >= 8 && /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])/.test(pass.value)) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }
    // Repetir contraseña

    var rpass = document.getElementById("rpass");
    rpass.addEventListener('blur',Rpass);

    function Rpass() {
        console.log('se ejecuto',rpass.value);
            if (rpass.value === pass.value) {
            console.log('es valido');
            return true
        } else {
            console.log('no valido');
            return false
        }
    }
     
    // Edad

    var age = document.getElementById("age");
    age.addEventListener('blur',Age);

    function Age() {
        console.log('se ejecuto',age.value);
        if (/^([0-9])*$/.test(age.value) && Number.isInteger(age.value) && age.value >=18) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }

    // Telefono
    var phone = document.getElementById("phone");
    phone.addEventListener('blur',Phone);

    function Phone() {
        console.log('se ejecuto',phone.value);
        if (phone.value.length >= 7 && phone.value.indexOf(" ") === -1 && phone.value.indexOf("-") === -1 && phone.value.indexOf(")") === -1 ) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }

    // Dirección
    var adress = document.getElementById("adress");
    adress.addEventListener('blur',Adress);

    function Adress() {
        console.log('se ejecuto',adress.value);
        if (adress.value.length >= 5 && /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])/.test(adress.value)) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }
    // Ciudad
    var city = document.getElementById("city");
    city.addEventListener('blur',City);

    function City() {
        console.log('se ejecuto',city.value);
        if (city.value.length >= 3) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }

    // Código Postal
    var pc = document.getElementById("pc");
    pc.addEventListener('blur',PC);

    function PC() {
        console.log('se ejecuto',pc.value);
        if (pc.value.length >= 3) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }

    // DNI
    var idn = document.getElementById("idn");
    idn.addEventListener('blur',IDn);

    function IDn() {
        console.log('se ejecuto',idn.value);
        if (/^([0-9])*$/.test(idn.value) && idn.value.length >= 7 && idn.value.length <= 8) {
            console.log('es valido')
            return true
        } else {
            console.log('no valido')
            return false
        }
    }
    }
