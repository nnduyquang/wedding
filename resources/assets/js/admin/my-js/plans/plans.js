/**
 * Created by nnduy on 04/11/2016.
 */
$(document).ready(function () {
    var token = $('meta[name="csrf-token"]').attr('content');

    function getBaseURL() {
        var url = location.href;  // entire url including querystring - also: window.location.href;
        var baseURL = url.substring(0, url.indexOf('/', 14));
        if (baseURL.indexOf('http://localhost') != -1) {
            // Base Url for localhost
            var url = location.href;  // window.location.href;
            var pathname = location.pathname;  // window.location.pathname;
            var index1 = url.indexOf(pathname);
            var index2 = url.indexOf("/", index1 + 1);
            var baseLocalUrl = url.substr(0, index2);
            return baseLocalUrl + "/";
        }
        else {
            // Root Url for domain name
            return baseURL + "/";
        }

    }
    $('#tags').tokenfield({
        autocomplete: {
            // source: function(query, process){
            //     return $.ajax({
            //         url: $(this)[0].$element[0].dataset.link,
            //         type: 'get',
            //         data: {query: query},
            //         dataType: 'json',
            //         success: function(json) {
            //             return typeof json.options == 'undefined' ? false : process(json.options);
            //         }
            //     });
            // },
            source:['red','blue','green','yellow','violet','brown','purple','black','white'],
            delay: 100
        },
        showAutocompleteOnFocus: true
    })
    // ['red','blue','green','yellow','violet','brown','purple','black','white'],

});
