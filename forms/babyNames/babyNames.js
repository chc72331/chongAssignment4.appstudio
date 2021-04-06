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
    drpBabyNames.addItem(topBabyNames[i])
}

drpBabyNames.onclick = function(s) {
  if (typeof(s) == "object")
        return
      else {
        for (i = 0; i < 5; i++)
          favoriteBabyNames.push(s)
          if (favoriteBabyNames.length == 5) {
            lblBabyName.value = "You can only add 5 names!"
          }
    }
}

btnFavBabyPg.onclick = function() {
  ChangeForm(favBabyNames)
}