/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/

//Funciones para colocar palabras completas o letras en mayusculas, la usaremos en el ultimo paso 
function mayuscula(nombre){
    let first=nombre.slice(0,1).toUpperCase();
    let resto=nombre.slice(1,nombre.length);
    let palabra=first+resto;
    return palabra;
}

function completo(nombre){
    let resultado=nombre.toUpperCase();
    return resultado;
}
//Final de las funciones --- 

//Datos del ejercicio --- 
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result={};
//Datos del ejercicio ---- 

//Modificando los valores de las claves levels
for(let i=0;i<levels.length;i++){
    let numero=String(i+1);
    let objeto=levels[i];
    objeto.LEVEL="L"+numero;
    levels[i]=objeto;
}
//Modificando los valores de las claves levels

//Añadiendo role super user y role user a la clave "Roles" del objeto foo
foo.roles.push(roleSuperUser,roleUser);
//Añadiendo role super user y role user a la clave "Roles" del objeto foo

//Añadiendo el Array de skills a la clave Skills del objeto foo
for(let i=0; i<skills.length;i++){
    foo.skills.push(skills[i]);
}
//Añadiendo el Array de skills a la clave Skills del objeto foo

//Añadiendo una clave Levels al objeto foo
foo.Levels=levels;
//Añadiendo una clave Levels al objeto foo

//Cambiando a capital la clave name del objeto foo
let capital=foo.name.charAt(0).toUpperCase();
let resto=foo.name.slice(1,3);
foo.name=capital+resto;
//Cambiando a capital la clave name del objeto foo

//Colocando todos los valores de la clave roles del objeto foo en mayuscula
foo.roles[0]=foo.roles[0].toUpperCase();
//Colocando todos los valores de la clave roles del objeto foo en mayuscula

let parcial=Object.values(foo.skills);
let arr=[];

for(let i=0;i<parcial.length;i++){
    let palabra=parcial[i];
    if(palabra=="html"){
        arr.push(completo(palabra));
    }if(palabra=="css"){
        arr.push(completo(palabra));
    }else{
        arr.push(mayuscula(palabra));
    }
}

foo.skills=arr;

result=Object.assign(foo);
console.log(result);

//export result
module.exports = result; 