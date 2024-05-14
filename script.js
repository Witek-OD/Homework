

let arr= (+prompt('Пожалуйста введите трёхзначное число')).toString().split('');

if(arr.length!=3)
{
    alert(`Необходимо ввести ТРЁХЗНАЧНОЕ число!`);
}
else
{
    let result='';

    if((arr[0]==arr[1])&&(arr[0]==arr[2]))
    {
        result=`все цифры одинаковы`;
    }
    else
    {

        for (let i =0; i< arr.length;i++)
        {
            for (let j=0;j< arr.length;j++)
            {
                if((arr[i]==arr[j])&&(i!=j))
                {
                    result+=`Цифра ${i+1} совпадает с цифрой ${j+1} \n`;
                }
            }
        }
        if (result=='')
        {
            result='Нет одинаковых цифр';
        }

    }
    alert(result);
}

