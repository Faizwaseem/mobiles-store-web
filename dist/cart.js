function goToHome() {
    window.location = 'index.html'
}


const data = localStorage.getItem('cartItem');
const cartArr = JSON.parse(data);
console.log(cartArr);

const div = document.querySelector('#main-div');


function repeatCart() {
    for (let i = 0; i < cartArr.length; i++) {
        div.innerHTML += `
        <div class="p-[2rem] border-black-200 border-solid border-2px rounded-lg drop-shadow-2xl mt-5">
                <p class="text-cyan-50"><span class="font-bold text-lg text-cyan-50">brand:</span> ${cartArr[i].brand}</p>
                <p class="text-cyan-50"><span class="font-bold text-lg text-cyan-50">Model:</span> ${cartArr[i].model}</p>
                <p class="text-cyan-50"><span class="font-bold text-lg text-cyan-50">Quantity:</span> ${cartArr[i].quantity}</p>
                <p class="text-cyan-50"><span class="font-bold text-lg text-cyan-50">Price:</span> ${cartArr[i].price}</p>
                <p class="text-cyan-50"><span class="font-bold text-lg text-cyan-50">Total Price:</span> ${cartArr[i].price}</p>

                <button class="bg-[#38bdf8] rounded-md px-2 py-1   text-white= mt-4 hover:bg-[#00a4ec]" onclick="increaseQuantity(${i})">+</button>
                <span class="text-cyan-50">${cartArr[i].quantity}</span>
                <button class="bg-[#38bdf8] rounded-md px-2 py-1 text-white mt-4 hover:bg-[#00a4ec]" onclick="decreaseQuantity(${i})">-</button> <br/>
                <button  class="bg-[#38bdf8] rounded-md px-2 py-1  text-white mt-4 hover:bg-[#00a4ec]" onclick="deleteItem(${i})">Delete</button>
        </div>
        `
    }
}

repeatCart()

function increaseQuantity (index){
    div.innerHTML = ''
    // console.log(cartArr[index])
    cartArr[index].quantity += 1
    repeatCart()
}
function decreaseQuantity (index){
    div.innerHTML = ''
    // console.log(cartArr[index])
    cartArr[index].quantity -= 1
    repeatCart()
    if(cartArr[index].quantity === 0){
        // div.innerHTML = ''
        cartArr.splice(index , 1)
        // renderCart()
    }
}


function deleteItem(index){
    div.innerHTML = '';
    cartArr.splice(index , 1);
    // renderCart()
}

