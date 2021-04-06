// I've added my own kids' names: Miles, Vincent, and Natalie into the list

let topBabyNames = ["Natalie", "Miles", "Vincent", "Emma",
                    "Oliver", "Ava", "William", "Sophia",
                    "Olivia", "Isabella", "James",
                    "Charlotte", "Benjamin", "Aiden",
                    "Lucas", "Mia", "Mason", "Harper",
                    "Ethan", "Evelyn"]
                    
let favoriteBabyNames = []

babyNames.onshow = function() {
  for (i = 0; i < topBabyNames.length; i++)
    selBabyNames.addItem(topBabyNames[i])
}

btnAddBaby.onclick = function() {
  if (favoriteBabyNames.length >= 5)
    lblBabyName = 'You can only add 5 names!'
  else {
    favoriteBabyNames.push(selBabyNames.value)
    console.log(favoriteBabyNames)
    lblBabyName = `${selBabyNames.value} has been added!`
  }
}

btnFavBabyPg.onclick = function() {
  ChangeForm(favBabyNames)
}