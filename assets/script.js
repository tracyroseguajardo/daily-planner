//GLOBAL VARIABLES
// today's date via momentjs
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//current time via momentjs
// console.log(presentHour);

//DECLARED FUNCTIONS

function format() {
    var presentHour = moment().hours();

    $('.time-block').each(function(){
        var hour = parseInt($(this).attr('id'));

        if (hour === presentHour){
            $(this).addClass('present');
        }

        if (hour < presentHour){
            $(this).addClass('past')
        }

        if (hour > presentHour){
            $(this).addClass('future');
        }
    })

}
format() 
$('.saveBtn').on('click', function(){

        // the parent div id
        var key = $(this).parent().attr('id');
        // value will be the textarea content
        var value = $(this).siblings('.description').val();

    localStorage.setItem(key, value)
});

$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))






