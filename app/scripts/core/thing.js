var result = [1, 2, 3].map(n => n * 2);
console.log(result);

// enhanced object literal
var project = "helloWorld";
var obj = {
    // Shorthand for ‘project: project’
    project,
    // Methods
    printProject() {
     console.log(this.project);
    },
    [ "prop_" + (() => 42)() ]: 42
};
console.log(obj.printProject());
console.log(obj);
export default function rock(){ return "hehe"};
