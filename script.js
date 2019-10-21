window.addEventListener("load", function() {
   
   let form = document.querySelector("#launchEntryForm");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[id=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(pilotName.value)){
            function isPilotReady(){
            document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotName.value} is ready for shuttle launch.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            let pilotReady = 20;
            event.preventDefault();
            return pilotReady;
            };
         }
         else {
            alert("Make sure to enter valid information for each field!");
            document.getElementById("pilotStatus").innerHTML = (`${pilotName.value} is not ready!`);
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            event.preventDefault();
         }
      
      if (isNaN(copilotName.value)){
            document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilotName.value} is ready for shuttle launch.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            function isCopilotReady(){
            let copilotReady = 20;
            event.preventDefault();
            return copilotReady;
            };
         }
         else {
            alert("Make sure to enter valid information for each field!");
            document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilotName.value} is not ready.`);
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            event.preventDefault();
         }
      if (isNaN(fuelLevel.value)){
            alert("Make sure to enter valid information for each field!");
            document.getElementById("fuelStatus").innerHTML = (`Fuel Level ${fuelLevel.value} is not ready`);
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
         else {
            if (fuelLevel.value > 10000){
               document.getElementById("fuelStatus").innerHTML = (`Fuel level is high enough for launch`);
               function isFuelReady(){
                  let fuelReady = 20;
                  return fuelReady;
               };
            }
               else {
            document.getElementById("fuelStatus").innerHTML = (`Fuel level is too low for launch.`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
            }
         }
      
      if (isNaN(cargoMass.value)){
            alert("Cargo Mass is not a number!");
            document.getElementById("cargoStatus").innerHTML = (`Cargo Mass ${cargoMass.value} is not ready`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
         else {
            if (cargoMass.value < 10000){
            document.getElementById("cargoStatus").innerHTML = (`Cargo Mass ${cargoMass.value} is light enough for take off`);
            document.getElementById("faultyItems").style.visibility = "visible";
            function isCargoReady(){
               let cargoReady = 20;
               return cargoReady;
            };
            }
            else {
            document.getElementById("cargoStatus").innerHTML = (`${cargoMass.value} is too heavy for take off`);
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = ("Shuttle Not Ready To Launch!");
            event.preventDefault();
            }
         }

   let totalScore = isPilotReady()+isCopilotReady()+isFuelReady()+isCargoReady();
   if (totalScore = 80){
      console.log("everything ready!");
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("launchStatus").innerHTML = ("Shuttle is ready for launch.")
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         let planetNum = Math.floor(Math.random()*6);
         console.log(planetNum);
         console.log(typeof planetNum);
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[planetNum].name}</li>
         <li>Diameter: ${json[planetNum].diameter}</li>
         <li>Star: ${json[planetNum].star}</li>
         <li>Distance from Earth: ${json[planetNum].distance}</li>
         <li>Number of Moons: ${json[planetNum].moons}</li>
         <img src="${json[planetNum].image}">
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
