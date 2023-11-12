//https://portfolio-xi-lovat-34.vercel.app/
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "c")) {
      e.preventDefault();  }});
const repositoriosS=[];
//const imaaaage=["imagemm1","imagemm2","imagemm3","imagemm4","imagemm5","imagemm6","imagemm7","imagemm8","imagemm9","imagemm10","imagemm11","imagemm12","imagemm13","imagemm14","imagemm15","imagemm16","imagemm17","imagemm18","imagemm19","imagemm20"];
const githubUsername = 'Mateus10982';
const gitUrl = `https://api.github.com/users/${githubUsername}/repos`;

repo(githubUsername,gitUrl);
var Experiencia=document.getElementById("Experiencia");
var ProjetosP=document.getElementById("ProjetosP");
var Habilidades=document.getElementById("Habilidades");
const topo=document.getElementById("topo");
var textMenuFlutuando=document.getElementById("textMenuFlutuando");
var tipobutton;
var buttonExperiencia=document.querySelectorAll('#barraDeOpcoes button')[0];
var buttonHabilidades=document.querySelectorAll('#barraDeOpcoes button')[1];
var buttonProjetosP=document.querySelectorAll('#barraDeOpcoes button')[2];
var barradeop=document.getElementById("barraDeOpcoes2");
//menuflutuante 
var contato=document.querySelectorAll('#menuFlutuando label')[0];
var SobreMim=document.querySelectorAll('#menuFlutuando label')[1];
//ações dos botões.
topo.addEventListener("click",function(){         window.location.href='#barraDeOpcoes';
});
buttonExperiencia.addEventListener("click",function(){tipobutton ="Experiencia"; divpequena(tipobutton) });
buttonHabilidades.addEventListener("click",function(){tipobutton ="Habilidades"; divpequena(tipobutton) });
buttonProjetosP.addEventListener("click",function(){tipobutton ="ProjetosP"; divpequena(tipobutton) });
contato.addEventListener("click",function(){tipobutton ="contato"; divpequena(tipobutton) });
textMenuFlutuando.addEventListener("mouseleave", oculltar );
textMenuFlutuando.addEventListener("touchleave", oculltar );
SobreMim.addEventListener("click",function(){tipobutton ="SobreMim"; divpequena(tipobutton) });
function oculltar(){
    textMenuFlutuando.style.display="none";
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
barradeop.addEventListener("mouseover",  async function(){
 await delay(1500);
    Experiencia.style.display="none";
    Habilidades.style.display="none";
    ProjetosP.style.display="none";
});
barradeop.addEventListener("touchstart",  async function(){
    textMenuFlutuando.style.display="none";
    await delay(1500);
       Experiencia.style.display="none";
       Habilidades.style.display="none";
       ProjetosP.style.display="none";
   });
var tyy=true;
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
if(tyy){ ProjetosP.style.display="block";
Habilidades.style.display="none";
Experiencia.style.display="none";
reformular(repositoriosS); tyy=!tyy;}else{
ProjetosP.style.display="block";
Habilidades.style.display="none";
Experiencia.style.display="none";} 
    break;
    case "SobreMim":
        let dataAtual = new Date(); let ano=dataAtual.getFullYear();
        textMenuFlutuando.style.display="block";
        textMenuFlutuando.style.height="25%";
        textMenuFlutuando.style.top="57%";
        textMenuFlutuando.innerHTML=``;
        textMenuFlutuando.innerHTML=`&nbsp;<p class="p11"> Resido em Belo Horizonte, Minas Gerais, no bairro Vera Cruz. Atualmente, tenho ${ano-2004} anos de idade e possuo habilidades sólidas  em lógica de programação e tenho facilidade em aprender as bases de novas linguagens de programação.</p>`;
       break;
    case "contato":
        textMenuFlutuando.style.display="block";
        textMenuFlutuando.style.height="29%";
        textMenuFlutuando.style.top="53%";
        textMenuFlutuando.innerHTML=``;
textMenuFlutuando.innerHTML=`<p class="p131">  Link para o meu         Linkedin:<a href="https://www.linkedin.com/in/mateus-silva-252683281"> 
        @Mateus-Silva</a><br><br> Telefone: (31) 98448-2078 </p>`;
       break;
}
}
function reformular(repositoriosS){
    for(let j=0 ;j < repositoriosS.length; ++j){
        let divv=document.createElement('div');
        divv.id=`d${j}`;
        divv.className='proj';
        ProjetosP.appendChild(divv);
        let ifm=document.createElement('iframe');
        ifm.id=`im${j}`;
        ifm.className='imaaaage';
        ifm.src=`repositoriosS[j].Link`;
        divv.appendChild(ifm);
        divv.addEventListener("click", function(){
            let immm=document.querySelector(`#d${j} .imaaaage`);
    immm.style.display="none";
});
divv.addEventListener("mouseleave", function(){
    let immm=document.querySelector(`#d${j} .imaaaage`);
immm.style.display="block";
});
divv.addEventListener("touchleave", function(){
    let immm=document.querySelector(`#d${j} .imaaaage`);
immm.style.display="block";
});
divv.innerHTML+=`${repositoriosS[j].Nome} ; ${repositoriosS[j].Descrição} ;<br> <a href="${repositoriosS[j].Link}">Link para o site<a/>`;
}
}
function repo(githubUsername,gitUrl){
    fetch(gitUrl).then(resposta => resposta.json()).then(repositories => { console.log(repositories); repositories.forEach(repository => {
        let projetoRepositorio=new Object();
        projetoRepositorio.Nome= repository.name;
        projetoRepositorio.Descrição= repository.description;
        projetoRepositorio.Link= repository.homepage;
        projetoRepositorio.topicss=repository.topics[0];
       repositoriosS.push(projetoRepositorio);
     });
   });
}
