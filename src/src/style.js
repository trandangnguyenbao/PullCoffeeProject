const homeElement = document.querySelector('.container__home');
const widthScreen = window.innerWidth;
const AddTagName = () => {
  if(widthScreen <= 767 ){
    if(homeElement.contains('container')){
      // console.log(10000);
      // homeElement.classList.remove('container');
      // homeElement.classList.add('container-fluid')
    }
  }
}