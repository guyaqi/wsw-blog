// const
const blog = document.querySelector('#blog');

// state
// let currentMDUrl = null;
// const router = {
//     stack: [],
//     pop: function() {
//         renderMD(this.stack.pop());
//     },
//     push: function(url) {
//         this.stack.push(url);
//         renderMD(url);
//     }
// };

// tool functions
function linkInterpreter(link) {
    let vec = link.split('/');
    let name = vec[vec.length-1];
    // console.log(name);
    return `index.html?page=${name}`;
}

const checkLink = function() {
    let links = document.querySelectorAll('#blog a');
    for(let link of links) {
        if(link.href.match(/.md$/)) {
            link.href = linkInterpreter(link.href);
        }
    }
};


const renderMD = function(url) {
    fetch(url)
        .then(resp=>resp.text())
        .then(res=>{
            currentMDUrl = url;
            blog.innerHTML = marked(res);
            checkLink();
        });
};


// get query
renderMD('index.md');
const query = new URLSearchParams(window.location.search);
let page = query.get('page');
console.log(`page: ${page}`);
if(page === null) {
    renderMD("index.md");
} else {
    renderMD(`blog/${page}`);
}

// set listener

document.querySelector('#go-home')
    .addEventListener('click', function() {
        location.href = "index.html"
    });

document.querySelector('#go-blog')
    .addEventListener('click', function() {
        location.href = "index.html?page=blog.md"
    });

document.querySelector('#go-github')
    .addEventListener('click', function() {
        location.href = "https://github.com/guyaqi"
    });


document.querySelector('#go-qq')
    .addEventListener('click', function() {
        let qqNumber = 1360668777;
        let url1 = "http://wpa.qq.com/msgrd?v=3&uin="+qqNumber+"&site=oicqzone.com&menu=yes";
        let url2 = "mqqwpa://im/chat?chat_type=wpa&uin="+qqNumber+"&version=1&src_type=web&web_src=oicqzone.com";
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent)) {
            window.open(url2);
        }
        else {
            window.open(url1);
        }
    });

document.querySelector('#go-friends')
    .addEventListener('click', function() {
        location.href = "index.html?page=friends.md"
    });






