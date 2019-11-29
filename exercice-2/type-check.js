function type_check_v1(input,type){
    if ( typeof input ==="function" ) return true;
    if ( input.constructor === Array && type === "Array" ) return true;
    return typeof(input) == type;
}

console.log(type_check_v1(1,"boolean"));