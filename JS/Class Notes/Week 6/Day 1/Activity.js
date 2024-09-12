// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(pi);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries;

console.log(den);

// Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

let {width: w, height: h, area: a, perimeter: p} = rectangle;

console.log(p);

// Iterate through the users array and get all the keys of the object using destructuring

const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

users.forEach(({ name, scores, skills, age }) => {
  console.log('Name:', name);
  console.log('Scores:', scores);
  console.log('Skills:', skills);
  console.log('Age:', age);
  console.log('-------------');
});

// Find the persons who have less than two skills

const usersWithLessThanTwoSkills = users.filter(user => user.skills.length < 2);

console.log(usersWithLessThanTwoSkills);