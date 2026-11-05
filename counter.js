/* VISITOR COUNTER SWITCH.
   GC_CODE is your GoatCounter site code (the part before .goatcounter.com).
   Empty quotes = no counter, and the blog talks to nobody (also how it works when opened offline).
   The counter only runs on the real website, never when you open the files from your computer. */
var GC_CODE = "o1024";

(function () {
  if (!GC_CODE || location.protocol.indexOf("http") !== 0) return;
  var base = "https://" + GC_CODE + ".goatcounter.com";
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", base + "/count");
  document.head.appendChild(s);

  /* Visible total on the home page. Stays hidden unless GoatCounter actually returns the picture
     (it needs "Allow adding visitor counts on your website" ticked in GoatCounter settings). */
  var box = document.getElementById("visits");
  if (!box) return;
  var img = new Image();
  img.alt = "Site visit count";
  img.style.cssText = "display:block;max-width:200px;height:auto";
  img.onload = function () {
    box.appendChild(img);
    var n = document.createElement("small");
    n.textContent = "Site visit count. Not a count of unique people. Updates may be delayed; blockers can prevent counting.";
    n.style.cssText = "display:block;margin-top:6px;color:#9aa0c0;font-size:12px";
    box.appendChild(n);
  };
  img.src = base + "/counter/TOTAL.svg?no_branding=true&style=" +
    encodeURIComponent("#gcvc-border{fill:#181c30;stroke:#2a2f4d}#gcvc{fill:#9aa0c0}");
})();
