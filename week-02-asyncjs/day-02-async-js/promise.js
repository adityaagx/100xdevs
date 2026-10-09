function preparePizza(hasIngredients){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(hasIngredients){
                resolve("Pizza baked")
            } else {
                reject ("Out of Ingredients")
            }
        }, 1500)
    })
};

function deliverPizza(status){
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve(`${status} and delievered to your door!`)
        }, 1500)
    })
}

async function orderPizza(hasIngredients) {
    try {
    const status = await preparePizza(hasIngredients)
    const finalMessage = await deliverPizza(status)
    console.log(finalMessage);
    } catch(error){
        console.log("Order failed:", error)
    }
};

orderPizza(true);
orderPizza(false);
