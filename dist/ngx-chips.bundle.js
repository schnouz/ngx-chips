(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("ng2-material-dropdown"), require("@angular/animations"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "ng2-material-dropdown", "@angular/animations", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-chips"] = factory(require("@angular/core"), require("@angular/forms"), require("ng2-material-dropdown"), require("@angular/animations"), require("@angular/common"));
	else
		root["ngx-chips"] = factory(root["@angular/core"], root["@angular/forms"], root["ng2-material-dropdown"], root["@angular/animations"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpngx_chips"];
/******/ 	window["webpackJsonpngx_chips"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"vendor"}[chunkId]||chunkId) + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
var toSubscriber_1 = __webpack_require__(75);
var observable_1 = __webpack_require__(69);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this._trySubscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
            sink.error(err);
        }
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            // Must be declared in a separate statement to avoid a RefernceError when
            // accessing subscription below in the closure due to Temporal Dead Zone.
            var subscription;
            subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(21);
var Subscription_1 = __webpack_require__(16);
var Observer_1 = __webpack_require__(15);
var rxSubscriber_1 = __webpack_require__(19);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        _super.call(this);
        this._parentSubscriber = _parentSubscriber;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._error) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_input_form__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__tag_input_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__tag__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__tag__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_input__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__tag_input__["a"]; });







/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
if (typeof window == 'object' && window.window === window) {
    exports.root = window;
}
else if (typeof self == 'object' && self.self === self) {
    exports.root = self;
}
else if (typeof global == 'object' && global.global === global) {
    exports.root = global;
}
else {
    // Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
    // This is needed when used with angular/tsickle which inserts a goog.module statement.
    // Wrap in IIFE
    (function () {
        throw new Error('RxJS could not find any global context (window, self, global)');
    })();
}
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACEHOLDER", function() { return PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_PLACEHOLDER", function() { return SECONDARY_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYDOWN", function() { return KEYDOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYUP", function() { return KEYUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS", function() { return FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_ITEMS_WARNING", function() { return MAX_ITEMS_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS_KEYS", function() { return ACTIONS_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_PRESS_ACTIONS", function() { return KEY_PRESS_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAG_AND_DROP_KEY", function() { return DRAG_AND_DROP_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT", function() { return NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREV", function() { return PREV; });
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var FOCUS = 'focus';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accessor__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__accessor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__providers__["b"]; });








/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag_provider__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__drag_provider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options_provider__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__options_provider__["a"]; });




/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_ripple_component__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_ripple_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_component__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tag_component__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(72);
var isObject_1 = __webpack_require__(73);
var isFunction_1 = __webpack_require__(21);
var tryCatch_1 = __webpack_require__(76);
var errorObject_1 = __webpack_require__(20);
var UnsubscriptionError_1 = __webpack_require__(71);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        // null out _subscriptions first so any child subscriptions that attempt
        // to remove themselves from this subscription will noop
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        // if this._parent is null, then so is this._parents, and we
        // don't have to remove ourselves from any parent subscriptions.
        while (_parent) {
            _parent.remove(this);
            // if this._parents is null or index >= len,
            // then _parent is set to null, and the loop exits
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            // If we don't have a parent, or the new parent is the same as the
            // current parent, then set this._parent to the new parent.
            this._parent = parent;
        }
        else if (!_parents) {
            // If there's already one parent, but not multiple, allocate an Array to
            // store the rest of the parent Subscriptions.
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            // Only add the new parent to the _parents list if it's not already there.
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var filter_1 = __webpack_require__(62);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var map_1 = __webpack_require__(64);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
var Symbol = root_1.root.Symbol;
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
/**
 * @deprecated use rxSubscriber instead
 */
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["f" /* TagInputComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* DeleteIconComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* TagInputForm */],
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* TagComponent */],
    __WEBPACK_IMPORTED_MODULE_4__core__["e" /* HighlightPipe */],
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* TagInputDropdown */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* TagRipple */]
];
var optionsProvider = new __WEBPACK_IMPORTED_MODULE_4__core__["d" /* OptionsProvider */]();
var TagInputModule = (function () {
    function TagInputModule() {
    }
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__["Ng2DropdownModule"]
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core__["f" /* DragProvider */]
        ]
    })
], TagInputModule);



