var Experiencia=document.getElementById("Experiencia");
var ProjetosP=document.getElementById("ProjetosP");
var Habilidades=document.getElementById("Habilidades");
var textMenuFlutuando=document.getElementById("textMenuFlutuando");
var tipobutton;
var buttonExperiencia=document.querySelectorAll('#barraDeOpcoes button')[0];
var buttonHabilidades=document.querySelectorAll('#barraDeOpcoes button')[1];
var buttonProjetosP=document.querySelectorAll('#barraDeOpcoes button')[2];
//menuflutuante 
var contato=document.querySelectorAll('#menuFlutuando label')[0];
var SobreMim=document.querySelectorAll('#menuFlutuando label')[1];
//ações dos botões.
buttonExperiencia.addEventListener("click",function(){tipobutton ="Experiencia"; divpequena(tipobutton) });
buttonHabilidades.addEventListener("click",function(){tipobutton ="Habilidades"; divpequena(tipobutton) });
buttonProjetosP.addEventListener("click",function(){tipobutton ="ProjetosP"; divpequena(tipobutton) });
contato.addEventListener("click",function(){tipobutton ="contato"; divpequena(tipobutton) });
SobreMim.addEventListener("click",function(){tipobutton ="SobreMim"; divpequena(tipobutton) });
function divpequena(tipobutton){
switch(tipobutton){
    case "Experiencia":
        window.location.href='#Experiencia';
    Experiencia.style.display="block";
    Habilidades.style.display="none";
    ProjetosP.style.display="none";
    break;
    case "Habilidades":
        window.location.href='#Habilidades';
    Habilidades.style.display="block";
    Experiencia.style.display="none";
    ProjetosP.style.display="none";
    break;
    case "ProjetosP":
     window.location.href='#ProjetosP';
    ProjetosP.style.display="block";
    Habilidades.style.display="none";
    Experiencia.style.display="none";
    break;
    case "SobreMim":
        textMenuFlutuando.style.display="block";
       break;
    case "contato":
        textMenuFlutuando.style.display="block";
        textMenuFlutuando.innerHTML=`<p class="p11">  Link para meu :<a href="https://www.linkedin.com/in/mateus-silva-252683281"> Linkedin</a></p>`;
       break;
}
}