// CALCULAR EL CUADRADO DE UN NUMERO x*x y despues el cubo
/*operciones
a)x^2-X-10
B)(X-3)*2
C)X*X^2+20
D)(X/2)+5
E)X^3+X^2+10
F)(X*10)*5 
*/
//1
function cubo(num)
{
return num * num * num
}


//2) 
function cuadrado(num)
{
    return  num * num
}

//3
function operacion1(num)
{
    return  (num * num) - num - 10
}

//b
function operacion2(num)
{
let resultado= (num - 3) * 2
return resultado
}
//c
function operacion3(num)
{
let resultado = num * num ^ 2 + 20
return resultado
}
//d
function operacion4(num)
{
let resultado = (num /2 ) + 5
return resultado
}
//e
function operacion5(num)
{
let resultado = num ^ 3 + num ^ 2 + 10
return resultado
}
//f
function operacion6(num)
{
    let resultado = (num * 10) * 5 
return resultado
}