/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_input_dropdown_component__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_input_dropdown_component__["a"]; });



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_material_dropdown__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_material_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_material_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputDropdown; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var defaults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_5__core__["d" /* OptionsProvider */].defaults.dropdown; });
var TagInputDropdown = (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults().offset;
        this.focusFirstElement = new defaults().focusFirstElement;
        this.showDropdownIfEmpty = new defaults().showDropdownIfEmpty;
        this.minimumTextLength = new defaults().minimumTextLength;
        this.limitItemsTo = new defaults().limitItemsTo;
        this.displayBy = new defaults().displayBy;
        this.identifyBy = new defaults().identifyBy;
        this.matchingFn = new defaults().matchingFn;
        this.appendToBody = new defaults().appendToBody;
        this.keepOpen = new defaults().keepOpen;
        this.items = [];
        this.tagInput = this.injector.get(__WEBPACK_IMPORTED_MODULE_6__components__["f" /* TagInputComponent */]);
        this._autocompleteItems = [];
        this.show = function () {
            var value = _this.getFormValue();
            if (_this.autocompleteObservable) {
                return _this.getItemsFromObservable(value);
            }
            if (!_this.showDropdownIfEmpty && !value) {
                return _this.dropdown.hide();
            }
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var assertions = [];
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) {
            _this.tagInput.onAddingRequested(true, _this.createTagModel(item));
        };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .first()
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_a = {},
                    _a[_this.displayBy] = item,
                    _a[_this.identifyBy] = item,
                    _a) : item;
                var _a;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(this.requestAdding);
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        this.tagInput
            .onTextChange
            .debounceTime(DEBOUNCE_TIME)
            .filter(function (value) {
            if (_this.keepOpen === false) {
                return value.length > 0;
            }
            return true;
        })
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return __assign({}, item.value, (_a = {}, _a[this.tagInput.displayBy] = display, _a[this.tagInput.identifyBy] = value, _a));
        var _a;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? true : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && hasValue === false;
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_a = {},
                _a[_this.displayBy] = item,
                _a[_this.identifyBy] = item,
                _a) : item;
            var _a;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state) {
        this.tagInput.isLoading = state;
        return this;
    };
    return TagInputDropdown;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_material_dropdown__["Ng2Dropdown"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_material_dropdown__["Ng2Dropdown"])
], TagInputDropdown.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], TagInputDropdown.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputDropdown.prototype, "offset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "focusFirstElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "autocompleteObservable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "minimumTextLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TagInputDropdown.prototype, "limitItemsTo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "displayBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "identifyBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TagInputDropdown.prototype, "matchingFn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "appendToBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputDropdown.prototype, "keepOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TagInputDropdown.prototype, "autocompleteItems", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "scrollListener", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:blur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagInputDropdown.prototype, "onWindowBlur", null);
TagInputDropdown = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag-input-dropdown',
        template: __webpack_require__(48)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], TagInputDropdown);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteIconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeleteIconComponent = (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'delete-icon',
        template: __webpack_require__(49),
        styles: [__webpack_require__(77)]
    })
], DeleteIconComponent);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__icon__["a"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_input_form_component__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_input_form_component__["a"]; });



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagInputForm = (function () {
    function TagInputForm() {
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onKeydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.inputTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            item: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', this.validators, this.asyncValidators)
        });
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return this.form.get('item');
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var value = this.value;
        return value ? Object.keys(messages)
            .filter(function (err) { return value.hasError(err); })
            .map(function (err) { return messages[err]; }) : [];
    };
    TagInputForm.prototype.hasErrors = function () {
        return this.form.dirty &&
            this.form.value.item &&
            this.form.invalid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        this.onSubmit.emit($event);
    };
    return TagInputForm;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "onSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "onBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "onFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "onKeyup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "onKeydown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputForm.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "validators", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputForm.prototype, "asyncValidators", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputForm.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TagInputForm.prototype, "inputText", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputForm.prototype, "tabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputForm.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", Object)
], TagInputForm.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputForm.prototype, "inputTextChange", void 0);
TagInputForm = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag-input-form',
        styles: [__webpack_require__(78)],
        template: __webpack_require__(50)
    })
], TagInputForm);



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_animations__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animations; });

