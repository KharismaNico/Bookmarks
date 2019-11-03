function mkCloseWindow() {

    
    var p1 = document.getElementById("bgCrt");
    p1.parentNode.removeChild(p1);

    var p2 = document.getElementById("ifrm");
    p2.parentNode.removeChild(p2);

    var p3 = document.getElementById("bgM");
    if(p3!=null){
    p3.parentNode.removeChild(p3);
    }

    var p6 = document.getElementById("bgMRoundPoint");
    if (p6 != null) {
        p6.parentNode.removeChild(p6);
    }

    var p4 = document.getElementById("ftM");
    p4.parentNode.removeChild(p4);

    var p5 = document.getElementById("clB");
    p5.parentNode.removeChild(p5);

  
}


function mkListen() {

    if (document.getElementById("bgCrt")) {

        var MKel = document.getElementById("bgCrt");

        if (!document.addEventListener) {
            MKel.attachEvent("onclick", mkCloseWindow, true);
        }
        else {
            MKel.addEventListener("click", mkCloseWindow, true);
        }

    }

}

function mkListenCB() {

    mkCloseWindow();

}


function launchMKD(uCode) {
    if (uCode == "202017") {
        if (confirm("I understand I am leaving the Sunrise Bank site for this service.")) {
        } else {
            return false;
        }
    }

    if (uCode.length == 6) {

        ifrm = document.createElement("IFRAME");
        //ifrm.setAttribute("src", "http://dev.mortgagekeeper.org/MK30/MK31.asp?uCode=" + uCode);
        if (uCode == "473621") {
            alert(uCode);
            ifrm.setAttribute("src", "https://s4desktop.com/MK30/MK31RP.asp?uCode=" + uCode);
        }
        else{
            ifrm.setAttribute("src", "https://s4desktop.com/MK30/MK31-new.asp?uCode=" + uCode);
        }
        ifrm.setAttribute("scrolling", "no");
        //ifrm.style.width = 560+"px"; 
        //ifrm.style.height = 380+"px";
        //ifrm.style.margin = "auto";
        //ifrm.style.border = "0px";
        //ifrm.style.padding = "0px";
        //ifrm.style.overflow = "hidden";
        //ifrm.style.position = "absolute";
        //ifrm.style.zIndex = "999";
        //ifrm.style.marginLeft = "-285px";
        //ifrm.style.left = "50%";
        //ifrm.style.top = "184px";
        ifrm.setAttribute("allowTransparency", "true");
        ifrm.setAttribute("frameBorder", "0");
        ifrm.setAttribute("id", "ifrm");

        if (uCode == "878956") {
            clB = document.createElement("DIV");
            clB.setAttribute("id", "clB");
        }
        else {
            clB = document.createElement("DIV");
            clB.setAttribute("id", "clB");
        }
       // clB = document.createElement("DIV");
        //clB.style.width = 26+"px"; 
        //clB.style.height = 26+"px";
        //clB.style.margin = "auto";
        //clB.style.border = "0px";
        //clB.style.padding = "0px";
        //clB.style.left = "50%";
        //clB.style.marginLeft = "262px";
        //clB.style.top = "172px";
        //clB.style.position = "absolute";
        //clB.style.zIndex = "999";
        //clB.style.cursor = "pointer";
        //clB.style.backgroundImage = "url('http://dev.mortgagekeeper.org/MK30/btnClose.png')";
        //clB.setAttribute("id", "clB");

      
        //bgM.style.width = 666+"px"; 
        // bgM.style.height = 486+"px";
        //bgM.style.margin = "auto";
        //bgM.style.border = "0px";
        //bgM.style.padding = "0px";
        //bgM.style.marginLeft = "-333px";
        //bgM.style.left = "50%";
        //bgM.style.top = "140px";
        //bgM.style.position = "absolute";
        //bgM.style.zIndex = "990";
        //bgM.style.backgroundImage = "url('http://dev.mortgagekeeper.org/MK30/bgM.png')";
        if (ucode == "473621") {
            bgM = document.createElement("DIV");
            bgM.setAttribute("id", "bgMRoundPoint");
        }else{
        bgM = document.createElement("DIV");
        bgM.setAttribute("id", "bgM");
        }
        ftM = document.createElement("DIV");
        //ftM.style.width = 560+"px"; 
        //ftM.style.height = 30+"px";
        //ftM.style.margin = "auto";
        //ftM.style.border = "0px";
        //ftM.style.padding = "0px";
        //ftM.style.marginLeft = "-285px";
        //ftM.style.left = "50%";
        //ftM.style.top = "574px";
        //ftM.style.position = "absolute";
        //bgM.style.zIndex = "999";
        ftM.setAttribute("id", "ftM");
        ftM.innerHTML = "<div style='font-size:9px; z-index:999; color:#000000; font-family:trebuchet ms,helvetica,arial; float:left;'>&#169;2019 MortgageKeeper Referral Services | All Rights Reserved</div><div style='font-size:9px; font-family:trebuchet ms,helvetica,arial;  float:right'></div>";

        bgCrt = document.createElement("DIV");
        //bgCrt.style.width = "100%";
        //bgCrt.style.height = document.body.scrollHeight + 'px';
        //bgCrt.style.margin = "0";
        //bgCrt.style.top = "0";
        //bgCrt.style.left = "0";
        //bgCrt.style.backgroundColor = "#dfeef6";
        //bgCrt.style.position = "absolute";
        //bgCrt.style.zIndex = "99";
        bgCrt.setAttribute("id", "bgCrt");
        bgCrt.style.opacity = ".8";
        bgCrt.style.filter = "alpha(opacity=80)";
        if (uCode == "473621") {
            document.body.appendChild(bgMRoundPoint);
        }
        else {
            document.body.appendChild(bgM);
        }
        
        document.body.appendChild(bgCrt);
        document.body.appendChild(ifrm);
        document.body.appendChild(ftM);
        document.body.appendChild(clB);



        if (!document.addEventListener) {
            document.getElementById("clB").attachEvent("onclick", mkListenCB);
            document.attachEvent("onclick", mkListen);
        }
        else {
            if (uCode == "878956") {
                document.getElementById("clB").addEventListener("click", mkListenCB, false);
                document.addEventListener("click", mkListen, false);
            }
            else {
                document.getElementById("clB").addEventListener("click", mkListenCB, true);
                document.addEventListener("click", mkListen, true);
            }
        }
//3-13-19 TJC focus so works better on mobile
        document.getElementById("bgCrt").scrollIntoView();
        setTimeout(function () {
            document.getElementById("bgCrt").scrollIntoView();
        }, 500);
    }
}

