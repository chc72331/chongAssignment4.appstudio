deleteCustomer.onshow = function() {
  query = "SELECT name FROM customers"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      lblCustomer.value = "There are no customers in the database."
    else {
      for (i = 0; i < results.length; i++)
        selCustomer.addItem(results[i][0])
    }
  }
}



btnDelCustomer.onclick = function() {
  let employeeDelete = ""
  employeeDelete = selCustomer.value
  query = "DELETE FROM customers WHERE  name = '" + employeeDelete + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  lblCustomer.value = "You have successfully deleted a customer!"
}

btnRefresh.onclick = function() {
  location.reload()
}