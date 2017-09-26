var RythmoosEngine=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=4)}([function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(9);Object.keys(d).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}})});var e=c(10);Object.keys(e).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return e[a]}})})},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(7);Object.keys(d).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}})});var e=c(8);Object.keys(e).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return e[a]}})})},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=b.Scene=function(){function a(){c(this,a),this.gameObjects=[]}return d(a,[{key:'add',value:function(a){this.gameObjects.push(a);for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e,f=!0,g=!1;try{for(var h,i,j=c[Symbol.iterator]();!(f=(h=j.next()).done);f=!0)i=h.value,this.add(i)}catch(a){g=!0,e=a}finally{try{!f&&j.return&&j.return()}finally{if(g)throw e}}}},{key:'contains',value:function(a){return-1!==this.gameObjects.indexOf(a)}},{key:'remove',value:function(a){var b=this.gameObjects.indexOf(a);-1!==b&&this.gameObjects.splice(b,1);for(var c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];var f,g=!0,h=!1;try{for(var i,j,k=d[Symbol.iterator]();!(g=(i=k.next()).done);g=!0)j=i.value,this.remove(j)}catch(a){h=!0,f=a}finally{try{!g&&k.return&&k.return()}finally{if(h)throw f}}}},{key:'create',value:function(){}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}}]),a}()},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=b.Graphics=function(){function a(){c(this,a)}return d(a,[{key:'draw',value:function(){}},{key:'_render',value:function(a){this.draw(a)}}]),a}()},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(5);Object.keys(d).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}})});var e=c(0);Object.keys(e).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return e[a]}})});var f=c(12);Object.keys(f).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return f[a]}})});var g=c(1);Object.keys(g).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return g[a]}})})},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(6);Object.keys(d).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}})});var e=c(11);Object.keys(e).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return e[a]}})});var f=c(2);Object.keys(f).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return f[a]}})})},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0}),b.Game=void 0;var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=c(2),g=c(1),h=b.Game=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1280,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:720;d(this,a),this.canvas=document.createElement('canvas'),this.scene=new f.Scene,this.renderer=new g.Renderer(this.canvas.getContext('2d')),this.canvas.style.display='block',this.canvas.style.width='100%',this.canvas.style.height='auto',this.canvas.width=c,this.canvas.height=e,b.appendChild(this.canvas),g.Screen._init(this.canvas),this.renderer.render(this.scene)}return e(a,[{key:'create',value:function(){}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}},{key:'start',value:function(){}},{key:'width',get:function(){return this.canvas.width},set:function(a){this.canvas.width=a}},{key:'height',get:function(){return this.canvas.height},set:function(a){this.canvas.height=a}}]),a}()},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=b.Renderer=function(){function a(b){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'#000000';c(this,a),this.context=b,this.backgroundColour=d}return d(a,[{key:'render',value:function(a){this.context.fillStyle=this.backgroundColour,this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);var b,c=!0,d=!1;try{for(var e,f,g=a.gameObjects[Symbol.iterator]();!(c=(e=g.next()).done);c=!0)f=e.value,f._render(this.context)}catch(a){d=!0,b=a}finally{try{!c&&g.return&&g.return()}finally{if(d)throw b}}}}]),a}()},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0}),b.Screen=void 0;var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=c(0),g=b.Screen=function(){function a(){d(this,a)}return e(a,null,[{key:'_init',value:function(a){this._canvas=a}},{key:'width',get:function(){return this._canvas.width}},{key:'height',get:function(){return this._canvas.height}},{key:'center',get:function(){return new f.Point(this.width/2,this.height/2)}},{key:'centerX',get:function(){return this.width/2}},{key:'centerY',get:function(){return this.height/2}}]),a}()},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});b.Point=function a(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;c(this,a),this.x=b,this.y=d}},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=b.Rotation=function(){function a(){c(this,a)}var b=Math.PI;return d(a,null,[{key:'radiansToDegrees',value:function(a){return 180*a/b}},{key:'degreesToRadians',value:function(a){return a*b/180}}]),a}()},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0}),b.GameObject=void 0;var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=c(0),g=c(1),h=b.GameObject=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:g.Screen.width,h=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g.Screen.height,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,j=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,k=6<arguments.length&&void 0!==arguments[6]?arguments[6]:!0;d(this,a),this.position=new f.Point(b,c),this.width=e,this.height=h,this.rotation=i,this.scale=j,this.visible=k,this.graphics=[]}return e(a,[{key:'setCenter',value:function(a){this.x=a.x-this.width/2,this.y=a.y-this.height/2}},{key:'addGraphics',value:function(a){this.graphics.push(a);for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e,f=!0,g=!1;try{for(var h,i,j=c[Symbol.iterator]();!(f=(h=j.next()).done);f=!0)i=h.value,this.addGraphics(i)}catch(a){g=!0,e=a}finally{try{!f&&j.return&&j.return()}finally{if(g)throw e}}}},{key:'create',value:function(){}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}},{key:'draw',value:function(){}},{key:'drawAfter',value:function(){}},{key:'_render',value:function(a){a.save(),a.translate(this.x,this.y),a.scale(this.scale,this.scale),this.rotation&&(a.translate(this.width/2,this.height/2),a.rotate(f.Rotation.degreesToRadians(this.rotation)),a.translate(-this.width/2,-this.height/2)),this.draw(a);var b,c=!0,d=!1;try{for(var e,g,h=this.graphics[Symbol.iterator]();!(c=(e=h.next()).done);c=!0)g=e.value,g._render(a)}catch(a){d=!0,b=a}finally{try{!c&&h.return&&h.return()}finally{if(d)throw b}}this.drawAfter(a),a.restore()}},{key:'x',get:function(){return this.position.x},set:function(a){this.position.x=a}},{key:'y',get:function(){return this.position.y},set:function(a){this.position.y=a}},{key:'center',get:function(){return new f.Point(this.x+this.width/2,this.y+this.height/2)}},{key:'centerX',get:function(){return this.x+this.width/2},set:function(a){this.x=a-this.width/2}},{key:'centerY',get:function(){return this.y+this.height/2},set:function(a){this.y=a-this.height/2}}]),a}()},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(3);Object.keys(d).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return d[a]}})});var e=c(13);Object.keys(e).forEach(function(a){'default'===a||'__esModule'===a||Object.defineProperty(b,a,{enumerable:!0,get:function(){return e[a]}})})},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function e(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function f(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,'__esModule',{value:!0}),b.Rectangle=void 0;var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c(0),i=c(3),j=b.Rectangle=function(a){function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,f=2<arguments.length&&void 0!==arguments[2]?arguments[2]:400,g=3<arguments.length&&void 0!==arguments[3]?arguments[3]:250,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:'#ff00ff',j=5<arguments.length&&void 0!==arguments[5]?arguments[5]:'#ffffff',k=6<arguments.length&&void 0!==arguments[6]?arguments[6]:2;d(this,b);var l=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return l.position=new h.Point(a,c),l.width=f,l.height=g,l.fillColour=i,l.strokeColour=j,l.strokeWidth=k,l.rotation=0,l.visible=!0,l.fill=!0,l}return f(b,a),g(b,[{key:'setCenter',value:function(a){this.x=a.x-this.width/2,this.y=a.y-this.height/2}},{key:'draw',value:function(a){this.visible&&(a.save(),this.rotation&&(a.translate(this.centerX,this.centerY),a.rotate(h.Rotation.degreesToRadians(this.rotation)),a.translate(-this.centerX,-this.centerY)),this.fill&&(a.fillStyle=this.fillColour,a.fillRect(this.x,this.y,this.width,this.height)),this.strokeWidth&&(a.lineWidth=this.strokeWidth,a.strokeStyle=this.strokeColour,a.strokeRect(this.x,this.y,this.width,this.height)))}},{key:'x',get:function(){return this.position.x},set:function(a){this.position.x=a}},{key:'y',get:function(){return this.position.y},set:function(a){this.position.y=a}},{key:'center',get:function(){return new h.Point(this.x+this.width/2,this.y+this.height/2)}},{key:'centerX',get:function(){return this.x+this.width/2},set:function(a){this.x=a-this.width/2}},{key:'centerY',get:function(){return this.y+this.height/2},set:function(a){this.y=a-this.height/2}}]),b}(i.Graphics)}]);