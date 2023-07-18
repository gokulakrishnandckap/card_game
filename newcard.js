//
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
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 5,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 6
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 7
    }

]
//targeting dom elements
const container = document.querySelector(".container")
console.log(container);

//looping cards

for (let i = 0; i < cards.length; i++) {
   let mainDiv = document.createElement("div")
   mainDiv.setAttribute("id","card")
   let image = document.createElement("img")
   image.setAttribute("src",cards[i].img)
   mainDiv.append(image)

    container.append(mainDiv)
}