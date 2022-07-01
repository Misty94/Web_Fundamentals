async function getMoney(){
    var div = document.querySelector("#coinList");
    console.log("Wazzaaaa, lets get this mula.");
    //create a variable to store the data we collect from the api. We will call the 
    var responseFromApi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    //convert the information to json (some format the computer can understand)
    var coinData = responseFromApi.json();
    console.log(coinData);

    //for each coin, i want to generate a paragraph tag
    for(var i = 0; i < coinData.lenght; i++){
        // console.log(coinData[i]);
        var currentCoin = coinData[i]; // store the current coin we are inside of from the array into a variable
        //create a paragraph tag
        var pTag = document.createElement("p");
        // console.log(pTag);
        pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;
        // console.log(pTag);

        //add a css class to the pTag
        pTag.classList.add("coin");

        //put the paragraph tag inside our div called coinList -> we put it at top of funcation
        div.appendChild(pTag);

    }
    /*
    identify the container (div) to put the information inside of
    display the coins on the page
    get the date from the api about the coins

    FOR each coin, i want to generate a paragraph tag


    */
}