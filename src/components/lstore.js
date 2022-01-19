const element = document.getElementById("submit-button");
element.addEventListener("click", (event) => {

  const name = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const checkBox1 = document.getElementById("inlineCheckbox1");
  const checkBox2 = document.getElementById("inlineCheckbox2");
  const checkBox3 = document.getElementById("inlineCheckbox3");
  const radioButton1 = document.getElementById("inlineRadio1");
  const radioButton2 = document.getElementById("inlineRadio2");
  const radioButton3 = document.getElementById("inlineRadio3");
  const newPassword = document.getElementById("inputPassword5").value;
  const terms = document.getElementById("terms");
  const mail = document.getElementById("exampleFormControlInput1").value;
  // const clear = document.getElementById("clear");
  //   username

  if (
    name &&
    age &&
    age > 0 &&
    age < 150 &&
    (checkBox1.checked || checkBox2.checked || checkBox3.checked) &&
    (radioButton1.checked || radioButton2.checked || radioButton3.checked) &&
    newPassword &&
    terms &&
    mail
  ) {
    event.preventDefault();
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    if (checkBox1.checked) {
      localStorage.setItem("checkBox1", checkBox1.value);
    }
    if (checkBox2.checked) {
      localStorage.setItem("checkBox2", checkBox2.value);
    }
    if (checkBox3.checked) {
      localStorage.setItem("checkBox3", checkBox3.value);
    }

    if (radioButton1.checked) {
      localStorage.setItem("radioButton1", radioButton1.value);
    } else if (radioButton2.checked) {
      localStorage.setItem("radioButton2", radioButton2.value);
    } else if (radioButton3.checked) {
      localStorage.setItem("radioButton3", radioButton3.value);
    }

    localStorage.setItem("mail", mail);
    localStorage.setItem("terms", terms.checked);

    const expr = /^[a-zA-Z_]{3,15}$/;
    if (!expr.test(name)) {
      showUserNameError(true);
    } else {
      showUserNameError(false);
    }

    //age

    if (age) {
      showAgeError(false, age);
    } else {
      showAgeError(true, age);
    }

    //checkbox

    if (checkBox1.checked || checkBox2.checked || checkBox3.checked) {
      checkBoxError(true);
    } else {
      checkBoxError(false);
    }

    //radiobutton

    if (radioButton1.checked || radioButton2.checked || radioButton3.checked) {
      radioButton(true);
    } else {
      radioButton(false);
    }

    // let reg = new RegExp(
    //   "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{7,})"
    // );

    //password

    // if (password.length >= 8) {
    //   showPasswordError(true);
    // } else {
    //   showPasswordError(false);
    // }

    //terms and condition

    addDataToTable(
      name,
      age,
      mail,
      terms,
      radioButton1,
      radioButton2,
      radioButton3,
      checkBox1,
      checkBox2,
      checkBox3
    );

    if (terms) {
      termsandcondition(true);
    } else {
      termsandcondition(false);
    }
    const filter =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

    if (filter.test(mail)) {
      enterValidMail(true);
    } else {
      enterValidMail(false);
    }

    var regularExpression =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

    if (newPassword.length < 6 || newPassword.length > 16) {
      showPasswordError(false);
    } else if (!regularExpression.test(newPassword)) {
      showPasswordError(false);
    } else {
      showPasswordError(true);
    }
  }
});

const addDataToTable = (
  name,
  age,
  mail,
  terms,
  radioButton1,
  radioButton2,
  radioButton3,
  inlineCheckbox1,
  inlineCheckbox2,
  inlineCheckbox3
) => {
  console.log("Cc");
  if (
    name &&
    age &&
    age > 0 &&
    age < 150 &&
    mail &&
    terms &&
    (radioButton1.checked || radioButton2.checked || radioButton3.checked) &&
    (inlineCheckbox1.checked ||
      inlineCheckbox2.checked ||
      inlineCheckbox3.checked)
  ) {
    let div = document.getElementById("div");

    div.style.visibility = "visible";
    let n = 1;
    let x = 0;

    let list1 = [];
    let list2 = [];
    let list3 = [];
    let list4 = [];
    let list5 = [];

    let addroww = document.getElementById("show");
    let NewRow = addroww.insertRow(n);

    list1[x] = document.getElementById("username").value;
    list2[x] = document.getElementById("age").value;

    if (radioButton1.checked) {
      list3[x] = radioButton1.value;
    } else if (radioButton2.checked) {
      list3[x] = radioButton2.value;
    } else if (radioButton3.checked) {
      list3[x] = radioButton3.value;
    }

    let val = "";

    if (inlineCheckbox1.checked) {
      val = inlineCheckbox1.value;
    }
    if (inlineCheckbox2.checked) {
      val = val + " " + inlineCheckbox2.value;
    }
    if (inlineCheckbox3.checked) {
      val = val + " " + inlineCheckbox3.value;
    }

    list4[x] = val;

    list5[x] = document.getElementById("exampleFormControlInput1").value;

    let cel1 = NewRow.insertCell(0);
    let cel2 = NewRow.insertCell(1);
    let cel3 = NewRow.insertCell(2);
    let cel4 = NewRow.insertCell(3);
    let cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;
  }
};

