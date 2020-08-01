$(document).ready(function () {
    //    ==============================Slider_photo==========================
    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        draggable: true

    });
    // ============================Dropdown-Header============================
    $('.navigation__link_me').click(function () {
        $('#myDropdown').toggleClass('show')

    })

    window.onclick = function (event) {
        if (!event.target.matches('.navigation__link_me')) {
            const dropdowns = $(".dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }


});
