const simple = ["red", "green", "#f15025", "rgba(0,0,50,0.05)"];

const btn = document.getElementById('btn');
// console.log(btn);
// console.log(typeof btn);
const color = document.querySelector('.color');



btn.addEventListener("click", function(){
    const randomnumber = getrandomnumber();  
    document.body.style.backgroundColor = simple[randomnumber];
    color.textContent = simple[randomnumber];
    
});



function getrandomnumber(){
    return Math.floor(Math.random() * simple.length);
}
