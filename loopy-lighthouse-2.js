var numbers = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199];

for (var i = 0; i < numbers.length; i++) {
  if ((i + 100) % 3 === 0 && (i + 100) % 4 === 0) {
    console.log("LoopyLighthouse")
  } else if ((i + 100) % 3 === 0) {
    console.log("Loopy")
  } else if ((i + 100) % 4 === 0) {
    console.log("Lighthouse")
  } else {
    console.log(numbers[i])
  }
} 

//example
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);