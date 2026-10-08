function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Aditya", age: 22})
        }, 2000);
    });
}

async function getUserProfile(){
    try{
        const user = await fetchUserData()
        console.log(`User ${user.name} is ${user.age} years old`)
    } catch (error){
        console.log("Failed to fetch user :", error)
    }
};

getUserProfile();