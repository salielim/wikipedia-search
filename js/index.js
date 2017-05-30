$(document).ready(function(){
  $('#search').click(function(){
    
    var searchQuery = $('#searchQuery').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchQuery +"&format=json&callback=?";
    
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        $('#result').html('');
      for(var i=0; i<data[1].length; i++) {
      $('#result').prepend('<a href=' + data[3][i] + ' target="blank">' + data[1][i] + "</a><p>" + data[2][i] + "</p>");
      };
     },
      error: function(errorMessage){
        alert("Search error.")
      }
    })
  })
})