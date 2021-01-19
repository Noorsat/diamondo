$('.slider').slick({
    dots:true
});
if($(window).width() < 767) {
    $('.actual__slider').slick({
        infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
    });
}
else{
    $('.actual__slider').slick({
        infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
    });
}
if($(window).width() < 767) {
    $('.best__slider').slick({
        infinite: true,
      slidesToShow: 1,
      slidesToScroll:1
    });
}
else{
    $('.best__slider').slick({
        infinite: true,
      slidesToShow: 3,
      slidesToScroll:3,
    });
}


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})  

function change(e){
    e.src = "images/back1.jpg";
}
function ret(e){
    e.src = "images/best1.jpg";
}

function dropMenu(e){
    var menu = e.getElementsByClassName('submenu')[0];
    menu.style.overflow="visible";
    menu.style.opacity="1";
    menu.style.height="100%";
}
function hideMenu(e){
    var menu = e.getElementsByClassName('submenu')[0];
    menu.style.overflow="hidden";
    menu.style.opacity="0";
    menu.style.height="0";
}


$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.burger__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});
function jew(){
    document.getElementById('jew').style.opacity="1";
    document.getElementById('jew').style.height="100%";
    document.getElementById('wed').style.opacity="0";
    document.getElementById('wed').style.height="0";
    document.getElementById('bril').style.opacity="0";
    document.getElementById('bril').style.height="0";    
    $('.bril__title').removeClass("active"); 
    $('.jew__title').toggleClass("active");
    $('.wed__title').removeClass("active");  
}
function bril(){
    document.getElementById('bril').style.opacity="1";
    document.getElementById('bril').style.height="100%";
    document.getElementById('wed').style.opacity="0";
    document.getElementById('wed').style.height="0";
    document.getElementById('jew').style.opacity="0";
    document.getElementById('jew').style.height="0"; 
    $('.bril__title').toggleClass("active"); 
    $('.jew__title').removeClass("active");
    $('.wed__title').removeClass("active");  

}
function wed(){
    document.getElementById('wed').style.opacity="1";
    document.getElementById('wed').style.height="100%";
    document.getElementById('bril').style.opacity="0";
    document.getElementById('bril').style.height="0";
    document.getElementById('jew').style.opacity="0";
    document.getElementById('jew').style.height="0";    
    $('.bril__title').removeClass("active"); 
    $('.jew__title').removeClass("active");
    $('.wed__title').toggleClass("active");  
}

$('[data-open-block').on('click', function() {
	const activeCls = 'is-active';
  	$('[data-content]').removeClass(activeCls);
  $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});

function black(e){
    $('.jewellery__nav-item').removeClass('active');
    $(e).toggleClass('active');
}

const cart = document.querySelector('.cart');
const cartCounter = document.querySelector('.menu__korzina-counter');
const favoriteDOM = document.querySelector('.favorite__items');
const cartInnerCounter = document.querySelector('.cart__overall-count');
const cartOverallCost = document.querySelector('.cart__overall-money');
const cartItems = document.querySelector('.cart__items');
const jewelleryRingsDOM = document.querySelector('#rings__items');
const jewelleryEarringsDOM = document.querySelector('#earrings__items');
const jewelleryChainsDOM = document.querySelector("#chains__items");
const jewelleryPendantsDOM = document.querySelector("#pendants__items");
const jewelleryBraceletsDOM = document.querySelector("#bracelets__items");
const jewelleryNecklaceDOM = document.querySelector("#necklace__items");
const jewelleryBroochesDOM = document.querySelector("#brooches__items");
const jewelleryTablewareDOM = document.querySelector("#tableware__items");
const jewelleryOtherDOM = document.querySelector("#other__items");
const brilliantRingsDOM = document.querySelector("#brilliantRings__items");
const brilliantEarringsDOM = document.querySelector("#brilliantEarrings__items");
const brilliantPendantsDOM = document.querySelector("#brilliantPendants__items");
const brilliantBraceletsDOM = document.querySelector("#brilliantBracelets__items");
const brilliantNecklaceDOM = document.querySelector("#brilliantNecklace__items");
const brilliantBroochesDOM = document.querySelector("#brilliantBrooches__items");
const weddingRingsDOM = document.querySelector("#weddingRings__items");
const weddingRings2DOM = document.querySelector("#weddingRings2__items");
const weddingBrideDOM = document.querySelector("#weddingBride__items");
const weddingGroomDOM = document.querySelector("#weddingGroom__items");
const weddingPresentsDOM = document.querySelector("#weddingPresents__items");
const weddingCollectinosDOM = document.querySelector("#wedCollection__items");
const indexFile = document.querySelector("#our-carts");
let boughtCart = [];
let favouriteCart=[];
let buttonsDOM = [];
let favouriteDOM = [];
class Products{
    async getProducts(){
        try{
            let result = await fetch('json/products.json');
            let data = await result.json();
            let products = data;
            return products;
        }catch (error){
            console.log(error);
        }
    }  
}

