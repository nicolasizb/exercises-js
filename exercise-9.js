// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.

// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

// MXN

const iceCream = [
    { 
        topping: "iceCreamWithoutTopping" ,
        price: 50 
    },
    { 
        topping: "iceCreamToppingOreo" ,
        price: 10 
    },
    { 
        topping: "iceCreamToppingKitkat" ,
        price: 15 
    },
    { 
        topping: "iceCreamToppingBrownie" ,
        price: 20 
    },
]

function validIceCream (topping) {
    if (typeof topping === "string" && topping !== "") {

        let choseIceCream = iceCream.find(select => select.topping === topping);

        if (choseIceCream) {
            console.log(`The topping ${choseIceCream.topping} has a price of $${choseIceCream.price} MXN`);
        } else {
            console.log("We have not that topping, sorry.")
        }
    } else {
        console.log("Value is not valid")
    }
}

validIceCream(0);
validIceCream("iceCreamWithoutTopping");
validIceCream("iceCreamToppingOreo");
validIceCream("iceCreamToppingKitkat");
validIceCream("iceCreamToppingBrownie");
validIceCream("iceCreamToppingApple");