console.log('\'Allo \'Allo!');

var newToDo = _.template($("#todoitemTmpl").html(), list);

	$("list").append(newToDo);

$("#newToDoForm").on("add", function(e) {
  		e.preventDefault();
  		// var formData = $(this).serializeArray();
  		// console.log($(this).serializeArray());
  		var postTitle = $(".newPostTitle").val();
  		console.log(postContentForm);

  		var newPostObj = {
  					title: postTitle,
  					date: "Tuesday, 29, 2014",
  					content: postContentForm,
  					author: authorPostForm
  		};
  		posts.unshift(newPostObj);
  		var myPostsString = _.template($("#todoTmpl").html(), list);

  		$(".newPostTitle").val("");
  		$("#myModal").modal("hide");
  		$("section").html(myPostsString);


  });
