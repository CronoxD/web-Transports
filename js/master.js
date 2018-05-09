$(document).ready(function(){

  const buscador = $('.buscador');
  const iconSearch = $('.icon-search');
  const iconCancel = $('.icon-cancel');
  const iconMenu = $('.icon-menu');
  const menu = $('.menu');
  //Crear media query
  const screenMin900 = window.matchMedia("(min-width: 900px)");
  //Oculta el buscador al cargar la página si el ancho es mayor a 900px
  if(screenMin900.matches) {
    const toggleSearch = (ms) => buscador.fadeToggle(ms);
    toggleSearch(0);
    //Si se hace un clic en el boton search aparece el buscador
    iconSearch.click(toggleSearch.bind(null,500));
    iconCancel.click(toggleSearch.bind(null,500));
  } else { //Si la pantalla es menor a 900, se activa el boton del menu
    iconMenu.click(function(){
      menu.slideToggle('slow');
    });
  }

});