var animations = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('animation', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])("{{ enter }}", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["keyframes"])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])("{{ leave }}", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["keyframes"])([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_input__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_input__["a"]; });



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_providers__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__animations__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DragEvent = global.DragEvent;
var CUSTOM_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_8__core_providers__["a" /* OptionsProvider */].defaults.tagInput; });
var TagInputComponent = (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        _this.separatorKeys = new defaults().separatorKeys;
        _this.separatorKeyCodes = new defaults().separatorKeyCodes;
        _this.placeholder = new defaults().placeholder;
        _this.secondaryPlaceholder = new defaults().secondaryPlaceholder;
        _this.maxItems = new defaults().maxItems;
        _this.validators = new defaults().validators;
        _this.asyncValidators = new defaults().asyncValidators;
        _this.onlyFromAutocomplete = new defaults().onlyFromAutocomplete;
        _this.errorMessages = new defaults().errorMessages;
        _this.theme = new defaults().theme;
        _this.onTextChangeDebounce = new defaults().onTextChangeDebounce;
        _this.inputId = new defaults().inputId;
        _this.inputClass = new defaults().inputClass;
        _this.clearOnBlur = new defaults().clearOnBlur;
        _this.hideForm = new defaults().hideForm;
        _this.addOnBlur = new defaults().addOnBlur;
        _this.addOnPaste = new defaults().addOnPaste;
        _this.pasteSplitPattern = new defaults().pasteSplitPattern;
        _this.blinkIfDupe = new defaults().blinkIfDupe;
        _this.removable = new defaults().removable;
        _this.editable = new defaults().editable;
        _this.allowDupes = new defaults().allowDupes;
        _this.modelAsStrings = new defaults().modelAsStrings;
        _this.trimTags = new defaults().trimTags;
        _this.ripple = new defaults().ripple;
        _this.tabindex = new defaults().tabIndex;
        _this.disabled = new defaults().disabled;
        _this.dragZone = new defaults().dragZone;
        _this.onRemoving = new defaults().onRemoving;
        _this.onAdding = new defaults().onAdding;
        _this.animationDuration = new defaults().animationDuration;
        _this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onPaste = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onValidationError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onTagEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.isLoading = false;
        _this.listeners = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].KEYDOWN] = [],
            _a[__WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].KEYUP] = [],
            _a);
        _this.inputTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.inputTextValue = '';
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = items.slice(0, index).concat([
                model
            ], items.slice(index, items.length));
        };
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return __assign({}, typeof model !== 'string' ? model : {}, (_a = {}, _a[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _a[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _a));
            var _a;
        };
        _this.onPasteCallback = function (data) {
            var text = data.clipboardData.getData('text/plain');
            text.split(_this.pasteSplitPattern)
                .map(function (item) { return _this.createTag(item); })
                .forEach(function (item) { return _this.onAddingRequested(false, item); });
            _this.onPaste.emit(text);
            setTimeout(function () { return _this.setInputValue(''); }, 0);
        };
        return _this;
        var _a;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngAfterViewInit = function () {
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(__WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        var subscribeFn = function (model) { return _this.removeItem(model, index); };
        this.onRemoving ?
            this.onRemoving(tag)
                .first()
                .subscribe(subscribeFn) : subscribeFn(tag);
    };
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        if (!tag) {
            return;
        }
        var subscribeFn = function (model) {
            return _this.addItem(fromAutocomplete, model, index);
        };
        this.onAdding ?
            this.onAdding(tag)
                .first()
                .subscribe(subscribeFn) : subscribeFn(tag);
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        switch (__WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].KEY_PRESS_ACTIONS[key]) {
            case __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].PREV);
                break;
            case __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].NEXT);
                break;
            case __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].ACTIONS_KEYS.TAB:
                this.moveToTag(data.model, __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].NEXT);
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.setInputValue = function (value) {
        var control = this.getControl();
        control.setValue(value);
    };
    TagInputComponent.prototype.getControl = function () {
        return this.inputForm.value;
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = { zone: this.dragZone, tag: tag, index: index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.isTagValid = function (tag, fromAutocomplete) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
        if (selectedItem && !fromAutocomplete) {
            return false;
        }
        var dupe = this.findDupe(tag, fromAutocomplete);
        if (!this.allowDupes && dupe && this.blinkIfDupe) {
            var model = this.tags.find(function (tag) {
                return _this.getItemValue(tag.model) === _this.getItemValue(dupe);
            });
            if (model) {
                model.blink();
            }
        }
        var isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
        var assertions = [
            !dupe || this.allowDupes === true,
            this.maxItemsReached === false,
            ((isFromAutocomplete) || this.onlyFromAutocomplete === false)
        ];
        return assertions.filter(function (item) { return item; }).length === assertions.length;
    };
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.tags.last.model === item;
        var isFirst = this.tags.first.model === item;
        var stopSwitch = (direction === __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].NEXT && isLast) ||
            (direction === __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var model = this.getItemDisplay(item);
        var reset = function () {
            _this.setInputValue('');
            _this.focus(true, false);
        };
        var validationFilter = function (tag) {
            var isValid = _this.isTagValid(tag, fromAutocomplete) && _this.inputForm.form.valid;
            if (!isValid) {
                _this.onValidationError.emit(tag);
            }
            return isValid;
        };
        var subscribeFn = function (tag) {
            _this.appendTag(tag, index);
            _this.onAdd.emit(tag);
            if (!_this.dropdown) {
                return;
            }
            _this.dropdown.hide();
            _this.dropdown.showDropdownIfEmpty ? _this.dropdown.show() : undefined;
        };
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .of(model)
            .first()
            .filter(function () { return model.trim() !== ''; })
            .map(function () { return item; })
            .map(this.createTag)
            .filter(validationFilter)
            .subscribe(subscribeFn, undefined, reset);
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue);
            }
        };
        __WEBPACK_IMPORTED_MODULE_7__core__["b" /* listen */].call(this, __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].KEYDOWN, listener, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        __WEBPACK_IMPORTED_MODULE_7__core__["b" /* listen */].call(this, __WEBPACK_IMPORTED_MODULE_7__core__["a" /* constants */].KEYDOWN, listener);
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', this.onPasteCallback);
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .debounceTime(this.onTextChangeDebounce)
            .map(function () { return _this.formValue; })
            .subscribe(function (value) { return _this.onTextChange.emit(value); });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            return !(_this.dropdown && _this.dropdown.isVisible) && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .filter(filterFn)
            .subscribe(function () {
            if (_this.addOnBlur) {
                _this.onAddingRequested(false, _this.formValue);
            }
            _this.setInputValue('');
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: __assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(__WEBPACK_IMPORTED_MODULE_7__core__["c" /* TagInputAccessor */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "separatorKeys", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "separatorKeyCodes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "validators", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "asyncValidators", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "errorMessages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "theme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "inputClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "clearOnBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "hideForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnPaste", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "pasteSplitPattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "blinkIfDupe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "removable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "allowDupes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "modelAsStrings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "trimTags", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TagInputComponent.prototype, "inputText", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "ripple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "tabindex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "dragZone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onRemoving", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onAdding", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "animationDuration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onFocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTextChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onPaste", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onValidationError", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "onTagEdited", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_9__components__["a" /* TagInputDropdown */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components__["a" /* TagInputDropdown */])
], TagInputComponent.prototype, "dropdown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], { descendants: false }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], TagInputComponent.prototype, "templates", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__components__["c" /* TagInputForm */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components__["c" /* TagInputForm */])
], TagInputComponent.prototype, "inputForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_9__components__["e" /* TagComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], TagInputComponent.prototype, "tags", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagInputComponent.prototype, "inputTextChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('attr.tabindex'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TagInputComponent.prototype, "tabindexAttr", null);
TagInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag-input',
        providers: [CUSTOM_ACCESSOR],
        styles: [__webpack_require__(79)],
        template: __webpack_require__(51),
        animations: __WEBPACK_IMPORTED_MODULE_10__animations__["a" /* animations */]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_8__core_providers__["b" /* DragProvider */]])
], TagInputComponent);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagRipple; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagRipple = (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagRipple.prototype, "state", void 0);
TagRipple = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag-ripple',
        styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
        template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('ink', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('none', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: 0, opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('none => clicked', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                    ]))
                ])
            ])
        ]
    })
], TagRipple);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardEvent = global.KeyboardEvent;
var MouseEvent = global.MouseEvent;
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onKeyDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onTagEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editing = false;
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== 'string' && this.model.readonly === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        var value = event.target.innerText;
        var result = typeof this.model === 'string' ? value : (_a = {}, _a[this.identifyBy] = value, _a[this.displayBy] = value, _a);
        this.disableEditMode();
        this.onBlur.emit(result);
        var _a;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (model) {
            return typeof model === 'string' ?
                model === input :
                model[_this.displayBy] === input;
        };
        if (exists(this.model) === false) {
            var model = typeof this.model === 'string' ? input : (_a = {}, _a[this.identifyBy] = input, _a[this.displayBy] = input, _a);
            this.model = model;
            this.onTagEdited.emit(model);
        }
        var _a;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    return TagComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "removable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], TagComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagComponent.prototype, "displayBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagComponent.prototype, "identifyBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TagComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "hasRipple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagComponent.prototype, "onSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagComponent.prototype, "onRemove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagComponent.prototype, "onBlur", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagComponent.prototype, "onKeyDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], TagComponent.prototype, "onTagEdited", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.moving'),
    __metadata("design:type", Boolean)
], TagComponent.prototype, "moving", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__tag__["a" /* TagRipple */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__tag__["a" /* TagRipple */])
], TagComponent.prototype, "ripple", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TagComponent.prototype, "keydown", null);
TagComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tag',
        template: __webpack_require__(52),
        styles: [__webpack_require__(80)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], TagComponent);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11)))

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(10);
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputAccessor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = __WEBPACK_IMPORTED_MODULE_1__providers__["a" /* OptionsProvider */].defaults.tagInput.displayBy;
        this.identifyBy = __WEBPACK_IMPORTED_MODULE_1__providers__["a" /* OptionsProvider */].defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "displayBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputAccessor.prototype, "identifyBy", void 0);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listen__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__listen__["a"]; });



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listen;
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'highlight'
    })
], HighlightPipe);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__highlight_pipe__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__highlight_pipe__["a"]; });



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_constants__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragProvider; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DragProvider = (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(__WEBPACK_IMPORTED_MODULE_1__core_constants__["DRAG_AND_DROP_KEY"], JSON.stringify(tag));
    };
    DragProvider.prototype.getDraggedItem = function (event) {
        var data = event.dataTransfer.getData(__WEBPACK_IMPORTED_MODULE_1__core_constants__["DRAG_AND_DROP_KEY"]);
        return JSON.parse(data);
    };
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    DragProvider.prototype.setState = function (state) {
        this.state = __assign({}, this.state, state);
    };
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DragProvider);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsProvider; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var OptionsProvider = (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = __assign({}, __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* defaults */].tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = __assign({}, __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* defaults */].dropdown, options.dropdown);
    };
    return OptionsProvider;
}());

