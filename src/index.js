let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  fetch("http://localhost:3000/toys")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach((thanksKyle) => { 
        console.log(thanksKyle);
        const div = document.createElement("div");
        div.className = "card";

        const h2 = document.createElement("h2");
        h2.textContent = thanksKyle.name;
        
        const img = document.createElement("img");
        img.classList.add("toy-avatar");

        img.src = thanksKyle.image;

        const p = document.createElement("p");
        const btn = document.createElement("button"); 
      
        

        console.log("please help me");
        
       
        div.append(h2, img);
        document.querySelector("#toy-collection").append(div);



    });

    
  })})







  // const someThing = document.getElementsByClassName("card");
  // someThing.textContent = "someThing";