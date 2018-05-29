const setTitle = t => {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = 'https://m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
        setTimeout(function(){
            i.remove();
        }, 9)
   }
    document.body.appendChild(i);
}

module.exports = {
    setTitle: setTitle
}