OptionsProvider.defaults = __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* defaults */];


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_constants__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaults; });

var defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: __WEBPACK_IMPORTED_MODULE_0__core_constants__["PLACEHOLDER"],
        secondaryPlaceholder: __WEBPACK_IMPORTED_MODULE_0__core_constants__["SECONDARY_PLACEHOLDER"],
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: '',
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disabled: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: "250ms",
            leave: "150ms"
        }
    },
    dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        matchingFn: matchingFn
    }
};
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_input_module__ = __webpack_require__(22);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_input_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["f"]; });




/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n:host(delete-icon) {\n  width: 20px;\n  height: 16px;\n  transition: all 0.15s;\n  display: inline-block;\n  text-align: right; }\n  :host(delete-icon) path {\n    fill: #444; }\n  :host(delete-icon) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host(delete-icon):hover {\n  transform: scale(1.5) translateY(-3px); }\n\n:host-context(.dark) {\n  text-align: right; }\n  :host-context(.dark) path {\n    fill: #fff; }\n  :host-context(.dark) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(.minimal) {\n  text-align: right; }\n  :host-context(.minimal) path {\n    fill: #444; }\n  :host-context(.minimal) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(.bootstrap) {\n  text-align: right; }\n  :host-context(.bootstrap) path {\n    fill: #fff; }\n  :host-context(.bootstrap) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(tag:focus) path,\n:host-context(tag:active) path {\n  fill: #fff; }\n\n:host-context(.dark tag:focus) path,\n:host-context(.dark tag:active) path {\n  fill: #000; }\n\n:host-context(.minimal tag:focus) path,\n:host-context(.minimal tag:active) path {\n  fill: #000; }\n\n:host-context(.bootstrap tag:focus) path,\n:host-context(.bootstrap tag:active) path {\n  fill: #fff; }\n\n:host-context(.bootstrap3-info) {\n  height: inherit; }\n  :host-context(.bootstrap3-info) path {\n    fill: #fff; }\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.ng2-tag-input__text-input {\n  display: inline;\n  vertical-align: middle;\n  border: none;\n  padding: 0 0.5rem;\n  height: 38px;\n  font-size: 1em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n  .ng2-tag-input__text-input:focus {\n    outline: 0; }\n", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".dark tag:focus {\n  box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    flex-wrap: wrap;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.progress-bar, .progress-bar:before {\n  height: 2px;\n  width: 100%;\n  margin: 0; }\n\n.progress-bar {\n  background-color: #2196F3;\n  display: flex;\n  position: absolute;\n  bottom: 0; }\n\n.progress-bar:before {\n  background-color: #82c4f8;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\ntag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  letter-spacing: 0.05rem;\n  color: #444;\n  border-radius: 16px;\n  transition: all 0.3s;\n  margin: 0.1rem 0.3rem 0.1rem 0;\n  padding: 0.08rem 0.45rem;\n  height: 32px;\n  line-height: 34px;\n  background: #efefef;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  tag:not(.readonly):not(.tag--editing):focus {\n    background: #2196F3;\n    color: #fff; }\n  tag:not(.readonly):not(.tag--editing):active {\n    background: #0d8aee;\n    color: #fff; }\n  tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #e2e2e2;\n    color: initial; }\n  tag.readonly {\n    cursor: default; }\n  tag.readonly:focus, tag:focus {\n    outline: 0; }\n  tag.tag--editing {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    cursor: text; }\n\n.minimal tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  border-radius: 0;\n  background: #f9f9f9;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .minimal tag:not(.readonly):not(.tag--editing):focus {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(.readonly):not(.tag--editing):active {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #ececec; }\n  .minimal tag.readonly {\n    cursor: default; }\n  .minimal tag.readonly:focus, .minimal tag:focus {\n    outline: 0; }\n  .minimal tag.tag--editing {\n    cursor: text; }\n\n.dark tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 3px;\n  background: #444;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .dark tag:not(.readonly):not(.tag--editing):focus {\n    background: #efefef;\n    color: #444; }\n  .dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #2b2b2b;\n    color: #f9f9f9; }\n  .dark tag.readonly {\n    cursor: default; }\n  .dark tag.readonly:focus, .dark tag:focus {\n    outline: 0; }\n  .dark tag.tag--editing {\n    cursor: text; }\n\n.bootstrap tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 0.25rem;\n  background: #0275d8;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):focus {\n    background: #025aa5; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):active {\n    background: #025aa5; }\n  .bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #0267bf;\n    color: #f9f9f9; }\n  .bootstrap tag.readonly {\n    cursor: default; }\n  .bootstrap tag.readonly:focus, .bootstrap tag:focus {\n    outline: 0; }\n  .bootstrap tag.tag--editing {\n    cursor: text; }\n\n.bootstrap3-info tag {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 95%;\n  color: #fff;\n  border-radius: 0.25em;\n  background: #5bc0de;\n  user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  padding: .25em .6em;\n  text-align: center;\n  white-space: nowrap; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):focus {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):active {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #46b8da;\n    color: #fff; }\n  .bootstrap3-info tag.readonly {\n    cursor: default; }\n  .bootstrap3-info tag.readonly:focus, .bootstrap3-info tag:focus {\n    outline: 0; }\n  .bootstrap3-info tag.tag--editing {\n    cursor: text; }\n\n:host {\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ":host,\n:host > div,\n:host > div:focus {\n  outline: 0;\n  overflow: hidden;\n  transition: opacity 1s;\n  z-index: 1; }\n\n:host {\n  max-width: 400px; }\n\n:host.blink {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out; }\n\n@keyframes blink {\n  0% {\n    opacity: 0.3; } }\n\n:host .disabled {\n  cursor: not-allowed; }\n\n:host [contenteditable='true'] {\n  outline: 0; }\n\n.tag-wrapper {\n  flex-direction: row;\n  display: flex; }\n\n.tag__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<ng2-dropdown>\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<!-- form -->\n<form (submit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n\n           [(ngModel)]=\"inputText\"\n           [formControlName]=\"'item'\"\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n</form>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n   (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disabled\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n   [style.backgroundColor]=\"item?.color\"\n       (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event, item)\"\n             (onTagEdited)=\"onTagEdited.emit($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disabled\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n      [model]=\"item\">\n    </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onAddingRequested(false, formValue)\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disabled\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isLoading\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of inputForm.getErrorMessages(errorMessages)\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var of_1 = __webpack_require__(60);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var debounceTime_1 = __webpack_require__(61);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(1);
var first_1 = __webpack_require__(63);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(1);
var ScalarObservable_1 = __webpack_require__(59);
var EmptyObservable_1 = __webpack_require__(58);
var isScheduler_1 = __webpack_require__(74);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ArrayObservable = (function (_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
        _super.call(this);
        this.array = array;
        this.scheduler = scheduler;
        if (!scheduler && array.length === 1) {
            this._isScalar = true;
            this.value = array[0];
        }
    }
    ArrayObservable.create = function (array, scheduler) {
        return new ArrayObservable(array, scheduler);
    };
    /**
     * Creates an Observable that emits some values you specify as arguments,
     * immediately one after the other, and then emits a complete notification.
     *
     * <span class="informal">Emits the arguments you provide, then completes.
     * </span>
     *
     * <img src="./img/of.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the arguments given, and the complete notification thereafter. It can
     * be used for composing with other Observables, such as with {@link concat}.
     * By default, it uses a `null` IScheduler, which means the `next`
     * notifications are sent synchronously, although with a different IScheduler
     * it is possible to determine when those notifications will be delivered.
     *
     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
     * var numbers = Rx.Observable.of(10, 20, 30);
     * var letters = Rx.Observable.of('a', 'b', 'c');
     * var interval = Rx.Observable.interval(1000);
     * var result = numbers.concat(letters).concat(interval);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link throw}
     *
     * @param {...T} values Arguments that represent `next` values to be emitted.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the `next` notifications.
     * @return {Observable<T>} An Observable that emits each given input value.
     * @static true
     * @name of
     * @owner Observable
     */
    ArrayObservable.of = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i - 0] = arguments[_i];
        }
        var scheduler = array[array.length - 1];
        if (isScheduler_1.isScheduler(scheduler)) {
            array.pop();
        }
        else {
            scheduler = null;
        }
        var len = array.length;
        if (len > 1) {
            return new ArrayObservable(array, scheduler);
        }
        else if (len === 1) {
            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
        }
        else {
            return new EmptyObservable_1.EmptyObservable(scheduler);
        }
    };
    ArrayObservable.dispatch = function (state) {
        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(array[index]);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var array = this.array;
        var count = array.length;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ArrayObservable.dispatch, 0, {
                array: array, index: index, count: count, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < count && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        }
    };
    return ArrayObservable;
}(Observable_1.Observable));
exports.ArrayObservable = ArrayObservable;
//# sourceMappingURL=ArrayObservable.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(1);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var EmptyObservable = (function (_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
        _super.call(this);
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits a complete notification.
     *
     * <span class="informal">Just emits 'complete', and nothing else.
     * </span>
     *
     * <img src="./img/empty.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the complete notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then complete.</caption>
     * var result = Rx.Observable.empty().startWith(7);
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
     * );
     * result.subscribe(x => console.log(x));
     *
     * // Results in the following to the console:
     * // x is equal to the count on the interval eg(0,1,2,3,...)
     * // x will occur every 1000ms
     * // if x % 2 is equal to 1 print abc
     * // if x % 2 is not equal to 1 nothing will be output
     *
     * @see {@link create}
     * @see {@link never}
     * @see {@link of}
     * @see {@link throw}
     *
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the complete notification.
     * @return {Observable} An "empty" Observable: emits only the complete
     * notification.
     * @static true
     * @name empty
     * @owner Observable
     */
    EmptyObservable.create = function (scheduler) {
        return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function (arg) {
        var subscriber = arg.subscriber;
        subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function (subscriber) {
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
        }
        else {
            subscriber.complete();
        }
    };
    return EmptyObservable;
}(Observable_1.Observable));
exports.EmptyObservable = EmptyObservable;
//# sourceMappingURL=EmptyObservable.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(1);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ScalarObservable = (function (_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
        _super.call(this);
        this.value = value;
        this.scheduler = scheduler;
        this._isScalar = true;
        if (scheduler) {
            this._isScalar = false;
        }
    }
    ScalarObservable.create = function (value, scheduler) {
        return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function (state) {
        var done = state.done, value = state.value, subscriber = state.subscriber;
        if (done) {
            subscriber.complete();
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        state.done = true;
        this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function (subscriber) {
        var value = this.value;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ScalarObservable.dispatch, 0, {
                done: false, value: value, subscriber: subscriber
            });
        }
        else {
            subscriber.next(value);
            if (!subscriber.closed) {
                subscriber.complete();
            }
        }
    };
    return ScalarObservable;
}(Observable_1.Observable));
exports.ScalarObservable = ScalarObservable;
//# sourceMappingURL=ScalarObservable.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__(57);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(2);
var async_1 = __webpack_require__(68);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(2);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
        this.predicate = predicate;
    }
    // the try catch block below is left specifically for
    // optimization and perf reasons. a tryCatcher is not necessary here.
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(2);
var EmptyError_1 = __webpack_require__(70);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
}
exports.first = first;
var FirstOperator = (function () {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    FirstOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FirstSubscriber = (function (_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.resultSelector = resultSelector;
        this.defaultValue = defaultValue;
        this.source = source;
        this.index = 0;
        this.hasCompleted = false;
        this._emitted = false;
    }
    FirstSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this._tryPredicate(value, index);
        }
        else {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._tryPredicate = function (value, index) {
        var result;
        try {
            result = this.predicate(value, index, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this._emit(value, index);
        }
    };
    FirstSubscriber.prototype._emit = function (value, index) {
        if (this.resultSelector) {
            this._tryResultSelector(value, index);
            return;
        }
        this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
        var result;
        try {
            result = this.resultSelector(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function (value) {
        var destination = this.destination;
        if (!this._emitted) {
            this._emitted = true;
            destination.next(value);
            destination.complete();
            this.hasCompleted = true;
        }
    };
    FirstSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
            destination.next(this.defaultValue);
            destination.complete();
        }
        else if (!this.hasCompleted) {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return FirstSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=first.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(2);
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    if (typeof project !== 'function') {
        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        _super.call(this, destination);
        this.project = project;
        this.count = 0;
        this.thisArg = thisArg || this;
    }
    // NOTE: This looks unoptimized, but it's actually purposefully NOT
    // using try/catch optimizations.
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(16);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(6);
var Action_1 = __webpack_require__(65);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(53);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(66);
var AsyncScheduler_1 = __webpack_require__(67);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(6);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.observable = getSymbolObservable(root_1.root);
/**
 * @deprecated use observable instead
 */
exports.$$observable = exports.observable;
//# sourceMappingURL=observable.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an Observable or a sequence was queried but has no
 * elements.
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link single}
 *
 * @class EmptyError
 */
var EmptyError = (function (_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
        var err = _super.call(this, 'no elements in sequence');
        this.name = err.name = 'EmptyError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return EmptyError;
}(Error));
exports.EmptyError = EmptyError;
//# sourceMappingURL=EmptyError.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subscriber_1 = __webpack_require__(2);
var rxSubscriber_1 = __webpack_require__(19);
var Observer_1 = __webpack_require__(15);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errorObject_1 = __webpack_require__(20);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(44);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(45);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(46);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(47);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })
/******/ ]);
});
//# sourceMappingURL=ngx-chips.map