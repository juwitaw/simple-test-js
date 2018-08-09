
module.exports = function (number) {
    var holeNumber = ["4","6","8", "9","0"]
    var results = 0

    if (typeof number == "number"){
        for (i = 0; i<number.toString().length; i++){
            if (holeNumber.indexOf(number.toString().charAt(i))>-1){
                results += number.toString().charAt(i) == "8" ? 2 : 1;
            }
        }
        
        if(results == 0) {
            return number;
        }
    }
    else{
        throw new Error("Your input must be integer");
    }

    return results;
}