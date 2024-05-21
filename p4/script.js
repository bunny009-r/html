document.addEventListener('DOMContentLoaded', function() {
    const mensLink = document.getElementById('mensLink');
    const womensLink = document.getElementById('womensLink');
    const mensLinkSec = document.getElementById('mensLinkSec');
    const womensLinkSec = document.getElementById('womensLinkSec');
    const mensSection = document.getElementById('mens');
    const womensSection = document.getElementById('womens');

    function showMensSection() {
        mensSection.classList.remove('hidden');
        womensSection.classList.add('hidden');
        mensLink.classList.add('selected');
        womensLink.classList.remove('selected');
        mensLinkSec.classList.add('selected');
        womensLinkSec.classList.remove('selected');
    }

    function showWomensSection() {
        womensSection.classList.remove('hidden');
        mensSection.classList.add('hidden');
        womensLink.classList.add('selected');
        mensLink.classList.remove('selected');
        womensLinkSec.classList.add('selected');
        mensLinkSec.classList.remove('selected');
    }

    mensLink.addEventListener('click', function(event) {
        event.preventDefault();
        showMensSection();
        location.href = "#shows";
    });

    womensLink.addEventListener('click', function(event) {
        event.preventDefault();
        showWomensSection();
        location.href = "#shows";
    });

    mensLinkSec.addEventListener('click', function(event) {
        event.preventDefault();
        showMensSection();
    });

    womensLinkSec.addEventListener('click', function(event) {
        event.preventDefault();
        showWomensSection();
    });
});
