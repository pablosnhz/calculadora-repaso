// agrega a la pantalla valor de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
// vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
// tal y como agregue en la primera calculadora que hice
// utilizando el EVAL para los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}