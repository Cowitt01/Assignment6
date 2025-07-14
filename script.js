/*
Cory Witt
script.js
INFO 1579
Shaw
07/12/2025
*/
 
"use strict";

//The Metrofictator v.2 (Convertalator Edition) is a unit conversion application that allows users to convert between various units of measurement.
//// It supports conversions for distance (miles to kilometers and vice versa), weight (pounds to kilograms and vice versa),
// temperature (Fahrenheit to Celsius and vice versa), and length (feet to meters and vice versa).
 

/****************************************************
*               helper functions                    *
*****************************************************/

const calculateKilometers = metricUnit=> (metricUnit * 1.609344);   //Miles to Kilometers calculation
const calculateMiles = metricUnit => (metricUnit * 0.62137);        //Kilometers to Miles calcuation
const calculateKilograms = weight => (weight * 0.45359237);         //Pounds to Kilograms calculation
const calculatePounds = weight => (weight /  0.45359237);           //Kilograms to Pounds calcuation

const calculateCelsius = temp => (temp-32) * 5/9;                  //Farenheit to Celcius calculation
const calculateFahrenheit = temp => temp * 9/5 + 32;               //Celcius to Farenheit calcuation
const calculateMeters = length => length / 3.2808;                 //Feet to Meters calcuations
const calculateFeet = length => length * 3.2808;                   //Meters to Feet calcuation

  
//Converts a string to numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) {
    if(!isNaN(numVal)){  
       return (Number.isInteger(numVal)) ? parseInt(numVal) : parseFloat(numVal);
    } else {
        throw new Error("Error: Value to convert is not a valid number!");
    }
}

$(document).ready(()=> {    
    let valueToConvert = 0;
    const valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {   //event listener for convert button.
        const selectedOptionValue = $('#conversionSelector :selected').val(); // gets the value of the selected option for conversion   
        
        try {
            valueToConvert = (convertToNumber(valueHolder.val()));  // calls convertToNumber to convert the input value to a number
        } catch (error) {
            alert("Error: " + error.message);  // if the value is not a number, alert the user
            reset();  // resets the valueHolder to 0 and sets focus to it 
            return;          
        }

        if(valueToConvert < 0) {    // if the value to convert is less than 0, alert the user and call reset() function (to reset the valueHolder)
            alert("Error: Value to convert cannot be less than zero!");
            reset();
            return;
        }else if(valueToConvert === 0) {  // if the value to convert is 0, alert the user and call reset() function (to reset the valueHolder)
            alert("Error: Value to convert cannot be zero!");
            reset();
            return;
        }
 
        switch (selectedOptionValue) {
            case 'm2k':             // if miles to kilometers is chosen, call the function to convert to kilometers. Alert the user with the converted value
                alert( valueHolder.val() + " miles is " + calculateKilometers(valueToConvert).toFixed(2) + " kilometers.");
                reset();
                break;

            case 'k2m':             // if kilometers to miles is chosen, call the function to convert to miles. Alert the user with the converted value
                alert(valueHolder.val() + " kilometers is " + calculateMiles(valueToConvert) + " miles.");
                reset();
                break;
            case 'p2k':            // if pounds to kilograms is chosen, call the function to convert to kilograms. Alert the user with the converted value.
                alert(valueHolder.val() + " pounds is " + calculateKilograms(valueToConvert) + " kilograms.");
                reset();
                break;

            case 'k2p':          // if kilograms to pounds is chosen, call the function to convert to pounds. Alert the user with the converted value.
                alert(valueHolder.val() + " kilograms is " + calculatePounds(valueToConvert) + " pounds.");
                reset();
                break;

            case 'f2m':       // if feet to meters is chosen, call the function to convert to meters. Alert the user with the converted value.
                alert(valueHolder.val() + " feet is " + calculateMeters(valueToConvert) + " meters.");
                reset();
                break;

            case 'm2f':     // if meters to feet is chosen, call the function to convert to feet. Alert the user with the converted value.
                alert(valueHolder.val() + " meters is " + calculateFeet(valueToConvert) + " feet.");
                reset();
                break;

            case 'f2c':       // if farenheit to celcius is chosen, call the function to convert to celcius. Alert the user with the converted value.
                alert(valueHolder.val() + " degrees fahrenheit is " + calculateCelsius(valueToConvert)  + " degrees celsius.");
                break;
            case 'c2f':    // if celcius to farenheit is chosen, call the function to convert to farenheit. Alert the user with the converted value.
                alert(valueHolder.val() + " degrees celsius is " + calculateFahrenheit(valueToConvert)  + " degrees fahrenheit.");
                reset();
                break;
    }
  });

});

function reset() {              // resets the valueHolder to 0 and sets focus to it.
    $('#valueHolder').val(0);
    $('#valueHolder').focus();
}