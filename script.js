//https://portfolio-xi-lovat-34.vercel.app/
const repositoriosS=[];
const githubUsername = 'Mateus10982';
const gitUrl = `https://api.github.com/users/${githubUsername}/repos`;

repo(githubUsername,gitUrl);
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
textMenuFlutuando.addEventListener("mouseleave", oculltar )
SobreMim.addEventListener("click",function(){tipobutton ="SobreMim"; divpequena(tipobutton) });
function oculltar(){
    textMenuFlutuando.style.display="none";
}
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
    reformular(repositoriosS);
    break;
    case "SobreMim":
        textMenuFlutuando.style.display="block";
        textMenuFlutuando.innerHTML=``;
       break;
    case "contato":
        textMenuFlutuando.style.display="block";
        textMenuFlutuando.innerHTML=`<p class="p11">  Link para meu :<a href="https://www.linkedin.com/in/mateus-silva-252683281"> Linkedin</a></p>`;
       break;
}
}
function reformular(repositoriosS){
    for(let j=0 ;j < repositoriosS.length; ++j){
ProjetosP.innerHTML+=`<div class="proj">${repositoriosS[j].Nome} ; ${repositoriosS[j].Descrição} ;<br> <a href="${repositoriosS[j].Link}">Link para o site<a/></div>`;
}}
function repo(githubUsername,gitUrl){
    fetch(gitUrl).then(resposta => resposta.json()).then(repositories => { console.log(repositories); repositories.forEach(repository => {
        let projetoRepositorio=new Object();
        projetoRepositorio.Nome= repository.name;
        projetoRepositorio.Descrição= repository.description;
        projetoRepositorio.Link= repository.homepage;
       console.log(repository);
       repositoriosS.push(projetoRepositorio);
       console.log(projetoRepositorio);
     });
   });
}
