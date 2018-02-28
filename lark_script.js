$(document).ready(function(){
   
    $("img.addClass").click(function(){
       
        $("img.hummingbird").addClass("theclassiest");
    })
    $("img.before").click(function(){
        $("img.hummingbird").before("<p> Wanna see a magic trick?</p>");
    })
    $("img.after").click(function(){
        $("img.abovedove").after("<p>arent you glad i didnt say orange?</p>");
    })
    $("img.append").click(function(){
        $(".trick").append("<p>Wenguardian Leviosar<p>");
    })
    
});