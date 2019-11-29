function type_check_v1(input,type){
    if( input.constructor === Array && type === "Array") return true;
    return typeof(input) == type;
}

console.log(type_check_v1(1,"boolean"));