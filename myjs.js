$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height  > $(".blockBackground").offset().top) {
            $("nav.mynav").css('background-color', 'rgba(153,204,204, 0.8)');
        }

        else {
            $("nav.mynav").css('background-color', 'transparent');

        }

    });

    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function() {
        $("#go-top").scrollToTop();
    });




    $("#loginform").validate({

        rules:{

            login:{
                required: true,
                maxlength: 15
            },
            number:{
                required: true,
                number: true
            },
            email:{
                required: true,
                email: true
            }


        },

        messages: {

            login:{
                required: "Это поле обязательно для заполнения",
                maxlength: "Максимальное число символов -15"
            },


            number:{
                required: "Это поле обязательно для заполнения",
                number: "В номере могут быть только числа"
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Неверный e-mail"
            }

        }

    });
});




