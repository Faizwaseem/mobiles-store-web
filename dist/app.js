
const phones = [
    {
        img :"./assets/techno camon.jpg",
        brand: 'Techno ',
        model: 'camon 19',
        price:'43,999',
     
    },
    {
        img :"./assets/xiomi.jpg",
        brand: 'Xiomi',
        model: 'note10',
        price:'53,999',
     
    },
    
   
    {
        img :"./assets/techno.jpg",
        brand: 'Tecno',
        model: 'spark10',
        price:'45,999',
     
    },
    {
        img :"./assets/iphone.jpg",
        brand: 'Iphone',
        model: '14',
        price:'500,000',
     
    },
    {
        img :"./assets/oppo.jpg",
        brand: 'Oppo',
        model: 'F11',
        price:'65,999',
     
    },
    
    {
        img :"./assets/techno.jpg",
        brand: 'Tecno',
        model: 'spark10',
        price:'45,999',
     
    },
    {
        img :"./assets/techno camon.jpg",
        brand: 'Techno ',
        model: 'camon 19',
        price:'43,999',
     
    },
    {
        img :"./assets/oppo.jpg",
        brand: 'Oppo',
        model: 'F11',
        price:'65,999',
     
    },

]
const div = document.querySelector('.containers');


for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div class=" p-[2rem] mt-5 ml-8 border-black-200 border-solid border-2 rounded-lg drop-shadow-2xl">
    <img src ="${phones[i].img}">
            <p class="ml-8 mt-3"><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <p class="ml-8"><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p class="ml-8"><span class="font-bold text-lg">price:</span> ${phones[i].price}</p>

            <button onclick='addCart(${i})'  class="bg-black  rounded-md px-2 py-1 text-white ml-8 mt-4 hover:bg-[#00a4ec]">Add to Cart</button>
    </div>
    `

}



const cartArr = []

function addCart(index) {
    
    if (cartArr.includes(phones[index])) {
        console.log('item already ha');
    }
    else {
        phones[index].quantity = 1
        cartArr.push(phones[index]);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item Added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    console.log('add successfully ', cartArr);
}











