const sidebar = document.querySelector('.sidebar');
const claw = document.querySelector('#claw');
// const blog = document.querySelector('#blog');

let hide = false;

function layout() {

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let portrait = height > width;
    if(portrait) {
        hideSidebar();
        sidebar.style.width = '100%';
        blog.style.marginLeft = '0px';
        sidebar.addEventListener('click', hideSidebar);
        claw.style.display = 'block';
        claw.style.top = `${height/2 - 32}px`;
        claw.addEventListener('click', toggleSidebar);
    }
    else {
        showSidebar();
        sidebar.style.width = '200px';
        blog.style.marginLeft = '200px';
        sidebar.removeEventListener('click', hideSidebar);
        claw.style.display = 'none';
        claw.removeEventListener('click', toggleSidebar);
    }

}

function hideSidebar() {
    let width = document.body.clientWidth;
    sidebar.style.left = -width+'px';
}
function showSidebar() {
    let width = document.body.clientWidth;
    sidebar.style.left = '0px';
}

function toggleSidebar() {
    if (hide) {
        showSidebar();
    }
    else {
        hideSidebar();
    }

    hide = !hide;
}

window.addEventListener('resize', layout);
layout();
