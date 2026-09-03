class student{
    studentName : string;
    course : string;

    constructor (Name: string , course: string){
        this.studentName = Name;
        this.course = course;
    }

    displayDetails(){
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Course:  ${this.course}`);
    }
}

const studentDetails1= new student("Ram", "Selenium with Java");
const studentDetails2 = new student("hari", "playwright with TS");
studentDetails1.displayDetails();
studentDetails2.displayDetails();
