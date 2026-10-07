// Create a JavaScript Map named contacts, 
// add three people as keys with their phone numbers as string values using .set(),
// retrieve and console.log Bob's phone number using .get(), 
// check if 'Alice' exists in the map using .has(), and 
// finally log the total count of contacts using the .size property.

const contacts = new Map()

contacts.set('alice', 101);
contacts.set('bob', 102);
contacts.set('charlie', 103);

console.log(contacts.get('bob'));
console.log(contacts.has('alice'));
console.log(contacts.size);

