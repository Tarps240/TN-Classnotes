 const {countries} = require("./countries_data");

// Destructure the countries object print name, capital, population and languages of all countries

countries.forEach(({name, capital, population, languages}) => {
  console.log('Name:', name);
  console.log('Capital:', capital);
  console.log('Pop:', population);
  console.log('Lang:', languages);
  console.log('-------------');
})

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

    // const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
   
    //Destructure Here 

    // const [name, skills, [, , jsScore, reactScore]] = student;


    // console.log(`${name} (${skills.length})`, skills, jsScore, reactScore);
    
    //This is the intended outcome =>  David (4) ["HTM", "CSS", "JS", "React"] 90 95

// Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
    //Desturcture Here 

    function convertArrayToObject(students) {
      return students.map(([name, skills, scores]) => ({
        name,
        skills,
        scores
      }));
    }

    console.log(convertArrayToObject(students))

    //This is the intended Outcome 
        // [
        //   {
        //     name: 'David',
        //     skills: ['HTM','CSS','JS','React'],
        //     scores: [98,85,90,95]
        //   },
        //   {
        //     name: 'John',
        //     skills: ['HTM','CSS','JS','React'],
        //     scores: [85, 80,85,80]
        //   }
        // ]

// The map method is used to iterate over each student in the students array.
// Each sub-array is destructured into name, skills, and scores.
// Then, the function returns an array of objects with the keys name, skills, and scores for each student.

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

// Copy the student object to newStudent without mutating the original object. In the new object add the following?

// copy initial array first method.

// const newStudent = {
//   ...student,
//   skills: {
//     ...student.skills,
//     frontEnd: student.skills.frontEnd.map(skill => ({ ...skill })),
//     backEnd: student.skills.backEnd.map(skill => ({ ...skill })),
//     dataBase: student.skills.dataBase.map(skill => ({ ...skill })),
//     dataScience: [...student.skills.dataScience] // For arrays of primitive values
//   }
// };

// console.dir(newStudent, {depth:null});

// Copy initial array second method.

// const newStudent = {
//   ...student,
//   skills: {
//     ...student.skills,
//     frontEnd: [...student.skills.frontEnd],
//     backEnd: [...student.skills.backEnd],
//     dataBase: [...student.skills.dataBase],
//     dataScience: [...student.skills.dataScience]
//   }
// };

// console.dir(newStudent, {depth:null});

// Add Bootstrap with level 8 to the front end skill sets

//newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });

// Add Express with level 9 to the back end skill sets

//newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });

// Add SQL with level 8 to the data base skill sets

//newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });

// Add SQL without level to the data science skill sets

//newStudent.skills.dataScience.push('SQL');

// Accomplishing all tasks at once.

const newStudent = {
  ...student, // shallow copy of student
  skills: {
    ...student.skills, // shallow copy of the skills object
    frontEnd: [
      ...student.skills.frontEnd, // shallow copy of frontEnd array
      { skill: 'Bootstrap', level: 8 } // Add Bootstrap skill
    ],
    backEnd: [
      ...student.skills.backEnd, // shallow copy of backEnd array
      { skill: 'Express', level: 9 } // Add Express skill
    ],
    dataBase: [
      ...student.skills.dataBase, // Copy dataBase array.
      { skill: 'SQL', level: 8 } // Add SQL with level 8
    ],
    dataScience: [
      ...student.skills.dataScience, // Copy dataScience array.
      'SQL' // Add SQL without level to dataScience.
    ]
  }
};

// Output the newStudent object

console.dir(newStudent, {depth:null});

//This is the intended Outcome 

        //     {
        //     name: 'David',
        //     age: 25,
        //     skills: {
        //       frontEnd: [
        //         {skill: 'HTML',level: 10},
        //         {skill: 'CSS',level: 8},
        //         {skill: 'JS',level: 8},
        //         {skill: 'React',level: 9},
        //         {skill: 'BootStrap',level: 8}
        //       ],
        //       backEnd: [
        //         {skill: 'Node',level: 7},
        //         {skill: 'GraphQL',level: 8},
        //         {skill: 'Express',level: 9}
        //       ],
        //       dataBase: [
        //         { skill: 'MongoDB',level: 7.5},
        //         { skill: 'SQL',level: 8}
        //       ],
        //       dataScience: ['Python','R','D3.js','SQL']
        //     }
        //   }