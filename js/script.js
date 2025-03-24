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
  const hourWorked = parseInt(document.getElementById('answer1').value)
  const hourlyWage = parseInt(document.getElementById('answer2').value)

  // process
  let Incometax = (hours * hourlywage * ONTARIO_INCOME-TAX)
  let takeHomeSalary = (hourlywage * 0.18)
  
  document.getElementById('answer1').innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
  document.getElementById('answer2').innerHTML = 'The government will take...$' + takeHomeSalary.toFixed(2)
  xx = parseFloat(document.getElementById('answer1').value)
  xx = parseFloat(document.getElementById('answer2').value)
}
