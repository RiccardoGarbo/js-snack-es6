
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
const guestsList = guests.map((guest, i) => {
    return { table: tableName, guest: guest, place: i + 1 }
})
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









//SNACK3
const racingBikes = [
    {
        name: 'Pinarello',
        peso: 8
    },
    {
        name: 'Specialized',
        peso: 9
    },
    {
        name: 'Bianchi',
        peso: 7
    }
]
//Dichiaro una variabile per la bici più leggera e le do un volore iniziale di un oggetto dell'array
let lighterBike = racingBikes[0]
//Per ogni oggetto nell'array estrapolo il nome e il peso
racingBikes.forEach(racingBike => {
    const { name, peso } = racingBike
    console.log(name, peso, racingBike)
    //Condizione per verificare la bici più leggera 
    if (peso < lighterBike.peso) {
        lighterBike = racingBike
    }
})
console.log(lighterBike)

//SNACK4

const footballTeams = [
    {
        name: 'Juventus',
        score: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        score: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        score: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        score: 0,
        fouls: 0
    }
]

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + 1)

}
const footballTeamsInfo = footballTeams.map(team => {
    return {
        name: team.name,
        score: randomNumber(50, 0),
        fouls: randomNumber(20, 0)
    }
})
console.log(footballTeamsInfo)
const teamNameFouls = footballTeamsInfo.map(({ name, fouls }) => {
    return ({ name, fouls })
})
console.log(teamNameFouls)






























