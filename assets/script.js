//GLOBAL VARIABLES

// today's date via momentjs
var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));

//DECLARED FUNCTIONS

function format() {
    //current time via momentjs
    var presentHour = moment().hours();

    //adds present, past, future classes
    $('.time-block').each(function(){
        var hour = parseInt($(this).attr('id'));

        if (hour === presentHour){
            $(this).addClass('present');
        }

        if (hour < presentHour){
            $(this).addClass('past');
        }

        if (hour > presentHour){
            $(this).addClass('future');
        }
    })
}

format()

//sets local storage to save tasks upon save button click
$('.saveBtn').on('click', function(){

        // the parent div id
        var key = $(this).parent().attr('id');
        // value will be the text area content
        var value = $(this).siblings('.description').val();

    localStorage.setItem(key, value)
});

//allows saved tasks to remain displayed
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));