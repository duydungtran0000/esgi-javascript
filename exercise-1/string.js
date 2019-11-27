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
    if(typeof str !== "string"  || str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9-]/g, " ");
    var array = capitalize(str);
    array = array.replace(/[^a-zA-Z0-9-]/g, "");
    return array;
}

// console.log(camelCase("test      hello       "));
// console.log(camelCase("test    -@  hello !       "));
// console.log(camelCase('Togglecase is_the coolest'));
// console.log(camelCase(null));
// console.log(camelCase({}));

function snakeCase(str){
    if(typeof str !== "string"  || str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9-]/g, " ");
    const array = str.toLowerCase().split(" ");
    for(let i = 0; i < array.length;i++) {
        array[i] = array[i].toLowerCase();
    }
    return array.join("_"); 
}

console.log(snakeCase("toggle case is the coolest"));
console.log(snakeCase("toggleCase is the coolest"));
console.log(snakeCase("ToggleCase is the 3oolest"));
console.log(snakeCase("ToggleCaseIsTheCool3st"));
console.log(snakeCase("ToggleCase is_the coolest"));
console.log(snakeCase(" toggleCase"));
console.log(snakeCase(null));
console.log(snakeCase({}));

function leet(str){
    if(typeof str !== "string"  || str.length === 0) return "";
    str = str.replace(/[aA]/gi, "4");
    str = str.replace(/[eE]/gi, "3");
    str = str.replace(/[iI]/gi, "1");
    str = str.replace(/[oO]/gi, "0");
    str = str.replace(/[uU]/gi, "(_)");
    str = str.replace(/[yY]/gi, "7");
    return str;
}

console.log(leet("anaconda"));
console.log(leet("anacoNDa"));
console.log(leet("leet"));