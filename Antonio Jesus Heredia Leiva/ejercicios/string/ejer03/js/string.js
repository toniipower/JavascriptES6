const cadena = document.getElementById("cadena") ;
const mayuscula = document.getElementById("mayuscula");
const minuscula = document.getElementById("minuscula");
const primeraMayus = document.getElementById("primeraMayus") ;
const ultimaMayus = document.getElementById("ultimaMayus") ;
const ultimaMinus = document.getElementById("ultimaMinus") ;
const primeraMinus = document.getElementById("primeraMinus") ;
const mayusAEI = document.getElementById("mayusAEI") ;
const minusAEI = document.getElementById("minusAEI") ;
const mayusBCD = document.getElementById("mayusBCD") ;
const minusBCD = document.getElementById("minusBCD") ;
const random = document.getElementById("random") ;
const velMas = document.getElementById("velMas") ;
const velMenos = document.getElementById("VelMenos") ;
const stopp = document.getElementById("stop") ;
const velocidad = document.getElementById("velocidad") ;


mayuscula.addEventListener("click", c_mayuscula);
minuscula.addEventListener("click", c_minuscula);
ultimaMayus.addEventListener("click", c_ultimaMayus) ;
ultimaMinus.addEventListener("click", c_ultimaMinus) ;
primeraMayus.addEventListener("click", c_primeraMayus) ;
primeraMinus.addEventListener("click", c_primeraMinus) ;
mayusAEI.addEventListener("click", c_mayusAEI) ;
mayusBCD.addEventListener("click", c_mayusBCD) ;
minusBCD.addEventListener("click", c_minusBCD) ;
minusAEI.addEventListener("click", c_minusAEI) ;


stopp.addEventListener("click", c_stop);
random.addEventListener("click", c_random);
velMenos.addEventListener("click", c_velMenos);
velMas.addEventListener("click", c_velMas);


let randomStatus = false;
let speed ;
let intervalRandom ;

function c_velMas() {
    speed = Math.min(speed * 2, 10000000);
}
function c_velMenos() {
    if (speed > 100) {
        speed = Math.max(speed / 2, 100);
    }
}
function c_stop() {
    intervalRandom?clearInterval(intervalRandom):""
    // speed = 1000;
    velocidad.value = 0 + 's';
}

function c_random() {
    randomStatus==true?randomStatus=false:true ;
    // console.log(randomStatus + " random btn");

    console.log("Comienza el random");
    speed = 1000;
    let n_random;
    intervalRandom = setInterval(() => {
        // console.log(n_random);
        n_random = Math.round((Math.random() * 9));
        // console.log(speed);
        velocidad.value = speed/1000 + 's';
        switch (n_random) {
            case 0:
            case 1:
                c_mayuscula() ;
                break;
            case 2:
                c_primeraMayus() ;
                break;
            case 3:
                c_ultimaMayus() ;
                break;
            case 4:
                c_primeraMinus() ;
                break;
            case 5:
                c_ultimaMinus() ;
                break;
            case 6:
                c_mayusBCD() ;
                break;
            case 7:
                c_minusBCD() ;
                break;
            case 8:
                c_mayusAEI() ;
                break;
            case 9:
                c_minusAEI() ;            
                break;
            default:
                alert("Hubo algun error")
                break;
        }
    }, speed);
}


function c_mayuscula() {
    cadena.value = cadena.value.toUpperCase();
}

function c_minuscula() {
    cadena.value = cadena.value.toLowerCase();
}

function c_ultimaMayus() {
    let newText = "";
    //convierto mi cadena en array

    let words = cadena.value.split(" ")
    words.forEach((word, index) => {
        if (word.length > 0) {
            // Cambiar la primera letra a mayúscula y mantener el resto igual
            words[index] = word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase() ;
        }
    });
    
    newText = words.join(' ');
    cadena.value = newText;
}

