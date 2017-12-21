-function(win) {
  var notify = {};
  var doc = win.document;
  notify.toast = function(text, delay){
    var div = doc.createElement("div");
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
    doc.body.appendChild(div);
    div.style.marginLeft = (-div.offsetWidth/2) + "px";
    div.style.marginTop = (-div.offsetHeight/2) + "px";
    win.setTimeout(function(){
      div.style.marginLeft = (-div.offsetWidth/2) + "px";
      div.style.marginTop = (-div.offsetHeight) + "px";
      div.style.transition = "all 0.3s";
      div.style.opacity = "1";
      win.setTimeout(function(){
        div.style.opacity = "0";
        div.style.marginTop = (-div.offsetHeight/2) + "px";
        win.setTimeout(function(){
          doc.body.removeChild(div);
        },300);
      }, win.parseInt(delay)||1618);
    }, 0);
  };
  
  notify.confirm = function(title, text, callback){
    var mask = doc.createElement("div");
    var box = doc.createElement("div");
    mask.style.position = "fixed";
    mask.style.background = "rgba(0,0,0,0.64)";
    mask.style.padding = "0";
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.right = '0';
    mask.style.bottom = '0';
    mask.style.zIndex = 999999999;
    mask.style.opacity = "0";
    doc.body.appendChild(mask);

    box.style.position = 'fixed';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.borderRadius = "5px";
    box.style.background = 'white';
    box.style.minWidth = '160px';
    box.style.maxWidth = '80%';
    box.style.width = '320px';
    mask.appendChild(box);

    var header = doc.createElement("div");
    header.style.color = '#323232';
    header.style.border = "none";
    header.style.padding = '0.8em 2.5em';
    header.style.background = "rgba(0,0,0, 0.05)";
    header.innerText = title;
    box.appendChild(header);

    var content = doc.createElement("div");
    content.style.color = '#323232';
    content.style.padding = '1em 2.5em';
    content.innerText = text;
    box.appendChild(content);

    var footer = doc.createElement("div");
    footer.style.border = "none";
    footer.style.padding = "0.8em";
    footer.style.textAlign = "center";
    box.appendChild(footer);

    function close(){
      mask.style.opacity = "0";      
      win.setTimeout(function(){
        doc.body.removeChild(mask);
      },300);
    }
    var fn = typeof(callback)=="function"?callback: function(ret){};

    var btn_confirm = doc.createElement("button");
    btn_confirm.style.margin = "0 0.2em";
    btn_confirm.style.outline = "none";
    btn_confirm.style.border = "none";
    btn_confirm.style.borderRadius = '5px';
    btn_confirm.style.padding = '0.5em 2em';
    btn_confirm.style.color = "white";
    btn_confirm.style.background = "#337ab7";
    btn_confirm.innerText = "确定";
    btn_confirm.onclick = function(){
      close();
      fn(true);
    }
    footer.appendChild(btn_confirm);

    var btn_cancel = doc.createElement("button");
    btn_cancel.style.margin = "0 0.2em";
    btn_cancel.style.outline = "none";
    btn_cancel.style.border = "none";
    btn_cancel.style.borderRadius = '5px';
    btn_cancel.style.padding = '0.5em 2em';
    btn_cancel.style.background = "rgba(0,0,0, 0.1)";
    btn_cancel.innerText = "取消";    
    btn_cancel.onclick = function(){
      close();
      fn(false);
    }
    footer.appendChild(btn_cancel);

    box.style.marginLeft = (-box.offsetWidth/2) + "px";
    box.style.marginTop = (-box.offsetHeight/2) + "px";

    win.setTimeout(function(){
      mask.style.transition = "all 0.3s";
      mask.style.opacity = "1";
    }, 0);
  
  };
  
  win.$nt = notify;
}(window);