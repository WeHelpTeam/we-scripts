// ==UserScript==
// @name         Main Script
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Adds action buttons to the table for site redirect, alert PCE and SIREN, mailto with PCE, and relancer
// @author       You
// @match        https://watt-else.pro/*
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==

(function (H, v) {
  const HS = L;
  const h = H();
  while (!![]) {
    try {
      const E =
        parseInt(HS(0x1e8)) / (0x10 * 0x24a + -0xf5b + -0x1544) +
        (-parseInt(HS(0x1e4)) /
          (0x20b * -0xd + -0x42 * -0x50 + -0x5f1 * -0x1)) *
          (parseInt(HS(0x1fd)) / (0x1 * -0x153 + 0x1604 + 0x14ae * -0x1)) +
        (-parseInt(HS(0x2ec)) / (0x22 * -0x44 + 0x29a + 0x672)) *
          (-parseInt(HS(0x291)) / (0x1612 + 0x62 * -0xd + -0x1113)) +
        -parseInt(HS(0x22e)) / (-0x1ab5 + 0xa0c * 0x2 + 0x6a3) +
        (parseInt(HS(0x2d0)) / (0x109a + -0x6 * 0x14b + -0x8d1)) *
          (-parseInt(HS(0x2f2)) / (0xe5 * -0x9 + -0x24a2 + 0x2cb7)) +
        parseInt(HS(0x24c)) / (0x2393 * 0x1 + 0x1a + -0x1 * 0x23a4) +
        parseInt(HS(0x2e5)) / (0xaeb * 0x1 + -0x6f2 + 0x35 * -0x13);
      if (E === v) {
        break;
      } else {
        h["push"](h["shift"]());
      }
    } catch (X) {
      h["push"](h["shift"]());
    }
  }
})(W, 0x3a44d + 0xa059 * 0x1 + 0xfa4a);
function x() {
  "use strict";
  const HV = L;
  let z = ![];
  let u = ![];
  const w = {};
  w["value"] = HV(0x273);
  w["text"] = HV(0x273);
  const t = {};
  t[HV(0x30c)] = HV(0x224);
  t[HV(0x235)] = HV(0x224);
  const j = {};
  j[HV(0x30c)] = "e-mail\x20OK";
  j[HV(0x235)] = "e-mail\x20OK";
  const D = {};
  D[HV(0x30c)] = HV(0x206);
  D["text"] = "mandat\x20KO";
  const s = [w, t, j, D];
  const A = {};
  A[HV(0x30c)] = "A";
  A[HV(0x235)] = HV(0x2f9);
  const C = {};
  C[HV(0x30c)] = "B";
  C["text"] = HV(0x203);
  const l = {};
  l[HV(0x30c)] = "C";
  l["text"] = HV(0x27e);
  const p = {};
  p[HV(0x30c)] = "D";
  p[HV(0x235)] = HV(0x2b5);
  const N = {};
  N[HV(0x30c)] = "E";
  N["text"] = "Mandat\x20non\x20signé";
  const S = {};
  S["value"] = "F";
  S[HV(0x235)] = "Mandat\x20non\x20daté";
  const V = {};
  V[HV(0x30c)] = "G";
  V[HV(0x235)] = HV(0x1ef);
  const r = {};
  r[HV(0x30c)] = "H";
  r[HV(0x235)] =
    "Mail\x20non\x20valable\x20:\x20absence\x20d\x27autorisation\x20explicite";
  const Z = {};
  Z[HV(0x30c)] = "I";
  Z[HV(0x235)] = HV(0x2f7);
  const Q = {};
  Q[HV(0x30c)] = "J";
  Q["text"] = HV(0x2de);
  const G = {};
  G[HV(0x30c)] = "L";
  G["text"] = HV(0x1db);
  const d = {};
  d[HV(0x30c)] = "O";
  d[HV(0x235)] = "Date\x20de\x20mandat\x20expiré";
  const H0 = {};
  H0[HV(0x30c)] = "P";
  H0[HV(0x235)] = HV(0x1fc);
  const H1 = {};
  H1[HV(0x30c)] = "K";
  H1[HV(0x235)] = HV(0x2fa);
  const H2 = [A, C, l, p, N, S, V, r, Z, Q, G, d, H0, H1];
  function H3() {
    const Hr = HV;
    const HX = document[Hr(0x27f)](Hr(0x218));
    HX[Hr(0x2af)] = Hr(0x253);
    document[Hr(0x29d)][Hr(0x29a)](HX);
  }
  function H4(HX) {
    const HZ = HV;
    const HW = [];
    if (HX) {
      H2[HZ(0x301)]((HI) => {
        const HQ = HZ;
        if (HX["includes"](HI[HQ(0x235)])) {
          HW[HQ(0x2ee)](HI["value"]);
        }
      });
    }
    const HL = document[HZ(0x27f)](HZ(0x234));
    HL[HZ(0x1f1)] = HZ(0x2f8);
    const HJ = function (HI) {
      const HG = HZ;
      if (HI[HG(0x2f1)] && HI[HG(0x2f1)]["J"] === HL) {
        HW[HG(0x217)] = 0x3 * 0x22d + 0x1075 + -0x2 * 0xb7e;
        console["log"](HG(0x270));
      }
    };
    document[HZ(0x249)](HZ(0x1ff), HJ);
    HL[HZ(0x2d9)]["c"] = Date["now"]()["toString"]();
    const Hc = document[HZ(0x27f)](HZ(0x2a3));
    Hc["className"] = HZ(0x302);
    if (HW[HZ(0x217)] > 0x17a8 + 0x1047 + -0x27ef) {
      const HI = HW[HZ(0x1f5)]((HU) => {
        const Hd = HZ;
        const HY = H2[Hd(0x26c)]((HO) => HO[Hd(0x30c)] === HU);
        return HY ? HY[Hd(0x235)] : "";
      })[HZ(0x226)]((HU) => HU);
      const HF = HI[HZ(0x26a)](",\x20");
      const Hq = 0x108c + -0x2 * -0x117f + 0x9 * -0x5b5;
      Hc[HZ(0x2af)] =
        HF[HZ(0x217)] > Hq
          ? HF["substring"](-0x2221 * 0x1 + 0x1eb3 + 0x36e * 0x1, Hq) + "..."
          : HF;
      Hc[HZ(0x261)] = HI[HZ(0x26a)](",\x20");
    } else {
      Hc[HZ(0x2af)] = "Sélectionner\x20motifs";
    }
    Hc[HZ(0x209)] = HZ(0x2a3);
    HL[HZ(0x29a)](Hc);
    const Hg = document[HZ(0x27f)](HZ(0x234));
    Hg[HZ(0x1f1)] = HZ(0x2fb);
    H2["forEach"]((HU) => {
      const v0 = HZ;
      const HY = document[v0(0x27f)](v0(0x21e));
      const HO = document["createElement"](v0(0x24a));
      HO[v0(0x209)] = v0(0x299);
      HO["value"] = HU[v0(0x30c)];
      HO[v0(0x2d9)][v0(0x235)] = HU[v0(0x235)];
      if (HW[v0(0x2c6)](HU["value"])) {
        HO[v0(0x276)] = !![];
      }
      HO[v0(0x249)]("change", function () {
        const v1 = v0;
        if (HL[v1(0x2d9)]["g"] === v1(0x23f)) {
          HL[v1(0x2d9)]["g"] = "false";
          HW[v1(0x217)] = 0x1b53 + 0x21a6 + 0x3cf9 * -0x1;
        }
        const HK = Hg["querySelectorAll"]("input[type=\x22checkbox\x22]");
        const HM = [];
        const Hf = [];
        HK[v1(0x301)]((HR) => {
          const v2 = v1;
          if (HR[v2(0x276)]) {
            HM[v2(0x2ee)](HR[v2(0x30c)]);
            Hf[v2(0x2ee)](HR[v2(0x2d9)][v2(0x235)]);
          }
        });
        if (Hf[v1(0x217)] > 0x1e22 + 0x3 * 0xbb3 + -0x413b) {
          const HR = Hf[v1(0x26a)](",\x20");
          const HT = 0x44b * -0x1 + -0x210c + 0x2584;
          Hc[v1(0x2af)] =
            HR[v1(0x217)] > HT
              ? HR[v1(0x271)](-0x469 + 0x8b3 + -0x44a, HT) + "..."
              : HR;
          Hc[v1(0x261)] = Hf[v1(0x26a)](",\x20");
          const HP =
            HW[v1(0x217)] !== HM["length"] ||
            HM[v1(0x1d1)]((Hi) => !HW["includes"](Hi));
          if (HP) {
            Hb[v1(0x218)][v1(0x2db)] = "block";
            Hb[v1(0x2af)] = "Enregistrer";
            Hb[v1(0x1d7)] = ![];
          } else {
            Hb[v1(0x218)]["display"] = v1(0x1d6);
          }
        } else {
          Hc[v1(0x2af)] = "Sélectionner\x20motifs";
          Hc[v1(0x261)] = "";
          if (HW[v1(0x217)] > 0x13d * 0xc + 0xb62 + -0x1a3e) {
            Hb[v1(0x218)][v1(0x2db)] = v1(0x219);
            Hb[v1(0x2af)] = v1(0x1ec);
            Hb[v1(0x1d7)] = ![];
          } else {
            Hb[v1(0x218)][v1(0x2db)] = v1(0x1d6);
          }
        }
        console[v1(0x2b9)]("Selected\x20motives:", Hf);
      });
      HY["appendChild"](HO);
      HY["appendChild"](document["createTextNode"]("\x20" + HU[v0(0x235)]));
      Hg[v0(0x29a)](HY);
    });
    HL[HZ(0x29a)](Hg);
    const Hb = document[HZ(0x27f)]("button");
    Hb[HZ(0x1f1)] = "ko-motives-save-btn";
    Hb["textContent"] = HZ(0x1ec);
    Hb[HZ(0x209)] = "button";
    Hb[HZ(0x218)][HZ(0x2db)] = HZ(0x1d6);
    Hb[HZ(0x249)](HZ(0x259), function () {
      const v3 = HZ;
      const HU = Hg["querySelectorAll"]("input[type=\x22checkbox\x22]");
      const HY = [];
      HU[v3(0x301)]((Ho) => {
        const v4 = v3;
        if (Ho[v4(0x276)]) {
          HY[v4(0x2ee)](Ho[v4(0x30c)]);
        }
      });
      const HO = HL[v3(0x2e9)]("tr");
      if (!HO) {
        alert(v3(0x2c3));
        return;
      }
      const HK = HO[v3(0x307)](v3(0x21c));
      if (!HK || !HK["href"]) {
        alert(v3(0x274));
        return;
      }
      const HM = HK["href"];
      const Hf = HM[v3(0x233)](/\/opportunite\/([^\/]+)\/site/);
      if (!Hf || !Hf[-0xf * 0x216 + -0x2f7 * 0x1 + 0x1 * 0x2242]) {
        alert(v3(0x24d) + HM);
        return;
      }
      const HR = Hf[0x2f * 0x3 + 0x32 * -0x52 + -0xf * -0x108];
      const HT = v3(0x223) + HR + "/statut_mandat";
      let HP = new URLSearchParams();
      HP[v3(0x2e8)]("statut_mandat_pfo", v3(0x206));
      HY[v3(0x301)]((Ho) => {
        const v5 = v3;
        HP[v5(0x2e8)](v5(0x2c9), Ho);
      });
      HP[v3(0x2e8)]("motif_ko_autre", "");
      console[v3(0x2b9)](v3(0x2ad), HT);
      console[v3(0x2b9)](v3(0x293), HP[v3(0x1f0)]());
      Hb["textContent"] = v3(0x310);
      Hb[v3(0x1d7)] = !![];
      const Hi = document[v3(0x307)]("#uc2m_token2")?.["value"] || "";
      try {
        const Ho = new Headers();
        Ho[v3(0x2e8)](v3(0x1dd), v3(0x2ab));
        Ho[v3(0x2e8)](v3(0x2ae), v3(0x205));
        Ho[v3(0x2e8)](v3(0x2a5), Hi);
        const Hn = {
          method: v3(0x2e4),
          headers: Ho,
          body: HP[v3(0x1f0)](),
          credentials: v3(0x200),
          mode: "cors",
        };
        const Ha =
          typeof unsafeWindow !== v3(0x243)
            ? unsafeWindow["fetch"](HT, Hn)
            : window[v3(0x279)](HT, Hn);
        Ha["then"]((Hk) => {
          const v6 = v3;
          console[v6(0x2b9)](
            "Response\x20status:",
            Hk[v6(0x311)],
            Hk[v6(0x1e2)]
          );
          return Hk[v6(0x235)]()[v6(0x288)]((Hu) => {
            const v7 = v6;
            console["log"](v7(0x2ba), Hu);
            try {
              return {
                ok: Hk["ok"],
                status: Hk[v7(0x311)],
                data: Hu[v7(0x1e9)]("{") ? JSON[v7(0x285)](Hu) : Hu,
              };
            } catch (Hx) {
              const HB = {};
              HB["ok"] = Hk["ok"];
              HB[v7(0x311)] = Hk[v7(0x311)];
              HB[v7(0x262)] = Hu;
              return HB;
            }
          });
        })
          [v3(0x288)]((Hk) => {
            const v8 = v3;
            console[v8(0x2b9)](v8(0x2b7), Hk);
            if (Hk["ok"]) {
              Hb["textContent"] = v8(0x1d8);
              setTimeout(function () {
                const v9 = v8;
                Hb["style"][v9(0x2db)] = v9(0x1d6);
                Hb[v9(0x1d7)] = ![];
                Hg[v9(0x317)][v9(0x2f3)](v9(0x29b));
                const Hu = HL[v9(0x2e9)]("tr");
                if (Hu) {
                  const HB = Hg[v9(0x272)](v9(0x1d5));
                  if (HB[v9(0x217)] > -0xdb1 * -0x1 + 0x79 * 0x1f + -0x1c58) {
                    const Hm = Hu[v9(0x307)](v9(0x1ed));
                    if (Hm) {
                      const He = Hm[v9(0x307)](".statut-mandat-dropdown");
                      if (He) {
                        const Hw = He[v9(0x307)](v9(0x1dc));
                        if (Hw && !Hw[v9(0x276)]) {
                          Hw[v9(0x276)] = !![];
                          const Ht = He[v9(0x307)](v9(0x23d));
                          if (Ht) {
                            const HD = s["find"](
                              (Hs) => Hs["value"] === v9(0x206)
                            );
                            if (HD) {
                              Ht[v9(0x2af)] = HD[v9(0x235)];
                              Ht["title"] = HD[v9(0x235)];
                              console[v9(0x2b9)](v9(0x2c1));
                              const Hs = He[v9(0x307)](
                                ".statut-mandat-save-btn"
                              );
                              if (Hs) {
                                Hs[v9(0x218)][v9(0x2db)] = v9(0x219);
                                Hs[v9(0x2af)] = v9(0x1ec);
                                Hs["disabled"] = ![];
                              }
                            }
                          }
                          He[v9(0x2d9)]["b"] = v9(0x206);
                          let Hj = Hu[v9(0x307)](v9(0x26e));
                          if (Hj && Hj["textContent"][v9(0x2c6)]("Relancer")) {
                            Hj[v9(0x218)][v9(0x2db)] = "";
                          }
                        }
                      }
                    }
                  }
                }
                const Hx = Hu[v9(0x307)]("td:nth-of-type(10)");
                if (Hx) {
                  const HA = [];
                  const HC = Hg["querySelectorAll"](v9(0x202));
                  HC[v9(0x301)]((Hl) => {
                    const vH = v9;
                    if (Hl[vH(0x276)]) {
                      const Hp = H2[vH(0x26c)](
                        (HN) => HN[vH(0x30c)] === Hl[vH(0x30c)]
                      );
                      if (Hp) {
                        HA[vH(0x2ee)](Hp[vH(0x235)]);
                      }
                    }
                  });
                  Hx[v9(0x2d9)]["I"] = HA[v9(0x26a)](",\x20");
                  HL[v9(0x2d9)]["g"] = v9(0x27a);
                  HW[v9(0x217)] = -0x87 + 0x2b8 + -0x231;
                  HC[v9(0x301)]((Hl) => {
                    const vv = v9;
                    if (Hl["checked"]) {
                      HW[vv(0x2ee)](Hl[vv(0x30c)]);
                    }
                  });
                  console["log"](v9(0x1fa), HW);
                }
              }, -0x1 * 0x106c + 0xa * 0x33d + -0xa1a);
            } else {
              Hb[v8(0x2af)] = "Error!";
              console["error"](
                "Failed\x20to\x20save\x20KO\x20motives:",
                Hk[v8(0x311)]
              );
              if (
                typeof Hk[v8(0x262)] === v8(0x1f2) &&
                Hk[v8(0x262)]["message"]
              ) {
                alert(v8(0x282) + Hk["data"]["message"]);
              } else if (Hk[v8(0x262)][v8(0x2c6)](v8(0x287))) {
                alert(v8(0x1fb));
              } else {
                alert(v8(0x28b));
              }
              setTimeout(function () {
                const vy = v8;
                Hb[vy(0x2af)] = "Enregistrer";
                Hb[vy(0x1d7)] = ![];
              }, -0xcd3 + 0xdaa + 0x101 * 0x5);
            }
          })
          [v3(0x29e)]((Hk) => {
            const vh = v3;
            Hb["textContent"] = "Error!";
            console[vh(0x314)]("Failed\x20to\x20save\x20KO\x20motives:", Hk);
            alert(vh(0x2cd));
            setTimeout(function () {
              const vE = vh;
              Hb["textContent"] = vE(0x1ec);
              Hb[vE(0x1d7)] = ![];
            }, 0x854 + 0x8af + -0x5 * 0x23b);
          });
      } catch (Hk) {
        console[v3(0x314)](v3(0x295), Hk);
        Hb["textContent"] = "Error!";
        alert(v3(0x2da) + Hk[v3(0x220)]);
        setTimeout(function () {
          const vX = v3;
          Hb["textContent"] = "Enregistrer";
          Hb[vX(0x1d7)] = ![];
        }, -0xd7f + -0x171 * 0x1 + 0x14cc);
      }
    });
    HL[HZ(0x29a)](Hb);
    Hc[HZ(0x249)](HZ(0x259), function (HU) {
      const vW = HZ;
      HU[vW(0x23c)]();
      Hg[vW(0x317)][vW(0x1f4)](vW(0x29b));
    });
    document[HZ(0x249)](HZ(0x259), function (HU) {
      const vL = HZ;
      if (!HL["contains"](HU["target"])) {
        Hg[vL(0x317)][vL(0x2f3)](vL(0x29b));
      }
    });
    return HL;
  }
  function H5(HX) {
    const vJ = HV;
    const HW = document[vJ(0x27f)](vJ(0x234));
    HW[vJ(0x1f1)] = vJ(0x290);
    HW[vJ(0x2d9)]["b"] = HX;
    const HL = document[vJ(0x27f)](vJ(0x2a3));
    HL[vJ(0x1f1)] = vJ(0x1df);
    const HJ = s[vJ(0x26c)]((HI) => HI[vJ(0x30c)] === HX);
    const Hc = HJ ? HJ[vJ(0x235)] : HX;
    HL[vJ(0x2af)] = Hc || "Sélectionner\x20statut";
    HL[vJ(0x261)] = Hc || "";
    HL[vJ(0x209)] = "button";
    HW["appendChild"](HL);
    const Hg = document[vJ(0x27f)](vJ(0x234));
    Hg[vJ(0x1f1)] = vJ(0x238);
    s[vJ(0x301)]((HI) => {
      const vc = vJ;
      const HF = document["createElement"](vc(0x21e));
      const Hq = document[vc(0x27f)]("input");
      Hq[vc(0x209)] = vc(0x22d);
      Hq["name"] = "statut-mandat";
      Hq[vc(0x30c)] = HI[vc(0x30c)];
      Hq[vc(0x2d9)][vc(0x235)] = HI[vc(0x235)];
      if (
        HX &&
        (HX[vc(0x275)]() === HI[vc(0x30c)][vc(0x275)]() ||
          HX["toLowerCase"]() === HI[vc(0x235)]["toLowerCase"]())
      ) {
        Hq[vc(0x276)] = !![];
      }
      Hq[vc(0x249)](vc(0x316), function () {
        const vg = vc;
        if (this[vg(0x276)]) {
          HL[vg(0x2af)] = this[vg(0x2d9)][vg(0x235)];
          HL[vg(0x261)] = this["dataset"]["text"];
          if (HX !== this["value"]) {
            Hb["style"][vg(0x2db)] = vg(0x219);
            Hb[vg(0x2af)] = "Enregistrer";
            Hb[vg(0x1d7)] = ![];
          } else {
            Hb[vg(0x218)][vg(0x2db)] = vg(0x1d6);
          }
        }
      });
      HF[vc(0x29a)](Hq);
      HF[vc(0x29a)](document["createTextNode"]("\x20" + HI[vc(0x235)]));
      Hg[vc(0x29a)](HF);
    });
    HW[vJ(0x29a)](Hg);
    const Hb = document[vJ(0x27f)]("button");
    Hb[vJ(0x1f1)] = vJ(0x229);
    Hb[vJ(0x2af)] = "Enregistrer";
    Hb[vJ(0x209)] = "button";
    Hb[vJ(0x218)][vJ(0x2db)] = vJ(0x1d6);
    Hb["addEventListener"](vJ(0x259), function () {
      const vb = vJ;
      const HI = Hg[vb(0x307)](vb(0x286));
      if (!HI) {
        alert(vb(0x239));
        return;
      }
      const HF = HW[vb(0x2e9)]("tr");
      if (!HF) {
        alert(vb(0x2c3));
        return;
      }
      const Hq = HF[vb(0x307)]("td:nth-of-type(6)\x20a");
      if (!Hq || !Hq[vb(0x24b)]) {
        alert(vb(0x274));
        return;
      }
      const HU = Hq[vb(0x24b)];
      const HY = HU[vb(0x233)](/\/opportunite\/([^\/]+)\/site/);
      if (!HY || !HY[-0x2531 + -0xa4 + 0x25d6]) {
        alert(
          "Could\x20not\x20extract\x20opportunity\x20ID\x20from\x20the\x20URL:\x20" +
            HU
        );
        return;
      }
      const HO = HY[0x2 * -0x10db + -0x3cd * 0x8 + 0x401f];
      const HK = "https://watt-else.pro/opportunite/" + HO + "/statut_mandat";
      let HM = new URLSearchParams();
      HM["append"](vb(0x28e), HI[vb(0x30c)]);
      if (HI["value"] === vb(0x206)) {
        const HR = HF[vb(0x307)](vb(0x236));
        if (HR) {
          const HT = HR[vb(0x307)](vb(0x212));
          if (HT) {
            const HP = HT[vb(0x272)](vb(0x1d5));
            HP[vb(0x301)]((Hi) => {
              const vI = vb;
              HM[vI(0x2e8)](vI(0x2c9), Hi[vI(0x30c)]);
            });
          }
        }
      } else {
        HM["append"](vb(0x2c9), "");
      }
      HM[vb(0x2e8)](vb(0x2d4), "");
      console["log"](vb(0x2ad), HK);
      console[vb(0x2b9)]("With\x20payload:", HM[vb(0x1f0)]());
      Hb[vb(0x2af)] = vb(0x310);
      Hb[vb(0x1d7)] = !![];
      const Hf = document[vb(0x307)](vb(0x2e2))?.[vb(0x30c)] || "";
      try {
        const Hi = new Headers();
        Hi[vb(0x2e8)](vb(0x1dd), vb(0x2ab));
        Hi[vb(0x2e8)](vb(0x2ae), vb(0x205));
        Hi[vb(0x2e8)](vb(0x2a5), Hf);
        const Ho = {
          method: "POST",
          headers: Hi,
          body: HM[vb(0x1f0)](),
          credentials: vb(0x200),
          mode: vb(0x2cf),
        };
        const Hn =
          typeof unsafeWindow !== vb(0x243)
            ? unsafeWindow[vb(0x279)](HK, Ho)
            : window[vb(0x279)](HK, Ho);
        Hn[vb(0x288)]((Ha) => {
          const vF = vb;
          console["log"]("Response\x20status:", Ha[vF(0x311)], Ha[vF(0x1e2)]);
          return Ha[vF(0x235)]()[vF(0x288)]((Hk) => {
            const vq = vF;
            console[vq(0x2b9)](vq(0x2ba), Hk);
            try {
              return {
                ok: Ha["ok"],
                status: Ha[vq(0x311)],
                data: Hk["startsWith"]("{") ? JSON["parse"](Hk) : Hk,
              };
            } catch (Hu) {
              const Hx = {};
              Hx["ok"] = Ha["ok"];
              Hx[vq(0x311)] = Ha[vq(0x311)];
              Hx[vq(0x262)] = Hk;
              return Hx;
            }
          });
        })
          [vb(0x288)]((Ha) => {
            const vU = vb;
            console["log"]("Processed\x20result:", Ha);
            if (Ha["ok"]) {
              Hb[vU(0x2af)] = "Success!";
              setTimeout(function () {
                const vY = vU;
                Hb[vY(0x218)]["display"] = "none";
                Hb["disabled"] = ![];
                Hg["classList"]["remove"](vY(0x29b));
                const Hk = HF[vY(0x307)](vY(0x1ed));
                if (Hk) {
                  HX = HI[vY(0x30c)];
                  const Hu = Hk["querySelector"](vY(0x313));
                  if (Hu) {
                    Hu[vY(0x2d9)]["b"] = HX;
                  }
                  if (HX === vY(0x206)) {
                    console["log"](vY(0x2b4));
                  } else if (HX !== "mandat\x20KO") {
                    const Hx = HF[vY(0x307)](vY(0x248));
                    if (Hx && Hx[vY(0x2af)][vY(0x2c6)]("Relancer")) {
                      Hx[vY(0x218)][vY(0x2db)] = vY(0x1d6);
                    }
                    const HB = HF[vY(0x307)](vY(0x236));
                    if (HB) {
                      const Hm = HB[vY(0x307)](vY(0x212));
                      if (Hm) {
                        const He = Hm[vY(0x272)](
                          "input[type=\x22checkbox\x22]:checked"
                        );
                        if (
                          He[vY(0x217)] >
                          -0x16d6 * 0x1 + 0x1 * 0x157d + 0x159
                        ) {
                          He["forEach"]((Hs) => {
                            const vO = vY;
                            Hs[vO(0x276)] = ![];
                          });
                          const Hw = Hm[vY(0x307)](vY(0x1de));
                          if (Hw) {
                            Hw[vY(0x2af)] = vY(0x2e3);
                            Hw["title"] = "";
                          }
                          const Ht = {};
                          Ht["J"] = Hm;
                          const Hj = {};
                          Hj[vY(0x2f1)] = Ht;
                          const HD = new CustomEvent(vY(0x1ff), Hj);
                          document[vY(0x2e1)](HD);
                          Hm[vY(0x2d9)]["g"] = vY(0x23f);
                        }
                      }
                    }
                  }
                }
              }, 0x96a * 0x4 + 0x1ff9 + -0x3fc5);
            } else {
              Hb["textContent"] = "Error!";
              console[vU(0x314)](vU(0x30e), Ha[vU(0x311)]);
              if (
                typeof Ha[vU(0x262)] === vU(0x1f2) &&
                Ha[vU(0x262)][vU(0x220)]
              ) {
                alert(vU(0x1ee) + Ha[vU(0x262)]["message"]);
              } else if (Ha[vU(0x262)][vU(0x2c6)]("<html")) {
                alert(vU(0x1fb));
              } else {
                alert(vU(0x260));
              }
              setTimeout(function () {
                const vK = vU;
                Hb[vK(0x2af)] = "Enregistrer";
                Hb[vK(0x1d7)] = ![];
              }, 0x37 * 0x9 + -0x22a5 + 0x2692);
            }
          })
          [vb(0x29e)]((Ha) => {
            const vM = vb;
            Hb[vM(0x2af)] = "Error!";
            console[vM(0x314)](vM(0x30e), Ha);
            alert(
              "Failed\x20to\x20save\x20statut\x20mandat.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details."
            );
            setTimeout(function () {
              const vf = vM;
              Hb["textContent"] = vf(0x1ec);
              Hb["disabled"] = ![];
            }, -0x2a * -0xa2 + 0xffc + -0x24b4);
          });
      } catch (Ha) {
        console["error"]("Error\x20setting\x20up\x20fetch\x20request:", Ha);
        Hb[vb(0x2af)] = vb(0x2c0);
        alert(vb(0x2da) + Ha[vb(0x220)]);
        setTimeout(function () {
          const vR = vb;
          Hb["textContent"] = vR(0x1ec);
          Hb[vR(0x1d7)] = ![];
        }, -0x5 * 0x71 + 0x21c0 + -0x19af);
      }
    });
    HW[vJ(0x29a)](Hb);
    HL["addEventListener"](vJ(0x259), function (HI) {
      const vT = vJ;
      HI[vT(0x23c)]();
      Hg["classList"][vT(0x1f4)]("show");
    });
    document["addEventListener"](vJ(0x259), function (HI) {
      const vP = vJ;
      if (!HW[vP(0x24f)](HI[vP(0x1ea)])) {
        Hg[vP(0x317)]["remove"](vP(0x29b));
      }
    });
    return HW;
  }
  function H6(HX) {
    const vi = HV;
    if (HX[vi(0x307)](vi(0x254))) {
      return;
    }
    const HW = HX[vi(0x307)](vi(0x21c));
    const HL = HW ? HW["href"] : "#";
    const HJ = HX[vi(0x307)](vi(0x268));
    const Hc = HJ ? HJ[vi(0x2af)]["trim"]() : "";
    const Hg = HX["querySelector"]("td:nth-of-type(5)");
    const Hb = Hg ? Hg[vi(0x2af)]["trim"]() : "";
    const HI = HX[vi(0x307)](vi(0x1ed));
    const HF = HI ? HI["textContent"][vi(0x1fe)]() : "";
    const Hq = document["createElement"]("td");
    Hq[vi(0x1f1)] = "action-buttons-added";
    Hq[vi(0x218)][vi(0x2db)] = vi(0x207);
    Hq["style"]["gap"] = "2px";
    const HU = HX[vi(0x307)](vi(0x227));
    const HY = HU ? HU["textContent"][vi(0x1fe)]() : "";
    const HO = document["createElement"](vi(0x2a3));
    HO[vi(0x2af)] = "WE";
    HO["className"] = vi(0x2c4);
    HO["style"][vi(0x298)] = vi(0x2b0);
    HO["onclick"] = function () {
      const vo = vi;
      window[vo(0x27c)](HL, vo(0x24e));
    };
    const HK = document["createElement"](vi(0x2a3));
    HK[vi(0x2af)] = "SF";
    HK["className"] = "btn\x20btn-sm\x20btn-info";
    HK["style"]["margin"] = vi(0x2b0);
    HK[vi(0x2b6)] = function () {
      const vn = vi;
      const Hf = Hc + "\x20" + Hb;
      const HR =
        vn(0x2df) + encodeURIComponent(Hf) + "&initialViewMode=summary";
      window["open"](HR, vn(0x24e));
    };
    const HM = document[vi(0x27f)]("button");
    HM[vi(0x2af)] = vi(0x2f4);
    HM[vi(0x1f1)] = vi(0x255);
    HM[vi(0x218)]["margin"] = "1px";
    HM[vi(0x2b6)] = function () {
      const va = vi;
      const Hf = va(0x28a) + Hc + "-" + Hb;
      const HR = va(0x225) + HY + va(0x2e6);
      const HT =
        va(0x30d) +
        "?cc=wehelp@sefe-energy.pro" +
        va(0x1d9) +
        encodeURIComponent(Hf) +
        va(0x2d5) +
        HR;
      window[va(0x27c)](HT, va(0x24e));
    };
    Hq[vi(0x29a)](HO);
    Hq["appendChild"](HK);
    Hq[vi(0x29a)](HM);
    if (HF[vi(0x2c6)]("mandat\x20KO")) {
      const Hf = document[vi(0x27f)](vi(0x2a3));
      Hf[vi(0x2af)] = "Relancer";
      Hf[vi(0x1f1)] = "btn\x20btn-sm\x20btn-danger";
      Hf[vi(0x218)][vi(0x298)] = vi(0x251);
      Hf[vi(0x2b6)] = function () {
        const vk = vi;
        const HR = HL["match"](/\/opportunite\/([^\/]+)\/site/);
        if (!HR || !HR[0x152 + -0x26ce + 0x257d * 0x1]) {
          alert(vk(0x24d) + HL);
          return;
        }
        const HT = HR[0x3f4 + 0x7ae + 0xba1 * -0x1];
        const HP = document["querySelector"]("#uc2m_token2")?.[vk(0x30c)] || "";
        const Hi =
          "https://watt-else.pro/opportunite/" + HT + "/relance_mandat_ko";
        Hf["textContent"] = vk(0x2cc);
        Hf[vk(0x1d7)] = !![];
        try {
          const Ho = new Headers();
          Ho["append"](vk(0x2ae), vk(0x205));
          Ho["append"]("X-CSRF-TOKEN", HP);
          const Hn = {};
          Hn[vk(0x2d3)] = vk(0x2e4);
          Hn[vk(0x2d1)] = Ho;
          Hn[vk(0x2f0)] = vk(0x200);
          Hn[vk(0x305)] = vk(0x2cf);
          const Ha = Hn;
          const Hk =
            typeof unsafeWindow !== vk(0x243)
              ? unsafeWindow[vk(0x279)](Hi, Ha)
              : window["fetch"](Hi, Ha);
          Hk["then"]((Hu) => {
            const vz = vk;
            console[vz(0x2b9)](vz(0x258), Hu[vz(0x311)], Hu[vz(0x1e2)]);
            return Hu[vz(0x235)]()["then"]((Hx) => {
              const vu = vz;
              console[vu(0x2b9)](vu(0x2bd), Hx);
              try {
                return {
                  ok: Hu["ok"],
                  status: Hu[vu(0x311)],
                  data: Hx[vu(0x1e9)]("{") ? JSON[vu(0x285)](Hx) : Hx,
                };
              } catch (HB) {
                const Hm = {};
                Hm["ok"] = Hu["ok"];
                Hm["status"] = Hu[vu(0x311)];
                Hm[vu(0x262)] = Hx;
                return Hm;
              }
            });
          })
            [vk(0x288)]((Hu) => {
              const vx = vk;
              console[vx(0x2b9)](vx(0x2ce), Hu);
              if (Hu["ok"]) {
                if (
                  typeof Hu[vx(0x262)] === vx(0x1f2) &&
                  Hu[vx(0x262)][vx(0x2e0)] === "OK"
                ) {
                  Hf[vx(0x2af)] = vx(0x1d8);
                  setTimeout(function () {
                    const vB = vx;
                    Hf[vB(0x218)][vB(0x2db)] = "none";
                  }, 0x4a0 + 0x8d * -0x1b + 0x101b * 0x1);
                } else {
                  Hf[vx(0x2af)] = vx(0x23b);
                  alert(vx(0x2ef));
                  setTimeout(function () {
                    const vm = vx;
                    Hf[vm(0x2af)] = vm(0x2a2);
                    Hf[vm(0x1d7)] = ![];
                  }, 0x9b7 * -0x1 + -0x5dc * -0x2 + -0x149 * -0x3);
                }
              } else {
                Hf["textContent"] = vx(0x2c0);
                console[vx(0x314)](vx(0x26b), Hu[vx(0x311)]);
                if (
                  typeof Hu[vx(0x262)] === vx(0x1f2) &&
                  Hu[vx(0x262)]["message"]
                ) {
                  alert(
                    "Failed\x20to\x20relance\x20mandat\x20KO:\x20" +
                      Hu[vx(0x262)]["message"]
                  );
                } else if (Hu[vx(0x262)][vx(0x2c6)](vx(0x287))) {
                  alert(vx(0x1fb));
                } else {
                  alert(vx(0x2b3));
                }
                setTimeout(function () {
                  const ve = vx;
                  Hf[ve(0x2af)] = ve(0x2a2);
                  Hf[ve(0x1d7)] = ![];
                }, -0xdb3 + -0x3ff + -0x29e * -0x9);
              }
            })
            [vk(0x29e)]((Hu) => {
              const vw = vk;
              Hf[vw(0x2af)] = "Error!";
              console[vw(0x314)](
                "Failed\x20to\x20relance\x20mandat\x20KO:",
                Hu
              );
              alert(vw(0x312));
              setTimeout(function () {
                const vt = vw;
                Hf[vt(0x2af)] = "Relancer";
                Hf[vt(0x1d7)] = ![];
              }, -0x1681 * -0x1 + -0x16 * -0x86 + -0x1c29);
            });
        } catch (Hu) {
          console["error"](
            "Error\x20setting\x20up\x20fetch\x20request\x20for\x20relance:",
            Hu
          );
          Hf[vk(0x2af)] = vk(0x2c0);
          alert(vk(0x215) + Hu[vk(0x220)]);
          setTimeout(function () {
            const vj = vk;
            Hf["textContent"] = "Relancer";
            Hf[vj(0x1d7)] = ![];
          }, -0x1021 + 0xd5c * 0x2 + -0x7 * 0xad);
        }
      };
      Hq[vi(0x29a)](Hf);
    }
    HX[vi(0x29a)](Hq);
  }
  function H7(HX) {
    const vD = HV;
    if (HX[vD(0x307)](".ko-motives-dropdown")) {
      return;
    }
    const HW = HX[vD(0x307)]("td:nth-of-type(10)");
    if (!HW) return;
    const HL = HW[vD(0x2af)][vD(0x1fe)]();
    const HJ = H4(HL);
    HW[vD(0x304)] = "";
    HW[vD(0x29a)](HJ);
    HW[vD(0x1f1)] += vD(0x232);
  }
  function H8(HX) {
    const vs = HV;
    if (HX[vs(0x307)](vs(0x313))) {
      return;
    }
    const HW = HX["querySelector"](vs(0x1ed));
    if (!HW) return;
    const HL = HW[vs(0x2af)]["trim"]();
    const HJ = H5(HL);
    HW[vs(0x304)] = "";
    HW[vs(0x29a)](HJ);
    HW[vs(0x1f1)] += "\x20statut-mandat-select-added";
  }
  function H9(HX) {
    const vA = HV;
    if (z) return;
    const HW = HX[vA(0x307)](vA(0x211));
    if (!HW) return;
    if (HW[vA(0x307)](vA(0x29f))) {
      z = !![];
      return;
    }
    const HL = document["createElement"]("th");
    HL[vA(0x2af)] = vA(0x2f6);
    HL[vA(0x2a8)](vA(0x309), "col");
    HL[vA(0x2a8)](vA(0x2e7), vA(0x2a6));
    HL["className"] = "sorting";
    HL["style"][vA(0x22b)] = vA(0x284);
    HW[vA(0x29a)](HL);
    const HJ = HX[vA(0x307)](vA(0x244));
    if (HJ) {
      const Hc = document[vA(0x27f)]("th");
      Hc[vA(0x2a8)](vA(0x2a1), "1");
      Hc["setAttribute"](vA(0x1f8), "1");
      HJ[vA(0x29a)](Hc);
    }
    z = !![];
  }
  function HH() {
    const vC = HV;
    const HX = document[vC(0x2fc)]("mydatatable");
    HX["style"][vC(0x22b)] = "auto";
    if (!HX) {
      console[vC(0x2b9)](vC(0x308));
      return;
    }
    const HW = HX[vC(0x307)](vC(0x297));
    if (!HW) {
      console[vC(0x2b9)](
        "Header\x20was\x20removed,\x20resetting\x20headerAdded\x20flag"
      );
      z = ![];
    }
    H9(HX);
    const HL = HX[vC(0x272)](vC(0x1f3));
    HL[vC(0x301)]((HJ) => {
      H6(HJ);
      HE(HJ);
      H7(HJ);
      H8(HJ);
    });
  }
  function Hv() {
    const vl = HV;
    const HX = document[vl(0x2fc)]("mydatatable");
    if (!HX) {
      console[vl(0x2b9)](vl(0x210));
      setTimeout(Hv, -0x21d0 + 0x2 * 0x70d + -0x2 * -0xad5);
      return;
    }
    HH();
    console[vl(0x2b9)]("Initial\x20table\x20processing\x20complete");
    const HW = new MutationObserver(function (HJ) {
      const vp = vl;
      console[vp(0x2b9)](vp(0x216));
      setTimeout(() => {
        HH();
      }, 0x3a5 * 0x6 + -0x97 * 0x41 + 0x581 * 0x3);
    });
    const HL = {};
    HL[vl(0x296)] = !![];
    HL[vl(0x1e1)] = !![];
    HL[vl(0x2b8)] = ![];
    HW[vl(0x2f5)](HX, HL);
    if (HX[vl(0x23e)]) {
      const HJ = {};
      HJ["childList"] = !![];
      HW[vl(0x2f5)](HX[vl(0x23e)], HJ);
    }
    setInterval(HH, 0x2223 + 0x1466 + 0x2eb9 * -0x1);
    console[vl(0x2b9)](vl(0x2fe));
  }
  function Hy(HX) {
    return new Promise((HW, HL) => {
      GM_xmlhttpRequest({
        method: "GET",
        url: HX,
        onload: function (HJ) {
          const vN = L;
          if (
            HJ[vN(0x311)] >= 0x23a5 + 0x2eb + 0x138 * -0x1f &&
            HJ[vN(0x311)] < -0xd87 * -0x1 + -0x619 * 0x6 + -0x183b * -0x1
          ) {
            HW(HJ["responseText"]);
          } else {
            HL(new Error(vN(0x20b) + HX + ":\x20" + HJ[vN(0x1e2)]));
          }
        },
        onerror: function (HJ) {
          const vS = L;
          HL(new Error(vS(0x20b) + HX + ":\x20" + HJ));
        },
      });
    });
  }
  function Hh(HX) {
    const vV = HV;
    const HW = new DOMParser();
    const HL = HW["parseFromString"](HX, vV(0x267));
    const HJ = HL[vV(0x272)](vV(0x283));
    for (const Hc of HJ) {
      const Hg = Hc[vV(0x307)]("h2");
      if (
        Hg &&
        Hg[vV(0x2af)][vV(0x2c6)](
          "Mandat\x20de\x20récupération\x20des\x20données"
        )
      ) {
        const Hb = Hc[vV(0x307)](".btn.default.btn-outline.nolock");
        if (Hb && Hb[vV(0x28c)](vV(0x20d))) {
          return Hb[vV(0x1d0)](vV(0x20d));
        }
      }
    }
    return null;
  }
  function HE(HX) {
    const vr = HV;
    const HW = HX[vr(0x307)](vr(0x254));
    if (!HW) {
      return;
    }
    if (HW[vr(0x307)](".mandat-button")) {
      return;
    }
    const HL = HX["querySelector"](vr(0x2dd));
    const HJ = HL ? HL[vr(0x2af)]["trim"]() : "";
    if (!HJ) {
      return;
    }
    const Hc = HX["querySelector"]("td:nth-of-type(6)\x20a");
    const Hg = Hc ? Hc[vr(0x24b)] : "#";
    const Hb = document["createElement"]("button");
    Hb["textContent"] = "Mandat";
    Hb["className"] = vr(0x1e5);
    Hb["style"]["margin"] = vr(0x2b0);
    Hb[vr(0x2d9)]["F"] = Hg;
    Hb[vr(0x2b6)] = function () {
      const vZ = vr;
      const HI = Hb[vZ(0x2af)];
      Hb[vZ(0x2af)] = "Loading...";
      Hb[vZ(0x1d7)] = !![];
      Hy(Hg)
        [vZ(0x288)]((HF) => {
          const vQ = vZ;
          const Hq = Hh(HF);
          if (Hq) {
            window[vQ(0x27c)](Hq, vQ(0x24e));
          } else {
            alert("⛔\x20Cette\x20affaire\x20est\x20supprimée");
          }
        })
        ["catch"]((HF) => {
          const vG = vZ;
          console[vG(0x314)](vG(0x2eb), HF);
          alert(vG(0x2c7) + HF[vG(0x220)]);
        })
        ["finally"](() => {
          const vd = vZ;
          Hb["textContent"] = HI;
          Hb[vd(0x1d7)] = ![];
        });
    };
    HW[vr(0x29a)](Hb);
  }
  if (document["readyState"] === HV(0x240)) {
    document[HV(0x249)]("DOMContentLoaded", function () {
      H3();
      Hv();
    });
  } else {
    H3();
    Hv();
  }
}
function W() {
  const yI = [
    "1604736JUPgse",
    "Cette\x20affaire\x20appartient\x20au\x20courtier\x20",
    "Decommission\x20broker\x20observer\x20started\x20on\x20decommissions\x20page",
    "opacity",
    "\x20ko-motives-select-added",
    "match",
    "div",
    "text",
    "td:nth-of-type(10)",
    "-2px\x200px\x2074px\x20-18px\x20rgba(0,0,0,0.75)",
    "statut-mandat-dropdown-content",
    "Veuillez\x20sélectionner\x20un\x20statut!",
    "swal2-content",
    "Failed!",
    "stopPropagation",
    ".statut-mandat-dropbtn",
    "parentNode",
    "true",
    "loading",
    "debu",
    "flexShrink",
    "undefined",
    "tr.filter",
    "20px",
    "test",
    "bind",
    ".btn-danger",
    "addEventListener",
    "input",
    "href",
    "2690775SbeULg",
    "Could\x20not\x20extract\x20opportunity\x20ID\x20from\x20the\x20URL:\x20",
    "_blank",
    "contains",
    "warning",
    "1px",
    "7\x20COM\x207",
    "\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown,\x20.statut-mandat-dropdown\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20button\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropbtn,\x20.statut-mandat-dropbtn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f8f9fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ced4da;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Dropdown\x20content\x20(hidden\x20by\x20default)\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content,\x20.statut-mandat-dropdown-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20250px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20300px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x208px\x2016px\x200\x20rgba(0,0,0,0.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Show\x20the\x20dropdown\x20menu\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content.show,\x20.statut-mandat-dropdown-content.show\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Checkbox\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20label,\x20.statut-mandat-dropdown-content\x20label\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#f1f1f1;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20label:hover,\x20.statut-mandat-dropdown-content\x20label:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f1f1f1;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Checkbox\x20style\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-dropdown-content\x20input[type=\x22checkbox\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20vertical-align:\x20middle;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Save\x20button\x20style\x20*/\x0a\x20\x20\x20\x20\x20\x20.ko-motives-save-btn,\x20.statut-mandat-save-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#007bff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#0069d9;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20.ko-motives-save-btn:hover,\x20.statut-mandat-save-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#0069d9;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Make\x20the\x20motives\x20cell\x20visible\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20td:nth-of-type(10)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20/*\x20Make\x20the\x20statut\x20mandat\x20cell\x20visible\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20td:nth-of-type(9)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20th[name=\x22statut_mandat_motifs_ko\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20180px\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20th[name=\x22statut_mandat_pfo\x22]\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20120px\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20/*\x20Adjust\x20the\x20column\x20header\x20for\x20the\x20filter\x20row\x20*/\x0a\x20\x20\x20\x20\x20\x20#mydatatable\x20tr.filter\x20th:nth-of-type(10),\x20#mydatatable\x20tr.filter\x20th:nth-of-type(9)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20table-cell\x20!important;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20",
    ".action-buttons-added",
    "btn\x20btn-sm\x20btn-success",
    "constructor",
    "#333",
    "Relance\x20response\x20status:",
    "click",
    "Elements\x20enabled.\x20Still\x20watching\x20for\x20new\x20elements.",
    "opacity\x200.3s\x20ease-in",
    "Found\x20match:\x20\x22",
    "success",
    "exception",
    "location",
    "Failed\x20to\x20save\x20statut\x20mandat.\x20Server\x20returned\x20an\x20error.",
    "title",
    "data",
    "marginBottom",
    "Element\x20enabler\x20initialized",
    "4px",
    "1.4",
    "text/html",
    "td:nth-of-type(7)",
    "chain",
    "join",
    "Failed\x20to\x20relance\x20mandat\x20KO:",
    "find",
    "Il\x20faut\x20pas\x20traiter\x20les\x20decommission\x20courtier\x20pour\x20",
    ".action-buttons-added\x20.btn-danger",
    "Information",
    "Reset\x20selectedMotives\x20array\x20for\x20KO\x20motives\x20dropdown",
    "substring",
    "querySelectorAll",
    "à\x20vérifier",
    "Could\x20not\x20find\x20the\x20site\x20URL!",
    "toLowerCase",
    "checked",
    "10px",
    "relative",
    "fetch",
    "false",
    "300px",
    "open",
    "borderRadius",
    "Multisites\x20:\x20PCE\x20non\x20mentionnés",
    "createElement",
    "<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2212\x22\x20fill=\x22#4CAF50\x22\x20fill-opacity=\x220.2\x22/><path\x20d=\x22M9\x2012.5L11\x2014.5L15.5\x2010\x22\x20stroke=\x22#4CAF50\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22/></svg>",
    "table\x20tbody",
    "Failed\x20to\x20save\x20KO\x20motives:\x20",
    ".mt-overlay",
    "200px",
    "parse",
    "input[name=\x22statut-mandat\x22]:checked",
    "<html",
    "then",
    "pointer",
    "VI-",
    "Failed\x20to\x20save\x20KO\x20motives.\x20Server\x20returned\x20an\x20error.",
    "hasAttribute",
    "12px",
    "statut_mandat_pfo",
    "16px",
    "statut-mandat-dropdown",
    "10OASVfH",
    "\x27Poppins\x27,\x20Arial,\x20sans-serif",
    "With\x20payload:",
    "<svg\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22><path\x20d=\x22M18\x206L6\x2018M6\x206L18\x2018\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>",
    "Error\x20setting\x20up\x20fetch\x20request:",
    "childList",
    "tr.heading\x20[name=\x22actions\x22]",
    "margin",
    "checkbox",
    "appendChild",
    "show",
    "animation",
    "head",
    "catch",
    "[name=\x22actions\x22]",
    "color",
    "rowspan",
    "Relancer",
    "button",
    "#fff",
    "X-CSRF-TOKEN",
    "actions",
    "position",
    "setAttribute",
    "\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "addedNodes",
    "application/x-www-form-urlencoded;\x20charset=UTF-8",
    "9999",
    "Making\x20request\x20to:",
    "X-Requested-With",
    "textContent",
    "2px",
    "height",
    "info",
    "Le\x20courtier\x20n\x27a\x20pas\x20été\x20notifié.\x20Erreur\x20du\x20serveur.",
    "Changed\x20to\x20mandat\x20KO\x20status,\x20KO\x20motives\x20should\x20be\x20editable",
    "PCE\x20mentionné\x20différent\x20du\x20PCE\x20consulté",
    "onclick",
    "Processed\x20result:",
    "characterData",
    "log",
    "Raw\x20response:",
    "fontSize",
    "pulse-animation-style",
    "Raw\x20relance\x20response:",
    "absolute",
    "body",
    "Error!",
    "Auto-updated\x20status\x20to\x20\x27mandat\x20KO\x27\x20due\x20to\x20KO\x20motives\x20selection",
    "Target\x20div\x20not\x20found:\x20",
    "Could\x20not\x20find\x20the\x20associated\x20row!",
    "btn\x20btn-sm\x20btn-primary",
    "left",
    "includes",
    "Failed\x20to\x20fetch\x20mandat\x20link:\x20",
    "function\x20*\x5c(\x20*\x5c)",
    "motifs_ko[]",
    "table",
    "innerText",
    "Relance...",
    "Failed\x20to\x20save\x20KO\x20motives.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details.",
    "Processed\x20relance\x20result:",
    "cors",
    "7yKTagz",
    "headers",
    "toast-notification",
    "method",
    "motif_ko_autre",
    "&body=",
    "toast-container",
    "boxShadow",
    ".portlet-body.affectation",
    "dataset",
    "Error\x20setting\x20up\x20the\x20request:\x20",
    "display",
    "400px",
    "td:nth-of-type(8)",
    "Mail\x20non\x20valable\x20:\x20absence\x20de\x20signature\x20du\x20client\x20dans\x20le\x20mail",
    "https://energy-retail-france.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=a3R&sen=a1S&sen=a35&sen=a46&sen=a26&sen=a4b&sen=00O&sen=001&sen=a0b&sen=003&sen=00T&sen=a1E&sen=500&sen=00U&sen=005&sen=a0C&sen=006&sen=a0E&sen=800&sen=a3O&sen=a0N&sen=a3Q&str=",
    "result",
    "dispatchEvent",
    "#uc2m_token2",
    "Sélectionner\x20motifs",
    "POST",
    "7494290oZXeYd",
    ".%0D%0A%0D%0ABonne\x20réception.",
    "name",
    "append",
    "closest",
    "apply",
    "Error\x20fetching\x20mandat\x20link:",
    "6260EZFPDK",
    "call",
    "push",
    "Le\x20courtier\x20n\x27a\x20pas\x20été\x20notifié.\x20Veuillez\x20essayer\x20une\x20autre\x20méthode\x20de\x20communication.",
    "credentials",
    "detail",
    "1562536XNnnzK",
    "remove",
    "EMAIL",
    "observe",
    "Actions",
    "Mail\x20non\x20valable\x20:\x20retransfert\x20de\x20mail",
    "ko-motives-dropdown",
    "Mandat\x20absent",
    "Autre",
    "ko-motives-dropdown-content",
    "getElementById",
    "padding",
    "Table\x20observer\x20setup\x20complete",
    "commentaires",
    "stylesheet",
    "forEach",
    "ko-motives-dropbtn",
    "rel",
    "innerHTML",
    "mode",
    "\x22\x20in\x20target\x20div",
    "querySelector",
    "Table\x20disappeared,\x20will\x20try\x20again\x20later",
    "scope",
    "https://watt-else.pro/decommissions/decommissions_en_attente",
    "column",
    "value",
    "mailto:mandatclient@sefe-energy.com",
    "Failed\x20to\x20save\x20statut\x20mandat:",
    "<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2212\x22\x20fill=\x22#FF9800\x22\x20fill-opacity=\x220.2\x22/><path\x20d=\x22M12\x208V13M12\x2016V16.01\x22\x20stroke=\x22#FF9800\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>",
    "Saving...",
    "status",
    "Failed\x20to\x20relance\x20mandat\x20KO.\x20Network\x20error\x20or\x20CORS\x20issue.\x20Check\x20console\x20for\x20details.",
    ".statut-mandat-dropdown",
    "error",
    "maxWidth",
    "change",
    "classList",
    "<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2212\x22\x20fill=\x22#2196F3\x22\x20fill-opacity=\x220.2\x22/><path\x20d=\x22M12\x208V16M12\x208H12.01\x22\x20stroke=\x22#2196F3\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>",
    "getAttribute",
    "some",
    "gap",
    "string",
    "prototype",
    "input[type=\x22checkbox\x22]:checked",
    "none",
    "disabled",
    "Success!",
    "&subject=",
    "console",
    "Date\x20de\x201ère\x20consultation\x20GRDF\x20antérieure\x20à\x20date\x20du\x20mandat",
    "input[value=\x22mandat\x20KO\x22]",
    "Content-Type",
    ".ko-motives-dropbtn",
    "statut-mandat-dropbtn",
    "{}.constructor(\x22return\x20this\x22)(\x20)",
    "subtree",
    "statusText",
    "right",
    "6642FtIlWJ",
    "btn\x20btn-sm\x20btn-warning\x20mandat-button",
    "warn",
    ",\x20il\x20faut\x20la\x20remonter\x20à\x20l\x27animateur\x20avant\x20de\x20valider",
    "190082GRcLyC",
    "startsWith",
    "target",
    "No\x20matches\x20found\x20in\x20target\x20div:\x20",
    "Enregistrer",
    "td:nth-of-type(9)",
    "Failed\x20to\x20save\x20statut\x20mandat:\x20",
    "Mandat\x20illisible",
    "toString",
    "className",
    "object",
    "tbody\x20tr",
    "toggle",
    "map",
    "webkitBoxShadow",
    "while\x20(true)\x20{}",
    "colspan",
    "flex-start",
    "Updated\x20selectedMotives\x20array\x20after\x20save:",
    "Authentication\x20issue.\x20You\x20may\x20need\x20to\x20refresh\x20the\x20page\x20and\x20log\x20in\x20again.",
    "Mandat\x20non\x20applicable\x20au\x20gaz",
    "393rUfiiu",
    "trim",
    "resetSelectedMotives",
    "include",
    "pulse-animation\x201.5s\x20infinite",
    "input[type=\x22checkbox\x22]",
    "Mono\x20site\x20:\x20PCE\x20non\x20mentionné",
    "-6px",
    "XMLHttpRequest",
    "mandat\x20KO",
    "flex",
    "50%",
    "type",
    "__proto__",
    "Failed\x20to\x20fetch\x20",
    "600",
    "data-src",
    "minWidth",
    "\x20jusqu\x27a\x2002/04/2025",
    "Table\x20not\x20found,\x20retrying\x20in\x20500ms...",
    "tr.heading",
    ".ko-motives-dropdown",
    "18px",
    "removeChild",
    "Error\x20setting\x20up\x20the\x20relance\x20request:\x20",
    "Mutation\x20detected,\x20reprocessing\x20table...",
    "length",
    "style",
    "block",
    "Success",
    "top",
    "td:nth-of-type(6)\x20a",
    "backgroundColor",
    "label",
    "init",
    "message",
    "lineHeight",
    "Attention",
    "https://watt-else.pro/opportunite/",
    "mandat\x20OK",
    "Bonjour,%0D%0A%0D%0AVeuillez\x20trouver\x20ci-joint\x20le\x20mandat\x20du\x20client\x20",
    "filter",
    "td:nth-of-type(4)",
    "gger",
    "statut-mandat-save-btn",
    "(((.+)+)+)+$",
    "width",
    "fontFamily",
    "radio",
  ];
  W = function () {
    return yI;
  };
  return W();
}
function B() {
  "use strict";
  const yH = L;
  function v() {
    const y0 = L;
    const O = document[y0(0x27f)]("link");
    O[y0(0x303)] = y0(0x300);
    O[y0(0x24b)] =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
    document["head"][y0(0x29a)](O);
  }
  v();
  function h() {
    const y1 = L;
    const O = document[y1(0x2fc)]("toast-container");
    if (!O) {
      const K = document[y1(0x27f)](y1(0x234));
      K["id"] = y1(0x2d6);
      K[y1(0x218)][y1(0x2a7)] = "fixed";
      K[y1(0x218)]["bottom"] = y1(0x245);
      K["style"][y1(0x2c5)] = y1(0x245);
      K[y1(0x218)]["zIndex"] = y1(0x2ac);
      K[y1(0x218)]["display"] = y1(0x207);
      K[y1(0x218)]["flexDirection"] = y1(0x30b);
      K[y1(0x218)][y1(0x1d2)] = y1(0x277);
      K[y1(0x218)][y1(0x315)] = y1(0x2dc);
      document[y1(0x2bf)][y1(0x29a)](K);
    }
  }
  h();
  window["q"] = function (
    O,
    K = "info",
    M = 0x3 * -0x215 + -0x9 * 0xd3 + -0x2d2 * -0x9,
    f = ""
  ) {
    const y2 = L;
    const R = document["getElementById"](y2(0x2d6));
    const T = document[y2(0x27f)]("div");
    T[y2(0x1f1)] = y2(0x2d2);
    T[y2(0x218)][y2(0x2fd)] = "16px\x2020px";
    T[y2(0x218)]["borderRadius"] = y2(0x28d);
    T["style"][y2(0x2d7)] = y2(0x237);
    T["style"][y2(0x1f6)] = y2(0x237);
    T["style"]["U"] = y2(0x237);
    T[y2(0x218)][y2(0x22c)] = "\x27Poppins\x27,\x20Arial,\x20sans-serif";
    T[y2(0x218)]["fontSize"] = y2(0x28f);
    T["style"][y2(0x221)] = y2(0x266);
    T[y2(0x218)][y2(0x20e)] = y2(0x27b);
    T[y2(0x218)][y2(0x315)] = y2(0x2dc);
    T["style"]["opacity"] = "0";
    T[y2(0x218)]["transition"] = y2(0x25b);
    T["style"][y2(0x2db)] = "flex";
    T[y2(0x218)]["alignItems"] = y2(0x1f9);
    T[y2(0x218)][y2(0x1d2)] = y2(0x28d);
    T[y2(0x218)]["position"] = y2(0x278);
    const P = document["createElement"]("div");
    P[y2(0x218)][y2(0x2a7)] = y2(0x2be);
    P[y2(0x218)][y2(0x21b)] = y2(0x204);
    P[y2(0x218)][y2(0x2c5)] = "-8px";
    P["style"][y2(0x22b)] = y2(0x28f);
    P[y2(0x218)][y2(0x2b1)] = y2(0x28f);
    P[y2(0x218)][y2(0x27d)] = y2(0x208);
    P[y2(0x218)][y2(0x21d)] = "#FF4136";
    P[y2(0x218)][y2(0x29c)] = y2(0x201);
    if (!document[y2(0x2fc)]("pulse-animation-style")) {
      const w = document[y2(0x27f)](y2(0x218));
      w["id"] = y2(0x2bc);
      w[y2(0x2af)] =
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulse-animation\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200\x200\x20rgba(255,\x2065,\x2054,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2070%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200\x2010px\x20rgba(255,\x2065,\x2054,\x200);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x200\x200\x20rgba(255,\x2065,\x2054,\x200);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20";
      document[y2(0x29d)][y2(0x29a)](w);
    }
    let i, o;
    switch (K["toLowerCase"]()) {
      case y2(0x25d):
        o = "#fff";
        i = y2(0x280);
        if (!f) f = y2(0x21a);
        break;
      case y2(0x314):
        o = "#fff";
        i =
          "<svg\x20width=\x2224\x22\x20height=\x2224\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22><circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2212\x22\x20fill=\x22#F44336\x22\x20fill-opacity=\x220.2\x22/><path\x20d=\x22M15\x209L9\x2015M9\x209L15\x2015\x22\x20stroke=\x22#F44336\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22/></svg>";
        if (!f) f = y2(0x222);
        break;
      case y2(0x250):
        o = y2(0x2a4);
        i = y2(0x30f);
        if (!f) f = y2(0x222);
        break;
      case "info":
      default:
        o = y2(0x2a4);
        i = y2(0x318);
        if (!f) f = y2(0x26f);
        break;
    }
    T[y2(0x218)][y2(0x21d)] = o;
    const n = document[y2(0x27f)](y2(0x234));
    n[y2(0x218)][y2(0x242)] = "0";
    n[y2(0x304)] = i;
    const a = document[y2(0x27f)](y2(0x234));
    a["style"][y2(0x207)] = "1";
    const k = document["createElement"](y2(0x234));
    k[y2(0x2af)] = f;
    k[y2(0x218)]["fontWeight"] = y2(0x20c);
    k[y2(0x218)][y2(0x263)] = y2(0x265);
    k["style"][y2(0x2bb)] = y2(0x213);
    k[y2(0x218)][y2(0x22c)] = y2(0x292);
    a[y2(0x29a)](k);
    const z = document[y2(0x27f)](y2(0x234));
    z["textContent"] = O;
    z[y2(0x218)][y2(0x2a0)] = y2(0x257);
    z[y2(0x218)][y2(0x22c)] = y2(0x292);
    a[y2(0x29a)](z);
    const u = document[y2(0x27f)](y2(0x234));
    u[y2(0x304)] = y2(0x294);
    u[y2(0x218)][y2(0x2a7)] = y2(0x2be);
    u["style"]["top"] = y2(0x277);
    u[y2(0x218)][y2(0x1e3)] = y2(0x277);
    u[y2(0x218)]["cursor"] = y2(0x289);
    u[y2(0x218)][y2(0x231)] = "0.6";
    u[y2(0x218)][y2(0x2fd)] = "4px";
    u[y2(0x2b6)] = function () {
      const y3 = y2;
      R[y3(0x214)](T);
    };
    T[y2(0x29a)](n);
    T[y2(0x29a)](a);
    T[y2(0x29a)](u);
    T[y2(0x29a)](P);
    R["appendChild"](T);
    setTimeout(() => {
      const y4 = y2;
      T["style"][y4(0x231)] = "1";
    }, -0x2375 + -0x79b * 0x1 + 0x2b1a);
    if (M > -0x16ee + 0x449 + 0x12a5) {
      setTimeout(() => {
        const y5 = y2;
        T[y5(0x218)][y5(0x231)] = "0";
        setTimeout(() => {
          const y6 = y5;
          if (T["parentNode"] === R) {
            R[y6(0x214)](T);
          }
        }, -0x12ed + -0x28 * -0x35 + -0x25d * -0x5);
      }, M);
    }
    return T;
  };
  function E(O, K = ".portlet-body.affectation") {
    const y7 = L;
    const M = document[y7(0x307)](K);
    if (!M) {
      console[y7(0x2b9)](y7(0x2c2) + K);
      return ![];
    }
    const f = M[y7(0x2cb)] || M["textContent"] || "";
    for (const R of O) {
      if (f[y7(0x2c6)](R)) {
        console[y7(0x2b9)](y7(0x25c) + R + y7(0x306));
        return !![];
      }
    }
    console[y7(0x2b9)](y7(0x1eb) + K);
    return ![];
  }
  function X(O) {
    const y8 = L;
    const K = E(O, y8(0x2d8));
    if (K) {
      const M = document[y8(0x307)](y8(0x2d8));
      const f = M[y8(0x2cb)] || M[y8(0x2af)] || "";
      for (const R of O) {
        if (f[y8(0x2c6)](R)) {
          window["q"](
            y8(0x22f) + R + y8(0x1e7),
            y8(0x314),
            0x5a56a + 0x11 * -0xdb2f + 0x3445 * 0x51
          );
          break;
        }
      }
    }
    return K;
  }
  function Y(O) {
    const y9 = L;
    if (
      window[y9(0x25f)][y9(0x24b)] !==
      "https://watt-else.pro/decommissions/decommissions_en_attente"
    ) {
      return ![];
    }
    const K = document[y9(0x2fc)]("swal2-content");
    if (!K) {
      return ![];
    }
    const M = K[y9(0x307)](y9(0x281));
    console[y9(0x2b9)](M);
    if (!M) {
      return ![];
    }
    const f = M[y9(0x307)]("tr");
    if (!f) {
      return ![];
    }
    const R = f[y9(0x272)]("td")[0xc * 0x27d + 0x13 * 0x1d4 + 0x4097 * -0x1];
    if (!R) {
      return ![];
    }
    const T = R[y9(0x2cb)] || R[y9(0x2af)] || "";
    let P = ![];
    for (const i of O) {
      if (T[y9(0x2c6)](i)) {
        window["q"](
          y9(0x26d) + i + y9(0x20f),
          y9(0x314),
          -0x18287 + -0x4a18 * 0x2b + 0x1595af
        );
        P = !![];
        break;
      }
    }
    return P;
  }
  X([yH(0x252)]);
  if (window[yH(0x25f)]["href"] === yH(0x30a)) {
    const O = new MutationObserver((M) => {
      const yv = yH;
      for (const f of M) {
        if (
          f[yv(0x2aa)] &&
          f[yv(0x2aa)][yv(0x217)] > 0x59 * -0x62 + -0x122d + 0x217 * 0x19
        ) {
          const R = document[yv(0x2fc)](yv(0x23a));
          if (R) {
            Y(["UTILITY\x20FRANCE\x20LIMITED"]);
          }
        }
      }
    });
    const K = {};
    K["childList"] = !![];
    K[yH(0x1e1)] = !![];
    O[yH(0x2f5)](document[yH(0x2bf)], K);
    console[yH(0x2b9)](yH(0x230));
  }
}
function m() {
  "use strict";
  const yE = L;
  function v() {
    const yy = L;
    let X = ![];
    const Y = document[yy(0x2fc)](yy(0x28e));
    if (Y && Y["disabled"]) {
      Y[yy(0x1d7)] = ![];
      X = !![];
    }
    const O = document[yy(0x272)]("select[name=\x22mandat_motifs_ko[]\x22]");
    O[yy(0x301)]((f) => {
      const yh = yy;
      if (f[yh(0x1d7)]) {
        f[yh(0x1d7)] = ![];
        X = !![];
        document["getElementById"](yh(0x2ff))[yh(0x1d7)] = ![];
      }
    });
    const K = document[yy(0x2fc)]("change_mandat_status");
    if (K) {
      if (K[yy(0x1d7)] || K["classList"][yy(0x24f)](yy(0x1d7))) {
        K[yy(0x1d7)] = ![];
        K[yy(0x317)][yy(0x2f3)]("disabled");
        X = !![];
      }
    }
    const M = document["getElementById"]("pfo_relance_btn");
    if (M) {
      if (M[yy(0x1d7)]) {
        M[yy(0x1d7)] = ![];
        M["classList"][yy(0x2f3)](yy(0x1d7));
        X = !![];
      }
    }
    if (X) {
      console[yy(0x2b9)](yy(0x25a));
    }
    return X;
  }
  v();
  const h = new MutationObserver(() => {
    v();
  });
  const E = {};
  E[yE(0x296)] = !![];
  E[yE(0x1e1)] = !![];
  h[yE(0x2f5)](document["body"], E);
  console[yE(0x2b9)](yE(0x264));
}
(function () {
  const Y = (function () {
    let R = !![];
    return function (T, P) {
      const i = R
        ? function () {
            const yX = L;
            if (P) {
              const o = P[yX(0x2ea)](T, arguments);
              P = null;
              return o;
            }
          }
        : function () {};
      R = ![];
      return i;
    };
  })();
  const O = Y(this, function () {
    const yW = L;
    return O[yW(0x1f0)]()
      ["search"]("(((.+)+)+)+$")
      ["toString"]()
      ["constructor"](O)
      ["search"](yW(0x22a));
  });
  O();
  const K = (function () {
    let R = !![];
    return function (T, P) {
      const i = R
        ? function () {
            const yL = L;
            if (P) {
              const o = P[yL(0x2ea)](T, arguments);
              P = null;
              return o;
            }
          }
        : function () {};
      R = ![];
      return i;
    };
  })();
  (function () {
    K(this, function () {
      const yJ = L;
      const R = new RegExp(yJ(0x2c8));
      const T = new RegExp(yJ(0x2a9), "i");
      const P = e(yJ(0x21f));
      if (!R[yJ(0x246)](P + yJ(0x269)) || !T[yJ(0x246)](P + "input")) {
        P("0");
      } else {
        e();
      }
    })();
  })();
  const M = (function () {
    let R = !![];
    return function (T, P) {
      const i = R
        ? function () {
            const yc = L;
            if (P) {
              const o = P[yc(0x2ea)](T, arguments);
              P = null;
              return o;
            }
          }
        : function () {};
      R = ![];
      return i;
    };
  })();
  const f = M(this, function () {
    const yg = L;
    let R;
    try {
      const i = Function("return\x20(function()\x20" + yg(0x1e0) + ");");
      R = i();
    } catch (o) {
      R = window;
    }
    const T = (R[yg(0x1da)] = R[yg(0x1da)] || {});
    const P = [
      yg(0x2b9),
      yg(0x1e6),
      yg(0x2b2),
      yg(0x314),
      yg(0x25e),
      yg(0x2ca),
      "trace",
    ];
    for (let n = 0x1e02 + 0x4f * -0x1 + -0x1db3 * 0x1; n < P[yg(0x217)]; n++) {
      const a = M[yg(0x256)][yg(0x1d4)]["bind"](M);
      const k = P[n];
      const z = T[k] || a;
      a[yg(0x20a)] = M[yg(0x247)](M);
      a[yg(0x1f0)] = z[yg(0x1f0)][yg(0x247)](z);
      T[k] = a;
    }
  });
  f();
  ("use strict");
  x();
  B();
  m();
})();
function L(H, v) {
  const y = W();
  L = function (h, E) {
    h = h - (-0x2412 + 0x2072 + 0x570);
    let X = y[h];
    return X;
  };
  return L(H, v);
}
function e(H) {
  function v(h) {
    const yb = L;
    if (typeof h === yb(0x1d3)) {
      return function (E) {}[yb(0x256)](yb(0x1f7))["apply"]("counter");
    } else {
      if (
        ("" + h / h)[yb(0x217)] !== 0x1215 * -0x1 + 0x3 * 0x5cb + 0xb5 ||
        h % (-0x2f9 + -0x2e * 0x6d + -0x3d * -0x5f) ===
          0x4 * 0x579 + 0x63f + -0x1c23
      ) {
        (function () {
          return !![];
        })
          [yb(0x256)]("debu" + yb(0x228))
          [yb(0x2ed)]("action");
      } else {
        (function () {
          return ![];
        })
          [yb(0x256)](yb(0x241) + "gger")
          [yb(0x2ea)]("stateObject");
      }
    }
    v(++h);
  }
  try {
    if (H) {
      return v;
    } else {
      v(-0x1 * -0x224b + -0x1ea0 + -0x3 * 0x139);
    }
  } catch (h) {}
}
