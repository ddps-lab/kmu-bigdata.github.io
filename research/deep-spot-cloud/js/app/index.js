/**
 * Created by kde713 on 2017. 5. 1..
 */

$(document).ready(function () {
    // 1. Get current timezone offset
    const tzOffset = -(new Date().getTimezoneOffset() / 60);

    // 2. Define selector which will used in data view
    const view_current_running = $("#view_current_running");
    const view_current_price = $("#view_current_price");
    const view_current_region = $("#view_current_region");
    const view_current_step = $("#view_current_step");
    const view_current_saving = $("#view_current_saving");
    const view_saving_chart = document.getElementById("view_saving_chart");

    // 2. Request Cloud data via ajax
    myLoader.showMe();

    $.ajax({
        type: "GET",
        url: BASE_URL + "/deploy?local=" + tzOffset,
        success: function (data) {
            myLoader.hideMe();

            // 3. Putting data in variables
            const data_source_current_running = {
                "title": "CIFAR-10 image classification (CNN)",
                "link": "https://www.tensorflow.org/tutorials/deep_cnn"
            };
            const data_current_running = "<a href='" + data_source_current_running.link + "' title='" + data_source_current_running.title + "' target='_blank'>" + shortenString(data_source_current_running.title) + "</a>";
            const data_current_price = data["lastinfo"]["price"];
            const data_current_region = data["lastinfo"]["az"];
            // const data_current_step = numeral(data["lastinfo"]["step"]).format("0.0a");
            const data_current_step = data["lastinfo"]["step"];
            const data_current_saving = "80.0%";
            const data_saving_chart_keys = ["M19", "M20", "M21", "M22", "M23"];
            const data_saving_chart_values = [80, 60, 40, 70, 50];

            // 4. Render data
            view_current_running.html(data_current_running);
            view_current_price.html(data_current_price);
            view_current_region.html(data_current_region);
            view_current_step.html(data_current_step);
            view_current_saving.html(data_current_saving);
            window.myChart = new Chart(view_saving_chart.getContext("2d")).Line({
                    "labels": data_saving_chart_keys,
                    "datasets": [{
                        label: "Saving rate",
                        fillColor: "rgba(48, 164, 255, 0.2)",
                        strokeColor: "rgba(48, 164, 255, 1)",
                        pointColor: "rgba(48, 164, 255, 1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: data_saving_chart_values
                    }]
                }, {
                    scaleOverride: true,
                    scaleSteps: 10,
                    scaleStepWidth: 10,
                    scaleStartValue: 0,
                    responsive: true
                }
            );

        },
        error: function (e) {
            myLoader.hideMe();
            alert("Unexpected error occured while loading cloud data.");
        }
    });
});