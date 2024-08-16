import axios from "axios";
import displayCoins from "./displayCoins";
// export const getCoins=(query)=>{
// console.log(query);
// const url = `https://api.coinranking.com/v2/coins?search=${query}`;
// const options = {
//     headers: {
//       'x-access-token': "coinranking70b4987dbeb6ec3d69d6d3019ccd924f913b8dd388236c39",
//     },
//   };



  
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// }


// export const getCoins=async (query)=>{
//     console.log(query);
//     const url = `https://api.coinranking.com/v2/coins?search=${query}`;
//     const options = {
//         headers: {
//           'x-access-token': "coinranking70b4987dbeb6ec3d69d6d3019ccd924f913b8dd388236c39",
//         },
//       };
//       try {
//         const res = await fetch(url, options)
//       const coinData =await res.json();
//       console.log(coinData);
//       } catch (error) {
//         console.error(error);
//       }
      
//     };



    
export const getCoins=async (query)=>{
    console.log(query);
    const url = `https://api.coinranking.com/v2/coins?search=${query}`;
    const options = {
        headers: {
          'x-access-token': "coinranking70b4987dbeb6ec3d69d6d3019ccd924f913b8dd388236c39",
        },
      };
      try {
       const res= await axios(url, options)
       console.log(res.data)

       if(!res.data.data.coins.length){
        alert ("coin not found")
       }else{
        displayCoins(res.data.data.coins[0]);
       }
      } catch (error) {
        console.error(error);
      }
      
    };