$(".saveBtn").click(function () {
    // console.log($(this).attr('data-btn-hr'));
    var index = $(this).attr('data-btn-hr');
    // console.log($('.description[data-text-hr=' + index + ']'));
    var textArea = $('.description[data-text-hr=' + index + ']');
    // console.log(textArea.value)
    // var event = textArea[0].value;
    var event2 = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    console.log('clicked')
    console.log('event:', event);
    console.log('event2:', event2);
    console.log('hour:', hour);
    console.log($('.form-control').val())
    var text = $(".form-control").val()
    localStorage.setItem(hour, event2);
    var last = localStorage.getItem("key");
    console.log(last)


})

var time = moment().hour();

function updateStyling() {
    console.log(time);
    // iterate through the time blocks
    // grab the hour id
    // convert hour id to an integer
    // compare integer to current hour
    // set style class based on whether moment hour is before, during, or after
    $('.time-block').each(function () {
        console.log($(this).attr('id'))
        var str = $(this).attr('id');

        var strArray = str.split('-');
        var hourInt = parseInt(strArray[1]);
        console.log(hourInt);

        if (hourInt < time) {
            console.log("before")
            $(this).addClass("past")
        } 
        else if (hourInt === time) {
            console.log("present")
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            console.log("after")
            $(this).removeClass("present")
            $(this).addClass("future")
        }

    })
}
updateStyling();
setInterval(updateStyling, 15000)

$('#hour-9').children('.description').val(localStorage.getItem('hour-9'));
$('#hour-10').children('.description').val(localStorage.getItem('hour-10'));



    // $(".form-control").val() = lastname
