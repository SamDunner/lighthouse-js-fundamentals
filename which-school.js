function whichSchool(age) {
  if (age > 0 && age < 13) {
    return("Elementary School");
  } else if (age > 12 && age < 19) {
    return("Secondary School");
  } else if (age > 18 && age < 100) {
    return("Lighthouse Labs");
  } 
}

console.log(whichSchool(35));
