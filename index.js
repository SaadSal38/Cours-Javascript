
const question = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const reponse = document.querySelector("p");

question.addEventListener("click", () => {
    question.classList.toggle("question-click");
});
btn1.addEventListener("click", () => {
    reponse.classList.add("show-reponse");
    reponse.style.background="red";
});

btn2.addEventListener("click", () => {
    reponse.style.background="green";
    reponse.classList.add("show-reponse");
});

btn3.addEventListener("click", () => {
    reponse.style.background="red";
    reponse.classList.add("show-reponse");
});


//---------------------------------------------------------------

const mousemove= document.querySelector(".mousemove");

window.addEventListener("mousemove",(e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

question.addEventListener("mousenter", () => {
    question.style.background = "rgba(0,0,0,0.6)";
});

reponse.addEventListener("mouseover", () => {
    reponse.style.transform = "rotate(2deg)";
})

//-------------------------------------------------------------

const keypress = document.querySelector (".keypress");
const key = document.getElementById("key");
const ring = () => {
    const audio = new Audio ();
    audio.src = "./16272.mp3";
    audio.play ();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;


if ( e.key === "s" ) {
    keypress.style.background = "pink";
} else if (e.key === "n") {
    keypress.style.background = "blue";
} else {
        keypress.style.background = "black"; 
        keypress.style.color = "white";
}
ring();
});

//--------------------------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener ("scroll", () => {
    if (window.scrollY>120) {
        nav.style.top = 0;
    } else {
            nav.style.top = "-50px";
    }
    

});

//--------------------------------------------------------------

const inputName = document.querySelector ('input[type="text"]');
const select = document.querySelector ("select");
const form = document.querySelector ("form");
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;

});
select.addEventListener("input", (e) => {
    language= e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
                
        if (cgv.checked) {
            document.querySelector("form > div").innerHTML = `
            <h3>Pseudo : ${pseudo}<h3>
            <h4>Langage préferé : ${language}<h4>
            `;
        } else {
            alert("Veuillez accepter les conditions");
        }
        
});

//-----------------------------------------------------------

window.addEventListener ("load", () => {
})

btn3.addEventListener("click", () => {
    confirm("Es-tu sûr ?");
});
btn2.addEventListener("click", () => {
    let reponse = prompt ("Entrez votre nom")
    question.innerHTML = "<h3> BRAVO " + reponse +"!!"+ "<h3>";
});


//-----------------------------------------------------------

//const boxes = document.querySelectorAll(".box");

//console.log(boxes);


//boxes.forEach((box) => {
  //  box.addEventListener ("click", (e) =>{
    //    e.target.style.transform = "scale(1.2)"
    //})
//})

//---------------------------------------------------------

//console.log(innerHeight);


//setTimeout(() => {
    //question.style.borderRadius = "300px";
//}, 2000);

//setInterval(() => {
    //question.style.background = "pink";
//}, 1500);
//setInterval(() => {
   // question.style.background = "yellow"    
//}, 1600);

//----------------------------------------------------------

//window.addEventListener("mousemove", (e) => {
   // nav.style.setProperty("--x", e.layerX + "px");
   // nav.style.setProperty("--y", e.layerY + "px");
//})