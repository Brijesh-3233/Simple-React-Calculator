
function add(a,b)
{
    let Sum = a+b;
    return Sum;
}

function sub(a,b)
{
    let sub = a-b;
    return sub;
}
function div(a,b)
{
    let div =a/b;
    div = div.toFixed(2);
    return div;
    
}
function mult(a,b)
{
    let mult=a*b;
    return mult;
}

export  {add,sub,div,mult}