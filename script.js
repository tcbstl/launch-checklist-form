// Write your JavaScript code here!
window.addEventListener("load", function() {
   this.console.log("window loaded!");

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
            alert("Pilot name is a string");
            function isPilotReady(){
            
               document.getElementById("pilotStatus").innerHTML = (`${pilotName.value} is READY BABY!`);
            document.getElementById("faultyItems").style.visibility = "visible";
            
            
            let pilotReady = 20;
            // console.log(ready);
            event.preventDefault();
            return pilotReady;
            };
         }
         else {
            alert("Pilot name is not a string!");
            document.getElementById("pilotStatus").innerHTML = (`${pilotName.value} is not ready! DON'T DO ANYTHING`);
            document.getElementById("faultyItems").style.visibility = "visible";
            event.preventDefault();
         }
      
      if (isNaN(copilotName.value)){
            alert("Co-Pilot name is a string");
            function isCopilotReady(){
            document.getElementById("copilotStatus").innerHTML = (`${copilotName.value} is READY TOO!`);
            document.getElementById("faultyItems").style.visibility = "visible";
            let copilotReady = 20;
            // ready += 1;
            // console.log(ready);
            
            event.preventDefault();
            return copilotReady;
            };
         }
         else {
            alert("Co-Pilot name is not a string!");
            document.getElementById("copilotStatus").innerHTML = (`${copilotName.value} is not ready broseph`);
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
            alert("Fuel level is a number!");
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
            document.getElementById("fuelStatus").innerHTML = (`${fuelLevel.value} is NOT READY - FUEL TOO LOW`);
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
            alert("Cargo Mass is a number!");
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
   console.log(isPilotReady());
   console.log(isCopilotReady());
   console.log(isFuelReady());
   console.log(isPilotReady()+isCopilotReady());
   console.log(isPilotReady()+isCopilotReady()+isFuelReady());
   console.log(isPilotReady()+isCopilotReady()+isFuelReady()+isCargoReady());
   let totalScore = isPilotReady()+isCopilotReady()+isFuelReady()+isCargoReady();
   if (totalScore = 80){
      console.log("everything ready!");
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("launchStatus").innerHTML = ("ALL SYSTEMS GO BABY!")
   }
   else {
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("launchStatus").innerHTML = ("SHUTTLE NOT READY!")
   };
   });
   // console.log(pilotReady);
   // console.log(isPilotReady());
});
// console.log(pilotReady);
// console.log(isPilotReady());



// window.onload= function(){
//shows that button was clicked
   // let button = document.getElementById("formSubmit");
   //    button.addEventListener("click", function (event) {
   //        console.log("button clicked");
   //    });

//function that validates entries and sends alerts:
   

   // };

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


   // let submission = document.getElementById("formSubmit");
   // submission.addEventListener("click", function () {
   //    console.log("form submitted");
   // });
