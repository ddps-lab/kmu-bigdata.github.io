$(document).ready(
        function(){
          var list= ["time", "az", "price", "step", "migration"];
          var hrs = -(new Date().getTimezoneOffset() / 60);
        $.ajax({url: "https://j1kg8eg5p9.execute-api.us-east-1.amazonaws.com/deploy?local="+hrs, success: function(result){

            $.each(result, function(key, value) {
              if (list.indexOf(key) != -1){
                 $("#"+key).text(value);
              }
                else{
                  $("#"+key).text(key+'     ->        '+value);
                }

            });
        }

      });
    });
