document.addEventListener('DOMContentLoaded', render);

const text = {
    header: 'This is the file for your home tasks',
    list: [
        'Please, write your JavaScript code in <strong>main.js</strong>',
        'Please, write your CSS code in <strong>styles.css</strong>',
        'Please, write your HTML right here in <strong>index.html</strong>'
    ]
};

function render() {
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = text.header;

    const ul = text.list.reduce((ul, text) => {
        const li = document.createElement('li');

        li.innerHTML = text;
        ul.append(li);

        return ul;
    }, document.createElement('ul'));

    main.append(h2);
    main.append(ul);
    document.body.append(main);
}


//////////////////////////////////////
//  For stop use: clearTimeout(1)

//setTimeout(function boom() {
//        alert('BOOM!');
//        setTimeout(boom, 100);
//    }, 10000);

/////////////////////////////////////////  

    function startbomb(counter) {
       
        setTimeout(function() {
            counter--;
            if (counter > 0) {
                console.log(counter);
                startbomb(counter);
            } else {
                console.log('BOOM!');
            }
        }, 1000);
    }
