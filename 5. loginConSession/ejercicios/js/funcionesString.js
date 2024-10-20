
const containerString = document.querySelector('.desplegableContainString');
const itemsString = containerString.querySelectorAll('.item');
const containerStringCard = document.querySelector('#containerStringCardId');
/* Por cada elemento llamado item hago un addeventListener, para que me de su posición y hacer un innerHtml personalizado, asi me ahorro algo de código y tiene un comportamiento parecido a un framework */

itemsString.forEach((item, index) => {
    // Muestro cada elemento
    // console.log(item)
    item.addEventListener('click', () => {
        switch (index) {
            case 0:
                containerCard.innerHTML = 
                `<div class="card">
                <div class="cardTitle">Modificador de texto</div>
                <div class="cardBody">
                    <p>Pequeño modificador de texto con el que podemos estar pasando un poco el rato</p>
                </div>
                <a class="cardFooter" href="string/ejer03/index.html"> <div > Solución </div> </a>
                <a class="cardFooter" href="./main.html"> <div > Atrás </div> </a>
                </div>`;
                break;
            default:
                containerCard.innerHTML = `<div id="mensaje">SELECCIONE UN EJERCICIO DE LA BARRA DE NAVEGACION</div>`;
                break;
        }
    });
});

