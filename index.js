// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
btn.addEventListener('click', ()=>{
    console.log(sidebar);
    sidebar.classList.toggle('active');
});
// Ranger la sidebar si on click sur le contenu principal
content.addEventListener('click', ()=>{
    sidebar.classList.remove("active");
})
// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
