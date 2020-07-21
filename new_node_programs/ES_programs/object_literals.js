function address(city, state) {
    // to access the function parameters
    const newAddress = { newCity: city, newState: state }       // way one
    console.log(newAddress); 
    const newAddress1 = { city, state }                         // way two
    console.log(newAddress1);
    const newAddress2 = { city: city, state: state }            // way three
    console.log(newAddress2);


    const newCity = city;
    const newState = state;
    console.log(newCity + ', ' + newState);
}
address('Nashik', 'Maharashtra');

console.log("*****************************************")

function addressMaker(address) {
    const { city, state } = address;

    const newAddress = {
        city,
        state,
        country: 'India'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Nashik', state: 'Maharashtra'});











