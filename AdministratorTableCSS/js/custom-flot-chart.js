var Script = function () {

//    flot chart (Sin and Cos)

    var metro = {
        showTooltip: function (x, y, contents) {
            $('<div class="metro_tips">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5
            }).appendTo("body").fadeIn(200);
        }

    }

    if (!!$(".plots").offset() ) {
        var sin = [];
        var cos = [];

        for (var i = 1; i <= 12; i += 1){
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        // Display the Sin and Cos Functions
        $.plot($(".plots"), [ { label: "BookedOrder", data: cos }, { label: "Refund", data: sin } ],
            {
                colors: ["#4b45f5", "#caf336"],

                series: {
                    lines: {
                        show: true,
                        lineWidth: 3
                    },
                    points: {show: true},
                    shadowSize: 3
                },

                grid: {
                    hoverable: true,
                    show: true,
                    borderWidth: 2,
                    labelMargin: 14
                },

                legend: {
                    show: true,
                    margin: [0,-24],
                    noColumns: 0,
                    labelBoxBorderColor: null
                },

                yaxis: { min: 0, max: 10},
                xaxis: {}
            });

        // plot tooltip show
        var previousPoint = null;
        $(".plots").bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    $(".charts_tooltip").fadeOut("fast").promise().done(function(){
                        $(this).remove();
                    });
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);
                    metro.showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $(".metro_tips").fadeOut("fast").promise().done(function(){
                    $(this).remove();
                });
                previousPoint = null;
            }
        });
    }

}();