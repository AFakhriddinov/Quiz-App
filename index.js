function quiz(event) {
  event.preventDefault();
  let count = 0;
  let element1 = document.getElementsByName("options1");
  let element2 = document.getElementsByName("options2");
  let element3 = document.getElementsByName("options3");
  let element4 = document.getElementsByName("options4");
  let element5 = document.getElementsByName("options5");
  let element6 = document.getElementsByName("options6");
  let element7 = document.getElementsByName("options7");
  let element8 = document.getElementsByName("options8");
  let element9 = document.getElementsByName("options9");
  let element10 = document.getElementsByName("options10");

  for (let i = 0; i < 10; i++) {
    if (element1[i].checked) {
      let result1 = element1[i].value;
      if (result1 == 10) {
        count++;
      } else {
        count;
      }
    }

    if (element2[i].checked) {
      let result2 = element2[i].value;
      if (result2 == 45) {
        count++;
      } else {
        count;
      }
    }

    if (element3[i].checked) {
      let result3 = element3[i].value;
      if (result3 == 70) {
        count++;
      } else {
        count;
      }
    }

    if (element4[i].checked) {
      let result4 = element4[i].value;
      if (result4 == 20) {
        count++;
      } else {
        count;
      }
    }

    if (element5[i].checked) {
      let result5 = element5[i].value;
      if (result5 == 2) {
        count++;
      } else {
        count;
      }
    }

    if (element6[i].checked) {
      let result6 = element6[i].value;
      if (result6 == 12) {
        count++;
      } else {
        count;
      }
    }

    if (element7[i].checked) {
      let result7 = element7[i].value;
      if (result7 == 40) {
        count++;
      } else {
        count;
      }
    }

    if (element8[i].checked) {
      let result8 = element8[i].value;
      if (result8 == 20) {
        count++;
      } else {
        count;
      }
    }

    if (element9[i].checked) {
      let result9 = element9[i].value;
      if (result9 == 120) {
        count++;
      } else {
        count;
      }
    }

    if (element10[i].checked) {
      let result10 = element10[i].value;
      if (result10 == 200) {
        count++;
      } else {
        count;
      }
    }

    if (count <= 1) {
      document.getElementById("correctAnswers").innerHTML =
        "Correct answer: " + count;
    } else {
      document.getElementById("correctAnswers").innerHTML =
        "Correct answers: " + count;
    }

    if (10 - count <= 1) {
      document.getElementById("incorrectAnswers").innerHTML =
        "Incorrect answer: " + (10 - count);
    } else {
      document.getElementById("incorrectAnswers").innerHTML =
        "Incorrect answers: " + (10 - count);
    }
  }
}
