// this is a self-invoking anonymus function
// also called an IIFE
// also called a module (its a pattern)

(() => {
  //print('whatever');
  console.log('hello from JS!');

  //find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
    myHeading = document.querySelector('h1');
    svgImg = document.querySelector('#badge');

    //this function should change the header tag

  function changeText() {
    toggleButton.textContent = "What is up fam? I am a script!";
  }

  // this function should log the id for the badge in the console

  function logSvg() {
    console.log(this.id);
  }

  toggleButton.addEventListener("click", changeText);
  svgImg.addEventListener("mouseover", logSvg);



  //document.querySelector('h1').textContent = "What is up fam? I am a script!";
})();
