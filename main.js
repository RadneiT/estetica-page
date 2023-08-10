// Variables
// manicura integral
let curso1  = ['Incluye kit de inicio', 'No incluye modelos para prueba final', 'No incluye totalidad de materiales', 'Lista de herramientas y productos se entrega una vez matriculado', 'Incluye certificado', 'Curso para principiantes', 'Instructoras: Daniela Pino, Mayra Alfaro', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Valor curso: $200.000', 'Valor matricula: $30.000  ','Valor total curso: $230.000']

// Corte dama y varon
let curso2  = ['No incluye kit de inicio', 'No incluye modelos', 'No incluye totalidad de materiales', 'Lista de herramientas y productos se entrega una vez matriculado', 'Incluye certificado', 'Curso para principiantes y profesionales', 'Instructoras: Luz Guerrero - Marcela Amante', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Valor curso: $170.000', 'Valor matricula: $30.000  ','Valor total curso: $200.000']

// depilacion
let curso3  = ['Incluye kit de inicio', 'No incluye TOTALIDAD de modelos', 'INCLUYE TOTALIDAD de materiales', 'Incluye certificado', 'Curso para principiantes ', 'Curso para principiantes', 'Instructoras: Luz Guerrero', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Valor curso: $100.000', 'Valor matricula: $50.000  ','Valor total curso: $150.000']

// taller lifting de pestaña
let curso4  = ['Horario de clases: lunes 15.00 a 18.00 hrs', 'Fecha de inicio: no definido', 'INCLUYE TOTALIDAD de materiales', 'No incluye kit de inicio', 'No incluye TOTALIDAD de modelos', 'INCLUYE TOTALIDAD de materiales', 'Incluye certificado', 'Curso para principiantes', 'Instructora: Luz Guerrero', 'Valor curso: $60.000', 'Valor matricula: $20.000','Valor total curso: $80.000']

// express
let curso5  = ['No incluye kit de inicio', 'No incluye TOTALIDAD de modelos', 'INCLUYE TOTALIDAD de materiales', 'Incluye certificado', 'Curso para principiantes – curso personalizado', 'Instructora: Luz Guerrero', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Valor curso: $150.000', 'Valor matricula: $50.000  ', 'Valor total curso: $200.000']

// trenzas
let curso6  = ['No incluye kit de inicio', 'INCLUYE TOTALIDAD de materiales', 'Incluye certificado', 'Curso para principiantes y profesionales', 'Instructora: Luz Guerrero y Marcela Amante', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Horario de clases: no definido', 'Valor curso: $50.000', 'Valor matricula: $30.000', 'Valor total curso: $80.000']

// Dama y varon
let curso7  = ['No incluye kit de inicio', 'NO INCLUYE TOTALIDAD de materiales', 'Incluye certificado', 'Curso para principiantes', 'Instructora: Luz Guerrero y Marcela Amante', 'Horario de clases: no definido', 'Fecha de inicio: no definido', 'Valor curso: $150.000', 'Valor matricula: $50.000', 'Valor total curso: $200.000']

// html
const title = document.querySelector('.contenido h3').textContent;
const courses = document.querySelectorAll('.opcion');
const xs = document.getElementById('idcorte');
const courseTitle = document.getElementById('uwu');


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    console.log('Pagina cargada correctamente');
    getInformation();
})

// Funciones
function getInformation() {
    let a = 0;
    xs.addEventListener('click', () => {
        courseTitle.innerHTML = title;
        
        if (title == 'Taller Corte Dama y varon') {
            if(a == 0){
                getCourse(curso2);
                a = 1;
            }
        }
    });
}

 

function getCourse(curso) {
    
    for (let i = 0; i <= curso.length - 1; i++) {
        ul.innerHTML += `<li>${curso[i]}</li>`;
    };
}







