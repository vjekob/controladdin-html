(function ($) {
    $(document).ready(function () {
        $("#controlAddIn")
            .append($("<div>")
                .append($("<img>")
                    .attr("src", Microsoft.Dynamics.NAV.GetImageResource("Demo/Images/accept.png"))
                    .click(function () {
                        alert("Accepted");
                    }))
                .append($("<img>")
                    .attr("src", Microsoft.Dynamics.NAV.GetImageResource("Demo/Images/reject.png"))
                    .click(function () {
                        alert("rejected");
                    })));
    });
})(jQuery);
