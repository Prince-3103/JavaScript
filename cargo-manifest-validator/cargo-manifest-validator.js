// Built as part of my JavaScript learning journey.
// Focus: object validation, data normalization, and error handling.


// Each cargo manifest will be represented as an object with the following properties:

// containerId: a positive integer identifying the associated cargo container.
// destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
// weight: a positive number representing the cargo's weight.
// unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
// hazmat: a boolean value indicating whether hazardous material handling is needed.
// Example cargo manifest object:

// {
//   containerId: 1,
//   destination: "Monterey, California, USA",
//   weight: 831,
//   unit: "lb",
//   hazmat: false
// }

const normalizeUnits = manifest => {
  const newObj = {...manifest};
  if(manifest.unit === "lb"){ 
    newObj.unit = "kg"
    newObj.weight = manifest.weight * 0.45;
  }
  return newObj;
}
const validateManifest = manifest => {
  const missing = {};
  if(!("containerId" in manifest)){
    missing.containerId = "Missing";
  }
  else if(typeof manifest.containerId !== "number" || !(Number.isInteger(manifest.containerId)) || manifest.containerId <= 0){
    missing.containerId = "Invalid";
  }
  if(!("destination" in manifest)){
    missing.destination = "Missing";
  }
  else if(typeof manifest.destination !== "string" || manifest.destination.trim().length <= 0){
    missing.destination = "Invalid";
  }
  if(!("weight" in manifest)){
    missing.weight = "Missing"
  }
  else if(typeof manifest.weight !== "number" || manifest.weight <= 0 || !Number.isFinite(manifest.weight)){
    missing.weight = "Invalid";
  }
  if(!("unit" in manifest)){
    missing.unit = "Missing";
  }
  else if((manifest.unit !== "kg" && manifest.unit !== "lb") || (typeof manifest.unit !== "string")){
    missing.unit = "Invalid";
  }

  if(!("hazmat" in manifest)){
    missing.hazmat = "Missing";
  }
  else if((typeof manifest.hazmat !== "boolean")){
    missing.hazmat = "Invalid";
  }
  return missing;
}

const processManifest = manifest => {
  const errors = validateManifest(manifest);
if(Object.keys(errors).length === 0){
  console.log(`Validation success: ${manifest.containerId}`)
  console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`)
}
else{
  console.log(`Validation error: ${manifest.containerId}`)
  console.log(errors)
}
}
processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false })

processManifest({ destination: "Watsonville", hazmat: true })