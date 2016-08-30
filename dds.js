/**
 * Created by maker on 2016/8/30.
 */
<div class="Email f-bc">
<input id="email" type="text" placeholder="邮箱" class="input-on-1 paDdis" name="email" />
<span class="email"></span>
</div>
<div class="Pass">
<input id="pass" type="text" placeholder="手机号" class="select" name="mobile" />
<span class="pass"></span>
</div>


if (email.value == "") {
    $(".email").html("请输入您的邮箱!")
} else {
    $(".email").html("")
}
if (pass.value == "") {
    $(".pass").html("请输入您的手机号!")
} else {
    $(".pass").html("")
}

$(".email").html("");
$(".pass").html("")
$(".email").html(data.mobile_message);
$(".pass").html(data.password_message);