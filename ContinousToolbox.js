/*! For license information please see index.js.LICENSE.txt */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e(require("blockly/core"));
  else if ("function" == typeof define && define.amd)
    define(["blockly/core"], e);
  else {
    var o =
      "object" == typeof exports ? e(require("blockly/core")) : e(t.Blockly);
    for (var s in o) ("object" == typeof exports ? exports : t)[s] = o[s];
  }
})(this, (t) =>
  (() => {
    "use strict";
    var e = {
        573: (e) => {
          e.exports = t;
        },
      },
      o = {};
    function s(t) {
      var i = o[t];
      if (void 0 !== i) return i.exports;
      var r = (o[t] = { exports: {} });
      return e[t](r, r.exports, s), r.exports;
    }
    (s.d = (t, e) => {
      for (var o in e)
        s.o(e, o) &&
          !s.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
      (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (s.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var i = {};
    return (
      (() => {
        s.r(i),
          s.d(i, {
            ContinuousCategory: () => e,
            ContinuousFlyout: () => n,
            ContinuousMetrics: () => l,
            ContinuousToolbox: () => o,
          });
        var t = s(573);
        class e extends t.ToolboxCategory {
          constructor(t, e) {
            super(t, e);
          }
          createLabelDom_(t) {
            const e = document.createElement("div");
            return (
              e.setAttribute("id", this.getId() + ".label"),
              (e.textContent = t),
              e.classList.add(this.cssConfig_.label),
              e
            );
          }
          createIconDom_() {
            const t = document.createElement("div");
            return (
              t.classList.add("categoryBubble"),
              (t.style.backgroundColor = this.colour_),
              t
            );
          }
          addColourBorder_() {}
          setSelected(e) {
            e
              ? ((this.rowDiv_.style.backgroundColor = "gray"),
                t.utils.dom.addClass(this.rowDiv_, this.cssConfig_.selected))
              : ((this.rowDiv_.style.backgroundColor = ""),
                t.utils.dom.removeClass(
                  this.rowDiv_,
                  this.cssConfig_.selected,
                )),
              t.utils.aria.setState(
                this.htmlDiv_,
                t.utils.aria.State.SELECTED,
                e,
              );
          }
        }
        t.registry.register(
          t.registry.Type.TOOLBOX_ITEM,
          t.ToolboxCategory.registrationName,
          e,
          !0,
        );
        class o extends t.Toolbox {
          constructor(t) {
            super(t);
          }
          init() {
            super.init();
            const e = this.getFlyout();
            e.show(this.getInitialFlyoutContents_()),
              e.recordScrollPositions(),
              this.workspace_.addChangeListener((e) => {
                (e.type !== t.Events.BLOCK_CREATE &&
                  e.type !== t.Events.BLOCK_DELETE) ||
                  this.refreshSelection();
              });
          }
          getFlyout() {
            return super.getFlyout();
          }
          getInitialFlyoutContents_() {
            let e = [];
            for (const o of this.contents_)
              if (o instanceof t.ToolboxCategory) {
                e.push({ kind: "LABEL", text: o.getName() });
                let t = o.getContents();
                "string" == typeof t && (t = { custom: t, kind: "CATEGORY" }),
                  (e = e.concat(t));
              }
            return e;
          }
          refreshSelection() {
            this.getFlyout().show(this.getInitialFlyoutContents_());
          }
          updateFlyout_(t, e) {
            if (e) {
              const t = this.getFlyout().getCategoryScrollPosition(e.name_).y;
              this.getFlyout().scrollTo(t);
            }
          }
          shouldDeselectItem_(t, e) {
            return t && t !== e;
          }
          getCategoryByName(e) {
            return (
              this.contents_.find(
                (o) =>
                  o instanceof t.ToolboxCategory &&
                  o.isSelectable() &&
                  e === o.getName(),
              ) || null
            );
          }
          selectCategoryByName(t) {
            const e = this.getCategoryByName(t);
            if (!e) return;
            const o = this.selectedItem_;
            this.shouldDeselectItem_(o, e) && this.deselectItem_(o),
              this.shouldSelectItem_(o, e) && this.selectItem_(o, e);
          }
          getClientRect() {
            const t = this.getFlyout();
            return t && !t.autoClose
              ? t.getClientRect()
              : super.getClientRect();
          }
        }
        t.Css.register(
          "\n.categoryBubble {\n  margin: 0 auto 0.125rem;\n  border-radius: 100%;\n  border: 1px solid;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.blocklyTreeRow {\n  height: initial;\n  padding: 3px 0;\n}\n.blocklyTreeRowContentContainer {\n  display: flex;\n  flex-direction: column;\n}\n.blocklyTreeLabel {\n  margin: auto;\n}\n",
        );
        class r extends t.FlyoutMetricsManager {
          constructor(t, e) {
            super(t, e);
          }
          getScrollMetrics(t, e, o) {
            const s = super.getScrollMetrics(t, e, o),
              i = o || this.getContentMetrics(t),
              r = e || this.getViewMetrics(t);
            return (
              s && (s.height += this.flyout_.calculateBottomPadding(i, r)), s
            );
          }
        }
        class n extends t.VerticalFlyout {
          constructor(e) {
            super(e),
              (this.scrollPositions = []),
              (this.scrollTarget = null),
              (this.scrollAnimationFraction = 0.3),
              (this.recyclingEnabled_ = !0),
              this.workspace_.setMetricsManager(new r(this.workspace_, this)),
              this.workspace_.addChangeListener((e) => {
                e.type === t.Events.VIEWPORT_CHANGE &&
                  this.selectCategoryByScrollPosition_(
                    -this.workspace_.scrollY,
                  );
              }),
              (this.autoClose = !1);
          }
          getParentToolbox_() {
            return this.targetWorkspace.getToolbox();
          }
          recordScrollPositions() {
            this.scrollPositions = [];
            const t = this.buttons_.filter(
              (t) =>
                t.isLabel() &&
                this.getParentToolbox_().getCategoryByName(t.getButtonText()),
            );
            for (const e of t)
              e.isLabel() &&
                this.scrollPositions.push({
                  name: e.getButtonText(),
                  position: e.getPosition(),
                });
          }
          getCategoryScrollPosition(t) {
            for (const e of this.scrollPositions)
              if (e.name === t) return e.position;
            return (
              console.warn(`Scroll position not recorded for category ${t}`),
              null
            );
          }
          selectCategoryByScrollPosition_(t) {
            if (this.scrollTarget) return;
            const e = Math.round(t / this.workspace_.scale);
            for (let t = this.scrollPositions.length - 1; t >= 0; t--) {
              const o = this.scrollPositions[t];
              if (e >= o.position.y)
                return void this.getParentToolbox_().selectCategoryByName(
                  o.name,
                );
            }
          }
          scrollTo(t) {
            const e = this.workspace_.getMetrics();
            (this.scrollTarget = Math.min(
              t * this.workspace_.scale,
              e.scrollHeight - e.viewHeight,
            )),
              this.stepScrollAnimation_();
          }
          stepScrollAnimation_() {
            if (!this.scrollTarget) return;
            const t = -this.workspace_.scrollY,
              e = this.scrollTarget - t;
            if (Math.abs(e) < 1)
              return (
                this.workspace_.scrollbar.setY(this.scrollTarget),
                void (this.scrollTarget = null)
              );
            this.workspace_.scrollbar.setY(
              t + e * this.scrollAnimationFraction,
            ),
              requestAnimationFrame(this.stepScrollAnimation_.bind(this));
          }
          calculateBottomPadding(t, e) {
            if (this.scrollPositions.length > 0) {
              const o =
                  this.scrollPositions[this.scrollPositions.length - 1].position
                    .y * this.workspace_.scale,
                s = t.height - o;
              if (s < e.height) return e.height - s;
            }
            return 0;
          }
          getX() {
            return this.isVisible() &&
              this.targetWorkspace.toolboxPosition === this.toolboxPosition_ &&
              this.targetWorkspace.getToolbox() &&
              this.toolboxPosition_ !== t.utils.toolbox.Position.LEFT
              ? this.targetWorkspace.getMetricsManager().getViewMetrics().width
              : super.getX();
          }
          show(t) {
            super.show(t),
              this.recordScrollPositions(),
              this.workspace_.resizeContents();
          }
          blockIsRecyclable_(e) {
            if (!this.recyclingEnabled_) return !1;
            if (e.mutationToDom && e.domToMutation) return !1;
            if (!e.isEnabled()) return !1;
            for (const o of e.inputList) {
              for (const e of o.fieldRow) {
                if (e.referencesVariables()) return !1;
                if (e instanceof t.FieldDropdown && e.isOptionListDynamic())
                  return !1;
              }
              if (o.connection) {
                const t = o.connection.targetBlock();
                if (t && !this.blockIsRecyclable_(t)) return !1;
              }
            }
            return !0;
          }
          setBlockIsRecyclable(t) {
            this.blockIsRecyclable_ = t;
          }
          setRecyclingEnabled(t) {
            this.recyclingEnabled_ = t;
          }
        }
        class l extends t.MetricsManager {
          constructor(t) {
            super(t);
          }
          getViewMetrics(e) {
            const o = e ? this.workspace_.scale : 1,
              s = this.getSvgMetrics(),
              i = this.getToolboxMetrics(),
              r = this.getFlyoutMetrics(!1),
              n = i.position;
            return (
              this.workspace_.getToolbox() &&
                (n == t.TOOLBOX_AT_TOP || n == t.TOOLBOX_AT_BOTTOM
                  ? (s.height -= i.height + r.height)
                  : (n != t.TOOLBOX_AT_LEFT && n != t.TOOLBOX_AT_RIGHT) ||
                    (s.width -= i.width + r.width)),
              {
                height: s.height / o,
                width: s.width / o,
                top: -this.workspace_.scrollY / o,
                left: -this.workspace_.scrollX / o,
              }
            );
          }
          getAbsoluteMetrics() {
            const e = this.getToolboxMetrics(),
              o = this.getFlyoutMetrics(!1),
              s = e.position;
            let i = 0;
            this.workspace_.getToolbox() &&
              s == t.TOOLBOX_AT_LEFT &&
              (i = e.width + o.width);
            let r = 0;
            return (
              this.workspace_.getToolbox() &&
                s == t.TOOLBOX_AT_TOP &&
                (r = e.height + o.height),
              { top: r, left: i }
            );
          }
        }
        t.registry.register(
          t.registry.Type.METRICS_MANAGER,
          "CustomMetricsManager",
          l,
        );
      })(),
      i
    );
  })(),
);
//# sourceMappingURL=index.js.map
