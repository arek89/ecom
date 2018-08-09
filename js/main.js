window.addEventListener('load', () => {
    document.querySelector('#wrapper').classList.add('loaded');
})

document.onreadystatechange = () => {
    console.log(document.readyState)
}

const displayProductDetails = product => {
    // display product name
    const name = product.description.name;
    document.querySelector('.product-name').innerHTML = `<span>Buy</span> ${name}!`;
    
    // display product image 
    const image = product.image.imageUrl;
    document.querySelector('.image').innerHTML = `<img src="https://survivalapexshop.com/${image}" class="product-image" />`;

    // display product original price
    const originalPrice = product.originalPrice;
    document.querySelector('.orginal-price').innerHTML = originalPrice;

    // display product special price
    const specialPrice = product.price 
    ? document.querySelector('.special-price').innerHTML = `$${specialPrice}`
    : '';
}

// product ID
const productID = 173;
const getProductJSON = (() => {
    fetch(`https://survivalapexshop.com/api/v1/products/${productID}`, {method: "GET"})
    .then(response => {
        // return parsed JSON
        return response.json()
    })
    .then(product => {
        console.log(product)
        displayProductDetails(product)
    }).catch(error => {
        console.log(error);
    })
})()

const onSubmit = () => {
    console.log('form submitted')
}



