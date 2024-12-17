"use strict";

import { people } from "./data.js";

const topThree = people.sort((a, b) => b.deedPoints - a.deedPoints).slice(0, 3);
console.log(topThree);
