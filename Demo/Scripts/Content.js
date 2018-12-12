(function ($) {
    $(document).ready(function () {
        var html = Microsoft.Dynamics.NAV.GetImageResource("Demo/Html/Control.html");
        $("#controlAddIn").load(html);
    });
})(jQuery);
