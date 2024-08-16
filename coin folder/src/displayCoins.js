const displayCoins= (coin)=>{
    console.log(coin);
    const {price, name, change, symbol, iconUrl}= coin;
    const ul=document.querySelector("main .coins");
    const li= document.createElement("li");
    li.className="coin";
    li.innerHTML=`
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name" data-name="Bitcoin">
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">$${Number(price).toFixed(2)}</div>
            <figure>
                <img class="coin-icon" src=${iconUrl}>                
                <figcaption style=color:${change < 0 ? "red": "green"}>
                    <i class="fa-solid fa-chart-line"></i>
                    <span>${change}%</span>
                </figcaption>
        </figure>`;
        // ul.appendChild(li);
        ul.prepend(li);
        li.querySelector(".remove-icon").addEventListener("click",()=>{
            li.remove();
        })

}
export default displayCoins