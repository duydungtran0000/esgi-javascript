function ucfirst(str) {
    if(typeof str !=="string"  || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

// console.log(ucfirst("abc"));
// console.log(ucfirst(null));
// console.log(ucfirst({}));

function capitalize(str) {
    if(typeof str !== "string"  || str.length === 0) return "";
    
    const array = str.toLowerCase().split(" ");

    for(let i = 0; i < array.length;i++) {
        array[i] = ucfirst(array[i]);
    }
    return array.join(" ");
/**
 * return str 
 * .toLowerCase()
 * .split(function(item) {
 *  return ucfirst(item);
 * })
 */
}

console.log(capitalize("test hello"));

function camelCase(str) {
    str = str.replace(/[^a-zA-Z0-9-]/g, " ");
    if(typeof str !== "string"  || str.length === 0) return "";
    var array = capitalize(str);
    array = array.replace(/[^a-zA-Z0-9-]/g, "");
    return array;
}

// console.log(camelCase("test      hello       "));
// console.log(camelCase("test    -@  hello !       "));
console.log(camelCase('Togglecase is_the coolest'));


function snakeCase(str){
    if(typeof str !== "string"  || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for(let i = 0; i < array.length;i++) {
        array[i] = array[i].toLowerCase();
    }
    return array.join("_"); 
}

console.log(snakeCase("test Hello@@@"));
