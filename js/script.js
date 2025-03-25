// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function myButtonClicked() {
  // input
  const TaxAmount= 0.18 
  let hourWorked = parseFloat(document.getElementById('hoursworked').value);
  let hourlyWage = parseFloat(document.getElementById('hourlywage').value);
  let Incometax = (hourWorked * hourlyWage) * TaxAmount
  let takeHomeSalary = (hoursWorked * hourlyWage)
  
  document.getElementById('answer1').innerHTML = 
    `Your pay will be: $ ${Incometax.toFixed(2)}`
    `The government will take... $ ${takeHomeSalary.toFixed(2)}`

}