function c_ultimaMinus() {

    let newText = "";
    //convierto mi cadena en array

    let words = cadena.value.split(" ")
    words.forEach((word, index) => {
        if (word.length > 0) {
            // Cambiar la primera letra a mayúscula y mantener el resto igual
            words[index] = word.slice(0, -1) + word.charAt(word.length - 1).toLowerCase() ;
        }
    });
    
    newText = words.join(' ');
    cadena.value = newText;
}

function c_primeraMayus(){
    let newText = "";
    //convierto mi cadena en array

    let words = cadena.value.split(" ")
    words.forEach((word, index) => {
        if (word.length > 0) {
            // Cambiar la primera letra a mayúscula y mantener el resto igual
            words[index] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    
    newText = words.join(' ');
    cadena.value = newText;
}

function c_primeraMinus() {
    let newText = "";
    //convierto mi cadena en array

    let words = cadena.value.split(" ")
    words.forEach((word, index) => {
        if (word.length > 0) {
            // Cambiar la primera letra a mayúscula y mantener el resto igual
            words[index] = word.charAt(0).toLowerCase() + word.slice(1);
        }
    });
    
    newText = words.join(' ');
    cadena.value = newText;
}

function c_mayusAEI(){
    let newText = "";
    // convierto mi cadena en array
    let words = cadena.value.split(" ");

    words.forEach((word, index) => {
        let nuevaPalabra = '';
        for (let i = 0; i < word.length; i++) {
            let letra = word[i];
            // Verificar si es una vocal
            if ('aeiouáéíóú'.includes(letra.toLowerCase())) {
                nuevaPalabra += letra.toUpperCase(); 
            } else {
                nuevaPalabra += letra; 
            }
        }
        words[index] = nuevaPalabra; 
    });

    // Unir las palabras en una nueva cadena
    newText = words.join(' ');
    cadena.value = newText; // Asignar el nuevo texto al textarea
};

function c_mayusBCD(){
    let newText = "";
    // convierto mi cadena en array
    let words = cadena.value.split(" ");

    words.forEach((word, index) => {
        let nuevaPalabra = '';
        for (let i = 0; i < word.length; i++) {
            let letra = word[i];
            // Verificar si es una vocal
            if (!'aeiouáéíóú'.includes(letra.toLowerCase())) {
                nuevaPalabra += letra.toUpperCase(); 
            } else {
                nuevaPalabra += letra; 
            }
        }
        words[index] = nuevaPalabra; 
    });

    // Unir las palabras en una nueva cadena
    newText = words.join(' ');
    cadena.value = newText; // Asignar el nuevo texto al textarea
};

function c_minusBCD(){
    let newText = "";
    
    // convierto mi cadena en array
    let words = cadena.value.split(" ");

    words.forEach((word, index) => {
        let nuevaPalabra = '';
        for (let i = 0; i < word.length; i++) {
            let letra = word[i];
            // Verificar si NO es una vocal
            if (!'AEIOUÁÉÍÓÚ'.includes(letra.toUpperCase())) {
                nuevaPalabra += letra.toLowerCase(); 
            } else {
                nuevaPalabra += letra; 
            }
        }
        words[index] = nuevaPalabra; 
    });

    // Unir las palabras en una nueva cadena
    newText = words.join(' ');
    cadena.value = newText; // Asignar el nuevo texto al textarea
};

function c_minusAEI(){
    let newText = "";
    // convierto mi cadena en array
    let words = cadena.value.split(" ");

    words.forEach((word, index) => {
        let nuevaPalabra = '';
        for (let i = 0; i < word.length; i++) {
            let letra = word[i];
            // Verificar si es una vocal
            if ('AEIOUÁÉÍÓÚ'.includes(letra.toUpperCase())) {
                nuevaPalabra += letra.toLowerCase(); 
            } else {
                nuevaPalabra += letra; 
            }
        }
        words[index] = nuevaPalabra; 
    });

    // Unir las palabras en una nueva cadena
    newText = words.join(' ');
    cadena.value = newText; // Asignar el nuevo texto al textarea
};



document.getElementById('velocidad').addEventListener('change', () => {
    velocidad.value = 4000;
});

document.getElementById('volver').addEventListener('click', () => {
    window.history.back();
});