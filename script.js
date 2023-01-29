function myDropbtn(){
    document.getElementById('Header').classList.toggle("show");
    document.getElementById('all-one').classList.toggle('navbar_margin');
}
window.onclick = function(e){
    if(!e.target.matches('.dropbtn')){
        var Header = document.getElementById("Header");
        if (Header.classList.contains('show')){
            Header.classList.remove('show');
        }
    }
}