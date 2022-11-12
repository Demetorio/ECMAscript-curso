//OBJETOS LITERALES EN ECMASCRIPT5 O INFERIOR

function newCar (brand,model,year) {
    return {
        brand: brand,
        model: model,
        year: year,
    }
} console.log(newCar('chevrolet','aveo',2005));

//OBJETOS LITERALES EN ECMASCRIPT 6

function newBike (brand,model,year) {
    return {
        brand,
        model,
        year
    }
} console.log(newBike('trek','marlin5',2019))