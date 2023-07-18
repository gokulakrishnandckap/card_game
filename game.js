//images
var cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    }, 
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7
    },
    {
        name: "python",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10
    },
    {
        name: "sublime",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
        id: 11
    },
    {
        name: "wordpress",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
        id: 12
    }
];


//target the image tag
let img = document.querySelectorAll("img")

let res1 =[]
let res2 =[]
// loop for cards
for (let i = 0; i < cards.length; i++) {
        res1.push(cards[i].img);
        res2.push(cards[i].img);
}
//concat the two array
let result = res1.concat(res2)

let img2=[]
for (let j = 0; j < img.length; j++) {
    img[j].src = result[j]
    img2.push(img[j].src)
}


for (let x = 0; x < img2.length; x++) {
//random
    let ran = Math.floor(Math.random() * (x+1))
    let r = img2[x]
    img2[x] = img2[ran]
    img2[ran] = r

}


for(let r=0;r < img2.length;r++){
    img[r].src = img2[r]

}

//target the cards
const car = document.querySelectorAll(".cards")



let val = 0;
let tar;
let tar1;


for (let k = 0; k < car.length; k++) {
    car[k].addEventListener("click",games)            

    function games(e) {
    val++
    if(val == 2){
        tar = img[k]
        console.log(val);
        img[k].className = "show"
        display()
        val = 0;
    }
    else if(val == 1){
        tar1 = img[k]
        img[k].className = "show"
    }      

    }
        

}



function display(){
    if(tar.src !== tar1.src){
        displayAlert()
    }
    if(tar.src == tar1.src){     
        tar.className ="show";    
        tar1.className ="show";    
    }
}
//timeout
function displayAlert(){
    window.setTimeout(()=>{
        tar.className = "hide"
        tar1.className = "hide"
    },200)
}
