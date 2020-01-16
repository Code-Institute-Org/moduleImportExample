import {addHTML} from '/modules/mymodule.js';

window.addEventListener('load', function() {
    document.querySelector('#textAdder').onclick = function (){
        addHTML('#placeholder', 'Code Institute for the win!<br>');
    };
});
