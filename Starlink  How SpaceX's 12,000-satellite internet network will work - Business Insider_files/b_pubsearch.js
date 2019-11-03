

(function () {
    const pc = "&pubcode=" + pubcode;
    const partner = "&pt=opennews";

    const initUrl = "https://www.bing.com/as/init?mkt=en-us&refig=3139594c979f425da0ec4c81a6a587371&onload=1" + pc + partner;

    var request = new XMLHttpRequest();
    request.open("get", initUrl, true); 

    request["onreadystatechange"] = function () {
        if (request.readyState === 4) {
            var scriptTag = document.createElement("script");
            scriptTag["type"] = 'text/javascript';
            scriptTag.setAttribute("data-rms", "1");
            scriptTag.text = request.response;
            document.body.appendChild(scriptTag);
        }
    };

    request.send();

    var font = document.createElement('link');
    font.href = 'https://fonts.googleapis.com/css?family=Roboto';
    font.rel = 'stylesheet';
    font.type = 'text/css';
    document.head.appendChild(font);

    var searchbox = document.getElementById('sb_form_q');
    searchbox.focus();
})();