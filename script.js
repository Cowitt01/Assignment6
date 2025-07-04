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
const $ = selector => document.querySelector(selector);  

const calculateKilometers = metricUnit=> (metricUnit * 1.609344);  //celcius to farenheit calculation
const calculateMiles = metricUnit => (metricUnit * 0.62137);       //farenheit to celcius calcuation
const calculateKilograms = weight => (weight * 0.45359237);       //celcius to farenheit calculation
const calculateLbs = weight => (weight /  0.45359237);         //farenheit to celcius calcuation

const calculateCelsius = temp => (temp-32) * 5/9;                  //celcius to farenheit calculation
const calculateFahrenheit = temp => temp * 9/5 + 32;               //farenheit to celcius calcuation
const calculateMeters = length => length / 3.2808;                 //feet to meters calcuations
const calculateFeet = length => length * 3.2808;                       //meters to feet calcuation

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
               throw exception (e);
        } 
    } 
}

$(document).ready(()=> {
    valueToConvert = 0;
    valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {
        const selectedOptionValue = $('#conversionSelector :selected').val();
        
        try {
            valueToConvert = valueHolder.val();
            valueToConvert = convertToNumber(valueToConvert); 
        } catch (error) {
            
        }

        if(valueToConvert < 0) {
            alert("Error: Value to convert cannot be less than zero!");
            return;
        }
        
        //BEGIN SWITCH
        switch (selectedOptionValue.id) {
            case 'm2k':
 
                break;

            case 'k2m':
                break;

            case 'p2k':
                break;

            case 'k2p':
                break;

            case 'f2m':
                break;

            case 'm2f':
                break;

            case 'f2c':
                break;
            case 'f2c':
                break;

        }

        //END SWITCH 

function reset() {
    $('#valueHolder') = 0;
}
    });
});