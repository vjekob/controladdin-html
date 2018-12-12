(function ($) {
    $(document).ready(function () {
        var html = Microsoft.Dynamics.NAV.GetImageResource("Demo/Html/Control.html");
        $("#controlAddIn").load(html, function () {
            var imgs = document
                .getElementById("controlAddIn")
                .getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                var src = Microsoft.Dynamics.NAV.GetImageResource(
                    imgs[i].getAttribute("src"));
                imgs[i].src = src;
            }
        });
    });
})(jQuery);
