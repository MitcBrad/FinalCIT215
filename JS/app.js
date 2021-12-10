let debounce = false;
let destination = document.getElementById("appendHere");
destination.style.display = "none";
let destined = document.getElementById("destined")
destined.style.display = "none";
currentOpen = "";
currentItem ="";
currentName="";
let currentVal = 0;
let cartdebounce = false;
let cart=[

];
document.getElementById("viewCart").addEventListener("click",viewCartList);
document.getElementById("closeX").addEventListener("click",closeThing);
document.getElementById("addToCart").addEventListener("click",addToCart)
// document.getElementById("newitem").addEventListener("click",addItem);
new Vue({
    el: "#instrument-list",
    data: {
        instruments:[
            {
                name:'Drums',
                type:'Percussion',
                price:'$195.99',
                brand:'Maton',
                pic:'https://static.roland.com/products/vad_series/images/vad506_main.jpg'
            },
            {
                name:'Flute',
                type:'Woodwind',
                price:'$69.99',
                brand:'Yamaha',
                pic:'https://m.media-amazon.com/images/I/71KUdr-LtGL._AC_SL1500_.jpg',
                color: 'green'
            },
            {
                name:'Piano',
                type:'Uhhh..',
                price:'$499.99',
                brand:'Yamaha',
                pic:'https://www.yamaha.com/en/musical_instrument_guide/common/images/piano/parts_viewer01.jpg',
                color: 'green'
            },
            {
                name:'Guitar',
                type:'Strings',
                price:'$129.99',
                brand:'Fender',
                pic:'https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg',
                color: 'red'
            },
            {
                name:'Trumpet',
                type:'Brass',
                price:'$95.99',
                brand:'Yamaha',
                pic:'https://m.media-amazon.com/images/I/71l6xKqHLCL._AC_SL1500_.jpg',
                color: 'green'
            },
            {
                name:'Violin',
                type:'Strings',
                price:'$49.99',
                brand:'Maton',
                pic:'https://bostonglobe-prod.cdn.arcpublishing.com/resizer/ceH6l2dHDQafeI28I1Wtu4_aYnw=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/HQGU2RJEHRC4VKGGVW5B5PA7BY.jpg',
                color: 'blue'
            }

        ]
    },
    methods: {

        popmeup(name,type, price, brand, pic){
            console.log("Clicked");
            if(debounce == false) {
                debounce = true;
                console.log(debounce);
                destination.style.display = "Flex";
                destined.style.display = "Flex";
                let targ = event.currentTarget;
                this.ele = document.createElement("div");
                if(brand == "Fender"){
                    this.ele.className = "popupFender";
                    currentOpen = "Fender";
                    currentItem = {
                        "Name":name,
                        "Type":type,
                        "Price":price,
                        "Brand":brand,
                        "Pic":pic
                    };
                    currentName = name;
                }
                else if (brand == "Yamaha"){
                    this.ele.className = "popupYamaha";
                    currentOpen = "Yamaha";
                    currentItem={
                        "Name":name,
                        "Type":type,
                        "Price":price,
                        "Brand":brand,
                        "Pic":pic
                    };
                    currentName = name;
                }
                else if (brand == "Maton"){
                    this.ele.className = "popupMaton";
                    currentOpen = "Maton";
                    currentItem = {
                        "Name":name,
                        "Type":type,
                        "Price":price,
                        "Brand":brand,
                        "Pic":pic
                    };
                    currentName = name;
                }

                let picture = document.createElement("img");
                picture.src = pic;
                picture.className = "popupImage";
                let textHold = document.createElement("div");
                textHold.className = "popupTextHolder";
                let myname = document.createElement("p");
                myname.innerHTML = brand + " " + name;
                myname.className = "p";
                let myprice = document.createElement("p");
                myprice.innerHTML = "Price: " + price;
                myprice.className = "p";
                let mytype = document.createElement("p")
                mytype.innerHTML = "Type: " + type;
                mytype.className = "p";
                console.log(currentItem)

                this.ele.appendChild(picture);
                this.ele.appendChild(textHold)
                textHold.appendChild(myname);
                textHold.appendChild(myprice);
                textHold.appendChild(mytype)

                destined.appendChild(this.ele);
            }


        },
        instrHov(brand){
            let thistarg = event.currentTarget;
            if(brand == "Fender"){
                thistarg.classList.add("fenderhover")
            }
            else if (brand == "Yamaha"){
                thistarg.classList.add("yamahahover")
            }
            else if (brand == "Maton"){
                thistarg.classList.add("matonhover")
            }
        },
        instrLea(brand){
            let curTarg = event.currentTarget;
            if(brand == "Fender"){
                curTarg.classList.remove("fenderhover");
            }
            else if (brand == "Yamaha"){
                curTarg.classList.remove("yamahahover");
            }
            else if (brand == "Maton"){
                curTarg.classList.remove("matonhover");
            }
        },
        alsoAdd(name,type,price,brand,pic,color){
            cart.push({
                "Name" : name,
                "Type" : type,
                "Price" : price,
                "Brand" : brand,
                "Pic" : pic,
                "Color" : color
            })
            document.getElementById(name).parentElement.style.display = "none";
            closeThing()
            currentVal = this.instruments.length
            console.log(cart.length)
            if(cart.length == this.instruments.length){
                console.log("Cart Full")
                console.log(this.instruments.length)
                document.getElementById("instrument-list").display = "None";
                let cont = document.getElementById("content")
                cont.style.flexDirection = "column-reverse";
                cont.style.display = "Flex";
                let newPart = document.createElement("p")
                newPart.innerHTML = "Store is Empty";
                newPart.className= "EmptyStore";
                newPart.id = "newPart"
                cont.appendChild(newPart);
            }
            else{
                document.getElementById("instrument-list").display = "Flex";
                document.getElementById("content") .style.display = "Flex";
            }
        },
        addItem(){
            let itemName = prompt("Type item name here: ");
            let itemType = prompt("Type item type here: ");
            let itemPrice = prompt("Type item price here: ");
            let itemBrand = prompt("Type item brand here: ");
            let itemPic = prompt("Paste pic link here: ");
            let conf = confirm("Accept");
            let newItem = {
                name: itemName,
                type: itemType,
                price: itemPrice,
                brand: itemBrand,
                pic: itemPic
            }
            this.instruments.push(newItem);
            if(cart.length != this.instruments.length){
                document.getElementById("instrument-list").display = "Flex";
                document.getElementById("newPart").innerHTML = "";
            }
        }
    }
})
function viewCartList(){
    console.log("View Cart");
    if(cart.length == 0){
        alert("Cart is empty!");
    }
    else {
        if (cartdebounce == false) {
            for (i = 0; i < cart.length; i++) {
                console.log(cart)
                document.getElementById("cart").style.display = "Flex";
                let cartLocation = document.getElementById("cartItemsHere")
                let cartItem = document.createElement("div");
                cartItem.className = "cartItem";
                let imageDest = document.createElement("img");
                console.log(currentItem.Pic)
                imageDest.src= cart[i].Pic
                imageDest.onerror = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                imageDest.className = "cartImage";
                let itemName = document.createElement("h1");
                itemName.innerHTML = cart[i].Brand + " " + cart[i].Name;


                cartItem.appendChild(imageDest);
                cartItem.appendChild(itemName);
                cartLocation.appendChild(cartItem);
                document.getElementById("content").style.display = "None";
                cartdebounce = true;
            }
        }
        else if(cartdebounce == true){
            cartdebounce = false;
            let cartLocation = document.getElementById("cart")
            cartLocation.style.display = "None";
            document.getElementById("content").style.display = "Flex";
            document.getElementById("cartItemsHere").remove()
            let newCartItemsHere = document.createElement("div");
            newCartItemsHere.id = "cartItemsHere"
            document.getElementById("cart").appendChild(newCartItemsHere);
        }
    }
}
function closeThing(){
    debounce = false;
    if(currentOpen == "Yamaha"){
        let yama = document.getElementsByClassName("popupYamaha")
        yama[0].style.display = "None";
        yama[0].remove()
        destination.style.display = "none";
    }
    else if (currentOpen == "Fender"){
        let fend = document.getElementsByClassName("popupFender")
        fend[0].style.display = "none";
        fend[0].remove()
        destination.style.display = "none";
    }
    else if (currentOpen == "Maton"){
        let mato = document.getElementsByClassName("popupMaton")
        mato[0].style.display = "none";
        mato[0].remove()
        destination.style.display = "none";
    }

}
function addToCart(){
    console.log("Add to Cart");
    document.getElementById(currentName).parentElement.style.display = "none"
    closeThing();
    console.log(currentItem)
    cart.push({
        "Name" : currentItem.Name,
        "Type" : currentItem.Type,
        "Price" : currentItem.Price,
        "Brand" : currentItem.Brand,
        "Pic" : currentItem.Pic,
        "Color" : currentItem.Color})
    console.log(cart.length);

    if(cart.length == currentVal){
        document.getElementById("instrument-list").display = "None";
        document.getElementsByClassName("Content").innerHTML = "Store is Empty";
    }
}


