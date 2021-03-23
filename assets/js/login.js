$(function () {
    const form = layui.form
    const layer = layui.layer
    $('.showReg').on('click', function () {
        $('.login-form').hide()
        $('.reg-form').show()
    })
    $('.showLogin').on('click', function () {
        $('.reg-form').hide()
        $('.login-form').show()
    })

    //表单校验
    form.verify({
        //密码规则
        pwd: [
            /^[\S]{6,12}$/,
            '密码必须6到12位，且不能出现空格'
        ],
        repwd: function (value) {
            if (value !== $('[name="password"]').val()) {
                return '两次密码必须输入一致!'
            }
        }
    })

    //注册功能
    $('#reg-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: '/api/reguser',
            data: $('#reg-form').serialize(),
            success: (res) => {
                // console.log(res);
                if (res.status !== 0) return layer.msg(res.message, { icon: 5 })
                layer.msg('恭喜您!注册成功', { icon: 6 })
                $('#reg-form')[0].reset()
            }
        })
    })

    //登录功能
    $('#login-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: '/api/login',
            data: $('#login-form').serialize(),
            success: (res) => {
                console.log(res);
                if (res.status !== 0) return layer.msg(res.message, { icon: 5 })
                layer.msg('恭喜您!登录成功', { icon: 6 })
                $('#login-form')[0].reset()
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })




})
