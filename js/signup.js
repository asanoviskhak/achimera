
var firebaseConfig = {
  apiKey: "AIzaSyB8rQLBtyQi_o6qLF0LZ6lxRYp1-HILn0I",
  authDomain: "achimera-01.firebaseapp.com",
  databaseURL: "https://achimera-01.firebaseio.com",
  projectId: "achimera-01",
  storageBucket: "achimera-01.appspot.com",
  messagingSenderId: "963188416835",
  appId: "1:963188416835:web:f628acab42db0356c1cff6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Reference to the recommendations object in your Firebase database
  var needhelp = firebase.firestore().collection("needHelp");
  // Save a new recommendation to the database, using the input in the form
  var needHelp = function () {
    // Get input values from each of the form elements
    var cntr = document.getElementById("country");
    var country = cntr.options[cntr.selectedIndex].innerHTML;
    var rgn = document.getElementById("регион");
    var region = rgn.options[rgn.selectedIndex].innerHTML;
    var ct = document.getElementById("город");
    var city = ct.options[ct.selectedIndex].innerHTML;
    var nUser = needhelp.doc(country).collection(city);
    nUser.add({
      "country": country,
      "region": region,
      "city": city
    });
  };

  // When the window is fully loaded, call this function.
  // Note: because we are attaching an event listener to a particular HTML element
  // in this function, we can't do that until the HTML element in question has
  // been loaded. Otherwise, we're attaching our listener to nothing, and no code
  // will run when the submit button is clicked.
  // $(window).load(function () {
  //   // Find the HTML element with the id recommendationForm, and when the submit
  //   // event is triggered on that element, call submitRecommendation.
  //   $("#nextBtn").on('click',needHelp);
  
  // });

  

  //We need to implement here


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    needHelp();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}