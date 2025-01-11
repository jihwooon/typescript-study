const schools = ["Yorktown", "Washington & Lee", "Wakefield"];

console.log(schools.join(', '))

const wSchool = schools.filter((school) => school[0] === "W")

console.log(wSchool);

const cutSchool = (cut, list) => list.filter((school) => school !== cut);

console.log(cutSchool("Washington & Lee", schools).join(', '));
