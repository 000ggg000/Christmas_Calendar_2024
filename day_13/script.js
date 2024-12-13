let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(visits) {
  if (visits === 1) {
    return "Ho ho ho! Welcome back, Joe! We’re glad you enjoyed your first visit! 🎅";
  }
  if (visits === 2) {
    return "Merry greetings, Carol! So wonderful to see you again! 🎄";
  }
  if (visits >= 3 && visits < 4) {
    return "Merry greetings, Howard! So wonderful to see you again! 🎄";
  }
  if (visits >= 4) {
    return "Merry greetings, Carrie! So wonderful to see you again! 🎄";
  } else {
    return "Welcome to the North Pole Café! Is this your first time? ❄️";
  }
}

document.getElementById("greeting").innerHTML = greetCustomer(customerData);
console.log(greetCustomer(3));
