const iconLight = document.getElementById("icon-light"),
        btnMenuOpen = document.getElementById("menu-open"),
        btnMenuClose = document.getElementById("menu-close"),
        navMenu = document.querySelector(".nav__menu"),
        menuItems = document.querySelectorAll(".list__item-link"),
        cardProyectos = document.querySelectorAll('.card');
        
document.oncontextmenu = ()=>(false);


if(btnMenuOpen){
    btnMenuOpen.onclick = ()=>{ 
        navMenu.classList.add('menu-active');
    };
}

if(btnMenuClose){
    btnMenuClose.onclick = ()=>{
        navMenu.classList.remove('menu-active');
    };
}


let sections = document.querySelectorAll('section');

let scrollAux;
window.addEventListener("scroll", scrollSection);

function scrollSection(){
    scrollAux = window.pageYOffset + (window.innerHeight/2 - 200);
    sections.forEach(section => {
        if((section.offsetTop < scrollAux) && 
            ((section.offsetTop + section.clientHeight) > scrollAux)){
            itemActive(section.id);
        }
    });
}


menuItems.forEach(item => {
    item.onclick = (e)=>{
        let ItemsAux = document.querySelectorAll(".list__item-link");
        console.log(item.textContent);
        ItemsAux.forEach(link => {
            link.classList.remove("active");
        });
        navMenu.classList.remove('menu-active');
        itemActive(item.textContent);
    };
});

function itemActive(text){
    let ItemsAux = document.querySelectorAll(".list__item-link");
    let textContentItem = "";
    ItemsAux.forEach(link => {
        textContentItem = link.textContent;
        if(textContentItem === "Sobre My"){
            textContentItem = "about";
        }
        if(textContentItem.toLowerCase() === text.toLowerCase()){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    });
}


let width = 0;
width = window.screen.width;
window.addEventListener('resize', (event)=>{
    width = window.screen.width;
});



if(width > 768){
    cardProyectos.forEach(card => {
        let cardInfo = card.querySelector('.info');
        let cardTitle = card.querySelector('.info__date-title');
        let cardDescription= card.querySelector('.info__date-description');
        let cardLinks= card.querySelector('.info__links');

        card.addEventListener('mouseover', (event)=>{
            cardLinks.style.transform = "translateX(0)";
            cardTitle.style.transform = "translateX(0)";
            cardDescription.style.transform = "translateX(0)";
            cardInfo.classList.add("info-active");

        });
    
        card.addEventListener('mouseout', (event)=>{
            cardLinks.style.transform = "translateX(-3rem)";
            cardTitle.style.transform = "translateX(-3rem)";
            cardDescription.style.transform = "translateX(-3rem)";
            cardInfo.classList.remove("info-active");
        });
    });
}


