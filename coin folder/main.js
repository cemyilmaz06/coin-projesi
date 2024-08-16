import "./scss/style.scss"
import { getCoins } from "./src/getCoins";

const form = document.querySelector("header form");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  getInputVal();
  form.reset();

  });


  const getInputVal=()=>{

  const inputVal=document.querySelector("header form input").value;

  if(!inputVal.trim()){
    alert("geçerli bir değer giriniz.")
  }else {
    console.log("input girilmiş");

    getCoins(inputVal);
  }


};
