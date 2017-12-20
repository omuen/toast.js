function toast(text, delay){
  var div = document.createElement("div");
  div.style.position = "fixed";
  div.style.maxWidth = "80%";
  div.style.color = "white";
  div.style.boxSizing = "border-box";
  div.style.background = "rgba(0,0,0,0.76)";
  div.style.padding = "0.8em 2.618em";
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.zIndex = 999999999;
  div.style.borderRadius = "5px";
  div.style.opacity = "0";
  div.innerText = text;
  document.body.appendChild(div);
  div.style.marginLeft = (-(div.offsetWidth/2)) + "px";
  div.style.marginTop = (-div.offsetHeight/2) + "px";
  setTimeout(function(){
    div.style.marginLeft = (-(div.offsetWidth/2)) + "px";
    div.style.marginTop = (-div.offsetHeight) + "px";
    div.style.transition = "all 0.3s";
    div.style.opacity = "1";
    setTimeout(function(){
      div.style.opacity = "0";
      div.style.marginTop = (-div.offsetHeight/2) + "px";
      setTimeout(function(){
        document.body.removeChild(div);
      },300);
    }, parseInt(delay)||1618);
  }, 0);
};
