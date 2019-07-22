$(function() {
  var source = $("#entry-template").html(); 
  var template = Handlebars.compile(source);
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function(box){
      var html = template(box);
      $('body').append(html);
      return box
    }
  });
Handlebars.registerHelper('Konktenar', function(name, apellido) {
  return name + " " + apellido;
});
});
