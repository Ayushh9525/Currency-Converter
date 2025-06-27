
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

//   const u = fca_live_S6wWtPZcuiIv43yd5p09if0vvwtmtgCdHBus5Rx0;
// https://api.freecurrencyapi.com/v1/status?apikey=fca_live_S6wWtPZcuiIv43yd5p09if0vvwtmtgCdHBus5Rx0


// const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S6wWtPZcuiIv43yd5p09if0vvwtmtgCdHBus5Rx0 ; 

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_S6wWtPZcuiIv43yd5p09if0vvwtmtgCdHBus5Rx0";
const apiKey = "fca_live_S6wWtPZcuiIv43yd5p09if0vvwtmtgCdHBus5Rx0";



// &currencies=EUR%2CUSD%2CCAD"



  const dropdowns = document.querySelectorAll(".dropdown select");  
  const btn = document.querySelector(".btn");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");



for(let select of dropdowns){
    for( Currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;
        select.append(newOption);
        if(select.name === "from" && Currcode === "USD"){
            newOption.selected = "selected";
        } else
        if(select.name === "to"  && Currcode == "INR") {
            newOption.selected = "selected";
        }
      }

      select.addEventListener("change", (evt)=>{
       UpdateFlag(evt.target);
      })
}



const UpdateFlag = (element) =>{
    // console.log(element)
    let Currcode = element.value;
    // console.log(Currcode)/
    let countryCode = countryList[Currcode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    // let img = element.parentElement.querySelector(".flag");
    // let img = element.closest(".dropdown").querySelector(".flag");
    // let img = document.getAnimations(".flag")
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
    
}



btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".inputs input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // console.log(fromCurr.value, toCurr.value)

    // const URL  = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toUpperCase()}.json`;

    // const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${fromCurr}&currencies=${toCurr}`;

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${fromCurr.value}&currencies=${toCurr.value}`;

    let response = await fetch(url)
    let data = await response.json();


    let rate = data.data[toCurr.value];

    // console.log(rate)



    let finalAmt = amtVal* rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`




});