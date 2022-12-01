'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
let difficulte= window.prompt("Choisissez la difficulté 1, 2 ou 3 (1 étant le plus facile)");


let pvdragon
let pvchevalier
let pvchevalierini
let pvdragonini
function getRandomInt(min, max){
    return Math.round(Math.random() * (max - min) + min);
 }
function choixpv(){   
const min = 1;
const max = 10;
    if(difficulte == 1){
    pvdragon= getRandomInt(min,max)*5+100;
    pvchevalier= getRandomInt(min,max)*10+100;
    
    }
    if(difficulte == 2){
    pvdragon= getRandomInt(min,max)*10+100;
    pvchevalier= getRandomInt(min,max)*10+100;
   }
   if (difficulte == 3){
    pvdragon= getRandomInt(min,max)*10+100;
    pvchevalier= getRandomInt(min,max)*7+100;
   }
   pvchevalierini=pvchevalier
   pvdragonini=pvdragon
document.write( `<div class="game-state">
<figure class="game-state_player">
    <img src="images/knight.png" alt="Chevalier">
    <figcaption>  `+ pvchevalier+ ` PV</figcaption>
</figure>)
<figure class="game-state_player">
    <img src="images/dragon.png" alt="Dragon">
    <figcaption>`+pvdragon+ ` PV</figcaption>
</figure>
</div>`);

}

choixpv();
{/* <progress max=""`+pvchevalierini+ `value=""`+pvchevalier+`></progress> */}

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// Tour 1
// document.write('Tour n° '+ nombredetour)
let inidragon;
let inichevalier;
let dodragon;
let dochevalier;
let minoréchevalier
let minorédragon
let majorédragon
let majoréchevalier


function initiative(){
    const min = 1;
    const max = 6;
    
    inidragon=getRandomInt(min,max)*10;
    inichevalier= getRandomInt(min,max)*10;
    dodragon= getRandomInt(min,max)*3
    dochevalier= getRandomInt(min,max)*3
    minorédragon= getRandomInt(min,max)*2
    minoréchevalier= getRandomInt(min,max)
    majoréchevalier= getRandomInt(min,max)*2
    majorédragon= getRandomInt(min,max)

    if(difficulte==1){
        
    dodragon- (dodragon*minorédragon/100);
    dochevalier+ (dochevalier*majoréchevalier/100);
    
    }
    if(difficulte==2){
        dodragon= getRandomInt(min,max)*3
        dochevalier= getRandomInt(min,max)*3
    }
   
    if(difficulte==3){
        
        
        dodragon+ (dodragon*majorédragon/100);
        dochevalier- (dochevalier*minoréchevalier/100);
    }
    dodragon= Math.ceil(dodragon);
    dochevalier= Math.ceil(dochevalier);
    
    if(inichevalier > inidragon){
  
        document.write(` <figure class="game-round">
        <img src="images/knight-winner.png" alt="Chevalier vainqueur">
        <figcaption>Vous êtes le plus rapide, vous attaquez le dragon et lui infligez `+ dochevalier +` points de dommage !</figcaption>
        </figure>`);

    }
    else{
  
        document.write(`<figure class="game-round">
        <img src="images/dragon-winner.png" alt="Dragon vainqueur">
        <figcaption>Le dragon a été le plus rapide, il attaque et vous inflige `+ dodragon +` points de dommage !</figcaption>
        </figure>`);

    }
    
   
}
initiative();

let imagechevalier
let imagedragon

function tour(){

    if(inichevalier < inidragon){
        pvchevalier= pvchevalier-dodragon;
    }
    else{
        pvdragon= pvdragon-dochevalier;
    }


    if(pvchevalier <= pvchevalierini*30/100){
        imagechevalier= 'images/knight-wounded.png'
    }
    else{
        imagechevalier= 'images/knight.png'
    }
    

    if(pvdragon <= pvdragonini*30/100){
        imagedragon= 'images/dragon-wounded.png'
    }
    else{
        imagedragon= 'images/dragon.png'
    }
    document.write(`<div class="game-state">
    <figure class="game-state_player">
    <img src= ${imagechevalier} alt="Chevalier amoché">
        <figcaption> `+pvchevalier+` </figcaption>
    </figure>
    <figure class="game-state_player">
        <img src= ${imagedragon} alt="Dragon">
        <figcaption> `+pvdragon+` </figcaption>
    </figure>
    </div>`);

}


    // else if(pvchevalier <= pvchevalierini*30/100 && pvdragon <= pvdragonini*30/100){
    //     document.write(`<div class="game-state">
    //     <figure class="game-state_player">
    //     <img src="images/knight-wounded.png" alt="Chevalier amoché">
    //         <figcaption> `+pvchevalier+` </figcaption>
    //     </figure>
    //     <figure class="game-state_player">
    //         <img src="images/dragon-wounded.png" alt="Dragon">
    //         <figcaption> `+pvdragon+` </figcaption>
    //     </figure>
    //     </div>`);
    // }
    // else if(pvdragon <= pvdragonini*30/100){
    // document.write(`<div class="game-state">
    // <figure class="game-state_player">
    // <img src="images/knight.png" alt="Chevalier amoché">
    //     <figcaption> `+pvchevalier+` </figcaption>
    // </figure>
    // <figure class="game-state_player">
    // <img src="images/dragon-wounded.png" alt="Dragon amoché">
    //     <figcaption> `+pvdragon+` </figcaption>
    // </figure>
    // </div>`);
    // }
    // else if(pvchevalier > pvchevalierini*30/100 && pvdragon > pvdragonini*30/100){
    // document.write(`<div class="game-state">
    // <figure class="game-state_player">
    //     <img src="images/knight.png" alt="Chevalier">
    //     <figcaption> `+pvchevalier+` </figcaption>
    // </figure>
    // <figure class="game-state_player">
    //     <img src="images/dragon.png" alt="Dragon">
    //     <figcaption> `+pvdragon+` </figcaption>
    // </figure>
    // </div>`);

    
tour();



function fin(){
    if(pvchevalier<=0){
        document.write(`<footer>
        <h3>Fin de la partie</h3>
        <figure class="game-end">
            <figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>
            <img src="images/dragon-winner.png" alt="Dragon vainqueur">
        </figure>
        </footer>`)
    }
    else if(pvdragon<=0){
        document.write(`<footer>
        <h3>Fin de la partie</h3>
        <figure class="game-end">
            <figcaption>Vous avez gagné le combat, le dragon n'a plus de tête !</figcaption>
            <img src="images/knight-winner.png" alt="chevalier vainqueur">
        </figure>
        </footer>`);
    }
}


//Tours suivants
let tours


    for (let tours = 1; pvchevalier > 0 && pvdragon > 0; tours++) {
    document.write(`<h3>Tour n°`+ tours+`</h3>`)
        initiative();
        tour();
}
fin();

