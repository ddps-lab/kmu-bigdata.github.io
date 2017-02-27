$(document).ready(
        function(){
          var list= {"time":undefined,"az":undefined,"price":undefined,"step":undefined,"migration":undefined};
          var hrs = -(new Date().getTimezoneOffset() / 60);
        $.ajax({url: "https://j1kg8eg5p9.execute-api.us-east-1.amazonaws.com/deploy?local="+hrs, success: function(result){

            $.each(result, function(key, value) {
              if (key in list){
                 $("#"+key).text(value);
              }
                else{
                  $("#"+key).text(key+'     ->        '+value);
                }
            });
        }

      });
    });
