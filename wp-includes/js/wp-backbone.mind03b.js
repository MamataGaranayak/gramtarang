/*! This file is auto-generated */
window.wp=window.wp||{},function(e){wp.Backbone={},wp.Backbone.Subviews=function(e,t){this.view=e,this._views=_.isArray(t)?{"":t}:t||{}},wp.Backbone.Subviews.extend=Backbone.Model.extend,_.extend(wp.Backbone.Subviews.prototype,{all:function(){return _.flatten(_.values(this._views))},get:function(e){return e=e||"",this._views[e]},first:function(e){var t=this.get(e);return t&&t.length?t[0]:null},set:function(n,e,t){var i,s;return _.isString(n)||(t=e,e=n,n=""),t=t||{},s=e=_.isArray(e)?e:[e],(i=this.get(n))&&(t.add?_.isUndefined(t.at)?s=i.concat(e):(s=i).splice.apply(s,[t.at,0].concat(e)):(_.each(s,function(e){e.__detach=!0}),_.each(i,function(e){e.__detach?e.$el.detach():e.remove()}),_.each(s,function(e){delete e.__detach}))),this._views[n]=s,_.each(e,function(e){var t=e.Views||wp.Backbone.Subviews,i=e.views=e.views||new t(e);i.parent=this.view,i.selector=n},this),t.silent||this._attach(n,e,_.extend({ready:this._isReady()},t)),this},add:function(e,t,i){return _.isString(e)||(i=t,t=e,e=""),this.set(e,t,_.extend({add:!0},i))},unset:function(e,t,i){var n;return _.isString(e)||(i=t,t=e,e=""),t=t||[],(n=this.get(e))&&(t=_.isArray(t)?t:[t],this._views[e]=t.length?_.difference(n,t):[]),i&&i.silent||_.invoke(t,"remove"),this},detach:function(){return e(_.pluck(this.all(),"el")).detach(),this},render:function(){var i={ready:this._isReady()};return _.each(this._views,function(e,t){this._attach(t,e,i)},this),this.rendered=!0,this},remove:function(e){return e&&e.silent||(this.parent&&this.parent.views&&this.parent.views.unset(this.selector,this.view,{silent:!0}),delete this.parent,delete this.selector),_.invoke(this.all(),"remove"),this._views=[],this},replace:function(e,t){return e.html(t),this},insert:function(e,t,i){var n,s=i&&i.at;return _.isNumber(s)&&(n=e.children()).length>s?n.eq(s).before(t):e.append(t),this},ready:function(){this.view.trigger("ready"),_.chain(this.all()).map(function(e){return e.views}).flatten().where({attached:!0}).invoke("ready")},_attach:function(e,t,i){var n,s=e?this.view.$(e):this.view.$el;return s.length&&(n=_.chain(t).pluck("views").flatten().value(),_.each(n,function(e){e.rendered||(e.view.render(),e.rendered=!0)},this),this[i.add?"insert":"replace"](s,_.pluck(t,"el"),i),_.each(n,function(e){e.attached=!0,i.ready&&e.ready()},this)),this},_isReady:function(){for(var e=this.view.el;e;){if(e===document.body)return!0;e=e.parentNode}return!1}}),wp.Backbone.View=Backbone.View.extend({Subviews:wp.Backbone.Subviews,constructor:function(e){this.views=new this.Subviews(this,this.views),this.on("ready",this.ready,this),this.options=e||{},Backbone.View.apply(this,arguments)},remove:function(){var e=Backbone.View.prototype.remove.apply(this,arguments);return this.views&&this.views.remove(),e},render:function(){var e;return this.prepare&&(e=this.prepare()),this.views.detach(),this.template&&(e=e||{},this.trigger("prepare",e),this.$el.html(this.template(e))),this.views.render(),this},prepare:function(){return this.options},ready:function(){}})}(jQuery);