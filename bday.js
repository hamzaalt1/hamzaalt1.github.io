document.addEventListener("DOMContentLoaded", function () {
    const jsConf  = new JSConfetti()
    jsConf.addConfetti()
  const buttons = document.querySelector("#pastel-green-button");
  const canvas = document.querySelector("#confetti")
  
    buttons.addEventListener('click',()=>{
        jsConf.addConfetti()
    })
});