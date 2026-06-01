
const tarjetas = document.querySelectorAll('.tarjeta');
const contadorDisplay = document.getElementById('contador-seleccion'); // El nuevo ID en la parte superior

tarjetas.forEach(t => {
    t.addEventListener('click', () => {
        t.classList.toggle('seleccionada');
        
        const seleccionadas = document.querySelectorAll('.seleccionada');
        
       
        if (contadorDisplay) {
            contadorDisplay.innerText = seleccionadas.length;
        }


        const contadorDestacados = document.getElementById('contador');
        if (contadorDestacados) {
            contadorDestacados.innerText = seleccionadas.length;
        }


        actualizarListado(seleccionadas);
    });
});

function actualizarListado(seleccionadas) {
    const contenedorListado = document.getElementById('contenedor-items');
    if (!contenedorListado) return;
    
    contenedorListado.innerHTML = ""; 
    

    Array.from(seleccionadas).map(t => t.innerText).forEach(nombre => {
        const p = document.createElement('p');
        p.innerText = "Producto elegido: " + nombre;
        contenedorListado.appendChild(p);
    });
}