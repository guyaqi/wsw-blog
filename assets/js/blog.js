const id = function(id) {
    return document.querySelector(`#${id}`)
};

let blog = id('blog');
fetch('blogs/cpp1-1.md')
    .then(resp=>resp.text())
    .then(res=>{
        let parsed = marked(res);
        blog.innerHTML = parsed;
    });
