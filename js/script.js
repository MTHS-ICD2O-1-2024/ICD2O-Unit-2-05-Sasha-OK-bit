// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function calculatehoursworkedAndhourlywage() {
  // input
  const TaxAmount= 0.18 
  const hourWorked = parseInt(document.getElementById('hours-worked').value);
  const hourlyWage = parseInt(document.getElementById('hourly-wage').value);
  let Incometax = (hourWorked * hourlyWage) * TaxAmount
  let takeHomeSalary = (hoursWorked * hourlyWage)
  
  document.getElementById('answer1').innerHTML = 
    `Incometax: ${Incometax.toFixed(2)}`
    `takeHomeSalary: ${takeHomeSalary.toFixed(2)}`

}
