function toggleSearch() {
  let searchCont = document.querySelector('.search-cont');
  let sinput = document.querySelector('.input');
  
  if (searchCont.classList.contains('expand')) {
    sinput.value = ''; 
    searchCont.classList.remove('expand'); 
  } else {
    searchCont.classList.add('expand'); 
    sinput.focus();
  }
}