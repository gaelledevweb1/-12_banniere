console.log('afficher');
const cookies = document.querySelector('.cookies');
const BtnSuccess = document.querySelector('.btn-success');
console.log(cookies,BtnSuccess);
BtnSuccess.addEventListener('click',()=>{
    console.log('bouton cliqué');
    cookies.style.opacity =0;
    // pour voir afficher les elements  la methode setitem est importante.
    localStorage.setItem ('banniere','oui') ;
    let valeurCle = localStorage.getItem('banniere');
    console.log(valeurCle,'valeur de la clé bannière');
    function check() {
        console.log('fonction check () déclcenché');
        if (valeurCle ) {
            cookies.remove();
            console.log('le stockage existe, la valeur de la clé est "oui" '); 
        }else{
            console.log('le stockage n\'existe pas,  la valeur de la clé bannière est "absente"');
        };
    
    }
    check();
})

    
    