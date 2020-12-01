
 
window.onscroll=function(){
    if(window.pageYOffset >9){
        document.getElementById('top').style.backgroundColor='white';
        document.getElementById('home').style.color='black';
        document.getElementById('work').style.color='black';
        document.getElementById('features').style.color='black';
        document.getElementById('blog').style.color='black';
        document.getElementById('contac').style.color='black';
        document.getElementById('top').style.boxShadow=' 0 0 6px rgba(0, 0, 0, .6)';
    }
    else{
        document.getElementById('top').style.backgroundColor='transparent';
        document.getElementById('home').style.color='white';
        document.getElementById('work').style.color='white';
        document.getElementById('features').style.color='white';
        document.getElementById('blog').style.color='white';
        document.getElementById('contac').style.color='white';
        document.getElementById('top').style.boxShadow='none';

    }


}
