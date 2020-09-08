window.addEventListener("load", function(){
    var navbar = document.querySelector("div.col-2.mobile.navm")
    var iconoBars = document.querySelector("i.fas.fa-bars")
    var iconoC = document.querySelector("i.fab.fa-mixer")
        navbar.addEventListener("click", function(){
        iconoBars.classList.toggle("celeste")
        document.querySelector("div.navbar.mobile").classList.toggle("navbar2")
    })
})
