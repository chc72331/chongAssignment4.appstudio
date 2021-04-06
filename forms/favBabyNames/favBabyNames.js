favBabyNames.onshow = function() {
  for (i = 0; i < favoriteBabyNames.length; i++)
    selFavorite.addItem(favoriteBabyNames[i])
}

btnFavBaby.onclick = function() {
  lblFavBaby.value = `Your favorite baby name is ${selFavorite.value}.`
}