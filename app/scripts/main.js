$(document).ready(function() {

	var activeliststring = _.template($("#putitheretmp").html(), activetodoarray);

	$("#righthere").append(activeliststring);
	calculatecompleted();
});


var completedtotal = 0;

var culatecompleted = function () {
	var completedtotal = 0;
	
	if (('#righthere li').hasClass('completed') === true) {
		completedtotal = completedtotal +1;
		console.log(completedtotal);
	} else {
		return completedtotal;
		alert("You have not completed any items!");
	}
}


$("input").on("keydown",function(e) {
	console.log("hello in keydown");

	if(e.keyCode === 13) {
		// console.log("hello Brooke");
	var readytoadd = $("#newitemtoadd").val();
	console.log(readytoadd);
	// var readytoadd = new activetodoarray(object);

	var newToDoObj = {
  					activity: readytoadd			
  		}

	activetodoarray.push(newToDoObj);
	console.log(activetodoarray);
	
	var activeliststring = _.template($("#putitheretmp").html(), activetodoarray);
	$("#righthere").html(activeliststring);
	calculatecompleted();

}
});




