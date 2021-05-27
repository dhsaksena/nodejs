var add = function(a , b)
{
    return a + b;
}

function complexExample(add)
{
    console.warn(add(200,300));
}

complexExample(function(a , b)
{
    return a + b;
})