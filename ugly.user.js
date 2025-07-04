// ==UserScript==
// @name         Main Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds action buttons to the table for site redirect, alert PCE and SIREN, mailto with PCE, and relancer
// @author       You
// @match        https://watt-else.pro/*
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==

(function (p, q) {
  const pl = t;
  const R = p();
  while (!![]) {
    try {
      const K =
        parseInt(pl(0x1cd)) / (0x1bd7 * -0x1 + 0x1 * 0x9f5 + -0x11e3 * -0x1) +
        parseInt(pl(0x18e)) / (-0x1005 * -0x1 + -0x1486 + 0x483) +
        (-parseInt(pl(0x216)) / (-0xfad + 0x1064 + -0x1 * 0xb4)) *
          (-parseInt(pl(0x235)) / (0x101 * -0x13 + 0xf1 * -0x26 + 0x36dd)) +
        parseInt(pl(0x20a)) / (-0xadf + -0x1 * -0x781 + 0x363) +
        (parseInt(pl(0x15b)) / (-0x49 * -0x33 + 0x11 * 0x22b + 0x6 * -0x890)) *
          (parseInt(pl(0x15c)) / (-0xb * -0x33d + 0x15 * 0x61 + -0x2b8d)) +
        (-parseInt(pl(0x1b5)) / (-0xe9a + -0x253d + -0x7 * -0x769)) *
          (-parseInt(pl(0x219)) / (-0x1 * -0x2203 + -0x400 + -0x9fe * 0x3)) +
        -parseInt(pl(0x243)) / (-0x1a33 + 0x58d + 0x14b0);
      if (K === q) {
        break;
      } else {
        R["push"](R["shift"]());
      }
    } catch (j) {
      R["push"](R["shift"]());
    }
  }
})(M, 0xe5103 + -0x6 * 0x76a4 + -0x3271a);
function M() {
  const W5 = [
    "responseText",
    "action-buttons-added",
    "input[value=\x22mandat\x20KO\x22]",
    "Mono\x20site\x20:\x20PCE\x20non\x20mentionné",
    "text",
    "sorting",
    "none",
    "console",
    ".action-buttons-added\x20.btn-danger",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "btn\x20btn-sm\x20btn-danger",
    "input[type=\x22checkbox\x22]",
    "target",
    "change_mandat_status",
    "Mandat\x20illisible",
    "X-CSRF-TOKEN",
    "tr.heading\x20[name=\x22actions\x22]",
    "Mandat\x20absent",
    "fetch",
    "#uc2m_token2",
    "className",
    "e-mail\x20OK",
    "apply",
    "bind",
    ".btn.default.btn-outline.nolock",
    "closest",
    "map",
    "label",
    "Date\x20de\x20mandat\x20expiré",
    "href",
    "contains",
    "XMLHttpRequest",
    "includes",
    "open",
    "/statut_mandat",
    "Failed\x20to\x20save\x20KO\x20motives.\x20Server\x20returned\x20an\x20error.",
    "GET",
    "name",
    "querySelectorAll",
    "object",
    "type",
    "Table\x20disappeared,\x20will\x20try\x20again\x20later",
    "statut-mandat-dropdown",
    "à\x20vérifier",
    "Failed\x20to\x20save\x20KO\x20motives:\x20",
    "Failed\x20to\x20save\x20statut\x20mandat.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details.",
    "Table\x20not\x20found,\x20retrying\x20in\x20500ms...",
    "undefined",
    "<html",
    "Failed\x20to\x20save\x20statut\x20mandat:",
    "detail",
    "true",
    "1px",
    "mandat\x20KO",
    "2336120tUjvpu",
    "input[type=\x22checkbox\x22]:checked",
    "debu",
    "Sélectionner\x20motifs",
    "some",
    "Could\x20not\x20find\x20the\x20associated\x20row!",
    "Table\x20observer\x20setup\x20complete",
    ".action-buttons-added",
    "td:nth-of-type(4)",
    "credentials",
    "⛔\x20Cette\x20affaire\x20est\x20supprimée",
    "tr.heading",
    "3JDsfsN",
    "auto",
    "button",
    "31401zogFOi",
    "message",
    "Relancer",
    "string",
    "td:nth-of-type(9)",
    "startsWith",
    "classList",
    "error",
    "Selected\x20motives:",
    ".statut-mandat-dropdown",
    "status",
    "Error\x20setting\x20up\x20the\x20request:\x20",
    "mydatatable",
    "querySelector",
    "textContent",
    "Failed\x20to\x20fetch\x20",
    "Failed\x20to\x20save\x20KO\x20motives:",
    "headers",
    "motifs_ko[]",
    "value",
    "Actions",
    "Reset\x20selectedMotives\x20array\x20for\x20KO\x20motives\x20dropdown",
    "hasAttribute",
    "Processed\x20result:",
    "mandat\x20OK",
    "getElementById",
    "innerHTML",
    "DOMContentLoaded",
    "3314548esVXAj",
    "result",
    "Error\x20setting\x20up\x20the\x20relance\x20request:\x20",
    "call",
    "Failed\x20to\x20save\x20statut\x20mandat:\x20",
    "gger",
    "function\x20*\x5c(\x20*\x5c)",
    "forEach",
    "childList",
    "stateObject",
    "parentNode",
    "btn\x20btn-sm\x20btn-info",
    "Error\x20setting\x20up\x20fetch\x20request\x20for\x20relance:",
    "display",
    "16184110BYmLfh",
    "Loading...",
    "title",
    "X-Requested-With",
    "table",
    "Elements\x20enabled.\x20Still\x20watching\x20for\x20new\x20elements.",
    "&body=",
    "Sélectionner\x20statut",
    "Making\x20request\x20to:",
    "Mandat",
    "div",
    "head",
    "Failed\x20to\x20relance\x20mandat\x20KO:",
    "Mandat\x20non\x20signé",
    "With\x20payload:",
    "Auto-updated\x20status\x20to\x20\x27mandat\x20KO\x27\x20due\x20to\x20KO\x20motives\x20selection",
    "statut-mandat-dropbtn",
    "onclick",
    "radio",
    "https://watt-else.pro/opportunite/",
    "input",
    "motif_ko_autre",
    "https://energy-retail-france.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=a3R&sen=a1S&sen=a35&sen=a46&sen=a26&sen=a4b&sen=00O&sen=001&sen=a0b&sen=003&sen=00T&sen=a1E&sen=500&sen=00U&sen=005&sen=a0C&sen=006&sen=a0E&sen=800&sen=a3O&sen=a0N&sen=a3Q&str=",
    "Veuillez\x20sélectionner\x20un\x20statut!",
    "parseFromString",
    "colspan",
    "appendChild",
    "toggle",
    "while\x20(true)\x20{}",
    "Mandat\x20de\x20récupération\x20des\x20données",
    "200px",
    "style",
    "toString",
    "1280490OgwNvM",
    "14YoEvHz",
    "readyState",
    "Le\x20courtier\x20n\x27a\x20pas\x20été\x20notifié.\x20Veuillez\x20essayer\x20une\x20autre\x20méthode\x20de\x20communication.",
    "Relance...",
    "PCE\x20mentionné\x20différent\x20du\x20PCE\x20consulté",
    "find",
    "length",
    "VI-",
    "btn\x20btn-sm\x20btn-warning\x20mandat-button",
    "dataset",
    "data-src",
    "now",
    "finally",
    "Authentication\x20issue.\x20You\x20may\x20need\x20to\x20refresh\x20the\x20page\x20and\x20log\x20in\x20again.",
    "parse",
    "&subject=",
    "log",
    "counter",
    "Le\x20courtier\x20n\x27a\x20pas\x20été\x20notifié.\x20Erreur\x20du\x20serveur.",
    "\x20ko-motives-select-added",
    "characterData",
    "Autre",
    "Processed\x20relance\x20result:",
    "warn",
    "createTextNode",
    "Failed!",
    "Failed\x20to\x20save\x20KO\x20motives.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details.",
    "substring",
    "td:nth-of-type(6)\x20a",
    "margin",
    "Raw\x20response:",
    "__proto__",
    "&initialViewMode=summary",
    "actions",
    "btn\x20btn-sm\x20btn-primary",
    "click",
    "...",
    "\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "init",
    "Saving...",
    "Success!",
    "\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown,\x20.statut-mandat-dropdown\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20button\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropbtn,\x20.statut-mandat-dropbtn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f8f9fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ced4da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20content\x20(hidden\x20by\x20default)\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content,\x20.statut-mandat-dropdown-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2016px\x200\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Show\x20the\x20dropdown\x20menu\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content.show,\x20.statut-mandat-dropdown-content.show\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Checkbox\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20label,\x20.statut-mandat-dropdown-content\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#f1f1f1;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20label:hover,\x20.statut-mandat-dropdown-content\x20label:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f1f1f1;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Checkbox\x20style\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20input[type=\x22checkbox\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertical-align:\x20middle;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Save\x20button\x20style\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-save-btn,\x20.statut-mandat-save-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#007bff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0069d9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20.ko-motives-save-btn:hover,\x20.statut-mandat-save-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#0069d9;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Make\x20the\x20motives\x20cell\x20visible\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20td:nth-of-type(10)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20/*\x20Make\x20the\x20statut\x20mandat\x20cell\x20visible\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20td:nth-of-type(9)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20th[name=\x22statut_mandat_motifs_ko\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20180px\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20th[name=\x22statut_mandat_pfo\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20120px\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Adjust\x20the\x20column\x20header\x20for\x20the\x20filter\x20row\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20tr.filter\x20th:nth-of-type(10),\x20#mydatatable\x20tr.filter\x20th:nth-of-type(9)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
    "action",
    "push",
    "then",
    "include",
    "info",
    "Error\x20fetching\x20mandat\x20link:",
    "Changed\x20to\x20mandat\x20KO\x20status,\x20KO\x20motives\x20should\x20be\x20editable",
    "getAttribute",
    "794198bCoPXf",
    "Failed\x20to\x20relance\x20mandat\x20KO.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details.",
    "subtree",
    "catch",
    "block",
    "Content-Type",
    "pfo_relance_btn",
    ".btn-danger",
    "match",
    "data",
    "toLowerCase",
    "POST",
    "constructor",
    "append",
    "_blank",
    "Initial\x20table\x20processing\x20complete",
    "disabled",
    "setAttribute",
    "/relance_mandat_ko",
    "createElement",
    "observe",
    ".mt-overlay",
    "statut_mandat_pfo",
    "cors",
    "remove",
    "show",
    "ko-motives-dropbtn",
    "rowspan",
    "Bonjour,%0D%0A%0D%0AVeuillez\x20trouver\x20ci-joint\x20le\x20mandat\x20du\x20client\x20",
    "exception",
    "flex",
    ".mandat-button",
    "Error!",
    "Error\x20setting\x20up\x20fetch\x20request:",
    "false",
    "addEventListener",
    "return\x20(function()\x20",
    "Enregistrer",
    "Could\x20not\x20extract\x20opportunity\x20ID\x20from\x20the\x20URL:\x20",
    "8InXXXi",
    "Failed\x20to\x20save\x20statut\x20mandat.\x20Server\x20returned\x20an\x20error.",
    "select[name=\x22mandat_motifs_ko[]\x22]",
    "Date\x20de\x201ère\x20consultation\x20GRDF\x20antérieure\x20à\x20date\x20du\x20mandat",
    "stopPropagation",
    "checked",
    "tbody\x20tr",
    "EMAIL",
    "test",
    "Relance\x20response\x20status:",
    ".statut-mandat-dropbtn",
    "[name=\x22actions\x22]",
    "Mail\x20non\x20valable\x20:\x20retransfert\x20de\x20mail",
    "td:nth-of-type(10)",
    "width",
    "pathname",
    "2px",
    "col",
    "input[name=\x22statut-mandat\x22]:checked",
    ".ko-motives-dropdown",
    "location",
    "Could\x20not\x20find\x20the\x20site\x20URL!",
    "mode",
    "search",
    "44525FYTbGi",
    "join",
    "(((.+)+)+)+$",
    ".ko-motives-dropbtn",
    "gap",
    "trim",
    "Header\x20was\x20removed,\x20resetting\x20headerAdded\x20flag",
  ];
  M = function () {
    return W5;
  };
  return M();
}
function t(p, q) {
  const W = M();
  t = function (R, K) {
    R = R - (-0x138f * 0x1 + 0x1b2b + 0x64c * -0x1);
    let j = W[R];
    return j;
  };
  return t(p, q);
}
function w() {
  "use strict";
  const pY = t;
  let N = ![];
  let u = ![];
  const s = {};
  s["value"] = pY(0x1ff);
  s[pY(0x1d8)] = pY(0x1ff);
  const Q = {};
  Q[pY(0x22c)] = pY(0x231);
  Q[pY(0x1d8)] = "mandat\x20OK";
  const V = {};
  V[pY(0x22c)] = pY(0x1e9);
  V[pY(0x1d8)] = "e-mail\x20OK";
  const m = {};
  m[pY(0x22c)] = pY(0x209);
  m[pY(0x1d8)] = pY(0x209);
  const b = [s, Q, V, m];
  const z = {};
  z[pY(0x22c)] = "A";
  z["text"] = pY(0x1e5);
  const e = {};
  e[pY(0x22c)] = "B";
  e["text"] = pY(0x1d7);
  const U = {};
  U[pY(0x22c)] = "C";
  U[pY(0x1d8)] = "Multisites\x20:\x20PCE\x20non\x20mentionnés";
  const X = {};
  X[pY(0x22c)] = "D";
  X[pY(0x1d8)] = pY(0x160);
  const l = {};
  l["value"] = "E";
  l["text"] = pY(0x250);
  const Y = {};
  Y[pY(0x22c)] = "F";
  Y[pY(0x1d8)] = "Mandat\x20non\x20daté";
  const d = {};
  d[pY(0x22c)] = "G";
  d[pY(0x1d8)] = pY(0x1e2);
  const A = {};
  A[pY(0x22c)] = "H";
  A[pY(0x1d8)] =
    "Mail\x20non\x20valable\x20:\x20absence\x20d\x27autorisation\x20explicite";
  const G = {};
  G["value"] = "I";
  G[pY(0x1d8)] = pY(0x1c1);
  const F = {};
  F[pY(0x22c)] = "J";
  F[pY(0x1d8)] =
    "Mail\x20non\x20valable\x20:\x20absence\x20de\x20signature\x20du\x20client\x20dans\x20le\x20mail";
  const I = {};
  I[pY(0x22c)] = "L";
  I[pY(0x1d8)] = pY(0x1b8);
  const k = {};
  k[pY(0x22c)] = "O";
  k[pY(0x1d8)] = pY(0x1f0);
  const T = {};
  T[pY(0x22c)] = "P";
  T[pY(0x1d8)] = "Mandat\x20non\x20applicable\x20au\x20gaz";
  const i = {};
  i[pY(0x22c)] = "K";
  i[pY(0x1d8)] = pY(0x171);
  const H = [z, e, U, X, l, Y, d, A, G, F, I, k, T, i];
  function p0() {
    const pd = pY;
    const pW = document[pd(0x1a1)](pd(0x159));
    pW[pd(0x227)] = pd(0x185);
    document[pd(0x24e)]["appendChild"](pW);
  }
  function p1(pW) {
    const pA = pY;
    const pR = [];
    if (pW) {
      H[pA(0x23c)]((pg) => {
        const pG = pA;
        if (pW["includes"](pg[pG(0x1d8)])) {
          pR[pG(0x187)](pg[pG(0x22c)]);
        }
      });
    }
    const pK = document[pA(0x1a1)](pA(0x24d));
    pK[pA(0x1e8)] = "ko-motives-dropdown";
    const pj = function (pg) {
      const pF = pA;
      if (pg[pF(0x206)] && pg[pF(0x206)]["J"] === pK) {
        pR[pF(0x162)] = 0x26a1 + -0x1 * -0x358 + 0x23 * -0x133;
        console[pF(0x16c)](pF(0x22e));
      }
    };
    document["addEventListener"]("resetSelectedMotives", pj);
    pK[pA(0x165)]["g"] = Date[pA(0x167)]()[pA(0x15a)]();
    const pM = document["createElement"](pA(0x218));
    pM["className"] = pA(0x1a8);
    if (pR[pA(0x162)] > 0x12e * 0x2 + 0xa4c + -0x32a * 0x4) {
      const pg = pR[pA(0x1ee)]((pO) => {
        const pI = pA;
        const pC = H["find"]((pS) => pS["value"] === pO);
        return pC ? pC[pI(0x1d8)] : "";
      })["filter"]((pO) => pO);
      const pc = pg[pA(0x1ce)](",\x20");
      const px = -0xc * -0x21d + 0x1 * 0xb81 + 0x24b0 * -0x1;
      pM["textContent"] =
        pc[pA(0x162)] > px
          ? pc[pA(0x177)](-0x18da * -0x1 + -0x12ef + -0x5eb, px) + pA(0x180)
          : pc;
      pM[pA(0x245)] = pg[pA(0x1ce)](",\x20");
    } else {
      pM["textContent"] = pA(0x20d);
    }
    pM[pA(0x1fc)] = pA(0x218);
    pK[pA(0x154)](pM);
    const pt = document[pA(0x1a1)](pA(0x24d));
    pt["className"] = "ko-motives-dropdown-content";
    H["forEach"]((pO) => {
      const pk = pA;
      const pC = document[pk(0x1a1)](pk(0x1ef));
      const pS = document[pk(0x1a1)](pk(0x257));
      pS[pk(0x1fc)] = "checkbox";
      pS[pk(0x22c)] = pO[pk(0x22c)];
      pS["dataset"][pk(0x1d8)] = pO[pk(0x1d8)];
      if (pR["includes"](pO[pk(0x22c)])) {
        pS["checked"] = !![];
      }
      pS[pk(0x1b1)]("change", function () {
        const pT = pk;
        if (pK["dataset"]["c"] === pT(0x207)) {
          pK["dataset"]["c"] = pT(0x1b0);
          pR[pT(0x162)] = -0x2 * -0x423 + 0x13 * 0x17f + -0x1 * 0x24b3;
        }
        const pE = pt["querySelectorAll"](pT(0x1df));
        const pP = [];
        const pB = [];
        pE[pT(0x23c)]((pn) => {
          const pi = pT;
          if (pn[pi(0x1ba)]) {
            pP["push"](pn[pi(0x22c)]);
            pB[pi(0x187)](pn[pi(0x165)][pi(0x1d8)]);
          }
        });
        if (pB[pT(0x162)] > 0x23cf + 0xd3d + 0x2 * -0x1886) {
          const pn = pB["join"](",\x20");
          const py = 0x1410 + 0xd1e + 0x2101 * -0x1;
          pM[pT(0x227)] =
            pn[pT(0x162)] > py
              ? pn[pT(0x177)](0x83 + -0x846 + 0x7c3, py) + pT(0x180)
              : pn;
          pM["title"] = pB[pT(0x1ce)](",\x20");
          const ph =
            pR[pT(0x162)] !== pP[pT(0x162)] ||
            pP[pT(0x20e)]((pD) => !pR[pT(0x1f4)](pD));
          if (ph) {
            pJ["style"][pT(0x242)] = pT(0x192);
            pJ[pT(0x227)] = "Enregistrer";
            pJ[pT(0x19e)] = ![];
          } else {
            pJ[pT(0x159)][pT(0x242)] = pT(0x1da);
          }
        } else {
          pM[pT(0x227)] = "Sélectionner\x20motifs";
          pM[pT(0x245)] = "";
          if (pR[pT(0x162)] > 0x2 * -0x116e + -0x132a + 0xa * 0x567) {
            pJ[pT(0x159)][pT(0x242)] = pT(0x192);
            pJ[pT(0x227)] = pT(0x1b3);
            pJ[pT(0x19e)] = ![];
          } else {
            pJ[pT(0x159)][pT(0x242)] = pT(0x1da);
          }
        }
        console[pT(0x16c)](pT(0x221), pB);
      });
      pC[pk(0x154)](pS);
      pC["appendChild"](document[pk(0x174)]("\x20" + pO[pk(0x1d8)]));
      pt[pk(0x154)](pC);
    });
    pK["appendChild"](pt);
    const pJ = document[pA(0x1a1)](pA(0x218));
    pJ["className"] = "ko-motives-save-btn";
    pJ["textContent"] = pA(0x1b3);
    pJ[pA(0x1fc)] = pA(0x218);
    pJ[pA(0x159)][pA(0x242)] = pA(0x1da);
    pJ[pA(0x1b1)](pA(0x17f), function () {
      const pH = pA;
      const pO = pt["querySelectorAll"](pH(0x1df));
      const pC = [];
      pO[pH(0x23c)]((pa) => {
        const q0 = pH;
        if (pa[q0(0x1ba)]) {
          pC[q0(0x187)](pa[q0(0x22c)]);
        }
      });
      const pS = pK[pH(0x1ed)]("tr");
      if (!pS) {
        alert(pH(0x20f));
        return;
      }
      const pE = pS["querySelector"](pH(0x178));
      if (!pE || !pE[pH(0x1f1)]) {
        alert("Could\x20not\x20find\x20the\x20site\x20URL!");
        return;
      }
      const pP = pE[pH(0x1f1)];
      const pB = pP["match"](/\/opportunite\/([^\/]+)\/site/);
      if (!pB || !pB[-0x26f + -0x1f3c + 0x5 * 0x6bc]) {
        alert(pH(0x1b4) + pP);
        return;
      }
      const pn = pB[-0x24f4 + -0x7f7 * 0x1 + 0x2cec];
      const py = pH(0x256) + pn + "/statut_mandat";
      let ph = new URLSearchParams();
      ph[pH(0x19b)]("statut_mandat_pfo", pH(0x209));
      pC["forEach"]((pa) => {
        const q1 = pH;
        ph[q1(0x19b)](q1(0x22b), pa);
      });
      ph["append"](pH(0x258), "");
      console[pH(0x16c)](pH(0x24b), py);
      console[pH(0x16c)](pH(0x251), ph[pH(0x15a)]());
      pJ[pH(0x227)] = pH(0x183);
      pJ[pH(0x19e)] = !![];
      const pD = document[pH(0x226)]("#uc2m_token2")?.["value"] || "";
      try {
        const pa = new Headers();
        pa[pH(0x19b)](pH(0x193), pH(0x1dd));
        pa[pH(0x19b)](pH(0x246), pH(0x1f3));
        pa["append"]("X-CSRF-TOKEN", pD);
        const pf = {
          method: pH(0x199),
          headers: pa,
          body: ph[pH(0x15a)](),
          credentials: "include",
          mode: pH(0x1a5),
        };
        const po =
          typeof unsafeWindow !== "undefined"
            ? unsafeWindow[pH(0x1e6)](py, pf)
            : window[pH(0x1e6)](py, pf);
        po[pH(0x188)]((pL) => {
          const q2 = pH;
          console[q2(0x16c)](
            "Response\x20status:",
            pL[q2(0x223)],
            pL["statusText"]
          );
          return pL[q2(0x1d8)]()["then"]((pr) => {
            const q3 = q2;
            console[q3(0x16c)](q3(0x17a), pr);
            try {
              return {
                ok: pL["ok"],
                status: pL[q3(0x223)],
                data: pr[q3(0x21e)]("{") ? JSON[q3(0x16a)](pr) : pr,
              };
            } catch (pN) {
              const pu = {};
              pu["ok"] = pL["ok"];
              pu[q3(0x223)] = pL["status"];
              pu["data"] = pr;
              return pu;
            }
          });
        })
          ["then"]((pL) => {
            const q7 = pH;
            console["log"]("Processed\x20result:", pL);
            if (pL["ok"]) {
              pJ["textContent"] = "Success!";
              setTimeout(function () {
                const q4 = t;
                pJ[q4(0x159)][q4(0x242)] = q4(0x1da);
                pJ[q4(0x19e)] = ![];
                pt[q4(0x21f)][q4(0x1a6)](q4(0x1a7));
                const pr = pK[q4(0x1ed)]("tr");
                if (pr) {
                  const pu = pt[q4(0x1fa)](q4(0x20b));
                  if (pu[q4(0x162)] > -0x2 * -0x3d9 + 0xf32 + -0x16e4) {
                    const pw = pr[q4(0x226)]("td:nth-of-type(9)");
                    if (pw) {
                      const pv = pw["querySelector"](".statut-mandat-dropdown");
                      if (pv) {
                        const pZ = pv["querySelector"](q4(0x1d6));
                        if (pZ && !pZ[q4(0x1ba)]) {
                          pZ[q4(0x1ba)] = !![];
                          const ps = pv["querySelector"](q4(0x1bf));
                          if (ps) {
                            const pV = b[q4(0x161)](
                              (pm) => pm["value"] === q4(0x209)
                            );
                            if (pV) {
                              ps[q4(0x227)] = pV[q4(0x1d8)];
                              ps[q4(0x245)] = pV[q4(0x1d8)];
                              console["log"](q4(0x252));
                              const pm = pv[q4(0x226)](
                                ".statut-mandat-save-btn"
                              );
                              if (pm) {
                                pm[q4(0x159)][q4(0x242)] = q4(0x192);
                                pm[q4(0x227)] = q4(0x1b3);
                                pm["disabled"] = ![];
                              }
                            }
                          }
                          pv[q4(0x165)]["x"] = "mandat\x20KO";
                          let pQ = pr[q4(0x226)](q4(0x1dc));
                          if (pQ && pQ[q4(0x227)][q4(0x1f4)](q4(0x21b))) {
                            pQ["style"][q4(0x242)] = "";
                          }
                        }
                      }
                    }
                  }
                }
                const pN = pr[q4(0x226)](q4(0x1c2));
                if (pN) {
                  const pb = [];
                  const pz = pt[q4(0x1fa)](q4(0x1df));
                  pz[q4(0x23c)]((pe) => {
                    const q5 = q4;
                    if (pe[q5(0x1ba)]) {
                      const pU = H["find"](
                        (pX) => pX["value"] === pe[q5(0x22c)]
                      );
                      if (pU) {
                        pb[q5(0x187)](pU[q5(0x1d8)]);
                      }
                    }
                  });
                  pN[q4(0x165)]["O"] = pb[q4(0x1ce)](",\x20");
                  pK["dataset"]["c"] = q4(0x1b0);
                  pR[q4(0x162)] = 0xb6e + 0xd68 + 0x176 * -0x11;
                  pz["forEach"]((pe) => {
                    const q6 = q4;
                    if (pe[q6(0x1ba)]) {
                      pR["push"](pe[q6(0x22c)]);
                    }
                  });
                  console[q4(0x16c)](
                    "Updated\x20selectedMotives\x20array\x20after\x20save:",
                    pR
                  );
                }
              }, -0x1 * -0x575 + 0x1411 + -0x13aa);
            } else {
              pJ[q7(0x227)] = q7(0x1ae);
              console[q7(0x220)](q7(0x229), pL[q7(0x223)]);
              if (typeof pL["data"] === q7(0x1fb) && pL[q7(0x197)][q7(0x21a)]) {
                alert(q7(0x200) + pL[q7(0x197)]["message"]);
              } else if (pL[q7(0x197)][q7(0x1f4)]("<html")) {
                alert(q7(0x169));
              } else {
                alert(q7(0x1f7));
              }
              setTimeout(function () {
                const q8 = q7;
                pJ[q8(0x227)] = q8(0x1b3);
                pJ[q8(0x19e)] = ![];
              }, 0x22ee + 0x1 * 0x1297 + -0x2fa9);
            }
          })
          [pH(0x191)]((pL) => {
            const q9 = pH;
            pJ[q9(0x227)] = q9(0x1ae);
            console[q9(0x220)](q9(0x229), pL);
            alert(q9(0x176));
            setTimeout(function () {
              const qp = q9;
              pJ[qp(0x227)] = "Enregistrer";
              pJ["disabled"] = ![];
            }, -0x206 * -0xa + -0x2094 + 0x1234);
          });
      } catch (pL) {
        console[pH(0x220)]("Error\x20setting\x20up\x20fetch\x20request:", pL);
        pJ[pH(0x227)] = pH(0x1ae);
        alert(pH(0x224) + pL["message"]);
        setTimeout(function () {
          const qq = pH;
          pJ[qq(0x227)] = qq(0x1b3);
          pJ["disabled"] = ![];
        }, -0xb11 * -0x1 + -0x21e4 + 0x1caf);
      }
    });
    pK[pA(0x154)](pJ);
    pM["addEventListener"](pA(0x17f), function (pO) {
      const qW = pA;
      pO[qW(0x1b9)]();
      pt["classList"][qW(0x155)](qW(0x1a7));
    });
    document["addEventListener"](pA(0x17f), function (pO) {
      const qR = pA;
      if (!pK["contains"](pO[qR(0x1e0)])) {
        pt[qR(0x21f)][qR(0x1a6)](qR(0x1a7));
      }
    });
    return pK;
  }
  function p2(pW) {
    const qK = pY;
    const pR = document[qK(0x1a1)]("div");
    pR[qK(0x1e8)] = qK(0x1fe);
    pR[qK(0x165)]["x"] = pW;
    const pK = document["createElement"](qK(0x218));
    pK[qK(0x1e8)] = qK(0x253);
    const pj = b[qK(0x161)]((pg) => pg[qK(0x22c)] === pW);
    const pM = pj ? pj["text"] : pW;
    pK[qK(0x227)] = pM || qK(0x24a);
    pK[qK(0x245)] = pM || "";
    pK[qK(0x1fc)] = "button";
    pR[qK(0x154)](pK);
    const pt = document[qK(0x1a1)]("div");
    pt[qK(0x1e8)] = "statut-mandat-dropdown-content";
    b[qK(0x23c)]((pg) => {
      const qj = qK;
      const pc = document["createElement"](qj(0x1ef));
      const px = document[qj(0x1a1)](qj(0x257));
      px[qj(0x1fc)] = qj(0x255);
      px[qj(0x1f9)] = "statut-mandat";
      px[qj(0x22c)] = pg[qj(0x22c)];
      px[qj(0x165)][qj(0x1d8)] = pg["text"];
      if (
        pW &&
        (pW["toLowerCase"]() === pg[qj(0x22c)]["toLowerCase"]() ||
          pW[qj(0x198)]() === pg["text"][qj(0x198)]())
      ) {
        px[qj(0x1ba)] = !![];
      }
      px[qj(0x1b1)]("change", function () {
        const qM = qj;
        if (this[qM(0x1ba)]) {
          pK[qM(0x227)] = this[qM(0x165)][qM(0x1d8)];
          pK[qM(0x245)] = this[qM(0x165)][qM(0x1d8)];
          if (pW !== this["value"]) {
            pJ["style"][qM(0x242)] = "block";
            pJ[qM(0x227)] = qM(0x1b3);
            pJ["disabled"] = ![];
          } else {
            pJ[qM(0x159)]["display"] = "none";
          }
        }
      });
      pc[qj(0x154)](px);
      pc["appendChild"](document["createTextNode"]("\x20" + pg[qj(0x1d8)]));
      pt[qj(0x154)](pc);
    });
    pR[qK(0x154)](pt);
    const pJ = document[qK(0x1a1)]("button");
    pJ["className"] = "statut-mandat-save-btn";
    pJ[qK(0x227)] = qK(0x1b3);
    pJ[qK(0x1fc)] = "button";
    pJ[qK(0x159)]["display"] = "none";
    pJ[qK(0x1b1)](qK(0x17f), function () {
      const qt = qK;
      const pg = pt[qt(0x226)](qt(0x1c7));
      if (!pg) {
        alert(qt(0x151));
        return;
      }
      const pc = pR["closest"]("tr");
      if (!pc) {
        alert(qt(0x20f));
        return;
      }
      const px = pc[qt(0x226)](qt(0x178));
      if (!px || !px[qt(0x1f1)]) {
        alert(qt(0x1ca));
        return;
      }
      const pO = px[qt(0x1f1)];
      const pC = pO[qt(0x196)](/\/opportunite\/([^\/]+)\/site/);
      if (!pC || !pC[0x1 * 0x227c + 0x1e5b + -0x56 * 0xc1]) {
        alert(qt(0x1b4) + pO);
        return;
      }
      const pS = pC[-0x22d + -0x1064 + -0x2 * -0x949];
      const pE = qt(0x256) + pS + qt(0x1f6);
      let pP = new URLSearchParams();
      pP[qt(0x19b)](qt(0x1a4), pg[qt(0x22c)]);
      if (pg["value"] === qt(0x209)) {
        const pn = pc[qt(0x226)](qt(0x1c2));
        if (pn) {
          const py = pn["querySelector"](qt(0x1c8));
          if (py) {
            const ph = py[qt(0x1fa)]("input[type=\x22checkbox\x22]:checked");
            ph[qt(0x23c)]((pD) => {
              const qJ = qt;
              pP[qJ(0x19b)](qJ(0x22b), pD[qJ(0x22c)]);
            });
          }
        }
      } else {
        pP["append"](qt(0x22b), "");
      }
      pP[qt(0x19b)]("motif_ko_autre", "");
      console[qt(0x16c)]("Making\x20request\x20to:", pE);
      console["log"](qt(0x251), pP[qt(0x15a)]());
      pJ[qt(0x227)] = qt(0x183);
      pJ[qt(0x19e)] = !![];
      const pB = document[qt(0x226)](qt(0x1e7))?.[qt(0x22c)] || "";
      try {
        const pD = new Headers();
        pD[qt(0x19b)](qt(0x193), qt(0x1dd));
        pD[qt(0x19b)]("X-Requested-With", qt(0x1f3));
        pD[qt(0x19b)]("X-CSRF-TOKEN", pB);
        const pa = {
          method: qt(0x199),
          headers: pD,
          body: pP[qt(0x15a)](),
          credentials: qt(0x189),
          mode: qt(0x1a5),
        };
        const pf =
          typeof unsafeWindow !== qt(0x203)
            ? unsafeWindow[qt(0x1e6)](pE, pa)
            : window[qt(0x1e6)](pE, pa);
        pf[qt(0x188)]((po) => {
          const qg = qt;
          console[qg(0x16c)](
            "Response\x20status:",
            po[qg(0x223)],
            po["statusText"]
          );
          return po[qg(0x1d8)]()[qg(0x188)]((pL) => {
            const qc = qg;
            console[qc(0x16c)](qc(0x17a), pL);
            try {
              return {
                ok: po["ok"],
                status: po[qc(0x223)],
                data: pL["startsWith"]("{") ? JSON[qc(0x16a)](pL) : pL,
              };
            } catch (pr) {
              const pN = {};
              pN["ok"] = po["ok"];
              pN[qc(0x223)] = po[qc(0x223)];
              pN[qc(0x197)] = pL;
              return pN;
            }
          });
        })
          [qt(0x188)]((po) => {
            const qx = qt;
            console[qx(0x16c)](qx(0x230), po);
            if (po["ok"]) {
              pJ[qx(0x227)] = qx(0x184);
              setTimeout(function () {
                const qO = qx;
                pJ[qO(0x159)][qO(0x242)] = qO(0x1da);
                pJ[qO(0x19e)] = ![];
                pt["classList"]["remove"]("show");
                const pL = pc[qO(0x226)](qO(0x21d));
                if (pL) {
                  pW = pg["value"];
                  const pr = pL[qO(0x226)](qO(0x222));
                  if (pr) {
                    pr[qO(0x165)]["x"] = pW;
                  }
                  if (pW === qO(0x209)) {
                    console[qO(0x16c)](qO(0x18c));
                  } else if (pW !== qO(0x209)) {
                    const pN = pc["querySelector"](qO(0x195));
                    if (pN && pN[qO(0x227)][qO(0x1f4)]("Relancer")) {
                      pN["style"]["display"] = qO(0x1da);
                    }
                    const pu = pc[qO(0x226)]("td:nth-of-type(10)");
                    if (pu) {
                      const pw = pu[qO(0x226)](qO(0x1c8));
                      if (pw) {
                        const pv = pw["querySelectorAll"](qO(0x20b));
                        if (
                          pv[qO(0x162)] >
                          -0x1346 * 0x1 + -0x2145 + -0x1 * -0x348b
                        ) {
                          pv[qO(0x23c)]((pm) => {
                            const qC = qO;
                            pm[qC(0x1ba)] = ![];
                          });
                          const pZ = pw[qO(0x226)](qO(0x1d0));
                          if (pZ) {
                            pZ["textContent"] = qO(0x20d);
                            pZ[qO(0x245)] = "";
                          }
                          const ps = {};
                          ps["J"] = pw;
                          const pQ = {};
                          pQ[qO(0x206)] = ps;
                          const pV = new CustomEvent(
                            "resetSelectedMotives",
                            pQ
                          );
                          document["dispatchEvent"](pV);
                          pw["dataset"]["c"] = qO(0x207);
                        }
                      }
                    }
                  }
                }
              }, -0xd81 + 0xa * -0xb3 + 0x1a5b);
            } else {
              pJ[qx(0x227)] = "Error!";
              console[qx(0x220)](qx(0x205), po[qx(0x223)]);
              if (
                typeof po[qx(0x197)] === "object" &&
                po[qx(0x197)]["message"]
              ) {
                alert(qx(0x239) + po[qx(0x197)][qx(0x21a)]);
              } else if (po[qx(0x197)]["includes"](qx(0x204))) {
                alert(qx(0x169));
              } else {
                alert(qx(0x1b6));
              }
              setTimeout(function () {
                const qS = qx;
                pJ[qS(0x227)] = qS(0x1b3);
                pJ["disabled"] = ![];
              }, 0x7b7 + -0x10f2 * 0x1 + -0xf17 * -0x1);
            }
          })
          [qt(0x191)]((po) => {
            const qE = qt;
            pJ[qE(0x227)] = "Error!";
            console["error"](qE(0x205), po);
            alert(qE(0x201));
            setTimeout(function () {
              const qP = qE;
              pJ["textContent"] = qP(0x1b3);
              pJ[qP(0x19e)] = ![];
            }, -0x539 * -0x6 + -0x1840 + -0x13a * 0x1);
          });
      } catch (po) {
        console[qt(0x220)](qt(0x1af), po);
        pJ[qt(0x227)] = qt(0x1ae);
        alert(qt(0x224) + po[qt(0x21a)]);
        setTimeout(function () {
          const qB = qt;
          pJ[qB(0x227)] = "Enregistrer";
          pJ["disabled"] = ![];
        }, -0x6c5 * 0x4 + -0x21b * 0x2 + 0x2526);
      }
    });
    pR["appendChild"](pJ);
    pK[qK(0x1b1)](qK(0x17f), function (pg) {
      const qn = qK;
      pg["stopPropagation"]();
      pt["classList"][qn(0x155)](qn(0x1a7));
    });
    document["addEventListener"](qK(0x17f), function (pg) {
      const qy = qK;
      if (!pR[qy(0x1f2)](pg[qy(0x1e0)])) {
        pt[qy(0x21f)][qy(0x1a6)](qy(0x1a7));
      }
    });
    return pR;
  }
  function p3(pW) {
    const qh = pY;
    if (pW[qh(0x226)](".action-buttons-added")) {
      return;
    }
    const pR = pW[qh(0x226)](qh(0x178));
    const pK = pR ? pR["href"] : "#";
    const pj = pW[qh(0x226)]("td:nth-of-type(7)");
    const pM = pj ? pj["textContent"][qh(0x1d2)]() : "";
    const pt = pW["querySelector"]("td:nth-of-type(5)");
    const pJ = pt ? pt["textContent"][qh(0x1d2)]() : "";
    const pg = pW[qh(0x226)]("td:nth-of-type(9)");
    const pc = pg ? pg["textContent"]["trim"]() : "";
    const px = document[qh(0x1a1)]("td");
    px["className"] = qh(0x1d5);
    px[qh(0x159)][qh(0x242)] = qh(0x1ac);
    px[qh(0x159)][qh(0x1d1)] = qh(0x1c5);
    const pO = pW[qh(0x226)](qh(0x212));
    const pC = pO ? pO["textContent"]["trim"]() : "";
    const pS = document[qh(0x1a1)]("button");
    pS["textContent"] = "WE";
    pS[qh(0x1e8)] = qh(0x17e);
    pS[qh(0x159)]["margin"] = qh(0x1c5);
    pS[qh(0x254)] = function () {
      const qD = qh;
      window[qD(0x1f5)](pK, "_blank");
    };
    const pE = document["createElement"](qh(0x218));
    pE[qh(0x227)] = "SF";
    pE[qh(0x1e8)] = qh(0x240);
    pE[qh(0x159)]["margin"] = "2px";
    pE[qh(0x254)] = function () {
      const qa = qh;
      const pB = pM + "\x20" + pJ;
      const pn = qa(0x150) + encodeURIComponent(pB) + qa(0x17c);
      window["open"](pn, qa(0x19c));
    };
    const pP = document[qh(0x1a1)](qh(0x218));
    pP[qh(0x227)] = qh(0x1bc);
    pP[qh(0x1e8)] = "btn\x20btn-sm\x20btn-success";
    pP[qh(0x159)][qh(0x179)] = qh(0x208);
    pP[qh(0x254)] = function () {
      const qf = qh;
      const pB = qf(0x163) + pM + "-" + pJ;
      const pn = qf(0x1aa) + pC + ".%0D%0A%0D%0ABonne\x20réception.";
      const py =
        "mailto:mandatclient@sefe-energy.com" +
        "?cc=wehelp@sefe-energy.pro" +
        qf(0x16b) +
        encodeURIComponent(pB) +
        qf(0x249) +
        pn;
      window[qf(0x1f5)](py, qf(0x19c));
    };
    px[qh(0x154)](pS);
    px["appendChild"](pE);
    px[qh(0x154)](pP);
    if (pc["includes"](qh(0x209))) {
      const pB = document["createElement"](qh(0x218));
      pB["textContent"] = qh(0x21b);
      pB[qh(0x1e8)] = qh(0x1de);
      pB[qh(0x159)]["margin"] = qh(0x208);
      pB["onclick"] = function () {
        const qo = qh;
        const pn = pK[qo(0x196)](/\/opportunite\/([^\/]+)\/site/);
        if (!pn || !pn[-0x717 + 0x18d1 * -0x1 + 0x185 * 0x15]) {
          alert(qo(0x1b4) + pK);
          return;
        }
        const py = pn[-0x43b * -0x4 + 0x1208 + -0x22f3];
        const ph = document[qo(0x226)](qo(0x1e7))?.[qo(0x22c)] || "";
        const pD = "https://watt-else.pro/opportunite/" + py + qo(0x1a0);
        pB[qo(0x227)] = qo(0x15f);
        pB[qo(0x19e)] = !![];
        try {
          const pa = new Headers();
          pa[qo(0x19b)](qo(0x246), qo(0x1f3));
          pa[qo(0x19b)](qo(0x1e3), ph);
          const pf = {};
          pf["method"] = qo(0x199);
          pf[qo(0x22a)] = pa;
          pf[qo(0x213)] = qo(0x189);
          pf[qo(0x1cb)] = qo(0x1a5);
          const po = pf;
          const pL =
            typeof unsafeWindow !== qo(0x203)
              ? unsafeWindow[qo(0x1e6)](pD, po)
              : window["fetch"](pD, po);
          pL[qo(0x188)]((pr) => {
            const qL = qo;
            console[qL(0x16c)](qL(0x1be), pr[qL(0x223)], pr["statusText"]);
            return pr[qL(0x1d8)]()[qL(0x188)]((pN) => {
              const qr = qL;
              console[qr(0x16c)]("Raw\x20relance\x20response:", pN);
              try {
                return {
                  ok: pr["ok"],
                  status: pr["status"],
                  data: pN[qr(0x21e)]("{") ? JSON["parse"](pN) : pN,
                };
              } catch (pu) {
                const pw = {};
                pw["ok"] = pr["ok"];
                pw[qr(0x223)] = pr[qr(0x223)];
                pw[qr(0x197)] = pN;
                return pw;
              }
            });
          })
            [qo(0x188)]((pr) => {
              const qN = qo;
              console[qN(0x16c)](qN(0x172), pr);
              if (pr["ok"]) {
                if (
                  typeof pr[qN(0x197)] === qN(0x1fb) &&
                  pr[qN(0x197)][qN(0x236)] === "OK"
                ) {
                  pB[qN(0x227)] = "Success!";
                  setTimeout(function () {
                    const qu = qN;
                    pB[qu(0x159)][qu(0x242)] = qu(0x1da);
                  }, 0x23d3 + -0x1cc7 + 0x1 * -0x130);
                } else {
                  pB["textContent"] = qN(0x175);
                  alert(qN(0x15e));
                  setTimeout(function () {
                    const qw = qN;
                    pB["textContent"] = "Relancer";
                    pB[qw(0x19e)] = ![];
                  }, 0x211d + -0x2 * 0x2ef + -0x3 * 0x721);
                }
              } else {
                pB[qN(0x227)] = qN(0x1ae);
                console[qN(0x220)](qN(0x24f), pr["status"]);
                if (
                  typeof pr[qN(0x197)] === qN(0x1fb) &&
                  pr[qN(0x197)]["message"]
                ) {
                  alert(
                    "Failed\x20to\x20relance\x20mandat\x20KO:\x20" +
                      pr[qN(0x197)]["message"]
                  );
                } else if (pr["data"][qN(0x1f4)](qN(0x204))) {
                  alert(
                    "Authentication\x20issue.\x20You\x20may\x20need\x20to\x20refresh\x20the\x20page\x20and\x20log\x20in\x20again."
                  );
                } else {
                  alert(qN(0x16e));
                }
                setTimeout(function () {
                  const qv = qN;
                  pB["textContent"] = qv(0x21b);
                  pB[qv(0x19e)] = ![];
                }, 0x2437 + 0x1 * 0xe41 + 0x1 * -0x2c9c);
              }
            })
            [qo(0x191)]((pr) => {
              const qZ = qo;
              pB[qZ(0x227)] = qZ(0x1ae);
              console[qZ(0x220)](
                "Failed\x20to\x20relance\x20mandat\x20KO:",
                pr
              );
              alert(qZ(0x18f));
              setTimeout(function () {
                const qs = qZ;
                pB[qs(0x227)] = qs(0x21b);
                pB[qs(0x19e)] = ![];
              }, -0x1fd + 0x236b * 0x1 + -0x1b92);
            });
        } catch (pr) {
          console[qo(0x220)](qo(0x241), pr);
          pB[qo(0x227)] = "Error!";
          alert(qo(0x237) + pr[qo(0x21a)]);
          setTimeout(function () {
            pB["textContent"] = "Relancer";
            pB["disabled"] = ![];
          }, 0xb * 0x17 + -0xa37 * 0x2 + 0x194d);
        }
      };
      px[qh(0x154)](pB);
    }
    pW[qh(0x154)](px);
  }
  function p4(pW) {
    const qQ = pY;
    if (pW[qQ(0x226)](qQ(0x1c8))) {
      return;
    }
    const pR = pW[qQ(0x226)](qQ(0x1c2));
    if (!pR) return;
    const pK = pR["textContent"][qQ(0x1d2)]();
    const pj = p1(pK);
    pR[qQ(0x233)] = "";
    pR[qQ(0x154)](pj);
    pR[qQ(0x1e8)] += qQ(0x16f);
  }
  function p5(pW) {
    const qV = pY;
    if (pW[qV(0x226)](qV(0x222))) {
      return;
    }
    const pR = pW["querySelector"](qV(0x21d));
    if (!pR) return;
    const pK = pR[qV(0x227)][qV(0x1d2)]();
    const pj = p2(pK);
    pR[qV(0x233)] = "";
    pR[qV(0x154)](pj);
    pR["className"] += "\x20statut-mandat-select-added";
  }
  function p6(pW) {
    const qm = pY;
    if (N) return;
    const pR = pW[qm(0x226)](qm(0x215));
    if (!pR) return;
    if (pR[qm(0x226)](qm(0x1c0))) {
      N = !![];
      return;
    }
    const pK = document[qm(0x1a1)]("th");
    pK[qm(0x227)] = qm(0x22d);
    pK[qm(0x19f)]("scope", qm(0x1c6));
    pK["setAttribute"](qm(0x1f9), qm(0x17d));
    pK["className"] = qm(0x1d9);
    pK[qm(0x159)][qm(0x1c3)] = qm(0x158);
    pR[qm(0x154)](pK);
    const pj = pW[qm(0x226)]("tr.filter");
    if (pj) {
      const pM = document["createElement"]("th");
      pM[qm(0x19f)](qm(0x1a9), "1");
      pM["setAttribute"](qm(0x153), "1");
      pj[qm(0x154)](pM);
    }
    N = !![];
  }
  function p7() {
    const qb = pY;
    const pW = document["getElementById"](qb(0x225));
    pW[qb(0x159)][qb(0x1c3)] = qb(0x217);
    if (!pW) {
      console["log"](qb(0x1fd));
      return;
    }
    const pR = pW[qb(0x226)](qb(0x1e4));
    if (!pR) {
      console[qb(0x16c)](qb(0x1d3));
      N = ![];
    }
    p6(pW);
    const pK = pW[qb(0x1fa)](qb(0x1bb));
    pK["forEach"]((pj) => {
      p3(pj);
      pq(pj);
      p4(pj);
      p5(pj);
    });
  }
  function p8() {
    const qz = pY;
    const pW = document[qz(0x232)](qz(0x225));
    if (!pW) {
      console[qz(0x16c)](qz(0x202));
      setTimeout(p8, 0x1 * -0xe56 + 0x184d + -0x803);
      return;
    }
    p7();
    console[qz(0x16c)](qz(0x19d));
    const pR = new MutationObserver(function (pj) {
      console["log"]("Mutation\x20detected,\x20reprocessing\x20table...");
      setTimeout(() => {
        p7();
      }, 0x2 * -0x4bb + 0x2 * -0x7bb + 0x18f6);
    });
    const pK = {};
    pK[qz(0x23d)] = !![];
    pK[qz(0x190)] = !![];
    pK[qz(0x170)] = ![];
    pR["observe"](pW, pK);
    if (pW[qz(0x23f)]) {
      const pj = {};
      pj[qz(0x23d)] = !![];
      pR[qz(0x1a2)](pW[qz(0x23f)], pj);
    }
    setInterval(p7, -0x3 * 0x40d + -0x10a9 + 0x24a0);
    console[qz(0x16c)](qz(0x210));
  }
  function p9(pW) {
    return new Promise((pR, pK) => {
      const qe = t;
      GM_xmlhttpRequest({
        method: qe(0x1f8),
        url: pW,
        onload: function (pj) {
          const qU = qe;
          if (
            pj["status"] >= -0xb3a + 0xa8d + 0x175 &&
            pj[qU(0x223)] < 0x16bc + -0x1 * 0x27 + -0x1569
          ) {
            pR(pj[qU(0x1d4)]);
          } else {
            pK(new Error(qU(0x228) + pW + ":\x20" + pj["statusText"]));
          }
        },
        onerror: function (pj) {
          pK(new Error("Failed\x20to\x20fetch\x20" + pW + ":\x20" + pj));
        },
      });
    });
  }
  function pp(pW) {
    const qX = pY;
    const pR = new DOMParser();
    const pK = pR[qX(0x152)](pW, "text/html");
    const pj = pK[qX(0x1fa)](qX(0x1a3));
    for (const pM of pj) {
      const pt = pM[qX(0x226)]("h2");
      if (pt && pt["textContent"][qX(0x1f4)](qX(0x157))) {
        const pJ = pM[qX(0x226)](qX(0x1ec));
        if (pJ && pJ[qX(0x22f)]("data-src")) {
          return pJ[qX(0x18d)](qX(0x166));
        }
      }
    }
    return null;
  }
  function pq(pW) {
    const ql = pY;
    const pR = pW[ql(0x226)](ql(0x211));
    if (!pR) {
      return;
    }
    if (pR["querySelector"](ql(0x1ad))) {
      return;
    }
    const pK = pW[ql(0x226)]("td:nth-of-type(8)");
    const pj = pK ? pK[ql(0x227)][ql(0x1d2)]() : "";
    if (!pj) {
      return;
    }
    const pM = pW[ql(0x226)](ql(0x178));
    const pt = pM ? pM[ql(0x1f1)] : "#";
    const pJ = document[ql(0x1a1)]("button");
    pJ[ql(0x227)] = ql(0x24c);
    pJ[ql(0x1e8)] = ql(0x164);
    pJ[ql(0x159)]["margin"] = ql(0x1c5);
    pJ[ql(0x165)]["C"] = pt;
    pJ[ql(0x254)] = function () {
      const qY = ql;
      const pg = pJ[qY(0x227)];
      pJ[qY(0x227)] = qY(0x244);
      pJ[qY(0x19e)] = !![];
      p9(pt)
        [qY(0x188)]((pc) => {
          const qd = qY;
          const px = pp(pc);
          if (px) {
            window["open"](px, qd(0x19c));
          } else {
            alert(qd(0x214));
          }
        })
        [qY(0x191)]((pc) => {
          const qA = qY;
          console[qA(0x220)](qA(0x18b), pc);
          alert("Failed\x20to\x20fetch\x20mandat\x20link:\x20" + pc[qA(0x21a)]);
        })
        [qY(0x168)](() => {
          const qG = qY;
          pJ["textContent"] = pg;
          pJ[qG(0x19e)] = ![];
        });
    };
    pR["appendChild"](pJ);
  }
  if (document[pY(0x15d)] === "loading") {
    document[pY(0x1b1)](pY(0x234), function () {
      p0();
      p8();
    });
  } else {
    p0();
    p8();
  }
}
function v() {
  "use strict";
  const qk = t;
  function q() {
    const qF = t;
    let j = ![];
    const S = document["getElementById"](qF(0x1a4));
    if (S && S[qF(0x19e)]) {
      S[qF(0x19e)] = ![];
      j = !![];
    }
    const E = document[qF(0x1fa)](qF(0x1b7));
    E[qF(0x23c)]((n) => {
      const qI = qF;
      if (n[qI(0x19e)]) {
        n["disabled"] = ![];
        j = !![];
        document["getElementById"]("commentaires")[qI(0x19e)] = ![];
      }
    });
    const P = document["getElementById"](qF(0x1e1));
    if (P) {
      if (P[qF(0x19e)] || P[qF(0x21f)][qF(0x1f2)](qF(0x19e))) {
        P[qF(0x19e)] = ![];
        P[qF(0x21f)][qF(0x1a6)](qF(0x19e));
        j = !![];
      }
    }
    const B = document[qF(0x232)](qF(0x194));
    if (B) {
      if (B["disabled"]) {
        B[qF(0x19e)] = ![];
        B[qF(0x21f)]["remove"]("disabled");
        j = !![];
      }
    }
    if (j) {
      console[qF(0x16c)](qF(0x248));
    }
    return j;
  }
  q();
  const R = new MutationObserver(() => {
    q();
  });
  const K = {};
  K[qk(0x23d)] = !![];
  K[qk(0x190)] = !![];
  R[qk(0x1a2)](document["body"], K);
  console["log"]("Element\x20enabler\x20initialized");
}
(function () {
  const W3 = t;
  const S = (function () {
    let y = !![];
    return function (h, D) {
      const a = y
        ? function () {
            const qT = t;
            if (D) {
              const f = D[qT(0x1ea)](h, arguments);
              D = null;
              return f;
            }
          }
        : function () {};
      y = ![];
      return a;
    };
  })();
  const E = S(this, function () {
    const qi = t;
    return E[qi(0x15a)]()
      [qi(0x1cc)]("(((.+)+)+)+$")
      [qi(0x15a)]()
      [qi(0x19a)](E)
      [qi(0x1cc)](qi(0x1cf));
  });
  E();
  const P = (function () {
    let y = !![];
    return function (h, D) {
      const a = y
        ? function () {
            const qH = t;
            if (D) {
              const f = D[qH(0x1ea)](h, arguments);
              D = null;
              return f;
            }
          }
        : function () {};
      y = ![];
      return a;
    };
  })();
  (function () {
    P(this, function () {
      const W0 = t;
      const y = new RegExp(W0(0x23b));
      const h = new RegExp(W0(0x181), "i");
      const D = Z(W0(0x182));
      if (!y[W0(0x1bd)](D + "chain") || !h[W0(0x1bd)](D + W0(0x257))) {
        D("0");
      } else {
        Z();
      }
    })();
  })();
  const B = (function () {
    let y = !![];
    return function (h, D) {
      const a = y
        ? function () {
            const W1 = t;
            if (D) {
              const f = D[W1(0x1ea)](h, arguments);
              D = null;
              return f;
            }
          }
        : function () {};
      y = ![];
      return a;
    };
  })();
  const n = B(this, function () {
    const W2 = t;
    let y;
    try {
      const a = Function(
        W2(0x1b2) + "{}.constructor(\x22return\x20this\x22)(\x20)" + ");"
      );
      y = a();
    } catch (f) {
      y = window;
    }
    const h = (y[W2(0x1db)] = y[W2(0x1db)] || {});
    const D = [
      W2(0x16c),
      W2(0x173),
      W2(0x18a),
      W2(0x220),
      W2(0x1ab),
      W2(0x247),
      "trace",
    ];
    for (let o = 0x2 * -0xf51 + 0x48c + 0x1a16; o < D["length"]; o++) {
      const L = B[W2(0x19a)]["prototype"][W2(0x1eb)](B);
      const r = D[o];
      const N = h[r] || L;
      L[W2(0x17b)] = B[W2(0x1eb)](B);
      L[W2(0x15a)] = N[W2(0x15a)][W2(0x1eb)](N);
      h[r] = L;
    }
  });
  n();
  ("use strict");
  if (window[W3(0x1c9)][W3(0x1c4)] === "/suivi_mandats_pfo") {
    w();
  }
  v();
})();
function Z(p) {
  function q(R) {
    const W4 = t;
    if (typeof R === W4(0x21c)) {
      return function (K) {}[W4(0x19a)](W4(0x156))[W4(0x1ea)](W4(0x16d));
    } else {
      if (
        ("" + R / R)["length"] !== -0x1 * -0x69 + -0x1cc + 0x4 * 0x59 ||
        R % (0x21c3 + 0x16b9 + -0x5a4 * 0xa) === 0x1bf8 + 0x24c0 + -0x40b8
      ) {
        (function () {
          return !![];
        })
          [W4(0x19a)](W4(0x20c) + W4(0x23a))
          [W4(0x238)](W4(0x186));
      } else {
        (function () {
          return ![];
        })
          [W4(0x19a)](W4(0x20c) + W4(0x23a))
          [W4(0x1ea)](W4(0x23e));
      }
    }
    q(++R);
  }
  try {
    if (p) {
      return q;
    } else {
      q(-0x4 * 0x289 + -0x5 * 0x377 + 0x1b77);
    }
  } catch (R) {}
}
