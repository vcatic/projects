let main = document.getElementById("main")
let imgs = document.getElementById("imgs")

let shoes =[
    "airforce.png",
    "nikeJordan.png",
    "newbalance.png",
    "newbalance480.png",
    "adidasBold.png",
    "puma.png"
]

let shoenames=[
    "Nike Air Force 1 - 120€",
    "Nike Jordans 1 low - 130€",
    "New Balance 550 - 140€",
    "New Balnce 480 - 100€",
    "Adidas Bold Stripe - 110€",
    "Puma Carina Street - 70€"
]

function mainSite(){
    for (let i =0; i<6; i++){
        imgs.innerHTML +=`<div class="shoeimg" onclick="shoe${i}()"><img src="./Bilder/${shoes[i]}"><h3>${shoenames[i]}<h3></div>`
    }
}
mainSite()



function shoe0(){

    let nike =[
        "airforce.png",
        "airforceRot.jpg",
        "airforceGruen.jpg",
        "airforceBlau.jpg",
        "airforcePink.jpg",
        "airforceGelb.jpg",
        "airforceOrange.jpg",
        "airforceGrau.jpg",
        "airforceLila.jpg",
        "airforceTuerkis.jpg",
        "airforceSage.jpg",
        "airforceHellblau.jpg"
    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${nike[0]}"></div><div class="box2"><h3>Nike Air Force 1 - 120€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[6]}">`
    }
    
    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[11]}">`
    }


    
    
}


function shoe1(){
    let nike =[
        "nikeJordan.png",
        "nikeJordanRot.jpg",
        "nikeJordanGruen.jpg",
        "nikeJordanBlau.jpg",
        "nikeJordanPink.jpg",
        "nikeJordanGelb.jpg",
        "nikeJordanOrange.jpg",
        "nikeJordanGrau.jpg",
        "nikeJordanLila.jpg",
        "nikeJordanTuerkis.jpg",
        "nikeJordanSage.jpg",
        "nikeJordanHellblau.jpg"
    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${nike[0]}"></div><div class="box2"><h3>Nike Jordans 1 low - 130€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[6]}">`
    }

    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${nike[11]}">`
    }
    
}


function shoe2(){
    let newbalance =[
        "newbalance.png",
        "newbalanceRot.jpg",
        "newbalanceGruen.jpg",
        "newbalanceBlau.jpg",
        "newbalancePink.jpg",
        "newbalanceGelb.jpg",
        "newbalanceOrange.jpg",
        "newbalanceGrau.jpg",
        "newbalanceLila.jpg",
        "newbalanceTuerkis.jpg",
        "newbalanceSage.jpg",
        "newbalanceHellblau.jpg"

    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${newbalance[0]}"></div><div class="box2"><h3>New Balance 550 - 140€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[6]}">`
    }

    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[11]}">`
    }
}


function shoe3(){
    let newbalance =[
        "newbalance480.png",
        "newbalance480Rot.jpg",
        "newbalance480Gruen.jpg",
        "newbalance480Blau.jpg",
        "newbalance480Pink.jpg",
        "newbalance480Gelb.jpg",
        "newbalance480Orange.jpg",
        "newbalance480Grau.jpg",
        "newbalance480Lila.jpg",
        "newbalance480Tuerkis.jpg",
        "newbalance480Sage.jpg",
        "newbalance480Hellblau.jpg"

    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${newbalance[0]}"></div><div class="box2"><h3>New Balnce 480 - 100€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[6]}">`
    }

    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${newbalance[11]}">`
    }
}


function shoe4(){
    let adidas =[
        "adidasBold.png",
        "adidasBoldRot.jpg",
        "adidasBoldGruen.jpg",
        "adidasBoldBlau.jpg",
        "adidasBoldPink.jpg",
        "adidasBoldGelb.jpg",
        "adidasBoldOrange.jpg",
        "adidasBoldGrau.jpg",
        "adidasBoldLila.jpg",
        "adidasBoldTuerkis.jpg",
        "adidasBoldSage.jpg",
        "adidasBoldHellblau.jpg"
    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${adidas[0]}"></div><div class="box2"><h3>Adidas Bold Stripe - 110€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[6]}">`
    }

    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${adidas[11]}">`
    }
}

function shoe5(){
    let puma =[
        "puma.png",
        "pumaRot.jpg",
        "pumaGruen.jpg",
        "pumaBlau.jpg",
        "pumaPink.jpg",
        "pumaGelb.jpg",
        "pumaOrange.jpg",
        "pumaGrau.jpg",
        "pumaLila.jpg",
        "pumaTuerkis.jpg",
        "pumaSage.jpg",
        "pumaHellblau.jpg"


    ]

    let color =[
        "red",
        "green",
        "blue",
        "pink",
        "yellow",
        "orange",
        "grey",
        "purple",
        "turkise",
        "sage",
        "brightBlue"
    ]

    
    for(let i =0; i <11; i++){

        main.innerHTML = ""
        main.innerHTML += `<div class="customImg"><div id="box1"><img src="./Bilder/${puma[0]}"></div><div class="box2"><h3>Puma Carina Street - 70€</h3><p> basic colors </p><div class="colorBox"><div id="${color[0]}"></div><div id="${color[1]}"></div><div id="${color[2]}"></div><div id="${color[3]}"></div><div id="${color[4]}"></div><div id="${color[5]}"></div></div><p>premium colors  +10€</p><div class="colorBox"><div id="${color[6]}"></div><div id="${color[7]}"></div><div id="${color[8]}"></div><div id="${color[9]}"></div><div id="${color[10]}"></div></div><div id="finish" onclick="finish()">finish</div></div>`

    }

    let box1 = document.getElementById("box1")

    let red = document.getElementById ("red")
    red.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[1]}">`
    }

    let green = document.getElementById ("green")
    green.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[2]}">`
    }

    let blue = document.getElementById ("blue")
    blue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[3]}">`
    }

    let pink = document.getElementById ("pink")
    pink.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[4]}">`
    }

    let yellow = document.getElementById ("yellow")
    yellow.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[5]}">`
    }

    let orange = document.getElementById ("orange")
    orange.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[6]}">`
    }

    let grey = document.getElementById ("grey")
    grey.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[7]}">`
    }
    
    let purple = document.getElementById ("purple")
    purple.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[8]}">`
    }

    let turkise = document.getElementById ("turkise")
    turkise.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[9]}">`
    }

    let sage = document.getElementById ("sage")
    sage.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[10]}">`
    }

    let brightBlue = document.getElementById ("brightBlue")
    brightBlue.onclick = function(){
        box1.innerHTML= `<img src="./Bilder/${puma[11]}">`
    }
}


function finish(){
   main.innerHTML = `<div class="popup"><div class="popupHead"><h3>Would you like to add this item to your cart?</h3></div><div class="popupBox"><div class="text"><a href="./home.html">yes</div><div class="text2">cancel</div></div></div>`
}