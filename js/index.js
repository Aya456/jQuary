$('.openicon').click(function () {
    $('.sidenav').css('left','0')
    $(".openicon").animate({left :'220px'})

})
$('.closebtn').click(function () {
    $('.sidenav').css('left','-270px');
    $(".openicon").animate({left :'-50px'})

})
$(".ass h3").click(function () {
    $(this).next().slideToggle(400);
    $(".ass div").not( $(this).next()).slideUp(400);
})
$('.sidenav a').click(function (e) {
    const sectionSelector=$(e.target).attr("href");
    const sectionoffsettop=$(sectionSelector).offset().top;
    $('html, body').animate({scrollTop: sectionoffsettop},1000)
})

$('textarea').keyup(function () {
let myLength=$(this).val().length;
$("#num").text(100-myLength <=0 ? "your avilable character finished" : 100-myLength)
})

function getdate(){
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let day =date.getDay();
    if (hours<10) {
        hours=`0${hours}`
    }
    if (min<10) {
        min=`0${min}`
    }
    if (sec<10) {
        sec=`0${sec}`
    }
    if (day<10) {
        day=`0${day}`
    }
    $(".hours").text(`${hours} h`);
    $(".minutes").text(`${min} m`);
    $(".seconds").text(`${sec} s`);
    $(".days").text(`${day} D`);


}
getdate()
setInterval(function () {
    getdate();
},1000)
