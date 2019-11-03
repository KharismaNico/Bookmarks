// http://civicrm.org/licensing
// <script> Generated 03 Nov 2019 01:13:34
(function($) {
  // Config settings
  CRM.config.userFramework = "Drupal";
  CRM.config.resourceBase = "https:\/\/my.fsf.org\/sites\/all\/modules\/civicrm\/";
  CRM.config.lcMessages = "en_US";
  CRM.config.locale = "en_US";
  CRM.config.cid = 0;
  $.datepicker._defaults.dateFormat = CRM.config.dateInputFormat = "mm\/dd\/yy";
  CRM.config.timeIs24Hr = true;
  CRM.config.ajaxPopupsEnabled = true;
  CRM.config.allowAlertAutodismissal = true;
  CRM.config.resourceCacheCode = "lp7Di";

  // Merge entityRef settings
  CRM.config.entityRef = $.extend({}, {"filters":{"Contact":[{"key":"contact_type","value":"Contact Type"},{"key":"group","value":"Group","entity":"GroupContact"},{"key":"tag","value":"Tag","entity":"EntityTag"},{"key":"state_province","value":"State\/Province","entity":"Address"},{"key":"country","value":"Country","entity":"Address"},{"key":"gender_id","value":"Gender","condition":{"contact_type":"Individual"}},{"key":"is_deceased","value":"Deceased","condition":{"contact_type":"Individual"}},{"key":"contact_id","value":"Contact ID","type":"text"},{"key":"external_identifier","value":"External ID","type":"text"},{"key":"source","value":"Contact Source","type":"text"}],"Campaign":[{"key":"campaign_type_id","value":"Campaign Type"},{"key":"status_id","value":"Status"},{"key":"start_date","value":"Start Date","options":[{"key":"{\">\":\"now\"}","value":"Upcoming"},{"key":"{\"BETWEEN\":[\"now - 3 month\",\"now\"]}","value":"Past 3 Months"},{"key":"{\"BETWEEN\":[\"now - 6 month\",\"now\"]}","value":"Past 6 Months"},{"key":"{\"BETWEEN\":[\"now - 1 year\",\"now\"]}","value":"Past Year"}]},{"key":"end_date","value":"End Date","options":[{"key":"{\">\":\"now\"}","value":"In the future"},{"key":"{\"<\":\"now\"}","value":"In the past"},{"key":"{\"IS NULL\":\"1\"}","value":"Not set"}]}],"Activity":[{"key":"activity_type_id","value":"Activity Type"},{"key":"status_id","value":"Activity Status"}],"Event":[{"key":"event_type_id","value":"Event Type"},{"key":"start_date","value":"Start Date","options":[{"key":"{\">\":\"now\"}","value":"Upcoming"},{"key":"{\"BETWEEN\":[\"now - 3 month\",\"now\"]}","value":"Past 3 Months"},{"key":"{\"BETWEEN\":[\"now - 6 month\",\"now\"]}","value":"Past 6 Months"},{"key":"{\"BETWEEN\":[\"now - 1 year\",\"now\"]}","value":"Past Year"}]}]},"links":{"Contact":[{"label":"New Household","url":"\/civicrm\/profile\/create?reset=1&context=dialog&gid=6","type":"Household","icon":"fa-home"},{"label":"New Individual","url":"\/civicrm\/profile\/create?reset=1&context=dialog&gid=4","type":"Individual","icon":"fa-user"},{"label":"New Organization","url":"\/civicrm\/profile\/create?reset=1&context=dialog&gid=5","type":"Organization","icon":"fa-building"}]}}, CRM.config.entityRef || {});

  // Initialize CRM.url and CRM.formatMoney
  CRM.url({back: '/civicrm-placeholder-url-path?civicrm-placeholder-url-query=1', front: '/civicrm-placeholder-url-path?civicrm-placeholder-url-query=1'});
  CRM.formatMoney('init', false, "$ 1,234.56");

  // Localize select2
  $.fn.select2.defaults.formatNoMatches = "None found.";
  $.fn.select2.defaults.formatLoadMore = "Loading...";
  $.fn.select2.defaults.formatSearching = "Searching...";
  $.fn.select2.defaults.formatInputTooShort = function() {
    return ($(this).data('api-entity') === 'contact' || $(this).data('api-entity') === 'Contact') ? "Start typing a name..." : "Enter search term...";
  };

  // Localize jQuery UI
  $.ui.dialog.prototype.options.closeText = "Close";

  // Localize jQuery DataTables
  // Note the first two defaults set here aren't localization related,
  // but need to be set globally for all DataTables.
  $.extend( $.fn.dataTable.defaults, {
    "searching": false,
    "jQueryUI": true,
    "language": {
      "emptyTable": "None found.",
      "info":  "Showing _START_ to _END_ of _TOTAL_ entries",
      "infoEmpty": "Showing 0 to 0 of 0 entries",
      "infoFiltered": "(filtered from _MAX_ total entries)",
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": "Show _MENU_ entries",
      "loadingRecords": " ",
      "processing": " ",
      "zeroRecords": "None found.",
      "paginate": {
        "first": "First",
        "last": "Last",
        "next": "Next",
        "previous": "Previous"
      }
    }
  });

  // Localize strings for jQuery.validate
  var messages = {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (YYYY-MM-DD).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: $.validator.format("Please enter no more than {0} characters."),
    minlength: $.validator.format("Please enter at least {0} characters."),
    rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
    range: $.validator.format("Please enter a value between {0} and {1}."),
    max: $.validator.format("Please enter a value less than or equal to {0}."),
    min: $.validator.format("Please enter a value greater than or equal to {0}.")
  };
  $.extend($.validator.messages, messages);
  

  var params = {
    errorClass: 'crm-inline-error',
    messages: {},
    // TODO: remove after resolution of https://github.com/jzaefferer/jquery-validation/pull/1261
    ignore: ":hidden, [readonly]"
  };

  // use civicrm notifications when there are errors
  params.invalidHandler = function(form, validator) {
    // If there is no container for display then red text will still show next to the invalid fields
    // but there will be no overall message. Currently the container is only available on backoffice pages.
    if ($('#crm-notification-container').length) {
      $.each(validator.errorList, function(k, error) {
        $(error.element).crmError(error.message);
      });
    }
  };

  CRM.validate = {
    _defaults: params,
    params: {},
    functions: []
  };

  // Load polyfill
  if (!('Promise' in window)) {
    CRM.loadScript(CRM.config.resourceBase + 'bower_components/es6-promise/es6-promise.auto.min.js');
  }

})(jQuery);

