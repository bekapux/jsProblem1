let cars = [
    {
        model: 'Ferrari',
        color: "Red",
        fuelVolumeAndConsumption: {
            fuelVolume: 78,
            fuelComsumption: 20.6
        }
    },
    {
        model: 'Lambo',
        color: "Yellow",
        fuelVolumeAndConsumption: {
            fuelVolume: 90,
            fuelComsumption: 26.2
        }
    },
    {
        model: 'Bugatti',
        color: "black",
        fuelVolumeAndConsumption: {
            fuelVolume: 100,
            fuelComsumption: 35.2
        }
    },
    {
        model: 'Porsche',
        color: "White",
        fuelVolumeAndConsumption: {
            fuelVolume: 80,
            fuelComsumption: 20
        }
    },
    {
        model: 'Bugatti',
        color: "Grey",
        fuelVolumeAndConsumption: {
            fuelVolume: 78,
            fuelComsumption: 27.6
        }
    },
];

getDistance = (car) =>{
    let carWillGo = car.fuelVolumeAndConsumption.fuelVolume / car.fuelVolumeAndConsumption.fuelComsumption;
    return carWillGo;
} 

let MaxDistance = Number.MIN_VALUE;
let SelectedCar;

cars.forEach(car => {
    let carDistance = getDistance(car);
    console.log(`${car.color} ${car.model} - ${carDistance}`)
    if (carDistance > MaxDistance) {
        MaxDistance = carDistance;
        SelectedCar = car;
    }
});

console.log("")
console.log("Fastest Car")
console.log("============")
console.log(SelectedCar);