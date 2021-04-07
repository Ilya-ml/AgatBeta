window.onscroll = function showHeader() {
    
    var header = document.querySelector('.header');
    
    if (window.pageYOffset > 150){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}