 function get_nut_data(){
    document.getElementById('cat-text').innerText ='Category of the food is: '+'cheese'
    document.getElementById('nut-table').style.display='block'
  }
  var loadFile = function(event) {
    document.getElementById('btn').style.display='block'
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };
