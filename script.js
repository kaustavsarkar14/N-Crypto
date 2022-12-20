var btc = document.getElementById('btc');
var busd = document.getElementById('busd');
var doge = document.getElementById('doge');
var eth = document.getElementById('eth');




var settings = {
    "async": true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cbusd&vs_currencies=usd",
    "method" : "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    busd.innerHTML=response.busd.usd;
    doge.innerHTML=response.dogecoin.usd;
    eth.innerHTML=response.ethereum.usd;
})

