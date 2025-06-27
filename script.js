// let URL = "https://catfact.ninja/fact"
// let fct = document.querySelector("#facts");




// const getfacts = async () =>{
//     console.log("Getting the data......")
//     let response = await fetch(URL);
//     console.log(response)
//     let data = await response.json();
//     fct.innerText = data.fact;
// }

// getfacts()


let URL = "https://catfact.ninja/fact";
let fct = document.querySelector("#facts");
let button = document.querySelector("#btn")



const getfacts = async () => {
  console.log("Getting the data......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  fct.innerText = data.fact; // fixed: no [0]
};

button.addEventListener("click",getfacts)
