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
  const hoursWorked = parseInt(document.getElementById("hours-worked").value);
  const hourlyWage = parseInt(document.getElementById("hourly-wage").value);
  let Incometax = (hoursWorked * hourlyWage) * TaxAmount
  let takeHomeSalary = (hoursWorked * hourlyWage)
  
  document.getElementById('answer1').innerHTML = 
    `Income Tax: ${formattedPrice.format(Incometax)} <br>
    take Home Salary: ${formattedPrice.format(takeHomeSalary)}`

}
