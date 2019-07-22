$(function() {
  var source = $("#entry-template").html(); 
  var template = Handlebars.compile(source);
  $.ajax({
    url: "http://10.10.10.2:80/api/empleados",
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
