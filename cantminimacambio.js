//cuanto sería la cantidad mínima de monedas de cambio

//25 centavos
//10 centavos
//5 centavos
//1 centavo

function cambioenmonedas(cambio)
{
    if(cambio<1)
    {
        return 0;
    }
    var coins = [25,10,5,1];
    numeroDeCoins = 0;

    for(var coin of coins)
    {
      numeroDeCoins +=  Math.floor(cambio/coin); //cantidad de monedas (25, 10, 5 ,1)
     cambio =  cambio % coin;
     if(cambio === 0){
         break;
     }
    } 
    return numeroDeCoins;
   
}
console.log("numero de monedas =",cambioenmonedas(35));
//cambioenmonedas(31);