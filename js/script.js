const tableName = 'Tavolo Vip';
const guests = ['Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];
const guestsList = []
for (i = 0; i < guests.length; i++) {
    guestsList.push({
        nameTable: tableName,
        nameGuest: guests[i],
        place: `${[i]}`
    })
}
console.log(guestsList)



