// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-5-08-Julianne-Leblanc-Peltier/sw.js", {
    scope: "/ICD2O-Unit-5-08-Julianne-Leblanc-Peltier/",
  })
}


function myButtonClicked() {
  const firstNumber = parseInt(document.getElementById("first-number").value)
  const secondNumber = parseInt(document.getElementById("second-number").value)
  let remainder = firstNumber
  let counter = 0
  let output = ""
  document.getElementById("output").innerHTML = null
  document.getElementById("answer").innerHTML = null


  if (firstNumber == 0 && secondNumber == 0) {
    document.getElementById("answer").innerHTML = "Invalid! 0 cannot be divided by 0!"
  } else {
    while (true) {
      if (remainder < secondNumber) {
        break
      }
      output += remainder + " - " + secondNumber + " = " + (remainder - secondNumber) + "</br>"
      remainder -= secondNumber
      counter ++
    }

    document.getElementById("output").innerHTML = output
    document.getElementById("answer").innerHTML = "therefore " + firstNumber + " / " + secondNumber + " = " + counter + " R" + remainder
  }
}
