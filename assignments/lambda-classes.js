// CODE here for your Lambda Classes

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;``
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach(subj => console.log(subj));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standup(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`)
    }

    debugsCode(studentObj) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}

//Test

var Bradley = new Instructor({name: 'Bradley', age: 28, location: 'Russia', specialty: 'teaching', favLanguage: 'Russian', catchPhrase: 'Let\'s code!'})
var Dan = new Student ({name: 'dan', age: 25, location: 'SF', previousBackground: 'finance', className: 'webpt11', favSubjects: ['javascript', 'css', 'html']})

console.log(Bradley)
console.log(Dan)
Bradley.demo('javascript');
Bradley.grade(Dan, 'javascript');
Dan.listSubjects();
Dan.PRAssignment('html')
Dan.sprintChallenge('css')

