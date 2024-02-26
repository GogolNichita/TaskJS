const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье',
};
function translateDays(weekDays){
    const romainDays = {
        'Mo': 'Luni' ,
        'Tu': 'Marti',
        'We': 'Miercuri',
        'Th': 'Joi',
        'Fr': 'Vineri',
        'Sa': 'Sambata',
        'Su': 'Duminica',
    };
    return Object.fromEntries(
        Object.entries(weekDays).map(([i]) => [i, romainDays[i]] )
    );
}
console.log(translateDays(weekDays));
