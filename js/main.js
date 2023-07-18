$(document).ready(function(){
    alert("Ready");
    $('.addItem').on('click',function() {
        alert("Button");
        var text = $('.item').val();
        console.log(text);
        console.log("Ashley Did It");
        var markup = `<tr><td></td><td>${text}</td><td></td><td></td></tr>`;
        $('tbody').append(markup);
    });
});
