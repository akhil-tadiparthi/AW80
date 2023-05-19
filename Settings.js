// /* Ross' code starts here */


function userButton(username){
  var url = `http://localhost:3000/Settings/user/${username}`;
  $.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		success: function(data){
				$(window.alert("Username updated!"));
		},
		error: function(err){
			$(window.alert("Unable to register"));
		}
	})
}
function firstNButton(firstName){
    var url = `http://localhost:3000/Settings/first/${firstName}`;
    $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          success: function(data){
                  $(window.alert("Name updated!"));
          },
          error: function(err){
              $(window.alert("Unable to register"));
          }
      })
  }
  function lastNButton(lastName){
    var url = `http://localhost:3000/Settings/last/${lastName}`;
    $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          success: function(data){
                  $(window.alert("Name updated!"));
          },
          error: function(err){
              $(window.alert("Unable to register"));
          }
      })
  }
  function passButton(password){
    var url = `http://localhost:3000/Settings/pass/${password}`;
    $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          success: function(data){
                  $(window.alert("Password updated!"));
          },
          error: function(err){
              $(window.alert("Unable to register"));
          }
      })
  }


































// //Create a function that displays username

// function changeUsername(){
//     var inputU = document.createElement('div');
//     inputU.innerHTML="<input type='text' class='form-control' placeholder='Enter Username' name='username' size='20'required>";
//     var submit = document.createElement('div')
//     submit.innerHTML = "<button type='submit' class='button'>Submit</button>"
//     //getOldUsername();
//     document.getElementById("changeU").appendChild(inputU);
//     inputU.appendChild(submit);
//     document.getElementById("uButton").disabled=true;
// }

// function getOldUsername(){
//     var oldU = document.createElement('div');
//     oldU.innerHTML = "Change From: JonDoe"
//     document.getElementById("changeU").appendChild(oldU);
// }
// //input type='text' class='form-control' placeholder='Enter Username' name='username' style='border-radius: 0px' required
// function changePassword(){
//     var inputP = document.createElement('div');
//     inputP.innerHTML="<input type='password' class='form-control' placeholder='Enter Password' name='password' style='border-radius: 0px' required>";
//     var submit = document.createElement('div')
//     submit.innerHTML = "<button type='submit' class='button'>Submit</button>"
//     document.getElementById("changeP").appendChild(inputP);
//     inputP.appendChild(submit);
//     document.getElementById("pButton").disabled=true;
// }
// function changeFirst(){
//     var inputF = document.createElement('div');
//     inputF.innerHTML="<input type='text' class='form-control' placeholder='Enter First Name' name='firstname' size='20'required>";
//     var submit = document.createElement('div')
//     submit.innerHTML = "<button type='submit' class='button'>Submit</button>"
//     //getOldFirst();
//     document.getElementById("changeF").appendChild(inputF);
//     inputF.appendChild(submit);
//     document.getElementById("fButton").disabled=true;
// }
// function getOldFirst(){
//     var oldF = document.createElement('div');
//     oldF.innerHTML = "Change From: Jon"
//     document.getElementById("changeF").appendChild(oldF);
// }
// function changeLast(){
//     var inputL = document.createElement('div');
//     inputL.innerHTML="<input type='text' class='form-control' placeholder='Enter Last Name' name='lastname' size='20'required>";
//     var submit = document.createElement('div')
//     submit.innerHTML = "<button type='submit' class='button'>Submit</button>"
//     //getOldLast();
//     document.getElementById("changeL").appendChild(inputL);
//     inputL.appendChild(submit);
//     document.getElementById("lButton").disabled=true;
// }
// function getOldLast(){
//     var oldL = document.createElement('div');
//     oldL.innerHTML = "Change From: Doe"
//     document.getElementById("changeL").appendChild(oldL);
// }


