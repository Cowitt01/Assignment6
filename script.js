

//This is a helper function to convert a string
//to a numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) {
    if(!isNaN(numVal)){
        if(Number.isInteger(numVal)) {
            return parseInt(numVal);
        } else {
            return parseFloat(numVal);
        } 
    } 
}

$(document).ready(()=> {
    valueToConvert = 0;
    valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {
        const selectedOptionValue = $('#conversionSelector :selected').val();
        
        valueToConvert = valueHolder.val();
        valueToConvert = convertToNumber(valueToConvert);

        if(valueToConvert < 0) {
            alert("Error: Value to convert cannot be less than zero!");
            return;
        }
        
        //BEGIN SWITCH


        //END SWITCH 

        function reset() {
            
        }
    });
});