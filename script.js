/*
Cory Witt
script.js
INFO 1579
Shaw
07/15/2025
*/
 
"use strict";

//The Metrofictator v.2 (Convertalator Edition) is a conversion application that allows users to
// convert between units of measurement. The application supports conversions for
// miles to kilometers, kilometers to miles, feet to meters, meters to feet, pounds to kilograms, kilograms to pounds,
// celsius to fahrenheit and fahrenheit to celsius.

/****************************************************
*               helper functions                    *
*****************************************************/

const calculateKilometers = metricUnit=> (metricUnit * 1.609344);   //Miles to Kilometers calculation
const calculateMiles = metricUnit => (metricUnit * 0.62137);        //Kilometers to Miles calcuation
const calculateKilograms = weight => (weight * 0.45359237);         //Pounds to Kilograms calculation
const calculatePounds = weight => (weight /  0.45359237);           //Kilograms to Pounds calcuation

const calculateMeters = length => length *  0.3048;                 //Feet to Meters calcuations
const calculateFeet = length => length / 0.3048;                    //Meters to Feet calcuation

const calculateFahrenheit = temp => (temp * 1.8) + 32;              //Celsius to Fahrenheit calcuation
const calculateCelsius = temp => (temp-32)  / 1.8;                  //Fahrenheit to Celsius calculation

//Converts a string to numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) {
    if(!isNaN(numVal)){  
       return (Number.isInteger(numVal)) ? parseInt(numVal) : parseFloat(numVal); //rewrite using ternary operators. Returns an integer if the value is an integer, otherwise returns a float.
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
            case 'm2k':             // if miles to kilometers is chosen, call the calculateKilometers function to convert to kilometers. Alert the user with the converted value
                alert( valueHolder.val() + " miles is " + calculateKilometers(valueToConvert).toFixed(2) + " kilometers.");
                reset();
                break;

            case 'k2m':             // if kilometers to miles is chosen, call the function to convert to miles. Alert the user with the converted value
                alert(valueHolder.val() + " kilometers is " + calculateMiles(valueToConvert).toFixed(2) + " miles.");
                reset();
                break;
            case 'p2k':            // if pounds to kilograms is chosen, call the calculateKilograms function to convert to kilograms. Alert the user with the converted value.
                alert(valueHolder.val() + " pounds is " + calculateKilograms(valueToConvert).toFixed(2) + " kilograms.");
                reset();
                break;

            case 'k2p':          // if kilograms to pounds is chosen, call the calculatePounds function to convert to pounds. Alert the user with the converted value.
                alert(valueHolder.val() + " kilograms is " + calculatePounds(valueToConvert).toFixed(2) + " pounds.");
                reset();
                break;

            case 'f2m':       // if feet to meters is chosen, call the calculateMeters function to convert to meters. Alert the user with the converted value.
                alert(valueHolder.val() + " feet is " + calculateMeters(valueToConvert).toFixed(2) + " meters.");
                reset();
                break;

            case 'm2f':     // if meters to feet is chosen, call the calculateFeet function to convert to feet. Alert the user with the converted value.
                alert(valueHolder.val() + " meters is " + calculateFeet(valueToConvert).toFixed(2) + " feet.");
                reset();
                break;

            case 'f2c':       // if farenheit to celcius is chosen, call the calculateCelsius function to convert to celcius. Alert the user with the converted value.
                alert(valueHolder.val() + " degrees fahrenheit is " + calculateCelsius(valueToConvert).toFixed(2)  + " degrees celsius.");
                break;
            case 'c2f':       // if celsius to fahrenheit is chosen, call the calculateFahrenheit function to convert to fahrenheit. Alert the user with the converted value.
                alert(valueHolder.val() + " degrees celsius is " + calculateFahrenheit(valueToConvert).toFixed(2)  + " degrees fahrenheit.");
                reset();
                break;
    }
  });

});

function reset() {              // resets the valueHolder to 0.
    $('#valueHolder').val(0);
}