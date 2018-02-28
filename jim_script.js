$(document).ready(function(){

    // Jim Huddle jQuery code 2/28/2018

    $("#Jim .jq1").click(function(){
        $("#Jim img").toggle();
    });
    $("#Jim .jq2").click(function(){
        $("#Jim img").hide();
    });
    $("#Jim .jq3").click(function(){
        $("#Jim img").show();
    });

    // Seeing as this FAILED...
    //$("#Jim .jq4").click(function(){
    //    $("#Jim a").click();
    // ...and this FAILED...
    //$("#Jim .jq4").click(function(){
    //    $("#THIS").click();
    
    $("#Jim .jq4").click(function(){
        $("#Jim .jq1").click();
    });

});