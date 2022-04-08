let btnRegister = document.getElementById("btnRegister");
let btnRemove = document.getElementById("btnRemove");
let btnLogin = document.getElementById("btnLogin");
let table = document.querySelector("table");

let nameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#Password");

let nameInput_lg = document.querySelector("#username_lg");
let passwordInput_lg = document.querySelector("#Password_lg");

let btnSubmitRegister = document.querySelector("#submit_register");
let btnSubmitLogin = document.querySelector("#submit_login");

var username = "";
var password = "";

function login() {
  let UserNames = [];
  let Password = [];
  var rowLength = table.rows.length;

  var oCells = table.rows.item(0).cells;

  var cellLength = oCells.length;

  for (j = 0; j < cellLength; j++) {
    var cellVal = oCells.item(j).innerHTML;
    if (cellVal === "Password") {
      for (k = 1; k < rowLength; k++) {
        const valueUsername = table.rows.item(k).cells;
        cellVal = valueUsername.item(j).innerHTML;
        Password.push(cellVal);
      }
    }
    if (cellVal === "UserName") {
      for (l = 1; l < rowLength; l++) {
        const valuePassword = table.rows.item(l).cells;
        cellVal = valuePassword.item(j).innerHTML;
        UserNames.push(cellVal);
      }
    }
  }

  return { UserNames, Password };
}

btnSubmitRegister.addEventListener("click", () => {
  username = nameInput.value;
  password = passwordInput.value;

  if (
    username == null ||
    username == "" ||
    password == null ||
    password == ""
  ) {
    alert("nhap day du");
  } else {
    let stt = document.getElementById("table-login").rows.length - 1;

    stt++;

    let template = `
               <tr class="table-item">
                    <td>${stt}</td>
                    <td>${username}</td>
                    <td>${password}</td>
                    <td>read</td>
                    <td><input type="checkbox" name="hobby" id="checkbox_id" /></td>
                </tr>`;
    table.innerHTML += template;
    nameInput.value = "";
    passwordInput.value = "";
    document.getElementById("form_check_register").style.cssText =
      "display: none";
  }
});

btnSubmitLogin.addEventListener("click", () => {
  username = nameInput_lg.value;
  password = passwordInput_lg.value;

  if (
    username == null ||
    username == "" ||
    password == null ||
    password == ""
  ) {
    // alert("nhap day du");
  } else {
    let stt = document.getElementById("table-login").rows.length - 1;
    const { UserNames, Password } = login();
    var bool = 0;
    for (i = 0; i < stt; i++) {
      if (username === UserNames[i] && password === Password[i]) {
        bool = 1;
      }
    }
    if (bool === 0) {
      alert("Login failure!");
    } else {
      alert("Login success!");
    }

    nameInput_lg.value = "";
    nameInput_lg.value = "";
    document.getElementById("form_check_login").style.cssText = "display: none";
  }
});

btnRegister.addEventListener("click", () => {
  document.getElementById("form_check_register").style.cssText =
    "display: block";
});

btnLogin.addEventListener("click", () => {
  document.getElementById("form_check_login").style.cssText = "display: block";
});

btnRemove.addEventListener("click", () => {
  var checkbox = document.getElementsByName("hobby");

  var result = [];

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      result.push(i + 1);
    }
  }
  console.log(result);

  for (i = 0; i < result.length; i++) {
    table.deleteRow(result[i]);
    console.log(result[i]);
  }
});
