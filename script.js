

let yearOfBirth= +prompt('Пожалуйста укажите год рождения');

let result='';

if(yearOfBirth == '')
{
    result+=`Жаль что вы не захотели указать свой год рождения\n`;
}
else
{
    result+=`Ваш возраст ${2024 - yearOfBirth}\n`;
}

let locations= prompt('Пожалуйста укажите в каком городе проживаете');

if(locations == '')
{
    result+=`Жаль что вы не захотели указать свой город\n`;
}
else
{
    switch (locations) {
        case "Киев":
            result+=`Ты живеш в столице Украины \n`;
            break;

        case "Лондон":
            result+=`Ты живеш в столице Англии\n`;
            break;

        case "Вашингтон":
            result+=`Ты живеш в столице США\n`;
            break;

        default:
            result+=`Ты живеш в городе ${locations}\n`;
            break;

    }
}

let sport= prompt('Пожалуйста укажите любимый вид спорта');

if(sport == '')
{
    result+=`Жаль что вы незахотели указать вид спорта \n`;
}
else
{
    switch (sport) {
        case "Бокс":
            result+=`Круто ! Хочеш стать как Владимиро Кличко \n`;
            break;

        case "Плавание":
            result+=`Круто ! Хочеш стать как Яна Клочкова\n`;
            break;

        case "Футбол":
            result+=`Круто ! Хочеш стать как Андрей Шевченко\n`;
            break;

        default:
            result+=`Тебе нравится ${sport}\n`;
            break;


    }
}

    alert(result);


