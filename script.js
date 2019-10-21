// Write your JavaScript code here!
window.addEventListener("load", function() {
   this.console.log("window loaded!");
   // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   // console.log(response);
   // response.json().then( function(json) {
   // // this.console.log(json);
   // const div = document.getElementById("missionTarget");
   // // Add HTML that includes the JSON data
   // div.innerHTML = `
   // <h2>Mission Destination</h2>
   // <ol>
   // <li>Name: ${json[0].name}</li>
   // <li>Diameter: ${json[0].diameter}</li>
   // <li>Star: ${json[0].star}</li>
   // <li>Distance from Earth: ${json[0].distance}</li>
   // <li>Number of Moons: ${json[0].moons}</li>
   // <img src="${json[0].image}">
   // </ol>
   // `;
   // });
// } );

   let form = document.querySelector("#launchEntryForm");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[id=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      // console.log(typeof pilotName);
      console.log(pilotName.value,copilotName.value,fuelLevel.value,cargoMass.value);
      // debugger;
      // if (isNaN(pilotName.value) && isNaN(copilotName.value) && fuelLevel.value < 10000 && cargoMass.value < 10000){
      //    console.log("everything ready!");
      //    document.getElementById("launchStatus").style.color = "green";
      //    document.getElementById("launchStatus").innerHTML = ("ALL SYSTEMS GO BABY!")
      // }
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }
      // if (isNaN(pilotName.value) && isNaN(copilotName.value) && fuelLevel.value < 10000 && cargoMass.value < 10000){
      //    console.log("everything ready!");
      //    document.getElementById("launchStatus").style.color = "green";
      //    document.getElementById("launchStatus").innerHTML = ("ALL SYSTEMS GO BABY!")
      // }
      //this works!
      if (isNaN(pilotName.value)){
            // document.getElementById("launchStatus").innerHTML += "Pilot Name Found";
            // let pilotResponse = '"${pilotName.value} is ready for launch"'
            // document.getElementById("pilotStatus").innerHTML = ;
            // alert("Pilot name is a string");
            function isPilotReady(){
            document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotName.value} is ready for shuttle launch.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            let pilotReady = 20;
            // console.log(ready);
            event.preventDefault();
            return pilotReady;
            };
         }
         else {
            alert("Pilot name is not a string!");
            document.getElementById("pilotStatus").innerHTML = (`${pilotName.value} is not ready!`);
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            event.preventDefault();
         }
      
      if (isNaN(copilotName.value)){
            // alert("Co-Pilot name is a string");
            document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilotName.value} is ready for shuttle launch.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            function isCopilotReady(){
            let copilotReady = 20;
            // ready += 1;
            // console.log(ready);
            event.preventDefault();
            return copilotReady;
            };
         }
         else {
            alert("Co-Pilot name is not a string!");
            document.getElementById("copilotStatus").innerHTML = (`${copilotName.value} is not ready.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
      if (isNaN(fuelLevel.value)){
            alert("Fuel level is not a number!");
            document.getElementById("fuelStatus").innerHTML = (`${fuelLevel.value} is not ready`);
            // document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
         else {
            // alert("Fuel level is a number!");
            if (fuelLevel.value > 10000){
               document.getElementById("fuelStatus").innerHTML = (`${fuelLevel.value} is high enough for launch`);
               function isFuelReady(){
                  let fuelReady = 20;
                  return fuelReady;
               };
               // ready += 1;
               // console.log(ready);
            }
               else {
            document.getElementById("fuelStatus").innerHTML = (`${fuelLevel.value} is not ready`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");

            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
            }
         }
      
      if (isNaN(cargoMass.value)){
            alert("Cargo Mass is not a number!");
            document.getElementById("cargoStatus").innerHTML = (`${cargoMass.value} is not ready`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
         else {
            // alert("Cargo Mass is a number!");
            if (cargoMass.value < 10000){
            document.getElementById("cargoStatus").innerHTML = (`${cargoMass.value} is light enough for take off`);
            document.getElementById("faultyItems").style.visibility = "visible";
            function isCargoReady(){
               let cargoReady = 20;
               return cargoReady;
            };
            // event.preventDefault();
            // ready += 1;
            // if (ready = 4){
            //    console.log("everything ready!");
            //    document.getElementById("launchStatus").style.color = "green";
            //    document.getElementById("launchStatus").innerHTML = ("ALL SYSTEMS GO BABY!")
            // }
            }
            else {
            document.getElementById("cargoStatus").innerHTML = (`${cargoMass.value} is too heavy for take off`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            event.preventDefault();
            }
         }
   // if (isNaN(pilotName.value) && isNaN(copilotName.value) && fuelLevel.value < 10000 && cargoMass.value < 10000){
   //    console.log("everything ready!");
   //    document.getElementById("launchStatus").style.color = "green";
   //    document.getElementById("launchStatus").innerHTML = ("ALL SYSTEMS GO BABY!")
   // }
   // console.log(isPilotReady());
   // console.log(isCopilotReady());
   // console.log(isFuelReady());
   // console.log(isPilotReady()+isCopilotReady());
   // console.log(isPilotReady()+isCopilotReady()+isFuelReady());
   // console.log(isPilotReady()+isCopilotReady()+isFuelReady()+isCargoReady());
   let totalScore = isPilotReady()+isCopilotReady()+isFuelReady()+isCargoReady();
   if (totalScore = 80){
      console.log("everything ready!");
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("launchStatus").innerHTML = ("Shuttle is ready for launch.")
      // document.getElementById("missionTarget").innerHTML = ('Here is your')
      // document.getElementById("missionTarget").innerHTML = (`${json[0]} is your destination`);
      // document.getElementById("missionTarget").innerHTML = ("Here is Your Target")
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         // this.console.log(json);
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[0].name}</li>
         <li>Diameter: ${json[0].diameter}</li>
         <li>Star: ${json[0].star}</li>
         <li>Distance from Earth: ${json[0].distance}</li>
         <li>Number of Moons: ${json[0].moons}</li>
         <img src="${json[0].image}">
         </ol>
         `;
         });
      } );
   }
   else {
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("launchStatus").innerHTML = ("Shuttle not ready for launch.")
   };
   });
});
