/**
 * Created by kde713 on 2017. 5. 1..
 */

$(document).ready(function () {
    // 1. Get current timezone offset
    const tzOffset = -(new Date().getTimezoneOffset() / 60);

    // 2. Define selector which will used in data view
    const pricetable = $("#price_table");
    const pricetable_body = pricetable.find("> tbody");

    // 2. Request Cloud data via ajax
    myLoader.showMe();

    $.ajax({
        type: "GET",
        url: BASE_URL + "/deploy?local=" + tzOffset,
        success: function (data) {
            myLoader.hideMe();

            // 3. Putting data in variables
            const price_data = data["pricetable"];

            // 4. Render data
            $.each(price_data, function (key, value) {
                pricetable_body.append("<tr><td>g2.2xlarge</td><td>" + key + "</td><td>$" + value + "</td></tr>");
            });
            pricetable.bootstrapTable();

        },
        error: function (e) {
            myLoader.hideMe();
            alert("Unexpected error occured while loading cloud data.");
        }
    });
});