class UI{
    displayProducts(products,sou){
        if (sou === favoriteDOM){
            let result = '';
        for (let i = 0; i < products.length; i++){
            let info = products[i].fields;
            let id = products[i].sys;
            result += 

        `   <div class="jewellery__item" data-id = ${id.id}>
            <div class="jewellery__item-favoutite">
            <img class="jewellery__item-favourite-img" src="images/redHeart.png" alt="" onclick="removeFavorite(this)" data-id= ${id.id}>
            </div>
            <div class="jewellery__item-img">
                <img src=${info.image} alt="">
            </div>
            <div class="jewellery__item-cost">
                <p>${info.price} ₸</p>    
            </div>
            <div class="jewellery__item-drop">
                <div class="jewellery__item-name">
                    ${info.title}
                </div>
                <div class="jewellery__about">                        
                    <div class="jewellery__about-material"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.material}">
                        МАТЕРИАЛ
                    </div>
                   <div class="jewellery__about-weight"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.weight}">
                       ВЕС
                   </div>
                </div>
                <div class="jewellery__item-select">
                    <p>Размер:</p>
                    <select class="jewellery__item-select-select" data-id=${id.id}>
                        <option value="${info.size.a}">${info.size.a}</option>
                        <option value="${info.size.b}">${info.size.b}</option>
                        <option value="${info.size.c}">${info.size.c}</option>
                        <option value="${info.size.d}">${info.size.d}</option>
                    </select>
                </div> 
                <div class="jewellery__item-btn">
                    <input type="button" class="jewellery__item-button" value="В КОРЗИНУ" data-id=${id.id}>
                </div>
            </div>
        </div>
            `
        };
        sou.innerHTML = result;
        document.querySelector('.favorite__items-empty').innerText="";
        }else{
        let result = '';
        let favoriteCart = Storage.getFavorite();
        let favoriteCartIdArray = [];
        for (let i = 0; i < favoriteCart.length; i++){
            favoriteCartIdArray[i] = favoriteCart[i].sys.id;
        }
        document.getElementById('like-counter').innerText = favoriteCart.length;
        for (let i = 0; i < products.length; i++){
            let info = products[i].fields;
            let id = products[i].sys;
            let check = favoriteCartIdArray.indexOf(id.id) != -1;
        if (check===false){
            result += 

        `   <div class="jewellery__item" data-id = ${id.id}>
            <div class="jewellery__item-favoutite">
            <img class="jewellery__item-favourite-img" src="images/heart.png" alt="" onmouseover=redHeart(this) onmouseout=blackHeart(this) data-id= ${id.id}>
            </div>
            <div class="jewellery__item-img">
                <img src=${info.image} alt="">
            </div>
            <div class="jewellery__item-cost">
                <p>${info.price} ₸</p>    
            </div>
            <div class="jewellery__item-drop">
                <div class="jewellery__item-name">
                    ${info.title}
                </div>
                <div class="jewellery__about">                        
                    <div class="jewellery__about-material"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.material}">
                        МАТЕРИАЛ
                    </div>
                   <div class="jewellery__about-weight"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.weight}">
                       ВЕС
                   </div>
                </div>
                <div class="jewellery__item-select">
                    <p>Размер:</p>
                    <select class="jewellery__item-select-select" data-id=${id.id}>
                        <option value="${info.size.a}">${info.size.a}</option>
                        <option value="${info.size.b}">${info.size.b}</option>
                        <option value="${info.size.c}">${info.size.c}</option>
                        <option value="${info.size.d}">${info.size.d}</option>
                    </select>
                </div> 
                <div class="jewellery__item-btn">
                    <input type="button" class="jewellery__item-button" value="В КОРЗИНУ" data-id=${id.id}>
                </div>
            </div>
        </div>
            `
        }else{
        result += 

        `   <div class="jewellery__item" data-id = ${id.id}>
            <div class="jewellery__item-favoutite">
            <img class="jewellery__item-favourite-img" src="images/redHeart.png" alt="" data-id= ${id.id}>
            </div>
            <div class="jewellery__item-img">
                <img src=${info.image} alt="">
            </div>
            <div class="jewellery__item-cost">
                <p>${info.price} ₸</p>    
            </div>
            <div class="jewellery__item-drop">
                <div class="jewellery__item-name">
                    ${info.title}
                </div>
                <div class="jewellery__about">                        
                    <div class="jewellery__about-material"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.material}">
                        МАТЕРИАЛ
                    </div>
                   <div class="jewellery__about-weight"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.weight}">
                       ВЕС
                   </div>
                </div>
                <div class="jewellery__item-select">
                    <p>Размер:</p>
                    <select class="jewellery__item-select-select" data-id=${id.id}>
                        <option value="${info.size.a}">${info.size.a}</option>
                        <option value="${info.size.b}">${info.size.b}</option>
                        <option value="${info.size.c}">${info.size.c}</option>
                        <option value="${info.size.d}">${info.size.d}</option>
                    </select>
                </div> 
                <div class="jewellery__item-btn">
                    <input type="button" class="jewellery__item-button" value="В КОРЗИНУ" data-id=${id.id}>
                </div>
            </div>
        </div>
            `
        };
    }
    sou.innerHTML = result;
    }
    }
    getBagButtons(){
        let buttons = [...document.querySelectorAll(".jewellery__item-button")];   
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = boughtCart.find(item => item.sys.id === id);
            if (inCart){
                button.value= "Уже в корзине";
                button.disabled = true;
            }
            button.addEventListener('click',(event)=>{
                event.target.value="Уже в корзине";
                event.target.disabled = true;
               let allItems = document.querySelectorAll('.jewellery__item-select-select');
                let importantItem;
                allItems.forEach(item => {
                    if (item.dataset.id === id){
                        importantItem = item;
                    }
                });
                let allItemsOurSelect = importantItem;
                let allItemsOurSelectOption = $(allItemsOurSelect).find(":selected").text();
                let cartItem = {...Storage.getProduct(id),amount:1,selectedOption: allItemsOurSelectOption};                
                boughtCart = [...boughtCart, cartItem];
                Storage.saveCart(boughtCart);
                this.setCartValues(boughtCart);
                this.addCartItem(cartItem);
                var products = '';
                var outCart =  Storage.getCart();
                for (let i = 0; i < outCart.length; i++){
                    var eachProduct = outCart[i];
                    products += 'Товар: ' + eachProduct.fields.title + ". ID: " + eachProduct.sys.id + ". Прайс: " + eachProduct.fields.price + ". Размер: " + eachProduct.selectedOption;
                }
                products += ". " +document.getElementById('cart__overall-count').innerText;
                products += ". " +document.getElementById('cart__overall-money').innerText;
                document.getElementById('cart__form-order-input').value = products;
            });
        });
    }   
    getFavouriteButtons(){
        let favouriteButtons = [...document.querySelectorAll(".jewellery__item-favourite-img")];
        favouriteDOM = favouriteButtons;
        favouriteButtons.forEach(favouriteButton => {
            let id = favouriteButton.dataset.id;
            let inCart = favouriteCart.find(item => item.sys.id === id);
            if (inCart){
                favouriteButton.src = "images/redHeart.png";
            }
            favouriteButton.addEventListener('click',(event)=>{
                event.target.parentElement.innerHTML = '<img class="jewellery__item-favourite-img" src="images/redHeart.png" alt="" onmouseover="redHeart(this)" data-id="${id.id}">';
                let favouriteItem = {...Storage.getProduct(id)};
                let favouriteCart=  Storage.getFavorite();
                favouriteCart = [...favouriteCart, favouriteItem];
                document.getElementById('like-counter').innerText = favouriteCart.length;
                Storage.saveFavorite(favouriteCart);
            })
        })
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.fields.price * item.amount;
            itemsTotal += item.amount;
        });
        cartOverallCost.innerText = "Сумма покупки: " + parseInt(tempTotal.toFixed(2)) + " тг";
        cartInnerCounter.innerText = "Всего товаров:  " + itemsTotal;
        document.getElementById('counter').innerText = itemsTotal;   
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart__item');
        div.innerHTML = 
        `
        <div class="cart__item-name">
        <div class="cart__item-name-img">
            <img src="${item.fields.image}" alt="">
        </div>
        <div class="cart__item-content">
            <div class="cart__item-name-text">
                ${item.fields.title}
            </div>
            <div class="cart__item-name-material">
                Материал: ${item.fields.material}
            </div>
            <div class="cart__item-name-weight">
                Вес:${item.fields.weight}
            </div>
        </div>
    </div>
    <div class="cart__item-price">
            ${item.fields.price} тг
    </div>
    <div class="quantity">
        <button class="plus-btn" type="button" name="button">
          <img class="plus-btn-img" src="images/plus.svg" data-id="${item.sys.id}" alt="" />
        </button>
        <p class="counter-show" id="counter-show">${item.amount}</p>
        <button class="minus-btn" type="button" name="button">
          <img class="minus-btn-img" src="images/minus.svg" data-id="${item.sys.id}" alt="" />
        </button>
      </div>
    <div class="cart__item-size">
        <p>${item.selectedOption}</p>
    </div>
    <div class="cart__item-delete">
        <img data-id="${item.sys.id}" class="cart__item-delete-img" src="images/remove.svg" alt="">
    </div>
    `;
    cartItems.appendChild(div);
    }   
    setupAPP(){
        boughtCart = Storage.getCart();
        this.setCartValues(boughtCart);
        this.populateCart(boughtCart);
    }
    populateCart(boughtCart){
        boughtCart.forEach(item => this.addCartItem(item));
    }
    cartLogic(){
        cartItems.addEventListener("click", event => {
            if (event.target.classList.contains('cart__item-delete-img')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartItems.removeChild(removeItem.parentElement.parentElement);
                this.removeItem(id); 
                var products = '';
                var outCart =  Storage.getCart();
                for (let i = 0; i < outCart.length; i++){
                    var eachProduct = outCart[i];
                    products += '\n Товар: ' + eachProduct.fields.title + ". ID: " + eachProduct.sys.id + ". Прайс: " + eachProduct.fields.price + ". Размер: 18 ";
                }
                products += ". " +document.getElementById('cart__overall-count').innerText;
                products += ". " +document.getElementById('cart__overall-money').innerText;
                document.getElementById('cart__form-order-input').value = products;
            }else if (event.target.classList.contains("plus-btn-img")){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = boughtCart.find(item => item.sys.id === id);
                tempItem.amount = tempItem.amount + 1;
                addAmount.parentElement.nextElementSibling.innerText = tempItem.amount;
                Storage.saveCart(boughtCart);
                this.setCartValues(boughtCart);
            }else if (event.target.classList.contains("minus-btn-img")){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = boughtCart.find(item => item.sys.id === id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0){
                    Storage.saveCart(boughtCart);
                    this.setCartValues(boughtCart);
                    lowerAmount.parentElement.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartItems.removeChild(lowerAmount.parentElement.parentElement.parentElement); 
                    this.removeItem(id);
                }
                Storage.saveCart(boughtCart);
                this.setCartValues(boughtCart);
            }
        })
    }
    removeItem(id){
        boughtCart = boughtCart.filter(item => item.sys.id !== id);
        this.setCartValues(boughtCart);
        Storage.saveCart(boughtCart);
        let button = this.getSingleButton(id);
        button.value = "В КОРЗИНУ";
        button.disabled = false;
    }
    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}

