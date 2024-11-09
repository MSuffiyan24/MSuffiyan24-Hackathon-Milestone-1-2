const togglebutton = document.getElementById('Toggle-Button') as HTMLButtonElement
const skill = document.getElementById('Skills') as HTMLElement


togglebutton.addEventListener('click',  () => {
    if (skill.style.display === "none"){
        skill.style.display = "block";
    } else {skill.style.display = 'none'
    }
})