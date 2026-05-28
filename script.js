// script.js


// Book Car Function

function bookCar(){

    alert("Car booked successfully 🚗🔥");

}



// Favorite Button

function favorite(btn){

    if(btn.innerHTML == "❤️"){

        btn.innerHTML = "💖";

    }

    else{

        btn.innerHTML = "❤️";

    }

}



// Search + Filter

const searchInput =
document.getElementById("searchInput");

const brandFilter =
document.getElementById("brandFilter");

const cards =
document.querySelectorAll(".car-card");


if(searchInput && brandFilter){

    searchInput.addEventListener("keyup", filterCars);

    brandFilter.addEventListener("change", filterCars);

}


function filterCars(){

    const searchValue =
    searchInput.value.toLowerCase();

    const brandValue =
    brandFilter.value;


    cards.forEach(card => {

        const title =
        card.querySelector("h2").innerText;

        const matchSearch =
        title.toLowerCase().includes(searchValue);

        const matchBrand =
        brandValue === "all" ||
        title.includes(brandValue);


        if(matchSearch && matchBrand){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

}



// Sound Effect

const sound =
document.getElementById("carSound");


if(sound){

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            sound.play();

        });

    });

}



// Dark Mode

const body = document.body;

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

document.body.appendChild(darkBtn);


darkBtn.style.position = "fixed";

darkBtn.style.bottom = "30px";

darkBtn.style.right = "30px";

darkBtn.style.padding = "15px";

darkBtn.style.border = "none";

darkBtn.style.borderRadius = "50%";

darkBtn.style.fontSize = "22px";

darkBtn.style.cursor = "pointer";

darkBtn.style.zIndex = "1000";

darkBtn.style.background = "red";

darkBtn.style.color = "white";


darkBtn.onclick = function(){

    body.classList.toggle("light-mode");


    if(body.classList.contains("light-mode")){

        darkBtn.innerHTML = "☀️";

    }

    else{

        darkBtn.innerHTML = "🌙";

    }

};




// Explore Cars Button

const exploreBtn =
document.querySelector(".hero-content button");


if(exploreBtn){

    exploreBtn.onclick = function(){

        window.location.href = "#cars";

    };

}




// Contact Form

const form =
document.querySelector(".contact form");


if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Form submitted successfully ✅");

    });

}




// Buy Now Button

const buyBtn =
document.querySelector(".details-text button");


if(buyBtn){

    buyBtn.onclick = function(){

        alert("Purchase successful 🚗🔥");

    };

}




// Login Button

const loginBtn =
document.querySelector(".login-form button");


if(loginBtn){

    loginBtn.onclick = function(event){

        event.preventDefault();

        alert("Login successful ✅");

    };

}