let students = [
    { id: "001", name: "Alice", sport: "Basketball", },
    { id: "002", name: "Bob", sport: "Soccer", },
    { id: "003", name: "Charlie", sport: "Tennis", },
    { id: "004", name: "David", sport: "Swimming", },
    { id: "005", name: "Eve", sport: "Volleyball", }
];

students.filter(student => student.sport === "Soccer")
    .forEach(student => console.log(student.name));