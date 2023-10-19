$(document).ready(function(){
    $('.offcanvas-body a').on('click', function () {
        var bsOffcanvasInstance =  $('#offcanvasNavbar').data('bs.offcanvas');
        bsOffcanvasInstance.hide();
    });
});

