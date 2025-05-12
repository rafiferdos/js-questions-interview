// Task 4: Sorting Objects
const cars = [
    { make: "Toyota", model: "Camry", year: 2020 },
        { make: "Honda", model: "Civic", year: 2018 },
            { make: "Ford", model: "Mustang", year: 2022 },
                { make: "Tesla", model: "Model 3", year: 2021 },
                ];

                function sortCarsByYear(carArray) {
                    return carArray.slice().sort((carA, carB) => carA.year - carB.year);
                    }

                    const sortedCars = sortCarsByYear(cars);
                    console.log("Original Cars:", cars);
                    console.log("Cars Sorted by Year:", sortedCars);
                    console.log("\n");
                    