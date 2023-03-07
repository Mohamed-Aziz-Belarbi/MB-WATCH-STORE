

// we create our data in array called watchs:

var watchs = [
    {
        id:0,
        image:'./image/sea-Dweller_homme-removebg-preview.png',
        title:'YACHT/MASTER 42',
        price:2000
    },
    {
        id:1,
        image:'./image/rolex_homme_day_date_40-removebg-preview.png',
        title:'day-date 40',
        price:7000
    },
    {
        id:2,
        image:'./image/Rolex_Yacht_master_2-removebg-preview.png',
        title:'-DATEJUST 31',
        price:9000
    },
    {
        id:3,
        image:'./image/datejust_31_femme-removebg-preview.png',
        title:'-YACHT‑MASTER 42',
        price:1100
    },
    {
        id:4,
        image:'./image/EPIC_SF24_TOURBILLON_BAGUETTE_WHITE_GOLD-homme-removebg-preview.png',
        title:'BRILLIANT FLYING ',
        price:22000
    },
    {
        id:5,
        image:'./image/jacobandco_homme-removebg-preview.png',
        title:'BAGUETTE WHITE GOLD',
        price:8000
    },
    {
        id:6,
        image:'./image/MINI_ASHOKA_BILLIONAIRE_-femme-removebg-preview.png ',
        title:'TWIN TURBO BUGATTI ',
        price:10000
    },
    {
        id:7,
        image:'./image/jacobandco_brilliant_flying_tourbillon_Tsavorites_femme-removebg-preview.png ',
        title:'TWIN TURBO BUGATTI ',
        price:10000
    }

];

// we create a variable called categories contain a map function to use it in the filter function:

var categories = watchs.map(function(item){
    return item;
});

categories = categories.filter(function(item, index, self){
    return self.indexOf(item) === index;
});

var i = 0;

document.getElementById('root').innerHTML = categories.map(function(item){
    var image = item.image;
    var title = item.title;
    var price = item.price;

    return '<div class="box">' +
        '<div class="img-box">' +
        '<img class="images" src="' + image + '"></img>' +
        '</div>' +
        '<div class="bottom">' +
        '<p>' + title + '</p>' +
        '<h2>$ ' + price + '.00</h2>' +
        '<button onclick="addtocart(' + (i++) + ')">Add to cart</button>' +
        '</div>' +
        '</div>';
}).join('');

var cart = [];

function addtocart(a){
    cart.push(Object.assign({}, categories[a]));
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    var j = 0;
    var total = 0;

    document.getElementById("count").innerHTML = cart.length;

    if(cart.length === 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map(function(items) {
            var image = items.image;
            var title = items.title;
            var price = items.price;
            total = total + price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return '<div class="cart-item">' +
                '<div class="row-img">' +
                '<img class="rowimg" src="' + image + '">' +
                '</div>' +
                '<p style="font-size:12px;">' + title + '</p>' +
                '<h2 style="font-size: 15px;">$ ' + price + '.00</h2>' +
                '<i class="fa-solid fa-trash" onclick="delElement(' + (j++) + ')"></i>' +
                '</div>';
        }).join('');
    }
} 