const addDataToTableFromLocalStorage = (
  name,
  age,
  mail,
  terms,
  radioButton1,
  radioButton2,
  radioButton3,
  inlineCheckbox1,
  inlineCheckbox2,
  inlineCheckbox3
) => {
  console.log("radioButton1", radioButton1);
  if (
    name &&
    age &&
    age > 0 &&
    age < 150 &&
    mail &&
    terms && 
    (radioButton1 !== "" || radioButton2 !== "" || radioButton3 !== "") &&
    (inlineCheckbox1 !== "" || inlineCheckbox2 || inlineCheckbox3 !== "")
  ) {
    let div = document.getElementById("div");

    div.style.visibility = "visible";
    let n = 1;
    let x = 0;

    let list1 = [];
    let list2 = [];
    let list3 = [];
    let list4 = [];
    let list5 = [];

    let addroww = document.getElementById("show");
    let NewRow = addroww.insertRow(n);

    list1[x] = name;
    list2[x] = age;

    if (inlineCheckbox1) {
      list3[x] = inlineCheckbox1;
    } else if (inlineCheckbox2) {
      list3[x] = inlineCheckbox2;
    } else if (inlineCheckbox3) {
      list3[x] = inlineCheckbox3;
    }

    let val = "";

    if (radioButton1 !== "") {
      val = radioButton1;
    }
    if (radioButton2 !== "") {
      val = val + " " + radioButton2;
    }
    if (radioButton3 !== "") {
      val = val + " " + radioButton3;
    }

    list4[x] = val;

    list5[x] = mail;

    let cel1 = NewRow.insertCell(0);
    let cel2 = NewRow.insertCell(1);
    let cel3 = NewRow.insertCell(2);
    let cel4 = NewRow.insertCell(3);
    let cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;
  }
};
displayTableFromLocalStorage = () => {
  console.log("Cc");
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  const checkBox1 = localStorage.getItem("checkBox1");
  const checkBox2 = localStorage.getItem("checkBox2");
  const checkBox3 = localStorage.getItem("checkBox3");
  const radioButton1 = localStorage.getItem("radioButton1");
  const radioButton2 = localStorage.getItem("radioButton2");
  const radioButton3 = localStorage.getItem("radioButton3");
  const mail = localStorage.getItem("mail");
  const terms = localStorage.getItem("terms");

  if (
    name &&
    age &&
    (checkBox1 !== "" || checkBox2 !== "" || checkBox3 !== "") &&
    (radioButton1 !== "" || radioButton2 !== "" || radioButton3 !== "") &&
    mail &&
    terms
  ) {
    console.log("c");
    addDataToTableFromLocalStorage(
      name,
      age,
      mail,
      terms,
      checkBox1,
      checkBox2,
      checkBox3,
      radioButton1,
      radioButton2,
      radioButton3
    );
  }
};

displayTableFromLocalStorage();

function showUserNameError(isShowError) {
  const ele = document.getElementById("username-error");
  if (isShowError) {
    ele.innerText = "Min 3 char and only Alphabets and Underscore allowed";
    ele.style.display = "block";
    ele.style.color = "red";
  } else {
    ele.innerText = "";
    ele.style.display = "none";
  }
}

function showAgeError(isShowError, val) {
  const ele = document.getElementById("age-error");
  if (isShowError) {
    ele.innerText = "age cannot be empty";
    ele.style.display = "block";
    ele.style.color = "red";
  } else {
    if (val > 0 && val < 150) {
      ele.innerText = "";
      ele.style.display = "none";
    } else {
      ele.innerText = "age cannot be less then 0 or greater than 150";
      ele.style.display = "block";
      ele.style.color = "red";
    }
  }
}

function checkBoxError(isChecked) {
  const checkBox = document.getElementById("checkBoxError");

  if (isChecked) {
    checkBox.style.display = "none";
  } else {
    checkBox.style.display = "block";
  }
}

function radioButton(radioSelect) {
  const radioButton = document.getElementById("RadioButtonShow");
  if (radioSelect) {
    radioButton.style.display = "none";
  } else {
    radioButton.style.display = "block";
  }
}

function showPasswordError(pError) {
  const password = document.getElementById("passwordError");
  if (pError) {
    password.style.display = "none";
  } else {
    password.style.display = "block";
  }
}

function termsandcondition(condition) {
  const terms = document.getElementById("TandC");
  if (condition) {
    terms.style.display = "none";
  } else {
    terms.style.display = "block";
  }
}

function enterValidMail(mail) {
  const Gmail = document.getElementById("Email");
  if (mail) {
    Gmail.style.display = "none";
  } else {
    Gmail.style.display = "block";
  }
}

function myFunction() {
  let x = document.getElementById("inputPassword5");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const Clearall = () => {
  let x = document.getElementById("clear");
  localStorage.clear();
  console.log("nbn");
};
