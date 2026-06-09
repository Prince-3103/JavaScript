const lunches = [];
const addLunchToEnd = (arr, str) =>{
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}
const addLunchToStart = (arr, str) =>{
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}
const removeLastLunch = arr => {
  if(arr.length == 0){
    console.log("No lunches to remove.")
    return arr;
  }
  const rem = arr.pop();
  console.log(`${rem} removed from the end of the lunch menu.`);
  return arr;
}
const removeFirstLunch = arr => {
  if(arr.length == 0){
    console.log("No lunches to remove.")
    return arr;
  }
  const rem = arr.shift();
  console.log(`${rem} removed from the start of the lunch menu.`);
  return arr;
}
const getRandomLunch = arr =>{
  if(arr.length == 0){
    console.log("No lunches available.");
  }
  else{
    const random = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${random}`)
  }
}
const showLunchMenu = arr =>{
  if(arr.length == 0){
    console.log("The menu is empty.");
  }
  else{
    console.log(`Menu items: ${arr.join(", ")}`)
  }
}

addLunchToEnd(lunches, "Tacos")
removeFirstLunch(["Sushi", "Pizza", "Burger"])
getRandomLunch(["Sushi", "Pizza", "Burger"])
showLunchMenu(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])