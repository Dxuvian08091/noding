!(function () {
  function e(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var i = (o[t] = { exports: {} });
    return r[t](i, i.exports, e), i.exports;
  }
  var t,
    n,
    r = {
      723: function (e, t, n) {
        "use strict";
        function r(e) {
          l.length || (a(), !0), (l[l.length] = e);
        }
        function o() {
          for (; p < l.length; ) {
            var e = p;
            if (((p += 1), l[e].call(), p > 1024)) {
              for (var t = 0, n = l.length - p; t < n; t++) l[t] = l[t + p];
              (l.length -= p), (p = 0);
            }
          }
          (l.length = 0), (p = 0), !1;
        }
        function i(e) {
          return function () {
            function t() {
              clearTimeout(n), clearInterval(r), e();
            }
            var n = setTimeout(t, 0),
              r = setInterval(t, 50);
          };
        }
        e.exports = r;
        var a,
          c,
          s,
          u,
          l = [],
          p = 0,
          d = void 0 !== n.g ? n.g : self,
          m = d.MutationObserver || d.WebKitMutationObserver;
        "function" == typeof m
          ? ((c = 1),
            (s = new m(o)),
            (u = document.createTextNode("")),
            s.observe(u, { characterData: !0 }),
            (a = function () {
              (c = -c), (u.data = c);
            }))
          : (a = i(o)),
          (r.requestFlush = a),
          (r.makeRequestCallFromTimer = i);
      },
      3407: function (e, t, n) {
        e.exports =
          n.p + "fingerprinted/img/amex-3440dd14f9308959e71dfef65267235f.svg";
      },
      8037: function (e, t, n) {
        e.exports =
          n.p +
          "fingerprinted/img/mastercard-4868931ddf88ab0fc551d18a1a859ff7.svg";
      },
      3637: function (e, t, n) {
        e.exports =
          n.p + "fingerprinted/img/visa-0daded1e4b9a21ae5304a6794bb9e46a.svg";
      },
      3434: function (e, t, n) {
        "use strict";
        function r() {}
        function o(e) {
          if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._45 = 0),
            (this._81 = 0),
            (this._65 = null),
            (this._54 = null),
            e !== r && l(e, this);
        }
        function i(e, t) {
          for (; 3 === e._81; ) e = e._65;
          if ((o._10 && o._10(e), 0 === e._81))
            return 0 === e._45
              ? ((e._45 = 1), void (e._54 = t))
              : 1 === e._45
              ? ((e._45 = 2), void (e._54 = [e._54, t]))
              : void e._54.push(t);
          !(function (e, t) {
            p(function () {
              var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
              if (null !== n) {
                var r = (function (e, t) {
                  try {
                    return e(t);
                  } catch (e) {
                    return (d = e), m;
                  }
                })(n, e._65);
                r === m ? c(t.promise, d) : a(t.promise, r);
              } else 1 === e._81 ? a(t.promise, e._65) : c(t.promise, e._65);
            });
          })(e, t);
        }
        function a(e, t) {
          if (t === e)
            return c(
              e,
              new TypeError("A promise cannot be resolved with itself.")
            );
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = (function (e) {
              try {
                return e.then;
              } catch (e) {
                return (d = e), m;
              }
            })(t);
            if (n === m) return c(e, d);
            if (n === e.then && t instanceof o)
              return (e._81 = 3), (e._65 = t), void s(e);
            if ("function" == typeof n) return void l(n.bind(t), e);
          }
          (e._81 = 1), (e._65 = t), s(e);
        }
        function c(e, t) {
          (e._81 = 2), (e._65 = t), o._97 && o._97(e, t), s(e);
        }
        function s(e) {
          if ((1 === e._45 && (i(e, e._54), (e._54 = null)), 2 === e._45)) {
            for (var t = 0; t < e._54.length; t++) i(e, e._54[t]);
            e._54 = null;
          }
        }
        function u(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function l(e, t) {
          var n = !1,
            r = (function (e, t, n) {
              try {
                e(t, n);
              } catch (e) {
                return (d = e), m;
              }
            })(
              e,
              function (e) {
                n || ((n = !0), a(t, e));
              },
              function (e) {
                n || ((n = !0), c(t, e));
              }
            );
          n || r !== m || ((n = !0), c(t, d));
        }
        var p = n(723),
          d = null,
          m = {};
        (e.exports = o),
          (o._10 = null),
          (o._97 = null),
          (o._61 = r),
          (o.prototype.then = function (e, t) {
            if (this.constructor !== o)
              return (function (e, t, n) {
                return new e.constructor(function (a, c) {
                  var s = new o(r);
                  s.then(a, c), i(e, new u(t, n, s));
                });
              })(this, e, t);
            var n = new o(r);
            return i(this, new u(e, t, n)), n;
          });
      },
      1803: function (e, t, n) {
        "use strict";
        function r(e) {
          var t = new o(o._61);
          return (t._81 = 1), (t._65 = e), t;
        }
        var o = n(3434);
        e.exports = o;
        var i = r(!0),
          a = r(!1),
          c = r(null),
          s = r(void 0),
          u = r(0),
          l = r("");
        (o.resolve = function (e) {
          if (e instanceof o) return e;
          if (null === e) return c;
          if (void 0 === e) return s;
          if (!0 === e) return i;
          if (!1 === e) return a;
          if (0 === e) return u;
          if ("" === e) return l;
          if ("object" == typeof e || "function" == typeof e)
            try {
              var t = e.then;
              if ("function" == typeof t) return new o(t.bind(e));
            } catch (e) {
              return new o(function (t, n) {
                n(e);
              });
            }
          return r(e);
        }),
          (o.all = function (e) {
            var t = Array.prototype.slice.call(e);
            return new o(function (e, n) {
              function r(a, c) {
                if (c && ("object" == typeof c || "function" == typeof c)) {
                  if (c instanceof o && c.then === o.prototype.then) {
                    for (; 3 === c._81; ) c = c._65;
                    return 1 === c._81
                      ? r(a, c._65)
                      : (2 === c._81 && n(c._65),
                        void c.then(function (e) {
                          r(a, e);
                        }, n));
                  }
                  var s = c.then;
                  if ("function" == typeof s)
                    return void new o(s.bind(c)).then(function (e) {
                      r(a, e);
                    }, n);
                }
                (t[a] = c), 0 == --i && e(t);
              }
              if (0 === t.length) return e([]);
              for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a]);
            });
          }),
          (o.reject = function (e) {
            return new o(function (t, n) {
              n(e);
            });
          }),
          (o.race = function (e) {
            return new o(function (t, n) {
              e.forEach(function (e) {
                o.resolve(e).then(t, n);
              });
            });
          }),
          (o.prototype.catch = function (e) {
            return this.then(null, e);
          });
      },
      8029: function (e, t, n) {
        "use strict";
        var r = n(3434);
        (e.exports = r),
          (r.prototype.finally = function (e) {
            return this.then(
              function (t) {
                return r.resolve(e()).then(function () {
                  return t;
                });
              },
              function (t) {
                return r.resolve(e()).then(function () {
                  throw t;
                });
              }
            );
          });
      },
      2375: function (e, t, n) {
        "use strict";
        n.d(t, {
          UH: function () {
            return l;
          },
          ZV: function () {
            return d;
          },
          ef: function () {
            return p;
          },
          gC: function () {
            return c;
          },
          mZ: function () {
            return o;
          },
          qF: function () {
            return a;
          },
          t0: function () {
            return u;
          },
          tX: function () {
            return s;
          },
        });
        var r = n(1873),
          o = (0, r.mC)({
            phone: (0, r.jt)((0, r.kw)("auto", "always", "never")),
          }),
          i = (0, r.mC)({ required: (0, r.kw)("auto", "always", "never") }),
          a = (0, r.mC)({ phone: (0, r.jt)(i) }),
          c = "shipping",
          s = (0, r.or)(
            (0, r.mC)({ mode: (0, r.kw)("automatic", "disabled") }),
            (0, r.mC)({ mode: (0, r.kw)("google_maps_api"), apiKey: r.Z_ })
          ),
          u = {
            automatic: "automatic",
            disabled: "disabled",
            google_maps_api: "google_maps_api",
          },
          l = { stripe: "stripe", merchant: "merchant" },
          p = (0, r.mC)({
            name: (0, r.jt)((0, r.kw)("full", "split", "organization")),
          }),
          d = "split";
      },
      9083: function (e, t, n) {
        "use strict";
        n.d(t, {
          A2: function () {
            return s;
          },
          YA: function () {
            return a.Z;
          },
          _0: function () {
            return l;
          },
          _y: function () {
            return p;
          },
        });
        var r,
          o,
          i = n(6222),
          a = n(3259),
          c = n(276),
          s = "__PrivateStripeElement",
          u = ["brand"],
          l =
            ((r = {}),
            (0, i.Z)(r, c.Yj.card, u),
            (0, i.Z)(r, c.Yj.cardNumber, u),
            (0, i.Z)(r, c.Yj.iban, ["country", "bankName"]),
            (0, i.Z)(r, c.Yj.auBankAccount, ["bankName", "branchName"]),
            r),
          p =
            ((o = {}),
            (0, i.Z)(o, c.Yj.idealBank, { secondary: c.Yj.idealBankSecondary }),
            (0, i.Z)(o, c.Yj.p24Bank, { secondary: c.Yj.p24BankSecondary }),
            (0, i.Z)(o, c.Yj.fpxBank, { secondary: c.Yj.fpxBankSecondary }),
            (0, i.Z)(o, c.Yj.netbankingBank, {
              secondary: c.Yj.netbankingBankSecondary,
            }),
            (0, i.Z)(o, c.Yj.epsBank, { secondary: c.Yj.epsBankSecondary }),
            o);
      },
      3259: function (e, t, n) {
        "use strict";
        var r,
          o = n(6222),
          i = n(276),
          a =
            ((r = {}),
            (0, o.Z)(r, i.Yj.card, {
              unique: !0,
              conflict: [
                i.Yj.cardNumber,
                i.Yj.cardExpiry,
                i.Yj.cardCvc,
                i.Yj.postalCode,
              ],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardNumber, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardExpiry, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.cardCvc, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.postalCode, {
              unique: !0,
              conflict: [i.Yj.card],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.paymentRequestButton, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.iban, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.idealBank, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.p24Bank, {
              unique: !0,
              conflict: [],
              beta: !1,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.auBankAccount, {
              unique: !0,
              beta: !1,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.fpxBank, {
              unique: !0,
              beta: !1,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.netbankingBank, {
              unique: !0,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardCopyButton, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardNumberDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardCvcDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardExpiryDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.issuingCardPinDisplay, {
              unique: !1,
              beta: !0,
              conflict: [],
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.epsBank, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "legacy",
            }),
            (0, o.Z)(r, i.Yj.affirmMessage, {
              unique: !1,
              conflict: [],
              beta: !1,
              implementation: "affirm_message",
            }),
            (0, o.Z)(r, i.Yj.afterpayClearpayMessage, {
              unique: !1,
              conflict: [],
              beta: !1,
              implementation: "afterpay_message",
            }),
            (0, o.Z)(r, i.Yj.unifiedMessage, {
              unique: !1,
              conflict: [],
              beta: !0,
              implementation: "unified_message",
            }),
            (0, o.Z)(r, i.Yj.paymentMethodMessaging, {
              unique: !1,
              conflict: [],
              beta: !0,
              implementation: "unified_message",
            }),
            (0, o.Z)(r, i.Yj.linkAuthentication, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.payment, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.shippingAddress, {
              unique: !0,
              conflict: [i.Yj.address],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.address, {
              unique: !0,
              conflict: [i.Yj.shippingAddress],
              beta: !0,
              implementation: "frame",
            }),
            (0, o.Z)(r, i.Yj.cart, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "cart",
            }),
            (0, o.Z)(r, i.Yj.payButton, {
              unique: !0,
              conflict: [],
              beta: !0,
              implementation: "express_checkout",
            }),
            r);
        t.Z = a;
      },
      3608: function (e, t, n) {
        "use strict";
        n.d(t, {
          Tj: function () {
            return o;
          },
          qg: function () {
            return i;
          },
        });
        var r = n(7904),
          o =
            (n(1873),
            n(6977),
            n(6617),
            function (e) {
              var t = e.trim().match(/^((order)_[^_]+)_secret_[^-]+$/);
              if (t) {
                var n = (0, r.Z)(t, 3),
                  o = n[0],
                  i = n[1];
                if ("order" === n[2])
                  return { id: i, clientSecret: o, type: "ORDER" };
              }
              return null;
            }),
          i = function (e) {
            var t = e.trim().match(/^((cart_session)_[^_]+)_secret_[^-]+$/);
            if (t) {
              var n = (0, r.Z)(t, 3),
                o = n[0],
                i = n[1];
              if ("cart_session" === n[2])
                return { id: i, clientSecret: o, type: "CART_SESSION" };
            }
            return null;
          };
      },
      6856: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ee: function () {
            return E;
          },
          FC: function () {
            return _;
          },
          I2: function () {
            return f;
          },
          R5: function () {
            return p;
          },
          Uz: function () {
            return y;
          },
          iU: function () {
            return u;
          },
          jX: function () {
            return g;
          },
          mZ: function () {
            return h;
          },
          n4: function () {
            return v;
          },
          xl: function () {
            return k;
          },
          zf: function () {
            return w;
          },
        });
        var r,
          o = n(3696),
          i = n(6222),
          a = n(276),
          c = n(1873),
          s = ["external_paypal", "external_venmo"],
          u = (0, c.CT)(c.kw.apply(void 0, s)),
          l =
            ([
              "affirm",
              "afterpay_clearpay",
              "alipay",
              "acss_debit",
              "au_becs_debit",
              "bancontact",
              "blik",
              "boleto",
              "card",
              "cashapp",
              "customer_balance",
              "eps",
              "fpx",
              "giropay",
              "grabpay",
              "id_bank_transfer",
              "ideal",
              "klarna",
              "konbini",
              "link",
              "mobilepay",
              "oxxo",
              "p24",
              "pay_by_bank",
              "paynow",
              "paypal",
              "promptpay",
              "qris",
              "revolut_pay",
              "sepa_debit",
              "sofort",
              "us_bank_account",
              "upi",
              "wechat_pay",
              "nz_bank_account",
              "bacs_debit",
              "apple_pay",
              "google_pay",
            ].concat(s),
            {
              VISA: "visa",
              MASTERCARD: "mastercard",
              AMEX: "amex",
              DISCOVER_NETWORK: "discover_global_network",
            }),
          p =
            ((r = {}),
            (0, i.Z)(r, l.VISA, [a.rM.VISA]),
            (0, i.Z)(r, l.MASTERCARD, [a.rM.MASTERCARD]),
            (0, i.Z)(r, l.AMEX, [a.rM.AMEX]),
            (0, i.Z)(r, l.DISCOVER_NETWORK, [
              a.rM.DISCOVER,
              a.rM.DINERS,
              a.rM.JCB,
              a.rM.UNIONPAY,
              a.rM.ELO,
            ]),
            Object.keys(l).map(function (e) {
              return l[e];
            })),
          d = c.kw.apply(void 0, (0, o.Z)(p)),
          m = (0, c.mC)({
            email: (0, c.jt)((0, c.AG)(c.Z_)),
            name: (0, c.jt)((0, c.AG)(c.Z_)),
            phone: (0, c.jt)((0, c.AG)(c.Z_)),
            address: (0, c.jt)(
              (0, c.mC)({
                city: (0, c.jt)((0, c.AG)(c.Z_)),
                country: (0, c.jt)((0, c.AG)(c.Z_)),
                line1: (0, c.jt)((0, c.AG)(c.Z_)),
                line2: (0, c.jt)((0, c.AG)(c.Z_)),
                postal_code: (0, c.jt)((0, c.AG)(c.Z_)),
                state: (0, c.jt)((0, c.AG)(c.Z_)),
              })
            ),
          }),
          f = (0, c.mC)({ billingDetails: (0, c.jt)(m) }),
          h = (0, c.mC)({
            billingDetails: (0, c.jt)(
              (0, c.or)(
                (0, c.kw)("never", "auto"),
                (0, c.mC)({
                  name: (0, c.jt)((0, c.kw)("never", "auto")),
                  phone: (0, c.jt)((0, c.kw)("never", "auto")),
                  email: (0, c.jt)((0, c.kw)("never", "auto")),
                  address: (0, c.jt)(
                    (0, c.or)(
                      (0, c.kw)("never", "auto"),
                      (0, c.mC)({
                        country: (0, c.jt)((0, c.kw)("never", "auto")),
                        postalCode: (0, c.jt)((0, c.kw)("never", "auto")),
                        state: (0, c.jt)((0, c.kw)("never", "auto")),
                        city: (0, c.jt)((0, c.kw)("never", "auto")),
                        line1: (0, c.jt)((0, c.kw)("never", "auto")),
                        line2: (0, c.jt)((0, c.kw)("never", "auto")),
                      })
                    )
                  ),
                })
              )
            ),
          }),
          _ = (0, c.mC)({
            bancontact: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            card: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            ideal: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            sepaDebit: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            sofort: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            auBecsDebit: (0, c.jt)((0, c.kw)("auto", "always", "never")),
            usBankAccount: (0, c.jt)((0, c.kw)("auto", "always", "never")),
          }),
          y =
            ((0, c.or)(
              (0, c.kw)("auto", "never"),
              (0, c.mC)({
                applePay: (0, c.jt)((0, c.kw)("auto", "never")),
                googlePay: (0, c.jt)((0, c.kw)("auto", "never")),
                metaPay: (0, c.jt)((0, c.kw)("always", "auto", "never")),
              })
            ),
            (0, c.or)((0, c.kw)("auto", "never"), c.Ry)),
          v = (0, c.mC)({
            applePay: (0, c.jt)((0, c.kw)("auto", "never")),
            googlePay: (0, c.jt)((0, c.kw)("auto", "never")),
            metaPay: (0, c.jt)((0, c.kw)("always", "auto", "never")),
          }),
          g = (0, c.CT)(d),
          b = (0, c.kw)("accordion", "tabs", "auto"),
          w = (0, c.or)(b, c.Ry),
          k = (0, c.mC)({
            type: b,
            radios: (0, c.jt)(c.Xg),
            spacedAccordionItems: (0, c.jt)(c.Xg),
            defaultCollapsed: (0, c.jt)(c.Xg),
          }),
          E = (0, c.mC)({
            type: b,
            radios: (0, c.jt)(c.Xg),
            spacedAccordionItems: (0, c.jt)(c.Xg),
          });
        (0, c.or)(
          b,
          (0, c.or)(
            (0, c.mC)({ type: (0, c.kw)("tabs", "auto") }),
            (0, c.mC)({
              type: (0, c.kw)("accordion"),
              radios: (0, c.jt)(c.Xg),
              spacedAccordionItems: (0, c.jt)(c.Xg),
            })
          )
        ),
          (0, c.or)(
            b,
            (0, c.or)(
              (0, c.mC)({
                type: (0, c.kw)("tabs", "auto"),
                defaultCollapsed: (0, c.jt)(c.HM),
              }),
              (0, c.mC)({
                type: (0, c.kw)("accordion"),
                defaultCollapsed: (0, c.jt)(c.HM),
                radios: (0, c.jt)(c.HM),
                spacedAccordionItems: (0, c.jt)(c.HM),
              })
            )
          );
      },
      4215: function (e, t, n) {
        "use strict";
        n.d(t, {
          VZ: function () {
            return y;
          },
          _m: function () {
            return v;
          },
          DA: function () {
            return h;
          },
          pu: function () {
            return _;
          },
          Eu: function () {
            return m;
          },
          Jo: function () {
            return S;
          },
          _0: function () {
            return b;
          },
          S6: function () {
            return w;
          },
          YR: function () {
            return E;
          },
          C1: function () {
            return k;
          },
          oU: function () {
            return g;
          },
        });
        var r = n(3696),
          o = n(3608),
          i = n(6856),
          a = n(6977),
          c = n(1873),
          s = n(8812),
          u = n(2024),
          l = n(2375),
          p = {
            AC: "AC",
            AD: "AD",
            AE: "AE",
            AF: "AF",
            AG: "AG",
            AI: "AI",
            AL: "AL",
            AM: "AM",
            AO: "AO",
            AQ: "AQ",
            AR: "AR",
            AT: "AT",
            AU: "AU",
            AW: "AW",
            AX: "AX",
            AZ: "AZ",
            BA: "BA",
            BB: "BB",
            BD: "BD",
            BE: "BE",
            BF: "BF",
            BG: "BG",
            BH: "BH",
            BI: "BI",
            BJ: "BJ",
            BL: "BL",
            BM: "BM",
            BN: "BN",
            BO: "BO",
            BQ: "BQ",
            BR: "BR",
            BS: "BS",
            BT: "BT",
            BV: "BV",
            BW: "BW",
            BY: "BY",
            BZ: "BZ",
            CA: "CA",
            CD: "CD",
            CF: "CF",
            CG: "CG",
            CH: "CH",
            CI: "CI",
            CK: "CK",
            CL: "CL",
            CM: "CM",
            CN: "CN",
            CO: "CO",
            CR: "CR",
            CV: "CV",
            CW: "CW",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DJ: "DJ",
            DK: "DK",
            DM: "DM",
            DO: "DO",
            DZ: "DZ",
            EC: "EC",
            EE: "EE",
            EG: "EG",
            EH: "EH",
            ER: "ER",
            ES: "ES",
            ET: "ET",
            FI: "FI",
            FJ: "FJ",
            FK: "FK",
            FO: "FO",
            FR: "FR",
            GA: "GA",
            GB: "GB",
            GD: "GD",
            GE: "GE",
            GF: "GF",
            GG: "GG",
            GH: "GH",
            GI: "GI",
            GL: "GL",
            GM: "GM",
            GN: "GN",
            GP: "GP",
            GQ: "GQ",
            GR: "GR",
            GS: "GS",
            GT: "GT",
            GU: "GU",
            GW: "GW",
            GY: "GY",
            HK: "HK",
            HN: "HN",
            HR: "HR",
            HT: "HT",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IL: "IL",
            IM: "IM",
            IN: "IN",
            IO: "IO",
            IQ: "IQ",
            IS: "IS",
            IT: "IT",
            JE: "JE",
            JM: "JM",
            JO: "JO",
            JP: "JP",
            KE: "KE",
            KG: "KG",
            KH: "KH",
            KI: "KI",
            KM: "KM",
            KN: "KN",
            KR: "KR",
            KW: "KW",
            KY: "KY",
            KZ: "KZ",
            LA: "LA",
            LB: "LB",
            LC: "LC",
            LI: "LI",
            LK: "LK",
            LR: "LR",
            LS: "LS",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            LY: "LY",
            MA: "MA",
            MC: "MC",
            MD: "MD",
            ME: "ME",
            MF: "MF",
            MG: "MG",
            MK: "MK",
            ML: "ML",
            MM: "MM",
            MN: "MN",
            MO: "MO",
            MQ: "MQ",
            MR: "MR",
            MS: "MS",
            MT: "MT",
            MU: "MU",
            MV: "MV",
            MW: "MW",
            MX: "MX",
            MY: "MY",
            MZ: "MZ",
            NA: "NA",
            NC: "NC",
            NE: "NE",
            NG: "NG",
            NI: "NI",
            NL: "NL",
            NO: "NO",
            NP: "NP",
            NR: "NR",
            NU: "NU",
            NZ: "NZ",
            OM: "OM",
            PA: "PA",
            PE: "PE",
            PF: "PF",
            PG: "PG",
            PH: "PH",
            PK: "PK",
            PL: "PL",
            PM: "PM",
            PN: "PN",
            PR: "PR",
            PS: "PS",
            PT: "PT",
            PY: "PY",
            QA: "QA",
            RE: "RE",
            RO: "RO",
            RS: "RS",
            RU: "RU",
            RW: "RW",
            SA: "SA",
            SB: "SB",
            SC: "SC",
            SE: "SE",
            SG: "SG",
            SH: "SH",
            SI: "SI",
            SJ: "SJ",
            SK: "SK",
            SL: "SL",
            SM: "SM",
            SN: "SN",
            SO: "SO",
            SR: "SR",
            SS: "SS",
            ST: "ST",
            SV: "SV",
            SX: "SX",
            SZ: "SZ",
            TA: "TA",
            TC: "TC",
            TD: "TD",
            TF: "TF",
            TG: "TG",
            TH: "TH",
            TJ: "TJ",
            TK: "TK",
            TL: "TL",
            TM: "TM",
            TN: "TN",
            TO: "TO",
            TR: "TR",
            TT: "TT",
            TV: "TV",
            TW: "TW",
            TZ: "TZ",
            UA: "UA",
            UG: "UG",
            US: "US",
            UY: "UY",
            UZ: "UZ",
            VA: "VA",
            VC: "VC",
            VE: "VE",
            VG: "VG",
            VN: "VN",
            VU: "VU",
            WF: "WF",
            WS: "WS",
            XK: "XK",
            YE: "YE",
            YT: "YT",
            ZA: "ZA",
            ZM: "ZM",
            ZW: "ZW",
            ZZ: "ZZ",
          },
          d = (Object.keys(p), p),
          m = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, a.RY)(e) || (0, o.Tj)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          f = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, o.Tj)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          h = function (e, t) {
            return (0, c.Gu)(f, e, "stripe.".concat(t, " order secret")).value;
          },
          _ = function (e, t) {
            if ("string" != typeof e)
              return (0, c.$3)("a client_secret string", e, t);
            var n = (0, o.qg)(e);
            return null === n
              ? (0, c.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, c.x4)(n, []);
          },
          y = function () {
            var e,
              t,
              n,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              (null == r || null === (e = r.allowedCardBrands) || void 0 === e
                ? void 0
                : e.length) &&
              (null == r ||
              null === (t = r.disallowedCardBrands) ||
              void 0 === t
                ? void 0
                : t.length)
            )
              throw new s.No(
                "You cannot specify both disallowedCardBrands and allowedCardBrands. Please specify only one of those parameters."
              );
            if (
              (null == r ||
              null === (n = r.disallowedCardBrands) ||
              void 0 === n
                ? void 0
                : n.length) === i.R5.length
            )
              throw new s.No("You cannot block all available card brands.");
          },
          v = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0,
              o = e.layout;
            if (!o || "string" == typeof o) return [];
            var a = (0, c.mC)({ layout: t ? i.Ee : i.xl }),
              s = (0, c.Gu)(a, { layout: o }, n),
              u = s.warnings,
              l = o,
              p = l.type;
            return (
              "accordion" !== p &&
                (o.hasOwnProperty("spacedAccordionItems") &&
                  (u = [].concat((0, r.Z)(u), [
                    "options.layout.spacedAccordionItems is only supported with the 'accordion' layout type.",
                  ])),
                o.hasOwnProperty("radios") &&
                  (u = [].concat((0, r.Z)(u), [
                    "options.layout.radios is only supported with the 'accordion' layout type.",
                  ]))),
              u
            );
          },
          g = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = e.wallets;
            if (!n || "string" == typeof n) return [];
            var r = (0, c.mC)({ wallets: i.n4 }),
              o = (0, c.Gu)(r, { wallets: n }, t),
              a = o.warnings;
            return a;
          },
          b = function (e) {
            var t = e.fields,
              n = e.validation;
            if (n)
              for (var r in n)
                if (!t || !t[r] || "always" !== t[r])
                  throw new s.No(
                    "You cannot specify validation."
                      .concat(r, " without setting fields.")
                      .concat(r, " to always.")
                  );
          },
          w = function (e) {
            var t, n;
            if (
              (null === (t = e.defaultValues) || void 0 === t
                ? void 0
                : t.phone) &&
              "always" !==
                (null === (n = e.fields) || void 0 === n ? void 0 : n.phone)
            )
              throw new s.No(
                "You cannot specify defaultValues.phone without setting fields.phone to always."
              );
          },
          k = function (e) {
            var t, n, r, o, i;
            if (
              ((null === (t = e.defaultValues) || void 0 === t
                ? void 0
                : t.firstName) ||
                (null === (n = e.defaultValues) || void 0 === n
                  ? void 0
                  : n.lastName)) &&
              (null === (r = e.display) || void 0 === r ? void 0 : r.name) !==
                l.ZV
            )
              throw new s.No(
                "You cannot specify defaultValues.firstName or defaultValues.lastName without setting display.name to split."
              );
            if (
              (null === (o = e.display) || void 0 === o ? void 0 : o.name) ===
                l.ZV &&
              (null === (i = e.defaultValues) || void 0 === i ? void 0 : i.name)
            )
              throw new s.No(
                "You cannot specify defaultValues.name when you have display.name set to split."
              );
          },
          E = function (e) {
            var t = e.contacts,
              n = e.fields,
              r = e.validation;
            if (t) {
              var o,
                i = (0, u.cx)(t, function (e) {
                  return e.hasOwnProperty("phone");
                });
              if (-1 !== i)
                if (
                  "always" !== (null == n ? void 0 : n.phone) ||
                  "always" !==
                    (null == r || null === (o = r.phone) || void 0 === o
                      ? void 0
                      : o.required)
                )
                  throw new s.No(
                    "You cannot specify contacts[".concat(
                      i,
                      "].phone without\n        setting fields.phone to 'always' and validation.phone.required to 'always'.\n        Phone options should only be 'always' when absolutely necessary."
                    )
                  );
            }
          },
          S = function (e) {
            if (!e) return { allowedCountries: null, warnings: [] };
            var t = [],
              n = [];
            return (
              e.forEach(function (e) {
                if ("string" == typeof e) {
                  var r = d[e.toUpperCase()] || null;
                  null !== r
                    ? t.push(r)
                    : n.push(
                        'invalid country code "'
                          .concat(e, '"; "')
                          .concat(e, '" is not a valid 2-letter country code')
                      );
                } else n.push('invalid value provided for country code "'.concat(e, '"; expected "string" but received "').concat(typeof e, '"'));
              }),
              { allowedCountries: t, warnings: n }
            );
          };
      },
      3852: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return o;
          },
        });
        var r = n(7904),
          o = function () {
            var e = [];
            return {
              addEventListener: function (t, n, r, o) {
                t.addEventListener(n, r, o), e.push([t, n, r, o]);
              },
              removeEventListener: function (t, n, o, i) {
                t.removeEventListener(n, o, i),
                  (e = e.filter(function (e) {
                    return (function (e, t) {
                      var n = (0, r.Z)(e, 4),
                        o = n[0],
                        i = n[1],
                        a = n[2],
                        c = n[3],
                        s = (0, r.Z)(t, 4),
                        u = s[0],
                        l = s[1],
                        p = s[2],
                        d = s[3];
                      return (
                        u !== o ||
                        l !== i ||
                        p !== a ||
                        (!0 === ("object" == typeof c && c ? c.capture : c)) !=
                          (!0 === ("object" == typeof d && d ? d.capture : d))
                      );
                    })([t, n, o, i], e);
                  }));
              },
            };
          };
      },
      1849: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return o;
          },
          d: function () {
            return i;
          },
        });
        var r = n(6589),
          o = function (e) {
            return new r.J(function (t) {
              var n = setTimeout(function () {
                t({
                  type: "error",
                  error: {
                    code: "redirect_error",
                    message: "Failed to redirect to ".concat(e),
                  },
                  locale: "en",
                });
              }, 6e4);
              window.addEventListener("pagehide", function () {
                clearTimeout(n);
              }),
                (window.top.location.href = e);
            });
          },
          i = function (e, t, n) {
            e.report("redirect_error", { initiator: t, error: n.error });
          };
      },
      6977: function (e, t, n) {
        "use strict";
        n.d(t, {
          G2: function () {
            return d;
          },
          LD: function () {
            return i;
          },
          O3: function () {
            return l;
          },
          PA: function () {
            return c;
          },
          QS: function () {
            return a;
          },
          RY: function () {
            return u;
          },
          e3: function () {
            return s;
          },
          mD: function () {
            return p;
          },
        });
        var r = n(8489),
          o = n(1873),
          i = (n(276), "webauthn"),
          a = "spc",
          c = function (e, t) {
            switch (e.type) {
              case "object":
                return { paymentIntent: e.object };
              case "error":
                var n = t ? { payment_intent: t } : {};
                return { error: (0, r.Z)((0, r.Z)({}, n), e.error) };
              default:
                return (0, o.Rz)(e);
            }
          },
          s = function (e, t) {
            switch (e.type) {
              case "error":
                return {
                  error: (0, r.Z)(
                    (0, r.Z)({}, t ? { setup_intent: t } : {}),
                    e.error
                  ),
                };
              case "object":
                return { setupIntent: e.object };
              default:
                return (0, o.Rz)(e);
            }
          },
          u = function (e) {
            var t = e.trim().match(/^((seti|pi)_[^_]+)_secret_[^-]+$/);
            return t
              ? "pi" === t[2]
                ? { id: t[1], clientSecret: t[0], type: "PAYMENT_INTENT" }
                : { id: t[1], clientSecret: t[0], type: "SETUP_INTENT" }
              : null;
          },
          l = function (e) {
            return "payment_intent" === e.object
              ? {
                  id: e.id,
                  clientSecret: e.client_secret,
                  type: "PAYMENT_INTENT",
                }
              : {
                  id: e.id,
                  clientSecret: e.client_secret,
                  type: "SETUP_INTENT",
                };
          },
          p = function (e) {
            return "requires_source_action" === e || "requires_action" === e;
          },
          d = function (e) {
            return "requires_source_action" === e.status ||
              "requires_action" === e.status
              ? e.next_action
              : null;
          };
      },
      2141: function (e, t, n) {
        "use strict";
        n.d(t, {
          J$: function () {
            return r.J;
          },
        });
        var r = n(4832);
      },
      4832: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return o;
          },
        });
        var r = {
            AE: "AE",
            AT: "AT",
            AU: "AU",
            BE: "BE",
            BG: "BG",
            BR: "BR",
            CA: "CA",
            CH: "CH",
            CI: "CI",
            CR: "CR",
            CY: "CY",
            CZ: "CZ",
            DE: "DE",
            DK: "DK",
            DO: "DO",
            EE: "EE",
            ES: "ES",
            FI: "FI",
            FR: "FR",
            GB: "GB",
            GI: "GI",
            GR: "GR",
            GT: "GT",
            HK: "HK",
            HR: "HR",
            HU: "HU",
            ID: "ID",
            IE: "IE",
            IN: "IN",
            IT: "IT",
            JP: "JP",
            LI: "LI",
            LT: "LT",
            LU: "LU",
            LV: "LV",
            MT: "MT",
            MX: "MX",
            MY: "MY",
            NL: "NL",
            NO: "NO",
            NZ: "NZ",
            PE: "PE",
            PH: "PH",
            PL: "PL",
            PT: "PT",
            RO: "RO",
            SE: "SE",
            SG: "SG",
            SI: "SI",
            SK: "SK",
            SN: "SN",
            TH: "TH",
            TT: "TT",
            US: "US",
            UY: "UY",
          },
          o = Object.keys(r);
      },
      4659: function (e, t, n) {
        "use strict";
        n.d(t, {
          Lv: function () {
            return i;
          },
          M4: function () {
            return r;
          },
          MJ: function () {
            return o;
          },
          uN: function () {
            return a;
          },
        });
        var r = {
            checkout_beta_2: "checkout_beta_2",
            checkout_beta_3: "checkout_beta_3",
            checkout_beta_4: "checkout_beta_4",
            checkout_beta_testcards: "checkout_beta_testcards",
            payment_intent_beta_1: "payment_intent_beta_1",
            payment_intent_beta_2: "payment_intent_beta_2",
            payment_intent_beta_3: "payment_intent_beta_3",
            google_pay_beta_1: "google_pay_beta_1",
            acss_debit_beta_1: "acss_debit_beta_1",
            acss_debit_beta_2: "acss_debit_beta_2",
            afterpay_clearpay_setup_intents_beta:
              "afterpay_clearpay_setup_intents_beta",
            bacs_debit_beta: "bacs_debit_beta",
            fpx_bank_beta_1: "fpx_bank_beta_1",
            ideal_pm_beta_1: "ideal_pm_beta_1",
            line_items_beta_1: "line_items_beta_1",
            mobilepay_pm_beta_1: "mobilepay_pm_beta_1",
            oxxo_pm_beta_1: "oxxo_pm_beta_1",
            paypal_pm_beta_1: "paypal_pm_beta_1",
            revolut_pay_pm_beta_1: "revolut_pay_pm_beta_1",
            sepa_pm_beta_1: "sepa_pm_beta_1",
            tax_product_beta_1: "tax_product_beta_1",
            wechat_pay_pm_beta_1: "wechat_pay_pm_beta_1",
            wechat_pay_pm_beta_2: "wechat_pay_pm_beta_2",
            checkout_beta_locales: "checkout_beta_locales",
            stripe_js_beta_locales: "stripe_js_beta_locales",
            upi_beta_1: "upi_beta_1",
            issuing_elements_1: "issuing_elements_1",
            issuing_elements_2: "issuing_elements_2",
            return_intents_beta_1: "return_intents_beta_1",
            netbanking_beta_1: "netbanking_beta_1",
            netbanking_bank_beta_1: "netbanking_bank_beta_1",
            instant_debits_beta_1: "instant_debits_beta_1",
            link_beta_1: "link_beta_1",
            link_beta_2: "link_beta_2",
            link_beta_3: "link_beta_3",
            link_default_integration_beta_1: "link_default_integration_beta_1",
            link_default_integration_beta_2: "link_default_integration_beta_2",
            link_suggest_email_domain_correction_1:
              "link_suggest_email_domain_correction_1",
            payment_element_beta_1: "payment_element_beta_1",
            elements_customers_beta_1: "elements_customers_beta_1",
            card_country_event_beta_1: "card_country_event_beta_1",
            id_bank_transfer_beta_1: "id_bank_transfer_beta_1",
            id_bank_transfer_beta_2: "id_bank_transfer_beta_2",
            us_bank_account_beta_2: "us_bank_account_beta_2",
            cup_apple_pay_beta_1: "cup_apple_pay_beta_1",
            nz_bank_account_beta_1: "nz_bank_account_beta_1",
            payment_element_apple_pay_beta_1:
              "payment_element_apple_pay_beta_1",
            link_autofill_modal_beta_1: "link_autofill_modal_beta_1",
            shipping_address_element_beta_1: "shipping_address_element_beta_1",
            process_order_beta_1: "process_order_beta_1",
            server_side_confirmation_beta_1: "server_side_confirmation_beta_1",
            cart_beta_1: "cart_beta_1",
            pay_by_bank_beta_1: "pay_by_bank_beta_1",
            blocked_card_brands_beta_1: "blocked_card_brands_beta_1",
            qris_beta_1: "qris_beta_1",
            ume_beta_1: "ume_beta_1",
            networks_change_1: "networks_change_1",
            pay_button_element_beta_1: "pay_button_element_beta_1",
            link_in_card_element_beta_1: "link_in_card_element_beta_1",
            payment_element_vertical_layout_beta_1:
              "payment_element_vertical_layout_beta_1",
            elements_enable_deferred_intent_beta_1:
              "elements_enable_deferred_intent_beta_1",
            zip_beta_1: "zip_beta_1",
            cashapp_beta_1: "cashapp_beta_1",
            cartes_bancaires_apple_pay_beta_1:
              "cartes_bancaires_apple_pay_beta_1",
            link_in_passthrough_mode_beta_1: "link_in_passthrough_mode_beta_1",
          },
          o = Object.freeze({
            netbankingBank: "netbanking_bank_beta_1",
            shippingAddress: [
              "shipping_address_element_beta_1",
              "link_beta_1",
              "link_beta_2",
              "link_beta_3",
            ],
            cart: "cart_beta_1",
            unifiedMessage: "ume_beta_1",
            paymentMethodMessaging: "ume_beta_1",
            payButton: "pay_button_element_beta_1",
          }),
          i = Object.keys(r),
          a = function (e, t) {
            return Array.isArray(t)
              ? t.some(function (t) {
                  return e.indexOf(t) > -1;
                })
              : e.indexOf(t) > -1;
          };
      },
      8846: function (e, t, n) {
        "use strict";
        n.d(t, {
          u: function () {
            return u;
          },
        });
        var r = n(3696),
          o = n(6617),
          i = n(1873),
          a = n(4659),
          c = window.location.hash.substring(1).split("?")[0],
          s = (0, i.ld)(
            (0, i.mC)({
              betas: (0, i.Wc)(
                (0, i.CT)(i.kw.apply(void 0, (0, r.Z)(a.Lv))),
                function () {
                  return [];
                }
              ),
            }),
            (0, o.vB)(c),
            "internal"
          ),
          u = "valid" === s.type ? s.value.betas : [];
      },
      7792: function (e, t, n) {
        "use strict";
        n.d(t, {
          Lv: function () {
            return o.Lv;
          },
          M4: function () {
            return o.M4;
          },
          MJ: function () {
            return o.MJ;
          },
          P3: function () {
            return a.P3;
          },
          dZ: function () {
            return i.d;
          },
          jk: function () {
            return a.jk;
          },
          uN: function () {
            return o.uN;
          },
          ub: function () {
            return r.u;
          },
        });
        var r = n(8846),
          o = n(4659),
          i = n(7450),
          a = n(6608);
      },
      7450: function (e, t, n) {
        "use strict";
        n.d(t, {
          d: function () {
            return o;
          },
        });
        var r = n(4659),
          o = function (e) {
            var t = [],
              n = [];
            if (
              (e &&
                e.forEach(function (e) {
                  r.Lv.indexOf(e) > -1 ? t.push(r.M4[e]) : n.push(e);
                }),
              n.length > 0)
            ) {
              var o =
                "The following betas are unrecognized for Stripe() parameter:\n\n- ".concat(
                  n.join("\n- "),
                  "\n\n They are either invalid or expired betas, please remove these beta flags to prevent future integration issues."
                );
              return { validBetas: t, betaWarning: o };
            }
            return { validBetas: t };
          };
      },
      6608: function (e, t, n) {
        "use strict";
        n.d(t, {
          P3: function () {
            return i;
          },
          jk: function () {
            return a;
          },
        });
        var r,
          o = n(4659),
          i = [],
          a =
            ((r = i),
            function (e, t) {
              return (0, o.uN)(t, o.M4.stripe_js_beta_locales) ||
                -1 === r.indexOf(e)
                ? e
                : "auto";
            });
      },
      4071: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ah: function () {
            return _;
          },
          Bh: function () {
            return m;
          },
          D$: function () {
            return A;
          },
          D1: function () {
            return b;
          },
          G9: function () {
            return k;
          },
          Gx: function () {
            return M;
          },
          JC: function () {
            return N;
          },
          JW: function () {
            return f;
          },
          NK: function () {
            return T;
          },
          P0: function () {
            return d;
          },
          PB: function () {
            return P;
          },
          Wt: function () {
            return E;
          },
          ZR: function () {
            return I;
          },
          cE: function () {
            return C;
          },
          fL: function () {
            return R;
          },
          j3: function () {
            return S;
          },
          q$: function () {
            return y;
          },
          s$: function () {
            return g;
          },
          sV: function () {
            return v;
          },
          tS: function () {
            return h;
          },
          x5: function () {
            return j;
          },
          xz: function () {
            return w;
          },
        });
        var r = function (e) {
            return /Edge\//i.test(e);
          },
          o = function (e) {
            return /Edg\//i.test(e);
          },
          i = function (e) {
            return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e);
          },
          a = function (e) {
            return /SamsungBrowser/.test(e);
          },
          c = function (e) {
            return /iPad|iPhone/i.test(e) && !i(e);
          },
          s = function (e) {
            return /Opera Mini/i.test(e);
          },
          u = function (e) {
            return /^((?!chrome|android).)*safari/i.test(e) && !a(e);
          },
          l = function (e) {
            return /Android/i.test(e) && !i(e);
          },
          p = window.navigator.userAgent,
          d = (window.navigator.platform, r(p)),
          m = o(p),
          f = (/Edge\/((1[0-6]\.)|0\.)/i.test(p), i(p)),
          h = (function (e) {
            return /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e);
          })(p),
          _ = c(p),
          y =
            ((function (e) {
              /iPad/i.test(e) && i(e);
            })(p),
            (function (e) {
              return c(e) || l(e);
            })(p)),
          v = l(p),
          g =
            ((function (e) {
              /Android 4\./i.test(e) && !/Chrome/i.test(e) && l(e);
            })(p),
            u(p)),
          b =
            ((function (e) {
              u(e) && c(e);
            })(p),
            (function (e) {
              return /Firefox\//i.test(e);
            })(p)),
          w =
            ((function (e) {
              /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(e);
            })(p),
            a(p)),
          k = (function (e) {
            return /Chrome\//i.test(e);
          })(p),
          E =
            ((function (e) {
              /Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(e);
            })(p),
            (function (e) {
              return (
                /AppleWebKit/i.test(e) && !/Chrome/i.test(e) && !r(e) && !i(e)
              );
            })(p)),
          S = (function (e) {
            return /Chrome/i.test(e) && !r(e);
          })(p),
          P =
            ((function (e) {
              /CriOS/i.test(e);
            })(p),
            (function (e) {
              /FxiOS/i.test(e);
            })(p),
            (function (e) {
              return /EdgiOS/i.test(e);
            })(p)),
          A = (function (e) {
            return /\belectron\b/i.test(e);
          })(p),
          C = s(p),
          I = (function (e) {
            return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e);
          })(p),
          N = (function (e) {
            return /Safari Line/i.test(e);
          })(p),
          T = (function (e) {
            return /Pinterest\/iOS/i.test(e);
          })(p),
          M = g && "download" in document.createElement("a"),
          R =
            !!window.navigator.brave &&
            "function" == typeof window.navigator.brave.isBrave,
          O =
            window.navigator &&
            "standalone" in window.navigator &&
            window.navigator.standalone,
          j =
            (function (e) {
              return /(iPhone|iPod|iPad).*AppleWebKit((?!.*Safari)|(.*\([^)]*like[^)]*Safari[^)]*\)))/i.test(
                e
              );
            })(p) ||
            (function (e) {
              return l(e) && /wv|Version\/\d+\.\d+/.test(e) && !s(e);
            })(p) ||
            (function (e) {
              return /FBAN/.test(e) || /FBAV/.test(e);
            })(p) ||
            O;
        k &&
          (function (e) {
            /\bWindows\b/i.test(e) ||
              /\bAndroid\b/i.test(e) ||
              /\biPhone|iPad\b/i.test(e) ||
              /\bMac OS\b/i.test(e) ||
              /\bCrOS\b/i.test(e) ||
              /\bLinux\b/i.test(e);
          })(p);
      },
      9294: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ah: function () {
            return r.Ah;
          },
          Bh: function () {
            return r.Bh;
          },
          D$: function () {
            return r.D$;
          },
          D1: function () {
            return r.D1;
          },
          G9: function () {
            return r.G9;
          },
          Gx: function () {
            return r.Gx;
          },
          JC: function () {
            return r.JC;
          },
          JW: function () {
            return r.JW;
          },
          NK: function () {
            return r.NK;
          },
          P0: function () {
            return r.P0;
          },
          PB: function () {
            return r.PB;
          },
          UT: function () {
            return i.U;
          },
          Wt: function () {
            return r.Wt;
          },
          ZR: function () {
            return r.ZR;
          },
          cE: function () {
            return r.cE;
          },
          fL: function () {
            return r.fL;
          },
          gG: function () {
            return o.g;
          },
          j3: function () {
            return r.j3;
          },
          q$: function () {
            return r.q$;
          },
          s$: function () {
            return r.s$;
          },
          sV: function () {
            return r.sV;
          },
          tS: function () {
            return r.tS;
          },
          x5: function () {
            return r.x5;
          },
          xz: function () {
            return r.xz;
          },
        });
        var r = n(4071),
          o = n(9949),
          i = n(5395);
      },
      5395: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return r;
          },
        });
        var r = function () {
          return (
            (window.navigator.languages || [])[0] ||
            window.navigator.userLanguage ||
            window.navigator.language ||
            ""
          );
        };
      },
      9949: function (e, t, n) {
        "use strict";
        n.d(t, {
          g: function () {
            return o;
          },
        });
        var r = n(9294),
          o = function () {
            return !(
              r.x5 ||
              r.D$ ||
              r.ZR ||
              r.fL ||
              r.NK ||
              r.JC ||
              r.PB ||
              r.cE ||
              window.crossOriginIsolated
            );
          };
      },
      2024: function (e, t, n) {
        "use strict";
        n.d(t, {
          CE: function () {
            return h;
          },
          G: function () {
            return i;
          },
          PM: function () {
            return b;
          },
          TS: function () {
            return g;
          },
          VO: function () {
            return l;
          },
          Xy: function () {
            return u;
          },
          cx: function () {
            return c;
          },
          dq: function () {
            return p;
          },
          ei: function () {
            return f;
          },
          l2: function () {
            return m;
          },
          qk: function () {
            return d;
          },
          sE: function () {
            return a;
          },
        });
        var r = n(9043),
          o = n(6589),
          i = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
              if (t(e[n])) return !0;
            return !1;
          },
          a = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n];
          },
          c = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
            return -1;
          },
          s = "[object Object]",
          u = function e(t, n) {
            if ("object" != typeof t || "object" != typeof n) return t === n;
            if (null === t || null === n) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var o = Object.prototype.toString.call(t) === s;
            if (o !== (Object.prototype.toString.call(n) === s)) return !1;
            if (!o && !r) return !1;
            var i = Object.keys(t),
              a = Object.keys(n);
            if (i.length !== a.length) return !1;
            for (var c = {}, u = 0; u < i.length; u++) c[i[u]] = !0;
            for (var l = 0; l < a.length; l++) c[a[l]] = !0;
            var p = Object.keys(c);
            if (p.length !== i.length) return !1;
            var d = t,
              m = n;
            return p.every(function (t) {
              return e(d[t], m[t]);
            });
          },
          l = function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
          p = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
            for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
            return o;
          },
          d = function (e, t) {
            var n = 0,
              r = function r(o) {
                for (var i = Date.now(); n < e.length && Date.now() - i < 50; )
                  t(e[n]), n++;
                n === e.length
                  ? o()
                  : setTimeout(function () {
                      return r(o);
                    });
              };
            return new o.J(function (e) {
              return r(e);
            });
          },
          m = function e(t, n) {
            if (Array.isArray(t)) {
              for (var r = new Array(t.length), o = 0; o < t.length; o++)
                r[o] = _(t[o]) ? e(t[o], n) : n(t[o]);
              return r;
            }
            for (var i = {}, a = Object.keys(t), c = 0; c < a.length; c++)
              i[a[c]] = _(t[a[c]]) ? e(t[a[c]], n) : n(t[a[c]]);
            return i;
          },
          f = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++)
              void 0 !== e[t[r]] && (n[t[r]] = e[t[r]]);
            return n;
          },
          h = function (e, t) {
            return (function (e, t) {
              for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++)
                t(r[o], e[r[o]]) && (n[r[o]] = e[r[o]]);
              return n;
            })(e, function (e) {
              return -1 === t.indexOf(e);
            });
          },
          _ = function (e) {
            return (
              e &&
              "object" == typeof e &&
              (e.constructor === Array || e.constructor === Object)
            );
          },
          y = function (e) {
            return _(e)
              ? Array.isArray(e)
                ? e.slice(0, e.length)
                : (0, r.Z)({}, e)
              : e;
          },
          v = function e(t) {
            return function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              if (Array.isArray(r[0]) && t) return y(r[0]);
              var i = Array.isArray(r[0]) ? [] : {};
              return (
                r.forEach(function (n) {
                  n &&
                    Object.keys(n).forEach(function (r) {
                      var o = i[r],
                        a = n[r],
                        c = _(o) && !(t && Array.isArray(o));
                      "object" == typeof a && c
                        ? (i[r] = e(t)(o, y(a)))
                        : void 0 !== a
                        ? (i[r] = _(a) ? e(t)(a) : y(a))
                        : void 0 !== o && (i[r] = o);
                    });
                }),
                i
              );
            };
          },
          g = v(!1),
          b = v(!0);
      },
      5305: function (e, t, n) {
        "use strict";
        n.d(t, {
          Y: function () {
            return r;
          },
        });
        var r = {
          card: "card",
          cardNumber: "cardNumber",
          cardExpiry: "cardExpiry",
          cardCvc: "cardCvc",
          postalCode: "postalCode",
          iban: "iban",
          idealBank: "idealBank",
          p24Bank: "p24Bank",
          paymentRequestButton: "paymentRequestButton",
          auBankAccount: "auBankAccount",
          fpxBank: "fpxBank",
          netbankingBank: "netbankingBank",
          epsBank: "epsBank",
          affirmMessage: "affirmMessage",
          afterpayClearpayMessage: "afterpayClearpayMessage",
          unifiedMessage: "unifiedMessage",
          paymentMethodMessaging: "paymentMethodMessaging",
          linkAuthentication: "linkAuthentication",
          payment: "payment",
          shippingAddress: "shippingAddress",
          address: "address",
          cart: "cart",
          payButton: "payButton",
          idealBankSecondary: "idealBankSecondary",
          p24BankSecondary: "p24BankSecondary",
          auBankAccountNumber: "auBankAccountNumber",
          auBsb: "auBsb",
          fpxBankSecondary: "fpxBankSecondary",
          netbankingBankSecondary: "netbankingBankSecondary",
          issuingCardNumberDisplay: "issuingCardNumberDisplay",
          issuingCardCopyButton: "issuingCardCopyButton",
          issuingCardCvcDisplay: "issuingCardCvcDisplay",
          issuingCardExpiryDisplay: "issuingCardExpiryDisplay",
          issuingCardPinDisplay: "issuingCardPinDisplay",
          epsBankSecondary: "epsBankSecondary",
          affirmMessageModal: "affirmMessageModal",
          afterpayClearpayMessageModal: "afterpayClearpayMessageModal",
          unifiedMessageModal: "unifiedMessageModal",
          autocompleteSuggestions: "autocompleteSuggestions",
          achBankSearchResults: "achBankSearchResults",
          linkInfoModal: "linkInfoModal",
          loaderUi: "loaderUi",
        };
      },
      3088: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return o;
          },
        });
        var r = n(5305),
          o = [
            r.Y.card,
            r.Y.cardNumber,
            r.Y.cardExpiry,
            r.Y.cardCvc,
            r.Y.postalCode,
          ];
      },
      2631: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ht: function () {
            return d;
          },
          Lo: function () {
            return u;
          },
          Pp: function () {
            return h;
          },
          QL: function () {
            return f;
          },
          T2: function () {
            return _;
          },
          XK: function () {
            return i.X;
          },
          Xk: function () {
            return a;
          },
          iw: function () {
            return v;
          },
          jQ: function () {
            return s;
          },
          kE: function () {
            return m;
          },
          kO: function () {
            return l;
          },
          rM: function () {
            return y;
          },
          zT: function () {
            return p;
          },
        });
        var r = n(6617),
          o = n(5305),
          i = n(3423),
          a = "https://js.stripe.com/v3/",
          c = (0, r.Ds)(a),
          s = c ? c.origin : "",
          u = a,
          l = 5,
          p = [
            "stripe_3ds2_challenge",
            "stripe_3ds2_fingerprint",
            "stripe_3ds2_itmx",
            "three_d_secure_redirect",
            "intent_cardimageverification_challenge",
          ],
          d = "https://verify.stripe.com/",
          m = {
            PAYMENT_INTENT: "PAYMENT_INTENT",
            SETUP_INTENT: "SETUP_INTENT",
          },
          f = {
            family: "font-family",
            src: "src",
            unicodeRange: "unicode-range",
            style: "font-style",
            variant: "font-variant",
            stretch: "font-stretch",
            weight: "font-weight",
            display: "font-display",
          },
          h = Object.keys(f).reduce(function (e, t) {
            return (e[f[t]] = t), e;
          }, {}),
          _ = [
            o.Y.issuingCardCopyButton,
            o.Y.idealBank,
            o.Y.p24Bank,
            o.Y.netbankingBank,
            o.Y.idealBankSecondary,
            o.Y.p24BankSecondary,
            o.Y.netbankingBankSecondary,
            o.Y.fpxBank,
            o.Y.fpxBankSecondary,
            o.Y.epsBank,
            o.Y.epsBankSecondary,
          ],
          y =
            (Object.keys({
              visa: "visa",
              amex: "amex",
              discover: "discover",
              mastercard: "mastercard",
              jcb: "jcb",
              diners: "diners",
              unionpay: "unionpay",
              elo: "elo",
              unknown: "unknown",
            }),
            {
              VISA: "visa",
              MASTERCARD: "mastercard",
              AMEX: "amex",
              DISCOVER: "discover",
              JCB: "jcb",
              DINERS: "diners",
              UNIONPAY: "unionpay",
              ELO: "elo",
            }),
          v = Object.keys(y).map(function (e) {
            return y[e];
          });
      },
      4624: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return r;
          },
        });
        var r = {
          elements_session: "elements_session",
          elements_assignment: "elements_assignment",
        };
      },
      276: function (e, t, n) {
        "use strict";
        n.d(t, {
          D3: function () {
            return c.D;
          },
          Ht: function () {
            return i.Ht;
          },
          J_: function () {
            return a.J_;
          },
          Lo: function () {
            return i.Lo;
          },
          Pp: function () {
            return i.Pp;
          },
          QL: function () {
            return i.QL;
          },
          T2: function () {
            return i.T2;
          },
          XK: function () {
            return i.XK;
          },
          Xk: function () {
            return i.Xk;
          },
          Yj: function () {
            return r.Y;
          },
          iw: function () {
            return i.iw;
          },
          jQ: function () {
            return i.jQ;
          },
          kE: function () {
            return i.kE;
          },
          kO: function () {
            return i.kO;
          },
          rM: function () {
            return i.rM;
          },
          sL: function () {
            return o.s;
          },
          zT: function () {
            return i.zT;
          },
        });
        var r = n(5305),
          o = n(3088),
          i = n(2631),
          a = n(111),
          c = n(4624);
      },
      111: function (e, t, n) {
        "use strict";
        n.d(t, {
          J_: function () {
            return c;
          },
        });
        var r = n(2631),
          o = "stripe.js/".concat(r.XK),
          i = "".concat(o, "; stripe-js-v3/").concat(r.XK),
          a =
            ("".concat(i, "; raw-card"),
            "".concat(i, "; create-source-card-data"),
            "checkout"),
          c =
            ("".concat(i, "; ").concat(a),
            "".concat(i, "; ").concat("payment-link", "; ").concat(a),
            "".concat(i, "; hip"),
            "".concat(i, "; payment-element"),
            "".concat(i, "; pay-button-element"),
            "dashboard");
      },
      4020: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fe: function () {
            return i;
          },
          mo: function () {
            return o;
          },
        });
        var r = {
            bif: 1,
            clp: 1,
            djf: 1,
            gnf: 1,
            jpy: 1,
            kmf: 1,
            krw: 1,
            mga: 1,
            pyg: 1,
            rwf: 1,
            vnd: 1,
            vuv: 1,
            xaf: 1,
            xof: 1,
            xpf: 1,
            bhd: 1e3,
            jod: 1e3,
            kwd: 1e3,
            omr: 1e3,
            tnd: 1e3,
          },
          o = function (e) {
            var t = r[e.toLowerCase()] || 100;
            return {
              unitSize: 1 / t,
              fractionDigits: Math.ceil(Math.log(t) / Math.log(10)),
            };
          },
          i = function (e, t) {
            var n = o(t),
              r = n.unitSize,
              i = n.fractionDigits;
            return (e * r).toFixed(i);
          };
      },
      6241: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fe: function () {
            return r.Fe;
          },
          QT: function () {
            return o.Q;
          },
          mo: function () {
            return r.mo;
          },
        });
        var r = n(4020),
          o = n(462);
      },
      462: function (e, t, n) {
        "use strict";
        n.d(t, {
          Q: function () {
            return r;
          },
        });
        var r = [
          "aed",
          "afn",
          "all",
          "amd",
          "ang",
          "aoa",
          "ars",
          "aud",
          "awg",
          "azn",
          "bam",
          "bbd",
          "bdt",
          "bgn",
          "bhd",
          "bif",
          "bmd",
          "bnd",
          "bob",
          "brl",
          "bsd",
          "btn",
          "bwp",
          "byn",
          "byr",
          "bzd",
          "cad",
          "cdf",
          "chf",
          "clf",
          "clp",
          "cny",
          "cop",
          "crc",
          "cuc",
          "cup",
          "cve",
          "czk",
          "djf",
          "dkk",
          "dop",
          "dzd",
          "egp",
          "ern",
          "etb",
          "eur",
          "fjd",
          "fkp",
          "gbp",
          "gel",
          "ghs",
          "gip",
          "gmd",
          "gnf",
          "gtq",
          "gyd",
          "hkd",
          "hnl",
          "htg",
          "huf",
          "idr",
          "ils",
          "inr",
          "iqd",
          "irr",
          "isk",
          "jmd",
          "jod",
          "jpy",
          "kes",
          "kgs",
          "khr",
          "kmf",
          "kpw",
          "krw",
          "kwd",
          "kyd",
          "kzt",
          "lak",
          "lbp",
          "lkr",
          "lrd",
          "lsl",
          "ltl",
          "lvl",
          "lyd",
          "mad",
          "mdl",
          "mga",
          "mkd",
          "mmk",
          "mnt",
          "mop",
          "mro",
          "mur",
          "mvr",
          "mwk",
          "mxn",
          "myr",
          "mzn",
          "nad",
          "ngn",
          "nio",
          "nok",
          "npr",
          "nzd",
          "omr",
          "pab",
          "pen",
          "pgk",
          "php",
          "pkr",
          "pln",
          "pyg",
          "qar",
          "ron",
          "rsd",
          "rub",
          "rwf",
          "sar",
          "sbd",
          "scr",
          "sdg",
          "sek",
          "sgd",
          "shp",
          "skk",
          "sll",
          "sos",
          "srd",
          "ssp",
          "std",
          "svc",
          "syp",
          "szl",
          "thb",
          "tjs",
          "tmt",
          "tnd",
          "top",
          "try",
          "ttd",
          "twd",
          "tzs",
          "uah",
          "ugx",
          "usd",
          "uyu",
          "uzs",
          "vef",
          "vnd",
          "vuv",
          "wst",
          "xaf",
          "xag",
          "xau",
          "xcd",
          "xdr",
          "xof",
          "xpf",
          "yer",
          "zar",
          "zmk",
          "zmw",
          "btc",
          "jep",
          "eek",
          "ghc",
          "mtl",
          "tmm",
          "yen",
          "zwd",
          "zwl",
          "zwn",
          "zwr",
        ];
      },
      9608: function (e, t, n) {
        "use strict";
        n.d(t, {
          Tf: function () {
            return a;
          },
        });
        var r = "1.2em",
          o = "14px",
          i = function (e) {
            var t = e.split(" ").map(function (e) {
              return parseInt(e.trim(), 10);
            });
            return 1 === t.length || 2 === t.length
              ? 2 * t[0]
              : 3 === t.length || 4 === t.length
              ? t[0] + t[2]
              : 0;
          },
          a = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : r,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : o,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "0",
              a = i(n);
            if ("string" == typeof e && /^[0-9.]+px$/.test(e)) {
              var c = parseFloat(e.toString().replace(/[^0-9.]/g, ""));
              return "".concat(c + a, "px");
            }
            var s,
              u = parseFloat(e.toString().replace(/[^0-9.]/g, "")),
              l = parseFloat(o.replace(/[^0-9.]/g, "")),
              p = parseFloat(t.toString().replace(/[^0-9.]/g, ""));
            if ("string" == typeof t && /^(\d+|\d*\.\d+)px$/.test(t)) s = p;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)em$/.test(t))
              s = p * l;
            else if ("string" == typeof t && /^(\d+|\d*\.\d+)%$/.test(t))
              s = (p / 100) * l;
            else {
              if (
                "string" != typeof t ||
                (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t))
              )
                return "100%";
              s = l;
            }
            var d = u * s + a,
              m = "".concat(d, "px");
            return /^[0-9.]+px$/.test(m) ? m : "100%";
          };
      },
      133: function (e, t, n) {
        "use strict";
        n.d(t, {
          W3: function () {
            return u;
          },
          dh: function () {
            return c;
          },
          gl: function () {
            return s;
          },
        });
        var r = n(4245),
          o = n(2024),
          i = n(8357),
          a = function () {
            return Array.prototype.slice
              .call(
                document.querySelectorAll(
                  "a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]"
                )
              )
              .filter(function (e) {
                var t = e.getAttribute("tabindex"),
                  n = !t || parseInt(t, 10) >= 0,
                  r = e.getBoundingClientRect(),
                  o = (0, i.D)(e),
                  a =
                    r.width > 0 &&
                    r.height > 0 &&
                    o &&
                    "hidden" !== o.getPropertyValue("visibility");
                return n && a;
              });
          },
          c = function (e, t) {
            var n = a();
            return n[
              (0, o.cx)(n, function (t) {
                return t === e || e.contains(t);
              }) + ("previous" === t ? -1 : 1)
            ];
          },
          s = function (e, t) {
            return e.then(function () {
              return (0, o.qk)(t, function (e) {
                var t = e.element,
                  n = e.tabIndex;
                "" === n
                  ? t.removeAttribute("tabindex")
                  : t.setAttribute("tabindex", n);
              });
            });
          },
          u = function (e) {
            var t = [],
              n = (0, o.qk)(document.querySelectorAll("*"), function (n) {
                var r = n.getAttribute("tabindex") || "";
                e !== n && (n.tabIndex = -1),
                  t.push({ element: n, tabIndex: r });
              }),
              i = (0, r.$M)(function () {
                s(n, t);
              });
            return { lockedPromise: n, lockedElements: t, restoreFocus: i };
          };
      },
      7855: function (e, t, n) {
        "use strict";
        n(6617), n(3534);
      },
      8357: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return r;
          },
        });
        var r = function (e, t) {
          return e ? window.getComputedStyle(e, t) : null;
        };
      },
      3534: function (e, t, n) {
        "use strict";
        n.d(t, {
          Hb: function () {
            return l;
          },
          Ql: function () {
            return d;
          },
          SV: function () {
            return u;
          },
          Xq: function () {
            return p;
          },
          d3: function () {
            return _;
          },
          mb: function () {
            return a;
          },
          qW: function () {
            return h;
          },
          yq: function () {
            return c;
          },
        });
        var r = n(7904),
          o = n(8812),
          i = n(4245),
          a = function (e, t) {
            var n = {},
              o = {};
            e.className.split(/\s+/).forEach(function (e) {
              e && (n[e] = !0);
            }),
              t.forEach(function (e) {
                var t = (0, r.Z)(e, 2),
                  i = t[0],
                  a = t[1];
                i.split(/\s+/).forEach(function (e) {
                  e && ((o[e] = o[e] || a), (n[e] = o[e]));
                });
              }),
              (e.className = Object.keys(n)
                .filter(function (e) {
                  return n[e];
                })
                .join(" "));
          },
          c = function (e, t) {
            e.style.cssText = Object.keys(t)
              .map(function (e) {
                return "".concat(e, ": ").concat(t[e], " !important;");
              })
              .join(" ");
          },
          s = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block",
            visibility: "hidden",
            position: "fixed",
            height: "1px",
            "pointer-events": "none",
            "user-select": "none",
          },
          u = function (e) {
            c(e, s);
          },
          l = function (e) {
            try {
              return window.parent.frames[e];
            } catch (e) {
              return null;
            }
          },
          p = function () {
            if (!document.body)
              throw new o.No(
                "Stripe.js requires that your page has a <body> element."
              );
            return document.body;
          },
          d = function (e) {
            return setTimeout(e, 16);
          },
          m = function (e, t) {
            return !!e.documentElement && e.documentElement.contains(t);
          },
          f =
            "isConnected" in window.Node.prototype
              ? function (e, t) {
                  return t.isConnected && t.ownerDocument === e;
                }
              : m,
          h = function (e, t) {
            return !m(e, t) && f(e, t);
          },
          _ = function (e, t) {
            if (window.IntersectionObserver) {
              var n = (0, i.$M)(t),
                r = new IntersectionObserver(
                  function (t) {
                    t.forEach(function (t) {
                      t.intersectionRatio > 0 && (r.unobserve(e), n());
                    });
                  },
                  { root: document.documentElement }
                );
              r.observe(e);
            }
          };
      },
      1002: function (e, t, n) {
        "use strict";
        n.d(t, {
          BO: function () {
            return u.BO;
          },
          Dx: function () {
            return i.D;
          },
          Hb: function () {
            return a.Hb;
          },
          MV: function () {
            return s.M;
          },
          Ql: function () {
            return a.Ql;
          },
          SV: function () {
            return a.SV;
          },
          Tf: function () {
            return r.Tf;
          },
          W3: function () {
            return o.W3;
          },
          Xq: function () {
            return a.Xq;
          },
          a0: function () {
            return c.a;
          },
          d3: function () {
            return a.d3;
          },
          dh: function () {
            return o.dh;
          },
          gl: function () {
            return o.gl;
          },
          mb: function () {
            return a.mb;
          },
          qW: function () {
            return a.qW;
          },
          xc: function () {
            return u.xc;
          },
          xz: function () {
            return u.xz;
          },
          yq: function () {
            return a.yq;
          },
        });
        var r = n(9608),
          o = n(133),
          i = (n(7855), n(8357)),
          a = n(3534),
          c = n(877),
          s = n(3765),
          u = n(5784);
      },
      877: function (e, t, n) {
        "use strict";
        n.d(t, {
          a: function () {
            return o;
          },
        });
        var r = [
            "button",
            "checkbox",
            "file",
            "hidden",
            "image",
            "submit",
            "radio",
            "reset",
          ],
          o = function (e) {
            var t = e.tagName;
            if (e.isContentEditable || "TEXTAREA" === t) return !0;
            if ("INPUT" !== t) return !1;
            var n = e.getAttribute("type");
            return -1 === r.indexOf(n);
          };
      },
      3765: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return i;
          },
        });
        var r = n(4245),
          o = n(3534),
          i = function () {
            var e = (0, o.Xq)(),
              t = e.style.overflow;
            e.style.overflow = "hidden";
            var n = { passive: !1 },
              i = function (e) {
                return e.preventDefault();
              },
              a = function () {};
            return (
              window.addEventListener("touchmove", a, n),
              e.addEventListener("touchstart", a, n),
              e.addEventListener("touchmove", i, n),
              (0, r.$M)(function () {
                (e.style.overflow = t || ""),
                  window.removeEventListener("touchmove", a, n),
                  e.removeEventListener("touchstart", a, n),
                  e.removeEventListener("touchmove", i, n);
              })
            );
          };
      },
      5784: function (e, t, n) {
        "use strict";
        n.d(t, {
          BO: function () {
            return i;
          },
          xc: function () {
            return a;
          },
          xz: function () {
            return r;
          },
        });
        var r = function () {
            var e = document.querySelectorAll("meta[name=viewport][content]"),
              t = e[e.length - 1];
            return t && t instanceof HTMLMetaElement ? t.content : "";
          },
          o = function (e) {
            return r().match(e);
          },
          i = function (e) {
            o("width=device-width") ||
              e(
                'Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'
              );
          },
          a = function (e) {
            o("minimum-scale=1") ||
              e(
                'The Financial Connections authentication flow requires "minimum-scale=1" to be set in your page\'s viewport meta tag.'
              );
          };
      },
      4086: function (e, t, n) {
        "use strict";
        n.d(t, {
          k: function () {
            return a;
          },
        });
        var r = n(7853),
          o = n(1020),
          i = n(8992),
          a = (function (e) {
            function t(e, o) {
              var i;
              return (
                (0, r.Z)(this, t),
                ((i = n.call(this)).name = "FetchError"),
                (i.type = "fetch_error"),
                (i.message = "Error fetching ".concat(o)),
                (i.requestUrl = o),
                "string" == typeof e
                  ? (i.message += ": ".concat(e))
                  : ((i.originalError = e),
                    (i.message += ": ".concat(e.message))),
                i
              );
            }
            (0, o.Z)(t, e);
            var n = (0, i.Z)(t);
            return t;
          })((0, n(4909).Z)(Error));
      },
      3973: function (e, t, n) {
        "use strict";
        n.d(t, {
          N: function () {
            return c;
          },
        });
        var r = n(7853),
          o = n(6148),
          i = n(1020),
          a = n(8992),
          c = (function (e) {
            function t(e) {
              var i;
              return (
                (0, r.Z)(this, t),
                (i = n.call(this, e)),
                window.__stripeElementsController &&
                  window.__stripeElementsController.reportIntegrationError(e),
                (i.name = "IntegrationError"),
                Object.defineProperty((0, o.Z)(i), "message", {
                  value: i.message,
                  enumerable: !0,
                }),
                i
              );
            }
            (0, i.Z)(t, e);
            var n = (0, a.Z)(t);
            return t;
          })((0, n(4909).Z)(Error));
      },
      8102: function (e, t, n) {
        "use strict";
        var r = n(7853),
          o = n(1020),
          i = n(8992);
        Error;
      },
      51: function (e, t, n) {
        "use strict";
        n.d(t, {
          F: function () {
            return a;
          },
        });
        var r = n(7853),
          o = n(1020),
          i = n(8992),
          a = (function (e) {
            function t(e) {
              var o;
              return (
                (0, r.Z)(this, t),
                ((o = n.call(this, e)).name = "NetworkError"),
                (o.type = "network_error"),
                (o.requestUrl = e),
                o
              );
            }
            (0, o.Z)(t, e);
            var n = (0, i.Z)(t);
            return t;
          })((0, n(4909).Z)(Error));
      },
      8812: function (e, t, n) {
        "use strict";
        n.d(t, {
          F7: function () {
            return i.F;
          },
          No: function () {
            return o.N;
          },
          kp: function () {
            return r.k;
          },
        });
        var r = n(4086),
          o = n(3973),
          i = (n(8102), n(51));
      },
      9439: function (e, t, n) {
        "use strict";
        n.d(t, {
          h: function () {
            return l;
          },
        });
        var r = n(8489),
          o = n(6617),
          i = n(6589),
          a = n(8812),
          c = function (e) {
            var t = e.data,
              n = e.contentType,
              r = void 0 === n ? "application/x-www-form-urlencoded" : n,
              i = e.method,
              a = e.url,
              c = "";
            return (
              t && "application/x-www-form-urlencoded" === r
                ? (c = (0, o.qC)(t))
                : t && "application/json" === r && (c = JSON.stringify(t)),
              {
                requestUrl: "GET" === i && c ? "".concat(a, "?").concat(c) : a,
                requestData: "GET" === i ? "" : c,
                contentType: r,
              }
            );
          },
          s = function (e) {
            return new i.J(function (t, n) {
              var o = e.method,
                s = e.headers,
                u = e.withCredentials,
                p = c(e),
                d = p.requestUrl,
                m = p.requestData,
                f = p.contentType,
                h = new XMLHttpRequest();
              u && (h.withCredentials = u),
                h.open(o, d, !0),
                h.setRequestHeader("Accept", "application/json"),
                h.setRequestHeader("Content-Type", f),
                (h.json = function () {
                  return new i.J(function (e, t) {
                    try {
                      e(JSON.parse(h.responseText));
                    } catch (e) {
                      t(new a.kp(e, d));
                    }
                  });
                }),
                s &&
                  Object.keys(s).forEach(function (e) {
                    var t = s[e];
                    "string" == typeof t && h.setRequestHeader(e, t);
                  }),
                (h.onreadystatechange = function () {
                  4 === h.readyState &&
                    ((h.onreadystatechange = function () {}),
                    0 === h.status
                      ? u
                        ? n(new a.F7(d))
                        : l(
                            (0, r.Z)(
                              (0, r.Z)({}, e),
                              {},
                              { withCredentials: !0 }
                            )
                          ).then(t, n)
                      : t(h));
                });
              try {
                h.send(m);
              } catch (e) {
                n(new a.kp(e, d));
              }
            });
          },
          u = function e(t) {
            return new i.J(function (n, o) {
              var s = t.method,
                u = t.headers,
                l = void 0 === u ? {} : u,
                p = t.keepalive,
                d = t.withCredentials,
                m = t.priority,
                f = void 0 === m ? "auto" : m,
                h = c(t),
                _ = h.requestUrl,
                y = h.requestData,
                v = {
                  Accept: "application/json",
                  "Content-Type": h.contentType,
                };
              l &&
                Object.keys(l).forEach(function (e) {
                  var t = l[e];
                  "string" == typeof t && (v[e] = t);
                }),
                window
                  .fetch(_, {
                    method: s,
                    keepalive: p,
                    headers: v,
                    body: y || void 0,
                    mode: "cors",
                    credentials: d ? "include" : "omit",
                    priority: f,
                  })
                  .then(function (c) {
                    if (0 === c.status) {
                      if (!d)
                        return e(
                          (0, r.Z)((0, r.Z)({}, t), {}, { withCredentials: !0 })
                        ).then(n, o);
                      o(new a.F7(_));
                    }
                    return c.text().then(function (e) {
                      n({
                        responseURL: c.url,
                        status: c.status,
                        json: function () {
                          return i.J.resolve(JSON.parse(e));
                        },
                        getResponseHeader: function (e) {
                          return c.headers.get(e) || "";
                        },
                        responseText: e,
                      });
                    });
                  })
                  .catch(function (e) {
                    o(new a.kp(e, _));
                  });
            });
          },
          l = function (e) {
            return "function" == typeof window.fetch ? u(e) : s(e);
          };
      },
      2445: function (e, t, n) {
        "use strict";
        n.d(t, {
          N: function () {
            return r;
          },
        });
        var r = {
          CARD_ELEMENT: "CARD_ELEMENT",
          CONTROLLER: "CONTROLLER",
          METRICS_CONTROLLER: "METRICS_CONTROLLER",
          PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
          PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER",
          PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY",
          IBAN_ELEMENT: "IBAN_ELEMENT",
          IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT",
          P24_BANK_ELEMENT: "P24_BANK_ELEMENT",
          AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL",
          STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE",
          STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT",
          AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT",
          FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT",
          LIGHTBOX_APP: "LIGHTBOX_APP",
          ISSUING_CARD_NUMBER_DISPLAY_ELEMENT:
            "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT",
          ISSUING_CARD_COPY_BUTTON_ELEMENT: "ISSUING_CARD_COPY_BUTTON_ELEMENT",
          ISSUING_CARD_CVC_DISPLAY_ELEMENT: "ISSUING_CARD_CVC_DISPLAY_ELEMENT",
          ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT:
            "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT",
          ISSUING_CARD_PIN_DISPLAY_ELEMENT: "ISSUING_CARD_PIN_DISPLAY_ELEMENT",
          EPS_BANK_ELEMENT: "EPS_BANK_ELEMENT",
          HCAPTCHA_APP: "HCAPTCHA_APP",
          NETBANKING_BANK_ELEMENT: "NETBANKING_BANK_ELEMENT",
          AFFIRM_MESSAGE_ELEMENT: "AFFIRM_MESSAGE_ELEMENT",
          AFFIRM_MESSAGE_MODAL_ELEMENT: "AFFIRM_MESSAGE_MODAL_ELEMENT",
          AFTERPAY_MESSAGE_MODAL_ELEMENT: "AFTERPAY_MESSAGE_MODAL_ELEMENT",
          UNIFIED_MESSAGE_MODAL_ELEMENT: "UNIFIED_MESSAGE_MODAL_ELEMENT",
          AUTOCOMPLETE_SUGGESTIONS_ELEMENT: "AUTOCOMPLETE_SUGGESTIONS_ELEMENT",
          ACH_BANK_SEARCH_RESULTS_ELEMENT: "ACH_BANK_SEARCH_RESULTS_ELEMENT",
          INSTANT_DEBITS_APP: "INSTANT_DEBITS_APP",
          LINK_AUTHENTICATION_ELEMENT: "LINK_AUTHENTICATION_ELEMENT",
          PAYMENT_ELEMENT: "PAYMENT_ELEMENT",
          LINKED_ACCOUNTS_INNER: "LINKED_ACCOUNTS_INNER",
          WECHAT_PAY_INNER: "WECHAT_PAY_INNER",
          PAYNOW_INNER: "PAYNOW_INNER",
          BLIK_INNER: "BLIK_INNER",
          PIX_INNER: "PIX_INNER",
          PROMPTPAY_INNER: "PROMPTPAY_INNER",
          ADDRESS_ELEMENT: "ADDRESS_ELEMENT",
          LINK_AUTOFILL_MODAL: "LINK_AUTOFILL_MODAL",
          LINK_INFO_MODAL: "LINK_INFO_MODAL",
          GOOGLE_MAPS_APP: "GOOGLE_MAPS_APP",
          LOADER_UI_APP: "LOADER_UI_APP",
          CART_ELEMENT: "CART_ELEMENT",
          BACS_MANDATE_CONFIRMATION_APP: "BACS_MANDATE_CONFIRMATION_APP",
          BACS_CONFIRMATION_INNER: "BACS_CONFIRMATION_INNER",
          META_PAY_INNER: "META_PAY_INNER",
          PAY_BUTTON_ELEMENT: "PAY_BUTTON_ELEMENT",
          BUY_BUTTON_APP: "BUY_BUTTON_APP",
          LINK_BUTTON_FOR_CARD_ELEMENT: "LINK_BUTTON_FOR_CARD_ELEMENT",
        };
      },
      262: function (e, t, n) {
        "use strict";
        n.d(t, {
          i: function () {
            return i;
          },
        });
        var r = n(9294),
          o = n(97),
          i = function (e) {
            var t = {
                frameborder: "0",
                allowTransparency: "true",
                scrolling: "no",
                role: "presentation",
              },
              n = !r.D1;
            if ((n && (t.allow = "payment *"), "STRIPE_3DS2_CHALLENGE" === e)) {
              var i = "publickey-credentials-get ".concat((0, o.x)());
              t.allow = n ? "payment *; ".concat(i) : i;
            }
            if ("PAYMENT_REQUEST_GOOGLE_PAY" === e) {
              (t.sandbox = [
                "allow-scripts",
                "allow-forms",
                "allow-popups",
                "allow-popups-to-escape-sandbox",
                "allow-same-origin",
              ].join(" ")),
                (t.referrerpolicy = "origin");
            }
            return t;
          };
      },
      4044: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return i;
          },
        });
        var r = n(1873),
          o = n(97),
          i = function (e) {
            switch (e) {
              case "CARD_ELEMENT":
                return (0, o.x)(
                  "elements-inner-card-1847ac16465e62d7308bdd6092bc2c56.html"
                );
              case "CONTROLLER":
                return (0, o.x)(
                  "controller-42403bea3e9762e19fe063cd3cfe5b3a.html"
                );
              case "METRICS_CONTROLLER":
                return (0, o.x)(
                  "m-outer-93afeeb17bc37e711759584dbfc50d47.html"
                );
              case "PAYMENT_REQUEST_ELEMENT":
                return (0, o.x)(
                  "elements-inner-payment-request-b45c50d232714fca9a0f67e5f765e297.html"
                );
              case "PAYMENT_REQUEST_BROWSER":
                return (0, o.x)(
                  "payment-request-inner-browser-28770122ed88aa037514ab2c18a0a1ac.html"
                );
              case "PAYMENT_REQUEST_GOOGLE_PAY":
                return (0, o.x)(
                  "payment-request-inner-google-pay-93b504e78741eeb501e684e780bd6128.html"
                );
              case "IBAN_ELEMENT":
                return (0, o.x)(
                  "elements-inner-iban-b31b5279ad92faa3f765b3dcfaa41eaf.html"
                );
              case "IDEAL_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-ideal-bank-514d56b456a5abbf2b383c41cce5bc1a.html"
                );
              case "P24_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-p24-bank-b6adb3b0e55e8930b7f603a5b6ce7cf8.html"
                );
              case "AUTHORIZE_WITH_URL":
                return (0, o.x)(
                  "authorize-with-url-inner-4baa8cbfdb88091c708dcf7f54bd24c5.html"
                );
              case "STRIPE_3DS2_CHALLENGE":
                return (0, o.x)(
                  "three-ds-2-challenge-6030dac7ab6531f5f29d3334dbff0562.html"
                );
              case "STRIPE_3DS2_FINGERPRINT":
                return (0, o.x)(
                  "three-ds-2-fingerprint-87d825c52c4ba02fe9b2efff6f9591ec.html"
                );
              case "AU_BANK_ACCOUNT_ELEMENT":
                return (0, o.x)(
                  "elements-inner-au-bank-account-4c223941cfe4940e3b44e5ff9865835b.html"
                );
              case "FPX_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-fpx-bank-95f524cd161a65c02cbe7b7e53ee2559.html"
                );
              case "LIGHTBOX_APP":
                return (0, o.x)(
                  "lightbox-inner-72e85cf774b669811b00f7fb1e98ca83.html"
                );
              case "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-number-display-ac5bf3f7646218563ee8669398f41992.html"
                );
              case "ISSUING_CARD_COPY_BUTTON_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-copy-button-ea2cdcf806cac6d3b6dc27c1f872d5fa.html"
                );
              case "ISSUING_CARD_CVC_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-cvc-display-68027e9ee4a1c247b444e08029c4bd00.html"
                );
              case "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-expiry-display-b80c895f82e078dd1069af59dc5997dc.html"
                );
              case "ISSUING_CARD_PIN_DISPLAY_ELEMENT":
                return (0, o.x)(
                  "elements-inner-issuing-card-pin-display-7c0a8fcc88a9f6c89bfd68a48d4ada82.html"
                );
              case "EPS_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-eps-bank-e98932d680d0a0a6d214e7fac82724a7.html"
                );
              case "HCAPTCHA_APP":
                return (0, o.x)(
                  "hcaptcha-inner-c3ec43f5bf83660b328085ae1c3759b4.html"
                );
              case "NETBANKING_BANK_ELEMENT":
                return (0, o.x)(
                  "elements-inner-netbanking-bank-f80d6903baaf9004405faa0db19f7dcf.html"
                );
              case "AFFIRM_MESSAGE_ELEMENT":
                return (0, o.x)(
                  "elements-inner-affirm-message-373bed58801e212845e4697119a9b8ca.html"
                );
              case "AFFIRM_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-affirm-message-modal-de1165cd6acd182809b70cef79d29756.html"
                );
              case "AFTERPAY_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-afterpay-message-modal-60c2f96081a731d6973fe7cd867991d2.html"
                );
              case "UNIFIED_MESSAGE_MODAL_ELEMENT":
                return (0, o.x)(
                  "elements-inner-unified-message-modal-054f3e2df9fd5517555da1718c56cbc0.html"
                );
              case "META_PAY_INNER":
              case "WECHAT_PAY_INNER":
              case "PAYNOW_INNER":
              case "PIX_INNER":
              case "PROMPTPAY_INNER":
              case "BACS_CONFIRMATION_INNER":
                return (0, o.x)("");
              case "INSTANT_DEBITS_APP":
                return (0, o.x)(
                  "instant-debits-app-1991c3d0e01df9ab32db2f168825b859.html"
                );
              case "LINK_AUTHENTICATION_ELEMENT":
                return (0, o.x)(
                  "elements-inner-authentication-fbbdaae75b82a54c12148cbf6297b8e4.html"
                );
              case "PAYMENT_ELEMENT":
                return (0, o.x)(
                  "elements-inner-payment-c987523df59855d679184f7682a5675a.html"
                );
              case "LINKED_ACCOUNTS_INNER":
                return (0, o.x)(
                  "linked-accounts-inner-a55d21bfdd378d8cf7ebb25d489a714f.html"
                );
              case "BLIK_INNER":
                return (0, o.x)(
                  "blik-inner-7276d3129bed0e97f267958b7a143184.html"
                );
              case "ADDRESS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-address-8cc123910e3ef17eb76f0670488b2946.html"
                );
              case "LINK_AUTOFILL_MODAL":
                return (0, o.x)(
                  "link-autofill-modal-inner-926168699c2f2da5451fa11fccc28fd7.html"
                );
              case "GOOGLE_MAPS_APP":
                return (0, o.x)(
                  "google-maps-inner-f75001864cadf1023db1c7efcc9172d3.html"
                );
              case "AUTOCOMPLETE_SUGGESTIONS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-autocomplete-suggestions-a750550357005b10f288329b7ae71cff.html"
                );
              case "ACH_BANK_SEARCH_RESULTS_ELEMENT":
                return (0, o.x)(
                  "elements-inner-ach-bank-search-results-a09a05059fded6d478f27afa281752c8.html"
                );
              case "LINK_INFO_MODAL":
                return (0, o.x)(
                  "elements-inner-link-info-modal-a349bf329e8f757f1b90dd9a3eca65b0.html"
                );
              case "LOADER_UI_APP":
                return (0, o.x)(
                  "elements-inner-loader-ui-8fadc0e183bc90e7370bf0d66d5e0c6b.html"
                );
              case "CART_ELEMENT":
                return (0, o.x)(
                  "elements-inner-cart-54a2495a5501dfa307d14e6a24c7dd21.html"
                );
              case "BACS_MANDATE_CONFIRMATION_APP":
                return (0, o.x)(
                  "bacs-mandate-confirmation-inner-a0ec2539ace531f0c4c6e2266e706e26.html"
                );
              case "PAY_BUTTON_ELEMENT":
                return (0, o.x)(
                  "elements-inner-express-checkout-1b1b9d97793d404ad85baa9ce91f3edb.html"
                );
              case "BUY_BUTTON_APP":
                return (0, o.x)("buy-button-app.html");
              case "LINK_BUTTON_FOR_CARD_ELEMENT":
                return (0, o.x)(
                  "elements-inner-link-button-for-card-a2eb676759d018ee3b406bf41900b7cb.html"
                );
              default:
                return (0, r.Rz)(e);
            }
          };
      },
      97: function (e, t, n) {
        "use strict";
        n.d(t, {
          x: function () {
            return r;
          },
        });
        var r = function (e) {
          return "".concat("https://js.stripe.com/v3/").concat(e || "");
        };
      },
      755: function (e, t, n) {
        "use strict";
        n.d(t, {
          $G: function () {
            return a.$;
          },
          NC: function () {
            return o.N;
          },
          i7: function () {
            return r.i;
          },
          jr: function () {
            return c.j;
          },
          oi: function () {
            return a.o;
          },
          xS: function () {
            return i.x;
          },
        });
        var r = n(262),
          o = n(2445),
          i = n(97),
          a = n(5311),
          c = n(6810);
      },
      5311: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return c;
          },
          o: function () {
            return a;
          },
        });
        var r = n(8489),
          o = (n(1873), n(276)),
          i = n(1002),
          a = function (e) {
            var t,
              n = e.controllerId,
              a = e.frameId,
              c = e.targetOrigin,
              s = e.type,
              u = c;
            if (
              ("controller" === s
                ? (t = (0, i.Hb)(a))
                : "group" === s
                ? (t = (0, i.Hb)(n))
                : "outer" === s || "hosted" === s
                ? (t = window.frames[a])
                : "inner" === s && ((u = u || "*"), (t = window.parent)),
              (u = u || o.jQ),
              t && "function" == typeof t.postMessage)
            ) {
              var l = e.message.delegate
                ? { targetOrigin: u, delegate: e.message.delegate }
                : u;
              t.postMessage(
                JSON.stringify(
                  (0, r.Z)((0, r.Z)({}, e), {}, { __stripeJsV3: !0 })
                ),
                l
              );
            }
          },
          c = function (e) {
            try {
              var t = "string" == typeof e ? JSON.parse(e) : e;
              return t.__stripeJsV3 ? t : null;
            } catch (e) {
              return null;
            }
          };
      },
      6810: function (e, t, n) {
        "use strict";
        n.d(t, {
          j: function () {
            return r;
          },
        });
        n(276);
        var r = function (e) {
          return e;
        };
      },
      3048: function (e, t, n) {
        "use strict";
        n(9294), n(4245);
      },
      8148: function (e, t, n) {
        "use strict";
        n.d(t, {
          i3: function () {
            return r;
          },
        });
        var r = function (e) {
          return e.replace(/_./g, function (e) {
            return e[1].toUpperCase();
          });
        };
      },
      9617: function (e, t, n) {
        "use strict";
        n.d(t, {
          $M: function () {
            return a;
          },
          AO: function () {
            return i;
          },
          HP: function () {
            return o;
          },
        });
        var r = n(8812),
          o =
            (n(6589),
            function (e) {
              var t = {},
                n = {};
              return function (r) {
                var o = "_".concat(r);
                if ("string" == typeof r && void 0 !== t[o]) return t[o];
                if ("number" == typeof r && void 0 !== n[o]) return n[o];
                var i = e(r);
                return (
                  "string" == typeof r && (t[o] = i),
                  "number" == typeof r && (n[o] = i),
                  i
                );
              };
            }),
          i = function (e, t) {
            var n = !1;
            return function () {
              if (n) throw new r.No(t);
              n = !0;
              try {
                return e.apply(void 0, arguments).then(
                  function (e) {
                    return (n = !1), e;
                  },
                  function (e) {
                    throw ((n = !1), e);
                  }
                );
              } catch (e) {
                throw ((n = !1), e);
              }
            };
          },
          a = function (e) {
            var t = e;
            return function () {
              t && (t.apply(void 0, arguments), (t = null));
            };
          };
      },
      6940: function (e, t, n) {
        "use strict";
        n.d(t, {
          _: function () {
            return o;
          },
        });
        var r = n(6589),
          o = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return new r.J(function (t) {
              return setTimeout(t, e);
            });
          };
      },
      4245: function (e, t, n) {
        "use strict";
        n.d(t, {
          $M: function () {
            return r.$M;
          },
          AO: function () {
            return r.AO;
          },
          HP: function () {
            return r.HP;
          },
          _v: function () {
            return i._;
          },
          i3: function () {
            return a.i3;
          },
          tN: function () {
            return o.t;
          },
        });
        var r = n(9617),
          o = (n(807), n(6103)),
          i = (n(9220), n(6940)),
          a = n(8148);
        n(3048);
      },
      807: function (e, t, n) {
        "use strict";
        n(6589);
      },
      6103: function (e, t, n) {
        "use strict";
        n.d(t, {
          t: function () {
            return o;
          },
        });
        var r = n(6589),
          o = function (e, t) {
            return e.reduce(function (e, n) {
              return e.then(function (e) {
                return "SATISFIED" === e.type
                  ? e
                  : n().then(function (e) {
                      return t(e)
                        ? { type: "SATISFIED", value: e }
                        : { type: "UNSATISFIED" };
                    });
              });
            }, r.J.resolve({ type: "UNSATISFIED" }));
          };
      },
      9220: function (e, t, n) {
        "use strict";
        n(6589);
      },
      9803: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return i;
          },
          V: function () {
            return a;
          },
        });
        var r = "00".concat(Math.floor(1e3 * Math.random())).slice(-3),
          o = 0,
          i = function (e) {
            return "".concat(e).concat(r).concat(o++);
          },
          a = function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return t
              ? (
                  parseInt(t, 10) ^
                  ((16 * Math.random()) >> (parseInt(t, 10) / 4))
                ).toString(16)
              : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e);
          };
      },
      7412: function (e, t, n) {
        "use strict";
        n.d(t, {
          To: function () {
            return r.T;
          },
          Vj: function () {
            return r.V;
          },
        });
        var r = n(9803);
      },
      9620: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kl: function () {
            return r.Kl;
          },
          Tj: function () {
            return o.T;
          },
          lO: function () {
            return r.lO;
          },
          pF: function () {
            return r.pF;
          },
        });
        var r = n(1834),
          o = n(7049);
      },
      1834: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kl: function () {
            return o;
          },
          lO: function () {
            return i;
          },
          pF: function () {
            return a;
          },
        });
        var r = n(8812),
          o = { live: "live", test: "test", unknown: "unknown" },
          i = function (e) {
            return /^pk_test_/.test(e)
              ? o.test
              : /^pk_live_/.test(e)
              ? o.live
              : o.unknown;
          },
          a = function (e) {
            if (e === o.unknown)
              throw new r.No(
                "It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
              );
          };
      },
      7049: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return l;
          },
        });
        var r = n(8812),
          o = "publishable",
          i = "secret",
          a = "ephemeral",
          c = "restricted",
          s = "unknown",
          u = function (e) {
            switch (e.split("_", 1)[0]) {
              case "pk":
                return o;
              case "sk":
                return i;
              case "ek":
                return a;
              case "rk":
                return c;
              default:
                return s;
            }
          },
          l = function (e) {
            if ("" === e)
              throw new r.No(
                "Please call Stripe() with your publishable key. You used an empty string."
              );
            switch (u(e)) {
              case i:
                throw new r.No(
                  "You should not use your secret key with Stripe.js.\n          Please pass a publishable key instead."
                );
              case a:
                throw new r.No(
                  "You should not use an ephemeral key with Stripe.js.\n          Please pass a publishable key instead."
                );
              case c:
                throw new r.No(
                  "You should not use a restricted key with Stripe.js.\n          Please pass a publishable key instead."
                );
            }
          };
      },
      3840: function (e, t, n) {
        "use strict";
        n.d(t, {
          GS: function () {
            return r.GS;
          },
          ZX: function () {
            return r.ZX;
          },
          _b: function () {
            return r._b;
          },
          ke: function () {
            return r.ke;
          },
        });
        var r = n(4123);
      },
      4123: function (e, t, n) {
        "use strict";
        n.d(t, {
          GS: function () {
            return a;
          },
          ZX: function () {
            return u;
          },
          _b: function () {
            return c;
          },
          ke: function () {
            return s;
          },
        });
        var r,
          o = n(6222),
          i = n(276),
          a = {
            alipay: "alipay",
            affirm: "affirm",
            afterpay_clearpay: "afterpay_clearpay",
            au_becs_debit: "au_becs_debit",
            acss_debit: "acss_debit",
            bacs_debit: "bacs_debit",
            bancontact: "bancontact",
            blik: "blik",
            boleto: "boleto",
            card: "card",
            cashapp: "cashapp",
            customer_balance: "customer_balance",
            eps: "eps",
            fpx: "fpx",
            giropay: "giropay",
            grabpay: "grabpay",
            ideal: "ideal",
            klarna: "klarna",
            konbini: "konbini",
            mobilepay: "mobilepay",
            nz_bank_account: "nz_bank_account",
            oxxo: "oxxo",
            p24: "p24",
            pay_by_bank: "pay_by_bank",
            paypal: "paypal",
            sepa_debit: "sepa_debit",
            sofort: "sofort",
            three_d_secure: "three_d_secure",
            upi: "upi",
            us_bank_account: "us_bank_account",
            wechat_pay: "wechat_pay",
            paynow: "paynow",
            pix: "pix",
            promptpay: "promptpay",
            qris: "qris",
            revolut_pay: "revolut_pay",
            netbanking: "netbanking",
            id_bank_transfer: "id_bank_transfer",
            link: "link",
            apple_pay: "apple_pay",
            google_pay: "google_pay",
            zip: "zip",
          },
          c =
            ((r = {}),
            (0, o.Z)(r, i.Yj.auBankAccount, a.au_becs_debit),
            (0, o.Z)(r, i.Yj.card, a.card),
            (0, o.Z)(r, i.Yj.cardNumber, a.card),
            (0, o.Z)(r, i.Yj.cardExpiry, a.card),
            (0, o.Z)(r, i.Yj.cardCvc, a.card),
            (0, o.Z)(r, i.Yj.postalCode, a.card),
            (0, o.Z)(r, i.Yj.iban, a.sepa_debit),
            (0, o.Z)(r, i.Yj.idealBank, a.ideal),
            (0, o.Z)(r, i.Yj.fpxBank, a.fpx),
            (0, o.Z)(r, i.Yj.p24Bank, a.p24),
            (0, o.Z)(r, i.Yj.netbankingBank, a.netbanking),
            (0, o.Z)(r, i.Yj.epsBank, a.eps),
            r),
          s = function (e) {
            return -1 === i.sL.indexOf(e);
          },
          u = function (e, t) {
            return null != t ? t : s(e) ? null : c[e] || null;
          };
      },
      6589: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return r.J;
          },
        });
        var r = n(7802);
      },
      7802: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return i;
          },
        });
        var r = n(1803),
          o = n.n(r),
          i = (n(8029), window.Promise ? Promise : o());
      },
      3110: function (e) {
        e.exports = function (e) {
          var t = e
            .split("")
            .map(function (e) {
              return e.charCodeAt(0);
            })
            .reduce(function (e, t) {
              return ((e << 5) - e + t) & ((e << 5) - e + t);
            }, 0)
            .toString();
          return "_".concat(t.replace(/[-.]/g, "_"));
        };
      },
      3423: function (e, t, n) {
        "use strict";
        n.d(t, {
          X: function () {
            return r;
          },
        });
        var r = "72c5b37d6";
      },
      9792: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return s;
          },
        });
        var r = n(7853),
          o = n(4531),
          i = Date.now
            ? function () {
                return Date.now();
              }
            : function () {
                return new Date().getTime();
              },
          a = i(),
          c =
            window.performance && window.performance.now
              ? function () {
                  return window.performance.now();
                }
              : function () {
                  return i() - a;
                },
          s = (function () {
            function e(t) {
              (0, r.Z)(this, e), (this.timestampValue = null != t ? t : c());
            }
            return (
              (0, o.Z)(
                e,
                [
                  {
                    key: "getAsPosixTime",
                    value: function () {
                      return i() - this.getElapsedTime();
                    },
                  },
                  {
                    key: "getElapsedTime",
                    value: function (e) {
                      return Math.round(
                        (e ? e.timestampValue : c()) - this.timestampValue
                      );
                    },
                  },
                  {
                    key: "valueOf",
                    value: function () {
                      return Math.round(this.timestampValue);
                    },
                  },
                ],
                [
                  {
                    key: "fromPosixTime",
                    value: function (t) {
                      return new e(t - i() + c());
                    },
                  },
                ]
              ),
              e
            );
          })();
      },
      1216: function (e, t, n) {
        "use strict";
        var r = (0, n(6617).Ds)("https://payments.stripe.com");
        r && r.origin;
      },
      7600: function (e, t, n) {
        "use strict";
        n.d(t, {
          v: function () {
            return o;
          },
        });
        var r = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          },
          o = function (e) {
            var t = {};
            return (
              e
                .replace(/\+/g, " ")
                .split("&")
                .forEach(function (e) {
                  var n,
                    o = e.split("="),
                    i = decodeURIComponent(o[0]),
                    a = t,
                    c = 0,
                    s = i.split("]["),
                    u = s.length - 1;
                  if (
                    (/\[/.test(s[0]) && /\]$/.test(s[u])
                      ? ((s[u] = s[u].replace(/\]$/, "")),
                        (u = (s = s.shift().split("[").concat(s)).length - 1))
                      : (u = 0),
                    !(s.indexOf("__proto__") >= 0))
                  )
                    if (2 === o.length)
                      if (((n = decodeURIComponent(o[1])), u))
                        for (; c <= u; c++) {
                          if (
                            ((i = "" === s[c] ? a.length : s[c]),
                            !r(a, i) && a[i])
                          )
                            return;
                          (a[i] =
                            c < u
                              ? a[i] || (s[c + 1] && isNaN(s[c + 1]) ? {} : [])
                              : n),
                            (a = a[i]);
                        }
                      else if (Array.isArray(t[i])) t[i].push(n);
                      else if (void 0 !== t[i]) {
                        if (!r(t, i)) return;
                        t[i] = [t[i], n];
                      } else t[i] = n;
                    else i && (t[i] = "");
                }),
              t
            );
          };
      },
      6617: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ds: function () {
            return i.Ds;
          },
          P$: function () {
            return i.P$;
          },
          Qg: function () {
            return a.Qg;
          },
          qC: function () {
            return o.q;
          },
          sD: function () {
            return i.sD;
          },
          uW: function () {
            return a.uW;
          },
          vB: function () {
            return r.v;
          },
          v_: function () {
            return i.v_;
          },
          vo: function () {
            return a.vo;
          },
        });
        var r = n(7600),
          o = n(4469),
          i = n(3745),
          a = n(7306);
      },
      7306: function (e, t, n) {
        "use strict";
        n.d(t, {
          Qg: function () {
            return a;
          },
          uW: function () {
            return o;
          },
          vo: function () {
            return i;
          },
        });
        var r = n(3745),
          o =
            (n(1216),
            function (e, t) {
              var n = (0, r.Ds)(e),
                o = (0, r.Ds)(t);
              return !(!n || !o) && n.origin === o.origin;
            }),
          i = function (e) {
            return o(e, "https://js.stripe.com/v3/");
          },
          a = function (e) {
            return (
              i(e) ||
              (function (e) {
                var t = (0, r.Ds)(e),
                  n = t ? t.host : "";
                return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/);
              })(e) ||
              (function (e) {
                var t = (0, r.Ds)(e),
                  n = t ? t.host : "";
                return "link.co" === n || !!n.match(/\.link\.(co)$/);
              })(e)
            );
          };
      },
      4469: function (e, t, n) {
        "use strict";
        n.d(t, {
          q: function () {
            return o;
          },
        });
        var r = n(3696),
          o = function e(t, n) {
            var o = [];
            return (
              Object.keys(t).forEach(function (i) {
                var a = t[i],
                  c = n ? "".concat(n, "[").concat(i, "]") : i;
                if (a && "object" == typeof a) {
                  var s = e(a, c);
                  "" !== s && (o = [].concat((0, r.Z)(o), [s]));
                } else null != a && (o = [].concat((0, r.Z)(o), ["".concat(c, "=").concat(encodeURIComponent(String(a)))]));
              }),
              o.join("&").replace(/%20/g, "+")
            );
          };
      },
      3745: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ds: function () {
            return i;
          },
          P$: function () {
            return a;
          },
          sD: function () {
            return o;
          },
          v_: function () {
            return c;
          },
        });
        var r = /^(http(s)?):\/\//,
          o = function (e) {
            return r.test(e);
          },
          i = function (e) {
            if (!o(e)) return null;
            var t;
            try {
              t = new URL(e);
            } catch (n) {
              (t = document.createElement("a")).href = e;
            }
            var n = t.protocol,
              r = t.host,
              i = t.pathname,
              a = /:80$/,
              c = /:443$/;
            return (
              "http:" === n && a.test(r)
                ? (r = r.replace(a, ""))
                : "https:" === n && c.test(r) && (r = r.replace(c, "")),
              {
                host: r,
                protocol: n,
                origin: "".concat(n, "//").concat(r),
                path: i,
              }
            );
          },
          a = function (e) {
            var t = i(e);
            return t ? t.origin : null;
          },
          c = function (e, t) {
            if ("/" === t[0]) {
              var n = i(e);
              return n ? "".concat(n.origin).concat(t) : t;
            }
            var r = e.replace(/\/[^/]*$/, "/");
            return "".concat(r).concat(t);
          };
      },
      2580: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return r;
          },
        });
        var r = function () {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "absurd";
          throw new Error(e);
        };
      },
      9605: function (e, t, n) {
        "use strict";
        n.d(t, {
          IN: function () {
            return i;
          },
          MO: function () {
            return p;
          },
          oQ: function () {
            return l;
          },
          rX: function () {
            return a;
          },
        });
        var r = n(7974),
          o = {
            _componentName: r.Z_,
            _implementation: (0, r.mC)({ _frame: (0, r.mC)({ id: r.Z_ }) }),
          },
          i = (0, r.mC)(o),
          a = function (e) {
            var t = (0, r.ld)(i, e, "");
            return "error" === t.type ? null : t.value;
          },
          c = {
            clientSecret: (0, r.jt)(
              (0, r.mC)({ id: r.Z_, clientSecret: r.Z_, type: r.Z_ })
            ),
          },
          s = (0, r.mC)(c),
          u = { _elements: (0, r.CT)(i), _id: r.Z_, _commonOptions: s },
          l = (0, r.mC)(u),
          p = function (e) {
            var t = (0, r.ld)(l, e, "");
            return "error" === t.type ? null : t.value;
          };
      },
      1873: function (e, t, n) {
        "use strict";
        n.d(t, {
          $3: function () {
            return a.$3;
          },
          AG: function () {
            return a.AG;
          },
          Ao: function () {
            return a.Ao;
          },
          Bi: function () {
            return a.Bi;
          },
          CT: function () {
            return a.CT;
          },
          Gu: function () {
            return a.Gu;
          },
          HM: function () {
            return a.HM;
          },
          IN: function () {
            return o.IN;
          },
          Kr: function () {
            return a.Kr;
          },
          M2: function () {
            return a.M2;
          },
          M4: function () {
            return a.M4;
          },
          MO: function () {
            return o.MO;
          },
          MZ: function () {
            return a.MZ;
          },
          NM: function () {
            return a.NM;
          },
          NQ: function () {
            return a.NQ;
          },
          O: function () {
            return a.O;
          },
          RH: function () {
            return a.RH;
          },
          Rx: function () {
            return a.Rx;
          },
          Ry: function () {
            return a.Ry;
          },
          Rz: function () {
            return r.R;
          },
          Wc: function () {
            return a.Wc;
          },
          Xg: function () {
            return a.Xg;
          },
          Z_: function () {
            return a.Z_;
          },
          cV: function () {
            return a.cV;
          },
          ci: function () {
            return a.ci;
          },
          hN: function () {
            return a.hN;
          },
          ig: function () {
            return a.ig;
          },
          jt: function () {
            return a.jt;
          },
          kG: function () {
            return i.k;
          },
          kw: function () {
            return a.kw;
          },
          ld: function () {
            return a.ld;
          },
          mC: function () {
            return a.mC;
          },
          n2: function () {
            return a.n2;
          },
          oQ: function () {
            return o.oQ;
          },
          or: function () {
            return a.or;
          },
          p3: function () {
            return a.p3;
          },
          rS: function () {
            return a.rS;
          },
          rX: function () {
            return o.rX;
          },
          ui: function () {
            return a.ui;
          },
          uw: function () {
            return a.uw;
          },
          x4: function () {
            return a.x4;
          },
          xe: function () {
            return a.xe;
          },
          yv: function () {
            return a.yv;
          },
          z$: function () {
            return a.z$;
          },
          zS: function () {
            return a.zS;
          },
        });
        var r = n(2580),
          o = n(9605),
          i = n(9096),
          a = n(7974);
      },
      9096: function (e, t, n) {
        "use strict";
        n.d(t, {
          k: function () {
            return r;
          },
        });
        var r = function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            r[o - 2] = arguments[o];
          if (!e) {
            var i;
            if (void 0 === t)
              i = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var a = 0;
              (i = new Error(
                t.replace(/%s/g, function () {
                  return r[a++];
                })
              )).name = "Invariant Violation";
            }
            throw i;
          }
        };
      },
      7974: function (e, t, n) {
        "use strict";
        n.d(t, {
          $3: function () {
            return _;
          },
          AG: function () {
            return g;
          },
          Ao: function () {
            return d;
          },
          Bi: function () {
            return F;
          },
          CT: function () {
            return H;
          },
          Gu: function () {
            return $;
          },
          HM: function () {
            return T;
          },
          Kr: function () {
            return G;
          },
          M2: function () {
            return B;
          },
          M4: function () {
            return L;
          },
          MZ: function () {
            return U;
          },
          NM: function () {
            return J;
          },
          NQ: function () {
            return y;
          },
          O: function () {
            return x;
          },
          RH: function () {
            return h;
          },
          Rx: function () {
            return O;
          },
          Ry: function () {
            return Y;
          },
          Wc: function () {
            return M;
          },
          Xg: function () {
            return R;
          },
          Z_: function () {
            return N;
          },
          cV: function () {
            return I;
          },
          ci: function () {
            return V;
          },
          hN: function () {
            return C;
          },
          ig: function () {
            return Z;
          },
          jt: function () {
            return v;
          },
          kw: function () {
            return P;
          },
          ld: function () {
            return Q;
          },
          mC: function () {
            return X;
          },
          n2: function () {
            return w;
          },
          or: function () {
            return b;
          },
          p3: function () {
            return D;
          },
          rS: function () {
            return j;
          },
          ui: function () {
            return S;
          },
          uw: function () {
            return z;
          },
          x4: function () {
            return m;
          },
          xe: function () {
            return E;
          },
          yv: function () {
            return K;
          },
          z$: function () {
            return A;
          },
          zS: function () {
            return f;
          },
        });
        var r = n(6222),
          o = n(3696),
          i = n(8489),
          a = n(8812),
          c = n(2024),
          s = n(6241),
          u = n(2141),
          l = n(9620),
          p = (n(6617), n(2580)),
          d = function (e, t, n) {
            var r = n.path.reduce(function (e, t, n) {
              return 0 === n
                ? t
                : 0 === t.indexOf(".")
                ? "".concat(e, '["').concat(t, '"]')
                : "".concat(e, ".").concat(t);
            }, "");
            return "undefined" === t
              ? "Missing value for "
                  .concat(n.label, ": ")
                  .concat(r || "value", " should be ")
                  .concat(e, ".")
              : "Invalid value for "
                  .concat(n.label, ": ")
                  .concat(r || "value", " should be ")
                  .concat(e, ". You specified: ")
                  .concat(t, ".");
          },
          m = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return { type: "valid", value: e, warnings: t };
          },
          f = function (e) {
            return { error: e, errorType: "full", type: "error" };
          },
          h = function (e, t, n) {
            var r = new a.No(d(e, t, n));
            return f(r);
          },
          _ = function (e, t, n) {
            return {
              expected: e,
              actual: String(t),
              options: n,
              errorType: "mismatch",
              type: "error",
            };
          },
          y = function (e, t) {
            return (0, i.Z)(
              (0, i.Z)({}, e),
              {},
              { path: [].concat((0, o.Z)(e.path), [t]) }
            );
          },
          v = function (e) {
            return function (t, n) {
              return void 0 === t ? m(t) : e(t, n);
            };
          },
          g = function (e) {
            return function (t, n) {
              return null === t ? m(t) : e(t, n);
            };
          },
          b = function (e, t) {
            return function (n, r) {
              var o = function (e) {
                  var t = e.options.path.join(".") || "value";
                  return {
                    error: "".concat(t, " should be ").concat(e.expected),
                    actual: "".concat(t, " as ").concat(e.actual),
                  };
                },
                i = function (e, t, n) {
                  return f(
                    new a.No(
                      "Invalid value for "
                        .concat(e, ": ")
                        .concat(t, ". You specified ")
                        .concat(n, ".")
                    )
                  );
                },
                c = e(n, r),
                s = t(n, r);
              if ("error" === c.type && "error" === s.type) {
                if ("mismatch" === c.errorType && "mismatch" === s.errorType) {
                  var u = o(c),
                    l = u.error,
                    p = u.actual,
                    d = o(s),
                    m = d.error,
                    h = d.actual;
                  return i(
                    r.label,
                    l === m ? l : "".concat(l, " or ").concat(m),
                    p === h ? p : "".concat(p, " and ").concat(h)
                  );
                }
                if ("mismatch" === c.errorType) {
                  var _ = o(c),
                    y = _.error,
                    v = _.actual;
                  return i(r.label, y, v);
                }
                if ("mismatch" === s.errorType) {
                  var g = o(s),
                    b = g.error,
                    w = g.actual;
                  return i(r.label, b, w);
                }
                return f(c.error);
              }
              return "valid" === c.type ? c : s;
            };
          },
          w = function (e, t) {
            return function (n, r) {
              return n instanceof e
                ? m(n)
                : _("a ".concat(t, " instance"), n, r);
            };
          },
          k = function (e, t) {
            return function (n, r) {
              var o = (0, c.sE)(e, function (e) {
                return e === n;
              });
              if (void 0 === o) {
                var i = t
                  ? "a recognized string."
                  : "one of the following strings: ".concat(e.join(", "));
                return _(i, n, r);
              }
              return m(o);
            };
          },
          E = function (e) {
            return function (t, n) {
              return "string" == typeof t && 0 === t.indexOf(e)
                ? m(t)
                : _("a string starting with ".concat(e), t, n);
            };
          },
          S = function (e, t) {
            return function (n, r) {
              return "string" == typeof n && n.length >= e && n.length <= t
                ? m(n)
                : _(
                    e === t
                      ? "a string of ".concat(e, " characters")
                      : "a string with "
                          .concat(e, " to ")
                          .concat(t, " characters"),
                    n,
                    r
                  );
            };
          },
          P = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return k(t, !1);
          },
          A = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return k(t, !0);
          },
          C = P.apply(void 0, (0, o.Z)(u.J$)),
          I = P.apply(void 0, (0, o.Z)(s.QT)),
          N =
            (P.apply(void 0, (0, o.Z)(Object.keys(l.Kl))),
            function (e, t) {
              return "string" == typeof e ? m(e) : _("a string", e, t);
            }),
          T = function (e, t) {
            return "true" === e
              ? m(!0)
              : "false" === e
              ? m(!1)
              : _("a boolean", "" === e ? '""' : e, t);
          },
          M = function (e, t) {
            return function (n, r) {
              return void 0 === n ? m(t()) : e(n, r);
            };
          },
          R = function (e, t) {
            return "boolean" == typeof e ? m(e) : _("a boolean", e, t);
          },
          O = function (e, t) {
            return "number" == typeof e ? m(e) : _("a number", e, t);
          },
          j = function (e, t) {
            return function (n, r) {
              var o = N(n, r);
              if ("error" === o.type) return o;
              var i = Number(o.value);
              return "string" == typeof n && i >= e && i <= t
                ? m(i)
                : _("a number from ".concat(e, " to ").concat(t), n, r);
            };
          },
          Z = function (e) {
            return function (t, n) {
              var r = N(t, n);
              if ("error" === r.type) return r;
              var o = Number(r.value);
              return "string" == typeof t && o > e
                ? m(o)
                : _("a number greater than ".concat(e), t, n);
            };
          },
          x = function (e, t) {
            return function (n, r) {
              return "number" == typeof n && n >= e && n <= t
                ? m(n)
                : _("a number from ".concat(e, " to ").concat(t), n, r);
            };
          },
          L = function (e) {
            return function (t, n) {
              return "number" == typeof t && t > e
                ? m(t)
                : _("a number greater than ".concat(e), t, n);
            };
          },
          B = function (e) {
            return function (t, n) {
              return "number" == typeof t && t >= e
                ? m(t)
                : _("a number greater than or equal to ".concat(e), t, n);
            };
          },
          D = function (e, t) {
            return function (n, r) {
              return n === e ? m(e) : _(t || String(e), n, r);
            };
          },
          q = function (e) {
            return function (t, n) {
              return "number" == typeof t &&
                t === parseInt(t, 10) &&
                (!e || t >= 0)
                ? m(t)
                : _(
                    e
                      ? "a positive amount in the currency's subunit"
                      : "an amount in the currency's subunit",
                    t,
                    n
                  );
            };
          },
          F = function (e, t) {
            return q(!1)(e, t);
          },
          U = function (e, t) {
            return q(!0)(e, t);
          },
          G = function (e, t) {
            if (e && "object" == typeof e) {
              var n = e;
              if (
                "function" == typeof n.getTime &&
                n.getTime() >= Date.now() - 1e3
              )
                return m(n);
            }
            return _("a future Date", e, t);
          },
          Y = function (e, t) {
            return e && "object" == typeof e ? m(e) : _("an object", e, t);
          },
          H = function (e) {
            return function (t, n) {
              return Array.isArray(t)
                ? t
                    .map(function (t, r) {
                      return e(t, y(n, String(r)));
                    })
                    .reduce(function (e, t) {
                      return "error" === e.type
                        ? e
                        : "error" === t.type
                        ? t
                        : m(
                            [].concat((0, o.Z)(e.value), [t.value]),
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(t.warnings)
                            )
                          );
                    }, m([]))
                : _("array", t, n);
            };
          },
          z = function (e) {
            return function (t) {
              return function (n, r) {
                if (Array.isArray(n)) {
                  var o = t(n, r);
                  if ("valid" === o.type)
                    for (var i = {}, c = 0; c < o.value.length; c += 1) {
                      var s = o.value[c];
                      if (
                        "object" == typeof s &&
                        s &&
                        "string" == typeof s[e]
                      ) {
                        var u = s[e],
                          l = "_".concat(u);
                        if (i[l])
                          return f(
                            new a.No(
                              "Duplicate value for "
                                .concat(e, ": ")
                                .concat(u, ". The property '")
                                .concat(e, "' of '")
                                .concat(r.path.join("."), "' has to be unique.")
                            )
                          );
                        i[l] = !0;
                      }
                    }
                  return o;
                }
                return _("array", n, r);
              };
            };
          },
          K = function (e) {
            return function (t, n) {
              return void 0 === t
                ? m(void 0)
                : _("used in ".concat(e, " instead"), t, n);
            };
          },
          J = function (e) {
            return function (t) {
              return void 0 === t ? m(void 0) : f(new a.No(e));
            };
          },
          W = function (e) {
            return function (t) {
              return function (n, s) {
                if (n && "object" == typeof n && !Array.isArray(n)) {
                  var u = n,
                    l = (0, c.sE)(Object.keys(u), function (e) {
                      return !t[e];
                    });
                  if (l && e)
                    return f(
                      new a.No(
                        "Invalid "
                          .concat(s.label, " parameter: ")
                          .concat(
                            [].concat((0, o.Z)(s.path), [l]).join("."),
                            " is not an accepted parameter."
                          )
                      )
                    );
                  var p = Object.keys(u),
                    d = m({});
                  return (
                    l &&
                      (d = p.reduce(function (e, n) {
                        return t[n]
                          ? e
                          : m(
                              e.value,
                              [].concat((0, o.Z)(e.warnings), [
                                "Unrecognized "
                                  .concat(s.label, " parameter: ")
                                  .concat(
                                    [].concat((0, o.Z)(s.path), [n]).join("."),
                                    " is not a recognized parameter. This may cause issues with your integration in the future."
                                  ),
                              ])
                            );
                      }, d)),
                    Object.keys(t).reduce(function (e, n) {
                      if ("error" === e.type) return e;
                      var a = (0, t[n])(u[n], y(s, n));
                      return "valid" === a.type && void 0 !== a.value
                        ? m(
                            (0, i.Z)(
                              (0, i.Z)({}, e.value),
                              {},
                              (0, r.Z)({}, n, a.value)
                            ),
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(a.warnings)
                            )
                          )
                        : "valid" === a.type
                        ? m(
                            e.value,
                            [].concat(
                              (0, o.Z)(e.warnings),
                              (0, o.Z)(a.warnings)
                            )
                          )
                        : a;
                    }, d)
                  );
                }
                return _("an object", n, s);
              };
            };
          },
          V = W(!0),
          X = W(!1),
          Q = function (e, t, n, r) {
            var o = r || {},
              i = e(t, {
                authenticatedOrigin: o.authenticatedOrigin || "",
                element: o.element || "",
                label: n,
                path: o.path || [],
              });
            return "valid" === i.type || "full" === i.errorType
              ? i
              : {
                  type: "error",
                  errorType: "full",
                  error: new a.No(d(i.expected, i.actual, i.options)),
                };
          },
          $ = function (e, t, n, r) {
            var o = Q(e, t, n, r);
            switch (o.type) {
              case "valid":
                return { value: o.value, warnings: o.warnings };
              case "error":
                throw o.error;
              default:
                return (0, p.R)(o);
            }
          };
      },
      7030: function (e, t, n) {
        "use strict";
        n.d(t, {
          Kb: function () {
            return s;
          },
          Nb: function () {
            return p;
          },
          P0: function () {
            return d;
          },
          et: function () {
            return l;
          },
          tk: function () {
            return u;
          },
        });
        var r,
          o = n(6222),
          i = n(9083),
          a = n(276),
          c = n(755),
          s = "".concat(i.A2, "-input"),
          u = ("".concat(i.A2, "-inputAfter"), "".concat(i.A2, "-safariInput")),
          l = "StripeElement",
          p = ["ready", "focus", "blur", "escape", "change", "loaderstart"],
          d =
            ((r = {}),
            (0, o.Z)(
              r,
              a.Yj.linkAuthentication,
              c.NC.LINK_AUTHENTICATION_ELEMENT
            ),
            (0, o.Z)(r, a.Yj.payment, c.NC.PAYMENT_ELEMENT),
            (0, o.Z)(r, a.Yj.shippingAddress, c.NC.ADDRESS_ELEMENT),
            (0, o.Z)(r, a.Yj.address, c.NC.ADDRESS_ELEMENT),
            (0, o.Z)(
              r,
              a.Yj.autocompleteSuggestions,
              c.NC.AUTOCOMPLETE_SUGGESTIONS_ELEMENT
            ),
            (0, o.Z)(
              r,
              a.Yj.achBankSearchResults,
              c.NC.ACH_BANK_SEARCH_RESULTS_ELEMENT
            ),
            r);
      },
      9144: function (e, t, n) {
        "use strict";
        n.d(t, {
          KC: function () {
            return r;
          },
          ZS: function () {
            return o;
          },
        });
        var r = {
            margin: "0",
            padding: "0",
            border: "none",
            display: "block",
            background: "transparent",
            position: "relative",
            opacity: "1",
            clear: "both",
          },
          o = {
            border: "none",
            display: "block",
            position: "absolute",
            height: "1px",
            top: "-1px",
            left: "0",
            padding: "0",
            margin: "0",
            width: "100%",
            opacity: "0",
            background: "transparent",
            "pointer-events": "none",
            "font-size": "16px",
          };
      },
      5326: function (e, t, n) {
        "use strict";
        n.d(t, {
          $o: function () {
            return l;
          },
          Eo: function () {
            return d;
          },
          NO: function () {
            return u;
          },
          ct: function () {
            return m;
          },
          yn: function () {
            return p;
          },
        });
        var r = n(1873),
          o = n(276),
          i = n(6589),
          a = n(6977),
          c = n(3849),
          s = function (e) {
            switch (e.type) {
              case "error":
                return { error: e.error };
              case "object":
                switch (e.object.object) {
                  case "payment_intent":
                    return { paymentIntent: e.object };
                  case "setup_intent":
                    return { setupIntent: e.object };
                  default:
                    return (0, r.Rz)(e.object);
                }
              default:
                return (0, r.Rz)(e);
            }
          },
          u = function (e, t, n, r, i) {
            return t === o.kE.PAYMENT_INTENT
              ? n.action
                  .retrievePaymentIntent({
                    hosted: false,
                    intentSecret: e,
                    locale: r,
                    asErrorIfNotSucceeded: true,
                    expandParam: i || [],
                  })
                  .then(s)
              : n.action
                  .retrieveSetupIntent({
                    hosted: false,
                    intentSecret: e,
                    locale: r,
                    asErrorIfNotSucceeded: true,
                    expandParam: i || [],
                  })
                  .then(s);
          },
          l = function (e, t, n, r, i, a, c) {
            return t === o.kE.PAYMENT_INTENT
              ? n.action
                  .cancelPaymentIntentSource({
                    intentSecret: e,
                    locale: i,
                    sourceId: r,
                    sourceIntentId: a,
                    publishableKey: c,
                  })
                  .then(s)
              : n.action
                  .cancelSetupIntentSource({
                    intentSecret: e,
                    locale: i,
                    sourceId: r,
                    sourceIntentId: a,
                    publishableKey: c,
                  })
                  .then(s);
          },
          p = function (e) {
            return (
              (e.error
                ? e.error.payment_intent || e.error.setup_intent
                : e.paymentIntent || e.setupIntent) || null
            );
          },
          d = function (e, t, n, r, o, i) {
            var a,
              c = !0,
              s = 3,
              l = 0;
            return (
              (function d() {
                (l += 1),
                  u(e, t, n, r, o).then(function (e) {
                    if (c) {
                      var t = p(e);
                      if (null !== t)
                        switch (((s = 3), t.status)) {
                          case "requires_action":
                          case "requires_source_action":
                            return void (a = setTimeout(d, 5e3));
                          case "processing":
                            return void (a = setTimeout(d, 1e3));
                          default:
                            i(e, l);
                        }
                      else if (s > 0) {
                        var n = 500 * Math.pow(2, 3 - s);
                        (a = setTimeout(d, n)), (s -= 1);
                      } else i(e, l);
                    }
                  });
              })(),
              function () {
                clearTimeout(a), (c = !1);
              }
            );
          },
          m = function (e) {
            var t = e.initialDelay,
              n = e.pollTimeGap,
              r = e.checkIntent,
              o = e.locale,
              u = e.controller,
              l = e.intent,
              p = e.expandParam,
              d = void 0 === p ? [] : p,
              m = e.shouldPoll,
              f =
                void 0 === m
                  ? function () {
                      return !0;
                    }
                  : m,
              h =
                "payment_intent" === l.object
                  ? { paymentIntent: l }
                  : { setupIntent: l };
            return new i.J(function (e) {
              setTimeout(function () {
                var t = setInterval(function () {
                  if (!f()) return e(h), void clearInterval(t);
                  var n;
                  ((n = {
                    hosted: !1,
                    intentSecret: (0, a.O3)(l),
                    locale: o,
                    expandParam: d,
                  }),
                  "payment_intent" === l.object
                    ? u.action.retrievePaymentIntent(n)
                    : u.action.retrieveSetupIntent(n)).then(function (n) {
                    (h = s(n)),
                      n.error
                        ? (u.action
                            .localizeError(c.I4)
                            .then(function (e) {
                              return { error: e };
                            })
                            .then(e),
                          clearInterval(t))
                        : r(n.object) && (e(h), clearInterval(t));
                  });
                }, n);
              }, t - n);
            });
          };
      },
      8147: function (e, t, n) {
        "use strict";
        n.d(t, {
          z: function () {
            return s;
          },
        });
        var r = n(6589),
          o = n(3849),
          i = n(755),
          a = n(9792),
          c = function (e) {
            return e
              ? "payment_intent" === e.object
                ? e.last_payment_error
                : e.last_setup_error
              : null;
          },
          s = function (e, t, n, s) {
            return new r.J(function (r) {
              var u = new a.E(),
                l = n.createLightboxFrame({
                  type: i.NC.HCAPTCHA_APP,
                  options: {
                    intentId: t.id,
                    clientSecret: t.client_secret,
                    locale: s,
                    sitekey: e.site_key,
                    verifyUrl: e.verification_url,
                    startTime: u.getAsPosixTime(),
                  },
                }),
                p = function (e) {
                  var t = o.I4;
                  return (
                    null != e && (t = e),
                    n.action.localizeError(t).then(function (e) {
                      return { error: e };
                    })
                  );
                };
              n.report("intent_confirmation_challenge.start"),
                l._on("load", function () {
                  n.report(
                    "intent_confirmation_challenge.stripe_js_frame_loaded",
                    { duration_since_start_ms: u.getElapsedTime() }
                  ),
                    l.fadeInBackdrop();
                }),
                l.show(),
                l._on("request-cancel", function (e) {
                  l.fadeOutBackdrop(),
                    l.destroy(!0),
                    n.report("intent_confirmation_challenge.cancel"),
                    r(p(c(null == e ? void 0 : e.intent)));
                }),
                l._on("request-close", function (e) {
                  l.fadeOutBackdrop(), l.destroy(!0);
                  var t = null == e ? void 0 : e.intent;
                  if (t) {
                    var i = c(t);
                    i
                      ? /Captcha/.test(i.message || "")
                        ? (n.report(
                            "intent_confirmation_challenge.verification_failed"
                          ),
                          r(p(i)))
                        : (n.report("intent_confirmation_challenge.success"),
                          r(p(i)))
                      : (n.report("intent_confirmation_challenge.success"),
                        (function (e, t) {
                          "payment_intent" === t.object
                            ? e({ paymentIntent: t })
                            : e({ setupIntent: t });
                        })(r, t));
                  } else n.report("intent_confirmation_challenge.verification_error"), r(p(o.I4));
                });
            });
          };
      },
      8478: function (e, t, n) {
        "use strict";
        n.d(t, {
          p: function () {
            return s;
          },
        });
        var r = n(6977),
          o = n(6790),
          i = n(9294),
          a = n(6090),
          c = n(1873),
          s = function (e) {
            var t = e.controller,
              n = e.intent,
              s = e.locale,
              u = (0, r.G2)(n);
            if (!u || "cashapp_handle_redirect_or_display_qr_code" !== u.type)
              throw new Error(
                "Expected next_action.cashapp_handle_redirect_or_display_qr_code"
              );
            if (!i.q$)
              return (0, a.Ug)({
                controller: t,
                intent: n,
                locale: s,
                url: u.cashapp_handle_redirect_or_display_qr_code
                  .hosted_instructions_url,
                lightboxOptions: {
                  frameTitle: "hosted_qr_code_instructions.cashapp.frame_title",
                },
              });
            switch (n.object) {
              case "payment_intent":
                return (0, o.k)(
                  n,
                  u.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url,
                  t
                );
              case "setup_intent":
                return (0, o.e)(
                  n,
                  u.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url,
                  t
                );
              default:
                return (0, c.Rz)(n);
            }
          };
      },
      6090: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ug: function () {
            return p;
          },
        });
        var r = n(8489),
          o = n(508),
          i = n(6589),
          a = n(6042),
          c = n(755),
          s = n(5326),
          u = n(9294),
          l = function (e) {
            return (
              "requires_action" !== e.status &&
              "requires_source_action" !== e.status
            );
          },
          p = function (e) {
            var t = e.controller,
              n = e.initialDelay,
              p = void 0 === n ? 5e3 : n,
              d = e.intent,
              m = e.lightboxOptions,
              f = e.locale,
              h = e.pollInterval,
              _ = void 0 === h ? 2e3 : h,
              y = e.url,
              v = m.size,
              g = (0, o.Z)(m, ["size"]),
              b = (0, a.q)(
                t,
                (0, r.Z)(
                  {
                    url: (0, c.jr)(y),
                    size: u.q$ ? "fullScreen" : v || "400x600",
                    locale: f,
                    useLightboxHostedCloseButton: !1,
                  },
                  g
                )
              ),
              w = !1;
            return new i.J(function (e) {
              return (
                b._on("load", function () {
                  b.show(), b.fadeInBackdrop();
                }),
                b._once("request-close", function () {
                  (0, a.G)(b).then(function () {
                    (w = !0),
                      "payment_intent" === d.object && e({ paymentIntent: d }),
                      "setup_intent" === d.object && e({ setupIntent: d });
                  });
                }),
                b._on("complete", function (t) {
                  (0, a.G)(b).then(function () {
                    (w = !0), e(t);
                  });
                }),
                (0, s.ct)({
                  controller: t,
                  initialDelay: p,
                  pollTimeGap: _,
                  intent: d,
                  checkIntent: l,
                  shouldPoll: function () {
                    return !w;
                  },
                  locale: f,
                }).then(function (t) {
                  ("error" in t && t.error) ||
                    w ||
                    b.destroy(!0).then(function () {
                      e(t);
                    });
                })
              );
            });
          };
      },
      6790: function (e, t, n) {
        "use strict";
        n.d(t, {
          e: function () {
            return a;
          },
          k: function () {
            return i;
          },
        });
        var r = n(1849),
          o = n(6977),
          i = function (e, t, n) {
            return (0, r.U)(t).then(function (t) {
              return (0, r.d)(n, "next_action redirect", t), (0, o.PA)(t, e);
            });
          },
          a = function (e, t, n) {
            return (0, r.U)(t).then(function (t) {
              return (0, r.d)(n, "next_action redirect", t), (0, o.e3)(t, e);
            });
          };
      },
      122: function (e, t, n) {
        "use strict";
        n.d(t, {
          s: function () {
            return l;
          },
        });
        var r = n(7904),
          o = n(8489),
          i = n(1002),
          a = n(755),
          c = n(6589),
          s = n(5326),
          u = n(9792),
          l = function (e, t, n, l, p, d) {
            var m = (0, i.xz)(),
              f = new u.E(),
              h = (function (e, t, n, r, i) {
                return e.createLightboxFrame({
                  type: a.NC.AUTHORIZE_WITH_URL,
                  options: (0, o.Z)(
                    { url: t, locale: i, intentId: n },
                    r ? { source: r } : {}
                  ),
                });
              })(l, e.url, t.id, e.source, p);
            return (
              h.show(),
              l.report("authorize_with_url.loading", {
                viewport: m,
                intentId: t.id,
              }),
              h._on("load", function () {
                l.report("authorize_with_url.loaded", {
                  loadDuration: f.getElapsedTime(),
                  intentId: t.id,
                }),
                  h.fadeInBackdrop();
              }),
              h._on("challenge_complete", function () {
                h.fadeOutBackdrop();
              }),
              new c.J(function (o) {
                var i = e.source;
                i &&
                  h._once("cancel", function () {
                    c.J.all([(0, s.$o)(t, n, l, i, p), h.destroy()]).then(
                      function (e) {
                        var t = (0, r.Z)(e, 1)[0];
                        return o(t);
                      }
                    );
                  }),
                  h._once("authorize_with_url_done", function () {
                    var e = h.destroy();
                    (0, s.Eo)(t, n, l, p, d, function (n, r) {
                      e.then(function () {
                        l.report("authorize_with_url.done", {
                          shownDuration: f.getElapsedTime(),
                          success: !("error" in n),
                          intentId: t.id,
                          iterations: r,
                        }),
                          o(n);
                      });
                    });
                  });
              })
            );
          };
      },
      7193: function (e, t, n) {
        "use strict";
        n.d(t, {
          A: function () {
            return F;
          },
        });
        var r = n(7904),
          o = n(6589),
          i = n(1873),
          a = n(9792),
          c = n(8489),
          s = n(508),
          u = n(755),
          l = function (e, t) {
            var n = t.intentSecret,
              r = t.controller,
              i = t.locale,
              a = t.hosted,
              c = r.createLightboxFrame({
                type: u.NC.STRIPE_3DS2_CHALLENGE,
                options: { intentId: n.id, hosted: a, locale: i },
              });
            r.report("3ds2.challenge_frame.loading", {
              intentId: n.id,
              hosted: a,
            }),
              c._on("challenge_complete", function () {
                c.fadeOutBackdrop();
              });
            var s = (function (e) {
              return new o.J(function (t) {
                e._on("load", function () {
                  return t(e);
                });
              });
            })(c);
            return (
              s.then(function () {
                return r.report("3ds2.challenge_frame.loaded", {
                  intentId: n.id,
                  hosted: a,
                });
              }),
              a &&
                (c.show(),
                c.action.show3DS2Spinner({ cardBrand: e.cardBrand })),
              s
            );
          },
          p = function (e, t) {
            var n = t.oneClickAuthnDeviceSupport,
              r = t.oneClickAuthnOptedOut,
              i = t.challengeFrame;
            return new o.J(function (t, o) {
              i.then(function (i) {
                var a = function () {
                  return o(new Error("User canceled"));
                };
                i._once("cancel", a),
                  i.isVisible || (i.show(), i.fadeInBackdrop());
                e.type;
                var l = e.optimizations,
                  p =
                    (e.oneClickAuthn,
                    (0, s.Z)(e, ["type", "optimizations", "oneClickAuthn"]));
                i.action
                  .perform3DS2Challenge(
                    (0, c.Z)(
                      (0, c.Z)({}, p),
                      {},
                      {
                        shouldSandbox: l.sandboxChallengeFrame,
                        recordFinalCres: l.recordFinalCres,
                        oneClickAuthnDeviceSupport: n,
                        oneClickAuthnOptedOut: r,
                        oneClickWebauthnEnrollmentAppUrl: (0, u.xS)(
                          "one-click-webauthn-enrollment-675f82293eb6b8a7bc4b43a12c737f7c.html"
                        ),
                      }
                    )
                  )
                  .then(function () {
                    i._off("cancel", a), t();
                  });
              });
            });
          },
          d = n(5326),
          m = n(6222),
          f = function (e) {
            if (!e || "object" != typeof e || (!e.type && !e.code)) return e;
            var t = function (t) {
              return e[t] && "string" == typeof e[t]
                ? (0, m.Z)({}, "".concat(t, "_id"), e[t])
                : e[t] && "object" == typeof e[t] && "string" == typeof e[t].id
                ? (0, m.Z)({}, "".concat(t, "_id"), e[t].id)
                : null;
            };
            return (0, c.Z)(
              (0, c.Z)(
                (0, c.Z)(
                  (0, c.Z)(
                    { type: e.type, code: e.code, param: e.param },
                    t("payment_intent")
                  ),
                  t("setup_intent")
                ),
                t("payment_method")
              ),
              t("source")
            );
          },
          h = function (e, t, n) {
            var r = t.intentSecret,
              o = t.intentType,
              i = t.controller,
              a = t.locale;
            return (0, d.NO)(r, o, i, a, n);
          },
          _ = function (e, t) {
            var n = t.controller,
              r = t.intentSecret,
              o = t.intentType,
              i = t.locale;
            return (0, d.$o)(
              r,
              o,
              n,
              e.threeDS2Source,
              i,
              e.threeDS2Intent,
              e.publishableKey
            );
          },
          y = function (e, t) {
            var n = e.intentSecret,
              i = e.controller,
              a = e.hosted,
              s = t.intent,
              u = t.challengeFrame,
              l = t.startTimestamp;
            return o.J.all([
              s,
              u.then(function (e) {
                return e.destroy();
              }),
            ]).then(function (e) {
              var t = (0, r.Z)(e, 1)[0];
              return (
                i.report(
                  "3ds2.done",
                  (0, c.Z)(
                    {
                      intentId: n.id,
                      hosted: a,
                      totalDuration: l.getElapsedTime(),
                    },
                    t.error
                      ? { error: f(t.error), success: !1 }
                      : { success: !0 }
                  )
                ),
                t
              );
            });
          },
          v = function (e) {
            var t = e.intentSecret,
              n = e.controller,
              r = e.hosted,
              i = e.locale,
              a = n.createHiddenFrame(u.NC.STRIPE_3DS2_FINGERPRINT, {
                intentId: t.id,
                locale: i,
                hosted: r,
              });
            n.report("3ds2.fingerprint_frame.loading", {
              hosted: r,
              intentId: t.id,
            });
            var c = (function (e) {
              return new o.J(function (t) {
                e._on("load", function () {
                  return t(e);
                });
              });
            })(a);
            return (
              c.then(function () {
                n.report("3ds2.fingerprint_frame.loaded", {
                  hosted: r,
                  intentId: t.id,
                });
              }),
              c
            );
          },
          g = function (e, t) {
            var n = t.intentSecret,
              r = t.controller,
              a = t.hosted;
            return e.optimizations.skipFingerprint
              ? o.J.resolve({ fingerprintAttempted: !1, fingerprintData: null })
              : "" === e.methodUrl
              ? (r.report("3ds2.fingerprint.no_method_url", {
                  hosted: a,
                  intentId: n.id,
                }),
                o.J.resolve({
                  fingerprintAttempted: !1,
                  fingerprintData: null,
                }))
              : v(t).then(function (t) {
                  var n = {};
                  switch (e.gateway) {
                    case "emvco":
                      n = {
                        gateway: e.gateway,
                        threeDS2Source: e.threeDS2Source,
                        merchant: e.merchant,
                        transactionId: e.transactionId,
                        methodUrl: e.methodUrl,
                        shouldSandbox: e.optimizations.sandboxFingerprintFrame,
                      };
                      break;
                    case "itmx":
                      n = {
                        gateway: e.gateway,
                        threeDS2Source: e.threeDS2Source,
                        merchant: e.merchant,
                        transactionId: e.transactionId,
                        methodUrl: e.methodUrl,
                        shouldSandbox: e.optimizations.sandboxFingerprintFrame,
                        accessToken: e.accessToken,
                      };
                      break;
                    default:
                      (0, i.Rz)(e);
                  }
                  return t.action.perform3DS2Fingerprint(n).then(function (e) {
                    return t.destroy(), e;
                  });
                });
          },
          b = n(9294),
          w = function () {
            if (
              void 0 === window.PublicKeyCredential ||
              (function () {
                if (!/CrOS/i.test(window.navigator.userAgent)) return !1;
                var e =
                    window.navigator.userAgent.match(
                      /Chrome\/\d+\.\d+\.(\d+)\.(\d+)/
                    ) || [],
                  t = Number(e[1]),
                  n = Number(e[2]);
                return !(
                  (4389 === t && n >= 82) ||
                  (4430 === t && n >= 11) ||
                  t >= 4431
                );
              })() ||
              (function () {
                var e = /iPad|iPhone/i.test(window.navigator.userAgent),
                  t =
                    /^((?!chrome|android).)*safari/i.test(
                      window.navigator.userAgent
                    ) && !/SamsungBrowser/.test(window.navigator.userAgent);
                if (!e || t) return !1;
                var n =
                    window.navigator.userAgent.match(
                      /OS (\d+)_(\d+)(_\d+)? like Mac OS X/
                    ) || [],
                  r = parseInt(n[1], 10),
                  o = parseInt(n[2], 10);
                return (
                  !isNaN(r) && !isNaN(o) && ((15 === r && o >= 4) || r > 15)
                );
              })()
            )
              return o.J.resolve(!1);
            var e =
                window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
              t = new o.J(function (e) {
                return setTimeout(function () {
                  return e(!1);
                }, 500);
              });
            return o.J.race([e, t]).catch(function () {
              return !1;
            });
          },
          k = function () {
            if (void 0 === window.PaymentRequest) return o.J.resolve(!1);
            if (!/Chrome\/(9[5-9]|[1-9]\d\d)/.test(window.navigator.userAgent))
              return o.J.resolve(!1);
            try {
              var e = [
                {
                  supportedMethods: "secure-payment-confirmation",
                  data: {
                    action: "authenticate",
                    credentialIds: [new Uint8Array(1)],
                    challenge: new Uint8Array(1),
                    fallbackUrl: window.location,
                    rpId: "stripe.com",
                    payeeOrigin: "https://stripe.com",
                    instrument: {
                      displayName: "Mock ····1234",
                      icon: 'data:image/svg+xml;utf8,<svg width="28" height="18" xmlns="http://www.w3.org/2000/svg"></svg>',
                    },
                  },
                },
              ];
              return new window.PaymentRequest(e, {
                total: {
                  label: "Total",
                  amount: { currency: "USD", value: "0" },
                },
              })
                .canMakePayment()
                .catch(function () {
                  return !1;
                });
            } catch (e) {
              return o.J.resolve(!1);
            }
          },
          E = "stripe-js-one-click-authn",
          S = "W",
          P = "S",
          A = "SE/WA",
          C = function (e) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(e)))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=/g, "");
          },
          I = function (e) {
            return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
          },
          N = function (e) {
            var t = I(e);
            return Uint8Array.from(t, function (e) {
              return e.charCodeAt(0);
            });
          },
          T =
            (n(3637),
            n(3407),
            n(8037),
            function (e) {
              return "data:image/svg+xml,".concat(
                encodeURIComponent(e.replace(/\n/g, "").replace(/\s+/g, " "))
              );
            }),
          M = function (e) {
            switch (e) {
              case "visa":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill-rule="nonzero" fill="none">\n    <rect\n      stroke-opacity=".2"\n      stroke="#000"\n      stroke-width=".5"\n      fill="#FFF"\n      x=".3"\n      y=".3"\n      width="23.5"\n      height="15.5"\n      rx="2"\n    />\n    <path\n      d="M2.8 6c-.5-.4-1.1-.6-1.8-.8h2.8c.3 0 .6 0 .7.4l.6 2.9.2.8L7 5.1h1.8L6 11.3H4.3L2.8 5.9Zm7.3 5.3H8.4l1-6.2h1.8L10 11.3Zm6.2-6L16 6.6H16a3 3 0 0 0-1.3-.3c-.7 0-1 .3-1 .5 0 .3.4.5 1 .8 1 .4 1.4 1 1.4 1.7 0 1.2-1.2 2-3 2-.7 0-1.4 0-1.8-.3l.2-1.3h.2c.6.3 1 .4 1.6.4.5 0 1-.2 1-.6 0-.3-.2-.5-.8-.8-.7-.3-1.5-.8-1.5-1.7 0-1.2 1.2-2 2.8-2 .7 0 1.2.1 1.6.3ZM18.5 9H20l-.4-1.8v-.5l-.3.6-.7 1.7Zm2.1-4 1.4 6.2h-1.6l-.2-1H18l-.3 1h-1.8l2.5-5.7c.2-.4.5-.5 1-.5h1.2Z"\n      fill="#1434CB"\n    />\n  </g>\n</svg>'
                );
              case "amex":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd">\n    <rect fill="#016fd0" height="16" rx="2" width="24" />\n    <path\n      d="M13.8 13.4V7.7h10.1v1.6l-1.2 1.2 1.2 1.3v1.6H22l-1-1.1-1 1.1z"\n      fill="#fffffe"\n    />\n    <path\n      d="M14.4 12.8V8.3h3.8v1h-2.5v.7h2.5v1h-2.5v.7h2.5v1zM18.2 12.8l2-2.3-2-2.2h1.6l1.3 1.4 1.3-1.4h1.5l-2 2.2 2 2.2h-1.6l-1.2-1.4-1.3 1.5z"\n      fill="#016fd0"\n    />\n    <path\n      d="M14.2 2.6h2.5l.8 2v-2h3l.6 1.5.5-1.5H24v5.7H11.7z"\n      fill="#fffffe"\n    />\n    <g fill="#016fd0">\n      <path d="m14.7 3.3-2 4.4h1.4l.4-.9h2l.3.9h1.4l-2-4.4zm.2 2.5.6-1.4.6 1.4zM18.2 7.7V3.3h2L21 6l1-2.7h1.8v4.4h-1.2v-3l-1 3h-1.2l-1-3v3z" />\n    </g>\n  </g>\n</svg>'
                );
              case "mastercard":
                return T(
                  '<svg width="28" height="18" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">\n  <g fill="none" fill-rule="evenodd">\n    <rect fill="#252525" height="16" rx="2" width="24" />\n    <circle cx="9" cy="8" fill="#eb001b" r="5" />\n    <circle cx="15" cy="8" fill="#f79e1b" r="5" />\n    <path d="M12 4a5 5 0 0 1 0 8 5 5 0 0 1 0-8z" fill="#ff5f00" />\n  </g>\n</svg>'
                );
              case "unionpay":
              case "discover":
              case "jcb":
              case "diners":
              case "unknown":
              case "elo":
                return T(
                  '<svg width="28" height="18" xmlns="http://www.w3.org/2000/svg"></svg>'
                );
              default:
                return (0, i.Rz)(e);
            }
          },
          R = n(7412),
          O = n(6977),
          j = function (e, t, n) {
            var r = e.threeDS2Source,
              i = e.oneClickAuthn,
              a = t.controller,
              s = n.deviceSupport,
              u = n.startTimestamp,
              l = o.J.resolve({ authenticationAPIParam: null, optedOut: !1 });
            if (!i) return l;
            var p,
              d = i.credentials.filter(function (e) {
                return e.type === O.QS;
              });
            if (0 === d.length)
              return (
                a.report(
                  "one_click_authn.request_spc_authn.empty_credentials_list",
                  { client_id: E, source: r, device_support: s }
                ),
                l
              );
            try {
              var m = i.merchant.origin;
              if (!m)
                return (
                  a.report(
                    "one_click_authn.request_spc_authn.empty_merchant_origin",
                    { client_id: E, source: r, device_support: s }
                  ),
                  l
                );
              ((p = document.createElement("meta")).name = (0, R.To)(
                "__privateStripeMeta"
              )),
                (p.httpEquiv = "origin-trial"),
                (p.content =
                  "A9jhYwXRO3NPiLnZACCEXhtcpa/gzahH22dbcaOg/v0c8pngXUXu3XXoUzfa6LUumuJiS12jQS7azQx3rZdh8ggAAAB6eyJvcmlnaW4iOiJodHRwczovL2pzLnN0cmlwZS5jb206NDQzIiwiZmVhdHVyZSI6IlNlY3VyZVBheW1lbnRDb25maXJtYXRpb25PcHRPdXQiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="),
                document.head.appendChild(p);
              var f = new window.PaymentRequest(
                (function (e, t, n) {
                  var r = n.authenticationChallenge,
                    o = n.instrument,
                    i = o.cardBrand,
                    a = o.cardName,
                    c = o.cardLast4,
                    s = n.merchant;
                  return [
                    {
                      supportedMethods: "secure-payment-confirmation",
                      data: {
                        action: "authenticate",
                        rpId: "stripe.com",
                        credentialIds: e.map(function (e) {
                          return N(e.id);
                        }),
                        challenge: N(r),
                        timeout: 6e4,
                        fallbackUrl: window.location.toString(),
                        instrument: {
                          displayName: "".concat(a, " ····").concat(c),
                          icon: M(i),
                        },
                        payeeOrigin: t,
                        payeeName: s.name,
                        showOptOut: !0,
                      },
                    },
                  ];
                })(d, m, i),
                { total: { label: "Total", amount: i.amount } }
              );
              return (
                a.report("one_click_authn.request_spc_authn.prompted", {
                  client_id: E,
                  source: r,
                  timeToComplete: u.getElapsedTime(),
                  device_support: s,
                }),
                f
                  .show()
                  .then(function (e) {
                    var t;
                    return (
                      e.complete("success"),
                      a.report("one_click_authn.request_spc_authn.completed", {
                        client_id: E,
                        source: r,
                        timeToComplete: u.getElapsedTime(),
                        device_support: s,
                      }),
                      {
                        authenticationAPIParam: {
                          type: O.QS,
                          assertion:
                            ((t = e.details),
                            {
                              type: "public-key",
                              id: t.id,
                              raw_id: t.id,
                              response: {
                                authenticator_data: C(
                                  t.response.authenticatorData
                                ),
                                client_data_json: C(t.response.clientDataJSON),
                                signature: C(t.response.signature),
                              },
                            }),
                          payment_data: {
                            merchant_data: {
                              merchant_origin: m,
                              total: i.amount,
                            },
                            network_data: i.authenticationChallenge,
                          },
                        },
                        optedOut: !1,
                      }
                    );
                  })
                  .catch(function (e) {
                    if (
                      (function (e) {
                        return (
                          "AbortError" === e.name &&
                          -1 !== e.message.indexOf("opted out")
                        );
                      })(e)
                    )
                      return (
                        a.report(
                          "one_click_authn.request_spc_authn.opted_out",
                          {
                            client_id: E,
                            source: r,
                            timeToOptedOut: u.getElapsedTime(),
                            device_support: s,
                          }
                        ),
                        o.J.resolve({
                          authenticationAPIParam: null,
                          optedOut: !0,
                        })
                      );
                    var t =
                      {
                        AbortError: "request_aborted",
                        InvalidStateError: "payment_already_shown",
                        NotSupportedError: "payment_method_not_supported",
                        SecurityError: "security_error",
                      }[e.name] || "unexpected_error";
                    return (
                      a.report("one_click_authn.request_spc_authn.error", {
                        reason: t,
                        client_id: E,
                        source: r,
                        timeToError: u.getElapsedTime(),
                        device_support: s,
                        error: (0, c.Z)(
                          { name: e.name, message: e.message },
                          e
                        ),
                      }),
                      l
                    );
                  })
              );
            } catch (e) {
              a.report("one_click_authn.request_spc_authn.error", {
                client_id: E,
                reason: "unexpected_error",
                source: r,
                timeToError: u.getElapsedTime(),
                device_support: s,
                error: (0, c.Z)({ name: e.name, message: e.message }, e),
              });
            }
            return l;
          },
          Z = function (e, t, n) {
            var r = t.controller,
              i = n.deviceSupport,
              a = n.challengeFrame,
              c = n.startTimestamp,
              s = e.oneClickAuthn;
            if (!s) return o.J.resolve(null);
            var l = (function (e) {
                var t = e.spcEligible,
                  n = e.configurationType;
                return t && (n === P || n === A);
              })(i)
                ? O.QS
                : O.LD,
              p = s.credentials.filter(function (e) {
                return e.type === l;
              });
            return 0 === p.length
              ? (r.report(
                  "one_click_authn.request_webauthn_authn.empty_credentials_list",
                  { client_id: E, source: e.threeDS2Source, device_support: i }
                ),
                o.J.resolve(null))
              : new o.J(function (t, n) {
                  a.then(function (r) {
                    var o = function () {
                      return n(new Error("User canceled"));
                    };
                    r._once("cancel", o),
                      r.isVisible || (r.show(), r.fadeInBackdrop());
                    var a = {
                      amount: s.amount,
                      instrument: s.instrument,
                      merchant: s.merchant,
                      authenticationChallenge: s.authenticationChallenge,
                      layout: s.layout,
                      allowCredentials: p,
                    };
                    return r.action
                      .performOneClickWebauthnAuthentication({
                        threeDS2Source: e.threeDS2Source,
                        cardBrand: e.cardBrand,
                        appUrl: (0, u.xS)(
                          "one-click-webauthn-authentication-f5e766baedbc8478db753a73db599dba.html"
                        ),
                        deviceSupport: i,
                        payload: a,
                        startPosixTime: c.getAsPosixTime(),
                      })
                      .then(function (e) {
                        r._off("cancel", o), t(e);
                      });
                  });
                });
          },
          x = function (e, t) {
            var n = e.threeDS2Source,
              r = e.oneClickAuthn,
              o = t.controller;
            if (!r) return null;
            var i = b.s$
              ? "safari"
              : b.D1
              ? "firefox"
              : b.P0 || b.Bh
              ? "edge"
              : b.G9
              ? b.sV
                ? "chrome_android"
                : /Chrome\/10[4-9]/.test(window.navigator.userAgent)
                ? "chrome_in_opt_out_trial"
                : "chrome"
              : null;
            if (!i)
              return (
                o.report("one_click_authn.configuration.error", {
                  client_id: E,
                  reason: "browser_not_found",
                  source: n,
                }),
                null
              );
            try {
              switch (new URLSearchParams(I(r.configuration)).get(i)) {
                case S:
                  return S;
                case P:
                  return P;
                case A:
                  return A;
                default:
                  return null;
              }
            } catch (e) {
              return (
                o.report("one_click_authn.configuration.error", {
                  client_id: E,
                  reason: "unexpected_error",
                  source: n,
                  error: (0, c.Z)({ name: e.name, message: e.message }, e),
                }),
                null
              );
            }
          },
          L = function () {
            try {
              return (
                0 ===
                "https://js.stripe.com/v3/".indexOf(window.top.location.origin)
              );
            } catch (e) {
              return !1;
            }
          },
          B = function () {
            var e = document.featurePolicy;
            if (!e) return !1;
            try {
              return (
                -1 !== e.allowedFeatures().indexOf("publickey-credentials-get")
              );
            } catch (e) {
              return !1;
            }
          },
          D = function (e, t) {
            return o.J.all([k(), w()]).then(function (n) {
              var o = (0, r.Z)(n, 2),
                i = o[0],
                a = o[1];
              return {
                sameOriginFrame: L(),
                spcEligible: i,
                webauthnEligible: a,
                publickeyCredentialsGetAllowed: B(),
                configurationType: x(e, t),
              };
            });
          },
          q = function (e, t, n) {
            var r = n.challengeFrame,
              o = n.startTimestamp;
            return D(e, t).then(function (n) {
              return (
                (a = (i = n).webauthnEligible),
                (c = i.configurationType),
                !a || (c !== S && c !== A)
                  ? (function (e) {
                      var t = e.spcEligible,
                        n = e.configurationType;
                      return t && n === P;
                    })(n)
                    ? j(e, t, { deviceSupport: n, startTimestamp: o }).then(
                        function (e) {
                          var t = e.authenticationAPIParam,
                            r = e.optedOut;
                          return {
                            deviceSupport: n,
                            authenticationAPIParam: t,
                            optedOut: r,
                          };
                        }
                      )
                    : {
                        deviceSupport: n,
                        authenticationAPIParam: null,
                        optedOut: !1,
                      }
                  : Z(e, t, {
                      deviceSupport: n,
                      challengeFrame: r,
                      startTimestamp: o,
                    }).then(function (e) {
                      return {
                        deviceSupport: n,
                        authenticationAPIParam: e,
                        optedOut: !1,
                      };
                    })
              );
              var i, a, c;
            });
          },
          F = function (e, t, n) {
            var c = new a.E(),
              s = l(e, t);
            switch (e.type) {
              case "3ds2-challenge":
                return D(e, t).then(function (r) {
                  return p(e, {
                    oneClickAuthnDeviceSupport: r,
                    oneClickAuthnOptedOut: !1,
                    challengeFrame: s,
                  }).then(
                    function () {
                      return y(t, {
                        intent: h(0, t, n),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    },
                    function () {
                      return y(t, {
                        intent: _(e, t),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    }
                  );
                });
              case "3ds2-fingerprint":
                return o.J.all([
                  g(e, t),
                  q(e, t, { challengeFrame: s, startTimestamp: c }),
                ])
                  .then(function (n) {
                    var a = (0, r.Z)(n, 2),
                      c = a[0],
                      u = a[1];
                    return (function (e, t, n) {
                      var r = n.fingerprintResult,
                        o = n.oneClickAuthn,
                        i = t.controller,
                        a = t.hosted,
                        c = t.intentSecret;
                      return (
                        i.report("3ds2.authenticate", {
                          hosted: a,
                          intentId: c.id,
                        }),
                        i.action
                          .authenticate3DS2({
                            threeDS2Source: e.threeDS2Source,
                            gateway: e.gateway,
                            outerWindowWidth: window.innerWidth,
                            hosted: a,
                            fingerprintResult: r,
                            oneClickAuthnDeviceSupportAPIParam: {
                              hosted: a,
                              same_origin_frame:
                                o.deviceSupport.sameOriginFrame,
                              spc_eligible: o.deviceSupport.spcEligible,
                              webauthn_eligible:
                                o.deviceSupport.webauthnEligible,
                              publickey_credentials_get_allowed:
                                o.deviceSupport.publickeyCredentialsGetAllowed,
                            },
                            oneClickAuthnAuthenticationAPIParam:
                              o.authenticationAPIParam,
                            publishableKey: e.publishableKey,
                          })
                          .then(function (e) {
                            return (
                              "error" === e.type
                                ? i.report("3ds2.authenticate.error", {
                                    error: e.error,
                                    hosted: a,
                                    intentId: c.id,
                                  })
                                : i.report("3ds2.authenticate.success", {
                                    hosted: a,
                                    intentId: c.id,
                                  }),
                              e
                            );
                          })
                      );
                    })(e, t, { fingerprintResult: c, oneClickAuthn: u }).then(
                      function (n) {
                        return (function (e, t, n) {
                          var r = n.authenticateResponse,
                            a = n.oneClickAuthnDeviceSupport,
                            c = n.oneClickAuthnOptedOut,
                            s = n.challengeFrame,
                            u = t.controller,
                            l = t.hosted,
                            d = t.intentSecret;
                          if ("error" === r.type) return o.J.resolve();
                          var m,
                            f = r.object,
                            h = f.state,
                            _ = f.ares,
                            y = f.creq;
                          if ("delegated" === h) return o.J.resolve();
                          if (null === _) return o.J.resolve();
                          if ("C" !== _.transStatus || null == y)
                            return (
                              u.report("3ds2.frictionless", {
                                hosted: l,
                                intentId: d.id,
                              }),
                              o.J.resolve()
                            );
                          switch (e.gateway) {
                            case "emvco":
                              m = {
                                type: "3ds2-challenge",
                                gateway: e.gateway,
                                threeDS2Source: e.threeDS2Source,
                                cardBrand: e.cardBrand,
                                transactionId: e.transactionId,
                                acsUrl: _.acsURL,
                                acsTransactionId: _.acsTransID,
                                optimizations: e.optimizations,
                                oneClickAuthn: e.oneClickAuthn,
                                creq: y,
                                publishableKey: e.publishableKey,
                              };
                              break;
                            case "itmx":
                              var v = r.object.itmx;
                              m = {
                                type: "3ds2-challenge",
                                gateway: e.gateway,
                                threeDS2Source: e.threeDS2Source,
                                cardBrand: e.cardBrand,
                                transactionId: e.transactionId,
                                acsUrl: _.acsURL,
                                acsTransactionId: _.acsTransID,
                                optimizations: e.optimizations,
                                oneClickAuthn: e.oneClickAuthn,
                                creq: y,
                                publishableKey: e.publishableKey,
                                stepUpUrl: null == v ? void 0 : v.stepUpUrl,
                                accessToken: null == v ? void 0 : v.accessToken,
                              };
                              break;
                            default:
                              (0, i.Rz)(e);
                          }
                          return p(m, {
                            oneClickAuthnDeviceSupport: a,
                            oneClickAuthnOptedOut: c,
                            challengeFrame: s,
                          });
                        })(e, t, {
                          authenticateResponse: n,
                          oneClickAuthnDeviceSupport: u.deviceSupport,
                          oneClickAuthnOptedOut: u.optedOut,
                          challengeFrame: s,
                        });
                      }
                    );
                  })
                  .then(
                    function () {
                      return y(t, {
                        intent: h(0, t, n),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    },
                    function () {
                      return y(t, {
                        intent: _(e, t),
                        challengeFrame: s,
                        startTimestamp: c,
                      });
                    }
                  );
              default:
                return (0, i.Rz)(e);
            }
          };
      },
      112: function (e, t, n) {
        "use strict";
        n.d(t, {
          $j: function () {
            return _;
          },
          Qw: function () {
            return y;
          },
        });
        var r = n(508),
          o = n(8489),
          i = n(6977),
          a = n(7792),
          c = n(2024),
          s = n(1873),
          u = n(3849),
          l = n(8812),
          p = {
            clientSecret: (0, s.jt)(s.Z_),
            redirect: (0, s.jt)((0, s.kw)("always", "if_required")),
            confirmParams: (0, s.jt)(s.Ry),
            handleActions: (0, s.jt)(s.Xg),
          },
          d = (0, o.Z)((0, o.Z)({}, p), {}, { element: (0, s.jt)(s.Ry) }),
          m = (0, o.Z)((0, o.Z)({}, p), {}, { elements: (0, s.jt)(s.Ry) }),
          f = {
            "stripe.confirmPayment()": {
              link: "https://stripe.com/docs/js/payment_intents/payment_method",
              action: "Payment",
            },
            "stripe.confirmSetup()": {
              link: "https://stripe.com/docs/js/setup_intents/payment_method",
              action: "Setup",
            },
          },
          h = function (e, t, n) {
            var r = t.rawSecret,
              o = t.rawElement,
              i = t.rawElements,
              u = t.rawHandleActions,
              p = t.rawRedirect,
              d = t.validatedConfirmParams,
              m = t.elementConfirmingPayment;
            if ((0, a.uN)(e, a.M4.payment_element_beta_1)) {
              var h = (0, s.rX)(o);
              if (!h)
                throw new l.No(
                  "Invalid value for "
                    .concat(
                      n,
                      ": `element` should be a Payment Element. You specified: "
                    )
                    .concat(typeof o, ".")
                );
              return { type: "elements", element: h };
            }
            if (
              ((function (e, t) {
                var n = e.rawSecret,
                  r = e.rawElements;
                if (!n && !r)
                  throw new l.No(
                    "".concat(
                      t,
                      ": expected either `elements` or `clientSecret`, but got neither."
                    )
                  );
              })({ rawElements: i, rawSecret: r }, n),
              p && !1 === u)
            )
              throw new l.No(
                "".concat(
                  n,
                  ": `redirect` not applicable when `handleActions` is false."
                )
              );
            if (r && !i) {
              if (
                (null == d ? void 0 : d.payment_method) &&
                (null == d ? void 0 : d.payment_method_data)
              )
                throw new l.No(
                  "".concat(
                    n,
                    ": Expected either `payment_method` or `payment_method_data`, but not both."
                  )
                );
              return { type: "clientSecret", clientSecret: r };
            }
            var _ = (0, s.MO)(i);
            if (!_)
              throw new l.No(
                "Invalid value for "
                  .concat(
                    n,
                    ": elements should be an Elements group. You specified: "
                  )
                  .concat(typeof i, ".")
              );
            var y = (0, c.sE)(_._elements, function (e) {
                return "payment" === e._componentName;
              }),
              v = (0, c.sE)(_._elements, function (e) {
                return "payButton" === e._componentName;
              });
            if (!y && !v)
              throw new l.No(
                "Invalid value for "
                  .concat(
                    n,
                    ": elements should have a mounted Payment Element or Pay Button Element. "
                  )
                  .concat(
                    (function (e, t) {
                      if (e && f[t]) {
                        var n = f[t],
                          r = n.link,
                          o = n.action;
                        return "It looks like you have other Elements on the page. Refer to "
                          .concat(r, " to confirm a ")
                          .concat(o, " Intent by payment method.");
                      }
                      return "";
                    })(!!_._elements.length, n)
                  )
              );
            if ("payButton" === m) {
              if (!v)
                throw new Error(
                  'Element confirming payment is "payButton", but there is no Pay Button Element mounted on the page.'
                );
              return {
                type: "elements",
                elements: _,
                clientSecret: r,
                element: v,
              };
            }
            if (!y)
              throw new Error(
                'Element confirming payment is "payment", but there is no PaymentElement mounted on the page.'
              );
            return {
              type: "elements",
              elements: _,
              clientSecret: r,
              element: y,
            };
          },
          _ = function (e) {
            return (0, a.uN)(e, a.M4.payment_element_beta_1) ? d : m;
          },
          y = function (e) {
            var t,
              n = e.controller,
              c = e.mids,
              p = e.betas,
              d = e.rawUpdateData,
              m = e.intentType,
              f = e.elementConfirmingPayment,
              y = e.errorMessageMethodName,
              v = (function (e) {
                var t = e.betas,
                  n = e.rawUpdateData,
                  r = e.errorMessageMethodName,
                  o = e.controller,
                  i = e.elementConfirmingPayment,
                  c = (0, s.Gu)((0, s.mC)(_(t)), n, r),
                  u = c.value,
                  p = u.element,
                  d = void 0 === p ? void 0 : p,
                  m = u.elements,
                  f = void 0 === m ? void 0 : m,
                  y = u.confirmParams,
                  v = u.clientSecret,
                  g = u.redirect,
                  b = u.handleActions,
                  w = c.warnings,
                  k = (0, s.Gu)(
                    (0, s.jt)(
                      (0, s.mC)({
                        return_url: (0, s.jt)(s.Z_),
                        payment_method: (0, s.jt)(s.Z_),
                        payment_method_data: (0, s.jt)(s.Ry),
                        payment_method_options: (0, s.jt)(s.Ry),
                        setup_future_usage: (0, s.NM)(
                          "".concat(
                            r,
                            ": do not pass setup_future_usage at confirm time. Instead, pass setup_future_usage when the PaymentIntent is created."
                          )
                        ),
                      })
                    ),
                    y,
                    r,
                    { path: ["confirmParams"] }
                  ).value,
                  E = h(
                    t,
                    {
                      rawSecret: v,
                      rawElement: d,
                      rawElements: f,
                      rawHandleActions: b,
                      rawRedirect: g,
                      validatedConfirmParams: k,
                      elementConfirmingPayment: i,
                    },
                    r
                  );
                if (
                  "clientSecret" === E.type &&
                  !(0, a.uN)(t, a.M4.server_side_confirmation_beta_1) &&
                  !(0, a.uN)(t, a.M4.elements_enable_deferred_intent_beta_1)
                )
                  throw new l.No(
                    "".concat(
                      r,
                      " with a `clientSecret` is not supported yet. Please use the Payment Element."
                    )
                  );
                var S = g || "always",
                  P = (null == k ? void 0 : k.return_url) || null;
                return (
                  w.forEach(function (e) {
                    return o.warn(e);
                  }),
                  {
                    validatedRedirect: S,
                    validatedReturnUrl: P,
                    validatedParams: E,
                    validatedConfirmParams: k,
                    validatedHandleActions: !1 !== b,
                    rawConfirmParams: y,
                  }
                );
              })({
                betas: p,
                rawUpdateData: d,
                controller: n,
                errorMessageMethodName: y,
                elementConfirmingPayment: f,
              }),
              g = v.validatedParams,
              b = v.validatedConfirmParams,
              w = v.validatedRedirect,
              k = v.validatedHandleActions,
              E = v.validatedReturnUrl,
              S = v.rawConfirmParams,
              P = null != S ? S : {},
              A =
                (P.payment_method,
                P.payment_method_data,
                P.payment_method_options,
                (0, r.Z)(P, [
                  "payment_method",
                  "payment_method_data",
                  "payment_method_options",
                ]));
            if (
              ((t =
                "clientSecret" === g.type
                  ? (function (e) {
                      var t,
                        n = e.validatedParams,
                        r = e.validatedConfirmParams,
                        i = e.validatedHandleActions,
                        a = e.otherParams,
                        c = e.intentType,
                        s = e.mids,
                        l = null != r ? r : {},
                        p = l.payment_method_data,
                        d = l.payment_method,
                        m = l.payment_method_options,
                        f =
                          "payment" === c
                            ? (0, u.cn)(n.clientSecret, "confirmPayment")
                            : (0, u.jH)(n.clientSecret, "confirmSetup"),
                        h = (0, u.k7)({ payment_method: p }),
                        _ = {};
                      return (
                        ("none" !==
                          (t =
                            p && h
                              ? {
                                  intentSecret: f,
                                  tag: "paymentMethod-from-data",
                                  type: h,
                                  data: p,
                                  options: null != m ? m : {},
                                }
                              : d
                              ? {
                                  intentSecret: f,
                                  tag: "paymentMethod",
                                  paymentMethod: d,
                                  options: null != m ? m : {},
                                }
                              : { intentSecret: f, tag: "none" }).tag &&
                          "paymentMethod" !== t.tag) ||
                          (_ = {
                            use_stripe_sdk: !0,
                            mandate_data: {
                              customer_acceptance: {
                                type: "online",
                                online: { infer_from_client: !0 },
                              },
                            },
                          }),
                        {
                          mids: s,
                          mode: t,
                          expectedType: h,
                          otherParams: (0, o.Z)((0, o.Z)({}, _), a),
                          options: { handleActions: i },
                        }
                      );
                    })({
                      validatedParams: g,
                      validatedConfirmParams: b,
                      validatedHandleActions: k,
                      otherParams: A,
                      intentType: m,
                      mids: c,
                    })
                  : (function (e) {
                      var t,
                        n,
                        r,
                        o,
                        a = e.validatedParams,
                        c = e.validatedConfirmParams,
                        s = e.validatedHandleActions,
                        u = e.otherParams,
                        l = e.mids,
                        p = e.elementConfirmingPayment,
                        d = a.clientSecret ? (0, i.RY)(a.clientSecret) : null;
                      return {
                        mode: {
                          tag: "elements",
                          groupId:
                            null === (t = a.elements) || void 0 === t
                              ? void 0
                              : t._id,
                          frameId:
                            null === (n = a.element) || void 0 === n
                              ? void 0
                              : n._implementation._frame.id,
                          elementName: p,
                          data:
                            null !==
                              (r =
                                null == c ? void 0 : c.payment_method_data) &&
                            void 0 !== r
                              ? r
                              : {},
                          options:
                            null !==
                              (o =
                                null == c
                                  ? void 0
                                  : c.payment_method_options) && void 0 !== o
                              ? o
                              : {},
                          intentSecret: d || void 0,
                        },
                        otherParams: u,
                        expectedType: null,
                        mids: l,
                        options: { handleActions: s },
                      };
                    })({
                      validatedParams: g,
                      validatedConfirmParams: b,
                      validatedHandleActions: k,
                      otherParams: A,
                      mids: c,
                      elementConfirmingPayment: f,
                    })),
              "if_required" === w)
            )
              return { intentMutationRequest: t, redirect: w, returnUrl: null };
            if ("always" === w && E)
              return { intentMutationRequest: t, redirect: w, returnUrl: E };
            throw new l.No(
              "".concat(
                y,
                ": the `confirmParams.return_url` argument is required unless passing `redirect: 'if_required'`"
              )
            );
          };
      },
      3167: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fh: function () {
            return E;
          },
          nq: function () {
            return A;
          },
          gO: function () {
            return P;
          },
        });
        var r = n(6977),
          o = n(4245),
          i = n(7549),
          a = n(122),
          c = n(7193),
          s = n(6589),
          u = n(6042),
          l = n(755),
          p = n(8147),
          d = n(5326),
          m = function (e) {
            return function (t) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = n.interval || 1e4,
                o = n.timeout || 3e5,
                i = new Date().getTime();
              return new s.J(function (n) {
                setTimeout(function a() {
                  s.J.resolve(e(t))
                    .catch(function (e) {
                      return { error: e };
                    })
                    .then(function (e) {
                      if (null == e)
                        if (new Date().getTime() - i > o) {
                          n({
                            error: new Error(
                              "Polling timed out without a valid response"
                            ),
                          });
                        } else setTimeout(a, r);
                      else n(e);
                    });
                }, r);
              });
            };
          },
          f = m(function (e) {
            var t = e.intentSecret,
              n = e.intentType,
              r = e.controller,
              o = e.locale;
            return s.J.resolve((0, d.NO)(t, n, r, o)).then(function (e) {
              var t = (0, d.yn)(e);
              return t
                ? "requires_action" === t.status
                  ? null
                  : e
                : "error" in e && "lock_timeout" === e.error.code
                ? null
                : e;
            });
          }),
          h = n(6090),
          _ = n(6790),
          y = n(8478),
          v = n(1873),
          g = n(276),
          b = n(8812),
          w = n(7792),
          k = function (e) {
            return (
              ["id_bank_account", "id_bank_transfer"].indexOf(
                e.bankTransferType
              ) > -1
            );
          },
          E = function (e) {
            switch (e.type) {
              case "error":
                var t = e.error;
                if (
                  "payment_intent_unexpected_state" === t.code &&
                  "object" == typeof t.payment_intent &&
                  null != t.payment_intent &&
                  "string" == typeof t.payment_intent.status &&
                  (0, r.mD)(t.payment_intent.status)
                ) {
                  var n = t.payment_intent;
                  return { type: "object", locale: e.locale, object: n };
                }
                return e;
              case "object":
                return e;
              default:
                return (0, v.Rz)(e);
            }
          },
          S = function (e, t, o, m, v, E, S) {
            var P = S || (0, r.G2)(t),
              A = (0, i.l)(P),
              C = (0, r.O3)(t);
            if (!A) return s.J.resolve({ paymentIntent: t });
            switch (A.type) {
              case "cardimageverification-challenge":
                return n
                  .e(428)
                  .then(n.bind(n, 5798))
                  .then(function (n) {
                    return (0, n.performCardImageVerification)(A, t, e, o);
                  });
              case "captcha-challenge":
                return (0, p.z)(A, t, e, o);
              case "3ds1-modal":
                return (0, a.s)(A, C, g.kE.PAYMENT_INTENT, e, o, v);
              case "3ds2-fingerprint":
              case "3ds2-challenge":
                return (0, c.A)(
                  A,
                  {
                    intentSecret: C,
                    intentType: g.kE.PAYMENT_INTENT,
                    controller: e,
                    locale: o,
                    hosted: m,
                  },
                  v
                );
              case "redirect":
                return (0, _.k)(t, A.redirectUrl, e);
              case "blik_authorize":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.shouldDisplayInstructionsModal;
                  return new s.J(function (e) {
                    var i,
                      a = !1;
                    return (
                      o &&
                        ((i = t.createLightboxFrame({
                          type: l.NC.BLIK_INNER,
                          options: { locale: r },
                        }))._on("load", function () {
                          var e, t;
                          null === (e = i) || void 0 === e || e.show(),
                            null === (t = i) ||
                              void 0 === t ||
                              t.fadeInBackdrop();
                        }),
                        i._once("request-close", function () {
                          i &&
                            (0, u.G)(i).then(function () {
                              (a = !0), e({ paymentIntent: n });
                            });
                        })),
                      (0, d.ct)({
                        controller: t,
                        initialDelay: 8e3,
                        pollTimeGap: 5e3,
                        intent: n,
                        checkIntent: function (e) {
                          return (
                            "requires_action" !== e.status ||
                            "blik_authorize" !== e.next_action.type
                          );
                        },
                        locale: r,
                        shouldPoll: function () {
                          return !a;
                        },
                      }).then(function (t) {
                        var n;
                        (null === (n = i) || void 0 === n
                          ? void 0
                          : n.isVisible) && i.destroy(!0),
                          a || e(t);
                      })
                    );
                  });
                })({
                  controller: e,
                  intent: t,
                  locale: o,
                  shouldDisplayInstructionsModal: E,
                });
              case "boleto-display":
                if (void 0 === A.hostedVoucherUrl)
                  throw new b.No(
                    "Expect `next_action.boleto_display_details.hosted_voucher_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-boleto_display_details-hosted_voucher_url"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x700",
                      locale: o,
                      frameTitle: "boleto.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedVoucherUrl,
                  intent: t,
                });
              case "konbini-display":
                if (void 0 === A.hostedVoucherUrl)
                  throw new b.No(
                    "Expected option `handleActions` to be `false`. The Konbini pilot does not handle the next actions for you automatically yet (e.g. displaying Konbini payment details). Please refer to the Stripe Konbini integration guide for more info: \n\nhttps://stripe.com/docs/payments/konbini"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x900",
                      locale: o,
                      frameTitle: "konbini.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedVoucherUrl,
                  intent: t,
                });
              case "oxxo-display":
                if (void 0 === A.hostedVoucherUrl)
                  throw new b.No(
                    "To handle the next actions automatically, set the API version to oxxo_beta=v2. Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.url,
                    r = e.intent,
                    o = e.locale,
                    i = (0, u.q)(t, {
                      url: (0, l.jr)(n),
                      size: "600x700",
                      locale: o,
                      frameTitle: "oxxo.voucher_frame_title",
                      useLightboxHostedCloseButton: !1,
                    });
                  return new s.J(function (e) {
                    i._on("request-close", function () {
                      (0, u.G)(i).then(function () {
                        e({ paymentIntent: r });
                      });
                    });
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedVoucherUrl,
                  intent: t,
                });
              case "upi_await_notification":
                return f({
                  controller: e,
                  intentSecret: C,
                  intentType: g.kE.PAYMENT_INTENT,
                  locale: o,
                });
              case "wechat_pay_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return (0, h.Ug)({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.wechat_pay.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedInstructionsUrl,
                  intent: t,
                  intentSecret: C,
                  intentType: g.kE.PAYMENT_INTENT,
                });
              case "paynow_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return (0, h.Ug)({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.paynow.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedInstructionsUrl,
                  intent: t,
                  intentSecret: C,
                  intentType: g.kE.PAYMENT_INTENT,
                });
              case "pix_display_qr_code":
                if (void 0 === A.hostedInstructionsUrl)
                  throw new b.No(
                    "Expect `next_action.pix_display_qr_code.hosted_instructions_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-pix_display_qr_code-hosted_instructions_url"
                  );
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.intentSecret,
                    o = e.intentType,
                    i = e.locale,
                    a = e.url,
                    c = (0, u.q)(t, {
                      url: (0, l.jr)(a),
                      size: "450x750",
                      locale: i,
                      frameTitle: "pix.instructions_frame_title",
                      useLightboxHostedCloseButton: !1,
                    }),
                    p = null;
                  return new s.J(function (e) {
                    c._on("load", function () {
                      c.show(), c.fadeInBackdrop();
                    }),
                      c._once("request-close", function () {
                        (0, u.G)(c).then(function () {
                          p && clearTimeout(p), e({ paymentIntent: n });
                        });
                      }),
                      c._on("complete", function (t) {
                        (0, u.G)(c).then(function () {
                          p && clearTimeout(p), e(t);
                        });
                      }),
                      (p = setTimeout(function n() {
                        (0, d.NO)(r, o, t, i).then(function (t) {
                          var r = (0, d.yn)(t);
                          r &&
                            ("requires_action" !== r.status
                              ? c.destroy(!0).then(function () {
                                  "payment_intent" === r.object
                                    ? e({ paymentIntent: r })
                                    : e({ setupIntent: r });
                                })
                              : (p = setTimeout(n, 2e3)));
                        });
                      }, 5e3));
                  });
                })({
                  controller: e,
                  locale: o,
                  url: A.hostedInstructionsUrl,
                  intent: t,
                  intentSecret: C,
                  intentType: g.kE.PAYMENT_INTENT,
                });
              case "promptpay_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return (0, h.Ug)({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.promptpay.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: o,
                  intent: t,
                  intentSecret: C,
                  url: A.hostedInstructionsUrl,
                  intentType: g.kE.PAYMENT_INTENT,
                });
              case "display_bank_transfer_instructions":
                return (function (e, t) {
                  return (
                    !!k(e) && !(0, w.uN)(t || [], w.M4.id_bank_transfer_beta_1)
                  );
                })(A, e._betas)
                  ? (0, _.k)(t, A.hostedInstructionsUrl, e)
                  : (function (e) {
                      return !k(e);
                    })(A)
                  ? (function (e) {
                      var t = e.controller,
                        n = e.url,
                        r = e.intent,
                        o = e.locale,
                        i = (0, u.q)(t, {
                          url: (0, l.jr)(n),
                          size: "600x700",
                          locale: o,
                          frameTitle:
                            "display_bank_transfer_instructions.voucher_frame_title",
                          useLightboxHostedCloseButton: !1,
                        });
                      return new s.J(function (e) {
                        i._on("request-close", function () {
                          (0, u.G)(i).then(function () {
                            e({ paymentIntent: r });
                          });
                        });
                      });
                    })({
                      controller: e,
                      url: A.hostedInstructionsUrl,
                      intent: t,
                      locale: o,
                    })
                  : s.J.resolve({ paymentIntent: t });
              case "qris_display_qr_code":
                return (function (e) {
                  var t = e.controller,
                    n = e.intent,
                    r = e.locale,
                    o = e.url;
                  return (0, h.Ug)({
                    controller: t,
                    intent: n,
                    locale: r,
                    url: o,
                    lightboxOptions: {
                      frameTitle:
                        "hosted_qr_code_instructions.qris.frame_title",
                    },
                  });
                })({
                  controller: e,
                  locale: o,
                  intent: t,
                  intentSecret: C,
                  url: A.hostedInstructionsUrl,
                  intentType: g.kE.PAYMENT_INTENT,
                });
              case "cashapp_handle_redirect_or_display_qr_code":
                return (0, y.p)({ controller: e, locale: o, intent: t });
              default:
                return s.J.resolve({ paymentIntent: t });
            }
          },
          P = function e(t, n, r, i, a, c) {
            var s =
                arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : 0,
              u =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : null;
            if (g.kO < s) throw new Error("max action recursion depth reached");
            return (0, o._v)()
              .then(function () {
                return S(t, n, r, i, c || [], a, u);
              })
              .then(function (n) {
                if (n.setupIntent)
                  throw new Error("Got unexpected SetupIntent response");
                if (
                  n.paymentIntent &&
                  null != n.paymentIntent.next_action &&
                  "use_stripe_sdk" === n.paymentIntent.next_action.type &&
                  -1 !==
                    g.zT.indexOf(
                      n.paymentIntent.next_action.use_stripe_sdk.type
                    )
                ) {
                  var o = s;
                  return e(t, n.paymentIntent, r, i, a, c, ++o);
                }
                return n;
              });
          },
          A = function (e, t, n, o, i, a) {
            return function (c) {
              var u = E(c);
              switch (u.type) {
                case "error":
                  var l = u.error,
                    p = l.payment_intent;
                  return t &&
                    p &&
                    "payment_intent_unexpected_state" === l.code &&
                    ("succeeded" === p.status ||
                      "requires_capture" === p.status)
                    ? s.J.resolve({ paymentIntent: p })
                    : s.J.resolve((0, r.PA)(c));
                case "object":
                  var d = u.object;
                  return P(e, d, u.locale, n, o, i || [], 0, a);
                default:
                  return (0, v.Rz)(u);
              }
            };
          };
      },
      7549: function (e, t, n) {
        "use strict";
        n.d(t, {
          l: function () {
            return a;
          },
        });
        var r = function (e) {
            var t = {
              skipFingerprint: !1,
              sandboxFingerprintFrame: !1,
              sandboxChallengeFrame: !1,
              recordFinalCres: !1,
            };
            return (
              -1 !== e.indexOf("Y") && (t.skipFingerprint = !0),
              -1 !== e.indexOf("k") && (t.sandboxFingerprintFrame = !0),
              -1 !== e.indexOf("5") && (t.sandboxChallengeFrame = !0),
              -1 !== e.indexOf("f") && (t.recordFinalCres = !0),
              t
            );
          },
          o = function (e) {
            return e
              ? {
                  amount: e.amount,
                  instrument: {
                    cardBrand: e.instrument.card_brand,
                    cardName: e.instrument.card_name,
                    cardLast4: e.instrument.card_last4,
                  },
                  merchant: {
                    name: e.merchant.name,
                    origin: e.merchant.origin,
                  },
                  credentials: e.credentials,
                  authenticationChallenge: e.authentication_challenge,
                  configuration: e.configuration,
                  layout: e.layout,
                }
              : null;
          },
          i = function (e) {
            return (
              {
                american_express: "amex",
                visa: "visa",
                mastercard: "mastercard",
                discover: "discover",
                unionpay: "unionpay",
                jsecure: "jcb",
              }[e] || "unknown"
            );
          },
          a = function (e) {
            if (!e) return null;
            if ("use_stripe_sdk" === e.type) {
              var t = e.use_stripe_sdk;
              switch (t.type) {
                case "intent_cardimageverification_challenge":
                  return {
                    type: "cardimageverification-challenge",
                    civId: t.stripe_js.card_image_verification_id,
                    civClientSecret:
                      t.stripe_js.card_image_verification_client_secret,
                    previousScanFailed: t.stripe_js.previous_scan_failed,
                  };
                case "intent_confirmation_challenge":
                  return {
                    type: "captcha-challenge",
                    site_key: t.stripe_js.site_key,
                    verification_url: t.stripe_js.verification_url,
                  };
                case "stripe_3ds2_fingerprint":
                  return {
                    type: "3ds2-fingerprint",
                    gateway: "emvco",
                    threeDS2Source: t.three_d_secure_2_source,
                    merchant: t.merchant,
                    cardBrand: i(t.directory_server_name),
                    transactionId: t.server_transaction_id,
                    optimizations: r(t.three_ds_optimizations),
                    methodUrl: t.three_ds_method_url,
                    oneClickAuthn: o(t.one_click_authn),
                    publishableKey: t.publishable_key,
                    threeDS2Intent: t.three_d_secure_2_intent,
                  };
                case "stripe_3ds2_itmx":
                  return {
                    type: "3ds2-fingerprint",
                    gateway: "itmx",
                    accessToken: t.access_token,
                    threeDS2Source: t.three_d_secure_2_source,
                    merchant: t.merchant,
                    cardBrand: i(t.directory_server_name),
                    transactionId: t.server_transaction_id,
                    optimizations: r(t.three_ds_optimizations),
                    methodUrl: t.three_ds_method_url,
                    oneClickAuthn: o(t.one_click_authn),
                    publishableKey: t.publishable_key,
                    threeDS2Intent: t.three_d_secure_2_intent,
                  };
                case "stripe_3ds2_challenge":
                  return {
                    type: "3ds2-challenge",
                    gateway: "emvco",
                    threeDS2Source: t.stripe_js.three_d_secure_2_source,
                    cardBrand: i(t.stripe_js.directory_server_name),
                    transactionId: t.stripe_js.server_transaction_id,
                    optimizations: r(t.stripe_js.three_ds_optimizations),
                    acsTransactionId: t.stripe_js.acs_transaction_id,
                    acsUrl: t.stripe_js.acs_url,
                    oneClickAuthn: o(t.stripe_js.one_click_authn),
                    creq: t.stripe_js.creq,
                  };
                case "three_d_secure_redirect":
                  return {
                    type: "3ds1-modal",
                    url: t.stripe_js,
                    source: t.source,
                  };
              }
            }
            if ("redirect_to_url" === e.type)
              return { type: "redirect", redirectUrl: e.redirect_to_url.url };
            if ("alipay_handle_redirect" === e.type)
              return {
                type: "redirect",
                redirectUrl: e.alipay_handle_redirect.url,
              };
            if ("blik_authorize" === e.type) return { type: "blik_authorize" };
            if ("boleto_display_details" === e.type)
              return {
                type: "boleto-display",
                hostedVoucherUrl: e.boleto_display_details.hosted_voucher_url,
              };
            if ("display_oxxo_details" === e.type)
              return {
                type: "oxxo-display",
                hostedVoucherUrl: e.display_oxxo_details.hosted_voucher_url,
              };
            if ("konbini_display_details" === e.type)
              return {
                type: "konbini-display",
                hostedVoucherUrl: e.konbini_display_details.hosted_voucher_url,
              };
            if ("oxxo_display_details" === e.type)
              return {
                type: "oxxo-display",
                hostedVoucherUrl: e.oxxo_display_details.hosted_voucher_url,
              };
            if ("upi_await_notification" === e.type)
              return { type: "upi_await_notification" };
            if ("wechat_pay_display_qr_code" === e.type)
              return {
                type: "wechat_pay_display_qr_code",
                qrCodeUrl: e.wechat_pay_display_qr_code.image_url_png,
                hostedInstructionsUrl:
                  e.wechat_pay_display_qr_code.hosted_instructions_url,
              };
            if ("cashapp_handle_redirect_or_display_qr_code" === e.type)
              return {
                type: "cashapp_handle_redirect_or_display_qr_code",
                hostedInstructionsUrl:
                  e.cashapp_handle_redirect_or_display_qr_code
                    .hosted_instructions_url,
                mobile_auth_url:
                  e.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url,
                image_url_png:
                  e.cashapp_handle_redirect_or_display_qr_code.qr_code
                    .image_url_png,
                image_url_svg:
                  e.cashapp_handle_redirect_or_display_qr_code.qr_code
                    .image_url_svg,
                expires_at:
                  e.cashapp_handle_redirect_or_display_qr_code.qr_code
                    .expires_at,
              };
            if ("paynow_display_qr_code" === e.type)
              return {
                type: "paynow_display_qr_code",
                qrCodeUrl: e.paynow_display_qr_code.image_url_png,
                hostedInstructionsUrl:
                  e.paynow_display_qr_code.hosted_instructions_url,
              };
            if ("pix_display_qr_code" === e.type)
              return {
                type: "pix_display_qr_code",
                hostedInstructionsUrl:
                  e.pix_display_qr_code.hosted_instructions_url,
              };
            if ("promptpay_display_qr_code" === e.type)
              return {
                type: "promptpay_display_qr_code",
                qrCodeUrl: e.promptpay_display_qr_code.image_url_png,
                qrCodeData: e.promptpay_display_qr_code.data,
                hostedInstructionsUrl:
                  e.promptpay_display_qr_code.hosted_instructions_url,
              };
            if ("display_bank_transfer_instructions" === e.type) {
              var n,
                a =
                  e.display_bank_transfer_instructions.hosted_instructions_url;
              if (
                "id_bban" ===
                e.display_bank_transfer_instructions.financial_addresses[0].type
              )
                a =
                  null !== (n = a) && void 0 !== n
                    ? n
                    : e.display_bank_transfer_instructions
                        .financial_addresses[0].id_bban.hosted_instructions_url;
              return {
                type: "display_bank_transfer_instructions",
                hostedInstructionsUrl: a,
                bankTransferType: e.display_bank_transfer_instructions.type,
              };
            }
            return "qris_display_qr_code" === e.type
              ? {
                  type: "qris_display_qr_code",
                  hostedInstructionsUrl:
                    e.qris_display_qr_code.hosted_instructions_url,
                }
              : null;
          };
      },
      3849: function (e, t, n) {
        "use strict";
        n.d(t, {
          Bu: function () {
            return S;
          },
          I4: function () {
            return E;
          },
          LR: function () {
            return w;
          },
          NL: function () {
            return d;
          },
          OV: function () {
            return _;
          },
          TH: function () {
            return k;
          },
          VN: function () {
            return b;
          },
          cn: function () {
            return l;
          },
          el: function () {
            return f;
          },
          hC: function () {
            return P;
          },
          jH: function () {
            return p;
          },
          k7: function () {
            return m;
          },
          mi: function () {
            return v;
          },
          o1: function () {
            return h;
          },
          xP: function () {
            return g;
          },
          z2: function () {
            return y;
          },
          zb: function () {
            return A;
          },
        });
        var r = n(7904),
          o = n(1873),
          i = n(8812),
          a = n(3840),
          c = n(5339),
          s = n(6589),
          u = function (e) {
            var t = e
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();
            return "https://stripe.com/docs/stripe-js/reference#stripe-".concat(
              t
            );
          },
          l = function (e, t) {
            return (0, o.Gu)(c.f4, e, "stripe.".concat(t, " intent secret"))
              .value;
          },
          p = function (e, t) {
            return (0, o.Gu)(c.Yj, e, "stripe.".concat(t, " intent secret"))
              .value;
          },
          d = function (e, t) {
            return null == e
              ? null
              : (0, o.Gu)(c.n_, e, "stripe.".concat(t, " intent secret")).value;
          },
          m = function (e) {
            if (
              !e ||
              !e.payment_method ||
              !e.payment_method.type ||
              "string" != typeof e.payment_method.type
            )
              return null;
            var t = e.payment_method.type;
            return a.GS[t] || null;
          },
          f = function (e, t) {
            return (0, o.Gu)(c.SR, t, e).value;
          },
          h = function (e, t, n, r) {
            if ("valid" === (0, o.ld)(o.IN, n, t).type)
              throw new i.No(
                "Do not pass an Element to stripe.".concat(
                  t,
                  "() directly.\n"
                ) + "For more information: ".concat(u(t))
              );
            var a = (0, o.Gu)((0, c.bF)(e, t), n, t).value,
              s = a.source,
              l = a.paymentMethodData,
              p = a.paymentMethodOptions,
              d = a.paymentMethod,
              m = a.otherParams;
            if (null != s && (null != l || null != d))
              throw new i.No(
                "".concat(
                  t,
                  ": Expected either source or payment_method, but not both."
                )
              );
            if (l) {
              if (l.element)
                return {
                  mode: {
                    tag: "paymentMethod-from-element",
                    type: e,
                    elementName: l.element._componentName,
                    frameId: l.element._implementation._frame.id,
                    data: l.data,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
              if (e)
                return {
                  mode: {
                    tag: "paymentMethod-from-data",
                    type: e,
                    data: l.data,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
            } else {
              if (d)
                return {
                  mode: {
                    tag: "paymentMethod",
                    paymentMethod: d,
                    options: p,
                    intentSecret: r,
                  },
                  otherParams: m,
                };
              if (s)
                return {
                  mode: { tag: "source", source: s, intentSecret: r },
                  otherParams: m,
                };
            }
            return { mode: { tag: "none", intentSecret: r }, otherParams: m };
          },
          _ = function (e, t) {
            if (
              "object" == typeof e &&
              null !== e &&
              void 0 !== e.handleActions
            )
              throw new i.No(
                "stripe."
                  .concat(
                    t,
                    " does not support a handleActions option. For more information, see "
                  )
                  .concat(u(t))
              );
          },
          y = function (e, t) {
            var n = e.split("#"),
              o = (0, r.Z)(n, 2),
              i = o[0],
              a = o[1],
              c = i.split("?"),
              s = (0, r.Z)(c, 2),
              u = s[0],
              l = s[1],
              p = "?",
              d =
                "payment_intent" === t.object
                  ? [
                      "payment_intent",
                      "payment_intent_client_secret",
                      "redirect_status",
                    ]
                  : [
                      "setup_intent",
                      "setup_intent_client_secret",
                      "redirect_status",
                    ];
            (l || "").split("&").forEach(function (e) {
              var t = e.split("="),
                n = (0, r.Z)(t, 1)[0];
              -1 === d.indexOf(n) &&
                (p += "".concat("?" === p ? "" : "&").concat(e));
            });
            var m = "payment_intent" === t.object ? "payment" : "setup";
            (p += ""
              .concat("?" === p ? "" : "&")
              .concat(m, "_intent=")
              .concat(t.id)),
              (p += "&"
                .concat(m, "_intent_client_secret=")
                .concat(t.client_secret));
            var f = u + (p += "&redirect_status=succeeded");
            return a ? "".concat(f, "#").concat(a) : f;
          },
          v = function (e) {
            if (e && "object" == typeof e && "elements" in e) {
              var t = e.elements,
                n = (0, o.MO)(t);
              if (n) return n._id;
            }
            return null;
          },
          g = function (e, t, n) {
            var r = v(e);
            return r
              ? t.action.getElementConfirmingPayment({
                  groupId: r,
                  errorMessageMethodName: n,
                })
              : s.J.resolve("payment");
          },
          b = function (e) {
            var t = e.groupId,
              n = e.elementConfirmingPayment,
              r = e.controller,
              o = e.data,
              i = e.errorMessageMethodName;
            return t && "payButton" === n
              ? r.action
                  .closeECEPaymentSheet({
                    groupId: t,
                    isError: "error" === o.type,
                    errorMessageMethodName: i,
                  })
                  .then(function () {
                    return o;
                  })
              : s.J.resolve(o);
          },
          w = { type: "validation_error", code: "incomplete_payment_details" },
          k = {
            type: "instant_verification_error",
            code: "instant_verification",
          },
          E = { type: "validation_error", code: "unexpected" },
          S = { type: "validation_error", code: "civ_unexpected" },
          P = {
            type: "validation_error",
            code: "payment_intent_authentication_failure",
          },
          A = {
            type: "instant_verification_incomplete_error",
            code: "instant_verification_incomplete",
          };
      },
      5339: function (e, t, n) {
        "use strict";
        n.d(t, {
          Hv: function () {
            return m;
          },
          LK: function () {
            return _;
          },
          SR: function () {
            return v;
          },
          Yj: function () {
            return h;
          },
          ZY: function () {
            return g;
          },
          as: function () {
            return b;
          },
          bF: function () {
            return w;
          },
          f4: function () {
            return f;
          },
          n_: function () {
            return k;
          },
          q2: function () {
            return y;
          },
        });
        var r = n(8489),
          o = n(3696),
          i = n(1352),
          a = n(508),
          c = n(8812),
          s = n(1873),
          u = n(276),
          l = n(3840),
          p = n(6977),
          d = n(7792),
          m = function (e, t) {
            if ("string" != typeof e)
              return (0, s.$3)("a client_secret string", e, t);
            var n = (0, p.RY)(e);
            return null === n
              ? (0, s.$3)(
                  "a client secret of the form ${id}_secret_${secret}",
                  e,
                  t
                )
              : (0, s.x4)(n, []);
          },
          f = function (e, t) {
            var n = m(e, t);
            return "error" === n.type
              ? n
              : n.value.type === u.kE.SETUP_INTENT
              ? (0, s.zS)(
                  new c.No(
                    (0, s.Ao)(
                      "a PaymentIntent client secret",
                      "a SetupIntent client secret",
                      t
                    )
                  )
                )
              : (0, s.x4)(n.value, []);
          },
          h = function (e, t) {
            var n = m(e, t);
            return "error" === n.type
              ? n
              : n.value.type === u.kE.PAYMENT_INTENT
              ? (0, s.zS)(
                  new c.No(
                    (0, s.Ao)(
                      "a SetupIntent client secret",
                      "a PaymentIntent client secret",
                      t
                    )
                  )
                )
              : (0, s.x4)(n.value, []);
          },
          _ = function (e, t) {
            if (null === e) return (0, s.RH)("object", "null", t);
            if ("object" != typeof e) return (0, s.RH)("object", typeof e, t);
            var n = e.client_secret,
              r = e.status,
              o = e.next_action,
              i = m(n, (0, s.NQ)(t, "client_secret"));
            if ("error" === i.type) return i;
            if ("string" != typeof r)
              return (0, s.RH)("string", typeof r, (0, s.NQ)(t, "status"));
            if (
              ("requires_source_action" === r || "requires_action" === r) &&
              "object" != typeof o
            )
              return (0, s.RH)("object", typeof o, (0, s.NQ)(t, "next_action"));
            if ("payment_intent" === e.object) {
              var a = e;
              return (0, s.x4)(a, []);
            }
            var c = e;
            return (0, s.x4)(c, []);
          },
          y = function (e, t) {
            return function (n, r) {
              if ("object" != typeof n) return (0, s.RH)("object", typeof n, r);
              if (null === n) return (0, s.RH)("object", "null", r);
              var u = (0, d.uN)(
                  t || [],
                  d.M4.elements_enable_deferred_intent_beta_1
                ),
                p = n.element,
                m = n.elements,
                f = n.params,
                h = (0, a.Z)(n, ["element", "elements", "params"]);
              if (u && (p || m || f)) {
                var _ = (0, s.rX)(p),
                  y = (0, s.MO)(m),
                  v = Object.keys(h);
                if (v.length) {
                  var g = new c.No(
                    "Unexpected "
                      .concat(v.length > 1 ? "properties" : "property", ": `")
                      .concat(
                        v.join("`, `"),
                        "`. Put additional API properties in `params`."
                      )
                  );
                  return (0, s.zS)(g);
                }
                if (_) {
                  var b = _._componentName,
                    w = l._b[b];
                  return (0, s.x4)({
                    type: w,
                    element: _,
                    elements: null,
                    data: f || {},
                  });
                }
                if (y)
                  return (0, s.x4)({
                    type: null,
                    element: null,
                    elements: y,
                    data: f || {},
                  });
                if (f)
                  return (0, s.x4)({
                    type: f.type,
                    element: null,
                    elements: null,
                    data: f,
                  });
              } else if (u && !n.type) {
                var k = new c.No(
                  "element, elements, or params must be provided."
                );
                return (0, s.zS)(k);
              }
              var E,
                S = n.type,
                P = (0, a.Z)(n, ["type"]);
              if (null === e) {
                if ("string" != typeof S)
                  return (0, s.RH)(
                    "a string such as 'card', 'ideal', or 'sepa_debit'",
                    typeof S,
                    (0, s.NQ)(r, "type")
                  );
                E = S;
              } else {
                if (void 0 !== S && S !== e)
                  return "string" != typeof S
                    ? (0, s.RH)(
                        "a string such as 'card', 'ideal', or 'sepa_debit'",
                        typeof S,
                        (0, s.NQ)(r, "type")
                      )
                    : (0, s.RH)(
                        '"'.concat(S, '"'),
                        '"'.concat(e, '"'),
                        (0, s.NQ)(r, "type")
                      );
                E = e;
              }
              var A = P[E],
                C = (P[E], (0, a.Z)(P, [E].map(i.Z)));
              if (
                (-1 !==
                  [
                    "acss_debit",
                    "affirm",
                    "afterpay_clearpay",
                    "alipay",
                    "bancontact",
                    "cashapp",
                    "customer_balance",
                    "eps",
                    "giropay",
                    "grabpay",
                    "klarna",
                    "konbini",
                    "mobilepay",
                    "oxxo",
                    "p24",
                    "paynow",
                    "paypal",
                    "pix",
                    "us_bank_account",
                    "wechat_pay",
                    "pay_by_bank",
                    "paynow",
                    "promptpay",
                    "qris",
                    "revolut_pay",
                    "zip",
                  ].indexOf(E) &&
                  void 0 === A &&
                  (A = {}),
                "object" != typeof A)
              )
                return (0, s.RH)(
                  "an object or element",
                  typeof n[E],
                  (0, s.NQ)(r, E)
                );
              if (null === A)
                return (0, s.RH)(
                  "an object or element",
                  "null",
                  (0, s.NQ)(r, E)
                );
              var I = (0, s.rX)(A);
              if (I) {
                var N = I._componentName;
                if (l._b[N] !== E) {
                  var T = [].concat((0, o.Z)(r.path), [E]).join("."),
                    M = r.label,
                    R = new c.No(
                      "Invalid value for "
                        .concat(M, ": ")
                        .concat(T, " was `")
                        .concat(N, "` Element, which cannot be used to create ")
                        .concat(E, " PaymentMethods.")
                    );
                  return (0, s.zS)(R);
                }
                return (0, s.x4)({
                  type: E,
                  element: I,
                  elements: null,
                  data: C,
                });
              }
              return (0, s.x4)({
                type: E,
                element: null,
                elements: null,
                data: P,
              });
            };
          },
          v = (0, s.Wc)(
            (0, s.mC)({
              handleActions: (0, s.Wc)(s.Xg, function () {
                return !0;
              }),
            }),
            function () {
              return { handleActions: !0 };
            }
          ),
          g = function (e) {
            return function (t, n) {
              if ("object" != typeof t) return (0, s.RH)("object", typeof t, n);
              if (null === t) return (0, s.RH)("object", "null", n);
              var r = t.billing_details,
                o = (0, a.Z)(t, ["billing_details"]);
              return (0, s.x4)({
                paymentMethodData: { type: "".concat(e), billing_details: r },
                otherParams: o,
              });
            };
          },
          b = function (e) {
            return function (t, n) {
              if ("object" != typeof t) return (0, s.RH)("object", typeof t, n);
              if (null === t) return (0, s.RH)("object", "null", n);
              var o = t.clientSecret,
                i = t.params,
                c = (0, a.Z)(t, ["clientSecret", "params"]),
                u = (0, s.ld)(e, o, n.label, { path: ["clientSecret"] });
              if ("error" === u.type) return u;
              if ("object" != typeof i)
                return (0, s.RH)("object", typeof i, (0, s.NQ)(n, "params"));
              if (null === i)
                return (0, s.RH)("object", "null", (0, s.NQ)(n, "params"));
              var l = i.payment_method_type,
                p = i.payment_method_data;
              return "string" != typeof l
                ? (0, s.RH)(
                    "string",
                    typeof l,
                    (0, s.NQ)((0, s.NQ)(n, "params"), "payment_method_type")
                  )
                : "object" != typeof p && void 0 !== p
                ? (0, s.RH)(
                    "object",
                    typeof p,
                    (0, s.NQ)((0, s.NQ)(n, "params"), "payment_method_data")
                  )
                : (0, s.x4)({
                    clientSecret: u.value,
                    paymentMethodData: (0, r.Z)(
                      { type: l },
                      (null == p ? void 0 : p.billing_details) && {
                        billing_details: null == p ? void 0 : p.billing_details,
                      }
                    ),
                    otherParams: c,
                  });
            };
          },
          w = function (e, t) {
            return function (n, i) {
              if (void 0 === n)
                return (0, s.x4)({
                  paymentMethodData: null,
                  paymentMethodOptions: null,
                  source: null,
                  paymentMethod: null,
                  otherParams: {},
                });
              if ("object" != typeof n) return (0, s.RH)("object", typeof n, i);
              if (null === n) return (0, s.RH)("object", "null", i);
              var l = n.source,
                p = n.source_data,
                d = n.payment_method_data,
                m = n.payment_method_options,
                f = n.payment_method,
                h = (0, a.Z)(n, [
                  "source",
                  "source_data",
                  "payment_method_data",
                  "payment_method_options",
                  "payment_method",
                ]);
              if (null != p)
                throw new c.No(
                  "".concat(
                    t,
                    ": Expected payment_method, or source, not source_data."
                  )
                );
              if (null != d)
                throw new c.No(
                  "".concat(
                    t,
                    ": Expected payment_method, or source, not payment_method_data."
                  )
                );
              if (null != l && null != f)
                throw new c.No(
                  "".concat(
                    t,
                    ": Expected either payment_method or source, but not both."
                  )
                );
              if (null === e && null != f && "string" != typeof f)
                throw new c.No(
                  "".concat(
                    t,
                    ": Expected payment_method[type] to be set if payment_method is passed."
                  )
                );
              if (null != l) {
                if ("string" != typeof l)
                  return (0, s.RH)("string", typeof l, (0, s.NQ)(i, "source"));
                if ("updatePaymentIntent" === t)
                  throw new c.No(
                    "".concat(
                      t,
                      ": Expected payment_method, not source to be passed."
                    )
                  );
                return (0, s.x4)({
                  source: l,
                  paymentMethodData: null,
                  paymentMethodOptions: null,
                  paymentMethod: null,
                  otherParams: h,
                });
              }
              if (null != f && "string" != typeof f && "object" != typeof f)
                return (0, s.RH)(
                  "string or object",
                  typeof f,
                  (0, s.NQ)(i, "payment_method")
                );
              var _,
                v = (0, s.ld)(
                  ((_ = e),
                  function (e, t) {
                    if (null == e) return (0, s.x4)(null);
                    if ("object" != typeof e)
                      return (0, s.RH)("object", typeof e, t);
                    var n = e.card,
                      o = (0, a.Z)(e, ["card"]);
                    if (!n || "object" != typeof n) return (0, s.x4)(e);
                    var i = n.cvc,
                      c = (0, a.Z)(n, ["cvc"]);
                    if (null == i) return (0, s.x4)(e);
                    var l = (0, s.rX)(i),
                      p = l ? l._componentName : "";
                    return u.Yj.cardCvc !== p
                      ? (0, s.RH)(
                          "`".concat(u.Yj.cardCvc, "` Element"),
                          p ? "`".concat(p, "` Element") : typeof i,
                          (0, s.NQ)(t, "".concat(_ || "card", ".cvc"))
                        )
                      : (0, s.x4)(
                          (0, r.Z)(
                            (0, r.Z)({}, o),
                            {},
                            { card: (0, r.Z)((0, r.Z)({}, c), {}, { cvc: l }) }
                          )
                        );
                  }),
                  m,
                  t,
                  {
                    path: [].concat((0, o.Z)(i.path), [
                      "payment_method_options",
                    ]),
                  }
                );
              if ("error" === v.type) return v;
              if ("string" == typeof f)
                return (0, s.x4)({
                  source: null,
                  paymentMethodData: null,
                  paymentMethodOptions: v.value,
                  paymentMethod: f,
                  otherParams: h,
                });
              if ("object" == typeof f && null !== f) {
                var g = (0, s.ld)(y(e), f, t, {
                  path: [].concat((0, o.Z)(i.path), ["payment_method"]),
                });
                if ("error" === g.type) return g;
                var b = g.value;
                return (0, s.x4)({
                  source: null,
                  paymentMethod: null,
                  paymentMethodOptions: v.value,
                  paymentMethodData: b,
                  otherParams: h,
                });
              }
              return (0, s.x4)({
                source: null,
                paymentMethodData: null,
                paymentMethodOptions: null,
                paymentMethod: null,
                otherParams: h,
              });
            };
          },
          k = function (e, t) {
            if (null === e) return (0, s.RH)("object", "null", t);
            if ("object" != typeof e) return (0, s.RH)("object", typeof e, t);
            var n = e.type;
            if ("string" != typeof n)
              return (0, s.RH)(
                "a string such as 'use_stripe_sdk', 'redirect_to_url'",
                typeof n,
                (0, s.NQ)(t, "type")
              );
            if ("use_stripe_sdk" !== n)
              return (0, s.RH)(
                "a 3DS2 NextAction type such as 'use_stripe_sdk'",
                n,
                (0, s.NQ)(t, "type")
              );
            var r = e.use_stripe_sdk;
            if ("object" != typeof r)
              return (0, s.RH)("an object", r, (0, s.NQ)(t, "type"));
            var o = e;
            return (0, s.x4)(o, []);
          };
      },
      6042: function (e, t, n) {
        "use strict";
        n.d(t, {
          G: function () {
            return i;
          },
          q: function () {
            return o;
          },
        });
        var r = n(755),
          o = function (e, t) {
            var n = e.createLightboxFrame({
              type: r.NC.LIGHTBOX_APP,
              options: t,
            });
            return (
              n.show(),
              n._on("nested-frame-loaded", function () {
                n.fadeInBackdrop(),
                  setTimeout(function () {
                    n.action.openLightboxFrame();
                  }, 200);
              }),
              n
            );
          },
          i = function (e) {
            return e.action.closeLightboxFrame(), e.destroy();
          };
      },
      1164: function (e, t, n) {
        "use strict";
        n.d(t, {
          vS: function () {
            return i;
          },
          ud: function () {
            return o;
          },
          Nj: function () {
            return d;
          },
          jR: function () {
            return p;
          },
        });
        var r = {
            ar: "ar",
            bg: "bg",
            cs: "cs",
            da: "da",
            de: "de",
            el: "el",
            en: "en",
            es: "es",
            "es-419": "es-419",
            et: "et",
            fi: "fi",
            fil: "fil",
            fr: "fr",
            he: "he",
            hr: "hr",
            hu: "hu",
            id: "id",
            it: "it",
            ja: "ja",
            ko: "ko",
            lt: "lt",
            lv: "lv",
            ms: "ms",
            mt: "mt",
            nb: "nb",
            nl: "nl",
            no: "no",
            pl: "pl",
            pt: "pt",
            "pt-BR": "pt-BR",
            ru: "ru",
            ro: "ro",
            sk: "sk",
            sl: "sl",
            sv: "sv",
            th: "th",
            tr: "tr",
            vi: "vi",
            zh: "zh",
            "zh-HK": "zh-HK",
            "zh-TW": "zh-TW",
          },
          o = ["ar", "he"],
          i = "en",
          a = (Object.keys(r), r),
          c = n(9294),
          s = n(7792),
          u = { "es-HN": "es-419", "es-MX": "es-419", "es-US": "es-419" },
          l = function (e) {
            try {
              var t = (function (e) {
                  var t = e.split("-"),
                    n = t[0],
                    r = null,
                    o = null,
                    i = null;
                  if (
                    (t.length > 1 &&
                      (4 === t[1].length
                        ? (o = t[1])
                        : 2 === t[1].length || 3 === t[1].length
                        ? (r = t[1])
                        : (i = t[1])),
                    t.length > 2 &&
                      (2 === t[2].length || 3 === t[2].length
                        ? (r = t[2])
                        : (i = t[2])),
                    t.length > 3 && (i = t[3]),
                    2 !== n.length && 3 !== n.length)
                  )
                    throw new Error("invalid locale ".concat(e));
                  var a = n.toLowerCase(),
                    c = r ? r.toUpperCase() : null,
                    s = o
                      ? ""
                          .concat(o[0].toUpperCase())
                          .concat(o.substring(1).toLowerCase())
                      : null;
                  return {
                    locale:
                      a +
                      (s ? "-".concat(s) : "") +
                      (c ? "-".concat(c) : "") +
                      (i ? "-".concat(i) : ""),
                    language: a,
                    region: c,
                    script: s,
                    variant: i,
                  };
                })(e),
                n = t.locale,
                r = t.language,
                o = [n];
              return u[n] && o.push(u[n]), n !== r && o.push(r), o.push(i), o;
            } catch (t) {
              return [e, i];
            }
          },
          p = function (e) {
            return (function (e) {
              for (var t = l(e), n = 0; n < t.length; n++) {
                var r = t[n];
                if (a[r]) {
                  var o = a[r];
                  if (
                    (0, s.uN)(s.ub, s.M4.stripe_js_beta_locales) ||
                    -1 === s.P3.indexOf(o)
                  )
                    return o;
                }
              }
              return "en";
            })("auto" === e ? (0, c.UT)() : e);
          },
          d = function (e) {
            return p(e || "auto");
          };
      },
      4400: function (e, t, n) {
        "use strict";
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2781: function (e, t, n) {
        "use strict";
        function r(e) {
          if (Array.isArray(e)) return e;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      1764: function (e, t, n) {
        "use strict";
        function r(e) {
          if (Array.isArray(e)) return (0, o.Z)(e);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(4400);
      },
      6148: function (e, t, n) {
        "use strict";
        function r(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7853: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3009: function (e, t, n) {
        "use strict";
        function r() {
          return (
            (r = (0, i.Z)()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = new (Function.bind.apply(e, r))();
                  return n && (0, o.Z)(i, n.prototype), i;
                }),
            r.apply(null, arguments)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(9384),
          i = n(3268);
      },
      4531: function (e, t, n) {
        "use strict";
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function o(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }
        n.d(t, {
          Z: function () {
            return o;
          },
        });
      },
      8992: function (e, t, n) {
        "use strict";
        function r(e) {
          var t = (0, i.Z)();
          return function () {
            var n,
              r = (0, o.Z)(e);
            if (t) {
              var i = (0, o.Z)(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return (0, a.Z)(this, n);
          };
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(3538),
          i = n(3268),
          a = n(5679);
      },
      6222: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      9043: function (e, t, n) {
        "use strict";
        function r() {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            r.apply(this, arguments)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3538: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            r(e)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      1020: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && (0, o.Z)(e, t);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(9384);
      },
      3043: function (e, t, n) {
        "use strict";
        function r(e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      3268: function (e, t, n) {
        "use strict";
        function r() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      5253: function (e, t, n) {
        "use strict";
        function r(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7090: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == c.return || c.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      4501: function (e, t, n) {
        "use strict";
        function r() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2646: function (e, t, n) {
        "use strict";
        function r() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      8489: function (e, t, n) {
        "use strict";
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  (0, i.Z)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var i = n(6222);
      },
      508: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = (0, o.Z)(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]));
          }
          return i;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(5178);
      },
      5178: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      5679: function (e, t, n) {
        "use strict";
        function r(e, t) {
          return !t || ("object" !== (0, o.Z)(t) && "function" != typeof t)
            ? (0, i.Z)(e)
            : t;
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(9675),
          i = n(6148);
      },
      9384: function (e, t, n) {
        "use strict";
        function r(e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            r(e, t)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      7904: function (e, t, n) {
        "use strict";
        function r(e, t) {
          return (0, o.Z)(e) || (0, i.Z)(e, t) || (0, a.Z)(e, t) || (0, c.Z)();
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(2781),
          i = n(7090),
          a = n(2327),
          c = n(4501);
      },
      3696: function (e, t, n) {
        "use strict";
        function r(e) {
          return (0, o.Z)(e) || (0, i.Z)(e) || (0, a.Z)(e) || (0, c.Z)();
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(1764),
          i = n(5253),
          a = n(2327),
          c = n(2646);
      },
      1352: function (e, t, n) {
        "use strict";
        function r(e) {
          var t = (function (e, t) {
            if ("object" !== (0, o.Z)(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== (0, o.Z)(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === (0, o.Z)(t) ? t : String(t);
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(9675);
      },
      9675: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      2327: function (e, t, n) {
        "use strict";
        function r(e, t) {
          if (e) {
            if ("string" == typeof e) return (0, o.Z)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, o.Z)(e, t)
                : void 0
            );
          }
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(4400);
      },
      4909: function (e, t, n) {
        "use strict";
        function r(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              function n() {
                return (0, c.Z)(e, arguments, (0, o.Z)(this).constructor);
              }
              if (null === e || !(0, a.Z)(e)) return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                (0, i.Z)(n, e)
              );
            }),
            r(e)
          );
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var o = n(3538),
          i = n(9384),
          a = n(3043),
          c = n(3009);
      },
    },
    o = {};
  (e.m = r),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, { a: n }), n;
    }),
    (e.d = function (t, n) {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.f = {}),
    (e.e = function (t) {
      return Promise.all(
        Object.keys(e.f).reduce(function (n, r) {
          return e.f[r](t, n), n;
        }, [])
      );
    }),
    (e.u = function (e) {
      return (
        "fingerprinted/js/" +
        {
          1: "elements-affirm-modal",
          209: "elements-affirm-message",
          259: "elements-afterpay-clearpay-modal",
          404: "orders-outer",
          428: "payment-intent-outer-actions-cardimageverification",
          429: "elements-unified-message",
          557: "elements-unified-message-modal",
          578: "elements-afterpay-clearpay-message",
          913: "trusted-types-checker",
        }[e] +
        "-" +
        {
          1: "0d7dc393e2a3cc8231d6c04985a7ba15",
          209: "02d0930b82b013d72b71a8e5d431d4d1",
          259: "9e4dac5053110187ee5e74bf8e2ef6f5",
          404: "e1519c8344d59fa6931a02e37d1c9af0",
          428: "f5e1764b412971516c452102decd5333",
          429: "363df3718d74ec2c412dde4511d80674",
          557: "43f7263bf68961ee3d8698aa3d12b18a",
          578: "648072a13dd9cc56365470fe2aaba670",
          913: "239db17d86d6320632b024ca9e43ba9c",
        }[e] +
        ".js"
      );
    }),
    (e.miniCssF = function () {}),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t = {}),
    (n = "stripe-js-v3:"),
    (e.l = function (r, o, i) {
      if (t[r]) t[r].push(o);
      else {
        var a, c;
        if (void 0 !== i)
          for (
            var s = document.getElementsByTagName("script"), u = 0;
            u < s.length;
            u++
          ) {
            var l = s[u];
            if (
              l.getAttribute("src") == r ||
              l.getAttribute("data-webpack") == n + i
            ) {
              a = l;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          e.nc && a.setAttribute("nonce", e.nc),
          a.setAttribute("data-webpack", n + i),
          (a.src = r)),
          (t[r] = [o]);
        var p = function (e, n) {
            (a.onerror = a.onload = null), clearTimeout(d);
            var o = t[r];
            if (
              (delete t[r],
              a.parentNode && a.parentNode.removeChild(a),
              o &&
                o.forEach(function (e) {
                  return e(n);
                }),
              e)
            )
              return e(n);
          },
          d = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: a }),
            12e4
          );
        (a.onerror = p.bind(null, a.onerror)),
          (a.onload = p.bind(null, a.onload)),
          c && document.head.appendChild(a);
      }
    }),
    (e.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (e.p = "https://js.stripe.com/v3/"),
    (function () {
      var t = { 734: 0 };
      e.f.j = function (n, r) {
        var o = e.o(t, n) ? t[n] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (e, r) {
              o = t[n] = [e, r];
            });
            r.push((o[2] = i));
            var a = e.p + e.u(n),
              c = new Error();
            e.l(
              a,
              function (r) {
                if (e.o(t, n) && (0 !== (o = t[n]) && (t[n] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (c.message =
                    "Loading chunk " + n + " failed.\n(" + i + ": " + a + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = a),
                    o[1](c);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = function (n, r) {
          var o,
            i,
            a = r[0],
            c = r[1],
            s = r[2],
            u = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in c) e.o(c, o) && (e.m[o] = c[o]);
            if (s) s(e);
          }
          for (n && n(r); u < a.length; u++)
            (i = a[u]), e.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
        },
        r = (window.webpackChunkStripeJSouter =
          window.webpackChunkStripeJSouter || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      function t(e, n, r) {
        return (
          (t =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = (0, Ht.Z)(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(n) : o.value;
                  }
                }),
          t(e, n, r || e)
        );
      }
      var n,
        r,
        o,
        i,
        a,
        c = e(8489),
        s = e(3696),
        u = e(7853),
        l = e(4531),
        p = e(6222),
        d = e(508),
        m = e(9043),
        f = e(5679),
        h = e(6148),
        _ = e(1020),
        y = e(8992),
        v = e(1873),
        g = e(7412),
        b = e(1002),
        w = e(9294),
        k = e(6617),
        E = e(3840),
        S = e(7792),
        P = e(2024),
        A = e(8812),
        C = e(9439),
        I = e(276),
        N = function (e, t) {
          var n = e.reduce(function (e, n) {
            var r = (function (e, t) {
                var n = e.indexOf(":");
                if (-1 === n)
                  throw new A.No(
                    "Invalid css declaration in file from "
                      .concat(t, ': "')
                      .concat(e, '"')
                  );
                var r = e.slice(0, n).trim(),
                  o = I.Pp[r];
                if (!o)
                  throw new A.No(
                    "Unsupported css property in file from "
                      .concat(t, ': "')
                      .concat(r, '"')
                  );
                return { property: o, value: e.slice(n + 1).trim() };
              })(n, t),
              o = r.property,
              i = r.value;
            return (0, c.Z)((0, c.Z)({}, e), {}, (0, p.Z)({}, o, i));
          }, {});
          return (
            ["family", "src"].forEach(function (e) {
              if (!n[e])
                throw new A.No(
                  "Missing css property in file from "
                    .concat(t, ': "')
                    .concat(I.QL[e], '"')
                );
            }),
            n
          );
        },
        T = function (e) {
          return (0, C.h)({ url: e, method: "GET" })
            .then(function (e) {
              return e.responseText;
            })
            .then(function (t) {
              var n = (function (e, t) {
                var n = e.match(/@font-face[ ]?{[^}]*}/g);
                if (!n)
                  throw new A.No(
                    "No @font-face rules found in file from ".concat(t)
                  );
                return n;
              })(t, e);
              return n.map(function (t) {
                var n,
                  r = (function (e, t) {
                    var n = e.replace(/\/\*.*\*\//g, "").trim(),
                      r = (
                        n.length && /;$/.test(n) ? n : "".concat(n, ";")
                      ).match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
                    if (!r)
                      throw new A.No(
                        "Found @font-face rule containing no valid font-properties in file from ".concat(
                          t
                        )
                      );
                    return r;
                  })((n = t.match(/@font-face[ ]?{([^}]*)}/)) ? n[1] : "", e);
                return N(r, e);
              });
            });
        },
        M = /https?:\/\/([^/]*)\/[^:]*/g,
        R = function (e, t, n, r) {
          var o,
            i,
            a,
            c = e._isUserError || "IntegrationError" === e.name;
          throw (
            (t &&
              !c &&
              t.report("fatal.uncaught_error", {
                iframe: !1,
                name: e.name,
                element: "outer",
                message: e.message || e.description,
                fileName: e.fileName,
                lineNumber: e.lineNumber,
                columnNumber: e.columnNumber,
                stack:
                  e.stack &&
                  ((o = e.stack),
                  (i = o.match(M)),
                  (a = o),
                  i &&
                    i.forEach(function (e) {
                      -1 === e.indexOf("https://js.stripe.com") &&
                        (a = a.replace(e, "<external url>"));
                    }),
                  a.substring(0, 1e3)),
                inPromise: n,
                apiMethodName: r,
              }),
            e)
          );
        },
        O = function (e, t, n) {
          return function (r) {
            try {
              return e.call(this, r);
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        j = function (e, t, n) {
          return function (r, o) {
            try {
              return e.call(this, r, o);
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        Z = function (e, t, n) {
          return function () {
            var r = this;
            try {
              return e.call(this).catch(function (e) {
                return R(e, t || (r && r._controller), !0, n);
              });
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        x = function (e, t, n) {
          return function (r) {
            var o = this;
            try {
              return e.call(this, r).catch(function (e) {
                return R(e, t || (o && o._controller), !0, n);
              });
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        L = function (e, t, n) {
          return function (r, o) {
            var i = this;
            try {
              return e.call(this, r, o).catch(function (e) {
                return R(e, t || (i && i._controller), !0, n);
              });
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        B = function (e, t, n) {
          return function (r, o, i) {
            var a = this;
            try {
              return e.call(this, r, o, i).catch(function (e) {
                return R(e, t || (a && a._controller), !0, n);
              });
            } catch (e) {
              return R(e, t || (this && this._controller), !1, n);
            }
          };
        },
        D = e(9083),
        q = function (e, t) {
          var n,
            r =
              ("string" == typeof (n = e) &&
                (0, P.sE)(Object.keys(D.YA), function (e) {
                  return e === n;
                })) ||
              null;
          if (
            !r ||
            !(function (e, t) {
              var n = S.MJ[e];
              return !n || (0, S.uN)(t, n);
            })(r, t)
          ) {
            var o = "string" == typeof e ? e : typeof e;
            throw new A.No(
              "A valid Element name must be provided. Valid Elements are:\n  "
                .concat(
                  Object.keys(D.YA)
                    .filter(function (e) {
                      return !D.YA[e].beta;
                    })
                    .join(", "),
                  "; you passed: "
                )
                .concat(o, ".")
            );
          }
        },
        F = function e() {
          var t = this;
          (0, u.Z)(this, e),
            (this._emit = function (e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              var i = t._callbacks[e] || [];
              return (
                i.forEach(function (n) {
                  var o = n.fn;
                  if (o._isUserCallback)
                    try {
                      o.apply(void 0, r);
                    } catch (n) {
                      throw (
                        ((n._isUserError = !0),
                        "checkout" === e &&
                          t._cancelCheckout &&
                          t._cancelCheckout(
                            n.message ||
                              "An unexpected error has occurred. Please refresh the page and try again."
                          ),
                        n)
                      );
                    }
                  else o.apply(void 0, r);
                }),
                t
              );
            }),
            (this._once = function (e, n) {
              return t._on(
                e,
                function r() {
                  t._off(e, r), n.apply(void 0, arguments);
                },
                n
              );
            }),
            (this._removeAllListeners = function () {
              return (t._callbacks = {}), t;
            }),
            (this._on = function (e, n, r) {
              return (
                (t._callbacks[e] = t._callbacks[e] || []),
                t._callbacks[e].push({ original: r, fn: n }),
                t
              );
            }),
            (this._validateUserOn = function () {}),
            (this._userOn = function (e, n) {
              if ("string" != typeof e)
                throw new A.No(
                  "When adding an event listener, the first argument should be a string event name."
                );
              if ("function" != typeof n)
                throw new A.No(
                  "When adding an event listener, the second argument should be a function callback."
                );
              return (
                t._validateUserOn(e, n), (n._isUserCallback = !0), t._on(e, n)
              );
            }),
            (this._hasRegisteredListener = function (e) {
              return t._callbacks[e] && t._callbacks[e].length > 0;
            }),
            (this._off = function (e, n) {
              if (n) {
                for (var r, o = t._callbacks[e], i = 0; i < o.length; i++)
                  if ((r = o[i]).fn === n || r.original === n) {
                    o.splice(i, 1);
                    break;
                  }
              } else delete t._callbacks[e];
              return t;
            }),
            (this._callbacks = {});
          var n,
            r,
            o,
            i = j(this._userOn),
            a = j(this._off),
            c = j(this._once),
            s = O(this._hasRegisteredListener),
            l = O(this._removeAllListeners),
            p =
              ((n = this._emit),
              function () {
                try {
                  for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                  )
                    t[i] = arguments[i];
                  return n.call.apply(n, [this].concat(t));
                } catch (e) {
                  return R(e, r || (this && this._controller), !1, o);
                }
              });
          (this.on = this.addListener = this.addEventListener = i),
            (this.off = this.removeListener = this.removeEventListener = a),
            (this.once = c),
            (this.hasRegisteredListener = s),
            (this.removeAllListeners = l),
            (this.emit = p);
        },
        U = e(6589),
        G = e(4245),
        Y = {
          applePay: "applePay",
          googlePay: "googlePay",
          browserCard: "browserCard",
          link: "link",
        },
        H = function (e, t) {
          return e.indexOf(t) >= 0;
        },
        z = function () {
          return Object.keys(Y);
        },
        K = "40px",
        J = {
          invalid_coupon_code: "invalid_coupon_code",
          expired_coupon_code: "expired_coupon_code",
        },
        W = (0, c.Z)(
          {
            success: "success",
            fail: "fail",
            invalid_shipping_address: "invalid_shipping_address",
          },
          J
        ),
        V = (0, c.Z)(
          {
            fail: "fail",
            invalid_payer_name: "invalid_payer_name",
            invalid_payer_email: "invalid_payer_email",
            invalid_payer_phone: "invalid_payer_phone",
            invalid_shipping_address: "invalid_shipping_address",
          },
          J
        ),
        X = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
        Q = (0, c.Z)({ success: "success" }, V),
        $ = { merchantCapabilities: ["supports3DS"], displayItems: [] },
        ee = (0, v.mC)({ amount: v.MZ, label: v.Z_, pending: (0, v.jt)(v.Xg) }),
        te = (0, v.mC)({ amount: v.Bi, label: v.Z_, pending: (0, v.jt)(v.Xg) }),
        ne = (0, v.mC)({
          amount: v.Bi,
          label: v.Z_,
          pending: (0, v.jt)(v.Xg),
          id: (0, v.Wc)(v.Z_, function () {
            return (0, g.To)("shippingOption");
          }),
          detail: (0, v.Wc)(v.Z_, function () {
            return "";
          }),
        }),
        re = (0, v.mC)({ major: v.Rx, minor: v.Rx }),
        oe = v.kw.apply(void 0, (0, s.Z)(Object.keys(X))),
        ie = (0, v.mC)({ origin: v.Z_, name: v.Z_ }),
        ae = (0, v.ci)({
          __merchantDetails: (0, v.jt)(ie),
          __supportsCouponCode: (0, v.jt)(v.Xg),
          __couponCode: (0, v.jt)(v.Z_),
          country: (0, v.jt)(v.hN),
          currency: (0, v.jt)(v.cV),
          displayItems: (0, v.jt)((0, v.CT)(te)),
          shippingOptions: (0, v.jt)((0, v.uw)("id")((0, v.CT)(ne))),
          total: (0, v.jt)(ee),
          blockedCardBrands: (0, v.jt)(
            (0, v.CT)(v.kw.apply(void 0, (0, s.Z)(I.iw)))
          ),
        }),
        ce = Object.keys(J),
        se = (0, v.mC)({
          displayItems: (0, v.jt)((0, v.CT)(te)),
          shippingOptions: (0, v.jt)((0, v.uw)("id")((0, v.CT)(ne))),
          total: (0, v.jt)(ee),
          status: function (e, t) {
            if (-1 !== ce.indexOf(e))
              return v.kw.apply(void 0, (0, s.Z)(ce))(e, t);
            var n = Object.keys(W).filter(function (e) {
              return -1 === ce.indexOf(e);
            });
            return v.kw.apply(void 0, (0, s.Z)(n))(
              -1 !==
                [
                  "invalid_payer_name",
                  "invalid_payer_email",
                  "invalid_payer_phone",
                ].indexOf(e)
                ? "fail"
                : e,
              t
            );
          },
          errorMessage: (0, v.jt)(v.Z_),
        }),
        ue = function (e, t) {
          if (-1 !== ce.indexOf(e))
            return v.kw.apply(void 0, (0, s.Z)(ce))(e, t);
          var n = Object.keys(Q).filter(function (e) {
            return -1 === ce.indexOf(e);
          });
          return v.kw.apply(void 0, (0, s.Z)(n))(e, t);
        },
        le = function (e) {
          var t = [];
          return window.ApplePaySession
            ? (H(e, Y.applePay) && t.push("APPLE_PAY"),
              H(e, Y.link) && t.push("LINK"),
              t)
            : (H(e, Y.link) && t.push("LINK"),
              H(e, Y.googlePay) &&
                (t.push("GOOGLE_PAY"), w.sV && t.push("BROWSER")),
              H(e, Y.browserCard) &&
                -1 === t.indexOf("BROWSER") &&
                t.push("BROWSER"),
              t);
        },
        pe = function () {
          try {
            return window.location.origin === window.top.location.origin;
          } catch (e) {
            return !1;
          }
        },
        de = (0, G.HP)(function (e) {
          return window.ApplePaySession.canMakePaymentsWithActiveCard(e);
        }),
        me = function (e) {
          if (!window.ApplePaySession) return !1;
          try {
            return window.ApplePaySession.supportsVersion(e);
          } catch (e) {
            return !1;
          }
        },
        fe = function (e, t, n, r) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 2,
            i = arguments.length > 5 ? arguments[5] : void 0;
          if ("https:" !== window.location.protocol) return U.J.resolve(!1);
          var a = Math.max(2, o);
          if (window.ApplePaySession) {
            if (pe()) {
              if (window.ApplePaySession.supportsVersion(a)) {
                var c = t ? [e, t] : [e],
                  s = "merchant.".concat(c.join("."), ".stripe");
                if (i)
                  return de(s).then(function (o) {
                    if (
                      (r("pr.apple_pay.can_make_payment_native_response", {
                        available: o,
                      }),
                      n && !o && window.console)
                    ) {
                      var i = t
                        ? "or stripeAccount parameter (".concat(t, ") ")
                        : "";
                      window.console.warn(
                        "Either you do not have a card saved to your Wallet or the current domain ("
                          .concat(e, ") ")
                          .concat(
                            i,
                            "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                          )
                      );
                    }
                    return o;
                  });
                var u = window.ApplePaySession.canMakePayments();
                if (n && !u && window.console) {
                  var l = t
                    ? "or stripeAccount parameter (".concat(t, ") ")
                    : "";
                  window.console.warn(
                    "The current domain ("
                      .concat(e, ") ")
                      .concat(
                        l,
                        "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain."
                      )
                  );
                }
                return U.J.resolve(u);
              }
              return (
                n &&
                  window.console &&
                  window.console.warn(
                    "This version of Safari does not support ApplePay JS version ".concat(
                      a,
                      "."
                    )
                  ),
                U.J.resolve(!1)
              );
            }
            return U.J.resolve(!1);
          }
          return U.J.resolve(!1);
        },
        he =
          ((n = {}),
          (0, p.Z)(n, I.rM.VISA, "visa"),
          (0, p.Z)(n, I.rM.MASTERCARD, "masterCard"),
          (0, p.Z)(n, I.rM.AMEX, "amex"),
          (0, p.Z)(n, I.rM.DISCOVER, "discover"),
          (0, p.Z)(n, I.rM.JCB, "jcb"),
          (0, p.Z)(n, I.rM.UNIONPAY, "chinaUnionPay"),
          (0, p.Z)(n, I.rM.DINERS, null),
          (0, p.Z)(n, "MAESTRO", "maestro"),
          (0, p.Z)(n, "CARTES_BANCAIRES", "cartesBancaires"),
          n),
        _e =
          ((r = {}),
          (0, p.Z)(r, I.rM.VISA, "VISA"),
          (0, p.Z)(r, I.rM.MASTERCARD, "MASTERCARD"),
          (0, p.Z)(r, I.rM.AMEX, "AMEX"),
          (0, p.Z)(r, I.rM.DISCOVER, "DISCOVER"),
          (0, p.Z)(r, I.rM.JCB, "JCB"),
          (0, p.Z)(r, I.rM.DINERS, null),
          [
            "AT",
            "AU",
            "BE",
            "CA",
            "CH",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "HK",
            "IE",
            "IT",
            "JP",
            "LT",
            "LU",
            "LV",
            "MX",
            "NL",
            "NO",
            "NZ",
            "PL",
            "PT",
            "SE",
            "SG",
            "US",
          ]),
        ye = function (e, t, n) {
          var r = [];
          return (
            -1 !== _e.indexOf(e) && r.push(I.rM.AMEX),
            ("US" === e || t) &&
              r.push.apply(r, [I.rM.DISCOVER, I.rM.DINERS, I.rM.JCB]),
            r.push.apply(r, [I.rM.MASTERCARD, I.rM.VISA]),
            r.filter(function (e) {
              return -1 === n.indexOf(e);
            })
          );
        },
        ve = function (e, t, n) {
          return ye(e, t, n).reduce(function (e, t) {
            var n = he[t];
            return n && e.push(n), e;
          }, []);
        },
        ge = e(6241),
        be = function (e, t) {
          return {
            amount: (0, ge.Fe)(e.amount, t.currency),
            label: e.label,
            type: e.pending ? "pending" : "final",
          };
        },
        we = function (e, t, n) {
          return new window.ApplePayError(e, t, n);
        },
        ke = function (e) {
          return function (t) {
            return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null;
          };
        },
        Ee =
          ((o = {}),
          (0, p.Z)(o, Q.success, 0),
          (0, p.Z)(o, Q.fail, 1),
          (0, p.Z)(o, Q.invalid_payer_name, 2),
          (0, p.Z)(o, Q.invalid_shipping_address, 3),
          (0, p.Z)(o, Q.invalid_payer_phone, 4),
          (0, p.Z)(o, Q.invalid_payer_email, 4),
          o),
        Se =
          ((i = {}),
          (0, p.Z)(i, Q.success, function () {
            return null;
          }),
          (0, p.Z)(i, Q.fail, function () {
            return null;
          }),
          (0, p.Z)(i, Q.invalid_payer_name, function () {
            return we("billingContactInvalid", "name");
          }),
          (0, p.Z)(i, Q.invalid_shipping_address, function () {
            return we("shippingContactInvalid", "postalAddress");
          }),
          (0, p.Z)(i, Q.invalid_payer_phone, function () {
            return we("shippingContactInvalid", "phoneNumber");
          }),
          (0, p.Z)(i, Q.invalid_payer_email, function () {
            return we("shippingContactInvalid", "emailAddress");
          }),
          (0, p.Z)(i, Q.invalid_coupon_code, function (e) {
            return we("couponCodeInvalid", void 0, e);
          }),
          (0, p.Z)(i, Q.expired_coupon_code, function (e) {
            return we("couponCodeExpired", void 0, e);
          }),
          i),
        Pe =
          ((a = {}),
          (0, p.Z)(a, X.pickup, "storePickup"),
          (0, p.Z)(a, X.shipping, "shipping"),
          (0, p.Z)(a, X.delivery, "delivery"),
          a),
        Ae = {
          total: function (e) {
            return be(e.total, e);
          },
          lineItems: function (e) {
            return e.displayItems
              ? e.displayItems.map(function (t) {
                  return be(t, e);
                })
              : [];
          },
          shippingMethods: function (e) {
            return e.shippingOptions
              ? e.shippingOptions.map(function (t) {
                  return (function (e, t) {
                    return {
                      amount: (0, ge.Fe)(e.amount, t.currency),
                      label: e.label,
                      detail: e.detail,
                      identifier: e.id,
                    };
                  })(t, e);
                })
              : [];
          },
          applicationData: function (e) {
            return e.applicationData || null;
          },
          supportsCouponCode: function (e) {
            return e.__supportsCouponCode || !1;
          },
          couponCode: function (e) {
            return e.__supportsCouponCode ? e.__couponCode : "";
          },
        },
        Ce = {
          shippingType: function (e) {
            var t = e.shippingType;
            if (!t) return null;
            var n = Pe[t];
            if (void 0 !== n) return n;
            throw new A.No("Invalid value for shippingType: ".concat(t));
          },
          requiredBillingContactFields: function (e) {
            return e.requestPayerName ? ["postalAddress"] : null;
          },
          requiredShippingContactFields: function (e) {
            var t = [];
            return (
              e.requestShipping && t.push("postalAddress"),
              e.requestPayerEmail && t.push("email"),
              e.requestPayerPhone && t.push("phone"),
              t.length ? t : null
            );
          },
          countryCode: ke("country"),
          currencyCode: ke("currency"),
          merchantCapabilities: function (e) {
            var t = e.merchantCapabilities || $.merchantCapabilities;
            return (
              e.__betas &&
                (0, S.uN)(e.__betas, "cup_apple_pay_beta_1") &&
                t.push("supportsEMV"),
              t
            );
          },
          supportedNetworks: function (e) {
            var t = ve(
              e.country,
              e.jcbEnabled || !1,
              e.blockedCardBrands || []
            );
            return (
              me(4) &&
                -1 === (e.blockedCardBrands || []).indexOf("mastercard") &&
                t.push("maestro"),
              e.__betas &&
                (0, S.uN)(e.__betas, "cup_apple_pay_beta_1") &&
                -1 === (e.blockedCardBrands || []).indexOf("unionpay") &&
                t.push("chinaUnionPay"),
              me(4) &&
                e.__betas &&
                (0, S.uN)(e.__betas, "cartes_bancaires_apple_pay_beta_1") &&
                "eur" === e.currency &&
                t.unshift("cartesBancaires"),
              t
            );
          },
        },
        Ie = {
          status: function (e) {
            var t = Ee[e.status];
            return me(3) && t > 1 ? 1 : t;
          },
          error: function (e) {
            return me(3) ? Se[e.status](e.errorMessage) : null;
          },
        },
        Ne = (0, c.Z)((0, c.Z)({}, Ae), Ce),
        Te = (0, c.Z)((0, c.Z)({}, Ae), Ie),
        Me = function (e) {
          return Object.keys(Te).reduce(function (t, n) {
            var r = (0, Te[n])(e);
            return null !== r
              ? (0, c.Z)((0, c.Z)({}, t), {}, (0, p.Z)({}, n, r))
              : t;
          }, {});
        },
        Re = function (e) {
          return "string" == typeof e ? e : null;
        },
        Oe = function (e) {
          return e ? Re(e.phoneNumber) : null;
        },
        je = function (e) {
          return e ? Re(e.emailAddress) : null;
        },
        Ze = function (e) {
          return e
            ? [e.givenName, e.familyName]
                .filter(function (e) {
                  return e && "string" == typeof e;
                })
                .join(" ")
            : null;
        },
        xe = function (e) {
          var t = e.addressLines,
            n = e.countryCode,
            r = e.postalCode,
            o = e.administrativeArea,
            i = e.locality,
            a = e.phoneNumber,
            c = Re(n);
          return {
            addressLine: Array.isArray(t)
              ? t.reduce(function (e, t) {
                  return "string" == typeof t ? [].concat((0, s.Z)(e), [t]) : e;
                }, [])
              : [],
            country: c ? c.toUpperCase() : "",
            postalCode: Re(r) || "",
            recipient: Ze(e) || "",
            region: Re(o) || "",
            city: Re(i) || "",
            phone: Re(a) || "",
            sortingCode: "",
            dependentLocality: "",
            organization: "",
          };
        },
        Le = function (e, t) {
          var n = e.identifier,
            r = e.label;
          return t.filter(function (e) {
            return e.id === n && e.label === r;
          })[0];
        },
        Be = function (e, t) {
          var n = e.shippingContact,
            r = e.shippingMethod,
            o = e.billingContact;
          return {
            shippingOption:
              r && t.shippingOptions && t.shippingOptions.length
                ? Le(r, t.shippingOptions)
                : null,
            shippingAddress: n ? xe(n) : null,
            payerEmail: je(n),
            payerPhone: Oe(n),
            payerName: Ze(o),
            walletName: "applePay",
            methodName: "apple-pay",
          };
        },
        De = e(9620),
        qe = {
          austria: "AT",
          sterreich: "AT",
          csterreich: "AT",
          au: "AU",
          australia: "AU",
          belgium: "BE",
          br: "BR",
          brasil: "BR",
          brazil: "BR",
          ca: "CA",
          canada: "CA",
          ch: "CH",
          schweiz: "CH",
          switzerland: "CH",
          china: "CN",
          czechrepublic: "CZ",
          de: "DE",
          deutschland: "DE",
          germany: "DE",
          danmark: "DK",
          denmark: "DK",
          es: "ES",
          espaa: "ES",
          spain: "ES",
          finland: "FI",
          suomi: "FI",
          fr: "FR",
          hk: "HK",
          hongkong: "HK",
          england: "GB",
          gb: "GB",
          uk: "GB",
          unitedkingdom: "GB",
          scotland: "GB",
          wales: "GB",
          it: "IT",
          italy: "IT",
          italia: "IT",
          japan: "JP",
          lietuva: "LT",
          luxembourg: "LU",
          netherlands: "NL",
          nederland: "NL",
          norway: "NO",
          poland: "PL",
          polska: "PL",
          russia: "RU",
          saudiarabia: "SA",
          se: "SE",
          sweden: "SE",
          sverige: "SE",
          singapore: "SG",
          us: "US",
          usa: "US",
          unitedstatesofamerica: "US",
          unitedstates: "US",
          estadosunidos: "US",
        },
        Fe = function (e, t) {
          if (e.country && "string" == typeof e.country) {
            var n,
              r = e.country.toLowerCase().replace(/[^a-z]+/g, "");
            return (
              e.countryCode
                ? "string" == typeof e.countryCode &&
                  (n = e.countryCode.toUpperCase())
                : (n = qe[r]) || t(),
              (0, c.Z)((0, c.Z)({}, e), {}, { countryCode: n })
            );
          }
          return e;
        },
        Ue = function (e) {
          var t = e.recurringPaymentRequest,
            n = e.currency,
            r = e.pending,
            o = e.defaultBillingAgreement,
            i = void 0 === o ? "" : o,
            a = e.warn;
          if (t) {
            var s = t.paymentDescription,
              u = t.managementURL,
              l = t.regularBilling,
              p = t.billingAgreement;
            return (
              (function () {
                var e = window.navigator.userAgent,
                  t = /iPad|iPhone/i.test(e),
                  n =
                    /^((?!chrome|android).)*safari/i.test(e) &&
                    !/SamsungBrowser/.test(e);
                if (t) {
                  var r =
                      window.navigator.userAgent.match(
                        /OS (\d+)_(\d+)(_\d+)? like Mac OS X/
                      ) || [],
                    o = parseInt(r[1], 10),
                    i = parseInt(r[2], 10);
                  return 16 === o && i < 2;
                }
                if (n) {
                  var a = e.match(/Version\/(\d+)\.(\d+)(\.\d+)?/) || [],
                    c = parseInt(a[1], 10),
                    s = parseInt(a[2], 10);
                  return 16 === c && s < 2;
                }
                return !1;
              })() &&
                !p &&
                (a(
                  "You did not specify a `billingAgreement` as part of your `applePay.recurringPaymentRequest`, and you are on Safari 16.0 or 16.1. Due to a bug in Safari 16.0-16.1, we autofilled a default billing agreement for you. This will not cause problems with your Stripe integration, but you may wish to customize this text by specifying your own `billingAgreement` text."
                ),
                (p = i)),
              {
                paymentDescription: s,
                regularBilling: (0, c.Z)(
                  (0, c.Z)({}, l),
                  {},
                  {
                    paymentTiming: "recurring",
                    type: r ? "pending" : "final",
                    amount: (0, ge.Fe)(l.amount, n),
                  }
                ),
                billingAgreement: p,
                managementURL: u,
              }
            );
          }
        },
        Ge = function (e, t) {
          return e && "object" == typeof e ? t(e) : null;
        },
        Ye = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this._wasCompleted = !1),
              (this._onEvent = function () {}),
              (this.setEventHandler = function (e) {
                n._onEvent = e;
              }),
              (this.canMakePayment = function () {
                return fe(
                  window.location.hostname,
                  n._authentication.accountId,
                  (0, De.lO)(n._authentication.apiKey) === De.Kl.test,
                  n._report,
                  n._minimumVersion,
                  !0
                ).then(function (e) {
                  return { available: e };
                });
              }),
              (this.update = function (e) {
                (n._initialPaymentRequest = (0, P.PM)(
                  n._paymentRequestOptions,
                  e
                )),
                  n._initializeSessionState();
              }),
              (this.show = function () {
                var e;
                n._wasCompleted && n._report("pr.show_called_after_completion"),
                  n._initializeSessionState();
                try {
                  e = new window.ApplePaySession(
                    n._minimumVersion,
                    (function (e) {
                      var t = (0, c.Z)((0, c.Z)({}, $), e);
                      return Object.keys(Ne).reduce(function (e, n) {
                        var r = (0, Ne[n])(t);
                        return null !== r
                          ? (0, c.Z)((0, c.Z)({}, e), {}, (0, p.Z)({}, n, r))
                          : e;
                      }, {});
                    })(n._paymentRequestOptions)
                  );
                } catch (e) {
                  throw "Must create a new ApplePaySession from a user gesture handler." ===
                    e.message
                    ? new A.No(
                        "show() must be called from a user gesture handler (such as a click handler, after the user clicks a button)."
                      )
                    : e;
                }
                (n._privateSession = e),
                  n._setupSession(e, n._usesButtonElement()),
                  e.begin(),
                  (n._isShowing = !0);
              }),
              (this.abort = function () {
                n._privateSession && n._privateSession.abort();
              }),
              (this._warn = function () {}),
              (this._report = function (e, t) {
                n._controller.report(
                  e,
                  (0, c.Z)(
                    (0, c.Z)({}, t),
                    {},
                    {
                      backingLibrary: "APPLE_PAY",
                      usesButtonElement: n._usesButtonElement(),
                    }
                  )
                );
              }),
              (this._validateMerchant = function (e, t) {
                return function (r) {
                  n._controller.action
                    .createApplePaySession({
                      data: {
                        validation_url: r.validationURL,
                        domain_name: window.location.hostname,
                        display_name: n._paymentRequestOptions.total.label,
                      },
                      usesButtonElement: t,
                    })
                    .then(function (t) {
                      if (n._isShowing)
                        switch (t.type) {
                          case "object":
                            e.completeMerchantValidation(
                              JSON.parse(t.object.session)
                            );
                            break;
                          case "error":
                            n._handleValidationError(e)(t.error);
                            break;
                          default:
                            (0, v.Rz)(t);
                        }
                    }, n._handleValidationError(e));
                };
              }),
              (this._handleValidationError = function (e) {
                return function (t) {
                  n._report("error.pr.apple_pay.session_creation_failed", {
                    error: t,
                  }),
                    e.abort();
                  var r = t.message;
                  "string" == typeof r && n._controller.warn(r);
                };
              }),
              (this._paymentAuthorized = function (e) {
                return function (t) {
                  var r = t.payment,
                    o = n._usesButtonElement()
                      ? I.Yj.paymentRequestButton
                      : null;
                  n._controller.action
                    .tokenizeWithData({
                      type: "apple_pay",
                      elementName: o,
                      tokenData: (0, c.Z)(
                        (0, c.Z)({}, r),
                        {},
                        {
                          billingContact: Ge(
                            r.billingContact,
                            n._normalizeContact
                          ),
                        }
                      ),
                      mids: n._mids,
                    })
                    .then(function (t) {
                      if ("error" === t.type)
                        me(14)
                          ? e.abort()
                          : e.completePayment(
                              window.ApplePaySession.STATUS_FAILURE
                            ),
                          n._report("error.pr.create_token_failed", {
                            error: t.error,
                          }),
                          n._onEvent({
                            type: "__private_do_not_use_tokenerror",
                            payload: { error: t.error },
                          });
                      else {
                        var o = Ge(r.shippingContact, n._normalizeContact),
                          i = Ge(r.billingContact, n._normalizeContact);
                        o &&
                          n._paymentRequestOptions.requestShipping &&
                          !o.countryCode &&
                          e.completePayment(
                            window.ApplePaySession
                              .STATUS_INVALID_SHIPPING_POSTAL_ADDRESS
                          );
                        var a = Be(
                          { shippingContact: o, billingContact: i },
                          n._paymentRequestOptions
                        );
                        n._onToken(e)(
                          (0, c.Z)(
                            (0, c.Z)({}, a),
                            {},
                            {
                              shippingOption: n._privateShippingOption,
                              token: t.object,
                            }
                          )
                        );
                      }
                    });
                };
              }),
              (this._normalizeContact = function (e) {
                return Fe(e, function () {
                  n._report("warn.pr.apple_pay.missing_country_code", {
                    country: e.country,
                  });
                });
              }),
              (this._onToken = function (e) {
                return function (t) {
                  n._onEvent({
                    type: "paymentresponse",
                    payload: (0, c.Z)(
                      (0, c.Z)({}, t),
                      {},
                      { complete: O(n._completePayment(e)) }
                    ),
                  });
                };
              }),
              (this._completePayment = function (e) {
                return function (t) {
                  "success" === t && (n._wasCompleted = !0),
                    (n._paymentRequestOptions = (0, P.PM)(
                      n._paymentRequestOptions,
                      { status: t }
                    ));
                  var r = Me(n._paymentRequestOptions),
                    o = r.status,
                    i = r.error;
                  n._isShowing &&
                    (i
                      ? e.completePayment({ status: o, errors: [i] })
                      : o !== window.ApplePaySession.STATUS_FAILURE
                      ? e.completePayment(o)
                      : me(14)
                      ? e.abort()
                      : e.completePayment(o)),
                    (0 === o || (1 === o && null == i)) &&
                      ((n._isShowing = !1),
                      n._onEvent && n._onEvent({ type: "close" }));
                };
              }),
              (this._paymentMethodSelected = function (e) {
                return function (t) {
                  n._onEvent({
                    type: "__private_do_not_use_billingaddresschange",
                    payload: {
                      billingAddress: t.paymentMethod.billingContact
                        ? xe(
                            n._normalizeContact(t.paymentMethod.billingContact)
                          )
                        : {
                            addressLine: [],
                            country: "",
                            postalCode: "",
                            recipient: "",
                            region: "",
                            city: "",
                            phone: "",
                            sortingCode: "",
                            dependentLocality: "",
                            organization: "",
                          },
                      updateWith: O(n._completePaymentMethodSelection(e)),
                    },
                  });
                };
              }),
              (this._shippingContactSelected = function (e) {
                return function (t) {
                  n._onEvent({
                    type: "shippingaddresschange",
                    payload: {
                      shippingAddress: xe(
                        n._normalizeContact(t.shippingContact)
                      ),
                      updateWith: O(n._completeShippingContactSelection(e)),
                    },
                  });
                };
              }),
              (this._completePaymentMethodSelection = function (e) {
                return function (t) {
                  n._paymentRequestOptions = (0, P.PM)(
                    n._paymentRequestOptions,
                    t
                  );
                  var r = Me(n._paymentRequestOptions),
                    o = r.total,
                    i = { newLineItems: r.lineItems, newTotal: o };
                  e.completePaymentMethodSelection(i);
                };
              }),
              (this._completeShippingContactSelection = function (e) {
                return function (t) {
                  var r;
                  (n._paymentRequestOptions = (0, P.PM)(
                    n._paymentRequestOptions,
                    t
                  )),
                    (null === (r = n._paymentRequestOptions.shippingOptions) ||
                    void 0 === r
                      ? void 0
                      : r.length) &&
                      (n._privateShippingOption =
                        n._paymentRequestOptions.shippingOptions[0]);
                  var o = Me(n._paymentRequestOptions),
                    i = o.status,
                    a = o.shippingMethods,
                    c = o.total,
                    s = o.lineItems,
                    u = o.error;
                  if (u)
                    e.completeShippingContactSelection({
                      newTotal: c,
                      newLineItems: s,
                      newShippingMethods: a,
                      errors: [u],
                    });
                  else if (me(14) && 1 === i) {
                    var l = we("shippingContactInvalid", "postalAddress");
                    e.completeShippingContactSelection({
                      newTotal: c,
                      newLineItems: s,
                      newShippingMethods: a,
                      errors: [l],
                    });
                  } else e.completeShippingContactSelection(i, a, c, s);
                };
              }),
              (this._shippingMethodSelected = function (e) {
                return function (t) {
                  if (n._paymentRequestOptions.shippingOptions) {
                    var r = Le(
                      t.shippingMethod,
                      n._paymentRequestOptions.shippingOptions
                    );
                    (n._privateShippingOption = r),
                      n._onEvent({
                        type: "shippingoptionchange",
                        payload: {
                          shippingOption: r,
                          updateWith: O(n._completeShippingMethodSelection(e)),
                        },
                      });
                  }
                };
              }),
              (this._completeShippingMethodSelection = function (e) {
                return function (t) {
                  n._paymentRequestOptions = (0, P.PM)(
                    n._paymentRequestOptions,
                    t
                  );
                  var r = Me(n._paymentRequestOptions),
                    o = r.status,
                    i = r.total,
                    a = r.lineItems;
                  e.completeShippingMethodSelection(o, i, a);
                };
              }),
              (this._couponCodeChanged = function (e) {
                return function (t) {
                  var r = t.couponCode;
                  (n._privateCouponCode = r),
                    n._onEvent({
                      type: "__private_do_not_use_couponcodechange",
                      payload: {
                        couponCode: r,
                        updateWith: O(n._completeCouponCodeChange(e)),
                      },
                    });
                };
              }),
              (this._completeCouponCodeChange = function (e) {
                return function (t) {
                  n._paymentRequestOptions = (0, P.PM)(
                    n._paymentRequestOptions,
                    t
                  );
                  var r = Me(n._paymentRequestOptions),
                    o = r.total,
                    i = r.lineItems,
                    a = r.error;
                  e.completeCouponCodeChange({
                    newTotal: o,
                    newLineItems: i,
                    errors: a ? [a] : void 0,
                  });
                };
              });
            var r = t.controller,
              o = t.authentication,
              i = t.mids,
              a = t.options,
              s = t.usesButtonElement,
              l = t.listenerRegistry;
            (this._controller = r),
              (this._authentication = o),
              (this._mids = i),
              (this._minimumVersion = a.__minApplePayVersion || 2),
              (this._usesButtonElement = s),
              (this._listenerRegistry = l),
              (this._initialPaymentRequest = a),
              (this._isShowing = !1),
              this._initializeSessionState();
          }
          return (
            (0, l.Z)(e, [
              {
                key: "_initializeSessionState",
                value: function () {
                  var e = btoa(
                    this._authentication.accountId
                      ? ""
                          .concat(this._authentication.apiKey, ":")
                          .concat(this._authentication.accountId)
                      : this._authentication.apiKey
                  );
                  (this._paymentRequestOptions = (0, c.Z)(
                    (0, c.Z)((0, c.Z)({}, $), this._initialPaymentRequest),
                    {},
                    { status: Q.success, applicationData: e }
                  )),
                    (this._privateSession = null),
                    (this._privateCouponCode = null),
                    (this._privateShippingOption = null);
                  var t = this._paymentRequestOptions.shippingOptions;
                  (null == t ? void 0 : t.length) &&
                    (this._privateShippingOption = t[0]);
                },
              },
              {
                key: "_setupSession",
                value: function (e, t) {
                  var n = this;
                  this._listenerRegistry.addEventListener(
                    e,
                    "validatemerchant",
                    O(this._validateMerchant(e, t))
                  ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "paymentauthorized",
                      O(this._paymentAuthorized(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "cancel",
                      O(function () {
                        (n._isShowing = !1),
                          n._onEvent({ type: "cancel" }),
                          n._onEvent({ type: "close" });
                      })
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "paymentmethodselected",
                      O(this._paymentMethodSelected(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "shippingcontactselected",
                      O(this._shippingContactSelected(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "shippingmethodselected",
                      O(this._shippingMethodSelected(e))
                    ),
                    this._listenerRegistry.addEventListener(
                      e,
                      "couponcodechanged",
                      O(this._couponCodeChanged(e))
                    );
                },
              },
            ]),
            e
          );
        })(),
        He = Ye,
        ze = e(755),
        Ke = {
          display: "block",
          position: "fixed",
          "z-index": "2147483647",
          background: "rgba(40,40,40,0)",
          transition: "background 400ms ease",
          "will-change": "background",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "0",
          padding: "0",
        },
        Je = (0, c.Z)(
          (0, c.Z)({}, Ke),
          {},
          { background: "rgba(40,40,40,0.75)" }
        ),
        We = function e(t) {
          var n = this,
            r = t.lockScrolling,
            o = t.lockFocus,
            i = t.lockFocusOn,
            a = t.listenerRegistry;
          (0, u.Z)(this, e),
            (this.domElement = document.createElement("div")),
            (this._runOnHide = []),
            (this.mount = function () {
              var e = (0, b.Xq)();
              (n.domElement.style.display = "none"),
                e.contains(n.domElement) ||
                  e.insertBefore(n.domElement, e.firstChild);
            }),
            (this.show = function () {
              if (((0, b.yq)(n.domElement, Ke), n._lockScrolling)) {
                var e = (0, b.MV)();
                n._runOnHide.push(e);
              }
              if (n._lockFocus) {
                var t = (0, b.W3)(n._lockFocusOn).restoreFocus;
                n._runOnHide.push(t);
              }
            }),
            (this.fadeIn = function () {
              setTimeout(function () {
                (0, b.yq)(n.domElement, Je);
              });
            }),
            (this.fadeOut = function () {
              return new U.J(function (e) {
                (0, b.yq)(n.domElement, Ke),
                  setTimeout(e, 500),
                  n._listenerRegistry.addEventListener(
                    n.domElement,
                    "transitionend",
                    e
                  );
              }).then(function () {
                for (
                  n.domElement.style.display = "none";
                  n._runOnHide.length;

                ) {
                  var e;
                  null === (e = n._runOnHide.pop()) || void 0 === e || e();
                }
              });
            }),
            (this.unmount = function () {
              var e = (0, b.Xq)();
              e.contains(n.domElement) && e.removeChild(n.domElement);
            }),
            (this._lockScrolling = !!r),
            (this._lockFocus = !!o),
            (this._lockFocusOn = i || null),
            (this._listenerRegistry = a);
        },
        Ve = null;
      var Xe = function (e) {
          return (
            "https:" === window.location.protocol &&
            !(!w.Wt && !w.j3) &&
            !w.Bh &&
            !(!e.isCheckout && !window.PaymentRequest) &&
            !(!e.isCheckout && w.sV)
          );
        },
        Qe = function e(t) {
          var n = this;
          (0, u.Z)(this, e),
            (this._mids = null),
            (this._frame = null),
            (this._initFrame = function (e) {
              var t = n._controller.createHiddenFrame(
                ze.NC.PAYMENT_REQUEST_GOOGLE_PAY,
                {
                  authentication: n._authentication,
                  mids: n._mids,
                  origin: n._origin,
                }
              );
              t.send({ action: "stripe-pr-initialize", payload: { data: e } }),
                n._initFrameEventHandlers(t),
                (n._frame = t);
            }),
            (this._initFrameEventHandlers = function (e) {
              e._on("pr-cancel", function () {
                n._onEvent({ type: "cancel" });
              }),
                e._on("pr-close", function () {
                  n._backdrop.fadeOut().then(function () {
                    n._backdrop.unmount();
                  }),
                    n._onEvent({ type: "close" });
                }),
                e._on("pr-error", function (e) {
                  n._onEvent({
                    type: "error",
                    payload: {
                      errorMessage: e.errorMessage,
                      errorCode: e.errorCode,
                    },
                  });
                }),
                e._on("pr-callback", function (t) {
                  var r = t.event,
                    o = t.options,
                    i = t.nonce;
                  switch (r) {
                    case "paymentresponse":
                      n._handlePaymentResponse(e, o, i);
                      break;
                    case "shippingaddresschange":
                      n._handleShippingAddressChange(e, o, i);
                      break;
                    case "shippingoptionchange":
                      n._handleShippingOptionChange(e, o, i);
                      break;
                    default:
                      throw new Error("Unexpected event name: ".concat(r));
                  }
                });
            }),
            (this._handlePaymentResponse = function (e, t, r) {
              n._onEvent({
                type: "paymentresponse",
                payload: (0, c.Z)(
                  (0, c.Z)({}, t),
                  {},
                  {
                    complete: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: { status: t } },
                      });
                    },
                  }
                ),
              });
            }),
            (this._handleShippingAddressChange = function (e, t, r) {
              n._onEvent({
                type: "shippingaddresschange",
                payload: (0, c.Z)(
                  (0, c.Z)({}, t),
                  {},
                  {
                    updateWith: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: t },
                      });
                    },
                  }
                ),
              });
            }),
            (this._handleShippingOptionChange = function (e, t, r) {
              n._onEvent({
                type: "shippingoptionchange",
                payload: (0, c.Z)(
                  (0, c.Z)({}, t),
                  {},
                  {
                    updateWith: function (t) {
                      e.send({
                        action: "stripe-pr-callback-complete",
                        payload: { nonce: r, data: t },
                      });
                    },
                  }
                ),
              });
            }),
            (this._destroy = function () {
              n._frame && (n._frame.destroy(), (n._frame = null));
            }),
            (this.setEventHandler = function (e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function () {
              if (!Xe({ isCheckout: n._isCheckout }))
                return U.J.resolve({ available: !1 });
              if (!n._frame) throw new Error("Frame not initialized.");
              var e,
                t = n._frame;
              return ((e = function () {
                return t.action.checkCanMakePayment().then(function (e) {
                  return !0 === e.available;
                });
              }),
              null !== Ve
                ? U.J.resolve(Ve)
                : e().then(function (e) {
                    return (Ve = e);
                  })).then(function (e) {
                return { available: e };
              });
            }),
            (this.show = function () {
              n._frame &&
                (n._frame.send({
                  delegate: "payment",
                  action: "stripe-pr-show",
                  payload: {
                    data: {
                      usesButtonElement: n._usesButtonElement(),
                      stripeJsId: n._controller._stripeJsId,
                      mids: n._controller.mids(),
                    },
                  },
                }),
                n._backdrop.mount(),
                n._backdrop.show(),
                n._backdrop.fadeIn());
            }),
            (this.update = function (e) {
              n._frame &&
                n._frame.send({
                  action: "stripe-pr-update",
                  payload: { data: e },
                });
            }),
            (this.abort = function () {
              n._frame &&
                n._frame.send({ action: "stripe-pr-abort", payload: {} });
            }),
            (this._controller = t.controller),
            (this._authentication = t.authentication),
            (this._mids = t.mids),
            (this._origin = t.origin),
            (this._usesButtonElement = t.usesButtonElement),
            (this._backdrop = new We({
              lockScrolling: !1,
              lockFocus: !0,
              lockFocusOn: null,
              listenerRegistry: t.listenerRegistry,
            })),
            (this._isCheckout = !!t.options.__isCheckout),
            Xe({ isCheckout: this._isCheckout }) &&
              this._controller &&
              (this._controller.action.fetchLocale({ locale: "auto" }),
              this._initFrame(t.options));
        },
        $e = (function () {
          if (!window.PaymentRequest) return null;
          if (/CriOS\/59/.test(navigator.userAgent)) return null;
          if (
            /.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)
          )
            return null;
          if (w.xz) return null;
          var e = window.PaymentRequest;
          return (
            e.prototype.canMakePayment ||
              (e.prototype.canMakePayment = function () {
                return U.J.resolve(!1);
              }),
            e
          );
        })(),
        et = null,
        tt = function e(t) {
          var n = this;
          (0, u.Z)(this, e),
            (this._onEvent = function () {}),
            (this.setEventHandler = function (e) {
              n._onEvent = e;
            }),
            (this.canMakePayment = function () {
              return ((e = n._prFrame),
              (0, De.lO)(n._authentication.apiKey),
              De.Kl.test,
              "https:" !== window.location.protocol
                ? U.J.resolve(!1)
                : null !== et
                ? U.J.resolve(et)
                : $e && e
                ? e.action.checkCanMakePayment().then(function (e) {
                    var t = e.available;
                    return (et = !0 === t);
                  })
                : U.J.resolve(!1)).then(function (e) {
                return { available: e };
              });
              var e;
            }),
            (this.update = function (e) {
              var t = n._prFrame;
              t && t.send({ action: "stripe-pr-update", payload: { data: e } });
            }),
            (this.show = function () {
              if (!n._prFrame)
                throw new A.No(
                  "Payment Request is not available in this browser."
                );
              n._prFrame.send({
                delegate: "payment",
                action: "stripe-pr-show",
                payload: {
                  data: {
                    usesButtonElement: n._usesButtonElement(),
                    stripeJsId: n._controller._stripeJsId,
                    mids: n._controller.mids(),
                  },
                },
              });
            }),
            (this.abort = function () {
              n._prFrame &&
                n._prFrame.send({ action: "stripe-pr-abort", payload: {} });
            }),
            (this._setupPrFrame = function (e, t) {
              e.send({ action: "stripe-pr-initialize", payload: { data: t } }),
                e._on("pr-cancel", function () {
                  n._onEvent({ type: "cancel" });
                }),
                e._on("pr-close", function () {
                  n._onEvent({ type: "close" });
                }),
                e._on("pr-error", function (e) {
                  n._onEvent({
                    type: "error",
                    payload: {
                      errorMessage: e.message || "",
                      errorCode: e.code || "",
                    },
                  });
                }),
                e._on("pr-callback", function (t) {
                  var r = t.event,
                    o = t.nonce,
                    i = t.options;
                  switch (r) {
                    case "token":
                      n._onEvent({
                        type: "paymentresponse",
                        payload: (0, c.Z)(
                          (0, c.Z)({}, i),
                          {},
                          {
                            complete: function (t) {
                              e.send({
                                action: "stripe-pr-callback-complete",
                                payload: { data: { status: t }, nonce: o },
                              });
                            },
                          }
                        ),
                      });
                      break;
                    case "shippingaddresschange":
                      n._onEvent({
                        type: "shippingaddresschange",
                        payload: {
                          shippingAddress: i.shippingAddress,
                          updateWith: function (t) {
                            e.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: o, data: t },
                            });
                          },
                        },
                      });
                      break;
                    case "shippingoptionchange":
                      n._onEvent({
                        type: "shippingoptionchange",
                        payload: {
                          shippingOption: i.shippingOption,
                          updateWith: function (t) {
                            e.send({
                              action: "stripe-pr-callback-complete",
                              payload: { nonce: o, data: t },
                            });
                          },
                        },
                      });
                      break;
                    default:
                      throw new Error(
                        "Unexpected event from PaymentRequest inner: ".concat(r)
                      );
                  }
                });
            });
          var r = t.authentication,
            o = t.controller,
            i = t.mids,
            a = t.origin,
            s = t.usesButtonElement,
            l = t.options;
          if (
            ((this._authentication = r),
            (this._controller = o),
            (this._usesButtonElement = s),
            $e && "https:" === window.location.protocol)
          ) {
            this._controller.action.fetchLocale({ locale: "auto" });
            var p = this._controller.createHiddenFrame(
              ze.NC.PAYMENT_REQUEST_BROWSER,
              { authentication: r, mids: i, origin: a }
            );
            this._setupPrFrame(p, l), (this._prFrame = p);
          } else this._prFrame = null;
        },
        nt = e(7904),
        rt = e(1164),
        ot = function (e) {
          for (var t = "", n = 0; n < e.length; ++n)
            t += String.fromCharCode(5 ^ e.charCodeAt(n));
          return t;
        },
        it = function (e) {
          return encodeURIComponent(
            btoa(
              ot(
                (function (e) {
                  var t = 3 - (e.length % 3),
                    n = new Array(t + 1).join(" ");
                  return "".concat(e).concat(n);
                })(e)
              )
            )
          );
        },
        at = new RegExp(
          "^(?:4[0-9]{15}|(?:5[1-5]|2[2-7])[0-9]{14}|3[47][0-9]{13}|6[045][0-9]{14}|3[089][0-9]{14}|36[0-9]{12}|35[0-9]{14}|(?:62|81)[0-9]{11,}|(?:50|63)[0-9]{14})$"
        ),
        ct = (function () {
          function e() {
            var t = this;
            (0, u.Z)(this, e),
              (this._state = "pending"),
              (this._state = "pending"),
              (this.promise = new U.J(function (e, n) {
                (t._resolve = e), (t._reject = n);
              })),
              this.promise.then(
                function () {
                  t._state = "resolved";
                },
                function () {
                  t._state = "rejected";
                }
              );
          }
          return (
            (0, l.Z)(e, [
              {
                key: "resolve",
                value: function (e) {
                  this._resolve(e);
                },
              },
              {
                key: "reject",
                value: function (e) {
                  this._reject(e);
                },
              },
              {
                key: "isResolved",
                value: function () {
                  return "resolved" === this._state;
                },
              },
              {
                key: "isRejected",
                value: function () {
                  return "rejected" === this._state;
                },
              },
              {
                key: "isPending",
                value: function () {
                  return "pending" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        st = [
          "card_element_link_payment_data_removed",
          "eject",
          "get_initial_state",
          "link_prb_payment_data",
          "link_prb_shipping_address_change",
          "link_prb_shipping_option_change",
          "log_out_in_elements",
          "log_out_in_card_element",
          "ready_for_messages",
          "heartbeat",
        ],
        ut = (function () {
          function e(t, n) {
            var r = this;
            (0, u.Z)(this, e),
              (this.callbacks = []),
              (this.listen = function (e) {
                0 === r.callbacks.length &&
                  window.addEventListener("message", r.handleMessage),
                  r.callbacks.push(e);
              }),
              (this.stopAllListeners = function () {
                window.removeEventListener("message", r.handleMessage),
                  (r.callbacks.length = 0);
              }),
              (this.postMessage = function (t) {
                if (r.target) {
                  var n = (0, c.Z)(
                    (0, c.Z)({}, t),
                    {},
                    (0, p.Z)({}, e.MESSAGE_TAG, !0)
                  );
                  r.target.postMessage(n, r.targetOrigin);
                }
              }),
              (this.handleMessage = function (e) {
                r.isValidPopupMessageEvent(e) &&
                  r.callbacks.forEach(function (t) {
                    return t(e.data);
                  });
              }),
              (this.getTarget = t),
              (this.targetOrigin = n);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "target",
                get: function () {
                  return this.getTarget();
                },
              },
              {
                key: "isValidPopupMessageEvent",
                value: function (t) {
                  return (
                    ("*" === this.targetOrigin ||
                      t.origin === this.targetOrigin) &&
                    t.source === this.target &&
                    t.data &&
                    "object" == typeof t.data &&
                    e.MESSAGE_TAG in t.data
                  );
                },
              },
            ]),
            e
          );
        })();
      ut.MESSAGE_TAG = "__stripeJsV3Popup";
      var lt = function (e) {
          var t = (0, k.P$)("https://js.stripe.com/v3/"),
            n = (0, k.P$)("https://checkout.link.co/");
          if (!t || !n)
            throw new Error(
              "Could not validate origin due to a misconfigured environment."
            );
          return e !== t && e !== n;
        },
        pt = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this.messageQueue = []),
              (this.isDisconnected = !1),
              (this.runOnDisconnect = []),
              (this.callbacks = {}),
              (this.deferredMessageResponses = {}),
              (this.onClose = function () {}),
              (this.onDisconnect = function () {}),
              (this.on = function (e, t) {
                var r;
                ((r = n.callbacks)[e] || (r[e] = [])).push(t);
              }),
              (this.off = function (e, t) {
                var r;
                n.callbacks[e] =
                  null === (r = n.callbacks[e]) || void 0 === r
                    ? void 0
                    : r.filter(function (e) {
                        return e !== t;
                      });
              }),
              (this.send = function (e, t) {
                n.isDisconnected;
                var r = (0, g.Vj)(),
                  o = new ct();
                return (
                  (n.deferredMessageResponses[r] = o),
                  n.postMessage({ mode: "request", nonce: r, req: t, type: e }),
                  o.promise
                );
              }),
              (this.setNextHeartbeatTimeout = function (t) {
                var r =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                n.heartbeatTimeout && clearTimeout(n.heartbeatTimeout),
                  n.runOnDisconnect.push(function () {
                    n.heartbeatTimeout && clearTimeout(n.heartbeatTimeout);
                  }),
                  (n.heartbeatTimeout = setTimeout(function () {
                    r
                      ? (n.disconnect(), n.onDisconnect())
                      : n.setNextHeartbeatTimeout(e.HEARTBEAT_TIMEOUT, !0);
                  }, t));
              });
            var r = t.target,
              o = t.targetOrigin,
              i = t.isOpener,
              a =
                "function" == typeof r
                  ? r
                  : function () {
                      return r;
                    };
            if (
              ((this.transport = this.setupTransport(a, o)),
              (this.targetIsMerchant = lt(o)),
              (this.isMerchant = lt(window.location.origin)),
              i)
            ) {
              this.isTargetReadyForMessages = !1;
              var c = setInterval(function () {
                var e;
                (null === (e = a()) || void 0 === e ? void 0 : e.closed) &&
                  (n.onClose(), n.disconnect());
              }, 100);
              this.runOnDisconnect.push(function () {
                return clearInterval(c);
              }),
                this.runOnDisconnect.push(function () {
                  var e;
                  return null === (e = a()) || void 0 === e
                    ? void 0
                    : e.close();
                });
            } else
              (this.isTargetReadyForMessages = !0),
                this.postMessage({ type: "ready_for_messages", __private: !0 });
            this.sendRecurringHeartbeat(),
              this.setNextHeartbeatTimeout(e.INITIAL_HEARTBEAT_TIMEOUT);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "allowMessage",
                value: function (e) {
                  return (
                    (!this.targetIsMerchant && !this.isMerchant) ||
                    (function (e) {
                      return -1 !== st.indexOf(e);
                    })(e.type)
                  );
                },
              },
              {
                key: "sanitizeMessage",
                value: function (e) {
                  return this.targetIsMerchant || this.isMerchant
                    ? (0, P.l2)(e, function (e) {
                        return "string" != typeof e
                          ? e
                          : (function (e) {
                              if ("string" != typeof e) return !1;
                              var t = e
                                .replace(/[\s-]+/g, "")
                                .match(/\d{13,}/g);
                              return (
                                !!t &&
                                t.some(function (e) {
                                  return (
                                    at.test(e) &&
                                    (function (e) {
                                      for (
                                        var t = "0".charCodeAt(0),
                                          n = e.length % 2,
                                          r = 0,
                                          o = e.length - 1;
                                        o >= 0;
                                        --o
                                      ) {
                                        var i = o % 2 === n,
                                          a = e.charCodeAt(o) - t;
                                        i && (a *= 2),
                                          a > 9 && (a -= 9),
                                          (r += a);
                                      }
                                      return r % 10 == 0;
                                    })(e)
                                  );
                                })
                              );
                            })(e)
                          ? ""
                          : e;
                      })
                    : e;
                },
              },
              {
                key: "setupTransport",
                value: function (e, t) {
                  var n = this,
                    r = new ut(e, t);
                  return (
                    r.listen(function (e) {
                      n.allowMessage(e) &&
                        ("__private" in e
                          ? n.handlePrivateMessage(e)
                          : n.handleMessage(e));
                    }),
                    this.runOnDisconnect.push(function () {
                      return r.stopAllListeners();
                    }),
                    r
                  );
                },
              },
              {
                key: "handlePrivateMessage",
                value: function (t) {
                  var n = this;
                  switch (t.type) {
                    case "ready_for_messages":
                      (this.isTargetReadyForMessages = !0),
                        this.messageQueue.forEach(function (e) {
                          n.postMessage(e);
                        }),
                        (this.messageQueue.length = 0);
                      break;
                    case "heartbeat":
                      this.setNextHeartbeatTimeout(e.HEARTBEAT_TIMEOUT);
                      break;
                    default:
                      (0, v.Rz)(t);
                  }
                },
              },
              {
                key: "handleMessage",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    o = e.nonce;
                  switch (e.mode) {
                    case "request":
                      var i;
                      null === (i = this.callbacks[e.type]) ||
                        void 0 === i ||
                        i.forEach(function (t) {
                          (function (e) {
                            try {
                              return U.J.resolve(e());
                            } catch (e) {
                              return U.J.reject(e);
                            }
                          })(function () {
                            return t(e.req);
                          }).then(
                            function (t) {
                              r.postMessage({
                                mode: "response",
                                type: e.type,
                                nonce: o,
                                res: t,
                              });
                            },
                            function (t) {
                              r.postMessage({
                                mode: "error",
                                type: e.type,
                                nonce: o,
                                error: t,
                              });
                            }
                          );
                        });
                      break;
                    case "response":
                      null === (t = this.deferredMessageResponses[o]) ||
                        void 0 === t ||
                        t.resolve(e.res);
                      break;
                    case "error":
                      null === (n = this.deferredMessageResponses[o]) ||
                        void 0 === n ||
                        n.reject(e.error);
                      break;
                    default:
                      (0, v.Rz)(e);
                  }
                },
              },
              {
                key: "disconnect",
                value: function () {
                  this.runOnDisconnect.forEach(function (e) {
                    return e();
                  }),
                    (this.runOnDisconnect.length = 0),
                    (this.isDisconnected = !0);
                },
              },
              {
                key: "sendRecurringHeartbeat",
                value: function () {
                  var t = this;
                  !(function n() {
                    t.isDisconnected ||
                      (t.isTargetReadyForMessages &&
                        t.postMessage({ type: "heartbeat", __private: !0 }),
                      setTimeout(n, e.HEARTBEAT_INTERVAL));
                  })();
                },
              },
              {
                key: "postMessage",
                value: function (e) {
                  if (!this.isDisconnected && this.allowMessage(e)) {
                    var t = this.sanitizeMessage(e);
                    this.isTargetReadyForMessages
                      ? this.transport.postMessage(t)
                      : this.messageQueue.push(t);
                  }
                },
              },
            ]),
            e
          );
        })();
      (pt.HEARTBEAT_INTERVAL = 1e3),
        (pt.INITIAL_HEARTBEAT_TIMEOUT = 7500),
        (pt.HEARTBEAT_TIMEOUT = 2500);
      var dt,
        mt,
        ft = function (e, t, n) {
          var r,
            o,
            i,
            a,
            c,
            s,
            u,
            l,
            p =
              ((r = {
                outerHeight: window.outerHeight,
                outerWidth: window.outerWidth,
                screenY: window.screenY,
                screenX: window.screenX,
                popupHeight: t,
                popupWidth: n,
                availTop: window.screen.availTop || 0,
              }),
              (o = r.outerHeight),
              (i = r.outerWidth),
              (a = r.screenY),
              (c = r.screenX),
              (s = r.popupHeight),
              (u = r.popupWidth),
              {
                top:
                  (l = r.availTop) < 0
                    ? l + o / 2 + (Math.abs(l) + a) - s / 2
                    : o / 2 + a - s / 2,
                left: i / 2 + c - u / 2,
              }),
            d = (function (e) {
              return Object.keys(e)
                .map(function (t) {
                  return "".concat(t, "=").concat(e[t]);
                })
                .join();
            })({
              toolbar: "no",
              directories: "no",
              status: "no",
              scrollbars: "no",
              resizable: "no",
              copyhistory: "no",
              height: t,
              width: n,
              top: p.top,
              left: p.left,
            });
          return window.open(e, "Link", d);
        },
        ht = function (e) {
          var t = e.publishableKey,
            n = e.path,
            r = e.onClose,
            o = e.onDisconnect,
            i = e.height,
            a = e.width,
            c = e.handleOwnFocus,
            s = void 0 !== c && c,
            u = (function (e) {
              var t = e.popupRootUrl,
                n = e.stripeJsRootUrl,
                r = e.version,
                o = e.path,
                i = e.publishableKey,
                a = e.openedAt,
                c = (0, k.P$)(t);
              if (!c)
                throw new Error('Invalid popup root URL: "'.concat(t, '"'));
              var s = "?key=".concat(it(i), "&openedAt=").concat(a);
              if (t === n) {
                var u =
                  r && "unknown" !== r
                    ? "link-popup-".concat(r, ".html#")
                    : "link-popup.html#";
                return {
                  url: "".concat(t).concat(u).concat(o).concat(s),
                  origin: c,
                };
              }
              var l = r && "unknown" !== r ? "".concat(r, "/#") : "#";
              return {
                url: "".concat(t).concat(l).concat(o).concat(s),
                origin: c,
              };
            })({
              popupRootUrl: "https://checkout.link.co/",
              stripeJsRootUrl: I.Xk,
              version: I.XK,
              path: n,
              publishableKey: t,
              openedAt: Date.now(),
            }),
            l = u.url,
            p = u.origin,
            d = null,
            m = new pt({
              target: function () {
                return d;
              },
              targetOrigin: p,
              isOpener: !0,
            });
          return (
            (m.onDisconnect = o),
            (m.onClose = function () {
              s || window.focus(), r();
            }),
            (d = ft(l, i, a))
              ? {
                  messenger: m,
                  close: function () {
                    var e;
                    return null === (e = d) || void 0 === e
                      ? void 0
                      : e.close();
                  },
                  focus: function () {
                    var e;
                    return null === (e = d) || void 0 === e
                      ? void 0
                      : e.focus();
                  },
                }
              : null
          );
        },
        _t = function () {
          return (w.Wt || w.j3) && (0, w.gG)();
        },
        yt = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this.blockReopenOnShow = !1),
              (this.popup = null),
              (this.isDuringSuccessCushion = !1),
              (this.handleGetInitialState = function (e, t) {
                return function () {
                  var r = Date.now();
                  return (
                    n.controller.report("pr.link.popup_load", {
                      duration: r - t,
                    }),
                    n.getControllerData(e).then(function (e) {
                      var t = e.locale,
                        r = e.linkConfigResult;
                      if ("error" === r.type || null == r.object.link_settings)
                        throw new Error("Invalid LinkConfig result");
                      var o = r.object.link_settings,
                        i = o.merchant_info,
                        a = {
                          businessName: i.business_name,
                          country: i.country,
                        },
                        c = o.customer_info;
                      return {
                        publishableKey: n.authentication.apiKey,
                        stripeAccount: n.authentication.accountId,
                        merchantInfo: a,
                        customerInfo: c,
                        integrationType: "prb",
                        paymentRequestOptions: n.paymentRequestOptions,
                        locale: t,
                        stripeJsId: n.controller._stripeJsId,
                        mids: n.controller.mids(),
                        referrer: window.location.href.toString(),
                        elementsSessionId: null,
                        elementsAssignmentId: null,
                      };
                    })
                  );
                };
              }),
              (this.getControllerData = function (e) {
                return U.J.all([
                  n.controller.action.resolveLocale({ locale: e || "auto" }),
                  n.controller.action.retrieveLinkConfig(),
                  n.controller.action.checkForLinkClientSecret(),
                ]).then(function (e) {
                  var t = (0, nt.Z)(e, 3);
                  return {
                    locale: t[0],
                    linkConfigResult: t[1],
                    hasClientSecret: t[2],
                  };
                });
              }),
              (this.handleShippingOptionChange = function (e) {
                var t = e.shippingOption;
                return new U.J(function (e) {
                  n.onEvent({
                    type: "shippingoptionchange",
                    payload: { shippingOption: t, updateWith: e },
                  });
                });
              }),
              (this.handleShippingAddressChange = function (e) {
                var t = e.shippingAddress;
                return new U.J(function (e) {
                  n.onEvent({
                    type: "shippingaddresschange",
                    payload: { shippingAddress: t, updateWith: e },
                  });
                });
              }),
              (this.handlePaymentData = function (e) {
                var t = e.token,
                  r = e.payerName,
                  o = e.payerEmail,
                  i = e.payerPhone,
                  a = e.shippingAddress,
                  c = e.shippingOption;
                return (
                  (n.blockReopenOnShow = !0),
                  new U.J(function (e) {
                    n.onEvent({
                      type: "paymentresponse",
                      payload: {
                        token: t,
                        payerName: r,
                        payerEmail: o,
                        payerPhone: i,
                        shippingOption: c,
                        shippingAddress: a,
                        walletName: "link",
                        methodName: "link",
                        complete: function (t, r) {
                          var o;
                          ("success" !== t
                            ? (n.blockReopenOnShow = !1)
                            : ((n.isDuringSuccessCushion = !0),
                              setTimeout(function () {
                                n.isDuringSuccessCushion = !1;
                              }, 2e3)),
                          w.q$ && "success" === t) &&
                            (null === (o = n.popup) ||
                              void 0 === o ||
                              o.close(),
                            (n.popup = null));
                          e({ status: t, errorMessage: r });
                        },
                      },
                    });
                  })
                );
              }),
              (this.handleLogOutInElements = function () {
                return n.controller.action.logOutOfLinkInElements();
              }),
              (this.setEventHandler = function (e) {
                n._onEvent = e;
              }),
              (this.show = function (e) {
                var t = e.locale;
                if (!n.isDuringSuccessCushion) {
                  if (n.popup) {
                    if (!w.q$) return void n.popup.focus();
                    if (n.blockReopenOnShow) return;
                    n.popup.close();
                  }
                  var r = Date.now(),
                    o = ht({
                      publishableKey: n.authentication.apiKey,
                      path: "/pay",
                      height: 708,
                      width: 500,
                      onDisconnect: function () {
                        n.popup === o &&
                          (n.onEvent({ type: "close" }), (n.popup = null));
                      },
                      onClose: function () {
                        n.popup === o &&
                          (n.onEvent({ type: "close" }), (n.popup = null));
                      },
                    });
                  (n.popup = o),
                    n.popup
                      ? (n.popup.messenger.on(
                          "get_initial_state",
                          n.handleGetInitialState(t, r)
                        ),
                        n.popup.messenger.on(
                          "link_prb_payment_data",
                          n.handlePaymentData
                        ),
                        n.popup.messenger.on(
                          "link_prb_shipping_option_change",
                          n.handleShippingOptionChange
                        ),
                        n.popup.messenger.on(
                          "link_prb_shipping_address_change",
                          n.handleShippingAddressChange
                        ),
                        n.popup.messenger.on(
                          "log_out_in_elements",
                          n.handleLogOutInElements
                        ))
                      : n.controller.report("pr.link.popup_blocked");
                }
              }),
              (this.update = function (e) {
                e.__merchantDetails;
                var t = (0, d.Z)(e, ["__merchantDetails"]);
                n.paymentRequestOptions = (0, P.PM)(n.paymentRequestOptions, t);
              }),
              (this.abort = function () {
                n.popup && (n.popup.close(), (n.popup = null));
              }),
              (this.canMakePayment = function (e) {
                return _t() &&
                  (function (e) {
                    return !(
                      (e.blockedCardBrands && e.blockedCardBrands.length) ||
                      (e.__isCheckout && !e.__linkOnly)
                    );
                  })(n.paymentRequestOptions)
                  ? n
                      .getControllerData(e.locale)
                      .then(function (t) {
                        var r,
                          o = t.locale,
                          i = t.linkConfigResult,
                          a = t.hasClientSecret;
                        if (-1 !== rt.ud.indexOf(o)) return { available: !1 };
                        if ("error" === i.type) return { available: !1 };
                        var c = i.object,
                          s =
                            null === (r = c.experiments) || void 0 === r
                              ? void 0
                              : r.experiment_assignments;
                        return (c.link_available.payment_request_button &&
                          null != c.link_settings) ||
                          e.useCheckoutAvailabilityCheck
                          ? e.useCheckoutAvailabilityCheck &&
                            !c.link_available.checkout
                            ? { available: !1 }
                            : e.skipEnrollmentCheck
                            ? { available: !0, linkExperimentAssignments: s }
                            : (a &&
                                n.controller.report(
                                  "pr.link.has_client_secret"
                                ),
                              { available: a, linkExperimentAssignments: s })
                          : { available: !1 };
                      })
                      .then(function (e) {
                        return (
                          n.controller.report(
                            "pr.link.can_make_payment_native_response",
                            { available: e.available }
                          ),
                          e
                        );
                      })
                  : U.J.resolve({ available: !1 });
              }),
              (this.controller = t.controller),
              (this.authentication = t.authentication),
              (this.paymentRequestOptions = t.options),
              this.controller._controllerFrame._on(
                "elements-link-login",
                this.abort
              ),
              _t() && this.controller.action.retrieveLinkConfig();
          }
          return (
            (0, l.Z)(e, [
              {
                key: "onEvent",
                value: function (e) {
                  if (!this._onEvent)
                    throw new Error("Event handler has not been initialized");
                  this._onEvent(e);
                },
              },
            ]),
            e
          );
        })(),
        vt = yt,
        gt = e(9792),
        bt = !1,
        wt = (function (e) {
          function t(e) {
            var r;
            (0, u.Z)(this, t),
              ((r = n.call(this))._usedByButtonElement = null),
              (r._showCalledByButtonElement = !1),
              (r._isShowing = !1),
              (r._backingLibraries = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null,
                LINK: null,
              }),
              (r._activeBackingLibraryName = null),
              (r._buttonTypeName = null),
              (r._activeBackingLibrary = null),
              (r._canMakePaymentAvailability = {
                APPLE_PAY: null,
                GOOGLE_PAY: null,
                BROWSER: null,
                LINK: null,
              }),
              (r._canMakePaymentResolved = !1),
              (r._validateUserOn = function (e) {
                "string" == typeof e &&
                  (("source" === e &&
                    r._hasRegisteredListener("paymentmethod")) ||
                    ("paymentmethod" === e &&
                      r._hasRegisteredListener("source"))) &&
                  (r._report("pr.double_callback_registration"),
                  r._controller.warn(
                    "Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed."
                  ));
              }),
              (r._report = function (e, t) {
                r._controller.report(
                  e,
                  (0, c.Z)(
                    (0, c.Z)({}, t),
                    {},
                    {
                      activeBackingLibrary: r._activeBackingLibraryName,
                      usesButtonElement: r._usedByButtonElement || !1,
                      element: r._usedByButtonElement
                        ? "paymentRequestButton"
                        : null,
                      requestShipping: r._initialOptions
                        ? r._initialOptions.requestShipping || !1
                        : null,
                    }
                  )
                );
              }),
              (r._warn = function (e) {
                r._controller.warn(e);
              }),
              (r._registerElement = function () {
                r._usedByButtonElement = !0;
              }),
              (r._elementShow = function () {
                (r._showCalledByButtonElement = !0), r.show();
              }),
              (r._updateLocale = function (e) {
                r._locale = e;
              }),
              (r._initBackingLibraries = function (e) {
                r._queryStrategy.forEach(function (t) {
                  var n = {
                    controller: r._controller,
                    authentication: r._authentication,
                    mids: r._mids,
                    origin: window.location.origin,
                    options: e,
                    usesButtonElement: function () {
                      return !0 === r._usedByButtonElement;
                    },
                    listenerRegistry: r._listenerRegistry,
                  };
                  switch (t) {
                    case "APPLE_PAY":
                      (r._backingLibraries.APPLE_PAY = new He(n)),
                        r._backingLibraries.APPLE_PAY.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "GOOGLE_PAY":
                      (r._backingLibraries.GOOGLE_PAY = new Qe(n)),
                        r._backingLibraries.GOOGLE_PAY.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "LINK":
                      (r._backingLibraries.LINK = new vt(n)),
                        r._backingLibraries.LINK.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    case "BROWSER":
                      (r._backingLibraries.BROWSER = new tt(n)),
                        r._backingLibraries.BROWSER.setEventHandler(
                          r._handleInternalEvent
                        );
                      break;
                    default:
                      (0, v.Rz)(t);
                  }
                });
              }),
              (r._handleInternalEvent = function (e) {
                switch (e.type) {
                  case "paymentresponse":
                    r._emitPaymentResponse(e.payload);
                    break;
                  case "error":
                    r._report("error.pr.internal_error", { error: e.payload });
                    break;
                  case "close":
                    r._isShowing = !1;
                    break;
                  default:
                    r._emitExternalEvent(e);
                }
              }),
              (r._emitExternalEvent = function (e) {
                switch (e.type) {
                  case "cancel":
                    r._emit("cancel");
                    break;
                  case "__private_do_not_use_billingaddresschange":
                  case "__private_do_not_use_couponcodechange":
                    var t = e.type,
                      n = e.payload,
                      o = null,
                      i = !1,
                      a = !1,
                      s = function (e) {
                        if (a && i)
                          return (
                            r._report("pr.update_with_called_after_timeout", {
                              event: t,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds."
                            )
                          );
                        if (i)
                          return (
                            r._report("pr.update_with_double_call", {
                              event: t,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once."
                            )
                          );
                        o && clearTimeout(o),
                          (i = !0),
                          r._report("pr.update_with", { event: t });
                        var c = (0, v.Gu)(
                            se,
                            e || {},
                            "".concat(t, " callback")
                          ),
                          s = c.value;
                        c.warnings.forEach(function (e) {
                          return r._controller.warn(e);
                        });
                        var u = s;
                        u.total && (r._reportOnlyTotal = u.total),
                          n.updateWith(u);
                      };
                    if (r._hasRegisteredListener(e.type)) {
                      o = setTimeout(function () {
                        (a = !0),
                          r._report("pr.update_with_timed_out", { event: t }),
                          r._controller.warn(
                            'Timed out waiting for a call to updateWith(). If you listen to "'
                              .concat(
                                e.type,
                                '" events, then you must call event.updateWith in the "'
                              )
                              .concat(e.type, '" handler within 30 seconds.')
                          ),
                          s({ status: "fail" });
                      }, 29900);
                      try {
                        r._emit(
                          t,
                          (0, c.Z)((0, c.Z)({}, n), {}, { updateWith: s })
                        );
                      } catch (t) {
                        throw (
                          (r._report("pr.user_callback_error", {
                            event: e.type,
                            activeBackingLibrary: r._activeBackingLibraryName,
                            errorMessage:
                              "string" ==
                              typeof (null == t ? void 0 : t.message)
                                ? t.message
                                : "Unknown error occured: ".concat(t),
                          }),
                          t)
                        );
                      }
                    } else s({ status: "success" });
                    break;
                  case "shippingoptionchange":
                  case "shippingaddresschange":
                    var u = e.type,
                      l = e.payload,
                      p = null,
                      m = !1,
                      f = !1,
                      h = function (t) {
                        if (f && m)
                          return (
                            r._report("pr.update_with_called_after_timeout", {
                              event: u,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds."
                            )
                          );
                        if (m)
                          return (
                            r._report("pr.update_with_double_call", {
                              event: u,
                            }),
                            void r._controller.warn(
                              "Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once."
                            )
                          );
                        p && clearTimeout(p),
                          (m = !0),
                          r._report("pr.update_with", { event: u });
                        var n = (0, v.Gu)(
                            se,
                            t || {},
                            "".concat(u, " callback")
                          ),
                          o = n.value;
                        n.warnings.forEach(function (e) {
                          return r._controller.warn(e);
                        });
                        var i = o,
                          a = !1;
                        if (
                          r._initialOptions.__isCheckout &&
                          "APPLE_PAY" === r._activeBackingLibraryName &&
                          o.shippingOptions &&
                          1 === o.shippingOptions.length &&
                          0 === o.shippingOptions[0].amount
                        ) {
                          o.shippingOptions;
                          (i = (0, d.Z)(o, ["shippingOptions"])), (a = !0);
                        }
                        var c =
                          o.shippingOptions ||
                          r._initialOptions.shippingOptions;
                        if (
                          !(
                            a ||
                            "shippingaddresschange" !== e.type ||
                            o.status !== Q.success ||
                            (c && c.length)
                          )
                        )
                          throw new A.No(
                            "When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there."
                          );
                        i.total && (r._reportOnlyTotal = i.total),
                          l.updateWith(i);
                      };
                    if (r._hasRegisteredListener(e.type)) {
                      p = setTimeout(function () {
                        (f = !0),
                          r._report("pr.update_with_timed_out", { event: u }),
                          r._controller.warn(
                            'Timed out waiting for a call to updateWith(). If you listen to "'
                              .concat(
                                e.type,
                                '" events, then you must call event.updateWith in the "'
                              )
                              .concat(e.type, '" handler within 30 seconds.')
                          ),
                          h({ status: "fail" });
                      }, 29900);
                      try {
                        r._emit(
                          u,
                          (0, c.Z)((0, c.Z)({}, l), {}, { updateWith: h })
                        );
                      } catch (t) {
                        throw (
                          (r._report("pr.user_callback_error", {
                            event: e.type,
                            activeBackingLibrary: r._activeBackingLibraryName,
                            errorMessage:
                              "string" ==
                              typeof (null == t ? void 0 : t.message)
                                ? t.message
                                : "Unknown error occured: ".concat(t),
                          }),
                          t)
                        );
                      }
                    } else h({ status: "success" });
                    break;
                  case "token":
                  case "source":
                  case "paymentmethod":
                    var _ = e.type,
                      y = e.payload,
                      g = null,
                      b = !1,
                      w = !1,
                      k = function (e, t) {
                        if (b && w)
                          return (
                            r._report("pr.complete_called_after_timeout"),
                            void r._controller.warn(
                              "Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds."
                            )
                          );
                        if (w)
                          return (
                            r._report("pr.complete_double_call"),
                            void r._controller.warn(
                              "Call to complete() was ignored because it has already been called. Do not call complete more than once."
                            )
                          );
                        g && clearTimeout(g), (w = !0);
                        var n = (0, v.Gu)(
                            ue,
                            e,
                            "status for PaymentRequest completion"
                          ),
                          o = n.value;
                        if (
                          (n.warnings.forEach(function (e) {
                            return r._controller.warn(e);
                          }),
                          r._initialOptions.__isCheckout &&
                            r._initialOptions.__linkOnly &&
                            t &&
                            "fail" === o)
                        ) {
                          var i = (0, v.Gu)(
                              v.Z_,
                              t,
                              "error message for PaymentRequest completion"
                            ),
                            a = i.value;
                          i.warnings.forEach(function (e) {
                            return r._controller.warn(e);
                          }),
                            y.complete(o, a);
                        } else y.complete(o);
                      };
                    g = setTimeout(function () {
                      (b = !0),
                        r._report("pr.complete_timed_out"),
                        r._controller.warn(
                          'Timed out waiting for a call to complete(). Once you have processed the payment in the "'.concat(
                            e.type,
                            '" handler, you must call event.complete within 30 seconds.'
                          )
                        ),
                        k("fail");
                    }, 29900);
                    try {
                      r._emit(
                        _,
                        (0, c.Z)((0, c.Z)({}, y), {}, { complete: k })
                      );
                    } catch (e) {
                      throw (
                        (r._report("pr.user_callback_error", {
                          event: _,
                          activeBackingLibrary: r._activeBackingLibraryName,
                          errorMessage:
                            "string" == typeof (null == e ? void 0 : e.message)
                              ? e.message
                              : "Unknown error occured: ".concat(e),
                        }),
                        e)
                      );
                    }
                    break;
                  case "__private_do_not_use_tokenerror":
                    r._emit("__private_do_not_use_tokenerror", e.payload.error);
                    break;
                  default:
                    (0, v.Rz)(e);
                }
              }),
              (r._logExperimentExposure = function (e) {
                r._controller.report("experiment_exposure", {
                  experiment_name: e,
                });
              }),
              (r._maybeEmitPaymentResponse = function (e) {
                r._isShowing && r._emitExternalEvent(e);
              }),
              (r._emitPaymentResponse = function (e) {
                var t,
                  n = "other";
                r._initialOptions.__isCheckout
                  ? (n = "checkout")
                  : r._initialOptions.__isPaymentElement &&
                    (n = "payment_element"),
                  r._report("pr.payment_authorized", {
                    product: n,
                    amount:
                      null === (t = r._reportOnlyTotal) || void 0 === t
                        ? void 0
                        : t.amount,
                    currency: r._reportOnlyCurrency,
                  });
                var o = e.token,
                  i = (0, d.Z)(e, ["token"]),
                  a = i.payerEmail,
                  s = i.payerPhone,
                  u = i.complete,
                  l = r._showCalledByButtonElement
                    ? I.Yj.paymentRequestButton
                    : null;
                r._hasRegisteredListener("token") &&
                  ("googlePay" === i.walletName &&
                    r._controller.action.removeElementsExperimentId({
                      experimentKey: I.D3.elements_session,
                    }),
                  r._maybeEmitPaymentResponse({ type: "token", payload: e })),
                  r._hasRegisteredListener("paymentmethod")
                    ? r._controller.action
                        .createPaymentMethodWithData({
                          elementName: l,
                          type: "card",
                          paymentMethodData: {
                            card: { token: o.id },
                            billing_details: {
                              email:
                                r._initialOptions
                                  .__billingDetailsEmailOverride || a,
                              phone: s,
                            },
                          },
                          mids: null,
                        })
                        .then(function (e) {
                          "error" === e.type
                            ? e.error.code && "email_invalid" === e.error.code
                              ? u("invalid_payer_email")
                              : (r._report(
                                  "fatal.pr.token_to_payment_method_failed",
                                  { error: e.error, token: o.id }
                                ),
                                u("fail"))
                            : r._maybeEmitPaymentResponse({
                                type: "paymentmethod",
                                payload: (0, c.Z)(
                                  (0, c.Z)({}, i),
                                  {},
                                  { paymentMethod: e.object }
                                ),
                              });
                        })
                    : r._hasRegisteredListener("source") &&
                      r._controller.action
                        .createSourceWithData({
                          elementName: l,
                          type: "card",
                          sourceData: {
                            token: o.id,
                            owner: {
                              email:
                                r._initialOptions
                                  .__billingDetailsEmailOverride || a,
                              phone: s,
                            },
                          },
                          mids: null,
                        })
                        .then(function (e) {
                          "error" === e.type
                            ? e.error.code && "email_invalid" === e.error.code
                              ? u("invalid_payer_email")
                              : (r._report("fatal.pr.token_to_source_failed", {
                                  error: e.error,
                                  token: o.id,
                                }),
                                u("fail"))
                            : r._maybeEmitPaymentResponse({
                                type: "source",
                                payload: (0, c.Z)(
                                  (0, c.Z)({}, i),
                                  {},
                                  { source: e.object }
                                ),
                              });
                        });
              }),
              (r._canMakePaymentForBackingLibrary = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {
                          skipEnrollmentCheck: !1,
                          useCheckoutAvailabilityCheck: !1,
                        },
                  n = r._backingLibraries[e];
                if (!n)
                  throw new Error(
                    "Unexpectedly calling canMakePayment on uninitialized backing library."
                  );
                return U.J.race([
                  new U.J(function (e) {
                    return setTimeout(e, 1e4);
                  }).then(function () {
                    return { available: !1 };
                  }),
                  n.canMakePayment({
                    skipEnrollmentCheck: t.skipEnrollmentCheck,
                    useCheckoutAvailabilityCheck:
                      t.useCheckoutAvailabilityCheck,
                    locale: r._locale,
                  }),
                ]).then(function (t) {
                  var n = t.available,
                    o =
                      "LINK" === e && t.linkExperimentAssignments
                        ? t.linkExperimentAssignments
                        : null;
                  return (
                    (r._canMakePaymentAvailability = (0, c.Z)(
                      (0, c.Z)({}, r._canMakePaymentAvailability),
                      {},
                      (0, p.Z)({}, e, n)
                    )),
                    {
                      backingLibraryName: e,
                      available: n,
                      linkExperimentAssignments: o,
                    }
                  );
                });
              }),
              (r._isGooglePayOnAndroid = function () {
                var e = r._initialOptions.wallets,
                  t = e && -1 === e.indexOf("googlePay"),
                  n = !!r._canMakePaymentAvailability.BROWSER;
                return w.sV && !t && n;
              }),
              (r._constructCanMakePaymentResponse = function () {
                var e = r._isGooglePayOnAndroid();
                return {
                  applePay: !!r._canMakePaymentAvailability.APPLE_PAY,
                  googlePay: !!r._canMakePaymentAvailability.GOOGLE_PAY || e,
                  link: !!r._canMakePaymentAvailability.LINK,
                };
              }),
              (r.canMakePayment = O(function () {
                if (
                  (r._report("pr.can_make_payment"),
                  r._controller.action.cmpStatusChange({ cmpTriggered: !0 }),
                  r._canMakePaymentResolved)
                ) {
                  var e,
                    t =
                      null !== r._activeBackingLibrary
                        ? r._constructCanMakePaymentResponse()
                        : null;
                  return (
                    r._report("pr.can_make_payment_response", {
                      response: t,
                      cached: !0,
                      activeBackingLibrary: r._activeBackingLibrary,
                      amount:
                        null === (e = r._reportOnlyTotal) || void 0 === e
                          ? void 0
                          : e.amount,
                      currency: r._reportOnlyCurrency,
                    }),
                    (r._controller._cmpResult =
                      null === t ? "not_available" : "available"),
                    U.J.resolve(t)
                  );
                }
                if ("https:" !== window.location.protocol)
                  return (
                    bt ||
                      (r._controller.warn(
                        "If you are testing Apple Pay or Google Pay, you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details."
                      ),
                      (bt = !0)),
                    (r._canMakePaymentResolved = !0),
                    U.J.resolve(null)
                  );
                var n = r._queryStrategy.map(function (e) {
                  return function () {
                    return r._canMakePaymentForBackingLibrary(e);
                  };
                });
                -1 !== r._queryStrategy.indexOf("LINK") &&
                  (r._initialOptions.__linkOnly &&
                  r._initialOptions.__isCheckout
                    ? (n = [
                        function () {
                          return r._canMakePaymentForBackingLibrary("LINK", {
                            skipEnrollmentCheck: !0,
                            useCheckoutAvailabilityCheck: !0,
                          });
                        },
                      ])
                    : n.push(function () {
                        return r._canMakePaymentForBackingLibrary("LINK", {
                          skipEnrollmentCheck: !0,
                          useCheckoutAvailabilityCheck: !1,
                        });
                      }));
                var o = new gt.E();
                return (0, G.tN)(n, function (e) {
                  var t = e.backingLibraryName,
                    n = e.available;
                  return (
                    n &&
                      ((r._activeBackingLibraryName = t),
                      (r._activeBackingLibrary = r._backingLibraries[t]),
                      (r._buttonTypeName = r._activeBackingLibraryName),
                      r._isGooglePayOnAndroid() &&
                        (r._buttonTypeName = "GOOGLE_PAY")),
                    n
                  );
                }).then(function (e) {
                  var t,
                    n = new gt.E();
                  r._canMakePaymentResolved = !0;
                  var i = null;
                  return (
                    "SATISFIED" === e.type &&
                      (i = r._constructCanMakePaymentResponse()),
                    r._report("pr.can_make_payment_response", {
                      response: i,
                      cached: !1,
                      duration: o.getElapsedTime(n),
                      activeBackingLibrary: r._activeBackingLibrary,
                      amount:
                        null === (t = r._reportOnlyTotal) || void 0 === t
                          ? void 0
                          : t.amount,
                      currency: r._reportOnlyCurrency,
                    }),
                    i
                  );
                });
              })),
              (r.update = O(function (e) {
                var t;
                if (r._isShowing)
                  throw (
                    (r._report("pr.update_called_while_showing"),
                    new A.No(
                      "You cannot update Payment Request options while the payment sheet is showing."
                    ))
                  );
                var n = (0, v.Gu)(ae, e, "PaymentRequest update()"),
                  o = n.value,
                  i = n.warnings;
                r._report("pr.update"),
                  i.forEach(function (e) {
                    return r._warn(e);
                  }),
                  o.shippingOptions &&
                    !(null === (t = r._initialOptions) || void 0 === t
                      ? void 0
                      : t.requestShipping) &&
                    r._report("pr.update_shipping_options_without_shipping"),
                  o.total && (r._reportOnlyTotal = o.total),
                  o.currency && (r._reportOnlyCurrency = o.currency),
                  (0, P.VO)(r._backingLibraries).forEach(function (e) {
                    e && e.update(o);
                  });
              })),
              (r.show = O(function () {
                var e;
                if (
                  (r._usedByButtonElement &&
                    !r._showCalledByButtonElement &&
                    (r._report("pr.show_called_with_button"),
                    r._warn(
                      "Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet."
                    )),
                  !r._canMakePaymentResolved)
                )
                  throw (
                    (r._report("pr.show_called_before_can_make_payment"),
                    new A.No(
                      "You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show()."
                    ))
                  );
                if (!r._activeBackingLibrary)
                  throw (
                    (r._report("pr.show_called_with_can_make_payment_false"),
                    new A.No(
                      "Payment Request is not available in this browser."
                    ))
                  );
                "LINK" !== r._activeBackingLibraryName ||
                  r._initialOptions.__linkOnly ||
                  (r._usedByButtonElement ||
                    r._report("pr.show_called_with_link_custom_button"),
                  !r._showCalledByButtonElement &&
                    r._usedByButtonElement &&
                    r._report("pr.show_called_with_link_hybrid_button"));
                var t = r._activeBackingLibrary,
                  n = r._showCalledByButtonElement
                    ? "pr.show_from_element"
                    : "pr.show_from_custom";
                r._report(n),
                  r._report("pr.show", {
                    amount:
                      null === (e = r._reportOnlyTotal) || void 0 === e
                        ? void 0
                        : e.amount,
                    currency: r._reportOnlyCurrency,
                    listeners: Object.keys(r._callbacks).sort(),
                  }),
                  (r._isShowing = !0),
                  t.show({ locale: r._locale });
              })),
              (r.abort = O(function () {
                if (r._activeBackingLibrary) {
                  var e = r._activeBackingLibrary;
                  r._report("pr.abort"), e.abort();
                }
              })),
              (r.isShowing = function () {
                return r._isShowing;
              }),
              (r._controller = e.controller),
              (r._authentication = e.authentication),
              (r._mids = e.mids),
              (r._listenerRegistry = e.listenerRegistry);
            var o = (0, v.Gu)(
                (e.betas,
                (0, v.mC)({
                  displayItems: (0, v.jt)((0, v.CT)(te)),
                  shippingOptions: (0, v.jt)((0, v.uw)("id")((0, v.CT)(ne))),
                  wallets: (0, v.jt)(
                    (0, v.CT)(v.kw.apply(void 0, (0, s.Z)(z())))
                  ),
                  disableWallets: (0, v.jt)(
                    (0, v.CT)(v.kw.apply(void 0, (0, s.Z)(z())))
                  ),
                  blockedCardBrands: (0, v.jt)(
                    (0, v.CT)(v.kw.apply(void 0, (0, s.Z)(I.iw)))
                  ),
                  total: ee,
                  requestShipping: (0, v.jt)(v.Xg),
                  requestPayerName: (0, v.jt)(v.Xg),
                  requestPayerEmail: (0, v.jt)(v.Xg),
                  requestPayerPhone: (0, v.jt)(v.Xg),
                  shippingType: (0, v.jt)(oe),
                  currency: v.cV,
                  country: v.hN,
                  jcbEnabled: (0, v.jt)(v.Xg),
                  __billingDetailsEmailOverride: (0, v.jt)(v.Z_),
                  __minApplePayVersion: (0, v.jt)(v.Rx),
                  __minGooglePayVersion: (0, v.jt)(re),
                  __merchantDetails: (0, v.jt)(ie),
                  __linkOnly: (0, v.jt)(v.Xg),
                  __isCheckout: (0, v.jt)(v.Xg),
                  __checkoutSessionId: (0, v.jt)(v.Z_),
                  __isPaymentElement: (0, v.jt)(v.Xg),
                  __betas: (0, v.jt)(
                    (0, v.CT)(v.z$.apply(void 0, (0, s.Z)(S.Lv)))
                  ),
                  __supportsCouponCode: (0, v.jt)(v.Xg),
                  __couponCode: (0, v.jt)(v.Z_),
                })),
                e.rawOptions || {},
                "paymentRequest()"
              ),
              i = o.value,
              a = o.warnings;
            if (
              (r._report("pr.options", {
                options: (0, P.ei)(i, [
                  "country",
                  "currency",
                  "jcbEnabled",
                  "requestPayerEmail",
                  "requestPayerName",
                  "requestPayerPhone",
                  "requestShipping",
                  "disableWallets",
                  "wallets",
                  "blockedCardBrands",
                ]),
              }),
              a.forEach(function (e) {
                return r._warn(e);
              }),
              i.__billingDetailsEmailOverride && i.requestPayerEmail)
            )
              throw new A.No(
                "When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet."
              );
            var l = z(),
              m = i.disableWallets,
              f = m
                ? l.filter(function (e) {
                    return -1 === m.indexOf(e);
                  })
                : i.wallets;
            return (
              e.queryStrategyOverride
                ? (r._queryStrategy = e.queryStrategyOverride)
                : i.__linkOnly
                ? (r._queryStrategy = ["LINK"])
                : (r._queryStrategy = le(f || l)),
              r._report("pr.query_strategy", {
                queryStrategy: r._queryStrategy,
              }),
              (r._initialOptions = (0, c.Z)(
                (0, c.Z)({}, i),
                {},
                { __betas: e.betas, wallets: f }
              )),
              (r._reportOnlyCurrency = i.currency),
              (r._reportOnlyTotal = i.total),
              r._initBackingLibraries(r._initialOptions),
              r
            );
          }
          (0, _.Z)(t, e);
          var n = (0, y.Z)(t);
          return t;
        })(F),
        kt = wt,
        Et = {
          base: (0, v.jt)(v.Ry),
          complete: (0, v.jt)(v.Ry),
          empty: (0, v.jt)(v.Ry),
          invalid: (0, v.jt)(v.Ry),
          paymentRequestButton: (0, v.jt)(v.Ry),
        },
        St = {
          classes: (0, v.jt)(
            (0, v.mC)({
              base: (0, v.jt)(v.Z_),
              complete: (0, v.jt)(v.Z_),
              empty: (0, v.jt)(v.Z_),
              focus: (0, v.jt)(v.Z_),
              invalid: (0, v.jt)(v.Z_),
              webkitAutofill: (0, v.jt)(v.Z_),
            })
          ),
          hidePostalCode: (0, v.jt)(v.Xg),
          hideIcon: (0, v.jt)(v.Xg),
          showIcon: (0, v.jt)(v.Xg),
          style: (0, v.jt)((0, v.mC)(Et)),
          iconStyle: (0, v.jt)((0, v.kw)("solid", "default")),
          value: (0, v.jt)((0, v.or)(v.Z_, v.Ry)),
          __privateCvcOptional: (0, v.jt)(v.Xg),
          __privateValue: (0, v.jt)((0, v.or)(v.Z_, v.Ry)),
          __privateEmitIbanValue: (0, v.jt)(v.Xg),
          error: (0, v.jt)(
            (0, v.mC)({
              type: v.Z_,
              code: (0, v.jt)(v.Z_),
              decline_code: (0, v.jt)(v.Z_),
              param: (0, v.jt)(v.Z_),
            })
          ),
          locale: (0, v.yv)("elements()"),
          fonts: (0, v.yv)("elements()"),
          placeholder: (0, v.jt)(v.Z_),
          disabled: (0, v.jt)(v.Xg),
          placeholderCountry: (0, v.jt)(v.Z_),
          paymentRequest: (0, v.jt)(
            (0, v.n2)(kt, "stripe.paymentRequest(...)")
          ),
          supportedCountries: (0, v.jt)((0, v.CT)(v.Z_)),
          accountHolderType: (0, v.jt)((0, v.kw)("individual", "company")),
          issuingCard: (0, v.jt)(v.Z_),
          ephemeralKeySecret: (0, v.jt)(v.Z_),
          nonce: (0, v.jt)(v.Z_),
          toCopy: (0, v.jt)((0, v.kw)("number", "cvc", "expiry", "pin")),
        },
        Pt = (0, v.mC)(St),
        At =
          ((dt = {}),
          (0, p.Z)(dt, I.Yj.card, ze.NC.CARD_ELEMENT),
          (0, p.Z)(dt, I.Yj.cardNumber, ze.NC.CARD_ELEMENT),
          (0, p.Z)(dt, I.Yj.cardExpiry, ze.NC.CARD_ELEMENT),
          (0, p.Z)(dt, I.Yj.cardCvc, ze.NC.CARD_ELEMENT),
          (0, p.Z)(dt, I.Yj.postalCode, ze.NC.CARD_ELEMENT),
          (0, p.Z)(
            dt,
            I.Yj.paymentRequestButton,
            ze.NC.PAYMENT_REQUEST_ELEMENT
          ),
          (0, p.Z)(dt, I.Yj.iban, ze.NC.IBAN_ELEMENT),
          (0, p.Z)(dt, I.Yj.idealBank, ze.NC.IDEAL_BANK_ELEMENT),
          (0, p.Z)(dt, I.Yj.p24Bank, ze.NC.P24_BANK_ELEMENT),
          (0, p.Z)(dt, I.Yj.auBankAccount, ze.NC.AU_BANK_ACCOUNT_ELEMENT),
          (0, p.Z)(dt, I.Yj.fpxBank, ze.NC.FPX_BANK_ELEMENT),
          (0, p.Z)(
            dt,
            I.Yj.issuingCardNumberDisplay,
            ze.NC.ISSUING_CARD_NUMBER_DISPLAY_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.issuingCardCopyButton,
            ze.NC.ISSUING_CARD_COPY_BUTTON_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.issuingCardCvcDisplay,
            ze.NC.ISSUING_CARD_CVC_DISPLAY_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.issuingCardExpiryDisplay,
            ze.NC.ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.issuingCardPinDisplay,
            ze.NC.ISSUING_CARD_PIN_DISPLAY_ELEMENT
          ),
          (0, p.Z)(dt, I.Yj.epsBank, ze.NC.EPS_BANK_ELEMENT),
          (0, p.Z)(dt, I.Yj.netbankingBank, ze.NC.NETBANKING_BANK_ELEMENT),
          (0, p.Z)(
            dt,
            I.Yj.afterpayClearpayMessageModal,
            ze.NC.AFTERPAY_MESSAGE_MODAL_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.autocompleteSuggestions,
            ze.NC.AUTOCOMPLETE_SUGGESTIONS_ELEMENT
          ),
          (0, p.Z)(
            dt,
            I.Yj.achBankSearchResults,
            ze.NC.ACH_BANK_SEARCH_RESULTS_ELEMENT
          ),
          dt),
        Ct = function (e) {
          var t = (0, b.Dx)(e, null);
          return !!t && "rtl" === t.getPropertyValue("direction");
        },
        It = function () {
          document.activeElement &&
            document.activeElement.blur &&
            document.activeElement.blur();
        },
        Nt = e(7030),
        Tt = e(9144),
        Mt = function (e) {
          var t = document.createElement("input");
          return (
            (t.className = e),
            t.setAttribute("aria-hidden", "true"),
            t.setAttribute("aria-label", " "),
            t.setAttribute("autocomplete", "false"),
            (t.maxLength = 1),
            (t.disabled = !0),
            (0, b.yq)(t, Tt.ZS),
            t
          );
        },
        Rt = function (e) {
          var t = getComputedStyle(e);
          return (
            "0px" !== t.borderBottomWidth ||
            "none" !== t.boxShadow ||
            "rgba(0, 0, 0, 0)" !== t.backgroundColor ||
            "none" !== t.backgroundImage
          );
        },
        Ot = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        jt = function (e) {
          var t = e.name,
            n = e.value,
            r = e.expiresIn,
            o = e.path,
            i = e.domain,
            a = e.protocol,
            c = e.sameSite,
            s = void 0 === c ? "Lax" : c,
            u = new Date(),
            l = r || 31536e6;
          u.setTime(u.getTime() + l);
          var p = o || "/",
            d = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
            m = ""
              .concat(encodeURIComponent(t), "=")
              .concat(d, ";expires=")
              .concat(u.toGMTString(), ";path=")
              .concat(p, ";SameSite=")
              .concat(s);
          return (
            i && (m += ";domain=".concat(i)),
            "https:" === a && (m += ";secure"),
            (document.cookie = m),
            m
          );
        },
        Zt = function (e) {
          var t = (0, P.sE)(document.cookie.split("; "), function (t) {
            var n = t.indexOf("=");
            try {
              return decodeURIComponent(t.substr(0, n)) === e;
            } catch (e) {
              return !1;
            }
          });
          if (!t) return null;
          var n = t.indexOf("=");
          try {
            return decodeURIComponent(t.substr(n + 1));
          } catch (e) {
            return null;
          }
        },
        xt = e(3110),
        Lt = e.n(xt),
        Bt = I.Xk.replace(/\/$/, ""),
        Dt = "_1776170249",
        qt = "__1104211103",
        Ft = (function (e) {
          var t,
            n = ((t = {}), (0, p.Z)(t, Dt, !0), (0, p.Z)(t, qt, !1), t);
          try {
            var r = (0, k.vB)(e.slice(e.indexOf("?") + 1));
            Object.keys(r).forEach(function (e) {
              var t = Lt()(e),
                o = r[e];
              switch (t) {
                case Dt:
                  "false" === o && (n[t] = !1);
                  break;
                case qt:
                  "true" === o && (n[t] = !0);
              }
            });
          } catch (e) {}
          return n;
        })(
          (function (e) {
            try {
              if (e.currentScript) return e.currentScript.src;
              var t = e.querySelectorAll('script[src^="'.concat(Bt, '"]')),
                n = (0, P.sE)(t, function (e) {
                  var t = (e.getAttribute("src") || "").split("?")[0];
                  return new RegExp("^".concat(Bt, "/?$")).test(t);
                });
              return (n && n.getAttribute("src")) || "";
            } catch (e) {
              return "";
            }
          })(document)
        ),
        Ut = Ft[Dt],
        Gt = Ft[qt],
        Yt = e(3852),
        Ht = e(3538),
        zt = e(4044),
        Kt = (function (e) {
          function t(e) {
            var r,
              o = e.type,
              i = e.controllerId,
              a = e.listenerRegistry,
              c = e.betas,
              s = e.appParams;
            return (
              (0, u.Z)(this, t),
              ((r = n.call(this))._sendFAReq = function (e) {
                var t = (0, g.To)(e.tag);
                return new U.J(function (n, o) {
                  (r._requests[t] = { resolve: n, reject: o }),
                    r._send({
                      message: {
                        action: "stripe-frame-action",
                        payload: { nonce: t, faReq: e },
                      },
                      type: "outer",
                      frameId: r.id,
                      controllerId: r._controllerId,
                    });
                });
              }),
              (r.action = {
                perform3DS2Challenge: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_3DS2_CHALLENGE",
                    value: e,
                  });
                },
                perform3DS2Fingerprint: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_3DS2_FINGERPRINT",
                    value: e,
                  });
                },
                performOneClickWebauthnAuthentication: function (e) {
                  return r._sendFAReq({
                    tag: "PERFORM_ONE_CLICK_WEBAUTHN_AUTHENTICATION",
                    value: e,
                  });
                },
                show3DS2Spinner: function (e) {
                  return r._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e });
                },
                checkCanMakePayment: function (e) {
                  return r._sendFAReq({
                    tag: "CHECK_CAN_MAKE_PAYMENT",
                    value: e,
                  });
                },
                closeLightboxFrame: function (e) {
                  return r._sendFAReq({
                    tag: "CLOSE_LIGHTBOX_FRAME",
                    value: e,
                  });
                },
                openLightboxFrame: function (e) {
                  return r._sendFAReq({ tag: "OPEN_LIGHTBOX_FRAME", value: e });
                },
                setFocusTarget: function (e) {
                  return r._sendFAReq({ tag: "SET_FOCUS_TARGET", value: e });
                },
              }),
              (r.type = o),
              (r.loaded = !1),
              (r._controllerId = i),
              (r._persistentMessages = []),
              (r._queuedMessages = []),
              (r._requests = {}),
              (r._listenerRegistry = a),
              (r.id = r._generateId()),
              (r._iframe = r._createIFrame(o, c, s)),
              r._on("load", function () {
                (r.loaded = !0),
                  r._ensureMounted(),
                  r.loaded &&
                    (r._persistentMessages.forEach(function (e) {
                      return r._send(e);
                    }),
                    r._queuedMessages.forEach(function (e) {
                      return r._send(e);
                    }),
                    (r._queuedMessages = []));
              }),
              r._on("title", function (e) {
                var t = e.title;
                r._iframe.setAttribute("title", t);
              }),
              r
            );
          }
          (0, _.Z)(t, e);
          var n = (0, y.Z)(t);
          return (
            (0, l.Z)(t, [
              {
                key: "_generateId",
                value: function () {
                  return (0, g.To)("__privateStripeFrame");
                },
              },
              {
                key: "send",
                value: function (e) {
                  this._send({
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId,
                  });
                },
              },
              {
                key: "sendPersistent",
                value: function (e) {
                  this._ensureMounted();
                  var t = {
                    message: e,
                    type: "outer",
                    frameId: this.id,
                    controllerId: this._controllerId,
                  };
                  (this._persistentMessages = [].concat(
                    (0, s.Z)(this._persistentMessages),
                    [t]
                  )),
                    this.loaded && (0, ze.oi)(t);
                },
              },
              {
                key: "resolve",
                value: function (e, t) {
                  this._requests[e] && this._requests[e].resolve(t);
                },
              },
              {
                key: "reject",
                value: function (e, t) {
                  this._requests[e] && this._requests[e].reject(t);
                },
              },
              {
                key: "_send",
                value: function (e) {
                  this._ensureMounted(),
                    this.loaded
                      ? (0, ze.oi)(e)
                      : (this._queuedMessages = [].concat(
                          (0, s.Z)(this._queuedMessages),
                          [e]
                        ));
                },
              },
              {
                key: "appendTo",
                value: function (e) {
                  this._emit("mount", { anchor: e }),
                    e.appendChild(this._iframe);
                },
              },
              {
                key: "prependTo",
                value: function (e, t) {
                  this._emit("mount", { anchor: e, parent: t }),
                    t.insertBefore(this._iframe, e);
                },
              },
              {
                key: "unmount",
                value: function () {
                  (this.loaded = !1), this._emit("unload");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.unmount();
                  var e = this._iframe.parentElement;
                  e && e.removeChild(this._iframe), this._emit("destroy");
                },
              },
              {
                key: "_ensureMounted",
                value: function () {
                  this._isMounted() || this.unmount();
                },
              },
              {
                key: "_isMounted",
                value: function () {
                  return (
                    !!document.body && document.body.contains(this._iframe)
                  );
                },
              },
              {
                key: "_createIFrame",
                value: function (e, t, n) {
                  var r = window.location.href.toString(),
                    o =
                      "string" == typeof n
                        ? n
                        : (0, k.qC)(
                            (0, c.Z)(
                              (0, c.Z)({}, n || {}),
                              {},
                              { referrer: r, controllerId: this._controllerId }
                            )
                          ),
                    i = document.createElement("iframe");
                  i.setAttribute("name", this.id);
                  var a = (0, ze.i7)(e);
                  return (
                    Object.keys(a).forEach(function (e) {
                      i.setAttribute(e, a[e]);
                    }),
                    (null == n ? void 0 : n.allowCamera) &&
                      i.setAttribute("allow", "camera"),
                    (i.src = ""
                      .concat((0, zt.D)(e))
                      .concat(o ? "#" : "")
                      .concat(o)),
                    i
                  );
                },
              },
            ]),
            t
          );
        })(F),
        Jt = Kt,
        Wt = (function (e) {
          function n(e) {
            var t;
            if (
              ((0, u.Z)(this, n),
              ((t = r.call(this, e)).autoload = e.autoload || !1),
              "complete" === document.readyState)
            )
              t._ensureMounted();
            else {
              var o = t._ensureMounted.bind((0, h.Z)(t));
              t._listenerRegistry.addEventListener(
                document,
                "DOMContentLoaded",
                o
              ),
                t._listenerRegistry.addEventListener(window, "load", o),
                setTimeout(o, 5e3);
            }
            return t;
          }
          (0, _.Z)(n, e);
          var r = (0, y.Z)(n);
          return (
            (0, l.Z)(n, [
              {
                key: "_ensureMounted",
                value: function () {
                  t((0, Ht.Z)(n.prototype), "_ensureMounted", this).call(this),
                    this._isMounted() || this._autoMount();
                },
              },
              {
                key: "_autoMount",
                value: function () {
                  var e = document.body;
                  if (e) {
                    var t =
                      document.querySelector(
                        "#stripe-hidden-frames-container"
                      ) || e;
                    this.appendTo(t);
                  } else if (
                    "complete" === document.readyState ||
                    "interactive" === document.readyState
                  )
                    throw new A.No(
                      "Stripe.js requires that your page has a <body> element."
                    );
                  this.autoload && (this.loaded = !0);
                },
              },
              {
                key: "_createIFrame",
                value: function (e, r, o) {
                  var i = t((0, Ht.Z)(n.prototype), "_createIFrame", this).call(
                    this,
                    e,
                    r,
                    o
                  );
                  return (
                    i.setAttribute("aria-hidden", "true"),
                    i.setAttribute("tabIndex", "-1"),
                    (0, b.SV)(i),
                    i
                  );
                },
              },
            ]),
            n
          );
        })(Jt),
        Vt = Wt,
        Xt = (function (e) {
          function t() {
            return (0, u.Z)(this, t), n.apply(this, arguments);
          }
          (0, _.Z)(t, e);
          var n = (0, y.Z)(t);
          return (
            (0, l.Z)(t, [
              {
                key: "_generateId",
                value: function () {
                  return this._controllerId;
                },
              },
            ]),
            t
          );
        })(Vt),
        Qt = Xt,
        $t = "__privateStripeMetricsController",
        en = "merchant",
        tn = "session",
        nn = "NA",
        rn = function (e) {
          return 42 === e.length;
        },
        on = function (e, t, n) {
          return n ? (!e || (!rn(e) && rn(t)) ? t : e) : (0, g.Vj)();
        },
        an = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              ((0, u.Z)(this, e),
              (this._controllerFrame = null),
              (this._latencies = []),
              (this._handleMessage = function (e) {
                return function (n) {
                  var r = n.data,
                    o = n.origin;
                  if ((0, k.Qg)(o) && "string" == typeof r)
                    try {
                      var i = JSON.parse(r),
                        a = i.originatingScript,
                        c = i.payload;
                      if ("m2" === a) {
                        var s = c.guid,
                          u = c.muid,
                          l = c.sid;
                        (t._guid = s),
                          (t._muid = t._getID(en, u)),
                          (t._sid = t._getID(tn, l)),
                          e();
                      }
                    } catch (e) {}
                };
              }),
              n.checkoutIds)
            ) {
              var r = n.checkoutIds,
                o = r.muid,
                i = r.sid;
              (this._guid = nn),
                (this._muid = o),
                (this._sid = i),
                (this._doNotPersist = "NA" !== o && "NA" !== i);
            } else
              (this._guid = nn),
                (this._muid = this._getID(en)),
                (this._sid = this._getID(tn)),
                (this._doNotPersist = !1);
            (this._listenerRegistry = (0, Yt.E)()),
              (this._idsPromise = new U.J(function (e) {
                t._establishMessageChannel(e);
              })),
              (this._id = (0, g.To)($t)),
              Ut &&
                ((this._controllerFrame = new Qt({
                  type: ze.NC.METRICS_CONTROLLER,
                  controllerId: this._id,
                  listenerRegistry: this._listenerRegistry,
                  autoload: !0,
                  appParams: this._buildFrameQueryString(),
                })),
                this._startIntervalCheck(),
                setTimeout(
                  this._testLatency.bind(this),
                  2e3 + 500 * Math.random()
                ));
          }
          return (
            (0, l.Z)(e, [
              {
                key: "ids",
                value: function () {
                  return { guid: this._guid, muid: this._muid, sid: this._sid };
                },
              },
              {
                key: "idsPromise",
                value: function () {
                  var e = this;
                  return this._idsPromise.then(function () {
                    return e.ids();
                  });
                },
              },
              {
                key: "_establishMessageChannel",
                value: function (e) {
                  if (!Ut) return (this._guid = (0, g.Vj)()), void e();
                  this._listenerRegistry.addEventListener(
                    window,
                    "message",
                    this._handleMessage(e)
                  );
                },
              },
              {
                key: "_startIntervalCheck",
                value: function () {
                  var e = this,
                    t = window.location.href;
                  setInterval(function () {
                    var n = window.location.href;
                    n !== t &&
                      (e.send(function (e) {
                        return {
                          action: "ping",
                          payload: {
                            sid: e.sid,
                            muid: e.muid,
                            title: document.title,
                            referrer: document.referrer,
                            url: document.location.href,
                            version: 6,
                          },
                        };
                      }),
                      (t = n));
                  }, 5e3);
                },
              },
              {
                key: "report",
                value: function (e, t) {
                  this.send(function (n) {
                    return {
                      action: "track",
                      payload: {
                        sid: n.sid,
                        muid: n.muid,
                        url: document.location.href,
                        source: e,
                        data: t,
                        version: 6,
                      },
                    };
                  });
                },
              },
              {
                key: "send",
                value: function (e) {
                  var t = this;
                  this._idsPromise.then(function () {
                    try {
                      t._controllerFrame && t._controllerFrame.send(e(t.ids()));
                    } catch (e) {}
                  });
                },
              },
              {
                key: "_testLatency",
                value: function () {
                  var e = this,
                    t = new Date();
                  this._listenerRegistry.addEventListener(
                    document,
                    "mousemove",
                    function n() {
                      try {
                        var r = new Date();
                        e._latencies.push(r - t),
                          e._latencies.length >= 10 &&
                            (e.report("mouse-timings-10", e._latencies),
                            e._listenerRegistry.removeEventListener(
                              document,
                              "mousemove",
                              n
                            )),
                          (t = r);
                      } catch (e) {}
                    }
                  );
                },
              },
              {
                key: "_extractMetaReferrerPolicy",
                value: function () {
                  var e = document.querySelector("meta[name=referrer]");
                  return null != e && e instanceof HTMLMetaElement
                    ? e.content.toLowerCase()
                    : null;
                },
              },
              {
                key: "_extractUrl",
                value: function (e) {
                  var t = document.location.href;
                  switch (e) {
                    case "origin":
                    case "strict-origin":
                    case "origin-when-cross-origin":
                    case "strict-origin-when-cross-origin":
                      return document.location.origin;
                    case "unsafe-url":
                      return t.split("#")[0];
                    default:
                      return t;
                  }
                },
              },
              {
                key: "_buildFrameQueryString",
                value: function () {
                  var e = this._extractMetaReferrerPolicy(),
                    t = this._extractUrl(e),
                    n = {
                      url: t,
                      title: document.title,
                      referrer: document.referrer,
                      muid: this._muid,
                      sid: this._sid,
                      version: 6,
                      preview: (0, k.Qg)(t),
                    };
                  return (
                    null != e && (n.metaReferrerPolicy = e),
                    Object.keys(n)
                      .map(function (e) {
                        return null != n[e]
                          ? ""
                              .concat(e, "=")
                              .concat(encodeURIComponent(n[e].toString()))
                          : null;
                      })
                      .join("&")
                  );
                },
              },
              {
                key: "_getID",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : nn;
                  switch (e) {
                    case en:
                      if (this._doNotPersist) return on(this._muid, t, Ut);
                      try {
                        var n = "__stripe_mid",
                          r = on(Zt(n), t, Ut);
                        return (
                          rn(r) &&
                            jt({
                              name: n,
                              value: r,
                              domain: ".".concat(document.location.hostname),
                              protocol: document.location.protocol,
                              sameSite: "Strict",
                            }),
                          r
                        );
                      } catch (e) {
                        return nn;
                      }
                    case tn:
                      if (this._doNotPersist) return on(this._sid, t, Ut);
                      try {
                        var o = "__stripe_sid",
                          i = on(Zt(o), t, Ut);
                        return (
                          rn(i) &&
                            jt({
                              name: o,
                              value: i,
                              domain: ".".concat(document.location.hostname),
                              protocol: document.location.protocol,
                              sameSite: "Strict",
                              expiresIn: 18e5,
                            }),
                          i
                        );
                      } catch (e) {
                        return nn;
                      }
                    default:
                      throw new Error("Invalid ID type specified: ".concat(e));
                  }
                },
              },
            ]),
            e
          );
        })(),
        cn = null,
        sn = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (cn = new an(e));
        },
        un = !1,
        ln = function () {
          var e = cn;
          e &&
            (un ||
              ((un = !0),
              e.send(function (e) {
                return {
                  action: "ping",
                  payload: {
                    v2: 2,
                    sid: e.sid,
                    muid: e.muid,
                    title: document.title,
                    referrer: document.referrer,
                    url: document.location.href,
                    version: 6,
                  },
                };
              }),
              e.send(function (t) {
                return {
                  action: "track",
                  payload: {
                    sid: t.sid,
                    muid: t.muid,
                    url: document.location.href,
                    source: "mouse-timings-10-v2",
                    data: e._latencies,
                    version: 6,
                  },
                };
              })));
        },
        pn = ["test_id"],
        dn = function (e) {
          switch (e.type) {
            case "object":
              return pn.push(e.object.id), { issuingCard: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        mn = function (e) {
          switch (e.type) {
            case "object":
              return { nonce: e.object.public_nonce };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        fn = {
          margin: "0",
          "user-select": "none",
          transform: "translate(0)",
          "color-scheme": "only light",
          display: "block",
          position: "absolute",
          top: "50%",
          right: "0",
          height: "0",
          width: "0",
          padding: "0",
          border: "none",
          overflow: "hidden",
          opacity: "1",
          visibility: "visible",
        },
        hn = function (e) {
          var t = e.parent,
            n = e.frame,
            r = e.outerWrapperPromise,
            o = e.locale,
            i = void 0 === o ? "en" : o,
            a = e.controller,
            s = e.style,
            u = e.iconStyle,
            l = e.onLoad,
            p = e.onError,
            d = null,
            m = null,
            f = (0, rt.Nj)(i),
            h = !1,
            _ = "",
            y = (0, zt.D)("LINK_BUTTON_FOR_CARD_ELEMENT"),
            v = Mt("link-hidden-before"),
            g = Mt("link-hidden-after"),
            E = document.createElement("iframe");
          E.setAttribute("frameborder", "0"),
            E.setAttribute("allowTransparency", "true"),
            E.setAttribute("scrolling", "no"),
            (0, b.yq)(E, fn),
            (E.src = ""
              .concat(y, "#")
              .concat((0, k.qC)({ locale: f, style: s, iconStyle: u })));
          var S = function (e) {
              var t,
                r,
                o = e.data,
                i = e.origin;
              if (
                e.source === E.contentWindow &&
                i === I.jQ &&
                -1 !==
                  (null === (t = o.action) || void 0 === t
                    ? void 0
                    : t.indexOf("card-element-link"))
              )
                switch (o.action) {
                  case "card-element-link-load":
                    (h = !0),
                      d && (T(d), (d = null)),
                      m && (M(m), (d = null)),
                      l();
                    break;
                  case "card-element-link-measurements":
                    n.send({
                      action: "stripe-link-in-card-measurements",
                      payload: o.payload,
                    });
                    break;
                  case "card-element-link-focus":
                    n.send({
                      action: "stripe-user-link-in-card-focus",
                      payload: { isFocused: o.payload.isFocused },
                    });
                    break;
                  case "card-element-link-click":
                    n.send({
                      action: "stripe-user-link-in-card-click",
                      payload: {
                        locale: f || "en",
                        type: o.payload.type,
                        publishableKey: a._apiKey,
                        stripeAccount:
                          null !== (r = a._stripeAccount) && void 0 !== r
                            ? r
                            : null,
                        stripeJsId: a._stripeJsId,
                        mids: a.mids(),
                      },
                    });
                    break;
                  case "card-element-link-update-styles":
                    (0, b.yq)(E, (0, c.Z)((0, c.Z)({}, fn), o.payload));
                    break;
                  case "card-element-link-error":
                    p(o.payload.reason || "");
                    break;
                  case "card-element-link-report":
                    a.report(o.payload.event, (0, c.Z)({}, o.payload.data));
                    break;
                  case "card-element-link-redirect-focus":
                    var s = o.payload.direction,
                      u = "next" === s ? g : v,
                      _ = (0, b.dh)(u, s);
                    null == _ || _.focus();
                }
            },
            P = function () {
              if ("" === _ || w.s$) {
                var e = (0, b.dh)(g, "next");
                null == e || e.focus();
              } else
                C({ action: "card-element-link-window-focus", payload: {} });
            },
            A = function () {
              if ("" === _ || "link-pay" === _ || w.s$) {
                var e = (0, b.dh)(v, "previous");
                null == e || e.focus();
              } else
                C({ action: "card-element-link-window-focus", payload: {} });
            },
            C = function (e) {
              var t;
              null == E ||
                null === (t = E.contentWindow) ||
                void 0 === t ||
                t.postMessage(e, I.jQ);
            },
            N = function (e) {
              var t = e.isOpen;
              C({
                action: "card-element-link-popup-toggled",
                payload: { isOpen: t },
              });
            },
            T = function (e) {
              h
                ? (C({ action: "card-element-link-user-update", payload: e }),
                  e.locale && (f = (0, rt.Nj)(e.locale)))
                : (d = (0, c.Z)((0, c.Z)({}, d), e));
            },
            M = function (e) {
              C({ action: "card-element-link-outer-measurements", payload: e });
            },
            R = function () {
              C({ action: "card-element-link-payment-error" });
            };
          r.then(function (e) {
            return e
              ? { outerHeight: e.clientHeight }
              : { outerHeight: Math.max(28, t.clientHeight) };
          }).then(function (e) {
            h ? M(e) : (m = e);
          });
          return (
            n._on("outer-link-card-popup-toggled", N),
            n._on("outer-link-card-user-update", T),
            n._on("outer-link-card-payment-error", R),
            window.addEventListener("message", S, !1),
            v.addEventListener("focus", P, !1),
            g.addEventListener("focus", A, !1),
            null == t || t.appendChild(E),
            (v.disabled = !1),
            (g.disabled = !1),
            null == t || t.appendChild(v),
            null == t || t.appendChild(g),
            {
              unmount: function () {
                C({ action: "card-element-link-unmount", payload: {} }),
                  n._off("outer-link-card-popup-toggled", N),
                  n._off("outer-link-card-user-update", T),
                  n._off("outer-link-card-payment-error", R),
                  window.removeEventListener("message", S, !1),
                  v.removeEventListener("focus", P, !1),
                  g.removeEventListener("focus", A, !1),
                  null == t || t.removeChild(E),
                  null == t || t.removeChild(v),
                  null == t || t.removeChild(g);
              },
              updateButton: function (e) {
                (_ = e),
                  C({
                    action: "card-element-link-state-change",
                    payload: { nextLinkState: e },
                  });
              },
              hasLoaded: function () {
                return h;
              },
              getActiveButton: function () {
                return _;
              },
              setLinkToken: function (e) {
                C({
                  action: "card-element-link-token-received",
                  payload: { token: e },
                });
              },
              updateUserOptions: T,
            }
          );
        },
        _n = {
          base: "StripeElement",
          focus: "StripeElement--focus",
          invalid: "StripeElement--invalid",
          complete: "StripeElement--complete",
          empty: "StripeElement--empty",
          webkitAutofill: "StripeElement--webkit-autofill",
        },
        yn = "#faffbd",
        vn = function (e) {
          return parseFloat(e.toFixed(1));
        },
        gn = function (e) {
          return /^\d+(\.\d*)?px$/.test(e);
        },
        bn = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this.focus = function () {
                if (n._isIssuingDisplayElement())
                  throw new A.No(
                    "Cannot call focus() on an ".concat(
                      n._componentName,
                      " Element."
                    )
                  );
                document.activeElement &&
                  document.activeElement.blur &&
                  document.activeElement.blur(),
                  n._fakeInput.focus();
              }),
              (this._formSubmit = function () {
                for (
                  var e = n._component.parentElement;
                  e && "FORM" !== e.nodeName;

                )
                  e = e.parentElement;
                if (e) {
                  var t = document.createEvent("Event");
                  t.initEvent("submit", !0, !0), e.dispatchEvent(t);
                }
              }),
              (this._unmountLinkButtonFrame = function () {
                n._linkButtonFrame &&
                  (n._linkButtonFrame.unmount(), (n._linkButtonFrame = void 0));
              });
            var r = t.options,
              o = t.component,
              i = t.listenerRegistry,
              a = t.elementTimings,
              c = t.emitEvent,
              s = t.getParent,
              l = t.hasRegisteredListener,
              p = (0, P.CE)(r, ["loader", "appearance", "clientSecret"]),
              d = p.controller,
              m = p.componentName,
              f = p.publicOptions,
              h = p.betas;
            (this._componentName = m),
              (this._component = o),
              (this._controller = d),
              (this._listenerRegistry = i),
              (this._emitEvent = c),
              (this._getParent = s),
              (this._hasRegisteredListener = l);
            var _ = (0, v.Gu)(Pt, f || {}, "create()"),
              y = _.value;
            _.warnings.forEach(function (e) {
              return n._controller.warn(e);
            });
            var g,
              b = y.paymentRequest,
              w = y.classes,
              k = y.issuingCard,
              E = "paymentRequestButton" === this._componentName;
            if (E) {
              if (!b)
                throw new A.No(
                  "You must pass in a stripe.paymentRequest object in order to use this Element."
                );
              this._paymentRequest = b;
              var S = p.locale;
              this._paymentRequest._registerElement(),
                this._paymentRequest._updateLocale(S);
            }
            if (this._isIssuingDisplayElement()) {
              var C = 0 === (h || []).length;
              if (!k)
                throw new Error(
                  "You must pass in an ID to the issuingCard option in order to use this Element."
                );
              if (C) {
                if (!("nonce" in y) || !("ephemeralKeySecret" in y))
                  throw new Error(
                    "You must set the nonce and ephemeralKeySecret options to use this Element."
                  );
              } else if (((g = k), -1 === pn.indexOf(g)))
                throw new Error(
                  "Issuing card ".concat(k, " has not been retrieved.")
                );
            }
            this._createElement(p, y, a),
              (this._classes = _n),
              this._computeCustomClasses(w || {}),
              (this._lastBackgroundColor = ""),
              (this._focused = !1),
              (this._empty = !E),
              (this._invalid = !1),
              (this._complete = !1),
              (this._autofilled = !1),
              (this._lastSubmittedAt = null);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "update",
                value: function (e) {
                  var t = this,
                    n = (0, v.Gu)(Pt, e || {}, "element.update()"),
                    r = n.value;
                  if (
                    (n.warnings.forEach(function (e) {
                      return t._controller.warn(e);
                    }),
                    r)
                  ) {
                    var o = r.style,
                      i = r.iconStyle;
                    ("card" !== this._componentName &&
                      "cardNumber" !== this._componentName) ||
                      (!o && !i) ||
                      (this._linkButtonFrame
                        ? this._linkButtonFrame.updateUserOptions({
                            style: o,
                            iconStyle: i,
                          })
                        : (this._queuedLinkButtonFrameUpdates = (0, c.Z)(
                            (0, c.Z)({}, this._queuedLinkButtonFrameUpdates),
                            {},
                            { style: o, iconStyle: i }
                          )));
                    var a = r.classes,
                      s = (0, d.Z)(r, ["classes"]);
                    a &&
                      (this._removeClasses(),
                      this._computeCustomClasses(a),
                      this._updateClasses()),
                      this._updateFrameHeight(r),
                      Object.keys(s).length &&
                        (this._frame.update(s),
                        this._secondaryFrame && this._secondaryFrame.update(s));
                  }
                },
              },
              {
                key: "blur",
                value: function () {
                  if (this._isIssuingDisplayElement())
                    throw new A.No(
                      "Cannot call blur() on an ".concat(
                        this._componentName,
                        " Element."
                      )
                    );
                  this._frame.blur(), this._fakeInput.blur();
                },
              },
              {
                key: "clear",
                value: function () {
                  this._frame.clear();
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e = this._getParent(),
                    t = this._label;
                  e &&
                    (this._listenerRegistry.removeEventListener(
                      e,
                      "click",
                      this.focus
                    ),
                    this._removeClasses()),
                    t &&
                      (this._listenerRegistry.removeEventListener(
                        t,
                        "click",
                        this.focus
                      ),
                      (this._label = null)),
                    this._secondaryFrame &&
                      (this._secondaryFrame.unmount(),
                      this._listenerRegistry.removeEventListener(
                        window,
                        "click",
                        this._handleOutsideClick
                      )),
                    this._linkButtonFrame &&
                      (this._linkButtonFrame.unmount(),
                      (this._linkButtonFrame = void 0)),
                    (this._fakeInput.disabled = !0),
                    this._frame.unmount();
                },
              },
              {
                key: "mount",
                value: function () {
                  if ((0, b.qW)(document, this._component)) {
                    this._controller.report("user_error.shadow_dom_mount", {
                      element: this._componentName,
                    });
                    var e = function () {
                      throw new A.No(
                        "Elements cannot be mounted in a ShadowRoot. Please mount in the Light DOM."
                      );
                    };
                    "test" === this._controller.keyMode()
                      ? e()
                      : setTimeout(e, 0);
                  }
                  if (this._paymentRequest) {
                    if (!this._paymentRequest._canMakePaymentResolved)
                      throw new A.No(
                        "For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."
                      );
                    if (!this._paymentRequest._activeBackingLibraryName)
                      throw new A.No(
                        "The paymentRequestButton Element is not available in the current environment."
                      );
                  }
                  (this._mountTimestamp = new gt.E()),
                    this._findPossibleLabel(),
                    this._updateClasses();
                },
              },
              {
                key: "_isIssuingDisplayElement",
                value: function () {
                  return (
                    "issuingCardNumberDisplay" === this._componentName ||
                    "issuingCardCvcDisplay" === this._componentName ||
                    "issuingCardExpiryDisplay" === this._componentName ||
                    "issuingCardPinDisplay" === this._componentName
                  );
                },
              },
              {
                key: "_updateClasses",
                value: function () {
                  var e = this._getParent();
                  e &&
                    (0, b.mb)(e, [
                      [this._classes.base, !0],
                      [this._classes.empty, this._empty],
                      [this._classes.focus, this._focused],
                      [this._classes.invalid, this._invalid],
                      [this._classes.complete, this._complete],
                      [this._classes.webkitAutofill, this._autofilled],
                    ]);
                },
              },
              {
                key: "_removeClasses",
                value: function () {
                  var e = this._getParent();
                  e &&
                    (0, b.mb)(e, [
                      [this._classes.base, !1],
                      [this._classes.empty, !1],
                      [this._classes.focus, !1],
                      [this._classes.invalid, !1],
                      [this._classes.complete, !1],
                      [this._classes.webkitAutofill, !1],
                    ]);
                },
              },
              {
                key: "_findPossibleLabel",
                value: function () {
                  var e = this._getParent();
                  if (e) {
                    var t,
                      n = e.getAttribute("id");
                    if (
                      (n &&
                        (t = document.querySelector(
                          "label[for='".concat(n, "']")
                        )),
                      t)
                    )
                      this._listenerRegistry.addEventListener(
                        e,
                        "click",
                        this.focus
                      );
                    else
                      for (
                        t = t || e.parentElement;
                        t && "LABEL" !== t.nodeName;

                      )
                        t = t.parentElement;
                    t
                      ? ((this._label = t),
                        this._listenerRegistry.addEventListener(
                          t,
                          "click",
                          this.focus
                        ))
                      : this._listenerRegistry.addEventListener(
                          e,
                          "click",
                          this.focus
                        );
                  }
                },
              },
              {
                key: "_computeCustomClasses",
                value: function (e) {
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (n) {
                      if (!_n[n])
                        throw new A.No(
                          ""
                            .concat(
                              n,
                              " is not a customizable class name.\nYou can customize: "
                            )
                            .concat(Object.keys(_n).join(", "))
                        );
                      var r = e[n] || _n[n];
                      t[n] = r.replace(/\./g, " ");
                    }),
                    (this._classes = (0, c.Z)((0, c.Z)({}, this._classes), t)),
                    this
                  );
                },
              },
              {
                key: "_setupEvents",
                value: function (e, t, n) {
                  var r,
                    o = this,
                    i = e.stripeJsLoadTimestamp,
                    a = (e.stripeCreateTimestamp, e.groupCreateTimestamp),
                    u = e.createTimestamp,
                    l = null,
                    p = 0,
                    d = 0,
                    m = {
                      stripeJsLoad: i.getAsPosixTime(),
                      stripeCreate: u.getAsPosixTime(),
                      groupCreate: a.getAsPosixTime(),
                      create: u.getAsPosixTime(),
                    };
                  this._frame._on("outer-link-card-user-update", function (e) {
                    var t = e.locale;
                    !o._linkButtonFrame &&
                      t &&
                      (o._queuedLinkButtonFrameUpdates = (0, c.Z)(
                        (0, c.Z)({}, o._queuedLinkButtonFrameUpdates),
                        {},
                        { locale: t }
                      ));
                  }),
                    this._frame._on("outer-link-card-token", function (e) {
                      var t,
                        n = e.token;
                      (
                        null === (t = o._linkButtonFrame) || void 0 === t
                          ? void 0
                          : t.hasLoaded()
                      )
                        ? o._linkButtonFrame.setLinkToken(n)
                        : (l = n),
                        n
                          ? (o._frame._iframe.setAttribute("tabIndex", "-1"),
                            o._fakeInput.setAttribute("tabIndex", "-1"))
                          : (o._frame._iframe.removeAttribute("tabIndex"),
                            o._fakeInput.removeAttribute("tabIndex"));
                    }),
                    this._frame._on("outer-link-card-button", function (e) {
                      var t,
                        n = e.nextLinkState;
                      (
                        null === (t = o._linkButtonFrame) || void 0 === t
                          ? void 0
                          : t.hasLoaded()
                      )
                        ? o._linkButtonFrame.updateButton(n)
                        : (r = n);
                    });
                  var f = new ct();
                  if (
                    (this._frame._on("outer-link-card-mount", function () {
                      var e, i, a;
                      o._linkButtonFrame = hn({
                        outerWrapperPromise: f.promise,
                        frame: o._frame,
                        parent: o._component,
                        locale:
                          (null === (e = o._queuedLinkButtonFrameUpdates) ||
                          void 0 === e
                            ? void 0
                            : e.locale) || t.locale,
                        controller: o._controller,
                        style:
                          (null === (i = o._queuedLinkButtonFrameUpdates) ||
                          void 0 === i
                            ? void 0
                            : i.style) || (null == n ? void 0 : n.style),
                        iconStyle:
                          (null === (a = o._queuedLinkButtonFrameUpdates) ||
                          void 0 === a
                            ? void 0
                            : a.iconStyle) ||
                          (null == n ? void 0 : n.iconStyle),
                        onLoad: function () {
                          var e, t;
                          r &&
                            (null === (e = o._linkButtonFrame) ||
                              void 0 === e ||
                              e.updateButton(r),
                            (r = ""));
                          l &&
                            (null === (t = o._linkButtonFrame) ||
                              void 0 === t ||
                              t.setLinkToken(l),
                            (l = null));
                        },
                        onError: function (e) {
                          o._frame.send({
                            action: "stripe-link-in-card-eject",
                            payload: { reason: e },
                          }),
                            o._unmountLinkButtonFrame();
                        },
                      });
                    }),
                    this._frame._on("outer-link-card-unmount", function () {
                      return o._unmountLinkButtonFrame();
                    }),
                    this._frame._on("load", function (e) {
                      var t = e.source;
                      p++;
                      var n = o._getParent(),
                        r = Ct(n),
                        i = o._paymentRequest
                          ? o._paymentRequest._buttonTypeName
                          : null;
                      o._mountTimestamp &&
                        (m.mount = o._mountTimestamp.getAsPosixTime()),
                        o._frame.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: m,
                            loadCount: p,
                            matchFrame: t === o._frame._iframe.contentWindow,
                            rtl: r,
                            paymentRequestButtonType: i,
                          },
                        });
                    }),
                    this._secondaryFrame)
                  ) {
                    var h = this._secondaryFrame;
                    h._on("load", function (e) {
                      var t = e.source;
                      d++,
                        o._mountTimestamp &&
                          (m.mount = o._mountTimestamp.getAsPosixTime()),
                        h.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: m,
                            loadCount: d,
                            matchFrame: t === h._iframe.contentWindow,
                            rtl: !1,
                            paymentRequestButtonType: null,
                          },
                        });
                    });
                  }
                  this._frame._on("redirectfocus", function (e) {
                    var t = e.focusDirection,
                      n = (0, b.dh)(o._component, t);
                    n && n.focus();
                  }),
                    this._frame._on("focus", function () {
                      (o._focused = !0), o._updateClasses();
                    }),
                    this._frame._on("blur", function () {
                      (o._focused = !1),
                        o._updateClasses(),
                        o._lastSubmittedAt &&
                          "paymentRequestButton" === o._componentName &&
                          (o._controller.report(
                            "payment_request_button.sheet_visible",
                            { latency: o._lastSubmittedAt.getElapsedTime() }
                          ),
                          (o._lastSubmittedAt = null));
                    }),
                    this._frame._on("submit", function () {
                      if ("paymentRequestButton" === o._componentName) {
                        o._lastSubmittedAt = new gt.E();
                        var e = !1,
                          t = !1;
                        ln(),
                          o._emitEvent("click", {
                            preventDefault: function () {
                              o._controller.report(
                                "payment_request_button.default_prevented"
                              ),
                                e &&
                                  o._controller.warn(
                                    "event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."
                                  ),
                                (t = !0);
                            },
                          }),
                          !t &&
                            o._paymentRequest &&
                            (o._paymentRequest._elementShow(), (e = !0));
                      } else o._emitEvent("submit"), o._formSubmit();
                    }),
                    ["ready", "focus", "blur", "escape", "click"].forEach(
                      function (e) {
                        o._frame._on(e, function () {
                          o._emitEvent(e);
                        });
                      }
                    ),
                    this._frame._on("change", function (e) {
                      ln();
                      var t = {},
                        n = D._0[o._componentName] || [];
                      ["error", "value", "empty", "complete"]
                        .concat((0, s.Z)(n))
                        .forEach(function (n) {
                          return (t[n] = e[n]);
                        }),
                        o._emitEvent("change", t),
                        (o._empty = t.empty),
                        (o._invalid = !!t.error),
                        (o._complete = t.complete),
                        o._updateClasses();
                    }),
                    this._frame._on("__privateIntegrationError", function (e) {
                      var t = e.message;
                      o._emitEvent("__privateIntegrationError", { message: t });
                    }),
                    this._frame._on("networkschange-start", function () {
                      o._hasRegisteredListener("networkschange") &&
                        o._controller.action
                          .isCardMetadataRequired({ groupId: t.groupId })
                          .then(function (e) {
                            return (
                              e && o._emitNetworksChangeEvent(null, !0),
                              o._controller.action.retrieveCardNetworks({
                                groupId: t.groupId,
                              })
                            );
                          })
                          .then(function (e) {
                            e && o._emitNetworksChangeEvent(e, !1);
                          });
                    }),
                    this._frame._on("dimensions", function (e) {
                      if ("paymentRequestButton" !== o._componentName) {
                        var t = o._getParent();
                        if (t) {
                          var n = (0, b.Dx)(t, null);
                          if (n) {
                            var r = parseFloat(n.getPropertyValue("height")),
                              i = e.height;
                            if (
                              "border-box" === n.getPropertyValue("box-sizing")
                            ) {
                              var a = parseFloat(
                                  n.getPropertyValue("padding-top")
                                ),
                                c = parseFloat(
                                  n.getPropertyValue("padding-bottom")
                                );
                              r =
                                r -
                                parseFloat(n.getPropertyValue("border-top")) -
                                parseFloat(
                                  n.getPropertyValue("border-bottom")
                                ) -
                                a -
                                c;
                            }
                            var s = vn(r),
                              u = vn(i);
                            0 !== r &&
                              s < u &&
                              o._controller.report("wrapper_height_mismatch", {
                                height: u,
                                outer_height: s,
                              });
                            var l = o._component.getBoundingClientRect().height,
                              p = vn(l);
                            0 !== l &&
                              0 !== i &&
                              p !== u &&
                              (o._frame.updateStyle({
                                height: "".concat(i, "px"),
                              }),
                              o._controller.report("iframe_height_update", {
                                height: u,
                                calculated_height: p,
                              })),
                              ("card" !== o._componentName &&
                                "cardNumber" !== o._componentName) ||
                                (0, b.d3)(o._component, function () {
                                  try {
                                    var e = (function (e) {
                                      for (
                                        var t = e.parentElement,
                                          n = 0,
                                          r = null,
                                          o = e.clientHeight,
                                          i = e.clientWidth,
                                          a = 3 * o,
                                          c = 1.5 * i;
                                        n < 3 && null !== t;

                                      ) {
                                        var s = t,
                                          u = s.clientHeight,
                                          l = s.clientWidth;
                                        if (u > a || l > c)
                                          return 0 === n ? t : r;
                                        if (Rt(t)) return t;
                                        (u > o || l > i) &&
                                          ((r = t), (a = u), (c = l)),
                                          (n += 1),
                                          (t = t.parentElement);
                                      }
                                      return r;
                                    })(o._component);
                                    if ((f.resolve(e), e)) {
                                      var t = e.clientHeight,
                                        n = e.clientWidth,
                                        r = (0, b.Dx)(e);
                                      o._controller.report(
                                        "card_element_wrapper_stats",
                                        {
                                          found: !0,
                                          totalHeight: t,
                                          totalWidth: n,
                                          borderRadius:
                                            (null == r
                                              ? void 0
                                              : r.borderTopRightRadius) ===
                                            (null == r
                                              ? void 0
                                              : r.borderBottomRightRadius)
                                              ? null == r
                                                ? void 0
                                                : r.borderTopRightRadius
                                              : null == r
                                              ? void 0
                                              : r.borderRadius,
                                          hasBorder:
                                            "0px" !==
                                            (null == r
                                              ? void 0
                                              : r.borderBottomWidth),
                                          hasShadow:
                                            "none" !==
                                            (null == r ? void 0 : r.boxShadow),
                                          hasBackgroundColor:
                                            "rgba(0, 0, 0, 0)" !==
                                            (null == r
                                              ? void 0
                                              : r.backgroundColor),
                                          hasBackgroundImage:
                                            "none" !==
                                            (null == r
                                              ? void 0
                                              : r.backgroundImage),
                                        }
                                      );
                                    } else o._controller.report("card_element_wrapper_stats", { found: !1 });
                                  } catch (e) {
                                    f.resolve(null),
                                      o._controller.report(
                                        "card_element_wrapper_stats",
                                        {
                                          error: !0,
                                          errorType: (e && e.type) || "unknown",
                                          errorMessage:
                                            (e && e.message) || "unknown",
                                        }
                                      );
                                  }
                                });
                          }
                        }
                      }
                    }),
                    this._frame._on("autofill", function () {
                      var e = o._getParent();
                      if (e) {
                        var t = e.style.backgroundColor,
                          n = t === yn || "rgb(250, 255, 189)" === t;
                        (o._lastBackgroundColor = n
                          ? o._lastBackgroundColor
                          : t),
                          (e.style.backgroundColor = yn),
                          (o._autofilled = !0),
                          o._updateClasses();
                      }
                    }),
                    this._frame._on("autofill-cleared", function () {
                      var e = o._getParent();
                      (o._autofilled = !1),
                        e && (e.style.backgroundColor = o._lastBackgroundColor),
                        o._updateClasses();
                    }),
                    this._frame._on("update-outer-style", function (e) {
                      Object.keys(e).forEach(function (t) {
                        o._component.style.setProperty(t, e[t]);
                      });
                    });
                },
              },
              {
                key: "_emitNetworksChangeEvent",
                value: function (e, t) {
                  this._emitEvent("networkschange", {
                    networks: e,
                    loading: t,
                  });
                },
              },
              {
                key: "_handleOutsideClick",
                value: function () {
                  this._secondaryFrame &&
                    this._secondaryFrame.send({
                      action: "stripe-outside-click",
                      payload: {},
                    });
                },
              },
              {
                key: "_updateFrameHeight",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = e.style;
                  if ("paymentRequestButton" === this._componentName) {
                    var r = (n && n.paymentRequestButton) || {},
                      o = r.height,
                      i = "string" == typeof o ? o : void 0;
                    (t || i) &&
                      (this._frame.updateStyle({
                        height: i || this._lastHeight || K,
                        minHeight: "auto",
                      }),
                      (this._lastHeight = i || this._lastHeight));
                  } else {
                    var a = (n && n.base) || {},
                      c = a.lineHeight,
                      s = a.fontSize,
                      u = a.padding,
                      l =
                        "string" != typeof c || isNaN(parseFloat(c))
                          ? void 0
                          : c,
                      p = "string" == typeof s ? s : void 0,
                      d = "string" == typeof u ? u : void 0;
                    if (
                      (p &&
                        !gn(p) &&
                        this._controller.warn(
                          "The fontSize style you specified (".concat(
                            p,
                            ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."
                          )
                        ),
                      t || l || p)
                    ) {
                      var m =
                          -1 === I.T2.indexOf(this._componentName)
                            ? void 0
                            : d || this._lastPadding,
                        f = (0, b.Tf)(
                          l || this._lastHeight,
                          p || this._lastFontSize,
                          m
                        );
                      this._frame.updateStyle({ height: f }),
                        (this._lastFontSize = p || this._lastFontSize),
                        (this._lastHeight = l || this._lastHeight),
                        (this._lastPadding = m);
                    }
                  }
                },
              },
              {
                key: "_createElement",
                value: function (e, t, n) {
                  var r = this,
                    o = (e.controller, e.publicOptions, e.componentName),
                    i = e.groupId,
                    a = (0, d.Z)(e, [
                      "controller",
                      "publicOptions",
                      "componentName",
                      "groupId",
                    ]),
                    s =
                      (t.classes,
                      t.paymentRequest,
                      (0, d.Z)(t, ["classes", "paymentRequest"])),
                    u = this._component,
                    l = Mt(Nt.Kb);
                  (0, b.yq)(u, Ot);
                  var p = Ct(document.body),
                    m = At[o],
                    f = (0, c.Z)((0, c.Z)((0, c.Z)({}, a), s), {}, { rtl: p }),
                    h = this._controller.createElementFrame(m, o, i, f);
                  if (
                    (h._on("load", function () {
                      l.disabled = !1;
                    }),
                    this._listenerRegistry.addEventListener(
                      l,
                      "focus",
                      function () {
                        h.focus();
                      }
                    ),
                    h.appendTo(u),
                    D._y[o])
                  ) {
                    var _ = D._y[o].secondary,
                      y = this._controller.createSecondaryElementFrame(
                        m,
                        _,
                        o,
                        i,
                        f
                      );
                    y &&
                      y.on &&
                      y.on("height-change", function (e) {
                        y.updateStyle({ height: "".concat(e.height, "px") });
                      }),
                      (this._secondaryFrame = y),
                      y.appendTo(u),
                      this._listenerRegistry.addEventListener(
                        window,
                        "click",
                        function () {
                          return r._handleOutsideClick();
                        }
                      );
                  }
                  if (
                    (u.appendChild(l), w.Ah && o !== I.Yj.paymentRequestButton)
                  ) {
                    var v = (function () {
                      var e = Mt(Nt.tk);
                      return e.setAttribute("tabindex", "-1"), e;
                    })();
                    u.appendChild(v);
                  }
                  (this._frame = h),
                    (this._fakeInput = l),
                    this._setupEvents(n, e, t),
                    this._updateFrameHeight(t, !0);
                },
              },
            ]),
            e
          );
        })(),
        wn = bn,
        kn = {
          amount: v.Rx,
          currency: (0, v.kw)("USD"),
          logoColor: (0, v.jt)((0, v.kw)("primary", "black", "white")),
          fontColor: (0, v.jt)(v.Z_),
          fontSize: (0, v.jt)(v.Z_),
          textAlign: (0, v.jt)(v.Z_),
          stripeMerchantId: (0, v.jt)(v.Z_),
        },
        En = (0, v.mC)(kn),
        Sn = function (e) {
          var t = !1;
          window.Promise || ((t = !0), (window.Promise = U.J));
          var n = e();
          return t && window.Promise === U.J && delete window.Promise, n;
        },
        Pn = function () {
          return Sn(function () {
            return e.e(1).then(e.bind(e, 6167));
          });
        },
        An = function (t) {
          var n,
            r = t.options,
            o = (0, d.Z)(t, ["options"]),
            i = t.emitEvent,
            a = t.listenerRegistry,
            u = r.controller,
            l = r.componentName,
            p = r.publicOptions,
            m = r.groupId,
            f = new gt.E(),
            h = function (e) {
              var t = (0, v.Gu)(En, e || {}, "create()"),
                n = t.value,
                r = t.warnings;
              if (!Math.floor(n.amount) === n.amount)
                throw new A.No(
                  "'Amount' must be a whole integer number that represents the lowest denomination (cents)."
                );
              return (
                r.forEach(function (e) {
                  return u.warn(e);
                }),
                n
              );
            },
            _ = h(p),
            y = function (e, t) {
              return e.apply(void 0, [n].concat((0, s.Z)(t)));
            },
            g = [],
            b = function (e) {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  r[o] = arguments[o];
                n ? y(e, r) : g.push([e, r]);
              };
            },
            w = function () {};
          U.J.all([
            Sn(function () {
              return e.e(209).then(e.bind(e, 6393));
            }),
            Pn(),
          ]).then(
            function (e) {
              var t = (0, nt.Z)(e, 2),
                r = t[0],
                i = t[1],
                s = r.default;
              w = i.unmountModal;
              var p = (0, c.Z)(
                (0, c.Z)({}, o),
                {},
                {
                  options: {
                    groupId: m,
                    controller: u,
                    componentName: l,
                    publicOptions: _,
                  },
                  mountModal: function (e) {
                    return i.mountModal({
                      controller: u,
                      listenerRegistry: a,
                      url: e,
                    });
                  },
                }
              );
              (n = s(p)),
                u.report("affirm_message.loaded", {
                  load_time: f.getElapsedTime(),
                  currency: _.currency,
                }),
                (function () {
                  for (; g.length; ) {
                    var e = g.shift(),
                      t = (0, nt.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    y(n, r);
                  }
                })();
            },
            function (e) {
              u.report("affirm_message.import_error", { error: e });
            }
          );
          var k = function (e) {
            return function () {
              throw new A.No(e);
            };
          };
          return {
            mount: b(function (e) {
              e.mount(_), i("mounted");
            }),
            unmount: b(function (e) {
              w(), e.unmount();
            }),
            update: b(function (e, t) {
              var n = (0, P.TS)(_, t);
              (_ = h(n)), e.update(_);
            }),
            focus: k("Focus is not supported by affirmMessage."),
            blur: k("Blur is not supported by affirmMessage."),
            clear: k("Clear is not supported by affirmMessage."),
          };
        },
        Cn = {
          amount: v.Rx,
          currency: (0, v.kw)("USD", "AUD", "CAD", "GBP", "NZD", "EUR"),
          badgeTheme: (0, v.jt)(
            (0, v.kw)(
              "black-on-mint",
              "black-on-white",
              "mint-on-black",
              "white-on-black"
            )
          ),
          introText: (0, v.jt)(
            (0, v.kw)("In", "in", "Or", "or", "Pay", "pay", "Pay in", "pay in")
          ),
          isEligible: (0, v.jt)(v.Xg),
          isCartEligible: (0, v.jt)(v.Xg),
          lockupTheme: (0, v.jt)((0, v.kw)("black", "white", "mint")),
          logoType: (0, v.jt)((0, v.kw)("badge", "lockup")),
          max: (0, v.jt)(v.Rx),
          min: (0, v.jt)(v.Rx),
          modalLinkStyle: (0, v.jt)(
            (0, v.kw)("circled-info-icon", "more-info-text", "learn-more-text")
          ),
          modalTheme: (0, v.jt)((0, v.kw)("mint", "white")),
          showInterestFree: (0, v.jt)(v.Xg),
          showLowerLimit: (0, v.jt)(v.Xg),
          showUpperLimit: (0, v.jt)(v.Xg),
          showWith: (0, v.jt)(v.Xg),
        },
        In = (0, v.mC)(Cn),
        Nn = function () {
          return Sn(function () {
            return e.e(259).then(e.bind(e, 8293));
          });
        },
        Tn = function (t) {
          var n,
            r = t.emitEvent,
            o = t.options,
            i = o.controller,
            a = o.locale,
            c = o.publicOptions,
            u = new gt.E(),
            l = function (e) {
              var t = (0, v.Gu)(In, e || {}, "create()"),
                n = t.value;
              return (
                t.warnings.forEach(function (e) {
                  return i.warn(e);
                }),
                n
              );
            },
            p = l(c),
            d = function (e, t) {
              return e.apply(void 0, [n].concat((0, s.Z)(t)));
            },
            m = [],
            f = function (e) {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  r[o] = arguments[o];
                n ? d(e, r) : m.push([e, r]);
              };
            },
            h = function () {};
          U.J.all([
            Sn(function () {
              return e.e(578).then(e.bind(e, 8434));
            }),
            Nn(),
          ]).then(
            function (e) {
              var o = (0, nt.Z)(e, 2),
                c = o[0],
                s = o[1],
                l = c.default;
              h = s.unmountModal;
              var f = t.component,
                _ = t.listenerRegistry;
              (n = l({
                component: f,
                mountModal: function (e, t) {
                  return s.mountModal({
                    controller: i,
                    listenerRegistry: _,
                    locale: e,
                    modalTheme: t,
                  });
                },
                locale: a,
                listenerRegistry: _,
              })),
                i.report("afterpay_message.loaded", {
                  load_time: u.getElapsedTime(),
                  locale: a,
                  currency: p.currency,
                }),
                (function () {
                  for (; m.length; ) {
                    var e = m.shift(),
                      t = (0, nt.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    d(n, r);
                  }
                })(),
                r("ready");
            },
            function (e) {
              i.report("afterpay_message.import_error", { error: e });
            }
          );
          var _ = function (e) {
            return function () {
              throw new A.No(e);
            };
          };
          return {
            mount: f(function (e) {
              e.mount(p);
            }),
            unmount: f(function (e) {
              h(), e.unmount();
            }),
            update: f(function (e, t) {
              var n = (0, P.TS)(p, t);
              (p = l(n)), e.update(p);
            }),
            focus: _("Focus is not supported by afterpayClearpayMessage."),
            blur: _("Blur is not supported by afterpayClearpayMessage."),
            clear: _("Clear is not supported by afterpayClearpayMessage."),
          };
        },
        Mn = {
          amount: v.MZ,
          currency: (0, v.kw)(
            "USD",
            "GBP",
            "EUR",
            "DKK",
            "NOK",
            "SEK",
            "AUD",
            "CAD",
            "NZD"
          ),
          paymentMethods: (0, v.CT)((0, v.kw)("klarna", "afterpay_clearpay")),
          countryCode: (0, v.kw)(
            "US",
            "CA",
            "AU",
            "NZ",
            "GB",
            "IE",
            "FR",
            "ES",
            "DE",
            "AT",
            "BE",
            "DK",
            "FI",
            "IT",
            "NL",
            "NO",
            "SE"
          ),
          logoColor: (0, v.jt)((0, v.kw)("black", "white", "color")),
          metaData: (0, v.jt)(
            (0, v.mC)({ messagingClientReferenceId: (0, v.AG)(v.Z_) })
          ),
        },
        Rn = (0, v.mC)(Mn),
        On = function (t) {
          var n,
            r = t.emitEvent,
            o = t.options,
            i = o.controller,
            a = o.locale,
            u = o.publicOptions,
            l = a ? (0, rt.jR)(a) : "en",
            p = new gt.E(),
            d = function (e) {
              var t = (0, v.Gu)(Rn, e || {}, "create()"),
                n = t.value;
              return (
                t.warnings.forEach(function (e) {
                  return i.warn(e);
                }),
                n
              );
            },
            m = d(u),
            f = function (e, t) {
              return e.apply(void 0, [n].concat((0, s.Z)(t)));
            },
            h = [],
            _ = function (e) {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  r[o] = arguments[o];
                n ? f(e, r) : h.push([e, r]);
              };
            },
            y = function () {};
          U.J.all([
            Sn(function () {
              return e.e(429).then(e.bind(e, 6757));
            }),
            Sn(function () {
              return e.e(557).then(e.bind(e, 7219));
            }),
          ]).then(
            function (e) {
              var o,
                a,
                s = (0, nt.Z)(e, 2),
                u = s[0],
                d = s[1],
                _ = u.default;
              y = d.unmountModal;
              var v = t.component,
                g = t.listenerRegistry;
              (n = _({
                component: v,
                mountModal: function (e) {
                  return d.mountModal({
                    controller: i,
                    listenerRegistry: g,
                    locale: e,
                    publicOptions: m,
                  });
                },
                locale: l,
                listenerRegistry: g,
              })),
                i.report(
                  "unified_message.loaded",
                  (0, c.Z)(
                    {
                      load_time: p.getElapsedTime(),
                      locale: l,
                      amount: m.amount,
                      currency: m.currency,
                      paymentMethods: m.paymentMethods,
                      countryCode: m.countryCode,
                    },
                    (null === (o = m.metaData) || void 0 === o
                      ? void 0
                      : o.messagingClientReferenceId) && {
                      messagingClientReferenceId:
                        null === (a = m.metaData) || void 0 === a
                          ? void 0
                          : a.messagingClientReferenceId,
                    }
                  )
                ),
                (function () {
                  for (; h.length; ) {
                    var e = h.shift(),
                      t = (0, nt.Z)(e, 2),
                      n = t[0],
                      r = t[1];
                    f(n, r);
                  }
                })(),
                r("ready");
            },
            function (e) {
              i.report("unified_message.import_error", { error: e });
            }
          );
          var g = function (e) {
            return function () {
              throw new A.No(e);
            };
          };
          return {
            mount: _(function (e) {
              e.mount(m);
            }),
            unmount: _(function (e) {
              y(), e.unmount();
            }),
            update: _(function (e, t) {
              var n = (0, P.TS)(m, t);
              (m = d(n)), e.update(m);
            }),
            focus: g("Focus is not supported by paymentMethodMessaging."),
            blur: g("Blur is not supported by paymentMethodMessaging."),
            clear: g("Clear is not supported by paymentMethodMessaging."),
          };
        },
        jn = e(5339),
        Zn = e(6856),
        xn = e(4215),
        Ln = e(2375),
        Bn = {
          locale: (0, v.yv)("elements()"),
          fonts: (0, v.yv)("elements()"),
          defaultValues: (0, v.jt)((0, v.mC)({ email: v.Z_ })),
        },
        Dn = (0, v.mC)(Bn),
        qn = Object.freeze({
          line1: (0, v.jt)((0, v.AG)(v.Z_)),
          line2: (0, v.jt)((0, v.AG)(v.Z_)),
          city: (0, v.jt)((0, v.AG)(v.Z_)),
          state: (0, v.jt)((0, v.AG)(v.Z_)),
          country: (0, v.jt)((0, v.AG)(v.Z_)),
          postal_code: (0, v.jt)((0, v.AG)(v.Z_)),
        }),
        Fn = Object.freeze({
          name: (0, v.jt)((0, v.AG)(v.Z_)),
          firstName: (0, v.jt)((0, v.AG)(v.Z_)),
          lastName: (0, v.jt)((0, v.AG)(v.Z_)),
          address: (0, v.jt)((0, v.mC)(qn)),
          phone: (0, v.jt)((0, v.AG)(v.Z_)),
        }),
        Un = Object.freeze({
          name: v.Z_,
          address: (0, v.mC)(qn),
          phone: (0, v.jt)((0, v.AG)(v.Z_)),
        }),
        Gn = {
          locale: (0, v.yv)("elements()"),
          fonts: (0, v.yv)("elements()"),
          mode: (0, v.or)((0, v.p3)("shipping"), (0, v.p3)("billing")),
          allowedCountries: (0, v.jt)((0, v.CT)(v.Z_)),
          autocomplete: (0, v.jt)(Ln.tX),
          blockPoBox: (0, v.jt)(v.Xg),
          defaultValues: (0, v.jt)((0, v.mC)(Fn)),
          contacts: (0, v.jt)((0, v.CT)((0, v.mC)(Un))),
          fields: (0, v.jt)(Ln.mZ),
          validation: (0, v.jt)(Ln.qF),
          display: (0, v.jt)(Ln.ef),
        },
        Yn = (0, v.mC)(Object.freeze(Gn)),
        Hn = (0, v.mC)(
          Object.freeze(
            (0, c.Z)(
              (0, c.Z)({}, Gn),
              {},
              { mode: (0, v.NM)("Mode cannot be updated.") }
            )
          )
        ),
        zn = (0, v.mC)(
          Object.freeze(
            (0, c.Z)(
              (0, c.Z)({}, Gn),
              {},
              {
                mode: (0, v.NM)(
                  "The 'shippingAddress' Element does not support the 'mode' option, use 'address' Element instead."
                ),
                contacts: (0, v.NM)(
                  "The 'shippingAddress' Element does not support the 'contacts' option, use 'address' Element instead."
                ),
                display: (0, v.NM)(
                  "The 'shippingAddress' Element does not support the 'display' option, use 'address' Element instead."
                ),
                autocomplete: (0, v.jt)(
                  (0, v.mC)({ mode: (0, v.kw)("automatic", "disabled") })
                ),
              }
            )
          )
        ),
        Kn = function (e, t, n, r, o) {
          switch (e) {
            case "linkAuthentication":
              var i = (0, v.Gu)(Dn, t, n),
                a = i.value;
              a.locale, a.fonts;
              return {
                value: (0, d.Z)(a, ["locale", "fonts"]),
                warnings: i.warnings,
              };
            case "payment":
              var u = (0, v.Gu)(
                  (function (e, t) {
                    var n = {
                      locale: (0, v.yv)("elements()"),
                      fonts: (0, v.yv)("elements()"),
                      business: (0, v.jt)((0, v.mC)({ name: v.Z_ })),
                      paymentMethodOrder: (0, v.jt)((0, v.CT)(v.Z_)),
                      fields: (0, v.jt)(Zn.mZ),
                      readOnly: (0, v.jt)(v.Xg),
                      terms: (0, v.jt)(Zn.FC),
                      defaultValues: (0, v.jt)(Zn.I2),
                    };
                    return (
                      (0, S.uN)(t, S.M4.payment_element_beta_1) &&
                        ((n = (0, c.Z)(
                          (0, c.Z)({}, n),
                          {},
                          { appearance: (0, v.jt)(v.Ry), clientSecret: jn.Hv }
                        )),
                        e &&
                          (n = (0, c.Z)(
                            (0, c.Z)({}, n),
                            {},
                            { clientSecret: (0, v.jt)(jn.Hv) }
                          ))),
                      (0, S.uN)(t, S.M4.blocked_card_brands_beta_1) &&
                        !e &&
                        ((n.allowedCardBrands = (0, v.jt)(Zn.jX)),
                        (n.disallowedCardBrands = (0, v.jt)(Zn.jX))),
                      (n.layout = (0, v.jt)(Zn.zf)),
                      (n.wallets = (0, v.jt)(Zn.Uz)),
                      (0, v.mC)(n)
                    );
                  })(r, o),
                  t,
                  n
                ),
                l = u.value,
                p = (l.locale, l.fonts, l.clientSecret),
                m = void 0 === p ? void 0 : p,
                f = (0, d.Z)(l, ["locale", "fonts", "clientSecret"]),
                h = u.warnings;
              (0, S.uN)(o, S.M4.blocked_card_brands_beta_1) && (0, xn.VZ)(t);
              var _ = (0, xn._m)(t, r, n),
                y = (0, xn.oU)(t, n);
              return {
                value: (0, c.Z)({ parsedIntentSecret: m }, f),
                warnings: [].concat((0, s.Z)(h), (0, s.Z)(_), (0, s.Z)(y)),
              };
            case "shippingAddress":
              var g = (0, v.Gu)(zn, t, n),
                b = g.value,
                w = (b.locale, b.fonts, (0, d.Z)(b, ["locale", "fonts"])),
                k = g.warnings;
              return (
                k.push(
                  "Shipping Address Element is now Address Element.\n          It is advised to switch to the Address Element. For more information,\n          see https://stripe.com/docs/elements/address-element.\n        "
                ),
                -1 === n.indexOf("update") && (0, xn._0)(t),
                (0, xn.S6)(t),
                { value: w, warnings: k }
              );
            case "address":
              if (-1 !== n.indexOf("update")) {
                var E = (0, v.Gu)(Hn, t, n),
                  P = E.value;
                P.locale, P.fonts;
                return {
                  value: (0, d.Z)(P, ["locale", "fonts"]),
                  warnings: E.warnings,
                };
              }
              var A = (0, v.Gu)(Yn, t, n),
                C = A.value,
                I = (C.locale, C.fonts, (0, d.Z)(C, ["locale", "fonts"])),
                N = A.warnings;
              return (
                (0, xn._0)(t),
                (0, xn.C1)(t),
                (0, xn.S6)(t),
                (0, xn.YR)(t),
                { value: I, warnings: N }
              );
            case "autocompleteSuggestions":
            case "achBankSearchResults":
              return { value: Object.freeze({}), warnings: [] };
            default:
              return (0, v.Rz)(e);
          }
        },
        Jn = function (e, t) {
          switch (e) {
            case "linkAuthentication":
            case "payment":
            case "shippingAddress":
            case "address":
              return (0, c.Z)(
                { height: "2px", margin: "-4px", width: "calc(100% + 8px)" },
                t
                  ? { opacity: "0", transition: "opacity 0.4s ease 0.1s" }
                  : null
              );
            case "autocompleteSuggestions":
            case "achBankSearchResults":
              return {
                height: "2px",
                margin: "-4px",
                width: "calc(100% + 8px)",
              };
            default:
              return (0, v.Rz)(e);
          }
        },
        Wn = function (e) {
          var t = e.wallet,
            n = e.options;
          if (n.controller.keyMode() === De.Kl.unknown) return !1;
          var r =
              !n.publicOptions.hasOwnProperty("wallets") ||
              "auto" === n.publicOptions.wallets ||
              "never" !== n.publicOptions.wallets[t],
            o =
              (0, S.uN)(n.betas, "payment_element_beta_1") &&
              !(0, S.uN)(n.betas, "payment_element_apple_pay_beta_1");
          return r && !o;
        },
        Vn = function (e) {
          return (
            -1 !==
            [
              "linkAuthentication",
              "payment",
              "shippingAddress",
              "address",
            ].indexOf(e)
          );
        },
        Xn = function (e) {
          var t = e.elementFrame,
            n = e.component,
            r = e.componentName,
            o = e.listenerRegistry,
            i = e.loaderEnabled,
            a = e.elementOptions,
            s = function (e) {
              if (!e) return null;
              var t = (function (e) {
                  var t = [],
                    n = (function e(n) {
                      var r = document.createElement("div");
                      return (
                        (0, b.yq)(r, n.style),
                        n.isShimmerNode && t.push(r),
                        Array.isArray(n.children) &&
                          n.children.forEach(function (t) {
                            return r.appendChild(e(t));
                          }),
                        r
                      );
                    })(e);
                  return (
                    (n.className = "__PrivateStripeElementLoader"),
                    { loaderComponent: n, shimmerNodes: t }
                  );
                })(e),
                n = t.loaderComponent,
                r = t.shimmerNodes;
              return (0, c.Z)(
                { loaderComponent: n },
                (function (e) {
                  var t,
                    n,
                    r = 3e3,
                    o = function () {
                      clearTimeout(t), clearTimeout(n);
                    };
                  return {
                    startAnimation: function () {
                      o();
                      var i = function (t) {
                        (0, b.Ql)(function () {
                          e.forEach(function (e) {
                            (e.style.transition =
                              "start" === t
                                ? "transform ".concat(r, "ms ease")
                                : ""),
                              (e.style.transform =
                                "start" === t
                                  ? "translateX(200%)"
                                  : "translateX(-100%)");
                          });
                        });
                      };
                      !(function e() {
                        i("start"),
                          (n = setTimeout(function () {
                            return i("stop");
                          }, r)),
                          (t = setTimeout(e, 3500));
                      })();
                    },
                    stopAnimation: o,
                  };
                })(r)
              );
            },
            u = new U.J(function (e) {
              var t = mt;
              t && i
                ? (t._emit("get-element-loader-ui", {
                    componentName: r,
                    elementOptions: a,
                  }),
                  t._on("element-loader-ui-callback", function (t) {
                    var n = t.message,
                      o = n.componentName,
                      i = n.loaderUiNodes;
                    r === o && e(s(i));
                  }))
                : e(null);
            }),
            l = function (e) {
              return function () {
                u.then(function (t) {
                  e(t);
                });
              };
            },
            p = function (e) {
              e.height && (n.style.height = e.height);
            };
          return {
            show: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  o = e.startAnimation;
                (r.style.opacity = "1"),
                  t.updateStyle({ opacity: "0" }),
                  (n.style.height = r.style.height),
                  n.appendChild(r),
                  o(),
                  t._on("set_styles", p),
                  t._emit("loaderstart");
              }
            }),
            hide: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  i = e.stopAnimation,
                  a = (0, G.$M)(function () {
                    t._off("set_styles", p),
                      (n.style.height = ""),
                      i(),
                      n.contains(r) && n.removeChild(r);
                  });
                o.addEventListener(r, "transitionend", a),
                  setTimeout(a, 600),
                  (r.style.opacity = "0");
              }
              t.updateStyle({ opacity: "1" });
            }),
            unmount: l(function (e) {
              if (e) {
                var r = e.loaderComponent,
                  o = e.stopAnimation;
                (r.style.opacity = "0"),
                  t.updateStyle({ opacity: "1" }),
                  t._off("set_styles", p),
                  (n.style.height = ""),
                  o(),
                  n.contains(r) && n.removeChild(r);
              } else t.updateStyle({ opacity: "1" });
            }),
          };
        },
        Qn = function (e, t) {
          var n = e.id,
            r = e.filters,
            o = e.permissions,
            i = e.prefetch,
            a = e.return_url,
            c = { id: n, accounts: t, status: e.status };
          return (
            r && (c.filters = r),
            o && (c.permissions = o),
            i && (c.prefetch = i),
            a && (c.return_url = a),
            c
          );
        },
        $n = "close",
        er = "complete",
        tr =
          ((0, v.or)((0, v.xe)("bcsess_"), (0, v.xe)("bcrepsess_")),
          function (e, t) {
            return new U.J(function (n) {
              var r;
              try {
                r = t.createLightboxFrame({
                  type: ze.NC.LINKED_ACCOUNTS_INNER,
                  options: e,
                });
              } catch (e) {
                return n({ error: { message: e.message } });
              }
              return (
                r.show(),
                r.fadeInBackdrop(),
                r._on($n, function () {
                  r.fadeOutBackdrop();
                  t.action
                    .localizeError({
                      type: "input_validation_error",
                      code: "financial_connections_session_cancelled",
                    })
                    .then(function (e) {
                      n({ error: e });
                    });
                }),
                r._on(er, function (e) {
                  r.destroy(!0)
                    .then(function () {
                      return (function (e, t) {
                        switch (e.linkAccountSessionCompleteResponse.type) {
                          case "object":
                            var n = e.linkedAccounts,
                              r = e.linkAccountSessionCompleteResponse,
                              o = e.consumer,
                              i = r.object,
                              a = i.id,
                              s = i.filters,
                              u = i.permissions,
                              l = i.prefetch,
                              p = i.payment_account,
                              d = i.bank_account_token,
                              m = i.return_url,
                              f = { id: a, linkedAccounts: n };
                            return (
                              d && (f.bankAccountToken = d),
                              p && !d && (f.paymentAccount = p),
                              s && (f.filters = s),
                              u && (f.permissions = u),
                              l && (f.prefetch = l),
                              m && (f.returnUrl = m),
                              U.J.resolve({
                                linkAccountSession: f,
                                consumer: o,
                              })
                            );
                          case "error":
                            var h,
                              _ = e.linkAccountSessionCompleteResponse.error;
                            return (
                              _.financial_connections_session &&
                                (h = Qn(
                                  e.linkAccountSessionCompleteResponse.error
                                    .financial_connections_session,
                                  []
                                )),
                              t.action.localizeError(_).then(function (e) {
                                return {
                                  error: (0, c.Z)(
                                    (0, c.Z)({}, e),
                                    {},
                                    { financial_connections_session: h }
                                  ),
                                };
                              })
                            );
                          default:
                            return (0,
                            v.Rz)(e.linkAccountSessionCompleteResponse);
                        }
                      })(e, t);
                    })
                    .then(function (e) {
                      n(e);
                    });
                }),
                null
              );
            });
          }),
        nr = function (e, t) {
          return new U.J(function (n) {
            var r;
            try {
              r = t.createLightboxFrame({
                type: ze.NC.LINKED_ACCOUNTS_INNER,
                options: e,
              });
            } catch (e) {
              return n({ error: { message: e.message } });
            }
            return (
              r.show(),
              r.fadeInBackdrop(),
              r._on($n, function () {
                r.fadeOutBackdrop();
              }),
              r._on(er, function (e) {
                r.destroy(!0)
                  .then(function () {
                    return (function (e, t) {
                      switch (e.linkAccountSessionCompleteResponse.type) {
                        case "object":
                          var n = e.linkedAccounts,
                            r = e.linkAccountSessionCompleteResponse,
                            o = e.consumer,
                            i = Qn(r.object, n);
                          return U.J.resolve({
                            financialConnectionsSession: i,
                            consumer: o,
                          });
                        case "error":
                          var a,
                            s = e.linkAccountSessionCompleteResponse.error;
                          return (
                            s.financial_connections_session &&
                              (a = Qn(
                                e.linkAccountSessionCompleteResponse.error
                                  .financial_connections_session,
                                []
                              )),
                            t.action.localizeError(s).then(function (e) {
                              return {
                                error: (0, c.Z)(
                                  (0, c.Z)({}, e),
                                  {},
                                  { financial_connections_session: a }
                                ),
                              };
                            })
                          );
                        default:
                          return (0,
                          v.Rz)(e.linkAccountSessionCompleteResponse);
                      }
                    })(e, t);
                  })
                  .then(function (e) {
                    n(e);
                  });
              }),
              null
            );
          });
        },
        rr = function (e) {
          var t = e.linkAccountSessionCreatorClientSecret,
            n = e.linkAccountSessionCreatorType,
            r = e.linkAccountSessionCreatorId,
            o = e.controller,
            i = e.consumerSessionSecret,
            a = e.linkAccountSessionCreationParams,
            c = e.consumerPublishableKey,
            s = e.checkoutPriceAmount,
            u = e.email,
            l = e.linkMobilePhone,
            p = e.linkMobilePhoneCountry,
            d = e.useContinueButtonOnSuccess,
            m = e.instantDebitsIncentive,
            f = e.incentiveEligibilitySession,
            h = e.businessName;
          (0, b.xc)(o.warn);
          var _ = o._stripeAccount,
            y = o._apiVersion,
            v = o._apiKey;
          return (
            "link_payment_intent" === n &&
              c &&
              ((v = c), (_ = null), (y = null)),
            tr(
              {
                clientSecret: t,
                linkAccountSessionCreatorType: n,
                linkAccountSessionCreatorId: r,
                linkAccountSessionCreationParams: a,
                apiKey: v,
                consumerPublishableKey: c,
                consumerSessionSecret: i,
                stripeAccount: _,
                stripeVersion: y,
                checkoutPriceAmount: s,
                email: u,
                linkMobilePhone: l,
                linkMobilePhoneCountry: p,
                useContinueButtonOnSuccess: d,
                instantDebitsIncentive: m,
                incentiveEligibilitySession: f,
                businessName: h,
              },
              o
            )
          );
        },
        or = function (e, t) {
          return (function (e) {
            var t = e.linkAccountSessionCreatorClientSecret,
              n = e.linkAccountSessionCreatorType,
              r = e.linkAccountSessionCreatorId,
              o = e.controller,
              i = e.consumerSessionSecret,
              a = e.linkAccountSessionCreationParams,
              c = e.consumerPublishableKey,
              s = e.checkoutPriceAmount,
              u = e.email,
              l = e.linkMobilePhone,
              p = e.linkMobilePhoneCountry;
            (0, b.xc)(o.warn),
              (0, v.kG)(
                t,
                "Must provide client secret to launchFinancialConnections"
              );
            var d = o._stripeAccount,
              m = o._apiVersion,
              f = o._apiKey;
            return (
              "link_payment_intent" === n &&
                c &&
                ((f = c), (d = null), (m = null)),
              nr(
                {
                  clientSecret: t,
                  linkAccountSessionCreatorType: n,
                  linkAccountSessionCreatorId: r,
                  linkAccountSessionCreationParams: a,
                  apiKey: f,
                  consumerPublishableKey: c,
                  consumerSessionSecret: i,
                  stripeAccount: d,
                  stripeVersion: m,
                  checkoutPriceAmount: s,
                  email: u,
                  linkMobilePhone: l,
                  linkMobilePhoneCountry: p,
                  useContinueButtonOnSuccess: !1,
                },
                o
              )
            );
          })({
            linkAccountSessionCreatorClientSecret: t.clientSecret,
            linkAccountSessionCreatorType: "link_account_session",
            controller: e,
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          }).then(function (e) {
            return "error" in e
              ? e
              : { financialConnectionsSession: e.financialConnectionsSession };
          });
        },
        ir = function (e, t, n, r) {
          return rr({
            linkAccountSessionCreatorClientSecret: e,
            linkAccountSessionCreatorType: "payment_intent",
            linkAccountSessionCreatorId: t,
            controller: n,
            linkAccountSessionCreationParams: { payment_method_data: r },
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          });
        },
        ar = function (e, t, n, r) {
          return rr({
            linkAccountSessionCreatorClientSecret: e,
            linkAccountSessionCreatorType: "setup_intent",
            linkAccountSessionCreatorId: t,
            controller: n,
            linkAccountSessionCreationParams: { payment_method_data: r },
            consumerPublishableKey: null,
            checkoutPriceAmount: { amount: null, currency: null },
            email: null,
            linkMobilePhone: null,
            linkMobilePhoneCountry: null,
            useContinueButtonOnSuccess: !1,
          });
        },
        cr = {
          country: "US",
          currency: "usd",
          total: { amount: 0, label: "" },
          requestPayerName: !0,
          requestPayerEmail: !1,
          requestPayerPhone: !1,
        },
        sr = function (e, t, n, r) {
          var o = "applePay" === r ? "googlePay" : "applePay",
            i = new kt({
              controller: e.controller,
              authentication: {
                apiKey: e.controller._apiKey,
                accountId: e.controller._stripeAccount || null,
              },
              mids: e.mids,
              rawOptions: (0, c.Z)(
                (0, c.Z)({}, cr),
                {},
                { disableWallets: ["browserCard", o], __isPaymentElement: !0 }
              ),
              betas: e.betas,
              queryStrategyOverride: null,
              listenerRegistry: t,
            });
          i._on("token", function (t) {
            e.controller.action
              .completeWalletConfirm({ type: "token", token: t.token.id })
              .then(function () {
                t.complete("success");
              })
              .catch(function () {
                t.complete("unexpected failure");
              });
          }),
            i._on("cancel", function () {
              e.controller.action.completeWalletConfirm({ type: "cancelled" });
            }),
            i._on("__private_do_not_use_tokenerror", function (t) {
              e.controller.action.completeWalletConfirm({
                type: "error",
                error: t,
              });
            });
          var a = i.canMakePayment().then(function (e) {
            e &&
              e[r] &&
              (n.send({ action: "should-list-wallet", payload: { wallet: r } }),
              n._on("show-wallet", function (e) {
                (0, G.i3)(e) === r && i.show();
              }));
          });
          return { pr: i, canMakePaymentPromise: a };
        },
        ur = e(3849),
        lr = { PAYMENT_INTENT: "payment_intent", SETUP_INTENT: "setup_intent" },
        pr = function (e) {
          return e ? e.id : "deferred-intent-".concat((0, g.Vj)());
        },
        dr = function (e) {
          return e ? lr[e.type] : "deferred_intent";
        },
        mr = function (e) {
          return e ? (0, P.ei)(e, ["amount", "currency"]) : null;
        },
        fr = function (e, t, n, r, o, i, a) {
          var c, s, u, l;
          (function (e) {
            var t = e.linkAccountSessionCreatorClientSecret,
              n = e.linkAccountSessionCreatorType,
              r = e.createdBy,
              o = e.controller,
              i = e.attachRequired,
              a = e.institution,
              c = e.data,
              s = e.email,
              u = e.linkMobilePhone,
              l = e.linkMobilePhoneCountry,
              p = e.manualEntryOnly,
              d = e.searchSession,
              m = e.consumerSessionSecret,
              f = e.consumerPublishableKey,
              h = e.instantDebitsIncentive,
              _ = e.incentiveEligibilitySession,
              y = e.paymentMethodOptions,
              v = e.amount;
            return rr({
              linkAccountSessionCreatorClientSecret: t,
              linkAccountSessionCreatorType: n,
              linkAccountSessionCreatorId: r,
              controller: o,
              linkAccountSessionCreationParams: {
                attach_required: i,
                initial_institution: a,
                payment_method_data: c,
                manual_entry_only: p,
                search_session: d,
                payment_method_options: y,
              },
              consumerSessionSecret: m,
              consumerPublishableKey: f,
              checkoutPriceAmount: v || { amount: null, currency: null },
              email: null != s ? s : null,
              linkMobilePhone: null != u ? u : null,
              linkMobilePhoneCountry: null != l ? l : null,
              useContinueButtonOnSuccess: !0,
              instantDebitsIncentive: h,
              incentiveEligibilitySession: _,
            });
          })({
            linkAccountSessionCreatorClientSecret:
              null == r ? void 0 : r.clientSecret,
            linkAccountSessionCreatorType: dr(r),
            createdBy: pr(r),
            controller: e.controller,
            attachRequired: !1,
            institution: t,
            data: { type: "us_bank_account" },
            searchSession: o,
            manualEntryOnly: n,
            consumerSessionSecret: i,
            consumerPublishableKey: a,
            paymentMethodOptions:
              ((c = e.deferredIntent),
              (l =
                null == c ||
                null === (s = c.payment_method_options) ||
                void 0 === s ||
                null === (u = s.us_bank_account) ||
                void 0 === u
                  ? void 0
                  : u.verification_method),
              l ? { us_bank_account: { verification_method: l } } : null),
            amount: mr(e.deferredIntent),
          }).then(function (t) {
            if ("error" in t)
              "financial_connections_session_cancelled" === t.error.code
                ? e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    error: ur.zb,
                  })
                : e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    error: ur.TH,
                  });
            else if (t.linkAccountSession.paymentAccount) {
              var n = t.linkAccountSession.paymentAccount;
              switch (n.object) {
                case "financial_connections.account":
                case "linked_account":
                  var r = n;
                  e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    bankAccount: {
                      sessionId: t.linkAccountSession.id,
                      displayName: r.display_name,
                      bankName: r.institution_name,
                      last4: r.last4 || "",
                      type: "instant",
                    },
                  });
                  break;
                case "financial_connections.bank_account":
                case void 0:
                  var o = n;
                  e.controller.action.completeLinkAccountSessionElements({
                    groupId: e.groupId,
                    bankAccount: {
                      sessionId: t.linkAccountSession.id,
                      displayName: "Bank account",
                      bankName: o.bank_name,
                      last4: o.last4,
                      type: "manual",
                    },
                  });
                  break;
                default:
                  (0, v.Rz)(n);
              }
            } else
              e.controller.action.completeLinkAccountSessionElements({
                groupId: e.groupId,
                error: ur.zb,
              });
          });
        },
        hr = function (e) {
          var t = e.options,
            n = e.institutionId,
            r = e.manualEntryOnly,
            o = e.parsedClientSecret,
            i = e.searchSession,
            a = e.consumerClientSecret,
            c = e.consumerPublishableKey;
          fr(t, n, r, o, i, a, c);
        },
        _r = function (e, t, n) {
          var r = e.createHiddenFrame(ze.NC.GOOGLE_MAPS_APP, {
            apiKey: "AIzaSyCab6eIMNih34mQb3XI_QWXagmF2_rvQAg",
            elementMode: n,
          });
          return (
            r._on("get-google-maps-predictions", function (e) {
              !(function (e, t) {
                r.send({
                  action: "get-google-maps-predictions",
                  payload: { data: { search: e, countryRestrictions: t } },
                });
              })(e.search, e.countryRestrictions);
            }),
            r._on("get-google-maps-details", function (e) {
              !(function (e) {
                r.send({
                  action: "get-google-maps-details",
                  payload: { data: { placeId: e } },
                });
              })(e.placeId);
            }),
            r._on("google-maps-callback", function (e) {
              var n = e.event,
                r = e.message;
              switch (n) {
                case "gotPredictions":
                  !(function (e) {
                    t.send({
                      action: "google-maps-predictions",
                      payload: { data: e },
                    });
                  })(r);
                  break;
                case "gotDetails":
                  !(function (e) {
                    t.send({
                      action: "google-maps-details",
                      payload: { data: e },
                    });
                  })(r);
              }
            }),
            r
          );
        },
        yr = function (e) {
          e.parsedIntentSecret, e.appearance;
          return (0, d.Z)(e, ["parsedIntentSecret", "appearance"]);
        },
        vr = function (e) {
          var t = e.controller,
            n = e.componentName,
            r = e.groupId,
            o = e.fonts,
            i = e.wait,
            a = e.publicOptions,
            c = e.controllingElement,
            s = e.controllingMode,
            u = e.mountedInternal,
            l = e.externalPaymentMethodTypes,
            p = {
              fonts: o,
              wait: i,
              rtl: Ct(document.body),
              publicOptions: yr(a),
              controllingElement: c,
              controllingMode: s,
              mountedInternal: u,
              externalPaymentMethodTypes: l,
            },
            d = Nt.P0[n];
          return t.createElementFrame(d, n, r, p);
        },
        gr = function (e) {
          var t = e.props,
            n = e.componentName,
            r = e.controllingElement,
            o = e.controllingMode,
            i = e.ariaHidden,
            a = t.component,
            s = t.elementTimings,
            u = t.getParent,
            l = t.options,
            p = vr(
              (0, c.Z)(
                (0, c.Z)({}, l),
                {},
                { componentName: n, controllingElement: r, controllingMode: o }
              )
            );
          p.appendTo(a),
            p.updateStyle(
              (0, c.Z)(
                (0, c.Z)({}, Jn(n, !1)),
                {},
                { position: "absolute", zIndex: "1" }
              )
            ),
            p._iframe.setAttribute("aria-hidden", i),
            p._iframe.setAttribute("tabindex", "-1"),
            p._on("load", function () {
              p.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: s.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: s.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: s.groupCreateTimestamp.getAsPosixTime(),
                    create: s.createTimestamp.getAsPosixTime(),
                    mount: new gt.E().getAsPosixTime(),
                  },
                  rtl: Ct(u()),
                },
              });
            }),
            p._on("set_styles", function (e) {
              p.updateStyle(e);
            }),
            "achBankSearchResults" === n &&
              p._on("us-bank-account-v2-launch", function (e) {
                return hr((0, c.Z)({ options: l }, e));
              });
        },
        br = function (e) {
          var t = e.controller,
            n = e.locale,
            r = e.isDarkMode,
            o = e.businessName,
            i = e.financialIncentive,
            a = t.createLightboxFrame({
              type: ze.NC.LINK_INFO_MODAL,
              options: {
                locale: n,
                isDarkMode: r,
                businessName: o,
                financialIncentive: i,
              },
            });
          a.show(), a.fadeInBackdrop();
          a._on("close", function () {
            a.fadeOutBackdrop(), a.destroy(!0);
          });
        },
        wr = function (e) {
          return (function (e, t) {
            return (0, P.G)(e.verification_sessions, function (e) {
              var n = e.type,
                r = e.state;
              return n === t && "STARTED" === r;
            });
          })(e, "SIGNUP");
        },
        kr = function (e) {
          if ("object" == typeof e && e && e.hasOwnProperty("layout")) {
            var t = e.layout;
            if ("string" == typeof t) {
              if (-1 !== ["auto", "accordion", "tabs"].indexOf(t))
                return {
                  type: t,
                  defaultCollapsed: !1,
                  spacedAccordionItems: !1,
                };
            } else {
              var n = t.type,
                r = t.defaultCollapsed;
              if ("accordion" === n) {
                var o = t.spacedAccordionItems;
                t.visibleAccordionItemsCount;
                return {
                  type: n,
                  defaultCollapsed: r,
                  spacedAccordionItems: o,
                };
              }
              if (-1 !== ["auto", "tabs"].indexOf(n))
                return { type: n, defaultCollapsed: r };
            }
          }
          return {};
        },
        Er = function (e, t) {
          return "object" == typeof e && e && e.hasOwnProperty(t) ? e[t] : null;
        },
        Sr = function (e, t) {
          switch (t) {
            case "payment":
              return { payment: { layout: kr(e) } };
            case "address":
              return { address: { display: Er(e, "display") } };
            default:
              return {};
          }
        },
        Pr = function (e) {
          var t = e.component,
            n = e.listenerRegistry,
            r = e.elementTimings,
            o = e.getParent,
            i = e.emitEvent,
            a = e.options,
            s = e.selfDestruct,
            u = null,
            l = [],
            p = [],
            d = vr(a),
            m =
              ("payment" === a.componentName && kr(a.publicOptions),
              -1 !== ["auto", "always"].indexOf(a.loader) &&
                Vn(a.componentName)),
            f = Xn({
              controller: a.controller,
              elementFrame: d,
              component: t,
              componentName: a.componentName,
              listenerRegistry: n,
              loaderEnabled: m,
              elementOptions: Sr(a.publicOptions, a.componentName),
            });
          d._on("load-error", function (e) {
            i("loaderror", { error: e }), s();
          });
          var h = Er(a.publicOptions, "autocomplete");
          if (
            ("shippingAddress" === a.componentName ||
              "address" === a.componentName) &&
            (null == h ? void 0 : h.mode) !== Ln.t0.disabled
          ) {
            var _ = a.publicOptions.mode || Ln.gC;
            d._on("setup-stripe-google-maps-autocomplete", function () {
              !(function (e, t, n) {
                var r = _r(e, t, n);
                t._on("get-google-maps-predictions", function (e) {
                  e.keyMode === Ln.UH.stripe &&
                    r._emit("get-google-maps-predictions", e);
                }),
                  t._on("get-google-maps-details", function (e) {
                    e.keyMode === Ln.UH.stripe &&
                      r._emit("get-google-maps-details", e);
                  });
              })(a.controller, d, _),
                gr({
                  props: e,
                  componentName: "autocompleteSuggestions",
                  controllingElement: "addressElement",
                  controllingMode: _,
                });
            }),
              (null == h ? void 0 : h.mode) === Ln.t0.google_maps_api &&
                (!(function (e, t, n) {
                  e.action.initGoogleMapsService({ apiKey: n }),
                    t._on("get-google-maps-predictions", function (n) {
                      n.keyMode === Ln.UH.merchant &&
                        e.action.getGoogleMapsPredictions({
                          data: n,
                          frameId: t.id,
                        });
                    }),
                    t._on("get-google-maps-details", function (n) {
                      n.keyMode === Ln.UH.merchant &&
                        e.action.getGoogleMapsDetails({
                          data: n,
                          frameId: t.id,
                        });
                    });
                })(a.controller, d, h.apiKey),
                gr({
                  props: e,
                  componentName: "autocompleteSuggestions",
                  controllingElement: "addressElement",
                  controllingMode: _,
                }));
          }
          if ("payment" === a.componentName) {
            var y;
            if (a.publicOptions.parsedIntentSecret)
              a.controller.action.setupStoreForElementsGroup({
                clientSecret: a.publicOptions.parsedIntentSecret,
                customerOptions: null,
                locale: a.locale,
                groupId: a.groupId,
                appearance:
                  null !== (y = a.publicOptions.appearance) && void 0 !== y
                    ? y
                    : a.appearance,
                loader: a.loader,
                externalPaymentMethodTypes: a.externalPaymentMethodTypes,
              });
            var v = null,
              g = function () {
                return Nn().then(function (e) {
                  var t = e.mountModal,
                    n = e.unmountModal;
                  return (
                    l.push(function () {
                      n();
                    }),
                    t
                  );
                });
              };
            d._on("setup-afterpay-modal", function () {
              v || (v = g());
            }),
              d._on("mount-afterpay-modal", function (e) {
                var t = e.locale,
                  r = e.modalTheme;
                v || (v = g()),
                  v.then(function (e) {
                    e({
                      controller: a.controller,
                      listenerRegistry: n,
                      locale: t,
                      modalTheme: r,
                    });
                  });
              });
            var w = null,
              k = function () {
                return Pn().then(function (e) {
                  var t = e.mountModal,
                    n = e.unmountModal;
                  return (
                    l.push(function () {
                      n();
                    }),
                    t
                  );
                });
              };
            d._on("setup-affirm-modal", function () {
              w || (w = k());
            }),
              d._on("affirm-modal-open", function (e) {
                var t = e.link;
                w || (w = k()),
                  w.then(function (e) {
                    e({
                      controller: a.controller,
                      listenerRegistry: n,
                      url: t,
                    });
                  });
              }),
              d._on("setup-us-bank-account", function () {
                gr({
                  props: e,
                  componentName: "achBankSearchResults",
                  controllingElement: "paymentElement",
                  ariaHidden: "true",
                });
              });
            var E = null;
            !E &&
              Wn({ wallet: "applePay", options: a }) &&
              (E = sr(a, n, d, "applePay")),
              d._on("update-apple-pay", function (e) {
                var t;
                null === (t = E) || void 0 === t || t.pr.update(e);
              });
            var S = null;
            if (!S && Wn({ wallet: "googlePay", options: a })) {
              var P = (S = sr(a, n, d, "googlePay")).pr._backingLibraries
                .GOOGLE_PAY;
              P && p.push(P._destroy);
            }
            if (
              (d._on("update-google-pay", function (e) {
                var t;
                null === (t = S) || void 0 === t || t.pr.update(e);
              }),
              S || E)
            ) {
              var A,
                C,
                I = a.groupId;
              a.controller.action.fetchingWallets({
                groupId: I,
                isComplete: !1,
              }),
                U.J.all([
                  null === (A = S) || void 0 === A
                    ? void 0
                    : A.canMakePaymentPromise,
                  null === (C = E) || void 0 === C
                    ? void 0
                    : C.canMakePaymentPromise,
                ]).then(function () {
                  a.controller.action.fetchingWallets({
                    groupId: I,
                    isComplete: !0,
                  });
                });
            }
            d._on("link-launch", function (e) {
              var t = e.institutionId,
                n = e.parsedClientSecret,
                r = e.consumerClientSecret,
                o = e.consumerPublishableKey,
                i = e.checkoutPriceAmount,
                c = e.email,
                s = e.linkMobilePhone,
                u = e.linkMobilePhoneCountry,
                l = e.instantDebitsIncentive,
                p = e.businessName;
              (function (e, t, n, r, o, i, a, c, s, u, l, p) {
                return rr({
                  linkAccountSessionCreatorClientSecret: t,
                  linkAccountSessionCreatorType: "link_payment_intent",
                  linkAccountSessionCreatorId: n,
                  controller: r,
                  linkAccountSessionCreationParams: { initial_institution: e },
                  consumerSessionSecret: o,
                  consumerPublishableKey: i,
                  checkoutPriceAmount: a,
                  email: c,
                  linkMobilePhone: s,
                  linkMobilePhoneCountry: u,
                  useContinueButtonOnSuccess: !1,
                  instantDebitsIncentive: l,
                  incentiveEligibilitySession: n,
                  businessName: p,
                });
              })(
                t,
                n.clientSecret,
                n.id,
                a.controller,
                null != r ? r : void 0,
                o,
                i,
                c,
                s,
                u,
                l,
                p
              ).then(function (e) {
                if (!e.error) {
                  var t = e.linkAccountSession,
                    n = e.consumer;
                  if (n && !r) {
                    var o;
                    a.controller.action.loginWithConsumerInfo({
                      consumerInfo: n,
                      groupId: a.groupId,
                    });
                    var i =
                      null === (o = n.paymentDetails[0]) || void 0 === o
                        ? void 0
                        : o.id;
                    n.country && "US" !== n.country
                      ? a.controller.action.clearInstantDebitsIncentive({
                          groupId: a.groupId,
                        })
                      : i &&
                        wr(n.consumerSession) &&
                        a.controller.action.confirmInstantDebitsIncentiveForPaymentDetails(
                          { bankPaymentDetailsId: i, groupId: a.groupId }
                        );
                  } else
                    t.paymentAccount &&
                      a.controller.action.createBankPaymentDetails({
                        bankAccount: t.paymentAccount.id,
                        groupId: a.groupId,
                      });
                }
              });
            }),
              d._on("us-bank-account-v2-launch", function (e) {
                hr((0, c.Z)({ options: a }, e));
              });
          }
          d._on("mount-link-info-modal", function (e) {
            br((0, c.Z)({ controller: a.controller }, e));
          }),
            (0, b.yq)(
              t,
              (0, c.Z)(
                (0, c.Z)({}, Tt.KC),
                {},
                { margin: "-4px 0", transition: "height .35s ease" }
              )
            ),
            d.appendTo(t),
            d.updateStyle(Jn(a.componentName, m)),
            d._on("load", function () {
              d.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: r.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: r.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: r.groupCreateTimestamp.getAsPosixTime(),
                    create: r.createTimestamp.getAsPosixTime(),
                    mount: u ? u.getAsPosixTime() : 0,
                  },
                  rtl: Ct(o()),
                },
              });
            }),
            Nt.Nb.forEach(function (e) {
              d._on(e, function (t) {
                return i(e, t);
              });
            }),
            d._on("set_styles", function (e) {
              d.updateStyle(e);
            }),
            d._on("redirectfocus", function (e) {
              var n,
                r = e.focusDirection;
              null === (n = (0, b.dh)(t, r)) || void 0 === n || n.focus();
            }),
            d._on("submit", function () {
              i("submit");
              var e = t.closest("form");
              if (e) {
                var n = [
                  'button[type="submit"]',
                  'input[type="submit"]',
                  'input[type="image"]',
                ]
                  .map(function (t) {
                    return e.querySelector(t);
                  })
                  .filter(function (e) {
                    return !!e;
                  })[0];
                n && n.click();
              }
            });
          m &&
            d._on("ready", function () {
              f.hide();
            });
          return {
            update: function (e) {
              e.appearance &&
                a.controller.action.updateElementsOptions({
                  locale: void 0,
                  appearance: e.appearance,
                  groupId: a.groupId,
                }),
                d.update(e);
            },
            focus: function () {
              It(),
                d.focus(),
                d.send({ action: "stripe-user-focus", payload: {} });
            },
            blur: function () {
              d.blur();
            },
            clear: function () {
              d.clear();
            },
            mount: function () {
              u = new gt.E();
              var e = o();
              e &&
                (m && (f.show(), l.push(f.unmount)),
                (0, b.mb)(e, [[Nt.et, !0]]),
                l.push(function () {
                  (0, b.mb)(e, [[Nt.et, !1]]);
                }));
            },
            unmount: function () {
              for (
                a.controller.action.elementUnmounted({
                  elementName: a.componentName,
                  groupId: a.groupId,
                });
                l.length;

              )
                l.pop()();
              d.unmount();
            },
            destroy: function () {
              for (; p.length; ) {
                var e;
                null === (e = p.pop()) || void 0 === e || e();
              }
            },
            collapse: function () {
              d.collapse();
            },
            getValue: function () {
              return (
                d.getValue(),
                new U.J(function (e) {
                  d._on("get-value-response", function t(n) {
                    return d._off("get-value-response", t), e(n);
                  });
                })
              );
            },
            _frame: d,
          };
        },
        Ar = function (e) {
          var t = e.options,
            n = (0, d.Z)(e, ["options"]),
            r = t.controller,
            o = t.componentName,
            i = t.publicOptions,
            a = (0, d.Z)(t, ["controller", "componentName", "publicOptions"]),
            s = (function (e) {
              switch (e) {
                case "linkAuthentication":
                case "payment":
                case "shippingAddress":
                case "address":
                case "autocompleteSuggestions":
                case "achBankSearchResults":
                  return e;
                default:
                  throw new Error("Unexpected element type for implementation");
              }
            })(o);
          if (
            ["address", "shippingAddress"].indexOf(s) > -1 &&
            r.keyMode() === De.Kl.unknown
          )
            throw new A.No(
              "It looks like you're using an older Stripe key. The Address Element is only available for use with a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
            );
          var u = Kn(
            s,
            i || {},
            "elements.create('".concat(s, "')"),
            !1,
            t.betas
          );
          u.warnings.forEach(function (e) {
            return r.warn(e);
          });
          var l = ["payment", "linkAuthentication"].indexOf(o) > -1,
            p =
              "payment" === t.componentName &&
              (u.value.parsedIntentSecret || null);
          if (l && !t.clientSecret && !t.deferredIntent && !p)
            throw new A.No(
              "In order to create a ".concat(
                t.componentName,
                ' element, you must pass a valid PaymentIntent or SetupIntent client secret when creating the Elements group.\n\n  e.g. stripe.elements({clientSecret: "{{CLIENT_SECRET}}"})'
              )
            );
          var m = Pr(
              (0, c.Z)(
                (0, c.Z)({}, n),
                {},
                {
                  options: (0, c.Z)(
                    (0, c.Z)({}, a),
                    {},
                    { controller: r, componentName: s, publicOptions: u.value }
                  ),
                }
              )
            ),
            f = m.update,
            h = (0, d.Z)(m, ["update"]);
          return (0, c.Z)(
            {
              update: function (e) {
                var n = Kn(s, e || {}, "".concat(s, ".update()"), !0, t.betas);
                n.warnings.forEach(function (e) {
                  return r.warn(e);
                }),
                  f(n.value);
              },
            },
            h
          );
        },
        Cr = Object.freeze({
          header: (0, v.jt)((0, v.mC)({ text: (0, v.jt)(v.Z_) })),
          showOnAdd: (0, v.jt)((0, v.kw)("auto", "never")),
        }),
        Ir = Object.freeze(
          (0, c.Z)(
            {
              clientSecret: xn.pu,
              descriptor: (0, v.jt)((0, v.kw)("cart", "bag", "basket")),
            },
            Cr
          )
        ),
        Nr =
          ((0, c.Z)({}, (0, P.CE)(Ir, ["clientSecret"])),
          Object.freeze({
            external_id: v.Z_,
            name: v.Z_,
            description: (0, v.jt)(v.Z_),
            image: (0, v.jt)(v.Z_),
            unit_amount: v.Rx,
          })),
        Tr = Object.freeze({
          price: (0, v.jt)(v.Z_),
          product: (0, v.jt)(v.Z_),
          item_details: (0, v.jt)((0, v.mC)(Nr)),
          quantity: (0, v.jt)(v.Rx),
        }),
        Mr =
          ((0, c.Z)(
            (0, c.Z)({}, Tr),
            {},
            { quantity: v.Rx, outerRequestId: v.Rx }
          ),
          ["ready", "change", "checkout"]),
        Rr = "StripeElement",
        Or = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        jr = {
          visibility: "hidden",
          position: "fixed",
          top: "0px",
          left: "100%",
          width: "100%",
          height: "100%",
          "pointer-events": "none",
          "max-width": "none",
          "max-height": "none",
          "min-width": "none",
          "min-height": "none",
        },
        Zr = {
          visibility: "visible",
          position: "fixed",
          top: "0px",
          left: "0px",
          "z-index": "99999",
          width: "100%",
          height: "100%",
          "pointer-events": "all",
          "max-width": "none",
          "max-height": "none",
          "min-width": "none",
          "min-height": "none",
        },
        xr = function (e) {
          var t = e.component,
            n = e.getParent,
            r = e.emitEvent,
            o = e.options,
            i = e.selfDestruct,
            a = {
              mounted: !1,
              frameReady: !1,
              visible: !1,
              showStarted: !1,
              releasePageScroll: null,
              restoreFocus: null,
              runOnUnmount: [],
              addRequestIdCounter: 0,
            };
          (0, b.yq)(t, Or);
          var s = (function (e) {
            var t = e.controller,
              n = e.componentName,
              r = e.groupId,
              o = {
                fonts: e.fonts,
                wait: e.wait,
                rtl: !1,
                publicOptions: e.publicOptions,
                controllingElement: e.controllingElement,
              };
            return t.createElementFrame(ze.NC.CART_ELEMENT, n, r, o);
          })(o);
          s.updateStyle(jr), s.appendTo(t);
          var u = function (e) {
              return function (t) {
                a.mounted && a.frameReady && e(t);
              };
            },
            l = u(function () {
              a.visible ||
                ((a.visible = !0),
                s.updateStyle(Zr),
                s.show(),
                (a.releasePageScroll = (0, b.MV)()),
                (a.restoreFocus ? a.restoreFocus() : U.J.resolve()).then(
                  function () {
                    var e = (0, b.W3)(s._iframe),
                      t = e.lockedPromise,
                      n = e.lockedElements;
                    a.restoreFocus = function () {
                      return (0, b.gl)(t, n);
                    };
                  }
                ));
            }),
            p = u(function () {
              a.visible && (s.hide(), a.showStarted || (y(), v()));
            }),
            d = u(function (e) {
              s.cancelCheckout(e);
            }),
            m = function (e) {
              return function () {
                throw new A.No(e);
              };
            },
            f = m("focus() is not supported by the cart Element."),
            h = m("blur() is not supported by the cart Element."),
            _ = m("clear() is not supported by the cart Element.");
          s._on("load-error", function (e) {
            null == r || r("loaderror", { error: e }), null == i || i();
          }),
            s._on("ready", function () {
              a.frameReady = !0;
            }),
            Mr.forEach(function (e) {
              s._on(e, function (t) {
                return null == r ? void 0 : r(e, t);
              });
            }),
            s._on("lineitemclick", function (e) {
              var t = e.url,
                n = !1;
              r("lineitemclick", {
                preventDefault: function () {
                  n = !0;
                },
                url: t,
              }),
                n || (window.location.href = t);
            }),
            s._on("show-start", function () {
              a.visible && (a.showStarted = !0);
            });
          var y = function () {
              var e, t;
              null === (e = a.releasePageScroll) || void 0 === e || e.call(a),
                (a.releasePageScroll = null),
                null === (t = a.restoreFocus) ||
                  void 0 === t ||
                  t.call(a).then(function () {
                    a.restoreFocus = null;
                  }),
                (a.showStarted = !1),
                (a.visible = !1);
            },
            v = function () {
              a.visible || s.updateStyle(jr);
            };
          return (
            s._on("hide-start", y),
            s._on("hide-complete", v),
            s._on("show", l),
            {
              update: function (e) {
                s.update(e);
              },
              focus: f,
              blur: h,
              clear: _,
              mount: function () {
                a.mounted = !0;
                var e = n();
                e &&
                  ((0, b.mb)(e, [[Rr, !0]]),
                  a.runOnUnmount.push(function () {
                    (0, b.mb)(e, [[Rr, !1]]);
                  }));
                var t = function () {
                  d();
                };
                window.addEventListener("beforeunload", t),
                  a.runOnUnmount.push(function () {
                    return window.removeEventListener("beforeunload", t);
                  });
                var r = function (e) {
                  "Escape" === e.code && p();
                };
                window.addEventListener("keydown", r),
                  a.runOnUnmount.push(function () {
                    return window.removeEventListener("keydown", r);
                  });
              },
              unmount: function () {
                for (var e, t; a.runOnUnmount.length; ) {
                  var n;
                  null === (n = a.runOnUnmount.pop()) || void 0 === n || n();
                }
                null === (e = a.releasePageScroll) || void 0 === e || e.call(a),
                  null === (t = a.restoreFocus) || void 0 === t || t.call(a),
                  (a.mounted = !1),
                  (a.releasePageScroll = null),
                  (a.restoreFocus = null),
                  s.unmount();
              },
              show: l,
              hide: p,
              addLineItem: function (e) {
                if (!a.frameReady || !a.mounted)
                  return U.J.resolve({ clientError: "initializing" });
                var t = ++a.addRequestIdCounter;
                return (
                  s.addLineItem(
                    (0, c.Z)(
                      (0, c.Z)({}, e),
                      {},
                      { quantity: e.quantity || 1, outerRequestId: t }
                    )
                  ),
                  new U.J(function (e) {
                    s._on("add-line-item-response", function n(r) {
                      var o = r.outerRequestId,
                        i = r.error;
                      o === t &&
                        (s._off("add-line-item-response", n),
                        e(i ? { error: i } : {}));
                    });
                  })
                );
              },
              cancelCheckout: d,
              _frame: s,
            }
          );
        },
        Lr = function (e) {
          var t = e.options,
            n = (0, d.Z)(e, ["options"]),
            r = t.controller,
            o = t.publicOptions,
            i =
              (t.componentName,
              (0, d.Z)(t, ["controller", "publicOptions", "componentName"]));
          if (r.keyMode() === De.Kl.unknown)
            throw new A.No(
              "It looks like you're using an older Stripe key. The Cart Element is only available for use with a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n      You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
            );
          var a,
            s,
            u,
            l =
              ((a = o || {}),
              (s = "elements.create('cart', options)"),
              (0, v.Gu)(
                (0, v.mC)(Ir),
                a,
                s,
                u ? { authenticatedOrigin: u } : null
              )),
            p = l.value,
            m = p.clientSecret,
            f = (0, d.Z)(p, ["clientSecret"]);
          l.warnings.forEach(function (e) {
            return r.warn(e);
          });
          var h = {},
            _ = function (e, t) {
              return (
                e.forEach(function (e) {
                  return r.warn(e);
                }),
                U.J.resolve({ clientError: t })
              );
            },
            y = xr(
              (0, c.Z)(
                (0, c.Z)({}, n),
                {},
                {
                  options: (0, c.Z)(
                    (0, c.Z)({}, i),
                    {},
                    { componentName: "cart", controller: r, publicOptions: f }
                  ),
                }
              )
            ),
            g = y.update,
            b = y.cancelCheckout,
            w = y.addLineItem,
            k = (0, d.Z)(y, ["update", "cancelCheckout", "addLineItem"]);
          return (
            r.action
              .fetchCartSession({ clientSecret: m, groupId: t.groupId })
              .catch(function (t) {
                e.emitEvent("loaderror", { error: t }), e.selfDestruct();
              }),
            (0, c.Z)(
              (0, c.Z)({}, k),
              {},
              {
                update: function (e) {
                  var t = (function (e, t, n) {
                      return (0, v.Gu)(
                        (0, v.mC)(Cr),
                        e,
                        t,
                        n ? { authenticatedOrigin: n } : null
                      );
                    })(e || {}, "cart.update()"),
                    n = t.value;
                  t.warnings.forEach(function (e) {
                    return r.warn(e);
                  }),
                    g(n);
                },
                addLineItem: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a,
                    c = (function (e, t) {
                      var n = (0, v.Gu)(
                        (0, v.mC)(Tr),
                        e,
                        "cart.addLineItem()",
                        t ? { authenticatedOrigin: t } : null
                      );
                      return { value: n.value, warnings: n.warnings };
                    })(e || {}),
                    s = c.value,
                    u = c.warnings,
                    l = s.price,
                    p = s.product,
                    d = s.item_details,
                    m =
                      ((t = {
                        priceId: l,
                        productId: p,
                        externalId: null == d ? void 0 : d.external_id,
                      }),
                      (n = t.priceId),
                      (r = t.productId),
                      (o = t.addedBy),
                      (i = t.externalId),
                      (a = n || r || o),
                      i && (a = "inline_" + i),
                      a);
                  if (m) {
                    if (
                      (function (e) {
                        var t = Date.now(),
                          n = h[e],
                          r = void 0 !== n && t - n < 200;
                        return r || (h[e] = t), r;
                      })(m)
                    )
                      return (
                        u.push(
                          "addLineItem() cannot be consecutively called within ".concat(
                            200,
                            " milliseconds for the same price or product."
                          )
                        ),
                        _(u, "throttled")
                      );
                  } else
                    u.push(
                      "addLineItem() must be provided either a product, price, or item_details."
                    );
                  return u.length ? _(u, "integration") : w(s);
                },
                cancelCheckout: function (e) {
                  var t = "string" == typeof e,
                    n = t ? e : "";
                  t ||
                    r.warn(
                      "Expected a string passed to cancelCheckout(), but received ".concat(
                        typeof e,
                        "."
                      )
                    ),
                    b(n);
                },
              }
            )
          );
        },
        Br = Object.freeze({
          applePay: (0, v.jt)((0, v.kw)("always", "auto", "never")),
          googlePay: (0, v.jt)((0, v.kw)("always", "auto", "never")),
        }),
        Dr = Object.freeze({
          applePay: (0, v.jt)((0, v.kw)("black", "white", "white-outline")),
          googlePay: (0, v.jt)((0, v.kw)("black", "white")),
          paypal: (0, v.jt)(
            (0, v.kw)("gold", "blue", "silver", "white", "black")
          ),
        }),
        qr = Object.freeze({
          applePay: (0, v.jt)(
            (0, v.kw)(
              "add-money",
              "book",
              "buy",
              "check-out",
              "contribute",
              "donate",
              "order",
              "plain",
              "reload",
              "rent",
              "subscribe",
              "support",
              "tip",
              "top-up"
            )
          ),
          googlePay: (0, v.jt)(
            (0, v.kw)(
              "book",
              "buy",
              "checkout",
              "donate",
              "order",
              "pay",
              "plain",
              "subscribe"
            )
          ),
          paypal: (0, v.jt)((0, v.kw)("paypal", "checkout", "buynow", "pay")),
        }),
        Fr = (0, v.kw)("auto", "horizontal", "vertical"),
        Ur = {
          paymentDescription: v.Z_,
          managementURL: v.Z_,
          regularBilling: (0, v.mC)({
            amount: v.MZ,
            label: v.Z_,
            recurringPaymentStartDate: (0, v.jt)(v.Kr),
            recurringPaymentEndDate: (0, v.jt)(v.Kr),
            recurringPaymentIntervalUnit: (0, v.jt)(
              (0, v.kw)("year", "month", "day", "hour", "minute")
            ),
            recurringPaymentIntervalCount: (0, v.jt)((0, v.M2)(0)),
          }),
        },
        Gr = Object.freeze({
          recurringPaymentRequest: (0, v.jt)(
            (0, v.mC)(
              (0, c.Z)(
                (0, c.Z)({}, Ur),
                {},
                { billingAgreement: (0, v.jt)(v.Z_) }
              )
            )
          ),
        }),
        Yr = Object.freeze({
          recurringPaymentRequest: (0, v.jt)((0, v.mC)(Ur)),
        }),
        Hr = Object.freeze({
          locale: (0, v.yv)("elements()"),
          buttonHeight: (0, v.jt)((0, v.rS)(40, 55)),
          layout: (0, v.jt)(
            (0, v.or)(
              Fr,
              (0, v.mC)({
                type: Fr,
                visibleButtonCount: (0, v.jt)((0, v.ig)(0)),
              })
            )
          ),
          paymentMethodOrder: (0, v.jt)((0, v.CT)(v.Z_)),
        }),
        zr =
          ((0, c.Z)(
            (0, c.Z)({}, Hr),
            {},
            {
              buttonTheme: (0, v.jt)((0, v.mC)(Dr)),
              buttonType: (0, v.jt)((0, v.mC)(qr)),
              wallets: (0, v.jt)((0, v.mC)(Br)),
            }
          ),
          Object.freeze({
            locale: (0, v.yv)("elements()"),
            buttonHeight: (0, v.jt)((0, v.O)(40, 55)),
            layout: (0, v.jt)(
              (0, v.or)(
                Fr,
                (0, v.mC)({
                  type: Fr,
                  visibleButtonCount: (0, v.jt)((0, v.M4)(0)),
                })
              )
            ),
            paymentMethodOrder: (0, v.jt)((0, v.CT)(v.Z_)),
          })),
        Kr = Object.freeze(
          (0, c.Z)(
            (0, c.Z)({}, zr),
            {},
            {
              buttonTheme: (0, v.jt)((0, v.mC)(Dr)),
              buttonType: (0, v.jt)((0, v.mC)(qr)),
              wallets: (0, v.jt)((0, v.mC)(Br)),
            }
          )
        ),
        Jr = Object.freeze({ name: v.Z_, amount: v.MZ }),
        Wr = Object.freeze({
          unit: (0, v.kw)("hour", "day", "business_day", "week", "month"),
          value: (0, v.M4)(0),
        }),
        Vr = Object.freeze({
          id: v.Z_,
          amount: v.MZ,
          displayName: v.Z_,
          deliveryEstimate: (0, v.jt)(
            (0, v.mC)({
              maximum: (0, v.jt)((0, v.mC)(Wr)),
              minimum: (0, v.jt)((0, v.mC)(Wr)),
            })
          ),
        }),
        Xr = Object.freeze({
          allowedShippingCountries: (0, v.jt)((0, v.CT)(v.Z_)),
          business: (0, v.jt)((0, v.mC)({ name: v.Z_ })),
          billingAddressRequired: (0, v.Wc)(v.Xg, function () {
            return !0;
          }),
          emailRequired: (0, v.jt)(v.Xg),
          lineItems: (0, v.jt)((0, v.CT)((0, v.mC)(Jr))),
          phoneNumberRequired: (0, v.jt)(v.Xg),
          shippingAddressRequired: (0, v.jt)(v.Xg),
          shippingRates: (0, v.jt)((0, v.uw)("id")((0, v.CT)((0, v.mC)(Vr)))),
          applePay: (0, v.jt)((0, v.mC)(Gr)),
        }),
        Qr = Object.freeze({
          lineItems: (0, v.jt)((0, v.CT)((0, v.mC)(Jr))),
          shippingRates: (0, v.jt)((0, v.uw)("id")((0, v.CT)((0, v.mC)(Vr)))),
          applePay: (0, v.jt)((0, v.mC)(Yr)),
        }),
        $r = Object.freeze({
          reason: (0, v.jt)((0, v.kw)("fail", "invalid_shipping_address")),
        }),
        eo = function (e, t) {
          if (t && e) {
            var n = t.reduce(function (e, t) {
              return e + t.amount;
            }, 0);
            if (e < n)
              throw new A.No(
                "The amount ".concat(
                  e,
                  " is less than the total amount of the line items provided."
                )
              );
          }
        },
        to = function (e) {
          var t = [];
          if (e.lineItems) {
            e.lineItems;
            var n = (0, d.Z)(e, ["lineItems"]);
            return (
              t.push(
                "It looks like you're passing `lineItems` when the `mode` on Elements is 'setup'. You may only pass `lineItems` when the `mode` is 'payment'."
              ),
              { value: n, warnings: t }
            );
          }
          return { value: e, warnings: t };
        },
        no = ["ready", "focus", "blur", "escape"],
        ro = "StripeElement",
        oo = {
          margin: "0",
          padding: "0",
          border: "none",
          display: "block",
          background: "transparent",
          position: "relative",
          opacity: "1",
        },
        io = { height: "2px", margin: "-4px", width: "calc(100% + 8px)" },
        ao = function (e) {
          var t = e.controller,
            n = e.eventName,
            r = e.time,
            o = e.timeLabel,
            i = e.reject,
            a = e.resolve,
            c = e.canMerchantReject,
            s = null,
            u = !1,
            l = !1;
          return (
            (s = setTimeout(function () {
              l = !0;
              var e = c
                ? 'Timed out waiting for a call to resolve() or reject(). If you listen to the "'
                    .concat(
                      n,
                      '" event, then you must call event.resolve or event.reject() in the "'
                    )
                    .concat(n, '" handler within ')
                    .concat(o, ".")
                : 'Timed out waiting for a call to resolve(). If you listen to the "'
                    .concat(
                      n,
                      '" event, then you must call event.resolve in the "'
                    )
                    .concat(n, '" handler within ')
                    .concat(o, ".");
              t.warn(e), i();
            }, r)),
            {
              resolve: function (e) {
                if (l)
                  t.warn(
                    "Call to resolve() was ignored because it has already timed out. Please ensure that resolve is called within ".concat(
                      o,
                      "."
                    )
                  );
                else if (u) {
                  var n = c
                    ? "Call to resolve() was ignored because resolve or reject has already been called. Do not call resolve or reject more than once."
                    : "Call to resolve() was ignored because resolve has already been called. Do not call resolve more than once.";
                  t.warn(n);
                } else s && clearTimeout(s), (u = !0), a(e);
              },
              reject: function () {
                l
                  ? t.warn(
                      "Call to reject() was ignored because it has already timed out. Please ensure that reject is called within ".concat(
                        o,
                        "."
                      )
                    )
                  : u
                  ? t.warn(
                      "Call to reject() was ignored because resolve or reject has already been called. Do not call resolve or reject more than once."
                    )
                  : (s && clearTimeout(s), (u = !0), i());
              },
            }
          );
        },
        co = function () {
          throw new A.No(
            "You cannot update the currency if the payment interface is already open."
          );
        },
        so = function (e, t, n) {
          return e(1 === n ? "pbe.".concat(t) : "pbe.".concat(t, "s"));
        },
        uo = function (e, t) {
          var n = e.minimum,
            r = e.maximum;
          if (!n && !r) return U.J.resolve("");
          if (n && !r) {
            var o = n.value,
              i = n.unit;
            return so(t, i, o).then(function (e) {
              return t("pbe.delivery_in", {
                value: o.toString(),
                unit: e || "",
              });
            });
          }
          if (!n && r) {
            var a = r.value,
              c = r.unit;
            return so(t, c, a).then(function (e) {
              return t("pbe.delivery_within", {
                value: a.toString(),
                unit: e || "",
              });
            });
          }
          var s = n,
            u = s.unit,
            l = s.value,
            p = r,
            d = p.unit,
            m = p.value;
          return u === d
            ? so(t, d, m).then(function (e) {
                return t("pbe.delivery_in_to", {
                  minValue: l.toString(),
                  maxValue: m.toString(),
                  unit: e || "",
                });
              })
            : so(t, u, l).then(function (e) {
                return so(t, d, m).then(function (n) {
                  return t("pbe.delivery_in_to_units", {
                    minValue: l.toString(),
                    minUnit: e || "",
                    maxValue: m.toString(),
                    maxUnit: n || "",
                  });
                });
              });
        },
        lo = 0,
        po = 1,
        mo = function (e) {
          if (!e) return null;
          var t = [e.givenName, e.familyName]
            .filter(function (e) {
              return e && "string" == typeof e;
            })
            .join(" ");
          return "" === t ? null : t;
        },
        fo = function (e, t) {
          if (e) {
            return Fe(e, function () {
              t.report("pbe.apple_pay.missing_country_code", {
                country: e.country,
              });
            });
          }
        },
        ho = function (e, t, n) {
          t.report("pbe.apple_pay.session_creation_failed", { error: n }),
            e.abort();
          var r = n.message;
          "string" == typeof r && t.warn(r);
        },
        _o = function (e, t, n, r) {
          return {
            amount: (0, ge.Fe)(e, n),
            label: t,
            type: r ? "pending" : "final",
          };
        },
        yo = function (e, t, n) {
          var r = t.amount,
            o = t.deliveryEstimate,
            i = t.displayName,
            a = t.id;
          return uo(o || {}, e).then(function (e) {
            return {
              label: i,
              detail: e || "",
              amount: (0, ge.Fe)(r, n),
              identifier: a,
            };
          });
        },
        vo = function (e) {
          var t = e.administrativeArea,
            n = e.countryCode;
          return {
            city: e.locality || "",
            state: t || "",
            postal_code: e.postalCode || "",
            country: (null == n ? void 0 : n.toUpperCase()) || "",
          };
        },
        go = function (e) {
          if (e) {
            var t = e.addressLines;
            return (0, c.Z)(
              {
                line1: t && Array.isArray(t) ? t[0] : "",
                line2: t && Array.isArray(t) ? t.slice(1).join(", ") : null,
              },
              vo(e)
            );
          }
        },
        bo = function (e) {
          var t = e.controller,
            n = e.eventHandlers,
            r = e.groupId,
            o = e.listenerRegistry,
            i = {
              isPaymentSheetShowing: !1,
              total: 0,
              businessName: "",
              currency: "usd",
              pending: !1,
              shippingRates: void 0,
              selectedShippingRate: void 0,
              allowedShippingCountries: void 0,
              lineItems: void 0,
              privateSession: void 0,
              isUsingRecurringPaymentRequest: !1,
              recurringPaymentRequestBillingAgreement: void 0,
            },
            a = function () {
              (i.isPaymentSheetShowing = !1),
                (i.privateSession = void 0),
                t.action.payButtonSheetClosed({ groupId: r }),
                t.action.expressCheckoutConfirmEnd({ groupId: r });
            },
            u = function (e, s) {
              o.addEventListener(
                e,
                "validatemerchant",
                O(
                  (function (e) {
                    var t = e.privateSession,
                      n = e.controller,
                      r = e.displayName,
                      o = e.isPaymentSheetShowing;
                    return function (e) {
                      n.action
                        .createApplePaySession({
                          data: {
                            validation_url: e.validationURL,
                            domain_name: window.location.hostname,
                            display_name: r,
                          },
                          usesPayButtonElement: !0,
                        })
                        .then(
                          function (e) {
                            switch (e.type) {
                              case "object":
                                if (!o()) return;
                                t.completeMerchantValidation(
                                  JSON.parse(e.object.session)
                                );
                                break;
                              case "error":
                                ho(t, n, e.error);
                                break;
                              default:
                                (0, v.Rz)(e);
                            }
                          },
                          function (e) {
                            return ho(t, n, e);
                          }
                        );
                    };
                  })({
                    privateSession: e,
                    controller: t,
                    displayName: s,
                    isPaymentSheetShowing: function () {
                      return i.isPaymentSheetShowing;
                    },
                  })
                )
              ),
                o.addEventListener(
                  e,
                  "cancel",
                  O(function () {
                    a(), n.cancel();
                  })
                );
              var u = function () {
                  var e = i.total,
                    t = i.businessName,
                    n = i.currency,
                    r = i.pending;
                  return _o(e, t, n, r);
                },
                l = function (e) {
                  var n = e.lineItems,
                    r = e.shippingRates,
                    o = e.applePay,
                    a = i.currency,
                    s = i.pending,
                    u = i.isUsingRecurringPaymentRequest,
                    l = i.recurringPaymentRequestBillingAgreement;
                  if (!u && (null == o ? void 0 : o.recurringPaymentRequest))
                    throw new A.No(
                      "You tried to update an applePay.recurringPaymentRequest without creating the object first. You must provide an applePay.recurringPaymentRequest object while resolving the 'click' event in order to update it later."
                    );
                  var p =
                      null == n
                        ? void 0
                        : n.map(function (e) {
                            var t = e.amount,
                              n = e.name;
                            return _o(t, n, a, s);
                          }),
                    d =
                      (0, P.Xy)(r, i.shippingRates) || null == r
                        ? void 0
                        : r.map(function (e) {
                            return yo(
                              function (e, n) {
                                return t.action.unsafeLocalizeString({
                                  message: e,
                                  data: n,
                                });
                              },
                              e,
                              a
                            );
                          });
                  return U.J.all(null != d ? d : []).then(function (e) {
                    var n = Ue({
                      recurringPaymentRequest: (
                        null == o ? void 0 : o.recurringPaymentRequest
                      )
                        ? (0, c.Z)(
                            (0, c.Z)(
                              {},
                              null == o ? void 0 : o.recurringPaymentRequest
                            ),
                            {},
                            { billingAgreement: l }
                          )
                        : void 0,
                      currency: a,
                      pending: s,
                      warn: t.warn,
                    });
                    return {
                      newLineItems: p,
                      newShippingMethods: e.length ? e : void 0,
                      newRecurringPaymentRequest: n,
                    };
                  });
                };
              o.addEventListener(
                e,
                "shippingcontactselected",
                O(function (t) {
                  var r = t.shippingContact,
                    o = vo(r);
                  if (
                    i.allowedShippingCountries &&
                    i.allowedShippingCountries.length &&
                    -1 === i.allowedShippingCountries.indexOf(o.country)
                  ) {
                    var a = u(),
                      c = i.lineItems,
                      s = new window.ApplePayError(
                        "shippingContactInvalid",
                        "country",
                        "We can not ship to this country."
                      );
                    e.completeShippingContactSelection({
                      newTotal: a,
                      newLineItems: c,
                      errors: [s],
                    });
                  } else {
                    var p = {
                      paymentMethodType: "apple_pay",
                      name: "",
                      address: o,
                      resolve: function (t) {
                        var n;
                        (i.total =
                          null !== (n = t.amount) && void 0 !== n
                            ? n
                            : i.total),
                          l(t).then(function (n) {
                            var r = n.newLineItems,
                              o = n.newShippingMethods,
                              a = n.newRecurringPaymentRequest,
                              c = u();
                            (i.lineItems = r || i.lineItems),
                              (i.shippingRates =
                                t.shippingRates || i.shippingRates);
                            var s = {
                              newLineItems: i.lineItems,
                              newShippingMethods: o,
                              newTotal: c,
                              newRecurringPaymentRequest: a,
                            };
                            e.completeShippingContactSelection(s);
                          });
                      },
                      reject: function () {
                        var t = u(),
                          n = i.lineItems,
                          r = new window.ApplePayError(
                            "shippingContactInvalid",
                            "postalAddress"
                          );
                        e.completeShippingContactSelection({
                          newTotal: t,
                          newLineItems: n,
                          errors: [r],
                        });
                      },
                    };
                    n.shippingAddressChange(p);
                  }
                })
              );
              o.addEventListener(
                e,
                "shippingmethodselected",
                O(function (t) {
                  var r = t.shippingMethod,
                    o = (0, P.sE)(i.shippingRates || [], function (e) {
                      return e.id === r.identifier;
                    });
                  if (o) {
                    var c = {
                      paymentMethodType: "apple_pay",
                      shippingRate: o,
                      resolve: function (t) {
                        var n;
                        (i.total =
                          null !== (n = t.amount) && void 0 !== n
                            ? n
                            : i.total),
                          l(t).then(function (n) {
                            var o = n.newLineItems,
                              a = n.newShippingMethods,
                              c = n.newRecurringPaymentRequest,
                              s = u();
                            (i.lineItems = o || i.lineItems),
                              t.shippingRates &&
                              !(0, P.Xy)(t.shippingRates, i.shippingRates)
                                ? (i.selectedShippingRate =
                                    t.shippingRates[0].id)
                                : (i.selectedShippingRate = r.identifier),
                              (i.shippingRates =
                                t.shippingRates || i.shippingRates);
                            var l = {
                              newLineItems: i.lineItems,
                              newShippingMethods: a,
                              newTotal: s,
                              newRecurringPaymentRequest: c,
                            };
                            e.completeShippingMethodSelection(l);
                          });
                      },
                      reject: function () {
                        var t = u();
                        e.completeShippingMethodSelection(po, t, []),
                          a(),
                          n.cancel();
                      },
                    };
                    n.shippingRateChange(c);
                  } else (0, v.Rz)(r, "User selected a new shipping method within the Apple Pay payment sheet, but it was not one of the shipping rates the merchant passed in.");
                })
              );
              o.addEventListener(
                e,
                "paymentauthorized",
                O(function (o) {
                  var a = o.payment;
                  t.action
                    .expressCheckoutConfirmStart({
                      groupId: r,
                      paymentMethodType: "apple_pay",
                    })
                    .then(function () {
                      return t.action.tokenizeWithData({
                        type: "apple_pay",
                        elementName: I.Yj.payButton,
                        tokenData: (0, c.Z)(
                          (0, c.Z)({}, a),
                          {},
                          { billingContact: fo(a.billingContact, t) }
                        ),
                        mids: t.mids(),
                      });
                    })
                    .then(function (o) {
                      var c;
                      if ("error" === o.type) {
                        var s = new window.ApplePayError("unknown");
                        return (
                          e.completePayment({ status: po, errors: [s] }),
                          t.report("pbe.apple_pay.create_token_failed", {
                            error: o.error,
                          }),
                          void t.action.expressCheckoutConfirmEnd({
                            groupId: r,
                          })
                        );
                      }
                      var u = fo(a.shippingContact, t),
                        l = (function (e) {
                          if (!e) return {};
                          var t = e.addressLines,
                            n = e.locality,
                            r = e.administrativeArea,
                            o = e.postalCode,
                            i = e.countryCode;
                          return {
                            line1: t && Array.isArray(t) ? t[0] : void 0,
                            line2:
                              t && Array.isArray(t)
                                ? t.slice(1).join(", ")
                                : void 0,
                            city: n,
                            state: r,
                            postal_code: o,
                            country: i,
                          };
                        })(u),
                        p = go(a.shippingContact),
                        d = fo(a.billingContact, t),
                        m = go(a.billingContact),
                        f =
                          m ||
                          (null == u ? void 0 : u.emailAddress) ||
                          (null == u ? void 0 : u.phoneNumber)
                            ? {
                                name: mo(d) || void 0,
                                email: null == u ? void 0 : u.emailAddress,
                                phone: null == u ? void 0 : u.phoneNumber,
                                address: m,
                              }
                            : void 0,
                        h = i.selectedShippingRate
                          ? (0, P.sE)(i.shippingRates || [], function (e) {
                              return e.id === i.selectedShippingRate;
                            })
                          : void 0,
                        _ = {
                          paymentMethodType: "apple_pay",
                          paymentFailed: function () {
                            var n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              o = n.reason,
                              i = void 0 === o ? "fail" : o,
                              a =
                                "invalid_shipping_address" === i
                                  ? new window.ApplePayError(
                                      "shippingContactInvalid"
                                    )
                                  : new window.ApplePayError("unknown");
                            e.completePayment({ status: po, errors: [a] }),
                              t.action.expressCheckoutConfirmEnd({
                                groupId: r,
                              });
                          },
                          billingDetails: f,
                          shippingAddress: p
                            ? {
                                name:
                                  null !== (c = mo(u)) && void 0 !== c ? c : "",
                                address: p,
                              }
                            : void 0,
                          shippingRate: h,
                        };
                      t.action
                        .setExpressCheckoutConfirmData({
                          groupId: r,
                          shippingContact: {
                            name: mo(u),
                            address: l,
                            phone: null,
                          },
                          paymentMethodData: {
                            type: E.GS.card,
                            card: { token: o.object.id },
                            billing_details: {
                              email: null == u ? void 0 : u.emailAddress,
                              phone: null == u ? void 0 : u.phoneNumber,
                            },
                          },
                        })
                        .then(function () {
                          return n.confirm(_);
                        });
                    });
                })
              );
            };
          return {
            shouldShowButton: function (e) {
              return t.action.shouldShowApplePayButton({
                groupId: r,
                shouldShowApplePayButton: e,
              });
            },
            clickHandler: function (e, n) {
              var o,
                a,
                l,
                p = window.ApplePaySession;
              if (p) {
                var d =
                    (null === (o = n.business) || void 0 === o
                      ? void 0
                      : o.name) || e.businessName,
                  m = e.currency,
                  f = e.pending;
                (i.total = e.amount),
                  (i.businessName = d),
                  (i.currency = m),
                  (i.pending = f),
                  (i.shippingRates = n.shippingRates),
                  (i.selectedShippingRate =
                    null === (a = n.shippingRates) || void 0 === a
                      ? void 0
                      : a[0].id),
                  (i.allowedShippingCountries = n.allowedShippingCountries),
                  (i.lineItems =
                    null === (l = n.lineItems) || void 0 === l
                      ? void 0
                      : l.map(function (e) {
                          var t = e.amount,
                            n = e.name;
                          return _o(t, n, m, f);
                        })),
                  (function (e) {
                    var t = e.amount,
                      n = e.billingAddressRequired,
                      r = e.businessName,
                      o = e.merchantCountry,
                      i = e.currency,
                      a = e.emailRequired,
                      c = e.lineItems,
                      u = e.pending,
                      l = e.phoneNumberRequired,
                      p = e.shippingAddressRequired,
                      d = e.shippingRates,
                      m = e.applePay,
                      f = e.defaultBillingAgreement,
                      h = e.warn,
                      _ = e.localizeString,
                      y = [].concat(
                        (0, s.Z)(a ? ["email"] : []),
                        (0, s.Z)(l ? ["phone"] : []),
                        (0, s.Z)(p ? ["postalAddress"] : [])
                      ),
                      v = n ? ["postalAddress"] : [],
                      g =
                        null == d
                          ? void 0
                          : d.map(function (e) {
                              return yo(_, e, i);
                            });
                    return U.J.all(null != g ? g : []).then(function (e) {
                      var n,
                        a =
                          null == c
                            ? void 0
                            : c.map(function (e) {
                                var t = e.amount,
                                  n = e.name;
                                return _o(t, n, i, u);
                              }),
                        s = (m || { recurringPaymentRequest: void 0 })
                          .recurringPaymentRequest;
                      return {
                        countryCode: o,
                        currencyCode: i.toUpperCase(),
                        lineItems: a,
                        merchantCapabilities: ["supports3DS"],
                        requiredBillingContactFields: v,
                        requiredShippingContactFields: y,
                        shippingMethods: e.length ? e : void 0,
                        supportedNetworks:
                          ((n = o),
                          ve(n, !1, []).filter(function (e) {
                            return null !== e;
                          })),
                        total: _o(t, r, i, u),
                        recurringPaymentRequest: Ue({
                          recurringPaymentRequest: s,
                          currency: i,
                          pending: u,
                          defaultBillingAgreement: f,
                          warn: h,
                        }),
                      };
                    });
                  })(
                    (0, c.Z)(
                      (0, c.Z)((0, c.Z)({}, e), n),
                      {},
                      {
                        businessName: d,
                        warn: t.warn,
                        localizeString: function (e, n) {
                          return t.action.unsafeLocalizeString({
                            message: e,
                            data: n,
                          });
                        },
                      }
                    )
                  ).then(function (e) {
                    var n;
                    (i.isUsingRecurringPaymentRequest =
                      !!e.recurringPaymentRequest),
                      (i.recurringPaymentRequestBillingAgreement =
                        null === (n = e.recurringPaymentRequest) || void 0 === n
                          ? void 0
                          : n.billingAgreement);
                    var o = new p(4, e);
                    (i.privateSession = o),
                      u(o, d),
                      o.begin(),
                      (i.isPaymentSheetShowing = !0),
                      t.action.payButtonSheetOpened({ groupId: r }),
                      t.report("pbe.sheet_visible", {
                        payment_method_type: "apple_pay",
                      });
                  });
              } else
                t.warn(
                  "User clicked on the Apple Pay button, but window.ApplePaySession does not exist."
                );
            },
            canMakePayments: function (e) {
              var n = window.location.hostname,
                r = t.getCredentials().stripeAccount,
                o = t.keyMode() === De.Kl.test;
              return fe(n, r, o, t.report, 4, e);
            },
            completePayment: function (e) {
              if (e) {
                var n,
                  o = new window.ApplePayError("unknown");
                null === (n = i.privateSession) ||
                  void 0 === n ||
                  n.completePayment({ status: po, errors: [o] }),
                  t.action.expressCheckoutConfirmEnd({ groupId: r });
              } else {
                var c;
                null === (c = i.privateSession) ||
                  void 0 === c ||
                  c.completePayment({ status: lo }),
                  a();
              }
            },
          };
        },
        wo = function (e) {
          return e.map(function (e) {
            return { label: e.name, amount: e.amount };
          });
        },
        ko = function (e, t) {
          return e.map(function (e) {
            return uo(e.deliveryEstimate || {}, t).then(function (t) {
              return {
                amount: e.amount,
                label: e.displayName,
                detail: t || "",
                id: e.id,
              };
            });
          });
        },
        Eo = function (e) {
          var t = e.controller,
            n = e.eventHandlers,
            r = e.groupId,
            o = { shippingRates: void 0, allowedShippingCountries: void 0 },
            i = function (e, n) {
              var r = e.amount && {
                  total: { amount: e.amount, label: "Total" },
                },
                o = e.lineItems && {
                  displayItems: e.lineItems && wo(e.lineItems),
                };
              e.shippingRates
                ? U.J.all(
                    ko(e.shippingRates, function (e, n) {
                      return t.action.unsafeLocalizeString({
                        message: e,
                        data: n,
                      });
                    })
                  ).then(function (e) {
                    n(
                      (0, c.Z)(
                        (0, c.Z)((0, c.Z)({}, r), o),
                        {},
                        { shippingOptions: e, status: "success" }
                      )
                    );
                  })
                : n(
                    (0, c.Z)(
                      (0, c.Z)((0, c.Z)({}, r), o),
                      {},
                      { status: "success" }
                    )
                  );
            },
            a = function (e) {
              var t = e.shippingAddress;
              return new U.J(function (e) {
                var r = t.country.toUpperCase() || "",
                  a = {
                    city: t.city,
                    state: t.dependentLocality,
                    postal_code: t.postalCode,
                    country: r,
                  };
                if (
                  o.allowedShippingCountries &&
                  o.allowedShippingCountries.length &&
                  -1 === o.allowedShippingCountries.indexOf(a.country)
                )
                  e({ status: "invalid_shipping_address" });
                else {
                  var c = {
                    paymentMethodType: "link",
                    name: t.recipient,
                    address: a,
                    resolve: function (t) {
                      return i(t, e);
                    },
                    reject: function () {
                      e({ status: "invalid_shipping_address" });
                    },
                  };
                  n.shippingAddressChange(c);
                }
              });
            },
            s = function (e) {
              var t = e.shippingOption;
              return new U.J(function (e) {
                var r = (0, P.sE)(o.shippingRates || [], function (e) {
                  return e.id === t.id;
                });
                if (r) {
                  var a = {
                    paymentMethodType: "link",
                    shippingRate: r,
                    resolve: function (t) {
                      return i(t, e);
                    },
                    reject: function () {
                      e({ status: "fail" });
                    },
                  };
                  n.shippingRateChange(a);
                } else (0, v.Rz)(t, "User selected a new shipping method within the Link popup, but it was not one of the shipping rates the merchant passed in.");
              });
            },
            u = function () {
              t.action.expressCheckoutConfirmEnd({ groupId: r }),
                t.action.payButtonSheetClosed({ groupId: r }),
                n.cancel();
            };
          return {
            clickHandler: function (e, n) {
              var r = ht({
                publishableKey: t._apiKey,
                path: "/pay",
                height: 708,
                width: 500,
                onDisconnect: function () {
                  u();
                },
                onClose: function () {
                  u();
                },
              });
              r
                ? (r.messenger.on(
                    "get_initial_state",
                    (function (e, n) {
                      return function () {
                        var r,
                          i = {
                            publishableKey: t._apiKey,
                            stripeAccount: t._stripeAccount,
                            merchantInfo: {
                              businessName:
                                (null === (r = n.business) || void 0 === r
                                  ? void 0
                                  : r.name) || e.businessName,
                              country: e.merchantCountry,
                            },
                            customerInfo: { country: e.customerCountry },
                            locale: e.locale,
                            integrationType: "pay_button",
                            stripeJsId: t._stripeJsId,
                            mids: t.mids(),
                            referrer: window.location.href.toString(),
                            elementsSessionId: null,
                            elementsAssignmentId: null,
                          };
                        return (
                          (o.shippingRates = n.shippingRates),
                          (o.allowedShippingCountries =
                            n.allowedShippingCountries),
                          (i.paymentRequestOptions = {
                            country: e.merchantCountry,
                            currency: e.currency,
                            requestPayerName: n.billingAddressRequired,
                            requestPayerPhone: n.phoneNumberRequired,
                            requestShipping: n.shippingAddressRequired,
                            displayItems: n.lineItems && wo(n.lineItems),
                            total: { amount: e.amount, label: "Total" },
                          }),
                          o.shippingRates
                            ? U.J.all(
                                ko(o.shippingRates, function (e, n) {
                                  return t.action.unsafeLocalizeString({
                                    message: e,
                                    data: n,
                                  });
                                })
                              ).then(function (e) {
                                return (
                                  (i.paymentRequestOptions.shippingOptions = e),
                                  i
                                );
                              })
                            : i
                        );
                      };
                    })(e, n)
                  ),
                  r.messenger.on("link_prb_shipping_address_change", a),
                  r.messenger.on("link_prb_shipping_option_change", s))
                : t.report("pr.link.popup_blocked");
            },
          };
        },
        So = function (e) {
          var t,
            n,
            r = e.component,
            o = e.elementTimings,
            i = e.getParent,
            a = e.emitEvent,
            s = e.options,
            u = e.selfDestruct,
            l = e.hasRegisteredListener,
            p = e.listenerRegistry,
            d = s.controller,
            m = s.groupId,
            f = s.publicOptions,
            h = null,
            _ = {
              runOnUnmount: [],
              updateRequest: { isCalled: !1, inMerchantEventHandler: !1 },
            },
            y = (function (e) {
              var t = e.controller,
                n = e.componentName,
                r = e.groupId,
                o = e.fonts,
                i = e.wait,
                a = e.publicOptions,
                c = e.controllingElement,
                s = {
                  fonts: o,
                  wait: i,
                  rtl: Ct(document.body),
                  publicOptions: a,
                  controllingElement: c,
                };
              return t.createElementFrame(ze.NC.PAY_BUTTON_ELEMENT, n, r, s);
            })(s);
          (0, b.yq)(
            r,
            (0, c.Z)(
              (0, c.Z)({}, oo),
              {},
              { margin: "-4px 0", transition: "height .35s ease" }
            )
          ),
            y.appendTo(r),
            y.updateStyle(io),
            y._on("set_styles", function (e) {
              y.updateStyle(e);
            }),
            y._on("redirectfocus", function (e) {
              var t,
                n = e.focusDirection;
              null === (t = (0, b.dh)(r, n)) || void 0 === t || t.focus();
            }),
            y._on("load", function () {
              if (!s.deferredIntent)
                throw new A.No(
                  "In order to use the Express Checkout Element, you must specify a `mode` on stripe.elements() instead of `clientSecret`."
                );
              y.send({
                action: "stripe-user-mount",
                payload: {
                  timestamps: {
                    stripeJsLoad: o.stripeJsLoadTimestamp.getAsPosixTime(),
                    stripeCreate: o.stripeCreateTimestamp.getAsPosixTime(),
                    groupCreate: o.groupCreateTimestamp.getAsPosixTime(),
                    create: o.createTimestamp.getAsPosixTime(),
                    mount: h ? h.getAsPosixTime() : 0,
                  },
                  rtl: Ct(i()),
                },
              });
            }),
            y._on("update-start", function () {
              _.updateRequest.inMerchantEventHandler &&
                (_.updateRequest.isCalled = !0);
            }),
            y._on("update-end", function () {
              var e, t;
              null === (e = (t = _.updateRequest).resolve) ||
                void 0 === e ||
                e.call(t),
                (_.updateRequest.isCalled = !1);
            });
          var g = function (e) {
              new U.J(function (e) {
                _.updateRequest.isCalled ? (_.updateRequest.resolve = e) : e();
              })
                .then(function () {
                  return s.controller.action.getElementsSessionAmountModeCurrency(
                    { groupId: m }
                  );
                })
                .then(function (t) {
                  var n = t.amount,
                    r = t.mode,
                    o = t.currency;
                  (_.amount = n), e(n, o, r);
                });
            },
            w = function (e, t) {
              var n = t.paymentMethodType,
                r = !("nonce" in t),
                o = "pbe.".concat(
                  "shippingaddresschange" === e
                    ? "shipping_address_change"
                    : "shipping_rate_change"
                );
              if ((d.report(o, { payment_method: n }), l(e))) {
                var i;
                i = r
                  ? function () {
                      t.reject(), (_.updateRequest.inMerchantEventHandler = !1);
                    }
                  : function () {
                      y.send({
                        action: "stripe-ece-change-event",
                        payload: { nonce: t.nonce },
                      }),
                        (_.updateRequest.inMerchantEventHandler = !1);
                    };
                var s = ao({
                    controller: d,
                    eventName: e,
                    time: 19900,
                    timeLabel: "20 seconds",
                    reject: function () {
                      d.report("".concat(o, ".reject"), { payment_method: n }),
                        i();
                    },
                    resolve: function (i) {
                      g(function (a, s, u) {
                        _.lastCurrency && s !== _.lastCurrency && co();
                        var l = (function (e, t, n) {
                            var r = (0, v.Gu)(
                                (0, v.jt)((0, v.mC)(Qr)),
                                e,
                                "".concat(t, " event resolve callback")
                              ),
                              o = r.value,
                              i = r.warnings,
                              a = null != o ? o : {};
                            if (n) {
                              var c = to(a);
                              (a = c.value),
                                c.warnings.forEach(function (e) {
                                  return i.push(e);
                                });
                            }
                            if (o) {
                              var s = o.shippingRates;
                              if (s && !s.length)
                                throw new A.No(
                                  "You must specify `shippingRates`."
                                );
                            }
                            return { value: a, warnings: i };
                          })(i, e, "setup" === u),
                          p = l.value;
                        l.warnings.forEach(function (e) {
                          return d.warn(e);
                        }),
                          d.report("".concat(o, ".resolve"), {
                            payment_method: n,
                            hasLineItems: !!p.lineItems,
                            hasShippingRates: !!p.shippingRates,
                          }),
                          (_.lineItems = p.lineItems || _.lineItems),
                          eo(a, _.lineItems),
                          r
                            ? t.resolve(
                                (0, c.Z)((0, c.Z)({}, p), {}, { amount: a })
                              )
                            : y.send({
                                action: "stripe-ece-change-event",
                                payload: {
                                  nonce: t.nonce,
                                  changePayload: (0, c.Z)(
                                    (0, c.Z)({}, p),
                                    {},
                                    { amount: a }
                                  ),
                                },
                              });
                      }),
                        (_.updateRequest.inMerchantEventHandler = !1);
                    },
                    canMerchantReject: !0,
                  }),
                  u = s.resolve,
                  p = s.reject;
                return (
                  (_.updateRequest.inMerchantEventHandler = !0),
                  void a(
                    e,
                    (0, c.Z)(
                      (0, c.Z)(
                        {},
                        "name" in t
                          ? { name: t.name, address: t.address }
                          : { shippingRate: t.shippingRate }
                      ),
                      {},
                      { reject: p, resolve: u }
                    )
                  )
                );
              }
              g(function (e, n) {
                _.lastCurrency && n !== _.lastCurrency && co(),
                  r
                    ? t.resolve({ amount: e })
                    : y.send({
                        action: "stripe-ece-change-event",
                        payload: {
                          nonce: t.nonce,
                          changePayload: { amount: e },
                        },
                      });
              });
            },
            k = function () {
              a("cancel"), d.report("pbe.cancel");
            },
            E = function (e) {
              var t = e.paymentMethodType,
                n = e.billingDetails,
                r = e.shippingAddress,
                o = e.shippingRate;
              if (
                (d.report("pbe.confirm", { payment_method: t }), !l("confirm"))
              )
                throw new A.No(
                  "Unhandled payButton Element confirm event. Make sure to register a confirm handler."
                );
              a("confirm", {
                paymentMethodType: t,
                billingDetails: n,
                shippingAddress: r,
                shippingRate: o,
                paymentFailed: function (n) {
                  var r = (function (e) {
                      var t = (0, v.Gu)(
                          (0, v.jt)((0, v.mC)($r)),
                          e,
                          "confirm event paymentFailed callback"
                        ),
                        n = t.value;
                      return {
                        value: null != n ? n : {},
                        warnings: t.warnings,
                      };
                    })(n),
                    o = r.value;
                  r.warnings.forEach(function (e) {
                    return d.warn(e);
                  }),
                    d.report("pbe.confirm.payment_failed", {
                      payment_method: t,
                      reason: o.reason,
                    }),
                    d.action
                      .getIsAwaitingConfirmCallback({ groupId: m })
                      .then(function (n) {
                        if (!n)
                          throw new A.No(
                            "Unexpected call to paymentFailed(). Ensure you are either submitting a payment or calling paymentFailed() once per payButton Element confirm event."
                          );
                        "apple_pay" === t
                          ? e.paymentFailed(o)
                          : y.send({
                              action: "stripe-ece-confirm-payment",
                              payload: {
                                nonce: e.nonce,
                                paymentFailedPayload: o,
                              },
                            });
                      });
                },
              });
            },
            S = bo({
              controller: d,
              eventHandlers: {
                cancel: k,
                shippingAddressChange: function (e) {
                  return w("shippingaddresschange", e);
                },
                shippingRateChange: function (e) {
                  return w("shippingratechange", e);
                },
                confirm: E,
              },
              groupId: m,
              listenerRegistry: p,
            }),
            C = Eo({
              controller: d,
              eventHandlers: {
                cancel: k,
                shippingAddressChange: function (e) {
                  return w("shippingaddresschange", e);
                },
                shippingRateChange: function (e) {
                  return w("shippingratechange", e);
                },
                confirm: E,
              },
              groupId: m,
            });
          "always" ===
          (null === (t = f.wallets) || void 0 === t ? void 0 : t.applePay)
            ? S.canMakePayments(!1).then(function (e) {
                S.shouldShowButton(e);
              })
            : "never" ===
              (null === (n = f.wallets) || void 0 === n ? void 0 : n.applePay)
            ? S.shouldShowButton(!1)
            : S.canMakePayments(!0).then(function (e) {
                S.shouldShowButton(e);
              }),
            y._on("ece-apple-pay-complete-payment", function (e) {
              S.completePayment(e);
            }),
            y._on("cancel", k),
            y._on("click", function (e) {
              var t = e.paymentMethodType,
                n = "apple_pay" === t,
                r = "link" === t,
                o = "click";
              if ((d.report("pbe.click", { payment_method_type: t }), l(o))) {
                var i = function () {
                  _.updateRequest.inMerchantEventHandler = !1;
                };
                n ||
                  r ||
                  ((i = function () {
                    y.send({
                      action: "stripe-user-ece-button-click",
                      payload: { nonce: e.nonce },
                    });
                  }),
                  (_.updateRequest.inMerchantEventHandler = !1));
                var u = ao({
                  controller: s.controller,
                  eventName: o,
                  time: 800,
                  timeLabel: "1 second",
                  reject: i,
                  resolve: function (o) {
                    g(function (i, a, s) {
                      var u;
                      _.lastCurrency = a;
                      var l = (function (e, t, n) {
                          var r,
                            o = (0, v.Gu)(
                              (0, v.jt)((0, v.mC)(Xr)),
                              e,
                              "click event resolve callback"
                            ),
                            i = o.value,
                            a = o.warnings,
                            s = {};
                          if (i) {
                            var u = (0, xn.Jo)(
                              null == i ? void 0 : i.allowedShippingCountries
                            );
                            (s = (0, c.Z)(
                              (0, c.Z)({}, i),
                              {},
                              {
                                allowedShippingCountries:
                                  u.allowedCountries || void 0,
                              }
                            )),
                              u.warnings.forEach(function (e) {
                                return a.push(e);
                              });
                          }
                          if (t) {
                            var l = to(s);
                            (s = l.value),
                              l.warnings.forEach(function (e) {
                                return a.push(e);
                              });
                          }
                          var p = me(14) && n;
                          if (
                            ((null === (r = s.applePay) || void 0 === r
                              ? void 0
                              : r.recurringPaymentRequest) &&
                              !p &&
                              a.push(
                                "`applePay.recurringPaymentRequest` is only supported with Apple Pay in Safari 16.0+ and iOS 16.0+."
                              ),
                            i)
                          ) {
                            var d = i.shippingAddressRequired,
                              m = i.shippingRates;
                            if (d && (!m || !m.length))
                              throw new A.No(
                                "When `shippingAddressRequired` is true, you must specify `shippingRates`."
                              );
                          }
                          return { value: s, warnings: a };
                        })(o, "setup" === s, n),
                        p = l.value;
                      l.warnings.forEach(function (e) {
                        return d.warn(e);
                      }),
                        d.report(
                          "pbe.click.options",
                          (0, c.Z)(
                            (0, c.Z)(
                              {},
                              (0, P.ei)(p, [
                                "allowedShippingCountries",
                                "business",
                                "billingAddressRequired",
                                "emailRequired",
                                "phoneNumberRequired",
                                "shippingAddressRequired",
                              ])
                            ),
                            {},
                            {
                              usesApplePayRecurringPayment: !!(null ===
                                (u = p.applePay) || void 0 === u
                                ? void 0
                                : u.recurringPaymentRequest),
                              hasLineItems: !!p.lineItems,
                              hasShippingRates: !!p.shippingRates,
                              payment_method: t,
                            }
                          )
                        ),
                        (_.lineItems = p.lineItems || _.lineItems),
                        eo(i, _.lineItems),
                        n
                          ? S.clickHandler(
                              (0, c.Z)(
                                (0, c.Z)({}, e),
                                {},
                                { amount: i, currency: a }
                              ),
                              p
                            )
                          : r
                          ? C.clickHandler(
                              (0, c.Z)(
                                (0, c.Z)({}, e),
                                {},
                                { amount: i, currency: a }
                              ),
                              p
                            )
                          : y.send({
                              action: "stripe-user-ece-button-click",
                              payload: {
                                nonce: e.nonce,
                                clickPayload: (0, c.Z)(
                                  (0, c.Z)({}, p),
                                  {},
                                  { amount: i }
                                ),
                              },
                            });
                    }),
                      (_.updateRequest.inMerchantEventHandler = !1);
                  },
                  canMerchantReject: !1,
                }).resolve;
                return (
                  (_.updateRequest.inMerchantEventHandler = !0),
                  void a(o, { paymentMethodType: t, resolve: u })
                );
              }
              g(function (t, o) {
                (_.lastCurrency = o),
                  n
                    ? S.clickHandler(
                        (0, c.Z)(
                          (0, c.Z)({}, e),
                          {},
                          { amount: t, currency: o }
                        ),
                        {}
                      )
                    : r
                    ? C.clickHandler(
                        (0, c.Z)(
                          (0, c.Z)({}, e),
                          {},
                          { amount: t, currency: o }
                        ),
                        {}
                      )
                    : y.send({
                        action: "stripe-user-ece-button-click",
                        payload: {
                          nonce: e.nonce,
                          clickPayload: { amount: t },
                        },
                      });
              });
            }),
            y._on("shippingaddresschange", function (e) {
              return w("shippingaddresschange", e);
            }),
            y._on("shippingratechange", function (e) {
              return w("shippingratechange", e);
            }),
            y._on("confirm", E);
          return (
            y._on("load-error", function (e) {
              a("loaderror", { error: e }), u();
            }),
            no.forEach(function (e) {
              y._on(e, function (t) {
                return a(e, t);
              });
            }),
            {
              update: function (e) {
                y.update(e);
              },
              focus: function () {
                It(),
                  y.focus(),
                  y.send({ action: "stripe-user-focus", payload: {} });
              },
              blur: function () {
                y.blur();
              },
              clear: function () {
                throw new A.No(
                  "clear() is not supported by the Express Checkout Element."
                );
              },
              mount: function () {
                h = new gt.E();
                var e = i();
                e &&
                  ((0, b.mb)(e, [[ro, !0]]),
                  _.runOnUnmount.push(function () {
                    (0, b.mb)(e, [[ro, !1]]);
                  }));
              },
              unmount: function () {
                for (; _.runOnUnmount.length; ) {
                  var e;
                  null === (e = _.runOnUnmount.pop()) || void 0 === e || e();
                }
                y.unmount();
              },
              _frame: y,
            }
          );
        },
        Po = function (e) {
          var t = e.options,
            n = (0, d.Z)(e, ["options"]),
            r = t.controller,
            o = t.publicOptions,
            i =
              (t.componentName,
              (0, d.Z)(t, ["controller", "publicOptions", "componentName"]));
          if (r.keyMode() === De.Kl.unknown)
            throw new A.No(
              "It looks like you're using an older Stripe key. The Pay Button Element is only available for use with a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n      You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys"
            );
          var a,
            s =
              ((a = o || {}),
              (0, v.Gu)(
                (0, v.mC)(Kr),
                a,
                "elements.create('payButton', options)"
              ));
          s.warnings.forEach(function (e) {
            return r.warn(e);
          });
          var u = So(
              (0, c.Z)(
                (0, c.Z)({}, n),
                {},
                {
                  options: (0, c.Z)(
                    (0, c.Z)({}, i),
                    {},
                    {
                      controller: r,
                      componentName: "payButton",
                      publicOptions: s.value,
                    }
                  ),
                }
              )
            ),
            l = u.update,
            p = (0, d.Z)(u, ["update"]);
          return (0, c.Z)(
            (0, c.Z)({}, p),
            {},
            {
              update: function (e) {
                var t = (function (e) {
                    return (0, v.Gu)(
                      (0, v.mC)(zr),
                      e,
                      "payButtonElement.update()"
                    );
                  })(e || {}),
                  n = t.value;
                t.warnings.forEach(function (e) {
                  return r.warn(e);
                }),
                  l(n);
              },
            }
          );
        },
        Ao = function (e, t) {
          var n = (function (e) {
            if (!D.YA[e])
              throw new Error("Unexpected Element type: ".concat(e, "."));
            return D.YA[e].implementation;
          })(e);
          switch (n) {
            case "legacy":
              return new wn(t);
            case "affirm_message":
              return An(t);
            case "afterpay_message":
              return Tn(t);
            case "unified_message":
              return On(t);
            case "frame":
              return Ar(t);
            case "cart":
              return Lr(t);
            case "express_checkout":
              return Po(t);
            default:
              return (0, v.Rz)(
                n,
                "Unexpected implementation type: ".concat(n, ".")
              );
          }
        },
        Co = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, c.Z)(
            (0, c.Z)(
              (0, c.Z)(
                {},
                (0, P.ei)(e, [
                  "business",
                  "fields",
                  "readOnly",
                  "terms",
                  "allowedCardBrands",
                  "disallowedCardBrands",
                  "blockPoBox",
                  "validation",
                  "display",
                  "layout",
                  "paymentMethodOrder",
                  "wallets",
                  "buttonHeight",
                  "accountHolderType",
                  "disabled",
                  "hideIcon",
                  "hidePostalCode",
                  "iconStyle",
                  "placeholderCountry",
                  "rtl",
                  "showIcon",
                  "supportedCountries",
                  "betas",
                  "componentName",
                  "groupId",
                  "locale",
                  "loader",
                  "externalPaymentMethodTypes",
                ])
              ),
              e.autocomplete && {
                disableAutocomplete: "disabled" === e.autocomplete.mode,
              }
            ),
            e.contacts && { contacts: e.contacts.length }
          );
        },
        Io = (function (e) {
          function t(e, r, o) {
            var i, a;
            (0, u.Z)(this, t),
              ((a = n.call(this)).mount = O(function (e) {
                var t;
                if ((a._checkDestroyed(), !e))
                  throw new A.No(
                    "Missing argument. Make sure to call mount() with a valid DOM element or selector."
                  );
                if ("string" == typeof e) {
                  var n = document.querySelectorAll(e);
                  if (
                    (n.length > 1 &&
                      a._controller.warn(
                        "The selector you specified ("
                          .concat(e, ") applies to ")
                          .concat(
                            n.length,
                            " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."
                          )
                      ),
                    !n.length)
                  )
                    throw new A.No(
                      "The selector you specified (".concat(
                        e,
                        ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount()."
                      )
                    );
                  t = n[0];
                } else {
                  if (!e.appendChild)
                    throw new A.No(
                      "Invalid DOM element. Make sure to call mount() with a valid DOM element or selector."
                    );
                  t = e;
                }
                if ("INPUT" === t.nodeName)
                  throw new A.No(
                    "Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead."
                  );
                t.children.length &&
                  t !== document.body &&
                  a._controller.warn(
                    "This Element will be mounted to a DOM element that contains child nodes."
                  ),
                  a._mountToParent(t);
              })),
              (a.update = O(function (e) {
                return (
                  a._controller.report("update", {
                    options: Co(e),
                    element: a._componentName,
                    element_mode: a._componentMode,
                  }),
                  a._checkDestroyed(),
                  a._implementation.update(e),
                  (0, h.Z)(a)
                );
              })),
              (a.focus = O(function (e) {
                return (
                  a._checkDestroyed(),
                  e && e.preventDefault(),
                  a._implementation.focus(),
                  (0, h.Z)(a)
                );
              })),
              (a.blur = O(function () {
                return (
                  a._checkDestroyed(), a._implementation.blur(), (0, h.Z)(a)
                );
              })),
              (a.clear = O(function () {
                return (
                  a._checkDestroyed(), a._implementation.clear(), (0, h.Z)(a)
                );
              })),
              (a.collapse = O(function () {
                if ((a._checkDestroyed(), !a._implementation.collapse))
                  throw new A.No(
                    "Collapse is not supported by the ".concat(
                      a._componentName,
                      " Element."
                    )
                  );
                return a._implementation.collapse(), (0, h.Z)(a);
              })),
              (a.show = O(function () {
                if ((a._checkDestroyed(), !a._implementation.show))
                  throw new A.No(
                    "show() is not supported by the ".concat(
                      a._componentName,
                      " Element."
                    )
                  );
                return a._implementation.show(), (0, h.Z)(a);
              })),
              (a.hide = O(function () {
                if ((a._checkDestroyed(), !a._implementation.hide))
                  throw new A.No(
                    "hide() is not supported by the ".concat(
                      a._componentName,
                      " Element."
                    )
                  );
                return a._implementation.hide(), (0, h.Z)(a);
              })),
              (a.addLineItem = O(function (e) {
                if ((a._checkDestroyed(), a._implementation.addLineItem))
                  return a._implementation.addLineItem(e);
                throw new A.No(
                  "addLineItem() is not supported by the ".concat(
                    a._componentName,
                    " Element."
                  )
                );
              })),
              (a.cancelCheckout = O(function (e) {
                if ((a._checkDestroyed(), !a._implementation.cancelCheckout))
                  throw new A.No(
                    "cancelCheckout() is not supported by the ".concat(
                      a._componentName,
                      " Element."
                    )
                  );
                return a._implementation.cancelCheckout(e), (0, h.Z)(a);
              })),
              (a.unmount = O(function () {
                return a._checkDestroyed(), a._unmount(), (0, h.Z)(a);
              })),
              (a.destroy = O(function () {
                var e, t;
                return (
                  a._checkDestroyed(),
                  a.unmount(),
                  null === (e = (t = a._implementation).destroy) ||
                    void 0 === e ||
                    e.call(t),
                  (a._destroyed = !0),
                  a._emitEvent("destroy"),
                  (0, h.Z)(a)
                );
              })),
              (a.getValue = O(function () {
                a._checkDestroyed();
                var e = new Set(["address"]);
                if (a._implementation.getValue && e.has(a._componentName))
                  return a._implementation.getValue();
                throw new A.No(
                  "getValue is not supported by the ".concat(
                    a._componentName,
                    " Element."
                  )
                );
              })),
              (a._getParent = function () {
                return a._parent;
              }),
              (a._emitEvent = function (e, t) {
                if (
                  ("loaderror" !== e ||
                    a._hasRegisteredListener("loaderror") ||
                    a._controller.keyMode() !== De.Kl.test ||
                    console.error(
                      "Unhandled ".concat(
                        a._componentName,
                        " Element loaderror"
                      ),
                      t
                    ),
                  "cart" === a._componentName &&
                    "checkout" === e &&
                    !a._hasRegisteredListener("checkout"))
                )
                  throw new A.No(
                    "Unhandled Cart Element checkout event. Make sure to register a checkout handler."
                  );
                return a._emit(
                  e,
                  (0, c.Z)({ elementType: a._componentName }, t)
                );
              }),
              (a._cancelCheckout = function (e) {
                "cart" === a._componentName &&
                  a._controller._sendCaReq("cancelCheckout", {
                    errorMessage: e,
                    groupId: a._groupId,
                  });
              });
            var s = e.controller,
              l = e.componentName,
              p = e.groupId,
              d = e.locale,
              m = e.betas,
              f = e.mids;
            (a._controller = s),
              (a._componentName = l),
              (a._componentMode =
                null === (i = e.publicOptions) || void 0 === i
                  ? void 0
                  : i.mode),
              (a._destroyed = !1),
              (a._groupId = p),
              (a._mids = f);
            var _ = document.createElement("div");
            return (
              (_.className = D.A2),
              (a._component = _),
              s.report("create", {
                options: Co(
                  (0, c.Z)(
                    { componentName: l, groupId: p, locale: d, betas: m },
                    e.publicOptions
                  )
                ),
                element: l,
                element_mode: a._componentMode,
              }),
              (a._implementation = Ao(a._componentName, {
                options: e,
                component: _,
                listenerRegistry: r,
                elementTimings: o,
                emitEvent: a._emitEvent,
                getParent: a._getParent,
                hasRegisteredListener: a._hasRegisteredListener,
                selfDestruct: function () {
                  a.destroy();
                },
              })),
              a
            );
          }
          (0, _.Z)(t, e);
          var n = (0, y.Z)(t);
          return (
            (0, l.Z)(t, [
              {
                key: "_checkDestroyed",
                value: function () {
                  if (this._destroyed)
                    throw new A.No(
                      "This Element has already been destroyed. Please create a new one."
                    );
                },
              },
              {
                key: "_isMounted",
                value: function () {
                  return (
                    !!document.body && document.body.contains(this._component)
                  );
                },
              },
              {
                key: "_unmount",
                value: function () {
                  var e = this._component.parentElement;
                  e && e.removeChild(this._component),
                    this._controller.report("unmount", {
                      element: this._componentName,
                      element_mode: this._componentMode,
                      cmp_result: this._controller._cmpResult,
                    }),
                    this._implementation.unmount(),
                    (this._parent = null);
                },
              },
              {
                key: "_mountToParent",
                value: function (e) {
                  var t = this._component.parentElement,
                    n = this._isMounted();
                  if (e === t) {
                    if (n) return;
                    this.unmount(), this._mountTo(e);
                  } else if (t) {
                    if (n)
                      throw new A.No(
                        "This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting."
                      );
                    this.unmount(), this._mountTo(e);
                  } else this._mountTo(e);
                },
              },
              {
                key: "_mountTo",
                value: function (e) {
                  for (this._parent = e; e.firstChild && e !== document.body; )
                    e.removeChild(e.firstChild);
                  e.appendChild(this._component),
                    this._controller.report("mount", {
                      element: this._componentName,
                      element_mode: this._componentMode,
                    }),
                    this._implementation.mount();
                },
              },
            ]),
            t
          );
        })(F),
        No = function (e, t) {
          e._controller.report("legacy_private_property_used", {
            prop: t,
            componentName: e._componentName,
          });
        };
      [
        "_autofilled",
        "_classes",
        "_complete",
        "_empty",
        "_fakeInput",
        "_focused",
        "_frame",
        "_invalid",
        "_lastBackgroundColor",
        "_lastFontSize",
        "_lastHeight",
        "_lastPadding",
        "_lastSubmittedAt",
        "_listenerRegistry",
        "_paymentRequest",
      ].forEach(function (e) {
        Object.defineProperty(Io.prototype, e, {
          enumerable: !1,
          get: function () {
            return No(this, e), this._implementation[e];
          },
        });
      });
      ["_formSubmit", "_isIssuingDisplayElement"].forEach(function (e) {
        Object.defineProperty(Io.prototype, e, {
          enumerable: !1,
          writable: !1,
          value: function () {
            return No(this, e), this._implementation[e]();
          },
        });
      });
      var To,
        Mo = Io,
        Ro = {
          mode: (0, v.jt)((0, v.AG)((0, v.kw)("payment", "setup"))),
          amount: (0, v.jt)((0, v.AG)(v.MZ)),
          currency: (0, v.jt)((0, v.AG)(v.cV)),
          payment_method_types: (0, v.jt)(
            (0, v.AG)(
              (0, v.CT)(v.kw.apply(void 0, (0, s.Z)(Object.keys(E.GS))))
            )
          ),
          setup_future_usage: (0, v.jt)(
            (0, v.AG)((0, v.kw)("off_session", "on_session"))
          ),
          capture_method: (0, v.jt)(
            (0, v.AG)((0, v.kw)("automatic", "manual"))
          ),
          payment_method_options: (0, v.jt)(
            (0, v.AG)(
              (0, v.mC)({
                us_bank_account: (0, v.jt)(
                  (0, v.mC)({
                    verification_method: (0, v.jt)(
                      (0, v.kw)(
                        "automatic",
                        "instant",
                        "instant_or_skip",
                        "skip",
                        "microdeposits"
                      )
                    ),
                  })
                ),
              })
            )
          ),
        },
        Oo = {
          customerOptions: (0, v.jt)(
            (0, v.mC)({ customer: v.Z_, ephemeralKey: v.Z_ })
          ),
        },
        jo = function (e) {
          if (e)
            return (0, c.Z)(
              (0, c.Z)(
                (0, c.Z)({}, e),
                e.hasOwnProperty("rules") ? { rules: "<truncated>" } : null
              ),
              e.hasOwnProperty("variables")
                ? { variables: "<truncated>" }
                : null
            );
        },
        Zo = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, c.Z)(
            (0, c.Z)(
              (0, c.Z)(
                {},
                (0, P.ei)(e, [
                  "locale",
                  "loader",
                  "externalPaymentMethodTypes",
                  "mode",
                  "amount",
                  "currency",
                  "setup_future_usage",
                  "capture_method",
                  "payment_method_types",
                ])
              ),
              e.hasOwnProperty("fonts") ? { fonts: "<truncated>" } : null
            ),
            {},
            { appearance: jo(e.appearance) },
            e.customerOptions
              ? { customerOptions: { customer: e.customerOptions.customer } }
              : null
          );
        },
        xo = function (e) {
          return "payment" === e.mode && e.currency && e.amount
            ? {
                mode: "payment",
                currency: e.currency,
                amount: e.amount,
                capture_method: e.capture_method,
                setup_future_usage: e.setup_future_usage,
                payment_method_types: e.payment_method_types,
                payment_method_options: e.payment_method_options,
              }
            : "setup" === e.mode
            ? {
                mode: "setup",
                capture_method: e.capture_method,
                setup_future_usage: e.setup_future_usage,
                payment_method_types: e.payment_method_types,
                payment_method_options: e.payment_method_options,
              }
            : void 0;
        },
        Lo = [
          "mode",
          "amount",
          "currency",
          "payment_method_types",
          "capture_method",
          "setup_future_usage",
          "payment_method_options",
        ],
        Bo = function (e, t, n) {
          var r = e.mode,
            o = e.amount,
            i = e.currency;
          if ("payment" === r) {
            if (
              (0, v.Gu)(
                (0, v.mC)({ amount: v.Rx, currency: v.Z_ }),
                { amount: o, currency: i },
                "options"
              ).value.amount <= 0
            )
              throw new A.No(
                "Invalid value for ".concat(
                  n,
                  ": `amount` must be greater than 0"
                )
              );
          } else if ("setup" === r) {
            if (t.amount)
              throw new A.No(
                "Invalid value for ".concat(
                  n,
                  ": `amount` is not applicable when `mode` is `'setup'`"
                )
              );
            if (t.currency)
              throw new A.No(
                "Invalid value for ".concat(
                  n,
                  ": `currency` is not applicable when `mode` is `'setup'`"
                )
              );
          } else if (!r && Object.keys(t).length) {
            var a = Object.keys(t);
            throw new A.No(
              "Invalid value for "
                .concat(n, ": `")
                .concat(a.join("`, `"), "` ")
                .concat(
                  a.length > 1 ? "are" : "is",
                  " only applicable when a `mode` is set."
                )
            );
          }
        },
        Do = (function (e) {
          function t(e, r, o, i, a, l) {
            var p;
            (0, u.Z)(this, t),
              ((p = n.call(this)).getElement = O(function (e) {
                var t,
                  n =
                    (null != (t = e) &&
                    t.__elementType &&
                    "string" == typeof t.__elementType &&
                    "function" == typeof t
                      ? t.__elementType
                      : null) || e;
                return (
                  q(n, p._betas),
                  (0, P.sE)(p._elements, function (e) {
                    return e._componentName === n;
                  }) || null
                );
              })),
              (p.update = O(function (e) {
                var t,
                  n = (0, v.Gu)(
                    (function (e) {
                      return (0, v.mC)(
                        (0, c.Z)(
                          (0, c.Z)(
                            (0, c.Z)(
                              {
                                locale: (0, v.jt)(v.Z_),
                                appearance: (0, v.jt)(v.Ry),
                              },
                              Ro
                            ),
                            Oo
                          ),
                          (0, S.uN)(
                            e,
                            S.M4.elements_enable_deferred_intent_beta_1
                          )
                            ? { clientSecret: (0, v.jt)((0, v.AG)(xn.Eu)) }
                            : {}
                        )
                      );
                    })(p._betas),
                    e || {},
                    "elements.update()"
                  ),
                  r = n.value;
                if (
                  (n.warnings.forEach(function (e) {
                    return p._controller.warn(e);
                  }),
                  0 !== Object.keys(r).length)
                ) {
                  var o,
                    i = r.customerOptions,
                    a = r.clientSecret,
                    s = r.locale,
                    u = r.appearance,
                    l = (0, S.jk)(s, p._betas);
                  if (
                    (l &&
                      (p._controller.action.fetchLocale({ locale: l }),
                      p._elements.forEach(function (e) {
                        var t, n;
                        (t = e._implementation),
                          "function" ==
                            typeof (null === (n = t._paymentRequest) ||
                            void 0 === n
                              ? void 0
                              : n._updateLocale) &&
                            e._implementation._paymentRequest._updateLocale(l);
                      })),
                    (0, S.uN)(
                      p._betas,
                      S.M4.elements_enable_deferred_intent_beta_1
                    ))
                  )
                    if (
                      !!Object.keys((0, P.ei)(r, ["clientSecret"].concat(Lo)))
                        .length
                    ) {
                      var d = (0, P.ei)(r, Lo),
                        f = (0, P.ei)(p._commonOptions, Lo),
                        h = (0, c.Z)((0, c.Z)({}, f), d),
                        _ = !(0, P.Xy)(h, f);
                      r.clientSecret &&
                        Lo.forEach(function (e) {
                          h[e] = null;
                        }),
                        Bo(h, d, "elements.update()"),
                        _ && (o = xo(h));
                    }
                  r.hasOwnProperty("customerOptions") &&
                    (p._customerOptions = i || null),
                    r.hasOwnProperty("appearance") &&
                      (p._commonOptions.appearance = u),
                    r.hasOwnProperty("clientSecret") &&
                      (p._commonOptions.clientSecret = a),
                    l && (p._commonOptions.locale = l),
                    (0, m.Z)(p._commonOptions, o);
                  var y = (0, P.sE)(p._elements, function (e) {
                    return "payButton" === e._componentName;
                  });
                  null == y ||
                    null === (t = y._implementation._frame) ||
                    void 0 === t ||
                    t._emit("update-start"),
                    p._controller.action
                      .updateElementsOptions({
                        clientSecret: a,
                        customerOptions: i,
                        locale: l,
                        appearance: u,
                        groupId: p._id,
                        deferredIntent: o,
                      })
                      .then(function () {
                        var e;
                        p._emit("update-end"),
                          null == y ||
                            null === (e = y._implementation._frame) ||
                            void 0 === e ||
                            e._emit("update-end");
                      });
                }
              })),
              (p.create = j(function (e, t) {
                var n = new gt.E();
                !(function (e, t, n) {
                  if ((q(e, n), D.YA[e].unique && -1 !== t.indexOf(e))) {
                    if ("address" === e)
                      throw new A.No(
                        "Can only create one Element of type ".concat(
                          e,
                          ". See https://stripe.com/docs/elements/address-element?platform=web#use-address-element-with-other-elements for more information."
                        )
                      );
                    throw new A.No(
                      "Can only create one Element of type ".concat(e, ".")
                    );
                  }
                  var r = D.YA[e].conflict,
                    o = (0, P.dq)(t, r);
                  if (o.length) {
                    var i = o[0];
                    throw new A.No(
                      "Cannot create an Element of type "
                        .concat(e, " after an Element of type ")
                        .concat(i, " has already been created.")
                    );
                  }
                })(
                  e,
                  p._elements.map(function (e) {
                    return e._componentName;
                  }),
                  p._betas
                );
                var r = (0, c.Z)(
                    (0, c.Z)((0, c.Z)({}, t), p._commonOptions),
                    {},
                    { componentName: e, groupId: p._id }
                  ),
                  o = (r.paymentRequest, (0, d.Z)(r, ["paymentRequest"])),
                  i = (w.P0 || w.JW) && (0, k.qC)(o).length > 2e3,
                  a = !!p._pendingFonts || i;
                if (
                  "never" !== p._commonOptions.loader &&
                  !p._isLoaderFrameMounted &&
                  Vn(e)
                ) {
                  var u = (function (e) {
                    return (
                      mt ||
                      ((mt = e.createHiddenFrame(ze.NC.LOADER_UI_APP, {}))._on(
                        "generate-loader-ui",
                        function (e) {
                          mt.send({
                            action: "generate-loader-ui",
                            payload: { data: e },
                          });
                        }
                      ),
                      mt._on("get-element-loader-ui", function (e) {
                        mt.send({
                          action: "get-element-loader-ui",
                          payload: { data: e },
                        });
                      }),
                      mt)
                    );
                  })(p._controller);
                  u._emit("generate-loader-ui", {
                    rawAppearanceConfig: p._commonOptions.appearance,
                  }),
                    (p._isLoaderFrameMounted = !0);
                }
                var l = new Mo(
                  (0, c.Z)(
                    (0, c.Z)(
                      { publicOptions: t },
                      (0, P.CE)(p._commonOptions, Lo) || {}
                    ),
                    {},
                    {
                      deferredIntent: xo(p._commonOptions),
                      componentName: e,
                      groupId: p._id,
                      fonts: i ? null : p._commonOptions.fonts,
                      controller: p._controller,
                      wait: a,
                      mids: p._mids,
                    }
                  ),
                  p._listenerRegistry,
                  (0, c.Z)((0, c.Z)({}, p._timings), {}, { createTimestamp: n })
                );
                return (
                  (p._elements = [].concat((0, s.Z)(p._elements), [l])),
                  l._on("destroy", function () {
                    p._elements = p._elements.filter(function (t) {
                      return t._componentName !== e;
                    });
                  }),
                  i &&
                    l._implementation.update({ fonts: p._commonOptions.fonts }),
                  l
                );
              })),
              (p.fetchUpdates = Z(function () {
                if (p._commonOptions.clientSecret)
                  return p._controller.action
                    .fetchUpdates({
                      clientSecret: p._commonOptions.clientSecret,
                      customerOptions: p._customerOptions,
                      locale: p._commonOptions.locale,
                      groupId: p._id,
                    })
                    .then(function (e) {
                      if ("error" === (null == e ? void 0 : e.type)) {
                        var t = e.error,
                          n = t.message,
                          r = t.extra_fields;
                        return (null == r ? void 0 : r.status)
                          ? { error: { message: n, status: r.status } }
                          : { error: { message: n } };
                      }
                      return {};
                    });
                throw new A.No(
                  'In order to call fetchUpdates, you must pass a valid PaymentIntent or SetupIntent client secret when creating the Elements group.\n\n  e.g. stripe.elements({clientSecret: "{{CLIENT_SECRET}}"})'
                );
              }));
            var _ = new gt.E(),
              y = (0, v.Gu)(
                (function (e) {
                  var t = {
                      locale: (0, v.jt)(v.Z_),
                      fonts: (0, v.jt)((0, v.CT)(v.Ry)),
                      appearance: (0, v.jt)(v.Ry),
                      clientSecret: (0, v.jt)(xn.Eu),
                      loader: (0, v.jt)((0, v.kw)("auto", "always", "never")),
                      externalPaymentMethodTypes: (0, v.jt)(Zn.iU),
                    },
                    n = (0, c.Z)(
                      (0, c.Z)(
                        (0, c.Z)({}, t),
                        (0, S.uN)(e, S.M4.elements_customers_beta_1) ? Oo : {}
                      ),
                      (0, S.uN)(e, S.M4.elements_enable_deferred_intent_beta_1)
                        ? Ro
                        : {}
                    );
                  return (0, v.mC)(n);
                })(i),
                l || {},
                "elements()"
              ),
              E = y.value;
            if (
              (y.warnings.forEach(function (t) {
                return e.warn(t);
              }),
              (0, S.uN)(i, S.M4.elements_enable_deferred_intent_beta_1))
            ) {
              var C = (0, P.ei)(E, Lo);
              if (
                (Bo(C, C, "elements.create()"),
                Object.keys(C).length && E.clientSecret)
              )
                throw new A.No(
                  "Invalid options for elements.create(): Expected either mode or clientSecret, but not both."
                );
            }
            (0, b.BO)(e.warn),
              e.report("elements", { options: Zo(E) }),
              E.loader || (E.loader = "auto");
            var I = E.fonts,
              N = void 0 === I ? [] : I,
              M = E.locale,
              R = E.customerOptions,
              x = void 0 === R ? null : R,
              L = (0, d.Z)(E, ["fonts", "locale", "customerOptions"]);
            p._customerOptions = x;
            var B = E.appearance ? E.appearance : {};
            (p._elements = []),
              (p._id = (0, g.To)("elements")),
              (p._timings = (0, c.Z)(
                (0, c.Z)({}, o),
                {},
                { groupCreateTimestamp: _ }
              )),
              (p._controller = e),
              (p._betas = i),
              (p._listenerRegistry = r),
              (p._mids = a),
              (p._isLoaderFrameMounted = !1);
            var F = (0, S.jk)(M, i);
            p._controller.action.fetchLocale({ locale: F || "auto" });
            var U = N.filter(function (e) {
                return !e.cssSrc || "string" != typeof e.cssSrc;
              }).map(function (e) {
                return (0,
                c.Z)((0, c.Z)({}, e), {}, { __resolveFontRelativeTo: window.location.href });
              }),
              G = N.map(function (e) {
                return e.cssSrc;
              })
                .reduce(function (e, t) {
                  return "string" == typeof t ? [].concat((0, s.Z)(e), [t]) : e;
                }, [])
                .map(function (e) {
                  return (0, k.sD)(e) ? e : (0, k.v_)(window.location.href, e);
                });
            p._pendingFonts = G.length;
            var Y =
                (0, S.uN)(i, S.M4.payment_element_beta_1) && !L.clientSecret,
              H = xo(L);
            return (
              Y ||
                e.action.setupStoreForElementsGroup({
                  clientSecret: L.clientSecret,
                  deferredIntent: H,
                  customerOptions: x,
                  loader: E.loader,
                  locale: M,
                  appearance: B,
                  groupId: p._id,
                  externalPaymentMethodTypes: L.externalPaymentMethodTypes,
                }),
              (p._commonOptions = (0, c.Z)(
                (0, c.Z)({}, L),
                {},
                { betas: i, appearance: B, locale: F, fonts: U }
              )),
              G.forEach(function (e) {
                if ("string" == typeof e) {
                  var t = new gt.E();
                  T(e)
                    .then(function (n) {
                      p._controller.report("font.loaded", {
                        load_time: t.getElapsedTime(),
                        font_count: n.length,
                        css_src: e,
                      });
                      var r = n.map(function (t) {
                        return (0,
                        c.Z)((0, c.Z)({}, t), {}, { __resolveFontRelativeTo: e });
                      });
                      p._controller.action.updateCSSFonts({
                        fonts: r,
                        groupId: p._id,
                      }),
                        (p._commonOptions = (0, c.Z)(
                          (0, c.Z)({}, p._commonOptions),
                          {},
                          {
                            fonts: [].concat(
                              (0, s.Z)(
                                p._commonOptions.fonts
                                  ? p._commonOptions.fonts
                                  : []
                              ),
                              (0, s.Z)(r)
                            ),
                          }
                        ));
                    })
                    .catch(function (n) {
                      p._controller.report("error.font.not_loaded", {
                        load_time: t.getElapsedTime(),
                        message: n && n.message && n.message,
                        css_src: e,
                      }),
                        p._controller.warn(
                          "Failed to load CSS file at ".concat(e, ".")
                        );
                    });
                }
              }),
              (0, f.Z)(p, (0, h.Z)(p))
            );
          }
          (0, _.Z)(t, e);
          var n = (0, y.Z)(t);
          return t;
        })(F),
        qo = Do,
        Fo = function (e, t, n, r, o, i, a) {
          return new kt({
            controller: e,
            authentication: t,
            mids: n,
            rawOptions: r,
            betas: o,
            queryStrategyOverride: i,
            listenerRegistry: a,
          });
        },
        Uo = (0, v.mC)({
          name: (0, v.kw)(
            "react-stripe-js",
            "stripe-js",
            "react-stripe-elements"
          ),
          version: (0, v.AG)(v.Z_),
          startTime: (0, v.jt)(v.Rx),
        }),
        Go = (0, v.ci)({
          name: (0, v.ui)(1, 30),
          partner_id: (0, v.jt)(v.Z_),
          version: (0, v.jt)((0, v.ui)(5, 15)),
          url: (0, v.jt)((0, v.ui)(4, 60)),
        }),
        Yo = {
          border: "none",
          margin: "0",
          padding: "0",
          width: "1px",
          "min-width": "100%",
          overflow: "hidden",
          display: "block",
          "user-select": "none",
          transform: "translate(0)",
          "color-scheme": "only light",
        },
        Ho = (function (e) {
          function n(e) {
            var t;
            return (
              (0, u.Z)(this, n),
              (t = r.call(this, e)),
              w.s$ &&
                t._listenerRegistry.addEventListener(
                  document,
                  "transitionstart",
                  function (e) {
                    switch (e.propertyName) {
                      case "opacity":
                      case "transform":
                      case "visibility":
                        var n = e.target;
                        t._isMounted() &&
                          n.contains(t._iframe) &&
                          t._forceRepaint();
                    }
                  },
                  { passive: !0 }
                ),
              t
            );
          }
          (0, _.Z)(n, e);
          var r = (0, y.Z)(n);
          return (
            (0, l.Z)(n, [
              {
                key: "update",
                value: function (e) {
                  this.send({ action: "stripe-user-update", payload: e });
                },
              },
              {
                key: "updateStyle",
                value: function (e) {
                  var t = this;
                  Object.keys(e).forEach(function (n) {
                    t._iframe.style[n] = e[n];
                  });
                },
              },
              {
                key: "focus",
                value: function () {
                  this.loaded &&
                    (w.s$
                      ? this._iframe.focus()
                      : this.send({
                          action: "stripe-user-focus",
                          payload: {},
                        }));
                },
              },
              {
                key: "blur",
                value: function () {
                  this.loaded &&
                    (this._iframe.contentWindow.blur(),
                    this._iframe.blur(),
                    document.activeElement === this._iframe &&
                      (window.focus(),
                      document.activeElement &&
                        "function" == typeof document.activeElement.blur &&
                        document.activeElement.blur()));
                },
              },
              {
                key: "clear",
                value: function () {
                  this.send({ action: "stripe-user-clear", payload: {} });
                },
              },
              {
                key: "collapse",
                value: function () {
                  this.send({ action: "stripe-user-collapse", payload: {} });
                },
              },
              {
                key: "show",
                value: function () {
                  this.send({ action: "stripe-user-show", payload: {} });
                },
              },
              {
                key: "hide",
                value: function () {
                  this.send({ action: "stripe-user-hide", payload: {} });
                },
              },
              {
                key: "addLineItem",
                value: function (e) {
                  this.send({
                    action: "stripe-user-add-line-item",
                    payload: e,
                  });
                },
              },
              {
                key: "cancelCheckout",
                value: function (e) {
                  this.send({
                    action: "stripe-user-cancel-checkout",
                    payload: { errorMessage: e },
                  });
                },
              },
              {
                key: "getValue",
                value: function () {
                  this.send({ action: "stripe-user-get-value", payload: {} });
                },
              },
              {
                key: "_createIFrame",
                value: function (e, r, o) {
                  var i = t((0, Ht.Z)(n.prototype), "_createIFrame", this).call(
                    this,
                    e,
                    r,
                    o
                  );
                  return (
                    i.setAttribute("title", "Secure payment input frame"),
                    (0, b.yq)(i, Yo),
                    i
                  );
                },
              },
              {
                key: "_forceRepaint",
                value: function () {
                  var e = this._iframe,
                    t = e.style.display;
                  e.style.display = "none";
                  var n = e.offsetHeight;
                  return (e.style.display = t), n;
                },
              },
            ]),
            n
          );
        })(Jt),
        zo = Ho,
        Ko = {
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
        },
        Jo = (function (e) {
          function n(e) {
            var o,
              i,
              a,
              c = e.type,
              s = e.controllerId,
              l = e.listenerRegistry,
              p = e.options;
            return (
              (0, u.Z)(this, n),
              ((a = r.call(this, {
                type: c,
                controllerId: s,
                listenerRegistry: l,
                appParams: p,
              }))._autoMount = function () {
                a.appendTo(a._backdrop.domElement), a._backdrop.mount();
              }),
              (a.show = function () {
                a._backdrop.show(),
                  (0, b.yq)(a._iframe, Ko),
                  (a.isVisible = !0);
              }),
              (a.fadeInBackdrop = function () {
                a._backdrop.fadeIn();
              }),
              (a._backdropFadeoutPromise = null),
              (a.fadeOutBackdrop = function () {
                return (
                  a._backdropFadeoutPromise ||
                    (a._backdropFadeoutPromise = a._backdrop.fadeOut()),
                  a._backdropFadeoutPromise.then(function () {
                    a._backdropFadeoutPromise = null;
                  })
                );
              }),
              (a.destroy = function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  r = a.fadeOutBackdrop().then(function () {
                    a._backdrop.unmount(),
                      e ||
                        t(
                          ((o = (0, h.Z)(a)), (0, Ht.Z)(n.prototype)),
                          "destroy",
                          o
                        ).call(o);
                  });
                return (
                  e &&
                    t(
                      ((i = (0, h.Z)(a)), (0, Ht.Z)(n.prototype)),
                      "destroy",
                      i
                    ).call(i),
                  (a.isVisible = !1),
                  r
                );
              }),
              (a._backdrop = new We({
                lockScrolling: !0,
                lockFocus: !0,
                lockFocusOn: a._iframe,
                listenerRegistry: l,
              })),
              a._autoMount(),
              (a.isVisible = !1),
              a
            );
          }
          (0, _.Z)(n, e);
          var r = (0, y.Z)(n);
          return n;
        })(Jt),
        Wo = Jo,
        Vo = {
          display: "block",
          position: "absolute",
          "z-index": "1000",
          width: "1px",
          "min-width": "100%",
          margin: "2px 0 0 0",
          padding: "0",
          border: "none",
          overflow: "hidden",
        },
        Xo = (function (e) {
          function n() {
            return (0, u.Z)(this, n), r.apply(this, arguments);
          }
          (0, _.Z)(n, e);
          var r = (0, y.Z)(n);
          return (
            (0, l.Z)(n, [
              {
                key: "updateStyle",
                value: function (e) {
                  var t = this;
                  Object.keys(e).forEach(function (n) {
                    t._iframe.style[n] = e[n];
                  });
                },
              },
              {
                key: "update",
                value: function (e) {
                  this.send({ action: "stripe-user-update", payload: e });
                },
              },
              {
                key: "_createIFrame",
                value: function (e, r, o) {
                  var i = t((0, Ht.Z)(n.prototype), "_createIFrame", this).call(
                    this,
                    e,
                    r,
                    o && "object" == typeof o
                      ? (0, c.Z)((0, c.Z)({}, o), {}, { isSecondaryFrame: !0 })
                      : o
                  );
                  return (0, b.yq)(i, Vo), (i.style.height = "0"), i;
                },
              },
            ]),
            n
          );
        })(Jt),
        Qo = Xo,
        $o = !1,
        ei = function (e) {
          $o ||
            ("null" === (null != e ? e : window.origin) &&
              (($o = !0),
              console.error(
                "Stripe.js requires 'allow-same-origin' if sandboxed."
              )));
        },
        ti = e(6977),
        ni = e(6042),
        ri = ur.OV,
        oi = function (e) {
          var t = e.mode;
          return !("paymentMethod-from-data" === t.tag && t.data.acss_debit);
        },
        ii = function (e) {
          return null !== e && "object" == typeof e && !0 === e.skipMandate;
        },
        ai = function (e) {
          return (
            null !== e && "object" == typeof e && !!e.shouldCreatePaymentMethod
          );
        },
        ci = function (e) {
          var t = e.controller,
            n = e.shouldCreatePaymentMethod,
            r = e.intentSecret,
            o = e.mode,
            i = e.confirmIntentData;
          return t.action
            .createAcssDebitSession({
              intentSecret: r,
              shouldCreatePaymentMethod: n,
              confirmIntentData: i,
              mode: o,
            })
            .then(function (e) {
              if ("error" === e.type) return { type: "error", error: e.error };
              var n = (0, ni.q)(t, {
                url: (0, ze.jr)(e.object.url),
                size: "400x600",
                locale: e.locale,
                frameTitle: "acss.dialog_frame_title",
                useLightboxHostedCloseButton: !1,
              });
              return new U.J(function (e) {
                n._on("request-close", function () {
                  (0, ni.G)(n)
                    .then(function () {
                      return t.action.localizeError(ur.LR);
                    })
                    .then(function (t) {
                      e({ type: "error", error: t });
                    });
                }),
                  n._on("session-complete", function (t) {
                    var r = t.paymentMethod;
                    (0, ni.G)(n).then(function () {
                      e({ type: "success", paymentMethod: r });
                    });
                  });
              });
            });
        },
        si = function (e, t, n, r, o) {
          var i = "confirmAcssDebitPayment",
            a = E.GS.acss_debit,
            s = (0, ur.cn)(n, i),
            u = (0, ur.o1)(a, i, r, s),
            l = ai(o);
          return (
            ri(o, i),
            ii(o) || !oi(u)
              ? e.action
                  .confirmPaymentIntent(
                    (0, c.Z)(
                      (0, c.Z)({}, u),
                      {},
                      {
                        expectedType: a,
                        options: { handleActions: !1 },
                        mids: t,
                      }
                    )
                  )
                  .then(ti.PA)
              : ci({
                  controller: e,
                  shouldCreatePaymentMethod: l,
                  intentSecret: s,
                  mode: "payment",
                  confirmIntentData: u,
                }).then(function (n) {
                  switch (n.type) {
                    case "error":
                      return { error: n.error };
                    case "success":
                      return e.action
                        .confirmPaymentIntent({
                          mode: {
                            tag: "paymentMethod",
                            paymentMethod: n.paymentMethod,
                            options: u.mode.options || {},
                            intentSecret: s,
                          },
                          otherParams: u.otherParams,
                          expectedType: a,
                          options: { handleActions: !1 },
                          mids: t,
                        })
                        .then(ti.PA);
                    default:
                      return (0, v.Rz)(n.type);
                  }
                })
          );
        },
        ui = function (e, t, n, r, o) {
          var i = "confirmAcssDebitSetup",
            a = E.GS.acss_debit,
            s = (0, ur.jH)(n, i),
            u = (0, ur.o1)(a, i, r, s),
            l = ai(o);
          return (
            ri(o, i),
            ii(o) || !oi(u)
              ? e.action
                  .confirmSetupIntent(
                    (0, c.Z)(
                      (0, c.Z)({}, u),
                      {},
                      {
                        expectedType: a,
                        options: { handleActions: !1 },
                        mids: t,
                      }
                    )
                  )
                  .then(ti.e3)
              : ci({
                  controller: e,
                  shouldCreatePaymentMethod: l,
                  intentSecret: s,
                  mode: "setup",
                  confirmIntentData: u,
                }).then(function (n) {
                  switch (n.type) {
                    case "error":
                      return { error: n.error };
                    case "success":
                      return e.action
                        .confirmSetupIntent({
                          mode: {
                            tag: "paymentMethod",
                            paymentMethod: n.paymentMethod,
                            options: u.mode.options || {},
                            intentSecret: s,
                          },
                          otherParams: u.otherParams,
                          expectedType: a,
                          options: { handleActions: !1 },
                          mids: t,
                        })
                        .then(ti.e3);
                    default:
                      return (0, v.Rz)(n.type);
                  }
                })
          );
        },
        li = "https://maps.googleapis.com/maps/api/js",
        pi =
          /^https:\/\/maps\.googleapis\.com\/maps\/api\/js\/?(\?.*)?libraries=(.*,)?places((,|&)+.*)?$/,
        di = function (e) {
          switch (e) {
            case "INVALID_REQUEST":
            case "NOT_FOUND":
            case "OK":
            case "OVER_QUERY_LIMIT":
            case "REQUEST_DENIED":
            case "UNKNOWN_ERROR":
            case "ZERO_RESULTS":
              return e;
            default:
              return "UNKNOWN_ERROR";
          }
        },
        mi = "ADDRESS_AUTOCOMPLETE_PREDICTION_RESULTS",
        fi = "ADDRESS_AUTOCOMPLETE_PLACE_DETAILS",
        hi = null,
        _i = function (e) {
          return (
            null !== hi ||
              (hi = new U.J(function (t, n) {
                if ("undefined" != typeof window)
                  if (window.google && window.google.maps.places)
                    t(window.google.maps.places);
                  else
                    try {
                      var r = (function () {
                        var e = document.querySelectorAll(
                          'script[src^="'.concat(li, '"]')
                        );
                        for (var t in e) if (pi.test(e[t].src)) return e[t];
                        return null;
                      })();
                      r ||
                        (r = (function (e) {
                          var t = document.createElement("script");
                          return (
                            (t.src = ""
                              .concat(li, "?key=")
                              .concat(e, "&libraries=places")),
                            (document.head || document.body).appendChild(t),
                            t
                          );
                        })(e)),
                        (r.onload = function () {
                          window.google.maps.places
                            ? t(window.google.maps.places)
                            : n(new Error("Google Maps API not available"));
                        });
                    } catch (e) {
                      n(e);
                    }
                else t(null);
              })),
            hi
          );
        },
        yi = function (e, t, n) {
          var r = e.search,
            o = e.countryRestrictions;
          var i = function (e) {
            return {
              predictions: [],
              status: "error",
              error: {
                status: di(e),
                message: "Google Maps returned an API error",
              },
            };
          };
          void 0 === t || To
            ? n.send({
                action: "google-maps-predictions",
                payload: { data: { tag: mi, value: i("UNKNOWN_ERROR") } },
              })
            : (function (e, t) {
                try {
                  t();
                } catch (t) {
                  e.send({
                    action: "google-maps-predictions",
                    payload: {
                      data: {
                        tag: mi,
                        value: {
                          predictions: [],
                          status: "error",
                          error: {
                            status: "UNKNOWN_ERROR",
                            message: t.message,
                          },
                        },
                      },
                    },
                  });
                }
              })(n, function () {
                var e = t.autocompleteService,
                  a = t.sessionToken;
                e.getPlacePredictions(
                  {
                    input: r,
                    sessionToken: a,
                    componentRestrictions: { country: o },
                  },
                  function (e, t) {
                    var r;
                    switch (t) {
                      case google.maps.places.PlacesServiceStatus.OK:
                        r = { predictions: e, status: "ok" };
                        break;
                      case google.maps.places.PlacesServiceStatus.ZERO_RESULTS:
                        r = { predictions: [], status: "zeroResults" };
                        break;
                      default:
                        r = i(t);
                    }
                    n.send({
                      action: "google-maps-predictions",
                      payload: { data: { tag: mi, value: r } },
                    });
                  }
                );
              });
        },
        vi = {
          attachLinkAccountSessionForPayment: null,
          attachLinkAccountSessionForSetup: null,
          authenticate3DS2: null,
          cancelCardImageVerificationChallenge: null,
          cancelCheckout: null,
          cancelPaymentIntentSource: null,
          cancelSetupIntentSource: null,
          clearInstantDebitsIncentive: null,
          completeLinkAccountSessionElements: null,
          completeWalletConfirm: null,
          confirmPaymentIntent: null,
          confirmReturnIntent: null,
          confirmSetupIntent: null,
          createAcssDebitSession: null,
          createApplePaySession: null,
          createBankPaymentDetails: null,
          createConsumerPaymentDetails: null,
          createEphemeralKeyNonce: null,
          createPaymentMethodWithData: null,
          createPaymentMethodWithElement: null,
          createPaymentMethodWithElements: null,
          createPaymentPage: null,
          createPaymentPageWithSession: null,
          createRadarSession: null,
          createSourceWithData: null,
          createSourceWithElement: null,
          confirmInstantDebitsIncentiveForPaymentDetails: null,
          fetchingWallets: null,
          shouldShowApplePayButton: null,
          expressCheckoutConfirmStart: null,
          expressCheckoutConfirmEnd: null,
          payButtonSheetOpened: null,
          payButtonSheetClosed: null,
          getElementConfirmingPayment: null,
          getIsAwaitingConfirmCallback: null,
          getElementsSessionAmountModeCurrency: null,
          setExpressCheckoutConfirmData: null,
          closeECEPaymentSheet: null,
          fetchLocale: null,
          fetchUpdates: null,
          localizeError: null,
          unsafeLocalizeString: null,
          loginWithConsumerInfo: null,
          lookupLocale: null,
          refreshPaymentIntent: null,
          refreshSetupIntent: null,
          retrieveIssuingCard: null,
          retrieveIssuingCardWithoutNonce: null,
          retrieveOrder: null,
          retrievePaymentIntent: null,
          retrieveSetupIntent: null,
          retrieveSource: null,
          removeElementsExperimentId: null,
          fetchCartSession: null,
          getGoogleMapsPredictions: null,
          getGoogleMapsDetails: null,
          initGoogleMapsService: null,
          setupStoreForElementsGroup: null,
          showWalletIfNecessary: null,
          submitOrder: null,
          tokenizeCvcUpdate: null,
          tokenizeWithData: null,
          tokenizeWithElement: null,
          updateCSSFonts: null,
          updateElementsOptions: null,
          updateOrder: null,
          updatePaymentIntent: null,
          verifyCardImageVerificationChallenge: null,
          verifyMicrodepositsForPayment: null,
          verifyMicrodepositsForSetup: null,
          retrieveCardNetworks: null,
          isCardMetadataRequired: null,
          retrieveLinkConfig: null,
          checkForLinkClientSecret: null,
          resolveLocale: null,
          elementUnmounted: null,
          logOutOfLinkInElements: null,
          cmpStatusChange: null,
        },
        gi = function (e) {
          var t = 0,
            n = [];
          return {
            acquire: function () {
              if (t < e) return t++, U.J.resolve();
              var r = new ct();
              return n.push(r), r.promise;
            },
            release: function () {
              var r;
              (t--, n.length > 0 && t < e) &&
                (t++, null === (r = n.shift()) || void 0 === r || r.resolve());
            },
          };
        },
        bi = !1,
        wi = {},
        ki = function (e, t) {
          return (
            document.activeElement === e._iframe ||
            (e._iframe.parentElement && document.activeElement === t)
          );
        },
        Ei = function (e) {
          return "object" == typeof e &&
            null !== e &&
            "IntegrationError" === e.name
            ? new A.No("string" == typeof e.message ? e.message : "")
            : e;
        },
        Si = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this._cmpResult = "not_checked"),
              (this._sendCaReq = function (e, t) {
                var r = (0, g.To)(e),
                  o = new ct();
                return (
                  (n._requests[r] = o),
                  n._controllerFrame.send({
                    action: "stripe-controller-action-request",
                    payload: { nonce: r, actionName: e, request: t },
                  }),
                  o.promise
                );
              }),
              (this.keyMode = function () {
                return (0, De.lO)(n._apiKey);
              }),
              (this.mids = function () {
                return n._getMids();
              }),
              (this.action = Object.keys(vi).reduce(function (e, t) {
                return (0, c.Z)(
                  (0, c.Z)({}, e),
                  {},
                  (0, p.Z)({}, t, function (e) {
                    return n._sendCaReq(t, e);
                  })
                );
              }, {})),
              (this.createElementFrame = function (e, t, r, o) {
                var i = n._betas,
                  a = new zo({
                    type: e,
                    betas: i,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    appParams: (0, c.Z)(
                      (0, c.Z)({}, o),
                      {},
                      {
                        componentName: t,
                        keyMode: (0, De.lO)(n._apiKey),
                        apiKey: n._apiKey,
                      }
                    ),
                  });
                return n._setupFrame(a, e, r);
              }),
              (this.createSecondaryElementFrame = function (e, t, r, o, i) {
                var a = n._betas,
                  s = new Qo({
                    type: e,
                    betas: a,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    appParams: (0, c.Z)(
                      (0, c.Z)({}, i),
                      {},
                      {
                        componentName: t,
                        primaryElementType: r,
                        keyMode: (0, De.lO)(n._apiKey),
                      }
                    ),
                  });
                return n._setupFrame(s, e, o);
              }),
              (this.createHiddenFrame = function (e, t) {
                var r = new Vt({
                  type: e,
                  betas: n._betas,
                  controllerId: n._id,
                  listenerRegistry: n._listenerRegistry,
                  appParams: t,
                });
                return n._setupFrame(r, e);
              }),
              (this.getCredentials = function () {
                return {
                  publishableKey: n._apiKey,
                  stripeAccount: n._stripeAccount,
                  apiVersion: n._apiVersion,
                };
              }),
              (this.createLightboxFrame = function (e) {
                var t = e.type,
                  r = e.options,
                  o = new Wo({
                    type: t,
                    controllerId: n._id,
                    listenerRegistry: n._listenerRegistry,
                    options: (0, c.Z)((0, c.Z)({}, r), {}, { betas: n._betas }),
                  }),
                  i = "LINK_AUTOFILL_MODAL" === e.type ? e.groupId : null;
                return n._setupFrame(o, t, i);
              }),
              (this._setupFrame = function (e, t, r) {
                return (
                  (n._frames[e.id] = e),
                  n._controllerFrame.sendPersistent({
                    action: "stripe-user-createframe",
                    payload: { newFrameId: e.id, frameType: t, groupId: r },
                  }),
                  e._on("unload", function () {
                    n._controllerFrame.sendPersistent({
                      action: "stripe-frame-unload",
                      payload: { unloadedFrameId: e.id },
                    });
                  }),
                  e._on("destroy", function () {
                    delete n._frames[e.id],
                      n._controllerFrame.sendPersistent({
                        action: "stripe-frame-destroy",
                        payload: { destroyedFrameId: e.id },
                      });
                  }),
                  e._on("load", function () {
                    n._controllerFrame.sendPersistent({
                      action: "stripe-frame-load",
                      payload: { loadedFrameId: e.id },
                    }),
                      n._controllerFrame.loaded &&
                        e.send({
                          action: "stripe-controller-load",
                          payload: {},
                        });
                  }),
                  e
                );
              }),
              (this.report = function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                n._controllerFrame.send({
                  action: "stripe-controller-report",
                  payload: { event: e, data: t },
                });
              }),
              (this.warn = function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                n._controllerFrame.send({
                  action: "stripe-controller-warn",
                  payload: { args: t },
                });
              }),
              (this.controllerFor = function () {
                return "outer";
              }),
              (this._setupPostMessage = function () {
                n._listenerRegistry.addEventListener(
                  window,
                  "message",
                  function (e) {
                    var t = e.data,
                      r = e.origin,
                      o = e.source,
                      i = (0, ze.$G)(t);
                    i && ((0, k.uW)(I.jQ, r) ? n._handleMessage(i, o) : ei(r));
                  }
                );
              }),
              (this._nodeIsKnownElement = function (e) {
                return (
                  e &&
                  "IFRAME" === e.nodeName &&
                  !!n._frames[e.getAttribute("name") || ""]
                );
              }),
              (this._handleMessage = function (e, t) {
                var r = e.controllerId,
                  o = e.frameId,
                  i = e.message,
                  a = n._frames[o];
                if (r === n._id)
                  switch (i.action) {
                    case "stripe-frame-event":
                      var s = i.payload.event,
                        u = i.payload.data;
                      if (a) {
                        if (w.Ah) {
                          var l = a._iframe.parentElement,
                            p = l && l.querySelector(".".concat(Nt.Kb));
                          if (
                            "focus" === s &&
                            !bi &&
                            p &&
                            !ki(a, p) &&
                            !wi[o]
                          ) {
                            p.focus(),
                              (bi = !0),
                              (wi[o] = !0),
                              setTimeout(function () {
                                wi[o] = !1;
                              }, 1e3);
                            break;
                          }
                          if ("blur" === s && bi) {
                            bi = !1;
                            break;
                          }
                          "blur" === s &&
                            w.Gx &&
                            setTimeout(function () {
                              var e = document.activeElement;
                              if (
                                e &&
                                !ki(a, p) &&
                                !(0, b.a0)(e) &&
                                !n._nodeIsKnownElement(e)
                              ) {
                                var t = l && l.querySelector(".".concat(Nt.tk));
                                if (t) {
                                  var r = t;
                                  (r.disabled = !1),
                                    r.focus(),
                                    r.blur(),
                                    (r.disabled = !0);
                                }
                                e.focus();
                              }
                            }, 400);
                        }
                        "load" === s &&
                          (u = (0, c.Z)((0, c.Z)({}, u), {}, { source: t })),
                          a._emit(s, u);
                      } else o === n._id && n._controllerFrame._emit(s, u);
                      break;
                    case "stripe-frame-action-response":
                      a && a.resolve(i.payload.nonce, i.payload.faRes);
                      break;
                    case "stripe-frame-action-error":
                      a && a.reject(i.payload.nonce, Ei(i.payload.faErr));
                      break;
                    case "stripe-frame-error":
                      throw new A.No(i.payload.message);
                    case "stripe-integration-error":
                      a &&
                        a._emit("__privateIntegrationError", {
                          message: i.payload.message,
                        });
                      break;
                    case "stripe-controller-load":
                      n._controllerFrame._emit("load", { source: t }),
                        n._loadCount++,
                        Object.keys(n._frames).forEach(function (e) {
                          return n._frames[e].send({
                            action: "stripe-controller-load",
                            payload: {},
                          });
                        });
                      var d = n._createTimestamp.getAsPosixTime(),
                        m = {
                          stripeJsLoad:
                            n._stripeJsLoadTimestamp.getAsPosixTime(),
                          stripeCreate: d,
                          create: d,
                        };
                      n._mountTimestamp &&
                        (m.mount = n._mountTimestamp.getAsPosixTime()),
                        n._controllerFrame.send({
                          action: "stripe-user-mount",
                          payload: {
                            timestamps: m,
                            loadCount: n._loadCount,
                            matchFrame:
                              t === n._controllerFrame._iframe.contentWindow,
                            rtl: !1,
                            paymentRequestButtonType: null,
                          },
                        });
                      break;
                    case "stripe-controller-local-storage-acquire-request":
                      var f = i.payload.nonce;
                      n._innerLocalStorageSemaphore.acquire().then(function () {
                        n._controllerFrame.send({
                          action:
                            "stripe-controller-local-storage-acquire-response",
                          payload: { nonce: f },
                        });
                      });
                      break;
                    case "stripe-controller-local-storage-release":
                      n._innerLocalStorageSemaphore.release();
                      break;
                    case "stripe-controller-action-response":
                      n._requests[i.payload.nonce] &&
                        n._requests[i.payload.nonce].resolve(
                          i.payload.response
                        );
                      break;
                    case "stripe-controller-action-error":
                      n._requests[i.payload.nonce] &&
                        n._requests[i.payload.nonce].reject(
                          Ei(i.payload.error)
                        );
                      break;
                    case "stripe-api-call":
                      ln();
                      break;
                    case "show-wallet":
                      var h = n._frames[i.payload.frameId];
                      h && h._emit("show-wallet", i.payload.wallet);
                      break;
                    case "show-bacs-mandate-confirmation":
                      var _ = n.createLightboxFrame({
                        type: ze.NC.BACS_MANDATE_CONFIRMATION_APP,
                        options: { locale: n._locale || "en" },
                      });
                      _._on("load", function () {
                        _.show(), _.fadeInBackdrop();
                      }),
                        _._once("request-close", function () {
                          (0, ni.G)(_).then(function () {});
                        });
                      break;
                    case "show-acss-bank-collection":
                      if (!i.payload.parsedIntentSecret) {
                        n._controllerFrame.send({
                          action: "complete-acss-bank-collection",
                          payload: { type: "reject" },
                        });
                        break;
                      }
                      ci({
                        shouldCreatePaymentMethod: !0,
                        controller: n,
                        intentSecret: i.payload.parsedIntentSecret,
                        mode:
                          "PAYMENT_INTENT" === i.payload.parsedIntentSecret.type
                            ? "payment"
                            : "setup",
                        confirmIntentData: {
                          mode: {
                            tag: "paymentMethod-from-data",
                            type: "acss_debit",
                            data: {
                              billing_details:
                                i.payload.collectedBillingDetails,
                            },
                            options: null,
                            intentSecret: i.payload.parsedIntentSecret,
                          },
                          otherParams: {},
                        },
                      }).then(function (e) {
                        "success" === e.type
                          ? n._controllerFrame.send({
                              action: "complete-acss-bank-collection",
                              payload: {
                                type: "success",
                                paymentMethod: e.paymentMethod,
                              },
                            })
                          : n._controllerFrame.send({
                              action: "complete-acss-bank-collection",
                              payload: { type: "reject" },
                            });
                      });
                      break;
                    case "init-google-maps-service":
                      _i(i.payload.apiKey).then(function (e) {
                        null !== e &&
                          (n._googleMapsService = (function (e) {
                            var t = window.gm_authFailure;
                            window.gm_authFailure = function () {
                              t && t(), (To = !0);
                            };
                            var n = new e.AutocompleteService(),
                              r = new e.AutocompleteSessionToken(),
                              o = document.createElement("div");
                            return {
                              autocompleteService: n,
                              sessionToken: r,
                              placeService: new e.PlacesService(o),
                            };
                          })(e));
                      });
                      break;
                    case "get-google-maps-predictions":
                      i.payload.frameId &&
                        yi(
                          i.payload.data,
                          n._googleMapsService,
                          n._frames[i.payload.frameId]
                        );
                      break;
                    case "get-google-maps-details":
                      i.payload.frameId &&
                        (function (e, t, n) {
                          var r = e.placeId,
                            o = function (e) {
                              return {
                                error: {
                                  status: di(e),
                                  message: "Google Maps returned an API error",
                                },
                              };
                            };
                          if (void 0 !== t) {
                            var i = t.placeService,
                              a = t.sessionToken;
                            i.getDetails(
                              {
                                placeId: r,
                                sessionToken: a,
                                fields: ["address_components"],
                              },
                              function (e, t) {
                                var r;
                                (r =
                                  t !==
                                  google.maps.places.PlacesServiceStatus.OK
                                    ? o(t)
                                    : { place: e }),
                                  n.send({
                                    action: "google-maps-details",
                                    payload: { data: { tag: fi, value: r } },
                                  });
                              }
                            );
                          } else
                            n.send({
                              action: "google-maps-details",
                              payload: {
                                data: { tag: fi, value: o("UNKNOWN_ERROR") },
                              },
                            });
                        })(
                          i.payload.data,
                          n._googleMapsService,
                          n._frames[i.payload.frameId]
                        );
                      break;
                    case "ece-apple-pay-complete-payment":
                      var y = n._frames[i.payload.frameId];
                      y &&
                        y._emit(
                          "ece-apple-pay-complete-payment",
                          i.payload.isError
                        );
                  }
              });
            var r = t.listenerRegistry,
              o = t.stripeJsLoadTimestamp,
              i = t.stripeCreateTimestamp,
              a = t.onFirstLoad,
              s = t.betas,
              l = t.mids,
              m = t.innerLocalStorageSemaphore,
              f = (0, d.Z)(t, [
                "listenerRegistry",
                "stripeJsLoadTimestamp",
                "stripeCreateTimestamp",
                "onFirstLoad",
                "betas",
                "mids",
                "innerLocalStorageSemaphore",
              ]),
              h = f.apiKey,
              _ = f.apiVersion,
              y = f.stripeAccount,
              v = f.stripeJsId,
              E = f.locale;
            (this._id = (0, g.To)("__privateStripeController")),
              (this._innerLocalStorageSemaphore = m || gi(1)),
              (this._stripeJsId = v),
              (this._apiKey = h),
              (this._apiVersion = _),
              (this._stripeAccount = y),
              (this._listenerRegistry = r),
              (this._betas = s),
              (this._locale = E),
              (this._getMids =
                l ||
                function () {
                  return null;
                }),
              (this._controllerFrame = new Qt({
                type: ze.NC.CONTROLLER,
                betas: s,
                controllerId: this._id,
                listenerRegistry: r,
                appParams: (0, c.Z)(
                  (0, c.Z)({}, f),
                  {},
                  { betas: s, stripeJsLoadTime: o.getAsPosixTime() }
                ),
              })),
              (this._stripeJsLoadTimestamp = o),
              (this._createTimestamp = i),
              (this._loadCount = 0);
            var S = function (e) {
              var t = e.anchor;
              (n._mountTimestamp = new gt.E()),
                t !== document.body &&
                  n.report("controller.mount.custom_container");
            };
            this._controllerFrame._isMounted()
              ? S({ anchor: this._controllerFrame._iframe.parentElement })
              : this._controllerFrame._once("mount", S),
              a && this._controllerFrame._once("load", a),
              (this._frames = {}),
              (this._requests = {}),
              this._setupPostMessage(),
              (this._handleMessage = j(this._handleMessage, this)),
              this.action.fetchLocale({ locale: E || "auto" });
          }
          return (
            (0, l.Z)(e, [
              {
                key: "registerWrapper",
                value: function (e) {
                  this._controllerFrame.send({
                    action: "stripe-wrapper-register",
                    payload: { stripeWrapperLibrary: e },
                  });
                },
              },
              {
                key: "registerAppInfo",
                value: function (e) {
                  this._controllerFrame.send({
                    action: "stripe-app-info-register",
                    payload: { wrapperLibrary: e },
                  });
                },
              },
            ]),
            e
          );
        })(),
        Pi = Si,
        Ai = ["elements", "createToken", "createPaymentMethod"],
        Ci = ["elements", "createSource", "createToken", "createPaymentMethod"],
        Ii = (function () {
          function e(t) {
            var n = this;
            (0, u.Z)(this, e),
              (this._gets = []),
              (this._didDetect = !1),
              (this._onDetection = function (e) {
                (n._didDetect = !0), t(e);
              }),
              window.Stripe &&
                window.Stripe.__cachedInstances &&
                this._onDetection("react-stripe-elements");
          }
          return (
            (0, l.Z)(e, [
              {
                key: "got",
                value: function (e) {
                  this._didDetect ||
                    ("elements" === e
                      ? (this._gets = ["elements"])
                      : this._gets.push(e),
                    this._checkForWrapper());
                },
              },
              {
                key: "called",
                value: function (e) {
                  this._didDetect ||
                    (this._gets = this._gets.filter(function (t) {
                      return t !== e;
                    }));
                },
              },
              {
                key: "_checkForWrapper",
                value: function () {
                  (0, P.Xy)(this._gets, Ai)
                    ? this._onDetection("react-stripe-js")
                    : (0, P.Xy)(this._gets, Ci) &&
                      this._onDetection("react-stripe-elements");
                },
              },
            ]),
            e
          );
        })(),
        Ni = function (e) {
          if (!e || "object" != typeof e) return null;
          var t = e.type;
          return {
            type: "string" == typeof t ? t : null,
            data: (0, d.Z)(e, ["type"]),
          };
        },
        Ti = function (e) {
          switch (e.type) {
            case "object":
              return { source: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        Mi = {
          source: (0, v.mC)({
            id: (0, v.xe)("src_"),
            client_secret: (0, v.xe)("src_client_secret_"),
          }),
        },
        Ri = (0, v.mC)(Mi),
        Oi = function (e) {
          switch (e.type) {
            case "object":
              return { paymentMethod: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        ji = function (e, t, n, r, o, i) {
          if ("string" == typeof r)
            return (function (e, t, n, r, o) {
              var i = (0, v.rX)(r),
                a = Ni(i ? o : r),
                c = a || { type: null, data: {} },
                s = c.type,
                u = c.data;
              if (s && n !== s)
                return U.J.reject(
                  new A.No(
                    "The type supplied in payment_method_data is not consistent."
                  )
                );
              if (i) {
                var l = i._implementation._frame.id,
                  p = i._componentName;
                return e.action
                  .createPaymentMethodWithElement({
                    frameId: l,
                    elementName: p,
                    type: n,
                    paymentMethodData: u,
                    mids: t,
                  })
                  .then(Oi);
              }
              return a
                ? e.action
                    .createPaymentMethodWithData({
                      elementName: null,
                      type: n,
                      paymentMethodData: u,
                      mids: t,
                    })
                    .then(Oi)
                : U.J.reject(
                    new A.No(
                      "Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."
                    )
                  );
            })(e, t, r, o, i);
          try {
            var a = (function (e, t) {
                return (0, v.Gu)((0, jn.q2)(null, t), e, "createPaymentMethod")
                  .value;
              })(r, n),
              c = a.element,
              s = a.elements,
              u = a.type,
              l = a.data,
              p = (0, S.uN)(n, S.M4.elements_enable_deferred_intent_beta_1);
            if (c) {
              var d = c._implementation._frame.id,
                m = c._componentName;
              return e.action
                .createPaymentMethodWithElement({
                  frameId: d,
                  elementName: m,
                  type: u,
                  paymentMethodData: l,
                  mids: t,
                })
                .then(Oi);
            }
            if (p && s) {
              var f,
                h = s._id,
                _ = "stripe.createPaymentMethod()";
              return e.action
                .getElementConfirmingPayment({
                  groupId: h,
                  errorMessageMethodName: _,
                })
                .then(function (n) {
                  return (
                    (f = n),
                    e.action.createPaymentMethodWithElements({
                      groupId: h,
                      elements: s._elements,
                      paymentMethodData: l,
                      mids: t,
                      elementConfirming: n,
                    })
                  );
                })
                .then(function (t) {
                  return (0,
                  ur.VN)({ groupId: h, elementConfirmingPayment: f, controller: e, data: t, errorMessageMethodName: _ });
                })
                .then(function (e) {
                  return Oi(e);
                });
            }
            if (u)
              return e.action
                .createPaymentMethodWithData({
                  elementName: null,
                  type: u,
                  paymentMethodData: l,
                  mids: t,
                })
                .then(Oi);
            throw new Error("No type or elements provided");
          } catch (e) {
            return U.J.reject(e);
          }
        },
        Zi = e(1849),
        xi = e(3167),
        Li = e(112),
        Bi = {
          clientSecret: (0, v.jt)(v.Z_),
          params: (0, v.jt)(v.Ry),
          elements: (0, v.jt)(v.Ry),
        },
        Di = function (e, t) {
          var n = e.rawSecret,
            r = e.rawElements,
            o = e.validatedUpdateParams;
          if (
            ((function (e, t) {
              var n = e.rawSecret,
                r = e.rawElements;
              if (!n && !r)
                throw new A.No(
                  "".concat(
                    t,
                    ": expected either `elements` or `clientSecret`, but got neither."
                  )
                );
            })({ rawSecret: n, rawElements: r }, t),
            n && !r)
          ) {
            if (
              (null == o ? void 0 : o.payment_method) &&
              (null == o ? void 0 : o.payment_method_data)
            )
              throw new A.No(
                "".concat(
                  t,
                  ": Expected either `payment_method` or `payment_method_data`, but not both."
                )
              );
            return { type: "clientSecret", clientSecret: n };
          }
          var i = (0, v.MO)(r);
          if (!i)
            throw new A.No(
              "Invalid value for "
                .concat(
                  t,
                  ": elements should be an Elements group. You specified: "
                )
                .concat(typeof r, ".")
            );
          return { type: "elements", elements: i, clientSecret: n };
        },
        qi = function (e, t, n, r, o) {
          var i,
            a,
            s = (function (e) {
              var t = e.rawUpdateData,
                n = e.controller,
                r = e.errorMessageMethodName,
                o = (0, v.Gu)((0, v.mC)(Bi), t, r),
                i = o.value,
                a = i.elements,
                c = void 0 === a ? void 0 : a,
                s = i.params,
                u = i.clientSecret,
                l = o.warnings,
                p = (0, v.Gu)(
                  (0, v.jt)(
                    (0, v.mC)({
                      payment_method: (0, v.jt)(v.Z_),
                      payment_method_data: (0, v.jt)(v.Ry),
                      payment_method_options: (0, v.jt)(v.Ry),
                      setup_future_usage: (0, v.jt)(v.Xg),
                    })
                  ),
                  s,
                  r,
                  { path: ["params"] }
                ).value,
                d = Di(
                  { rawSecret: u, rawElements: c, validatedUpdateParams: p },
                  r
                );
              return (
                l.forEach(function (e) {
                  return n.warn(e);
                }),
                {
                  validatedUpdateParams: p,
                  rawUpdateParams: s,
                  validatedParams: d,
                }
              );
            })({ rawUpdateData: n, controller: e, errorMessageMethodName: o }),
            u = s.validatedParams,
            l = s.validatedUpdateParams,
            p = s.rawUpdateParams,
            m = null != p ? p : {},
            f =
              (m.payment_method,
              m.payment_method_data,
              m.payment_method_options,
              (0, d.Z)(m, [
                "payment_method",
                "payment_method_data",
                "payment_method_options",
              ])),
            h = u.clientSecret ? (0, ti.RY)(u.clientSecret) : null;
          return "elements" === u.type
            ? {
                mode: {
                  tag: "elements",
                  groupId: u.elements._id,
                  data:
                    null !== (i = null == l ? void 0 : l.payment_method_data) &&
                    void 0 !== i
                      ? i
                      : {},
                  options:
                    null !==
                      (a = null == l ? void 0 : l.payment_method_options) &&
                    void 0 !== a
                      ? a
                      : {},
                  intentSecret: h || void 0,
                },
                otherParams: f,
                expectedType: null,
                mids: t,
                options: null,
              }
            : (function (e) {
                var t,
                  n = e.validatedParams,
                  r = e.validatedConfirmParams,
                  o = e.otherParams,
                  i = e.intentType,
                  a = e.mids,
                  s = null != r ? r : {},
                  u = s.payment_method_data,
                  l = s.payment_method,
                  p = s.payment_method_options,
                  d =
                    "payment" === i
                      ? (0, ur.cn)(n.clientSecret, "confirmPayment")
                      : (0, ur.jH)(n.clientSecret, "confirmSetup"),
                  m = (0, ur.k7)({ payment_method: u }),
                  f = {};
                return (
                  "paymentMethod" ===
                    (t =
                      u && m
                        ? {
                            intentSecret: d,
                            tag: "paymentMethod-from-data",
                            type: m,
                            data: u,
                            options: null != p ? p : {},
                          }
                        : l
                        ? {
                            intentSecret: d,
                            tag: "paymentMethod",
                            paymentMethod: l,
                            options: null != p ? p : {},
                          }
                        : { intentSecret: d, tag: "none" }).tag &&
                    (f = {
                      mandate_data: {
                        customer_acceptance: {
                          type: "online",
                          online: { infer_from_client: !0 },
                        },
                      },
                    }),
                  {
                    mids: a,
                    mode: t,
                    expectedType: m,
                    otherParams: (0, c.Z)((0, c.Z)({}, f), o),
                    options: { handleActions: !1 },
                  }
                );
              })({
                validatedParams: u,
                validatedConfirmParams: l,
                otherParams: f,
                intentType: r,
                mids: t,
              });
        },
        Fi = function (e, t) {
          return function (n, r, o, i, a) {
            var s = (0, ur.cn)(o, e),
              u = (0, ur.o1)(t, e, i, s),
              l = (0, ur.el)(e, a),
              p = "none" === u.mode.tag,
              d = n.action.confirmPaymentIntent(
                (0, c.Z)(
                  (0, c.Z)({}, u),
                  {},
                  { expectedType: t, options: l, mids: r }
                )
              );
            return l.handleActions
              ? d.then((0, xi.nq)(n, p, !1, !1, u.otherParams.expand))
              : d.then(ti.PA);
          };
        },
        Ui = Fi("confirmAcssDebitPayment", E.GS.acss_debit),
        Gi = Fi("confirmAffirmPayment", E.GS.affirm),
        Yi = Fi("confirmAfterpayClearpayPayment", E.GS.afterpay_clearpay),
        Hi = Fi("confirmAuBecsDebitPayment", E.GS.au_becs_debit),
        zi = Fi("confirmBacsDebitPayment", E.GS.bacs_debit),
        Ki = Fi("confirmBancontactPayment", E.GS.bancontact),
        Ji = Fi("confirmBoletoPayment", E.GS.boleto),
        Wi = Fi("confirmCardPayment", E.GS.card),
        Vi = Fi("confirmEpsPayment", E.GS.eps),
        Xi = Fi("confirmFpxPayment", E.GS.fpx),
        Qi = Fi("confirmGiropayPayment", E.GS.giropay),
        $i = Fi("confirmGrabPayPayment", E.GS.grabpay),
        ea = Fi("confirmIdealPayment", E.GS.ideal),
        ta = Fi("confirmKlarnaPayment", E.GS.klarna),
        na = Fi("confirmKonbiniPayment", E.GS.konbini),
        ra = Fi("confirmMobilepayPayment", E.GS.mobilepay),
        oa = Fi("confirmOxxoPayment", E.GS.oxxo),
        ia = Fi("confirmAlipayPayment", E.GS.alipay),
        aa = Fi("confirmP24Payment", E.GS.p24),
        ca = Fi("confirmPayByBankPayment", E.GS.pay_by_bank),
        sa = Fi("confirmPayPalPayment", E.GS.paypal),
        ua = Fi("confirmSepaDebitPayment", E.GS.sepa_debit),
        la = Fi("confirmSofortPayment", E.GS.sofort),
        pa = Fi("confirmIdBankTransferPayment", E.GS.id_bank_transfer),
        da = Fi("confirmUpiPayment", E.GS.upi),
        ma = Fi("confirmUsBankAccountPayment", E.GS.us_bank_account),
        fa = Fi("confirmNzBankAccountPayment", E.GS.nz_bank_account),
        ha = Fi("confirmBlikPayment", E.GS.blik),
        _a = Fi("confirmZipPayment", E.GS.zip),
        ya = Fi("confirmCustomerBalancePayment", E.GS.customer_balance),
        va = function (e, t, n, r, o) {
          if (o && !0 === o.handleActions)
            throw new A.No("Expected option `handleActions` to be `false`.");
          var i = (0, c.Z)(
            (0, c.Z)({}, r),
            {},
            {
              payment_method: (0, c.Z)({}, (r && r.payment_method) || {}),
              payment_method_options: (0, c.Z)(
                (0, c.Z)({}, (r && r.payment_method_options) || {}),
                {},
                {
                  wechat_pay: (0, c.Z)(
                    (0, c.Z)(
                      {},
                      (r &&
                        r.payment_method_options &&
                        r.payment_method_options.wechat_pay) ||
                        {}
                    ),
                    {},
                    { client: "web" }
                  ),
                }
              ),
            }
          );
          return Fi("confirmWechatPayPayment", E.GS.wechat_pay)(e, t, n, i, o);
        },
        ga = function (e, t, n, r, o) {
          if (
            !r ||
            !r.payment_method_options ||
            !r.payment_method_options.wechat_pay ||
            ("web" !== r.payment_method_options.wechat_pay.client &&
              "mobile_web" !== r.payment_method_options.wechat_pay.client)
          )
            throw new A.No(
              "Expected client value `web` or `mobile_web` in payment_method_options."
            );
          var i = {};
          "string" == typeof r.payment_method && (i = r.payment_method),
            "object" == typeof r.payment_method &&
              (i = (0, c.Z)({}, r.payment_method || {}));
          var a = (0, c.Z)(
            (0, c.Z)({}, r),
            {},
            {
              payment_method: i,
              payment_method_options: (0, c.Z)(
                (0, c.Z)({}, (r && r.payment_method_options) || {}),
                {},
                {
                  wechat_pay: (0, c.Z)(
                    {},
                    (r &&
                      r.payment_method_options &&
                      r.payment_method_options.wechat_pay) ||
                      {}
                  ),
                }
              ),
            }
          );
          return Fi("confirmWechatPayPayment", E.GS.wechat_pay)(e, t, n, a, o);
        },
        ba = Fi("confirmCashappPayment", E.GS.cashapp),
        wa = Fi("confirmPayNowPayment", E.GS.paynow),
        ka = Fi("confirmPayNowDisplayBeta1", E.GS.paynow),
        Ea = Fi("confirmPixPayment", E.GS.pix),
        Sa = Fi("confirmPromptPayPayment", E.GS.promptpay),
        Pa = Fi("confirmQrisPayment", E.GS.qris),
        Aa = Fi("confirmRevolutPayPayment", E.GS.revolut_pay),
        Ca = Fi("confirmNetbankingPayment", E.GS.netbanking),
        Ia = function (e, t, n, r) {
          var o = (0, ur.cn)(n, "updatePaymentIntent"),
            i = (0, ur.k7)(r),
            a = (0, ur.o1)(i, "updatePaymentIntent", r, o);
          return e.action
            .updatePaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, a),
                {},
                { expectedType: i, mids: t, options: null }
              )
            )
            .then(ti.PA);
        },
        Na = function (e) {
          var t;
          return "error" in e &&
            "external_payment_method_selected" === e.error.code
            ? {
                selectedPaymentMethod:
                  null === (t = e.error.extra_fields) || void 0 === t
                    ? void 0
                    : t.selectedPaymentMethod,
              }
            : e;
        },
        Ta = function (e, t, n) {
          var r = (0, ur.cn)(t, "verifyMicrodepositsForPayment"),
            o = (0, v.Gu)(v.Ry, n, "stripe.verifyMicrodepositsForPayment");
          return e.action
            .verifyMicrodepositsForPayment({ intentSecret: r, data: o.value })
            .then(ti.PA);
        },
        Ma = function (e, t, n) {
          var r = (0, ur.cn)(t, "collectUsBankAccountForPayment"),
            o = (0, v.Gu)(
              (0, jn.ZY)("us_bank_account"),
              n,
              "stripe.collectUsBankAccountForPayment"
            ).value,
            i = o.paymentMethodData,
            a = o.otherParams;
          return ir(r.clientSecret, r.id, e, i).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return U.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForPayment({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: a.expand,
                  })
                  .then(function (e) {
                    return (0, ti.PA)(e);
                  })
              : e.action
                  .retrievePaymentIntent({ intentSecret: r, hosted: !1 })
                  .then(ti.PA);
          });
        },
        Ra = function (e, t) {
          var n = (0, v.Gu)(
              (0, jn.as)(jn.f4),
              t,
              "stripe.collectBankAccountForPayment"
            ).value,
            r = n.clientSecret,
            o = n.paymentMethodData,
            i = n.otherParams;
          return ir(r.clientSecret, r.id, e, o).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return U.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForPayment({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: i.expand,
                  })
                  .then(function (e) {
                    return (0, ti.PA)(e);
                  })
              : e.action
                  .retrievePaymentIntent({ intentSecret: r, hosted: !1 })
                  .then(ti.PA);
          });
        },
        Oa = function (e, t) {
          var n = (0, ur.cn)(e, "handleCardAction");
          return t.action
            .retrievePaymentIntent({ intentSecret: n, hosted: !1 })
            .then(function (e) {
              var n = (0, xi.Fh)(e);
              switch (n.type) {
                case "error":
                  return U.J.resolve((0, ti.PA)(e));
                case "object":
                  var r = n.object;
                  if ((0, ti.mD)(r.status)) {
                    if ("manual" !== r.confirmation_method)
                      throw new A.No(
                        "handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."
                      );
                    return (0, xi.gO)(t, r, n.locale, !1, !1);
                  }
                  throw new A.No(
                    "handleCardAction: The PaymentIntent supplied is not in the requires_action state."
                  );
                default:
                  return (0, v.Rz)(n);
              }
            });
        },
        ja = { type: "validation_error", code: "errors.code.unexpected" },
        Za = {
          type: "validation_error",
          code: "errors.code.incomplete_payment_details",
        },
        xa = function (e, t, n, r, o) {
          var i = "confirmInstantDebitsPilotPayment",
            a = (0, ur.cn)(n, i),
            s = (0, ur.el)(i, o),
            u = (0, ur.o1)(null, i, r, a),
            l = e.createLightboxFrame({
              type: ze.NC.INSTANT_DEBITS_APP,
              options: {
                intentId: a.id,
                clientSecret: a.clientSecret,
                apiKey: e._apiKey,
                returnOnConfirm: !1 === s.handleActions,
              },
            });
          return (
            l.show(),
            l.fadeInBackdrop(),
            new U.J(function (n) {
              var r = function (e) {
                l.fadeOutBackdrop().then(function () {
                  n(e);
                });
              };
              l._once("cancel", function () {
                l.fadeOutBackdrop(),
                  e.action.localizeError(Za).then(function (e) {
                    r({ error: e });
                  });
              }),
                l._on("instant-debits-fetch-payment-intent", function () {
                  e.action
                    .retrievePaymentIntent({ intentSecret: a, hosted: !1 })
                    .then(function (t) {
                      if (t.object) {
                        var o = t.object;
                        l.send({
                          action:
                            "stripe-instant-debits-received-payment-intent",
                          payload: { paymentIntent: o },
                        }),
                          !1 === s.handleActions &&
                            setTimeout(function () {
                              l.fadeOutBackdrop(), r((0, ti.PA)(t));
                            }, 2e3);
                      } else {
                        var i = t.error;
                        e.action.localizeError(i).then(function (e) {
                          n({ error: e });
                        });
                      }
                    });
                }),
                l._on("instant-debits-attempt-payment", function () {
                  e.action
                    .confirmPaymentIntent(
                      (0, c.Z)(
                        (0, c.Z)({}, u),
                        {},
                        {
                          mode: { tag: "none", intentSecret: a },
                          expectedType: null,
                          options: s,
                          mids: t,
                        }
                      )
                    )
                    .then(function (t) {
                      t.object
                        ? (l.send({
                            action:
                              "stripe-instant-debits-successful-payment-intent",
                            payload: { paymentIntent: t.object },
                          }),
                          setTimeout(function () {
                            r((0, ti.PA)(t));
                          }, 2e3))
                        : e.action.localizeError(t.error).then(function (e) {
                            r({ error: e });
                          });
                    });
                }),
                l._on("instant-debits-flow-error", function () {
                  e.action.localizeError(ja).then(function (e) {
                    r({ error: e });
                  });
                });
            })
          );
        },
        La = e(7549),
        Ba = e(122),
        Da = e(7193),
        qa = e(8147),
        Fa = e(6790),
        Ua = e(8478),
        Ga = function (e, t, n, r, o) {
          var i = (0, La.l)((0, ti.G2)(t)),
            a = (0, ti.O3)(t);
          if (!i) return U.J.resolve({ setupIntent: t });
          switch (i.type) {
            case "captcha-challenge":
              return (0, qa.z)(i, t, e, n);
            case "3ds1-modal":
              return (0, Ba.s)(i, a, I.kE.SETUP_INTENT, e, n, o);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
              return (0, Da.A)(
                i,
                {
                  intentSecret: a,
                  intentType: I.kE.SETUP_INTENT,
                  controller: e,
                  locale: n,
                  hosted: r,
                },
                o
              );
            case "redirect":
              return (0, Fa.e)(t, i.redirectUrl, e);
            case "cashapp_handle_redirect_or_display_qr_code":
              return (0, Ua.p)({ controller: e, locale: n, intent: t });
            default:
              return U.J.resolve({ setupIntent: t });
          }
        },
        Ya = function e(t, n, r, o, i) {
          var a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (I.kO < a) throw new Error("max action recursion depth reached");
          return (0, G._v)()
            .then(function () {
              return Ga(t, n, r, o, i || []);
            })
            .then(function (n) {
              if (n.paymentIntent)
                throw new Error("Got unexpected PaymentIntent response");
              if (
                n.setupIntent &&
                null != n.setupIntent.next_action &&
                "use_stripe_sdk" === n.setupIntent.next_action.type &&
                -1 !==
                  I.zT.indexOf(n.setupIntent.next_action.use_stripe_sdk.type)
              ) {
                var c = a;
                return e(t, n.setupIntent, r, o, i, ++c);
              }
              return n;
            });
        },
        Ha = function (e, t, n, r) {
          return function (o) {
            switch (o.type) {
              case "error":
                var i = o.error,
                  a = i.setup_intent;
                return t && a && "succeeded" === a.status
                  ? U.J.resolve({ setupIntent: a })
                  : U.J.resolve({ error: i });
              case "object":
                var c = o.object;
                return Ya(e, c, o.locale, n, r);
              default:
                return (0, v.Rz)(o);
            }
          };
        },
        za = function (e, t) {
          var n = (0, v.Gu)(
            (0, v.mC)({ clientSecret: jn.Hv }),
            t,
            "stripe.handleNextAction"
          ).value.clientSecret;
          return "SETUP_INTENT" === n.type
            ? (function (e, t) {
                return e.action
                  .retrieveSetupIntent({ intentSecret: t, hosted: !1 })
                  .then(function (t) {
                    switch (t.type) {
                      case "error":
                        return U.J.resolve((0, ti.e3)(t));
                      case "object":
                        var n = t.object;
                        if ((0, ti.mD)(n.status)) return Ya(e, n, t.locale, !1);
                        throw new A.No(
                          "handleNextAction: The SetupIntent supplied is not in the requires_action state."
                        );
                      default:
                        return (0, v.Rz)(t);
                    }
                  });
              })(e, n)
            : (function (e, t) {
                return e.action
                  .retrievePaymentIntent({ intentSecret: t, hosted: !1 })
                  .then(function (t) {
                    switch (t.type) {
                      case "error":
                        return U.J.resolve((0, ti.PA)(t));
                      case "object":
                        var n = t.object;
                        if ((0, ti.mD)(n.status))
                          return (0, xi.gO)(e, n, t.locale, !1, !1);
                        throw new A.No(
                          "handleNextAction: The PaymentIntent supplied is not in the requires_action state."
                        );
                      default:
                        return (0, v.Rz)(t);
                    }
                  });
              })(e, n);
        },
        Ka = function (e, t) {
          if (null == e) return (0, v.x4)(null);
          var n = e.type,
            r = (0, d.Z)(e, ["type"]),
            o = (0, v.Wc)(v.Z_, function () {
              return null;
            })(n, (0, v.NQ)(t, "type"));
          return "error" === o.type ? o : (0, v.x4)({ type: o.value, data: r });
        },
        Ja = function (e, t, n, r) {
          if (null === e) {
            if (null === t) {
              var o = r ? "source_data" : "payment_method_data";
              throw new A.No(
                ""
                  .concat(
                    n,
                    ": you must additionally specify the type of payment method to create within "
                  )
                  .concat(o, ".")
              );
            }
            return t;
          }
          if (null === t) return e;
          if (t !== e)
            throw new A.No(
              ""
                .concat(n, ": you specified `type: ")
                .concat(t, "`, but ")
                .concat(n, " will create a ")
                .concat(e, " payment method.")
            );
          return e;
        },
        Wa = function (e) {
          return function (t, n) {
            if ("object" == typeof t && null !== t) {
              var r = t.source,
                o = t.source_data,
                i = t.payment_method,
                a = t.payment_method_data,
                s = (0, d.Z)(t, [
                  "source",
                  "source_data",
                  "payment_method",
                  "payment_method_data",
                ]);
              if (null != r && "string" != typeof r)
                return (0, v.RH)("string", typeof r, (0, v.NQ)(n, "source"));
              if (null != i && "string" != typeof i)
                return (0, v.RH)(
                  "string",
                  typeof i,
                  (0, v.NQ)(n, "payment_method")
                );
              if (null != o && "object" != typeof o)
                return (0, v.RH)(
                  "object",
                  typeof o,
                  (0, v.NQ)(n, "source_data")
                );
              if (null != a && "object" != typeof a)
                return (0, v.RH)(
                  "object",
                  typeof a,
                  (0, v.NQ)(n, "payment_method_data")
                );
              var u = Ka(o, (0, v.NQ)(n, "source_data"));
              if ("error" === u.type) return u;
              var l = u.value,
                p = Ka(a, (0, v.NQ)(n, "payment_method_data"));
              if ("error" === p.type) return p;
              var m = p.value;
              return (0, v.x4)({
                sourceData: l,
                source: null == r ? null : r,
                paymentMethodData: m,
                paymentMethod: null == i ? null : i,
                otherParams: (0, c.Z)((0, c.Z)({}, e), s),
              });
            }
            return null === t
              ? (0, v.RH)("object", "null", n)
              : (0, v.RH)("object", typeof t, n);
          };
        },
        Va = function (e) {
          return function (t, n) {
            if (void 0 === t)
              return (0, v.x4)({
                sourceData: null,
                paymentMethodData: null,
                source: null,
                paymentMethod: null,
                otherParams: {},
              });
            if ("object" != typeof t) return (0, v.RH)("object", typeof t, n);
            if (null === t) return (0, v.RH)("object", "null", n);
            if (e) {
              if (!t.payment_intent) {
                var r = (0, v.Gu)(
                    (0, v.mC)({
                      return_url: (0, v.jt)(v.Z_),
                      expand: (0, v.jt)((0, v.CT)(v.Z_)),
                      shipping: (0, v.jt)(
                        (0, v.ci)({
                          name: v.Z_,
                          address: (0, v.ci)({
                            line1: (0, v.jt)(v.Z_),
                            line2: (0, v.jt)(v.Z_),
                            city: (0, v.jt)(v.Z_),
                            state: (0, v.jt)(v.Z_),
                            postal_code: (0, v.jt)(v.Z_),
                            country: (0, v.jt)(v.Z_),
                          }),
                        })
                      ),
                    }),
                    t,
                    "validate otherParams"
                  ).value,
                  o = (0, c.Z)((0, c.Z)({}, t), r);
                return (0, v.x4)({
                  sourceData: null,
                  paymentMethodData: null,
                  source: null,
                  paymentMethod: null,
                  otherParams: o,
                });
              }
              var i = t.payment_intent,
                a = (0, d.Z)(t, ["payment_intent"]);
              return Wa(a)(i, (0, v.NQ)(n, "payment_intent"));
            }
            return t.payment_intent
              ? (0, v.zS)(
                  new A.No(
                    "The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object."
                  )
                )
              : Wa({})(t, n);
          };
        },
        Xa = function (e, t, n, r, o) {
          return function (i, a) {
            var s = (function (e, t, n, r, o, i, a) {
              var s = (0, v.ld)(v.IN, o, r);
              if ("error" === s.type) return null;
              var u = s.value,
                l = (0, v.Gu)(Va(t), i, r).value,
                p = l.sourceData,
                d = l.source,
                m = l.paymentMethodData,
                f = l.paymentMethod,
                h = l.otherParams;
              if (!e && p)
                throw new A.No(
                  "".concat(
                    r,
                    ": Expected payment_method_data, not source_data."
                  )
                );
              if (null != d)
                throw new A.No(
                  "When calling ".concat(
                    r,
                    " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element."
                  )
                );
              if (null != f)
                throw new A.No(
                  "When calling ".concat(
                    r,
                    " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element."
                  )
                );
              var _ = u._componentName,
                y = u._implementation._frame.id,
                g = p || m || { type: null, data: {} },
                b = g.type,
                w = g.data,
                k = (0, E.ZX)(_, b),
                S = e && !m,
                P = {
                  elementName: _,
                  frameId: y,
                  type: Ja(n, k, r, S),
                  data: w,
                };
              return S
                ? {
                    mode: (0, c.Z)(
                      { tag: "source-from-element", intentSecret: a },
                      P
                    ),
                    otherParams: h,
                  }
                : {
                    mode: (0, c.Z)(
                      {
                        tag: "paymentMethod-from-element",
                        options: null,
                        intentSecret: a,
                      },
                      P
                    ),
                    otherParams: h,
                  };
            })(e, t, n, r, i, a, o);
            if (s) return s;
            var u = (function (e, t, n, r, o, i, a) {
              var c = (0, v.Gu)(Va(t), o, r).value,
                s = c.sourceData,
                u = c.source,
                l = c.paymentMethodData,
                p = c.paymentMethod,
                d = c.otherParams;
              if (!e && s)
                throw new A.No(
                  "".concat(
                    r,
                    ": Expected payment_method, source, or payment_method_data, not source_data."
                  )
                );
              if (null !== u && null !== s)
                throw new A.No(
                  "".concat(
                    r,
                    ": Expected either source or source_data, but not both."
                  )
                );
              if (null !== p && null !== l)
                throw new A.No(
                  "".concat(
                    r,
                    ": Expected either payment_method or payment_method_data, but not both."
                  )
                );
              if (null !== p && null !== u)
                throw new A.No(
                  "".concat(
                    r,
                    ": Expected either payment_method or source, but not both."
                  )
                );
              if (s || l) {
                var m = s || l || {},
                  f = m.type,
                  h = m.data,
                  _ = e && !l,
                  y = Ja(n, f, r, _);
                return _
                  ? {
                      mode: {
                        tag: "source-from-data",
                        intentSecret: a,
                        type: y,
                        data: h,
                      },
                      otherParams: d,
                    }
                  : {
                      mode: {
                        tag: "paymentMethod-from-data",
                        type: y,
                        data: h,
                        intentSecret: a,
                        options: null,
                      },
                      otherParams: d,
                    };
              }
              return null !== u
                ? {
                    mode: { tag: "source", intentSecret: a, source: u },
                    otherParams: d,
                  }
                : null !== p
                ? {
                    mode: {
                      tag: "paymentMethod",
                      paymentMethod: p,
                      intentSecret: a,
                      options: null,
                    },
                    otherParams: d,
                  }
                : { mode: { tag: "none", intentSecret: a }, otherParams: d };
            })(e, t, n, r, i, 0, o);
            if (u) return u;
            throw new A.No(
              "Expected: stripe."
                .concat(r, "(intentSecret, element[, data]) or stripe.")
                .concat(
                  r,
                  "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication"
                )
            );
          };
        },
        Qa = function (e, t, n, r, o, i) {
          var a = (0, v.Gu)(
              jn.f4,
              r,
              "stripe.confirmPaymentIntent intent secret"
            ).value,
            s = Xa(e, !1, null, "confirmPaymentIntent", a)(o, i);
          return t.action
            .confirmPaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, s),
                {},
                { expectedType: null, options: { handleActions: !1 }, mids: n }
              )
            )
            .then(ti.PA);
        },
        $a = function (e, t, n, r, o, i, a) {
          var s = (0, v.Gu)(
              jn.f4,
              o,
              "stripe.handleCardPayment intent secret"
            ).value,
            u = E.GS.card,
            l = Xa(e, r, u, "handleCardPayment", s)(i, a),
            p = !i && !a;
          return t.action
            .confirmPaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, l),
                {},
                { expectedType: u, options: { handleActions: !0 }, mids: n }
              )
            )
            .then((0, xi.nq)(t, p, !1, !1));
        },
        ec = function (e, t, n, r, o, i) {
          var a = (0, v.Gu)(
              jn.f4,
              r,
              "stripe.handleSepaDebitPayment intent secret"
            ).value,
            s = E.GS.sepa_debit,
            u = Xa(!1, n, s, "handleSepaDebitPayment", a)(o, i),
            l = !o && !i;
          return e.action
            .confirmPaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, u),
                {},
                { expectedType: s, options: { handleActions: !0 }, mids: t }
              )
            )
            .then((0, xi.nq)(e, l, !1, !1));
        },
        tc = function (e, t, n, r, o, i, a) {
          var s = (0, v.Gu)(
              jn.f4,
              o,
              "stripe.handleIdealPayment intent secret"
            ).value,
            u = E.GS.ideal,
            l = Xa(e, r, u, "handleIdealPayment", s)(i, a),
            p = !i && !a;
          return t.action
            .confirmPaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, l),
                {},
                { expectedType: u, options: { handleActions: !0 }, mids: n }
              )
            )
            .then((0, xi.nq)(t, p, !1, !1));
        },
        nc = function (e, t, n, r, o, i) {
          var a = (0, v.Gu)(
              jn.f4,
              r,
              "stripe.handleFpxPayment intent secret"
            ).value,
            s = E.GS.fpx,
            u = Xa(!1, n, s, "handleFpxPayment", a)(o, i),
            l = !o && !i;
          return e.action
            .confirmPaymentIntent(
              (0, c.Z)(
                (0, c.Z)({}, u),
                {},
                { expectedType: s, options: { handleActions: !0 }, mids: t }
              )
            )
            .then((0, xi.nq)(e, l, !1, !1));
        },
        rc = function (e) {
          switch (e.type) {
            case "object":
              return { returnIntent: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        oc = function (e, t, n) {
          return e.action
            .confirmReturnIntent({ returnIntentId: t, data: n })
            .then(rc);
        },
        ic = function (e, t) {
          return function (n, r, o, i, a) {
            var s = (0, ur.jH)(o, e),
              u = (0, ur.o1)(t, e, i, s),
              l = (0, ur.el)(e, a),
              p = "none" === u.mode.tag,
              d = n.action.confirmSetupIntent(
                (0, c.Z)(
                  (0, c.Z)({}, u),
                  {},
                  { expectedType: t, options: l, mids: r }
                )
              );
            return l.handleActions
              ? d.then(Ha(n, p, !1, u.otherParams.expand))
              : d.then(ti.e3);
          };
        },
        ac = ic("confirmAcssDebitSetup", E.GS.acss_debit),
        cc = ic("confirmAfterpayClearpaySetup", E.GS.afterpay_clearpay),
        sc = ic("confirmCardSetup", E.GS.card),
        uc = ic("confirmSepaDebitSetup", E.GS.sepa_debit),
        lc = ic("confirmAuBecsDebitSetup", E.GS.au_becs_debit),
        pc = ic("confirmBacsDebitSetup", E.GS.bacs_debit),
        dc = ic("confirmCashappSetup", E.GS.cashapp),
        mc = ic("confirmIdealSetup", E.GS.ideal),
        fc = ic("confirmAlipaySetup", E.GS.alipay),
        hc = ic("confirmSofortSetup", E.GS.sofort),
        _c = ic("confirmBancontactSetup", E.GS.bancontact),
        yc = ic("confirmIdBankTransferSetup", E.GS.id_bank_transfer),
        vc = ic("confirmPayPalSetup", E.GS.paypal),
        gc = ic("confirmUsBankAccountSetup", E.GS.us_bank_account),
        bc = ic("confirmNzBankAccountSetup", E.GS.nz_bank_account),
        wc = function (e) {
          var t;
          return "error" in e &&
            "external_payment_method_selected" === e.error.code
            ? {
                selectedPaymentMethod:
                  null === (t = e.error.extra_fields) || void 0 === t
                    ? void 0
                    : t.selectedPaymentMethod,
              }
            : e;
        },
        kc = function (e, t, n) {
          var r = (0, ur.jH)(t, "verifyMicrodepositsForSetup"),
            o = (0, v.Gu)(v.Ry, n, "stripe.verifyMicrodepositsForSetup");
          return e.action
            .verifyMicrodepositsForSetup({ intentSecret: r, data: o.value })
            .then(ti.e3);
        },
        Ec = function (e, t, n) {
          var r = (0, ur.jH)(t, "collectUsBankAccountForSetup"),
            o = (0, v.Gu)(
              (0, jn.ZY)("us_bank_account"),
              n,
              "stripe.collectUsBankAccountForSetup"
            ).value,
            i = o.paymentMethodData,
            a = o.otherParams;
          return ar(r.clientSecret, r.id, e, i).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return U.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForSetup({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: a.expand,
                  })
                  .then(function (e) {
                    return (0, ti.e3)(e);
                  })
              : e.action
                  .retrieveSetupIntent({ intentSecret: r, hosted: !1 })
                  .then(ti.e3);
          });
        },
        Sc = function (e, t) {
          var n = (0, v.Gu)(
              (0, jn.as)(jn.Yj),
              t,
              "stripe.collectBankAccountForSetup"
            ).value,
            r = n.clientSecret,
            o = n.paymentMethodData,
            i = n.otherParams;
          return ar(r.clientSecret, r.id, e, o).then(function (t) {
            return t.error
              ? e.action.localizeError(t.error).then(function (e) {
                  return U.J.resolve({ error: e });
                })
              : t.linkAccountSession.paymentAccount
              ? e.action
                  .attachLinkAccountSessionForSetup({
                    intentSecret: r,
                    linkAccountSessionId: t.linkAccountSession.id,
                    expandParam: i.expand,
                  })
                  .then(function (e) {
                    return (0, ti.e3)(e);
                  })
              : e.action
                  .retrieveSetupIntent({ intentSecret: r, hosted: !1 })
                  .then(ti.e3);
          });
        },
        Pc = function (e, t, n, r, o) {
          var i = (0, v.Gu)(
              jn.Yj,
              n,
              "stripe.handleCardSetup intent secret"
            ).value,
            a = E.GS.card,
            s = Xa(!1, !1, a, "handleCardSetup", i)(r, o),
            u = !r && !o;
          return e.action
            .confirmSetupIntent(
              (0, c.Z)(
                (0, c.Z)({}, s),
                {},
                { expectedType: a, options: { handleActions: !0 }, mids: t }
              )
            )
            .then(Ha(e, u, !1, s.otherParams.expand));
        },
        Ac = function (e, t, n, r, o) {
          var i = (0, v.Gu)(
              jn.Yj,
              n,
              "stripe.handleSepaDebitSetup intent secret"
            ).value,
            a = E.GS.sepa_debit,
            s = Xa(!1, !1, a, "handleSepaDebitSetup", i)(r, o),
            u = !r && !o;
          return e.action
            .confirmSetupIntent(
              (0, c.Z)(
                (0, c.Z)({}, s),
                {},
                { expectedType: a, options: { handleActions: !0 }, mids: t }
              )
            )
            .then(Ha(e, u, !1));
        },
        Cc = function (e, t, n, r, o) {
          var i = (0, v.Gu)(
              jn.Yj,
              n,
              "stripe.confirmSetupIntent intent secret"
            ).value,
            a = Xa(!1, !1, null, "confirmSetupIntent", i)(r, o);
          return e.action
            .confirmSetupIntent(
              (0, c.Z)(
                (0, c.Z)({}, a),
                {},
                {
                  otherParams: (0, c.Z)({}, a.otherParams),
                  expectedType: null,
                  options: { handleActions: !1 },
                  mids: t,
                }
              )
            )
            .then(ti.e3);
        },
        Ic = function (e, t) {
          var n = (function (e) {
              if ("string" == typeof e) {
                var t = e.trim().match(/^((vi|vs)_[0-9a-zA-Z]+)_secret_(.+)$/);
                if (!t)
                  throw new A.No(
                    "stripe.verifyIdentity: Could not parse client secret."
                  );
                return { identityClientSecret: t[0], id: t[1], token: t[3] };
              }
              throw new A.No(
                "stripe.verifyIdentity: Could not parse client secret."
              );
            })(e),
            r = n.id,
            o = (function (e) {
              return "".concat(I.Ht, "start/").concat(e);
            })(n.token);
          return (function (e) {
            var t = e.controller,
              n = e.url,
              r = (e.id, e.locale),
              o = void 0 === r ? "en-US" : r,
              i = (0, ni.q)(t, {
                url: (0, ze.jr)(n),
                size: "1100x800",
                frameTitle: "identity.verification_frame_title",
                locale: o,
                useLightboxHostedCloseButton: !0,
                allowCamera: !0,
                appType: "identity",
              });
            return new U.J(function (e) {
              var t = { type: "user_action", code: "session_cancelled" };
              i._on("identity-frame-close", function () {
                (0, ni.G)(i).then(function () {
                  e({ error: t });
                });
              }),
                i._on("identity-frame-error", function (e) {
                  var n = e.type,
                    r = e.code;
                  t = { type: n, code: r };
                }),
                i._on("identity-frame-session-complete", function () {
                  t = null;
                }),
                i._on("request-close", function () {
                  (0, ni.G)(i).then(function () {
                    e({ error: t });
                  });
                });
            });
          })({ controller: t, url: o, id: r });
        },
        Nc = ["number", "cvc", "pin.number"],
        Tc = function (e, t) {
          if ("string" != typeof e)
            return (0, v.$3)("an Issuing card ID of the form ic_xxx", e, t);
          var n,
            r = (n = e.trim().match(/ic_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, v.$3)("an Issuing card ID of the form ic_xxx", e, t)
            : (0, v.x4)(r, []);
        },
        Mc = function (e, t) {
          return (0, v.Gu)(Tc, e, "stripe.".concat(t, " cardId")).value;
        },
        Rc = function (e, t) {
          if ("string" != typeof e)
            return (0, v.$3)(
              "an ephemeral key secret of the form ek_xxx",
              e,
              t
            );
          var n,
            r = (n = e.trim().match(/ek_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, v.$3)("an ephemeral key secret of the form ek_xxx", e, t)
            : (0, v.x4)(r, []);
        },
        Oc = function (e, t) {
          return "string" != typeof e
            ? (0, v.$3)("a string", e, t)
            : Nc.indexOf(e) < 0
            ? (0, v.$3)("any of ".concat(Nc.join(", ")), e, t)
            : (0, v.x4)(e, []);
        },
        jc = function (e, t) {
          return (0, v.Gu)(Rc, e, "stripe.".concat(t, " ephemeral key secret"))
            .value;
        },
        Zc = function (e, t) {
          if ("string" != typeof e)
            return (0, v.$3)(
              "an ephemeral key nonce of the form ephkn_xxx",
              e,
              t
            );
          var n,
            r = (n = e.trim().match(/ephkn_[a-zA-Z0-9_]+$/)) ? n[0] : null;
          return null === r
            ? (0, v.$3)("an ephemeral key nonce of the form ephkn_xxx", e, t)
            : (0, v.x4)(r, []);
        },
        xc = function (e) {
          if ("object" == typeof e && e && e.ephemeralKeySecret && e.nonce) {
            var t,
              n = jc(e.ephemeralKeySecret, "retrieveIssuingCard"),
              r =
                ((o = e.nonce),
                (i = "retrieveIssuingCard"),
                (0, v.Gu)(Zc, o, "stripe.".concat(i, " ephemeral key nonce"))
                  .value);
            return (
              Array.isArray(e.expand) &&
                (t = e.expand.map(function (e) {
                  return (function (e, t) {
                    return (0,
                    v.Gu)(Oc, e, "stripe.".concat(t, " expand param")).value;
                  })(e, "retrieveIssuingCard");
                })),
              { ephemeralKeySecret: n, publicNonce: r, expand: t }
            );
          }
          throw new A.No(
            "When retrieving an Issuing card, you must specify an ephemeral key secret and an ephemeral key nonce in the options argument of stripe.retrieveIssuingCard."
          );
          var o, i;
        },
        Lc = function (e, t) {
          var n = (function (e) {
            if ("object" == typeof e && e && e.issuingCard)
              return {
                issuingCard: Mc(e.issuingCard, "createEphemeralKeyNonce"),
              };
            throw new A.No(
              "When creating an ephemeral key nonce, you must specify an Issuing card ID in the options argument of stripe.createEphemeralKeyNonce."
            );
          })(e);
          return t.action
            .createEphemeralKeyNonce({ cardId: n.issuingCard })
            .then(mn);
        },
        Bc = [S.M4.checkout_beta_2, S.M4.checkout_beta_3, S.M4.checkout_beta_4],
        Dc = [
          S.M4.checkout_beta_2,
          S.M4.checkout_beta_3,
          S.M4.checkout_beta_4,
          S.M4.checkout_beta_locales,
          S.M4.checkout_beta_testcards,
        ],
        qc = {
          bg: "bg",
          cs: "cs",
          da: "da",
          de: "de",
          el: "el",
          en: "en",
          "en-GB": "en-GB",
          es: "es",
          "es-419": "es-419",
          et: "et",
          fi: "fi",
          fil: "fil",
          fr: "fr",
          "fr-CA": "fr-CA",
          hr: "hr",
          hu: "hu",
          id: "id",
          it: "it",
          ja: "ja",
          ko: "ko",
          lt: "lt",
          lv: "lv",
          ms: "ms",
          mt: "mt",
          nb: "nb",
          nl: "nl",
          pl: "pl",
          pt: "pt",
          "pt-BR": "pt-BR",
          ro: "ro",
          ru: "ru",
          sk: "sk",
          sl: "sl",
          sv: "sv",
          th: "th",
          tr: "tr",
          vi: "vi",
          zh: "zh",
          "zh-HK": "zh-HK",
          "zh-TW": "zh-TW",
        },
        Fc = { "pt-PT": "pt-PT" },
        Uc = Object.keys(qc),
        Gc = Object.keys(Fc),
        Yc = {
          sku: (0, v.jt)(v.Z_),
          plan: (0, v.jt)(v.Z_),
          clientReferenceId: (0, v.jt)(v.Z_),
          locale: (0, v.jt)(v.kw.apply(void 0, ["auto"].concat((0, s.Z)(Uc)))),
          customerEmail: (0, v.jt)(v.Z_),
          billingAddressCollection: (0, v.jt)((0, v.kw)("required", "auto")),
          submitType: (0, v.jt)((0, v.kw)("auto", "pay", "book", "donate")),
          allowIncompleteSubscriptions: (0, v.jt)(v.Xg),
          shippingAddressCollection: (0, v.jt)(
            (0, v.ci)({ allowedCountries: (0, v.CT)(v.Z_) })
          ),
        },
        Hc = /cs_(test|live)_.+/,
        zc = function (e, t) {
          var n = (0, v.ci)(
              (0, c.Z)(
                (0, c.Z)({}, Yc),
                {},
                {
                  items: (0, v.jt)(
                    (0, v.or)(
                      (0, v.CT)(
                        (0, v.ci)({
                          type: (0, v.kw)("plan"),
                          quantity: (0, v.M4)(0),
                          id: v.Z_,
                        })
                      ),
                      (0, v.CT)(
                        (0, v.ci)({
                          type: (0, v.kw)("sku"),
                          quantity: (0, v.M4)(0),
                          id: v.Z_,
                        })
                      )
                    )
                  ),
                  successUrl: v.Z_,
                  cancelUrl: v.Z_,
                }
              )
            ),
            r = (0, v.Gu)(n, t, "stripe.redirectToCheckout").value,
            o = r.sku,
            i = r.plan,
            a = r.items,
            s = (0, d.Z)(r, ["sku", "plan", "items"]),
            u = (function (e, t, n) {
              if ((e && t) || ((e || t) && n))
                throw new A.No(
                  "stripe.redirectToCheckout: Expected only one of sku, plan, or items."
                );
              if ("string" == typeof e) return [{ sku: e, quantity: 1 }];
              if ("string" == typeof t) return [{ plan: t, quantity: 1 }];
              if (n)
                return n.map(function (e) {
                  return "sku" === e.type
                    ? { sku: e.id, quantity: e.quantity }
                    : { plan: e.id, quantity: e.quantity };
                });
              throw new A.No(
                "stripe.redirectToCheckout: You must provide either sku, plan, or items."
              );
            })(o, i, a);
          return (0, c.Z)({ tag: "no-session", items: u }, s);
        },
        Kc = function (e, t, n) {
          var r = (0, v.ci)(
              (0, c.Z)(
                (0, c.Z)({}, Yc),
                {},
                {
                  sessionId: (0, v.jt)(v.Z_),
                  successUrl: (0, v.jt)(v.Z_),
                  cancelUrl: (0, v.jt)((0, v.AG)(v.Z_)),
                  mode: (0, v.jt)((0, v.kw)("subscription", "payment")),
                  items: (0, v.jt)(
                    (0, v.or)(
                      (0, v.CT)(
                        (0, v.ci)({ quantity: (0, v.M4)(0), plan: v.Z_ })
                      ),
                      (0, v.CT)(
                        (0, v.ci)({ quantity: (0, v.M4)(0), sku: v.Z_ })
                      )
                    )
                  ),
                  lineItems: (0, v.jt)(
                    (0, v.CT)(
                      (0, v.ci)({ quantity: (0, v.M4)(0), price: v.Z_ })
                    )
                  ),
                },
                -1 !== e.indexOf("checkout_beta_locales")
                  ? {
                      locale: (0, v.jt)(
                        v.kw.apply(
                          void 0,
                          ["auto"].concat((0, s.Z)(Uc), (0, s.Z)(Gc))
                        )
                      ),
                    }
                  : {}
              )
            ),
            o = (0, v.Gu)(r, t, "stripe.redirectToCheckout").value;
          if (o.sessionId) {
            var i = o.sessionId;
            if (Object.keys(o).length > 1)
              throw new A.No(
                "stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."
              );
            if (!/^cs_/.test(i))
              throw new A.No(
                "stripe.redirectToCheckout: Invalid value for sessionId. You specified '".concat(
                  i,
                  "'."
                )
              );
            if ("live" === n && /^cs_test_/.test(i))
              throw new A.No(
                "stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."
              );
            if ("test" === n && /^cs_live_/.test(i))
              throw new A.No(
                "stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."
              );
            return { tag: "session", sessionId: i };
          }
          o.sessionId, o.sku, o.plan;
          var a = o.items,
            u = o.lineItems,
            l = o.successUrl,
            p = o.cancelUrl,
            m = o.mode,
            f = (0, d.Z)(o, [
              "sessionId",
              "sku",
              "plan",
              "items",
              "lineItems",
              "successUrl",
              "cancelUrl",
              "mode",
            ]);
          if (!u && !a)
            throw new A.No(
              "stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId."
            );
          if (!l)
            throw new A.No(
              "stripe.redirectToCheckout: You must provide successUrl."
            );
          return (0, c.Z)(
            {
              tag: "no-session",
              items: a,
              lineItems: u,
              successUrl: l,
              cancelUrl: p,
              mode: m,
            },
            f
          );
        },
        Jc = function (e, t, n) {
          var r = Kc(e, t, n);
          if ("no-session" === r.tag) {
            var o = r.successUrl,
              i = r.cancelUrl;
            if (!(0, k.sD)(o))
              throw new A.No(
                "stripe.redirectToCheckout: successUrl must start with either http:// or https://."
              );
            if (i && !(0, k.sD)(i))
              throw new A.No(
                "stripe.redirectToCheckout: cancelUrl must start with either http:// or https://."
              );
            return r;
          }
          return r;
        },
        Wc = function (e, t) {
          return "session" === t.tag ||
            null == e ||
            t.locale ||
            -1 === ["auto"].concat((0, s.Z)(Uc)).indexOf(e)
            ? t
            : (0, c.Z)((0, c.Z)({}, t), {}, { locale: e });
        },
        Vc = function (e, t, n) {
          var r = (0, P.sE)(Bc, function (t) {
            return (0, S.uN)(e, t);
          });
          if (t && t.lineItems && r)
            throw new A.No("Prices cannot be used with ".concat(r));
          if ("string" == typeof t && Hc.test(t))
            throw new A.No(
              "stripe.redirectToCheckout: Checkout Session IDs must be passed in as an object with a key of `sessionId` and the Session ID as the value."
            );
          switch (r) {
            case "checkout_beta_2":
              return zc(0, t);
            case "checkout_beta_3":
              return Kc(e, t, n);
            default:
              return Jc(e, t, n);
          }
        },
        Xc = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "unknown";
          return Wc(t, Vc(e, n, r));
        },
        Qc = function (e, t) {
          var n = t;
          return (
            Boolean(!1) &&
              window.__STRIPE_CHECKOUT_URL_OVERRIDE__ &&
              (n = t.replace(
                /^https?:\/\/[^/]+\//,
                window.__STRIPE_CHECKOUT_URL_OVERRIDE__
              )),
            (0, Zi.U)(n).then(function (t) {
              return (0, Zi.d)(e, "redirectToCheckout", t), { error: t.error };
            })
          );
        },
        $c = function (e) {
          switch (e.type) {
            case "object":
              return { token: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        es = function (e) {
          return "object" == typeof e && null !== e ? e : {};
        },
        ts = function (e) {
          switch (e.type) {
            case "object":
              return { radarSession: e.object };
            case "error":
              return { error: e.error };
            default:
              return (0, v.Rz)(e);
          }
        },
        ns = "securitypolicyviolation",
        rs = window,
        os = /^require-trusted-types-for/,
        is = "LOAD_ERROR",
        as = "REPORT_ONLY",
        cs = "BLOCKED",
        ss = new gt.E(),
        us = document ? document.readyState : "unknown",
        ls = !1;
      switch (us) {
        case "loading":
          ls = !0;
          break;
        case "interactive":
          try {
            var ps = function () {
              ls = !0;
            };
            setTimeout(function () {
              document.removeEventListener("DOMContentLoaded", ps);
            }, 0),
              document.addEventListener("DOMContentLoaded", ps);
          } catch (e) {}
      }
      var ds,
        ms = !1,
        fs = function t(n, r, o, i) {
          if (!ms || i) {
            ms = !0;
            var a = i || new gt.E();
            if ("complete" === document.readyState) {
              var s = null,
                u = null,
                l = null,
                d = null,
                m = null;
              if (window.performance) {
                if (window.performance.timing) {
                  var f = window.performance.timing,
                    h = f.fetchStart;
                  (s = f.domLoading - h),
                    (u = f.domInteractive - h),
                    (l = f.domComplete - h),
                    (d = gt.E.fromPosixTime(h).getElapsedTime(ss));
                }
                if (window.performance.getEntriesByType) {
                  var _ = window.performance.getEntriesByType("resource"),
                    y = "https://js.stripe.com/v3/".replace(/\/$/, "");
                  m = _.reduce(function (e, t) {
                    if (0 === t.name.indexOf(y)) {
                      var n = t.name.match(/\/([^/#?]*)\/?(?:$|[#?])/);
                      if (n && n[1]) {
                        var r = n[1].replace(/-[0-9a-f]{32}\./, ".");
                        return (
                          "v3" === r && (r = "stripe.js"),
                          (0, c.Z)(
                            (0, c.Z)({}, e),
                            {},
                            (0, p.Z)({}, r, {
                              transfer_size: t.transferSize,
                              duration: Math.round(t.duration),
                            })
                          )
                        );
                      }
                    }
                    return e;
                  }, {});
                }
              }
              n.report("timings", {
                element: n.controllerFor(),
                dom_loading: s,
                dom_interactive: u,
                dom_complete: l,
                since_fetch: d,
                load_count: 1,
                load_before_dom_content_loaded: ls,
                load_ready_state: us,
                first_create_ready_state: r,
                first_mount_readyState: o,
                until_first_create: ss.getElapsedTime(n._createTimestamp),
                until_first_mount: n._mountTimestamp
                  ? ss.getElapsedTime(n._mountTimestamp)
                  : null,
                until_first_load: ss.getElapsedTime(a),
                resource_timings: m,
              }),
                setTimeout(function () {
                  new U.J(function (t) {
                    if (rs.trustedTypes && rs.Promise) {
                      var n,
                        r = !1,
                        o = function (e) {
                          (os.test(e.effectiveDirective) ||
                            os.test(e.violatedDirective)) &&
                            ((0, k.vo)(e.blockedURI) ||
                              (0, k.vo)(e.sourceFile)) &&
                            (r = !0);
                        },
                        i = function () {
                          return r ? cs : is;
                        };
                      rs.addEventListener(ns, o);
                      try {
                        n = e
                          .e(913)
                          .then(e.bind(e, 9554))
                          .then(function (e) {
                            return (e.loaded && r ? as : "ALLOWED") || is;
                          }, i);
                      } catch (e) {
                        n = new U.J(function (e) {
                          return setTimeout(e, 0);
                        }).then(i);
                      }
                      n.then(function () {
                        rs.removeEventListener(ns, o);
                      }),
                        t(n);
                    } else t("NOT_SUPPORTED");
                  }).then(function (e) {
                    n.report("trusted_types_check", { result: e }),
                      (function (e) {
                        switch (e) {
                          case as:
                          case cs:
                            return !0;
                        }
                        return !1;
                      })(e) &&
                        n.warn(
                          "We noticed that you are using Trusted Types. Nothing has broken, but we plan to add dynamic loading to parts of Stripe.js. Please allow scripts from 'https://js.stripe.com' in your default Trusted Types policy. For more information: https://stripe.com/docs/security/guide#content-security-policy"
                        );
                  });
                }, 5e3);
            } else
              window.addEventListener("load", function () {
                try {
                  t(n, r, o, a);
                } catch (e) {}
              });
          }
        },
        hs = (0, v.mC)({
          apiKey: v.Z_,
          stripeAccount: (0, v.jt)(v.Z_),
          locale: (0, v.jt)(v.Z_),
          apiVersion: (0, v.jt)(v.Z_),
          __privateApiUrl: (0, v.jt)(v.Z_),
          __checkout: (0, v.jt)(
            (0, v.mC)({ mids: (0, v.mC)({ muid: v.Z_, sid: v.Z_ }) })
          ),
          __dashboard: (0, v.jt)(v.Ry),
          __hosted3DS: (0, v.jt)(v.Xg),
          canCreateRadarSession: (0, v.jt)(v.Xg),
          betas: (0, v.jt)((0, v.CT)(v.Z_)),
        }),
        _s = function (e) {
          return "You have an in-flight "
            .concat(
              e,
              "! Please be sure to disable your form submit button when "
            )
            .concat(e, " is called.");
        },
        ys = function (e) {
          return function () {
            throw new A.No(
              "You cannot call `stripe.".concat(
                e,
                "` without supplying an appropriate beta flag when initializing Stripe.js."
              )
            );
          };
        },
        vs = function (e) {
          return function () {
            throw new A.No(
              "You cannot call `stripe.".concat(
                e,
                "` without supplying an Issuing beta flag when initializing Stripe.js."
              )
            );
          };
        },
        gs = gi(1),
        bs = (function () {
          function t(e, n) {
            var r = this;
            (0, u.Z)(this, t),
              (this._listenerRegistry = (0, Yt.E)()),
              (this.elements = O(
                function (e) {
                  return new qo(
                    r._controller,
                    r._listenerRegistry,
                    {
                      stripeJsLoadTimestamp: ss,
                      stripeCreateTimestamp: r._controller._createTimestamp,
                    },
                    r._betas,
                    r._mids(),
                    (0, c.Z)(
                      (0, c.Z)({}, r._locale ? { locale: r._locale } : {}),
                      e
                    )
                  );
                },
                void 0,
                "elements"
              )),
              (this.createToken = L(
                function (e, t) {
                  var n = r._mids();
                  return "cvc_update" === e
                    ? (function (e, t, n) {
                        var r = (0, v.rX)(t);
                        if (r && "cardCvc" === r._componentName) {
                          var o = r._implementation._frame.id;
                          return e.action
                            .tokenizeCvcUpdate({ frameId: o, mids: n })
                            .then($c);
                        }
                        throw new A.No(
                          "You must provide a `cardCvc` Element to create a `cvc_update` token."
                        );
                      })(r._controller, t, n)
                    : (function (e, t) {
                        return function (n, r) {
                          var o = (0, v.rX)(n);
                          if (o) {
                            var i = o._implementation._frame.id,
                              a = o._componentName,
                              c = es(r);
                            return e.action
                              .tokenizeWithElement({
                                frameId: i,
                                elementName: a,
                                tokenData: c,
                                mids: t,
                              })
                              .then($c);
                          }
                          if ("string" == typeof n) {
                            var s = n,
                              u = es(r);
                            return e.action
                              .tokenizeWithData({
                                elementName: null,
                                type: s,
                                tokenData: u,
                                mids: t,
                              })
                              .then($c);
                          }
                          throw new A.No(
                            "You must provide a Stripe Element or a valid token type to create a Token."
                          );
                        };
                      })(r._controller, n)(e, t);
                },
                void 0,
                "createToken"
              )),
              (this.createSource = L(
                function (e, t) {
                  var n = (0, v.rX)(e),
                    o = Ni(n ? t : e),
                    i = o || { type: null, data: {} },
                    a = i.type,
                    c = i.data;
                  if (n) {
                    var s = n._implementation._frame.id,
                      u = n._componentName;
                    return !o && (0, E.ke)(u)
                      ? U.J.reject(
                          new A.No(
                            "Please provide Source creation parameters to createSource."
                          )
                        )
                      : r._controller.action
                          .createSourceWithElement({
                            frameId: s,
                            elementName: u,
                            type: a,
                            sourceData: c,
                            mids: r._mids(),
                          })
                          .then(Ti);
                  }
                  return o
                    ? a
                      ? r._controller.action
                          .createSourceWithData({
                            elementName: null,
                            type: a,
                            sourceData: c,
                            mids: r._mids(),
                          })
                          .then(Ti)
                      : U.J.reject(
                          new A.No(
                            "Please provide a source type to createSource."
                          )
                        )
                    : U.J.reject(
                        new A.No(
                          "Please provide either an Element or Source creation parameters to createSource."
                        )
                      );
                },
                void 0,
                "createSource"
              )),
              (this.retrieveSource = x(
                function (e) {
                  var t = (0, v.Gu)(Ri, { source: e }, "retrieveSource"),
                    n = t.value;
                  return (
                    t.warnings.forEach(function (e) {
                      return r._controller.warn(e);
                    }),
                    r._controller.action.retrieveSource(n).then(Ti)
                  );
                },
                void 0,
                "retrieveSource"
              )),
              (this.paymentRequest = j(
                function (e, t) {
                  (0, De.pF)(r._keyMode);
                  var n = r._isCheckout && t ? t : null;
                  return Fo(
                    r._controller,
                    { apiKey: r._apiKey, accountId: r._stripeAccount },
                    r._mids(),
                    e,
                    r._betas,
                    n,
                    r._listenerRegistry
                  );
                },
                void 0,
                "paymentRequest"
              ));
            var o = new gt.E(),
              i = (0, v.Gu)(hs, e || {}, "Stripe()"),
              a = i.value,
              s = i.warnings;
            if (
              (function (e) {
                for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n);
                return t % 100;
              })(a.apiKey) < 0 &&
              (w.JW || w.tS)
            )
              throw new Error(
                "Stripe.JS is no longer supported in this browser. See https://stripe.com/docs/js/appendix/supported_browsers for more information."
              );
            var l = a.apiKey,
              p = a.stripeAccount,
              d = a.apiVersion,
              m = a.locale,
              f = a.__dashboard,
              h = a.__privateApiUrl,
              _ = a.__checkout,
              y = a.__hosted3DS,
              g = (a.canCreateRadarSession, a.betas),
              b = (0, S.dZ)(g || null),
              k = b.validBetas,
              P = b.betaWarning;
            P && s.push(P),
              (0, De.Tj)(l),
              (null == _ ? void 0 : _.mids) &&
                (t._ec = sn({ checkoutIds: _.mids })),
              (this._apiKey = l.trim()),
              (this._keyMode = (0, De.lO)(this._apiKey)),
              (this._betas = k),
              (this._locale = (0, S.jk)(m, this._betas) || null),
              (this._stripeAccount = p || null),
              (this._isCheckout = !!_);
            var C = f ? "".concat(I.J_) : void 0;
            this._attachControllerGetter(d, h, C, p, o),
              s.forEach(function (e) {
                return r._controller.warn(e);
              }),
              ei(),
              this._ensureHTTPOnlyLinkCookie(),
              this._ensureHTTPS(),
              this._ensureStripeHosted(n),
              this._attachPaymentIntentMethods(this._betas, !!y),
              this._attachLegacyPaymentIntentMethods(this._betas),
              this._attachCheckoutMethods(this._betas),
              this._attachPrivateMethodsForCheckout(this._isCheckout),
              this._attachPrivateMethodsForConsumer(Gt),
              this._attachCreateRadarSession(),
              this._attachGetters(),
              this._attachIssuingCardMethods(this._betas),
              this._attachIdentityMethods(this._betas),
              this._attachLinkedAccountsMethods(this._betas),
              this._attachAppInfo();
          }
          return (
            (0, l.Z)(t, [
              {
                key: "_attachCreateRadarSession",
                value: function () {
                  var e = this;
                  this.createRadarSession = Z(function () {
                    return e._midsPromise().then(function (t) {
                      return (
                        (n = e._controller),
                        (r = t),
                        n.action.createRadarSession({ mids: r }).then(ts)
                      );
                      var n, r;
                    });
                  });
                },
              },
              {
                key: "_attachPaymentIntentMethods",
                value: function (t, n) {
                  var r,
                    o,
                    i,
                    a = this,
                    c = function () {
                      return a._mids();
                    };
                  (this.createPaymentMethod =
                    ((r = function () {
                      for (
                        var e = arguments.length, n = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return ji.apply(
                        void 0,
                        [a._controller, c(), t].concat(n)
                      );
                    }),
                    (o = void 0),
                    (i = "createPaymentMethod"),
                    function (e, t, n) {
                      try {
                        return r.call(this, e, t, n);
                      } catch (e) {
                        return R(e, o || (this && this._controller), !1, i);
                      }
                    })),
                    (this._createPaymentMethod = this.createPaymentMethod),
                    (this.retrievePaymentIntent = x(
                      function (e) {
                        return (function (e, t) {
                          var n = (0, ur.cn)(e, "retrievePaymentIntent");
                          return t.action
                            .retrievePaymentIntent({
                              intentSecret: n,
                              hosted: !1,
                            })
                            .then(ti.PA);
                        })(e, a._controller);
                      },
                      void 0,
                      "retrievePaymentIntent"
                    )),
                    (this.retrieveSetupIntent = x(
                      function (e) {
                        return (function (e, t) {
                          var n = (0, ur.jH)(e, "retrieveSetupIntent");
                          return t.action
                            .retrieveSetupIntent({
                              intentSecret: n,
                              hosted: !1,
                            })
                            .then(ti.e3);
                        })(e, a._controller);
                      },
                      void 0,
                      "retrieveSetupIntent"
                    )),
                    (this.updatePaymentIntent = ys("updatePaymentIntent")),
                    (0, S.uN)(this._betas, S.M4.line_items_beta_1) ||
                    (0, S.uN)(this._betas, S.M4.tax_product_beta_1)
                      ? (this.updatePaymentIntent = L(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return Ia.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "updatePaymentIntent"
                        ))
                      : (0, S.uN)(
                          this._betas,
                          S.M4.server_side_confirmation_beta_1
                        ) &&
                        (this.updatePaymentIntent = x(
                          function (e) {
                            return (function (e, t, n) {
                              var r = qi(
                                e,
                                t,
                                n,
                                "payment",
                                "stripe.updatePaymentIntent()"
                              );
                              return e.action
                                .updatePaymentIntent(r)
                                .then(ti.PA);
                            })(a._controller, c(), e);
                          },
                          void 0,
                          "updatePaymentIntent"
                        ));
                  var s = (0, G.AO)(Oa, _s("handleCardAction"));
                  this.handleCardAction = x(
                    function (e) {
                      return s(e, a._controller);
                    },
                    void 0,
                    "handleCardAction"
                  );
                  var u = (0, G.AO)(za, _s("handleNextAction"));
                  this.handleNextAction = x(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return u.apply(void 0, [a._controller].concat(t));
                    },
                    void 0,
                    "handleNextAction"
                  );
                  var l = (0, G.AO)(Wi, _s("confirmCardPayment"));
                  this.confirmCardPayment = B(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return l.apply(void 0, [a._controller, c()].concat(t));
                    },
                    void 0,
                    "confirmCardPayment"
                  );
                  var p = (0, G.AO)(sc, _s("confirmCardSetup"));
                  (this.confirmCardSetup = B(
                    function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return p.apply(void 0, [a._controller, c()].concat(t));
                    },
                    void 0,
                    "confirmCardSetup"
                  )),
                    (this.confirmIdealPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ea.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmIdealPayment"
                    )),
                    (this.confirmSepaDebitPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ua.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSepaDebitPayment"
                    )),
                    (this.confirmSepaDebitSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return uc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSepaDebitSetup"
                    )),
                    (this.confirmFpxPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Xi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmFpxPayment"
                    )),
                    (this.confirmAlipayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ia.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAlipayPayment"
                    )),
                    (this.confirmAlipaySetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return fc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAlipaySetup"
                    )),
                    (this.confirmAuBecsDebitPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Hi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAuBecsDebitPayment"
                    )),
                    (this.confirmAuBecsDebitSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return lc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAuBecsDebitSetup"
                    )),
                    (this.confirmBacsDebitPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return zi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBacsDebitPayment"
                    )),
                    (this.confirmBacsDebitSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return pc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBacsDebitSetup"
                    )),
                    (this.confirmBancontactPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ki.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBancontactPayment"
                    )),
                    (this.confirmBoletoPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ji.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBoletoPayment"
                    )),
                    (this.confirmEpsPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Vi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmEpsPayment"
                    )),
                    (this.confirmGiropayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Qi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmGiropayPayment"
                    )),
                    (this.confirmOxxoPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return oa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmOxxoPayment"
                    )),
                    (this.confirmP24Payment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return aa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmP24Payment"
                    )),
                    (this.confirmSofortPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return la.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSofortPayment"
                    )),
                    (this.confirmIdealSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return mc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmIdealSetup"
                    )),
                    (this.confirmSofortSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return hc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmSofortSetup"
                    )),
                    (this.confirmBancontactSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return _c.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBancontactSetup"
                    )),
                    (this.confirmGrabPayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return $i.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmGrabPayPayment"
                    )),
                    (this.confirmAffirmPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Gi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAffirmPayment"
                    )),
                    (this.confirmAfterpayClearpayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Yi.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmAfterpayClearpayPayment"
                    )),
                    (this.verifyMicrodepositsForPayment = L(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ta.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "verifyMicrodepositsForPayment"
                    )),
                    (this.verifyMicrodepositsForSetup = L(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return kc.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "verifyMicrodepositsForSetup"
                    )),
                    (this.confirmPayment = x(
                      function (e) {
                        return (function (e, t, n, r) {
                          var o = "stripe.confirmPayment()";
                          return (0, ur.xP)(r, e, o).then(function (i) {
                            var a = (0, Li.Qw)({
                                controller: e,
                                mids: t,
                                betas: n,
                                rawUpdateData: r,
                                intentType: "payment",
                                elementConfirmingPayment: i,
                                errorMessageMethodName: o,
                              }),
                              c = a.intentMutationRequest,
                              s = (0, ur.mi)(r),
                              u = e.action
                                .confirmPaymentIntent(c)
                                .then(function (t) {
                                  return U.J.resolve(
                                    (0, ur.VN)({
                                      groupId: s,
                                      elementConfirmingPayment: i,
                                      controller: e,
                                      data: t,
                                      errorMessageMethodName: o,
                                    })
                                  );
                                });
                            return (!(0, S.uN)(
                              n,
                              S.M4.server_side_confirmation_beta_1
                            ) &&
                              !(0, S.uN)(
                                n,
                                S.M4.elements_enable_deferred_intent_beta_1
                              )) ||
                              null === c.options ||
                              c.options.handleActions
                              ? u
                                  .then(
                                    (0, xi.nq)(
                                      e,
                                      !1,
                                      !1,
                                      "payment" === i,
                                      c.otherParams.expand
                                    )
                                  )
                                  .then(function (t) {
                                    var n = Na(t);
                                    return "selectedPaymentMethod" in n
                                      ? n
                                      : t.error || "always" !== a.redirect
                                      ? t
                                      : (0, Zi.U)(
                                          (0, ur.z2)(
                                            a.returnUrl,
                                            t.paymentIntent
                                          )
                                        ).then(function (n) {
                                          return (
                                            (0, Zi.d)(
                                              e,
                                              "confirmPayment redirect",
                                              n
                                            ),
                                            (0, ti.PA)(n, t.paymentIntent)
                                          );
                                        });
                                  })
                              : u.then(ti.PA).then(Na);
                          });
                        })(a._controller, c(), a._betas, e);
                      },
                      void 0,
                      "confirmPayment"
                    )),
                    (this.confirmSetup = x(
                      function (e) {
                        return (function (e, t, n, r) {
                          var o = "stripe.confirmSetup()";
                          return (0, ur.xP)(r, e, o).then(function (i) {
                            var a = (0, Li.Qw)({
                                controller: e,
                                mids: t,
                                betas: n,
                                rawUpdateData: r,
                                intentType: "setup",
                                elementConfirmingPayment: i,
                                errorMessageMethodName: o,
                              }),
                              c = a.intentMutationRequest,
                              s = (0, ur.mi)(r),
                              u = e.action
                                .confirmSetupIntent(c)
                                .then(function (t) {
                                  return (0,
                                  ur.VN)({ groupId: s, elementConfirmingPayment: i, controller: e, data: t, errorMessageMethodName: o });
                                });
                            return (!(0, S.uN)(
                              n,
                              S.M4.server_side_confirmation_beta_1
                            ) &&
                              !(0, S.uN)(
                                n,
                                S.M4.elements_enable_deferred_intent_beta_1
                              )) ||
                              null === c.options ||
                              c.options.handleActions
                              ? u
                                  .then(Ha(e, !1, !1, c.otherParams.expand))
                                  .then(function (t) {
                                    var n = wc(t);
                                    return "selectedPaymentMethod" in n
                                      ? n
                                      : t.error || "always" !== a.redirect
                                      ? t
                                      : (0, Zi.U)(
                                          (0, ur.z2)(a.returnUrl, t.setupIntent)
                                        ).then(function (n) {
                                          return (
                                            (0, Zi.d)(
                                              e,
                                              "confirmSetup redirect",
                                              n
                                            ),
                                            (0, ti.e3)(n, t.setupIntent)
                                          );
                                        });
                                  })
                              : u.then(ti.e3).then(wc);
                          });
                        })(a._controller, c(), a._betas, e);
                      },
                      void 0,
                      "confirmSetup"
                    )),
                    (this.confirmKlarnaPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ta.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmKlarnaPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.process_order_beta_1) &&
                      ((this.processOrder = x(
                        function (t) {
                          var n = (0, v.ld)(
                            (0, v.mC)({ elements: v.oQ }),
                            t,
                            "elements"
                          );
                          return (
                            "valid" === n.type
                              ? a._controller.action.showWalletIfNecessary(
                                  n.value.elements._id
                                )
                              : U.J.resolve(null)
                          ).then(function (n) {
                            return e
                              .e(404)
                              .then(e.bind(e, 6217))
                              .then(function (e) {
                                return (0,
                                e.processOrder)(a._controller, c(), a._betas, t, n);
                              });
                          });
                        },
                        void 0,
                        "processOrder"
                      )),
                      (this.retrieveOrder = x(
                        function (t) {
                          return e
                            .e(404)
                            .then(e.bind(e, 6217))
                            .then(function (e) {
                              return (0, e.retrieveOrder)(t, a._controller);
                            });
                        },
                        void 0,
                        "retrieveOrder"
                      )),
                      (this.updateOrder = x(
                        function (t) {
                          return e
                            .e(404)
                            .then(e.bind(e, 6217))
                            .then(function (e) {
                              return (0, e.updateOrder)(a._controller, t);
                            });
                        },
                        void 0,
                        "updateOrder"
                      )),
                      (this.addPromotionCodeToOrder = x(
                        function (t) {
                          return e
                            .e(404)
                            .then(e.bind(e, 6217))
                            .then(function (e) {
                              return (0,
                              e.addPromotionCodeToOrder)(a._controller, t);
                            });
                        },
                        void 0,
                        "addPromotionCodeToOrder"
                      )),
                      (this.removePromotionCodeFromOrder = x(
                        function (t) {
                          return e
                            .e(404)
                            .then(e.bind(e, 6217))
                            .then(function (e) {
                              return (0,
                              e.removePromotionCodeFromOrder)(a._controller, t);
                            });
                        },
                        void 0,
                        "removePromotionCodeFromOrder"
                      ))),
                    (this.collectBankAccountForPayment = x(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ra.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "collectBankAccountForPayment"
                    )),
                    (this.collectBankAccountForSetup = x(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Sc.apply(void 0, [a._controller].concat(t));
                      },
                      void 0,
                      "collectBankAccountForSetup"
                    )),
                    (0, S.uN)(this._betas, S.M4.us_bank_account_beta_2) &&
                      ((this.collectUsBankAccountForPayment = L(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Ma.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "collectUsBankAccountForPayment"
                      )),
                      (this.collectUsBankAccountForSetup = L(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Ec.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "collectUsBankAccountForSetup"
                      ))),
                    (0, S.uN)(this._betas, S.M4.acss_debit_beta_1)
                      ? ((this.confirmAcssDebitPayment = B(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return Ui.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitPayment"
                        )),
                        (this.confirmAcssDebitSetup = B(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return ac.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitSetup"
                        )))
                      : ((this.confirmAcssDebitPayment = B(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return si.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitPayment"
                        )),
                        (this.confirmAcssDebitSetup = B(
                          function () {
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            return ui.apply(
                              void 0,
                              [a._controller, c()].concat(t)
                            );
                          },
                          void 0,
                          "confirmAcssDebitSetup"
                        ))),
                    (this.confirmAfterpayClearpaySetup = ys(
                      "confirmAfterpayClearpaySetup"
                    )),
                    (0, S.uN)(
                      this._betas,
                      S.M4.afterpay_clearpay_setup_intents_beta
                    ) &&
                      (this.confirmAfterpayClearpaySetup = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return cc.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmAfterpayClearpaySetup"
                      )),
                    (this.confirmBlikPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ha.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmBlikPayment"
                    )),
                    (this.confirmCustomerBalancePayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ya.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmCustomerBalancePayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.return_intents_beta_1) &&
                      (this.confirmReturnIntent = L(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return oc.apply(void 0, [a._controller].concat(t));
                        },
                        void 0,
                        "confirmReturnIntent"
                      )),
                    (this.confirmKonbiniPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return na.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmKonbiniPayment"
                    )),
                    (this.confirmMobilepayPayment = ys(
                      "confirmMobilepayPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.mobilepay_pm_beta_1) &&
                      (this.confirmMobilepayPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ra.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmMobilepayPayment"
                      )),
                    (0, S.uN)(this._betas, S.M4.oxxo_pm_beta_1) &&
                      (this.confirmOxxoPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return oa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmOxxoPayment"
                      )),
                    (this.confirmWechatPayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ga.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmWechatPayPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.wechat_pay_pm_beta_1) &&
                      (this.confirmWechatPayPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return va.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmWechatPayPayment"
                      )),
                    (this.confirmPayByBankPayment = ys(
                      "confirmPayByBankPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.pay_by_bank_beta_1) &&
                      (this.confirmPayByBankPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ca.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayByBankPayment"
                      )),
                    (this.confirmCashappPayment = ys("confirmCashappPayment")),
                    (0, S.uN)(this._betas, S.M4.cashapp_beta_1) &&
                      (this.confirmCashappPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ba.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmCashappPayPayment"
                      )),
                    (this.confirmCashappSetup = ys("confirmCashappSetup")),
                    (0, S.uN)(this._betas, S.M4.cashapp_beta_1) &&
                      (this.confirmCashappSetup = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return dc.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmCashappSetup"
                      )),
                    (this.confirmPayNowPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return wa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPayNowPayPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.wechat_pay_pm_beta_1) &&
                      (this.confirmPayNowPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return ka.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayNowPayment"
                      )),
                    (this.confirmPixPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Ea.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPixPayment"
                    )),
                    (this.confirmPromptPayPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return Sa.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmPromptPayPayment"
                    )),
                    (this.confirmPayPalPayment = ys("confirmPayPalPayment")),
                    (0, S.uN)(this._betas, S.M4.paypal_pm_beta_1) &&
                      (this.confirmPayPalPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return sa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayPalPayment"
                      )),
                    (0, S.uN)(this._betas, S.M4.paypal_pm_beta_1) &&
                      (this.confirmPayPalSetup = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return vc.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmPayPalSetup"
                      )),
                    (this.confirmQrisPayment = ys("confirmQrisPayment")),
                    (0, S.uN)(this._betas, S.M4.qris_beta_1) &&
                      (this.confirmQrisPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Pa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmQrisPayment"
                      )),
                    (this.confirmRevolutPayPayment = ys(
                      "confirmRevolutPayPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.revolut_pay_pm_beta_1) &&
                      (this.confirmRevolutPayPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Aa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmRevolutPayPayment"
                      )),
                    (this.confirmZipPayment = ys("confirmZipPayment")),
                    (0, S.uN)(this._betas, S.M4.zip_beta_1) &&
                      (this.confirmZipPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return _a.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmZipPayment"
                      )),
                    (this.confirmUpiPayment = ys("confirmUpiPayment")),
                    (0, S.uN)(this._betas, S.M4.upi_beta_1) &&
                      (this.confirmUpiPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return da.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmUpiPayment"
                      )),
                    (this.confirmUsBankAccountPayment = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return ma.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmUsBankAccountPayment"
                    )),
                    (this.confirmUsBankAccountSetup = B(
                      function () {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return gc.apply(void 0, [a._controller, c()].concat(t));
                      },
                      void 0,
                      "confirmUsBankAccountSetup"
                    )),
                    (0, S.uN)(this._betas, S.M4.nz_bank_account_beta_1) &&
                      ((this.confirmNzBankAccountPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return fa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNzBankAccountPayment"
                      )),
                      (this.confirmNzBankAccountSetup = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return bc.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNzBankAccountSetup"
                      ))),
                    (this.confirmNetbankingPayment = ys(
                      "confirmNetbankingPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.netbanking_beta_1) &&
                      (this.confirmNetbankingPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return Ca.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmNetbankingPayment"
                      )),
                    (this.confirmInstantDebitsPilotPayment = ys(
                      "confirmInstantDebitsPilotPayment"
                    )),
                    (0, S.uN)(this._betas, S.M4.instant_debits_beta_1) &&
                      (this.confirmInstantDebitsPilotPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return xa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmInstantDebitsPilotPayment"
                      )),
                    (this.linkAutofillModal = ys("linkAutofillModal")),
                    (0, S.uN)(this._betas, S.M4.link_autofill_modal_beta_1) &&
                      (this.linkAutofillModal = O(
                        function (e) {
                          return (function (e, t, n) {
                            var r = function (e) {
                                throw new A.No(
                                  "stripe.linkAutofill.".concat(
                                    e,
                                    " can only be called when the user is logged-in."
                                  )
                                );
                              },
                              o = !1,
                              i = !1,
                              a = e.createLightboxFrame({
                                type: ze.NC.LINK_AUTOFILL_MODAL,
                                options: {
                                  apiKey: e._apiKey,
                                  stripeAccount: e._stripeAccount,
                                  locale: n || "",
                                },
                                groupId: t._id,
                              }),
                              c = function () {
                                (o = !0), a.show(), a.fadeInBackdrop();
                              },
                              s = function () {
                                (o = !1), a.fadeOutBackdrop();
                              };
                            a._on("open", function () {
                              c();
                            }),
                              a._on("cancel", function () {
                                s();
                              });
                            var u = [];
                            a._on(
                              "link-autofill-modal-authenticated",
                              function (e) {
                                (i = !0),
                                  u.forEach(function (t) {
                                    t({ value: { email: e.emailAddress } });
                                  });
                              }
                            );
                            var l = [];
                            return (
                              a._on(
                                "link-autofill-modal-autofill-info",
                                function (e) {
                                  s(),
                                    l.forEach(function (t) {
                                      t({
                                        empty: !e.info.hasPaymentDetails,
                                        value: {
                                          shippingAddress:
                                            e.info.shippingAddress,
                                          billingAddress: e.info.billingAddress,
                                        },
                                      });
                                    });
                                }
                              ),
                              {
                                on: function (t, n) {
                                  if ("function" != typeof n)
                                    throw new A.No(
                                      "stripe.linkAutofill.on: Expected the handler to be a function."
                                    );
                                  switch (t) {
                                    case "authenticated":
                                      u.push(O(n, e, "authenticationHandler"));
                                      break;
                                    case "autofill":
                                      l.push(O(n, e, "autofillHandler"));
                                      break;
                                    default:
                                      throw new A.No(
                                        "stripe.linkAutofill.on: Expected either 'authenticated' or 'autofill' as an event name."
                                      );
                                  }
                                },
                                launch: function (e) {
                                  var t = e.email;
                                  a.send({
                                    action:
                                      "stripe-link-autofill-modal-email-attempt",
                                    payload: { email: t },
                                  });
                                },
                                show: function () {
                                  i || r("show"), o || c();
                                },
                                logout: function () {
                                  if ((i || r("logout"), o))
                                    throw new A.No(
                                      "stripe.linkAutofill.logout can only be called when the modal is closed. Did you call it from outside a click event?"
                                    );
                                  (i = !1),
                                    a.send({
                                      action:
                                        "stripe-link-autofill-modal-logout",
                                      payload: {},
                                    });
                                },
                              }
                            );
                          })(a._controller, e, a._locale);
                        },
                        void 0,
                        "linkAutofillModal"
                      )),
                    (this.confirmIdBankTransferPayment = ys(
                      "confirmIdBankTransferPayment"
                    )),
                    (this.confirmIdBankTransferSetup = ys(
                      "confirmIdBankTransferSetup"
                    )),
                    ((0, S.uN)(this._betas, S.M4.id_bank_transfer_beta_1) ||
                      (0, S.uN)(this._betas, S.M4.id_bank_transfer_beta_2)) &&
                      ((this.confirmIdBankTransferPayment = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return pa.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmIdBankTransferPayment"
                      )),
                      (this.confirmIdBankTransferSetup = B(
                        function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return yc.apply(
                            void 0,
                            [a._controller, c()].concat(t)
                          );
                        },
                        void 0,
                        "confirmIdBankTransferSetup"
                      ))),
                    n &&
                      ((this.handleHosted3DS2Payment = L(function (e, t) {
                        return (function (e, t, n) {
                          var r = (0, ur.cn)(
                              e,
                              "handleHosted3DS2Setup [internal]"
                            ),
                            o = (0, ur.NL)(
                              n,
                              "handleHosted3DS2Setup [internal]"
                            );
                          return t.action
                            .retrievePaymentIntent({
                              intentSecret: r,
                              hosted: !0,
                            })
                            .then((0, xi.nq)(t, !1, !0, !1, void 0, o));
                        })(e, a._controller, t);
                      })),
                      (this.handleHosted3DS2Setup = x(function (e) {
                        return (function (e, t) {
                          var n = (0, ur.jH)(
                            e,
                            "handleHosted3DS2Setup [internal]"
                          );
                          return t.action
                            .retrieveSetupIntent({
                              intentSecret: n,
                              hosted: !0,
                            })
                            .then(Ha(t, !1, !0));
                        })(e, a._controller);
                      })));
                },
              },
              {
                key: "_attachLegacyPaymentIntentMethods",
                value: function () {
                  var e = this,
                    t =
                      (0, S.uN)(this._betas, S.M4.payment_intent_beta_1) ||
                      (0, S.uN)(this._betas, S.M4.payment_intent_beta_2),
                    n = function () {
                      return e._mids();
                    },
                    r = B(
                      function () {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        return Qa.apply(
                          void 0,
                          [!0, e._controller, n()].concat(r)
                        );
                      },
                      void 0,
                      "confirmPaymentIntent"
                    ),
                    o = B(
                      function () {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        return Qa.apply(
                          void 0,
                          [!1, e._controller, n()].concat(r)
                        );
                      },
                      void 0,
                      "confirmPaymentIntent"
                    ),
                    i = (0, G.AO)($a, _s("handleCardPayment")),
                    a = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), a = 0;
                          a < r;
                          a++
                        )
                          o[a] = arguments[a];
                        return i.apply(
                          void 0,
                          [!0, e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleCardPayment"
                    ),
                    c = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), a = 0;
                          a < r;
                          a++
                        )
                          o[a] = arguments[a];
                        return i.apply(
                          void 0,
                          [!1, e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleCardPayment"
                    ),
                    s = (0, G.AO)(Pc, _s("handleCardSetup")),
                    u = B(
                      function () {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        return s.apply(void 0, [e._controller, n()].concat(r));
                      },
                      void 0,
                      "handleCardSetup"
                    ),
                    l = B(
                      function () {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        return Cc.apply(void 0, [e._controller, n()].concat(r));
                      },
                      void 0,
                      "confirmSetupIntent"
                    ),
                    p = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return ec.apply(
                          void 0,
                          [e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleSepaDebitPayment"
                    ),
                    d = B(
                      function () {
                        for (
                          var t = arguments.length, r = new Array(t), o = 0;
                          o < t;
                          o++
                        )
                          r[o] = arguments[o];
                        return Ac.apply(void 0, [e._controller, n()].concat(r));
                      },
                      void 0,
                      "handleSepaDebitSetup"
                    ),
                    m = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return tc.apply(
                          void 0,
                          [!0, e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleIdealPayment"
                    ),
                    f = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return tc.apply(
                          void 0,
                          [!1, e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleIdealPayment"
                    ),
                    h = B(
                      function () {
                        for (
                          var r = arguments.length, o = new Array(r), i = 0;
                          i < r;
                          i++
                        )
                          o[i] = arguments[i];
                        return nc.apply(
                          void 0,
                          [e._controller, n(), t].concat(o)
                        );
                      },
                      void 0,
                      "handleFpxPayment"
                    );
                  (this.handleCardPayment = c),
                    (this.confirmPaymentIntent = o),
                    (this.handleCardSetup = u),
                    (this.confirmSetupIntent = l),
                    (this.fulfillPaymentIntent = ys("fulfillPaymentIntent")),
                    (this.handleSepaDebitPayment = ys(
                      "handleSepaDebitPayment"
                    )),
                    (this.handleSepaDebitSetup = ys("handleSepaDebitSetup")),
                    (this.handleIdealPayment = ys("handleIdealPayment")),
                    (this.handleFpxPayment = ys("handleFpxPayment")),
                    (0, S.uN)(this._betas, S.M4.payment_intent_beta_1)
                      ? (this.fulfillPaymentIntent = a)
                      : ((0, S.uN)(this._betas, S.M4.payment_intent_beta_3) ||
                          (0, S.uN)(this._betas, S.M4.payment_intent_beta_2)) &&
                        (this.handleCardPayment = a),
                    (0, S.uN)(this._betas, S.M4.payment_intent_beta_3) &&
                      ((this.confirmPaymentIntent = r),
                      (this.handleIdealPayment = m),
                      (this.handleSepaDebitPayment = p)),
                    (0, S.uN)(this._betas, S.M4.fpx_bank_beta_1) &&
                      (this.handleFpxPayment = h),
                    (0, S.uN)(this._betas, S.M4.ideal_pm_beta_1) &&
                      (this.handleIdealPayment = f),
                    (0, S.uN)(this._betas, S.M4.sepa_pm_beta_1) &&
                      ((this.handleSepaDebitPayment = p),
                      (this.handleSepaDebitSetup = d));
                },
              },
              {
                key: "_attachPrivateMethodsForCheckout",
                value: function (e) {
                  var t = this;
                  e &&
                    ((this.sendInteractionEvent = ln),
                    (this.tryNextAction = L(function (e) {
                      var n = (0, v.Gu)(jn.LK, e, "Payment Intent").value;
                      return "payment_intent" === n.object
                        ? (0, xi.gO)(t._controller, n, "auto", !1, !1)
                        : Ya(t._controller, n, "auto", !1);
                    })));
                },
              },
              {
                key: "_attachCheckoutMethods",
                value: function (e) {
                  var t = this,
                    n = function () {
                      return t._mids();
                    },
                    r = e.reduce(function (e, t) {
                      var n = (0, P.sE)(Dc, function (e) {
                        return e === t;
                      });
                      return n ? [].concat((0, s.Z)(e), [n]) : e;
                    }, []);
                  this.redirectToCheckout = function (e) {
                    return (function (e, t, n, r, o) {
                      var i = Xc(t, r, o, e.keyMode());
                      if (
                        (e.report("redirect_to_checkout.options", {
                          betas: t,
                          options: (0, P.ei)(i, ["mode", "sessionId"]),
                          globalLocale: r,
                        }),
                        "session" === i.tag)
                      ) {
                        var a = i.sessionId;
                        return e.action
                          .createPaymentPageWithSession({
                            betas: t,
                            mids: n(),
                            sessionId: a,
                          })
                          .then(function (t) {
                            if ("error" === t.type) return { error: t.error };
                            var n = t.object.url;
                            return Qc(e, n);
                          });
                      }
                      var s = i,
                        u = (s.tag, s.items),
                        l = s.lineItems,
                        p = s.mode,
                        m = s.successUrl,
                        f = s.cancelUrl,
                        h = s.clientReferenceId,
                        _ = s.customerEmail,
                        y = s.billingAddressCollection,
                        v = s.submitType,
                        g = s.allowIncompleteSubscriptions,
                        b = s.shippingAddressCollection,
                        w = (0, d.Z)(s, [
                          "tag",
                          "items",
                          "lineItems",
                          "mode",
                          "successUrl",
                          "cancelUrl",
                          "clientReferenceId",
                          "customerEmail",
                          "billingAddressCollection",
                          "submitType",
                          "allowIncompleteSubscriptions",
                          "shippingAddressCollection",
                        ]),
                        k = [];
                      if (l && u)
                        throw new Error(
                          "Only one of items, lineItems can be passed in."
                        );
                      if (l) {
                        if (!p) throw new Error("Expected `mode`");
                        k = l.map(function (e) {
                          if (e.price)
                            return {
                              type: "price",
                              id: e.price,
                              quantity: e.quantity,
                            };
                          throw new Error("Unexpected item shape.");
                        });
                      } else {
                        if (!u)
                          throw new Error("An items field must be passed in.");
                        k = u.map(function (e) {
                          if ("sku" in e)
                            return {
                              type: "sku",
                              id: e.sku,
                              quantity: e.quantity,
                            };
                          if (e.plan)
                            return {
                              type: "plan",
                              id: e.plan,
                              quantity: e.quantity,
                            };
                          throw new Error("Unexpected item shape.");
                        });
                      }
                      return e.action
                        .createPaymentPage(
                          (0, c.Z)(
                            {
                              betas: t,
                              mids: n(),
                              items: k,
                              mode: p,
                              success_url: m,
                              cancel_url: f,
                              client_reference_id: h,
                              customer_email: _,
                              billing_address_collection: y,
                              submit_type: v,
                              allow_incomplete_subscriptions: g,
                              shipping_address_collection: b && {
                                allowed_countries: b.allowedCountries,
                              },
                            },
                            w
                          )
                        )
                        .then(function (t) {
                          if ("error" === t.type) return { error: t.error };
                          var n = t.object.url;
                          return Qc(e, n);
                        });
                    })(t._controller, r, n, t._locale, e);
                  };
                },
              },
              {
                key: "_attachPrivateMethodsForConsumer",
                value: function (e) {
                  var t = this;
                  e &&
                    (this.__createConsumerPaymentDetails = L(
                      function (e, n) {
                        var r,
                          o = {};
                        if (!n.email)
                          return U.J.reject(new A.No("You must pass email"));
                        if (!e)
                          return U.J.reject(
                            new A.No("You must pass a clientSecret")
                          );
                        if (n.cardElement) {
                          if (
                            !n.billing_details ||
                            !n.billing_details.country_code
                          )
                            return U.J.reject(
                              new A.No(
                                "You must pass in billing_details.country_code if you are using the Card Element"
                              )
                            );
                          var i = (0, v.rX)(n.cardElement);
                          if (!i)
                            return U.J.reject(
                              new A.No("Card Element is invalid")
                            );
                          var a = i._implementation._frame.id,
                            c = i._componentName;
                          if ("card" !== c && "cardNumber" !== c)
                            return U.J.reject(
                              new A.No(
                                "Please provide a Card Element to __createConsumerPaymentDetails"
                              )
                            );
                          o = {
                            frameId: a,
                            elementName: c,
                            billingDetails: n.billing_details,
                            requestSurface: n.request_surface,
                          };
                        } else if (n.elements) {
                          var s;
                          o = {
                            elementsId:
                              null == n ||
                              null === (s = n.elements) ||
                              void 0 === s
                                ? void 0
                                : s._id,
                            billingDetails:
                              (null == n ? void 0 : n.billing_details) || {},
                            requestSurface:
                              null == n ? void 0 : n.request_surface,
                          };
                        }
                        return o.elementsId
                          ? t._controller.action.createConsumerPaymentDetails({
                              email: n.email,
                              clientSecret: e,
                              billingDetails: o.billingDetails,
                              isDefault: !!n.is_default,
                              requestSurface: n.request_surface,
                              elementsId: o.elementsId,
                            })
                          : o.frameId &&
                            o.elementName &&
                            (null == n ||
                            null === (r = n.billing_details) ||
                            void 0 === r
                              ? void 0
                              : r.country_code)
                          ? t._controller.action.createConsumerPaymentDetails({
                              email: n.email,
                              clientSecret: e,
                              billingDetails: o.billingDetails,
                              isDefault: !!n.is_default,
                              requestSurface: n.request_surface,
                              frameId: o.frameId,
                              elementName: o.elementName,
                            })
                          : U.J.reject(
                              new A.No(
                                "Please provide either an Elements or Card Element creation parameters to __createConsumerPaymentDetails."
                              )
                            );
                      },
                      void 0,
                      "__createConsumerPaymentDetails"
                    ));
                },
              },
              {
                key: "_attachGetters",
                value: function () {
                  var e = this,
                    t = new Ii(function (t) {
                      e._registerWrapper({ name: t, version: null });
                    });
                  [
                    "elements",
                    "createToken",
                    "createSource",
                    "createPaymentMethod",
                  ].forEach(function (n) {
                    if (e.hasOwnProperty(n)) {
                      var r = e[n],
                        o = function () {
                          t.called(n);
                          for (
                            var e = arguments.length, o = new Array(e), i = 0;
                            i < e;
                            i++
                          )
                            o[i] = arguments[i];
                          return r.apply(this, o);
                        };
                      Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                          return t.got(n), o;
                        },
                      });
                    }
                  });
                },
              },
              {
                key: "_attachIssuingCardMethods",
                value: function () {
                  var e = this;
                  (this.retrieveIssuingCard = vs("retrieveIssuingCard")),
                    (this.createEphemeralKeyNonce = vs(
                      "createEphemeralKeyNonce"
                    ));
                  var t = 0 === this._betas.length;
                  (0, S.uN)(this._betas, S.M4.issuing_elements_1)
                    ? (this.retrieveIssuingCard = L(function (t, n) {
                        return (function (e, t, n) {
                          var r = Mc(e, "retrieveIssuingCard"),
                            o = jc(t, "retrieveIssuingCard");
                          return n.action
                            .retrieveIssuingCardWithoutNonce({
                              cardId: r,
                              ephemeralKeySecret: o,
                            })
                            .then(dn);
                        })(t, n, e._controller);
                      }))
                    : ((0, S.uN)(this._betas, [S.M4.issuing_elements_2]) ||
                        t) &&
                      ((this.retrieveIssuingCard = L(function (t, n) {
                        return (function (e, t, n) {
                          var r = Mc(e, "retrieveIssuingCard"),
                            o = xc(t);
                          return n.action
                            .retrieveIssuingCard({
                              cardId: r,
                              ephemeralKeySecret: o.ephemeralKeySecret,
                              publicNonce: o.publicNonce,
                              expand: o.expand,
                            })
                            .then(dn);
                        })(t, n, e._controller);
                      })),
                      (this.createEphemeralKeyNonce = x(function (t) {
                        return Lc(t, e._controller);
                      })));
                },
              },
              {
                key: "_attachIdentityMethods",
                value: function () {
                  var e = this;
                  this.verifyIdentity = x(function (t) {
                    return Ic(t, e._controller);
                  });
                },
              },
              {
                key: "_attachControllerGetter",
                value: function (e, n, r, o, i) {
                  var a,
                    s = this,
                    u = [],
                    l = document.readyState;
                  Object.defineProperties(this, {
                    _registerWrapper: {
                      enumerable: !1,
                      configurable: !0,
                      writable: !1,
                      value: function (e) {
                        u.push(e);
                      },
                    },
                    _controller: {
                      enumerable: !0,
                      configurable: !0,
                      get: function () {
                        return (function () {
                          if (a) return a;
                          var p = document.readyState;
                          return (
                            (a = new Pi(
                              (0, c.Z)(
                                (0, c.Z)(
                                  {
                                    apiKey: s._apiKey,
                                    apiVersion: s._injectBetaHeader(e),
                                    __privateApiUrl: n,
                                    __privatePaymentUserAgentSuffix: r,
                                    stripeAccount: o,
                                    betas: s._betas,
                                    stripeJsId: t.stripeJsId,
                                    stripeJsLoadTimestamp: ss,
                                    stripeCreateTimestamp: i,
                                    onFirstLoad: function () {
                                      try {
                                        fs(a, l, p);
                                      } catch (e) {}
                                    },
                                    listenerRegistry: s._listenerRegistry,
                                  },
                                  s._locale ? { locale: s._locale } : {}
                                ),
                                {},
                                {
                                  mids: s._mids,
                                  innerLocalStorageSemaphore: gs,
                                }
                              )
                            )),
                            Object.defineProperties(s, {
                              _registerWrapper: {
                                value: ws,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                              },
                              _controller: {
                                value: a,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              },
                            }),
                            u.forEach(function (e) {
                              return s._registerWrapper(e);
                            }),
                            u.splice(0),
                            a
                          );
                        })();
                      },
                    },
                  });
                },
              },
              {
                key: "_attachLinkedAccountsMethods",
                value: function () {
                  var e = this;
                  (this.collectFinancialConnectionsAccounts = x(function (t) {
                    return or(e._controller, t);
                  })),
                    (this.collectBankAccountToken = x(function (t) {
                      return (function (e, t) {
                        return rr({
                          linkAccountSessionCreatorClientSecret: t.clientSecret,
                          linkAccountSessionCreatorType: "link_account_session",
                          controller: e,
                          consumerPublishableKey: null,
                          checkoutPriceAmount: { amount: null, currency: null },
                          email: null,
                          linkMobilePhone: null,
                          linkMobilePhoneCountry: null,
                          useContinueButtonOnSuccess: !1,
                        }).then(function (e) {
                          if ("error" in e) return e;
                          var t = e.linkAccountSession,
                            n = t.linkedAccounts,
                            r = (0, d.Z)(t, ["linkedAccounts"]);
                          return {
                            token: e.linkAccountSession.bankAccountToken,
                            linkAccountSession: e.linkAccountSession,
                            financialConnectionsSession: (0, c.Z)(
                              (0, c.Z)({}, r),
                              {},
                              { accounts: n }
                            ),
                          };
                        });
                      })(e._controller, t);
                    }));
                },
              },
              {
                key: "_attachAppInfo",
                value: function () {
                  var e = this;
                  this.registerAppInfo = O(function (t) {
                    var n = (0, v.ld)(Go, t, "WrapperLibrary");
                    "error" !== n.type
                      ? e._controller.registerAppInfo(n.value)
                      : e._controller.warn(
                          "Failed to register your library: ".concat(
                            n.error.message
                          )
                        );
                  });
                },
              },
              {
                key: "_injectBetaHeader",
                value: function (e) {
                  return e;
                },
              },
              {
                key: "_ensureHTTPS",
                value: function () {
                  var e = window.location.protocol,
                    t =
                      -1 !==
                      ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(
                        window.location.hostname
                      ),
                    n =
                      (!0 === window.isSecureContext && !t) ||
                      -1 !==
                        [
                          "https:",
                          "file:",
                          "ionic:",
                          "httpsionic:",
                          "chrome-extension:",
                          "moz-extension:",
                        ].indexOf(e),
                    r = this._keyMode === De.Kl.live,
                    o =
                      "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security/guide#tls";
                  if (!n) {
                    if (r && !t)
                      throw (
                        (this._controller.report("user_error.non_https_error", {
                          protocol: e,
                        }),
                        new A.No(o))
                      );
                    !r || t
                      ? window.console &&
                        console.warn(
                          "You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS."
                        )
                      : window.console && console.warn(o);
                  }
                },
              },
              {
                key: "_ensureHTTPOnlyLinkCookie",
                value: function () {
                  if (
                    !(this._keyMode === De.Kl.live) &&
                    Zt("stripe.link.persistent_token")
                  )
                    throw new A.No(
                      "`stripe.link.persistent_token` must be set as an httpOnly cookie. For more information https://stripe.com/docs/payments/link/accept-a-payment?platform=web#merchant-domain-cookie"
                    );
                },
              },
              {
                key: "_ensureStripeHosted",
                value: function (e) {
                  if (!e)
                    throw (
                      (this._controller.report("user_error.self_hosted"),
                      new A.No(
                        "Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs"
                      ))
                    );
                },
              },
              {
                key: "_mids",
                value: function () {
                  return t._ec ? t._ec.ids() : null;
                },
              },
              {
                key: "_midsPromise",
                value: function () {
                  return t._ec ? t._ec.idsPromise() : U.J.resolve(this._mids());
                },
              },
            ]),
            t
          );
        })();
      (bs.version = 3),
        (bs.stripeJsId = (0, g.Vj)()),
        (bs._ec =
          ((ds = new RegExp(
            ""
              .concat(document.location.protocol, "//")
              .concat(document.location.host)
          )),
          "https://checkout.stripe.com/".match(ds) ? null : sn()));
      var ws = function (e) {
          var t = (0, v.ld)(Uo, e, "StripeWrapperLibrary");
          if ("error" !== t.type) {
            var n = t.value,
              r = n.name,
              o = n.version,
              i = n.startTime;
            this._controller.registerWrapper({
              name: r,
              version: o,
              startTime: i,
            });
          } else
            this._controller.report("register_wrapper.error", {
              error: t.error.message,
            });
        },
        ks = bs,
        Es = (function () {
          if (document.currentScript) {
            var e = (0, k.Ds)(document.currentScript.src);
            return !e || (0, k.Qg)(e.origin);
          }
          return !0;
        })(),
        Ss = function (e, t) {
          return new ks(
            (0, c.Z)({ apiKey: e }, t && "object" == typeof t ? t : {}),
            Es
          );
        };
      (Ss.version = ks.version),
        window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3
          ? (window.Stripe.StripeV3 = Ss)
          : window.Stripe
          ? window.console &&
            console.warn(
              "It looks like Stripe.js was loaded more than one time. Please only load it once per page."
            )
          : (window.Stripe = Ss);
    })();
})();
//# sourceMappingURL=https://js.stripe.com/v3/sourcemaps/stripe-dbf0d9ca07cda09bb9c87e272320ddc5.js.map
