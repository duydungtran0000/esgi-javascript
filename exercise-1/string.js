function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

// console.log(ucfirst("abc"));
// console.log(ucfirst(null));
// console.log(ucfirst({}));

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    const array = str.toLowerCase().split(" ");

    for (let i = 0; i < array.length; i++) {
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
    if (typeof str !== "string" || str.length === 0) return "";
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

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9-]/g, " ");
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    return array.join("_");
}

// console.log(snake_case("toggle case is the coolest"));
// console.log(snake_case("toggleCase is the coolest"));
// console.log(snake_case("ToggleCase is the 3oolest"));
// console.log(snake_case("ToggleCaseIsTheCool3st"));
// console.log(snake_case("ToggleCase is_the coolest"));
// console.log(snake_case(" toggleCase"));
// console.log(snake_case(null));
// console.log(snake_case({}));

function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/[aA]/gi, "4");
    str = str.replace(/[eE]/gi, "3");
    str = str.replace(/[iI]/gi, "1");
    str = str.replace(/[oO]/gi, "0");
    str = str.replace(/[uU]/gi, "(_)");
    str = str.replace(/[yY]/gi, "7");
    return str;
}

function leet_corrige(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.replace((/[aeiouy]/gi), function (car) {
        switch (car) {
            case "A":
            case "a":
                return 4;
            case "E":
            case "e":
                return 3;
            case "I":
            case "i":
                return 1;
            case "O":
            case "o":
                return 0;
            case "U":
            case "u":
                return '(_)';
            case "Y":
            case "y":
                return 7;
        }
    })
}

// console.log(leet("anaconda"));
// console.log(leet("anacoNDa"));
// console.log(leet("leet"));
// console.log(leet("evaluation"));

function prop_acces(str) {
    if (typeof str !== "string" || str.length === 0) return "";

}

function verlan(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(" ").map(function (word) {
        return word.split("").reverse().join('');
    }).join(" ");
}

// console.log(verlan("Hello Word!"));
console.log(verlan("hello world"));

function yoda(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.split(' ').reverse().join(' ');
}

let codeIndex = 0
function vig(str, code) {
    while (code.length < str.length) {
        code += code;
    }

    return str.split("").map(function (car) {
        car = car.toLowerCase();
        console.log(car);
        const carCode = car.charCodeAt(0) - "a".charCodeAt(0);
        console.log(carCode);
        if (carCode < 0 || carCode > 25)
            return car;
        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

        const encodedCode = (carCode + codeCode) % 26;

        return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
    }).join('');
}

console.log(vig("wikipedia","crypto"));

const prop_access = (object, propertyPath = '') => {
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if (object === null) {
        console.log(object + ' not exist');
        return;
    }

    let newObj = object;
    let path = '';
    for (let prop of propertyPath.split('.')) {
        path += '.' + prop;
        if (newObj.hasOwnProperty(prop)) {
            newObj = newObj[prop];
        } else {
            console.log(path.slice(1) + ' not exist');
            return;
        }
    }

    return newObj
};