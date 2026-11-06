/* V6 Beta: "Back to the 90s" mode. One button wrecks the decor, one brings it back.
   Same content underneath, and your choice is remembered in this browser.
   Fully local: no network, works from a double-clicked index.html too. */
(function () {
  var KEY = "orion-retro-mode";
  var on = false;
  try { on = window.localStorage.getItem(KEY) === "1"; } catch (e) {}

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "retro.css";
  document.head.appendChild(css);

  var btn = document.createElement("button");
  btn.id = "retro-toggle";
  btn.type = "button";

  function addExtras() {
    if (document.getElementById("retro-extras")) return;
    var wrap = document.querySelector(".wrap") || document.body;

    var box = document.createElement("div");
    box.id = "retro-extras";
    var mq = document.createElement("marquee");
    mq.id = "retro-marquee";
    mq.setAttribute("scrollamount", "6");
    mq.textContent = "*** WELCOME TO ORION'S HOME PAGE ON THE WORLD WIDE WEB *** best viewed in Netscape Navigator 4.0 at 800x600 *** sign my guestbook *** thanks for stopping by, come back soon ***";
    box.appendChild(mq);
    var rb = document.createElement("div");
    rb.id = "retro-rainbow";
    box.appendChild(rb);
    var header = wrap.querySelector("header");
    if (header && header.parentNode) header.parentNode.insertBefore(box, header.nextSibling);
    else wrap.insertBefore(box, wrap.firstChild);

    var foot = document.createElement("div");
    foot.id = "retro-extras-foot";
    var con = document.createElement("div");
    con.id = "retro-construct";
    var img = document.createElement("img");
    img.src = "retro-construction.gif";
    img.alt = "Under construction";
    img.width = 360;
    img.height = 100;
    con.appendChild(img);
    foot.appendChild(con);

    var vc = document.createElement("div");
    vc.style.textAlign = "center";
    vc.appendChild(document.createTextNode("You are visitor number "));
    var cnt = document.createElement("span");
    cnt.id = "retro-visitor";
    cnt.textContent = "001337";
    vc.appendChild(cnt);
    vc.appendChild(document.createElement("br"));
    var gb = document.createElement("span");
    gb.id = "retro-guestbook";
    var gbtn = document.createElement("button");
    gbtn.type = "button";
    gbtn.textContent = "Sign my Guestbook!";
    gbtn.onclick = function () { alert("guestbook.cgi not found\n\n(the 90s are long gone, sorry)"); };
    gb.appendChild(gbtn);
    vc.appendChild(gb);
    foot.appendChild(vc);

    var footer = wrap.querySelector("footer");
    if (footer && footer.parentNode) footer.parentNode.insertBefore(foot, footer);
    else wrap.appendChild(foot);

    var badge = document.createElement("div");
    badge.id = "retro-badge";
    badge.textContent = "BEST VIEWED AT 800x600 - NETSCAPE NOW!";
    document.body.appendChild(badge);
  }

  function removeExtras() {
    ["retro-extras", "retro-extras-foot", "retro-badge"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    });
  }

  function apply() {
    document.documentElement.classList.toggle("retro", on);
    if (on) {
      addExtras();
      btn.textContent = "\u2728 Back to the future";
      btn.title = "Restore normal mode";
    } else {
      removeExtras();
      btn.textContent = "\uD83D\uDCFC Back to the 90s";
      btn.title = "GeoCities mode";
    }
  }

  btn.onclick = function () {
    on = !on;
    try { window.localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
    apply();
  };

  document.body.appendChild(btn);
  apply();
})();
