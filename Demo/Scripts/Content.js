(function ($) {
    $(document).ready(function () {
        var url = Microsoft.Dynamics.NAV.GetImageResource("Demo/Html/Control.html");
        $("#controlAddIn").load(url);
    });
})(jQuery);
