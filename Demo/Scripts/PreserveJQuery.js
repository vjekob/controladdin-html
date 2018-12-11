(function ($) {
    Object.defineProperties(
        window, {
            $: {
                get: function () {
                    return $;
                }
            },
            jQuery: {
                get: function () {
                    return $;
                }
            }
        })
})(jQuery);
