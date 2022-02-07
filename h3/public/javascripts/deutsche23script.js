/*
 @author: Caden Deutscher
   @title: HW2
   bugs: no known bugs
   CSS document title: deutsche23css.css
   HTML file name: deutsche23page.html
   JS file name: deutsche23script.js
*/
//Make sure html is loaded
$(document).ready(function(){
    //when submit is clicked run function
    $("#formsubmit").click(submitForm);
    //Change month after respective dropdown button is clicked
    $(".dropdown-content a").click(changeDate);
    
 });

 submitForm = function() {
    //Chec if vegan is in notes
    let boxContents = $("#formbox").val()
    if(boxContents.match(/vegan/gi)){
        alert("Cheesecakes contain dairy.");
    }
    //Show order details when submitted
    else{
        let type = $("input:radio[name=cake_type]:checked").val();
        let quanity = $("#formdrop").val();
        let notes = $("#formbox").val();
        $("#orderform").empty();
        var orderConfirmation = "Thank you! Your order has been placed<br>Order quanity: " + quanity + "<br>Cake type: " + type + "<br>Notes: " + notes;
        $("#orderform").append(orderConfirmation);
    }
 }
//change the text of the dropdown
 changeDate = function() {
    $(".dropbtn").text($(this).text());
    $("#ordersFromTheMonth").empty();
    $.post('/orders', // data to be submit
    function(data, status, xhr) {// success callback
             $("#ordersFromTheMonth").append(data);
     });

 }