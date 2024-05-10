// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)
  let remainder = firstNumber
  let counter = 0

  while (true) {
    remainder -= secondNumber
    counter ++
    if (remainder < secondNumber) {
      break
    }
  }

  document.getElementById("answer").innerHTML = counter + " R" + remainder
}
