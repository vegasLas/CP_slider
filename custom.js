$(document).ready(function () {
    $(function () {
        var state = false
        $("#select__color").click(function () {
            $("#select__background").removeClass("select")
            $("#select__color").addClass("select")
            state = true
            refreshSwatch()
        })
        $("#select__background").click(function () {
            $("#select__color").removeClass("select")
            $("#select__background").addClass("select")
            state = false
            refreshSwatch()
        })
        console.log(state)
        function hexFromRGB(r, g, b) {
            var hex = [
                r.toString(16),
                g.toString(16),
                b.toString(16)
            ];
            $.each(hex, function (nr, val) {
                if (val.length === 1) {
                    hex[nr] = "0" + val;
                }
            });
            return hex.join("").toUpperCase();
        }
        function refreshSwatch() {
            var red = $("#red").slider("value"),
                green = $("#green").slider("value"),
                blue = $("#blue").slider("value"),
                hex = hexFromRGB(red, green, blue);
            if (!state)
                $("#swatch").css("background-color", "#" + hex);
            else
                $("#swatch").css("color", "#" + hex);
        }

        $("#red, #green, #blue").slider({
            orientation: "horizontal",
            range: "min",
            max: 255,
            value: 140,
            slide: refreshSwatch,
            change: refreshSwatch
        });
        $("#select__color").addClass("select")
        $("#red").slider("value", 140);
        $("#green").slider("value", 140);
        $("#blue").slider("value", 140);
    });
})