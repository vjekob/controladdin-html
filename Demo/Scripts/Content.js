(function ($) {
    $(document).ready(function () {
        var html = Microsoft.Dynamics.NAV.GetImageResource("Demo/Html/Control.html");
        $("#controlAddIn").load(html, function() {
            $("#controlAddIn").find("img").each(function() {
                var src = Microsoft.Dynamics.NAV.GetImageResource($(this).attr("src"));
                $(this).attr("src", src);
            });
        });
    });
})(jQuery);
