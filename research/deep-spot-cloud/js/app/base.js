/**
 * Created by kde713 on 2017. 5. 1..
 */

const BASE_URL = "https://j1kg8eg5p9.execute-api.us-east-1.amazonaws.com";
var myLoader;

$(window).on('resize', function () {
    if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
});
$(window).on('resize', function () {
    if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
});


myLoader = myLoader || (function () {
        var pleaseWaitDiv = $('#pleaseWaitDialog');
        return {
            showMe: function () {
                pleaseWaitDiv.modal('show');
            },
            hideMe: function () {
                pleaseWaitDiv.modal('hide');
            },

        };
    })();

function shortenString(org_string) {
    if (org_string.length > 15) {
        return org_string.substring(0, 15) + "...";
    }
    return org_string;
}

function shortenNumber(org_number) {

}