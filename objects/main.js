let chevy = {
  make: `Chevy`,
  model: `Camero`,
  year: 2020,
  color: `Midnight Blue`,
  passengers: 2,
  convertible: false,
  mileage: 2500,
  doors: 2,
  speed: 300,
};

let cadi = {
  make: `cadillac`,
  model: `escalade`,
  year: 2018,
  color: `black`,
  doors: 4,
  passengers: 7,
  convertible: false,
};

let fiat = {
  make: `fiat`,
  model: 500,
  year: 1957,
  color: `medium blue`,
  passengers: 2,
  convertible: false,
  mileage: 88000,
};

let taxi = {
  make: `vietnamese`,
  model: `taxi`,
  year: 1955,
  color: `yellow`,
  passengers: 4,
  convertible: false,
  mileage: 281561,
};

// if (fiat.year < 1965) {
//   classic = true;
// }

// for (let i = 0; i < fiat.passengers; i++) {
//   addPersonToCar();
// }

function preQual(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

let worthALook = preQual(taxi);

if (worthALook) {
  console.log(`You must check out this ` + taxi.make + ` ` + taxi.model);
} else {
  console.log(`You should pass on this ` + taxi.make + ` ` + taxi.model);
}

function changeCadiColor(car, color) {
  cadi.color = color;
}
changeCadiColor();

function makeCar() {
  let makes = [`Ferrari`, `Lamborghini`, `BMW`, `Audi`, `Porsche`, `Bentley`];
  let models = [
    `458 italia`,
    `Aventador`,
    `M5`,
    `RS8`,
    `911 Turbo`,
    `Continental`,
  ];
  let years = [2018, 2017, 2020, 2019, 2021, 2005];
  let colors = [`red`, `blue`, `black`, `orange`, `lime green`];
  let convertible = [true, false];

  let rand1 = Math.floor(Math.random() * makes.length);
  let rand2 = Math.floor(Math.random() * models.length);
  let rand3 = Math.floor(Math.random() * years.length);
  let rand4 = Math.floor(Math.random() * colors.length);
  let rand5 = Math.floor(Math.random() * 5) + 1;
  let rand6 = Math.floor(Math.random() * 2);

  let car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };

  return car;
}

function displayCar(car) {
  console.log(
    `Your new car is a ` + car.year + ` ` + car.make + ` ` + car.model
  );
}

let carToSell = makeCar();
displayCar(carToSell);
