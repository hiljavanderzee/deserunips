// Example object
const specifiedScale = {
    width: 100,
    height: 200,
    color: 'blue'
};

// Example property keys
const property1 = 'width';
const property2 = 'color';
const property3 = 'depth'; // This key does not exist in the object

// Retrieving values dynamically
const specifiedValue1 = specifiedScale[property1]; // 100
const specifiedValue2 = specifiedScale[property2]; // 'blue'
const specifiedValue3 = specifiedScale[property3]; // undefined (since 'depth' is not a key in the object)

// Output the results
console.log(specifiedValue1); // Output: 100
console.log(specifiedValue2); // Output: 'blue'
console.log(specifiedValue3); // Output: undefined
