/**
* agregar los skills del objeto foo al array result, 
* mediante la funcion map 
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};
let result=[];


lista2=Object.values(foo.skills);
result=lista2.map(function add(elemento){
    result.push(elemento);
    if(result.length==7){
        console.log(result);
    }
})





//export result
module.exports = result; 