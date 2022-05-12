$(document).ready(function(){
  $("#btn1").hover(function(){
    $("#btn1").text("Go down");
  },function(){
    $("#btn1").text("Learn More");
  });
});
function fn1(){
  var str=document.getElementById('text').value;
  var str2=document.getElementById('mail').value;
  var str3=document.getElementById('class').value;
  alert("Your Name is "+":"+ str+"\n"+"Your Mail'id is"+":"+str2+"\n"+"Your class is "+":"+str3+"\n"+"CLICK OK TO CONTINUE");
  
}
$(document).ready(function(){
  $("#fn1").click(function(){
    $(fn1());
  });
});
function fn2(){
  var name=document.getElementById("fm").value;
  var email=document.getElementById("fm1").value;
  alert("Your Name "+":"+name+"\n"+"Your Email "+":"+email+"\n"+"THANK YOU FOR VISIT US");
}
$(document).ready(function(){
  $("#submit").click(function(){
    $(fn2());
  });
});