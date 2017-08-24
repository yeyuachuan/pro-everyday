/**
 * Created by acer on 2017/8/5.
 */
$(function (){
    $(".left-topnav-content-inform").mouseover(function () {
        $(this).stop(true).animate({"height":180})
    })
    $(".left-topnav-content-inform").mouseleave(function () {
        $(this).stop(true).animate({"height":30})
    })
})