function launchMKD(uCode, zipcode) {
    if (uCode == "202017") {
        if (confirm("I understand I am leaving the Sunrise Bank site for this service.")) {
        } else {
            return false;
        }
    }
    
    if (uCode.length == 6) {        
        ifrm = document.createElement("IFRAME");
        //ifrm.setAttribute("src", "http://dev.mortgagekeeper.org/MK30/MK31.asp?uCode=" + uCode);
        if (uCode == "473621") {
            
            ifrm.setAttribute("src", "https://s4desktop.com/MK30/MK31RP.asp?uCode=" + uCode);
        }
        else {
            ifrm.setAttribute("src", "https://s4desktop.com/MK30/MK31-new.asp?uCode=" + uCode);
        }
       
        ifrm.setAttribute("scrolling", "no");
        //ifrm.style.width = 560+"px"; 
        //ifrm.style.height = 380+"px";
        //ifrm.style.margin = "auto";
        //ifrm.style.border = "0px";
        //ifrm.style.padding = "0px";
        //ifrm.style.overflow = "hidden";
        //ifrm.style.position = "absolute";
        //ifrm.style.zIndex = "999";
        //ifrm.style.marginLeft = "-285px";
        //ifrm.style.left = "50%";
        //ifrm.style.top = "184px";
        ifrm.setAttribute("allowTransparency", "true");
        ifrm.setAttribute("frameBorder", "0");
        ifrm.setAttribute("id", "ifrm");

        if (uCode == "878956") {
            clB = document.createElement("DIV");
            clB.setAttribute("id", "clB");
        }
        else {
            clB = document.createElement("DIV");
            clB.setAttribute("id", "clB");
        }
        // clB = document.createElement("DIV");
        //clB.style.width = 26+"px"; 
        //clB.style.height = 26+"px";
        //clB.style.margin = "auto";
        //clB.style.border = "0px";
        //clB.style.padding = "0px";
        //clB.style.left = "50%";
        //clB.style.marginLeft = "262px";
        //clB.style.top = "172px";
        //clB.style.position = "absolute";
        //clB.style.zIndex = "999";
        //clB.style.cursor = "pointer";
        //clB.style.backgroundImage = "url('http://dev.mortgagekeeper.org/MK30/btnClose.png')";
        //clB.setAttribute("id", "clB");
        
        //bgM = document.createElement("DIV");
        //bgM.style.width = 666+"px"; 
        // bgM.style.height = 486+"px";
        //bgM.style.margin = "auto";
        //bgM.style.border = "0px";
        //bgM.style.padding = "0px";
        //bgM.style.marginLeft = "-333px";
        //bgM.style.left = "50%";
        //bgM.style.top = "140px";
        //bgM.style.position = "absolute";
        //bgM.style.zIndex = "990";
        //bgM.style.backgroundImage = "url('http://dev.mortgagekeeper.org/MK30/bgM.png')";
        //bgM.setAttribute("id", "bgM");
        if (uCode == "473621") {
            bgM = document.createElement("DIV");
            bgM.setAttribute("id", "bgMRoundPoint");
        } else {
            bgM = document.createElement("DIV");
            bgM.setAttribute("id", "bgM");
       }

        ftM = document.createElement("DIV");
        //ftM.style.width = 560+"px"; 
        //ftM.style.height = 30+"px";
        //ftM.style.margin = "auto";
        //ftM.style.border = "0px";
        //ftM.style.padding = "0px";
        //ftM.style.marginLeft = "-285px";
        //ftM.style.left = "50%";
        //ftM.style.top = "574px";
        //ftM.style.position = "absolute";
        //bgM.style.zIndex = "999";
        ftM.setAttribute("id", "ftM");
        ftM.innerHTML = "<div style='font-size:9px; z-index:999; color:#000000; font-family:trebuchet ms,helvetica,arial; float:left;'>&#169;2019 MortgageKeeper Referral Services | All Rights Reserved</div><div style='font-size:9px; font-family:trebuchet ms,helvetica,arial;  float:right'></div>";

        bgCrt = document.createElement("DIV");
        //bgCrt.style.width = "100%";
        //bgCrt.style.height = document.body.scrollHeight + 'px';
        //bgCrt.style.margin = "0";
        //bgCrt.style.top = "0";
        //bgCrt.style.left = "0";
        //bgCrt.style.backgroundColor = "#dfeef6";
        //bgCrt.style.position = "absolute";
        //bgCrt.style.zIndex = "99";
        bgCrt.setAttribute("id", "bgCrt");
        bgCrt.style.opacity = ".8";
        bgCrt.style.filter = "alpha(opacity=80)";

        if (uCode == "473621") {
            document.body.appendChild(bgM);
        }
        else {
            document.body.appendChild(bgM);
        }

        document.body.appendChild(bgCrt);
        document.body.appendChild(ifrm);
        //Experiment
        
        //Experiment Completed
        document.body.appendChild(ftM);
        document.body.appendChild(clB);



        if (!document.addEventListener) {
            document.getElementById("clB").attachEvent("onclick", mkListenCB);
            document.attachEvent("onclick", mkListen);
        }
        else {
            if (uCode == "878956") {
                document.getElementById("clB").addEventListener("click", mkListenCB, false);
                document.addEventListener("click", mkListen, false);
            }
            else {
                document.getElementById("clB").addEventListener("click", mkListenCB, true);
                document.addEventListener("click", mkListen, true);
            }
        }
//3-13-19 TJC focus so works better on mobile
        document.getElementById("bgCrt").scrollIntoView();
        setTimeout(function () {
            document.getElementById("bgCrt").scrollIntoView();
        }, 500);
    }
}