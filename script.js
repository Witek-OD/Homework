document.addEventListener('DOMContentLoaded', function() {

    let count = 1000 *60 * 2.5 ; //Начальное значение


    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {

        if (count <= 0) {
            clearInterval(timerId);
            let end= document.querySelector('.timer__result');
            end.textContent="Таймер завершился!"
        }
        const minutes = count > 0 ? Math.floor(count / 1000 / 60) % 60 : 0;
        const seconds = count > 0 ? Math.floor(count / 1000) % 60 : 0;

        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

        count -=1000;
    }

    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});

