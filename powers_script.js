$(document).ready(function(){
  
    $("#jp_html_button").click(function(){
        $("#bullfrog_wrapper").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum nisl. Ut sit amet orci vestibulum, commodo neque eu, bibendum turpis. </p>");
    });

    $("#jp_attr_button").click(function(){
        $('#jp_input_2').attr('Checked','Checked');
    });

    $("#jp_val_button").click(function(){
    	alert($('input#jp_input_1').val());
    });

    $("#jp_text_button").click(function(){
    	$('#bullfrog_wrapper').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum nisl. Ut sit amet orci vestibulum, commodo neque eu, bibendum turpis.');
    });

    $("#jp_data_set_button").click(function(){
    	$("#bullfrog_wrapper").data("hello",$('input#jp_input_1').val());
    });
    $("#jp_data_get_button").click(function(){
    	alert($("#bullfrog_wrapper").data("hello"));
    });

});
