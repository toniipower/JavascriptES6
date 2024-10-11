
const container = document.querySelector('.desplegableContain');
const items = container.querySelectorAll('.item');
const containerCard = document.querySelector('#containerCardId');
/* Por cada elemento llamado item hago un addeventListener, para que me de su posición y hacer un innerHtml personalizado, asi me ahorro algo de código y tiene un comportamiento parecido a un framework */
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        switch (index) {
            case 0:
                containerCard.innerHTML = 
                `<div class="card">
                <div class="cardTitle">MiniCalc</div>
                <div class="cardBody">
                    <p>Pequeña calculadora para juguetear</p>
                </div>
                <a class="cardFooter" href="ejer01/index.html"> <div > Solución </div> </a>
                <a class="cardFooter" href="./main.html"> <div > Atrás </div> </a>
                </div>`;
                break;
            case 1:
                containerCard.innerHTML = 
                `<div class="card">
                <div class="cardTitle">Conversor</div>
                <div class="cardBody">
                    <p>Conversor de bases:</p>
                    <p>Base 2</p>
                    <p>Base 8</p>
                    <p>Base 16</p>
                </div>
                <a class="cardFooter" href="ejer02/index.html"> <div > Solución </div> </a>
                <a class="cardFooter" href="./main.html"> <div > Atrás </div> </a>
                </div>`;
                break;
            default:
                containerCard.innerHTML = `<div id="mensaje">SELECCIONE UN EJERCICIO DE LA BARRA DE NAVEGACION</div>`;
                break;
        }
    });
});

