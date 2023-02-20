function  verificar(event) {
    event.preventDefault()
    let n1 = document.getElementById('numero-a')
    let n2 = document.getElementById('numero-b')
    let valor_a = Number(n1.value)
    let valor_b = Number(n2.value)
    let res = document.getElementById('res')
     if ( valor_a < valor_b)  {
    alert("valido");
    res.innerHTML=`O numero ${valor_a}  é menor que o numero ${valor_b}`
        } else {
    alert('invalido');
    res.innerHTML=`O numero ${valor_a}  é maior que o numero ${valor_b}`
    
 }
 
 }
 


