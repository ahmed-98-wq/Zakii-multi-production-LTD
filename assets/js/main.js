const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar')

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active')
    
}
// sticky navbar on scroll

let prevscrollPos = window.scrollY;

window.onscroll = () => {

    let currentscrollPos = window.scrollY;

    if (prevscrollPos > currentscrollPos){
        
        document.querySelector('.navbac').style.top = "0";
        document.querySelector('.navbac').style.opacity = "10";
    } else {
        
        
        document.querySelector('.navbac').style.top = "-52px";
        document.querySelector('.navbac').style.opacity = "0";
    }

    prevscrollPos = currentscrollPos;
}

