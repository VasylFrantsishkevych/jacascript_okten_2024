// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let containerBlock = document.getElementsByClassName('container')[0];
let buttonPrev = document.getElementById('prev');
let buttonNext = document.getElementById('next');
let pagePagination = document.getElementById('page');

let baseURL = 'https://dummyjson.com';
let getCarts = `${baseURL}/carts`;

let page = 1;
const cartsPerPage = 10;


function fetching () {
    const skip = (page - 1) * cartsPerPage;

    let url = new URL(getCarts)
    url.searchParams.set('limit', cartsPerPage.toString())
    url.searchParams.set('skip', skip.toString())
    fetch(url)
        .then(res => res.json())
        .then(({carts, total}) => {
            containerBlock.innerHTML = '';
            pagePagination.innerText = page.toString();
            skip >= total - cartsPerPage ?  buttonNext.disabled = true : buttonNext.disabled = false;
            skip === 0 ? buttonPrev.disabled = true : buttonPrev.disabled = false;

            carts.forEach(cart => {
                const {products, total, discountedTotal, userId, totalProducts, totalQuantity} = cart;
                let cartBlock = document.createElement('div');
                cartBlock.className = 'cart';

                // block information about the selected products
                let cartProductsBlock = document.createElement('div');
                cartProductsBlock.className = 'cart-products';
                products.forEach(product => {
                    const {title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} = product;
                    let cartProductsInfoBlock = document.createElement('div');
                    cartProductsInfoBlock.className = 'cart-products-info';

                    let cartProductInfoTitleBlock = document.createElement('div');
                    cartProductInfoTitleBlock.className = 'cart-title';
                    let cartProductInfoImg = document.createElement('img');
                    cartProductInfoImg.src = thumbnail;
                    let cartProductInfoH4 = document.createElement('h4');
                    cartProductInfoH4.innerText = `${title}`

                    cartProductInfoTitleBlock.append(cartProductInfoImg, cartProductInfoH4)

                    let cartProductInfoQuantityBlock = document.createElement('div');
                    cartProductInfoQuantityBlock.className = 'cart-quantity';
                    cartProductInfoQuantityBlock.innerHTML = `
                    <div>${quantity}</div>
                    <div>${price} $</div>
                `

                    let cartProductInfoPriceBlock = document.createElement('div');
                    cartProductInfoPriceBlock.className = 'cart-product-price'
                    let cartProductPrice = document.createElement('div');
                    cartProductPrice.className = 'product-price'
                    cartProductPrice.innerHTML = `
                    <div>${total.toFixed(2)}</div>
                    <div>-${discountPercentage} %</div>
                `
                    let cartProductPriceDiscount = document.createElement('div');
                    cartProductPriceDiscount.className = 'cart-product-price-discount'
                    cartProductPriceDiscount.innerText = `${discountedTotal} $`

                    cartProductInfoPriceBlock.append(cartProductPrice, cartProductPriceDiscount)

                    cartProductsInfoBlock.append(cartProductInfoTitleBlock, cartProductInfoQuantityBlock, cartProductInfoPriceBlock);
                    cartProductsBlock.appendChild(cartProductsInfoBlock);
                })

                // block about total quantity and total price products
                let cartTotalBlock = document.createElement('div');
                cartTotalBlock.className = 'cart-total';
                let cartTotalH4 = document.createElement('h4');
                cartTotalH4.innerText = `UserID: ${userId}`;
                let cartTotalQuantityBlock = document.createElement('div');
                cartTotalQuantityBlock.className = 'cart-total-quantity';
                cartTotalQuantityBlock.innerHTML = `
                <div>In cart <span>${totalProducts}</span> products</div>
                <div>Total quantity <span>${totalQuantity}</span> pieces</div>
            `
                let cartTotalPriceBlock = document.createElement('div');
                cartTotalPriceBlock.className = 'cart-total-price'
                cartTotalPriceBlock.innerHTML = `
                <div>${total}</div>
                <div>${-(total - discountedTotal).toFixed(1)}</div>
            `
                let cartTotalPrice = document.createElement('div');
                cartTotalPrice.className = 'cart-total-discount'
                cartTotalPrice.innerText = `${discountedTotal} $`;
                let button = document.createElement('button');
                button.className = 'btn-order'
                button.innerText = 'ORDER'
                button.onclick = () => alert('Your order has been accepted.')

                cartTotalBlock.append(cartTotalH4, cartTotalQuantityBlock, cartTotalPriceBlock, cartTotalPrice, button);

                cartBlock.append(cartProductsBlock, cartTotalBlock);
                containerBlock.appendChild(cartBlock);
            })
        })
}
buttonNext.addEventListener('click', () => {
    window.scrollTo(0, 0);
    page++;
    fetching();

})
buttonPrev.addEventListener('click', () => {
    window.scrollTo(0, 0);
    page--;
    fetching();
})

fetching();


