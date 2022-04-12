function point(){
    if (parseInt(localStorage.getItem('counter'))){
    c = localStorage.getItem('counter')
    c = parseInt(c) + 1
    localStorage.setItem('counter', c)
    document.getElementById('counter').innerText = "Pet Counter: " + c
    } else {
        localStorage.setItem('counter', 1)
    }
}
//window.onload = function(){localStorage.removeItem('counter')};