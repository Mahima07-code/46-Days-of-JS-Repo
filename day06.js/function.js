function studyRoom() {
  var secretNote = "Shh! This is confidential.";
  console.log(secretNote); // Accessible here
}
studyRoom();
console.log(secretNote); // Error: secretNote is not defined
