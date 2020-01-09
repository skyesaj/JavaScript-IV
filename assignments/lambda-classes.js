// // CODE here for your Lambda Classes

// // Instructor

// class Instructor extends Person {
//   constructor(instructordetails) {
//     super(instructordetails);
//     this.catchphrase = instructordetails.catchphrase;
//     this.favLanguage = instructordetails.favLanguage;
//     this.specialty = instructordetails.specialty;
//   }

//   demo(subject) {
//     return `Today we are learning about${subject}.`;
//   }

//   grade(student, subject) {
//     return `${student.name} receives a perfect score on ${subject}`;
//   }
// }

// class Student extends Person {
//   constructor(studentdetails) {
//     super(studentdetails);
//     this.previousBackground = studentdetails.previousBackground;
//     this.className = studentdetails.className;
//     this.favSubjects = studentdetails.favSubjects;
//   }

//   listSubjects() {
//     return `${this.favSubjects}`;
//   }

//   PRAssignment(student, subject) {
//     return `${student.name} has submitted a PR for ${subject}`;
//   }

//   sprintChallange(student, subject) {
//     return `${student.name} has begun sprint challenge on ${subject}`;
//   }
// }

// class ProjectManagers extends Instructor {
//   constructor(projectdetails) {
//     super(projectdetails);
//     this.grandClassName = projectdetails.grandClassName;
//     this.favInstructor = projectdetails.favInstructor;
//   }

//   standUp(channel) {
//     return `${this.name} announces to ${channel} standby times!`;
//   }
//   debugsCode(student, subject) {
//     return `${this.name} debugs {student.name}'s code on {subject}`;
//   }
// }

// const fred = new Person({
//   name: "Fred",
//   location: "Bedrock",
//   age: 37,
//   favLanguage: "JavaScript",
//   specialty: "Front-end",
//   catchPhrase: `Don't forget the homies`
// });

// const teacher = new Instructor({
//     name: 'Josh',
//     location: 'San Jose',
//     age: 40,
//     favLanguage: 'JavaScript',
//     specialty: 'back-end',
//     catchPhrase: `Don't forget the homies`
//     favSubjects: 'Math',

//   });
