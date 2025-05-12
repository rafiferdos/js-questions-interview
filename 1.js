// Task 1: Array Filtering and Mapping
const people = [
    { name: "Alice", age: 30, gender: "female" },
        { name: "Bob", age: 25, gender: "male" },
            { name: "Charlie", age: 35, gender: "male" },
                { name: "Diana", age: 28, gender: "female" },
                    { name: "Ethan", age: 22, gender: "male" },
                    ];

                    function getMaleNames(personArray) {
                        return personArray
                                .filter(person => person.gender === 'male')
                                        .map(malePerson => malePerson.name);
                                        }

                                        const maleNames = getMaleNames(people);
                                        console.log("Original People:", people);
                                        console.log("Male Names:", maleNames);
                                        console.log("\n");