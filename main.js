const btns = document.querySelectorAll('.bt');
const cont = document.querySelector('.container');
const cont_result = document.querySelector('.container_result');
const span = document.querySelector('span');
const sub = document.querySelector('.btn_submit');

function func() {
    //document.querySelector('.container').style.display = 'none';
    //document.querySelector('.container_result').style.display = 'block';
    //cont.classList.add('hide');
    //cont_result.classList.remove('hide');
    document.querySelector('.container_result').removeAttribute('hidden');
    document.querySelector('.container').setAttribute('hidden',true);
}

sub.addEventListener('click', func);


btns.forEach( b => {
    b.addEventListener("click", el => {
        const rating = el.target.textContent
        span.textContent = rating
        
    })
})
