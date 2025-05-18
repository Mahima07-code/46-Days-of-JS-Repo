let teamX = { task: "Code" };
let teamY = teamX;
teamY.task = "Debug";

console.log(teamX.task); 
