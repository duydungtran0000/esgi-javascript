function type_check_v1(var1, type) {
    switch (typeof var1) {
        case 'object':
            if (Array.isArray(var1)) return type === "array";
            if (var1 === null) return type ==="null";
        default:
            return typeof var1 === type;
    }
}

console.log(type_check_v1([1, 2, 3], "Array"));