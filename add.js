const seed = document.querySelector(".starter");
const flower = document.querySelector(".full");
const seed2 = document.querySelector(".starter2");
const flower2 = document.querySelector(".full2");

//click events to change the flowers and the color of the title.
seed.addEventListener('click', ()=> {
    if (flower.classList.contains("full")) {
        flower.classList.add("active");
        seed.classList.remove("active");
    }
    document.getElementById("title").style.color = "coral";

});

flower.addEventListener('click', ()=> {
    if (seed.classList.contains("starter")) {
        seed.classList.add("active");
        flower.classList.remove("active");
    }
    document.getElementById("title").style.color = "royalblue";
});

seed2.addEventListener('click', ()=> {
    if (flower2.classList.contains("full2")) {
        flower2.classList.add("active2");
        seed2.classList.remove("active2");
    }
    document.getElementById("title").style.color = "hotpink";
});

flower2.addEventListener('click', ()=> {
    if (seed2.classList.contains("starter2")) {
        seed2.classList.add("active2");
        flower2.classList.remove("active2");
    }
    document.getElementById("title").style.color = "royalblue";
});



//The array for the grid data.
let data = [
    {
        name: 'Craig',
        art: 'Lead Artist',
        age: 20
    },
    {
        name: 'Kyle',
        art: 'Vocalist',
        age: 20
    },
    {
        name: 'Liane',
        art: 'Musician',
        age: 35
    },
    {
        name: 'Ike',
        art: 'Programmer',
        age: 19
    },
    {
        name: 'Thomas',
        art: 'Lead Animator',
        age: 25
    },
    {
        name: 'Wendy',
        art: 'Animator',
        age: 21
    },
];

const info = document.querySelector('.info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' is the ' + item.art + ' and is ' + item.age + '</div>'
});

info.innerHTML = details.join('\n');

//mini emoticon animation
const circle = document.querySelector('#circle');
const circle2 = document.querySelector('#circle2');

circle.addEventListener('mouseenter', () => {
    if(!circle.classList.contains('hover')) {
    circle.classList.add('hover');
    }
})

circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
})

circle2.addEventListener('mouseenter', () => {
    if(!circle2.classList.contains('hover')) {
    circle2.classList.add('hover');
    }
});

circle2.addEventListener('mouseleave', () => {
    if (circle2.classList.contains('hover')) {
        circle2.classList.remove('hover');
    }
})