class Storage{
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'));
        //return products.find(product => product.id === id);
        let myProduct;
        Object.keys(products).forEach(key => {
            products[key].find(product => {
                if (product.sys.id === id){
                    myProduct = product;
                }
            }); 
        });
        return myProduct;
    }
    static saveCart(cart){
        localStorage.setItem("cart", JSON.stringify(cart)); 
    }
    static saveFavorite(favoriteCart){
        localStorage.setItem("favoriteCart", JSON.stringify(favoriteCart));
    }
    static getCart(){
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
    static getFavorite(){
        return localStorage.getItem("favoriteCart") ? JSON.parse(localStorage.getItem("favoriteCart")) : [];
    }   
}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = new Products();
    ui.setupAPP();
    products.getProducts().then(products => {
        let jewellery__rings = products.jewellery__rings;
        let jewellery__earrings = products.jewellery__earnings;
        let jewellery__chains = products.jewellery__chains;
        let jewellery__pendants = products.jewellery__pendants;
        let jewellery__bracelets = products.jewellery__bracelets;
        let jewellery__necklace = products.jewellery__necklace;
        let jewellery__brooches = products.jewellery__brooches;
        let jewellery__tableware  = products.jewellery__tableware;
        let jewellery__other = products.jewellery__other;
        ui.displayProducts(jewellery__rings,jewelleryRingsDOM);
        ui.displayProducts(jewellery__earrings,jewelleryEarringsDOM);
        ui.displayProducts(jewellery__chains,jewelleryChainsDOM);
        ui.displayProducts(jewellery__pendants,jewelleryPendantsDOM);
        ui.displayProducts(jewellery__bracelets,jewelleryBraceletsDOM);
        ui.displayProducts(jewellery__necklace,jewelleryNecklaceDOM);
        ui.displayProducts(jewellery__brooches,jewelleryBroochesDOM);
        ui.displayProducts(jewellery__tableware,jewelleryTablewareDOM);
        ui.displayProducts(jewellery__other,jewelleryOtherDOM);
        Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
        ui.cartLogic();
        ui.getFavouriteButtons();
    })
    products.getProducts().then(products => {
        let brilliant__rings = products.brilliant__rings;
        let brilliant__earrings = products.brilliant__earrings;
        let brilliant__pendants = products.brilliant__pendants;
        let brilliant__bracelets = products.brilliant__bracelets;
        let brilliant__necklace = products.brilliant__necklace;
        let brilliant__brooches = products.brilliant__brooches;

        ui.displayProducts(brilliant__rings,brilliantRingsDOM);
        ui.displayProducts(brilliant__earrings,brilliantEarringsDOM);
        ui.displayProducts(brilliant__pendants,brilliantPendantsDOM);
        ui.displayProducts(brilliant__bracelets,brilliantBraceletsDOM);
        ui.displayProducts(brilliant__necklace,brilliantNecklaceDOM);
        ui.displayProducts(brilliant__brooches,brilliantBroochesDOM);

        Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
        ui.cartLogic();
        ui.getFavouriteButtons();
    })
    
    products.getProducts().then(products => {
        let wedding__rings = products.wedding__rings;
        let wedding__rings2 = products.wedding__rings2;
        let wedding__bride = products.wedding__bride;
        let wedding__groom = products.wedding__groom;
        let wedding__presents = products.wedding__presents;
        let wedding__collection = products.wedding__collection;

        ui.displayProducts(wedding__rings, weddingRingsDOM);
        ui.displayProducts(wedding__rings2, weddingRings2DOM);
        ui.displayProducts(wedding__bride, weddingBrideDOM);
        ui.displayProducts(wedding__groom, weddingGroomDOM);
        ui.displayProducts(wedding__presents, weddingPresentsDOM);
        ui.displayProducts(wedding__collection, weddingCollectinosDOM);

        Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
        ui.cartLogic();
        ui.getFavouriteButtons();
    })
    products.getProducts().then(products => {
        let wedding__rings = products.wedding__rings;
        ui.displayProducts(wedding__rings, indexFile);
        Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
        ui.cartLogic();
        ui.getFavouriteButtons();
    })
    let favorite = Storage.getFavorite();
    ui.displayProducts(favorite, favoriteDOM);
    document.getElementById('like-counter').innerText = favorite.length;
    ui.getFavouriteButtons();
});

