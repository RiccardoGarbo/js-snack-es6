
//SNACK 1

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


//SNACK2


const students = [
    {
        Id: '213',
        Name: 'Marco della Rovere',
        Grades: '78'
    },
    {
        Id: '100',
        Name: 'Paola Cortellessa',
        Grades: '96'
    },
    {
        Id: '250',
        Name: 'Marco della Rovere',
        Grades: '48'
    },
    {
        Id: '145',
        Name: 'Gaia Borromini',
        Grades: `74`
    },
    {
        Id: '196',
        Name: 'Luigi Grimaldello',
        Grades: '68'
    },
    {
        Id: '102',
        Name: 'Piero della Francesca',
        Grades: '78'
    },
    {
        Id: '120',
        Name: 'Francesca da Polenta',
        Grades: '84'
    },
]

const gradesOver70 = students.filter(students => {
    return students.Grades > `70`;
})
const gradesOver70IdOver120 = gradesOver70.filter(students => {
    return students.Id > `120`;
})
const nameStudentsUpCase = students.map(student => {
    return student.Name.toUpperCase()
})

console.log(gradesOver70)
console.log(gradesOver70IdOver120)
console.log(nameStudentsUpCase)
