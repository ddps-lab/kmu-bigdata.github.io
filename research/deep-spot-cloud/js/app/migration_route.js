/**
 * Created by kde713 on 2017. 5. 1..
 */

$(document).ready(function () {
    // 1. Get current timezone offset
    const tzOffset = -(new Date().getTimezoneOffset() / 60);

    // 2. Define selector which will used in data view
    const migration_log_table = $("#route_table");
    const migration_log_table_body = migration_log_table.find("> tbody");

    // 2. Request Cloud data via ajax
    myLoader.showMe();

    $.ajax({
        type: "GET",
        url: BASE_URL + "/deploy?local=" + tzOffset,
        success: function (data) {
            myLoader.hideMe();

            // 3. Putting data in variables
            const migration_route = data["migration"];

            // 4. Render data
            for (var i = 0, route; route = migration_route[i]; i++) {
                migration_log_table_body.append("<tr data-index='" + i + "'><td style='text-align: right; '>" + i + "</td><td style=''>" + route["az"] + "</td><td style=''>$" + route["price"] + "</td><td style=''></td><td style=''>" + route["time"] + "</td><td style=''></td></tr>");
            }
            migration_log_table.bootstrapTable();

        },
        error: function (e) {
            myLoader.hideMe();
            alert("Unexpected error occured while loading cloud data.");
        }
    });
});