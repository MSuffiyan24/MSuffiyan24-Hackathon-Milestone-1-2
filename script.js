var togglebutton = document.getElementById('Toggle-Button');
var skill = document.getElementById('Skills');
togglebutton.addEventListener('click', function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = 'none';
    }
});
