
function getCartQuantity() {
    let  cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
    let quantity = 0;
    for (const key of cartItems) {
      quantity += key.quantity;
    }
    cartcount = window.document.getElementsByClassName("basket")[0];
    cartcount.innerHTML += quantity;
  }
  getCartQuantity();
let all_cards = document.querySelector(".all-cards")
let alldata;
let caetgoryData;
let xhrrequest = new XMLHttpRequest()
xhrrequest.open("get", "../data.json")
xhrrequest.onreadystatechange = function () {
    if (xhrrequest.readyState == 4 && xhrrequest.status == 200) {

        alldata = JSON.parse(xhrrequest.response)
        caetgoryData = alldata.classic

        for (let i = 0; i < caetgoryData.length; i++) {
            let card = document.createElement("div")
            card.addEventListener("click", function() {
                window.location = `../singleproduct/single.html?id=${caetgoryData[i].id}`;
            })
            card.setAttribute("class", "card")
            let fig = document.createElement("figure")
            let imgee = document.createElement("img")




            imgee.setAttribute("src", caetgoryData[i].image1)
            fig.appendChild(imgee)

            // Desc


            let card_desc = document.createElement("div")
            card_desc.setAttribute("class", "card-desc")

            let h3 = document.createElement("h3")

            h3.textContent = caetgoryData[i].name
            let span = document.createElement("span")
            span.textContent = caetgoryData[i].price
            span.style.display = "block"
            span.style.fontSize = "18px"
            span.style.fontWeight = "bold"
            span.style.color = "rgb(32, 32, 32)"


            card_desc.appendChild(h3)
            card_desc.appendChild(span)


            //  Add Card Hover

            let a_link = document.createElement("a")
            // a_link.setAttribute("href", "")
            let h4 = document.createElement("h4")
            h4.setAttribute("id", caetgoryData[i].id)
            h4.setAttribute("class", "add-to-card")
            h4.textContent = "Add"
            a_link.setAttribute('onclick', "add_to_cart(event)")
            // a_link.addEventListener("click", add_to_cart)
            a_link.appendChild(h4)

            // Append
            card.appendChild(fig)
            card.appendChild(card_desc)
            card.appendChild(a_link)
            all_cards.appendChild(card)


        }


    }


}

xhrrequest.send()





let arr = [];
function add_to_cart(evt) {
    // console.log(x.target);
    let watchID = evt.target.id
    let watchData = caetgoryData.find(function (ele) { return ele.id == watchID; })

    console.log(watchData);

    if (localStorage.getItem("CartItems")) {
        let stringCartItems = localStorage.getItem("CartItems")
        let parsedItemsLocalStorage = JSON.parse(stringCartItems);
        console.log(parsedItemsLocalStorage);
        let isfound = parsedItemsLocalStorage.find(function (ele) {
            if (ele.id == watchID) {
                ele.quantity += 1;
                return ele;
            }
        })
        if (isfound == undefined) {
            watchData["quantity"] = 1
            parsedItemsLocalStorage.push(watchData);
        }

        // parsedItemsLocalStorage.push(watchData);
        console.log(parsedItemsLocalStorage);
        let saveString = JSON.stringify(parsedItemsLocalStorage);
        localStorage.setItem("CartItems", saveString)

    } else {
        console.log("error");
        watchData["quantity"] = 1
        let stringWatchData = JSON.stringify([watchData])
        localStorage.setItem("CartItems", stringWatchData)
    }
    // for (let i = 0; i < caetgoryData.length; i++) {
    //     index = caetgoryData[i].id
    //     // console.log(caetgoryData[i].id);
    //     if (index == location) {
    //         console.log(caetgoryData[i]);
    //         caetgoryData[i].quantity = 1;
    //         // localStorage.setItem("id", JSON.stringify(caetgoryData[i]))
    //         arr.push(caetgoryData[i])
    //         localStorage.setItem("card", JSON.stringify(arr))
    //     }
    // }



}


