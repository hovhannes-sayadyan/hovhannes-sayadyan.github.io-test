let menubar = document.getElementById(`menubar`) ;
let butdiv = document.getElementById(`butdiv`) ;
let a = document.getElementsByClassName(`abutdiv`) ;
let ok = true

menubar.addEventListener(`click` , function () {
   if (ok === true) {
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        element.style.display = `block`
        element.style.gap = `30px`
        console.log(a);
        element.addEventListener(`click` , function () {
            butdiv.style.display = `none`
            menubar.src = `./Images/menu_bar-removebg-preview.png`
            ok = true 
        })
    }
    butdiv.style.display = `flex`
    menubar.src = `./Images/Без_названия-removebg-preview.png`
    ok = false
   }else{
    butdiv.style.display = `none`
    menubar.src = `./Images/menu_bar-removebg-preview.png`
    ok = true
   }
})