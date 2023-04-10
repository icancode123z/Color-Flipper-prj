const hex = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    let firstcolor = "#";
    let i = 0;
    for(i; i < 6; i += 1){
        firstcolor += hex[getrandomnumber()];
        
        
    }
    document.body.style.backgroundColor = firstcolor;
    color.textContent = firstcolor;
    

})

function getrandomnumber(){
    return Math.floor(Math.random() * (hex.length - 1));
}