function redHeart(e){
    e.src="images/redHeart.png";
}
function blackHeart(e){
    e.src="images/heart.png";
}
function removeFavorite(e){
    let id = e.dataset.id;
    let favoriteCart = Storage.getFavorite();
    favoriteCart = favoriteCart.filter(item => item.sys.id !== id);
    console.log(favoriteCart);
    Storage.saveFavorite(favoriteCart);
    let result = '';
    for (let i = 0; i < favoriteCart.length; i++){
        let info = favoriteCart[i].fields;
        let id = favoriteCart[i].sys;
        result += 

    `   <div class="jewellery__item" data-id = ${id.id}>
        <div class="jewellery__item-favoutite">
        <img class="jewellery__item-favourite-img" src="images/redHeart.png" alt="" onclick="removeFavorite(this)" data-id= ${id.id}>
        </div>
        <div class="jewellery__item-img">
            <img src=${info.image} alt="">
        </div>
        <div class="jewellery__item-cost">
            <p>${info.price} ₸</p>    
        </div>
        <div class="jewellery__item-drop">
            <div class="jewellery__item-name">
                ${info.title}
            </div>
            <div class="jewellery__about">                        
                <div class="jewellery__about-material"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.material}">
                    МАТЕРИАЛ
                </div>
               <div class="jewellery__about-weight"  data-bs-toggle="tooltip" data-bs-html="true" title="${info.weight}">
                   ВЕС
               </div>
            </div>
            <div class="jewellery__item-select">
                <p>Размер:</p>
                <select class="jewellery__item-select-select" data-id=${id.id}>
                    <option value="${info.size.a}">${info.size.a}</option>
                    <option value="${info.size.b}">${info.size.b}</option>
                    <option value="${info.size.c}">${info.size.c}</option>
                    <option value="${info.size.d}">${info.size.d}</option>
                </select>
            </div> 
            <div class="jewellery__item-btn">
                <input type="button" class="jewellery__item-button" value="В КОРЗИНУ" data-id=${id.id}>
            </div>
        </div>
    </div>
        `
    };
    favoriteDOM.innerHTML = result;
    document.getElementById('like-counter').innerText = favoriteCart.length;
}