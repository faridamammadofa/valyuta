const input = document.querySelector('input') 
const deyer = document.querySelector('.deyer') 
const a = document.querySelectorAll('.buying-azn ul li') 
const b = document.querySelectorAll('.selling-azn ul li') 
const pa = document.querySelector('.calc p')
const sag = document.querySelector('.sag') //html-de olan elementleri secmek
let c = 'RUB'; 
let v = 'USD'; //deyisen yaratmaq

function Safar(){
    fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
.then(response=>response.json()) 
.then(data=>( 
    // html-de olan deyerin fetchde olan sorguda obyektin deyerine beraber edir
        pa.innerHTML = `1 RUB = ${(Object.values(data.rates)[0])} USD`,  
    sag.innerHTML = `1 USD = ${1/(Object.values(data.rates)[0])} RUB`  
)) 
}

input.addEventListener("keyup",function(){  //keyup
fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
.then(response=>response.json()) 
.then(data=>( //keyup-dan sonra gelen deyer
        deyer.innerHTML=input.value*(Object.values(data.rates)[0])
)) 
})

for(let i =0;i<a.length;i++){ 
    a[i].addEventListener("click",function(){ 
        c=(a[i].textContent) 
        fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( //valyutada cevrilis etmek
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            pa.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`   
        )) 
           
}) 

} 


for(let i =0;i<b.length;i++){ 
b[i].addEventListener("click",function(){ 
    v =(b[i].textContent)
    fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( //valyutada cevrilis etmek
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            pa.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`

        )) 

}) 

}


for(var i = 0; i < a.length; i++)
{
    a[i].onclick = function(){
        var el = a[0];
        while(el)
        {

                el.classList.remove("list-2");  
            }
            el = el.nextSibling;
        }

      this.classList.add("list-2");  
    }

//funksiya 1 baslayarken buttonlar arasinda elaqe yeni meselen rubldan azn -e kecerken azn aciq  olur rubl bagli olur

for(var i = 0; i < b.length; i++)
{
    b[i].onclick = function(){
        var el = b[0];
        while(el)
        {
            if(el.tagName === "LI"){
                el.classList.remove("list-2");  
            }
            el = el.nextSibling;
        }
        
      this.classList.add("list-2");  
    }

}

//funksiya 2 baslayarken buttonlar arasinda elaqe yeni meselen rubldan azn -e kecerken azn aciq  olur rubl bagli olur


function hasNetwork(online){
    console.log(online)
}

window.addEventListener("load",()=>{
    hasNetwork(navigator.onLine);

    window.addEventListener("offline",()=>{
        hasNetwork("internet baglantisi yoxdu...");
    })

})