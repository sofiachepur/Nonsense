function createCart(item){
    const cart = document.createElement("div");
    cart.classList.add("cart__item");

    const descBlock= document.createElement("div");
    descBlock.classList.add("cart__item__desc");

    const linkS = document.createElement("div");
    linkS.classList.add("cart__item__link");

    if (item.bg){
        cart.style.backgroundColor = item.bg;
    }

    if (item.bg2) {
        cart.style.backgroundImage = `url("${item.bg2}")`;
        cart.style.backgroundSize = "cover";
        cart.style.backgroundPosition = "center";
        cart.style.backgroundRepeat = "no-repeat";
    }

    if(item.name){
        const name = document.createElement("p");
        name.innerText = item.name;
        name.classList.add("cart__item__name");
        cart.appendChild(name);
    }
    if (item.photo){
        const photo=document.createElement("img");
        photo.src = item.photo;
        photo.alt = item.name || "Error";
        photo.classList.add("cart-image");

        cart.appendChild(photo);
    }

    if(item.desc){
        const desc = document.createElement("p");
        desc.textContent = item.desc;
        descBlock.appendChild(desc);
    }

    if(item.date){
        const date = document.createElement("p");
        date.textContent = item.date;
        descBlock.appendChild(date);
    }

    if(item.desc || item.date){
        cart.appendChild(descBlock);
    }

    if(item.href){
        const link = document.createElement("a");
        link.href = item.href;
        link.target = "_blank";
        link.textContent = item.link;

        linkS.appendChild(link);
    }

    if(item.icon){
        const icon = document.createElement("img");
        icon.classList.add("cart-icon");
        icon.src = item.icon;
        icon.alt = "Link icon";
        linkS.appendChild(icon);
    }

    if(item.href || item.link){
        cart.appendChild(linkS);
    }
    
    return cart;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });
});


fetch("product.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("cart");

        data.forEach(item => {
            const cart = createCart(item);
            container.appendChild(cart);

            observer.observe(cart)
        })
    });


 function openModal(){
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
 }
 function closeModal(){
     const modal = document.getElementById("myModal");
     modal.style.display = "none";
 }