// There should be a list of 6 instruments having data points of at least Name, Instrument Type, Price, and Brand.
//     There can only be three different brands: Fender, Yamaha, and Maton, and there should be two instruments of each Brand.
//     Display the image of each instrument in your HTML page with its name underneath.
//     When I click on an Instrument, it should display its Name, Price, and Brand in a div that covers the content on the page.
//     When I hover over an Instrument, its background color should change to what brand it is and the font color should change to white. Once I hover off, it should go back to normal.
//     Fender = Red
// Yamaha = Green
// Maton = Blue
// An Add to Cart button should be under the instrument's information in both the pop-up and normal divs. When I click on that button, it should add that instrument to my cart array and remove it from the store array.  The total items in the Cart array should be displayed in the top right-hand corner of the page. This removal of the item should be visible on the page (so the div containing that item should disappear).
// If all items from the store get removed, a message should appear saying "Store is Empty".
//     Clicking on the cart should add all the items back to your store, and empty the cart.
//     Another button next to my cart button should be for adding items to the store through a form. This should appear as a pop-up.
//     The Store item just needs to have a name that the user creates.
//     The user should be able to type out the name of the new instrument, select what brand it is and the type of instrument it is, then submit it, adding it to the store.
//     This should be visually represented in the store and have the correct interactivity when hovering over and clicking on the item.
//     Since the product doesn't have an image, make it so the image just says "no-image" rather than a broken image tag.
