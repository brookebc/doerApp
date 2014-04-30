console.log('\'Allo \'Allo!');

var newToDo = _.template($("#todoitemTmpl").html(), list);

  $("list").append(newToDo);