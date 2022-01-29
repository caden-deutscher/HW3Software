$(document).ready(function(){
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
 }