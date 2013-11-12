﻿(function () {
    var data = $("#demo").clone();
    var strings = {
        codeSample: "Src code used to create the example above."
    };

    $(function () {

        var codeSample = $("<div>");
        codeSample.append($("<h2>").html(strings.codeSample));
        codeSample.append($("<pre>").attr("class", "brush: js, toolbar: false").text(data.html()));
        codeSample.appendTo("body");

        SyntaxHighlighter.all();
    });

})();