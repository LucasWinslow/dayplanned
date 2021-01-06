
// need to add a time with moment. Still working on this.

// 8am
// Here is a function that gets the conetent from the textarea and sends it to local storage. 
// And the second one pulls from local storage when user clicks the load button. I had a few issus with 
// getting it to load on refresh so I add this button to do it. Not the best way to do it as you have to click
// each button for each textarea after refresh.
function Save8() {
    var myContent = document.getElementById("8am").value;
    localStorage.setItem("myContent", myContent);
  }
  function Load8() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("8am").value = myContent;
  };
// 9am
  function Save9() {
    var myContent = document.getElementById("9am").value;
    localStorage.setItem("myContent", myContent);
  }
  function Load9() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("9am").value = myContent;
  };
// 10am
  function Save10() {
    var myContent = document.getElementById("10am").value;
    localStorage.setItem("myContent", myContent);
  }
  function Load10() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("10am").value = myContent;
  };
// 11am
  function Save11() {
    var myContent = document.getElementById("11am").value;
    localStorage.setItem("myContent", myContent);
  }
  function Load11() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("11am").value = myContent;
  };
// 12pm
  function Save12() {
    var myContent = document.getElementById("12pm").value;
    localStorage.setItem("myContent", myContent);
  };
  function Load12() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("12pm").value = myContent;
  }
// 1pm
function Save1() {
    var myContent = document.getElementById("1pm").value;
    localStorage.setItem("myContent", myContent);
  };
  function Load1() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("1pm").value = myContent;
  };
//2pm
function Save2() {
    var myContent = document.getElementById("2pm").value;
    localStorage.setItem("myContent", myContent);
  };
  function Load2() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("2pm").value = myContent;
  };
//3pm
function Save3() {
    var myContent = document.getElementById("3pm").value;
    localStorage.setItem("myContent", myContent);
  };
  function Load3() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("3pm").value = myContent;
  };
// The below was implemented from StackOverflow. 
//  Link can be found here: https://stackoverflow.com/questions/59995703/trying-to-change-background-color-based-off-if-the-hour-is-in-the-past-current
// Still working on getting moment to work. This currently does not work as moment is not working.
  const rows = document.getElementsByClassName("form-control");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {

    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "blue");
    } 
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}


 