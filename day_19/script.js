"use strict";

import { metrics } from "./data.js";

function convertAndSum(metrics) {
  let totalCm = 0;

  metrics.forEach((metric) => {
    let cmValue;
    if (metric.unit === "ft") {
      cmValue = metric.value * 30.48;
    }
    if (metric.unit === "in") {
      cmValue = metric.value * 2.54;
    }
    if (metric.unit === "mil") {
      cmValue = metric.value * 160934;
    }
    if (metric.unit === "yd") {
      cmValue = metric.value * 91.44;
    } else if (metric.unit === "wm") {
      cmValue = metric.value * 60;
    }
    totalCm += cmValue;
  });

  totalCm = Math.round(totalCm * 100) / 100;

  return totalCm;
}

const totalCentimeters = convertAndSum(metrics);
console.log(`The total route in centimeters is: ${totalCentimeters.toFixed(2)}`);
