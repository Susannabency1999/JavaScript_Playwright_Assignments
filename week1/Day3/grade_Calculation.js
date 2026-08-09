function gradeCalculation(marks){

switch(true){
    case marks>=85 && marks<=100:
        console.log(" A Grade");
        break;
    case marks>=70 && marks<85:
        console.log("B Grade");
        break;
    case marks>=60 && marks<70:
        console.log("C Grade");
        break;
    case marks>=45 && marks<60:
        console.log("D Grade");
        break;
    case marks<45:
        console.log("Fail");
        break;
    default:
        console.log("Invalid marks entered");    
}
}
gradeCalculation(70);