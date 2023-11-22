const menu_icon = document.getElementById("nav_chain");
const navbarContent = document.getElementById("navbarContent");
const overlay = document.getElementById("overlay");
let first_click = true;

menu_icon.addEventListener("click",() => {
    if(first_click) {
        navbarContent.style.marginTop = "0em";
        first_click = !first_click;
        menu_icon.classList.toggle("fa-x");

        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }else {
        navbarContent.style.marginTop = "-27em";
        first_click = !first_click;
        menu_icon.classList.toggle("fa-x");

        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
})

overlay.addEventListener("click",() => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    navbarContent.style.marginTop = "-27em";
    first_click = !first_click;
    menu_icon.classList.toggle("fa-x");
})