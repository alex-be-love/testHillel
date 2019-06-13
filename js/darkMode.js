var btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', function (e) {
    e.preventDefault();

    this.classList.toggle('off');
    this.classList.toggle('on');
    let body = document.getElementById('header');
    body.classList.toggle('switched');
    let logoWhite = document.getElementById('logoWhite');
    logoWhite.classList.toggle('displayblock');
    let logo = document.getElementById('logo');
    logo.classList.toggle('displaynone');
    let offerTitle = document.getElementById('offer__title');
    offerTitle.classList.toggle('switched');
    let fa1 = document.getElementById('fa1');
    fa1.classList.toggle('switched');
    let fa2 = document.getElementById('fa2');
    fa2.classList.toggle('switched');
    let fa3 = document.getElementById('fa3');
    fa3.classList.toggle('switched');
});
//ночной режим