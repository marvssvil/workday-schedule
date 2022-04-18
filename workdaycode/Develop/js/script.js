//current date 
$("#currentDay").text(moment().format('dddd'+", "+ 'MMMM Do'));

//past present future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var curentH = parseInt($(this).attr("id"));

        if (curentH > hour) {
            $(this).addClass("future");
        } else if (curentH === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
timeBlockColor();

//when .click button
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".ppf").val();
    localStorage.setItem(time, plan);
});
//saved to LocalStorage
function usePlanner() {

    $(".hour").each(function() {
        var curentH = $(this).text();
        var curentP = localStorage.getItem(curentH);

        if(curentP !== null) {
            $(this).siblings(".ppf").val(curentP);
        }
    });
}
usePlanner();

