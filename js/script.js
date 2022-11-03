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
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + "units³"
}
