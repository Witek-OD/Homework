var parent =document.querySelector('div');

parent.addEventListener('click',function (event) {
    let target = event.target;

    alert(`Нажато на кнопке: ${target.innerText}`);
})