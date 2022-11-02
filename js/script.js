// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ISC20-Unit-3-03/sw.js", {
    scope: "/ISC20-Unit-3-03/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const height = parseFloat(document.getElementById("height").value)

  // process
  const volume =
    // output
    (document.getElementById("volume").innerHTML =
      "Volume is: " + volume + "mm³")
}
