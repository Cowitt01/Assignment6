/*
Cory Witt
script.js
INFO 1579
Shaw
07/12/2025
*/
 
"use strict";

//The Metrofictator v.2  is a unit conversion application that allows users to convert between various units of measurement.
//// It supports conversions for distance (miles to kilometers and vice versa), weight (pounds to kilograms and vice versa),
// temperature (Fahrenheit to Celsius and vice versa), and length (feet to meters and vice versa).
//// The application provides a user-friendly interface with a dropdown menu for selecting the type of conversion and an input field for entering the value to be converted.
//// The converted value is displayed in the same input field after the conversion is performed.


/****************************************************
*               helper functions                    *
*****************************************************/

const calculateKilometers = metricUnit=> (metricUnit * 1.609344);   //miles to kilometers calculation
const calculateMiles = metricUnit => (metricUnit * 0.62137);        //kilometers to miles calcuation
const calculateKilograms = weight => (weight * 0.45359237);         //pounds to kilograms calculation
const calculatePounds = weight => (weight /  0.45359237);           //kilograms to pounds calcuation

const calculateCelsius = temp => (temp-32) * 5/9;                  //farenheit to celcius calculation
const calculateFahrenheit = temp => temp * 9/5 + 32;               //celcius to farenheit calcuation
const calculateMeters = length => length / 3.2808;                 //feet to meters calcuations
const calculateFeet = length => length * 3.2808;                   //meters to feet calcuation

//Converts a string to numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) {
    if(!isNaN(numVal)){
        if(Number.isInteger(numVal)) {
            return parseInt(numVal);
        } else {
            throw new Error("Invalid number");
        } 
    } 
}

$(document).ready(()=> {    
    let valueToConvert = 0;
    const valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {   // event listener for convert button.
        const selectedOptionValue = $('#conversionSelector :selected').val(); // gets the value of the selected option for conversion   
        
        try {
            valueToConvert = valueHolder.val();
            $('#valueHolder').val(convertToNumber(valueToConvert));  // calls convertToNumber to convert the input value to a number
        } catch (error) {
            alert("Error: " + error.message);  // if the value is not a number, alert the user
            reset();  // resets the valueHolder to 0 and sets focus to it 
            return;          
        }

        if(valueToConvert < 0) {    // if the value to convert is less than 0, alert the user and call reset() function (to reset the valueHolder)
            alert("Error: Value to convert cannot be less than zero!");
            reset();
            return;
        }
 
        switch (selectedOptionValue) {
            case 'm2k':             // if miles to kilometers is chosen, call the function to convert to kilometers
                $('#valueHolder').val(calculateKilometers(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " miles is " + valueToConvert + " kilometers.");
                break;

            case 'k2m':             // if kilometers to miles is chosen, call the function to convert to miles
                $('#valueHolder').val(calculateMiles(valueToConvert).toFixed(2));
                reset
                break;

            case 'p2k':            // if pounds to kilograms is chosen, call the function to convert to kilograms
                $('#valueHolder').val(calculateKilograms(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " pounds is " + valueToConvert + " kilograms.");
                reset();
                break;

            case 'k2p':          // if kilograms to pounds is chosen, call the function to convert to pounds
                $('#valueHolder').val(calculatePounds(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " kilograms is " + valueToConvert + " pounds.");
                reset();
                break;

            case 'f2m':       // if feet to meters is chosen, call the function to convert to meters
                $('#valueHolder').val(calculateMeters(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " feet is " + valueToConvert + " meters.");
                reset();
                break;

            case 'm2f':     // if meters to feet is chosen, call the function to convert to feet
                $('#valueHolder').val(calculateFeet(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " meters is " + valueToConvert + " feet.");
                reset();
                break;

            case 'f2c':       // if farenheit to celcius is chosen, call the function to convert to celcius
                $('#valueHolder').val(calculateCelsius(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " Fahrenheit is " + valueToConvert + " Celsius.");
                break;
            case 'c2f':    // if celcius to farenheit is chosen, call the function to convert to farenheit
                $('#valueHolder').val(calculateFahrenheit(valueToConvert).toFixed(2));
                alert(valueHolder.val() + " Celsius is " + valueToConvert + " Fahrenheit.");
                reset();
                break;
    }
  });

});

function reset() {              // resets the valueHolder to 0 and sets focus to it.
    $('#valueHolder').val(0);
    $('#valueHolder').focus();
}