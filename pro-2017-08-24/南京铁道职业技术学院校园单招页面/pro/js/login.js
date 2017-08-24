/**
 * Created by Administrator on 2017/8/24.
 */
$(function () {
    var data ={
        username:"hellodoge2",
        password:123
    }
    $(".sign-btn1").click(function () {
        if($(".password input").val()==data.password && $(".username input").val()== data.username){
            $(".cover").hide();
            $(".login").hide();
        }else{
            alert("您输入的用户名或者密码错误，请重试");
        }
    })

    $(".cancel input").click(function(){
        $(".cover").hide();
        $(".login").hide();
    })

    $(".login-btn").click(function(){
        $(".cover").show();
        $(".login").show();
    })
})