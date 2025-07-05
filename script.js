/*
Cory Witt
script.js
INFO 1579
Shaw
07/04/2025
*/
 
"use strict";


/****************************************************
*               helper functions                    *
*****************************************************/
//const $ = selector => document.querySelector(selector); 

const calculateKilometers = metricUnit=> (metricUnit * 1.609344);   //celcius to kilometers calculation
const calculateMiles = metricUnit => (metricUnit * 0.62137);        //farenheit to miles calcuation
const calculateKilograms = weight => (weight * 0.45359237);         //celcius to farenheit calculation
const calculatePounds = weight => (weight /  0.45359237);           //farenheit to celcius calcuation

const calculateCelsius = temp => (temp-32) * 5/9;                  //celcius to farenheit calculation
const calculateFahrenheit = temp => temp * 9/5 + 32;               //farenheit to celcius calcuation
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
            return parseFloat(numVal);
           //    throw exception (e);
        } 
    } 
}

$(document).ready(()=> {
    let valueToConvert = 0;
    const valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {
        const selectedOptionValue = $('#conversionSelector :selected').val();
        
        try {
            valueToConvert = valueHolder.val();
            $('#valueHolder') = convertToNumber(valueToConvert); 
        } catch (error) {
            
        }

        if(valueToConvert < 0) {
            alert("Error: Value to convert cannot be less than zero!");
            return;
        }
 
        switch (selectedOptionValue) {
            case 'm2k':
                $('#valueHolder').val(calculateKilometers(valueToConvert).toFixed(2));
                break;

            case 'k2m':
                $('#valueHolder').val(calculateMiles(valueToConvert).toFixed(2));
                break;

            case 'p2k':
                $('#valueHolder').val(calculateKilograms(valueToConvert).toFixed(2));
                break;

            case 'k2p':
                $('#valueHolder').val(calculatePounds(valueToConvert).toFixed(2));
                break;

            case 'f2m':
                $('#valueHolder').val(calculateMeters(valueToConvert).toFixed(2));
                break;

            case 'm2f':
                $('#valueHolder').val(calculateFeet(valueToConvert).toFixed(2));
                break;

            case 'f2c':
                $('#valueHolder').val(calculateCelsius(valueToConvert).toFixed(2));
                break;
            case 'c2f':
                $('#valueHolder').val(calculateFahrenheit(valueToConvert).toFixed(2));
                break;
    }
  });

});

function reset() {
    $('#valueHolder') = 0;
}