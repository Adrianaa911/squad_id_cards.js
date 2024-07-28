let data = [
    {
        name: 'Mateo',
        age: '30'
    },
    {
        name: 'Ruby',
        age: '28'
    },
    {
        name: 'Tim',
        age: '32'
    },
    {
        name: 'Freya',
        age: '33'
    },
    {
        name: 'Josh',
        age: '24'
    },
    {
        name: 'Selena',
        age: '26'
    },
    {
        name: 'Mateo',
        age: '30'
    },
    {
        name: 'Ruby',
        age: '28'
    },
    {
        name: 'Tim',
        age: '32'
    },
    {
        name: 'Freya',
        age: '33'
    },
    {
        name: 'Josh',
        age: '24'
    },
    {
        name: 'Selena',
        age: '26'
    },
    {
        name: 'Mateo',
        age: '30'
    },
    {
        name: 'Ruby',
        age: '28'
    },
    {
        name: 'Tim',
        age: '32'
    },
    {
        name: 'Freya',
        age: '33'
    },
    {
        name: 'Josh',
        age: '24'
    },
    {
        name: 'Selena',
        age: '26'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n'); 