let person = 'Chris';
let age = '34';
let isCool = 'false';
let sportsArray = ['baseball', 'football', 'soccer']
let chris = {
    age: 26,
    hobbies: ['stuff', 'destiny', 'hunting'],
    pet: 'Dusty'
}

let sampledata=[
    {
        name: 'Person1',
        age: 26,
        weight: 500
    },
    {
        name: 'Person2',
        age: 15,
        weight: 100
    },
    {
        name: 'Person3',
        age: 12,
        wight: 75
    }
]

for (var i =0; i<sampledata.length; i++)
{
    console.log(sampledata[i].name +' is '+sampledata [i].age + " years old ");
}