$(document).ready(function(){

  const buscador = $('.buscador');
  const iconSearch = $('.icon-search');
  const iconCancel = $('.icon-cancel');
  //Oculta el buscador al cargar la página
  const toggleSearch = (ms) => buscador.fadeToggle(ms);
  toggleSearch(0);
  //Si se hace un clic en el boton search aparece el buscador
  iconSearch.click(toggleSearch.bind(null,500));
  iconCancel.click(toggleSearch.bind(null,500));

});
