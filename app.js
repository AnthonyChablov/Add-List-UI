// Classes of the components of form
// The Items
class Item{
    constructor(item,brand, price){
        this.item= item;
        this.brand = brand;
        this.price=price;
    }

}
// The UI
class UI{

}

// Local Storage
class Storage{

}



// Event listeners
// Selecting components
//
let buttonSubmit = document.querySelector('#button')
buttonSubmit.addEventListener(('click'), ((e) =>
{
    let itemName = document.querySelector('#Item-Name');
    let brandName = document.querySelector('Brand-Name');
    let price = document.querySelector('Price');

        
    console.log(`button clicked`);
    e.preventDefault()

}))