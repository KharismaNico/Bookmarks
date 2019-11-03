
function message(text,type) {
	if (type === undefined) {
		type = 'message';
	}
	var n = noty({
		layout: 'bottom',
		text: text,
		theme: 'vector35',
		type: type,
		timeout: 24000,
		animation: {
			open: {height: 'toggle'}, // jQuery animate function property object
			close: {height: 'toggle'}, // jQuery animate function property object
			easing: 'swing', // easing
			speed: 500 // opening & closing animation speed
		}
	});
}

var anchorForId = function (id) {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href      = "#" + id;
  anchor.innerHTML = "<i class=\"fa fa-link\"></i>";
  return anchor;
};

var linkifyAnchors = function (level, containingElement) {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];

    if (typeof header.id !== "undefined" && header.id !== "") {
      header.appendChild(anchorForId(header.id));
    }
  }
};

document.onreadystatechange = function () {
  if (this.readyState === "complete") {
    var contentBlock = document.getElementsByClassName("cd-faq")[0] || document.getElementsByClassName("post")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 6; level++) {
      linkifyAnchors(level, contentBlock);
    }

  }
};

$(document).ready(function() {
  $(`a.nav-link[href="${document.location.pathname}"]`).addClass('active');
  $(".dropdown, .btn-group").hover(function(){
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
        dropdownMenu.parent().toggleClass("open");
    }
  });

  $.getJSON("/js/changelog.js", function(data) {
    var value = data[0];
    var time = new Date(value.time * 1000);
    changelog = $('footer .changelog');
    changelog.append("<h3>" + value.version + " (" + time.toISOString().slice(0,10) + ")</h3>");
    var notes = value.notes.replace(/\n/g, "<br />")
    if (notes.length > 250)
    {
      notes = notes.slice(0,240) + "… (<a href=\"/changelog\">see more</a>)";
    }
    changelog.append("<p>" + notes + "</p>");
    var fullchangelog = $('.service .changelog');
    if (fullchangelog.length == 1)
    {
      $.each(data, function(index, value) {
        var time = new Date(value.time * 1000);
        fullchangelog.append("<h3>" + value.version + " (" + time.toISOString().slice(0,10) + ")</h3>");
        var notes = value.notes.replace(/\n/g, "<br />");
        fullchangelog.append("<p>" + notes + "</p><hr>");
      })
    }
  });
  new LuminousGallery(document.querySelectorAll(".view-screenshot"), { arrowNavigation: true }, {});
  new LuminousGallery(document.querySelectorAll(".il-screenshot"), { arrowNavigation: true }, {});
  new LuminousGallery(document.querySelectorAll(".analysis-screenshot"), { arrowNavigation: true }, {});
  new LuminousGallery(document.querySelectorAll(".api-screenshot"), { arrowNavigation: true }, {});
  new LuminousGallery(document.querySelectorAll(".theme-screenshot"), { arrowNavigation: true }, {caption: (el) => el.href.split('/').reverse()[0].split('.')[0]});
})
