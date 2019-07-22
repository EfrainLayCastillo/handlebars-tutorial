$(function() {
  var source = $("#entry-template").html(); 
  var template = Handlebars.compile(source);
  // var kk = [
  //   {
  //     "cedula": "8-915-1407",
  //     "nombre": "Taro",
  //     "apellido": "Wook",
  //     "posicion": "Manager",
  //     "fecha_ingreso": "2019-01-01",
  //     "salario": 1200,
  //     "gastos": 300
  //   },
  //   {
  //     "cedula": "8-999-999",
  //     "nombre": "Roderiq",
  //     "apellido": "ACB2",
  //     "posicion": "DEV",
  //     "fecha_ingreso": "2019-01-01",
  //     "salario": 900,
  //     "gastos": 100
  //   }
  // ];  
  // var html = template(kk);
  // console.log(html)
  // $('body').append(html);
  $.ajax({
    url: "http://10.10.10.2:80/api/empleados",
    crossDomain: true,
    dataType: 'jsonp',
    success: function(box){
      var html = template(box);
      $('body').append(html);
      return box
    }
  });
});
