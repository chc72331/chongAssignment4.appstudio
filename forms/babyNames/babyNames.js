// I've added my own kids' names: Miles, Vincent, and Natalie into the list

let topBabyNames = ["Miles", "Olivia", "Noah", "Emma",
  "Oliver", "Ava", "William", "Sophia",
  "Vincent", "Isabella", "James",
  "Charlotte", "Benjamin", "Natalie",
  "Lucas", "Mia", "Mason", "Harper",
  "Ethan", "Evelyn"
]
let favoriteBabyNames = []

babyNames.onshow = function() {
  for (i = 0; i < topBabyNames.length; i++)
    selBabyNames.addItem(topBabyNames[i])
}

btnAddBaby.onclick = function() {
  favoriteBabyNames.push(selBabyNames.value)
  console.log(favoriteBabyNames)
}

btnFavBabyPg.onclick = function() {
  ChangeForm(favBabyNames)
}