var APIKEY;
jQuery(function() {
    jQuery
        .ajax('http://data.planetos.com/account/status/', {dataType: "jsonp"})
        .done(function(data) {
            if (data.apikey) {
                APIKEY = data.apikey;

                jQuery('.apikey-placeholder').each(function() {
                    jQuery(this).text(APIKEY);
                });

                jQuery('.apikey-value-placeholder').each(function() {
                    jQuery(this).val(APIKEY);
                });
            }
        });
});