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
  const hourWorked = parseFloat(document.getElementById('hoursworked').value)
  const hourlyWage = parseFloat(document.getElementById('hourlywage').value)

  // process
  let Incometax = (hourWorked * hourlyWage * ONTARIO_INCOME-TAX)
  let takeHomeSalary = (hourlywage - ONTARIO_INCOME_TAX)
  
  document.getElementById('answer1').innerHTML = 
    `Your pay will be: $ ${Incometax.toFixed(2)}`
  document.getElementById('answer2').innerHTML = 
    `The government will take... $ ${takeHomeSalary.toFixed(2)}`

}
