exports.times = (base, multiplier) => {
    if(multiplier == 0 || base == 0){
        console.log("Base or Multplier cannot be 0! ");
        return 0;
    }
    return (base * multiplier);
}

exports.divide = (base, divisor) => {
    if(base == 0 || divisor == 0){
        console.log("Base or Divisor must not be 0! ");
        return 0;
    }
    return (base / divisor);
}