function changeCategory(event) {

    console.log(event.target.id);


    all_cards.innerHTML = ""    // this to clear all iteams from the container not the json file then show anothers


    let xhrrequest = new XMLHttpRequest()
    xhrrequest.open("get", "../data.json")
    xhrrequest.onreadystatechange = function () {
        if (xhrrequest.readyState == 4 && xhrrequest.status == 200) {

            alldata = JSON.parse(xhrrequest.response)

            caetgoryData = alldata[event.target.id]
            // console.log(classic[0].image1);


            for (let i = 0; i < caetgoryData.length; i++) {
                let card = document.createElement("div");
                card.addEventListener("click", function() {
                    window.location = `../singleproduct/single.html?id=${caetgoryData[i].id}`;
                })
                card.setAttribute("class", "card")
                let fig = document.createElement("figure")
                let imgee = document.createElement("img")




                imgee.setAttribute("src", caetgoryData[i].image1)
                fig.appendChild(imgee)

                // Desc


                let card_desc = document.createElement("div")
                card_desc.setAttribute("class", "card-desc")

                let h3 = document.createElement("h3")

                h3.textContent = caetgoryData[i].name
                let span = document.createElement("span")
                span.textContent = caetgoryData[i].price
                span.style.display = "block"
                span.style.fontSize = "18px"
                span.style.color = "rgb(32, 32, 32)"




                card_desc.appendChild(h3)
                card_desc.appendChild(span)


                //  Add Card Hover

                let a_link = document.createElement("a")
                // a_link.setAttribute("href", "")
                let h4 = document.createElement("h4")
                h4.setAttribute("id", caetgoryData[i].id)
                h4.setAttribute("class", "add-to-card")
                h4.textContent = "Add"
                a_link.setAttribute('onclick', "add_to_cart(event)")
                // a_link.addEventListener("click", add_to_cart)
                a_link.appendChild(h4)

                // Append
                card.appendChild(fig)
                card.appendChild(card_desc)
                card.appendChild(a_link)
                all_cards.appendChild(card)


            }


        }


    }

    xhrrequest.send()



}





































// all watches






function allwatch(event) {

    console.log(event.target.id);


    all_cards.innerHTML = ""    // this to clear all iteams from the container not the json file then show anothers


    let xhrrequest = new XMLHttpRequest()
    xhrrequest.open("get", "../data.json")
    xhrrequest.onreadystatechange = function () {
        if (xhrrequest.readyState == 4 && xhrrequest.status == 200) {

            alldata = JSON.parse(xhrrequest.response)

            // caetgoryData = alldata
            // console.log(classic[0].image1);

            for (const key in alldata) {
                caetgoryData = alldata[key]

                for (let i = 0; i < caetgoryData.length; i++) {
                    // let x = document.createElement("a");
                    // x.href = `../singleproduct/single.html?id=${caetgoryData[i].id}`;
                    let card = document.createElement("div")
                    card.addEventListener("click", function() {
                        window.location = `../singleproduct/single.html?id=${caetgoryData[i].id}`;
                    })
                    card.setAttribute("itemid", caetgoryData[i].id);
                    card.setAttribute("onclick", "getDetails(event)");
                    card.setAttribute("class", "card")
                    let fig = document.createElement("figure")
                    let imgee = document.createElement("img")




                    imgee.setAttribute("src", caetgoryData[i].image1)
                    fig.appendChild(imgee)

                    // Desc


                    let card_desc = document.createElement("div")
                    card_desc.setAttribute("class", "card-desc")

                    let h3 = document.createElement("h3")

                    h3.textContent = caetgoryData[i].name
                    let span = document.createElement("span")
                    span.textContent = caetgoryData[i].price
                    span.style.display = "block"
                    span.style.fontSize = "18px"
                    span.style.color = "rgb(32, 32, 32)"




                    card_desc.appendChild(h3)
                    card_desc.appendChild(span)


                    //  Add Card Hover

                    let a_link = document.createElement("a")
                    // a_link.setAttribute("href", "")
                    let h4 = document.createElement("h4")
                    h4.setAttribute("id", caetgoryData[i].id)
                    h4.setAttribute("class", "add-to-card")
                    h4.textContent = "Add"
                    a_link.setAttribute('onclick', "add_to_cart(event)")
                    // a_link.addEventListener("click", add_to_cart)
                    a_link.appendChild(h4)

                    // Append
                    card.appendChild(fig)
                    card.appendChild(card_desc)
                    card.appendChild(a_link)
                    // x.appendChild(card)
                    all_cards.appendChild(card)


                }

            }
        }


    }

    xhrrequest.send()



}

function getDetails(event) {
    console.log(event.target);
    
}
