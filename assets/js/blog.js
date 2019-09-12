const id = function(id) {
    return document.querySelector(`#${id}`)
};

let blog = id('blog');
fetch('blogs/test.md')
    .then(resp=>resp.text())
    .then(res=>{
        let parsed = marked(res);
        blog.innerHTML = parsed;
    });
