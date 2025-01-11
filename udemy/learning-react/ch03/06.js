const schools = ["Yorktown", "Washington & Lee", "Wakefield"];

const highSchool = schools.map((school) => `${school} High School`)

console.log(highSchool.join("\n"))

const highSchool1 = schools.map((school) => ({ name: school }))

console.log(highSchool1);

let university = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington" },
]

const editName = (oldName, name, arr) =>
    arr.map((item) => item.name === oldName
        ? { ...item, name }
        : item
    )

const updatedSchool = editName("Stratford", "HB Woodlawn", university)
console.log(updatedSchool);
