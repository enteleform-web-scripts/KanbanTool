/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
const CSS_1 = __webpack_require__(16);
CSS_1.CSS.apply(__dirname);
const Settings_1 = __webpack_require__(4);
const Entry_1 = __webpack_require__(19);
const Layout_1 = __webpack_require__(21);
const Position_1 = __webpack_require__(9);
const Module_BaseClasses_1 = __webpack_require__(27);
class FunctionBar extends Module_BaseClasses_1.Module {
    constructor({ position, autoMap_KeyBindings, keyBinding_Modifiers, entryGroups }) {
        super();
        this.position = position;
        this.autoMap_KeyBindings = autoMap_KeyBindings;
        this.keyBinding_Modifiers = keyBinding_Modifiers;
        this.entryGroups = entryGroups;
    }
    static load(...functionBars) {
        functionBars.forEach(functionBar => {
            functionBar.initialize();
        });
    }
    initialize() {
        this._validate_AutoMapped_Rows();
        this.layout = new Layout_1.Layout(this.entryGroups, this.position);
        this.entryGroups.forEach((group, groupIndex) => {
            group.forEach((entry, entryIndex) => {
                const keyBinding = entry.initialize_KeyBinding(this.autoMap_KeyBindings, this.keyBinding_Modifiers, groupIndex, entryIndex);
                this.layout.add_Cell(entry, groupIndex, keyBinding);
            });
        });
        this.layout.update_OriginalLayout();
    }
    _validate_AutoMapped_Rows() {
        if (!this.autoMap_KeyBindings) {
            return;
        }
        const valid_GroupCount = (this.entryGroups.length <= Settings_1.autoMapped_Key_Rows.length);
        const valid_KeyCounts = this.entryGroups.every((group, i) => (group.length <= Settings_1.autoMapped_Key_Rows[i].length));
        if (!(valid_GroupCount && valid_KeyCounts)) {
            const position = this.position.valueOf();
            throw new Error(`
				Invalid FunctionBar Group/Entry Count @ ${position} Bar
			`);
        }
    }
}
FunctionBar.Entry = Entry_1.Entry;
FunctionBar.Position = Position_1.Position;
FunctionBar.Show = __webpack_require__(10).default;
FunctionBar.Hide = __webpack_require__(29).default;
exports.FunctionBar = FunctionBar;
(function (FunctionBar) {
    let KeyBinding_Mode;
    (function (KeyBinding_Mode) {
        KeyBinding_Mode[KeyBinding_Mode["Automatic"] = 0] = "Automatic";
        KeyBinding_Mode[KeyBinding_Mode["Manual"] = 1] = "Manual";
    })(KeyBinding_Mode = FunctionBar.KeyBinding_Mode || (FunctionBar.KeyBinding_Mode = {}));
})(FunctionBar = exports.FunctionBar || (exports.FunctionBar = {}));

/* WEBPACK VAR INJECTION */}.call(this, "__src__\\Extensions\\FunctionBar"))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanTool = window.KT;
exports.activeBoard = exports.KanbanTool.boards.models[0];
exports.KanbanTool.activeBoard = exports.activeBoard;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


		function _get_ElapsedTime(startTime) {
    const elapsed_MS = (new Date().getTime() - startTime);
    const days = Math.floor(((elapsed_MS / 1000) / 86400));
    const hours = Math.floor(((elapsed_MS / 1000) / 3600) % 24);
    const minutes = Math.floor(((elapsed_MS / 1000) / 60) % 60);
    const seconds = Math.floor((elapsed_MS / 1000) % 60);
    const milliseconds = Math.floor(elapsed_MS % 1000);
    const elapsedTime = (""
        + _get_ElapsedTime_Segment("day", days, [], false)
        + _get_ElapsedTime_Segment("hour", hours, [days], false)
        + _get_ElapsedTime_Segment("minute", minutes, [days, hours], false)
        + _get_ElapsedTime_Segment("second", seconds, [days, hours, minutes], true));
    return elapsedTime;
}
		function _get_ElapsedTime_Segment(title, value, parents, mandatory) {
    const parentValues_Exist = ((parents.length > 0)
        && (Math.max(...parents) > 0));
    if (mandatory || value || parentValues_Exist) {
        const prefix = (parentValues_Exist)
            ? ",  "
            : "";
        title =
            (value == 1)
                ? title
                : `${title}s`;
        return `${prefix}${value}:${title}`;
    }
    else {
        return "";
    }
}

		const elapsedTime = _get_ElapsedTime(1555420421752)

		const line_1  = `│  Built  {  ${elapsedTime}  }  Ago  │`
		const line_2  = `│  At     9:13:41 AM`.padEnd((line_1.length - 1)) + "│"
		const divider = "".padStart((line_1.length - 2), "─")

		console.log(""
			+ `\n┌${divider}┐\n`
			+ `${line_1}\n`
			+ `${line_2}\n`
			+ `└${divider}┘\n`
		)
	

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __main__1 = __webpack_require__(6);
exports.css_Timeout_MS = 500;
exports.autoMapped_Key_Rows = __main__1.KeyBinding.alphanumericKey_Rows;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const KanbanTool_1 = __webpack_require__(2);
const $ = __webpack_require__(0);
class TaskContainer {
    constructor({ type, domIndex, modelIndex, model, element }) {
        this.children = [];
        this.type = type;
        this.domIndex = domIndex;
        this.modelIndex = modelIndex;
        this.model = model;
        this._clickableElement = element;
        this._collapsibleElement =
            (this.type == TaskContainer.Type.Row)
                ? $(element).parent()
                : element;
    }
    get parents() {
        let child = this;
        const parents = [];
        while (child.parent) {
            parents.unshift(child.parent);
            child = child.parent;
        }
        return parents;
    }
    get descendants() {
        const descendants = [];
        function add(container) {
            container.children.forEach(child => {
                descendants.push(child);
                add(child);
            });
        }
        add(this);
        return descendants;
    }
    get name() { return this.model.attributes.name; }
    get path() {
        return ((this.type == TaskContainer.Type.Row)
            ? this.name
            : this._columnPath);
    }
    get tasks() {
        return (KanbanTool_1.activeBoard.tasks().filter(task => {
            const taskContainer = (this.type == TaskContainer.Type.Row)
                ? task.swimlane()
                : task.workflowStage();
            return (taskContainer === this.model);
        }));
    }
    get is_Collapsed() { return $(this._collapsibleElement).hasClass("kt-collapsed"); }
    get is_Empty() { return (this.tasks.length == 0); }
    get _columnPath() {
        const tree = [...this.parents, this];
        const names = tree.map(container => container.name);
        return names.join("\\");
    }
    add_Child(child) {
        child.parent = this;
        this.children.push(child);
    }
    show() {
        if (this.is_Collapsed) {
            this._click();
        }
    }
    hide() {
        if (!this.is_Collapsed) {
            this._click();
        }
    }
    _click() { this._clickableElement.click(); }
}
exports.TaskContainer = TaskContainer;
(function (TaskContainer) {
    let Type;
    (function (Type) {
        Type[Type["Row"] = 0] = "Row";
        Type[Type["Column"] = 1] = "Column";
    })(Type = TaskContainer.Type || (TaskContainer.Type = {}));
})(TaskContainer = exports.TaskContainer || (exports.TaskContainer = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KeyGroups_1 = __webpack_require__(7);
const hotkeys_js_1 = __importDefault(__webpack_require__(8));
hotkeys_js_1.default.filter = _disable_DefaultFilters;
class KeyBinding {
    static get alphanumericKey_Rows() { return [...KeyGroups_1.alphanumericKey_Rows]; }
    static get characterKey_Rows() { return [...KeyGroups_1.characterKey_Rows]; }
    static add(hotKeys, arg_2, arg_3) {
        const hotKeys_String = _convert_HotKeys_ToString(hotKeys);
        const { callback, options } = _get_BindArguments(arg_2, arg_3);
        if (callback) {
            _add_KeyBinding(hotKeys_String, callback, options);
        }
        else {
            return _get_Decorator(hotKeys_String, options);
        }
    }
}
exports.KeyBinding = KeyBinding;
window.KeyBinding = KeyBinding;
const _BindOptions_Defaults = { preventDefault: false };
function _disable_DefaultFilters(event) { return true; }
function _get_BindArguments(arg_2, arg_3) {
    let callback, options;
    if (arg_2 instanceof Function)
        callback = arg_2;
    if (arg_3)
        options = arg_3;
    else if (arg_2)
        options = arg_2;
    options = { ..._BindOptions_Defaults, ...options };
    return { callback, options };
}
function _add_KeyBinding(hotKeys, callback, options) {
    hotkeys_js_1.default(hotKeys, (event) => {
        if (options.preventDefault) {
            event.preventDefault;
        }
        console.log(`[KeyBinding] '${hotKeys}'`);
        callback(event);
    });
}
function _get_Decorator(hotKeys, options) {
    return (target, propertyKey, descriptor) => {
        _add_KeyBinding(hotKeys, descriptor.value, options);
        return descriptor;
    };
}
function _convert_HotKeys_ToString(keys) {
    return ((keys.constructor === Array)
        ? keys.join(", ")
        : keys);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumericKey_Rows = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
];
exports.characterKey_Rows = [
    ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
];


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * hotkeys-js v3.6.2
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2019 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */

var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false;

// 绑定事件
function addEvent(object, event, method) {
  if (object.addEventListener) {
    object.addEventListener(event, method, false);
  } else if (object.attachEvent) {
    object.attachEvent('on' + event, function () {
      method(window.event);
    });
  }
}

// 修饰键转换成对应的键码
function getMods(modifier, key) {
  var mods = key.slice(0, key.length - 1);
  for (var i = 0; i < mods.length; i++) {
    mods[i] = modifier[mods[i].toLowerCase()];
  }return mods;
}

// 处理传的key字符串转换成数组
function getKeys(key) {
  if (!key) key = '';

  key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等
  var keys = key.split(','); // 同时设置多个快捷键，以','分割
  var index = keys.lastIndexOf('');

  // 快捷键可能包含','，需特殊处理
  for (; index >= 0;) {
    keys[index - 1] += ',';
    keys.splice(index, 1);
    index = keys.lastIndexOf('');
  }

  return keys;
}

// 比较修饰键的数组
function compareArray(a1, a2) {
  var arr1 = a1.length >= a2.length ? a1 : a2;
  var arr2 = a1.length >= a2.length ? a2 : a1;
  var isIndex = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }
  return isIndex;
}

var _keyMap = { // 特殊键
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  '\'': 222,
  '[': 219,
  ']': 221,
  '\\': 220
};

var _modifier = { // 修饰键
  '⇧': 16,
  shift: 16,
  '⌥': 18,
  alt: 18,
  option: 18,
  '⌃': 17,
  ctrl: 17,
  control: 17,
  '⌘': isff ? 224 : 91,
  cmd: isff ? 224 : 91,
  command: isff ? 224 : 91
};
var _downKeys = []; // 记录摁下的绑定键
var modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey'
};
var _mods = { 16: false, 18: false, 17: false };
var _handlers = {};

// F1~F12 特殊键
for (var k = 1; k < 20; k++) {
  _keyMap['f' + k] = 111 + k;
}

// 兼容Firefox处理
modifierMap[isff ? 224 : 91] = 'metaKey';
_mods[isff ? 224 : 91] = false;

var _scope = 'all'; // 默认热键范围
var isBindElement = false; // 是否绑定节点

// 返回键码
var code = function code(x) {
  return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
};

// 设置获取当前范围（默认为'所有'）
function setScope(scope) {
  _scope = scope || 'all';
}
// 获取当前范围
function getScope() {
  return _scope || 'all';
}
// 获取摁下绑定键的键值
function getPressedKeyCodes() {
  return _downKeys.slice(0);
}

// 表单控件控件判断 返回 Boolean
function filter(event) {
  var target = event.target || event.srcElement;
  var tagName = target.tagName;
  // 忽略这些情况下快捷键无效

  return !(tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA' || target.isContentEditable);
}

// 判断摁下的键是否为某个键，返回true或者false
function isPressed(keyCode) {
  if (typeof keyCode === 'string') {
    keyCode = code(keyCode); // 转换成键码
  }
  return _downKeys.indexOf(keyCode) !== -1;
}

// 循环删除handlers中的所有 scope(范围)
function deleteScope(scope, newScope) {
  var handlers = void 0;
  var i = void 0;

  // 没有指定scope，获取scope
  if (!scope) scope = getScope();

  for (var key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length;) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
      }
    }
  }

  // 如果scope被删除，将scope重置为all
  if (getScope() === scope) setScope(newScope || 'all');
}

// 清除修饰键
function clearModifier(event) {
  var key = event.keyCode || event.which || event.charCode;
  var i = _downKeys.indexOf(key);

  // 从列表中清除按压过的键
  if (i >= 0) {
    _downKeys.splice(i, 1);
  }
  // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题
  if (event.key && event.key.toLowerCase() === 'meta') {
    _downKeys.splice(0, _downKeys.length);
  }

  // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除
  if (key === 93 || key === 224) key = 91;
  if (key in _mods) {
    _mods[key] = false;

    // 将修饰键重置为false
    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = false;
    }
  }
}

// 解除绑定某个范围的快捷键
function unbind(key, scope, method) {
  var multipleKeys = getKeys(key);
  var keys = void 0;
  var mods = [];
  var obj = void 0;
  // 通过函数判断，是否解除绑定
  // https://github.com/jaywcjlove/hotkeys/issues/44
  if (typeof scope === 'function') {
    method = scope;
    scope = 'all';
  }

  for (var i = 0; i < multipleKeys.length; i++) {
    // 将组合快捷键拆分为数组
    keys = multipleKeys[i].split('+');

    // 记录每个组合键中的修饰键的键码 返回数组
    if (keys.length > 1) mods = getMods(_modifier, keys);

    // 获取除修饰键外的键值key
    key = keys[keys.length - 1];
    key = key === '*' ? '*' : code(key);

    // 判断是否传入范围，没有就获取范围
    if (!scope) scope = getScope();

    // 如何key不在 _handlers 中返回不做处理
    if (!_handlers[key]) return;

    // 清空 handlers 中数据，
    // 让触发快捷键键之后没有事件执行到达解除快捷键绑定的目的
    for (var r = 0; r < _handlers[key].length; r++) {
      obj = _handlers[key][r];
      // 通过函数判断，是否解除绑定，函数相等直接返回
      var isMatchingMethod = method ? obj.method === method : true;

      // 判断是否在范围内并且键值相同
      if (isMatchingMethod && obj.scope === scope && compareArray(obj.mods, mods)) {
        _handlers[key][r] = {};
      }
    }
  }
}

// 对监听对应快捷键的回调函数进行处理
function eventHandler(event, handler, scope) {
  var modifiersMatch = void 0;

  // 看它是否在当前范围
  if (handler.scope === scope || handler.scope === 'all') {
    // 检查是否匹配修饰符（如果有返回true）
    modifiersMatch = handler.mods.length > 0;

    for (var y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) modifiersMatch = false;
      }
    }

    // 调用处理程序，如果是修饰键不做处理
    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
}

// 处理keydown事件
function dispatch(event) {
  var asterisk = _handlers['*'];
  var key = event.keyCode || event.which || event.charCode;

  // 搜集绑定的键
  if (_downKeys.indexOf(key) === -1) _downKeys.push(key);

  // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
  // Webkit左右command键值不一样
  if (key === 93 || key === 224) key = 91;

  if (key in _mods) {
    _mods[key] = true;

    // 将特殊字符的key注册到 hotkeys 上
    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = true;
    }

    if (!asterisk) return;
  }

  // 将modifierMap里面的修饰键绑定到event中
  for (var e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }

  // 表单控件过滤 默认表单控件不触发快捷键
  if (!hotkeys.filter.call(this, event)) return;

  // 获取范围 默认为all
  var scope = getScope();

  // 对任何快捷键都需要做的处理
  if (asterisk) {
    for (var i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === 'keydown' && !asterisk[i].keyup || event.type === 'keyup' && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope);
      }
    }
  }
  // key 不在_handlers中返回
  if (!(key in _handlers)) return;

  for (var _i = 0; _i < _handlers[key].length; _i++) {
    if (event.type === 'keydown' && !_handlers[key][_i].keyup || event.type === 'keyup' && _handlers[key][_i].keyup) {
      if (_handlers[key][_i].key) {
        var keyShortcut = _handlers[key][_i].key.split('+');
        var _downKeysCurrent = []; // 记录当前按键键值
        for (var a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }
        _downKeysCurrent = _downKeysCurrent.sort();
        if (_downKeysCurrent.join('') === _downKeys.sort().join('')) {
          // 找到处理内容
          eventHandler(event, _handlers[key][_i], scope);
        }
      }
    }
  }
}

function hotkeys(key, option, method) {
  var keys = getKeys(key); // 需要处理的快捷键列表
  var mods = [];
  var scope = 'all'; // scope默认为all，所有范围都有效
  var element = document; // 快捷键事件绑定节点
  var i = 0;

  // 对为设定范围的判断
  if (method === undefined && typeof option === 'function') {
    method = option;
  }

  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (option.scope) scope = option.scope; // eslint-disable-line
    if (option.element) element = option.element; // eslint-disable-line
  }

  if (typeof option === 'string') scope = option;

  // 对于每个快捷键进行处理
  for (; i < keys.length; i++) {
    key = keys[i].split('+'); // 按键列表
    mods = [];

    // 如果是组合快捷键取得组合快捷键
    if (key.length > 1) mods = getMods(_modifier, key);

    // 将非修饰键转化为键码
    key = key[key.length - 1];
    key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键

    // 判断key是否在_handlers中，不在就赋一个空数组
    if (!(key in _handlers)) _handlers[key] = [];
    _handlers[key].push({
      keyup: option.keyup,
      scope: scope,
      mods: mods,
      shortcut: keys[i],
      method: method,
      key: keys[i]
    });
  }
  // 在全局document上设置快捷键
  if (typeof element !== 'undefined' && !isBindElement) {
    isBindElement = true;
    addEvent(element, 'keydown', function (e) {
      dispatch(e);
    });
    addEvent(element, 'keyup', function (e) {
      dispatch(e);
      clearModifier(e);
    });
  }
}

var _api = {
  setScope: setScope,
  getScope: getScope,
  deleteScope: deleteScope,
  getPressedKeyCodes: getPressedKeyCodes,
  isPressed: isPressed,
  filter: filter,
  unbind: unbind
};
for (var a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}

if (typeof window !== 'undefined') {
  var _hotkeys = window.hotkeys;
  hotkeys.noConflict = function (deep) {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }
    return hotkeys;
  };
  window.hotkeys = hotkeys;
}

/* harmony default export */ __webpack_exports__["default"] = (hotkeys);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Position;
(function (Position) {
    Position[Position["Left"] = 0] = "Left";
    Position[Position["Right"] = 1] = "Right";
    Position[Position["Top"] = 2] = "Top";
    Position[Position["Bottom"] = 3] = "Bottom";
})(Position = exports.Position || (exports.Position = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TaskContainer_1 = __webpack_require__(5);
const get_Rows_1 = __webpack_require__(11);
const get_Columns_1 = __webpack_require__(12);
const Glob_1 = __webpack_require__(28);
const $ = __webpack_require__(0);
class default_1 {
    static rows({ include, exclude }) {
        _show({
            type: _Type.Row,
            targets: (include) ? include : exclude,
            exclude: (exclude) ? true : false,
        });
    }
    static columns({ include, exclude }) {
        _show({
            type: _Type.Column,
            targets: (include) ? include : exclude,
            exclude: (exclude) ? true : false,
        });
    }
    static allRows() { _show({ type: _Type.Row, targets: ["**\\*"], exclude: false }); }
    static allColumns() { _show({ type: _Type.Column, targets: ["**\\*"], exclude: false }); }
}
exports.default = default_1;
const _Type = TaskContainer_1.TaskContainer.Type;
function _show({ type, targets, exclude, }) {
    const containers = (type == _Type.Row)
        ? get_Rows_1.get_Rows()
        : get_Columns_1.get_Columns();
    _set_Visibility(containers, targets, exclude);
}
function _set_Visibility(containers, targets, exclude) {
    const visibilityMap = _build_VisibilityMap(containers, targets, exclude);
    visibilityMap.forEach(({ container, show_Element }) => {
        if (show_Element) {
            container.show();
        }
        else {
            container.hide();
        }
    });
}
function _build_VisibilityMap(containers, targets, exclude) {
    const visibilityMap = containers.map(container => ({ container, show_Element: false }));
    containers.forEach((container, i) => {
        const oneBased_Index = (container.domIndex + 1);
        const is_Target = (targets.includes(oneBased_Index)
            || targets.some(target => _match_Glob(container, target)));
        if (is_Target) {
            const containerTree = (exclude)
                ? [container, ...container.children]
                : [container, ...container.parents];
            visibilityMap.forEach(entry => {
                if (containerTree.includes(entry.container)) {
                    entry.show_Element = true;
                }
            });
        }
    });
    if (exclude) {
        visibilityMap.forEach(entry => {
            entry.show_Element = !(entry.show_Element);
        });
    }
    return visibilityMap;
}
function _match_Glob(container, target) {
    if (Number(target)) {
        return false;
    }
    else {
        return new Glob_1.Glob(target.toString()).match(container.path);
    }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TaskContainer_1 = __webpack_require__(5);
const KanbanTool_1 = __webpack_require__(2);
const $ = __webpack_require__(0);
function get_Rows() {
    const headerElements = $.find("kt-board > tbody > tr > th");
    const models = KanbanTool_1.activeBoard.swimlanes().toArray();
    const rows = headerElements.map((element, i) => new TaskContainer_1.TaskContainer({
        type: TaskContainer_1.TaskContainer.Type.Row,
        modelIndex: i,
        domIndex: i,
        model: models[i],
        element: element,
    }));
    return rows;
}
exports.get_Rows = get_Rows;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TaskContainer_1 = __webpack_require__(5);
const KanbanTool_1 = __webpack_require__(2);
function get_Columns() {
    const models = KanbanTool_1.activeBoard.workflowStages()
        .slice(1);
    const sortedModels = _get_SortedModels();
    const headerElements = _get_HeaderElements();
    const columns = sortedModels.map((model, i) => (new TaskContainer_1.TaskContainer({
        type: TaskContainer_1.TaskContainer.Type.Column,
        domIndex: i,
        modelIndex: models.indexOf(model),
        model: model,
        element: headerElements[i],
    })));
    _update_ColumnRelationships(columns);
    return columns;
}
exports.get_Columns = get_Columns;
function _get_HeaderElements() {
    const rows = $("kt-board > thead").children().toArray();
    const swimLane_Count = KanbanTool_1.activeBoard.swimlanes().length;
    const elements = rows.flatMap(row => $(row).children().toArray());
    if (swimLane_Count > 1) {
        elements.splice(0, 1);
    }
    return elements;
}
function _get_SortedModels() {
    const rootModel = KanbanTool_1.activeBoard.workflowStages().toArray()[0];
    const sortedModels = [];
    let row = rootModel.children();
    while (row.length > 0) {
        sortedModels.push(...row);
        row = row.flatMap(model => model.children());
    }
    return sortedModels;
}
function _update_ColumnRelationships(columns) {
    columns.forEach(parent => {
        columns.forEach(child => {
            if (child.model.parent() == parent.model) {
                parent.add_Child(child);
            }
        });
    });
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(15);
const __Main__1 = __webpack_require__(1);
__Main__1.FunctionBar.load(__webpack_require__(31).default, __webpack_require__(32).default, __webpack_require__(33).default, __webpack_require__(34).default);
__webpack_require__(35);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(__webpack_require__(0));
const DELETE_KEYCODE = 46;
const selector__CheckList_Item = "kt-taskview > form > div.kt-taskview-content > kt-checklist > li > .kt-checklist_item_content";
const selector__CheckList_Item_SiblingsPrefix = "#show > kt-cover > kt-taskview > form > div.kt-taskview-content > kt-checklist";
let checkList_Item = null;
jquery_1.default(document).on("mouseover", selector__CheckList_Item, (event) => {
    checkList_Item = event.currentTarget;
});
jquery_1.default(document).on("mouseout", selector__CheckList_Item, (event) => {
    checkList_Item = null;
});
jquery_1.default(document).on("keydown", (event) => {
    if (checkList_Item && (event.keyCode == DELETE_KEYCODE)) {
        const divIndex = get_DivIndex(checkList_Item);
        const button__Delete = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > a.kt-remove > i.kt-icon-trash`);
        button__Delete.click();
    }
});
jquery_1.default(document).on("click", selector__CheckList_Item, (event) => {
    if (event.ctrlKey) {
        return;
    }
    event.preventDefault();
    const div__CheckList_Item = event.currentTarget;
    const divIndex = get_DivIndex(div__CheckList_Item);
    setTimeout(() => {
        const checkBox = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > input[type='checkbox']`);
        checkBox.click();
    }, 200);
    setTimeout(() => {
        const button__Edit = document.querySelector(`${selector__CheckList_Item_SiblingsPrefix} > li:nth-child(${divIndex}) > a.kt-edit > i.kt-icon-pencil-1`);
        button__Edit.click();
    }, 700);
});
function get_DivIndex(checkList_Item) {
    return (jquery_1.default(checkList_Item).parent().index() + 1);
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Settings = __webpack_require__(17);
const _get_FileText_1 = __webpack_require__(18);
class CSS {
    static async apply(modulePath) {
        const url = _get_ModuleCSS_URL(modulePath);
        _get_FileText_1.get_FileText(url)
            .then(css => {
            $("<style>")
                .prop("type", "text/css")
                .html(css)
                .appendTo("head");
        });
    }
}
exports.CSS = CSS;
function _get_ModuleCSS_URL(modulePath) {
    const relativePath = _remove_SourceDirectory(modulePath);
    const cssPath = `css/${relativePath}.css`;
    const url = _add_BaseURL(cssPath);
    return url;
}
function _remove_SourceDirectory(relativePath) {
    return (relativePath
        .split("\\")
        .slice(1)
        .join("/"));
}
function _add_BaseURL(relativePath) {
    const baseURL = Settings.baseURL;
    let url = relativePath.replace(/^\.?\/?/, `${baseURL}/`);
    if (!url.startsWith(baseURL)) {
        url = `${baseURL}/${relativePath}`;
    }
    return url;
}


/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = {"baseURL":"https://enteleform-extensions.github.io/KanbanTool","_":""};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
async function get_FileText(url) {
    const result = { value: null };
    await _get_FileText(url, result);
    return result.value;
}
exports.get_FileText = get_FileText;
async function _get_FileText(url, result) {
    var file = new XMLHttpRequest();
    file.open("GET", url, false);
    file.onreadystatechange = () => {
        const fileAcquired = ((file.readyState === 4)
            && ((file.status === 200) || (file.status == 0)));
        if (fileAcquired) {
            result.value = file.responseText;
        }
        else {
            throw new Error(`
				Unable to resolve URL:
					'${url}'
 			`);
        }
    };
    file.send(null);
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Settings_1 = __webpack_require__(4);
const __Main__1 = __webpack_require__(20);
class Entry {
    constructor({ name, color, keyBinding, on_Load, }) {
        this.name = name;
        this.color = color;
        this.keyBinding = keyBinding;
        this.on_Load = on_Load;
    }
    initialize_KeyBinding(autoMap_KeyBindings, keyBinding_Modifiers, groupIndex, entryIndex) {
        const keyBinding = this._get_Entry_KeyBinding(autoMap_KeyBindings, groupIndex, entryIndex);
        if (keyBinding) {
            this._add_KeyBinding(keyBinding, keyBinding_Modifiers);
        }
        return keyBinding;
    }
    _get_Entry_KeyBinding(autoMap_KeyBindings, groupIndex, entryIndex) {
        let keyBinding = null;
        if (autoMap_KeyBindings) {
            keyBinding = Settings_1.autoMapped_Key_Rows[groupIndex][entryIndex];
        }
        else if (this.keyBinding) {
            keyBinding = this.keyBinding;
        }
        return keyBinding;
    }
    _add_KeyBinding(keyBinding, keyBinding_Modifiers) {
        if (keyBinding_Modifiers) {
            keyBinding =
                [...keyBinding_Modifiers, keyBinding]
                    .join("+");
        }
        __Main__1.KeyBinding.add(keyBinding, this.on_Load, { preventDefault: true });
    }
}
exports.Entry = Entry;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KeyGroups_1 = __webpack_require__(7);
const hotkeys_js_1 = __importDefault(__webpack_require__(8));
hotkeys_js_1.default.filter = _disable_DefaultFilters;
class KeyBinding {
    static get alphanumericKey_Rows() { return [...KeyGroups_1.alphanumericKey_Rows]; }
    static get characterKey_Rows() { return [...KeyGroups_1.characterKey_Rows]; }
    static add(hotKeys, arg_2, arg_3) {
        const hotKeys_String = _convert_HotKeys_ToString(hotKeys);
        const { callback, options } = _get_BindArguments(arg_2, arg_3);
        if (callback) {
            _add_KeyBinding(hotKeys_String, callback, options);
        }
        else {
            return _get_Decorator(hotKeys_String, options);
        }
    }
}
exports.KeyBinding = KeyBinding;
window.KeyBinding = KeyBinding;
const _BindOptions_Defaults = { preventDefault: false };
function _disable_DefaultFilters(event) { return true; }
function _get_BindArguments(arg_2, arg_3) {
    let callback, options;
    if (arg_2 instanceof Function)
        callback = arg_2;
    if (arg_3)
        options = arg_3;
    else if (arg_2)
        options = arg_2;
    options = { ..._BindOptions_Defaults, ...options };
    return { callback, options };
}
function _add_KeyBinding(hotKeys, callback, options) {
    hotkeys_js_1.default(hotKeys, (event) => {
        if (options.preventDefault) {
            event.preventDefault;
        }
        console.log(`[KeyBinding] '${hotKeys}'`);
        callback(event);
    });
}
function _get_Decorator(hotKeys, options) {
    return (target, propertyKey, descriptor) => {
        _add_KeyBinding(hotKeys, descriptor.value, options);
        return descriptor;
    };
}
function _convert_HotKeys_ToString(keys) {
    return ((keys.constructor === Array)
        ? keys.join(", ")
        : keys);
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pug_1 = __importDefault(__webpack_require__(22));
const _layoutFile = __webpack_require__(25);
const layoutHTML = pug_1.default.compileFile(_layoutFile);
console.log(">>>", layoutHTML);
const cssVariables = __webpack_require__(26);
const Settings_1 = __webpack_require__(4);
const Position_1 = __webpack_require__(9);
const $ = __webpack_require__(0);
class Layout {
    constructor(entryGroups, position) {
        this.position = position;
        this._build(entryGroups);
    }
    _build(entryGroups) {
        const positionClass = _BarPosition_CSS_Map[this.position];
        this.container = $("<div>", { "class": [cssVariables.root, positionClass].join(" ") });
        $("body").append(this.container);
        this.rows = [];
        entryGroups.forEach(group => {
            const row = $("<div>", { "class": cssVariables.legendRow });
            this.container.append(row);
            this.rows.push(row);
        });
    }
    add_Cell(entry, groupIndex, keyBinding) {
        const cell = $("<div>", { "class": cssVariables.legendCell });
        let text = entry.name;
        if (keyBinding) {
            text = `[${keyBinding.toUpperCase()}] &nbsp;${text}`;
        }
        cell.html(text);
        cell.on("click", entry.on_Load);
        this.rows[groupIndex].append(cell);
    }
    update_OriginalLayout() {
        setTimeout(() => {
            const $container = $(this.container);
            const $board = $("#show > div.kt-side-panel-slide");
            if (this.position == Position_1.Position.Top) {
                _set_Style(".navbar", "margin-top", `${$container.height()}px`);
                _set_Style($board, "margin-top", `${$container.height()}px`);
            }
            else if (this.position == Position_1.Position.Bottom) {
                const padding = 10;
                _set_Style($board, "margin-bottom", `${$container.height() + padding}px`);
            }
        }, Settings_1.css_Timeout_MS);
    }
}
exports.Layout = Layout;
const _BarPosition_CSS_Map = {
    [Position_1.Position.Left]: cssVariables.leftBar,
    [Position_1.Position.Right]: cssVariables.rightBar,
    [Position_1.Position.Top]: cssVariables.topBar,
    [Position_1.Position.Bottom]: cssVariables.bottomBar,
};
function _set_Style(element, propertyName, propertyValue) { $(element)[0].style.setProperty(propertyName, propertyValue, "important"); }


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;require=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return require(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n||e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";function r(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type||"ArrowFunctionExpression"===e.type||"Program"===e.type}function i(e){return"BlockStatement"===e.type||r(e)}function o(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type}function s(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type}function a(e){return u.parse(e,{allowReturnOutsideFunction:!0,allowImportExportEverywhere:!0,allowHashBang:!0})}var u=e("acorn"),c=e("acorn/dist/walk");t.exports=function(e){function t(e,t){var n=e.name;if("undefined"!==n){for(var r=0;r<t.length;r++){if("arguments"===n&&o(t[r]))return;if(t[r].locals&&n in t[r].locals)return}e.parents=t,u.push(e)}}var n,u=[];if(!(n="string"==typeof e?a(e):e)||"object"!=typeof n||"Program"!==n.type)throw new TypeError("Source must be either a string of JavaScript or an acorn AST");var l=function(e){var t=e;t.locals=t.locals||{},e.params.forEach(function(e){p(e,t)}),e.id&&(t.locals[e.id.name]=!0)},p=function(e,t){switch(e.type){case"Identifier":t.locals[e.name]=!0;break;case"ObjectPattern":e.properties.forEach(function(e){p(e.value,t)});break;case"ArrayPattern":e.elements.forEach(function(e){e&&p(e,t)});break;case"RestElement":p(e.argument,t);break;case"AssignmentPattern":p(e.left,t);break;default:throw new Error("Unrecognized pattern type: "+e.type)}},h=function(e,t){n.locals=n.locals||{},n.locals[e.local.name]=!0};c.ancestor(n,{VariableDeclaration:function(e,t){for(var n=null,o=t.length-1;o>=0&&null===n;o--)("var"===e.kind?r(t[o]):i(t[o]))&&(n=t[o]);n.locals=n.locals||{},e.declarations.forEach(function(e){p(e.id,n)})},FunctionDeclaration:function(e,t){for(var n=null,i=t.length-2;i>=0&&null===n;i--)r(t[i])&&(n=t[i]);n.locals=n.locals||{},n.locals[e.id.name]=!0,l(e)},Function:l,ClassDeclaration:function(e,t){for(var n=null,i=t.length-2;i>=0&&null===n;i--)r(t[i])&&(n=t[i]);n.locals=n.locals||{},n.locals[e.id.name]=!0},TryStatement:function(e){null!==e.handler&&(e.handler.locals=e.handler.locals||{},e.handler.locals[e.handler.param.name]=!0)},ImportDefaultSpecifier:h,ImportSpecifier:h,ImportNamespaceSpecifier:h}),c.ancestor(n,{VariablePattern:t,Identifier:t,ThisExpression:function(e,t){for(var n=0;n<t.length;n++)if(s(t[n]))return;e.parents=t,u.push(e)}});var f={};return u.forEach(function(e){var t="ThisExpression"===e.type?"this":e.name;f[t]=f[t]||[],f[t].push(e)}),Object.keys(f).sort().map(function(e){return{name:e,nodes:f[e]}})},t.exports.parse=a},{acorn:2,"acorn/dist/walk":3}],2:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";function t(e,t){for(var n=65536,r=0;r<t.length;r+=2){if((n+=t[r])>e)return!1;if((n+=t[r+1])>=e)return!0}}function n(e,n){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&x.test(String.fromCharCode(e)):!1!==n&&t(e,k)))}function r(e,n){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&w.test(String.fromCharCode(e)):!1!==n&&(t(e,k)||t(e,E)))))}function i(e,t){return new A(e,{beforeExpr:!0,binop:t})}function o(e,t){return void 0===t&&(t={}),t.keyword=e,T[e]=new A(e,t)}function s(e){return 10===e||13===e||8232===e||8233===e}function a(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n=1,r=0;;){B.lastIndex=r;var i=B.exec(e);if(!(i&&i.index<t))return new N(n,t-r);++n,r=i.index+i[0].length}}function l(e){var t={};for(var n in R)t[n]=e&&u(e,n)?e[n]:R[n];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),a(t.onToken)){var r=t.onToken;t.onToken=function(e){return r.push(e)}}return a(t.onComment)&&(t.onComment=p(t,t.onComment)),t}function p(e,t){return function(n,r,i,o,s,a){var u={type:n?"Block":"Line",value:r,start:i,end:o};e.locations&&(u.loc=new M(this,s,a)),e.ranges&&(u.range=[i,o]),t.push(u)}}function h(e){return new RegExp("^("+e.replace(/ /g,"|")+")$")}function f(e,t,n,r){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=r),this.options.ranges&&(e.range[1]=n),e}function d(e,t,n,r){try{return new RegExp(e,t)}catch(e){if(void 0!==n)throw e instanceof SyntaxError&&r.raise(n,"Error parsing regular expression: "+e.message),e}}function m(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}var g={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},v="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",y={5:v,6:v+" const class extends export import super"},b="ÂªÂµÂºÃ€-Ã–Ã˜-Ã¶Ã¸-ËË†-Ë‘Ë -Ë¤Ë¬Ë®Í°-Í´Í¶Í·Íº-Í½Í¿Î†Îˆ-ÎŠÎŒÎŽ-Î¡Î£-ÏµÏ·-ÒÒŠ-Ô¯Ô±-Õ–Õ™Õ¡-Ö‡×-×ª×°-×²Ø -ÙŠÙ®Ù¯Ù±-Û“Û•Û¥Û¦Û®Û¯Ûº-Û¼Û¿ÜÜ’-Ü¯Ý-Þ¥Þ±ßŠ-ßªß´ßµßºà €-à •à šà ¤à ¨à¡€-à¡˜à¢ -à¢´à¢¶-à¢½à¤„-à¤¹à¤½à¥à¥˜-à¥¡à¥±-à¦€à¦…-à¦Œà¦à¦à¦“-à¦¨à¦ª-à¦°à¦²à¦¶-à¦¹à¦½à§Žà§œà§à§Ÿ-à§¡à§°à§±à¨…-à¨Šà¨à¨à¨“-à¨¨à¨ª-à¨°à¨²à¨³à¨µà¨¶à¨¸à¨¹à©™-à©œà©žà©²-à©´àª…-àªàª-àª‘àª“-àª¨àªª-àª°àª²àª³àªµ-àª¹àª½à«à« à«¡à«¹à¬…-à¬Œà¬à¬à¬“-à¬¨à¬ª-à¬°à¬²à¬³à¬µ-à¬¹à¬½à­œà­à­Ÿ-à­¡à­±à®ƒà®…-à®Šà®Ž-à®à®’-à®•à®™à®šà®œà®žà®Ÿà®£à®¤à®¨-à®ªà®®-à®¹à¯à°…-à°Œà°Ž-à°à°’-à°¨à°ª-à°¹à°½à±˜-à±šà± à±¡à²€à²…-à²Œà²Ž-à²à²’-à²¨à²ª-à²³à²µ-à²¹à²½à³žà³ à³¡à³±à³²à´…-à´Œà´Ž-à´à´’-à´ºà´½àµŽàµ”-àµ–àµŸ-àµ¡àµº-àµ¿à¶…-à¶–à¶š-à¶±à¶³-à¶»à¶½à·€-à·†à¸-à¸°à¸²à¸³à¹€-à¹†àºàº‚àº„àº‡àºˆàºŠàºàº”-àº—àº™-àºŸàº¡-àº£àº¥àº§àºªàº«àº­-àº°àº²àº³àº½à»€-à»„à»†à»œ-à»Ÿà¼€à½€-à½‡à½‰-à½¬à¾ˆ-à¾Œá€€-á€ªá€¿á-á•áš-áá¡á¥á¦á®-á°áµ-á‚á‚Žá‚ -áƒ…áƒ‡áƒáƒ-áƒºáƒ¼-á‰ˆá‰Š-á‰á‰-á‰–á‰˜á‰š-á‰á‰ -áŠˆáŠŠ-áŠáŠ-áŠ°áŠ²-áŠµáŠ¸-áŠ¾á‹€á‹‚-á‹…á‹ˆ-á‹–á‹˜-áŒáŒ’-áŒ•áŒ˜-ášáŽ€-áŽáŽ -áµá¸-á½á-á™¬á™¯-á™¿áš-áššáš -á›ªá›®-á›¸áœ€-áœŒáœŽ-áœ‘áœ -áœ±á€-á‘á -á¬á®-á°áž€-áž³áŸ—áŸœá  -á¡·á¢€-á¢¨á¢ªá¢°-á£µá¤€-á¤žá¥-á¥­á¥°-á¥´á¦€-á¦«á¦°-á§‰á¨€-á¨–á¨ -á©”áª§á¬…-á¬³á­…-á­‹á®ƒ-á® á®®á®¯á®º-á¯¥á°€-á°£á±-á±á±š-á±½á²€-á²ˆá³©-á³¬á³®-á³±á³µá³¶á´€-á¶¿á¸€-á¼•á¼˜-á¼á¼ -á½…á½ˆ-á½á½-á½—á½™á½›á½á½Ÿ-á½½á¾€-á¾´á¾¶-á¾¼á¾¾á¿‚-á¿„á¿†-á¿Œá¿-á¿“á¿–-á¿›á¿ -á¿¬á¿²-á¿´á¿¶-á¿¼â±â¿â‚-â‚œâ„‚â„‡â„Š-â„“â„•â„˜-â„â„¤â„¦â„¨â„ª-â„¹â„¼-â„¿â……-â…‰â…Žâ… -â†ˆâ°€-â°®â°°-â±žâ± -â³¤â³«-â³®â³²â³³â´€-â´¥â´§â´­â´°-âµ§âµ¯â¶€-â¶–â¶ -â¶¦â¶¨-â¶®â¶°-â¶¶â¶¸-â¶¾â·€-â·†â·ˆ-â·Žâ·-â·–â·˜-â·žã€…-ã€‡ã€¡-ã€©ã€±-ã€µã€¸-ã€¼ã-ã‚–ã‚›-ã‚Ÿã‚¡-ãƒºãƒ¼-ãƒ¿ã„…-ã„­ã„±-ã†Žã† -ã†ºã‡°-ã‡¿ã€-ä¶µä¸€-é¿•ê€€-ê’Œê“-ê“½ê”€-ê˜Œê˜-ê˜Ÿê˜ªê˜«ê™€-ê™®ê™¿-êšêš -ê›¯êœ—-êœŸêœ¢-êžˆêž‹-êž®êž°-êž·êŸ·-ê ê ƒ-ê …ê ‡-ê Šê Œ-ê ¢ê¡€-ê¡³ê¢‚-ê¢³ê£²-ê£·ê£»ê£½ê¤Š-ê¤¥ê¤°-ê¥†ê¥ -ê¥¼ê¦„-ê¦²ê§ê§ -ê§¤ê§¦-ê§¯ê§º-ê§¾ê¨€-ê¨¨ê©€-ê©‚ê©„-ê©‹ê© -ê©¶ê©ºê©¾-êª¯êª±êªµêª¶êª¹-êª½ê«€ê«‚ê«›-ê«ê« -ê«ªê«²-ê«´ê¬-ê¬†ê¬‰-ê¬Žê¬‘-ê¬–ê¬ -ê¬¦ê¬¨-ê¬®ê¬°-ê­šê­œ-ê­¥ê­°-ê¯¢ê°€-íž£íž°-íŸ†íŸ‹-íŸ»ï¤€-ï©­ï©°-ï«™ï¬€-ï¬†ï¬“-ï¬—ï¬ï¬Ÿ-ï¬¨ï¬ª-ï¬¶ï¬¸-ï¬¼ï¬¾ï­€ï­ï­ƒï­„ï­†-ï®±ï¯“-ï´½ïµ-ï¶ï¶’-ï·‡ï·°-ï·»ï¹°-ï¹´ï¹¶-ï»¼ï¼¡-ï¼ºï½-ï½šï½¦-ï¾¾ï¿‚-ï¿‡ï¿Š-ï¿ï¿’-ï¿—ï¿š-ï¿œ",_="â€Œâ€Â·Ì€-Í¯Î‡Òƒ-Ò‡Ö‘-Ö½Ö¿××‚×„×…×‡Ø-ØšÙ‹-Ù©Ù°Û–-ÛœÛŸ-Û¤Û§Û¨Ûª-Û­Û°-Û¹Ü‘Ü°-ÝŠÞ¦-Þ°ß€-ß‰ß«-ß³à –-à ™à ›-à £à ¥-à §à ©-à ­à¡™-à¡›à£”-à£¡à££-à¤ƒà¤º-à¤¼à¤¾-à¥à¥‘-à¥—à¥¢à¥£à¥¦-à¥¯à¦-à¦ƒà¦¼à¦¾-à§„à§‡à§ˆà§‹-à§à§—à§¢à§£à§¦-à§¯à¨-à¨ƒà¨¼à¨¾-à©‚à©‡à©ˆà©‹-à©à©‘à©¦-à©±à©µàª-àªƒàª¼àª¾-à«…à«‡-à«‰à«‹-à«à«¢à«£à«¦-à«¯à¬-à¬ƒà¬¼à¬¾-à­„à­‡à­ˆà­‹-à­à­–à­—à­¢à­£à­¦-à­¯à®‚à®¾-à¯‚à¯†-à¯ˆà¯Š-à¯à¯—à¯¦-à¯¯à°€-à°ƒà°¾-à±„à±†-à±ˆà±Š-à±à±•à±–à±¢à±£à±¦-à±¯à²-à²ƒà²¼à²¾-à³„à³†-à³ˆà³Š-à³à³•à³–à³¢à³£à³¦-à³¯à´-à´ƒà´¾-àµ„àµ†-àµˆàµŠ-àµàµ—àµ¢àµ£àµ¦-àµ¯à¶‚à¶ƒà·Šà·-à·”à·–à·˜-à·Ÿà·¦-à·¯à·²à·³à¸±à¸´-à¸ºà¹‡-à¹Žà¹-à¹™àº±àº´-àº¹àº»àº¼à»ˆ-à»à»-à»™à¼˜à¼™à¼ -à¼©à¼µà¼·à¼¹à¼¾à¼¿à½±-à¾„à¾†à¾‡à¾-à¾—à¾™-à¾¼à¿†á€«-á€¾á€-á‰á–-á™áž-á á¢-á¤á§-á­á±-á´á‚‚-á‚á‚-á‚á-áŸá©-á±áœ’-áœ”áœ²-áœ´á’á“á²á³áž´-áŸ“áŸáŸ -áŸ©á ‹-á á -á ™á¢©á¤ -á¤«á¤°-á¤»á¥†-á¥á§-á§šá¨—-á¨›á©•-á©žá© -á©¼á©¿-áª‰áª-áª™áª°-áª½á¬€-á¬„á¬´-á­„á­-á­™á­«-á­³á®€-á®‚á®¡-á®­á®°-á®¹á¯¦-á¯³á°¤-á°·á±€-á±‰á±-á±™á³-á³’á³”-á³¨á³­á³²-á³´á³¸á³¹á·€-á·µá·»-á·¿â€¿â€â”âƒ-âƒœâƒ¡âƒ¥-âƒ°â³¯-â³±âµ¿â· -â·¿ã€ª-ã€¯ã‚™ã‚šê˜ -ê˜©ê™¯ê™´-ê™½êšžêšŸê›°ê›±ê ‚ê †ê ‹ê £-ê §ê¢€ê¢ê¢´-ê£…ê£-ê£™ê£ -ê£±ê¤€-ê¤‰ê¤¦-ê¤­ê¥‡-ê¥“ê¦€-ê¦ƒê¦³-ê§€ê§-ê§™ê§¥ê§°-ê§¹ê¨©-ê¨¶ê©ƒê©Œê©ê©-ê©™ê©»-ê©½êª°êª²-êª´êª·êª¸êª¾êª¿ê«ê««-ê«¯ê«µê«¶ê¯£-ê¯ªê¯¬ê¯­ê¯°-ê¯¹ï¬žï¸€-ï¸ï¸ -ï¸¯ï¸³ï¸´ï¹-ï¹ï¼-ï¼™ï¼¿",x=new RegExp("["+b+"]"),w=new RegExp("["+b+_+"]");b=_=null;var k=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],E=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],A=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null},C={beforeExpr:!0},S={startsExpr:!0},T={},O={num:new A("num",S),regexp:new A("regexp",S),string:new A("string",S),name:new A("name",S),eof:new A("eof"),bracketL:new A("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new A("]"),braceL:new A("{",{beforeExpr:!0,startsExpr:!0}),braceR:new A("}"),parenL:new A("(",{beforeExpr:!0,startsExpr:!0}),parenR:new A(")"),comma:new A(",",C),semi:new A(";",C),colon:new A(":",C),dot:new A("."),question:new A("?",C),arrow:new A("=>",C),template:new A("template"),ellipsis:new A("...",C),backQuote:new A("`",S),dollarBraceL:new A("${",{beforeExpr:!0,startsExpr:!0}),eq:new A("=",{beforeExpr:!0,isAssign:!0}),assign:new A("_=",{beforeExpr:!0,isAssign:!0}),incDec:new A("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new A("prefix",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:i("||",1),logicalAND:i("&&",2),bitwiseOR:i("|",3),bitwiseXOR:i("^",4),bitwiseAND:i("&",5),equality:i("==/!=",6),relational:i("</>",7),bitShift:i("<</>>",8),plusMin:new A("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:i("%",10),star:i("*",10),slash:i("/",10),starstar:new A("**",{beforeExpr:!0}),_break:o("break"),_case:o("case",C),_catch:o("catch"),_continue:o("continue"),_debugger:o("debugger"),_default:o("default",C),_do:o("do",{isLoop:!0,beforeExpr:!0}),_else:o("else",C),_finally:o("finally"),_for:o("for",{isLoop:!0}),_function:o("function",S),_if:o("if"),_return:o("return",C),_switch:o("switch"),_throw:o("throw",C),_try:o("try"),_var:o("var"),_const:o("const"),_while:o("while",{isLoop:!0}),_with:o("with"),_new:o("new",{beforeExpr:!0,startsExpr:!0}),_this:o("this",S),_super:o("super",S),_class:o("class"),_extends:o("extends",C),_export:o("export"),_import:o("import"),_null:o("null",S),_true:o("true",S),_false:o("false",S),_in:o("in",{beforeExpr:!0,binop:7}),_instanceof:o("instanceof",{beforeExpr:!0,binop:7}),_typeof:o("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:o("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:o("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},F=/\r\n?|\n|\u2028|\u2029/,B=new RegExp(F.source,"g"),D=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,L=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,N=function(e,t){this.line=e,this.column=t};N.prototype.offset=function(e){return new N(this.line,this.column+e)};var M=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile)},R={ecmaVersion:7,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1,plugins:{}},P={},I=function(e,t,n){this.options=e=l(e),this.sourceFile=e.sourceFile,this.keywords=h(y[e.ecmaVersion>=6?6:5]);var r="";if(!e.allowReserved){for(var i=e.ecmaVersion;!(r=g[i]);i--);"module"==e.sourceType&&(r+=" await")}this.reservedWords=h(r);var o=(r?r+" ":"")+g.strict;this.reservedWordsStrict=h(o),this.reservedWordsStrictBind=h(o+" "+g.strictBind),this.input=String(t),this.containsEsc=!1,this.loadPlugins(e.plugins),n?(this.pos=n,this.lineStart=this.input.lastIndexOf("\n",n-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(F).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=O.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.inFunction=this.inGenerator=this.inAsync=!1,this.yieldPos=this.awaitPos=0,this.labels=[],0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2)};I.prototype.isKeyword=function(e){return this.keywords.test(e)},I.prototype.isReservedWord=function(e){return this.reservedWords.test(e)},I.prototype.extend=function(e,t){this[e]=t(this[e])},I.prototype.loadPlugins=function(e){var t=this;for(var n in e){var r=P[n];if(!r)throw new Error("Plugin '"+n+"' not found");r(t,e[n])}},I.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)};var j=I.prototype,V=/^(?:'((?:[^\']|\.)*)'|"((?:[^\"]|\.)*)"|;)/;j.strictDirective=function(e){for(var t=this;;){L.lastIndex=e,e+=L.exec(t.input)[0].length;var n=V.exec(t.input.slice(e));if(!n)return!1;if("use strict"==(n[1]||n[2]))return!0;e+=n[0].length}},j.eat=function(e){return this.type===e&&(this.next(),!0)},j.isContextual=function(e){return this.type===O.name&&this.value===e},j.eatContextual=function(e){return this.value===e&&this.eat(O.name)},j.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},j.canInsertSemicolon=function(){return this.type===O.eof||this.type===O.braceR||F.test(this.input.slice(this.lastTokEnd,this.start))},j.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},j.semicolon=function(){this.eat(O.semi)||this.insertSemicolon()||this.unexpected()},j.afterTrailingComma=function(e,t){if(this.type==e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},j.expect=function(e){this.eat(e)||this.unexpected()},j.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token")};var z=function(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=-1};j.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var n=t?e.parenthesizedAssign:e.parenthesizedBind;n>-1&&this.raiseRecoverable(n,"Parenthesized pattern")}},j.checkExpressionErrors=function(e,t){var n=e?e.shorthandAssign:-1;if(!t)return n>=0;n>-1&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns")},j.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},j.isSimpleAssignTarget=function(e){return"ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var U=I.prototype;U.parseTopLevel=function(e){var t=this,n={};for(e.body||(e.body=[]);this.type!==O.eof;){var r=t.parseStatement(!0,!0,n);e.body.push(r)}return this.next(),this.options.ecmaVersion>=6&&(e.sourceType=this.options.sourceType),this.finishNode(e,"Program")};var $={kind:"loop"},q={kind:"switch"};U.isLet=function(){if(this.type!==O.name||this.options.ecmaVersion<6||"let"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length,i=this.input.charCodeAt(t);if(91===i||123==i)return!0;if(n(i,!0)){for(var o=t+1;r(this.input.charCodeAt(o),!0);++o);var s=this.input.slice(t,o);if(!this.isKeyword(s))return!0}return!1},U.isAsyncFunction=function(){if(this.type!==O.name||this.options.ecmaVersion<8||"async"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length;return!(F.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!=this.input.length&&r(this.input.charAt(t+8)))},U.parseStatement=function(e,t,n){var r,i=this.type,o=this.startNode();switch(this.isLet()&&(i=O._var,r="let"),i){case O._break:case O._continue:return this.parseBreakContinueStatement(o,i.keyword);case O._debugger:return this.parseDebuggerStatement(o);case O._do:return this.parseDoStatement(o);case O._for:return this.parseForStatement(o);case O._function:return!e&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(o,!1);case O._class:return e||this.unexpected(),this.parseClass(o,!0);case O._if:return this.parseIfStatement(o);case O._return:return this.parseReturnStatement(o);case O._switch:return this.parseSwitchStatement(o);case O._throw:return this.parseThrowStatement(o);case O._try:return this.parseTryStatement(o);case O._const:case O._var:return r=r||this.value,e||"var"==r||this.unexpected(),this.parseVarStatement(o,r);case O._while:return this.parseWhileStatement(o);case O._with:return this.parseWithStatement(o);case O.braceL:return this.parseBlock();case O.semi:return this.parseEmptyStatement(o);case O._export:case O._import:return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),i===O._import?this.parseImport(o):this.parseExport(o,n);default:if(this.isAsyncFunction()&&e)return this.next(),this.parseFunctionStatement(o,!0);var s=this.value,a=this.parseExpression();return i===O.name&&"Identifier"===a.type&&this.eat(O.colon)?this.parseLabeledStatement(o,s,a):this.parseExpressionStatement(o,a)}},U.parseBreakContinueStatement=function(e,t){var n=this,r="break"==t;this.next(),this.eat(O.semi)||this.insertSemicolon()?e.label=null:this.type!==O.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var o=n.labels[i];if(null==e.label||o.name===e.label.name){if(null!=o.kind&&(r||"loop"===o.kind))break;if(e.label&&r)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,r?"BreakStatement":"ContinueStatement")},U.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},U.parseDoStatement=function(e){return this.next(),this.labels.push($),e.body=this.parseStatement(!1),this.labels.pop(),this.expect(O._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(O.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},U.parseForStatement=function(e){if(this.next(),this.labels.push($),this.expect(O.parenL),this.type===O.semi)return this.parseFor(e,null);var t=this.isLet();if(this.type===O._var||this.type===O._const||t){var n=this.startNode(),r=t?"let":this.value;return this.next(),this.parseVar(n,!0,r),this.finishNode(n,"VariableDeclaration"),!(this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==n.declarations.length||"var"!==r&&n.declarations[0].init?this.parseFor(e,n):this.parseForIn(e,n)}var i=new z,o=this.parseExpression(!0,i);return this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.toAssignable(o),this.checkLVal(o),this.checkPatternErrors(i,!0),this.parseForIn(e,o)):(this.checkExpressionErrors(i,!0),this.parseFor(e,o))},U.parseFunctionStatement=function(e,t){return this.next(),this.parseFunction(e,!0,!1,t)},U.isFunction=function(){return this.type===O._function||this.isAsyncFunction()},U.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement(!this.strict&&this.isFunction()),e.alternate=this.eat(O._else)?this.parseStatement(!this.strict&&this.isFunction()):null,this.finishNode(e,"IfStatement")},U.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(O.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},U.parseSwitchStatement=function(e){var t=this;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(O.braceL),this.labels.push(q);for(var n,r=!1;this.type!=O.braceR;)if(t.type===O._case||t.type===O._default){var i=t.type===O._case;n&&t.finishNode(n,"SwitchCase"),e.cases.push(n=t.startNode()),n.consequent=[],t.next(),i?n.test=t.parseExpression():(r&&t.raiseRecoverable(t.lastTokStart,"Multiple default clauses"),r=!0,n.test=null),t.expect(O.colon)}else n||t.unexpected(),n.consequent.push(t.parseStatement(!0));return n&&this.finishNode(n,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},U.parseThrowStatement=function(e){return this.next(),F.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var H=[];U.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===O._catch){var t=this.startNode();this.next(),this.expect(O.parenL),t.param=this.parseBindingAtom(),this.checkLVal(t.param,!0),this.expect(O.parenR),t.body=this.parseBlock(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(O._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},U.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},U.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push($),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"WhileStatement")},U.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement(!1),this.finishNode(e,"WithStatement")},U.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},U.parseLabeledStatement=function(e,t,n){for(var r=this,i=0;i<this.labels.length;++i)r.labels[i].name===t&&r.raise(n.start,"Label '"+t+"' is already declared");for(var o=this.type.isLoop?"loop":this.type===O._switch?"switch":null,s=this.labels.length-1;s>=0;s--){var a=r.labels[s];if(a.statementStart!=e.start)break;a.statementStart=r.start,a.kind=o}return this.labels.push({name:t,kind:o,statementStart:this.start}),e.body=this.parseStatement(!0),("ClassDeclaration"==e.body.type||"VariableDeclaration"==e.body.type&&(this.strict||"var"!=e.body.kind)||"FunctionDeclaration"==e.body.type&&(this.strict||e.body.generator))&&this.raiseRecoverable(e.body.start,"Invalid labeled declaration"),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},U.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},U.parseBlock=function(){var e=this,t=this.startNode();for(t.body=[],this.expect(O.braceL);!this.eat(O.braceR);){var n=e.parseStatement(!0);t.body.push(n)}return this.finishNode(t,"BlockStatement")},U.parseFor=function(e,t){return e.init=t,this.expect(O.semi),e.test=this.type===O.semi?null:this.parseExpression(),this.expect(O.semi),e.update=this.type===O.parenR?null:this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"ForStatement")},U.parseForIn=function(e,t){var n=this.type===O._in?"ForInStatement":"ForOfStatement";return this.next(),e.left=t,e.right=this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,n)},U.parseVar=function(e,t,n){var r=this;for(e.declarations=[],e.kind=n;;){var i=r.startNode();if(r.parseVarId(i),r.eat(O.eq)?i.init=r.parseMaybeAssign(t):"const"!==n||r.type===O._in||r.options.ecmaVersion>=6&&r.isContextual("of")?"Identifier"==i.id.type||t&&(r.type===O._in||r.isContextual("of"))?i.init=null:r.raise(r.lastTokEnd,"Complex binding patterns require an initialization value"):r.unexpected(),e.declarations.push(r.finishNode(i,"VariableDeclarator")),!r.eat(O.comma))break}return e},U.parseVarId=function(e){e.id=this.parseBindingAtom(),this.checkLVal(e.id,!0)},U.parseFunction=function(e,t,n,r){this.initFunction(e),this.options.ecmaVersion>=6&&!r&&(e.generator=this.eat(O.star)),this.options.ecmaVersion>=8&&(e.async=!!r),null==t&&(t=this.type==O.name),t&&(e.id=this.parseIdent());var i=this.inGenerator,o=this.inAsync,s=this.yieldPos,a=this.awaitPos,u=this.inFunction;return this.inGenerator=e.generator,this.inAsync=e.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,t||this.type!==O.name||(e.id=this.parseIdent()),this.parseFunctionParams(e),this.parseFunctionBody(e,n),this.inGenerator=i,this.inAsync=o,this.yieldPos=s,this.awaitPos=a,this.inFunction=u,this.finishNode(e,t?"FunctionDeclaration":"FunctionExpression")},U.parseFunctionParams=function(e){this.expect(O.parenL),e.params=this.parseBindingList(O.parenR,!1,this.options.ecmaVersion>=8,!0),this.checkYieldAwaitInDefaultParams()},U.parseClass=function(e,t){var n=this;this.next(),null==t&&(t=this.type===O.name),this.parseClassId(e,t),this.parseClassSuper(e);var r=this.startNode(),i=!1;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);)if(!n.eat(O.semi)){var o=n.startNode(),s=n.eat(O.star),a=!1,u=n.type===O.name&&"static"===n.value;n.parsePropertyName(o),o.static=u&&n.type!==O.parenL,o.static&&(s&&n.unexpected(),s=n.eat(O.star),n.parsePropertyName(o)),n.options.ecmaVersion>=8&&!s&&!o.computed&&"Identifier"===o.key.type&&"async"===o.key.name&&n.type!==O.parenL&&!n.canInsertSemicolon()&&(a=!0,n.parsePropertyName(o)),o.kind="method";var c=!1;if(!o.computed){var l=o.key;s||a||"Identifier"!==l.type||n.type===O.parenL||"get"!==l.name&&"set"!==l.name||(c=!0,o.kind=l.name,l=n.parsePropertyName(o)),!o.static&&("Identifier"===l.type&&"constructor"===l.name||"Literal"===l.type&&"constructor"===l.value)&&(i&&n.raise(l.start,"Duplicate constructor in the same class"),c&&n.raise(l.start,"Constructor can't have get/set modifier"),s&&n.raise(l.start,"Constructor can't be a generator"),a&&n.raise(l.start,"Constructor can't be an async method"),o.kind="constructor",i=!0)}if(n.parseClassMethod(r,o,s,a),c){var p="get"===o.kind?0:1;if(o.value.params.length!==p){var h=o.value.start;"get"===o.kind?n.raiseRecoverable(h,"getter should have no params"):n.raiseRecoverable(h,"setter should have exactly one param")}else"set"===o.kind&&"RestElement"===o.value.params[0].type&&n.raiseRecoverable(o.value.params[0].start,"Setter cannot use rest params")}}return e.body=this.finishNode(r,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},U.parseClassMethod=function(e,t,n,r){t.value=this.parseMethod(n,r),e.body.push(this.finishNode(t,"MethodDefinition"))},U.parseClassId=function(e,t){e.id=this.type===O.name?this.parseIdent():t?this.unexpected():null},U.parseClassSuper=function(e){e.superClass=this.eat(O._extends)?this.parseExprSubscripts():null},U.parseExport=function(e,t){var n=this;if(this.next(),this.eat(O.star))return this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(O._default)){this.checkExport(t,"default",this.lastTokStart);var r;if(this.type===O._function||(r=this.isAsyncFunction())){var i=this.startNode();this.next(),r&&this.next(),e.declaration=this.parseFunction(i,null,!1,r)}else if(this.type===O._class){var o=this.startNode();e.declaration=this.parseClass(o,null)}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(!0),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))e.source=this.type===O.string?this.parseExprAtom():this.unexpected();else{for(var s=0;s<e.specifiers.length;s++)(n.keywords.test(e.specifiers[s].local.name)||n.reservedWords.test(e.specifiers[s].local.name))&&n.unexpected(e.specifiers[s].local.start);e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},U.checkExport=function(e,t,n){e&&(Object.prototype.hasOwnProperty.call(e,t)&&this.raiseRecoverable(n,"Duplicate export '"+t+"'"),e[t]=!0)},U.checkPatternExport=function(e,t){var n=this,r=t.type;if("Identifier"==r)this.checkExport(e,t.name,t.start);else if("ObjectPattern"==r)for(var i=0;i<t.properties.length;++i)n.checkPatternExport(e,t.properties[i].value);else if("ArrayPattern"==r)for(var o=0;o<t.elements.length;++o){var s=t.elements[o];s&&n.checkPatternExport(e,s)}else"AssignmentPattern"==r?this.checkPatternExport(e,t.left):"ParenthesizedExpression"==r&&this.checkPatternExport(e,t.expression)},U.checkVariableExport=function(e,t){var n=this;if(e)for(var r=0;r<t.length;r++)n.checkPatternExport(e,t[r].id)},U.shouldParseExportStatement=function(){return"var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},U.parseExportSpecifiers=function(e){var t=this,n=[],r=!0;for(this.expect(O.braceL);!this.eat(O.braceR);){if(r)r=!1;else if(t.expect(O.comma),t.afterTrailingComma(O.braceR))break;var i=t.startNode();i.local=t.parseIdent(!0),i.exported=t.eatContextual("as")?t.parseIdent(!0):i.local,t.checkExport(e,i.exported.name,i.exported.start),n.push(t.finishNode(i,"ExportSpecifier"))}return n},U.parseImport=function(e){return this.next(),this.type===O.string?(e.specifiers=H,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},U.parseImportSpecifiers=function(){var e=this,t=[],n=!0;if(this.type===O.name){var r=this.startNode();if(r.local=this.parseIdent(),this.checkLVal(r.local,!0),t.push(this.finishNode(r,"ImportDefaultSpecifier")),!this.eat(O.comma))return t}if(this.type===O.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,!0),t.push(this.finishNode(i,"ImportNamespaceSpecifier")),t}for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var o=e.startNode();o.imported=e.parseIdent(!0),e.eatContextual("as")?o.local=e.parseIdent():(o.local=o.imported,e.isKeyword(o.local.name)&&e.unexpected(o.local.start),e.reservedWordsStrict.test(o.local.name)&&e.raiseRecoverable(o.local.start,"The keyword '"+o.local.name+"' is reserved")),e.checkLVal(o.local,!0),t.push(e.finishNode(o,"ImportSpecifier"))}return t};var W=I.prototype;W.toAssignable=function(e,t){var n=this;if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Can not use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":break;case"ObjectExpression":e.type="ObjectPattern";for(var r=0;r<e.properties.length;r++){var i=e.properties[r];"init"!==i.kind&&n.raise(i.key.start,"Object pattern can't contain getter or setter"),n.toAssignable(i.value,t)}break;case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,t);break;case"AssignmentExpression":if("="!==e.operator){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.");break}e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":e.expression=this.toAssignable(e.expression,t);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}return e},W.toAssignableList=function(e,t){var n=this,r=e.length;if(r){var i=e[r-1];if(i&&"RestElement"==i.type)--r;else if(i&&"SpreadElement"==i.type){i.type="RestElement";var o=i.argument;this.toAssignable(o,t),"Identifier"!==o.type&&"MemberExpression"!==o.type&&"ArrayPattern"!==o.type&&this.unexpected(o.start),--r}t&&i&&"RestElement"===i.type&&"Identifier"!==i.argument.type&&this.unexpected(i.argument.start)}for(var s=0;s<r;s++){var a=e[s];a&&n.toAssignable(a,t)}return e},W.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},W.parseRest=function(e){var t=this.startNode();return this.next(),t.argument=e?this.type===O.name?this.parseIdent():this.unexpected():this.type===O.name||this.type===O.bracketL?this.parseBindingAtom():this.unexpected(),this.finishNode(t,"RestElement")},W.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case O.name:return this.parseIdent();case O.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(O.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case O.braceL:return this.parseObj(!0);default:this.unexpected()}},W.parseBindingList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);)if(s?s=!1:i.expect(O.comma),t&&i.type===O.comma)o.push(null);else{if(n&&i.afterTrailingComma(e))break;if(i.type===O.ellipsis){var a=i.parseRest(r);i.parseBindingListItem(a),o.push(a),i.type===O.comma&&i.raise(i.start,"Comma is not permitted after the rest element"),i.expect(e);break}var u=i.parseMaybeDefault(i.start,i.startLoc);i.parseBindingListItem(u),o.push(u)}return o},W.parseBindingListItem=function(e){return e},W.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(O.eq))return n;var r=this.startNodeAt(e,t);return r.left=n,r.right=this.parseMaybeAssign(),this.finishNode(r,"AssignmentPattern")},W.checkLVal=function(e,t,n){var r=this;switch(e.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(u(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,(t?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=0;i<e.properties.length;i++)r.checkLVal(e.properties[i].value,t,n);break;case"ArrayPattern":for(var o=0;o<e.elements.length;o++){var s=e.elements[o];s&&r.checkLVal(s,t,n)}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};var G=I.prototype;G.checkPropClash=function(e,t){if(!(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var n,r=e.key;switch(r.type){case"Identifier":n=r.name;break;case"Literal":n=String(r.value);break;default:return}var i=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===n&&"init"===i&&(t.proto&&this.raiseRecoverable(r.start,"Redefinition of __proto__ property"),t.proto=!0);else{var o=t[n="$"+n];if(o){var s="init"!==i;(!this.strict&&!s||!o[i])&&s^o.init||this.raiseRecoverable(r.start,"Redefinition of property")}else o=t[n]={init:!1,get:!1,set:!1};o[i]=!0}}},G.parseExpression=function(e,t){var n=this,r=this.start,i=this.startLoc,o=this.parseMaybeAssign(e,t);if(this.type===O.comma){var s=this.startNodeAt(r,i);for(s.expressions=[o];this.eat(O.comma);)s.expressions.push(n.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return o},G.parseMaybeAssign=function(e,t,n){if(this.inGenerator&&this.isContextual("yield"))return this.parseYield();var r=!1,i=-1;t?(i=t.parenthesizedAssign,t.parenthesizedAssign=-1):(t=new z,r=!0);var o=this.start,s=this.startLoc;this.type!=O.parenL&&this.type!=O.name||(this.potentialArrowAt=this.start);var a=this.parseMaybeConditional(e,t);if(n&&(a=n.call(this,a,o,s)),this.type.isAssign){this.checkPatternErrors(t,!0),r||z.call(t);var u=this.startNodeAt(o,s);return u.operator=this.value,u.left=this.type===O.eq?this.toAssignable(a):a,t.shorthandAssign=-1,this.checkLVal(a),this.next(),u.right=this.parseMaybeAssign(e),this.finishNode(u,"AssignmentExpression")}return r&&this.checkExpressionErrors(t,!0),i>-1&&(t.parenthesizedAssign=i),a},G.parseMaybeConditional=function(e,t){var n=this.start,r=this.startLoc,i=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return i;if(this.eat(O.question)){var o=this.startNodeAt(n,r);return o.test=i,o.consequent=this.parseMaybeAssign(),this.expect(O.colon),o.alternate=this.parseMaybeAssign(e),this.finishNode(o,"ConditionalExpression")}return i},G.parseExprOps=function(e,t){var n=this.start,r=this.startLoc,i=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)?i:this.parseExprOp(i,n,r,-1,e)},G.parseExprOp=function(e,t,n,r,i){var o=this.type.binop;if(null!=o&&(!i||this.type!==O._in)&&o>r){var s=this.type===O.logicalOR||this.type===O.logicalAND,a=this.value;this.next();var u=this.start,c=this.startLoc,l=this.parseExprOp(this.parseMaybeUnary(null,!1),u,c,o,i),p=this.buildBinary(t,n,e,l,a,s);return this.parseExprOp(p,t,n,r,i)}return e},G.buildBinary=function(e,t,n,r,i,o){var s=this.startNodeAt(e,t);return s.left=n,s.operator=i,s.right=r,this.finishNode(s,o?"LogicalExpression":"BinaryExpression")},G.parseMaybeUnary=function(e,t){var n,r=this,i=this.start,o=this.startLoc;if(this.inAsync&&this.isContextual("await"))n=this.parseAwait(e),t=!0;else if(this.type.prefix){var s=this.startNode(),a=this.type===O.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression")}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var u=r.startNodeAt(i,o);u.operator=r.value,u.prefix=!1,u.argument=n,r.checkLVal(n),r.next(),n=r.finishNode(u,"UpdateExpression")}}return!t&&this.eat(O.starstar)?this.buildBinary(i,o,n,this.parseMaybeUnary(null,!1),"**",!1):n},G.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,r=this.parseExprAtom(e),i="ArrowFunctionExpression"===r.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(e)||i)return r;var o=this.parseSubscripts(r,t,n);return e&&"MemberExpression"===o.type&&(e.parenthesizedAssign>=o.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=o.start&&(e.parenthesizedBind=-1)),o},G.parseSubscripts=function(e,t,n,r){for(var i,o=this,s=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd==e.end&&!this.canInsertSemicolon();;)if((i=o.eat(O.bracketL))||o.eat(O.dot)){var a=o.startNodeAt(t,n);a.object=e,a.property=i?o.parseExpression():o.parseIdent(!0),a.computed=!!i,i&&o.expect(O.bracketR),e=o.finishNode(a,"MemberExpression")}else if(!r&&o.eat(O.parenL)){var u=new z,c=o.yieldPos,l=o.awaitPos;o.yieldPos=0,o.awaitPos=0;var p=o.parseExprList(O.parenR,o.options.ecmaVersion>=8,!1,u);if(s&&!o.canInsertSemicolon()&&o.eat(O.arrow))return o.checkPatternErrors(u,!1),o.checkYieldAwaitInDefaultParams(),o.yieldPos=c,o.awaitPos=l,o.parseArrowExpression(o.startNodeAt(t,n),p,!0);o.checkExpressionErrors(u,!0),o.yieldPos=c||o.yieldPos,o.awaitPos=l||o.awaitPos;var h=o.startNodeAt(t,n);h.callee=e,h.arguments=p,e=o.finishNode(h,"CallExpression")}else{if(o.type!==O.backQuote)return e;var f=o.startNodeAt(t,n);f.tag=e,f.quasi=o.parseTemplate(),e=o.finishNode(f,"TaggedTemplateExpression")}},G.parseExprAtom=function(e){var t,n=this.potentialArrowAt==this.start;switch(this.type){case O._super:this.inFunction||this.raise(this.start,"'super' outside of function or class");case O._this:var r=this.type===O._this?"ThisExpression":"Super";return t=this.startNode(),this.next(),this.finishNode(t,r);case O.name:var i=this.start,o=this.startLoc,s=this.parseIdent(this.type!==O.name);if(this.options.ecmaVersion>=8&&"async"===s.name&&!this.canInsertSemicolon()&&this.eat(O._function))return this.parseFunction(this.startNodeAt(i,o),!1,!1,!0);if(n&&!this.canInsertSemicolon()){if(this.eat(O.arrow))return this.parseArrowExpression(this.startNodeAt(i,o),[s],!1);if(this.options.ecmaVersion>=8&&"async"===s.name&&this.type===O.name)return s=this.parseIdent(),!this.canInsertSemicolon()&&this.eat(O.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,o),[s],!0)}return s;case O.regexp:var a=this.value;return t=this.parseLiteral(a.value),t.regex={pattern:a.pattern,flags:a.flags},t;case O.num:case O.string:return this.parseLiteral(this.value);case O._null:case O._true:case O._false:return t=this.startNode(),t.value=this.type===O._null?null:this.type===O._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case O.parenL:var u=this.start,c=this.parseParenAndDistinguishExpression(n);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(c)&&(e.parenthesizedAssign=u),e.parenthesizedBind<0&&(e.parenthesizedBind=u)),c;case O.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(O.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case O.braceL:return this.parseObj(!1,e);case O._function:return t=this.startNode(),this.next(),this.parseFunction(t,!1);case O._class:return this.parseClass(this.startNode(),!1);case O._new:return this.parseNew();case O.backQuote:return this.parseTemplate();default:this.unexpected()}},G.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(t,"Literal")},G.parseParenExpression=function(){this.expect(O.parenL);var e=this.parseExpression();return this.expect(O.parenR),e},G.parseParenAndDistinguishExpression=function(e){var t,n=this,r=this.start,i=this.startLoc,o=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var s,a,u=this.start,c=this.startLoc,l=[],p=!0,h=!1,f=new z,d=this.yieldPos,m=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==O.parenR;){if(p?p=!1:n.expect(O.comma),o&&n.afterTrailingComma(O.parenR,!0)){h=!0;break}if(n.type===O.ellipsis){s=n.start,l.push(n.parseParenItem(n.parseRest())),n.type===O.comma&&n.raise(n.start,"Comma is not permitted after the rest element");break}n.type!==O.parenL||a||(a=n.start),l.push(n.parseMaybeAssign(!1,f,n.parseParenItem))}var g=this.start,v=this.startLoc;if(this.expect(O.parenR),e&&!this.canInsertSemicolon()&&this.eat(O.arrow))return this.checkPatternErrors(f,!1),this.checkYieldAwaitInDefaultParams(),a&&this.unexpected(a),this.yieldPos=d,this.awaitPos=m,this.parseParenArrowList(r,i,l);l.length&&!h||this.unexpected(this.lastTokStart),s&&this.unexpected(s),this.checkExpressionErrors(f,!0),this.yieldPos=d||this.yieldPos,this.awaitPos=m||this.awaitPos,l.length>1?((t=this.startNodeAt(u,c)).expressions=l,this.finishNodeAt(t,"SequenceExpression",g,v)):t=l[0]}else t=this.parseParenExpression();if(this.options.preserveParens){var y=this.startNodeAt(r,i);return y.expression=t,this.finishNode(y,"ParenthesizedExpression")}return t},G.parseParenItem=function(e){return e},G.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var Y=[];G.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(O.dot))return e.meta=t,e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inFunction||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty");var n=this.start,r=this.startLoc;return e.callee=this.parseSubscripts(this.parseExprAtom(),n,r,!0),this.eat(O.parenL)?e.arguments=this.parseExprList(O.parenR,this.options.ecmaVersion>=8,!1):e.arguments=Y,this.finishNode(e,"NewExpression")},G.parseTemplateElement=function(){var e=this.startNode();return e.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),e.tail=this.type===O.backQuote,this.finishNode(e,"TemplateElement")},G.parseTemplate=function(){var e=this,t=this.startNode();this.next(),t.expressions=[];var n=this.parseTemplateElement();for(t.quasis=[n];!n.tail;)e.expect(O.dollarBraceL),t.expressions.push(e.parseExpression()),e.expect(O.braceR),t.quasis.push(n=e.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},G.parseObj=function(e,t){var n=this,r=this.startNode(),i=!0,o={};for(r.properties=[],this.next();!this.eat(O.braceR);){if(i)i=!1;else if(n.expect(O.comma),n.afterTrailingComma(O.braceR))break;var s,a,u,c,l=n.startNode();n.options.ecmaVersion>=6&&(l.method=!1,l.shorthand=!1,(e||t)&&(u=n.start,c=n.startLoc),e||(s=n.eat(O.star))),n.parsePropertyName(l),e||!(n.options.ecmaVersion>=8)||s||l.computed||"Identifier"!==l.key.type||"async"!==l.key.name||n.type===O.parenL||n.type===O.colon||n.canInsertSemicolon()?a=!1:(a=!0,n.parsePropertyName(l,t)),n.parsePropertyValue(l,e,s,a,u,c,t),n.checkPropClash(l,o),r.properties.push(n.finishNode(l,"Property"))}return this.finishNode(r,e?"ObjectPattern":"ObjectExpression")},G.parsePropertyValue=function(e,t,n,r,i,o,s){if((n||r)&&this.type===O.colon&&this.unexpected(),this.eat(O.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,s),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===O.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n,r);else if(this.options.ecmaVersion>=5&&!e.computed&&"Identifier"===e.key.type&&("get"===e.key.name||"set"===e.key.name)&&this.type!=O.comma&&this.type!=O.braceR){(n||r||t)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var a="get"===e.kind?0:1;if(e.value.params.length!==a){var u=e.value.start;"get"===e.kind?this.raiseRecoverable(u,"getter should have no params"):this.raiseRecoverable(u,"setter should have exactly one param")}else"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((this.keywords.test(e.key.name)||(this.strict?this.reservedWordsStrict:this.reservedWords).test(e.key.name)||this.inGenerator&&"yield"==e.key.name||this.inAsync&&"await"==e.key.name)&&this.raiseRecoverable(e.key.start,"'"+e.key.name+"' can not be used as shorthand property"),e.kind="init",t?e.value=this.parseMaybeDefault(i,o,e.key):this.type===O.eq&&s?(s.shorthandAssign<0&&(s.shorthandAssign=this.start),e.value=this.parseMaybeDefault(i,o,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected()},G.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(O.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(O.bracketR),e.key;e.computed=!1}return e.key=this.type===O.num||this.type===O.string?this.parseExprAtom():this.parseIdent(!0)},G.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=!1,e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1)},G.parseMethod=function(e,t){var n=this.startNode(),r=this.inGenerator,i=this.inAsync,o=this.yieldPos,s=this.awaitPos,a=this.inFunction;return this.initFunction(n),this.options.ecmaVersion>=6&&(n.generator=e),this.options.ecmaVersion>=8&&(n.async=!!t),this.inGenerator=n.generator,this.inAsync=n.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,this.expect(O.parenL),n.params=this.parseBindingList(O.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(n,!1),this.inGenerator=r,this.inAsync=i,this.yieldPos=o,this.awaitPos=s,this.inFunction=a,this.finishNode(n,"FunctionExpression")},G.parseArrowExpression=function(e,t,n){var r=this.inGenerator,i=this.inAsync,o=this.yieldPos,s=this.awaitPos,a=this.inFunction;return this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!n),this.inGenerator=!1,this.inAsync=e.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0),this.inGenerator=r,this.inAsync=i,this.yieldPos=o,this.awaitPos=s,this.inFunction=a,this.finishNode(e,"ArrowFunctionExpression")},G.parseFunctionBody=function(e,t){var n=t&&this.type!==O.braceL,r=this.strict,i=!1;if(n)e.body=this.parseMaybeAssign(),e.expression=!0;else{var o=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);r&&!o||(i=this.strictDirective(this.end))&&o&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var s=this.labels;this.labels=[],i&&(this.strict=!0),e.body=this.parseBlock(!0),e.expression=!1,this.labels=s}r||i?(this.strict=!0,e.id&&this.checkLVal(e.id,!0),this.checkParams(e),this.strict=r):!t&&this.isSimpleParamList(e.params)||this.checkParams(e)},G.isSimpleParamList=function(e){for(var t=0;t<e.length;t++)if("Identifier"!==e[t].type)return!1;return!0},G.checkParams=function(e){for(var t=this,n={},r=0;r<e.params.length;r++)t.checkLVal(e.params[r],!0,n)},G.parseExprList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);){if(s)s=!1;else if(i.expect(O.comma),t&&i.afterTrailingComma(e))break;var a;n&&i.type===O.comma?a=null:i.type===O.ellipsis?(a=i.parseSpread(r),r&&i.type===O.comma&&r.trailingComma<0&&(r.trailingComma=i.start)):a=i.parseMaybeAssign(!1,r),o.push(a)}return o},G.parseIdent=function(e){var t=this.startNode();return e&&"never"==this.options.allowReserved&&(e=!1),this.type===O.name?(!e&&(this.strict?this.reservedWordsStrict:this.reservedWords).test(this.value)&&(this.options.ecmaVersion>=6||-1==this.input.slice(this.start,this.end).indexOf("\\"))&&this.raiseRecoverable(this.start,"The keyword '"+this.value+"' is reserved"),this.inGenerator&&"yield"===this.value&&this.raiseRecoverable(this.start,"Can not use 'yield' as identifier inside a generator"),this.inAsync&&"await"===this.value&&this.raiseRecoverable(this.start,"Can not use 'await' as identifier inside an async function"),t.name=this.value):e&&this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"Identifier")},G.parseYield=function(){this.yieldPos||(this.yieldPos=this.start);var e=this.startNode();return this.next(),this.type==O.semi||this.canInsertSemicolon()||this.type!=O.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(O.star),e.argument=this.parseMaybeAssign()),this.finishNode(e,"YieldExpression")},G.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!0),this.finishNode(e,"AwaitExpression")};var X=I.prototype;X.raise=function(e,t){var n=c(this.input,e);t+=" ("+n.line+":"+n.column+")";var r=new SyntaxError(t);throw r.pos=e,r.loc=n,r.raisedAt=this.pos,r},X.raiseRecoverable=X.raise,X.curPosition=function(){if(this.options.locations)return new N(this.curLine,this.pos-this.lineStart)};var K=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new M(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},J=I.prototype;J.startNode=function(){return new K(this,this.start,this.startLoc)},J.startNodeAt=function(e,t){return new K(this,e,t)},J.finishNode=function(e,t){return f.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},J.finishNodeAt=function(e,t,n,r){return f.call(this,e,t,n,r)};var Q=function(e,t,n,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=r},Z={b_stat:new Q("{",!1),b_expr:new Q("{",!0),b_tmpl:new Q("${",!0),p_stat:new Q("(",!1),p_expr:new Q("(",!0),q_tmpl:new Q("`",!0,!0,function(e){return e.readTmplToken()}),f_expr:new Q("function",!0)},ee=I.prototype;ee.initialContext=function(){return[Z.b_stat]},ee.braceIsBlock=function(e){if(e===O.colon){var t=this.curContext();if(t===Z.b_stat||t===Z.b_expr)return!t.isExpr}return e===O._return?F.test(this.input.slice(this.lastTokEnd,this.start)):e===O._else||e===O.semi||e===O.eof||e===O.parenR||(e==O.braceL?this.curContext()===Z.b_stat:!this.exprAllowed)},ee.updateContext=function(e){var t,n=this.type;n.keyword&&e==O.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr},O.parenR.updateContext=O.braceR.updateContext=function(){if(1!=this.context.length){var e=this.context.pop();e===Z.b_stat&&this.curContext()===Z.f_expr?(this.context.pop(),this.exprAllowed=!1):this.exprAllowed=e===Z.b_tmpl||!e.isExpr}else this.exprAllowed=!0},O.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Z.b_stat:Z.b_expr),this.exprAllowed=!0},O.dollarBraceL.updateContext=function(){this.context.push(Z.b_tmpl),this.exprAllowed=!0},O.parenL.updateContext=function(e){var t=e===O._if||e===O._for||e===O._with||e===O._while;this.context.push(t?Z.p_stat:Z.p_expr),this.exprAllowed=!0},O.incDec.updateContext=function(){},O._function.updateContext=function(e){e.beforeExpr&&e!==O.semi&&e!==O._else&&(e!==O.colon&&e!==O.braceL||this.curContext()!==Z.b_stat)&&this.context.push(Z.f_expr),this.exprAllowed=!1},O.backQuote.updateContext=function(){this.curContext()===Z.q_tmpl?this.context.pop():this.context.push(Z.q_tmpl),this.exprAllowed=!1};var te=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new M(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},ne=I.prototype,re="object"==typeof Packages&&"[object JavaPackage]"==Object.prototype.toString.call(Packages);ne.next=function(){this.options.onToken&&this.options.onToken(new te(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},ne.getToken=function(){return this.next(),new te(this)},"undefined"!=typeof Symbol&&(ne[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===O.eof,value:t}}}}),ne.curContext=function(){return this.context[this.context.length-1]},ne.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(O.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},ne.readToken=function(e){return n(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},ne.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},ne.skipBlockComment=function(){var e=this,t=this.options.onComment&&this.curPosition(),n=this.pos,r=this.input.indexOf("*/",this.pos+=2);if(-1===r&&this.raise(this.pos-2,"Unterminated comment"),this.pos=r+2,this.options.locations){B.lastIndex=n;for(var i;(i=B.exec(this.input))&&i.index<this.pos;)++e.curLine,e.lineStart=i.index+i[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,r),n,this.pos,t,this.curPosition())},ne.skipLineComment=function(e){for(var t=this,n=this.pos,r=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++t.pos,i=t.input.charCodeAt(t.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(n+e,this.pos),n,this.pos,r,this.curPosition())},ne.skipSpace=function(){var e=this;e:for(;this.pos<this.input.length;){var t=e.input.charCodeAt(e.pos);switch(t){case 32:case 160:++e.pos;break;case 13:10===e.input.charCodeAt(e.pos+1)&&++e.pos;case 10:case 8232:case 8233:++e.pos,e.options.locations&&(++e.curLine,e.lineStart=e.pos);break;case 47:switch(e.input.charCodeAt(e.pos+1)){case 42:e.skipBlockComment();break;case 47:e.skipLineComment(2);break;default:break e}break;default:if(!(t>8&&t<14||t>=5760&&D.test(String.fromCharCode(t))))break e;++e.pos}}},ne.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n)},ne.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(O.ellipsis)):(++this.pos,this.finishToken(O.dot))},ne.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(O.assign,2):this.finishOp(O.slash,1)},ne.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,r=42===e?O.star:O.modulo;return this.options.ecmaVersion>=7&&42===t&&(++n,r=O.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(O.assign,n+1):this.finishOp(r,n)},ne.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?O.logicalOR:O.logicalAND,2):61===t?this.finishOp(O.assign,2):this.finishOp(124===e?O.bitwiseOR:O.bitwiseAND,1)},ne.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(O.assign,2):this.finishOp(O.bitwiseXOR,1)},ne.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45==t&&62==this.input.charCodeAt(this.pos+2)&&F.test(this.input.slice(this.lastTokEnd,this.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(O.incDec,2):61===t?this.finishOp(O.assign,2):this.finishOp(O.plusMin,1)},ne.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(O.assign,n+1):this.finishOp(O.bitShift,n)):33==t&&60==e&&45==this.input.charCodeAt(this.pos+2)&&45==this.input.charCodeAt(this.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===t&&(n=2),this.finishOp(O.relational,n))},ne.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(O.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(O.arrow)):this.finishOp(61===e?O.eq:O.prefix,1)},ne.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(O.parenL);case 41:return++this.pos,this.finishToken(O.parenR);case 59:return++this.pos,this.finishToken(O.semi);case 44:return++this.pos,this.finishToken(O.comma);case 91:return++this.pos,this.finishToken(O.bracketL);case 93:return++this.pos,this.finishToken(O.bracketR);case 123:return++this.pos,this.finishToken(O.braceL);case 125:return++this.pos,this.finishToken(O.braceR);case 58:return++this.pos,this.finishToken(O.colon);case 63:return++this.pos,this.finishToken(O.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(O.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(O.prefix,1)}this.raise(this.pos,"Unexpected character '"+m(e)+"'")},ne.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)};var ie=!!d("ï¿¿","u");ne.readRegexp=function(){for(var e,t,n=this,r=this.pos;;){n.pos>=n.input.length&&n.raise(r,"Unterminated regular expression");var i=n.input.charAt(n.pos);if(F.test(i)&&n.raise(r,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i}++n.pos}var o=this.input.slice(r,this.pos);++this.pos;var s=this.readWord1(),a=o,u="";if(s){var c=/^[gim]*$/;this.options.ecmaVersion>=6&&(c=/^[gimuy]*$/),c.test(s)||this.raise(r,"Invalid regular expression flag"),s.indexOf("u")>=0&&(ie?u="u":(a=(a=a.replace(/\\u\{([0-9a-fA-F]+)\}/g,function(e,t,i){return(t=Number("0x"+t))>1114111&&n.raise(r+i+3,"Code point out of bounds"),"x"})).replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"),u=u.replace("u","")))}var l=null;return re||(d(a,u,r,this),l=d(o,s)),this.finishToken(O.regexp,{pattern:o,flags:s,value:l})},ne.readInt=function(e,t){for(var n=this,r=this.pos,i=0,o=0,s=null==t?1/0:t;o<s;++o){var a,u=n.input.charCodeAt(n.pos);if((a=u>=97?u-97+10:u>=65?u-65+10:u>=48&&u<=57?u-48:1/0)>=e)break;++n.pos,i=i*e+a}return this.pos===r||null!=t&&this.pos-r!==t?null:i},ne.readRadixNumber=function(e){this.pos+=2;var t=this.readInt(e);return null==t&&this.raise(this.start+2,"Expected number in radix "+e),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(O.num,t)},ne.readNumber=function(e){var t=this.pos,r=!1,i=48===this.input.charCodeAt(this.pos);e||null!==this.readInt(10)||this.raise(t,"Invalid number"),i&&this.pos==t+1&&(i=!1);var o=this.input.charCodeAt(this.pos);46!==o||i||(++this.pos,this.readInt(10),r=!0,o=this.input.charCodeAt(this.pos)),69!==o&&101!==o||i||(43!==(o=this.input.charCodeAt(++this.pos))&&45!==o||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number"),r=!0),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var s,a=this.input.slice(t,this.pos);return r?s=parseFloat(a):i&&1!==a.length?/[89]/.test(a)||this.strict?this.raise(t,"Invalid number"):s=parseInt(a,8):s=parseInt(a,10),this.finishToken(O.num,s)},ne.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.raise(t,"Code point out of bounds")}else e=this.readHexChar(4);return e},ne.readString=function(e){for(var t=this,n="",r=++this.pos;;){t.pos>=t.input.length&&t.raise(t.start,"Unterminated string constant");var i=t.input.charCodeAt(t.pos);if(i===e)break;92===i?(n+=t.input.slice(r,t.pos),n+=t.readEscapedChar(!1),r=t.pos):(s(i)&&t.raise(t.start,"Unterminated string constant"),++t.pos)}return n+=this.input.slice(r,this.pos++),this.finishToken(O.string,n)},ne.readTmplToken=function(){for(var e=this,t="",n=this.pos;;){e.pos>=e.input.length&&e.raise(e.start,"Unterminated template");var r=e.input.charCodeAt(e.pos);if(96===r||36===r&&123===e.input.charCodeAt(e.pos+1))return e.pos===e.start&&e.type===O.template?36===r?(e.pos+=2,e.finishToken(O.dollarBraceL)):(++e.pos,e.finishToken(O.backQuote)):(t+=e.input.slice(n,e.pos),e.finishToken(O.template,t));if(92===r)t+=e.input.slice(n,e.pos),t+=e.readEscapedChar(!0),n=e.pos;else if(s(r)){switch(t+=e.input.slice(n,e.pos),++e.pos,r){case 13:10===e.input.charCodeAt(e.pos)&&++e.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(r)}e.options.locations&&(++e.curLine,e.lineStart=e.pos),n=e.pos}else++e.pos}},ne.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return m(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],r=parseInt(n,8);return r>255&&(n=n.slice(0,-1),r=parseInt(n,8)),"0"!==n&&(this.strict||e)&&this.raise(this.pos-2,"Octal literal in strict mode"),this.pos+=n.length-1,String.fromCharCode(r)}return String.fromCharCode(t)}},ne.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.raise(t,"Bad character escape sequence"),n},ne.readWord1=function(){var e=this;this.containsEsc=!1;for(var t="",i=!0,o=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var a=e.fullCharCodeAtPos();if(r(a,s))e.pos+=a<=65535?1:2;else{if(92!==a)break;e.containsEsc=!0,t+=e.input.slice(o,e.pos);var u=e.pos;117!=e.input.charCodeAt(++e.pos)&&e.raise(e.pos,"Expecting Unicode escape sequence \\uXXXX"),++e.pos;var c=e.readCodePoint();(i?n:r)(c,s)||e.raise(u,"Invalid Unicode escape"),t+=m(c),o=e.pos}i=!1}return t+this.input.slice(o,this.pos)},ne.readWord=function(){var e=this.readWord1(),t=O.name;return this.keywords.test(e)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+e),t=T[e]),this.finishToken(t,e)};e.version="4.0.11",e.parse=function(e,t){return new I(t,e).parse()},e.parseExpressionAt=function(e,t,n){var r=new I(n,e,t);return r.nextToken(),r.parseExpression()},e.tokenizer=function(e,t){return new I(t,e)},e.addLooseExports=function(t,n,r){e.parse_dammit=t,e.LooseParser=n,e.pluginsLoose=r},e.Parser=I,e.plugins=P,e.defaultOptions=R,e.Position=N,e.SourceLocation=M,e.getLineInfo=c,e.Node=K,e.TokenType=A,e.tokTypes=O,e.keywordTypes=T,e.TokContext=Q,e.tokContexts=Z,e.isIdentifierChar=r,e.isIdentifierStart=n,e.Token=te,e.isNewLine=s,e.lineBreak=F,e.lineBreakG=B,Object.defineProperty(e,"__esModule",{value:!0})})},{}],3:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";function t(e){return"string"==typeof e?function(t){return t==e}:e||function(){return!0}}function n(e,t,n){n(e,t)}function r(e,t,n){}var i=function(e,t){this.node=e,this.state=t},o=Object.create||function(e){function t(){}return t.prototype=e,new t},s={};s.Program=s.BlockStatement=function(e,t,n){for(var r=0;r<e.body.length;++r)n(e.body[r],t,"Statement")},s.Statement=n,s.EmptyStatement=r,s.ExpressionStatement=s.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")},s.IfStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Statement"),e.alternate&&n(e.alternate,t,"Statement")},s.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")},s.BreakStatement=s.ContinueStatement=r,s.WithStatement=function(e,t,n){n(e.object,t,"Expression"),n(e.body,t,"Statement")},s.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var r=0;r<e.cases.length;++r){var i=e.cases[r];i.test&&n(i.test,t,"Expression");for(var o=0;o<i.consequent.length;++o)n(i.consequent[o],t,"Statement")}},s.ReturnStatement=s.YieldExpression=s.AwaitExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression")},s.ThrowStatement=s.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")},s.TryStatement=function(e,t,n){n(e.block,t,"Statement"),e.handler&&n(e.handler,t),e.finalizer&&n(e.finalizer,t,"Statement")},s.CatchClause=function(e,t,n){n(e.param,t,"Pattern"),n(e.body,t,"ScopeBody")},s.WhileStatement=s.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.body,t,"Statement")},s.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit"),e.test&&n(e.test,t,"Expression"),e.update&&n(e.update,t,"Expression"),n(e.body,t,"Statement")},s.ForInStatement=s.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit"),n(e.right,t,"Expression"),n(e.body,t,"Statement")},s.ForInit=function(e,t,n){"VariableDeclaration"==e.type?n(e,t):n(e,t,"Expression")},s.DebuggerStatement=r,s.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")},s.VariableDeclaration=function(e,t,n){for(var r=0;r<e.declarations.length;++r)n(e.declarations[r],t)},s.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern"),e.init&&n(e.init,t,"Expression")},s.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var r=0;r<e.params.length;r++)n(e.params[r],t,"Pattern");n(e.body,t,e.expression?"ScopeExpression":"ScopeBody")},s.ScopeBody=function(e,t,n){return n(e,t,"Statement")},s.ScopeExpression=function(e,t,n){return n(e,t,"Expression")},s.Pattern=function(e,t,n){"Identifier"==e.type?n(e,t,"VariablePattern"):"MemberExpression"==e.type?n(e,t,"MemberPattern"):n(e,t)},s.VariablePattern=r,s.MemberPattern=n,s.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")},s.ArrayPattern=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Pattern")}},s.ObjectPattern=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r].value,t,"Pattern")},s.Expression=n,s.ThisExpression=s.Super=s.MetaProperty=r,s.ArrayExpression=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Expression")}},s.ObjectExpression=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r],t)},s.FunctionExpression=s.ArrowFunctionExpression=s.FunctionDeclaration,s.SequenceExpression=s.TemplateLiteral=function(e,t,n){for(var r=0;r<e.expressions.length;++r)n(e.expressions[r],t,"Expression")},s.UnaryExpression=s.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression")},s.BinaryExpression=s.LogicalExpression=function(e,t,n){n(e.left,t,"Expression"),n(e.right,t,"Expression")},s.AssignmentExpression=s.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern"),n(e.right,t,"Expression")},s.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Expression"),n(e.alternate,t,"Expression")},s.NewExpression=s.CallExpression=function(e,t,n){if(n(e.callee,t,"Expression"),e.arguments)for(var r=0;r<e.arguments.length;++r)n(e.arguments[r],t,"Expression")},s.MemberExpression=function(e,t,n){n(e.object,t,"Expression"),e.computed&&n(e.property,t,"Expression")},s.ExportNamedDeclaration=s.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"==e.type||e.declaration.id?"Statement":"Expression"),e.source&&n(e.source,t,"Expression")},s.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression")},s.ImportDeclaration=function(e,t,n){for(var r=0;r<e.specifiers.length;r++)n(e.specifiers[r],t);n(e.source,t,"Expression")},s.ImportSpecifier=s.ImportDefaultSpecifier=s.ImportNamespaceSpecifier=s.Identifier=s.Literal=r,s.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression"),n(e.quasi,t)},s.ClassDeclaration=s.ClassExpression=function(e,t,n){return n(e,t,"Class")},s.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern"),e.superClass&&n(e.superClass,t,"Expression");for(var r=0;r<e.body.body.length;r++)n(e.body.body[r],t)},s.MethodDefinition=s.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression"),n(e.value,t,"Expression")},e.simple=function(t,n,r,i,o){r||(r=e.base),function e(t,i,o){var s=o||t.type,a=n[s];r[s](t,i,e),a&&a(t,i)}(t,i,o)},e.ancestor=function(t,n,r,i){r||(r=e.base);var o=[];!function e(t,i,s){var a=s||t.type,u=n[a],c=t!=o[o.length-1];c&&o.push(t),r[a](t,i,e),u&&u(t,i||o,o),c&&o.pop()}(t,i)},e.recursive=function(t,n,r,i,o){var s=r?e.make(r,i):i;!function e(t,n,r){s[r||t.type](t,n,e)}(t,n,o)},e.findNodeAt=function(n,r,o,s,a,u){s=t(s),a||(a=e.base);try{!function e(t,n,u){var c=u||t.type;if((null==r||t.start<=r)&&(null==o||t.end>=o)&&a[c](t,n,e),(null==r||t.start==r)&&(null==o||t.end==o)&&s(c,t))throw new i(t,n)}(n,u)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAround=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){var u=a||t.type;if(!(t.start>r||t.end<r)&&(s[u](t,n,e),o(u,t)))throw new i(t,n)}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAfter=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){if(!(t.end<r)){var u=a||t.type;if(t.start>=r&&o(u,t))throw new i(t,n);s[u](t,n,e)}}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeBefore=function(n,r,o,s,a){o=t(o),s||(s=e.base);var u;return function e(t,n,a){if(!(t.start>r)){var c=a||t.type;t.end<=r&&(!u||u.node.end<t.end)&&o(c,t)&&(u=new i(t,n)),s[c](t,n,e)}}(n,a),u},e.make=function(t,n){n||(n=e.base);var r=o(n);for(var i in t)r[i]=t[i];return r},e.base=s,Object.defineProperty(e,"__esModule",{value:!0})})},{}],4:[function(e,t,n){(function(n,r){"use strict";t.exports=function(t,i){function o(e){var t,n;for(t=0;e[t];t+=1)if("."===(n=e[t]))e.splice(t,1),t-=1;else if(".."===n){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function s(e,t){var n;return e&&"."===e.charAt(0)&&t&&(o(n=(n=(n=t.split("/")).slice(0,n.length-1)).concat(e.split("/"))),e=n.join("/")),e}function a(e){return function(t){return s(t,e)}}function u(e){function t(t){d[e]=t}return t.fromText=function(e,t){throw new Error("amdefine does not implement load.fromText")},t}function c(e,n,o){var s,a,u,c;if(e)a=d[e]={},s=p(i,a,u={id:e,uri:r,exports:a},e);else{if(m)throw new Error("amdefine with no module ID cannot be called more than once per file.");m=!0,a=t.exports,s=p(i,a,u=t,t.id)}n&&(n=n.map(function(e){return s(e)})),void 0!==(c="function"==typeof o?o.apply(u.exports,n):o)&&(u.exports=c,e&&(d[e]=u.exports))}function l(e,t,n){Array.isArray(e)?(n=t,t=e,e=void 0):"string"!=typeof e&&(n=e,e=t=void 0),t&&!Array.isArray(t)&&(n=t,t=void 0),t||(t=["require","exports","module"]),e?f[e]=[e,t,n]:c(e,t,n)}var p,h,f={},d={},m=!1,g=e("path");return p=function(e,t,r,i){function o(o,s){if("string"==typeof o)return h(e,t,r,o,i);o=o.map(function(n){return h(e,t,r,n,i)}),s&&n.nextTick(function(){s.apply(null,o)})}return o.toUrl=function(e){return 0===e.indexOf(".")?s(e,g.dirname(r.filename)):e},o},i=i||function(){return t.require.apply(t,arguments)},h=function(e,t,n,r,i){var o,l,m=r.indexOf("!"),g=r;if(-1===m){if("require"===(r=s(r,i)))return p(e,t,n,i);if("exports"===r)return t;if("module"===r)return n;if(d.hasOwnProperty(r))return d[r];if(f[r])return c.apply(null,f[r]),d[r];if(e)return e(g);throw new Error("No module with ID: "+r)}return o=r.substring(0,m),r=r.substring(m+1,r.length),l=h(e,t,n,o,i),r=l.normalize?l.normalize(r,a(i)):s(r,i),d[r]?d[r]:(l.load(r,p(e,t,n,i),u(r),{}),d[r])},l.require=function(e){return d[e]?d[e]:f[e]?(c.apply(null,f[e]),d[e]):void 0},l.amd={},l}}).call(this,e("_process"),"/node_modules/amdefine/amdefine.js")},{_process:31,path:30}],5:[function(e,t,n){"use strict";function r(e){var t;(t=s.length?s.pop():new i).task=e,o(t)}function i(){this.task=null}var o=e("./raw"),s=[],a=[],u=o.makeRequestCallFromTimer(function(){if(a.length)throw a.shift()});t.exports=r,i.prototype.call=function(){try{this.task.call()}catch(e){r.onerror?r.onerror(e):(a.push(e),u())}finally{this.task=null,s[s.length]=this}}},{"./raw":6}],6:[function(e,t,n){(function(e){"use strict";function n(e){s.length||(o(),a=!0),s[s.length]=e}function r(){for(;u<s.length;){var e=u;if(u+=1,s[e].call(),u>c){for(var t=0,n=s.length-u;t<n;t++)s[t]=s[t+u];s.length-=u,u=0}}s.length=0,u=0,a=!1}function i(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}t.exports=n;var o,s=[],a=!1,u=0,c=1024,l=void 0!==e?e:self,p=l.MutationObserver||l.WebKitMutationObserver;o="function"==typeof p?function(e){var t=1,n=new p(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}(r):i(r),n.requestFlush=o,n.makeRequestCallFromTimer=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){(function(n){"use strict";function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}function i(e){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function o(e){return Object.prototype.toString.call(e)}function s(e){return!i(e)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}function a(e){if(_.isFunction(e)){if(k)return e.name;var t=e.toString().match(A);return t&&t[1]}}function u(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function c(e){if(k||!_.isFunction(e))return _.inspect(e);var t=a(e);return"[Function"+(t?": "+t:"")+"]"}function l(e){return u(c(e.actual),128)+" "+e.operator+" "+u(c(e.expected),128)}function p(e,t,n,r,i){throw new E.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function h(e,t){e||p(e,!0,t,"==",E.ok)}function f(e,t,n,a){if(e===t)return!0;if(i(e)&&i(t))return 0===r(e,t);if(_.isDate(e)&&_.isDate(t))return e.getTime()===t.getTime();if(_.isRegExp(e)&&_.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(s(e)&&s(t)&&o(e)===o(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var u=(a=a||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===a.expected.indexOf(t)||(a.actual.push(e),a.expected.push(t),m(e,t,n,a))}return n?e===t:e==t}function d(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function m(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(_.isPrimitive(e)||_.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=d(e),o=d(t);if(i&&!o||!i&&o)return!1;if(i)return e=w.call(e),t=w.call(t),f(e,t,n);var s,a,u=C(e),c=C(t);if(u.length!==c.length)return!1;for(u.sort(),c.sort(),a=u.length-1;a>=0;a--)if(u[a]!==c[a])return!1;for(a=u.length-1;a>=0;a--)if(s=u[a],!f(e[s],t[s],n,r))return!1;return!0}function g(e,t,n){f(e,t,!0)&&p(e,t,n,"notDeepStrictEqual",g)}function v(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function y(e){var t;try{e()}catch(e){t=e}return t}function b(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=y(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&p(i,n,"Missing expected exception"+r);var o="string"==typeof r,s=!e&&_.isError(i),a=!e&&i&&!n;if((s&&o&&v(i,n)||a)&&p(i,n,"Got unwanted exception"+r),e&&i&&n&&!v(i,n)||!e&&i)throw i}var _=e("util/"),x=Object.prototype.hasOwnProperty,w=Array.prototype.slice,k="foo"===function(){}.name,E=t.exports=h,A=/\s*function\s+([^\(\s]*)\s*/;E.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var t=e.stackStartFunction||p;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,i=a(t),o=r.indexOf("\n"+i);if(o>=0){var s=r.indexOf("\n",o+1);r=r.substring(s+1)}this.stack=r}}},_.inherits(E.AssertionError,Error),E.fail=p,E.ok=h,E.equal=function(e,t,n){e!=t&&p(e,t,n,"==",E.equal)},E.notEqual=function(e,t,n){e==t&&p(e,t,n,"!=",E.notEqual)},E.deepEqual=function(e,t,n){f(e,t,!1)||p(e,t,n,"deepEqual",E.deepEqual)},E.deepStrictEqual=function(e,t,n){f(e,t,!0)||p(e,t,n,"deepStrictEqual",E.deepStrictEqual)},E.notDeepEqual=function(e,t,n){f(e,t,!1)&&p(e,t,n,"notDeepEqual",E.notDeepEqual)},E.notDeepStrictEqual=g,E.strictEqual=function(e,t,n){e!==t&&p(e,t,n,"===",E.strictEqual)},E.notStrictEqual=function(e,t,n){e===t&&p(e,t,n,"!==",E.notStrictEqual)},E.throws=function(e,t,n){b(!0,e,t,n)},E.doesNotThrow=function(e,t,n){b(!1,e,t,n)},E.ifError=function(e){if(e)throw e};var C=Object.keys||function(e){var t=[];for(var n in e)x.call(e,n)&&t.push(n);return t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"util/":152}],8:[function(e,t,n){"use strict";function r(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}function o(e,t,n){for(var r,o=[],s=t;s<n;s+=3)r=(e[s]<<16)+(e[s+1]<<8)+e[s+2],o.push(i(r));return o.join("")}n.byteLength=function(e){return 3*e.length/4-r(e)},n.toByteArray=function(e){var t,n,i,o,s,c=e.length;o=r(e),s=new u(3*c/4-o),n=o>0?c-4:c;var l=0;for(t=0;t<n;t+=4)i=a[e.charCodeAt(t)]<<18|a[e.charCodeAt(t+1)]<<12|a[e.charCodeAt(t+2)]<<6|a[e.charCodeAt(t+3)],s[l++]=i>>16&255,s[l++]=i>>8&255,s[l++]=255&i;return 2===o?(i=a[e.charCodeAt(t)]<<2|a[e.charCodeAt(t+1)]>>4,s[l++]=255&i):1===o&&(i=a[e.charCodeAt(t)]<<10|a[e.charCodeAt(t+1)]<<4|a[e.charCodeAt(t+2)]>>2,s[l++]=i>>8&255,s[l++]=255&i),s},n.fromByteArray=function(e){for(var t,n=e.length,r=n%3,i="",a=[],u=0,c=n-r;u<c;u+=16383)a.push(o(e,u,u+16383>c?c:u+16383));return 1===r?(t=e[n-1],i+=s[t>>2],i+=s[t<<4&63],i+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],i+=s[t>>10],i+=s[t>>4&63],i+=s[t<<2&63],i+="="),a.push(i),a.join("")};for(var s=[],a=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=c.length;l<p;++l)s[l]=c[l],a[c.charCodeAt(l)]=l;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},{}],9:[function(e,t,n){},{}],10:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}],11:[function(e,t,n){"use strict";function r(e){if(e>X)throw new RangeError("Invalid typed array length");var t=new Uint8Array(e);return t.__proto__=i.prototype,t}function i(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(e)}return o(e,t,n)}function o(e,t,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return q(e)?p(e,t,n):"string"==typeof e?c(e,t):h(e)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function a(e,t,n){return s(e),e<=0?r(e):void 0!==t?"string"==typeof n?r(e).fill(t,n):r(e).fill(t):r(e)}function u(e){return s(e),r(e<0?0:0|f(e))}function c(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!i.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,t),o=r(n),s=o.write(e,t);return s!==n&&(o=o.slice(0,s)),o}function l(e){for(var t=e.length<0?0:0|f(e.length),n=r(t),i=0;i<t;i+=1)n[i]=255&e[i];return n}function p(e,t,n){if(t<0||e.byteLength<t)throw new RangeError("'offset' is out of bounds");if(e.byteLength<t+(n||0))throw new RangeError("'length' is out of bounds");var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),r.__proto__=i.prototype,r}function h(e){if(i.isBuffer(e)){var t=0|f(e.length),n=r(t);return 0===n.length?n:(e.copy(n,0,0,t),n)}if(e){if(H(e)||"length"in e)return"number"!=typeof e.length||W(e.length)?r(0):l(e);if("Buffer"===e.type&&Array.isArray(e.data))return l(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function f(e){if(e>=X)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+X.toString(16)+" bytes");return 0|e}function d(e,t){if(i.isBuffer(e))return e.length;if(H(e)||q(e))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return j(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return U(e).length;default:if(r)return j(e).length;t=(""+t).toLowerCase(),r=!0}}function m(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,t>>>=0,n<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,n);case"utf8":case"utf-8":return C(this,t,n);case"ascii":return T(this,t,n);case"latin1":case"binary":return O(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function g(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function v(e,t,n,r,o){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,W(n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=i.from(t,r)),i.isBuffer(t))return 0===t.length?-1:y(e,t,n,r,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,r,o);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,r,i){function o(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}var c;if(i){var l=-1;for(c=n;c<a;c++)if(o(e,c)===o(t,-1===l?0:c-l)){if(-1===l&&(l=c),c-l+1===u)return l*s}else-1!==l&&(c-=c-l),l=-1}else for(n+u>a&&(n=a-u),c=n;c>=0;c--){for(var p=!0,h=0;h<u;h++)if(o(e,c+h)!==o(t,h)){p=!1;break}if(p)return c}return-1}function b(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(W(a))return s;e[n+s]=a}return s}function _(e,t,n,r){return $(j(t,e.length-n),e,n,r)}function x(e,t,n,r){return $(V(t),e,n,r)}function w(e,t,n,r){return x(e,t,n,r)}function k(e,t,n,r){return $(U(t),e,n,r)}function E(e,t,n,r){return $(z(t,e.length-n),e,n,r)}function A(e,t,n){return 0===t&&n===e.length?G.fromByteArray(e):G.fromByteArray(e.slice(t,n))}function C(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=n){var u,c,l,p;switch(a){case 1:o<128&&(s=o);break;case 2:128==(192&(u=e[i+1]))&&(p=(31&o)<<6|63&u)>127&&(s=p);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(p=(15&o)<<12|(63&u)<<6|63&c)>2047&&(p<55296||p>57343)&&(s=p);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(p=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&p<1114112&&(s=p)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return S(r)}function S(e){var t=e.length;if(t<=K)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=K));return n}function T(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function O(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function F(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=I(e[o]);return i}function B(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,n,r,o,s){if(!i.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function N(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(e,t,n,r,i){return t=+t,n>>>=0,i||N(e,t,n,4,3.4028234663852886e38,-3.4028234663852886e38),Y.write(e,t,n,r,23,4),n+4}function R(e,t,n,r,i){return t=+t,n>>>=0,i||N(e,t,n,8,1.7976931348623157e308,-1.7976931348623157e308),Y.write(e,t,n,r,52,8),n+8}function P(e){if((e=e.trim().replace(J,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function I(e){return e<16?"0"+e.toString(16):e.toString(16)}function j(e,t){t=t||1/0;for(var n,r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function V(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function z(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r);return o}function U(e){return G.toByteArray(P(e))}function $(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function q(e){return e instanceof ArrayBuffer||null!=e&&null!=e.constructor&&"ArrayBuffer"===e.constructor.name&&"number"==typeof e.byteLength}function H(e){return"function"==typeof ArrayBuffer.isView&&ArrayBuffer.isView(e)}function W(e){return e!==e}var G=e("base64-js"),Y=e("ieee754");n.Buffer=i,n.SlowBuffer=function(e){return+e!=e&&(e=0),i.alloc(+e)},n.INSPECT_MAX_BYTES=50;var X=2147483647;n.kMaxLength=X,i.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}(),i.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),i.poolSize=8192,i.from=function(e,t,n){return o(e,t,n)},i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,i.alloc=function(e,t,n){return a(e,t,n)},i.allocUnsafe=function(e){return u(e)},i.allocUnsafeSlow=function(e){return u(e)},i.isBuffer=function(e){return null!=e&&!0===e._isBuffer},i.compare=function(e,t){if(!i.isBuffer(e)||!i.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,o=0,s=Math.min(n,r);o<s;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return i.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=i.allocUnsafe(t),o=0;for(n=0;n<e.length;++n){var s=e[n];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},i.byteLength=d,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},i.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},i.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},i.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?C(this,0,e):m.apply(this,arguments)},i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===i.compare(this,e)},i.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},i.prototype.compare=function(e,t,n,r,o){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),t<0||n>e.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,o>>>=0,this===e)return 0;for(var s=o-r,a=n-t,u=Math.min(s,a),c=this.slice(r,o),l=e.slice(t,n),p=0;p<u;++p)if(c[p]!==l[p]){s=c[p],a=l[p];break}return s<a?-1:a<s?1:0},i.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},i.prototype.indexOf=function(e,t,n){return v(this,e,t,n,!0)},i.prototype.lastIndexOf=function(e,t,n){return v(this,e,t,n,!1)},i.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return _(this,e,t,n);case"ascii":return x(this,e,t,n);case"latin1":case"binary":return w(this,e,t,n);case"base64":return k(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var K=4096;i.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return r.__proto__=i.prototype,r},i.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},i.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},i.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},i.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},i.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},i.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},i.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},i.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},i.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},i.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},i.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},i.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),Y.read(this,e,!0,23,4)},i.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),Y.read(this,e,!1,23,4)},i.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),Y.read(this,e,!0,52,8)},i.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),Y.read(this,e,!1,52,8)},i.prototype.writeUIntLE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||L(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},i.prototype.writeUIntBE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||L(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},i.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,1,255,0),this[t]=255&e,t+1},i.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},i.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},i.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},i.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},i.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);L(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},i.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);L(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},i.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},i.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},i.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},i.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},i.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},i.prototype.writeFloatLE=function(e,t,n){return M(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){return M(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){return R(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){return R(this,e,t,!1,n)},i.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n];else if(o<1e3)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},i.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0);var s;if("number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var a=i.isBuffer(e)?e:new i(e,r),u=a.length;for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this};var J=/[^+/0-9A-Za-z-_]/g},{"base64-js":8,ieee754:21}],12:[function(e,t,n){"use strict";function r(e,t,r){r=r||{},t=t||n.defaultState();for(var o=r.start||0,s=r.end||e.length,a=o;a<s;){try{i(e[a],t)}catch(e){throw e.index=a,e}a++}return t}function i(e,t){if(1!==e.length)throw(o=new Error("Character must be a string of length 1")).name="InvalidArgumentError",o.code="CHARACTER_PARSER:CHAR_LENGTH_NOT_ONE",o;(t=t||n.defaultState()).src+=e;var r=t.isComment(),i=t.history?t.history[0]:"";switch(t.regexpStart&&("/"!==e&&"*"!=e||t.stack.pop(),t.regexpStart=!1),t.current()){case p.LINE_COMMENT:"\n"===e&&t.stack.pop();break;case p.BLOCK_COMMENT:"*"===t.lastChar&&"/"===e&&t.stack.pop();break;case p.SINGLE_QUOTE:"'"!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;case p.DOUBLE_QUOTE:'"'!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;case p.TEMPLATE_QUOTE:"`"!==e||t.escaped?"\\"!==e||t.escaped?"$"!==e||t.escaped?"{"===e&&t.hasDollar?t.stack.push(h[e]):(t.escaped=!1,t.hasDollar=!1):t.hasDollar=!0:(t.escaped=!0,t.hasDollar=!1):(t.stack.pop(),t.hasDollar=!1);break;case p.REGEXP:"/"!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;default:if(e in h)t.stack.push(h[e]);else if(e in f){if(t.current()!==e){var o=new SyntaxError("Mismatched Bracket: "+e);throw o.code="CHARACTER_PARSER:MISMATCHED_BRACKET",o}t.stack.pop()}else"/"===i&&"/"===e?(t.history=t.history.substr(1),t.stack.push(p.LINE_COMMENT)):"/"===i&&"*"===e?(t.history=t.history.substr(1),t.stack.push(p.BLOCK_COMMENT)):"/"===e&&c(t.history)?(t.stack.push(p.REGEXP),t.regexpStart=!0):"'"===e?t.stack.push(p.SINGLE_QUOTE):'"'===e?t.stack.push(p.DOUBLE_QUOTE):"`"===e&&t.stack.push(p.TEMPLATE_QUOTE)}return t.isComment()||r||(t.history=e+t.history),t.lastChar=e,t}function o(){this.stack=[],this.regexpStart=!1,this.escaped=!1,this.hasDollar=!1,this.src="",this.history="",this.lastChar=""}function s(e,t,n){return l(t)?t.test(e.substr(n||0)):e.substr(n||0,t.length)===t}function a(e){if(!e)return!0;switch(e.charCodeAt(0)){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 94:case 124:case 33:case 61:return!0;default:return!1}}function u(e){return"if"===e||"in"===e||"do"===e||"var"===e||"for"===e||"new"===e||"try"===e||"let"===e||"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e||"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e||"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e||"default"===e||"finally"===e||"extends"===e||"function"===e||"continue"===e||"debugger"===e||"package"===e||"private"===e||"interface"===e||"instanceof"===e||"implements"===e||"protected"===e||"public"===e||"static"===e}function c(e){return!(")"===(e=e.replace(/^\s*/,""))[0]||"}"!==e[0]&&!a(e[0])&&(!/^\w+\b/.test(e)||!u(/^\w+\b/.exec(e)[0].split("").reverse().join(""))))}var l=e("is-regex"),p=(n=t.exports=r).TOKEN_TYPES={LINE_COMMENT:"//",BLOCK_COMMENT:"/**/",SINGLE_QUOTE:"'",DOUBLE_QUOTE:'"',TEMPLATE_QUOTE:"`",REGEXP:"//g"},h=n.BRACKETS={"(":")","{":"}","[":"]"},f={")":"(","}":"{","]":"["};n.parse=r,n.parseUntil=function(e,t,r){for(var o=(r=r||{}).start||0,a=o,u=n.defaultState();a<e.length;){if((r.ignoreNesting||!u.isNesting(r))&&s(e,t,a)){var c=a;return{start:o,end:c,src:e.substring(o,c)}}try{i(e[a],u)}catch(e){throw e.index=a,e}a++}var l=new Error("The end of the string was reached with no closing bracket found.");throw l.code="CHARACTER_PARSER:END_OF_STRING_REACHED",l.index=a,l},n.parseChar=i,n.defaultState=function(){return new o},o.prototype.current=function(){return this.stack[this.stack.length-1]},o.prototype.isString=function(){return this.current()===p.SINGLE_QUOTE||this.current()===p.DOUBLE_QUOTE||this.current()===p.TEMPLATE_QUOTE},o.prototype.isComment=function(){return this.current()===p.LINE_COMMENT||this.current()===p.BLOCK_COMMENT},o.prototype.isNesting=function(e){return(!e||!e.ignoreLineComment||1!==this.stack.length||this.stack[0]!==p.LINE_COMMENT)&&!!this.stack.length},n.isPunctuator=a,n.isKeyword=u},{"is-regex":25}],13:[function(e,t,n){"use strict";function r(e,t){if(e="("+e+")",a===e&&c===t)return u;if(a=e,c=t,!s(e))return u=!1;var n;try{n=i.parse(e,{ecmaVersion:6,allowReturnOutsideFunction:!0,allowImportExportEverywhere:!0,allowHashBang:!0})}catch(e){return u=!1}var r=!0;return o.simple(n,{Statement:function(e){r&&!0!==l[e.type]&&(r=!1)},Expression:function(e){r&&!0!==p[e.type]&&(r=!1)},MemberExpression:function(e){r&&(e.computed?r=!1:"_"===e.property.name[0]&&(r=!1))},Identifier:function(e){r&&(t&&e.name in t||(r=!1))}}),u=r}var i=e("acorn"),o=e("acorn/dist/walk"),s=e("is-expression"),a="(null)",u=!0,c=void 0,l={EmptyStatement:!0,ExpressionStatement:!0},p={ParenthesizedExpression:!0,ArrayExpression:!0,ObjectExpression:!0,SequenceExpression:!0,TemplateLiteral:!0,UnaryExpression:!0,BinaryExpression:!0,LogicalExpression:!0,ConditionalExpression:!0,Identifier:!0,Literal:!0,ComprehensionExpression:!0,TaggedTemplateExpression:!0,MemberExpression:!0,CallExpression:!0,NewExpression:!0};t.exports=r,r.isConstant=r,r.toConstant=function(e,t){if(!r(e,t))throw new Error(JSON.stringify(e)+" is not constant.");return Function(Object.keys(t||{}).join(","),"return ("+e+")").apply(null,Object.keys(t||{}).map(function(e){return t[e]}))}},{acorn:14,"acorn/dist/walk":15,"is-expression":16}],14:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";function t(e,t){for(var n=65536,r=0;r<t.length;r+=2){if((n+=t[r])>e)return!1;if((n+=t[r+1])>=e)return!0}}function n(e,n){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&x.test(String.fromCharCode(e)):!1!==n&&t(e,k)))}function r(e,n){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&w.test(String.fromCharCode(e)):!1!==n&&(t(e,k)||t(e,E)))))}function i(e,t){return new A(e,{beforeExpr:!0,binop:t})}function o(e,t){return void 0===t&&(t={}),t.keyword=e,T[e]=new A(e,t)}function s(e){return 10===e||13===e||8232===e||8233==e}function a(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n=1,r=0;;){B.lastIndex=r;var i=B.exec(e);if(!(i&&i.index<t))return new N(n,t-r);++n,r=i.index+i[0].length}}function l(e){var t={};for(var n in R)t[n]=e&&u(e,n)?e[n]:R[n];if(null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),a(t.onToken)){var r=t.onToken;t.onToken=function(e){return r.push(e)}}return a(t.onComment)&&(t.onComment=p(t,t.onComment)),t}function p(e,t){return function(n,r,i,o,s,a){var u={type:n?"Block":"Line",value:r,start:i,end:o};e.locations&&(u.loc=new M(this,s,a)),e.ranges&&(u.range=[i,o]),t.push(u)}}function h(e){return new RegExp("^("+e.replace(/ /g,"|")+")$")}function f(e,t,n,r){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=r),this.options.ranges&&(e.range[1]=n),e}function d(e,t,n,r){try{return new RegExp(e,t)}catch(e){if(void 0!==n)throw e instanceof SyntaxError&&r.raise(n,"Error parsing regular expression: "+e.message),e}}function m(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}var g={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",7:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},v="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",y={5:v,6:v+" const class extends export import super"},b="ÂªÂµÂºÃ€-Ã–Ã˜-Ã¶Ã¸-ËË†-Ë‘Ë -Ë¤Ë¬Ë®Í°-Í´Í¶Í·Íº-Í½Í¿Î†Îˆ-ÎŠÎŒÎŽ-Î¡Î£-ÏµÏ·-ÒÒŠ-Ô¯Ô±-Õ–Õ™Õ¡-Ö‡×-×ª×°-×²Ø -ÙŠÙ®Ù¯Ù±-Û“Û•Û¥Û¦Û®Û¯Ûº-Û¼Û¿ÜÜ’-Ü¯Ý-Þ¥Þ±ßŠ-ßªß´ßµßºà €-à •à šà ¤à ¨à¡€-à¡˜à¢ -à¢´à¢¶-à¢½à¤„-à¤¹à¤½à¥à¥˜-à¥¡à¥±-à¦€à¦…-à¦Œà¦à¦à¦“-à¦¨à¦ª-à¦°à¦²à¦¶-à¦¹à¦½à§Žà§œà§à§Ÿ-à§¡à§°à§±à¨…-à¨Šà¨à¨à¨“-à¨¨à¨ª-à¨°à¨²à¨³à¨µà¨¶à¨¸à¨¹à©™-à©œà©žà©²-à©´àª…-àªàª-àª‘àª“-àª¨àªª-àª°àª²àª³àªµ-àª¹àª½à«à« à«¡à«¹à¬…-à¬Œà¬à¬à¬“-à¬¨à¬ª-à¬°à¬²à¬³à¬µ-à¬¹à¬½à­œà­à­Ÿ-à­¡à­±à®ƒà®…-à®Šà®Ž-à®à®’-à®•à®™à®šà®œà®žà®Ÿà®£à®¤à®¨-à®ªà®®-à®¹à¯à°…-à°Œà°Ž-à°à°’-à°¨à°ª-à°¹à°½à±˜-à±šà± à±¡à²€à²…-à²Œà²Ž-à²à²’-à²¨à²ª-à²³à²µ-à²¹à²½à³žà³ à³¡à³±à³²à´…-à´Œà´Ž-à´à´’-à´ºà´½àµŽàµ”-àµ–àµŸ-àµ¡àµº-àµ¿à¶…-à¶–à¶š-à¶±à¶³-à¶»à¶½à·€-à·†à¸-à¸°à¸²à¸³à¹€-à¹†àºàº‚àº„àº‡àºˆàºŠàºàº”-àº—àº™-àºŸàº¡-àº£àº¥àº§àºªàº«àº­-àº°àº²àº³àº½à»€-à»„à»†à»œ-à»Ÿà¼€à½€-à½‡à½‰-à½¬à¾ˆ-à¾Œá€€-á€ªá€¿á-á•áš-áá¡á¥á¦á®-á°áµ-á‚á‚Žá‚ -áƒ…áƒ‡áƒáƒ-áƒºáƒ¼-á‰ˆá‰Š-á‰á‰-á‰–á‰˜á‰š-á‰á‰ -áŠˆáŠŠ-áŠáŠ-áŠ°áŠ²-áŠµáŠ¸-áŠ¾á‹€á‹‚-á‹…á‹ˆ-á‹–á‹˜-áŒáŒ’-áŒ•áŒ˜-ášáŽ€-áŽáŽ -áµá¸-á½á-á™¬á™¯-á™¿áš-áššáš -á›ªá›®-á›¸áœ€-áœŒáœŽ-áœ‘áœ -áœ±á€-á‘á -á¬á®-á°áž€-áž³áŸ—áŸœá  -á¡·á¢€-á¢¨á¢ªá¢°-á£µá¤€-á¤žá¥-á¥­á¥°-á¥´á¦€-á¦«á¦°-á§‰á¨€-á¨–á¨ -á©”áª§á¬…-á¬³á­…-á­‹á®ƒ-á® á®®á®¯á®º-á¯¥á°€-á°£á±-á±á±š-á±½á²€-á²ˆá³©-á³¬á³®-á³±á³µá³¶á´€-á¶¿á¸€-á¼•á¼˜-á¼á¼ -á½…á½ˆ-á½á½-á½—á½™á½›á½á½Ÿ-á½½á¾€-á¾´á¾¶-á¾¼á¾¾á¿‚-á¿„á¿†-á¿Œá¿-á¿“á¿–-á¿›á¿ -á¿¬á¿²-á¿´á¿¶-á¿¼â±â¿â‚-â‚œâ„‚â„‡â„Š-â„“â„•â„˜-â„â„¤â„¦â„¨â„ª-â„¹â„¼-â„¿â……-â…‰â…Žâ… -â†ˆâ°€-â°®â°°-â±žâ± -â³¤â³«-â³®â³²â³³â´€-â´¥â´§â´­â´°-âµ§âµ¯â¶€-â¶–â¶ -â¶¦â¶¨-â¶®â¶°-â¶¶â¶¸-â¶¾â·€-â·†â·ˆ-â·Žâ·-â·–â·˜-â·žã€…-ã€‡ã€¡-ã€©ã€±-ã€µã€¸-ã€¼ã-ã‚–ã‚›-ã‚Ÿã‚¡-ãƒºãƒ¼-ãƒ¿ã„…-ã„­ã„±-ã†Žã† -ã†ºã‡°-ã‡¿ã€-ä¶µä¸€-é¿•ê€€-ê’Œê“-ê“½ê”€-ê˜Œê˜-ê˜Ÿê˜ªê˜«ê™€-ê™®ê™¿-êšêš -ê›¯êœ—-êœŸêœ¢-êžˆêž‹-êž®êž°-êž·êŸ·-ê ê ƒ-ê …ê ‡-ê Šê Œ-ê ¢ê¡€-ê¡³ê¢‚-ê¢³ê£²-ê£·ê£»ê£½ê¤Š-ê¤¥ê¤°-ê¥†ê¥ -ê¥¼ê¦„-ê¦²ê§ê§ -ê§¤ê§¦-ê§¯ê§º-ê§¾ê¨€-ê¨¨ê©€-ê©‚ê©„-ê©‹ê© -ê©¶ê©ºê©¾-êª¯êª±êªµêª¶êª¹-êª½ê«€ê«‚ê«›-ê«ê« -ê«ªê«²-ê«´ê¬-ê¬†ê¬‰-ê¬Žê¬‘-ê¬–ê¬ -ê¬¦ê¬¨-ê¬®ê¬°-ê­šê­œ-ê­¥ê­°-ê¯¢ê°€-íž£íž°-íŸ†íŸ‹-íŸ»ï¤€-ï©­ï©°-ï«™ï¬€-ï¬†ï¬“-ï¬—ï¬ï¬Ÿ-ï¬¨ï¬ª-ï¬¶ï¬¸-ï¬¼ï¬¾ï­€ï­ï­ƒï­„ï­†-ï®±ï¯“-ï´½ïµ-ï¶ï¶’-ï·‡ï·°-ï·»ï¹°-ï¹´ï¹¶-ï»¼ï¼¡-ï¼ºï½-ï½šï½¦-ï¾¾ï¿‚-ï¿‡ï¿Š-ï¿ï¿’-ï¿—ï¿š-ï¿œ",_="â€Œâ€Â·Ì€-Í¯Î‡Òƒ-Ò‡Ö‘-Ö½Ö¿××‚×„×…×‡Ø-ØšÙ‹-Ù©Ù°Û–-ÛœÛŸ-Û¤Û§Û¨Ûª-Û­Û°-Û¹Ü‘Ü°-ÝŠÞ¦-Þ°ß€-ß‰ß«-ß³à –-à ™à ›-à £à ¥-à §à ©-à ­à¡™-à¡›à£”-à£¡à££-à¤ƒà¤º-à¤¼à¤¾-à¥à¥‘-à¥—à¥¢à¥£à¥¦-à¥¯à¦-à¦ƒà¦¼à¦¾-à§„à§‡à§ˆà§‹-à§à§—à§¢à§£à§¦-à§¯à¨-à¨ƒà¨¼à¨¾-à©‚à©‡à©ˆà©‹-à©à©‘à©¦-à©±à©µàª-àªƒàª¼àª¾-à«…à«‡-à«‰à«‹-à«à«¢à«£à«¦-à«¯à¬-à¬ƒà¬¼à¬¾-à­„à­‡à­ˆà­‹-à­à­–à­—à­¢à­£à­¦-à­¯à®‚à®¾-à¯‚à¯†-à¯ˆà¯Š-à¯à¯—à¯¦-à¯¯à°€-à°ƒà°¾-à±„à±†-à±ˆà±Š-à±à±•à±–à±¢à±£à±¦-à±¯à²-à²ƒà²¼à²¾-à³„à³†-à³ˆà³Š-à³à³•à³–à³¢à³£à³¦-à³¯à´-à´ƒà´¾-àµ„àµ†-àµˆàµŠ-àµàµ—àµ¢àµ£àµ¦-àµ¯à¶‚à¶ƒà·Šà·-à·”à·–à·˜-à·Ÿà·¦-à·¯à·²à·³à¸±à¸´-à¸ºà¹‡-à¹Žà¹-à¹™àº±àº´-àº¹àº»àº¼à»ˆ-à»à»-à»™à¼˜à¼™à¼ -à¼©à¼µà¼·à¼¹à¼¾à¼¿à½±-à¾„à¾†à¾‡à¾-à¾—à¾™-à¾¼à¿†á€«-á€¾á€-á‰á–-á™áž-á á¢-á¤á§-á­á±-á´á‚‚-á‚á‚-á‚á-áŸá©-á±áœ’-áœ”áœ²-áœ´á’á“á²á³áž´-áŸ“áŸáŸ -áŸ©á ‹-á á -á ™á¢©á¤ -á¤«á¤°-á¤»á¥†-á¥á§-á§šá¨—-á¨›á©•-á©žá© -á©¼á©¿-áª‰áª-áª™áª°-áª½á¬€-á¬„á¬´-á­„á­-á­™á­«-á­³á®€-á®‚á®¡-á®­á®°-á®¹á¯¦-á¯³á°¤-á°·á±€-á±‰á±-á±™á³-á³’á³”-á³¨á³­á³²-á³´á³¸á³¹á·€-á·µá·»-á·¿â€¿â€â”âƒ-âƒœâƒ¡âƒ¥-âƒ°â³¯-â³±âµ¿â· -â·¿ã€ª-ã€¯ã‚™ã‚šê˜ -ê˜©ê™¯ê™´-ê™½êšžêšŸê›°ê›±ê ‚ê †ê ‹ê £-ê §ê¢€ê¢ê¢´-ê£…ê£-ê£™ê£ -ê£±ê¤€-ê¤‰ê¤¦-ê¤­ê¥‡-ê¥“ê¦€-ê¦ƒê¦³-ê§€ê§-ê§™ê§¥ê§°-ê§¹ê¨©-ê¨¶ê©ƒê©Œê©ê©-ê©™ê©»-ê©½êª°êª²-êª´êª·êª¸êª¾êª¿ê«ê««-ê«¯ê«µê«¶ê¯£-ê¯ªê¯¬ê¯­ê¯°-ê¯¹ï¬žï¸€-ï¸ï¸ -ï¸¯ï¸³ï¸´ï¹-ï¹ï¼-ï¼™ï¼¿",x=new RegExp("["+b+"]"),w=new RegExp("["+b+_+"]");b=_=null;var k=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],E=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],A=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null},C={beforeExpr:!0},S={startsExpr:!0},T={},O={num:new A("num",S),regexp:new A("regexp",S),string:new A("string",S),name:new A("name",S),eof:new A("eof"),bracketL:new A("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new A("]"),braceL:new A("{",{beforeExpr:!0,startsExpr:!0}),braceR:new A("}"),parenL:new A("(",{beforeExpr:!0,startsExpr:!0}),parenR:new A(")"),comma:new A(",",C),semi:new A(";",C),colon:new A(":",C),dot:new A("."),question:new A("?",C),arrow:new A("=>",C),template:new A("template"),ellipsis:new A("...",C),backQuote:new A("`",S),dollarBraceL:new A("${",{beforeExpr:!0,startsExpr:!0}),eq:new A("=",{beforeExpr:!0,isAssign:!0}),assign:new A("_=",{beforeExpr:!0,isAssign:!0}),incDec:new A("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new A("prefix",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:i("||",1),logicalAND:i("&&",2),bitwiseOR:i("|",3),bitwiseXOR:i("^",4),bitwiseAND:i("&",5),equality:i("==/!=",6),relational:i("</>",7),bitShift:i("<</>>",8),plusMin:new A("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:i("%",10),star:i("*",10),slash:i("/",10),starstar:new A("**",{beforeExpr:!0}),_break:o("break"),_case:o("case",C),_catch:o("catch"),_continue:o("continue"),_debugger:o("debugger"),_default:o("default",C),_do:o("do",{isLoop:!0,beforeExpr:!0}),_else:o("else",C),_finally:o("finally"),_for:o("for",{isLoop:!0}),_function:o("function",S),_if:o("if"),_return:o("return",C),_switch:o("switch"),_throw:o("throw",C),_try:o("try"),_var:o("var"),_const:o("const"),_while:o("while",{isLoop:!0}),_with:o("with"),_new:o("new",{beforeExpr:!0,startsExpr:!0}),_this:o("this",S),_super:o("super",S),_class:o("class"),_extends:o("extends",C),_export:o("export"),_import:o("import"),_null:o("null",S),_true:o("true",S),_false:o("false",S),_in:o("in",{beforeExpr:!0,binop:7}),_instanceof:o("instanceof",{beforeExpr:!0,binop:7}),_typeof:o("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:o("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:o("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},F=/\r\n?|\n|\u2028|\u2029/,B=new RegExp(F.source,"g"),D=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,L=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,N=function(e,t){this.line=e,this.column=t};N.prototype.offset=function(e){return new N(this.line,this.column+e)};var M=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile)},R={ecmaVersion:6,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1,plugins:{}},P={},I=function(e,t,n){this.options=e=l(e),this.sourceFile=e.sourceFile,this.keywords=h(y[e.ecmaVersion>=6?6:5]);var r=e.allowReserved?"":g[e.ecmaVersion]+("module"==e.sourceType?" await":"");this.reservedWords=h(r);var i=(r?r+" ":"")+g.strict;this.reservedWordsStrict=h(i),this.reservedWordsStrictBind=h(i+" "+g.strictBind),this.input=String(t),this.containsEsc=!1,this.loadPlugins(e.plugins),n?(this.pos=n,this.lineStart=Math.max(0,this.input.lastIndexOf("\n",n)),this.curLine=this.input.slice(0,this.lineStart).split(F).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=O.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.strict=this.inModule="module"===e.sourceType,this.potentialArrowAt=-1,this.inFunction=this.inGenerator=!1,this.labels=[],0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2)};I.prototype.isKeyword=function(e){return this.keywords.test(e)},I.prototype.isReservedWord=function(e){return this.reservedWords.test(e)},I.prototype.extend=function(e,t){this[e]=t(this[e])},I.prototype.loadPlugins=function(e){var t=this;for(var n in e){var r=P[n];if(!r)throw new Error("Plugin '"+n+"' not found");r(t,e[n])}},I.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)};var j=I.prototype;j.isUseStrict=function(e){return this.options.ecmaVersion>=5&&"ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"use strict"===e.expression.raw.slice(1,-1)},j.eat=function(e){return this.type===e&&(this.next(),!0)},j.isContextual=function(e){return this.type===O.name&&this.value===e},j.eatContextual=function(e){return this.value===e&&this.eat(O.name)},j.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},j.canInsertSemicolon=function(){return this.type===O.eof||this.type===O.braceR||F.test(this.input.slice(this.lastTokEnd,this.start))},j.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},j.semicolon=function(){this.eat(O.semi)||this.insertSemicolon()||this.unexpected()},j.afterTrailingComma=function(e){if(this.type==e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),this.next(),!0},j.expect=function(e){this.eat(e)||this.unexpected()},j.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token")};var V=function(){this.shorthandAssign=0,this.trailingComma=0};j.checkPatternErrors=function(e,t){var n=e&&e.trailingComma;if(!t)return!!n;n&&this.raise(n,"Comma is not permitted after the rest element")},j.checkExpressionErrors=function(e,t){var n=e&&e.shorthandAssign;if(!t)return!!n;n&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns")};var z=I.prototype;z.parseTopLevel=function(e){var t=this,n=!0;for(e.body||(e.body=[]);this.type!==O.eof;){var r=t.parseStatement(!0,!0);e.body.push(r),n&&(t.isUseStrict(r)&&t.setStrict(!0),n=!1)}return this.next(),this.options.ecmaVersion>=6&&(e.sourceType=this.options.sourceType),this.finishNode(e,"Program")};var U={kind:"loop"},$={kind:"switch"};z.isLet=function(){if(this.type!==O.name||this.options.ecmaVersion<6||"let"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length,i=this.input.charCodeAt(t);if(91===i||123==i)return!0;if(n(i,!0)){for(var o=t+1;r(this.input.charCodeAt(o),!0);++o);var s=this.input.slice(t,o);if(!this.isKeyword(s))return!0}return!1},z.parseStatement=function(e,t){var n,r=this.type,i=this.startNode();switch(this.isLet()&&(r=O._var,n="let"),r){case O._break:case O._continue:return this.parseBreakContinueStatement(i,r.keyword);case O._debugger:return this.parseDebuggerStatement(i);case O._do:return this.parseDoStatement(i);case O._for:return this.parseForStatement(i);case O._function:return!e&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(i);case O._class:return e||this.unexpected(),this.parseClass(i,!0);case O._if:return this.parseIfStatement(i);case O._return:return this.parseReturnStatement(i);case O._switch:return this.parseSwitchStatement(i);case O._throw:return this.parseThrowStatement(i);case O._try:return this.parseTryStatement(i);case O._const:case O._var:return n=n||this.value,e||"var"==n||this.unexpected(),this.parseVarStatement(i,n);case O._while:return this.parseWhileStatement(i);case O._with:return this.parseWithStatement(i);case O.braceL:return this.parseBlock();case O.semi:return this.parseEmptyStatement(i);case O._export:case O._import:return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===O._import?this.parseImport(i):this.parseExport(i);default:var o=this.value,s=this.parseExpression();return r===O.name&&"Identifier"===s.type&&this.eat(O.colon)?this.parseLabeledStatement(i,o,s):this.parseExpressionStatement(i,s)}},z.parseBreakContinueStatement=function(e,t){var n=this,r="break"==t;this.next(),this.eat(O.semi)||this.insertSemicolon()?e.label=null:this.type!==O.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var o=n.labels[i];if(null==e.label||o.name===e.label.name){if(null!=o.kind&&(r||"loop"===o.kind))break;if(e.label&&r)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,r?"BreakStatement":"ContinueStatement")},z.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},z.parseDoStatement=function(e){return this.next(),this.labels.push(U),e.body=this.parseStatement(!1),this.labels.pop(),this.expect(O._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(O.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},z.parseForStatement=function(e){if(this.next(),this.labels.push(U),this.expect(O.parenL),this.type===O.semi)return this.parseFor(e,null);var t=this.isLet();if(this.type===O._var||this.type===O._const||t){var n=this.startNode(),r=t?"let":this.value;return this.next(),this.parseVar(n,!0,r),this.finishNode(n,"VariableDeclaration"),!(this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==n.declarations.length||"var"!==r&&n.declarations[0].init?this.parseFor(e,n):this.parseForIn(e,n)}var i=new V,o=this.parseExpression(!0,i);return this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.checkPatternErrors(i,!0),this.toAssignable(o),this.checkLVal(o),this.parseForIn(e,o)):(this.checkExpressionErrors(i,!0),this.parseFor(e,o))},z.parseFunctionStatement=function(e){return this.next(),this.parseFunction(e,!0)},z.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement(!1),e.alternate=this.eat(O._else)?this.parseStatement(!1):null,this.finishNode(e,"IfStatement")},z.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(O.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},z.parseSwitchStatement=function(e){var t=this;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(O.braceL),this.labels.push($);for(var n,r=!1;this.type!=O.braceR;)if(t.type===O._case||t.type===O._default){var i=t.type===O._case;n&&t.finishNode(n,"SwitchCase"),e.cases.push(n=t.startNode()),n.consequent=[],t.next(),i?n.test=t.parseExpression():(r&&t.raiseRecoverable(t.lastTokStart,"Multiple default clauses"),r=!0,n.test=null),t.expect(O.colon)}else n||t.unexpected(),n.consequent.push(t.parseStatement(!0));return n&&this.finishNode(n,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},z.parseThrowStatement=function(e){return this.next(),F.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var q=[];z.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===O._catch){var t=this.startNode();this.next(),this.expect(O.parenL),t.param=this.parseBindingAtom(),this.checkLVal(t.param,!0),this.expect(O.parenR),t.body=this.parseBlock(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(O._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},z.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},z.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(U),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"WhileStatement")},z.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement(!1),this.finishNode(e,"WithStatement")},z.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},z.parseLabeledStatement=function(e,t,n){for(var r=this,i=0;i<this.labels.length;++i)r.labels[i].name===t&&r.raise(n.start,"Label '"+t+"' is already declared");for(var o=this.type.isLoop?"loop":this.type===O._switch?"switch":null,s=this.labels.length-1;s>=0;s--){var a=r.labels[s];if(a.statementStart!=e.start)break;a.statementStart=r.start,a.kind=o}return this.labels.push({name:t,kind:o,statementStart:this.start}),e.body=this.parseStatement(!0),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},z.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},z.parseBlock=function(e){var t,n=this,r=this.startNode(),i=!0;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);){var o=n.parseStatement(!0);r.body.push(o),i&&e&&n.isUseStrict(o)&&(t=n.strict,n.setStrict(n.strict=!0)),i=!1}return!1===t&&this.setStrict(!1),this.finishNode(r,"BlockStatement")},z.parseFor=function(e,t){return e.init=t,this.expect(O.semi),e.test=this.type===O.semi?null:this.parseExpression(),this.expect(O.semi),e.update=this.type===O.parenR?null:this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"ForStatement")},z.parseForIn=function(e,t){var n=this.type===O._in?"ForInStatement":"ForOfStatement";return this.next(),e.left=t,e.right=this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,n)},z.parseVar=function(e,t,n){var r=this;for(e.declarations=[],e.kind=n;;){var i=r.startNode();if(r.parseVarId(i),r.eat(O.eq)?i.init=r.parseMaybeAssign(t):"const"!==n||r.type===O._in||r.options.ecmaVersion>=6&&r.isContextual("of")?"Identifier"==i.id.type||t&&(r.type===O._in||r.isContextual("of"))?i.init=null:r.raise(r.lastTokEnd,"Complex binding patterns require an initialization value"):r.unexpected(),e.declarations.push(r.finishNode(i,"VariableDeclarator")),!r.eat(O.comma))break}return e},z.parseVarId=function(e){e.id=this.parseBindingAtom(),this.checkLVal(e.id,!0)},z.parseFunction=function(e,t,n){this.initFunction(e),this.options.ecmaVersion>=6&&(e.generator=this.eat(O.star));var r=this.inGenerator;return this.inGenerator=e.generator,(t||this.type===O.name)&&(e.id=this.parseIdent()),this.parseFunctionParams(e),this.parseFunctionBody(e,n),this.inGenerator=r,this.finishNode(e,t?"FunctionDeclaration":"FunctionExpression")},z.parseFunctionParams=function(e){this.expect(O.parenL),e.params=this.parseBindingList(O.parenR,!1,!1,!0)},z.parseClass=function(e,t){var n=this;this.next(),this.parseClassId(e,t),this.parseClassSuper(e);var r=this.startNode(),i=!1;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);)if(!n.eat(O.semi)){var o=n.startNode(),s=n.eat(O.star),a=n.type===O.name&&"static"===n.value;n.parsePropertyName(o),o.static=a&&n.type!==O.parenL,o.static&&(s&&n.unexpected(),s=n.eat(O.star),n.parsePropertyName(o)),o.kind="method";var u=!1;if(!o.computed){var c=o.key;s||"Identifier"!==c.type||n.type===O.parenL||"get"!==c.name&&"set"!==c.name||(u=!0,o.kind=c.name,c=n.parsePropertyName(o)),!o.static&&("Identifier"===c.type&&"constructor"===c.name||"Literal"===c.type&&"constructor"===c.value)&&(i&&n.raise(c.start,"Duplicate constructor in the same class"),u&&n.raise(c.start,"Constructor can't have get/set modifier"),s&&n.raise(c.start,"Constructor can't be a generator"),o.kind="constructor",i=!0)}if(n.parseClassMethod(r,o,s),u){var l="get"===o.kind?0:1;if(o.value.params.length!==l){var p=o.value.start;"get"===o.kind?n.raiseRecoverable(p,"getter should have no params"):n.raiseRecoverable(p,"setter should have exactly one param")}"set"===o.kind&&"RestElement"===o.value.params[0].type&&n.raise(o.value.params[0].start,"Setter cannot use rest params")}}return e.body=this.finishNode(r,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},z.parseClassMethod=function(e,t,n){t.value=this.parseMethod(n),e.body.push(this.finishNode(t,"MethodDefinition"))},z.parseClassId=function(e,t){e.id=this.type===O.name?this.parseIdent():t?this.unexpected():null},z.parseClassSuper=function(e){e.superClass=this.eat(O._extends)?this.parseExprSubscripts():null},z.parseExport=function(e){var t=this;if(this.next(),this.eat(O.star))return this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(O._default)){var n=this.type==O.parenL,r=this.parseMaybeAssign(),i=!0;return n||"FunctionExpression"!=r.type&&"ClassExpression"!=r.type||(i=!1,r.id&&(r.type="FunctionExpression"==r.type?"FunctionDeclaration":"ClassDeclaration")),e.declaration=r,i&&this.semicolon(),this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(!0),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(),this.eatContextual("from"))e.source=this.type===O.string?this.parseExprAtom():this.unexpected();else{for(var o=0;o<e.specifiers.length;o++)(t.keywords.test(e.specifiers[o].local.name)||t.reservedWords.test(e.specifiers[o].local.name))&&t.unexpected(e.specifiers[o].local.start);e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},z.shouldParseExportStatement=function(){return this.type.keyword||this.isLet()},z.parseExportSpecifiers=function(){var e=this,t=[],n=!0;for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var r=e.startNode();r.local=e.parseIdent(e.type===O._default),r.exported=e.eatContextual("as")?e.parseIdent(!0):r.local,t.push(e.finishNode(r,"ExportSpecifier"))}return t},z.parseImport=function(e){return this.next(),this.type===O.string?(e.specifiers=q,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},z.parseImportSpecifiers=function(){var e=this,t=[],n=!0;if(this.type===O.name){var r=this.startNode();if(r.local=this.parseIdent(),this.checkLVal(r.local,!0),t.push(this.finishNode(r,"ImportDefaultSpecifier")),!this.eat(O.comma))return t}if(this.type===O.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,!0),t.push(this.finishNode(i,"ImportNamespaceSpecifier")),t}for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var o=e.startNode();o.imported=e.parseIdent(!0),e.eatContextual("as")?o.local=e.parseIdent():(o.local=o.imported,e.isKeyword(o.local.name)&&e.unexpected(o.local.start),e.reservedWordsStrict.test(o.local.name)&&e.raise(o.local.start,"The keyword '"+o.local.name+"' is reserved")),e.checkLVal(o.local,!0),t.push(e.finishNode(o,"ImportSpecifier"))}return t};var H=I.prototype;H.toAssignable=function(e,t){var n=this;if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":break;case"ObjectExpression":e.type="ObjectPattern";for(var r=0;r<e.properties.length;r++){var i=e.properties[r];"init"!==i.kind&&n.raise(i.key.start,"Object pattern can't contain getter or setter"),n.toAssignable(i.value,t)}break;case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,t);break;case"AssignmentExpression":if("="!==e.operator){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.");break}e.type="AssignmentPattern",delete e.operator;case"AssignmentPattern":"YieldExpression"===e.right.type&&this.raise(e.right.start,"Yield expression cannot be a default value");break;case"ParenthesizedExpression":e.expression=this.toAssignable(e.expression,t);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}return e},H.toAssignableList=function(e,t){var n=this,r=e.length;if(r){var i=e[r-1];if(i&&"RestElement"==i.type)--r;else if(i&&"SpreadElement"==i.type){i.type="RestElement";var o=i.argument;this.toAssignable(o,t),"Identifier"!==o.type&&"MemberExpression"!==o.type&&"ArrayPattern"!==o.type&&this.unexpected(o.start),--r}t&&i&&"RestElement"===i.type&&"Identifier"!==i.argument.type&&this.unexpected(i.argument.start)}for(var s=0;s<r;s++){var a=e[s];a&&n.toAssignable(a,t)}return e},H.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},H.parseRest=function(e){var t=this.startNode();return this.next(),t.argument=e?this.type===O.name?this.parseIdent():this.unexpected():this.type===O.name||this.type===O.bracketL?this.parseBindingAtom():this.unexpected(),this.finishNode(t,"RestElement")},H.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case O.name:return this.parseIdent();case O.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(O.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case O.braceL:return this.parseObj(!0);default:this.unexpected()}},H.parseBindingList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);)if(s?s=!1:i.expect(O.comma),t&&i.type===O.comma)o.push(null);else{if(n&&i.afterTrailingComma(e))break;if(i.type===O.ellipsis){var a=i.parseRest(r);i.parseBindingListItem(a),o.push(a),i.type===O.comma&&i.raise(i.start,"Comma is not permitted after the rest element"),i.expect(e);break}var u=i.parseMaybeDefault(i.start,i.startLoc);i.parseBindingListItem(u),o.push(u)}return o},H.parseBindingListItem=function(e){return e},H.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(O.eq))return n;var r=this.startNodeAt(e,t);return r.left=n,r.right=this.parseMaybeAssign(),this.finishNode(r,"AssignmentPattern")},H.checkLVal=function(e,t,n){var r=this;switch(e.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(u(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,(t?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=0;i<e.properties.length;i++)r.checkLVal(e.properties[i].value,t,n);break;case"ArrayPattern":for(var o=0;o<e.elements.length;o++){var s=e.elements[o];s&&r.checkLVal(s,t,n)}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};var W=I.prototype;W.checkPropClash=function(e,t){if(!(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var n,r=e.key;switch(r.type){case"Identifier":n=r.name;break;case"Literal":n=String(r.value);break;default:return}var i=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===n&&"init"===i&&(t.proto&&this.raiseRecoverable(r.start,"Redefinition of __proto__ property"),t.proto=!0);else{var o=t[n="$"+n];if(o){var s="init"!==i;(!this.strict&&!s||!o[i])&&s^o.init||this.raiseRecoverable(r.start,"Redefinition of property")}else o=t[n]={init:!1,get:!1,set:!1};o[i]=!0}}},W.parseExpression=function(e,t){var n=this,r=this.start,i=this.startLoc,o=this.parseMaybeAssign(e,t);if(this.type===O.comma){var s=this.startNodeAt(r,i);for(s.expressions=[o];this.eat(O.comma);)s.expressions.push(n.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return o},W.parseMaybeAssign=function(e,t,n){if(this.inGenerator&&this.isContextual("yield"))return this.parseYield();var r=!1;t||(t=new V,r=!0);var i=this.start,o=this.startLoc;this.type!=O.parenL&&this.type!=O.name||(this.potentialArrowAt=this.start);var s=this.parseMaybeConditional(e,t);if(n&&(s=n.call(this,s,i,o)),this.type.isAssign){this.checkPatternErrors(t,!0),r||V.call(t);var a=this.startNodeAt(i,o);return a.operator=this.value,a.left=this.type===O.eq?this.toAssignable(s):s,t.shorthandAssign=0,this.checkLVal(s),this.next(),a.right=this.parseMaybeAssign(e),this.finishNode(a,"AssignmentExpression")}return r&&this.checkExpressionErrors(t,!0),s},W.parseMaybeConditional=function(e,t){var n=this.start,r=this.startLoc,i=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return i;if(this.eat(O.question)){var o=this.startNodeAt(n,r);return o.test=i,o.consequent=this.parseMaybeAssign(),this.expect(O.colon),o.alternate=this.parseMaybeAssign(e),this.finishNode(o,"ConditionalExpression")}return i},W.parseExprOps=function(e,t){var n=this.start,r=this.startLoc,i=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)?i:this.parseExprOp(i,n,r,-1,e)},W.parseExprOp=function(e,t,n,r,i){var o=this.type.binop;if(null!=o&&(!i||this.type!==O._in)&&o>r){var s=this.type===O.logicalOR||this.type===O.logicalAND,a=this.value;this.next();var u=this.start,c=this.startLoc,l=this.parseExprOp(this.parseMaybeUnary(null,!1),u,c,o,i),p=this.buildBinary(t,n,e,l,a,s);return this.parseExprOp(p,t,n,r,i)}return e},W.buildBinary=function(e,t,n,r,i,o){var s=this.startNodeAt(e,t);return s.left=n,s.operator=i,s.right=r,this.finishNode(s,o?"LogicalExpression":"BinaryExpression")},W.parseMaybeUnary=function(e,t){var n,r=this,i=this.start,o=this.startLoc;if(this.type.prefix){var s=this.startNode(),a=this.type===O.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression")}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var u=r.startNodeAt(i,o);u.operator=r.value,u.prefix=!1,u.argument=n,r.checkLVal(n),r.next(),n=r.finishNode(u,"UpdateExpression")}}return!t&&this.eat(O.starstar)?this.buildBinary(i,o,n,this.parseMaybeUnary(null,!1),"**",!1):n},W.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,r=this.parseExprAtom(e),i="ArrowFunctionExpression"===r.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);return this.checkExpressionErrors(e)||i?r:this.parseSubscripts(r,t,n)},W.parseSubscripts=function(e,t,n,r){for(var i=this;;)if(i.eat(O.dot)){var o=i.startNodeAt(t,n);o.object=e,o.property=i.parseIdent(!0),o.computed=!1,e=i.finishNode(o,"MemberExpression")}else if(i.eat(O.bracketL)){var s=i.startNodeAt(t,n);s.object=e,s.property=i.parseExpression(),s.computed=!0,i.expect(O.bracketR),e=i.finishNode(s,"MemberExpression")}else if(!r&&i.eat(O.parenL)){var a=i.startNodeAt(t,n);a.callee=e,a.arguments=i.parseExprList(O.parenR,!1),e=i.finishNode(a,"CallExpression")}else{if(i.type!==O.backQuote)return e;var u=i.startNodeAt(t,n);u.tag=e,u.quasi=i.parseTemplate(),e=i.finishNode(u,"TaggedTemplateExpression")}},W.parseExprAtom=function(e){var t,n=this.potentialArrowAt==this.start;switch(this.type){case O._super:this.inFunction||this.raise(this.start,"'super' outside of function or class");case O._this:var r=this.type===O._this?"ThisExpression":"Super";return t=this.startNode(),this.next(),this.finishNode(t,r);case O.name:var i=this.start,o=this.startLoc,s=this.parseIdent(this.type!==O.name);return n&&!this.canInsertSemicolon()&&this.eat(O.arrow)?this.parseArrowExpression(this.startNodeAt(i,o),[s]):s;case O.regexp:var a=this.value;return t=this.parseLiteral(a.value),t.regex={pattern:a.pattern,flags:a.flags},t;case O.num:case O.string:return this.parseLiteral(this.value);case O._null:case O._true:case O._false:return t=this.startNode(),t.value=this.type===O._null?null:this.type===O._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case O.parenL:return this.parseParenAndDistinguishExpression(n);case O.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(O.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case O.braceL:return this.parseObj(!1,e);case O._function:return t=this.startNode(),this.next(),this.parseFunction(t,!1);case O._class:return this.parseClass(this.startNode(),!1);case O._new:return this.parseNew();case O.backQuote:return this.parseTemplate();default:this.unexpected()}},W.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(t,"Literal")},W.parseParenExpression=function(){this.expect(O.parenL);var e=this.parseExpression();return this.expect(O.parenR),e},W.parseParenAndDistinguishExpression=function(e){var t,n=this,r=this.start,i=this.startLoc;if(this.options.ecmaVersion>=6){this.next();for(var o,s,a=this.start,u=this.startLoc,c=[],l=!0,p=new V;this.type!==O.parenR;){if(l?l=!1:n.expect(O.comma),n.type===O.ellipsis){o=n.start,c.push(n.parseParenItem(n.parseRest()));break}n.type!==O.parenL||s||(s=n.start),c.push(n.parseMaybeAssign(!1,p,n.parseParenItem))}var h=this.start,f=this.startLoc;if(this.expect(O.parenR),e&&!this.canInsertSemicolon()&&this.eat(O.arrow))return this.checkPatternErrors(p,!0),s&&this.unexpected(s),this.parseParenArrowList(r,i,c);c.length||this.unexpected(this.lastTokStart),o&&this.unexpected(o),this.checkExpressionErrors(p,!0),c.length>1?((t=this.startNodeAt(a,u)).expressions=c,this.finishNodeAt(t,"SequenceExpression",h,f)):t=c[0]}else t=this.parseParenExpression();if(this.options.preserveParens){var d=this.startNodeAt(r,i);return d.expression=t,this.finishNode(d,"ParenthesizedExpression")}return t},W.parseParenItem=function(e){return e},W.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var G=[];W.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(O.dot))return e.meta=t,e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inFunction||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty");var n=this.start,r=this.startLoc;return e.callee=this.parseSubscripts(this.parseExprAtom(),n,r,!0),this.eat(O.parenL)?e.arguments=this.parseExprList(O.parenR,!1):e.arguments=G,this.finishNode(e,"NewExpression")},W.parseTemplateElement=function(){var e=this.startNode();return e.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),e.tail=this.type===O.backQuote,this.finishNode(e,"TemplateElement")},W.parseTemplate=function(){var e=this,t=this.startNode();this.next(),t.expressions=[];var n=this.parseTemplateElement();for(t.quasis=[n];!n.tail;)e.expect(O.dollarBraceL),t.expressions.push(e.parseExpression()),e.expect(O.braceR),t.quasis.push(n=e.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},W.parseObj=function(e,t){var n=this,r=this.startNode(),i=!0,o={};for(r.properties=[],this.next();!this.eat(O.braceR);){if(i)i=!1;else if(n.expect(O.comma),n.afterTrailingComma(O.braceR))break;var s,a,u,c=n.startNode();n.options.ecmaVersion>=6&&(c.method=!1,c.shorthand=!1,(e||t)&&(a=n.start,u=n.startLoc),e||(s=n.eat(O.star))),n.parsePropertyName(c),n.parsePropertyValue(c,e,s,a,u,t),n.checkPropClash(c,o),r.properties.push(n.finishNode(c,"Property"))}return this.finishNode(r,e?"ObjectPattern":"ObjectExpression")},W.parsePropertyValue=function(e,t,n,r,i,o){if(this.eat(O.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,o),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===O.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n);else if(this.options.ecmaVersion>=5&&!e.computed&&"Identifier"===e.key.type&&("get"===e.key.name||"set"===e.key.name)&&this.type!=O.comma&&this.type!=O.braceR){(n||t)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var s="get"===e.kind?0:1;if(e.value.params.length!==s){var a=e.value.start;"get"===e.kind?this.raiseRecoverable(a,"getter should have no params"):this.raiseRecoverable(a,"setter should have exactly one param")}"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((this.keywords.test(e.key.name)||(this.strict?this.reservedWordsStrictBind:this.reservedWords).test(e.key.name)||this.inGenerator&&"yield"==e.key.name)&&this.raiseRecoverable(e.key.start,"'"+e.key.name+"' can not be used as shorthand property"),e.kind="init",t?e.value=this.parseMaybeDefault(r,i,e.key):this.type===O.eq&&o?(o.shorthandAssign||(o.shorthandAssign=this.start),e.value=this.parseMaybeDefault(r,i,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected()},W.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(O.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(O.bracketR),e.key;e.computed=!1}return e.key=this.type===O.num||this.type===O.string?this.parseExprAtom():this.parseIdent(!0)},W.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=!1,e.expression=!1)},W.parseMethod=function(e){var t=this.startNode(),n=this.inGenerator;return this.inGenerator=e,this.initFunction(t),this.expect(O.parenL),t.params=this.parseBindingList(O.parenR,!1,!1),this.options.ecmaVersion>=6&&(t.generator=e),this.parseFunctionBody(t,!1),this.inGenerator=n,this.finishNode(t,"FunctionExpression")},W.parseArrowExpression=function(e,t){var n=this.inGenerator;return this.inGenerator=!1,this.initFunction(e),e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0),this.inGenerator=n,this.finishNode(e,"ArrowFunctionExpression")},W.parseFunctionBody=function(e,t){var n=t&&this.type!==O.braceL;if(n)e.body=this.parseMaybeAssign(),e.expression=!0;else{var r=this.inFunction,i=this.labels;this.inFunction=!0,this.labels=[],e.body=this.parseBlock(!0),e.expression=!1,this.inFunction=r,this.labels=i}var o=!n&&e.body.body.length&&this.isUseStrict(e.body.body[0])?e.body.body[0]:null;if(this.strict||o){var s=this.strict;this.strict=!0,e.id&&this.checkLVal(e.id,!0),this.checkParams(e,o),this.strict=s}else t&&this.checkParams(e,o)},W.checkParams=function(e,t){for(var n=this,r={},i=0;i<e.params.length;i++)t&&n.options.ecmaVersion>=7&&"Identifier"!==e.params[i].type&&n.raiseRecoverable(t.start,"Illegal 'use strict' directive in function with non-simple parameter list"),n.checkLVal(e.params[i],!0,r)},W.parseExprList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);){if(s)s=!1;else if(i.expect(O.comma),t&&i.afterTrailingComma(e))break;var a;n&&i.type===O.comma?a=null:i.type===O.ellipsis?(a=i.parseSpread(r),i.type===O.comma&&r&&!r.trailingComma&&(r.trailingComma=i.lastTokStart)):a=i.parseMaybeAssign(!1,r),o.push(a)}return o},W.parseIdent=function(e){var t=this.startNode();return e&&"never"==this.options.allowReserved&&(e=!1),this.type===O.name?(!e&&(this.strict?this.reservedWordsStrict:this.reservedWords).test(this.value)&&(this.options.ecmaVersion>=6||-1==this.input.slice(this.start,this.end).indexOf("\\"))&&this.raiseRecoverable(this.start,"The keyword '"+this.value+"' is reserved"),!e&&this.inGenerator&&"yield"===this.value&&this.raiseRecoverable(this.start,"Can not use 'yield' as identifier inside a generator"),t.name=this.value):e&&this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"Identifier")},W.parseYield=function(){var e=this.startNode();return this.next(),this.type==O.semi||this.canInsertSemicolon()||this.type!=O.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(O.star),e.argument=this.parseMaybeAssign()),this.finishNode(e,"YieldExpression")};var Y=I.prototype;Y.raise=function(e,t){var n=c(this.input,e);t+=" ("+n.line+":"+n.column+")";var r=new SyntaxError(t);throw r.pos=e,r.loc=n,r.raisedAt=this.pos,r},Y.raiseRecoverable=Y.raise,Y.curPosition=function(){if(this.options.locations)return new N(this.curLine,this.pos-this.lineStart)};var X=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new M(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},K=I.prototype;K.startNode=function(){return new X(this,this.start,this.startLoc)},K.startNodeAt=function(e,t){return new X(this,e,t)},K.finishNode=function(e,t){return f.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},K.finishNodeAt=function(e,t,n,r){return f.call(this,e,t,n,r)};var J=function(e,t,n,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=r},Q={b_stat:new J("{",!1),b_expr:new J("{",!0),b_tmpl:new J("${",!0),p_stat:new J("(",!1),p_expr:new J("(",!0),q_tmpl:new J("`",!0,!0,function(e){return e.readTmplToken()}),f_expr:new J("function",!0)},Z=I.prototype;Z.initialContext=function(){return[Q.b_stat]},Z.braceIsBlock=function(e){if(e===O.colon){var t=this.curContext();if(t===Q.b_stat||t===Q.b_expr)return!t.isExpr}return e===O._return?F.test(this.input.slice(this.lastTokEnd,this.start)):e===O._else||e===O.semi||e===O.eof||e===O.parenR||(e==O.braceL?this.curContext()===Q.b_stat:!this.exprAllowed)},Z.updateContext=function(e){var t,n=this.type;n.keyword&&e==O.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr},O.parenR.updateContext=O.braceR.updateContext=function(){if(1!=this.context.length){var e=this.context.pop();e===Q.b_stat&&this.curContext()===Q.f_expr?(this.context.pop(),this.exprAllowed=!1):this.exprAllowed=e===Q.b_tmpl||!e.isExpr}else this.exprAllowed=!0},O.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Q.b_stat:Q.b_expr),this.exprAllowed=!0},O.dollarBraceL.updateContext=function(){this.context.push(Q.b_tmpl),this.exprAllowed=!0},O.parenL.updateContext=function(e){var t=e===O._if||e===O._for||e===O._with||e===O._while;this.context.push(t?Q.p_stat:Q.p_expr),this.exprAllowed=!0},O.incDec.updateContext=function(){},O._function.updateContext=function(e){e.beforeExpr&&e!==O.semi&&e!==O._else&&(e!==O.colon&&e!==O.braceL||this.curContext()!==Q.b_stat)&&this.context.push(Q.f_expr),this.exprAllowed=!1},O.backQuote.updateContext=function(){this.curContext()===Q.q_tmpl?this.context.pop():this.context.push(Q.q_tmpl),this.exprAllowed=!1};var ee=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new M(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},te=I.prototype,ne="object"==typeof Packages&&"[object JavaPackage]"==Object.prototype.toString.call(Packages);te.next=function(){this.options.onToken&&this.options.onToken(new ee(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},te.getToken=function(){return this.next(),new ee(this)},"undefined"!=typeof Symbol&&(te[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===O.eof,value:t}}}}),te.setStrict=function(e){var t=this;if(this.strict=e,this.type===O.num||this.type===O.string){if(this.pos=this.start,this.options.locations)for(;this.pos<this.lineStart;)t.lineStart=t.input.lastIndexOf("\n",t.lineStart-2)+1,--t.curLine;this.nextToken()}},te.curContext=function(){return this.context[this.context.length-1]},te.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(O.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},te.readToken=function(e){return n(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},te.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},te.skipBlockComment=function(){var e=this,t=this.options.onComment&&this.curPosition(),n=this.pos,r=this.input.indexOf("*/",this.pos+=2);if(-1===r&&this.raise(this.pos-2,"Unterminated comment"),this.pos=r+2,this.options.locations){B.lastIndex=n;for(var i;(i=B.exec(this.input))&&i.index<this.pos;)++e.curLine,e.lineStart=i.index+i[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,r),n,this.pos,t,this.curPosition())},te.skipLineComment=function(e){for(var t=this,n=this.pos,r=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++t.pos,i=t.input.charCodeAt(t.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(n+e,this.pos),n,this.pos,r,this.curPosition())},te.skipSpace=function(){var e=this;e:for(;this.pos<this.input.length;){var t=e.input.charCodeAt(e.pos);switch(t){case 32:case 160:++e.pos;break;case 13:10===e.input.charCodeAt(e.pos+1)&&++e.pos;case 10:case 8232:case 8233:++e.pos,e.options.locations&&(++e.curLine,e.lineStart=e.pos);break;case 47:switch(e.input.charCodeAt(e.pos+1)){case 42:e.skipBlockComment();break;case 47:e.skipLineComment(2);break;default:break e}break;default:if(!(t>8&&t<14||t>=5760&&D.test(String.fromCharCode(t))))break e;++e.pos}}},te.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n)},te.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(O.ellipsis)):(++this.pos,this.finishToken(O.dot))},te.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(O.assign,2):this.finishOp(O.slash,1)},te.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,r=42===e?O.star:O.modulo;return this.options.ecmaVersion>=7&&42===t&&(++n,r=O.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(O.assign,n+1):this.finishOp(r,n)},te.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?O.logicalOR:O.logicalAND,2):61===t?this.finishOp(O.assign,2):this.finishOp(124===e?O.bitwiseOR:O.bitwiseAND,1)},te.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(O.assign,2):this.finishOp(O.bitwiseXOR,1)},te.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45==t&&62==this.input.charCodeAt(this.pos+2)&&F.test(this.input.slice(this.lastTokEnd,this.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(O.incDec,2):61===t?this.finishOp(O.assign,2):this.finishOp(O.plusMin,1)},te.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(O.assign,n+1):this.finishOp(O.bitShift,n)):33==t&&60==e&&45==this.input.charCodeAt(this.pos+2)&&45==this.input.charCodeAt(this.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===t&&(n=2),this.finishOp(O.relational,n))},te.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(O.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(O.arrow)):this.finishOp(61===e?O.eq:O.prefix,1)},te.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(O.parenL);case 41:return++this.pos,this.finishToken(O.parenR);case 59:return++this.pos,this.finishToken(O.semi);case 44:return++this.pos,this.finishToken(O.comma);case 91:return++this.pos,this.finishToken(O.bracketL);case 93:return++this.pos,this.finishToken(O.bracketR);case 123:return++this.pos,this.finishToken(O.braceL);case 125:return++this.pos,this.finishToken(O.braceR);case 58:return++this.pos,this.finishToken(O.colon);case 63:return++this.pos,this.finishToken(O.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(O.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(O.prefix,1)}this.raise(this.pos,"Unexpected character '"+m(e)+"'")},te.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)};var re=!!d("ï¿¿","u");te.readRegexp=function(){for(var e,t,n=this,r=this.pos;;){n.pos>=n.input.length&&n.raise(r,"Unterminated regular expression");var i=n.input.charAt(n.pos);if(F.test(i)&&n.raise(r,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i}++n.pos}var o=this.input.slice(r,this.pos);++this.pos;var s=this.readWord1(),a=o,u="";if(s){var c=/^[gim]*$/;this.options.ecmaVersion>=6&&(c=/^[gimuy]*$/),c.test(s)||this.raise(r,"Invalid regular expression flag"),s.indexOf("u")>=0&&(re?u="u":(a=(a=a.replace(/\\u\{([0-9a-fA-F]+)\}/g,function(e,t,i){return(t=Number("0x"+t))>1114111&&n.raise(r+i+3,"Code point out of bounds"),"x"})).replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"),u=u.replace("u","")))}var l=null;return ne||(d(a,u,r,this),l=d(o,s)),this.finishToken(O.regexp,{pattern:o,flags:s,value:l})},te.readInt=function(e,t){for(var n=this,r=this.pos,i=0,o=0,s=null==t?1/0:t;o<s;++o){var a,u=n.input.charCodeAt(n.pos);if((a=u>=97?u-97+10:u>=65?u-65+10:u>=48&&u<=57?u-48:1/0)>=e)break;++n.pos,i=i*e+a}return this.pos===r||null!=t&&this.pos-r!==t?null:i},te.readRadixNumber=function(e){this.pos+=2;var t=this.readInt(e);return null==t&&this.raise(this.start+2,"Expected number in radix "+e),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(O.num,t)},te.readNumber=function(e){var t=this.pos,r=!1,i=48===this.input.charCodeAt(this.pos);e||null!==this.readInt(10)||this.raise(t,"Invalid number");var o=this.input.charCodeAt(this.pos);46===o&&(++this.pos,this.readInt(10),r=!0,o=this.input.charCodeAt(this.pos)),69!==o&&101!==o||(43!==(o=this.input.charCodeAt(++this.pos))&&45!==o||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number"),r=!0),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var s,a=this.input.slice(t,this.pos);return r?s=parseFloat(a):i&&1!==a.length?/[89]/.test(a)||this.strict?this.raise(t,"Invalid number"):s=parseInt(a,8):s=parseInt(a,10),this.finishToken(O.num,s)},te.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.raise(t,"Code point out of bounds")}else e=this.readHexChar(4);return e},te.readString=function(e){for(var t=this,n="",r=++this.pos;;){t.pos>=t.input.length&&t.raise(t.start,"Unterminated string constant");var i=t.input.charCodeAt(t.pos);if(i===e)break;92===i?(n+=t.input.slice(r,t.pos),n+=t.readEscapedChar(!1),r=t.pos):(s(i)&&t.raise(t.start,"Unterminated string constant"),++t.pos)}return n+=this.input.slice(r,this.pos++),this.finishToken(O.string,n)},te.readTmplToken=function(){for(var e=this,t="",n=this.pos;;){e.pos>=e.input.length&&e.raise(e.start,"Unterminated template");var r=e.input.charCodeAt(e.pos);if(96===r||36===r&&123===e.input.charCodeAt(e.pos+1))return e.pos===e.start&&e.type===O.template?36===r?(e.pos+=2,e.finishToken(O.dollarBraceL)):(++e.pos,e.finishToken(O.backQuote)):(t+=e.input.slice(n,e.pos),e.finishToken(O.template,t));if(92===r)t+=e.input.slice(n,e.pos),t+=e.readEscapedChar(!0),n=e.pos;else if(s(r)){switch(t+=e.input.slice(n,e.pos),++e.pos,r){case 13:10===e.input.charCodeAt(e.pos)&&++e.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(r)}e.options.locations&&(++e.curLine,e.lineStart=e.pos),n=e.pos}else++e.pos}},te.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return m(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],r=parseInt(n,8);return r>255&&(n=n.slice(0,-1),r=parseInt(n,8)),"0"!==n&&(this.strict||e)&&this.raise(this.pos-2,"Octal literal in strict mode"),this.pos+=n.length-1,String.fromCharCode(r)}return String.fromCharCode(t)}},te.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.raise(t,"Bad character escape sequence"),n},te.readWord1=function(){var e=this;this.containsEsc=!1;for(var t="",i=!0,o=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var a=e.fullCharCodeAtPos();if(r(a,s))e.pos+=a<=65535?1:2;else{if(92!==a)break;e.containsEsc=!0,t+=e.input.slice(o,e.pos);var u=e.pos;117!=e.input.charCodeAt(++e.pos)&&e.raise(e.pos,"Expecting Unicode escape sequence \\uXXXX"),++e.pos;var c=e.readCodePoint();(i?n:r)(c,s)||e.raise(u,"Invalid Unicode escape"),t+=m(c),o=e.pos}i=!1}return t+this.input.slice(o,this.pos)},te.readWord=function(){var e=this.readWord1(),t=O.name;return(this.options.ecmaVersion>=6||!this.containsEsc)&&this.keywords.test(e)&&(t=T[e]),this.finishToken(t,e)};e.version="3.3.0",e.parse=function(e,t){return new I(t,e).parse()},e.parseExpressionAt=function(e,t,n){var r=new I(n,e,t);return r.nextToken(),r.parseExpression()},e.tokenizer=function(e,t){return new I(t,e)},e.Parser=I,e.plugins=P,e.defaultOptions=R,e.Position=N,e.SourceLocation=M,e.getLineInfo=c,e.Node=X,e.TokenType=A,e.tokTypes=O,e.TokContext=J,e.tokContexts=Q,e.isIdentifierChar=r,e.isIdentifierStart=n,e.Token=ee,e.isNewLine=s,e.lineBreak=F,e.lineBreakG=B,Object.defineProperty(e,"__esModule",{value:!0})})},{}],15:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(e){"use strict";function t(e){return"string"==typeof e?function(t){return t==e}:e||function(){return!0}}function n(e,t,n){n(e,t)}function r(e,t,n){}var i=function(e,t){this.node=e,this.state=t},o=Object.create||function(e){function t(){}return t.prototype=e,new t},s={};s.Program=s.BlockStatement=function(e,t,n){for(var r=0;r<e.body.length;++r)n(e.body[r],t,"Statement")},s.Statement=n,s.EmptyStatement=r,s.ExpressionStatement=s.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")},s.IfStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Statement"),e.alternate&&n(e.alternate,t,"Statement")},s.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")},s.BreakStatement=s.ContinueStatement=r,s.WithStatement=function(e,t,n){n(e.object,t,"Expression"),n(e.body,t,"Statement")},s.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var r=0;r<e.cases.length;++r){var i=e.cases[r];i.test&&n(i.test,t,"Expression");for(var o=0;o<i.consequent.length;++o)n(i.consequent[o],t,"Statement")}},s.ReturnStatement=s.YieldExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression")},s.ThrowStatement=s.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")},s.TryStatement=function(e,t,n){n(e.block,t,"Statement"),e.handler&&n(e.handler,t),e.finalizer&&n(e.finalizer,t,"Statement")},s.CatchClause=function(e,t,n){n(e.param,t,"Pattern"),n(e.body,t,"ScopeBody")},s.WhileStatement=s.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.body,t,"Statement")},s.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit"),e.test&&n(e.test,t,"Expression"),e.update&&n(e.update,t,"Expression"),n(e.body,t,"Statement")},s.ForInStatement=s.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit"),n(e.right,t,"Expression"),n(e.body,t,"Statement")},s.ForInit=function(e,t,n){"VariableDeclaration"==e.type?n(e,t):n(e,t,"Expression")},s.DebuggerStatement=r,s.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")},s.VariableDeclaration=function(e,t,n){for(var r=0;r<e.declarations.length;++r)n(e.declarations[r],t)},s.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern"),e.init&&n(e.init,t,"Expression")},s.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var r=0;r<e.params.length;r++)n(e.params[r],t,"Pattern");n(e.body,t,e.expression?"ScopeExpression":"ScopeBody")},s.ScopeBody=function(e,t,n){return n(e,t,"Statement")},s.ScopeExpression=function(e,t,n){return n(e,t,"Expression")},s.Pattern=function(e,t,n){"Identifier"==e.type?n(e,t,"VariablePattern"):"MemberExpression"==e.type?n(e,t,"MemberPattern"):n(e,t)},s.VariablePattern=r,s.MemberPattern=n,s.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")},s.ArrayPattern=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Pattern")}},s.ObjectPattern=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r].value,t,"Pattern")},s.Expression=n,s.ThisExpression=s.Super=s.MetaProperty=r,s.ArrayExpression=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Expression")}},s.ObjectExpression=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r],t)},s.FunctionExpression=s.ArrowFunctionExpression=s.FunctionDeclaration,s.SequenceExpression=s.TemplateLiteral=function(e,t,n){for(var r=0;r<e.expressions.length;++r)n(e.expressions[r],t,"Expression")},s.UnaryExpression=s.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression")},s.BinaryExpression=s.LogicalExpression=function(e,t,n){n(e.left,t,"Expression"),n(e.right,t,"Expression")},s.AssignmentExpression=s.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern"),n(e.right,t,"Expression")},s.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Expression"),n(e.alternate,t,"Expression")},s.NewExpression=s.CallExpression=function(e,t,n){if(n(e.callee,t,"Expression"),e.arguments)for(var r=0;r<e.arguments.length;++r)n(e.arguments[r],t,"Expression")},s.MemberExpression=function(e,t,n){n(e.object,t,"Expression"),e.computed&&n(e.property,t,"Expression")},s.ExportNamedDeclaration=s.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"==e.type||e.declaration.id?"Statement":"Expression"),e.source&&n(e.source,t,"Expression")},s.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression")},s.ImportDeclaration=function(e,t,n){for(var r=0;r<e.specifiers.length;r++)n(e.specifiers[r],t);n(e.source,t,"Expression")},s.ImportSpecifier=s.ImportDefaultSpecifier=s.ImportNamespaceSpecifier=s.Identifier=s.Literal=r,s.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression"),n(e.quasi,t)},s.ClassDeclaration=s.ClassExpression=function(e,t,n){return n(e,t,"Class")},s.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern"),e.superClass&&n(e.superClass,t,"Expression");for(var r=0;r<e.body.body.length;r++)n(e.body.body[r],t)},s.MethodDefinition=s.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression"),n(e.value,t,"Expression")},e.simple=function(t,n,r,i,o){r||(r=e.base),function e(t,i,o){var s=o||t.type,a=n[s];r[s](t,i,e),a&&a(t,i)}(t,i,o)},e.ancestor=function(t,n,r,i){r||(r=e.base);var o=[];!function e(t,i,s){var a=s||t.type,u=n[a],c=t!=o[o.length-1];c&&o.push(t),r[a](t,i,e),u&&u(t,i||o,o),c&&o.pop()}(t,i)},e.recursive=function(t,n,r,i,o){var s=r?e.make(r,i):i;!function e(t,n,r){s[r||t.type](t,n,e)}(t,n,o)},e.findNodeAt=function(n,r,o,s,a,u){s=t(s),a||(a=e.base);try{!function e(t,n,u){var c=u||t.type;if((null==r||t.start<=r)&&(null==o||t.end>=o)&&a[c](t,n,e),(null==r||t.start==r)&&(null==o||t.end==o)&&s(c,t))throw new i(t,n)}(n,u)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAround=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){var u=a||t.type;if(!(t.start>r||t.end<r)&&(s[u](t,n,e),o(u,t)))throw new i(t,n)}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAfter=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){if(!(t.end<r)){var u=a||t.type;if(t.start>=r&&o(u,t))throw new i(t,n);s[u](t,n,e)}}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeBefore=function(n,r,o,s,a){o=t(o),s||(s=e.base);var u;return function e(t,n,a){if(!(t.start>r)){var c=a||t.type;t.end<=r&&(!u||u.node.end<t.end)&&o(c,t)&&(u=new i(t,n)),s[c](t,n,e)}}(n,a),u},e.make=function(t,n){n||(n=e.base);var r=o(n);for(var i in t)r[i]=t[i];return r},e.base=s,Object.defineProperty(e,"__esModule",{value:!0})})},{}],16:[function(e,t,n){"use strict";var r=e("acorn"),i=e("object-assign");t.exports=function(e,t){t=i({},o,t);try{var n=new r.Parser(t,e,0);t.strict&&(n.strict=!0),t.lineComment||(n.skipLineComment=function(e){this.raise(this.pos,"Line comments not allowed in an expression")}),n.nextToken(),n.parseExpression(),n.type!==r.tokTypes.eof&&n.unexpected()}catch(e){if(!t.throw)return!1;throw e}return!0};var o={throw:!1,strict:!1,lineComment:!1}},{acorn:14,"object-assign":28}],17:[function(e,t,n){"use strict";t.exports={html:"<!DOCTYPE html>",xml:'<?xml version="1.0" encoding="utf-8" ?>',transitional:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',strict:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',frameset:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',1.1:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">',basic:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">',mobile:'<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">',plist:'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">'}},{}],18:[function(e,t,n){"use strict";var r=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,o=r.call(arguments,1),s=Math.max(0,t.length-o.length),a=[],u=0;u<s;u++)a.push("$"+u);if(n=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof n){var i=t.apply(this,o.concat(r.call(arguments)));return Object(i)===i?i:this}return t.apply(e,o.concat(r.call(arguments)))}),t.prototype){var c=function(){};c.prototype=t.prototype,n.prototype=new c,c.prototype=null}return n}},{}],19:[function(e,t,n){"use strict";var r=e("./implementation");t.exports=Function.prototype.bind||r},{"./implementation":18}],20:[function(e,t,n){var r=e("function-bind");t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},{"function-bind":19}],21:[function(e,t,n){n.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,p=n?i-1:0,h=n?-1:1,f=e[t+p];for(p+=h,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+p],p+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+p],p+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=c}return(f?-1:1)*s*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,p=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,d=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+p>=1?h/u:h*Math.pow(2,1-p))*u>=2&&(s++,u/=2),s+p>=l?(a=0,s=l):s+p>=1?(a=(t*u-1)*Math.pow(2,i),s+=p):(a=t*Math.pow(2,p-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+f]=255&s,f+=d,s/=256,c-=8);e[n+f-d]|=128*m}},{}],22:[function(e,t,n){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}t.exports=function(e){return null!=e&&(r(e)||i(e)||!!e._isBuffer)}},{}],23:[function(e,t,n){arguments[4][16][0].apply(n,arguments)},{acorn:2,dup:16,"object-assign":28}],24:[function(e,t,n){t.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},{}],25:[function(e,t,n){"use strict";var r=e("has"),i=RegExp.prototype.exec,o=Object.getOwnPropertyDescriptor,s=function(e){try{var t=e.lastIndex;return e.lastIndex=0,i.call(e),!0}catch(e){return!1}finally{e.lastIndex=t}},a=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u)return"[object RegExp]"===a.call(e);var t=o(e,"lastIndex");return!(!t||!r(t,"value"))&&s(e)}},{has:20}],26:[function(e,t,n){"use strict";function r(e){return e instanceof Date?"new Date("+r(e.toISOString())+")":void 0===e?"undefined":JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/</g,"\\u003C").replace(/>/g,"\\u003E").replace(/\//g,"\\u002F")}t.exports=r},{}],27:[function(e,t,n){"use strict";function r(e){o(e,"Transformer must be an object"),o("string"==typeof e.name,"Transformer must have a name"),o("string"==typeof e.outputFormat,"Transformer must have an output format"),o(["compile","compileAsync","compileFile","compileFileAsync","compileClient","compileClientAsync","compileFileClient","compileFileClientAsync","render","renderAsync","renderFile","renderFileAsync"].some(function(t){return"function"==typeof e[t]}),"Transformer must implement at least one of the potential methods."),this._tr=e,this.name=this._tr.name,this.outputFormat=this._tr.outputFormat,this.inputFormats=this._tr.inputFormats||[this.name]}var i=e("fs"),o=e("assert"),s=e("promise"),a=e("is-promise"),u=t.exports=function(e){return new r(e)};u.Transformer=r,u.normalizeFn=function(e){if("function"==typeof e)return{fn:e,dependencies:[]};if(e&&"object"==typeof e&&"function"==typeof e.fn){if("dependencies"in e){if(!Array.isArray(e.dependencies))throw new Error("Result should have a dependencies property that is an array")}else e.dependencies=[];return e}throw new Error("Invalid result object from transform.")},u.normalizeFnAsync=function(e,t){return s.resolve(e).then(function(e){return e&&a(e.fn)?e.fn.then(function(t){return e.fn=t,e}):e}).then(u.normalizeFn).nodeify(t)},u.normalize=function(e){if("string"==typeof e)return{body:e,dependencies:[]};if(e&&"object"==typeof e&&"string"==typeof e.body){if("dependencies"in e){if(!Array.isArray(e.dependencies))throw new Error("Result should have a dependencies property that is an array")}else e.dependencies=[];return e}throw new Error("Invalid result object from transform.")},u.normalizeAsync=function(e,t){return s.resolve(e).then(function(e){return e&&a(e.body)?e.body.then(function(t){return e.body=t,e}):e}).then(u.normalize).nodeify(t)},i.readFile?(u.readFile=s.denodeify(i.readFile),u.readFileSync=i.readFileSync):(u.readFile=function(){throw new Error("fs.readFile unsupported")},u.readFileSync=function(){throw new Error("fs.readFileSync unsupported")});var c={compile:["compile","render"],compileAsync:["compileAsync","compile","render"],compileFile:["compileFile","compile","renderFile","render"],compileFileAsync:["compileFileAsync","compileFile","compileAsync","compile","renderFile","render"],compileClient:["compileClient"],compileClientAsync:["compileClientAsync","compileClient"],compileFileClient:["compileFileClient","compileClient"],compileFileClientAsync:["compileFileClientAsync","compileFileClient","compileClientAsync","compileClient"],render:["render","compile"],renderAsync:["renderAsync","render","compileAsync","compile"],renderFile:["renderFile","render","compileFile","compile"],renderFileAsync:["renderFileAsync","renderFile","renderAsync","render","compileFileAsync","compileFile","compileAsync","compile"]};r.prototype._hasMethod=function(e){return"function"==typeof this._tr[e]},r.prototype.can=function(e){return c[e].some(function(e){return this._hasMethod(e)}.bind(this))},r.prototype.compile=function(e,t){if(!this._hasMethod("compile")){if(this.can("render")){var n=this;return{fn:function(r){return u.normalize(n._tr.render(e,t,r)).body},dependencies:[]}}throw this.can("compileAsync")?new Error('The Transform "'+this.name+'" does not support synchronous compilation'):this.can("compileFileAsync")?new Error('The Transform "'+this.name+'" does not support compiling plain strings'):new Error('The Transform "'+this.name+'" does not support compilation')}return u.normalizeFn(this._tr.compile(e,t))},r.prototype.compileAsync=function(e,t,n){return this.can("compileAsync")?this._hasMethod("compileAsync")?u.normalizeFnAsync(this._tr.compileAsync(e,t),n):u.normalizeFnAsync(this.compile(e,t),n):s.reject(new Error('The Transform "'+this.name+'" does not support compiling plain strings')).nodeify(n)},r.prototype.compileFile=function(e,t){if(!this.can("compileFile"))throw new Error('The Transform "'+this.name+'" does not support synchronous compilation');return this._hasMethod("compileFile")?u.normalizeFn(this._tr.compileFile(e,t)):this._hasMethod("renderFile")?u.normalizeFn(function(n){return u.normalize(this._tr.renderFile(e,t,n)).body}.bind(this)):(t||(t={}),void 0===t.filename&&(t.filename=e),this.compile(u.readFileSync(e,"utf8"),t))},r.prototype.compileFileAsync=function(e,t,n){return this.can("compileFileAsync")?this._hasMethod("compileFileAsync")?u.normalizeFnAsync(this._tr.compileFileAsync(e,t),n):this._hasMethod("compileFile")||this._hasMethod("renderFile")?u.normalizeFnAsync(this.compileFile(e,t),n):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeFnAsync(u.readFile(e,"utf8").then(function(e){return this._hasMethod("compileAsync")?this._tr.compileAsync(e,t):this.compile(e,t)}.bind(this)),n)):s.reject(new Error('The Transform "'+this.name+'" does not support compilation'))},r.prototype.compileClient=function(e,t){if(!this.can("compileClient"))throw this.can("compileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client synchronously.'):this.can("compileFileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client from a string.'):new Error('The Transform "'+this.name+'" does not support compiling for the client');return u.normalize(this._tr.compileClient(e,t))},r.prototype.compileClientAsync=function(e,t,n){return this.can("compileClientAsync")?this._hasMethod("compileClientAsync")?u.normalizeAsync(this._tr.compileClientAsync(e,t),n):u.normalizeAsync(this._tr.compileClient(e,t),n):this.can("compileFileClientAsync")?s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client from a string.')).nodeify(n):s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client')).nodeify(n)},r.prototype.compileFileClient=function(e,t){if(!this.can("compileFileClient"))throw this.can("compileFileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client synchronously.'):new Error('The Transform "'+this.name+'" does not support compiling for the client');return this._hasMethod("compileFileClient")?u.normalize(this._tr.compileFileClient(e,t)):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalize(this._tr.compileClient(u.readFileSync(e,"utf8"),t)))},r.prototype.compileFileClientAsync=function(e,t,n){return this.can("compileFileClientAsync")?this._hasMethod("compileFileClientAsync")?u.normalizeAsync(this._tr.compileFileClientAsync(e,t),n):this._hasMethod("compileFileClient")?u.normalizeAsync(this._tr.compileFileClient(e,t),n):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeAsync(u.readFile(e,"utf8").then(function(e){return this._hasMethod("compileClientAsync")?this._tr.compileClientAsync(e,t):this._tr.compileClient(e,t)}.bind(this)),n)):s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client')).nodeify(n)},r.prototype.render=function(e,t,n){if(!this.can("render"))throw this.can("renderAsync")?new Error('The Transform "'+this.name+'" does not support rendering synchronously.'):this.can("renderFileAsync")?new Error('The Transform "'+this.name+'" does not support rendering from a string.'):new Error('The Transform "'+this.name+'" does not support rendering');if(this._hasMethod("render"))return u.normalize(this._tr.render(e,t,n));var r=u.normalizeFn(this._tr.compile(e,t)),i=r.fn(n||t);if("string"!=typeof i)throw new Error('The Transform "'+this.name+'" does not support rendering synchronously.');return u.normalize({body:i,dependencies:r.dependencies})},r.prototype.renderAsync=function(e,t,n,r){return"function"==typeof n&&(r=n,n=t),this.can("renderAsync")?this._hasMethod("renderAsync")?u.normalizeAsync(this._tr.renderAsync(e,t,n),r):this._hasMethod("render")?u.normalizeAsync(this._tr.render(e,t,n),r):u.normalizeAsync(this.compileAsync(e,t).then(function(e){return{body:e.fn(n||t),dependencies:e.dependencies}}),r):this.can("renderFileAsync")?s.reject(new Error('The Transform "'+this.name+'" does not support rendering from a string.')).nodeify(r):s.reject(new Error('The Transform "'+this.name+'" does not support rendering')).nodeify(r)},r.prototype.renderFile=function(e,t,n){if(!this.can("renderFile"))throw new Error('The Transform "'+this.name+'" does not support rendering synchronously.');if(this._hasMethod("renderFile"))return u.normalize(this._tr.renderFile(e,t,n));if(this._hasMethod("render"))return t||(t={}),void 0===t.filename&&(t.filename=e),u.normalize(this._tr.render(u.readFileSync(e,"utf8"),t,n));var r=this.compileFile(e,t);return u.normalize({body:r.fn(n||t),dependencies:r.dependencies})},r.prototype.renderFileAsync=function(e,t,n,r){if(!this.can("renderFileAsync"))throw new Error('The Transform "'+this.name+'" does not support rendering.');return"function"==typeof n&&(r=n,n=t),this._hasMethod("renderFileAsync")?u.normalizeAsync(this._tr.renderFileAsync(e,t,n),r):this._hasMethod("renderFile")?u.normalizeAsync(this._tr.renderFile(e,t,n),r):this._hasMethod("compile")||this._hasMethod("compileAsync")||this._hasMethod("compileFile")||this._hasMethod("compileFileAsync")?u.normalizeAsync(this.compileFileAsync(e,t).then(function(e){return{body:e.fn(n||t),dependencies:e.dependencies}}),r):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeAsync(u.readFile(e,"utf8").then(function(e){return this.renderAsync(e,t,n)}.bind(this)),r))}},{assert:7,fs:10,"is-promise":24,promise:32}],28:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)o.call(n,l)&&(u[l]=n[l]);if(i){a=i(n);for(var p=0;p<a.length;p++)s.call(n,a[p])&&(u[a[p]]=n[a[p]])}}return u}},{}],29:[function(e,t,n){n.endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"}},{}],30:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return i.exec(e).slice(1)};n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return n=t(r(n.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(e){var i=n.isAbsolute(e),o="/"===s(e,-1);return(e=t(r(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}for(var c=[],u=a;u<i.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},n.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return o(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:31}],31:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(p===setTimeout)return setTimeout(e,0);if((p===r||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function s(e){if(h===clearTimeout)return clearTimeout(e);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function a(){g&&d&&(g=!1,d.length?m=d.concat(m):v=-1,m.length&&u())}function u(){if(!g){var e=o(a);g=!0;for(var t=m.length;t;){for(d=m,m=[];++v<t;)d&&d[v].run();v=-1,t=m.length}d=null,g=!1,s(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var p,h,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:r}catch(e){p=r}try{h="function"==typeof clearTimeout?clearTimeout:i}catch(e){h=i}}();var d,m=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||g||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],32:[function(e,t,n){"use strict";t.exports=e("./lib")},{"./lib":37}],33:[function(e,t,n){"use strict";function r(){}function i(e){try{return e.then}catch(e){return v=e,y}}function o(e,t){try{return e(t)}catch(e){return v=e,y}}function s(e,t,n){try{e(t,n)}catch(e){return v=e,y}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("Promise constructor's argument is not a function");this._40=0,this._65=0,this._55=null,this._72=null,e!==r&&m(e,this)}function u(e,t,n){return new e.constructor(function(i,o){var s=new a(r);s.then(i,o),c(e,new d(t,n,s))})}function c(e,t){for(;3===e._65;)e=e._55;if(a._37&&a._37(e),0===e._65)return 0===e._40?(e._40=1,void(e._72=t)):1===e._40?(e._40=2,void(e._72=[e._72,t])):void e._72.push(t);l(e,t)}function l(e,t){g(function(){var n=1===e._65?t.onFulfilled:t.onRejected;if(null!==n){var r=o(n,e._55);r===y?h(t.promise,v):p(t.promise,r)}else 1===e._65?p(t.promise,e._55):h(t.promise,e._55)})}function p(e,t){if(t===e)return h(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=i(t);if(n===y)return h(e,v);if(n===e.then&&t instanceof a)return e._65=3,e._55=t,void f(e);if("function"==typeof n)return void m(n.bind(t),e)}e._65=1,e._55=t,f(e)}function h(e,t){e._65=2,e._55=t,a._87&&a._87(e,t),f(e)}function f(e){if(1===e._40&&(c(e,e._72),e._72=null),2===e._40){for(var t=0;t<e._72.length;t++)c(e,e._72[t]);e._72=null}}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function m(e,t){var n=!1,r=s(e,function(e){n||(n=!0,p(t,e))},function(e){n||(n=!0,h(t,e))});n||r!==y||(n=!0,h(t,v))}var g=e("asap/raw"),v=null,y={};t.exports=a,a._37=null,a._87=null,a._61=r,a.prototype.then=function(e,t){if(this.constructor!==a)return u(this,e,t);var n=new a(r);return c(this,new d(e,t,n)),n}},{"asap/raw":6}],34:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.prototype.done=function(e,t){(arguments.length?this.then.apply(this,arguments):this).then(null,function(e){setTimeout(function(){throw e},0)})}},{"./core.js":33}],35:[function(e,t,n){"use strict";function r(e){var t=new i(i._61);return t._65=1,t._55=e,t}var i=e("./core.js");t.exports=i;var o=r(!0),s=r(!1),a=r(null),u=r(void 0),c=r(0),l=r("");i.resolve=function(e){if(e instanceof i)return e;if(null===e)return a;if(void 0===e)return u;if(!0===e)return o;if(!1===e)return s;if(0===e)return c;if(""===e)return l;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new i(t.bind(e))}catch(e){return new i(function(t,n){n(e)})}return r(e)},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(s,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof i&&a.then===i.prototype.then){for(;3===a._65;)a=a._55;return 1===a._65?r(s,a._55):(2===a._65&&n(a._55),void a.then(function(e){r(s,e)},n))}var u=a.then;if("function"==typeof u)return void new i(u.bind(a)).then(function(e){r(s,e)},n)}t[s]=a,0==--o&&e(t)}if(0===t.length)return e([]);for(var o=t.length,s=0;s<t.length;s++)r(s,t[s])})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.forEach(function(e){i.resolve(e).then(t,n)})})},i.prototype.catch=function(e){return this.then(null,e)}},{"./core.js":33}],36:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.prototype.finally=function(e){return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})}},{"./core.js":33}],37:[function(e,t,n){"use strict";t.exports=e("./core.js"),e("./done.js"),e("./finally.js"),e("./es6-extensions.js"),e("./node-extensions.js"),e("./synchronous.js")},{"./core.js":33,"./done.js":34,"./es6-extensions.js":35,"./finally.js":36,"./node-extensions.js":38,"./synchronous.js":39}],38:[function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(n).concat([a]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}function i(e){for(var t=Math.max(e.length-1,3),n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+t+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+a+";","var res;","switch (argLength) {",n.concat(["extra"]).map(function(e,t){return"case "+t+":res = fn.call("+["self"].concat(n.slice(0,t)).concat("cb").join(",")+");break;"}).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}var o=e("./core.js"),s=e("asap");t.exports=o,o.denodeify=function(e,t){return"number"==typeof t&&t!==1/0?r(e,t):i(e)};var a="function (err, res) {if (err) { rj(err); } else { rs(res); }}";o.nodeify=function(e){return function(){var t=Array.prototype.slice.call(arguments),n="function"==typeof t[t.length-1]?t.pop():null,r=this;try{return e.apply(this,arguments).nodeify(n,r)}catch(e){if(null===n||void 0===n)return new o(function(t,n){n(e)});s(function(){n.call(r,e)})}}},o.prototype.nodeify=function(e,t){if("function"!=typeof e)return this;this.then(function(n){s(function(){e.call(t,null,n)})},function(n){s(function(){e.call(t,n)})})}},{"./core.js":33,asap:5}],39:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.enableSynchronous=function(){r.prototype.isPending=function(){return 0==this.getState()},r.prototype.isFulfilled=function(){return 1==this.getState()},r.prototype.isRejected=function(){return 2==this.getState()},r.prototype.getValue=function(){if(3===this._65)return this._55.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._55},r.prototype.getReason=function(){if(3===this._65)return this._55.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._55},r.prototype.getState=function(){return 3===this._65?this._55.getState():-1===this._65||-2===this._65?0:this._65}},r.disableSynchronous=function(){r.prototype.isPending=void 0,r.prototype.isFulfilled=void 0,r.prototype.isRejected=void 0,r.prototype.getValue=void 0,r.prototype.getReason=void 0,r.prototype.getState=void 0}},{"./core.js":33}],40:[function(e,t,n){"use strict";function r(e){return s(e,{pug:a,pug_interp:void 0})}function i(e){return s.toConstant(e,{pug:a,pug_interp:void 0})}var o=e("assert"),s=e("constantinople"),a=e("pug-runtime"),u=e("js-stringify");t.exports=function(e,t){function n(e,n,o,s){if(r(n))if("html"===t.format){var c=u(a.attr(e,i(n),o,t.terse)),l=s[s.length-1];l&&l[l.length-1]===c[0]?s[s.length-1]=l.substr(0,l.length-1)+c.substr(1):s.push(c)}else n=i(n),o&&(n=a.escape(n)),s.push(u(e)+": "+u(n));else"html"===t.format?s.push(t.runtime("attr")+'("'+e+'", '+n+", "+u(o)+", "+u(t.terse)+")"):(o&&(n=t.runtime("escape")+"("+n+")"),s.push(u(e)+": "+n))}o(Array.isArray(e),"Attrs should be an array"),o(e.every(function(e){return e&&"object"==typeof e&&"string"==typeof e.name&&("string"==typeof e.val||"boolean"==typeof e.val)&&"boolean"==typeof e.mustEscape}),"All attributes should be supplied as an object of the form {name, val, mustEscape}"),o(t&&"object"==typeof t,"Options should be an object"),o("boolean"==typeof t.terse,"Options.terse should be a boolean"),o("function"==typeof t.runtime,"Options.runtime should be a function that takes a runtime function name and returns the source code that will evaluate to that function at runtime"),o("html"===t.format||"object"===t.format,'Options.format should be "html" or "object"');var s=[],c=[],l=[];e.forEach(function(e){var o=e.name,p=e.val,h=e.mustEscape;"class"===o?(c.push(p),l.push(h)):("style"===o&&(p=r(p)?u(a.style(i(p))):t.runtime("style")+"("+p+")"),n(o,p,h,s))});var p=[];return c.length&&(c.every(r)?n("class",u(a.classes(c.map(i),l)),!1,p):(c=c.map(function(e,t){return r(e)&&(e=u(l[t]?a.escape(i(e)):i(e)),l[t]=!1),e}),n("class",t.runtime("classes")+"(["+c.join(",")+"], "+u(l)+")",!1,p))),s=p.concat(s),"html"===t.format?s.length?s.join("+"):'""':"{"+s.join(",")+"}"}},{assert:7,constantinople:13,"js-stringify":26,"pug-runtime":123}],41:[function(e,t,n){"use strict";function r(e){return f(e,{pug:l,pug_interp:void 0})}function i(e){return f.toConstant(e,{pug:l,pug_interp:void 0})}function o(e,t){this.options=t=t||{},this.node=e,this.bufferedConcatenationCount=0,this.hasCompiledDoctype=!1,this.hasCompiledTag=!1,this.pp=t.pretty||!1,this.pp&&"string"!=typeof this.pp&&(this.pp="  "),this.debug=!1!==t.compileDebug,this.indents=0,this.parentIndents=0,this.terse=!1,this.mixins={},this.dynamicMixins=!1,this.eachCount=0,t.doctype&&this.setDoctype(t.doctype),this.runtimeFunctionsUsed=[],this.inlineRuntimeFunctions=t.inlineRuntimeFunctions||!1,this.debug&&this.inlineRuntimeFunctions&&this.runtimeFunctionsUsed.push("rethrow")}function s(e){function t(e){return"Block"===e.type?e.nodes.every(t):"YieldBlock"===e.type||("Text"===e.type&&!/\n/.test(e.val)||e.isInline)}return e.block.nodes.every(t)}var a=e("doctypes"),u=e("pug-error"),c=e("pug-runtime/build"),l=e("pug-runtime"),p=e("pug-attrs"),h=e("void-elements"),f=e("constantinople"),d=e("js-stringify"),m=e("with"),g={pre:!0,textarea:!0},v=["pug","pug_mixins","pug_interp","pug_debug_filename","pug_debug_line","pug_debug_sources","pug_html"];t.exports=function(e,t){return new o(e,t).compile()},t.exports.CodeGenerator=o,o.prototype={runtime:function(e){return this.inlineRuntimeFunctions?(this.runtimeFunctionsUsed.push(e),"pug_"+e):"pug."+e},error:function(e,t,n){throw u(t,e,{line:n.line,column:n.column,filename:n.filename})},compile:function(){if(this.buf=[],this.pp&&this.buf.push("var pug_indent = [];"),this.lastBufferedIdx=-1,this.visit(this.node),!this.dynamicMixins)for(var e=Object.keys(this.mixins),t=0;t<e.length;t++){var n=this.mixins[e[t]];if(!n.used)for(var r=0;r<n.instances.length;r++)for(var i=n.instances[r].start;i<n.instances[r].end;i++)this.buf[i]=""}var o=this.buf.join("\n"),s=this.options.globals?this.options.globals.concat(v):v;return o=this.options.self?"var self = locals || {};"+o:m("locals || {}",o,s.concat(this.runtimeFunctionsUsed.map(function(e){return"pug_"+e}))),this.debug&&(this.options.includeSources&&(o="var pug_debug_sources = "+d(this.options.includeSources)+";\n"+o),o="var pug_debug_filename, pug_debug_line;try {"+o+"} catch (err) {"+(this.inlineRuntimeFunctions?"pug_rethrow":"pug.rethrow")+"(err, pug_debug_filename, pug_debug_line"+(this.options.includeSources?", pug_debug_sources[pug_debug_filename]":"")+");}"),c(this.runtimeFunctionsUsed)+"function "+(this.options.templateName||"template")+'(locals) {var pug_html = "", pug_mixins = {}, pug_interp;'+o+";return pug_html;}"},setDoctype:function(e){this.doctype=a[e.toLowerCase()]||"<!DOCTYPE "+e+">",this.terse="<!doctype html>"==this.doctype.toLowerCase(),this.xml=0==this.doctype.indexOf("<?xml")},buffer:function(e){e=(e=d(e)).substr(1,e.length-2),this.lastBufferedIdx==this.buf.length&&this.bufferedConcatenationCount<100?("code"===this.lastBufferedType&&(this.lastBuffered+=' + "',this.bufferedConcatenationCount++),this.lastBufferedType="text",this.lastBuffered+=e,this.buf[this.lastBufferedIdx-1]="pug_html = pug_html + "+this.bufferStartChar+this.lastBuffered+'";'):(this.bufferedConcatenationCount=0,this.buf.push('pug_html = pug_html + "'+e+'";'),this.lastBufferedType="text",this.bufferStartChar='"',this.lastBuffered=e,this.lastBufferedIdx=this.buf.length)},bufferExpression:function(e){if(r(e))return this.buffer(i(e)+"");this.lastBufferedIdx==this.buf.length&&this.bufferedConcatenationCount<100?(this.bufferedConcatenationCount++,"text"===this.lastBufferedType&&(this.lastBuffered+='"'),this.lastBufferedType="code",this.lastBuffered+=" + ("+e+")",this.buf[this.lastBufferedIdx-1]="pug_html = pug_html + ("+this.bufferStartChar+this.lastBuffered+");"):(this.bufferedConcatenationCount=0,this.buf.push("pug_html = pug_html + ("+e+");"),this.lastBufferedType="code",this.bufferStartChar="",this.lastBuffered="("+e+")",this.lastBufferedIdx=this.buf.length)},prettyIndent:function(e,t){e=e||0,t=t?"\n":"",this.buffer(t+Array(this.indents+e).join(this.pp)),this.parentIndents&&this.buf.push('pug_html = pug_html + pug_indent.join("");')},visit:function(e,t){var n=this.debug;if(!e){throw i=t?"A child of "+t.type+" ("+(t.filename||"Pug")+":"+t.line+")":"A top-level node",i+=" is "+e+", expected a Pug AST Node.",new TypeError(i)}if(n&&!1!==e.debug&&"Block"!==e.type&&e.line){var r=";pug_debug_line = "+e.line;e.filename&&(r+=";pug_debug_filename = "+d(e.filename)),this.buf.push(r+";")}if(!this["visit"+e.type]){var i;switch(i=t?"A child of "+t.type:"A top-level node",i+=" ("+(e.filename||"Pug")+":"+e.line+") is of type "+e.type+", which is not supported by pug-code-gen.",e.type){case"Filter":i+=" Please use pug-filters to preprocess this AST.";break;case"Extends":case"Include":case"NamedBlock":case"FileReference":i+=" Please use pug-linker to preprocess this AST."}throw new TypeError(i)}this.visitNode(e)},visitNode:function(e){return this["visit"+e.type](e)},visitCase:function(e){this.buf.push("switch ("+e.expr+"){"),this.visit(e.block,e),this.buf.push("}")},visitWhen:function(e){"default"==e.expr?this.buf.push("default:"):this.buf.push("case "+e.expr+":"),e.block&&(this.visit(e.block,e),this.buf.push("  break;"))},visitLiteral:function(e){this.buffer(e.str)},visitNamedBlock:function(e){return this.visitBlock(e)},visitBlock:function(e){var t=this.escapePrettyMode,n=this.pp;n&&e.nodes.length>1&&!t&&"Text"===e.nodes[0].type&&"Text"===e.nodes[1].type&&this.prettyIndent(1,!0);for(var r=0;r<e.nodes.length;++r)n&&r>0&&!t&&"Text"===e.nodes[r].type&&"Text"===e.nodes[r-1].type&&/\n$/.test(e.nodes[r-1].val)&&this.prettyIndent(1,!1),this.visit(e.nodes[r],e)},visitMixinBlock:function(e){this.pp&&this.buf.push("pug_indent.push('"+Array(this.indents+1).join(this.pp)+"');"),this.buf.push("block && block();"),this.pp&&this.buf.push("pug_indent.pop();")},visitDoctype:function(e){!e||!e.val&&this.doctype||this.setDoctype(e.val||"html"),this.doctype&&this.buffer(this.doctype),this.hasCompiledDoctype=!0},visitMixin:function(e){var t="pug_mixins[",n=e.args||"",r=e.block,i=e.attrs,o=this.attributeBlocks(e.attributeBlocks),s=this.pp,a="#"===e.name[0],u=e.name;if(a&&(this.dynamicMixins=!0),t+=(a?e.name.substr(2,e.name.length-3):'"'+e.name+'"')+"]",this.mixins[u]=this.mixins[u]||{used:!1,instances:[]},e.call){if(this.mixins[u].used=!0,s&&this.buf.push("pug_indent.push('"+Array(this.indents+1).join(s)+"');"),r||i.length||o.length){if(this.buf.push(t+".call({"),r){this.buf.push("block: function(){"),this.parentIndents++;var c=this.indents;this.indents=0,this.visit(e.block,e),this.indents=c,this.parentIndents--,i.length||o.length?this.buf.push("},"):this.buf.push("}")}if(o.length){if(i.length){l=this.attrs(i);o.unshift(l)}o.length>1?this.buf.push("attributes: "+this.runtime("merge")+"(["+o.join(",")+"])"):this.buf.push("attributes: "+o[0])}else if(i.length){var l=this.attrs(i);this.buf.push("attributes: "+l)}n?this.buf.push("}, "+n+");"):this.buf.push("});")}else this.buf.push(t+"("+n+");");s&&this.buf.push("pug_indent.pop();")}else{var p,h=this.buf.length;(n=n?n.split(","):[]).length&&/^\.\.\./.test(n[n.length-1].trim())&&(p=n.pop().trim().replace(/^\.\.\./,"")),this.buf.push(t+" = pug_interp = function("+n.join(",")+"){"),this.buf.push("var block = (this && this.block), attributes = (this && this.attributes) || {};"),p&&(this.buf.push("var "+p+" = [];"),this.buf.push("for (pug_interp = "+n.length+"; pug_interp < arguments.length; pug_interp++) {"),this.buf.push("  "+p+".push(arguments[pug_interp]);"),this.buf.push("}")),this.parentIndents++,this.visit(r,e),this.parentIndents--,this.buf.push("};");var f=this.buf.length;this.mixins[u].instances.push({start:h,end:f})}},visitTag:function(e,t){function n(){t?o.bufferExpression(e.expr):o.buffer(r)}this.indents++;var r=e.name,i=this.pp,o=this;!0===g[e.name]&&(this.escapePrettyMode=!0),this.hasCompiledTag||(this.hasCompiledDoctype||"html"!=r||this.visitDoctype(),this.hasCompiledTag=!0),i&&!e.isInline&&this.prettyIndent(0,!0),e.selfClosing||!this.xml&&h[e.name]?(this.buffer("<"),n(),this.visitAttributes(e.attrs,this.attributeBlocks(e.attributeBlocks)),this.terse&&!e.selfClosing?this.buffer(">"):this.buffer("/>"),(e.code||e.block&&("Block"!==e.block.type||0!==e.block.nodes.length)&&e.block.nodes.some(function(e){return"Text"!==e.type||!/^\s*$/.test(e.val)}))&&this.error(r+" is a self closing element: <"+r+"/> but contains nested content.","SELF_CLOSING_CONTENT",e)):(this.buffer("<"),n(),this.visitAttributes(e.attrs,this.attributeBlocks(e.attributeBlocks)),this.buffer(">"),e.code&&this.visitCode(e.code),this.visit(e.block,e),!i||e.isInline||!0===g[e.name]||s(e)||this.prettyIndent(0,!0),this.buffer("</"),n(),this.buffer(">")),!0===g[e.name]&&(this.escapePrettyMode=!1),this.indents--},visitInterpolatedTag:function(e){return this.visitTag(e,!0)},visitText:function(e){this.buffer(e.val)},visitComment:function(e){e.buffer&&(this.pp&&this.prettyIndent(1,!0),this.buffer("\x3c!--"+e.val+"--\x3e"))},visitYieldBlock:function(e){},visitBlockComment:function(e){e.buffer&&(this.pp&&this.prettyIndent(1,!0),this.buffer("\x3c!--"+(e.val||"")),this.visit(e.block,e),this.pp&&this.prettyIndent(1,!0),this.buffer("--\x3e"))},visitCode:function(e){if(e.buffer){var t=e.val.trim();t="null == (pug_interp = "+t+') ? "" : pug_interp',!1!==e.mustEscape&&(t=this.runtime("escape")+"("+t+")"),this.bufferExpression(t)}else this.buf.push(e.val);e.block&&(e.buffer||this.buf.push("{"),this.visit(e.block,e),e.buffer||this.buf.push("}"))},visitConditional:function(e){var t=e.test;this.buf.push("if ("+t+") {"),this.visit(e.consequent,e),this.buf.push("}"),e.alternate&&("Conditional"===e.alternate.type?(this.buf.push("else"),this.visitConditional(e.alternate)):(this.buf.push("else {"),this.visit(e.alternate,e),this.buf.push("}")))},visitWhile:function(e){var t=e.test;this.buf.push("while ("+t+") {"),this.visit(e.block,e),this.buf.push("}")},visitEach:function(e){var t=e.key||"pug_index"+this.eachCount;this.eachCount++,this.buf.push("// iterate "+e.obj+"\n;(function(){\n  var $$obj = "+e.obj+";\n  if ('number' == typeof $$obj.length) {"),e.alternate&&this.buf.push("    if ($$obj.length) {"),this.buf.push("      for (var "+t+" = 0, $$l = $$obj.length; "+t+" < $$l; "+t+"++) {\n        var "+e.val+" = $$obj["+t+"];"),this.visit(e.block,e),this.buf.push("      }"),e.alternate&&(this.buf.push("    } else {"),this.visit(e.alternate,e),this.buf.push("    }")),this.buf.push("  } else {\n    var $$l = 0;\n    for (var "+t+" in $$obj) {\n      $$l++;\n      var "+e.val+" = $$obj["+t+"];"),this.visit(e.block,e),this.buf.push("    }"),e.alternate&&(this.buf.push("    if ($$l === 0) {"),this.visit(e.alternate,e),this.buf.push("    }")),this.buf.push("  }\n}).call(this);\n")},visitAttributes:function(e,t){if(t.length){if(e.length){var n=this.attrs(e);t.unshift(n)}t.length>1?this.bufferExpression(this.runtime("attrs")+"("+this.runtime("merge")+"(["+t.join(",")+"]), "+d(this.terse)+")"):this.bufferExpression(this.runtime("attrs")+"("+t[0]+", "+d(this.terse)+")")}else e.length&&this.attrs(e,!0)},attrs:function(e,t){var n=p(e,{terse:this.terse,format:t?"html":"object",runtime:this.runtime.bind(this)});return t&&this.bufferExpression(n),n},attributeBlocks:e=>e&&e.slice().map(function(e){return e.val})}},{constantinople:13,doctypes:17,"js-stringify":26,"pug-attrs":40,"pug-error":42,"pug-runtime":123,"pug-runtime/build":122,"void-elements":153,with:154}],42:[function(e,t,n){"use strict";t.exports=function(e,t,n){var r,i=n.line,o=n.column,s=n.filename,a=n.src,u=i+(o?":"+o:"");if(a&&i>=1&&i<=a.split("\n").length){var c=a.split("\n"),l=Math.max(i-3,0),p=Math.min(c.length,i+3),h=c.slice(l,p).map(function(e,t){var n=t+l+1,r=(n==i?"  > ":"    ")+n+"| ",s=r+e;return n===i&&o>0&&(s+="\n",s+=Array(r.length+o).join("-")+"^"),s}).join("\n");r=(s||"Pug")+":"+u+"\n"+h+"\n\n"+t}else r=(s||"Pug")+":"+u+"\n\n"+t;var f=new Error(r);return f.code="PUG:"+e,f.msg=t,f.line=i,f.column=o,f.filename=s,f.src=a,f.toJSON=function(){return{code:this.code,msg:this.msg,line:this.line,column:this.column,filename:this.filename}},f}},{}],43:[function(e,t,n){"use strict";n.runFilter=e("./lib/run-filter"),n.handleFilters=e("./lib/handle-filters")},{"./lib/handle-filters":44,"./lib/run-filter":45}],44:[function(e,t,n){"use strict";function r(e,t,n,r){function u(e){var t=e.name;if(r&&r[t]&&(t=r[t],r[t]))throw l("FILTER_ALISE_CHAIN",'The filter "'+e.name+'" is an alias for "'+t+'", which is an alias for "'+r[t]+'".  Pug does not support chains of filter aliases.',e);return t}return n=n||{},c(e,function(e){function c(e,n,r,i){try{var o=u(e);return t&&t[o]?t[o](n,r):p(o,n,r,h,i)}catch(t){if("UNKNOWN_FILTER"===t.code)throw l(t.code,t.message,e);throw t}}var h=e.filename?a(e.filename):null;if("Filter"===e.type){i(e,t,n,r);var f=o(e);(m=s(e,n)).filename=e.filename,e.type="Text",e.val=c(e,f,m)}else if("RawInclude"===e.type&&e.filters.length){var d=e.filters.shift(),m=s(d,n),g=m.filename=e.file.fullPath,v=e.file.str;e.type="Text",e.val=function(e,n,r,i){var o=u(e);return t&&t[o]?t[o](r,i):c(e,n,i,"renderFile")}(d,g,v,m),e.filters.forEach(function(t){var r=s(t,n);r.filename=g,e.val=c(t,e.val,r)}),e.filters=void 0,e.file=void 0}},{includeDependencies:!0}),e}function i(e,t,n,i){e.block.nodes[0]&&"Filter"===e.block.nodes[0].type&&(e.block.nodes[0]=r(e.block,t,n,i).nodes[0])}function o(e){return e.block.nodes.map(function(e){return e.val}).join("")}function s(e,t){var n={};e.attrs.forEach(function(t){try{n[t.name]=u.toConstant(t.val)}catch(t){if(/not constant/.test(t.message))throw l("FILTER_OPTION_NOT_CONSTANT",t.message+" All filters are rendered compile-time so filter options must be constants.",e);throw t}});var r=t[e.name]||{};return Object.keys(r).forEach(function(e){n.hasOwnProperty(e)||(n[e]=r[e])}),n}var a=e("path").dirname,u=e("constantinople"),c=e("pug-walk"),l=e("pug-error"),p=e("./run-filter");t.exports=r},{"./run-filter":45,constantinople:13,path:30,"pug-error":42,"pug-walk":129}],45:[function(e,t,n){(function(n){"use strict";var r=e("jstransformer"),i=e("uglify-js"),o=e("clean-css"),s=e("resolve");t.exports=function(t,a,u,c,l){l=l||"render";var p;try{try{p=e(s.sync("jstransformer-"+t,{basedir:c||n.cwd()}))}catch(n){p=e("jstransformer-"+t)}p=r(p)}catch(e){}if(p){var h=p[l](a,u,u).body;if(u&&u.minify)try{switch(p.outputFormat){case"js":h=i.minify(h,{fromString:!0}).code;break;case"css":h=(new o).minify(h).styles}}catch(e){}return h}var f=new Error('unknown filter ":'+t+'"');throw f.code="UNKNOWN_FILTER",f}}).call(this,e("_process"))},{_process:31,"clean-css":46,jstransformer:27,resolve:10,"uglify-js":147}],46:[function(e,t,n){t.exports=e("./lib/clean")},{"./lib/clean":47}],47:[function(e,t,n){(function(n){function r(e){return void 0===e?["all"]:e}function i(e){return!T.existsSync(e)&&!/\.css$/.test(e)}function o(e){return T.existsSync(e)&&T.statSync(e).isDirectory()}function s(e){return e?{hostname:F.parse(e).hostname,port:parseInt(F.parse(e).port)}:{}}function a(e,t){function n(n){return n=t.options.debug?c(t,n):p(t,n),n=u(t,n),e?e.call(null,t.errors.length>0?t.errors:null,n):n}return function(e){return t.options.sourceMap?t.inputSourceMapTracker.track(e,function(){return t.options.sourceMapInlineSources?t.inputSourceMapTracker.resolveSources(function(){return n(e)}):n(e)}):n(e)}}function u(e,t){return t.stats=e.stats,t.errors=e.errors,t.warnings=e.warnings,t}function c(e,t){var r=n.hrtime();e.stats.originalSize=e.sourceTracker.removeAll(t).length,t=p(e,t);var i=n.hrtime(r);return e.stats.timeSpent=~~(1e3*i[0]+i[1]/1e6),e.stats.efficiency=1-t.styles.length/e.stats.originalSize,e.stats.minifiedSize=t.styles.length,t}function l(e){return function(t,r){var i=t.constructor.name+"#"+r,o=n.hrtime();e(t,r);var s=n.hrtime(o);console.log("%d ms: "+i,1e3*s[0]+s[1]/1e6)}}function p(e,t){var n=e.options,r=new b(e,n.keepSpecialComments,n.keepBreaks,n.sourceMap),i=new _(n.sourceMap),o=new x(n.sourceMap),s=new w(e,n.sourceMap,n.compatibility.properties.urlQuotes),a=n.sourceMap?y:v,u=function(e,n){t="function"==typeof e?e(t):e[n](t)};n.benchmark&&(u=l(u)),u(r,"escape"),u(i,"escape"),u(s,"escape"),u(o,"escape");var c=d(t,e);return m(c,n,e),n.advanced&&g(c,n,e,!0),a(c,n,function(t,a){return t=o.restore(t,a),t=s.restore(t),t=n.rebase?f(t,e):t,t=i.restore(t),r.restore(t)},e.inputSourceMapTracker)}var h=e("./imports/inliner"),f=e("./urls/rebase"),d=e("./tokenizer/tokenize"),m=e("./selectors/simple"),g=e("./selectors/advanced"),v=e("./stringifier/simple"),y=e("./stringifier/source-maps"),b=e("./text/comments-processor"),_=e("./text/expressions-processor"),x=e("./text/free-text-processor"),w=e("./text/urls-processor"),k=e("./utils/compatibility"),E=e("./utils/input-source-map-tracker"),A=e("./utils/source-tracker"),C=e("./utils/source-reader"),S=e("./properties/validator"),T=e("fs"),O=e("path"),F=e("url"),B=e("./utils/object").override;(t.exports=function(e){e=e||{},this.options={advanced:void 0===e.advanced||!!e.advanced,aggressiveMerging:void 0===e.aggressiveMerging||!!e.aggressiveMerging,benchmark:e.benchmark,compatibility:new k(e.compatibility).toOptions(),debug:e.debug,explicitRoot:!!e.root,explicitTarget:!!e.target,inliner:e.inliner||{},keepBreaks:e.keepBreaks||!1,keepSpecialComments:"keepSpecialComments"in e?e.keepSpecialComments:"*",mediaMerging:void 0===e.mediaMerging||!!e.mediaMerging,processImport:void 0===e.processImport||!!e.processImport,processImportFrom:r(e.processImportFrom),rebase:void 0===e.rebase||!!e.rebase,relativeTo:e.relativeTo,restructuring:void 0===e.restructuring||!!e.restructuring,root:e.root||n.cwd(),roundingPrecision:e.roundingPrecision,semanticMerging:void 0!==e.semanticMerging&&!!e.semanticMerging,shorthandCompacting:void 0===e.shorthandCompacting||!!e.shorthandCompacting,sourceMap:e.sourceMap,sourceMapInlineSources:!!e.sourceMapInlineSources,target:!e.target||i(e.target)||o(e.target)?e.target:O.dirname(e.target)},this.options.inliner.timeout=this.options.inliner.timeout||5e3,this.options.inliner.request=B(s(n.env.HTTP_PROXY||n.env.http_proxy),this.options.inliner.request||{})}).prototype.minify=function(e,t){var r={stats:{},errors:[],warnings:[],options:this.options,debug:this.options.debug,localOnly:!t,sourceTracker:new A,validator:new S(this.options.compatibility)};return r.options.sourceMap&&(r.inputSourceMapTracker=new E(r)),r.sourceReader=new C(r,e),e=r.sourceReader.toString(),r.options.processImport||e.indexOf("@shallow")>0?(t?n.nextTick:function(e){return e()})(function(){return new h(r).process(e,{localOnly:r.localOnly,imports:r.options.processImportFrom,whenDone:a(t,r)})}):a(t,r)(e)}}).call(this,e("_process"))},{"./imports/inliner":51,"./properties/validator":66,"./selectors/advanced":69,"./selectors/simple":82,"./stringifier/simple":86,"./stringifier/source-maps":87,"./text/comments-processor":88,"./text/expressions-processor":90,"./text/free-text-processor":91,"./text/urls-processor":92,"./tokenizer/tokenize":95,"./urls/rebase":96,"./utils/compatibility":100,"./utils/input-source-map-tracker":101,"./utils/object":102,"./utils/source-reader":104,"./utils/source-tracker":105,_process:31,fs:10,path:30,url:148}],48:[function(e,t,n){function r(e,t,n,r){return t+a[n.toLowerCase()]+r}function i(e,t,n){return u[t.toLowerCase()]+n}var o={},s={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"},a={},u={};for(var c in s){var l=s[c];c.length<l.length?u[l]=c:a[c]=l}var p=new RegExp("(^| |,|\\))("+Object.keys(a).join("|")+")( |,|\\)|$)","ig"),h=new RegExp("("+Object.keys(u).join("|")+")([^a-f0-9]|$)","ig");o.shorten=function(e){var t=e.indexOf("#")>-1,n=e.replace(p,r);return n!=e&&(n=n.replace(p,r)),t?n.replace(h,i):n},t.exports=o},{}],49:[function(e,t,n){function r(e,t,n){this.hue=e,this.saturation=t,this.lightness=n}function i(e,t,n){var r,i,s;if((e%=360)<0&&(e+=360),e=~~e/360,t<0?t=0:t>100&&(t=100),t=~~t/100,n<0?n=0:n>100&&(n=100),n=~~n/100,0===t)r=i=s=n;else{var a=n<.5?n*(1+t):n+t-n*t,u=2*n-a;r=o(u,a,e+1/3),i=o(u,a,e),s=o(u,a,e-1/3)}return[~~(255*r),~~(255*i),~~(255*s)]}function o(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}r.prototype.toHex=function(){var e=i(this.hue,this.saturation,this.lightness),t=e[0].toString(16),n=e[1].toString(16),r=e[2].toString(16);return"#"+(1==t.length?"0":"")+t+(1==n.length?"0":"")+n+(1==r.length?"0":"")+r},t.exports=r},{}],50:[function(e,t,n){function r(e,t,n){this.red=e,this.green=t,this.blue=n}r.prototype.toHex=function(){return"#"+("00000"+(Math.max(0,Math.min(~~this.red,255))<<16|Math.max(0,Math.min(~~this.green,255))<<8|Math.max(0,Math.min(~~this.blue,255))).toString(16)).slice(-6)},t.exports=r},{}],51:[function(e,t,n){(function(n){function r(e){this.outerContext=e}function i(e,t){if(t.shallow)return t.shallow=!1,t.done.push(e),a(t);for(var n=0,r=0,i=0,o=u(e);r<e.length&&-1!=(n=s(e,i));){if(!o(n)){if(-1==(r=e.indexOf(";",n))){i=e.length,e="";break}var p=e.substring(0,n);return t.done.push(p),t.left.unshift([e.substring(r+1),w(t,{shallow:!1})]),t.afterContent=c(p),l(e,n,r,t)}i=n+1}return t.done.push(e),a(t)}function o(e,t){return e.replace(k,function(e,n){return E.test(n)?e:e.replace(n,b.resolve(t,n))})}function s(e,t){var n=e.indexOf("@import",t),r=e.indexOf("@IMPORT",t);return n>-1&&-1==r?n:-1==n&&r>-1?r:Math.min(n,r)}function a(e){return e.left.length>0?i.apply(null,e.left.shift()):e.whenDone(e.done.join(""))}function u(e){var t=/(\/\*(?!\*\/)[\s\S]*?\*\/)/,n=0,r=0,i=!1;return function(o){var s,a=0,u=0,c=0,l=0;if(i)return!1;do{if(o>n&&o<r)return!0;if(!(s=e.match(t)))return i=!0,!1;n=a=s.index,c=(l=(u=a+s[0].length)+r)-s[0].length,e=e.substring(u),r=l}while(l<o);return l>o&&o>c}}function c(e){for(var t=u(e),n=-1;;)if(-1==(n=e.indexOf("{",n+1))||!t(n))break;return n>-1}function l(e,t,n,r){r.shallow=e.indexOf("@shallow")>0;var i=e.substring(s(e,t)+"@import".length+1,n).replace(/@shallow\)$/,")").trim(),o=0===i.indexOf("url("),u=o?4:0,l=/^['"]/.exec(i.substring(u,u+2)),m=l?i.indexOf(l[0],u+1):x(i," ")[0].length-(o?1:0),g=i.substring(u,m).replace(/['"]/g,"").replace(/\)$/,"").trim(),v=i.substring(m+1).replace(/^\)/,"").trim(),y=r.isRemote||E.test(g);return!y||!r.localOnly&&p(g,!0,r.imports)?y||p(g,!1,r.imports)?!y&&r.afterContent?(r.warnings.push('Ignoring local @import of "'+g+'" as after other CSS content.'),a(r)):(y?h:f)(g,v,r):(r.afterImport?r.warnings.push('Ignoring local @import of "'+g+'" as after other inlined content.'):d(g,v,r),a(r)):(r.afterContent||c(r.done.join(""))?r.warnings.push('Ignoring remote @import of "'+g+'" as no callback given.'):d(g,v,r),a(r))}function p(e,t,n){if(0===n.length)return!1;t&&A.test(e)&&(e="http:"+e);for(var r=t?b.parse(e).host:e,i=!0,o=0;o<n.length;o++){var s=n[o];"all"==s?i=!0:t&&"local"==s?i=!1:t&&"remote"==s?i=!0:t||"remote"!=s?t||"local"!=s?"!"==s[0]&&s.substring(1)===r&&(i=!1):i=!0:i=!1}return i}function h(e,t,r){function s(e){f||(f=!0,r.errors.push('Broken @import declaration of "'+u+'" - '+e),d(u,t,r),n.nextTick(function(){a(r)}))}var u=E.test(e)?e:b.resolve(r.relativeTo,e),c=u;if(A.test(u)&&(u="http:"+u),r.visited.indexOf(u)>-1)return a(r);r.debug&&console.error("Inlining remote stylesheet: "+u),r.visited.push(u);var l=r.inliner.request.protocol||r.inliner.request.hostname,p=l&&0!==l.indexOf("https://")||0===u.indexOf("http://")?v.get:y.get,f=!1,m=w(b.parse(u),r.inliner.request);void 0!==r.inliner.request.hostname&&(m.protocol=r.inliner.request.protocol||"http:",m.path=m.href),p(m,function(e){if(e.statusCode<200||e.statusCode>399)return s("error "+e.statusCode);if(e.statusCode>299)return h(b.resolve(u,e.headers.location),t,r);var a=[],l=b.parse(u);e.on("data",function(e){a.push(e.toString())}),e.on("end",function(){var e=a.join("");r.rebase&&(e=_(e,{toBase:c},r)),r.sourceReader.trackSource(u,e),e=r.sourceTracker.store(u,e),e=o(e,u),t.length>0&&(e="@media "+t+"{"+e+"}"),r.afterImport=!0;var s=w(r,{isRemote:!0,relativeTo:l.protocol+"//"+l.host+l.pathname});n.nextTick(function(){i(e,s)})})}).on("error",function(e){s(e.message)}).on("timeout",function(){s("timeout")}).setTimeout(r.inliner.timeout)}function f(e,t,n){var r="/"==e[0]?n.root:n.relativeTo,o=g.resolve(g.join(r,e));if(!m.existsSync(o)||!m.statSync(o).isFile())return n.errors.push('Broken @import declaration of "'+e+'"'),a(n);if(n.visited.indexOf(o)>-1)return a(n);n.debug&&console.error("Inlining local stylesheet: "+o),n.visited.push(o);var s=g.dirname(o),u=m.readFileSync(o,"utf8");if(n.rebase){var c={relative:!0,fromBase:s,toBase:n.baseRelativeTo};u=_(u,c,n)}var l=g.relative(n.root,o);return n.sourceReader.trackSource(l,u),u=n.sourceTracker.store(l,u),t.length>0&&(u="@media "+t+"{"+u+"}"),n.afterImport=!0,i(u,w(n,{relativeTo:s}))}function d(e,t,n){var r="@import url("+e+")"+(t.length>0?" "+t:"")+";";n.done.push(r)}var m=e("fs"),g=e("path"),v=e("http"),y=e("https"),b=e("url"),_=e("../urls/rewrite"),x=e("../utils/split"),w=e("../utils/object.js").override,k=/\/\*# sourceMappingURL=(\S+) \*\//,E=/^(https?:)?\/\//,A=/^\/\//;r.prototype.process=function(e,t){var n=this.outerContext.options.root;return t=w(t,{baseRelativeTo:this.outerContext.options.relativeTo||n,debug:this.outerContext.options.debug,done:[],errors:this.outerContext.errors,left:[],inliner:this.outerContext.options.inliner,rebase:this.outerContext.options.rebase,relativeTo:this.outerContext.options.relativeTo||n,root:n,sourceReader:this.outerContext.sourceReader,sourceTracker:this.outerContext.sourceTracker,warnings:this.outerContext.warnings,visited:[]}),i(e,t)},t.exports=r}).call(this,e("_process"))},{"../urls/rewrite":98,"../utils/object.js":102,"../utils/split":106,_process:31,fs:10,http:10,https:10,path:30,url:148}],52:[function(e,t,n){function r(e){return function(t){return"invert"==t[0]||e.isValidColor(t[0])}}function i(e){return function(t){return"inherit"!=t[0]&&e.isValidStyle(t[0])&&!e.isValidColorValue(t[0])}}function o(e,t,n){var r=n[e];return c(r.doubleValues&&2==r.defaultValue.length?[[e,t.important],[r.defaultValue[0]],[r.defaultValue[1]]]:r.doubleValues&&1==r.defaultValue.length?[[e,t.important],[r.defaultValue[0]]]:[[e,t.important],[r.defaultValue]])}function s(e){return function(t){return"inherit"!=t[0]&&e.isValidWidth(t[0])&&!e.isValidStyleKeyword(t[0])&&!e.isValidColorValue(t[0])}}function a(e,t){var n=t[e.name].components,r=[],i=e.value;if(i.length<1)return[];i.length<2&&(i[1]=i[0].slice(0)),i.length<3&&(i[2]=i[0].slice(0)),i.length<4&&(i[3]=i[1].slice(0));for(var o=n.length-1;o>=0;o--){var s=c([[n[o],e.important]]);s.value=[i[o]],r.unshift(s)}return r}function u(e,t,n){for(var a,u,c,l=t[e.name],p=[o(l.components[0],e,t),o(l.components[1],e,t),o(l.components[2],e,t)],h=0;h<3;h++){var f=p[h];f.name.indexOf("color")>0?a=f:f.name.indexOf("style")>0?u=f:c=f}if(1==e.value.length&&"inherit"==e.value[0][0]||3==e.value.length&&"inherit"==e.value[0][0]&&"inherit"==e.value[1][0]&&"inherit"==e.value[2][0])return a.value=u.value=c.value=[e.value[0]],p;var d,m,g=e.value.slice(0);return g.length>0&&(d=(m=g.filter(s(n))).length>1&&("none"==m[0][0]||"auto"==m[0][0])?m[1]:m[0])&&(c.value=[d],g.splice(g.indexOf(d),1)),g.length>0&&(d=g.filter(i(n))[0])&&(u.value=[d],g.splice(g.indexOf(d),1)),g.length>0&&(d=g.filter(r(n))[0])&&(a.value=[d],g.splice(g.indexOf(d),1)),p}var c=e("./wrap-for-optimizing").single,l=e("./invalid-property-error"),p=e("../utils/split"),h=",";t.exports={background:function(e,t,n){var r=o("background-image",e,t),i=o("background-position",e,t),s=o("background-size",e,t),a=o("background-repeat",e,t),u=o("background-attachment",e,t),c=o("background-origin",e,t),l=o("background-clip",e,t),h=o("background-color",e,t),f=[r,i,s,a,u,c,l,h],d=e.value,m=!1,g=!1,v=!1,y=!1;if(1==e.value.length&&"inherit"==e.value[0][0])return h.value=r.value=a.value=i.value=s.value=c.value=l.value=e.value,f;for(var b=d.length-1;b>=0;b--){var _=d[b];if(n.isValidBackgroundAttachment(_[0]))u.value=[_];else if(n.isValidBackgroundBox(_[0]))g?(c.value=[_],v=!0):(l.value=[_],g=!0);else if(n.isValidBackgroundRepeat(_[0]))y?a.value.unshift(_):(a.value=[_],y=!0);else if(n.isValidBackgroundPositionPart(_[0])||n.isValidBackgroundSizePart(_[0]))if(b>0){var x=d[b-1];if(x[0].indexOf("/")>0){var w=p(x[0],"/");s.value=[[w.pop()].concat(x.slice(1)),_],d[b-1]=[w.pop()].concat(x.slice(1))}else b>1&&"/"==d[b-2][0]?(s.value=[x,_],b-=2):"/"==x[0]?s.value=[_]:(m||(i.value=[]),i.value.unshift(_),m=!0)}else m||(i.value=[]),i.value.unshift(_),m=!0;else if(n.isValidBackgroundPositionAndSize(_[0])){var k=p(_[0],"/");s.value=[[k.pop()].concat(_.slice(1))],i.value=[[k.pop()].concat(_.slice(1))]}else h.value[0][0]!=t[h.name].defaultValue&&"none"!=h.value[0][0]||!n.isValidColor(_[0])?(n.isValidUrl(_[0])||n.isValidFunction(_[0]))&&(r.value=[_]):h.value=[_]}return g&&!v&&(c.value=l.value.slice(0)),f},border:u,borderRadius:function(e,t){for(var n=e.value,r=-1,i=0,s=n.length;i<s;i++)if("/"==n[i][0]){r=i;break}if(0===r||r===n.length-1)throw new l("Invalid border-radius value.");var u=o(e.name,e,t);u.value=r>-1?n.slice(0,r):n.slice(0),u.components=a(u,t);var c=o(e.name,e,t);c.value=r>-1?n.slice(r+1):n.slice(0),c.components=a(c,t);for(var p=0;p<4;p++)u.components[p].multiplex=!0,u.components[p].value=u.components[p].value.concat(c.components[p].value);return u.components},fourValues:a,listStyle:function(e,t,n){var r=o("list-style-type",e,t),i=o("list-style-position",e,t),s=o("list-style-image",e,t),a=[r,i,s];if(1==e.value.length&&"inherit"==e.value[0][0])return r.value=i.value=s.value=[e.value[0]],a;var u=e.value.slice(0),c=u.length,l=0;for(l=0,c=u.length;l<c;l++)if(n.isValidUrl(u[l][0])||"0"==u[l][0]){s.value=[u[l]],u.splice(l,1);break}for(l=0,c=u.length;l<c;l++)if(n.isValidListStyleType(u[l][0])){r.value=[u[l]],u.splice(l,1);break}return u.length>0&&n.isValidListStylePosition(u[0][0])&&(i.value=[u[0]]),a},multiplex:function(e){return function(t,n,r){var i,s,a,u,c=[],l=t.value;for(i=0,a=l.length;i<a;i++)","==l[i][0]&&c.push(i);if(0===c.length)return e(t,n,r);var p=[];for(i=0,a=c.length;i<=a;i++){var f=0===i?0:c[i-1]+1,d=i<a?c[i]:l.length,m=o(t.name,t,n);m.value=l.slice(f,d),p.push(e(m,n,r))}var g=p[0];for(i=0,a=g.length;i<a;i++)for(g[i].multiplex=!0,s=1,u=p.length;s<u;s++)g[i].value.push([h]),Array.prototype.push.apply(g[i].value,p[s][i].value);return g}},outline:u}},{"../utils/split":106,"./invalid-property-error":58,"./wrap-for-optimizing":68}],53:[function(e,t,n){function r(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!(!n.colorOpacity&&(n.isValidRgbaColor(r)||n.isValidHslaColor(r)))&&(!(!n.colorOpacity&&(n.isValidRgbaColor(o)||n.isValidHslaColor(o)))&&(!(!n.isValidNamedColor(o)&&!n.isValidHexColor(o))||!n.isValidNamedColor(r)&&!n.isValidHexColor(r)&&(!(!n.isValidRgbaColor(o)&&!n.isValidHslaColor(o))||!n.isValidRgbaColor(r)&&!n.isValidHslaColor(r)&&i(e,t,n))))}function i(e,t,n){var r=e.value[0][0],i=t.value[0][0];return!!n.areSameFunction(r,i)||r===i}t.exports={always:function(){return!0},alwaysButIntoFunction:function(e,t,n){var r=e.value[0][0],i=t.value[0][0],o=n.isValidFunction(r),s=n.isValidFunction(i);return o&&s?n.areSameFunction(r,i):!(!o&&s)},backgroundImage:function(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!("none"!=o&&"inherit"!=o&&!n.isValidUrl(o))||"none"!=r&&"inherit"!=r&&!n.isValidUrl(r)&&i(e,t,n)},border:function(e,t,n){return r(e.components[2],t.components[2],n)},color:r,sameValue:function(e,t){return e.value[0][0]===t.value[0][0]},sameFunctionOrValue:i,twoOptionalFunctions:function(e,t,n){var r=e.value[0][0],i=t.value[0][0];return!(n.isValidFunction(r)^n.isValidFunction(i))},unit:function(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!(n.isValidAndCompatibleUnitWithoutFunction(r)&&!n.isValidAndCompatibleUnitWithoutFunction(o))&&(!!n.isValidUnitWithoutFunction(o)||!n.isValidUnitWithoutFunction(r)&&(!(!n.isValidFunctionWithoutVendorPrefix(o)||!n.isValidFunctionWithoutVendorPrefix(r))||i(e,t,n)))}}},{}],54:[function(e,t,n){function r(e){var t=i([[e.name,e.important,e.hack]]);return t.unused=!1,t}var i=e("./wrap-for-optimizing").single;t.exports={deep:function(e){for(var t=r(e),n=e.components.length-1;n>=0;n--){var i=r(e.components[n]);i.value=e.components[n].value.slice(0),t.components.unshift(i)}return t.dirty=!0,t.value=e.value.slice(0),t},shallow:r}},{"./wrap-for-optimizing":68}],55:[function(e,t,n){var r=e("./break-up"),i=e("./can-override"),o=e("./restore"),s={color:{canOverride:i.color,defaultValue:"transparent",shortestValue:"red"},background:{components:["background-image","background-position","background-size","background-repeat","background-attachment","background-origin","background-clip","background-color"],breakUp:r.multiplex(r.background),defaultValue:"0 0",restore:o.multiplex(o.background),shortestValue:"0",shorthand:!0},"background-clip":{canOverride:i.always,defaultValue:"border-box",shortestValue:"border-box"},"background-color":{canOverride:i.color,defaultValue:"transparent",multiplexLastOnly:!0,nonMergeableValue:"none",shortestValue:"red"},"background-image":{canOverride:i.backgroundImage,defaultValue:"none"},"background-origin":{canOverride:i.always,defaultValue:"padding-box",shortestValue:"border-box"},"background-repeat":{canOverride:i.always,defaultValue:["repeat"],doubleValues:!0},"background-position":{canOverride:i.alwaysButIntoFunction,defaultValue:["0","0"],doubleValues:!0,shortestValue:"0"},"background-size":{canOverride:i.alwaysButIntoFunction,defaultValue:["auto"],doubleValues:!0,shortestValue:"0 0"},"background-attachment":{canOverride:i.always,defaultValue:"scroll"},border:{breakUp:r.border,canOverride:i.border,components:["border-width","border-style","border-color"],defaultValue:"none",restore:o.withoutDefaults,shorthand:!0},"border-color":{canOverride:i.color,defaultValue:"none",shorthand:!0},"border-style":{canOverride:i.always,defaultValue:"none",shorthand:!0},"border-width":{canOverride:i.unit,defaultValue:"medium",shortestValue:"0",shorthand:!0},"list-style":{components:["list-style-type","list-style-position","list-style-image"],canOverride:i.always,breakUp:r.listStyle,restore:o.withoutDefaults,defaultValue:"outside",shortestValue:"none",shorthand:!0},"list-style-type":{canOverride:i.always,defaultValue:"__hack",shortestValue:"none"},"list-style-position":{canOverride:i.always,defaultValue:"outside",shortestValue:"inside"},"list-style-image":{canOverride:i.always,defaultValue:"none"},outline:{components:["outline-color","outline-style","outline-width"],breakUp:r.outline,restore:o.withoutDefaults,defaultValue:"0",shorthand:!0},"outline-color":{canOverride:i.color,defaultValue:"invert",shortestValue:"red"},"outline-style":{canOverride:i.always,defaultValue:"none"},"outline-width":{canOverride:i.unit,defaultValue:"medium",shortestValue:"0"},"-moz-transform":{canOverride:i.sameFunctionOrValue},"-ms-transform":{canOverride:i.sameFunctionOrValue},"-webkit-transform":{canOverride:i.sameFunctionOrValue},transform:{canOverride:i.sameFunctionOrValue}},a=function(e,t,n){n=n||{},s[e]={canOverride:n.canOverride,components:t,breakUp:n.breakUp||r.fourValues,defaultValue:n.defaultValue||"0",restore:n.restore||o.fourValues,shortestValue:n.shortestValue,shorthand:!0};for(var a=0;a<t.length;a++)s[t[a]]={breakUp:n.breakUp||r.fourValues,canOverride:n.canOverride||i.unit,defaultValue:n.defaultValue||"0",shortestValue:n.shortestValue}};["","-moz-","-o-"].forEach(function(e){a(e+"border-radius",[e+"border-top-left-radius",e+"border-top-right-radius",e+"border-bottom-right-radius",e+"border-bottom-left-radius"],{breakUp:r.borderRadius,restore:o.borderRadius})}),a("border-color",["border-top-color","border-right-color","border-bottom-color","border-left-color"],{breakUp:r.fourValues,canOverride:i.color,defaultValue:"none",shortestValue:"red"}),a("border-style",["border-top-style","border-right-style","border-bottom-style","border-left-style"],{breakUp:r.fourValues,canOverride:i.always,defaultValue:"none"}),a("border-width",["border-top-width","border-right-width","border-bottom-width","border-left-width"],{defaultValue:"medium",shortestValue:"0"}),a("padding",["padding-top","padding-right","padding-bottom","padding-left"]),a("margin",["margin-top","margin-right","margin-bottom","margin-left"]);for(var u in s)if(s[u].shorthand)for(var c=0,l=s[u].components.length;c<l;c++)s[s[u].components[c]].componentOf=u;t.exports=s},{"./break-up":52,"./can-override":53,"./restore":64}],56:[function(e,t,n){var r=e("./clone").shallow,i=",";t.exports=function(e,t,n,o){for(var s=!(t.shorthand||n.shorthand||t.multiplex||n.multiplex),a=r(t),u=r(n),c=0,l=t.value.length;c<l;c++)for(var p=0,h=n.value.length;p<h;p++)if(t.value[c][0]!=i&&n.value[p][0]!=i&&!(s&&c!=p||(a.value=[t.value[c]],u.value=[n.value[p]],e(a,u,o))))return!1;return!0}},{"./clone":54}],57:[function(e,t,n){t.exports=function(e){for(var t=e.value.length-1;t>=0;t--)if("inherit"==e.value[t][0])return!0;return!1}},{}],58:[function(e,t,n){function r(e){this.name="InvalidPropertyError",this.message=e,this.stack=(new Error).stack}(r.prototype=Object.create(Error.prototype)).constructor=r,t.exports=r},{}],59:[function(e,t,n){function r(e,t,n,r){var i,s,a={},u=null;e:for(var c=0,l=e.length;c<l;c++){var p=e[c],d=!("-ms-filter"!=p.name&&"filter"!=p.name||"background"!=u&&"background-image"!=u)?u:p.name,m=p.important,g=p.hack;if(!p.unused)if(c>0&&i&&d==u&&m==i.important&&g==i.hack&&function(t){var n=e[t-1],r=e[t];return h(n.all,n.position)==h(r.all,r.position)}(c)&&!i.unused)p.unused=!0;else{if(d in a&&(n&&d!=u||function(e){return!1===t||!0===t?t:t.indexOf(e)>-1}(c))){var v=a[d],y=o[d]&&o[d].canOverride,b=!1;for(s=v.length-1;s>=0;s--){var _=e[v[s]],x=_.name!=d,w=_.important,k=_.hack;if(!_.unused&&((!x||!w)&&(w||!(k&&!g||!k&&g))&&(!w||"star"!=g&&"underscore"!=g)&&(k||g||x||!y||y(_,p,r)))){if(w&&!m||w&&g){p.unused=!0,i=p;continue e}b=!0,_.unused=!0}}if(b){c=-1,i=null,u=null,a={};continue}}else{a[d]=a[d]||[],a[d].push(c);var E=f[d];if(E)for(s=E.length-1;s>=0;s--){var A=E[s];a[A]=a[A]||[],a[A].push(c)}}u=d,i=p}}}function i(e,t,n,o,h,f){var d=f.validator,m=f.warnings,g=s(t);a(g,d,m),r(g,n,h.aggressiveMerging,d);for(var v=0,y=g.length;v<y;v++){var b=g[v];b.variable&&b.block&&i(e,b.value[0],n,o,h,f)}o&&h.shorthandCompacting&&(u(g,h.compatibility,d),c(g,h.sourceMap,d)),p(g),l(g)}var o=e("./compactable"),s=e("./wrap-for-optimizing").all,a=e("./populate-components"),u=e("./override-compactor"),c=e("./shorthand-compactor"),l=e("./remove-unused"),p=e("./restore-from-optimizing"),h=e("../stringifier/one-time").property,f={"animation-delay":["animation"],"animation-direction":["animation"],"animation-duration":["animation"],"animation-fill-mode":["animation"],"animation-iteration-count":["animation"],"animation-name":["animation"],"animation-play-state":["animation"],"animation-timing-function":["animation"],"-moz-animation-delay":["-moz-animation"],"-moz-animation-direction":["-moz-animation"],"-moz-animation-duration":["-moz-animation"],"-moz-animation-fill-mode":["-moz-animation"],"-moz-animation-iteration-count":["-moz-animation"],"-moz-animation-name":["-moz-animation"],"-moz-animation-play-state":["-moz-animation"],"-moz-animation-timing-function":["-moz-animation"],"-o-animation-delay":["-o-animation"],"-o-animation-direction":["-o-animation"],"-o-animation-duration":["-o-animation"],"-o-animation-fill-mode":["-o-animation"],"-o-animation-iteration-count":["-o-animation"],"-o-animation-name":["-o-animation"],"-o-animation-play-state":["-o-animation"],"-o-animation-timing-function":["-o-animation"],"-webkit-animation-delay":["-webkit-animation"],"-webkit-animation-direction":["-webkit-animation"],"-webkit-animation-duration":["-webkit-animation"],"-webkit-animation-fill-mode":["-webkit-animation"],"-webkit-animation-iteration-count":["-webkit-animation"],"-webkit-animation-name":["-webkit-animation"],"-webkit-animation-play-state":["-webkit-animation"],"-webkit-animation-timing-function":["-webkit-animation"],"border-color":["border"],"border-style":["border"],"border-width":["border"],"border-bottom":["border"],"border-bottom-color":["border-bottom","border-color","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left":["border"],"border-left-color":["border-left","border-color","border"],"border-left-style":["border-left","border-style","border"],"border-left-width":["border-left","border-width","border"],"border-right":["border"],"border-right-color":["border-right","border-color","border"],"border-right-style":["border-right","border-style","border"],"border-right-width":["border-right","border-width","border"],"border-top":["border"],"border-top-color":["border-top","border-color","border"],"border-top-style":["border-top","border-style","border"],"border-top-width":["border-top","border-width","border"],"font-family":["font"],"font-size":["font"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"transition-delay":["transition"],"transition-duration":["transition"],"transition-property":["transition"],"transition-timing-function":["transition"],"-moz-transition-delay":["-moz-transition"],"-moz-transition-duration":["-moz-transition"],"-moz-transition-property":["-moz-transition"],"-moz-transition-timing-function":["-moz-transition"],"-o-transition-delay":["-o-transition"],"-o-transition-duration":["-o-transition"],"-o-transition-property":["-o-transition"],"-o-transition-timing-function":["-o-transition"],"-webkit-transition-delay":["-webkit-transition"],"-webkit-transition-duration":["-webkit-transition"],"-webkit-transition-property":["-webkit-transition"],"-webkit-transition-timing-function":["-webkit-transition"]};t.exports=i},{"../stringifier/one-time":85,"./compactable":55,"./override-compactor":60,"./populate-components":61,"./remove-unused":62,"./restore-from-optimizing":63,"./shorthand-compactor":65,"./wrap-for-optimizing":68}],60:[function(e,t,n){function r(e){return function(t){return e.name===t.name}}function i(e,t){for(var n=0;n<e.components.length;n++){var r=e.components[n],i=k[r.name],o=i&&i.canOverride||o.sameValue,s=A(r);if(s.value=[[i.defaultValue]],!o(s,r,t))return!0}return!1}function o(e,t){return k[e.name].components.indexOf(t.name)>-1}function s(e,t){t.unused=!0,p(t,h(e)),e.value=t.value}function a(e,t){t.unused=!0,e.multiplex=!0,e.value=t.value}function u(e,t){t.unused=!0,e.value=t.value}function c(e,t){t.multiplex?a(e,t):e.multiplex?s(e,t):u(e,t)}function l(e,t){t.unused=!0;for(var n=0,r=e.components.length;n<r;n++)c(e.components[n],t.components[n],e.multiplex)}function p(e,t){e.multiplex=!0;for(var n=0,r=e.components.length;n<r;n++){var i=e.components[n];if(!i.multiplex)for(var o=i.value.slice(0),s=1;s<t;s++)i.value.push([B]),Array.prototype.push.apply(i.value,o)}}function h(e){for(var t=0,n=0,r=e.value.length;n<r;n++)e.value[n][0]==B&&t++;return t+1}function f(e){var t=[[e.name]].concat(e.value);return F([t],0).length}function d(e,t,n){for(var r=0,i=t;i>=0&&(e[i].name!=n||e[i].unused||r++,!(r>1));i--);return r>1}function m(e,t){for(var n=0,r=e.components.length;n<r;n++)if(g(t.isValidFunction,e.components[n]))return!0;return!1}function g(e,t){for(var n=0,r=t.value.length;n<r;n++)if(t.value[n][0]!=B&&e(t.value[n][0]))return!0;return!1}function v(e,t){if(!e.multiplex&&!t.multiplex||e.multiplex&&t.multiplex)return!1;var n,i=e.multiplex?e:t,o=e.multiplex?t:e,u=E(i);S([u]);var c=E(o);S([c]);var l=f(u)+1+f(c);return e.multiplex?s(n=u.components.filter(r(c))[0],c):(n=c.components.filter(r(u))[0],p(c,h(u)),a(n,u)),S([c]),l<f(c)}function y(e){return e.name in k}function b(e,t){return!e.multiplex&&("background"==e.name||"background-image"==e.name)&&t.multiplex&&("background"==t.name||"background-image"==t.name)&&_(t.value)}function _(e){for(var t=x(e),n=0,r=t.length;n<r;n++)if(1==t[n].length&&"none"==t[n][0][0])return!0;return!1}function x(e){for(var t=[],n=0,r=[],i=e.length;n<i;n++){var o=e[n];o[0]==B?(t.push(r),r=[]):r.push(o)}return t.push(r),t}var w=e("./can-override"),k=e("./compactable"),E=e("./clone").deep,A=e("./clone").shallow,C=e("./has-inherit"),S=e("./restore-from-optimizing"),T=e("./every-combination"),O=e("./vendor-prefixes").same,F=e("../stringifier/one-time").property,B=",";t.exports=function(e,t,n){var s,a,u,f,_,x,E;e:for(_=e.length-1;_>=0;_--)if(a=e[_],y(a)&&!a.variable)for(s=k[a.name].canOverride||w.sameValue,x=_-1;x>=0;x--)if(u=e[x],y(u)&&!(u.variable||u.unused||a.unused||u.hack&&!a.hack||!u.hack&&a.hack||C(a)||b(u,a)))if(!u.shorthand&&a.shorthand&&o(a,u)){if(!a.important&&u.important)continue;if(!O([u],a.components))continue;if(!g(n.isValidFunction,u)&&m(a,n))continue;f=a.components.filter(r(u))[0],s=k[u.name]&&k[u.name].canOverride||w.sameValue,T(s,u,f,n)&&(u.unused=!0)}else if(u.shorthand&&!a.shorthand&&o(u,a)){if(a.important&&!u.important)continue;if(!a.important&&u.important){a.unused=!0;continue}if(d(e,_-1,u.name))continue;if(m(u,n))continue;if(f=u.components.filter(r(a))[0],T(s,f,a,n)){var A=!t.properties.backgroundClipMerging&&f.name.indexOf("background-clip")>-1||!t.properties.backgroundOriginMerging&&f.name.indexOf("background-origin")>-1||!t.properties.backgroundSizeMerging&&f.name.indexOf("background-size")>-1,S=k[a.name].nonMergeableValue===a.value[0][0];if(A||S)continue;if(!t.properties.merging&&i(u,n))continue;if(f.value[0][0]!=a.value[0][0]&&(C(u)||C(a)))continue;if(v(u,a))continue;!u.multiplex&&a.multiplex&&p(u,h(a)),c(f,a),u.dirty=!0}}else if(u.shorthand&&a.shorthand&&u.name==a.name){if(!u.multiplex&&a.multiplex)continue;if(!a.important&&u.important){a.unused=!0;continue e}if(a.important&&!u.important){u.unused=!0;continue}for(E=u.components.length-1;E>=0;E--){var F=u.components[E],B=a.components[E];if(s=k[F.name].canOverride||w.sameValue,!T(s,F,B,n))continue e;if(!T(w.twoOptionalFunctions,F,B,n)&&n.isValidFunction(B))continue e}l(u,a),u.dirty=!0}else if(u.shorthand&&a.shorthand&&o(u,a)){if(!u.important&&a.important)continue;if(f=u.components.filter(r(a))[0],s=k[a.name].canOverride||w.sameValue,!T(s,f,a,n))continue;if(u.important&&!a.important){a.unused=!0;continue}if(k[a.name].restore(a,k).length>1)continue;c(f=u.components.filter(r(a))[0],a),a.dirty=!0}else if(u.name==a.name){if(u.important&&!a.important){a.unused=!0;continue}if(s=k[a.name].canOverride||w.sameValue,!T(s,u,a,n))continue;u.unused=!0}}},{"../stringifier/one-time":85,"./can-override":53,"./clone":54,"./compactable":55,"./every-combination":56,"./has-inherit":57,"./restore-from-optimizing":63,"./vendor-prefixes":67}],61:[function(e,t,n){var r=e("./compactable"),i=e("./invalid-property-error");t.exports=function(e,t,n){for(var o=e.length-1;o>=0;o--){var s=e[o],a=r[s.name];if(a&&a.shorthand){s.shorthand=!0,s.dirty=!0;try{s.components=a.breakUp(s,r,t)}catch(e){if(!(e instanceof i))throw e;s.components=[],n.push(e.message)}s.components.length>0?s.multiplex=s.components[0].multiplex:s.unused=!0}}}},{"./compactable":55,"./invalid-property-error":58}],62:[function(e,t,n){t.exports=function(e){for(var t=e.length-1;t>=0;t--){var n=e[t];n.unused&&n.all.splice(n.position,1)}}},{}],63:[function(e,t,n){function r(e){e.value[e.value.length-1][0]+=a}function i(e){"underscore"==e.hack?e.name=c+e.name:"star"==e.hack?e.name=u+e.name:"backslash"==e.hack?e.value[e.value.length-1][0]+=s:"bang"==e.hack&&(e.value[e.value.length-1][0]+=" "+l)}var o=e("./compactable"),s="\\9",a="!important",u="*",c="_",l="!ie";t.exports=function(e,t){for(var n=e.length-1;n>=0;n--){var s,a=e[n],u=o[a.name];if(!a.unused&&(a.dirty||a.important||a.hack)&&(!t&&u&&u.shorthand?(s=u.restore(a,o),a.value=s):s=a.value,a.important&&r(a),a.hack&&i(a),"all"in a)){var c=a.all[a.position];c[0][0]=a.name,c.splice(1,c.length-1),Array.prototype.push.apply(c,s)}}}},{"./compactable":55}],64:[function(e,t,n){function r(e){for(var t=0,n=e.length;t<n;t++){var r=e[t][0];if("inherit"!=r&&r!=s&&r!=a)return!1}return!0}function i(e){var t=e.components,n=t[0].value[0],r=t[1].value[0],i=t[2].value[0],o=t[3].value[0];return n[0]==r[0]&&n[0]==i[0]&&n[0]==o[0]?[n]:n[0]==i[0]&&r[0]==o[0]?[n,r]:r[0]==o[0]?[n,r,i]:[n,r,i,o]}var o=e("./clone").shallow,s=",",a="/";t.exports={background:function(e,t,n){function i(e){Array.prototype.unshift.apply(l,e.value)}function o(e){var n=t[e.name];return n.doubleValues?1==n.defaultValue.length?e.value[0][0]==n.defaultValue[0]&&(!e.value[1]||e.value[1][0]==n.defaultValue[0]):e.value[0][0]==n.defaultValue[0]&&(e.value[1]?e.value[1][0]:e.value[0][0])==n.defaultValue[1]:e.value[0][0]==n.defaultValue}for(var s,u,c=e.components,l=[],p=c.length-1;p>=0;p--){var h=c[p],f=o(h);if("background-clip"==h.name){var d=c[p-1],m=o(d);u=!(s=h.value[0][0]==d.value[0][0])&&(m&&!f||!m&&!f||!m&&f&&h.value[0][0]!=d.value[0][0]),s?i(d):u&&(i(h),i(d)),p--}else if("background-size"==h.name){var g=c[p-1],v=o(g);u=!(s=!v&&f)&&(v&&!f||!v&&!f),s?i(g):u?(i(h),l.unshift([a]),i(g)):1==g.value.length&&i(g),p--}else{if(f||t[h.name].multiplexLastOnly&&!n)continue;i(h)}}return 0===l.length&&1==e.value.length&&"0"==e.value[0][0]&&l.push(e.value[0]),0===l.length&&l.push([t[e.name].defaultValue]),r(l)?[l[0]]:l},borderRadius:function(e,t){if(e.multiplex){for(var n=o(e),r=o(e),s=0;s<4;s++){var a=e.components[s],u=o(e);u.value=[a.value[0]],n.components.push(u);var c=o(e);c.value=[a.value[1]||a.value[0]],r.components.push(c)}var l=i(n),p=i(r);return l.length!=p.length||l[0][0]!=p[0][0]||l.length>1&&l[1][0]!=p[1][0]||l.length>2&&l[2][0]!=p[2][0]||l.length>3&&l[3][0]!=p[3][0]?l.concat([["/"]]).concat(p):l}return i(e)},fourValues:i,multiplex:function(e){return function(t,n){if(!t.multiplex)return e(t,n,!0);var r,i,a=0,u=[],c={};for(r=0,i=t.components[0].value.length;r<i;r++)t.components[0].value[r][0]==s&&a++;for(r=0;r<=a;r++){for(var l=o(t),p=0,h=t.components.length;p<h;p++){var f=t.components[p],d=o(f);l.components.push(d);for(var m=c[d.name]||0,g=f.value.length;m<g;m++){if(f.value[m][0]==s){c[d.name]=m+1;break}d.value.push(f.value[m])}}var v=e(l,n,r==a);Array.prototype.push.apply(u,v),r<a&&u.push([","])}return u}},withoutDefaults:function(e,t){for(var n=e.components,i=[],o=n.length-1;o>=0;o--){var s=n[o],a=t[s.name];s.value[0][0]!=a.defaultValue&&i.unshift(s.value[0])}return 0===i.length&&i.push([t[e.name].defaultValue]),r(i)?[i[0]]:i}}},{"./clone":54}],65:[function(e,t,n){function r(e){var t;for(var n in e){if(void 0!==t&&e[n].important!=t)return!0;t=e[n].important}return!1}function i(e){var t=[];for(var n in e){var r=e[n],i=r.all[r.position],o=i[0][i[0].length-1];Array.isArray(o)&&Array.prototype.push.apply(t,o)}return t}function o(e,t,n,r,o){var s,f=a[n],d=[[n],[f.defaultValue]],m=p(d);m.shorthand=!0,m.dirty=!0,l([m],o,[]);for(var g=0,v=f.components.length;g<v;g++){var y=t[f.components[g]],b=a[y.name].canOverride;if(c(y))return;if(!h(b,m.components[g],y,o))return;m.components[g]=u(y),m.important=y.important,s=y.all}for(var _ in t)t[_].unused=!0;if(r){var x=i(t);x.length>0&&d[0].push(x)}m.position=s.length,m.all=s,m.all.push(d),e.push(m)}function s(e,t,n,i,s){var u=e[t];for(var c in n)if(void 0===u||c!=u.name){var l=a[c],p=n[c];l.components.length>Object.keys(p).length?delete n[c]:r(p)||o(e,p,c,i,s)}}var a=e("./compactable"),u=e("./clone").deep,c=e("./has-inherit"),l=e("./populate-components"),p=e("./wrap-for-optimizing").single,h=e("./every-combination");t.exports=function(e,t,n){var r={};if(!(e.length<3)){for(var i=0,o=e.length;i<o;i++){var u=e[i];if(!u.unused&&!u.hack&&!u.variable){var c=a[u.name];if(c&&c.componentOf)if(u.shorthand)s(e,i,r,t,n);else{var l=c.componentOf;r[l]=r[l]||{},r[l][u.name]=u}}}s(e,i,r,t,n)}}},{"./clone":54,"./compactable":55,"./every-combination":56,"./has-inherit":57,"./populate-components":61,"./wrap-for-optimizing":68}],66:[function(e,t,n){function r(e){var t="(\\-?\\.?\\d+\\.?\\d*("+s.slice(0).filter(function(t){return!(t in e.units)||!0===e.units[t]}).join("|")+"|)|auto|inherit)";this.compatibleCssUnitRegex=new RegExp("^"+t+"$","i"),this.compatibleCssUnitAnyRegex=new RegExp("^(none|"+o.join("|")+"|"+t+"|"+l+"|"+u+"|"+c+")$","i"),this.colorOpacity=e.colors.opacity}var i=e("../utils/split"),o=["thin","thick","medium","inherit","initial"],s=["px","%","em","in","cm","mm","ex","pt","pc","ch","rem","vh","vm","vmin","vmax","vw"],a="(\\-?\\.?\\d+\\.?\\d*("+s.join("|")+"|)|auto|inherit)",u="[A-Z]+(\\-|[A-Z]|[0-9])+\\(.*?\\)",c="\\-(\\-|[A-Z]|[0-9])+\\(.*?\\)",l="var\\(\\-\\-[^\\)]+\\)",p="("+l+"|"+u+"|"+c+")",h="("+a+"|(\\-moz\\-|\\-webkit\\-)?calc\\([^\\)]+\\))",f="(none|"+o.join("|")+"|"+a+"|"+l+"|"+u+"|"+c+")",d=new RegExp("^"+u+"$","i"),m=new RegExp("^"+c+"$","i"),g=new RegExp("^"+l+"$","i"),v=new RegExp("^"+p+"$","i"),y=new RegExp("^"+a+"$","i"),b=new RegExp("^"+h+"$","i"),_=new RegExp("^"+f+"$","i"),x=["repeat","no-repeat","repeat-x","repeat-y","inherit"],w=["inherit","scroll","fixed","local"],k=["center","top","bottom","left","right"],E=["contain","cover"],A=["border-box","content-box","padding-box"],C=["auto","inherit","hidden","none","dotted","dashed","solid","double","groove","ridge","inset","outset"],S=["armenian","circle","cjk-ideographic","decimal","decimal-leading-zero","disc","georgian","hebrew","hiragana","hiragana-iroha","inherit","katakana","katakana-iroha","lower-alpha","lower-greek","lower-latin","lower-roman","none","square","upper-alpha","upper-latin","upper-roman"],T=["inside","outside","inherit"];r.prototype.isValidHexColor=function(e){return(4===e.length||7===e.length)&&"#"===e[0]},r.prototype.isValidRgbaColor=function(e){return(e=e.split(" ").join("")).length>0&&0===e.indexOf("rgba(")&&e.indexOf(")")===e.length-1},r.prototype.isValidHslaColor=function(e){return(e=e.split(" ").join("")).length>0&&0===e.indexOf("hsla(")&&e.indexOf(")")===e.length-1},r.prototype.isValidNamedColor=function(e){return"auto"!==e&&("transparent"===e||"inherit"===e||/^[a-zA-Z]+$/.test(e))},r.prototype.isValidVariable=function(e){return g.test(e)},r.prototype.isValidColor=function(e){return this.isValidNamedColor(e)||this.isValidColorValue(e)||this.isValidVariable(e)||this.isValidVendorPrefixedValue(e)},r.prototype.isValidColorValue=function(e){return this.isValidHexColor(e)||this.isValidRgbaColor(e)||this.isValidHslaColor(e)},r.prototype.isValidUrl=function(e){return 0===e.indexOf("__ESCAPED_URL_CLEAN_CSS")},r.prototype.isValidUnit=function(e){return _.test(e)},r.prototype.isValidUnitWithoutFunction=function(e){return y.test(e)},r.prototype.isValidAndCompatibleUnit=function(e){return this.compatibleCssUnitAnyRegex.test(e)},r.prototype.isValidAndCompatibleUnitWithoutFunction=function(e){return this.compatibleCssUnitRegex.test(e)},r.prototype.isValidFunctionWithoutVendorPrefix=function(e){return d.test(e)},r.prototype.isValidFunctionWithVendorPrefix=function(e){return m.test(e)},r.prototype.isValidFunction=function(e){return v.test(e)},r.prototype.isValidBackgroundRepeat=function(e){return x.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundAttachment=function(e){return w.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundBox=function(e){return A.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundPositionPart=function(e){return k.indexOf(e)>=0||b.test(e)||this.isValidVariable(e)},r.prototype.isValidBackgroundPosition=function(e){if("inherit"===e)return!0;for(var t=e.split(" "),n=0,r=t.length;n<r;n++)if(""!==t[n]&&!this.isValidBackgroundPositionPart(t[n])&&!this.isValidVariable(t[n]))return!1;return!0},r.prototype.isValidBackgroundSizePart=function(e){return E.indexOf(e)>=0||y.test(e)||this.isValidVariable(e)},r.prototype.isValidBackgroundPositionAndSize=function(e){if(e.indexOf("/")<0)return!1;var t=i(e,"/");return this.isValidBackgroundSizePart(t.pop())&&this.isValidBackgroundPositionPart(t.pop())},r.prototype.isValidListStyleType=function(e){return S.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidListStylePosition=function(e){return T.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidStyle=function(e){return this.isValidStyleKeyword(e)||this.isValidVariable(e)},r.prototype.isValidStyleKeyword=function(e){return C.indexOf(e)>=0},r.prototype.isValidWidth=function(e){return this.isValidUnit(e)||this.isValidWidthKeyword(e)||this.isValidVariable(e)},r.prototype.isValidWidthKeyword=function(e){return o.indexOf(e)>=0},r.prototype.isValidVendorPrefixedValue=function(e){return/^-([A-Za-z0-9]|-)*$/gi.test(e)},r.prototype.areSameFunction=function(e,t){return!(!this.isValidFunction(e)||!this.isValidFunction(t))&&e.substring(0,e.indexOf("("))===t.substring(0,t.indexOf("("))},t.exports=r},{"../utils/split":106}],67:[function(e,t,n){function r(e){for(var t=[],n=0,r=e.length;n<r;n++)for(var o=e[n],s=0,a=o.value.length;s<a;s++){var u=i.exec(o.value[s][0]);u&&-1==t.indexOf(u[0])&&t.push(u[0])}return t}var i=/$\-moz\-|\-ms\-|\-o\-|\-webkit\-/;t.exports={same:function(e,t){return r(e).sort().join(",")==r(t).sort().join(",")}}},{}],68:[function(e,t,n){function r(e){for(var t=1,n=e.length;t<n;t++)if(","==e[t][0]||"/"==e[t][0])return!0;return!1}function i(e){var t=!1,n=e[0][0],r=e[e.length-1];return n[0]==d?t="underscore":n[0]==f?t="star":r[0][0]!=m||r[0].match(p)?r[0].indexOf(m)>0&&!r[0].match(p)?t="bang":r[0].indexOf(l)>0&&r[0].indexOf(l)==r[0].length-l.length-1?t="backslash":0===r[0].indexOf(l)&&2==r[0].length&&(t="backslash"):t="bang",t}function o(e){if(e.length>1){var t=e[e.length-1][0];if("string"==typeof t)return h.test(t)}return!1}function s(e){e.length>0&&(e[e.length-1][0]=e[e.length-1][0].replace(h,""))}function a(e){e[0][0]=e[0][0].substring(1)}function u(e,t){var n=e[e.length-1];n[0]=n[0].substring(0,n[0].indexOf("backslash"==t?l:m)).trim(),0===n[0].length&&e.pop()}function c(e){var t=o(e);t&&s(e);var n=i(e);"star"==n||"underscore"==n?a(e):"backslash"!=n&&"bang"!=n||u(e,n);var c=0===e[0][0].indexOf("--");return{block:c&&e[1]&&Array.isArray(e[1][0][0]),components:[],dirty:!1,hack:n,important:t,name:e[0][0],multiplex:e.length>2&&r(e),position:0,shorthand:!1,unused:e.length<2,value:e.slice(1),variable:c}}var l="\\",p=new RegExp("important$","i"),h=new RegExp("!important$","i"),f="*",d="_",m="!";t.exports={all:function(e){for(var t=[],n=e.length-1;n>=0;n--)if("string"!=typeof e[n][0]){var r=c(e[n]);r.all=e,r.position=n,t.unshift(r)}return t},single:c}},{}],69:[function(e,t,n){function r(e){for(var t=0,n=e.length;t<n;t++){var i=e[t],o=!1;switch(i[0]){case"selector":o=0===i[1].length||0===i[2].length;break;case"block":r(i[2]),o=0===i[2].length}o&&(e.splice(t,1),t--,n--)}}function i(e,t,n){for(var r=0,i=e.length;r<i;r++){var o=e[r];if("block"==o[0]){var a=/@(-moz-|-o-|-webkit-)?keyframes/.test(o[1][0]);s(o[2],t,n,!a)}}}function o(e,t,n){for(var r=0,i=e.length;r<i;r++){var s=e[r];switch(s[0]){case"selector":a(s[1],s[2],!1,!0,t,n);break;case"block":o(s[2],t,n)}}}function s(e,t,n,a){if(i(e,t,n),o(e,t,n),u(e),c(e,t,n),l(e,t,n),p(e,t,n),h(e,t),t.restructuring&&a&&(f(e,t),c(e,t,n)),t.mediaMerging){d(e);for(var g=m(e),v=g.length-1;v>=0;v--)s(g[v][2],t,n,!1)}r(e)}var a=e("../properties/optimizer"),u=e("./remove-duplicates"),c=e("./merge-adjacent"),l=e("./reduce-non-adjacent"),p=e("./merge-non-adjacent-by-selector"),h=e("./merge-non-adjacent-by-body"),f=e("./restructure"),d=e("./remove-duplicate-media-queries"),m=e("./merge-media-queries");t.exports=s},{"../properties/optimizer":59,"./merge-adjacent":73,"./merge-media-queries":74,"./merge-non-adjacent-by-body":75,"./merge-non-adjacent-by-selector":76,"./reduce-non-adjacent":77,"./remove-duplicate-media-queries":78,"./remove-duplicates":79,"./restructure":81}],70:[function(e,t,n){function r(e,t){return"["+t.replace(/ /g,"")+"]"}function i(e,t){return e[0]>t[0]?1:-1}function o(e,t,n,r){return t&&n&&r.length?t+n+" ":t&&n?t+n:n}var s={selectors:function(e,t,n){for(var s=[],a=[],u=0,c=e.length;u<c;u++){var l=e[u],p=l[0].replace(/\s+/g," ").replace(/ ?, ?/g,",").replace(/\s*(\\)?([>+~])(\s*)/g,o).trim();n&&p.indexOf("nav")>0&&(p=p.replace(/\+nav(\S|$)/,"+ nav$1")),(!t||-1==p.indexOf("*+html ")&&-1==p.indexOf("*:first-child+html "))&&(p.indexOf("*")>-1&&(p=p.replace(/\*([:#\.\[])/g,"$1").replace(/^(\:first\-child)?\+html/,"*$1+html")),p.indexOf("[")>-1&&(p=p.replace(/\[([^\]]+)\]/g,r)),-1==a.indexOf(p)&&(l[0]=p,a.push(p),s.push(l)))}return s.sort(i)},selectorDuplicates:function(e){for(var t=[],n=[],r=0,o=e.length;r<o;r++){var s=e[r];-1==n.indexOf(s[0])&&(n.push(s[0]),t.push(s))}return t.sort(i)},block:function(e,t){e[0]=e[0].replace(/\s+/g," ").replace(/(,|:|\() /g,"$1").replace(/ \)/g,")"),t||(e[0]=e[0].replace(/\) /g,")"))},atRule:function(e){e[0]=e[0].replace(/\s+/g," ").trim()}};t.exports=s},{}],71:[function(e,t,n){function r(e){var t=[];if("selector"==e[0])for(var n=!/[\.\+>~]/.test(o(e[1])),u=0,c=e[2].length;u<c;u++){var l=e[2][u];if(0!==l.indexOf("__ESCAPED")&&l[0]!=a){var p=e[2][u][0][0];if(0!==p.length&&0!==p.indexOf("--")){var h=s(e[2],u);t.push([p,h,i(p),e[2][u],p+":"+h,e[1],n])}}}else if("block"==e[0])for(var f=0,d=e[2].length;f<d;f++)t=t.concat(r(e[2][f]));return t}function i(e){return"list-style"==e?e:e.indexOf("-radius")>0?"border-radius":"border-collapse"==e||"border-spacing"==e||"border-image"==e?e:0===e.indexOf("border-")&&/^border\-\w+\-\w+$/.test(e)?e.match(/border\-\w+/)[0]:0===e.indexOf("border-")&&/^border\-\w+$/.test(e)?"border":0===e.indexOf("text-")?e:e.replace(/^\-\w+\-/,"").match(/([a-zA-Z]+)/)[0].toLowerCase()}var o=e("../stringifier/one-time").selectors,s=e("../stringifier/one-time").value,a="at-rule";t.exports=r},{"../stringifier/one-time":85}],72:[function(e,t,n){t.exports=function(e,t){return e.compatibility.selectors.special.test(t)}},{}],73:[function(e,t,n){var r=e("../properties/optimizer"),i=e("../stringifier/one-time").body,o=e("../stringifier/one-time").selectors,s=e("./clean-up").selectors,a=e("./is-special");t.exports=function(e,t,n){for(var u=[null,[],[]],c=t.compatibility.selectors.adjacentSpace,l=0,p=e.length;l<p;l++){var h=e[l];if("selector"==h[0])if("selector"==u[0]&&o(h[1])==o(u[1])){var f=[u[2].length];Array.prototype.push.apply(u[2],h[2]),r(h[1],u[2],f,!0,t,n),h[2]=[]}else"selector"!=u[0]||i(h[2])!=i(u[2])||a(t,o(h[1]))||a(t,o(u[1]))?u=h:(u[1]=s(u[1].concat(h[1]),!1,c),h[2]=[]);else u=[null,[],[]]}}},{"../properties/optimizer":59,"../stringifier/one-time":85,"./clean-up":70,"./is-special":72}],74:[function(e,t,n){var r=e("./reorderable").canReorder,i=e("./extractor");t.exports=function(e){for(var t={},n=[],o=e.length-1;o>=0;o--){var s=e[o];if("block"==s[0]){var a=t[s[1][0]];a||(a=[],t[s[1][0]]=a),a.push(o)}}for(var u in t){var c=t[u];e:for(var l=c.length-1;l>0;l--){var p=c[l],h=e[p],f=c[l-1],d=e[f];t:for(var m=1;m>=-1;m-=2){for(var g=1==m,v=g?p+1:f-1,y=g?f:p,b=g?1:-1,_=g?h:d,x=g?d:h,w=i(_);v!=y;){var k=i(e[v]);if(v+=b,!r(w,k))continue t}x[2]=g?_[2].concat(x[2]):x[2].concat(_[2]),_[2]=[],n.push(x);continue e}}}return n}},{"./extractor":71,"./reorderable":80}],75:[function(e,t,n){function r(e){return/\.|\*| :/.test(e)}function i(e){var t=u(e[1]);return t.indexOf("__")>-1||t.indexOf("--")>-1}function o(e){return e.replace(/--[^ ,>\+~:]+/g,"")}function s(e,t){var n=o(u(e[1]));for(var r in t){var i=t[r],s=o(u(i[1]));(s.indexOf(n)>-1||n.indexOf(s)>-1)&&delete t[r]}}var a=e("../stringifier/one-time").body,u=e("../stringifier/one-time").selectors,c=e("./clean-up").selectors,l=e("./is-special");t.exports=function(e,t){for(var n={},o=t.compatibility.selectors.adjacentSpace,p=e.length-1;p>=0;p--){var h=e[p];if("selector"==h[0]){h[2].length>0&&!t.semanticMerging&&r(u(h[1]))&&(n={}),h[2].length>0&&t.semanticMerging&&i(h)&&s(h,n);var f=a(h[2]),d=n[f];!d||l(t,u(h[1]))||l(t,u(d[1]))||(h[1]=h[2].length>0?c(d[1].concat(h[1]),!1,o):d[1].concat(h[1]),d[2]=[],n[f]=null),n[a(h[2])]=h}}}},{"../stringifier/one-time":85,"./clean-up":70,"./is-special":72}],76:[function(e,t,n){var r=e("../properties/optimizer"),i=e("../stringifier/one-time").selectors,o=e("./extractor"),s=e("./reorderable").canReorder;t.exports=function(e,t,n){var a,u={},c=[];for(a=e.length-1;a>=0;a--)if("selector"==e[a][0]&&0!==e[a][2].length){var l=i(e[a][1]);u[l]=[a].concat(u[l]||[]),2==u[l].length&&c.push(l)}for(a=c.length-1;a>=0;a--){var p=u[c[a]];e:for(var h=p.length-1;h>0;h--){var f=p[h-1],d=e[f],m=p[h],g=e[m];t:for(var v=1;v>=-1;v-=2){for(var y,b=1==v,_=b?f+1:m-1,x=b?m:f,w=b?1:-1,k=b?d:g,E=b?g:d,A=o(k);_!=x;){var C=o(e[_]);_+=w;var S=b?s(A,C):s(C,A);if(!S&&!b)continue e;if(!S&&b)continue t}b?(y=[k[2].length],Array.prototype.push.apply(k[2],E[2]),E[2]=k[2]):(y=[E[2].length],Array.prototype.push.apply(E[2],k[2])),r(E[1],E[2],y,!0,t,n),k[2]=[]}}}}},{"../properties/optimizer":59,"../stringifier/one-time":85,"./extractor":71,"./reorderable":80}],77:[function(e,t,n){function r(e){for(var t=[],n=0;n<e.length;n++)t.push([e[n][0]]);return t}function i(e,t,n,r,i){for(var o=0,a=t.length;o<a;o++){var u=t[o],c=n[u];s(e,u,c,{filterOut:function(e,t){return c[e].isPartial&&0===t.length},callback:function(e,t,n,r){c[n-r-1].isPartial||(e[2]=t)}},r,i)}}function o(e,t,n,r){var i={};e:for(var o in t){var a=t[o];if(a[0].isComplex){var c=a[a.length-1].where,p=e[c],h=[],f=l(n,o)?[o]:a[0].list;i.intoPosition=c,i.reducedBodies=h;for(var d=0,m=f.length;d<m;d++){var g=f[d],v=t[g];if(v.length<2)continue e;if(i.data=v,s(e,g,v,{filterOut:function(e){return i.data[e].where<i.intoPosition},callback:function(e,t,n,r){0===r&&i.reducedBodies.push(t)}},n,r),u(h[h.length-1])!=u(h[0]))continue e}p[2]=h[0]}}}function s(e,t,n,r,i,o){for(var s=[],u=[],c=[],l=[],h=n.length-1,f=0;h>=0;h--)if(!r.filterOut(h,s)){var d=n[h].where,m=e[d],g=p(m[2]);s=s.concat(g),u.push(g),l.push(d)}for(h=0,f=u.length;h<f;h++)u[h].length>0&&c.push((c.length>0?c[c.length-1]:0)+u[h].length);a(t,s,c,!1,i,o);for(var v=l.length,y=s.length-1,b=v-1;b>=0;)if((0===b||s[y]&&u[b].indexOf(s[y])>-1)&&y>-1)y--;else{var _=s.splice(y+1);r.callback(e[l[b]],_,v,b),b--}}var a=e("../properties/optimizer"),u=e("../stringifier/one-time").body,c=e("../stringifier/one-time").selectors,l=e("./is-special"),p=e("../utils/clone-array");t.exports=function(e,t,n){for(var s={},a=[],u=e.length-1;u>=0;u--){var p=e[u];if("selector"==p[0]&&0!==p[2].length)for(var h=c(p[1]),f=p[1].length>1&&!l(t,h),d=t.sourceMap?r(p[1]):p[1],m=f?[h].concat(d):[h],g=0,v=m.length;g<v;g++){var y=m[g];s[y]?a.push(y):s[y]=[],s[y].push({where:u,list:d,isPartial:f&&g>0,isComplex:f&&0===g})}}i(e,a,s,t,n),o(e,s,t,n)}},{"../properties/optimizer":59,"../stringifier/one-time":85,"../utils/clone-array":99,"./is-special":72}],78:[function(e,t,n){var r=e("../stringifier/one-time").all;t.exports=function(e){for(var t={},n=0,i=e.length;n<i;n++){var o=e[n];if("block"==o[0]){var s=o[1][0]+"%"+r(o[2]),a=t[s];a&&(a[2]=[]),t[s]=o}}}},{"../stringifier/one-time":85}],79:[function(e,t,n){var r=e("../stringifier/one-time").body,i=e("../stringifier/one-time").selectors;t.exports=function(e){for(var t,n,o,s,a={},u=[],c=0,l=e.length;c<l;c++)"selector"==(n=e[c])[0]&&(a[t=i(n[1])]&&1==a[t].length?u.push(t):a[t]=a[t]||[],a[t].push(c));for(c=0,l=u.length;c<l;c++){s=[];for(var p=a[t=u[c]].length-1;p>=0;p--)n=e[a[t][p]],o=r(n[2]),s.indexOf(o)>-1?n[2]=[]:s.push(o)}}},{"../stringifier/one-time":85}],80:[function(e,t,n){function r(e,t){var n=e[0],r=e[1],d=e[2],m=e[5],g=e[6],v=t[0],y=t[1],b=t[2],_=t[5],x=t[6];return!("font"==n&&"line-height"==v||"font"==v&&"line-height"==n)&&((!h.test(n)||!h.test(v))&&(!(d==b&&o(n)==o(v)&&i(n)^i(v))&&(("border"!=d||!f.test(b)||!("border"==n||n==b||r!=y&&s(n,v)))&&(("border"!=b||!f.test(d)||!("border"==v||v==d||r!=y&&s(n,v)))&&(("border"!=d||"border"!=b||n==v||!(a(n)&&u(v)||u(n)&&a(v)))&&(d!=b||(!(n!=v||d!=b||r!=y&&!c(r,y))||(n!=v&&d==b&&n!=d&&v!=b||(n!=v&&d==b&&r==y||!(!x||!g||p(d)||p(b)||!l(_,m)))))))))))}function i(e){return/^\-(?:moz|webkit|ms|o)\-/.test(e)}function o(e){return e.replace(/^\-(?:moz|webkit|ms|o)\-/,"")}function s(e,t){return e.split("-").pop()==t.split("-").pop()}function a(e){return"border-top"==e||"border-right"==e||"border-bottom"==e||"border-left"==e}function u(e){return"border-color"==e||"border-style"==e||"border-width"==e}function c(e,t){return i(e)&&i(t)&&e.split("-")[1]!=t.split("-")[2]}function l(e,t){for(var n=0,r=e.length;n<r;n++)for(var i=0,o=t.length;i<o;i++)if(e[n][0]==t[i][0])return!1;return!0}function p(e){return"font"==e||"line-height"==e||"list-style"==e}var h=/align\-items|box\-align|box\-pack|flex|justify/,f=/^border\-(top|right|bottom|left|color|style|width|radius)/;t.exports={canReorder:function(e,t){for(var n=t.length-1;n>=0;n--)for(var i=e.length-1;i>=0;i--)if(!r(e[i],t[n]))return!1;return!0},canReorderSingle:r}},{}],81:[function(e,t,n){function r(e,t){return e>t}function i(e,t){var n=p(e);return n[5]=n[5].concat(t[5]),n}var o=e("./extractor"),s=e("./reorderable").canReorderSingle,a=e("../stringifier/one-time").body,u=e("../stringifier/one-time").selectors,c=e("./clean-up").selectorDuplicates,l=e("./is-special"),p=e("../utils/clone-array");t.exports=function(e,t){function n(e,t,n){for(var r=n.length-1;r>=0;r--){var i=p(t,n[r][0]);if(C[i].length>1&&k(e,C[i])){h(i);break}}}function p(e,t){var n=f(t);return C[n]=C[n]||[],C[n].push([e,t]),n}function h(e){var t,n=e.split(O),r=[];for(var i in C){var o=i.split(O);for(t=o.length-1;t>=0;t--)if(n.indexOf(o[t])>-1){r.push(i);break}}for(t=r.length-1;t>=0;t--)delete C[r[t]]}function f(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(u(e[n][1]));return t.join(O)}function d(e){for(var n=[],r=[],i=e.length-1;i>=0;i--)l(t,u(e[i][1]))||(r.unshift(e[i]),e[i][2].length>0&&-1==n.indexOf(e[i])&&n.push(e[i]));return n.length>1?r:[]}function m(e,t){var r=t[0],i=t[1],o=t[4],s=r.length+i.length+1,a=[],u=[],l=d(E[o]);if(!(l.length<2)){var p=v(l,s,1),h=p[0];if(h[1]>0)return n(e,t,p);for(var f=h[0].length-1;f>=0;f--)a=h[0][f][1].concat(a),u.unshift(h[0][f]);_(e,[t],a=c(a),u)}}function g(e,t){return e[1]>t[1]}function v(e,t,n){return y(e,t,n,T-1).sort(g)}function y(e,t,n,r){var i=[[e,b(e,t,n)]];if(e.length>2&&r>0)for(var o=e.length-1;o>=0;o--){var s=Array.prototype.slice.call(e,0);s.splice(o,1),i=i.concat(y(s,t,n,r-1))}return i}function b(e,t,n){for(var r=0,i=e.length-1;i>=0;i--)r+=e[i][2].length>n?u(e[i][1]).length:-1;return r-(e.length-1)*t+1}function _(t,n,r,i){var o,s,u,c,l=[];for(o=i.length-1;o>=0;o--){var p=i[o];for(s=p[2].length-1;s>=0;s--){var h=p[2][s];for(u=0,c=n.length;u<c;u++){var f=n[u],d=h[0][0],m=f[0],g=f[4];if(d==m&&a([h])==g){p[2].splice(s,1);break}}}}for(o=n.length-1;o>=0;o--)l.unshift(n[o][3]);var v=["selector",r,l];e.splice(t,0,v)}function x(e,t){var n=t[4],r=E[n];r&&r.length>1&&(w(e,t)||m(e,t))}function w(e,t){var n,r,i=[],o=[],s=t[4],a=d(E[s]);if(!(a.length<2)){e:for(var u in E){var c=E[u];for(n=a.length-1;n>=0;n--)if(-1==c.indexOf(a[n]))continue e;i.push(u)}if(i.length<2)return!1;for(n=i.length-1;n>=0;n--)for(r=A.length-1;r>=0;r--)if(A[r][4]==i[n]){o.unshift([A[r],a]);break}return k(e,o)}}function k(e,t){for(var n,r=0,i=[],o=t.length-1;o>=0;o--)r+=(n=t[o][0])[4].length+(o>0?1:0),i.push(n);var s=v(t[0][1],r,i.length)[0];if(s[1]>0)return!1;var a=[],u=[];for(o=s[0].length-1;o>=0;o--)a=s[0][o][1].concat(a),u.unshift(s[0][o]);for(_(e,i,a=c(a),u),o=i.length-1;o>=0;o--){n=i[o];var l=A.indexOf(n);delete E[n[4]],l>-1&&-1==S.indexOf(l)&&S.push(l)}return!0}for(var E={},A=[],C={},S=[],T=2,O="%",F=e.length-1;F>=0;F--){var B,D,L,N,M,R=e[F];if("selector"==R[0])B=!0;else{if("block"!=R[0])continue;B=!1}var P=A.length,I=o(R);S=[];var j=[];for(D=I.length-1;D>=0;D--)for(L=D-1;L>=0;L--)if(!s(I[D],I[L])){j.push(D);break}for(D=I.length-1;D>=0;D--){var V=I[D],z=!1;for(L=0;L<P;L++){var U=A[L];-1!=S.indexOf(L)||s(V,U)||function(e,t,n){if(e[0]!=t[0])return!1;var r=t[4],i=E[r];return i&&i.indexOf(n)>-1}(V,U,R)||(x(F+1,U),-1==S.indexOf(L)&&(S.push(L),delete E[U[4]])),z||(z=V[0]==U[0]&&V[1]==U[1])&&(M=L)}if(B&&!(j.indexOf(D)>-1)){var $=V[4];E[$]=E[$]||[],E[$].push(R),z?A[M]=i(A[M],V):A.push(V)}}for(D=0,N=(S=S.sort(r)).length;D<N;D++){var q=S[D]-D;A.splice(q,1)}}for(var H=e[0]&&"at-rule"==e[0][0]&&0===e[0][1][0].indexOf("@charset")?1:0;H<e.length-1;H++){var W="at-rule"===e[H][0]&&0===e[H][1][0].indexOf("@import"),G="text"===e[H][0]&&0===e[H][1][0].indexOf("__ESCAPED_COMMENT_SPECIAL");if(!W&&!G)break}for(F=0;F<A.length;F++)x(H,A[F])}},{"../stringifier/one-time":85,"../utils/clone-array":99,"./clean-up":70,"./extractor":71,"./is-special":72,"./reorderable":80}],82:[function(e,t,n){function r(e,t){return e.value[t]&&"-"==e.value[t][0][0]&&parseFloat(e.value[t][0])<0}function i(e,t){return-1==t.indexOf("0")?t:(t.indexOf("-")>-1&&(t=t.replace(/([^\w\d\-]|^)\-0([^\.]|$)/g,"$10$2").replace(/([^\w\d\-]|^)\-0([^\.]|$)/g,"$10$2")),t.replace(/(^|\s)0+([1-9])/g,"$1$2").replace(/(^|\D)\.0+(\D|$)/g,"$10$2").replace(/(^|\D)\.0+(\D|$)/g,"$10$2").replace(/\.([1-9]*)0+(\D|$)/g,function(e,t,n){return(t.length>0?".":"")+t+n}).replace(/(^|\D)0\.(\d)/g,"$1.$2"))}function o(e,t){return-1==t.indexOf("0deg")?t:t.replace(/\(0deg\)/g,"(0)")}function s(e,t){return e.indexOf("filter")>-1||-1==t.indexOf(" ")?t:((t=t.replace(/\s+/g," ")).indexOf("calc")>-1&&(t=t.replace(/\) ?\/ ?/g,")/ ")),t.replace(/\( /g,"(").replace(/ \)/g,")").replace(/, /g,","))}function a(e,t,n){return-1===n.value||-1===t.indexOf(".")?t:t.replace(n.regexp,function(e,t){return Math.round(parseFloat(t)*n.multiplier)/n.multiplier+"px"}).replace(/(\d)\.($|\D)/g,"$1$2")}function u(e,t,n){return/^(?:\-moz\-calc|\-webkit\-calc|calc)\(/.test(t)?t:"flex"==e||"-ms-flex"==e||"-webkit-flex"==e||"flex-basis"==e||"-webkit-flex-basis"==e?t:t.indexOf("%")>0&&("height"==e||"max-height"==e||"width"==e||"max-width"==e)?t:t.replace(n,"$10$2").replace(n,"$10$2")}function c(e){var t,n=e.value;4==n.length&&"0"===n[0][0]&&"0"===n[1][0]&&"0"===n[2][0]&&"0"===n[3][0]&&(t=e.name.indexOf("box-shadow")>-1?2:1),t&&(e.value.splice(t),e.dirty=!0)}function l(e,t,n){return-1===t.indexOf("#")&&-1==t.indexOf("rgb")&&-1==t.indexOf("hsl")?S.shorten(t):(t=t.replace(/rgb\((\-?\d+),(\-?\d+),(\-?\d+)\)/g,function(e,t,n,r){return new A(t,n,r).toHex()}).replace(/hsl\((-?\d+),(-?\d+)%?,(-?\d+)%?\)/g,function(e,t,n,r){return new C(t,n,r).toHex()}).replace(/(^|[^='"])#([0-9a-f]{6})/gi,function(e,t,n){return n[0]==n[1]&&n[2]==n[3]&&n[4]==n[5]?t+"#"+n[0]+n[2]+n[4]:t+"#"+n}).replace(/(rgb|rgba|hsl|hsla)\(([^\)]+)\)/g,function(e,t,n){var r=n.split(",");return"hsl"==t&&3==r.length||"hsla"==t&&4==r.length||"rgb"==t&&3==r.length&&n.indexOf("%")>0||"rgba"==t&&4==r.length&&n.indexOf("%")>0?(-1==r[1].indexOf("%")&&(r[1]+="%"),-1==r[2].indexOf("%")&&(r[2]+="%"),t+"("+r.join(",")+")"):e}),n.colors.opacity&&-1==e.indexOf("background")&&(t=t.replace(/(?:rgba|hsla)\(0,0%?,0%?,0\)/g,function(e){return E(t,",").pop().indexOf("gradient(")>-1?e:"transparent"})),S.shorten(t))}function p(e,t,n){return I.test(t)?t.replace(I,function(e,t){var r,i=parseInt(t);return 0===i?e:(n.properties.shorterLengthUnits&&n.units.pt&&3*i%4==0&&(r=3*i/4+"pt"),n.properties.shorterLengthUnits&&n.units.pc&&i%16==0&&(r=i/16+"pc"),n.properties.shorterLengthUnits&&n.units.in&&i%96==0&&(r=i/96+"in"),r&&(r=e.substring(0,e.indexOf(t))+r),r&&r.length<e.length?r:e)}):t}function h(e,t){return j.test(t)?t.replace(j,function(e,t,n){var r;return"ms"==n?r=parseInt(t)/1e3+"s":"s"==n&&(r=1e3*parseFloat(t)+"ms"),r.length<e.length?r:e}):t}function f(e){var t,n=e.value;3==n.length&&"/"==n[1][0]&&n[0][0]==n[2][0]?t=1:5==n.length&&"/"==n[2][0]&&n[0][0]==n[3][0]&&n[1][0]==n[4][0]?t=2:7==n.length&&"/"==n[3][0]&&n[0][0]==n[4][0]&&n[1][0]==n[5][0]&&n[2][0]==n[6][0]?t=3:9==n.length&&"/"==n[4][0]&&n[0][0]==n[5][0]&&n[1][0]==n[6][0]&&n[2][0]==n[7][0]&&n[3][0]==n[8][0]&&(t=4),t&&(e.value.splice(t),e.dirty=!0)}function d(e){1==e.value.length&&(e.value[0][0]=e.value[0][0].replace(/progid:DXImageTransform\.Microsoft\.(Alpha|Chroma)(\W)/,function(e,t,n){return t.toLowerCase()+n})),e.value[0][0]=e.value[0][0].replace(/,(\S)/g,", $1").replace(/ ?= ?/g,"=")}function m(e){var t=e.value;if(!(M.indexOf(t[0][0])>-1||t[1]&&M.indexOf(t[1][0])>-1||t[2]&&M.indexOf(t[2][0])>-1)&&"/"!=t[1]){var n=0;if("normal"==t[0][0]&&n++,t[1]&&"normal"==t[1][0]&&n++,t[2]&&"normal"==t[2][0]&&n++,!(n>1)){var r;P.indexOf(t[0][0])>-1?r=0:t[1]&&P.indexOf(t[1][0])>-1?r=1:t[2]&&P.indexOf(t[2][0])>-1?r=2:R.indexOf(t[0][0])>-1?r=0:t[1]&&R.indexOf(t[1][0])>-1?r=1:t[2]&&R.indexOf(t[2][0])>-1&&(r=2),void 0!==r&&(e.value[r][0]=V["font-weight"](t[r][0]),e.dirty=!0)}}}function g(e,t){for(var n,v,y,b=T(e),_=0,x=b.length;_<x;_++)if(n=b[_],v=n.name,n.hack&&(("star"==n.hack||"underscore"==n.hack)&&!t.compatibility.properties.iePrefixHack||"backslash"==n.hack&&!t.compatibility.properties.ieSuffixHack||"bang"==n.hack&&!t.compatibility.properties.ieBangHack)&&(n.unused=!0),0===v.indexOf("padding")&&(r(n,0)||r(n,1)||r(n,2)||r(n,3))&&(n.unused=!0),!n.unused)if(n.variable)n.block&&g(n.value[0],t);else{for(var w=0,k=n.value.length;w<k;w++)y=n.value[w][0],V[v]&&(y=V[v](y,w,k)),y=i(v,y=h(v,y=p(v,y=a(v,y=s(v,y),t.precision),t.compatibility))),t.compatibility.properties.zeroUnits&&(y=u(v,y=o(v,y),t.unitsRegexp)),t.compatibility.properties.colors&&(y=l(v,y,t.compatibility)),n.value[w][0]=y;c(n),0===v.indexOf("border")&&v.indexOf("radius")>0?f(n):"filter"==v?d(n):"font"==v&&m(n)}O(b,!0),F(b)}function v(e){for(var t=!1,n=0,r=e.length;n<r;n++){var i=e[n];"at-rule"==i[0]&&(L.test(i[1][0])&&(t||-1==i[1][0].indexOf(D)?(e.splice(n,1),n--,r--):(t=!0,e.splice(n,1),e.unshift(["at-rule",[i[1][0].replace(L,D)]]))))}}function y(e){var t=["px","em","ex","cm","mm","in","pt","pc","%"];return["ch","rem","vh","vm","vmax","vmin","vw"].forEach(function(n){e.compatibility.units[n]&&t.push(n)}),new RegExp("(^|\\s|\\(|,)0(?:"+t.join("|")+")(\\W|$)","g")}function b(e){var t={};return t.value=void 0===e.roundingPrecision?B:e.roundingPrecision,t.multiplier=Math.pow(10,t.value),t.regexp=new RegExp("(\\d*\\.\\d{"+(t.value+1)+",})px","g"),t}function _(e,t,n){var r=t.compatibility.selectors.ie7Hack,i=t.compatibility.selectors.adjacentSpace,o=t.compatibility.properties.spaceAfterClosingBrace,s=!1,a=!1;t.unitsRegexp=y(t),t.precision=b(t);for(var u=0,c=e.length;u<c;u++){var l=e[u];switch(l[0]){case"selector":l[1]=x(l[1],!r,i),g(l[2],t),a=!0;break;case"block":w(l[1],o),_(l[2],t,n),a=!0;break;case"flat-block":w(l[1],o),g(l[2],t),a=!0;break;case"at-rule":k(l[1]),s=!0}"at-rule"==l[0]&&N.test(l[1])&&a&&(n.warnings.push('Ignoring @import rule "'+l[1]+'" as it appears after rules thus browsers will ignore them.'),l[1]=""),(0===l[1].length||l[2]&&0===l[2].length)&&(e.splice(u,1),u--,c--)}s&&v(e)}var x=e("./clean-up").selectors,w=e("./clean-up").block,k=e("./clean-up").atRule,E=e("../utils/split"),A=e("../colors/rgb"),C=e("../colors/hsl"),S=e("../colors/hex-name-shortener"),T=e("../properties/wrap-for-optimizing").all,O=e("../properties/restore-from-optimizing"),F=e("../properties/remove-unused"),B=2,D="@charset",L=new RegExp("^"+D,"i"),N=/^@import["'\s]/i,M=["100","200","300","400","500","600","700","800","900"],R=["normal","bold","bolder","lighter"],P=["bold","bolder","lighter"],I=/(?:^|\s|\()(-?\d+)px/,j=/^(\-?[\d\.]+)(m?s)$/,V={background:function(e,t,n){return 0!==t||1!=n||"none"!=e&&"transparent"!=e?e:"0 0"},"font-weight":function(e){return"normal"==e?"400":"bold"==e?"700":e},outline:function(e,t,n){return 0===t&&1==n&&"none"==e?"0":e}};t.exports=_},{"../colors/hex-name-shortener":48,"../colors/hsl":49,"../colors/rgb":50,"../properties/remove-unused":62,"../properties/restore-from-optimizing":63,"../properties/wrap-for-optimizing":68,"../utils/split":106,"./clean-up":70}],83:[function(e,t,n){function r(e,t,n){if(!n&&-1==e.indexOf("\n"))return 0===e.indexOf(a)?e:void(t.column+=e.length);for(var r=0,i=e.split("\n"),o=i.length,s=0;;){if(r==o-1)break;var u=i[r];if(/\S/.test(u))break;s+=u.length+1,r++}return t.line+=r,t.column=r>0?0:t.column,t.column+=/^(\s)*/.exec(i[r])[0].length,e.substring(s).trimLeft()}function i(e,t,n){var r=e.source||t.source;return r&&n.resolvePath?n.resolvePath(t.source,r):r}function o(e,t,n){var r={line:t.line,column:t.column,source:t.source},o=null,s=t.sourceMapTracker.isTracking(r.source)?t.sourceMapTracker.originalPositionFor(r,e,n||0):{};if(r.line=s.line||r.line,r.column=s.column||r.column,r.source=s.sourceResolved?s.source:i(s,r,t),t.sourceMapInlineSources){var a=t.sourceMapTracker.sourcesContentFor(t.source);o=a&&a[r.source]?a:t.sourceReader.sourceAt(t.source)}return o?[r.line,r.column,r.source,o]:[r.line,r.column,r.source]}function s(e,t){for(var n=e.split("\n"),r=0,i=n.length;r<i;r++){var o=n[r],s=0;for(r>0&&(t.line++,t.column=0);;){var u=o.indexOf(a,s);if(-1==u){t.column+=o.substring(s).length;break}t.column+=u-s,s+=u-s;var c=o.substring(u,o.indexOf("__",u+1)+2),l=c.substring(c.indexOf("(")+1,c.indexOf(")")).split(",");t.line+=~~l[0],t.column=(0==~~l[0]?t.column:0)+~~l[1],s+=c.length}}}var a="__ESCAPED_";t.exports=function(e,t,n,i){var a=r(e,t,n),u=n?o(a,t,i):[];return a&&s(a,t),u}},{}],84:[function(e,t,n){function r(e,t){for(var n=t,r=e.length;n<r;n++)if("string"!=typeof e[n])return!0;return!1}function i(e){return"background"==e[0][0]||"transform"==e[0][0]||"src"==e[0][0]}function o(e,t){return")"==e[t][0][e[t][0].length-1]||0===e[t][0].indexOf("__ESCAPED_URL_CLEAN_CSS")}function s(e,t){return","==e[t][0]}function a(e,t){return"/"==e[t][0]}function u(e,t){return e[t+1]&&","==e[t+1][0]}function c(e,t){return e[t+1]&&"/"==e[t+1][0]}function l(e){return"filter"==e[0][0]||"-ms-filter"==e[0][0]}function p(e,t,n){return!n.spaceAfterClosingBrace&&i(e)&&o(e,t)||c(e,t)||a(e,t)||u(e,t)||s(e,t)}function h(e,t){for(var n=t.store,r=0,i=e.length;r<i;r++)n(e[r],t),r<i-1&&n(",",t)}function f(e,t){for(var n=0,r=e.length;n<r;n++)d(e,n,n==r-1,t)}function d(e,t,n,r){var i=r.store,o=e[t];"string"==typeof o?i(o,r):o[0]==_?m(o[1],!1,r):(i(o[0],r),i(":",r),g(e,t,n,r))}function m(e,t,n){var r=n.store;r(e,n),t||r(x,n)}function g(e,t,n,i){var o=i.store,s=e[t],a=0===s[0][0].indexOf("--"),u=a&&Array.isArray(s[1][0]);if(a&&u&&v(s[1]))return o("{",i),f(s[1],i),void o("};",i);for(var c=1,h=s.length;c<h;c++)o(s[c],i),c<h-1&&(l(s)||!p(s,c,i))?o(" ",i):c==h-1&&!n&&r(e,t+1)&&o(x,i)}function v(e){for(var t=0,n=e.length;t<n;t++)if(e[t][0]==_||Array.isArray(e[t][0]))return!0;return!1}function y(e,t){for(var n=t.keepBreaks?b:"",r=t.store,i=0,o=e.length;i<o;i++){var s=e[i];switch(s[0]){case"at-rule":case"text":r(s[1][0],t),r(n,t);break;case"block":h([s[1]],t),r("{",t),y(s[2],t),r("}",t),r(n,t);break;case"flat-block":h([s[1]],t),r("{",t),f(s[2],t),r("}",t),r(n,t);break;default:h(s[1],t),r("{",t),f(s[2],t),r("}",t),r(n,t)}}}var b=e("os").EOL,_="at-rule",x=";";t.exports={all:y,body:f,property:d,selectors:h,value:g}},{os:29}],85:[function(e,t,n){function r(e,t){t.output.push("string"==typeof e?e:e[0])}function i(){return{output:[],store:r}}var o=e("./helpers");t.exports={all:function(e){var t=i();return o.all(e,t),t.output.join("")},body:function(e){var t=i();return o.body(e,t),t.output.join("")},property:function(e,t){var n=i();return o.property(e,t,!0,n),n.output.join("")},selectors:function(e){var t=i();return o.selectors(e,t),t.output.join("")},value:function(e,t){var n=i();return o.value(e,t,!0,n),n.output.join("")}}},{"./helpers":84}],86:[function(e,t,n){function r(e,t){t.output.push("string"==typeof e?e:e[0])}var i=e("./helpers").all;t.exports=function(e,t,n){var o={keepBreaks:t.keepBreaks,output:[],spaceAfterClosingBrace:t.compatibility.properties.spaceAfterClosingBrace,store:r};return i(e,o,!1),{styles:n(o.output.join("")).trim()}}},{"./helpers":84}],87:[function(e,t,n){(function(n){function r(e,t){var n="string"==typeof e,r=n?e:e[0];r.indexOf("_")>-1&&(r=t.restore(r,i(t.output))),o(r,n?null:e,t),t.output.push(r)}function i(e){for(var t=[],n=e.length-1;n>=0;n--){var r=e[n];if(t.unshift(r),"{"==r||";"==r)break}return t.join("")}function o(e,t,n){t&&s(t,n);var r=e.split("\n");n.line+=r.length-1,n.column=r.length>1?0:n.column+r.pop().length}function s(e,t){var n=e[e.length-1];if(Array.isArray(n))for(var r=0,i=n.length;r<i;r++)a(n[r],t)}function a(e,t){var n=e[2]||p;l&&(n=n.replace(/\\/g,"/")),t.outputMap.addMapping({generated:{line:t.line,column:t.column},source:n,original:{line:e[0],column:e[1]}}),e[3]&&t.outputMap.setSourceContent(n,e[3][e[2]])}var u=e("source-map").SourceMapGenerator,c=e("./helpers").all,l="win32"==n.platform,p="$stdin";t.exports=function(e,t,n,i){var o={column:0,inputMapTracker:i,keepBreaks:t.keepBreaks,line:1,output:[],outputMap:new u,restore:n,sourceMapInlineSources:t.sourceMapInlineSources,spaceAfterClosingBrace:t.compatibility.properties.spaceAfterClosingBrace,store:r};return c(e,o,!1),{sourceMap:o.outputMap,styles:o.output.join("").trim()}}}).call(this,e("_process"))},{"./helpers":84,_process:31,"source-map":107}],88:[function(e,t,n){function r(e,t,n,r){this.comments=new s("COMMENT"),this.specialComments=new s("COMMENT_SPECIAL"),this.context=e,this.restored=0,this.keepAll="*"==t,this.keepOne="1"==t||1===t,this.keepBreaks=n,this.saveWaypoints=r}function i(e){var t=[];return new a(e).each(function(e,n,r){t.push([r,r+e.length])}),function(e){for(var n=0,r=t.length;n<r;n++)if(t[n][0]<e&&t[n][1]>e)return!0;return!1}}function o(e,t,n,r){for(var i=[],o=0;o<t.length;){var s=n.nextMatch(t,o);if(s.start<0)break;i.push(t.substring(o,s.start));var a=n.restore(s.match);r&&(e.keepAll||e.keepOne&&0===e.restored)?(e.restored++,i.push(a),o=s.end):o=s.end+(e.keepBreaks&&t.substring(s.end,s.end+u.length)==u?u.length:0)}return i.length>0?i.join("")+t.substring(o,t.length):t}var s=e("./escape-store"),a=e("../utils/quote-scanner"),u=e("os").EOL;r.prototype.escape=function(e){for(var t,n,r,o=[],s=0,a=0,c=0,l=0,p=i(e),h=this.saveWaypoints;a<e.length&&-1!=(s=e.indexOf("/*",c));)if(p(s))o.push(e.substring(c,s+"/*".length)),c=s+"/*".length;else{-1==(a=e.indexOf("*/",s+"/*".length))&&(this.context.warnings.push("Broken comment: '"+e.substring(s)+"'."),a=e.length-2),o.push(e.substring(c,s));var f=e.substring(s,a+"*/".length),d=0===f.indexOf("/*!");if(h&&(t=f.split(u).length-1,r=(n=f.lastIndexOf(u))>0?f.substring(n+u.length).length:l+f.length),h||d){var m=h?[t,r]:null,g=d?this.specialComments.store(f,m):this.comments.store(f,m);o.push(g)}h&&(l=r+1),c=a+"*/".length}return o.length>0?o.join("")+e.substring(c,e.length):e},r.prototype.restore=function(e){return e=o(this,e,this.comments,!1),e=o(this,e,this.specialComments,!0)},t.exports=r},{"../utils/quote-scanner":103,"./escape-store":89,os:29}],89:[function(e,t,n){function r(e){this.placeholderRoot="ESCAPED_"+e+"_CLEAN_CSS",this.placeholderToData={},this.dataToPlaceholder={},this.count=0,this.restoreMatcher=new RegExp(this.placeholderRoot+"(\\d+)")}r.prototype._nextPlaceholder=function(e){return{index:this.count,value:"__"+this.placeholderRoot+this.count+++e+"__"}},r.prototype.store=function(e,t){var n=t?"("+t.join(",")+")":"",r=this.dataToPlaceholder[e];if(!r){var i=this._nextPlaceholder(n);r=i.value,this.placeholderToData[i.index]=e,this.dataToPlaceholder[e]=i.value}return t&&(r=r.replace(/\([^\)]+\)/,n)),r},r.prototype.nextMatch=function(e,t){var n={};return n.start=e.indexOf(this.placeholderRoot,t)-"__".length,n.end=e.indexOf("__",n.start+"__".length)+"__".length,n.start>-1&&n.end>-1&&(n.match=e.substring(n.start,n.end)),n},r.prototype.restore=function(e){var t=this.restoreMatcher.exec(e)[1];return this.placeholderToData[t]},t.exports=r},{}],90:[function(e,t,n){function r(e,t){for(var n=t+s.length,r=0,i=!1,o=!1;;){var c=e[n++];if(i?i="'"!=c&&'"'!=c:(i="'"==c||'"'==c,c==a&&r++,c==u&&r--,c==l&&(o=!0),c!=p||o||1!=r||(n--,r--)),0===r&&c==u)break;if(!c){n=e.substring(0,n).lastIndexOf(p);break}}return n}function i(e){this.expressions=new o("EXPRESSION"),this.saveWaypoints=e}var o=e("./escape-store"),s="expression",a="(",u=")",c=s+a,l="{",p="}",h=e("os").EOL;i.prototype.escape=function(e){for(var t,n,i,o=0,s=0,a=0,u=[],l=0,p=this.saveWaypoints;s<e.length&&-1!=(o=e.indexOf(c,s));){s=r(e,o);var f=e.substring(o,s);p&&(t=f.split(h).length-1,i=(n=f.lastIndexOf(h))>0?f.substring(n+h.length).length:l+f.length);var d=p?[t,i]:null,m=this.expressions.store(f,d);u.push(e.substring(a,o)),u.push(m),p&&(l=i+1),a=s}return u.length>0?u.join("")+e.substring(a,e.length):e},i.prototype.restore=function(e){for(var t=[],n=0;n<e.length;){var r=this.expressions.nextMatch(e,n);if(r.start<0)break;t.push(e.substring(n,r.start));var i=this.expressions.restore(r.match);t.push(i),n=r.end}return t.length>0?t.join("")+e.substring(n,e.length):e},t.exports=i},{"./escape-store":89,os:29}],91:[function(e,t,n){function r(e){this.matches=new o("FREE_TEXT"),this.saveWaypoints=e}function i(e,t,n,r){var i=t;n&&(r=(i=n+t.substring(0,t.indexOf("__ESCAPED_FREE_TEXT_CLEAN_CSS"))).length);var o=i.lastIndexOf(";",r),s=i.lastIndexOf("{",r),a=0;a=o>-1&&s>-1?Math.max(o,s):-1==o?s:o;var u=i.substring(a+1,r);if(/\[[\w\d\-]+[\*\|\~\^\$]?=$/.test(u)&&(e=e.replace(/\\\n|\\\r\n/g,"").replace(/\n|\r\n/g,"")),/^['"][a-zA-Z][a-zA-Z\d\-_]+['"]$/.test(e)&&!/format\($/.test(u)){var c=/^(font|font\-family):/.test(u),l=/\[[\w\d\-]+[\*\|\~\^\$]?=$/.test(u),p=/@(-moz-|-o-|-webkit-)?keyframes /.test(u),h=/^(-moz-|-o-|-webkit-)?animation(-name)?:/.test(u);(c||l||p||h)&&(e=e.substring(1,e.length-1))}return e}var o=e("./escape-store"),s=e("../utils/quote-scanner"),a=e("os").EOL;r.prototype.escape=function(e){var t,n,r,i,o=this,u=this.saveWaypoints;return new s(e).each(function(e,s){u&&(t=e.split(a).length-1,n=e.lastIndexOf(a),r=n>0?e.substring(n+a.length).length:e.length,i=[t,r]);var c=o.matches.store(e,i);s.push(c)})},r.prototype.restore=function(e,t){for(var n=[],r=0;r<e.length;){var o=this.matches.nextMatch(e,r);if(o.start<0)break;n.push(e.substring(r,o.start));var s=i(this.matches.restore(o.match),e,t,o.start);n.push(s),r=o.end}return n.length>0?n.join("")+e.substring(r,e.length):e},t.exports=r},{"../utils/quote-scanner":103,"./escape-store":89,os:29}],92:[function(e,t,n){function r(e,t,n){this.urls=new o("URL"),this.context=e,this.saveWaypoints=t,this.keepUrlQuotes=n}function i(e,t){return e=e.replace(/^url/gi,"url").replace(/\\?\n|\\?\r\n/g,"").replace(/(\s{2,}|\s)/g," ").replace(/^url\((['"])? /,"url($1").replace(/ (['"])?\)$/,"$1)"),/url\(".*'.*"\)/.test(e)||/url\('.*".*'\)/.test(e)?e:(t||/^['"].+['"]$/.test(e)||/url\(.*[\s\(\)].*\)/.test(e)||/url\(['"]data:[^;]+;charset/.test(e)||(e=e.replace(/["']/g,"")),e)}var o=e("./escape-store"),s=e("../urls/reduce"),a=e("os").EOL;r.prototype.escape=function(e){var t,n,r,i=this.saveWaypoints,o=this;return s(e,this.context,function(e,s){i&&(t=e.split(a).length-1,n=e.lastIndexOf(a),r=n>0?e.substring(n+a.length).length:e.length);var u=o.urls.store(e,i?[t,r]:null);s.push(u)})},r.prototype.restore=function(e){for(var t=[],n=0;n<e.length;){var r=this.urls.nextMatch(e,n);if(r.start<0)break;t.push(e.substring(n,r.start));var o=i(this.urls.restore(r.match),this.keepUrlQuotes);t.push(o),n=r.end}return t.length>0?t.join("")+e.substring(n,e.length):e},t.exports=r},{"../urls/reduce":97,"./escape-store":89,os:29}],93:[function(e,t,n){function r(e){return e[0]}function i(){}function o(e,t,n,r){for(var o=n?/^__ESCAPED_COMMENT_/:/__ESCAPED_COMMENT_/,s=n?r.track:i;o.test(e);){var a=e.indexOf("__"),u=e.indexOf("__",a+1)+2,c=e.substring(a,u);e=e.substring(0,a)+e.substring(u),s(c),t.push(c)}return e}function s(e,t,n){return o(e,t,!0,n)}function a(e,t,n){return o(e,t,!1,n)}function u(e,t,n){for(var r=0,i=e.length;r<i;r++)n.track(e[r]),t.push(e[r])}function c(e,t,n){var i=[],o=[],v=/[\s,\/]/;if("string"!=typeof e)return[];e.indexOf(")")>-1&&(e=e.replace(/\)([^\s_;:,\)])/g,n.sourceMap?") __ESCAPED_COMMENT_CLEAN_CSS(0,-1)__ $1":") $1")),e.indexOf("ESCAPED_URL_CLEAN_CSS")>-1&&(e=e.replace(/(ESCAPED_URL_CLEAN_CSS[^_]+?__)/g,n.sourceMap?"$1 __ESCAPED_COMMENT_CLEAN_CSS(0,-1)__ ":"$1 "));for(var y=l(e,";",!1,"{","}"),b=0,_=y.length;b<_;b++){var x=y[b],w=x.indexOf(":");if("@"==x.trim()[0])n.track(x),i.push([f,x.trim()]);else if(-1!=w)if(x.indexOf("{")>0&&x.indexOf("{")<w)n.track(x);else{var k=[],E=x.substring(0,w);o=[],E.indexOf("__ESCAPED_COMMENT")>-1&&(E=s(E,i,n)),E.indexOf("__ESCAPED_COMMENT")>-1&&(E=a(E,o,n)),k.push([E.trim()].concat(n.track(E,!0))),n.track(":"),u(o,i,n);var A=x.indexOf("{");if(0===E.trim().indexOf("--")&&A>0){var C=x.substring(w+1,A+1),S=x.substring(x.indexOf("}")),T=x.substring(A+1,x.length-S.length);n.track(C),k.push(c(T,t,n)),i.push(k),n.track(S),n.track(b<_-1?";":"")}else{var O=l(x.substring(w+1),v,!0);if(1!=O.length||""!==O[0]){for(var F=0,B=O.length;F<B;F++){var D=O[F],L=D.trim();if(0!==L.length){var N=L[L.length-1],M=L.length>1&&(N==p||N==h);if(M&&(L=L.substring(0,L.length-1)),L.indexOf("__ESCAPED_COMMENT_CLEAN_CSS(0,-")>-1)n.track(L);else if(o=[],L.indexOf("__ESCAPED_COMMENT")>-1&&(L=s(L,i,n)),L.indexOf("__ESCAPED_COMMENT")>-1&&(L=a(L,o,n)),0!==L.length){var R=k.length-1;m.test(L)&&"!"==k[R][0]?(n.track(L),k[R-1][0]+=d,k.pop()):g.test(L)||m.test(L)&&"!"==k[R][0][k[R][0].length-1]?(n.track(L),k[R][0]+=L):(k.push([L].concat(n.track(D,!0))),u(o,i,n),M&&(k.push([N]),n.track(N)))}else u(o,i,n)}}b<_-1&&n.track(";"),i.push(k)}else n.warnings.push("Empty property '"+E+"' inside '"+t.filter(r).join(",")+"' selector. Ignoring.")}}else n.track(x),x.indexOf("__ESCAPED_COMMENT_SPECIAL")>-1&&i.push(x.trim())}return i}var l=e("../utils/split"),p=",",h="/",f="at-rule",d="!important",m=new RegExp("^important$","i"),g=new RegExp("^"+d+"$","i");t.exports=c},{"../utils/split":106}],94:[function(e,t,n){var r=e("../utils/split");t.exports=function(e,t){for(var n,i=[],o=r(e,","),s=0,a=o.length;s<a;s++)n=t.track(o[s],!0,s),t.track(","),i.push([o[s].trim()].concat(n));return i}},{"../utils/split":106}],95:[function(e,t,n){function r(e){return e.replace(/\r\n/g,"\n")}function i(e,t){var n=f.relative(e,t);return function(e,t){return e!=t?f.normalize(f.join(f.relative(n,f.dirname(e)),t)):t}}function o(e){var t,n=e.mode,r=e.chunk;if(r.length==e.cursor){if(0===e.chunks.length)return null;e.chunk=r=e.chunks.shift(),e.cursor=0}if("body"==n)return"}"==r[e.cursor]?[e.cursor,"bodyEnd"]:-1==r.indexOf("}",e.cursor)?null:(t=e.cursor+h(r.substring(e.cursor-1),"}",!0,"{","}")[0].length-2,[t,"bodyEnd"]);var i=s(e,"@"),o=r.indexOf("__ESCAPED_",e.cursor),a=s(e,"{"),u=s(e,"}");return i>-1&&e.cursor>0&&!/\s|\{|\}|\/|_|,|;/.test(r.substring(i-1,i))&&(i=-1),o>-1&&/\S/.test(r.substring(e.cursor,o))&&(o=-1),(-1==(t=i)||o>-1&&o<t)&&(t=o),(-1==t||a>-1&&a<t)&&(t=a),(-1==t||u>-1&&u<t)&&(t=u),-1!=t?o===t?[t,"escape"]:a===t?[t,"bodyStart"]:u===t?[t,"bodyEnd"]:i===t?[t,"special"]:void 0:void 0}function s(e,t){for(var n,r=e.cursor,i=e.chunk;(n=i.indexOf(t,r))>-1;){if(!a(i,n))return n;r=n+1}return-1}function a(e,t){for(var n=t,r=0;n>0&&e[n-1]==m;)r++,n--;return r%2!=0}function u(e){for(var t,n,r=e.chunk,i=[];;){var s=o(e);if(!s){var a=e.chunk.substring(e.cursor);a.trim().length>0&&("body"==e.mode?e.warnings.push("Missing '}' after '"+a+"'. Ignoring."):i.push(["text",[a]]),e.cursor+=a.length);break}var p,h,f=s[0],m=s[1];if(r=e.chunk,e.cursor!=f&&"bodyEnd"!=m){var g=r.substring(e.cursor,f),v=/^\s+/.exec(g);v&&(e.cursor+=v[0].length,e.track(v[0]))}if("special"==m){var y=r.indexOf("{",f),b=r.indexOf(";",f),_=b>-1&&(-1==y||b<y);if(-1==y&&-1==b)e.warnings.push("Broken declaration: '"+r.substring(e.cursor)+"'."),e.cursor=r.length;else if(_)p=r.indexOf(";",f+1),n=r.substring(e.cursor,p+1),i.push(["at-rule",[n].concat(e.track(n,!0))]),e.track(";"),e.cursor=p+1;else{p=r.indexOf("{",f+1);var x=(n=r.substring(e.cursor,p)).trim(),w=d.test(x);h=e.mode,e.cursor=p+1,e.mode=w?"body":"block",(t=[w?"flat-block":"block"]).push([x].concat(e.track(n,!0))),e.track("{"),t.push(u(e)),"string"==typeof t[2]&&(t[2]=c(t[2],[[x]],e)),e.mode=h,e.track("}"),i.push(t)}}else if("escape"==m){p=r.indexOf("__",f+1);var k=r.substring(e.cursor,p+2),E=!!e.sourceTracker.nextStart(k),A=!!e.sourceTracker.nextEnd(k);if(E)e.track(k),e.state.push({source:e.source,line:e.line,column:e.column}),e.source=e.sourceTracker.nextStart(k).filename,e.line=1,e.column=0;else if(A){var C=e.state.pop();e.source=C.source,e.line=C.line,e.column=C.column,e.track(k)}else 0===k.indexOf("__ESCAPED_COMMENT_SPECIAL")&&i.push(["text",[k]]),e.track(k);e.cursor=p+2}else if("bodyStart"==m){var S=l(r.substring(e.cursor,f),e);h=e.mode,e.cursor=f+1,e.mode="body";var T=c(u(e),S,e);e.track("{"),e.mode=h,i.push(["selector",S,T])}else if("bodyEnd"==m){if("top"==e.mode){var O=e.cursor,F="}"==r[e.cursor]?"Unexpected '}' in '"+r.substring(O-20,O+20)+"'. Ignoring.":"Unexpected content: '"+r.substring(O,f+1)+"'. Ignoring.";e.warnings.push(F),e.cursor=f+1;continue}"block"==e.mode&&e.track(r.substring(e.cursor,f)),"block"!=e.mode&&(i=r.substring(e.cursor,f)),e.cursor=f+1;break}}return i}var c=e("./extract-properties"),l=e("./extract-selectors"),p=e("../source-maps/track"),h=e("../utils/split"),f=e("path"),d=/(@(font\-face|page|\-ms\-viewport|\-o\-viewport|viewport|counter\-style)|\\@.+?)/,m="\\";t.exports=function(e,t){var n=h(r(e),"}",!0,"{","}");if(0===n.length)return[];var o={chunk:n.shift(),chunks:n,column:0,cursor:0,line:1,mode:"top",resolvePath:t.options.explicitTarget?i(t.options.root,t.options.target):null,source:void 0,sourceMap:t.options.sourceMap,sourceMapInlineSources:t.options.sourceMapInlineSources,sourceMapTracker:t.inputSourceMapTracker,sourceReader:t.sourceReader,sourceTracker:t.sourceTracker,state:[],track:t.options.sourceMap?function(e,t,n){return[[p(e,o,t,n)]]}:function(){return[]},warnings:t.warnings};return u(o)}},{"../source-maps/track":83,"../utils/split":106,"./extract-properties":93,"./extract-selectors":94,path:30}],96:[function(e,t,n){var r=e("path"),i=e("./rewrite");t.exports=function(e,t){var n={absolute:t.options.explicitRoot,relative:!t.options.explicitRoot&&t.options.explicitTarget,fromBase:t.options.relativeTo};return n.absolute||n.relative?(n.absolute&&t.options.explicitTarget&&t.warnings.push("Both 'root' and output file given so rebasing URLs as absolute paths"),n.absolute&&(n.toBase=r.resolve(t.options.root)),n.relative&&(n.toBase=r.resolve(t.options.target)),n.fromBase&&n.toBase?i(e,n,t):e):e}},{"./rewrite":98,path:30}],97:[function(e,t,n){function r(e,t,n){for(var r,i=0,f=0,d=0,m=0,g=[],v=e.indexOf(a)>-1;d<e.length&&(i=e.indexOf(s,d),f=v?e.indexOf(a,d):-1,-1!=i||-1!=f);)-1==i&&f>-1&&(i=f),-1==(d='"'==e[i+s.length]?e.indexOf(l,i):"'"==e[i+s.length]?e.indexOf(c,i):p.test(e.substring(i+s.length))?(r=o(e.substring(i),h,!1,"(",")",!0).pop())&&r[r.length-1]==u?i+r.length-u.length:-1:e.indexOf(u,i))?(-1==(d=e.indexOf("}",i))?d=e.length:d--,t.warnings.push("Broken URL declaration: '"+e.substring(i,d+1)+"'.")):e[d]!=u&&(d=e.indexOf(u,d)),g.push(e.substring(m,i)),n(e.substring(i,d+1),g),m=d+1;return g.length>0?g.join("")+e.substring(m,e.length):e}function i(e,t,n){for(var r,i,o=0,s=0,a=0,u=0,c=0,l=[],p=0,h=0;u<e.length&&(o=e.indexOf(f,u),s=e.indexOf(d,u),-1!=o||-1!=s);){if(o>-1&&s>-1&&s<o&&(o=s),p=e.indexOf("'",o),h=e.indexOf('"',o),p>-1&&h>-1&&p<h)a=p,i="'";else if(p>-1&&h>-1&&p>h)a=h,i='"';else if(p>-1)a=p,i="'";else{if(!(h>-1))break;a=h,i='"'}if(l.push(e.substring(c,a)),u=e.indexOf(i,a+1),r=e.substring(o,u),-1==u||/^@import\s+(url\(|__ESCAPED)/i.test(r)||m.test(r)){c=a;break}n(e.substring(a,u+1),l),c=u+1}return l.length>0?l.join("")+e.substring(c,e.length):e}var o=e("../utils/split"),s="url(",a="URL(",u=")",c="')",l='")',p=/^\s*['"]?\s*data:/,h=/[\s\};,\/!]/,f="@import",d="@IMPORT",m=/\*\//;t.exports=function(e,t,n){return e=r(e,t,n),e=i(e,t,n)}},{"../utils/split":106}],98:[function(e,t,n){(function(n){function r(e){return"/"==e[0]}function i(e){return"#"==e[0]}function o(e){return 0===e.indexOf("__ESCAPED_URL_CLEAN_CSS__")}function s(e){return/^\w+:\w+/.test(e)}function a(e){return/^[^:]+?:\/\//.test(e)||0===e.indexOf("//")}function u(e,t){return v.parse(e).protocol==v.parse(t).protocol&&v.parse(e).host==v.parse(t).host}function c(e){return e.lastIndexOf(".css")===e.length-4}function l(e){return 0===e.indexOf("data:")}function p(e,t){return g.resolve(g.join(t.fromBase||"",e)).replace(t.toBase,"")}function h(e,t){return g.relative(t.toBase,g.join(t.fromBase||"",e))}function f(e){return b?e.replace(/\\/g,"/"):e}function d(e,t){return r(e)||i(e)||o(e)||s(e)?e:!1!==t.rebase||c(e)?!t.imports&&c(e)?e:l(e)?"'"+e+"'":a(e)&&!a(t.toBase)?e:a(e)&&!u(e,t.toBase)?e:!a(e)&&a(t.toBase)?v.resolve(t.toBase,e):f(t.absolute?p(e,t):h(e,t)):e}function m(e){return e.indexOf("'")>-1?'"':e.indexOf('"')>-1?"'":/\s/.test(e)||/[\(\)]/.test(e)?"'":""}var g=e("path"),v=e("url"),y=e("./reduce"),b="win32"==n.platform;t.exports=function(e,t,n){return y(e,n,function(e,n){var r,i=e.replace(/^(url\()?\s*['"]?|['"]?\s*\)?$/g,""),o=e.match(/^(url\()?\s*(['"]).*?(['"])\s*\)?$/);r=t.urlQuotes&&o&&o[2]===o[3]?o[2]:m(i),n.push("url("+r+d(i,t)+r+")")})}}).call(this,e("_process"))},{"./reduce":97,_process:31,path:30,url:148}],99:[function(e,t,n){function r(e){for(var t=e.slice(0),n=0,i=t.length;n<i;n++)Array.isArray(t[n])&&(t[n]=r(t[n]));return t}t.exports=r},{}],100:[function(e,t,n){function r(e){this.source=e||{}}function i(e,t){for(var n in e){var r=e[n];"object"!=typeof r||s.isRegExp(r)?t[n]=n in t?t[n]:r:t[n]=i(r,t[n]||{})}return t}function o(e){if("object"==typeof e)return e;if(!/[,\+\-]/.test(e))return a[e]||a["*"];var t=e.split(","),n=t[0]in a?a[t.shift()]:a["*"];return e={},t.forEach(function(t){var n="+"==t[0],r=t.substring(1).split("."),i=r[0],o=r[1];e[i]=e[i]||{},e[i][o]=n}),i(n,e)}var s=e("util"),a={"*":{colors:{opacity:!0},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!1,iePrefixHack:!1,ieSuffixHack:!0,merging:!0,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!1,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:dir\([a-z-]*\)|:first(?![a-z-])|:fullscreen|:left|:read-only|:read-write|:right|:placeholder|:host|:content|\/deep\/|:shadow|:selection|^,)/},units:{ch:!0,in:!0,pc:!0,pt:!0,rem:!0,vh:!0,vm:!0,vmax:!0,vmin:!0,vw:!0}},ie8:{colors:{opacity:!1},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!1,iePrefixHack:!0,ieSuffixHack:!0,merging:!1,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!1,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not|:placeholder|:host|::content|\/deep\/|::shadow|^,)/},units:{ch:!1,in:!0,pc:!0,pt:!0,rem:!1,vh:!1,vm:!1,vmax:!1,vmin:!1,vw:!1}},ie7:{colors:{opacity:!1},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!0,iePrefixHack:!0,ieSuffixHack:!0,merging:!1,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!0,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:focus|:before|:after|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not|:placeholder|:host|::content|\/deep\/|::shadow|^,)/},units:{ch:!1,in:!0,pc:!0,pt:!0,rem:!1,vh:!1,vm:!1,vmax:!1,vmin:!1,vw:!1}}};r.prototype.toOptions=function(){return i(a["*"],o(this.source))},t.exports=r},{util:152}],101:[function(e,t,n){(function(n,r,i){function o(e){this.options=e.options,this.errors=e.errors,this.warnings=e.warnings,this.sourceTracker=e.sourceTracker,this.timeout=this.options.inliner.timeout,this.requestOptions=this.options.inliner.request,this.localOnly=e.localOnly,this.relativeTo=e.options.target||n.cwd(),this.maps={},this.sourcesContent={}}function s(e,t,n){return e.trackLoaded(void 0,void 0,e.options.sourceMap),n()}function a(e,t,n,r){for(var i=0;r.cursor<t.length;){var o=t.substring(r.cursor),s=e.sourceTracker.nextStart(o)||{index:-1},l=e.sourceTracker.nextEnd(o)||{index:-1},p=x.exec(o)||{index:-1},h=p[1];if(i=t.length,s.index>-1&&(i=s.index),l.index>-1&&l.index<i&&(i=l.index),p.index>-1&&p.index<i&&(i=p.index),i==t.length)break;if(i==s.index)r.files.push(s.filename);else if(i==l.index)r.files.pop();else if(i==p.index){var f=/^https?:\/\//.test(h)||/^\/\//.test(h),d=k.test(h);if(f)return c(e,h,r,function(){r.cursor+=i+1,a(e,t,n,r)});var v,y,b=r.files[r.files.length-1],_=b?g.dirname(b):e.options.relativeTo;d?(v=g.resolve(e.options.root,b||""),y=u(h)):(v=g.resolve(e.options.root,g.join(_||"",h)),y=m.readFileSync(v,"utf-8")),e.trackLoaded(b||void 0,v,y)}r.cursor+=i+1}return n()}function u(e){var t=k.exec(e),n=t[2]?t[2].split(/[=;]/)[2]:"us-ascii",r=t[3]?t[3].split(";")[1]:"utf8",o="utf8"==r?E(t[4]):t[4],s=new i(o,r);return s.charset=n,s.toString()}function c(e,t,n,r){l(e,t,function(i){e.trackLoaded(n.files[n.files.length-1]||void 0,t,i),r()},function(e){return n.errors.push('Broken source map at "'+t+'" - '+e),r()})}function l(e,t,n,r){var i=0===t.indexOf("https")?y:v,o=_(b.parse(t),e.requestOptions),s=!1;i.get(o,function(e){if(e.statusCode<200||e.statusCode>299)return r(e.statusCode);var t=[];e.on("data",function(e){t.push(e.toString())}),e.on("end",function(){n(t.join(""))})}).on("error",function(e){s||(r(e.message),s=!0)}).on("timeout",function(){s||(r("timeout"),s=!0)}).setTimeout(e.timeout)}function p(e,t,n,r,i){for(var o,s=r.length,a={line:t,column:n+s};s-- >0&&(a.column--,!(o=e.data.originalPositionFor(a))););return null===o.line&&t>1&&i>0?p(e,t-1,n,r,i-1):(e.path&&o.source&&(o.source=w.test(e.path)?b.resolve(e.path,o.source):g.join(e.path,o.source),o.sourceResolved=!0),o)}function h(e,t){var n=e.maps[t].data,r=w.test(t),i={};n.sources.forEach(function(o,s){var a=r?b.resolve(g.dirname(t),o):g.relative(e.relativeTo,g.resolve(g.dirname(t||"."),o));i[a]=n.sourcesContent&&n.sourcesContent[s]}),e.sourcesContent[t]=i}function f(e,t,n){function r(){return f(e,t,n)}if(0===t.length)return n();var i=t.shift(),o=i[0],s=i[1],a=w.test(o);if(a&&e.localOnly)return e.warnings.push('No callback given to `#minify` method, cannot fetch a remote file from "'+s+'"'),r();if(!a){var u=g.join(e.options.root,s);return m.existsSync(u)?e.sourcesContent[o][s]=m.readFileSync(u,"utf-8"):e.warnings.push('Missing original source file at "'+u+'".'),r()}l(e,s,function(t){e.sourcesContent[o][s]=t,r()},function(t){e.warnings.push('Broken original source file at "'+s+'" - '+t),r()})}var d=e("source-map").SourceMapConsumer,m=e("fs"),g=e("path"),v=e("http"),y=e("https"),b=e("url"),_=e("../utils/object.js").override,x=/\/\*# sourceMappingURL=(\S+) \*\//,w=/^(https?:)?\/\//,k=/^data:(\S*?)?(;charset=[^;]+)?(;[^,]+?)?,(.+)/,E=r.unescape;o.prototype.track=function(e,t){return"string"==typeof this.options.sourceMap?s(this,0,t):a(this,e,t,{files:[],cursor:0,errors:this.errors})},o.prototype.trackLoaded=function(e,t,n){var r=this.options.explicitTarget?this.options.target:this.options.root,i=w.test(e);t&&(t=i?g.dirname(t):g.dirname(g.relative(r,t))),this.maps[e]={path:t,data:new d(n)},h(this,e)},o.prototype.isTracking=function(e){return!!this.maps[e]},o.prototype.originalPositionFor=function(e,t,n){return p(this.maps[e.source],e.line,e.column,t,n)},o.prototype.sourcesContentFor=function(e){return this.sourcesContent[e]},o.prototype.resolveSources=function(e){var t=[];for(var n in this.sourcesContent){var r=this.sourcesContent[n];for(var i in r)r[i]||t.push([n,i])}return f(this,t,e)},t.exports=o}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer)},{"../utils/object.js":102,_process:31,buffer:11,fs:10,http:10,https:10,path:30,"source-map":107,url:148}],102:[function(e,t,n){t.exports={override:function(e,t){var n={};for(var r in e)n[r]=e[r];for(var i in t)n[i]=t[i];return n}}},{}],103:[function(e,t,n){function r(e){this.data=e}function i(e,t){for(var n=t;n>-1&&!((n=e.lastIndexOf(s,n))>-1&&"*"!=e[n-1]);)n--;return n}function o(e,t,n){for(var r=n;;){if(-1==(r=e.indexOf(t,r+1)))return-1;if("\\"!=e[r-1])return r}}var s="/*",a=function(e,t,n,r){var o=e.substring(r,n),s=o.lastIndexOf("*/",n),a=i(o,n),u=!1;if(s>=n&&a>-1&&(u=!0),a<n&&a>s&&(u=!0),u){var c=e.indexOf("*/",n);return c>-1?c:(c=e.indexOf("}",n))>-1?c-1:e.length}for(;;){if(void 0===e[n])break;if(e[n]==t&&("\\"!=e[n-1]||"\\"==e[n-2]))break;n++}return n};r.prototype.each=function(e){for(var t=this.data,n=[],r=0,i=0,s=0,u=null,c=t.length;i<t.length;){var l=o(t,"'",i),p=o(t,'"',i);if(-1==l&&(l=c),-1==p&&(p=c),l<p?(r=l,u="'"):(r=p,u='"'),-1==r)break;if(-1==(i=a(t,u,r+1,s)))break;var h=t.substring(r,i+1);n.push(t.substring(s,r)),h.length>0&&e(h,n,r),s=i+1}return n.length>0?n.join("")+t.substring(s,t.length):t},t.exports=r},{}],104:[function(e,t,n){(function(n){function r(e,t){this.outerContext=e,this.data=t,this.sources={}}function i(e){var t=e.data;return e.trackSource(void 0,t),t}function o(e){var t=e.data.toString();return e.trackSource(void 0,t),t}function s(e){return e.data.map(function(t){return!1===e.outerContext.options.processImport?t+"@shallow":t}).map(function(t){return!e.outerContext.options.relativeTo||/^https?:\/\//.test(t)?t:u.relative(e.outerContext.options.relativeTo,t)}).map(function(e){return"@import url("+e+");"}).join("")}function a(e){var t=[],n=u.resolve(e.outerContext.options.target||e.outerContext.options.root);for(var r in e.data){var i=e.data[r].styles,o=e.data[r].sourceMap,s=l.test(r),a=s?r:u.resolve(r),p=u.dirname(a),h={absolute:e.outerContext.options.explicitRoot,relative:!e.outerContext.options.explicitRoot,imports:!0,rebase:e.outerContext.options.rebase,fromBase:p,toBase:s?p:n,urlQuotes:e.outerContext.options.compatibility.properties.urlQuotes};i=c(i,h,e.outerContext),e.trackSource(r,i),i=e.outerContext.sourceTracker.store(r,i),e.outerContext.options.sourceMap&&o&&e.outerContext.inputSourceMapTracker.trackLoaded(r,r,o),t.push(i)}return t.join("")}var u=e("path"),c=e("../urls/rewrite"),l=/^(https?:)?\/\//;r.prototype.sourceAt=function(e){return this.sources[e]},r.prototype.trackSource=function(e,t){this.sources[e]={},this.sources[e][e]=t},r.prototype.toString=function(){return"string"==typeof this.data?i(this):n.isBuffer(this.data)?o(this):Array.isArray(this.data)?s(this):a(this)},t.exports=r}).call(this,{isBuffer:e("../../../../../is-buffer/index.js")})},{"../../../../../is-buffer/index.js":22,"../urls/rewrite":98,path:30}],105:[function(e,t,n){function r(){this.sources=[]}r.prototype.store=function(e,t){return this.sources.push(e),"__ESCAPED_SOURCE_CLEAN_CSS"+(this.sources.length-1)+"__"+t+"__ESCAPED_SOURCE_END_CLEAN_CSS__"},r.prototype.nextStart=function(e){var t=/__ESCAPED_SOURCE_CLEAN_CSS(\d+)__/.exec(e);return t?{index:t.index,filename:this.sources[~~t[1]]}:null},r.prototype.nextEnd=function(e){return/__ESCAPED_SOURCE_END_CLEAN_CSS__/g.exec(e)},r.prototype.removeAll=function(e){return e.replace(/__ESCAPED_SOURCE_CLEAN_CSS\d+__/g,"").replace(/__ESCAPED_SOURCE_END_CLEAN_CSS__/g,"")},t.exports=r},{}],106:[function(e,t,n){t.exports=function(e,t,n,r,i,o){var s="string"!=typeof t;if(!(s?t.test(e):e.indexOf(t)))return[e];if(r=r||"(",i=i||")",-1==e.indexOf(r)&&!n&&!o)return e.split(t);for(var a=!1,u=!1,c=0,l=0,p=0,h=e.length,f=[];l<h&&(a="\\"==e[l],u||(e[l]==r?c++:e[l]==i&&c--),!(!u&&0===c&&l>0&&l+1<h&&(s?t.test(e[l]):e[l]==t)&&(f.push(e.substring(p,l+(n?1:0))),p=l+1,o&&1==f.length)));)u=a,l++;if(p<l+1){var d=e.substring(p),m=d[d.length-1];!n&&(s?t.test(m):m==t)&&(d=d.substring(0,d.length-1)),f.push(d)}return f}},{}],107:[function(e,t,n){n.SourceMapGenerator=e("./source-map/source-map-generator").SourceMapGenerator,n.SourceMapConsumer=e("./source-map/source-map-consumer").SourceMapConsumer,n.SourceNode=e("./source-map/source-node").SourceNode},{"./source-map/source-map-consumer":114,"./source-map/source-map-generator":115,"./source-map/source-node":116}],108:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(){this._array=[],this._set={}}var i=e("./util");r.fromArray=function(e,t){for(var n=new r,i=0,o=e.length;i<o;i++)n.add(e[i],t);return n},r.prototype.size=function(){return Object.getOwnPropertyNames(this._set).length},r.prototype.add=function(e,t){var n=this.has(e),r=this._array.length;n&&!t||this._array.push(e),n||(this._set[i.toSetString(e)]=r)},r.prototype.has=function(e){return Object.prototype.hasOwnProperty.call(this._set,i.toSetString(e))},r.prototype.indexOf=function(e){if(this.has(e))return this._set[i.toSetString(e)];throw new Error('"'+e+'" is not in the set.')},r.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},r.prototype.toArray=function(){return this._array.slice()},t.ArraySet=r})},{"./util":117,amdefine:4}],109:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){return e<0?1+(-e<<1):0+(e<<1)}function i(e){var t=e>>1;return 1==(1&e)?-t:t}var o=e("./base64");t.encode=function(e){var t,n="",i=r(e);do{t=31&i,(i>>>=5)>0&&(t|=32),n+=o.encode(t)}while(i>0);return n},t.decode=function(e,t,n){var r,s,a=e.length,u=0,c=0;do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&s),u+=(s&=31)<<c,c+=5}while(r);n.value=i(u),n.rest=t}})},{"./base64":110,amdefine:4}],110:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+aNumber)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})},{amdefine:4}],111:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,n,i,o,s,a){var u=Math.floor((n-e)/2)+e,c=s(i,o[u],!0);return 0===c?u:c>0?n-u>1?r(u,n,i,o,s,a):a==t.LEAST_UPPER_BOUND?n<o.length?n:-1:u:u-e>1?r(e,u,i,o,s,a):a==t.LEAST_UPPER_BOUND?u:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,o){if(0===n.length)return-1;var s=r(-1,n.length,e,n,i,o||t.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===i(n[s],n[s-1],!0);)--s;return s}})},{amdefine:4}],112:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t){var n=e.generatedLine,r=t.generatedLine,i=e.generatedColumn,s=t.generatedColumn;return r>n||r==n&&s>=i||o.compareByGeneratedPositionsInflated(e,t)<=0}function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var o=e("./util");i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){r(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(o.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=i})},{"./util":117,amdefine:4}],113:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function i(e,t){return Math.round(e+Math.random()*(t-e))}function o(e,t,n,s){if(n<s){var a=n-1;r(e,i(n,s),s);for(var u=e[s],c=n;c<s;c++)t(e[c],u)<=0&&r(e,a+=1,c);r(e,a+1,c);var l=a+1;o(e,t,n,l-1),o(e,t,l+1,s)}}t.quickSort=function(e,t){o(e,t,0,e.length-1)}})},{amdefine:4}],114:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new s(t):new i(t)}function i(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),r=a.getArg(t,"sources"),i=a.getArg(t,"names",[]),o=a.getArg(t,"sourceRoot",null),s=a.getArg(t,"sourcesContent",null),u=a.getArg(t,"mappings"),l=a.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);r=r.map(a.normalize),this._names=c.fromArray(i,!0),this._sources=c.fromArray(r,!0),this.sourceRoot=o,this.sourcesContent=s,this._mappings=u,this.file=l}function o(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function s(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),i=a.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new c,this._names=new c;var o={line:-1,column:0};this._sections=i.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=a.getArg(e,"offset"),n=a.getArg(t,"line"),i=a.getArg(t,"column");if(n<o.line||n===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:n+1,generatedColumn:i+1},consumer:new r(a.getArg(e,"map"))}})}var a=e("./util"),u=e("./binary-search"),c=e("./array-set").ArraySet,l=e("./base64-vlq"),p=e("./quick-sort").quickSort;r.fromSourceMap=function(e){return i.fromSourceMap(e)},r.prototype._version=3,r.prototype.__generatedMappings=null,Object.defineProperty(r.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),r.prototype.__originalMappings=null,Object.defineProperty(r.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),r.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},r.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},r.GENERATED_ORDER=1,r.ORIGINAL_ORDER=2,r.GREATEST_LOWER_BOUND=1,r.LEAST_UPPER_BOUND=2,r.prototype.eachMapping=function(e,t,n){var i,o=t||null;switch(n||r.GENERATED_ORDER){case r.GENERATED_ORDER:i=this._generatedMappings;break;case r.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;i.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=a.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,o)},r.prototype.allGeneratedPositionsFor=function(e){var t=a.getArg(e,"line"),n={source:a.getArg(e,"source"),originalLine:t,originalColumn:a.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=a.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var r=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,u.LEAST_UPPER_BOUND);if(i>=0){var o=this._originalMappings[i];if(void 0===e.column)for(var s=o.originalLine;o&&o.originalLine===s;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i];else for(var c=o.originalColumn;o&&o.originalLine===t&&o.originalColumn==c;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i]}return r},t.SourceMapConsumer=r,(i.prototype=Object.create(r.prototype)).consumer=r,i.fromSourceMap=function(e){var t=Object.create(i.prototype),n=t._names=c.fromArray(e._names.toArray(),!0),r=t._sources=c.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),u=t.__generatedMappings=[],l=t.__originalMappings=[],h=0,f=s.length;h<f;h++){var d=s[h],m=new o;m.generatedLine=d.generatedLine,m.generatedColumn=d.generatedColumn,d.source&&(m.source=r.indexOf(d.source),m.originalLine=d.originalLine,m.originalColumn=d.originalColumn,d.name&&(m.name=n.indexOf(d.name)),l.push(m)),u.push(m)}return p(t.__originalMappings,a.compareByOriginalPositions),t},i.prototype._version=3,Object.defineProperty(i.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?a.join(this.sourceRoot,e):e},this)}}),i.prototype._parseMappings=function(e,t){for(var n,r,i,s,u,c=1,h=0,f=0,d=0,m=0,g=0,v=e.length,y=0,b={},_={},x=[],w=[];y<v;)if(";"===e.charAt(y))c++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new o).generatedLine=c,s=y;s<v&&!this._charIsMappingSeparator(e,s);s++);if(r=e.slice(y,s),i=b[r])y+=r.length;else{for(i=[];y<s;)l.decode(e,y,_),u=_.value,y=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");b[r]=i}n.generatedColumn=h+i[0],h=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=d+i[3],d=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),w.push(n),"number"==typeof n.originalLine&&x.push(n)}p(w,a.compareByGeneratedPositionsDeflated),this.__generatedMappings=w,p(x,a.compareByOriginalPositions),this.__originalMappings=x},i.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return u.search(e,t,i,o)},i.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},i.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",a.compareByGeneratedPositionsDeflated,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===t.generatedLine){var o=a.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=a.join(this.sourceRoot,o)));var s=a.getArg(i,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:a.getArg(i,"originalLine",null),column:a.getArg(i,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},i.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e}))},i.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=a.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=a.urlParse(this.sourceRoot))){var r=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(r))return this.sourcesContent[this._sources.indexOf(r)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},i.prototype.generatedPositionFor=function(e){var t=a.getArg(e,"source");if(null!=this.sourceRoot&&(t=a.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:a.getArg(e,"line"),originalColumn:a.getArg(e,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===n.source)return{line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=i,(s.prototype=Object.create(r.prototype)).constructor=r,s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),s.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=u.search(t,this._sections,function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn}),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},s.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(a.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},s.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],i=r.consumer._generatedMappings,o=0;o<i.length;o++){var s=i[n],u=r.consumer._sources.at(s.source);null!==r.consumer.sourceRoot&&(u=a.join(r.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=r.consumer._names.at(s.name);this._names.add(c),c=this._names.indexOf(c);var l={source:u,generatedLine:s.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:s.column+(r.generatedOffset.generatedLine===s.generatedLine)?r.generatedOffset.generatedColumn-1:0,originalLine:s.originalLine,originalColumn:s.originalColumn,name:c};this.__generatedMappings.push(l),"number"==typeof l.originalLine&&this.__originalMappings.push(l)}p(this.__generatedMappings,a.compareByGeneratedPositionsDeflated),p(this.__originalMappings,a.compareByOriginalPositions)},t.IndexedSourceMapConsumer=s})},{"./array-set":108,"./base64-vlq":109,"./binary-search":111,"./quick-sort":113,"./util":117,amdefine:4}],115:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}var i=e("./base64-vlq"),o=e("./util"),s=e("./array-set").ArraySet,a=e("./mapping-list").MappingList;r.prototype._version=3,r.fromSourceMap=function(e){var t=e.sourceRoot,n=new r({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},r.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null==r||this._sources.has(r)||this._sources.add(r),null==i||this._names.has(i)||this._names.add(i),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},r.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents={}),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},r.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var a=new s,u=new s;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var c=t.source;null==c||a.has(c)||a.add(c);var l=t.name;null==l||u.has(l)||u.add(l)},this),this._sources=a,this._names=u,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))},this)},r.prototype._validateMapping=function(e,t,n,r){if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},r.prototype._serializeMappings=function(){for(var e,t=0,n=1,r=0,s=0,a=0,u=0,c="",l=this._mappings.toArray(),p=0,h=l.length;p<h;p++){if((e=l[p]).generatedLine!==n)for(t=0;e.generatedLine!==n;)c+=";",n++;else if(p>0){if(!o.compareByGeneratedPositionsInflated(e,l[p-1]))continue;c+=","}c+=i.encode(e.generatedColumn-t),t=e.generatedColumn,null!=e.source&&(c+=i.encode(this._sources.indexOf(e.source)-u),u=this._sources.indexOf(e.source),c+=i.encode(e.originalLine-1-s),s=e.originalLine-1,c+=i.encode(e.originalColumn-r),r=e.originalColumn,null!=e.name&&(c+=i.encode(this._names.indexOf(e.name)-a),a=this._names.indexOf(e.name)))}return c},r.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},r.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},r.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=r})},{"./array-set":108,"./base64-vlq":109,"./mapping-list":112,"./util":117,amdefine:4}],116:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this[a]=!0,null!=r&&this.add(r)}var i=e("./source-map-generator").SourceMapGenerator,o=e("./util"),s=/(\r?\n)/,a="$$$isSourceNode$$$";r.fromStringWithSourceMap=function(e,t,n){function i(e,t){if(null===e||void 0===e.source)a.add(t);else{var i=n?o.join(n,e.source):e.source;a.add(new r(e.originalLine,e.originalColumn,i,t,e.name))}}var a=new r,u=e.split(s),c=function(){return u.shift()+(u.shift()||"")},l=1,p=0,h=null;return t.eachMapping(function(e){if(null!==h){if(!(l<e.generatedLine)){t=(n=u[0]).substr(0,e.generatedColumn-p);return u[0]=n.substr(e.generatedColumn-p),p=e.generatedColumn,i(h,t),void(h=e)}var t="";i(h,c()),l++,p=0}for(;l<e.generatedLine;)a.add(c()),l++;if(p<e.generatedColumn){var n=u[0];a.add(n.substr(0,e.generatedColumn)),u[0]=n.substr(e.generatedColumn),p=e.generatedColumn}h=e},this),u.length>0&&(h&&i(h,c()),a.add(u.join(""))),t.sources.forEach(function(e){var r=t.sourceContentFor(e);null!=r&&(null!=n&&(e=o.join(n,e)),a.setSourceContent(e,r))}),a},r.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},r.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},r.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},r.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},r.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},r.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},r.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);for(var r=Object.keys(this.sourceContents),t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},r.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},r.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk(function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},t.SourceNode=r})},{"./source-map-generator":115,"./util":117,amdefine:4}],117:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){var t=e.match(a);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var t=e,n=r(e);if(n){if(!n.path)return e;t=n.path}for(var o,s="/"===t.charAt(0),a=t.split(/\/+/),u=0,c=a.length-1;c>=0;c--)"."===(o=a[c])?a.splice(c,1):".."===o?u++:u>0&&(""===o?(a.splice(c+1,u),u=0):(a.splice(c,2),u--));return""===(t=a.join("/"))&&(t=s?"/":"."),n?(n.path=t,i(n)):t}function s(e,t){return e===t?0:e>t?1:-1}t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var a=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,u=/^data:.+\,.+$/;t.urlParse=r,t.urlGenerate=i,t.normalize=o,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=r(t),s=r(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),i(n);if(n||t.match(u))return t;if(s&&!s.host&&!s.path)return s.host=t,i(s);var a="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=a,i(s)):a},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)},t.toSetString=function(e){return"$"+e},t.fromSetString=function(e){return e.substr(1)},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!=(r=e.source-t.source)?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=s(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:s(e.name,t.name)}})},{amdefine:4}],118:[function(e,t,n){"use strict";function r(){throw e("pug-error").apply(null,arguments)}function i(e){h("Block"===e.type,"The top level element should always be a block");var t=null;if(e.nodes.length){var n="Extends"===e.nodes[0].type;p(e,n),n&&(t=e.nodes.shift())}if(e=u(e),e.declaredBlocks=o(e),t){var s=[],c=[];e.nodes.forEach(function e(t){"NamedBlock"===t.type?c.push(t):"Block"===t.type?t.nodes.forEach(e):"Mixin"===t.type&&!1===t.call?s.push(t):r("UNEXPECTED_NODES_IN_EXTENDING_ROOT","Only named blocks and mixins can appear at the top level of an extending template",t)});var l=i(t.file.ast);a(l.declaredBlocks,e);var d=[];return f(l,function(e){"NamedBlock"===e.type&&d.push(e.name)}),c.forEach(function(e){-1===d.indexOf(e.name)&&r("UNEXPECTED_BLOCK","Unexpected block "+e.name,e)}),Object.keys(e.declaredBlocks).forEach(function(t){l.declaredBlocks[t]=e.declaredBlocks[t]}),l.nodes=s.concat(l.nodes),l.hasExtends=!0,l}return e}function o(e){var t={};return f(e,function(e){"NamedBlock"===e.type&&"replace"===e.mode&&(t[e.name]=t[e.name]||[],t[e.name].push(e))}),t}function s(e,t){return t=t||[],e.forEach(function(e){e.parents&&s(e.parents,t),t.push(e)}),t}function a(e,t){var n={};f(t,function(t){if("NamedBlock"===t.type){if(n[t.name]===t.name)return t.ignore=!0;n[t.name]=t.name;var r=e[t.name]?s(e[t.name]):[];r.length&&(t.parents=r,r.forEach(function(e){switch(t.mode){case"append":e.nodes=e.nodes.concat(t.nodes);break;case"prepend":e.nodes=t.nodes.concat(e.nodes);break;case"replace":e.nodes=t.nodes}}))}},function(e){"NamedBlock"!==e.type||e.ignore||delete n[e.name]})}function u(e,t){return f(e,function(e,t){"RawInclude"===e.type&&t({type:"Text",val:e.file.str.replace(/\r/g,"")})},function(e,t){if("Include"===e.type){var n=i(e.file.ast);n.hasExtends&&(n=c(n)),t(l(n,e.block))}})}function c(e){return f(e,function(e,t){"NamedBlock"===e.type&&t({type:"Block",nodes:e.nodes})})}function l(e,t){function n(e){for(var t=e,r=0;r<e.nodes.length;r++)e.nodes[r].textOnly||("Block"===e.nodes[r].type?t=n(e.nodes[r]):e.nodes[r].block&&e.nodes[r].block.nodes.length&&(t=n(e.nodes[r].block)));return t}if(!t||!t.nodes.length)return e;var r=!1;return e=f(e,null,function(e,n){"YieldBlock"===e.type&&(r=!0,e.type="Block",e.nodes=[t])}),r||n(e).nodes.push(t),e}function p(e,t){var n=!1;f(e,function(e){"Extends"===e.type&&(t&&!n?n=!0:r("EXTENDS_NOT_FIRST",'Declaration of template inheritance ("extends") should be the first thing in the file. There can only be one extends statement per file.',e))})}var h=e("assert"),f=e("pug-walk");t.exports=i},{assert:7,"pug-error":42,"pug-walk":129}],119:[function(e,t,n){"use strict";function r(e,t){return t=i(t),e=JSON.parse(JSON.stringify(e)),a(e,function(e){if(void 0===e.str&&("Include"===e.type||"RawInclude"===e.type||"Extends"===e.type)){var n=e.file;if("FileReference"!==n.type)throw new Error('Expected file.type to be "FileReference"');var i,o;try{i=t.resolve(n.path,n.filename,t),n.fullPath=i,o=t.read(i,t)}catch(t){throw t.message+="\n    at "+e.filename+" line "+e.line,t}n.str=o,"Extends"!==e.type&&"Include"!==e.type||(n.ast=r.string(o,u({},t,{filename:i})))}})}function i(e){return r.validateOptions(e),u({resolve:r.resolve,read:r.read},e)}var o=e("fs"),s=e("path"),a=e("pug-walk"),u=e("object-assign");t.exports=r,r.string=function(e,t){var n=(t=u(i(t),{src:e})).lex(e,t);return r(t.parse(n,t),t)},r.file=function(e,t){var n=(t=u(i(t),{filename:e})).read(e);return r.string(n,t)},r.resolve=function(e,t,n){if("/"!==(e=e.trim())[0]&&!t)throw new Error('the "filename" option is required to use includes and extends with "relative" paths');if("/"===e[0]&&!n.basedir)throw new Error('the "basedir" option is required to use includes and extends with "absolute" paths');return e=s.join("/"===e[0]?n.basedir:s.dirname(t.trim()),e)},r.read=function(e,t){return o.readFileSync(e,"utf8")},r.validateOptions=function(e){if("object"!=typeof e)throw new TypeError("options must be an object");if("function"!=typeof e.lex)throw new TypeError("options.lex must be a function");if("function"!=typeof e.parse)throw new TypeError("options.parse must be a function");if(e.resolve&&"function"!=typeof e.resolve)throw new TypeError("options.resolve must be a function");if(e.read&&"function"!=typeof e.read)throw new TypeError("options.read must be a function")}},{fs:10,"object-assign":28,path:30,"pug-walk":129}],120:[function(e,t,n){"use strict";function r(e,t){if(t=t||{},!Array.isArray(e))throw new Error('Expected tokens to be an Array but got "'+typeof e+'"');if("object"!=typeof t)throw new Error('Expected "options" to be an object but got "'+typeof t+'"');this.tokens=new o(e),this.filename=t.filename,this.src=t.src,this.inMixin=0,this.plugins=t.plugins||[]}var i=e("assert"),o=e("token-stream"),s=e("pug-error"),a=e("./lib/inline-tags");t.exports=function(e,t){var n=new r(e,t).parse();return JSON.parse(JSON.stringify(n))},t.exports.Parser=r,r.prototype={constructor:r,error:function(e,t,n){throw s(e,t,{line:n.line,column:n.col,filename:this.filename,src:this.src})},advance:function(){return this.tokens.advance()},peek:function(){return this.tokens.peek()},lookahead:function(e){return this.tokens.lookahead(e)},parse:function(){for(var e=this.emptyBlock(0);"eos"!=this.peek().type;)if("newline"==this.peek().type)this.advance();else if("text-html"==this.peek().type)e.nodes=e.nodes.concat(this.parseTextHtml());else{var t=this.parseExpr();t&&("Block"===t.type?e.nodes=e.nodes.concat(t.nodes):e.nodes.push(t))}return e},expect:function(e){if(this.peek().type===e)return this.advance();this.error("INVALID_TOKEN",'expected "'+e+'", but got "'+this.peek().type+'"',this.peek())},accept:function(e){if(this.peek().type===e)return this.advance()},initBlock:function(e,t){if((0|e)!==e)throw new Error("`line` is not an integer");if(!Array.isArray(t))throw new Error("`nodes` is not an array");return{type:"Block",nodes:t,line:e,filename:this.filename}},emptyBlock:function(e){return this.initBlock(e,[])},runPlugin:function(e,t){for(var n=[this],r=2;r<arguments.length;r++)n.push(arguments[r]);for(var i,r=0;r<this.plugins.length;r++){var o=this.plugins[r];if(o[e]&&o[e][t.type]){if(i)throw new Error("Multiple plugin handlers found for context "+JSON.stringify(e)+", token type "+JSON.stringify(t.type));i=o[e]}}if(i)return i[t.type].apply(i,n)},parseExpr:function(){switch(this.peek().type){case"tag":return this.parseTag();case"mixin":return this.parseMixin();case"block":return this.parseBlock();case"mixin-block":return this.parseMixinBlock();case"case":return this.parseCase();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"doctype":return this.parseDoctype();case"filter":return this.parseFilter();case"comment":return this.parseComment();case"text":case"interpolated-code":case"start-pug-interpolation":return this.parseText({block:!0});case"text-html":return this.initBlock(this.peek().line,this.parseTextHtml());case"dot":return this.parseDot();case"each":return this.parseEach();case"code":return this.parseCode();case"blockcode":return this.parseBlockCode();case"if":return this.parseConditional();case"while":return this.parseWhile();case"call":return this.parseCall();case"interpolation":return this.parseInterpolation();case"yield":return this.parseYield();case"id":case"class":return this.tokens.defer({type:"tag",val:"div",line:this.peek().line,col:this.peek().col,filename:this.filename}),this.parseExpr();default:var e=this.runPlugin("expressionTokens",this.peek());if(e)return e;this.error("INVALID_TOKEN",'unexpected token "'+this.peek().type+'"',this.peek())}},parseDot:function(){return this.advance(),this.parseTextBlock()},parseText:function(e){var t=[],n=this.peek().line,r=this.peek();e:for(;;){switch(r.type){case"text":i=this.advance();t.push({type:"Text",val:i.val,line:i.line,column:i.col,filename:this.filename});break;case"interpolated-code":i=this.advance();t.push({type:"Code",val:i.val,buffer:i.buffer,mustEscape:!1!==i.mustEscape,isInline:!0,line:i.line,column:i.col,filename:this.filename});break;case"newline":if(!e||!e.block)break e;var i=this.advance(),o=this.peek().type;"text"!==o&&"interpolated-code"!==o||t.push({type:"Text",val:"\n",line:i.line,column:i.col,filename:this.filename});break;case"start-pug-interpolation":this.advance(),t.push(this.parseExpr()),this.expect("end-pug-interpolation");break;default:if(this.runPlugin("textTokens",r,t))break;break e}r=this.peek()}return 1===t.length?t[0]:this.initBlock(n,t)},parseTextHtml:function(){var e=[],t=null;e:for(;;)switch(this.peek().type){case"text-html":var n=this.advance();t?t.val+="\n"+n.val:(t={type:"Text",val:n.val,filename:this.filename,line:n.line,column:n.col,isHtml:!0},e.push(t));break;case"indent":this.block().nodes.forEach(function(n){n.isHtml?t?t.val+="\n"+n.val:(t=n,e.push(t)):(t=null,e.push(n))});break;case"code":t=null,e.push(this.parseCode(!0));break;case"newline":this.advance();break;default:break e}return e},parseBlockExpansion:function(){var e=this.accept(":");if(e){var t=this.parseExpr();return"Block"===t.type?t:this.initBlock(e.line,[t])}return this.block()},parseCase:function(){var e=this.expect("case"),t={type:"Case",expr:e.val,line:e.line,column:e.col,filename:this.filename},n=this.emptyBlock(e.line+1);for(this.expect("indent");"outdent"!=this.peek().type;)switch(this.peek().type){case"comment":case"newline":this.advance();break;case"when":n.nodes.push(this.parseWhen());break;case"default":n.nodes.push(this.parseDefault());break;default:if(this.runPlugin("caseTokens",this.peek(),n))break;this.error("INVALID_TOKEN",'Unexpected token "'+this.peek().type+'", expected "when", "default" or "newline"',this.peek())}return this.expect("outdent"),t.block=n,t},parseWhen:function(){var e=this.expect("when");return"newline"!==this.peek().type?{type:"When",expr:e.val,block:this.parseBlockExpansion(),debug:!1,line:e.line,column:e.col,filename:this.filename}:{type:"When",expr:e.val,debug:!1,line:e.line,column:e.col,filename:this.filename}},parseDefault:function(){var e=this.expect("default");return{type:"When",expr:"default",block:this.parseBlockExpansion(),debug:!1,line:e.line,column:e.col,filename:this.filename}},parseCode:function(e){var t=this.expect("code");i("boolean"==typeof t.mustEscape,"Please update to the newest version of pug-lexer.");var n={type:"Code",val:t.val,buffer:t.buffer,mustEscape:!1!==t.mustEscape,isInline:!!e,line:t.line,column:t.col,filename:this.filename};if(n.val.match(/^ *else/)&&(n.debug=!1),e)return n;return"indent"==this.peek().type&&(t.buffer&&this.error("BLOCK_IN_BUFFERED_CODE","Buffered code cannot have a block attached to it",this.peek()),n.block=this.block()),n},parseConditional:function(){var e=this.expect("if"),t={type:"Conditional",test:e.val,consequent:this.emptyBlock(e.line),alternate:null,line:e.line,column:e.col,filename:this.filename};"indent"==this.peek().type&&(t.consequent=this.block());for(var n=t;;)if("newline"===this.peek().type)this.expect("newline");else{if("else-if"!==this.peek().type){if("else"===this.peek().type){this.expect("else"),"indent"===this.peek().type&&(n.alternate=this.block());break}break}e=this.expect("else-if"),n=n.alternate={type:"Conditional",test:e.val,consequent:this.emptyBlock(e.line),alternate:null,line:e.line,column:e.col,filename:this.filename},"indent"==this.peek().type&&(n.consequent=this.block())}return t},parseWhile:function(){var e=this.expect("while"),t={type:"While",test:e.val,line:e.line,column:e.col,filename:this.filename};return"indent"==this.peek().type?t.block=this.block():t.block=this.emptyBlock(e.line),t},parseBlockCode:function(){var e=this.expect("blockcode"),t=e.line,n=e.col,r="";if("start-pipeless-text"===this.peek().type){for(this.advance();"end-pipeless-text"!==this.peek().type;)switch((e=this.advance()).type){case"text":r+=e.val;break;case"newline":r+="\n";break;default:var i=this.runPlugin("blockCodeTokens",e,e);if(i){r+=i;break}this.error("INVALID_TOKEN","Unexpected token type: "+e.type,e)}this.advance()}return{type:"Code",val:r,buffer:!1,mustEscape:!1,isInline:!1,line:t,column:n,filename:this.filename}},parseComment:function(){var e,t=this.expect("comment");return(e=this.parseTextBlock())?{type:"BlockComment",val:t.val,block:e,buffer:t.buffer,line:t.line,column:t.col,filename:this.filename}:{type:"Comment",val:t.val,buffer:t.buffer,line:t.line,column:t.col,filename:this.filename}},parseDoctype:function(){var e=this.expect("doctype");return{type:"Doctype",val:e.val,line:e.line,column:e.col,filename:this.filename}},parseIncludeFilter:function(){var e=this.expect("filter"),t=[];return"start-attributes"===this.peek().type&&(t=this.attrs()),{type:"IncludeFilter",name:e.val,attrs:t,line:e.line,column:e.col,filename:this.filename}},parseFilter:function(){var e,t=this.expect("filter"),n=[];if("start-attributes"===this.peek().type&&(n=this.attrs()),"text"===this.peek().type){var r=this.advance();e=this.initBlock(r.line,[{type:"Text",val:r.val,line:r.line,column:r.col,filename:this.filename}])}else e="filter"===this.peek().type?this.initBlock(t.line,[this.parseFilter()]):this.parseTextBlock()||this.emptyBlock(t.line);return{type:"Filter",name:t.val,block:e,attrs:n,line:t.line,column:t.col,filename:this.filename}},parseEach:function(){var e=this.expect("each"),t={type:"Each",obj:e.code,val:e.val,key:e.key,block:this.block(),line:e.line,column:e.col,filename:this.filename};return"else"==this.peek().type&&(this.advance(),t.alternate=this.block()),t},parseExtends:function(){var e=this.expect("extends"),t=this.expect("path");return{type:"Extends",file:{type:"FileReference",path:t.val.trim(),line:t.line,column:t.col,filename:this.filename},line:e.line,column:e.col,filename:this.filename}},parseBlock:function(){var e=this.expect("block"),t="indent"==this.peek().type?this.block():this.emptyBlock(e.line);return t.type="NamedBlock",t.name=e.val.trim(),t.mode=e.mode,t.line=e.line,t.column=e.col,t},parseMixinBlock:function(){var e=this.expect("mixin-block");return this.inMixin||this.error("BLOCK_OUTISDE_MIXIN","Anonymous blocks are not allowed unless they are part of a mixin.",e),{type:"MixinBlock",line:e.line,column:e.col,filename:this.filename}},parseYield:function(){var e=this.expect("yield");return{type:"YieldBlock",line:e.line,column:e.col,filename:this.filename}},parseInclude:function(){for(var e=this.expect("include"),t={type:"Include",file:{type:"FileReference",filename:this.filename},line:e.line,column:e.col,filename:this.filename},n=[];"filter"===this.peek().type;)n.push(this.parseIncludeFilter());var r=this.expect("path");return t.file.path=r.val.trim(),t.file.line=r.line,t.file.column=r.col,!/\.jade$/.test(t.file.path)&&!/\.pug$/.test(t.file.path)||n.length?(t.type="RawInclude",t.filters=n,"indent"===this.peek().type&&this.error("RAW_INCLUDE_BLOCK","Raw inclusion cannot contain a block",this.peek())):(t.block="indent"==this.peek().type?this.block():this.emptyBlock(e.line),/\.jade$/.test(t.file.path)&&console.warn(this.filename+", line "+e.line+':\nThe .jade extension is deprecated, use .pug for "'+t.file.path+'".')),t},parseCall:function(){var e=this.expect("call"),t={type:"Mixin",name:e.val,args:e.args,block:this.emptyBlock(e.line),call:!0,attrs:[],attributeBlocks:[],line:e.line,column:e.col,filename:this.filename};return this.tag(t),t.code&&(t.block.nodes.push(t.code),delete t.code),0===t.block.nodes.length&&(t.block=null),t},parseMixin:function(){var e=this.expect("mixin"),t=e.val,n=e.args;if("indent"==this.peek().type){this.inMixin++;var r={type:"Mixin",name:t,args:n,block:this.block(),call:!1,line:e.line,column:e.col,filename:this.filename};return this.inMixin--,r}this.error("MIXIN_WITHOUT_BODY","Mixin "+t+" declared without body",e)},parseTextBlock:function(){var e=this.accept("start-pipeless-text");if(e){for(var t=this.emptyBlock(e.line);"end-pipeless-text"!==this.peek().type;)switch((e=this.advance()).type){case"text":t.nodes.push({type:"Text",val:e.val,line:e.line,column:e.col,filename:this.filename});break;case"newline":t.nodes.push({type:"Text",val:"\n",line:e.line,column:e.col,filename:this.filename});break;case"start-pug-interpolation":t.nodes.push(this.parseExpr()),this.expect("end-pug-interpolation");break;case"interpolated-code":t.nodes.push({type:"Code",val:e.val,buffer:e.buffer,mustEscape:!1!==e.mustEscape,isInline:!0,line:e.line,column:e.col,filename:this.filename});break;default:if(this.runPlugin("textBlockTokens",e,t,e))break;this.error("INVALID_TOKEN","Unexpected token type: "+e.type,e)}return this.advance(),t}},block:function(){for(var e=this.expect("indent"),t=this.emptyBlock(e.line);"outdent"!=this.peek().type;)if("newline"==this.peek().type)this.advance();else if("text-html"==this.peek().type)t.nodes=t.nodes.concat(this.parseTextHtml());else{var n=this.parseExpr();"Block"===n.type?t.nodes=t.nodes.concat(n.nodes):t.nodes.push(n)}return this.expect("outdent"),t},parseInterpolation:function(){var e=this.advance(),t={type:"InterpolatedTag",expr:e.val,selfClosing:!1,block:this.emptyBlock(e.line),attrs:[],attributeBlocks:[],isInline:!1,line:e.line,column:e.col,filename:this.filename};return this.tag(t,{selfClosingAllowed:!0})},parseTag:function(){var e=this.advance(),t={type:"Tag",name:e.val,selfClosing:!1,block:this.emptyBlock(e.line),attrs:[],attributeBlocks:[],isInline:-1!==a.indexOf(e.val),line:e.line,column:e.col,filename:this.filename};return this.tag(t,{selfClosingAllowed:!0})},tag:function(e,t){var n=!1,r=[],i=t&&t.selfClosingAllowed;e:for(;;)switch(this.peek().type){case"id":case"class":"id"===(o=this.advance()).type&&(-1!==r.indexOf("id")&&this.error("DUPLICATE_ID",'Duplicate attribute "id" is not allowed.',o),r.push("id")),e.attrs.push({name:o.type,val:"'"+o.val+"'",line:o.line,column:o.col,filename:this.filename,mustEscape:!1});continue;case"start-attributes":n&&console.warn(this.filename+", line "+this.peek().line+":\nYou should not have pug tags with multiple attributes."),n=!0,e.attrs=e.attrs.concat(this.attrs(r));continue;case"&attributes":var o=this.advance();e.attributeBlocks.push({type:"AttributeBlock",val:o.val,line:o.line,column:o.col,filename:this.filename});break;default:if(u=this.runPlugin("tagAttributeTokens",this.peek(),e,r))break;break e}switch("dot"==this.peek().type&&(e.textOnly=!0,this.advance()),this.peek().type){case"text":case"interpolated-code":var s=this.parseText();"Block"===s.type?e.block.nodes.push.apply(e.block.nodes,s.nodes):e.block.nodes.push(s);break;case"code":e.block.nodes.push(this.parseCode(!0));break;case":":this.advance();var a=this.parseExpr();e.block="Block"===a.type?a:this.initBlock(e.line,[a]);break;case"newline":case"indent":case"outdent":case"eos":case"start-pipeless-text":case"end-pug-interpolation":break;case"slash":if(i){this.advance(),e.selfClosing=!0;break}default:var u=this.runPlugin("tagTokens",this.peek(),e,t);if(u)break;this.error("INVALID_TOKEN","Unexpected token `"+this.peek().type+"` expected `text`, `interpolated-code`, `code`, `:`"+(i?", `slash`":"")+", `newline` or `eos`",this.peek())}for(;"newline"==this.peek().type;)this.advance();if(e.textOnly)e.block=this.parseTextBlock()||this.emptyBlock(e.line);else if("indent"==this.peek().type)for(var c=this.block(),l=0,p=c.nodes.length;l<p;++l)e.block.nodes.push(c.nodes[l]);return e},attrs:function(e){this.expect("start-attributes");for(var t=[],n=this.advance();"attribute"===n.type;)"class"!==n.name&&e&&(-1!==e.indexOf(n.name)&&this.error("DUPLICATE_ATTRIBUTE",'Duplicate attribute "'+n.name+'" is not allowed.',n),e.push(n.name)),t.push({name:n.name,val:n.val,line:n.line,column:n.col,filename:this.filename,mustEscape:!1!==n.mustEscape}),n=this.advance();return this.tokens.defer(n),this.expect("end-attributes"),t}}},{"./lib/inline-tags":121,assert:7,"pug-error":42,"token-stream":146}],121:[function(e,t,n){"use strict";t.exports=["a","abbr","acronym","b","br","code","em","font","i","img","ins","kbd","map","samp","small","span","strong","sub","sup"]},{}],122:[function(e,t,n){"use strict";e("fs");var r=e("./lib/dependencies.js"),i=e("./lib/internals.js"),o=e("./lib/sources.js");t.exports=function(e){var t=[];e=e.filter(function(e){return!i[e]});for(var n=0;n<e.length;n++)-1===t.indexOf(e[n])&&(t.push(e[n]),e.push.apply(e,r[e[n]]));return t.sort().map(function(e){return o[e]}).join("\n")}},{"./lib/dependencies.js":124,"./lib/internals.js":125,"./lib/sources.js":126,fs:9}],123:[function(e,t,n){"use strict";function r(e,t){if(1===arguments.length){for(var n=e[0],i=1;i<e.length;i++)n=r(n,e[i]);return n}for(var o in t)if("class"===o){s=e[o]||[];e[o]=(Array.isArray(s)?s:[s]).concat(t[o]||[])}else if("style"===o){var s=a(e[o]),u=a(t[o]);e[o]=s+u}else e[o]=t[o];return e}function i(e,t){for(var n,r="",i="",o=Array.isArray(t),a=0;a<e.length;a++)(n=s(e[a]))&&(o&&t[a]&&(n=c(n)),r=r+i+n,i=" ");return r}function o(e){var t="",n="";for(var r in e)r&&e[r]&&p.call(e,r)&&(t=t+n+r,n=" ");return t}function s(e,t){return Array.isArray(e)?i(e,t):e&&"object"==typeof e?o(e):e||""}function a(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)p.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return";"!==(e+="")[e.length-1]?e+";":e}function u(e,t,n,r){return!1!==t&&null!=t&&(t||"class"!==e&&"style"!==e)?!0===t?" "+(r?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=c(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}function c(e){var t=""+e,n=h.exec(t);if(!n)return e;var r,i,o,s="";for(r=n.index,i=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(s+=t.substring(i,r)),i=r+1,s+=o}return i!==r?s+t.substring(i,r):s}function l(t,n,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&n||i))throw t.message+=" on line "+r,t;try{i=i||e("fs").readFileSync(n,"utf8")}catch(e){l(t,null,r)}var o=3,s=i.split("\n"),a=Math.max(r-o,0),u=Math.min(s.length,r+o),o=s.slice(a,u).map(function(e,t){var n=t+a+1;return(n==r?"  > ":"    ")+n+"| "+e}).join("\n");throw t.path=n,t.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+t.message,t}var p=Object.prototype.hasOwnProperty;n.merge=r,n.classes=s,n.style=a,n.attr=u,n.attrs=function(e,t){var n="";for(var r in e)if(p.call(e,r)){var i=e[r];if("class"===r){n=u(r,i=s(i),!1,t)+n;continue}"style"===r&&(i=a(i)),n+=u(r,i,!1,t)}return n};var h=/["&<>]/;n.escape=c,n.rethrow=l},{fs:9}],124:[function(e,t,n){t.exports={has_own_property:[],merge:["style"],classes_array:["classes","escape"],classes_object:["has_own_property"],classes:["classes_array","classes_object"],style:["has_own_property"],attr:["escape"],attrs:["attr","classes","has_own_property","style"],match_html:[],escape:["match_html"],rethrow:[]}},{}],125:[function(e,t,n){t.exports={dependencies:!0,internals:!0,has_own_property:!0,classes_array:!0,classes_object:!0,match_html:!0}},{}],126:[function(e,t,n){t.exports={has_own_property:"var pug_has_own_property=Object.prototype.hasOwnProperty;",merge:'function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+n}else r[g]=e[g];return r}',classes_array:'function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}',classes_object:'function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}',classes:'function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}',style:'function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}',attr:'function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+\'="\'+t+\'"\'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf(\'"\')===-1)?(n&&(e=pug_escape(e))," "+t+\'="\'+e+\'"\'):" "+t+"=\'"+e.replace(/\'/g,"&#39;")+"\'"):""}',attrs:'function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}',match_html:'var pug_match_html=/["&<>]/;',escape:'function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}',rethrow:'function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\\n"+i+"\\n\\n"+n.message,n}'}},{}],127:[function(e,t,n){var r=e("./");t.exports=function(e,t){return t=t||"template",Function("pug",e+"\nreturn "+t+";")(r)}},{"./":123}],128:[function(e,t,n){"use strict";function r(e,t,n,r){throw i("UNEXPECTED_TOKEN","`"+e+"` encountered when "+t,{filename:n,line:r})}var i=e("pug-error");t.exports=function(e,t){var n=!1!==(t=t||{}).stripUnbuffered,i=!0===t.stripBuffered,o=t.filename,s=!1,a=!1;return e.filter(function(e){switch(e.type){case"comment":if(!s)return!(s=e.buffer?i:n);r("comment","already in a comment",o,e.line);case"start-pipeless-text":return!s||(a&&r("start-pipeless-text","already in pipeless text mode",o,e.line),a=!0,!1);case"end-pipeless-text":return!s||(a||r("end-pipeless-text","not in pipeless text mode",o,e.line),a=!1,s=!1,!1);case"text":return!s;default:return!a&&(s=!1,!0)}})}},{"pug-error":42}],129:[function(e,t,n){"use strict";function r(e,t,n,i){function o(e){return e.reduce(function(e,o){var s=r(o,t,n,i);return Array.isArray(s)?e.concat(s):e.concat([s])},[])}n&&"object"==typeof n&&void 0===i&&(i=n,n=null);var s=(i=i||{includeDependencies:!1}).parents=i.parents||[],a=function t(n){if(Array.isArray(n)&&!t.arrayAllowed)throw new Error("replace() can only be called with an array if the last parent is a Block or NamedBlock");e=n};if(a.arrayAllowed=s[0]&&(/^(Named)?Block$/.test(s[0].type)||"RawInclude"===s[0].type&&"IncludeFilter"===e.type),t){if(!1===t(e,a))return e;if(Array.isArray(e))return o(e)}switch(s.unshift(e),e.type){case"NamedBlock":case"Block":e.nodes=o(e.nodes);break;case"Case":case"Filter":case"Mixin":case"Tag":case"InterpolatedTag":case"When":case"Code":case"While":e.block&&(e.block=r(e.block,t,n,i));break;case"Each":e.block&&(e.block=r(e.block,t,n,i)),e.alternate&&(e.alternate=r(e.alternate,t,n,i));break;case"Conditional":e.consequent&&(e.consequent=r(e.consequent,t,n,i)),e.alternate&&(e.alternate=r(e.alternate,t,n,i));break;case"Include":r(e.block,t,n,i),r(e.file,t,n,i);break;case"Extends":r(e.file,t,n,i);break;case"RawInclude":e.filters=o(e.filters),r(e.file,t,n,i);break;case"Attrs":case"BlockComment":case"Comment":case"Doctype":case"IncludeFilter":case"MixinBlock":case"YieldBlock":case"Text":break;case"FileReference":i.includeDependencies&&e.ast&&r(e.ast,t,n,i);break;default:throw new Error("Unexpected node type "+e.type)}return s.shift(),n&&n(e,a),e}t.exports=r},{}],130:[function(e,t,n){"use strict";function r(e,t){if(t=t||{},"string"!=typeof e)throw new Error('Expected source code to be a string but got "'+typeof e+'"');if("object"!=typeof t)throw new Error('Expected "options" to be an object but got "'+typeof t+'"');e=e.replace(/^\uFEFF/,""),this.input=e.replace(/\r\n|\r/g,"\n"),this.originalInput=this.input,this.filename=t.filename,this.interpolated=t.interpolated||!1,this.lineno=t.startingLine||1,this.colno=t.startingColumn||1,this.plugins=t.plugins||[],this.indentStack=[0],this.indentRe=null,this.interpolationAllowed=!0,this.tokens=[],this.ended=!1}var i=e("assert"),o=e("is-expression"),s=e("character-parser"),a=e("pug-error");t.exports=function(e,t){var n=new r(e,t);return JSON.parse(JSON.stringify(n.getTokens()))},t.exports.Lexer=r,r.prototype={constructor:r,error:function(e,t){throw a(e,t,{line:this.lineno,column:this.colno,filename:this.filename,src:this.originalInput})},assert:function(e,t){e||this.error("ASSERT_FAILED",t)},isExpression:function(e){return o(e,{throw:!0})},assertExpression:function(e,t){try{return this.callLexerFunction("isExpression",e),!0}catch(e){if(t)return!1;if(!e.loc)throw e;this.incrementLine(e.loc.line-1),this.incrementColumn(e.loc.column);var n="Syntax Error: "+e.message.replace(/ \([0-9]+:[0-9]+\)$/,"");this.error("SYNTAX_ERROR",n)}},assertNestingCorrect:function(e){s(e).isNesting()&&this.error("INCORRECT_NESTING","Nesting must match on expression `"+e+"`")},tok:function(e,t){var n={type:e,line:this.lineno,col:this.colno};return void 0!==t&&(n.val=t),n},incrementLine:function(e){this.lineno+=e,e&&(this.colno=1)},incrementColumn:function(e){this.colno+=e},consume:function(e){this.input=this.input.substr(e)},scan:function(e,t){var n;if(n=e.exec(this.input)){var r=n[0].length,i=n[1],o=r-(i?i.length:0),s=this.tok(t,i);return this.consume(r),this.incrementColumn(o),s}},scanEndOfLine:function(e,t){var n;if(n=e.exec(this.input)){var r,i,o=0;(r=/^([ ]+)([^ ]*)/.exec(n[0]))&&(o=r[1].length,this.incrementColumn(o));var s=this.input.substr(n[0].length);if(":"===s[0])return this.input=s,i=this.tok(t,n[1]),this.incrementColumn(n[0].length-o),i;if(/^[ \t]*(\n|$)/.test(s))return this.input=s.substr(/^[ \t]*/.exec(s)[0].length),i=this.tok(t,n[1]),this.incrementColumn(n[0].length-o),i}},bracketExpression:function(e){e=e||0;var t=this.input[e];i("("===t||"{"===t||"["===t,'The start character should be "(", "{" or "["');var n,r=s.BRACKETS[t];try{n=s.parseUntil(this.input,r,{start:e+1})}catch(t){if(void 0!==t.index){for(var o=t.index,a=this.input.substr(e).indexOf("\n"),u=a+e,c=0;o>u&&-1!==a;)this.incrementLine(1),o-=u+1,c+=u+1,a=u=this.input.substr(c).indexOf("\n");this.incrementColumn(o)}throw"CHARACTER_PARSER:END_OF_STRING_REACHED"===t.code?this.error("NO_END_BRACKET","The end of the string reached with no closing bracket "+r+" found."):"CHARACTER_PARSER:MISMATCHED_BRACKET"===t.code&&this.error("BRACKET_MISMATCH",t.message),t}return n},scanIndentation:function(){var e,t;return this.indentRe?e=this.indentRe.exec(this.input):((e=(t=/^\n(\t*) */).exec(this.input))&&!e[1].length&&(e=(t=/^\n( *)/).exec(this.input)),e&&e[1].length&&(this.indentRe=t)),e},eos:function(){if(!this.input.length){this.interpolated&&this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");for(var e=0;this.indentStack[e];e++)this.tokens.push(this.tok("outdent"));return this.tokens.push(this.tok("eos")),this.ended=!0,!0}},blank:function(){var e;if(e=/^\n[ \t]*\n/.exec(this.input))return this.consume(e[0].length-1),this.incrementLine(1),!0},comment:function(){var e;if(e=/^\/\/(-)?([^\n]*)/.exec(this.input)){this.consume(e[0].length);var t=this.tok("comment",e[2]);return t.buffer="-"!=e[1],this.interpolationAllowed=t.buffer,this.tokens.push(t),this.incrementColumn(e[0].length),this.callLexerFunction("pipelessText"),!0}},interpolation:function(){if(/^#\{/.test(this.input)){var e=this.bracketExpression(1);this.consume(e.end+1);var t=this.tok("interpolation",e.src);this.tokens.push(t),this.incrementColumn(2),this.assertExpression(e.src);var n=e.src.split("\n"),r=n.length-1;return this.incrementLine(r),this.incrementColumn(n[r].length+1),!0}},tag:function(){var e;if(e=/^(\w(?:[-:\w]*\w)?)/.exec(this.input)){var t,n=e[1],r=e[0].length;return this.consume(r),t=this.tok("tag",n),this.tokens.push(t),this.incrementColumn(r),!0}},filter:function(e){var t=this.scan(/^:([\w\-]+)/,"filter"),n=e&&e.inInclude;if(t)return this.tokens.push(t),this.incrementColumn(t.val.length),this.callLexerFunction("attrs"),n||(this.interpolationAllowed=!1,this.callLexerFunction("pipelessText")),!0},doctype:function(){var e=this.scanEndOfLine(/^doctype *([^\n]*)/,"doctype");if(e)return this.tokens.push(e),!0},id:function(){var e=this.scan(/^#([\w-]+)/,"id");if(e)return this.tokens.push(e),this.incrementColumn(e.val.length),!0;/^#/.test(this.input)&&this.error("INVALID_ID",'"'+/.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0]+'" is not a valid ID.')},className:function(){var e=this.scan(/^\.(-?-?[_a-z][_a-z0-9\-]*)/i,"class");if(e)return this.tokens.push(e),this.incrementColumn(e.val.length),!0;/^\.\-/i.test(this.input)&&this.error("INVALID_CLASS_NAME",'If a class name begins with a "-" or "--", it must be followed by a letter or underscore.'),/^\.[0-9]/i.test(this.input)&&this.error("INVALID_CLASS_NAME",'Class names must begin with "-", "_" or a letter.'),/^\./.test(this.input)&&this.error("INVALID_CLASS_NAME",'"'+/.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0]+'" is not a valid class name.  Class names must begin with "-", "_" or a letter and can only contain "_", "-", a-z and 0-9.')},endInterpolation:function(){if(this.interpolated&&"]"===this.input[0])return this.input=this.input.substr(1),this.ended=!0,!0},addText:function(e,t,n,r){if(t+n!==""){n=n||"";var i=this.interpolated?t.indexOf("]"):-1,o=this.interpolationAllowed?t.indexOf("#["):-1,a=this.interpolationAllowed?t.indexOf("\\#["):-1,u=/(\\)?([#!]){((?:.|\n)*)$/.exec(t),c=this.interpolationAllowed&&u?u.index:1/0;if(-1===i&&(i=1/0),-1===o&&(o=1/0),-1===a&&(a=1/0),a!==1/0&&a<i&&a<o&&a<c)return n=n+t.substring(0,a)+"#[",this.addText(e,t.substring(a+3),n,!0);if(o!==1/0&&o<i&&o<a&&o<c){this.tokens.push(this.tok(e,n+t.substring(0,o))),this.incrementColumn(n.length+o),r&&this.incrementColumn(1),this.tokens.push(this.tok("start-pug-interpolation")),this.incrementColumn(2);var l,p=new this.constructor(t.substr(o+2),{filename:this.filename,interpolated:!0,startingLine:this.lineno,startingColumn:this.colno});try{l=p.getTokens()}catch(e){throw e.code&&/^PUG:/.test(e.code)&&(this.colno=e.column,this.error(e.code.substr(4),e.msg)),e}return this.colno=p.colno,this.tokens=this.tokens.concat(l),this.tokens.push(this.tok("end-pug-interpolation")),this.incrementColumn(1),void this.addText(e,p.input)}if(i!==1/0&&i<o&&i<a&&i<c)return n+t.substring(0,i)&&this.addText(e,t.substring(0,i),n),this.ended=!0,void(this.input=t.substr(t.indexOf("]")+1)+this.input);if(c!==1/0){if(u[1])return n=n+t.substring(0,c)+"#{",this.addText(e,t.substring(c+3),n);var h=t.substr(0,c);(n||h)&&(h=n+h,this.tokens.push(this.tok(e,h)),this.incrementColumn(h.length));var f,d=u[3],m=this.tok("interpolated-code");this.incrementColumn(2);try{f=s.parseUntil(d,"}")}catch(e){if(void 0!==e.index&&this.incrementColumn(e.index),"CHARACTER_PARSER:END_OF_STRING_REACHED"===e.code)this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");else{if("CHARACTER_PARSER:MISMATCHED_BRACKET"!==e.code)throw e;this.error("BRACKET_MISMATCH",e.message)}}return m.mustEscape="#"===u[2],m.buffer=!0,m.val=f.src,this.assertExpression(f.src),this.tokens.push(m),void(f.end+1<d.length?(d=d.substr(f.end+1),this.incrementColumn(f.end+1),this.addText(e,d)):this.incrementColumn(d.length))}t=n+t,this.tokens.push(this.tok(e,t)),this.incrementColumn(t.length)}},text:function(){var e=this.scan(/^(?:\| ?| )([^\n]+)/,"text")||this.scan(/^( )/,"text")||this.scan(/^\|( ?)/,"text");if(e)return this.addText("text",e.val),!0},textHtml:function(){var e=this.scan(/^(<[^\n]*)/,"text-html");if(e)return this.addText("text-html",e.val),!0},dot:function(){var e;if(e=this.scanEndOfLine(/^\./,"dot"))return this.tokens.push(e),this.callLexerFunction("pipelessText"),!0},extends:function(){var e=this.scan(/^extends?(?= |$|\n)/,"extends");if(e)return this.tokens.push(e),this.callLexerFunction("path")||this.error("NO_EXTENDS_PATH","missing path for extends"),!0;this.scan(/^extends?\b/)&&this.error("MALFORMED_EXTENDS","malformed extends")},prepend:function(){var e;if(e=/^(?:block +)?prepend +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="prepend",this.tokens.push(r),!0}},append:function(){var e;if(e=/^(?:block +)?append +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="append",this.tokens.push(r),!0}},block:function(){var e;if(e=/^block +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="replace",this.tokens.push(r),!0}},mixinBlock:function(){var e;if(e=this.scanEndOfLine(/^block/,"mixin-block"))return this.tokens.push(e),!0},yield:function(){var e=this.scanEndOfLine(/^yield/,"yield");if(e)return this.tokens.push(e),!0},include:function(){var e=this.scan(/^include(?=:| |$|\n)/,"include");if(e){for(this.tokens.push(e);this.callLexerFunction("filter",{inInclude:!0}););return this.callLexerFunction("path")||(/^[^ \n]+/.test(this.input)?this.fail():this.error("NO_INCLUDE_PATH","missing path for include")),!0}this.scan(/^include\b/)&&this.error("MALFORMED_INCLUDE","malformed include")},path:function(){var e=this.scanEndOfLine(/^ ([^\n]+)/,"path");if(e&&(e.val=e.val.trim()))return this.tokens.push(e),!0},case:function(){var e=this.scanEndOfLine(/^case +([^\n]+)/,"case");if(e)return this.incrementColumn(-e.val.length),this.assertExpression(e.val),this.incrementColumn(e.val.length),this.tokens.push(e),!0;this.scan(/^case\b/)&&this.error("NO_CASE_EXPRESSION","missing expression for case")},when:function(){var e=this.scanEndOfLine(/^when +([^:\n]+)/,"when");if(e){for(var t=s(e.val);t.isNesting()||t.isString();){var n=/:([^:\n]+)/.exec(this.input);if(!n)break;e.val+=n[0],this.consume(n[0].length),this.incrementColumn(n[0].length),t=s(e.val)}return this.incrementColumn(-e.val.length),this.assertExpression(e.val),this.incrementColumn(e.val.length),this.tokens.push(e),!0}this.scan(/^when\b/)&&this.error("NO_WHEN_EXPRESSION","missing expression for when")},default:function(){var e=this.scanEndOfLine(/^default/,"default");if(e)return this.tokens.push(e),!0;this.scan(/^default\b/)&&this.error("DEFAULT_WITH_EXPRESSION","default should not have an expression")},call:function(){var e,t,n;if(t=/^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)){if(t[3])n=t[0].length,this.consume(n),e=this.tok("call",t[3]);else{var r=this.bracketExpression(2+t[1].length);n=r.end+1,this.consume(n),this.assertExpression(r.src),e=this.tok("call","#{"+r.src+"}")}if(this.incrementColumn(n),e.args=null,t=/^ *\(/.exec(this.input)){var i=this.bracketExpression(t[0].length-1);if(!/^\s*[-\w]+ *=/.test(i.src)){this.incrementColumn(1),this.consume(i.end+1),e.args=i.src,this.assertExpression("["+e.args+"]");for(var o=0;o<=e.args.length;o++)"\n"===e.args[o]?this.incrementLine(1):this.incrementColumn(1)}}return this.tokens.push(e),!0}},mixin:function(){var e;if(e=/^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)){this.consume(e[0].length);var t=this.tok("mixin",e[1]);return t.args=e[2]||null,this.tokens.push(t),!0}},conditional:function(){var e;if(e=/^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)){this.consume(e[0].length);var t=e[1].replace(/ /g,"-"),n=e[2]&&e[2].trim(),r=this.tok(t,n);switch(this.incrementColumn(e[0].length-n.length),t){case"if":case"else-if":this.assertExpression(n);break;case"unless":this.assertExpression(n),r.val="!("+n+")",r.type="if";break;case"else":n&&this.error("ELSE_CONDITION","`else` cannot have a condition, perhaps you meant `else if`")}return this.tokens.push(r),!0}},while:function(){var e;if(e=/^while +([^\n]+)/.exec(this.input))return this.consume(e[0].length),this.assertExpression(e[1]),this.tokens.push(this.tok("while",e[1])),!0;this.scan(/^while\b/)&&this.error("NO_WHILE_EXPRESSION","missing expression for while")},each:function(){var e;if(e=/^(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)){this.consume(e[0].length);var t=this.tok("each",e[1]);return t.key=e[2]||null,this.incrementColumn(e[0].length-e[3].length),this.assertExpression(e[3]),t.code=e[3],this.incrementColumn(e[3].length),this.tokens.push(t),!0}this.scan(/^(?:each|for)\b/)&&this.error("MALFORMED_EACH","malformed each"),(e=/^- *(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? +in +([^\n]+)/.exec(this.input))&&this.error("MALFORMED_EACH",'Pug each and for should no longer be prefixed with a dash ("-"). They are pug keywords and not part of JavaScript.')},code:function(){var e;if(e=/^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)){var t=e[1],n=e[2],r=0;if(this.interpolated){var i;try{i=s.parseUntil(n,"]")}catch(t){if(void 0!==t.index&&this.incrementColumn(e[0].length-n.length+t.index),"CHARACTER_PARSER:END_OF_STRING_REACHED"===t.code)this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");else{if("CHARACTER_PARSER:MISMATCHED_BRACKET"!==t.code)throw t;this.error("BRACKET_MISMATCH",t.message)}}r=n.length-i.end,n=i.src}var o=e[0].length-r;this.consume(o);var a=this.tok("code",n);return a.mustEscape="="===t.charAt(0),a.buffer="="===t.charAt(0)||"="===t.charAt(1),this.incrementColumn(e[0].length-e[2].length),a.buffer&&this.assertExpression(n),this.tokens.push(a),this.incrementColumn(n.length),!0}},blockCode:function(){var e;if(e=this.scanEndOfLine(/^-/,"blockcode"))return this.tokens.push(e),this.interpolationAllowed=!1,this.callLexerFunction("pipelessText"),!0},attrs:function(){if("("==this.input.charAt(0)){var e=this.lineno;this.tokens.push(this.tok("start-attributes"));var t=this.bracketExpression().end,n=this.input.substr(1,t-1);this.incrementColumn(1),this.assertNestingCorrect(n);var r="",i=this;this.consume(t+1);for(var o,a=/[ \n\t]/,u=/['"]/,c=!0,l="",p="",h=s.defaultState(),f=e,d=this.colno,m="key",g=function(e){if(""===l.trim())return d=this.colno,!1;if(e===n.length)return!0;if("key"===m){if(a.test(n[e]))for(t=e;t<n.length;t++)if(!a.test(n[t]))return"="!==n[t]&&"!"!==n[t]&&","!==n[t];return","===n[e]}if("value"===m){if(h.isNesting()||h.isString())return!1;if(a.test(n[e]))for(var t=e;t<n.length;t++)if(!a.test(n[t]))return(!s.isPunctuator(n[t])||u.test(n[t])||":"===n[t])&&i.assertExpression(p,!0);return","===n[e]&&i.assertExpression(p,!0)}},v=0;v<=n.length;v++){if(g.call(this,v)){if(p.trim()){var y=this.colno;this.colno=o,this.assertExpression(p),this.colno=y}p=p.trim(),l=l.trim(),l=l.replace(/^['"]|['"]$/g,"");var b=this.tok("attribute");b.name=l,b.val=""==p||p,b.col=d,b.mustEscape=c,this.tokens.push(b),l=p="",m="key",c=!1,this.lineno=f}else switch(m){case"key-char":n[v]===r?(m="key",v+1<n.length&&!/[ ,!=\n\t]/.test(n[v+1])&&this.error("INVALID_KEY_CHARACTER",'Unexpected character "'+n[v+1]+'" expected ` `, `\\n`, `\t`, `,`, `!` or `=`')):l+=n[v];break;case"key":""===l&&u.test(n[v])?(m="key-char",r=n[v]):"!"===n[v]||"="===n[v]?(c="!"!==n[v],"!"===n[v]&&(this.incrementColumn(1),v++),"="!==n[v]&&this.error("INVALID_KEY_CHARACTER","Unexpected character "+n[v]+" expected `=`"),m="value",o=this.colno+1,h=s.defaultState()):l+=n[v];break;case"value":h=s.parseChar(n[v],h),p+=n[v]}"\n"===n[v]?(f++,this.colno=1,l.trim()||(this.lineno=f)):void 0!==n[v]&&this.incrementColumn(1)}return this.lineno=e+(n.match(/\n/g)||[]).length,this.tokens.push(this.tok("end-attributes")),this.incrementColumn(1),!0}},attributesBlock:function(){if(/^&attributes\b/.test(this.input)){var e=11;this.consume(e);var t=this.tok("&attributes");this.incrementColumn(e);var n=this.bracketExpression();return e=n.end+1,this.consume(e),t.val=n.src,this.tokens.push(t),this.incrementColumn(e),!0}},indent:function(){var e=this.scanIndentation();if(e){var t=e[1].length;if(this.incrementLine(1),this.consume(t+1)," "!=this.input[0]&&"\t"!=this.input[0]||this.error("INVALID_INDENTATION","Invalid indentation, you can use tabs or spaces but not both"),"\n"==this.input[0])return this.interpolationAllowed=!0,this.tok("newline");if(t<this.indentStack[0])for(;this.indentStack[0]>t;)this.indentStack[1]<t&&this.error("INCONSISTENT_INDENTATION","Inconsistent indentation. Expecting either "+this.indentStack[1]+" or "+this.indentStack[0]+" spaces/tabs."),this.colno=this.indentStack[1]+1,this.tokens.push(this.tok("outdent")),this.indentStack.shift();else t&&t!=this.indentStack[0]?(this.tokens.push(this.tok("indent",t)),this.colno=1+t,this.indentStack.unshift(t)):(this.tokens.push(this.tok("newline")),this.colno=1+(this.indentStack[0]||0));return this.interpolationAllowed=!0,!0}},pipelessText:function e(t){for(;this.callLexerFunction("blank"););var n=this.scanIndentation();if((t=t||n&&n[1].length)>this.indentStack[0]){this.tokens.push(this.tok("start-pipeless-text"));var r,i=[],o=0;do{var s=this.input.substr(o+1).indexOf("\n");-1==s&&(s=this.input.length-o-1);var a=this.input.substr(o+1,s),u=this.indentRe.exec("\n"+a),c=u&&u[1].length;if(r=c>=t||!a.trim())o+=a.length+1,i.push(a.substr(t));else if(c>this.indentStack[0])return this.tokens.pop(),e.call(this,u[1].length)}while(this.input.length-o&&r);for(this.consume(o);0===this.input.length&&""===i[i.length-1];)i.pop();return i.forEach(function(e,n){this.incrementLine(1),0!==n&&this.tokens.push(this.tok("newline")),this.incrementColumn(t),this.addText("text",e)}.bind(this)),this.tokens.push(this.tok("end-pipeless-text")),!0}},slash:function(){var e=this.scan(/^\//,"slash");if(e)return this.tokens.push(e),!0},colon:function(){var e=this.scan(/^: +/,":");if(e)return this.tokens.push(e),!0},fail:function(){this.error("UNEXPECTED_TEXT",'unexpected text "'+this.input.substr(0,5)+'"')},callLexerFunction:function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);for(var r=[this].concat(t),n=0;n<this.plugins.length;n++){var i=this.plugins[n];if(i[e]&&i[e].apply(i,r))return!0}return this[e].apply(this,t)},advance:function(){return this.callLexerFunction("blank")||this.callLexerFunction("eos")||this.callLexerFunction("endInterpolation")||this.callLexerFunction("yield")||this.callLexerFunction("doctype")||this.callLexerFunction("interpolation")||this.callLexerFunction("case")||this.callLexerFunction("when")||this.callLexerFunction("default")||this.callLexerFunction("extends")||this.callLexerFunction("append")||this.callLexerFunction("prepend")||this.callLexerFunction("block")||this.callLexerFunction("mixinBlock")||this.callLexerFunction("include")||this.callLexerFunction("mixin")||this.callLexerFunction("call")||this.callLexerFunction("conditional")||this.callLexerFunction("each")||this.callLexerFunction("while")||this.callLexerFunction("tag")||this.callLexerFunction("filter")||this.callLexerFunction("blockCode")||this.callLexerFunction("code")||this.callLexerFunction("id")||this.callLexerFunction("dot")||this.callLexerFunction("className")||this.callLexerFunction("attrs")||this.callLexerFunction("attributesBlock")||this.callLexerFunction("indent")||this.callLexerFunction("text")||this.callLexerFunction("textHtml")||this.callLexerFunction("comment")||this.callLexerFunction("slash")||this.callLexerFunction("colon")||this.fail()},getTokens:function(){for(;!this.ended;)this.callLexerFunction("advance");return this.tokens}}},{assert:7,"character-parser":12,"is-expression":23,"pug-error":42}],131:[function(e,t,n){(function(e){!function(r){function i(e){throw new RangeError(B[e])}function o(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function s(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+o((e=e.replace(F,".")).split("."),t).join(".")}function a(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t);return r}function u(e){return o(e,function(e){var t="";return e>65535&&(t+=N((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=N(e)}).join("")}function c(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:_}function l(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function p(e,t,n){var r=0;for(e=n?L(e/E):e>>1,e+=L(e/t);e>D*w>>1;r+=_)e=L(e/D);return L(r+(D+1)*e/(e+k))}function h(e){var t,n,r,o,s,a,l,h,f,d,m=[],g=e.length,v=0,y=C,k=A;for((n=e.lastIndexOf(S))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&i("not-basic"),m.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<g;){for(s=v,a=1,l=_;o>=g&&i("invalid-input"),((h=c(e.charCodeAt(o++)))>=_||h>L((b-v)/a))&&i("overflow"),v+=h*a,f=l<=k?x:l>=k+w?w:l-k,!(h<f);l+=_)a>L(b/(d=_-f))&&i("overflow"),a*=d;k=p(v-s,t=m.length+1,0==s),L(v/t)>b-y&&i("overflow"),y+=L(v/t),v%=t,m.splice(v++,0,y)}return u(m)}function f(e){var t,n,r,o,s,u,c,h,f,d,m,g,v,y,k,E=[];for(g=(e=a(e)).length,t=C,n=0,s=A,u=0;u<g;++u)(m=e[u])<128&&E.push(N(m));for(r=o=E.length,o&&E.push(S);r<g;){for(c=b,u=0;u<g;++u)(m=e[u])>=t&&m<c&&(c=m);for(c-t>L((b-n)/(v=r+1))&&i("overflow"),n+=(c-t)*v,t=c,u=0;u<g;++u)if((m=e[u])<t&&++n>b&&i("overflow"),m==t){for(h=n,f=_;d=f<=s?x:f>=s+w?w:f-s,!(h<d);f+=_)k=h-d,y=_-d,E.push(N(l(d+k%y,0))),h=L(k/y);E.push(N(l(h,0))),s=p(n,v,r==o),n=0,++r}++n,++t}return E.join("")}var d="object"==typeof n&&n&&!n.nodeType&&n,m="object"==typeof t&&t&&!t.nodeType&&t,g="object"==typeof e&&e;g.global!==g&&g.window!==g&&g.self!==g||(r=g);var v,y,b=2147483647,_=36,x=1,w=26,k=38,E=700,A=72,C=128,S="-",T=/^xn--/,O=/[^\x20-\x7E]/,F=/[\x2E\u3002\uFF0E\uFF61]/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=_-x,L=Math.floor,N=String.fromCharCode;if(v={version:"1.4.1",ucs2:{decode:a,encode:u},decode:h,encode:f,toASCII:function(e){return s(e,function(e){return O.test(e)?"xn--"+f(e):e})},toUnicode:function(e){return s(e,function(e){return T.test(e)?h(e.slice(4).toLowerCase()):e})}}, true&&__webpack_require__(24))!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return v}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if(d&&m)if(t.exports==d)m.exports=v;else for(y in v)v.hasOwnProperty(y)&&(d[y]=v[y]);else r.punycode=v}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],132:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var p,h,f,d,m=e[l].replace(a,"%20"),g=m.indexOf(n);g>=0?(p=m.substr(0,g),h=m.substr(g+1)):(p=m,h=""),f=decodeURIComponent(p),d=decodeURIComponent(h),r(s,f)?i(s[f])?s[f].push(d):s[f]=[s[f],d]:s[f]=d}return s};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],133:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(i(s))+n;return o(e[s])?r(e[s],function(e){return a+encodeURIComponent(i(e))}).join(t):a+encodeURIComponent(i(e[s]))}).join(t):a?encodeURIComponent(i(a))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],134:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":132,"./encode":133}],135:[function(e,t,n){function r(){this._array=[],this._set=s?new Map:Object.create(null)}var i=e("./util"),o=Object.prototype.hasOwnProperty,s="undefined"!=typeof Map;r.fromArray=function(e,t){for(var n=new r,i=0,o=e.length;i<o;i++)n.add(e[i],t);return n},r.prototype.size=function(){return s?this._set.size:Object.getOwnPropertyNames(this._set).length},r.prototype.add=function(e,t){var n=s?e:i.toSetString(e),r=s?this.has(e):o.call(this._set,n),a=this._array.length;r&&!t||this._array.push(e),r||(s?this._set.set(e,a):this._set[n]=a)},r.prototype.has=function(e){if(s)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},r.prototype.indexOf=function(e){if(s){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},r.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},r.prototype.toArray=function(){return this._array.slice()},n.ArraySet=r},{"./util":144}],136:[function(e,t,n){function r(e){return e<0?1+(-e<<1):0+(e<<1)}function i(e){var t=e>>1;return 1==(1&e)?-t:t}var o=e("./base64");n.encode=function(e){var t,n="",i=r(e);do{t=31&i,(i>>>=5)>0&&(t|=32),n+=o.encode(t)}while(i>0);return n},n.decode=function(e,t,n){var r,s,a=e.length,u=0,c=0;do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&s),u+=(s&=31)<<c,c+=5}while(r);n.value=i(u),n.rest=t}},{"./base64":137}],137:[function(e,t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");n.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},n.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},{}],138:[function(e,t,n){function r(e,t,i,o,s,a){var u=Math.floor((t-e)/2)+e,c=s(i,o[u],!0);return 0===c?u:c>0?t-u>1?r(u,t,i,o,s,a):a==n.LEAST_UPPER_BOUND?t<o.length?t:-1:u:u-e>1?r(e,u,i,o,s,a):a==n.LEAST_UPPER_BOUND?u:e<0?-1:e}n.GREATEST_LOWER_BOUND=1,n.LEAST_UPPER_BOUND=2,n.search=function(e,t,i,o){if(0===t.length)return-1;var s=r(-1,t.length,e,t,i,o||n.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===i(t[s],t[s-1],!0);)--s;return s}},{}],139:[function(e,t,n){function r(e,t){var n=e.generatedLine,r=t.generatedLine,i=e.generatedColumn,s=t.generatedColumn;return r>n||r==n&&s>=i||o.compareByGeneratedPositionsInflated(e,t)<=0}function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var o=e("./util");i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){r(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(o.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},n.MappingList=i},{"./util":144}],140:[function(e,t,n){function r(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function i(e,t){return Math.round(e+Math.random()*(t-e))}function o(e,t,n,s){if(n<s){var a=n-1;r(e,i(n,s),s);for(var u=e[s],c=n;c<s;c++)t(e[c],u)<=0&&r(e,a+=1,c);r(e,a+1,c);var l=a+1;o(e,t,n,l-1),o(e,t,l+1,s)}}n.quickSort=function(e,t){o(e,t,0,e.length-1)}},{}],141:[function(e,t,n){function r(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new s(t):new i(t)}function i(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),r=a.getArg(t,"sources"),i=a.getArg(t,"names",[]),o=a.getArg(t,"sourceRoot",null),s=a.getArg(t,"sourcesContent",null),u=a.getArg(t,"mappings"),l=a.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);r=r.map(String).map(a.normalize).map(function(e){return o&&a.isAbsolute(o)&&a.isAbsolute(e)?a.relative(o,e):e}),this._names=c.fromArray(i.map(String),!0),this._sources=c.fromArray(r,!0),this.sourceRoot=o,this.sourcesContent=s,this._mappings=u,this.file=l}function o(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function s(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),i=a.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new c,this._names=new c;var o={line:-1,column:0};this._sections=i.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=a.getArg(e,"offset"),n=a.getArg(t,"line"),i=a.getArg(t,"column");if(n<o.line||n===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:n+1,generatedColumn:i+1},consumer:new r(a.getArg(e,"map"))}})}var a=e("./util"),u=e("./binary-search"),c=e("./array-set").ArraySet,l=e("./base64-vlq"),p=e("./quick-sort").quickSort;r.fromSourceMap=function(e){return i.fromSourceMap(e)},r.prototype._version=3,r.prototype.__generatedMappings=null,Object.defineProperty(r.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),r.prototype.__originalMappings=null,Object.defineProperty(r.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),r.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},r.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},r.GENERATED_ORDER=1,r.ORIGINAL_ORDER=2,r.GREATEST_LOWER_BOUND=1,r.LEAST_UPPER_BOUND=2,r.prototype.eachMapping=function(e,t,n){var i,o=t||null;switch(n||r.GENERATED_ORDER){case r.GENERATED_ORDER:i=this._generatedMappings;break;case r.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;i.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=a.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,o)},r.prototype.allGeneratedPositionsFor=function(e){var t=a.getArg(e,"line"),n={source:a.getArg(e,"source"),originalLine:t,originalColumn:a.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=a.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var r=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,u.LEAST_UPPER_BOUND);if(i>=0){var o=this._originalMappings[i];if(void 0===e.column)for(var s=o.originalLine;o&&o.originalLine===s;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i];else for(var c=o.originalColumn;o&&o.originalLine===t&&o.originalColumn==c;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i]}return r},n.SourceMapConsumer=r,(i.prototype=Object.create(r.prototype)).consumer=r,i.fromSourceMap=function(e){var t=Object.create(i.prototype),n=t._names=c.fromArray(e._names.toArray(),!0),r=t._sources=c.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),u=t.__generatedMappings=[],l=t.__originalMappings=[],h=0,f=s.length;h<f;h++){var d=s[h],m=new o;m.generatedLine=d.generatedLine,m.generatedColumn=d.generatedColumn,d.source&&(m.source=r.indexOf(d.source),m.originalLine=d.originalLine,m.originalColumn=d.originalColumn,d.name&&(m.name=n.indexOf(d.name)),l.push(m)),u.push(m)}return p(t.__originalMappings,a.compareByOriginalPositions),t},i.prototype._version=3,Object.defineProperty(i.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?a.join(this.sourceRoot,e):e},this)}}),i.prototype._parseMappings=function(e,t){for(var n,r,i,s,u,c=1,h=0,f=0,d=0,m=0,g=0,v=e.length,y=0,b={},_={},x=[],w=[];y<v;)if(";"===e.charAt(y))c++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new o).generatedLine=c,s=y;s<v&&!this._charIsMappingSeparator(e,s);s++);if(r=e.slice(y,s),i=b[r])y+=r.length;else{for(i=[];y<s;)l.decode(e,y,_),u=_.value,y=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");b[r]=i}n.generatedColumn=h+i[0],h=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=d+i[3],d=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),w.push(n),"number"==typeof n.originalLine&&x.push(n)}p(w,a.compareByGeneratedPositionsDeflated),this.__generatedMappings=w,p(x,a.compareByOriginalPositions),this.__originalMappings=x},i.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return u.search(e,t,i,o)},i.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},i.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",a.compareByGeneratedPositionsDeflated,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===t.generatedLine){var o=a.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=a.join(this.sourceRoot,o)));var s=a.getArg(i,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:a.getArg(i,"originalLine",null),column:a.getArg(i,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},i.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e}))},i.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=a.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=a.urlParse(this.sourceRoot))){var r=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(r))return this.sourcesContent[this._sources.indexOf(r)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},i.prototype.generatedPositionFor=function(e){var t=a.getArg(e,"source");if(null!=this.sourceRoot&&(t=a.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:a.getArg(e,"line"),originalColumn:a.getArg(e,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===n.source)return{line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},n.BasicSourceMapConsumer=i,(s.prototype=Object.create(r.prototype)).constructor=r,s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),s.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=u.search(t,this._sections,function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn}),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},s.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(a.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},s.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],i=r.consumer._generatedMappings,o=0;o<i.length;o++){var s=i[o],u=r.consumer._sources.at(s.source);null!==r.consumer.sourceRoot&&(u=a.join(r.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=r.consumer._names.at(s.name);this._names.add(c),c=this._names.indexOf(c);var l={source:u,generatedLine:s.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:s.generatedColumn+(r.generatedOffset.generatedLine===s.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:s.originalLine,originalColumn:s.originalColumn,name:c};this.__generatedMappings.push(l),"number"==typeof l.originalLine&&this.__originalMappings.push(l)}p(this.__generatedMappings,a.compareByGeneratedPositionsDeflated),p(this.__originalMappings,a.compareByOriginalPositions)},n.IndexedSourceMapConsumer=s},{"./array-set":135,"./base64-vlq":136,"./binary-search":138,"./quick-sort":140,"./util":144}],142:[function(e,t,n){function r(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}var i=e("./base64-vlq"),o=e("./util"),s=e("./array-set").ArraySet,a=e("./mapping-list").MappingList;r.prototype._version=3,r.fromSourceMap=function(e){var t=e.sourceRoot,n=new r({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},r.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},r.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},r.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var a=new s,u=new s;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var c=t.source;null==c||a.has(c)||a.add(c);var l=t.name;null==l||u.has(l)||u.add(l)},this),this._sources=a,this._names=u,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))},this)},r.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},r.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,u=0,c=0,l=0,p=0,h="",f=this._mappings.toArray(),d=0,m=f.length;d<m;d++){if(t=f[d],e="",t.generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(d>0){if(!o.compareByGeneratedPositionsInflated(t,f[d-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-p),p=r,e+=i.encode(t.originalLine-1-c),c=t.originalLine-1,e+=i.encode(t.originalColumn-u),u=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-l),l=n)),h+=e}return h},r.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},r.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},r.prototype.toString=function(){return JSON.stringify(this.toJSON())},n.SourceMapGenerator=r},{"./array-set":135,"./base64-vlq":136,"./mapping-list":139,"./util":144}],143:[function(e,t,n){function r(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this[a]=!0,null!=r&&this.add(r)}var i=e("./source-map-generator").SourceMapGenerator,o=e("./util"),s=/(\r?\n)/,a="$$$isSourceNode$$$";r.fromStringWithSourceMap=function(e,t,n){function i(e,t){if(null===e||void 0===e.source)a.add(t);else{var i=n?o.join(n,e.source):e.source;a.add(new r(e.originalLine,e.originalColumn,i,t,e.name))}}var a=new r,u=e.split(s),c=0,l=function(){function e(){return c<u.length?u[c++]:void 0}return e()+(e()||"")},p=1,h=0,f=null;return t.eachMapping(function(e){if(null!==f){if(!(p<e.generatedLine)){var t=(n=u[c]).substr(0,e.generatedColumn-h);return u[c]=n.substr(e.generatedColumn-h),h=e.generatedColumn,i(f,t),void(f=e)}i(f,l()),p++,h=0}for(;p<e.generatedLine;)a.add(l()),p++;if(h<e.generatedColumn){var n=u[c];a.add(n.substr(0,e.generatedColumn)),u[c]=n.substr(e.generatedColumn),h=e.generatedColumn}f=e},this),c<u.length&&(f&&i(f,l()),a.add(u.splice(c).join(""))),t.sources.forEach(function(e){var r=t.sourceContentFor(e);null!=r&&(null!=n&&(e=o.join(n,e)),a.setSourceContent(e,r))}),a},r.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},r.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},r.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},r.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},r.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},r.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},r.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);for(var r=Object.keys(this.sourceContents),t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},r.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},r.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk(function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},n.SourceNode=r},{"./source-map-generator":142,"./util":144}],144:[function(e,t,n){function r(e){var t=e.match(c);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var t=e,o=r(e);if(o){if(!o.path)return e;t=o.path}for(var s,a=n.isAbsolute(t),u=t.split(/\/+/),c=0,l=u.length-1;l>=0;l--)"."===(s=u[l])?u.splice(l,1):".."===s?c++:c>0&&(""===s?(u.splice(l+1,c),c=0):(u.splice(l,2),c--));return""===(t=u.join("/"))&&(t=a?"/":"."),o?(o.path=t,i(o)):t}function s(e){return e}function a(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function u(e,t){return e===t?0:e>t?1:-1}n.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var c=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,l=/^data:.+\,.+$/;n.urlParse=r,n.urlGenerate=i,n.normalize=o,n.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=r(t),s=r(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),i(n);if(n||t.match(l))return t;if(s&&!s.host&&!s.path)return s.host=t,i(s);var a="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=a,i(s)):a},n.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(c)},n.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var p=!("__proto__"in Object.create(null));n.toSetString=p?s:function(e){return a(e)?"$"+e:e},n.fromSetString=p?s:function(e){return a(e)?e.slice(1):e},n.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},n.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!=(r=e.source-t.source)?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},n.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=u(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:u(e.name,t.name)}},{}],145:[function(e,t,n){n.SourceMapGenerator=e("./lib/source-map-generator").SourceMapGenerator,n.SourceMapConsumer=e("./lib/source-map-consumer").SourceMapConsumer,n.SourceNode=e("./lib/source-node").SourceNode},{"./lib/source-map-consumer":141,"./lib/source-map-generator":142,"./lib/source-node":143}],146:[function(e,t,n){"use strict";function r(e){if(!Array.isArray(e))throw new TypeError("tokens must be passed to TokenStream as an array.");this._tokens=e}t.exports=r,r.prototype.lookahead=function(e){if(this._tokens.length<=e)throw new Error("Cannot read past the end of a stream");return this._tokens[e]},r.prototype.peek=function(){if(0===this._tokens.length)throw new Error("Cannot read past the end of a stream");return this._tokens[0]},r.prototype.advance=function(){if(0===this._tokens.length)throw new Error("Cannot read past the end of a stream");return this._tokens.shift()},r.prototype.defer=function(e){this._tokens.unshift(e)}},{}],147:[function(e,t,n){(function(t){function r(e){for(var t=Object.create(null),n=0;n<e.length;++n)t[e[n]]=!0;return t}function i(e){return e.split("")}function o(e,t){return t.indexOf(e)>=0}function s(e,t){for(var n=0,r=t.length;n<r;++n)if(e(t[n]))return t[n]}function a(e,t){if(t<=0)return"";if(1==t)return e;var n=a(e,t>>1);return n+=n,1&t&&(n+=e),n}function u(e){Object.defineProperty(e.prototype,"stack",{get:function(){var e=new Error(this.message);e.name=this.name;try{throw e}catch(e){return e.stack}}})}function c(e,t){this.message=e,this.defs=t}function l(e,t,n){!0===e&&(e={});var r=e||{};if(n)for(var i in r)E(r,i)&&!E(t,i)&&c.croak("`"+i+"` is not a supported option",t);for(var i in t)E(t,i)&&(r[i]=e&&E(e,i)?e[i]:t[i]);return r}function p(e,t){var n=0;for(var r in t)E(t,r)&&(e[r]=t[r],n++);return n}function h(){}function f(){return!1}function d(){return!0}function m(){return this}function g(){return null}function v(e,t){e.indexOf(t)<0&&e.push(t)}function y(e,t){return e.replace(/\{(.+?)\}/g,function(e,n){return t&&t[n]})}function b(e,t){for(var n=e.length;--n>=0;)e[n]===t&&e.splice(n,1)}function _(e,t){function n(e,n){for(var r=[],i=0,o=0,s=0;i<e.length&&o<n.length;)t(e[i],n[o])<=0?r[s++]=e[i++]:r[s++]=n[o++];return i<e.length&&r.push.apply(r,e.slice(i)),o<n.length&&r.push.apply(r,n.slice(o)),r}function r(e){if(e.length<=1)return e;var t=Math.floor(e.length/2),i=e.slice(0,t),o=e.slice(t);return i=r(i),o=r(o),n(i,o)}return e.length<2?e.slice():r(e)}function x(e){function t(e){return JSON.stringify(e).replace(/[\u2028\u2029]/g,function(e){switch(e){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return e})}function n(e){if(1==e.length)return r+="return str === "+t(e[0])+";";r+="switch(str){";for(var n=0;n<e.length;++n)r+="case "+t(e[n])+":";r+="return true}return false;"}e instanceof Array||(e=e.split(" "));var r="",i=[];e:for(s=0;s<e.length;++s){for(var o=0;o<i.length;++o)if(i[o][0].length==e[s].length){i[o].push(e[s]);continue e}i.push([e[s]])}if(i.length>3){i.sort(function(e,t){return t.length-e.length}),r+="switch(str.length){";for(var s=0;s<i.length;++s){var a=i[s];r+="case "+a[0].length+":",n(a)}r+="}"}else n(e);return new Function("str",r)}function w(e,t){for(var n=e.length;--n>=0;)if(!t(e[n]))return!1;return!0}function k(){this._values=Object.create(null),this._size=0}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e){for(var t,n=e.parent(-1),r=0;t=e.parent(r);r++){if(t instanceof oe&&t.body===n)return!0;if(!(t instanceof Ye&&t.car===n||t instanceof We&&t.expression===n&&!(t instanceof Ge)||t instanceof Ke&&t.expression===n||t instanceof Je&&t.expression===n||t instanceof nt&&t.condition===n||t instanceof tt&&t.left===n||t instanceof et&&t.expression===n))return!1;n=t}}function C(e,t,r,i){arguments.length<4&&(i=ie);var o=t=t?t.split(/\s+/):[];i&&i.PROPS&&(t=t.concat(i.PROPS));for(var s="return function AST_"+e+"(props){ if (props) { ",a=t.length;--a>=0;)s+="this."+t[a]+" = props."+t[a]+";";var u=i&&new i;(u&&u.initialize||r&&r.initialize)&&(s+="this.initialize();"),s+="}}";var c=new Function(s)();if(u&&(c.prototype=u,c.BASE=i),i&&i.SUBCLASSES.push(c),c.prototype.CTOR=c,c.PROPS=t||null,c.SELF_PROPS=o,c.SUBCLASSES=[],e&&(c.prototype.TYPE=c.TYPE=e),r)for(a in r)E(r,a)&&(/^\$/.test(a)?c[a.substr(1)]=r[a]:c.prototype[a]=r[a]);return c.DEFMETHOD=function(e,t){this.prototype[e]=t},void 0!==n&&(n["AST_"+e]=c),c}function S(e,t){var n=e.body;if(n instanceof oe)n._walk(t);else for(var r=0,i=n.length;r<i;r++)n[r]._walk(t)}function T(e){this.visit=e,this.stack=[],this.directives=Object.create(null)}function O(e){return e>=97&&e<=122||e>=65&&e<=90||e>=170&&Xt.letter.test(String.fromCharCode(e))}function F(e){return e>=48&&e<=57}function B(e){return F(e)||O(e)}function D(e){return Xt.digit.test(String.fromCharCode(e))}function L(e){return Xt.non_spacing_mark.test(e)||Xt.space_combining_mark.test(e)}function N(e){return Xt.connector_punctuation.test(e)}function M(e){return!It(e)&&/^[a-z_$][a-z0-9_$]*$/i.test(e)}function R(e){return 36==e||95==e||O(e)}function P(e){var t=e.charCodeAt(0);return R(t)||F(t)||8204==t||8205==t||L(e)||N(e)||D(t)}function I(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)}function j(e){if(zt.test(e))return parseInt(e.substr(2),16);if(Ut.test(e))return parseInt(e.substr(1),8);var t=parseFloat(e);return t==e?t:void 0}function V(e,t,n,r,i){this.message=e,this.filename=t,this.line=n,this.col=r,this.pos=i}function z(e,t,n,r,i){throw new V(e,t,n,r,i)}function U(e,t,n){return e.type==t&&(null==n||e.value==n)}function $(e,t,n,r){function i(){return S.text.charAt(S.pos)}function o(e,t){var n=S.text.charAt(S.pos++);if(e&&!n)throw Kt;return Ht(n)?(S.newline_before=S.newline_before||!t,++S.line,S.col=0,t||"\r"!=n||"\n"!=i()||(++S.pos,n="\n")):++S.col,n}function s(e){for(;e-- >0;)o()}function a(e){return S.text.substr(S.pos,e.length)==e}function u(){for(var e=S.text,t=S.pos,n=S.text.length;t<n;++t){var r=e[t];if(Ht(r))return t}return-1}function c(e,t){var n=S.text.indexOf(e,S.pos);if(t&&-1==n)throw Kt;return n}function l(){S.tokline=S.line,S.tokcol=S.col,S.tokpos=S.pos}function p(n,r,i){S.regex_allowed="operator"==n&&!Qt(r)||"keyword"==n&&jt(r)||"punc"==n&&Wt(r),"punc"==n&&"."==r?T=!0:i||(T=!1);var o={type:n,value:r,line:S.tokline,col:S.tokcol,pos:S.tokpos,endline:S.line,endcol:S.col,endpos:S.pos,nlb:S.newline_before,file:t};if(/^(?:num|string|regexp)$/i.test(n)&&(o.raw=e.substring(o.pos,o.endpos)),!i){o.comments_before=S.comments_before,S.comments_before=[];for(var s=0,a=o.comments_before.length;s<a;s++)o.nlb=o.nlb||o.comments_before[s].nlb}return S.newline_before=!1,new re(o)}function h(){for(;qt(i());)o()}function f(e){for(var t,n="",r=0;(t=i())&&e(t,r++);)n+=o();return n}function d(e){z(e,t,S.tokline,S.tokcol,S.tokpos)}function m(e){var t=!1,n=!1,r=!1,i="."==e,o=f(function(o,s){var a=o.charCodeAt(0);switch(a){case 120:case 88:return!r&&(r=!0);case 101:case 69:return!!r||!t&&(t=n=!0);case 45:return n||0==s&&!e;case 43:return n;case n=!1,46:return!(i||r||t)&&(i=!0)}return B(a)});e&&(o=e+o),Ut.test(o)&&C.has_directive("use strict")&&d("Legacy octal literals are not allowed in strict mode");var s=j(o);if(!isNaN(s))return p("num",s);d("Invalid syntax: "+o)}function g(e){var t=o(!0,e);switch(t.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(y(2));case 117:return String.fromCharCode(y(4));case 10:return"";case 13:if("\n"==i())return o(!0,e),""}return t>="0"&&t<="7"?v(t):t}function v(e){var t=i();return t>="0"&&t<="7"&&(e+=o(!0))[0]<="3"&&(t=i())>="0"&&t<="7"&&(e+=o(!0)),"0"===e?"\0":(e.length>0&&C.has_directive("use strict")&&d("Legacy octal escape sequences are not allowed in strict mode"),String.fromCharCode(parseInt(e,8)))}function y(e){for(var t=0;e>0;--e){var n=parseInt(o(!0),16);isNaN(n)&&d("Invalid hex-character pattern in string"),t=t<<4|n}return t}function b(e){var t,n=S.regex_allowed,r=u();return-1==r?(t=S.text.substr(S.pos),S.pos=S.text.length):(t=S.text.substring(S.pos,r),S.pos=r),S.col=S.tokcol+(S.pos-S.tokpos),S.comments_before.push(p(e,t,!0)),S.regex_allowed=n,C}function _(){for(var e,t,n=!1,r="",s=!1;null!=(e=i());)if(n)"u"!=e&&d("Expecting UnicodeEscapeSequence -- uXXXX"),P(e=g())||d("Unicode char: "+e.charCodeAt(0)+" is not valid in identifier"),r+=e,n=!1;else if("\\"==e)s=n=!0,o();else{if(!P(e))break;r+=o()}return Rt(r)&&s&&(t=r.charCodeAt(0).toString(16).toUpperCase(),r="\\u"+"0000".substr(t.length)+t+r.slice(1)),r}function x(e){function t(e){if(!i())return e;var n=e+i();return $t(n)?(o(),t(n)):e}return p("operator",t(e||o()))}function w(){switch(o(),i()){case"/":return o(),b("comment1");case"*":return o(),D()}return S.regex_allowed?L(""):x("/")}function k(){return o(),F(i().charCodeAt(0))?m("."):p("punc",".")}function E(){var e=_();return T?p("name",e):Pt(e)?p("atom",e):Rt(e)?$t(e)?p("operator",e):p("keyword",e):p("name",e)}function A(e,t){return function(n){try{return t(n)}catch(t){if(t!==Kt)throw t;d(e)}}}function C(e){if(null!=e)return L(e);for(r&&0==S.pos&&a("#!")&&(l(),s(2),b("comment5"));;){if(h(),l(),n){if(a("\x3c!--")){s(4),b("comment3");continue}if(a("--\x3e")&&S.newline_before){s(3),b("comment4");continue}}var t=i();if(!t)return p("eof");var u=t.charCodeAt(0);switch(u){case 34:case 39:return O(t);case 46:return k();case 47:var c=w();if(c===C)continue;return c}if(F(u))return m();if(Gt(t))return p("punc",o());if(Vt(t))return x();if(92==u||R(u))return E();break}d("Unexpected character '"+t+"'")}var S={text:e,filename:t,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[],directives:{},directive_stack:[]},T=!1,O=A("Unterminated string constant",function(e){for(var t=o(),n="";;){var r=o(!0,!0);if("\\"==r)r=g(!0);else if(Ht(r))d("Unterminated string constant");else if(r==t)break;n+=r}var i=p("string",n);return i.quote=e,i}),D=A("Unterminated multiline comment",function(){var e=S.regex_allowed,t=c("*/",!0),n=S.text.substring(S.pos,t).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return s(n.length+2),S.comments_before.push(p("comment2",n,!0)),S.regex_allowed=e,C}),L=A("Unterminated regular expression",function(e){for(var t,n=!1,r=!1;t=o(!0);)if(Ht(t))d("Unexpected line terminator");else if(n)e+="\\"+t,n=!1;else if("["==t)r=!0,e+=t;else if("]"==t&&r)r=!1,e+=t;else{if("/"==t&&!r)break;"\\"==t?n=!0:e+=t}var i=_();try{return p("regexp",new RegExp(e,i))}catch(e){d(e.message)}});return C.context=function(e){return e&&(S=e),S},C.add_directive=function(e){S.directive_stack[S.directive_stack.length-1].push(e),void 0===S.directives[e]?S.directives[e]=1:S.directives[e]++},C.push_directives_stack=function(){S.directive_stack.push([])},C.pop_directives_stack=function(){for(var e=S.directive_stack[S.directive_stack.length-1],t=0;t<e.length;t++)S.directives[e[t]]--;S.directive_stack.pop()},C.has_directive=function(e){return void 0!==S.directives[e]&&S.directives[e]>0},C}function q(e,t){function n(e,t){return U(V.token,e,t)}function r(){return V.peeked||(V.peeked=V.input())}function i(){return V.prev=V.token,V.peeked?(V.token=V.peeked,V.peeked=null):V.token=V.input(),V.in_directives=V.in_directives&&("string"==V.token.type||n("punc",";")),V.token}function o(){return V.prev}function a(e,t,n,r){var i=V.input.context();z(e,i.filename,null!=t?t:i.tokline,null!=n?n:i.tokcol,null!=r?r:i.tokpos)}function u(e,t){a(t,e.line,e.col)}function c(e){null==e&&(e=V.token),u(e,"Unexpected token: "+e.type+" ("+e.value+")")}function p(e,t){if(n(e,t))return i();u(V.token,"Unexpected token "+V.token.type+" Â«"+V.token.value+"Â», expected "+e+" Â«"+t+"Â»")}function h(e){return p("punc",e)}function f(){return!t.strict&&(V.token.nlb||n("eof")||n("punc","}"))}function d(e){n("punc",";")?i():e||f()||c()}function m(){h("(");var e=ie(!0);return h(")"),e}function g(e){return function(){var t=V.token,n=e(),r=o();return n.start=t,n.end=r,n}}function v(){(n("operator","/")||n("operator","/="))&&(V.peeked=null,V.token=V.input(V.token.value.substr(1)))}function y(){var e=N(bt);s(function(t){return t.name==e.name},V.labels)&&a("Label "+e.name+" defined twice"),h(":"),V.labels.push(e);var t=q();return V.labels.pop(),t instanceof de||e.references.forEach(function(t){t instanceof Le&&(t=t.label.start,a("Continue label `"+e.name+"` refers to non-IterationStatement.",t.line,t.col,t.pos))}),new fe({body:t,label:e})}function b(e){return new ue({body:(e=ie(!0),d(),e)})}function _(e){var t,n=null;f()||(n=N(xt,!0)),null!=n?((t=s(function(e){return e.name==n.name},V.labels))||a("Undefined label "+n.name),n.thedef=t):0==V.in_loop&&a(e.TYPE+" not inside a loop or switch"),d();var r=new e({label:n});return t&&t.references.push(r),r}function x(){h("(");var e=null;return!n("punc",";")&&(e=n("keyword","var")?(i(),W(!0)):ie(!0,!0),n("operator","in"))?(e instanceof $e&&e.definitions.length>1&&a("Only one variable declaration allowed in for..in loop"),i(),k(e)):w(e)}function w(e){h(";");var t=n("punc",";")?null:ie(!0);h(";");var r=n("punc",")")?null:ie(!0);return h(")"),new ye({init:e,condition:t,step:r,body:j(q)})}function k(e){var t=e instanceof $e?e.definitions[0].name:null,n=ie(!0);return h(")"),new be({init:e,name:t,object:n,body:j(q)})}function E(){var e=m(),t=q(),r=null;return n("keyword","else")&&(i(),r=q()),new Ne({condition:e,body:t,alternative:r})}function A(){h("{");for(var e=[];!n("punc","}");)n("eof")&&c(),e.push(q());return i(),e}function C(){h("{");for(var e,t=[],r=null,s=null;!n("punc","}");)n("eof")&&c(),n("keyword","case")?(s&&(s.end=o()),r=[],s=new Ie({start:(e=V.token,i(),e),expression:ie(!0),body:r}),t.push(s),h(":")):n("keyword","default")?(s&&(s.end=o()),r=[],s=new Pe({start:(e=V.token,i(),h(":"),e),body:r}),t.push(s)):(r||c(),r.push(q()));return s&&(s.end=o()),i(),t}function S(){var e=A(),t=null,r=null;if(n("keyword","catch")){u=V.token;i(),h("(");var s=N(yt);h(")"),t=new Ve({start:u,argname:s,body:A(),end:o()})}if(n("keyword","finally")){var u=V.token;i(),r=new ze({start:u,body:A(),end:o()})}return t||r||a("Missing catch/finally blocks"),new je({body:e,bcatch:t,bfinally:r})}function T(e,t){for(var r=[];r.push(new He({start:V.token,name:N(t?dt:ft),value:n("operator","=")?(i(),ie(!1,e)):null,end:o()})),n("punc",",");)i();return r}function O(){var e,t=V.token;switch(t.type){case"name":case"keyword":e=L(_t);break;case"num":e=new At({start:t,end:t,value:t.value});break;case"string":e=new Et({start:t,end:t,value:t.value,quote:t.quote});break;case"regexp":e=new Ct({start:t,end:t,value:t.value});break;case"atom":switch(t.value){case"false":e=new Nt({start:t,end:t});break;case"true":e=new Mt({start:t,end:t});break;case"null":e=new Tt({start:t,end:t})}break;case"operator":I(t.value)||a("Invalid getter/setter name: "+t.value,t.line,t.col,t.pos),e=L(_t)}return i(),e}function F(e,t,r){for(var o=!0,s=[];!n("punc",e)&&(o?o=!1:h(","),!t||!n("punc",e));)n("punc",",")&&r?s.push(new Bt({start:V.token,end:V.token})):s.push(ie(!1));return i(),s}function B(){var e=V.token;switch(e.type){case"operator":Rt(e.value)||c();case"num":case"string":case"name":case"keyword":case"atom":return i(),e.value;default:c()}}function D(){var e=V.token;return"name"!=e.type&&c(),i(),e.value}function L(e){var t=V.token.value;return new("this"==t?wt:e)({name:String(t),start:V.token,end:V.token})}function N(e,t){if(!n("name"))return t||a("Name expected"),null;var r=L(e);return i(),r}function M(e,t,n){var r=t.value;return"++"!=r&&"--"!=r||P(n)||a("Invalid use of "+r+" operator",t.line,t.col,t.pos),new e({operator:r,expression:n})}function R(e){return te(ee(!0),0,e)}function P(e){return!!t.cli||(e instanceof Xe||e instanceof _t)}function j(e){++V.in_loop;var t=e();return--V.in_loop,t}t=l(t,{bare_returns:!1,cli:!1,expression:!1,filename:null,html5_comments:!0,shebang:!0,strict:!1,toplevel:null});var V={input:"string"==typeof e?$(e,t.filename,t.html5_comments,t.shebang):e,token:null,prev:null,peeked:null,in_function:0,in_directives:!0,in_loop:0,labels:[]};V.token=i();var q=g(function(){switch(v(),V.token.type){case"string":if(V.in_directives){var e=r();-1==V.token.raw.indexOf("\\")&&(e.nlb||U(e,"eof")||U(e,"punc",";")||U(e,"punc","}"))?V.input.add_directive(V.token.value):V.in_directives=!1}var s=V.in_directives,u=b();return s?new ae(u.body):u;case"num":case"regexp":case"operator":case"atom":return b();case"name":return U(r(),"punc",":")?y():b();case"punc":switch(V.token.value){case"{":return new le({start:V.token,body:A(),end:o()});case"[":case"(":return b();case";":return V.in_directives=!1,i(),new pe;default:c()}case"keyword":switch(V.token.value){case"break":return i(),_(De);case"continue":return i(),_(Le);case"debugger":return i(),d(),new se;case"do":i();var l=j(q);p("keyword","while");var h=m();return d(!0),new ge({body:l,condition:h});case"while":return i(),new ve({condition:m(),body:j(q)});case"for":return i(),x();case"function":return i(),H(Ce);case"if":return i(),E();case"return":0!=V.in_function||t.bare_returns||a("'return' outside of function"),i();g=null;return n("punc",";")?i():f()||(g=ie(!0),d()),new Oe({value:g});case"switch":return i(),new Me({expression:m(),body:j(C)});case"throw":i(),V.token.nlb&&a("Illegal newline after 'throw'");var g=ie(!0);return d(),new Fe({value:g});case"try":return i(),S();case"var":i();w=W();return d(),w;case"const":i();var w=G();return d(),w;case"with":return V.input.has_directive("use strict")&&a("Strict mode may not include a with statement"),i(),new _e({expression:m(),body:q()})}}c()}),H=function(e){var t=e===Ce,r=n("name")?N(t?gt:vt):null;return t&&!r&&c(),h("("),new e({name:r,argnames:function(e,t){for(;!n("punc",")");)e?e=!1:h(","),t.push(N(mt));return i(),t}(!0,[]),body:function(e,t){++V.in_function,V.in_directives=!0,V.input.push_directives_stack(),V.in_loop=0,V.labels=[];var n=A();return V.input.pop_directives_stack(),--V.in_function,V.in_loop=e,V.labels=t,n}(V.in_loop,V.labels)})},W=function(e){return new $e({start:o(),definitions:T(e,!1),end:o()})},G=function(){return new qe({start:o(),definitions:T(!1,!0),end:o()})},Y=function(e){var t=V.token;p("operator","new");var r,s=X(!1);return n("punc","(")?(i(),r=F(")")):r=[],Z(new Ge({start:t,expression:s,args:r,end:o()}),e)},X=function(e){if(n("operator","new"))return Y(e);var t=V.token;if(n("punc")){switch(t.value){case"(":i();var r=ie(!0);return r.start=t,r.end=V.token,h(")"),Z(r,e);case"[":return Z(K(),e);case"{":return Z(Q(),e)}c()}if(n("keyword","function")){i();var s=H(Ae);return s.start=t,s.end=o(),Z(s,e)}if(nn[V.token.type])return Z(O(),e);c()},K=g(function(){return h("["),new it({elements:F("]",!t.strict,!0)})}),J=g(function(){return H(Ee)}),Q=g(function(){h("{");for(var e=!0,r=[];!n("punc","}")&&(e?e=!1:h(","),t.strict||!n("punc","}"));){var s=V.token,a=s.type,u=B();if("name"==a&&!n("punc",":")){var c=new pt({start:V.token,name:B(),end:o()});if("get"==u){r.push(new ct({start:s,key:c,value:J(),end:o()}));continue}if("set"==u){r.push(new ut({start:s,key:c,value:J(),end:o()}));continue}}h(":"),r.push(new at({start:s,quote:s.quote,key:u,value:ie(!1),end:o()}))}return i(),new ot({properties:r})}),Z=function(e,t){var r=e.start;if(n("punc","."))return i(),Z(new Ke({start:r,expression:e,property:D(),end:o()}),t);if(n("punc","[")){i();var s=ie(!0);return h("]"),Z(new Je({start:r,expression:e,property:s,end:o()}),t)}return t&&n("punc","(")?(i(),Z(new We({start:r,expression:e,args:F(")"),end:o()}),!0)):e},ee=function(e){var t=V.token;if(n("operator")&&Jt(t.value)){i(),v();var r=M(Ze,t,ee(e));return r.start=t,r.end=o(),r}for(var s=X(e);n("operator")&&Qt(V.token.value)&&!V.token.nlb;)(s=M(et,V.token,s)).start=t,s.end=V.token,i();return s},te=function(e,t,r){var o=n("operator")?V.token.value:null;"in"==o&&r&&(o=null);var s=null!=o?en[o]:null;if(null!=s&&s>t){i();var a=te(ee(!0),s,r);return te(new tt({start:e.start,left:e,operator:o,right:a,end:a.end}),t,r)}return e},ne=function(e){var t=V.token,r=R(e);if(n("operator","?")){i();var s=ie(!1);return h(":"),new nt({start:t,condition:r,consequent:s,alternative:ie(!1,e),end:o()})}return r},re=function(e){var t=V.token,r=ne(e),s=V.token.value;if(n("operator")&&Zt(s)){if(P(r))return i(),new rt({start:t,left:r,operator:s,right:re(e),end:o()});a("Invalid assignment")}return r},ie=function(e,t){var o=V.token,s=re(t);return e&&n("punc",",")?(i(),new Ye({start:o,car:s,cdr:ie(!0,t),end:r()})):s};return t.expression?ie(!0):function(){var e=V.token,r=[];for(V.input.push_directives_stack();!n("eof");)r.push(q());V.input.pop_directives_stack();var i=o(),s=t.toplevel;return s?(s.body=s.body.concat(r),s.end=i):s=new we({start:e,body:r,end:i}),s}()}function H(e,t){T.call(this),this.before=e,this.after=t}function W(e,t,n){this.name=n.name,this.orig=[n],this.scope=e,this.references=[],this.global=!1,this.mangled_name=null,this.undeclared=!1,this.index=t,this.id=W.next_id++}function G(e){return"comment2"==e.type&&/@preserve|@license|@cc_on/i.test(e.value)}function Y(e){function t(e,t){return e.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(e){var n=e.charCodeAt(0).toString(16);if(n.length<=2&&!t){for(;n.length<2;)n="0"+n;return"\\x"+n}for(;n.length<4;)n="0"+n;return"\\u"+n})}function n(n,r){function i(){return"'"+n.replace(/\x27/g,"\\'")+"'"}function o(){return'"'+n.replace(/\x22/g,'\\"')+'"'}var s=0,a=0;switch(n=n.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(t,r){switch(t){case'"':return++s,'"';case"'":return++a,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return e.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-7]/.test(n.charAt(r+1))?"\\x00":"\\0"}return t}),e.ascii_only&&(n=t(n)),e.quote_style){case 1:return i();case 2:return o();case 3:return"'"==r?i():o();default:return s>a?i():o()}}function r(t,r){var i=n(t,r);return e.inline_script&&(i=(i=(i=i.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1")).replace(/\x3c!--/g,"\\x3c!--")).replace(/--\x3e/g,"--\\x3e")),i}function i(n){return n=n.toString(),e.ascii_only&&(n=t(n,!0)),n}function o(t){return a(" ",e.indent_start+y-t*e.indent_level)}function s(t){var n=(t=String(t)).charAt(0),r=S.charAt(S.length-1);if(A&&(A=!1,(":"==r&&"}"==n||(!n||";}".indexOf(n)<0)&&";"!=r)&&(e.semicolons||O(n)?(k+=";",b++,w++):(T(),k+="\n",w++,_++,b=0,/^\s+$/.test(t)&&(A=!0)),e.beautify||(E=!1))),!e.beautify&&e.preserve_line&&R[R.length-1])for(var i=R[R.length-1].start.line;_<i;)T(),k+="\n",w++,_++,b=0,E=!1;E&&((P(r)&&(P(n)||"\\"==n)||"/"==n&&n==r||("+"==n||"-"==n)&&n==S)&&(k+=" ",b++,w++),E=!1),k+=t,w+=t.length;var o=t.split(/\r?\n/),s=o.length-1;_+=s,b+=o[0].length,s>0&&(T(),b=o[s].length),S=t}function u(){A=!1,s(";")}function c(){return y+e.indent_level}function p(){return C&&T(),k}var m=f;if((e=l(e,{ascii_only:!1,beautify:!1,bracketize:!1,comments:!1,indent_level:4,indent_start:0,inline_script:!0,keep_quoted_props:!1,max_line_len:!1,preamble:null,preserve_line:!1,quote_keys:!1,quote_style:0,screw_ie8:!0,semicolons:!0,shebang:!0,source_map:null,space_colon:!0,unescape_regexps:!1,width:80,wrap_iife:!1},!0)).comments){var g=e.comments;if("string"==typeof e.comments&&/^\/.*\/[a-zA-Z]*$/.test(e.comments)){var v=e.comments.lastIndexOf("/");g=new RegExp(e.comments.substr(1,v-1),e.comments.substr(v+1))}m=g instanceof RegExp?function(e){return"comment5"!=e.type&&g.test(e.value)}:"function"==typeof g?function(e){return"comment5"!=e.type&&g(this,e)}:"some"===g?G:d}var y=0,b=0,_=1,w=0,k="",E=!1,A=!1,C=0,S="",T=e.max_line_len?function(){if(b>e.max_line_len){if(C){var t=k.slice(0,C),n=k.slice(C);k=t+"\n"+n,_++,w++,b=n.length}b>e.max_line_len&&ie.warn("Output exceeds {max_line_len} characters",e)}C=0}:h,O=x("( [ + * / - , ."),F=e.beautify?function(){s(" ")}:function(){E=!0},B=e.beautify?function(t){e.beautify&&s(o(t?.5:0))}:h,D=e.beautify?function(e,t){!0===e&&(e=c());var n=y;y=e;var r=t();return y=n,r}:function(e,t){return t()},L=e.beautify?function(){s("\n")}:e.max_line_len?function(){T(),C=k.length}:h,N=e.beautify?function(){s(";")}:function(){A=!0},M=e.source_map?function(t,n){try{t&&e.source_map.add(t.file||"?",_,b,t.line,t.col,n||"name"!=t.type?n:t.value)}catch(e){ie.warn("Couldn't figure out mapping for {file}:{line},{col} â†’ {cline},{ccol} [{name}]",{file:t.file,line:t.line,col:t.col,cline:_,ccol:b,name:n||""})}}:h,R=[];return{get:p,toString:p,indent:B,indentation:function(){return y},current_width:function(){return b-y},should_break:function(){return e.width&&this.current_width()>=e.width},newline:L,print:s,space:F,comma:function(){s(","),F()},colon:function(){s(":"),e.space_colon&&F()},last:function(){return S},semicolon:N,force_semicolon:u,to_ascii:t,print_name:function(e){s(i(e))},print_string:function(e,t,n){var i=r(e,t);!0===n&&-1===i.indexOf("\\")&&(on.test(k)||u(),u()),s(i)},encode_string:r,next_indent:c,with_indent:D,with_block:function(e){var t;return s("{"),L(),D(c(),function(){t=e()}),B(),s("}"),t},with_parens:function(e){s("(");var t=e();return s(")"),t},with_square:function(e){s("[");var t=e();return s("]"),t},add_mapping:M,option:function(t){return e[t]},comment_filter:m,line:function(){return _},col:function(){return b},pos:function(){return w},push_node:function(e){R.push(e)},pop_node:function(){return R.pop()},parent:function(e){return R[R.length-2-(e||0)]}}}function X(e,t){if(!(this instanceof X))return new X(e,t);H.call(this,this.before,this.after),this.options=l(e,{angular:!1,booleans:!t,cascade:!t,collapse_vars:!t,comparisons:!t,conditionals:!t,dead_code:!t,drop_console:!1,drop_debugger:!t,evaluate:!t,expression:!1,global_defs:{},hoist_funs:!t,hoist_vars:!1,if_return:!t,join_vars:!t,keep_fargs:!0,keep_fnames:!1,keep_infinity:!1,loops:!t,negate_iife:!t,passes:1,properties:!t,pure_getters:!t&&"strict",pure_funcs:null,reduce_vars:!t,screw_ie8:!0,sequences:!t,side_effects:!t,switches:!t,top_retain:null,toplevel:!(!e||!e.top_retain),unsafe:!1,unsafe_comps:!1,unsafe_math:!1,unsafe_proto:!1,unsafe_regexp:!1,unused:!t,warnings:!0},!0);var n=this.options.pure_funcs;this.pure_funcs="function"==typeof n?n:n?function(e){return n.indexOf(e.expression.print_to_string())<0}:d;var r=this.options.top_retain;r instanceof RegExp?this.top_retain=function(e){return r.test(e.name)}:"function"==typeof r?this.top_retain=r:r&&("string"==typeof r&&(r=r.split(/,/)),this.top_retain=function(e){return r.indexOf(e.name)>=0});var i=this.options.sequences;this.sequences_limit=1==i?200:0|i,this.warnings_produced={}}function K(e){e=l(e,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var t=new ee.SourceMapGenerator({file:e.file,sourceRoot:e.root}),n=e.orig&&new ee.SourceMapConsumer(e.orig);return n&&Array.isArray(e.orig.sources)&&n._sources.toArray().forEach(function(e){var r=n.sourceContentFor(e,!0);r&&t.setSourceContent(e,r)}),{add:function(r,i,o,s,a,u){if(n){var c=n.originalPositionFor({line:s,column:a});if(null===c.source)return;r=c.source,s=c.line,a=c.column,u=c.name||u}t.addMapping({generated:{line:i+e.dest_line_diff,column:o},original:{line:s+e.orig_line_diff,column:a},source:r,name:u})},get:function(){return t},toString:function(){return JSON.stringify(t.toJSON())}}}function J(){function e(e){v(t,e)}var t=["null","true","false","Infinity","-Infinity","undefined"];return[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp].forEach(function(t){Object.getOwnPropertyNames(t).map(e),t.prototype&&Object.getOwnPropertyNames(t.prototype).map(e)}),t}function Q(e,t){function n(e){return!(g.indexOf(e)>=0)&&(!(u.indexOf(e)>=0)&&(t.only_cache?c.props.has(e):!/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(e)))}function r(e){return!(f&&e in y)&&(!(h&&!h.test(e))&&(!(u.indexOf(e)>=0)&&(c.props.has(e)||m.indexOf(e)>=0)))}function i(e,t){t?y[e]=!0:(n(e)&&v(m,e),r(e)||v(g,e))}function o(e){if(!r(e))return e;var t=c.props.get(e);if(!t){if(d){var i="_$"+e+"$"+p+"_";!n(i)||f&&i in y||(t=i)}if(!t)do{t=rn(++c.cname)}while(!n(t)||f&&t in y);c.props.set(e,t)}return t}function s(e,t){var n={};try{!function e(r){r.walk(new T(function(r){if(r instanceof Ye)return e(r.cdr),!0;if(r instanceof Et)return i(r.value,t),!0;if(r instanceof nt)return e(r.consequent),e(r.alternative),!0;throw n}))}(e)}catch(e){if(e!==n)throw e}}function a(e){return e.transform(new H(function(e){return e instanceof Ye?e.cdr=a(e.cdr):e instanceof Et?e.value=o(e.value):e instanceof nt&&(e.consequent=a(e.consequent),e.alternative=a(e.alternative)),e}))}var u=(t=l(t,{cache:null,debug:!1,ignore_quoted:!1,only_cache:!1,regex:null,reserved:null})).reserved;null==u&&(u=J());var c=t.cache;null==c&&(c={cname:-1,props:new k});var p,h=t.regex,f=t.ignore_quoted,d=!1!==t.debug;d&&(p=!0===t.debug?"":t.debug);var m=[],g=[],y={};return e.walk(new T(function(e){e instanceof at?i(e.key,f&&e.quote):e instanceof st?i(e.key.name):e instanceof Ke?i(e.property):e instanceof Je&&s(e.property,f)})),e.transform(new H(function(e){e instanceof at?f&&e.quote||(e.key=o(e.key)):e instanceof st?e.key.name=o(e.key.name):e instanceof Ke?e.property=o(e.property):e instanceof Je&&(f||(e.property=a(e.property)))}))}var Z=e("util"),ee=e("source-map"),te=n;c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="DefaultsError",u(c),c.croak=function(e,t){throw new c(e,t)};var ne=function(){function e(e,o,s){function a(){var a=o(e[u],u),p=a instanceof r;return p&&(a=a.v),a instanceof t?(a=a.v)instanceof n?l.push.apply(l,s?a.v.slice().reverse():a.v):l.push(a):a!==i&&(a instanceof n?c.push.apply(c,s?a.v.slice().reverse():a.v):c.push(a)),p}var u,c=[],l=[];if(e instanceof Array)if(s){for(u=e.length;--u>=0&&!a(););c.reverse(),l.reverse()}else for(u=0;u<e.length&&!a();++u);else for(u in e)if(E(e,u)&&a())break;return l.concat(c)}function t(e){this.v=e}function n(e){this.v=e}function r(e){this.v=e}e.at_top=function(e){return new t(e)},e.splice=function(e){return new n(e)},e.last=function(e){return new r(e)};var i=e.skip={};return e}();k.prototype={set:function(e,t){return this.has(e)||++this._size,this._values["$"+e]=t,this},add:function(e,t){return this.has(e)?this.get(e).push(t):this.set(e,[t]),this},get:function(e){return this._values["$"+e]},del:function(e){return this.has(e)&&(--this._size,delete this._values["$"+e]),this},has:function(e){return"$"+e in this._values},each:function(e){for(var t in this._values)e(this._values[t],t.substr(1))},size:function(){return this._size},map:function(e){var t=[];for(var n in this._values)t.push(e(this._values[n],n.substr(1)));return t},toObject:function(){return this._values}},k.fromObject=function(e){var t=new k;return t._size=p(t._values,e),t};var re=C("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),ie=C("Node","start end",{_clone:function(e){if(e){var t=this.clone();return t.transform(new H(function(e){if(e!==t)return e.clone(!0)}))}return new this.CTOR(this)},clone:function(e){return this._clone(e)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(e){return e._visit(this)},walk:function(e){return this._walk(e)}},null);ie.warn_function=null,ie.warn=function(e,t){ie.warn_function&&ie.warn_function(y(e,t))};var oe=C("Statement",null,{$documentation:"Base class of all statements"}),se=C("Debugger",null,{$documentation:"Represents a debugger statement"},oe),ae=C("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},oe),ue=C("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},oe),ce=C("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(e){return e._visit(this,function(){S(this,e)})}},oe),le=C("BlockStatement",null,{$documentation:"A block statement"},ce),pe=C("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(e){return e._visit(this)}},oe),he=C("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},oe),fe=C("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(e){return e._visit(this,function(){this.label._walk(e),this.body._walk(e)})},clone:function(e){var t=this._clone(e);if(e){var n=t.label,r=this.label;t.walk(new T(function(e){e instanceof Be&&e.label&&e.label.thedef===r&&(e.label.thedef=n,n.references.push(e))}))}return t}},he),de=C("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},he),me=C("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},de),ge=C("Do",null,{$documentation:"A `do` statement",_walk:function(e){return e._visit(this,function(){this.body._walk(e),this.condition._walk(e)})}},me),ve=C("While",null,{$documentation:"A `while` statement",_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e)})}},me),ye=C("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(e){return e._visit(this,function(){this.init&&this.init._walk(e),this.condition&&this.condition._walk(e),this.step&&this.step._walk(e),this.body._walk(e)})}},de),be=C("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(e){return e._visit(this,function(){this.init._walk(e),this.object._walk(e),this.body._walk(e)})}},de),_e=C("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.body._walk(e)})}},he),xe=C("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},ce),we=C("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(e){var t=this,n=[],r=[];e.forEach(function(e){var t=e.lastIndexOf(":");n.push(e.substr(0,t)),r.push(e.substr(t+1))});var i="(function("+r.join(",")+"){ '$ORIG'; })("+n.join(",")+")";return i=q(i),i=i.transform(new H(function(e){if(e instanceof ae&&"$ORIG"==e.value)return ne.splice(t.body)}))},wrap_commonjs:function(e,t){var n=this,r=[];t&&(n.figure_out_scope(),n.walk(new T(function(e){e instanceof ht&&e.definition().global&&(s(function(t){return t.name==e.name},r)||r.push(e))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+e+"'] = exports; }({}, (function(){return this}())))";return i=q(i),i=i.transform(new H(function(e){if(e instanceof ae)switch(e.value){case"$ORIG":return ne.splice(n.body);case"$EXPORTS":var t=[];return r.forEach(function(e){t.push(new ue({body:new rt({left:new Je({expression:new _t({name:"exports"}),property:new Et({value:e.name})}),operator:"=",right:new _t(e)})}))}),ne.splice(t)}}))}},xe),ke=C("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e);for(var t=this.argnames,n=0,r=t.length;n<r;n++)t[n]._walk(e);S(this,e)})}},xe),Ee=C("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},ke),Ae=C("Function",null,{$documentation:"A function expression"},ke),Ce=C("Defun",null,{$documentation:"A function definition"},ke),Se=C("Jump",null,{$documentation:"Base class for â€œjumpsâ€ (for now that's `return`, `throw`, `break` and `continue`)"},oe),Te=C("Exit","value",{$documentation:"Base class for â€œexitsâ€ (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(e){return e._visit(this,this.value&&function(){this.value._walk(e)})}},Se),Oe=C("Return",null,{$documentation:"A `return` statement"},Te),Fe=C("Throw",null,{$documentation:"A `throw` statement"},Te),Be=C("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(e){return e._visit(this,this.label&&function(){this.label._walk(e)})}},Se),De=C("Break",null,{$documentation:"A `break` statement"},Be),Le=C("Continue",null,{$documentation:"A `continue` statement"},Be),Ne=C("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e),this.alternative&&this.alternative._walk(e)})}},he),Me=C("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` â€œdiscriminantâ€"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),S(this,e)})}},ce),Re=C("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},ce),Pe=C("Default",null,{$documentation:"A `default` switch branch"},Re),Ie=C("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),S(this,e)})}},Re),je=C("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(e){return e._visit(this,function(){S(this,e),this.bcatch&&this.bcatch._walk(e),this.bfinally&&this.bfinally._walk(e)})}},ce),Ve=C("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(e){return e._visit(this,function(){this.argname._walk(e),S(this,e)})}},ce),ze=C("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},ce),Ue=C("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(e){return e._visit(this,function(){for(var t=this.definitions,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}},oe),$e=C("Var",null,{$documentation:"A `var` statement"},Ue),qe=C("Const",null,{$documentation:"A `const` statement"},Ue),He=C("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(e){return e._visit(this,function(){this.name._walk(e),this.value&&this.value._walk(e)})}}),We=C("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e);for(var t=this.args,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),Ge=C("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},We),Ye=C("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(e,t){var n=new Ye(e);return n.car=e,n.cdr=t,n},$from_array:function(e){if(0==e.length)return null;if(1==e.length)return e[0].clone();for(var t=null,n=e.length;--n>=0;)t=Ye.cons(e[n],t);for(var r=t;r;){if(r.cdr&&!r.cdr.cdr){r.cdr=r.cdr.car;break}r=r.cdr}return t},to_array:function(){for(var e=this,t=[];e;){if(t.push(e.car),e.cdr&&!(e.cdr instanceof Ye)){t.push(e.cdr);break}e=e.cdr}return t},add:function(e){for(var t=this;t;){if(!(t.cdr instanceof Ye)){var n=Ye.cons(t.cdr,e);return t.cdr=n}t=t.cdr}},len:function(){return this.cdr instanceof Ye?this.cdr.len()+1:2},_walk:function(e){return e._visit(this,function(){this.car._walk(e),this.cdr&&this.cdr._walk(e)})}}),Xe=C("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the â€œcontainerâ€ expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),Ke=C("Dot",null,{$documentation:"A dotted property access expression",_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}},Xe),Je=C("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.property._walk(e)})}},Xe),Qe=C("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}}),Ze=C("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},Qe),et=C("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},Qe),tt=C("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(e){return e._visit(this,function(){this.left._walk(e),this.right._walk(e)})}}),nt=C("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.consequent._walk(e),this.alternative._walk(e)})}}),rt=C("Assign",null,{$documentation:"An assignment expression â€” `a = b + 5`"},tt),it=C("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(e){return e._visit(this,function(){for(var t=this.elements,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),ot=C("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(e){return e._visit(this,function(){for(var t=this.properties,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),st=C("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an AST_SymbolAccessor.",value:"[AST_Node] property value.  For setters and getters this is an AST_Accessor."},_walk:function(e){return e._visit(this,function(){this.value._walk(e)})}}),at=C("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},st),ut=C("ObjectSetter",null,{$documentation:"An object setter property"},st),ct=C("ObjectGetter",null,{$documentation:"An object getter property"},st),lt=C("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"}),pt=C("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},lt),ht=C("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"},lt),ft=C("SymbolVar",null,{$documentation:"Symbol defining a variable"},ht),dt=C("SymbolConst",null,{$documentation:"A constant declaration"},ht),mt=C("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},ft),gt=C("SymbolDefun",null,{$documentation:"Symbol defining a function"},ht),vt=C("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},ht),yt=C("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},ht),bt=C("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},lt),_t=C("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},lt),xt=C("LabelRef",null,{$documentation:"Reference to a label symbol"},lt),wt=C("This",null,{$documentation:"The `this` symbol"},lt),kt=C("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),Et=C("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},kt),At=C("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},kt),Ct=C("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},kt),St=C("Atom",null,{$documentation:"Base class for atoms"},kt),Tt=C("Null",null,{$documentation:"The `null` atom",value:null},St),Ot=C("NaN",null,{$documentation:"The impossible value",value:NaN},St),Ft=C("Undefined",null,{$documentation:"The `undefined` value",value:void 0},St),Bt=C("Hole",null,{$documentation:"A hole in an array",value:void 0},St),Dt=C("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},St),Lt=C("Boolean",null,{$documentation:"Base class for booleans"},St),Nt=C("False",null,{$documentation:"The `false` atom",value:!1},Lt),Mt=C("True",null,{$documentation:"The `true` atom",value:!0},Lt);T.prototype={_visit:function(e,t){this.push(e);var n=this.visit(e,t?function(){t.call(e)}:h);return!n&&t&&t.call(e),this.pop(e),n},parent:function(e){return this.stack[this.stack.length-2-(e||0)]},push:function(e){e instanceof ke?this.directives=Object.create(this.directives):e instanceof ae&&!this.directives[e.value]&&(this.directives[e.value]=e),this.stack.push(e)},pop:function(e){this.stack.pop(),e instanceof ke&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(e){for(var t=this.stack,n=t.length;--n>=0;){var r=t[n];if(r instanceof e)return r}},has_directive:function(e){var t=this.directives[e];if(t)return t;var n=this.stack[this.stack.length-1];if(n instanceof xe)for(var r=0;r<n.body.length;++r){var i=n.body[r];if(!(i instanceof ae))break;if(i.value==e)return i}},in_boolean_context:function(){for(var e=this.stack,t=e.length,n=e[--t];t>0;){var r=e[--t];if(r instanceof Ne&&r.condition===n||r instanceof nt&&r.condition===n||r instanceof me&&r.condition===n||r instanceof ye&&r.condition===n||r instanceof Ze&&"!"==r.operator&&r.expression===n)return!0;if(!(r instanceof tt)||"&&"!=r.operator&&"||"!=r.operator)return!1;n=r}},loopcontrol_target:function(e){var t=this.stack;if(e.label){for(n=t.length;--n>=0;)if((r=t[n])instanceof fe&&r.label.name==e.label.name)return r.body}else for(var n=t.length;--n>=0;){var r=t[n];if(r instanceof de||e instanceof De&&r instanceof Me)return r}}};var Rt="break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with",Pt="false null true",It="abstract boolean byte char class double enum export extends final float goto implements import int interface let long native package private protected public short static super synchronized this throws transient volatile yield "+Pt+" "+Rt,jt="return new delete throw else case";Rt=x(Rt),It=x(It),jt=x(jt),Pt=x(Pt);var Vt=x(i("+-*&%=<>!?|~^")),zt=/^0x[0-9a-f]+$/i,Ut=/^0[0-7]+$/,$t=x(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),qt=x(i(" Â \n\r\t\f\vâ€‹â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Š\u2028\u2029â€¯âŸã€€\ufeff")),Ht=x(i("\n\r\u2028\u2029")),Wt=x(i("[{(,;:")),Gt=x(i("[]{}(),;:")),Yt=x(i("gmsiy")),Xt={letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),digit:new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")};V.prototype=Object.create(Error.prototype),V.prototype.constructor=V,V.prototype.name="SyntaxError",u(V);var Kt={},Jt=x(["typeof","void","delete","--","++","!","~","-","+"]),Qt=x(["--","++"]),Zt=x(["=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="]),en=function(e,t){for(var n=0;n<e.length;++n)for(var r=e[n],i=0;i<r.length;++i)t[r[i]]=n+1;return t}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),tn=r(["for","do","while","switch"]),nn=r(["atom","num","string","regexp","name"]);H.prototype=new T,function(e){function t(t,n){t.DEFMETHOD("transform",function(t,r){var i,o;return t.push(this),t.before&&(i=t.before(this,n,r)),i===e&&(t.after?(t.stack[t.stack.length-1]=i=this,n(i,t),(o=t.after(i,r))!==e&&(i=o)):n(i=this,t)),t.pop(this),i})}function n(e,t){return ne(e,function(e){return e.transform(t,!0)})}t(ie,h),t(fe,function(e,t){e.label=e.label.transform(t),e.body=e.body.transform(t)}),t(ue,function(e,t){e.body=e.body.transform(t)}),t(ce,function(e,t){e.body=n(e.body,t)}),t(me,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t)}),t(ye,function(e,t){e.init&&(e.init=e.init.transform(t)),e.condition&&(e.condition=e.condition.transform(t)),e.step&&(e.step=e.step.transform(t)),e.body=e.body.transform(t)}),t(be,function(e,t){e.init=e.init.transform(t),e.object=e.object.transform(t),e.body=e.body.transform(t)}),t(_e,function(e,t){e.expression=e.expression.transform(t),e.body=e.body.transform(t)}),t(Te,function(e,t){e.value&&(e.value=e.value.transform(t))}),t(Be,function(e,t){e.label&&(e.label=e.label.transform(t))}),t(Ne,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t),e.alternative&&(e.alternative=e.alternative.transform(t))}),t(Me,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(Ie,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(je,function(e,t){e.body=n(e.body,t),e.bcatch&&(e.bcatch=e.bcatch.transform(t)),e.bfinally&&(e.bfinally=e.bfinally.transform(t))}),t(Ve,function(e,t){e.argname=e.argname.transform(t),e.body=n(e.body,t)}),t(Ue,function(e,t){e.definitions=n(e.definitions,t)}),t(He,function(e,t){e.name=e.name.transform(t),e.value&&(e.value=e.value.transform(t))}),t(ke,function(e,t){e.name&&(e.name=e.name.transform(t)),e.argnames=n(e.argnames,t),e.body=n(e.body,t)}),t(We,function(e,t){e.expression=e.expression.transform(t),e.args=n(e.args,t)}),t(Ye,function(e,t){e.car=e.car.transform(t),e.cdr=e.cdr.transform(t)}),t(Ke,function(e,t){e.expression=e.expression.transform(t)}),t(Je,function(e,t){e.expression=e.expression.transform(t),e.property=e.property.transform(t)}),t(Qe,function(e,t){e.expression=e.expression.transform(t)}),t(tt,function(e,t){e.left=e.left.transform(t),e.right=e.right.transform(t)}),t(nt,function(e,t){e.condition=e.condition.transform(t),e.consequent=e.consequent.transform(t),e.alternative=e.alternative.transform(t)}),t(it,function(e,t){e.elements=n(e.elements,t)}),t(ot,function(e,t){e.properties=n(e.properties,t)}),t(st,function(e,t){e.value=e.value.transform(t)})}(),W.next_id=1,W.prototype={unmangleable:function(e){return e||(e={}),this.global&&!e.toplevel||this.undeclared||!e.eval&&(this.scope.uses_eval||this.scope.uses_with)||e.keep_fnames&&(this.orig[0]instanceof vt||this.orig[0]instanceof gt)},mangle:function(e){var t=e.cache&&e.cache.props;if(this.global&&t&&t.has(this.name))this.mangled_name=t.get(this.name);else if(!this.mangled_name&&!this.unmangleable(e)){var n=this.scope,r=this.orig[0];!e.screw_ie8&&r instanceof vt&&(n=n.parent_scope);var i;this.defun&&(i=this.defun.variables.get(this.name))?this.mangled_name=i.mangled_name||i.name:this.mangled_name=n.next_mangled(e,this),this.global&&t&&t.set(this.name,this.mangled_name)}}},we.DEFMETHOD("figure_out_scope",function(e){e=l(e,{cache:null,screw_ie8:!0});var t=this,n=t.parent_scope=null,r=new k,i=null,o=new T(function(t,o){if(t instanceof Ve){s=n;return(n=new xe(t)).init_scope_vars(s),o(),n=s,!0}if(t instanceof xe){t.init_scope_vars(n);var s=n,a=i,u=r;return i=n=t,r=new k,o(),n=s,i=a,r=u,!0}if(t instanceof fe){var c=t.label;if(r.has(c.name))throw new Error(y("Label {name} defined twice",c));return r.set(c.name,c),o(),r.del(c.name),!0}if(t instanceof _e)for(var l=n;l;l=l.parent_scope)l.uses_with=!0;else if(t instanceof lt&&(t.scope=n),t instanceof bt&&(t.thedef=t,t.references=[]),t instanceof vt)i.def_function(t);else if(t instanceof gt)(t.scope=i.parent_scope).def_function(t);else if(t instanceof ft||t instanceof dt){if(i.def_variable(t),i!==n){t.mark_enclosed(e);var p=n.find_variable(t);t.thedef!==p&&(t.thedef=p,t.reference(e))}}else if(t instanceof yt)n.def_variable(t).defun=i;else if(t instanceof xt){var h=r.get(t.name);if(!h)throw new Error(y("Undefined label {name} [{line},{col}]",{name:t.name,line:t.start.line,col:t.start.col}));t.thedef=h}});t.walk(o);var s=null,o=(t.globals=new k,new T(function(n,r){if(n instanceof ke){var i=s;return s=n,r(),s=i,!0}if(n instanceof Be&&n.label)return n.label.thedef.references.push(n),!0;if(n instanceof _t){var a=n.name;if("eval"==a&&o.parent()instanceof We)for(var u=n.scope;u&&!u.uses_eval;u=u.parent_scope)u.uses_eval=!0;var c=n.scope.find_variable(a);return n.scope instanceof ke&&"arguments"==a&&(n.scope.uses_arguments=!0),c||(c=t.def_global(n)),n.thedef=c,n.reference(e),!0}}));t.walk(o),e.screw_ie8||t.walk(new T(function(n,r){if(n instanceof yt){var i=n.name,o=n.thedef.references,s=n.thedef.defun,a=s.find_variable(i)||t.globals.get(i)||s.def_variable(n);return o.forEach(function(t){t.thedef=a,t.reference(e)}),n.thedef=a,!0}})),e.cache&&(this.cname=e.cache.cname)}),we.DEFMETHOD("def_global",function(e){var t=this.globals,n=e.name;if(t.has(n))return t.get(n);var r=new W(this,t.size(),e);return r.undeclared=!0,r.global=!0,t.set(n,r),r}),xe.DEFMETHOD("init_scope_vars",function(e){this.variables=new k,this.functions=new k,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=e,this.enclosed=[],this.cname=-1}),ke.DEFMETHOD("init_scope_vars",function(){xe.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1,this.def_variable(new ft({name:"arguments",start:this.start,end:this.end}))}),lt.DEFMETHOD("mark_enclosed",function(e){for(var t=this.definition(),n=this.scope;n&&(v(n.enclosed,t),e.keep_fnames&&n.functions.each(function(e){v(t.scope.enclosed,e)}),n!==t.scope);)n=n.parent_scope}),lt.DEFMETHOD("reference",function(e){this.definition().references.push(this),this.mark_enclosed(e)}),xe.DEFMETHOD("find_variable",function(e){return e instanceof lt&&(e=e.name),this.variables.get(e)||this.parent_scope&&this.parent_scope.find_variable(e)}),xe.DEFMETHOD("def_function",function(e){this.functions.set(e.name,this.def_variable(e))}),xe.DEFMETHOD("def_variable",function(e){var t;return this.variables.has(e.name)?(t=this.variables.get(e.name)).orig.push(e):(t=new W(this,this.variables.size(),e),this.variables.set(e.name,t),t.global=!this.parent_scope),e.thedef=t}),xe.DEFMETHOD("next_mangled",function(e){var t=this.enclosed;e:for(;;){var n=rn(++this.cname);if(M(n)&&!(e.except.indexOf(n)>=0)){for(var r=t.length;--r>=0;){var i=t[r];if(n==(i.mangled_name||i.unmangleable(e)&&i.name))continue e}return n}}}),Ae.DEFMETHOD("next_mangled",function(e,t){for(var n=t.orig[0]instanceof mt&&this.name&&this.name.definition(),r=n?n.mangled_name||n.name:null;;){var i=ke.prototype.next_mangled.call(this,e,t);if(!r||r!=i)return i}}),lt.DEFMETHOD("unmangleable",function(e){return this.definition().unmangleable(e)}),bt.DEFMETHOD("unmangleable",function(){return!1}),lt.DEFMETHOD("unreferenced",function(){return 0==this.definition().references.length&&!(this.scope.uses_eval||this.scope.uses_with)}),lt.DEFMETHOD("undeclared",function(){return this.definition().undeclared}),xt.DEFMETHOD("undeclared",function(){return!1}),bt.DEFMETHOD("undeclared",function(){return!1}),lt.DEFMETHOD("definition",function(){return this.thedef}),lt.DEFMETHOD("global",function(){return this.definition().global}),we.DEFMETHOD("_default_mangler_options",function(e){return l(e,{eval:!1,except:[],keep_fnames:!1,screw_ie8:!0,sort:!1,toplevel:!1})}),we.DEFMETHOD("mangle_names",function(e){(e=this._default_mangler_options(e)).except.push("arguments");var t=-1,n=[];e.cache&&this.globals.each(function(t){e.except.indexOf(t.name)<0&&n.push(t)});var r=new T(function(i,o){if(i instanceof fe){var s=t;return o(),t=s,!0}if(i instanceof xe){r.parent();var a=[];return i.variables.each(function(t){e.except.indexOf(t.name)<0&&a.push(t)}),void n.push.apply(n,a)}if(i instanceof bt){var u;do{u=rn(++t)}while(!M(u));return i.mangled_name=u,!0}e.screw_ie8&&i instanceof yt&&n.push(i.definition())});this.walk(r),n.forEach(function(t){t.mangle(e)}),e.cache&&(e.cache.cname=this.cname)}),we.DEFMETHOD("compute_char_frequency",function(e){e=this._default_mangler_options(e);var t=new T(function(t){t instanceof kt?rn.consider(t.print_to_string()):t instanceof Oe?rn.consider("return"):t instanceof Fe?rn.consider("throw"):t instanceof Le?rn.consider("continue"):t instanceof De?rn.consider("break"):t instanceof se?rn.consider("debugger"):t instanceof ae?rn.consider(t.value):t instanceof ve?rn.consider("while"):t instanceof ge?rn.consider("do while"):t instanceof Ne?(rn.consider("if"),t.alternative&&rn.consider("else")):t instanceof $e?rn.consider("var"):t instanceof qe?rn.consider("const"):t instanceof ke?rn.consider("function"):t instanceof ye?rn.consider("for"):t instanceof be?rn.consider("for in"):t instanceof Me?rn.consider("switch"):t instanceof Ie?rn.consider("case"):t instanceof Pe?rn.consider("default"):t instanceof _e?rn.consider("with"):t instanceof ut?rn.consider("set"+t.key):t instanceof ct?rn.consider("get"+t.key):t instanceof at?rn.consider(t.key):t instanceof Ge?rn.consider("new"):t instanceof wt?rn.consider("this"):t instanceof je?rn.consider("try"):t instanceof Ve?rn.consider("catch"):t instanceof ze?rn.consider("finally"):t instanceof lt&&t.unmangleable(e)?rn.consider(t.name):t instanceof Qe||t instanceof tt?rn.consider(t.operator):t instanceof Ke&&rn.consider(t.property)});this.walk(t),rn.sort()});var rn=function(){function e(){r=Object.create(null),(n=i.split("").map(function(e){return e.charCodeAt(0)})).forEach(function(e){r[e]=0})}function t(e){var t="",r=54;e++;do{e--,t+=String.fromCharCode(n[e%r]),e=Math.floor(e/r),r=64}while(e>0);return t}var n,r,i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";return t.consider=function(e){for(var t=e.length;--t>=0;){var n=e.charCodeAt(t);n in r&&++r[n]}},t.sort=function(){n=_(n,function(e,t){return F(e)&&!F(t)?1:F(t)&&!F(e)?-1:r[t]-r[e]})},t.reset=e,e(),t.get=function(){return n},t.freq=function(){return r},t}();we.DEFMETHOD("scope_warnings",function(e){e=l(e,{assign_to_global:!0,eval:!0,func_arguments:!0,nested_defuns:!0,undeclared:!1,unreferenced:!0});var t=new T(function(n){if(e.undeclared&&n instanceof _t&&n.undeclared()&&ie.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:n.name,file:n.start.file,line:n.start.line,col:n.start.col}),e.assign_to_global){var r=null;n instanceof rt&&n.left instanceof _t?r=n.left:n instanceof be&&n.init instanceof _t&&(r=n.init),r&&(r.undeclared()||r.global()&&r.scope!==r.definition().scope)&&ie.warn("{msg}: {name} [{file}:{line},{col}]",{msg:r.undeclared()?"Accidental global?":"Assignment to global",name:r.name,file:r.start.file,line:r.start.line,col:r.start.col})}e.eval&&n instanceof _t&&n.undeclared()&&"eval"==n.name&&ie.warn("Eval is used [{file}:{line},{col}]",n.start),e.unreferenced&&(n instanceof ht||n instanceof bt)&&!(n instanceof yt)&&n.unreferenced()&&ie.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:n instanceof bt?"Label":"Symbol",name:n.name,file:n.start.file,line:n.start.line,col:n.start.col}),e.func_arguments&&n instanceof ke&&n.uses_arguments&&ie.warn("arguments used in function {name} [{file}:{line},{col}]",{name:n.name?n.name.name:"anonymous",file:n.start.file,line:n.start.line,col:n.start.col}),e.nested_defuns&&n instanceof Ce&&!(t.parent()instanceof xe)&&ie.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:n.name.name,type:t.parent().TYPE,file:n.start.file,line:n.start.line,col:n.start.col})});this.walk(t)});var on=/^$|[;{][\s\n]*$/;!function(){function e(e,t){e.DEFMETHOD("_codegen",t)}function t(e,n){Array.isArray(e)?e.forEach(function(e){t(e,n)}):e.DEFMETHOD("needs_parens",n)}function n(e,t,n,r){var i=e.length-1;v=r,e.forEach(function(e,r){!0!==v||e instanceof ae||e instanceof pe||e instanceof ue&&e.body instanceof Et||(v=!1),e instanceof pe||(n.indent(),e.print(n),r==i&&t||(n.newline(),t&&n.newline())),!0===v&&e instanceof ue&&e.body instanceof Et&&(v=!1)}),v=!1}function r(e,t,r){e.length>0?t.with_block(function(){n(e,!1,t,r)}):t.print("{}")}function i(e,t){var n=e.body;if(t.option("bracketize")||!t.option("screw_ie8")&&n instanceof ge)return f(n,t);if(!n)return t.force_semicolon();for(;;)if(n instanceof Ne){if(!n.alternative)return void f(e.body,t);n=n.alternative}else{if(!(n instanceof he))break;n=n.body}u(e.body,t)}function o(e,t,n){if(n)try{e.walk(new T(function(e){if(e instanceof tt&&"in"==e.operator)throw t})),e.print(t)}catch(n){if(n!==t)throw n;e.print(t,!0)}else e.print(t)}function s(e,t,n){n.option("quote_keys")?n.print_string(e+""):("number"==typeof e||!n.option("beautify")&&+e+""==e)&&parseFloat(e)>=0?n.print(p(e)):(It(e)?n.option("screw_ie8"):I(e))?t&&n.option("keep_quoted_props")?n.print_string(e,t):n.print_name(e):n.print_string(e,t)}function a(e){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(e)<0}function u(e,t){t.option("bracketize")?f(e,t):!e||e instanceof pe?t.force_semicolon():e.print(t)}function c(e,t){return e.args.length>0||t.option("beautify")}function l(e){for(var t=e[0],n=t.length,r=1;r<e.length;++r)e[r].length<n&&(n=(t=e[r]).length);return t}function p(e){var t,n=e.toString(10),r=[n.replace(/^0\./,".").replace("e+","e")];return Math.floor(e)===e?(e>=0?r.push("0x"+e.toString(16).toLowerCase(),"0"+e.toString(8)):r.push("-0x"+(-e).toString(16).toLowerCase(),"-0"+(-e).toString(8)),(t=/^(.*?)(0+)$/.exec(e))&&r.push(t[1]+"e"+t[2].length)):(t=/^0?\.(0+)(.*)$/.exec(e))&&r.push(t[2]+"e-"+(t[1].length+t[2].length),n.substr(n.indexOf("."))),l(r)}function f(e,t){!e||e instanceof pe?t.print("{}"):e instanceof le?e.print(t):t.with_block(function(){t.indent(),e.print(t),t.newline()})}function d(e,t){e.DEFMETHOD("add_source_map",function(e){t(this,e)})}function m(e,t){t.add_mapping(e.start)}var g=!1,v=!1;ie.DEFMETHOD("print",function(e,t){function n(){r.add_comments(e),r.add_source_map(e),i(r,e)}var r=this,i=r._codegen,o=g;r instanceof ae&&"use asm"==r.value&&e.parent()instanceof xe&&(g=!0),e.push_node(r),t||r.needs_parens(e)?e.with_parens(n):n(),e.pop_node(),r instanceof xe&&(g=o)}),ie.DEFMETHOD("print_to_string",function(e){var t=Y(e);return e||(t._readonly=!0),this.print(t),t.get()}),ie.DEFMETHOD("add_comments",function(e){if(!e._readonly){var t=this,n=t.start;if(n&&!n._comments_dumped){n._comments_dumped=!0;var r=n.comments_before||[];if(t instanceof Te&&t.value&&t.value.walk(new T(function(e){if(e.start&&e.start.comments_before&&(r=r.concat(e.start.comments_before),e.start.comments_before=[]),e instanceof Ae||e instanceof it||e instanceof ot)return!0})),0==e.pos()){r.length>0&&e.option("shebang")&&"comment5"==r[0].type&&(e.print("#!"+r.shift().value+"\n"),e.indent());var i=e.option("preamble");i&&e.print(i.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"))}r=r.filter(e.comment_filter,t),!e.option("beautify")&&r.length>0&&/comment[134]/.test(r[0].type)&&0!==e.col()&&r[0].nlb&&e.print("\n"),r.forEach(function(t){/comment[134]/.test(t.type)?(e.print("//"+t.value+"\n"),e.indent()):"comment2"==t.type&&(e.print("/*"+t.value+"*/"),n.nlb?(e.print("\n"),e.indent()):e.space())})}}}),t(ie,function(){return!1}),t(Ae,function(e){if(A(e))return!0;if(e.option("wrap_iife")){var t=e.parent();return t instanceof We&&t.expression===this}return!1}),t(ot,function(e){return A(e)}),t(Qe,function(e){var t=e.parent();return t instanceof Xe&&t.expression===this||t instanceof We&&t.expression===this}),t(Ye,function(e){var t=e.parent();return t instanceof We||t instanceof Qe||t instanceof tt||t instanceof He||t instanceof Xe||t instanceof it||t instanceof st||t instanceof nt}),t(tt,function(e){var t=e.parent();if(t instanceof We&&t.expression===this)return!0;if(t instanceof Qe)return!0;if(t instanceof Xe&&t.expression===this)return!0;if(t instanceof tt){var n=t.operator,r=en[n],i=this.operator,o=en[i];if(r>o||r==o&&this===t.right)return!0}}),t(Xe,function(e){var t=e.parent();if(t instanceof Ge&&t.expression===this)try{this.walk(new T(function(e){if(e instanceof We)throw t}))}catch(e){if(e!==t)throw e;return!0}}),t(We,function(e){var t,n=e.parent();return n instanceof Ge&&n.expression===this||this.expression instanceof Ae&&n instanceof Xe&&n.expression===this&&(t=e.parent(1))instanceof rt&&t.left===n}),t(Ge,function(e){var t=e.parent();if(!c(this,e)&&(t instanceof Xe||t instanceof We&&t.expression===this))return!0}),t(At,function(e){var t=e.parent();if(t instanceof Xe&&t.expression===this){var n=this.getValue();if(n<0||/^0/.test(p(n)))return!0}}),t([rt,nt],function(e){var t=e.parent();return t instanceof Qe||(t instanceof tt&&!(t instanceof rt)||(t instanceof We&&t.expression===this||(t instanceof nt&&t.condition===this||(t instanceof Xe&&t.expression===this||void 0))))}),e(ae,function(e,t){t.print_string(e.value,e.quote),t.semicolon()}),e(se,function(e,t){t.print("debugger"),t.semicolon()}),he.DEFMETHOD("_do_print_body",function(e){u(this.body,e)}),e(oe,function(e,t){e.body.print(t),t.semicolon()}),e(we,function(e,t){n(e.body,!0,t,!0),t.print("")}),e(fe,function(e,t){e.label.print(t),t.colon(),e.body.print(t)}),e(ue,function(e,t){e.body.print(t),t.semicolon()}),e(le,function(e,t){r(e.body,t)}),e(pe,function(e,t){t.semicolon()}),e(ge,function(e,t){t.print("do"),t.space(),f(e.body,t),t.space(),t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.semicolon()}),e(ve,function(e,t){t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e._do_print_body(t)}),e(ye,function(e,t){t.print("for"),t.space(),t.with_parens(function(){e.init?(e.init instanceof Ue?e.init.print(t):o(e.init,t,!0),t.print(";"),t.space()):t.print(";"),e.condition?(e.condition.print(t),t.print(";"),t.space()):t.print(";"),e.step&&e.step.print(t)}),t.space(),e._do_print_body(t)}),e(be,function(e,t){t.print("for"),t.space(),t.with_parens(function(){e.init.print(t),t.space(),t.print("in"),t.space(),e.object.print(t)}),t.space(),e._do_print_body(t)}),e(_e,function(e,t){t.print("with"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space(),e._do_print_body(t)}),ke.DEFMETHOD("_do_print",function(e,t){var n=this;t||e.print("function"),n.name&&(e.space(),n.name.print(e)),e.with_parens(function(){n.argnames.forEach(function(t,n){n&&e.comma(),t.print(e)})}),e.space(),r(n.body,e,!0)}),e(ke,function(e,t){e._do_print(t)}),Te.DEFMETHOD("_do_print",function(e,t){e.print(t),this.value&&(e.space(),this.value.print(e)),e.semicolon()}),e(Oe,function(e,t){e._do_print(t,"return")}),e(Fe,function(e,t){e._do_print(t,"throw")}),Be.DEFMETHOD("_do_print",function(e,t){e.print(t),this.label&&(e.space(),this.label.print(e)),e.semicolon()}),e(De,function(e,t){e._do_print(t,"break")}),e(Le,function(e,t){e._do_print(t,"continue")}),e(Ne,function(e,t){t.print("if"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e.alternative?(i(e,t),t.space(),t.print("else"),t.space(),e.alternative instanceof Ne?e.alternative.print(t):u(e.alternative,t)):e._do_print_body(t)}),e(Me,function(e,t){t.print("switch"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space();var n=e.body.length-1;n<0?t.print("{}"):t.with_block(function(){e.body.forEach(function(e,r){t.indent(!0),e.print(t),r<n&&e.body.length>0&&t.newline()})})}),Re.DEFMETHOD("_do_print_body",function(e){e.newline(),this.body.forEach(function(t){e.indent(),t.print(e),e.newline()})}),e(Pe,function(e,t){t.print("default:"),e._do_print_body(t)}),e(Ie,function(e,t){t.print("case"),t.space(),e.expression.print(t),t.print(":"),e._do_print_body(t)}),e(je,function(e,t){t.print("try"),t.space(),r(e.body,t),e.bcatch&&(t.space(),e.bcatch.print(t)),e.bfinally&&(t.space(),e.bfinally.print(t))}),e(Ve,function(e,t){t.print("catch"),t.space(),t.with_parens(function(){e.argname.print(t)}),t.space(),r(e.body,t)}),e(ze,function(e,t){t.print("finally"),t.space(),r(e.body,t)}),Ue.DEFMETHOD("_do_print",function(e,t){e.print(t),e.space(),this.definitions.forEach(function(t,n){n&&e.comma(),t.print(e)});var n=e.parent();(n instanceof ye||n instanceof be)&&n.init===this||e.semicolon()}),e($e,function(e,t){e._do_print(t,"var")}),e(qe,function(e,t){e._do_print(t,"const")}),e(He,function(e,t){if(e.name.print(t),e.value){t.space(),t.print("="),t.space();var n=t.parent(1),r=n instanceof ye||n instanceof be;o(e.value,t,r)}}),e(We,function(e,t){e.expression.print(t),e instanceof Ge&&!c(e,t)||t.with_parens(function(){e.args.forEach(function(e,n){n&&t.comma(),e.print(t)})})}),e(Ge,function(e,t){t.print("new"),t.space(),We.prototype._codegen(e,t)}),Ye.DEFMETHOD("_do_print",function(e){this.car.print(e),this.cdr&&(e.comma(),e.should_break()&&(e.newline(),e.indent()),this.cdr.print(e))}),e(Ye,function(e,t){e._do_print(t)}),e(Ke,function(e,t){var n=e.expression;n.print(t),n instanceof At&&n.getValue()>=0&&(/[xa-f.)]/i.test(t.last())||t.print(".")),t.print("."),t.add_mapping(e.end),t.print_name(e.property)}),e(Je,function(e,t){e.expression.print(t),t.print("["),e.property.print(t),t.print("]")}),e(Ze,function(e,t){var n=e.operator;t.print(n),(/^[a-z]/i.test(n)||/[+-]$/.test(n)&&e.expression instanceof Ze&&/^[+-]/.test(e.expression.operator))&&t.space(),e.expression.print(t)}),e(et,function(e,t){e.expression.print(t),t.print(e.operator)}),e(tt,function(e,t){var n=e.operator;e.left.print(t),">"==n[0]&&e.left instanceof et&&"--"==e.left.operator?t.print(" "):t.space(),t.print(n),("<"==n||"<<"==n)&&e.right instanceof Ze&&"!"==e.right.operator&&e.right.expression instanceof Ze&&"--"==e.right.expression.operator?t.print(" "):t.space(),e.right.print(t)}),e(nt,function(e,t){e.condition.print(t),t.space(),t.print("?"),t.space(),e.consequent.print(t),t.space(),t.colon(),e.alternative.print(t)}),e(it,function(e,t){t.with_square(function(){var n=e.elements,r=n.length;r>0&&t.space(),n.forEach(function(e,n){n&&t.comma(),e.print(t),n===r-1&&e instanceof Bt&&t.comma()}),r>0&&t.space()})}),e(ot,function(e,t){e.properties.length>0?t.with_block(function(){e.properties.forEach(function(e,n){n&&(t.print(","),t.newline()),t.indent(),e.print(t)}),t.newline()}):t.print("{}")}),e(at,function(e,t){s(e.key,e.quote,t),t.colon(),e.value.print(t)}),st.DEFMETHOD("_print_getter_setter",function(e,t){t.print(e),t.space(),s(this.key.name,this.quote,t),this.value._do_print(t,!0)}),e(ut,function(e,t){e._print_getter_setter("set",t)}),e(ct,function(e,t){e._print_getter_setter("get",t)}),e(lt,function(e,t){var n=e.definition();t.print_name(n?n.mangled_name||n.name:e.name)}),e(Bt,h),e(wt,function(e,t){t.print("this")}),e(kt,function(e,t){t.print(e.getValue())}),e(Et,function(e,t){t.print_string(e.getValue(),e.quote,v)}),e(At,function(e,t){g&&e.start&&null!=e.start.raw?t.print(e.start.raw):t.print(p(e.getValue()))}),e(Ct,function(e,t){var n=e.getValue().toString();t.option("ascii_only")?n=t.to_ascii(n):t.option("unescape_regexps")&&(n=n.split("\\\\").map(function(e){return e.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(e){var t=parseInt(e.substr(2),16);return a(t)?String.fromCharCode(t):e})}).join("\\\\")),t.print(n);var r=t.parent();r instanceof tt&&/^in/.test(r.operator)&&r.left===e&&t.print(" ")}),d(ie,h),d(ae,m),d(se,m),d(lt,m),d(Se,m),d(he,m),d(fe,h),d(ke,m),d(Me,m),d(Re,m),d(le,m),d(we,h),d(Ge,m),d(je,m),d(Ve,m),d(ze,m),d(Ue,m),d(kt,m),d(ut,function(e,t){t.add_mapping(e.start,e.key.name)}),d(ct,function(e,t){t.add_mapping(e.start,e.key.name)}),d(st,function(e,t){t.add_mapping(e.start,e.key)})}(),X.prototype=new H,p(X.prototype,{option:function(e){return this.options[e]},compress:function(e){this.option("expression")&&(e=e.process_expression(!0));for(var t=+this.options.passes||1,n=0;n<t&&n<3;++n)(n>0||this.option("reduce_vars"))&&e.reset_opt_flags(this,!0),e=e.transform(this);return this.option("expression")&&(e=e.process_expression(!1)),e},info:function(){"verbose"==this.options.warnings&&ie.warn.apply(ie,arguments)},warn:function(e,t){if(this.options.warnings){var n=y(e,t);n in this.warnings_produced||(this.warnings_produced[n]=!0,ie.warn.apply(ie,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(e,t,n){if(e._squeezed)return e;var r=!1;e instanceof xe&&(e=e.hoist_declarations(this),r=!0),t(e,this),t(e,this);var i=e.optimize(this);return r&&i instanceof xe&&(i.drop_unused(this),t(i,this)),i===e&&(i._squeezed=!0),i}}),function(){function e(e,t){e.DEFMETHOD("optimize",function(e){var n=this;if(n._optimized)return n;if(e.has_directive("use asm"))return n;var r=t(n,e);return r._optimized=!0,r})}function t(e){if(!(e instanceof _t))return!1;for(var t=e.definition().orig,n=t.length;--n>=0;)if(t[n]instanceof dt)return!0}function n(e,t){for(var n,r=0;(n=e.parent(r++))&&!(n instanceof xe);)if(n instanceof Ve){n=n.argname.definition().scope;break}return n.find_variable(t)}function r(e,t,n){return n||(n={}),t&&(n.start||(n.start=t.start),n.end||(n.end=t.end)),new e(n)}function i(e,t){switch(typeof e){case"string":return r(Et,t,{value:e});case"number":return isNaN(e)?r(Ot,t):isFinite(e)?1/e<0?r(Ze,t,{operator:"-",expression:r(At,t,{value:-e})}):r(At,t,{value:e}):e<0?r(Ze,t,{operator:"-",expression:r(Dt,t)}):r(Dt,t);case"boolean":return r(e?Mt:Nt,t);case"undefined":return r(Ft,t);default:if(null===e)return r(Tt,t,{value:null});if(e instanceof RegExp)return r(Ct,t,{value:e});throw new Error(y("Can't handle constant of type: {type}",{type:typeof e}))}}function a(e,t,n){return e instanceof Ze&&"delete"==e.operator||e instanceof We&&e.expression===t&&(n instanceof Xe||n instanceof _t&&"eval"==n.name)?r(Ye,t,{car:r(At,t,{value:0}),cdr:n}):n}function u(e){if(null===e)return[];if(e instanceof le)return e.body;if(e instanceof pe)return[];if(e instanceof oe)return[e];throw new Error("Can't convert thing to statement array")}function c(e){return null===e||(e instanceof pe||e instanceof le&&0==e.body.length)}function l(e){return e instanceof Me?e:(e instanceof ye||e instanceof be||e instanceof me)&&e.body instanceof le?e.body:e}function p(e){return e instanceof We&&!(e instanceof Ge)&&(e.expression instanceof Ae||p(e.expression))}function v(e,t){function n(e,t){function i(e,t){return e instanceof _t&&B(e,t)}function o(n,o,l){if(i(n,o))return n;var p=a(o,n,x.value);return x.value=null,m.splice(_,1),0===m.length&&(e[f]=r(pe,s),u=!0),h.reset_opt_flags(t),t.info("Collapsing "+(l?"constant":"variable")+" "+w+" [{file}:{line},{col}]",n.start),c=!0,p}for(var s=t.self(),u=!1,l=t.option("toplevel"),p=e.length;--p>=0;){var h=e[p];if(!(h instanceof Ue)){if([h,h.body,h.alternative,h.bcatch,h.bfinally].forEach(function(e){e&&e.body&&n(e.body,t)}),p<=0)break;var f=p-1,d=e[f];if(d instanceof Ue){var m=d.definitions;if(null!=m)for(var g={},v=!1,y=!1,b={},_=m.length;--_>=0;){var x=m[_];if(null==x.value)break;var w=x.name.name;if(!w||!w.length)break;if(w in g)break;g[w]=!0;var k=s.find_variable&&s.find_variable(w);if(k&&k.references&&1===k.references.length&&"arguments"!=w&&(l||!k.global)){var E=k.references[0];if(E.scope.uses_eval||E.scope.uses_with)break;if(x.value.is_constant()){var A=new H(function(e){var t=A.parent();return t instanceof de&&(t.condition===e||t.init===e)?e:e===E?o(e,t,!0):void 0});h.transform(A)}else if(!(v|=y)){var C=x.value.has_side_effects(t);if(E.scope===s){var S=new T(function(e){e instanceof _t&&i(e,S.parent())&&(b[e.name]=y=!0)});x.value.walk(S);var O=!1,F=new H(function(e){if(O)return e;var t=F.parent();return e instanceof ke||e instanceof je||e instanceof _e||e instanceof Ie||e instanceof de||t instanceof Ne&&e!==t.condition||t instanceof nt&&e!==t.condition||e instanceof _t&&C&&!function(e,t){if(1===e.orig.length&&e.orig[0]instanceof gt)return!0;if(e.scope!==t)return!1;for(var n=e.references,r=0,i=n.length;r<i;r++)if(n[r].scope!==t)return!1;return!0}(e.definition(),s)||t instanceof tt&&("&&"==t.operator||"||"==t.operator)&&e===t.right||t instanceof Me&&e!==t.expression?(v=O=!0,e):void 0},function(e){return O?e:e===E?(O=!0,o(e,F.parent(),!1)):(v|=e.has_side_effects(t))?(O=!0,e):y&&e instanceof _t&&e.name in b?(v=!0,O=!0,e):void 0});h.transform(F)}else v|=C}}else v=!0}}}}if(u)for(var D=e.length;--D>=0;)e.length>1&&e[D]instanceof pe&&e.splice(D,1);return e}function i(e){var t=[];return e.reduce(function(e,n){return n instanceof le?(c=!0,e.push.apply(e,i(n.body))):n instanceof pe?c=!0:n instanceof ae?t.indexOf(n.value)<0?(e.push(n),t.push(n.value)):c=!0:e.push(n),e},[])}function o(e){for(var t=0,n=0;n<e.length;++n){var r=e[n];r instanceof Ye?t+=r.len():t++}return t}function s(e,t){function n(e){i.pop();var n=o.body;return n instanceof Ye?n.add(e):n=Ye.cons(n,e),n.transform(t)}var i=[],o=null;return e.forEach(function(e){if(o)if(e instanceof ye){var s={};try{o.body.walk(new T(function(e){if(e instanceof tt&&"in"==e.operator)throw s})),!e.init||e.init instanceof Ue?e.init||(e.init=o.body.drop_side_effect_free(t),i.pop()):e.init=n(e.init)}catch(e){if(e!==s)throw e}}else e instanceof Ne?e.condition=n(e.condition):e instanceof _e?e.expression=n(e.expression):e instanceof Te&&e.value?e.value=n(e.value):e instanceof Te?e.value=n(r(Ft,e).transform(t)):e instanceof Me&&(e.expression=n(e.expression));i.push(e),o=e instanceof ue?e:null}),i}var c,p=10;do{c=!1,t.option("angular")&&(e=function(e){function n(e){return/@ngInject/.test(e.value)}function i(e){return e.argnames.map(function(e){return r(Et,e,{value:e.name})})}function o(e,t){return r(it,e,{elements:t})}function s(e,t){return r(ue,e,{body:r(rt,e,{operator:"=",left:r(Ke,t,{expression:r(_t,t,t),property:"$inject"}),right:o(e,i(e))})})}function a(e){e&&e.args&&(e.args.forEach(function(e,t,r){var s=e.start.comments_before;e instanceof ke&&s.length&&n(s[0])&&(r[t]=o(e,i(e).concat(e)))}),e.expression&&e.expression.expression&&a(e.expression.expression))}return e.reduce(function(e,r){if(e.push(r),r.body&&r.body.args)a(r.body);else{var i=r.start,o=i.comments_before;o&&o.length>0&&n(o.pop())&&(r instanceof Ce?e.push(s(r,r.name)):r instanceof Ue?r.definitions.forEach(function(t){t.value&&t.value instanceof ke&&e.push(s(t.value,t.name))}):t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",i))}return e},[])}(e)),e=i(e),t.option("dead_code")&&(e=function(e,t){var n=!1,r=e.length,i=t.self();return e=e.reduce(function(e,r){if(n)O(t,r,e);else{if(r instanceof Be){var o=t.loopcontrol_target(r);r instanceof De&&!(o instanceof de)&&l(o)===i||r instanceof Le&&l(o)===i?r.label&&b(r.label.thedef.references,r):e.push(r)}else e.push(r);M(r)&&(n=!0)}return e},[]),c=e.length!=r,e}(e,t)),t.option("if_return")&&(e=function(e,t){var n=t.self(),i=function(e){for(var t=0,n=e.length;--n>=0;){var r=e[n];if(r instanceof Ne&&r.body instanceof Oe&&++t>1)return!0}return!1}(e),o=n instanceof ke,s=[];e:for(var a=e.length;--a>=0;){var p=e[a];switch(!0){case o&&p instanceof Oe&&!p.value&&0==s.length:c=!0;continue e;case p instanceof Ne:if(p.body instanceof Oe){if((o&&0==s.length||s[0]instanceof Oe&&!s[0].value)&&!p.body.value&&!p.alternative){c=!0;var h=r(ue,p.condition,{body:p.condition});s.unshift(h);continue e}if(s[0]instanceof Oe&&p.body.value&&s[0].value&&!p.alternative){c=!0,(p=p.clone()).alternative=s[0],s[0]=p.transform(t);continue e}if(i&&(0==s.length||s[0]instanceof Oe)&&p.body.value&&!p.alternative&&o){c=!0,(p=p.clone()).alternative=s[0]||r(Oe,p,{value:null}),s[0]=p.transform(t);continue e}if(!p.body.value&&o){c=!0,(p=p.clone()).condition=p.condition.negate(t);var f=C(g=u(p.alternative).concat(s));p.body=r(le,p,{body:g}),p.alternative=null,s=f.concat([p.transform(t)]);continue e}if(t.option("sequences")&&a>0&&e[a-1]instanceof Ne&&e[a-1].body instanceof Oe&&1==s.length&&o&&s[0]instanceof ue&&!p.alternative){c=!0,s.push(r(Oe,s[0],{value:null}).transform(t)),s.unshift(p);continue e}}var d=M(p.body),m=d instanceof Be?t.loopcontrol_target(d):null;if(d&&(d instanceof Oe&&!d.value&&o||d instanceof Le&&n===l(m)||d instanceof De&&m instanceof le&&n===m)){d.label&&b(d.label.thedef.references,d),c=!0;var g=u(p.body).slice(0,-1);(p=p.clone()).condition=p.condition.negate(t),p.body=r(le,p,{body:u(p.alternative).concat(s)}),p.alternative=r(le,p,{body:g}),s=[p.transform(t)];continue e}if(m=(d=M(p.alternative))instanceof Be?t.loopcontrol_target(d):null,d&&(d instanceof Oe&&!d.value&&o||d instanceof Le&&n===l(m)||d instanceof De&&m instanceof le&&n===m)){d.label&&b(d.label.thedef.references,d),c=!0,(p=p.clone()).body=r(le,p.body,{body:u(p.body).concat(s)}),p.alternative=r(le,p.alternative,{body:u(p.alternative).slice(0,-1)}),s=[p.transform(t)];continue e}s.unshift(p);break;default:s.unshift(p)}}return s}(e,t)),t.sequences_limit>0&&(e=function(e,t){function n(){(i=Ye.from_array(i))&&a.push(r(ue,i,{body:i})),i=[]}if(e.length<2)return e;var i=[],a=[];return e.forEach(function(e){if(e instanceof ue){o(i)>=t.sequences_limit&&n();var r=e.body;i.length>0&&(r=r.drop_side_effect_free(t)),r&&i.push(r)}else n(),a.push(e)}),n(),a=s(a,t),c=a.length!=e.length,a}(e,t)),t.option("join_vars")&&(e=function(e,t){var n=null;return e.reduce(function(e,t){return t instanceof Ue&&n&&n.TYPE==t.TYPE?(n.definitions=n.definitions.concat(t.definitions),c=!0):t instanceof ye&&n instanceof $e&&(!t.init||t.init.TYPE==n.TYPE)?(c=!0,e.pop(),t.init?t.init.definitions=n.definitions.concat(t.init.definitions):t.init=n,e.push(t),n=t):(n=t,e.push(t)),e},[])}(e)),t.option("collapse_vars")&&(e=n(e,t))}while(c&&p-- >0);return e}function C(e){for(var t=[],n=e.length-1;n>=0;--n){var r=e[n];r instanceof Ce&&(e.splice(n,1),t.unshift(r))}return t}function O(e,t,n){t instanceof Ce||e.warn("Dropping unreachable code [{file}:{line},{col}]",t.start),t.walk(new T(function(t){return t instanceof Ue?(e.warn("Declarations in unreachable code! [{file}:{line},{col}]",t.start),t.remove_initializers(),n.push(t),!0):t instanceof Ce?(n.push(t),!0):t instanceof xe||void 0}))}function F(e,t){return e.is_undefined||e instanceof Ft||e instanceof Ze&&"void"==e.operator&&!e.expression.has_side_effects(t)}function B(e,t){return t instanceof Qe&&z(t.operator)?t.expression:t instanceof rt&&t.left===e?e:void 0}function D(e,t){return e.print_to_string().length>t.print_to_string().length?t:e}function L(e,t){return D(r(ue,e,{body:e}),r(ue,t,{body:t})).body}function N(e,t,n){return(A(e)?L:D)(t,n)}function M(e){return e&&e.aborts()}function R(e,t){function n(n){n=u(n),e.body instanceof le?(e.body=e.body.clone(),e.body.body=n.concat(e.body.body.slice(1)),e.body=e.body.transform(t)):e.body=r(le,e.body,{body:n}).transform(t),R(e,t)}var i=e.body instanceof le?e.body.body[0]:e.body;i instanceof Ne&&(i.body instanceof De&&t.loopcontrol_target(i.body)===t.self()?(e.condition?e.condition=r(tt,e.condition,{left:e.condition,operator:"&&",right:i.condition.negate(t)}):e.condition=i.condition.negate(t),n(i.alternative)):i.alternative instanceof De&&t.loopcontrol_target(i.alternative)===t.self()&&(e.condition?e.condition=r(tt,e.condition,{left:e.condition,operator:"&&",right:i.condition}):e.condition=i.condition,n(i.body)))}function P(e,t){return e instanceof _t||e.TYPE===t.TYPE}function j(e,t){return t.option("booleans")&&t.in_boolean_context()?N(t,e,r(Ye,e,{car:e,cdr:r(Mt,e)}).optimize(t)):e}e(ie,function(e,t){return e}),ie.DEFMETHOD("equivalent_to",function(e){return this.TYPE==e.TYPE&&this.print_to_string()==e.print_to_string()}),ie.DEFMETHOD("process_expression",function(e,t){var n=this,i=new H(function(o){if(e&&o instanceof ue)return r(Oe,o,{value:o.body});if(!e&&o instanceof Oe){if(t){var s=o.value&&o.value.drop_side_effect_free(t,!0);return s?r(ue,o,{body:s}):r(pe,o)}return r(ue,o,{body:o.value||r(Ze,o,{operator:"void",expression:r(At,o,{value:0})})})}if(o instanceof ke&&o!==n)return o;if(o instanceof ce){var a=o.body.length-1;a>=0&&(o.body[a]=o.body[a].transform(i))}return o instanceof Ne&&(o.body=o.body.transform(i),o.alternative&&(o.alternative=o.alternative.transform(i))),o instanceof _e&&(o.body=o.body.transform(i)),o});return n.transform(i)}),ie.DEFMETHOD("reset_opt_flags",function(e,t){function n(e,t){p[e.id]=t}function i(e){if(p[e.id]){if(null==e.fixed){var t=e.orig[0];if(t instanceof mt||"arguments"==t.name)return!1;e.fixed=r(Ft,t)}return!0}}function o(){p=Object.create(p)}function s(){p=Object.getPrototypeOf(p)}function a(e){e.escaped=!1,e.scope.uses_eval?e.fixed=!1:l||!e.global||e.orig[0]instanceof dt?e.fixed=void 0:e.fixed=!1,e.references=[],e.should_replace=void 0}function u(e,t,n){var r=f.parent(t);return!!(B(e,r)||!n&&r instanceof We&&r.expression===e)||(r instanceof Xe&&r.expression===e?!n&&u(r,t+1):void 0)}var c=t&&e.option("reduce_vars"),l=e.option("toplevel"),p=Object.create(null),h=new T(function(e){if(e instanceof lt){var t=e.definition();e instanceof _t&&t.references.push(e),t.fixed=!1}}),f=new T(function(e,t){if(e._squeezed=!1,e._optimized=!1,c){if(e instanceof we&&e.globals.each(a),e instanceof xe&&e.variables.each(a),e instanceof _t)if((m=e.definition()).references.push(e),void 0===m.fixed||!i(m)||u(e,0,e.fixed_value()instanceof ke))m.fixed=!1;else{var d=f.parent();(d instanceof rt&&"="==d.operator&&e===d.right||d instanceof We&&e!==d.expression||d instanceof Oe&&e===d.value&&e.scope!==m.scope||d instanceof He&&e===d.value)&&(m.escaped=!0)}if(e instanceof yt&&(e.definition().fixed=!1),e instanceof He){if(null==(m=e.name.definition()).fixed)return e.value?(m.fixed=function(){return e.value},n(m,!1),t()):m.fixed=null,n(m,!0),!0;e.value&&(m.fixed=!1)}if(e instanceof Ce){var m=e.name.definition();!l&&m.global||i(m)?m.fixed=!1:(m.fixed=e,n(m,!0));v=p;return p=Object.create(null),t(),p=v,!0}if(e instanceof Ae){o();var g;return!e.name&&(g=f.parent())instanceof We&&g.expression===e&&e.argnames.forEach(function(t,i){var o=t.definition();e.uses_arguments||void 0!==o.fixed?o.fixed=!1:(o.fixed=function(){return g.args[i]||r(Ft,g)},n(o,!0))}),t(),s(),!0}if(e instanceof Ee){var v=p;return p=Object.create(null),t(),p=v,!0}if(e instanceof tt&&("&&"==e.operator||"||"==e.operator))return e.left.walk(f),o(),e.right.walk(f),s(),!0;if(e instanceof nt)return e.condition.walk(f),o(),e.consequent.walk(f),s(),o(),e.alternative.walk(f),s(),!0;if(e instanceof Ne||e instanceof me)return e.condition.walk(f),o(),e.body.walk(f),s(),e.alternative&&(o(),e.alternative.walk(f),s()),!0;if(e instanceof fe)return o(),e.body.walk(f),s(),!0;if(e instanceof ye)return e.init&&e.init.walk(f),o(),e.condition&&e.condition.walk(f),e.body.walk(f),e.step&&e.step.walk(f),s(),!0;if(e instanceof be)return e.init.walk(h),e.object.walk(f),o(),e.body.walk(f),s(),!0;if(e instanceof je)return o(),S(e,f),s(),e.bcatch&&(o(),e.bcatch.walk(f),s()),e.bfinally&&e.bfinally.walk(f),!0;if(e instanceof Re)return o(),t(),s(),!0}});this.walk(f)}),_t.DEFMETHOD("fixed_value",function(){var e=this.definition().fixed;return!e||e instanceof ie?e:e()}),function(e){function t(e){return/strict/.test(e)}ie.DEFMETHOD("may_throw_on_access",function(e){var t=e.option("pure_getters");return!t||this._throw_on_access(t)}),e(ie,t),e(Tt,d),e(Ft,d),e(kt,f),e(it,f),e(ot,function(e){if(!t(e))return!1;for(var n=this.properties.length;--n>=0;)if(this.properties[n].value instanceof Ee)return!0;return!1}),e(Ae,f),e(et,f),e(Ze,function(){return"void"==this.operator}),e(tt,function(e){switch(this.operator){case"&&":return this.left._throw_on_access(e);case"||":return this.left._throw_on_access(e)&&this.right._throw_on_access(e);default:return!1}}),e(rt,function(e){return"="==this.operator&&this.right._throw_on_access(e)}),e(nt,function(e){return this.consequent._throw_on_access(e)||this.alternative._throw_on_access(e)}),e(Ye,function(e){return this.cdr._throw_on_access(e)}),e(_t,function(e){if(this.is_undefined)return!0;if(!t(e))return!1;var n=this.fixed_value();return!n||n._throw_on_access(e)})}(function(e,t){e.DEFMETHOD("_throw_on_access",t)}),function(e){var t=["!","delete"],n=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];e(ie,f),e(Ze,function(){return o(this.operator,t)}),e(tt,function(){return o(this.operator,n)||("&&"==this.operator||"||"==this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),e(nt,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),e(rt,function(){return"="==this.operator&&this.right.is_boolean()}),e(Ye,function(){return this.cdr.is_boolean()}),e(Mt,d),e(Nt,d)}(function(e,t){e.DEFMETHOD("is_boolean",t)}),function(e){e(ie,f),e(At,d);var t=x("+ - ~ ++ --");e(Qe,function(){return t(this.operator)});var n=x("- * / % & | ^ << >> >>>");e(tt,function(e){return n(this.operator)||"+"==this.operator&&this.left.is_number(e)&&this.right.is_number(e)}),e(rt,function(e){return n(this.operator.slice(0,-1))||"="==this.operator&&this.right.is_number(e)}),e(Ye,function(e){return this.cdr.is_number(e)}),e(nt,function(e){return this.consequent.is_number(e)&&this.alternative.is_number(e)})}(function(e,t){e.DEFMETHOD("is_number",t)}),function(e){e(ie,f),e(Et,d),e(Ze,function(){return"typeof"==this.operator}),e(tt,function(e){return"+"==this.operator&&(this.left.is_string(e)||this.right.is_string(e))}),e(rt,function(e){return("="==this.operator||"+="==this.operator)&&this.right.is_string(e)}),e(Ye,function(e){return this.cdr.is_string(e)}),e(nt,function(e){return this.consequent.is_string(e)&&this.alternative.is_string(e)})}(function(e,t){e.DEFMETHOD("is_string",t)});var z=x("delete ++ --");!function(e){function t(e,n){if(e instanceof ie)return r(e.CTOR,n,e);if(Array.isArray(e))return r(it,n,{elements:e.map(function(e){return t(e,n)})});if(e&&"object"==typeof e){var o=[];for(var s in e)o.push(r(at,n,{key:s,value:t(e[s],n)}));return r(ot,n,{properties:o})}return i(e,n)}ie.DEFMETHOD("resolve_defines",function(e){if(e.option("global_defs")){var t=this._find_defs(e,"");if(t){var n,r=this,i=0;do{n=r,r=e.parent(i++)}while(r instanceof Xe&&r.expression===n);if(!B(n,r))return t;e.warn("global_defs "+this.print_to_string()+" redefined [{file}:{line},{col}]",this.start)}}}),e(ie,h),e(Ke,function(e,t){return this.expression._find_defs(e,"."+this.property+t)}),e(_t,function(e,n){if(this.global()){var r,i=e.option("global_defs");if(i&&E(i,r=this.name+n)){var o=t(i[r],this),s=e.find_parent(we);return o.walk(new T(function(e){e instanceof _t&&(e.scope=s,e.thedef=s.def_global(e))})),o}}})}(function(e,t){e.DEFMETHOD("_find_defs",t)}),function(e){function t(e,t){if(!t)throw new Error("Compressor must be passed");return e._eval(t)}ie.DEFMETHOD("evaluate",function(t){if(!t.option("evaluate"))return this;try{var n=this._eval(t);return!n||n instanceof RegExp||"object"!=typeof n?n:this}catch(t){if(t!==e)throw t;return this}});var n=x("! ~ - + void");ie.DEFMETHOD("is_constant",function(){return this instanceof kt?!(this instanceof Ct):this instanceof Ze&&this.expression instanceof kt&&n(this.operator)}),ie.DEFMETHOD("constant_value",function(e){if(this instanceof kt&&!(this instanceof Ct))return this.value;if(this instanceof Ze&&this.expression instanceof kt)switch(this.operator){case"!":return!this.expression.value;case"~":return~this.expression.value;case"-":return-this.expression.value;case"+":return+this.expression.value;default:throw new Error(y("Cannot evaluate unary expression {value}",{value:this.print_to_string()}))}var t=this.evaluate(e);if(t!==this)return t;throw new Error(y("Cannot evaluate constant [{file}:{line},{col}]",this.start))}),e(oe,function(){throw new Error(y("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),e(ke,function(){throw e}),e(ie,function(){throw e}),e(kt,function(){return this.getValue()}),e(it,function(n){if(n.option("unsafe"))return this.elements.map(function(e){return t(e,n)});throw e}),e(ot,function(n){if(n.option("unsafe")){for(var r={},i=0,o=this.properties.length;i<o;i++){var s=this.properties[i],a=s.key;if(a instanceof lt?a=a.name:a instanceof ie&&(a=t(a,n)),"function"==typeof Object.prototype[a])throw e;r[a]=t(s.value,n)}return r}throw e}),e(Ze,function(n){var r=this.expression;switch(this.operator){case"!":return!t(r,n);case"typeof":if(r instanceof Ae)return"function";if((r=t(r,n))instanceof RegExp)throw e;return typeof r;case"void":return void t(r,n);case"~":return~t(r,n);case"-":return-t(r,n);case"+":return+t(r,n)}throw e}),e(tt,function(n){var r,i=this.left,o=this.right;switch(this.operator){case"&&":r=t(i,n)&&t(o,n);break;case"||":r=t(i,n)||t(o,n);break;case"|":r=t(i,n)|t(o,n);break;case"&":r=t(i,n)&t(o,n);break;case"^":r=t(i,n)^t(o,n);break;case"+":r=t(i,n)+t(o,n);break;case"*":r=t(i,n)*t(o,n);break;case"/":r=t(i,n)/t(o,n);break;case"%":r=t(i,n)%t(o,n);break;case"-":r=t(i,n)-t(o,n);break;case"<<":r=t(i,n)<<t(o,n);break;case">>":r=t(i,n)>>t(o,n);break;case">>>":r=t(i,n)>>>t(o,n);break;case"==":r=t(i,n)==t(o,n);break;case"===":r=t(i,n)===t(o,n);break;case"!=":r=t(i,n)!=t(o,n);break;case"!==":r=t(i,n)!==t(o,n);break;case"<":r=t(i,n)<t(o,n);break;case"<=":r=t(i,n)<=t(o,n);break;case">":r=t(i,n)>t(o,n);break;case">=":r=t(i,n)>=t(o,n);break;default:throw e}if(isNaN(r)&&n.find_parent(_e))throw e;return r}),e(nt,function(e){return t(this.condition,e)?t(this.consequent,e):t(this.alternative,e)}),e(_t,function(n){if(!n.option("reduce_vars")||this._evaluating)throw e;this._evaluating=!0;try{var r=this.fixed_value();if(!r)throw e;var i=t(r,n);if(E(r,"_eval")||(r._eval=function(){return i}),i&&"object"==typeof i&&this.definition().escaped)throw e;return i}finally{this._evaluating=!1}}),e(Xe,function(n){if(n.option("unsafe")){var r=this.property;r instanceof ie&&(r=t(r,n));var i=t(this.expression,n);if(i&&E(i,r))return i[r]}throw e})}(function(e,t){e.DEFMETHOD("_eval",t)}),function(e){function t(e){return r(Ze,e,{operator:"!",expression:e})}function n(e,n,i){var o=t(e);if(i){var s=r(ue,n,{body:n});return D(o,s)===s?n:o}return D(o,n)}e(ie,function(){return t(this)}),e(oe,function(){throw new Error("Cannot negate a statement")}),e(Ae,function(){return t(this)}),e(Ze,function(){return"!"==this.operator?this.expression:t(this)}),e(Ye,function(e){var t=this.clone();return t.cdr=t.cdr.negate(e),t}),e(nt,function(e,t){var r=this.clone();return r.consequent=r.consequent.negate(e),r.alternative=r.alternative.negate(e),n(this,r,t)}),e(tt,function(e,r){var i=this.clone(),o=this.operator;if(e.option("unsafe_comps"))switch(o){case"<=":return i.operator=">",i;case"<":return i.operator=">=",i;case">=":return i.operator="<",i;case">":return i.operator="<=",i}switch(o){case"==":return i.operator="!=",i;case"!=":return i.operator="==",i;case"===":return i.operator="!==",i;case"!==":return i.operator="===",i;case"&&":return i.operator="||",i.left=i.left.negate(e,r),i.right=i.right.negate(e),n(this,i,r);case"||":return i.operator="&&",i.left=i.left.negate(e,r),i.right=i.right.negate(e),n(this,i,r)}return t(this)})}(function(e,t){e.DEFMETHOD("negate",function(e,n){return t.call(this,e,n)})}),We.DEFMETHOD("has_pure_annotation",function(e){if(!e.option("side_effects"))return!1;if(void 0!==this.pure)return this.pure;var t,n,r=!1;return this.start&&(t=this.start.comments_before)&&t.length&&/[@#]__PURE__/.test((n=t[t.length-1]).value)&&(r=n),this.pure=r}),function(e){function t(e,t){for(var n=e.length;--n>=0;)if(e[n].has_side_effects(t))return!0;return!1}e(ie,d),e(pe,f),e(kt,f),e(wt,f),e(We,function(e){if(!this.has_pure_annotation(e)&&e.pure_funcs(this))return!0;for(var t=this.args.length;--t>=0;)if(this.args[t].has_side_effects(e))return!0;return!1}),e(ce,function(e){return t(this.body,e)}),e(Me,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(Ie,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(je,function(e){return t(this.body,e)||this.bcatch&&this.bcatch.has_side_effects(e)||this.bfinally&&this.bfinally.has_side_effects(e)}),e(Ne,function(e){return this.condition.has_side_effects(e)||this.body&&this.body.has_side_effects(e)||this.alternative&&this.alternative.has_side_effects(e)}),e(fe,function(e){return this.body.has_side_effects(e)}),e(ue,function(e){return this.body.has_side_effects(e)}),e(Ce,d),e(Ae,f),e(tt,function(e){return this.left.has_side_effects(e)||this.right.has_side_effects(e)}),e(rt,d),e(nt,function(e){return this.condition.has_side_effects(e)||this.consequent.has_side_effects(e)||this.alternative.has_side_effects(e)}),e(Qe,function(e){return z(this.operator)||this.expression.has_side_effects(e)}),e(_t,function(e){return this.undeclared()}),e(ot,function(e){return t(this.properties,e)}),e(st,function(e){return this.value.has_side_effects(e)}),e(it,function(e){return t(this.elements,e)}),e(Ke,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)}),e(Je,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)||this.property.has_side_effects(e)}),e(Ye,function(e){return this.car.has_side_effects(e)||this.cdr.has_side_effects(e)})}(function(e,t){e.DEFMETHOD("has_side_effects",t)}),function(e){function t(){var e=this.body.length;return e>0&&M(this.body[e-1])}e(oe,g),e(Se,m),e(le,t),e(Re,t),e(Ne,function(){return this.alternative&&M(this.body)&&M(this.alternative)&&this})}(function(e,t){e.DEFMETHOD("aborts",t)}),e(ae,function(e,t){return t.has_directive(e.value)!==e?r(pe,e):e}),e(se,function(e,t){return t.option("drop_debugger")?r(pe,e):e}),e(fe,function(e,t){return e.body instanceof De&&t.loopcontrol_target(e.body)===e.body?r(pe,e):0==e.label.references.length?e.body:e}),e(ce,function(e,t){return e.body=v(e.body,t),e}),e(le,function(e,t){switch(e.body=v(e.body,t),e.body.length){case 1:return e.body[0];case 0:return r(pe,e)}return e}),xe.DEFMETHOD("drop_unused",function(e){var n=this;if(e.has_directive("use asm"))return n;var i=e.option("toplevel");if(e.option("unused")&&(!(n instanceof we)||i)&&!n.uses_eval&&!n.uses_with){var o=!/keep_assign/.test(e.option("unused")),s=/funcs/.test(i),u=/vars/.test(i);n instanceof we&&1!=i||(s=u=!0);var l=[],p=Object.create(null);n instanceof we&&e.top_retain&&n.variables.each(function(t){!e.top_retain(t)||t.id in p||(p[t.id]=!0,l.push(t))});var h=new k,f=this,d=new T(function(r,i){if(r!==n){if(r instanceof Ce)return s||f!==n||(a=r.name.definition()).id in p||(p[a.id]=!0,l.push(a)),h.add(r.name.name,r),!0;if(r instanceof Ue&&f===n)return r.definitions.forEach(function(t){if(!u){var n=t.name.definition();n.id in p||(p[n.id]=!0,l.push(n))}t.value&&(h.add(t.name.name,t.value),t.value.has_side_effects(e)&&t.value.walk(d))}),!0;if(o&&r instanceof rt&&"="==r.operator&&r.left instanceof _t&&!t(r.left)&&f===n)return r.right.walk(d),!0;if(r instanceof _t){var a=r.definition();return a.id in p||(p[a.id]=!0,l.push(a)),!0}if(r instanceof xe){var c=f;return f=r,i(),f=c,!0}}});n.walk(d);for(var m=0;m<l.length;++m)l[m].orig.forEach(function(e){var t=h.get(e.name);t&&t.forEach(function(e){var t=new T(function(e){if(e instanceof _t){var t=e.definition();t.id in p||(p[t.id]=!0,l.push(t))}});e.walk(t)})});var g=new H(function(t,i,l){if(t instanceof Ae&&t.name&&!e.option("keep_fnames")&&((b=t.name.definition()).id in p&&!(b.orig.length>1)||(t.name=null)),t instanceof ke&&!(t instanceof Ee))for(var h=!e.option("keep_fargs"),f=t.argnames,d=f.length;--d>=0;){var m=f[d];m.definition().id in p?h=!1:(m.__unused=!0,h&&(f.pop(),e[m.unreferenced()?"warn":"info"]("Dropping unused function argument {name} [{file}:{line},{col}]",{name:m.name,file:m.start.file,line:m.start.line,col:m.start.col})))}if(s&&t instanceof Ce&&t!==n)return t.name.definition().id in p?t:(e[t.name.unreferenced()?"warn":"info"]("Dropping unused function {name} [{file}:{line},{col}]",{name:t.name.name,file:t.name.start.file,line:t.name.start.line,col:t.name.start.col}),r(pe,t));if(u&&t instanceof Ue&&!(g.parent()instanceof be&&g.parent().init===t)){b=_(b=t.definitions.filter(function(t){t.value&&(t.value=t.value.transform(g));var n=t.name.definition();if(n.id in p)return!0;if(n.orig[0]instanceof yt)return t.value=t.value&&t.value.drop_side_effect_free(e),!0;var r={name:t.name.name,file:t.name.start.file,line:t.name.start.line,col:t.name.start.col};return t.value&&(t._unused_side_effects=t.value.drop_side_effect_free(e))?(e.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",r),!0):(e[t.name.unreferenced()?"warn":"info"]("Dropping unused variable {name} [{file}:{line},{col}]",r),!1)}),function(e,t){return!e.value&&t.value?-1:!t.value&&e.value?1:0});for(var v=[],d=0;d<b.length;){var y=b[d];y._unused_side_effects?(v.push(y._unused_side_effects),b.splice(d,1)):(v.length>0&&(v.push(y.value),y.value=Ye.from_array(v),v=[]),++d)}return v=v.length>0?r(le,t,{body:[r(ue,t,{body:Ye.from_array(v)})]}):null,0!=b.length||v?0==b.length?l?ne.splice(v.body):v:(t.definitions=b,v?(v.body.unshift(t),l?ne.splice(v.body):v):t):r(pe,t)}if(u&&o&&t instanceof rt&&"="==t.operator&&t.left instanceof _t){var b=t.left.definition();if(!(b.id in p)&&n.variables.get(b.name)===b)return a(g.parent(),t,t.right.transform(g))}if(t instanceof ye){if(i(t,this),t.init instanceof le){x=t.init;return t.init=x.body.pop(),x.body.push(t),l?ne.splice(x.body):x}return c(t.init)&&(t.init=null),t}if(t instanceof fe&&t.body instanceof ye){if(i(t,this),t.body instanceof le){var x=t.body;return t.body=x.body.pop(),x.body.push(t),l?ne.splice(x.body):x}return t}return t instanceof xe&&t!==n?t:void 0});n.transform(g)}}),xe.DEFMETHOD("hoist_declarations",function(e){var t=this;if(e.has_directive("use asm"))return t;var n=e.option("hoist_funs"),i=e.option("hoist_vars");if(n||i){var o=[],a=[],u=new k,c=0,l=0;t.walk(new T(function(e){return e instanceof xe&&e!==t||(e instanceof $e?(++l,!0):void 0)})),i=i&&l>1;var p=new H(function(s){if(s!==t){if(s instanceof ae)return o.push(s),r(pe,s);if(s instanceof Ce&&n)return a.push(s),r(pe,s);if(s instanceof $e&&i){s.definitions.forEach(function(e){u.set(e.name.name,e),++c});var l=s.to_assignments(e),h=p.parent();if(h instanceof be&&h.init===s){if(null==l){var f=s.definitions[0].name;return r(_t,f,f)}return l}return h instanceof ye&&h.init===s?l:l?r(ue,s,{body:l}):r(pe,s)}if(s instanceof xe)return s}});if(t=t.transform(p),c>0){var h=[];if(u.each(function(e,n){t instanceof ke&&s(function(t){return t.name==e.name.name},t.argnames)?u.del(n):((e=e.clone()).value=null,h.push(e),u.set(n,e))}),h.length>0){for(;0<t.body.length;){if(t.body[0]instanceof ue){var f,d,m=t.body[0].body;if(m instanceof rt&&"="==m.operator&&(f=m.left)instanceof lt&&u.has(f.name)){if((g=u.get(f.name)).value)break;g.value=m.right,b(h,g),h.push(g),t.body.splice(0,1);continue}if(m instanceof Ye&&(d=m.car)instanceof rt&&"="==d.operator&&(f=d.left)instanceof lt&&u.has(f.name)){var g=u.get(f.name);if(g.value)break;g.value=d.right,b(h,g),h.push(g),t.body[0].body=m.cdr;continue}}if(t.body[0]instanceof pe)t.body.splice(0,1);else{if(!(t.body[0]instanceof le))break;var v=[0,1].concat(t.body[0].body);t.body.splice.apply(t.body,v)}}h=r($e,t,{definitions:h}),a.push(h)}}t.body=o.concat(a,t.body)}return t}),function(e){function t(e,t,n){for(var r=[],i=!1,o=0,s=e.length;o<s;o++){var a=e[o].drop_side_effect_free(t,n);i|=a!==e[o],a&&(r.push(a),n=!1)}return i?r.length?r:null:e}e(ie,m),e(kt,g),e(wt,g),e(We,function(e,n){if(!this.has_pure_annotation(e)&&e.pure_funcs(this)){if(this.expression instanceof Ae&&(!this.expression.name||!this.expression.name.definition().references.length)){var r=this.clone();return r.expression=r.expression.process_expression(!1,e),r}return this}this.pure&&(e.warn("Dropping __PURE__ call [{file}:{line},{col}]",this.start),this.pure.value=this.pure.value.replace(/[@#]__PURE__/g," "));var i=t(this.args,e,n);return i&&Ye.from_array(i)}),e(Ee,g),e(Ae,g),e(tt,function(e,t){var n=this.right.drop_side_effect_free(e);if(!n)return this.left.drop_side_effect_free(e,t);switch(this.operator){case"&&":case"||":if(n===this.right)return this;var i=this.clone();return i.right=n,i;default:var o=this.left.drop_side_effect_free(e,t);return o?r(Ye,this,{car:o,cdr:n}):this.right.drop_side_effect_free(e,t)}}),e(rt,m),e(nt,function(e){var t=this.consequent.drop_side_effect_free(e),n=this.alternative.drop_side_effect_free(e);if(t===this.consequent&&n===this.alternative)return this;if(!t)return n?r(tt,this,{operator:"||",left:this.condition,right:n}):this.condition.drop_side_effect_free(e);if(!n)return r(tt,this,{operator:"&&",left:this.condition,right:t});var i=this.clone();return i.consequent=t,i.alternative=n,i}),e(Qe,function(e,t){if(z(this.operator))return this;if("typeof"==this.operator&&this.expression instanceof _t)return null;var n=this.expression.drop_side_effect_free(e,t);return t&&this instanceof Ze&&p(n)?n===this.expression&&1===this.operator.length?this:r(Ze,this,{operator:1===this.operator.length?this.operator:"!",expression:n}):n}),e(_t,function(){return this.undeclared()?this:null}),e(ot,function(e,n){var r=t(this.properties,e,n);return r&&Ye.from_array(r)}),e(st,function(e,t){return this.value.drop_side_effect_free(e,t)}),e(it,function(e,n){var r=t(this.elements,e,n);return r&&Ye.from_array(r)}),e(Ke,function(e,t){return this.expression.may_throw_on_access(e)?this:this.expression.drop_side_effect_free(e,t)}),e(Je,function(e,t){if(this.expression.may_throw_on_access(e))return this;var n=this.expression.drop_side_effect_free(e,t);if(!n)return this.property.drop_side_effect_free(e,t);var i=this.property.drop_side_effect_free(e);return i?r(Ye,this,{car:n,cdr:i}):n}),e(Ye,function(e){var t=this.cdr.drop_side_effect_free(e);return t===this.cdr?this:t?r(Ye,this,{car:this.car,cdr:t}):this.car})}(function(e,t){e.DEFMETHOD("drop_side_effect_free",t)}),e(ue,function(e,t){if(t.option("side_effects")){var n=e.body,i=n.drop_side_effect_free(t,!0);if(!i)return t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",e.start),r(pe,e);if(i!==n)return r(ue,e,{body:i})}return e}),e(me,function(e,t){if(!t.option("loops"))return e;var n=e.condition.evaluate(t);if(n!==e.condition){if(n)return r(ye,e,{body:e.body});if(t.option("dead_code")&&e instanceof ve){var i=[];return O(t,e.body,i),r(le,e,{body:i}).optimize(t)}if(e instanceof ge){var o=!1,s=new T(function(t){return!!(t instanceof xe||o)||(t instanceof Be&&s.loopcontrol_target(t)===e?o=!0:void 0)}),a=t.parent();if((a instanceof fe?a:e).walk(s),!o)return e.body}}return e instanceof ve?r(ye,e,e).optimize(t):e}),e(ye,function(e,t){if(!t.option("loops"))return e;if(e.condition){var n=e.condition.evaluate(t);if(t.option("dead_code")&&!n){var o=[];return e.init instanceof oe?o.push(e.init):e.init&&o.push(r(ue,e.init,{body:e.init})),O(t,e.body,o),r(le,e,{body:o}).optimize(t)}n!==e.condition&&(n=i(n,e.condition).transform(t),e.condition=D(n,e.condition))}return R(e,t),e}),e(Ne,function(e,t){if(c(e.alternative)&&(e.alternative=null),!t.option("conditionals"))return e;var n=e.condition.evaluate(t);if(n!==e.condition){if(n){if(t.warn("Condition always true [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){o=[];return e.alternative&&O(t,e.alternative,o),o.push(e.body),r(le,e,{body:o}).optimize(t)}}else if(t.warn("Condition always false [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){var o=[];return O(t,e.body,o),e.alternative&&o.push(e.alternative),r(le,e,{body:o}).optimize(t)}n=i(n,e.condition).transform(t),e.condition=D(n,e.condition)}var s=e.condition.negate(t),a=e.condition.print_to_string().length,u=s.print_to_string().length,l=u<a;if(e.alternative&&l){l=!1,e.condition=s;var p=e.body;e.body=e.alternative||r(pe,e),e.alternative=p}if(c(e.body)&&c(e.alternative))return r(ue,e.condition,{body:e.condition.clone()}).optimize(t);if(e.body instanceof ue&&e.alternative instanceof ue)return r(ue,e,{body:r(nt,e,{condition:e.condition,consequent:e.body.body,alternative:e.alternative.body})}).optimize(t);if(c(e.alternative)&&e.body instanceof ue)return a===u&&!l&&e.condition instanceof tt&&"||"==e.condition.operator&&(l=!0),l?r(ue,e,{body:r(tt,e,{operator:"||",left:s,right:e.body.body})}).optimize(t):r(ue,e,{body:r(tt,e,{operator:"&&",left:e.condition,right:e.body.body})}).optimize(t);if(e.body instanceof pe&&e.alternative instanceof ue)return r(ue,e,{body:r(tt,e,{operator:"||",left:e.condition,right:e.alternative.body})}).optimize(t);if(e.body instanceof Te&&e.alternative instanceof Te&&e.body.TYPE==e.alternative.TYPE)return r(e.body.CTOR,e,{value:r(nt,e,{condition:e.condition,consequent:e.body.value||r(Ft,e.body),alternative:e.alternative.value||r(Ft,e.alternative)}).transform(t)}).optimize(t);if(e.body instanceof Ne&&!e.body.alternative&&!e.alternative&&(e=r(Ne,e,{condition:r(tt,e.condition,{operator:"&&",left:e.condition,right:e.body.condition}),body:e.body.body,alternative:null})),M(e.body)&&e.alternative){var h=e.alternative;return e.alternative=null,r(le,e,{body:[e,h]}).optimize(t)}if(M(e.alternative)){var f=e.body;return e.body=e.alternative,e.condition=l?s:e.condition.negate(t),e.alternative=null,r(le,e,{body:[e,f]}).optimize(t)}return e}),e(Me,function(e,t){function n(e,n){n&&!M(n)?n.body=n.body.concat(e.body):O(t,e,l)}if(!t.option("switches"))return e;var o,s=e.expression.evaluate(t);if(s!==e.expression){var a=i(s,e.expression).transform(t);e.expression=D(a,e.expression)}if(!t.option("dead_code"))return e;for(var u,c,l=[],p=[],h=0,f=e.body.length;h<f&&!c;h++){if((o=e.body[h])instanceof Pe)u?n(o,p[p.length-1]):u=o;else if(s!==e.expression){var d=o.expression.evaluate(t);if(d===s){if(c=o,u){var m=p.indexOf(u);p.splice(m,1),n(u,p[m-1]),u=null}}else if(d!==o.expression){n(o,p[p.length-1]);continue}}if(M(o)){var g=p[p.length-1];M(g)&&g.body.length==o.body.length&&r(le,g,g).equivalent_to(r(le,o,o))&&(g.body=[])}p.push(o)}for(;h<f;)n(e.body[h++],p[p.length-1]);for(p.length>0&&(p[0].body=l.concat(p[0].body)),e.body=p;o=p[p.length-1];){var v=o.body[o.body.length-1];if(v instanceof De&&t.loopcontrol_target(v)===e&&o.body.pop(),o.body.length||o instanceof Ie&&(u||o.expression.has_side_effects(t)))break;p.pop()===u&&(u=null)}if(0==p.length)return r(le,e,{body:l.concat(r(ue,e.expression,{body:e.expression}))}).optimize(t);if(1==p.length&&(p[0]===c||p[0]===u)){var y=!1,b=new T(function(t){if(y||t instanceof ke||t instanceof ue)return!0;t instanceof De&&b.loopcontrol_target(t)===e&&(y=!0)});if(e.walk(b),!y)return(p=p[0].body.slice()).unshift(r(ue,e.expression,{body:e.expression})),r(le,e,{body:p}).optimize(t)}return e}),e(je,function(e,t){if(e.body=v(e.body,t),e.bcatch&&e.bfinally&&w(e.bfinally.body,c)&&(e.bfinally=null),w(e.body,c)){var n=[];return e.bcatch&&O(t,e.bcatch,n),e.bfinally&&(n=n.concat(e.bfinally.body)),r(le,e,{body:n}).optimize(t)}return e}),Ue.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(e){e.value=null})}),Ue.DEFMETHOD("to_assignments",function(e){var t=e.option("reduce_vars"),n=this.definitions.reduce(function(e,n){if(n.value){var i=r(_t,n.name,n.name);e.push(r(rt,n,{operator:"=",left:i,right:n.value})),t&&(i.definition().fixed=!1)}return e},[]);return 0==n.length?null:Ye.from_array(n)}),e(Ue,function(e,t){return 0==e.definitions.length?r(pe,e):e}),e(We,function(e,t){var n=e.expression;if(t.option("reduce_vars")&&n instanceof _t){var o=n.definition(),s=n.fixed_value();s instanceof Ce&&(o.fixed=s=r(Ae,s,s).clone(!0)),s instanceof Ae&&(n=s,!t.option("unused")||1!=o.references.length||o.scope.uses_arguments&&o.orig[0]instanceof mt||o.scope.uses_eval||t.find_parent(xe)!==o.scope||(e.expression=n))}if(t.option("unused")&&n instanceof Ae&&!n.uses_arguments&&!n.uses_eval){for(var a=0,u=0,l=0,h=e.args.length;l<h;l++){var f=l>=n.argnames.length;if(f||n.argnames[l].__unused){if(E=e.args[l].drop_side_effect_free(t))e.args[a++]=E;else if(!f){e.args[a++]=r(At,e.args[l],{value:0});continue}}else e.args[a++]=e.args[l];u=a}e.args.length=u}if(t.option("unsafe"))if(n instanceof _t&&n.undeclared())switch(n.name){case"Array":if(1!=e.args.length)return r(it,e,{elements:e.args}).optimize(t);break;case"Object":if(0==e.args.length)return r(ot,e,{properties:[]});break;case"String":if(0==e.args.length)return r(Et,e,{value:""});if(e.args.length<=1)return r(tt,e,{left:e.args[0],operator:"+",right:r(Et,e,{value:""})}).optimize(t);break;case"Number":if(0==e.args.length)return r(At,e,{value:0});if(1==e.args.length)return r(Ze,e,{expression:e.args[0],operator:"+"}).optimize(t);case"Boolean":if(0==e.args.length)return r(Nt,e);if(1==e.args.length)return r(Ze,e,{expression:r(Ze,e,{expression:e.args[0],operator:"!"}),operator:"!"}).optimize(t);break;case"Function":if(0==e.args.length)return r(Ae,e,{argnames:[],body:[]});if(w(e.args,function(e){return e instanceof Et}))try{var d=q(y="(function("+e.args.slice(0,-1).map(function(e){return e.value}).join(",")+"){"+e.args[e.args.length-1].value+"})()");d.figure_out_scope({screw_ie8:t.option("screw_ie8")});var m=new X(t.options);(d=d.transform(m)).figure_out_scope({screw_ie8:t.option("screw_ie8")}),d.mangle_names();var g;try{d.walk(new T(function(e){if(e instanceof ke)throw g=e,d}))}catch(e){if(e!==d)throw e}if(!g)return e;var v=g.argnames.map(function(t,n){return r(Et,e.args[n],{value:t.print_to_string()})}),y=Y();return le.prototype._codegen.call(g,g,y),y=y.toString().replace(/^\{|\}$/g,""),v.push(r(Et,e.args[e.args.length-1],{value:y})),e.args=v,e}catch(n){if(!(n instanceof V))throw console.log(n),n;t.warn("Error parsing code passed to new Function [{file}:{line},{col}]",e.args[e.args.length-1].start),t.warn(n.toString())}}else{if(n instanceof Ke&&"toString"==n.property&&0==e.args.length)return r(tt,e,{left:r(Et,e,{value:""}),operator:"+",right:n.expression}).optimize(t);if(n instanceof Ke&&n.expression instanceof it&&"join"==n.property){var b;if(!(e.args.length>0&&(b=e.args[0].evaluate(t))===e.args[0])){var _=[],x=[];if(n.expression.elements.forEach(function(n){var i=n.evaluate(t);i!==n?x.push(i):(x.length>0&&(_.push(r(Et,e,{value:x.join(b)})),x.length=0),_.push(n))}),x.length>0&&_.push(r(Et,e,{value:x.join(b)})),0==_.length)return r(Et,e,{value:""});if(1==_.length)return _[0].is_string(t)?_[0]:r(tt,_[0],{operator:"+",left:r(Et,e,{value:""}),right:_[0]});if(""==b){var k;return k=_[0].is_string(t)||_[1].is_string(t)?_.shift():r(Et,e,{value:""}),_.reduce(function(e,t){return r(tt,t,{operator:"+",left:e,right:t})},k).optimize(t)}var E=e.clone();return E.expression=E.expression.clone(),E.expression.expression=E.expression.expression.clone(),E.expression.expression.elements=_,N(t,e,E)}}else if(n instanceof Ke&&n.expression.is_string(t)&&"charAt"==n.property){var A=e.args[0],C=A?A.evaluate(t):0;if(C!==A)return r(Je,n,{expression:n.expression,property:i(0|C,A||n)}).optimize(t)}}if(n instanceof Ae){if(n.body[0]instanceof Oe){var S=n.body[0].value;if(!S||S.is_constant()){v=e.args.concat(S||r(Ft,e));return Ye.from_array(v).transform(t)}}if(t.option("side_effects")&&w(n.body,c)){v=e.args.concat(r(Ft,e));return Ye.from_array(v).transform(t)}}if(t.option("drop_console")&&n instanceof Xe){for(var O=n.expression;O.expression;)O=O.expression;if(O instanceof _t&&"console"==O.name&&O.undeclared())return r(Ft,e).optimize(t)}return t.option("negate_iife")&&t.parent()instanceof ue&&p(e)?e.negate(t,!0):e}),e(Ge,function(e,t){if(t.option("unsafe")){var n=e.expression;if(n instanceof _t&&n.undeclared())switch(n.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return r(We,e,e).transform(t)}}return e}),e(Ye,function(e,n){if(!n.option("side_effects"))return e;if(e.car=e.car.drop_side_effect_free(n,A(n)),!e.car)return a(n.parent(),e,e.cdr);if(n.option("cascade")){var i;if(e.car instanceof rt&&!e.car.left.has_side_effects(n)?i=e.car.left:e.car instanceof Qe&&("++"==e.car.operator||"--"==e.car.operator)&&(i=e.car.expression),i&&!(i instanceof _t&&(i.definition().orig[0]instanceof vt||t(i))))for(var o,s,u=e.cdr;;){if(u.equivalent_to(i)){var c=e.car instanceof et?r(Ze,e.car,{operator:e.car.operator,expression:i}):e.car;return o?(o[s]=c,e.cdr):c}if(u instanceof tt&&!(u instanceof rt))if(u.left.is_constant()){if("||"==u.operator||"&&"==u.operator)break;s="right"}else s="left";else{if(!(u instanceof We||u instanceof Qe&&!z(u.operator)))break;s="expression"}o=u,u=u[s]}}return F(e.cdr,n)?r(Ze,e,{operator:"void",expression:e.car}):e}),Qe.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")&&this.expression instanceof Ye){var t=this.expression,n=t.to_array(),r=this.clone();return r.expression=n.pop(),n.push(r),t=Ye.from_array(n).transform(e)}return this}),e(et,function(e,t){return e.lift_sequences(t)}),e(Ze,function(e,t){var n=e.expression;if("delete"==e.operator&&!(n instanceof _t||n instanceof Xe||n instanceof Ot||n instanceof Dt||n instanceof Ft))return n instanceof Ye?((n=n.to_array()).push(r(Mt,e)),Ye.from_array(n).optimize(t)):r(Ye,e,{car:n,cdr:r(Mt,e)}).optimize(t);var o=e.lift_sequences(t);if(o!==e)return o;if(t.option("side_effects")&&"void"==e.operator)return(n=n.drop_side_effect_free(t))?(e.expression=n,e):r(Ft,e).optimize(t);if(t.option("booleans")&&t.in_boolean_context())switch(e.operator){case"!":if(n instanceof Ze&&"!"==n.operator)return n.expression;n instanceof tt&&(e=N(t,e,n.negate(t,A(t))));break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",e.start),(n instanceof _t?r(Mt,e):r(Ye,e,{car:n,cdr:r(Mt,e)})).optimize(t)}if("-"==e.operator&&n instanceof Dt&&(n=n.transform(t)),n instanceof tt&&("+"==e.operator||"-"==e.operator)&&("*"==n.operator||"/"==n.operator||"%"==n.operator))return r(tt,e,{operator:n.operator,left:r(Ze,n.left,{operator:e.operator,expression:n.left}),right:n.right});if("-"!=e.operator||!(n instanceof At||n instanceof Dt)){var s=e.evaluate(t);if(s!==e)return s=i(s,e).optimize(t),N(t,s,e)}return e}),tt.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")){if(this.left instanceof Ye){var t=(o=this.left).to_array();return(s=this.clone()).left=t.pop(),t.push(s),Ye.from_array(t).optimize(e)}if(this.right instanceof Ye&&!this.left.has_side_effects(e)){for(var n,r="="==this.operator&&this.left instanceof _t,i=this.right.clone(),o=i;(r||!o.car.has_side_effects(e))&&(n=o,o.cdr instanceof Ye);)o=o.cdr=o.cdr.clone();if(n){var s=this.clone();return s.right=n.cdr,n.cdr=s,i.optimize(e)}}}return this});var U=x("== === != !== * & | ^");e(tt,function(e,t){function n(){return e.left.is_constant()||e.right.is_constant()||!e.left.has_side_effects(t)&&!e.right.has_side_effects(t)}function o(t){if(n()){t&&(e.operator=t);var r=e.left;e.left=e.right,e.right=r}}if(U(e.operator)&&e.right.is_constant()&&!e.left.is_constant()&&(e.left instanceof tt&&en[e.left.operator]>=en[e.operator]||o()),e=e.lift_sequences(t),t.option("comparisons"))switch(e.operator){case"===":case"!==":(e.left.is_string(t)&&e.right.is_string(t)||e.left.is_number(t)&&e.right.is_number(t)||e.left.is_boolean()&&e.right.is_boolean())&&(e.operator=e.operator.substr(0,2));case"==":case"!=":if(e.left instanceof Et&&"undefined"==e.left.value&&e.right instanceof Ze&&"typeof"==e.right.operator){var s=e.right.expression;(s instanceof _t?s.undeclared():s instanceof Xe&&!t.option("screw_ie8"))||(e.right=s,e.left=r(Ft,e.left).optimize(t),2==e.operator.length&&(e.operator+="="))}}if(t.option("booleans")&&"+"==e.operator&&t.in_boolean_context()){var u=e.left.evaluate(t),c=e.right.evaluate(t);if(u&&"string"==typeof u)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.right,cdr:r(Mt,e)}).optimize(t);if(c&&"string"==typeof c)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Mt,e)}).optimize(t)}if(t.option("comparisons")&&e.is_boolean()){if(!(t.parent()instanceof tt)||t.parent()instanceof rt){var l=r(Ze,e,{operator:"!",expression:e.negate(t,A(t))});e=N(t,e,l)}if(t.option("unsafe_comps"))switch(e.operator){case"<":o(">");break;case"<=":o(">=")}}if("+"==e.operator){if(e.right instanceof Et&&""==e.right.getValue()&&e.left.is_string(t))return e.left;if(e.left instanceof Et&&""==e.left.getValue()&&e.right.is_string(t))return e.right;if(e.left instanceof tt&&"+"==e.left.operator&&e.left.left instanceof Et&&""==e.left.left.getValue()&&e.right.is_string(t))return e.left=e.left.right,e.transform(t)}if(t.option("evaluate")){switch(e.operator){case"&&":if(!(u=e.left.evaluate(t)))return t.warn("Condition left of && always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.left).optimize(t);if(u!==e.left)return t.warn("Condition left of && always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.right).optimize(t);if(t.option("booleans")&&t.in_boolean_context()){if(!(c=e.right.evaluate(t)))return t.warn("Boolean && always false [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Nt,e)}).optimize(t);if(c!==e.right)return t.warn("Dropping side-effect-free && in boolean context [{file}:{line},{col}]",e.start),e.left.optimize(t)}break;case"||":if(!(u=e.left.evaluate(t)))return t.warn("Condition left of || always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.right).optimize(t);if(u!==e.left)return t.warn("Condition left of || always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.left).optimize(t);if(t.option("booleans")&&t.in_boolean_context()){if(!(c=e.right.evaluate(t)))return t.warn("Dropping side-effect-free || in boolean context [{file}:{line},{col}]",e.start),e.left.optimize(t);if(c!==e.right)return t.warn("Boolean || always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Mt,e)}).optimize(t)}}var p=!0;switch(e.operator){case"+":if(e.left instanceof kt&&e.right instanceof tt&&"+"==e.right.operator&&e.right.left instanceof kt&&e.right.is_string(t)&&(e=r(tt,e,{operator:"+",left:r(Et,e.left,{value:""+e.left.getValue()+e.right.left.getValue(),start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof kt&&e.left instanceof tt&&"+"==e.left.operator&&e.left.right instanceof kt&&e.left.is_string(t)&&(e=r(tt,e,{operator:"+",left:e.left.left,right:r(Et,e.right,{value:""+e.left.right.getValue()+e.right.getValue(),start:e.left.right.start,end:e.right.end})})),e.left instanceof tt&&"+"==e.left.operator&&e.left.is_string(t)&&e.left.right instanceof kt&&e.right instanceof tt&&"+"==e.right.operator&&e.right.left instanceof kt&&e.right.is_string(t)&&(e=r(tt,e,{operator:"+",left:r(tt,e.left,{operator:"+",left:e.left.left,right:r(Et,e.left.right,{value:""+e.left.right.getValue()+e.right.left.getValue(),start:e.left.right.start,end:e.right.left.end})}),right:e.right.right})),e.right instanceof Ze&&"-"==e.right.operator&&e.left.is_number(t)){e=r(tt,e,{operator:"-",left:e.left,right:e.right.expression});break}if(e.left instanceof Ze&&"-"==e.left.operator&&n()&&e.right.is_number(t)){e=r(tt,e,{operator:"-",left:e.right,right:e.left.expression});break}case"*":p=t.option("unsafe_math");case"&":case"|":case"^":if(e.left.is_number(t)&&e.right.is_number(t)&&n()&&!(e.left instanceof tt&&e.left.operator!=e.operator&&en[e.left.operator]>=en[e.operator])){var h=r(tt,e,{operator:e.operator,left:e.right,right:e.left});e=e.right instanceof kt&&!(e.left instanceof kt)?N(t,h,e):N(t,e,h)}p&&e.is_number(t)&&(e.right instanceof tt&&e.right.operator==e.operator&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left,right:e.right.left,start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof kt&&e.left instanceof tt&&e.left.operator==e.operator&&(e.left.left instanceof kt?e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left.left,right:e.right,start:e.left.left.start,end:e.right.end}),right:e.left.right}):e.left.right instanceof kt&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left.right,right:e.right,start:e.left.right.start,end:e.right.end}),right:e.left.left}))),e.left instanceof tt&&e.left.operator==e.operator&&e.left.right instanceof kt&&e.right instanceof tt&&e.right.operator==e.operator&&e.right.left instanceof kt&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:r(tt,e.left.left,{operator:e.operator,left:e.left.right,right:e.right.left,start:e.left.right.start,end:e.right.left.end}),right:e.left.left}),right:e.right.right})))}}if(e.right instanceof tt&&e.right.operator==e.operator&&("&&"==e.operator||"||"==e.operator||"+"==e.operator&&(e.right.left.is_string(t)||e.left.is_string(t)&&e.right.right.is_string(t))))return e.left=r(tt,e.left,{operator:e.operator,left:e.left,right:e.right.left}),e.right=e.right.right,e.transform(t);var f=e.evaluate(t);return f!==e?(f=i(f,e).optimize(t),N(t,f,e)):e}),e(_t,function(e,t){var n=e.resolve_defines(t);if(n)return n.optimize(t);if(t.option("screw_ie8")&&e.undeclared()&&(!e.scope.uses_with||!t.find_parent(_e)))switch(e.name){case"undefined":return r(Ft,e).optimize(t);case"NaN":return r(Ot,e).optimize(t);case"Infinity":return r(Dt,e).optimize(t)}if(t.option("evaluate")&&t.option("reduce_vars")&&B(e,t.parent())!==e){var o=e.definition(),s=e.fixed_value();if(s){if(void 0===o.should_replace){var a=s.evaluate(t);if(a===s||!t.option("unsafe_regexp")&&a instanceof RegExp)o.should_replace=!1;else{var u,c=(a=i(a,s)).optimize(t).print_to_string().length;!function(e){var t;return e.walk(new T(function(e){if(e instanceof _t&&(t=!0),t)return!0})),t}(s)?(c=Math.min(c,s.print_to_string().length),u=function(){var e=D(a.optimize(t),s);return e===a||e===s?e.clone(!0):e}):u=function(){var e=a.optimize(t);return e===a?e.clone(!0):e};var l=o.name.length,p=0;!t.option("unused")||o.global&&!t.option("toplevel")||(p=(l+2+c)/o.references.length),o.should_replace=c<=l+p&&u}}if(o.should_replace)return o.should_replace()}}return e}),e(Ft,function(e,t){if(t.option("unsafe")){var i=n(t,"undefined");if(i){var o=r(_t,e,{name:"undefined",scope:i.scope,thedef:i});return o.is_undefined=!0,o}}var s=B(t.self(),t.parent());return s&&P(s,e)?e:r(Ze,e,{operator:"void",expression:r(At,e,{value:0})})}),e(Dt,function(e,t){var i=B(t.self(),t.parent());return i&&P(i,e)?e:!t.option("keep_infinity")||i&&!P(i,e)||n(t,"Infinity")?r(tt,e,{operator:"/",left:r(At,e,{value:1}),right:r(At,e,{value:0})}):e}),e(Ot,function(e,t){var i=B(t.self(),t.parent());return i&&!P(i,e)||n(t,"NaN")?r(tt,e,{operator:"/",left:r(At,e,{value:0}),right:r(At,e,{value:0})}):e});var $=["+","-","/","*","%",">>","<<",">>>","|","^","&"],W=["*","|","^","&"];e(rt,function(e,t){return"="==(e=e.lift_sequences(t)).operator&&e.left instanceof _t&&e.right instanceof tt&&(e.right.left instanceof _t&&e.right.left.name==e.left.name&&o(e.right.operator,$)?(e.operator=e.right.operator+"=",e.right=e.right.right):e.right.right instanceof _t&&e.right.right.name==e.left.name&&o(e.right.operator,W)&&!e.right.left.has_side_effects(t)&&(e.operator=e.right.operator+"=",e.right=e.right.left)),e}),e(nt,function(e,t){function n(e){return e.is_boolean()?e:r(Ze,e,{operator:"!",expression:e.negate(t)})}function i(e){return e instanceof Mt||e instanceof Ze&&"!"==e.operator&&e.expression instanceof kt&&!e.expression.value}function o(e){return e instanceof Nt||e instanceof Ze&&"!"==e.operator&&e.expression instanceof kt&&!!e.expression.value}if(!t.option("conditionals"))return e;if(e.condition instanceof Ye){var s=e.condition.car;return e.condition=e.condition.cdr,Ye.cons(s,e)}var u=e.condition.evaluate(t);if(u!==e.condition)return u?(t.warn("Condition always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.consequent)):(t.warn("Condition always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.alternative));var c=u.negate(t,A(t));N(t,u,c)===c&&(e=r(nt,e,{condition:c,consequent:e.alternative,alternative:e.consequent}));var l=e.condition,p=e.consequent,h=e.alternative;return l instanceof _t&&p instanceof _t&&l.definition()===p.definition()?r(tt,e,{operator:"||",left:l,right:h}):p instanceof rt&&h instanceof rt&&p.operator==h.operator&&p.left.equivalent_to(h.left)&&(!e.condition.has_side_effects(t)||"="==p.operator&&!p.left.has_side_effects(t))?r(rt,e,{operator:p.operator,left:p.left,right:r(nt,e,{condition:e.condition,consequent:p.right,alternative:h.right})}):p instanceof We&&h.TYPE===p.TYPE&&1==p.args.length&&1==h.args.length&&p.expression.equivalent_to(h.expression)&&!p.expression.has_side_effects(t)?(p.args[0]=r(nt,e,{condition:e.condition,consequent:p.args[0],alternative:h.args[0]}),p):p instanceof nt&&p.alternative.equivalent_to(h)?r(nt,e,{condition:r(tt,e,{left:e.condition,operator:"&&",right:p.condition}),consequent:p.consequent,alternative:h}):p.equivalent_to(h)?r(Ye,e,{car:e.condition,cdr:p}).optimize(t):i(e.consequent)?o(e.alternative)?n(e.condition):r(tt,e,{operator:"||",left:n(e.condition),right:e.alternative}):o(e.consequent)?i(e.alternative)?n(e.condition.negate(t)):r(tt,e,{operator:"&&",left:n(e.condition.negate(t)),right:e.alternative}):i(e.alternative)?r(tt,e,{operator:"||",left:n(e.condition.negate(t)),right:e.consequent}):o(e.alternative)?r(tt,e,{operator:"&&",left:n(e.condition),right:e.consequent}):e}),e(Lt,function(e,t){if(t.option("booleans")){var n=t.parent();return n instanceof tt&&("=="==n.operator||"!="==n.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:n.operator,value:e.value,file:n.start.file,line:n.start.line,col:n.start.col}),r(At,e,{value:+e.value})):r(Ze,e,{operator:"!",expression:r(At,e,{value:1-e.value})})}return e}),e(Je,function(e,t){var n=e.property;if(n instanceof Et&&t.option("properties")){if(n=n.getValue(),It(n)?t.option("screw_ie8"):I(n))return r(Ke,e,{expression:e.expression,property:n}).optimize(t);var o=parseFloat(n);isNaN(o)||o.toString()!=n||(e.property=r(At,e.property,{value:o}))}var s=e.evaluate(t);return s!==e?(s=i(s,e).optimize(t),N(t,s,e)):e}),e(Ke,function(e,t){var n=e.resolve_defines(t);if(n)return n.optimize(t);var o=e.property;if(It(o)&&!t.option("screw_ie8"))return r(Je,e,{expression:e.expression,property:r(Et,e,{value:o})}).optimize(t);if(t.option("unsafe_proto")&&e.expression instanceof Ke&&"prototype"==e.expression.property){var s=e.expression.expression;if(s instanceof _t&&s.undeclared())switch(s.name){case"Array":e.expression=r(it,e.expression,{elements:[]});break;case"Object":e.expression=r(ot,e.expression,{properties:[]});break;case"String":e.expression=r(Et,e.expression,{value:""})}}var a=e.evaluate(t);return a!==e?(a=i(a,e).optimize(t),N(t,a,e)):e}),e(it,j),e(ot,j),e(Ct,j),e(Oe,function(e,t){return e.value&&F(e.value,t)&&(e.value=null),e}),e(He,function(e,t){var n=t.option("global_defs");return n&&E(n,e.name.name)&&t.warn("global_defs "+e.name.name+" redefined [{file}:{line},{col}]",e.start),e})}(),function(){function e(e){if("Literal"==e.type)return null!=e.raw?e.raw:e.value+""}function t(t){var n=t.loc,r=n&&n.start,i=t.range;return new re({file:n&&n.source,line:r&&r.line,col:r&&r.column,pos:i?i[0]:t.start,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[0]:t.start,raw:e(t)})}function r(t){var n=t.loc,r=n&&n.end,i=t.range;return new re({file:n&&n.source,line:r&&r.line,col:r&&r.column,pos:i?i[1]:t.end,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[1]:t.end,raw:e(t)})}function i(e,i,s){var p="function From_Moz_"+e+"(M){\n";p+="return new U2."+i.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var f="function To_Moz_"+e+"(M){\n";f+="return {\ntype: "+JSON.stringify(e),s&&s.split(/\s*,\s*/).forEach(function(e){var t=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(e);if(!t)throw new Error("Can't understand property map: "+e);var n=t[1],r=t[2],i=t[3];switch(p+=",\n"+i+": ",f+=",\n"+n+": ",r){case"@":p+="M."+n+".map(from_moz)",f+="M."+i+".map(to_moz)";break;case">":p+="from_moz(M."+n+")",f+="to_moz(M."+i+")";break;case"=":p+="M."+n,f+="M."+i;break;case"%":p+="from_moz(M."+n+").body",f+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+e)}}),p+="\n})\n}",f+="\n}\n}",p=new Function("U2","my_start_token","my_end_token","from_moz","return("+p+")")(n,t,r,o),f=new Function("to_moz","to_moz_block","to_moz_scope","return("+f+")")(u,c,l),h[e]=p,a(i,f)}function o(e){f.push(e);var t=null!=e?h[e.type](e):null;return f.pop(),t}function s(e,t,n){var r=e.start,i=e.end;return null!=r.pos&&null!=i.endpos&&(t.range=[r.pos,i.endpos]),r.line&&(t.loc={start:{line:r.line,column:r.col},end:i.endline?{line:i.endline,column:i.endcol}:null},r.file&&(t.loc.source=r.file)),t}function a(e,t){e.DEFMETHOD("to_mozilla_ast",function(){return s(this,t(this))})}function u(e){return null!=e?e.to_mozilla_ast():null}function c(e){return{type:"BlockStatement",body:e.body.map(u)}}function l(e,t){var n=t.body.map(u);return t.body[0]instanceof ue&&t.body[0].body instanceof Et&&n.unshift(u(new pe(t.body[0]))),{type:e,body:n}}var p=function(e){for(var t=!0,n=0;n<e.length;n++)t&&e[n]instanceof oe&&e[n].body instanceof Et?e[n]=new ae({start:e[n].start,end:e[n].end,value:e[n].body.value}):!t||e[n]instanceof oe&&e[n].body instanceof Et||(t=!1);return e},h={Program:function(e){return new we({start:t(e),end:r(e),body:p(e.body.map(o))})},FunctionDeclaration:function(e){return new Ce({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:p(o(e.body).body)})},FunctionExpression:function(e){return new Ae({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:p(o(e.body).body)})},ExpressionStatement:function(e){return new ue({start:t(e),end:r(e),body:o(e.expression)})},TryStatement:function(e){var n=e.handlers||[e.handler];if(n.length>1||e.guardedHandlers&&e.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new je({start:t(e),end:r(e),body:o(e.block).body,bcatch:o(n[0]),bfinally:e.finalizer?new ze(o(e.finalizer)):null})},Property:function(e){var n=e.key,i={start:t(n),end:r(e.value),key:"Identifier"==n.type?n.name:n.value,value:o(e.value)};return"init"==e.kind?new at(i):(i.key=new pt({name:i.key}),i.value=new Ee(i.value),"get"==e.kind?new ct(i):"set"==e.kind?new ut(i):void 0)},ArrayExpression:function(e){return new it({start:t(e),end:r(e),elements:e.elements.map(function(e){return null===e?new Bt:o(e)})})},ObjectExpression:function(e){return new ot({start:t(e),end:r(e),properties:e.properties.map(function(e){return e.type="Property",o(e)})})},SequenceExpression:function(e){return Ye.from_array(e.expressions.map(o))},MemberExpression:function(e){return new(e.computed?Je:Ke)({start:t(e),end:r(e),property:e.computed?o(e.property):e.property.name,expression:o(e.object)})},SwitchCase:function(e){return new(e.test?Ie:Pe)({start:t(e),end:r(e),expression:o(e.test),body:e.consequent.map(o)})},VariableDeclaration:function(e){return new("const"===e.kind?qe:$e)({start:t(e),end:r(e),definitions:e.declarations.map(o)})},Literal:function(e){var n=e.value,i={start:t(e),end:r(e)};if(null===n)return new Tt(i);switch(typeof n){case"string":return i.value=n,new Et(i);case"number":return i.value=n,new At(i);case"boolean":return new(n?Mt:Nt)(i);default:var o=e.regex;return o&&o.pattern?i.value=new RegExp(o.pattern,o.flags).toString():i.value=e.regex&&e.raw?e.raw:n,new Ct(i)}},Identifier:function(e){var n=f[f.length-2];return new("LabeledStatement"==n.type?bt:"VariableDeclarator"==n.type&&n.id===e?"const"==n.kind?dt:ft:"FunctionExpression"==n.type?n.id===e?vt:mt:"FunctionDeclaration"==n.type?n.id===e?gt:mt:"CatchClause"==n.type?yt:"BreakStatement"==n.type||"ContinueStatement"==n.type?xt:_t)({start:t(e),end:r(e),name:e.name})}};h.UpdateExpression=h.UnaryExpression=function(e){return new(("prefix"in e?e.prefix:"UnaryExpression"==e.type)?Ze:et)({start:t(e),end:r(e),operator:e.operator,expression:o(e.argument)})},i("EmptyStatement",pe),i("BlockStatement",le,"body@body"),i("IfStatement",Ne,"test>condition, consequent>body, alternate>alternative"),i("LabeledStatement",fe,"label>label, body>body"),i("BreakStatement",De,"label>label"),i("ContinueStatement",Le,"label>label"),i("WithStatement",_e,"object>expression, body>body"),i("SwitchStatement",Me,"discriminant>expression, cases@body"),i("ReturnStatement",Oe,"argument>value"),i("ThrowStatement",Fe,"argument>value"),i("WhileStatement",ve,"test>condition, body>body"),i("DoWhileStatement",ge,"test>condition, body>body"),i("ForStatement",ye,"init>init, test>condition, update>step, body>body"),i("ForInStatement",be,"left>init, right>object, body>body"),i("DebuggerStatement",se),i("VariableDeclarator",He,"id>name, init>value"),i("CatchClause",Ve,"param>argname, body%body"),i("ThisExpression",wt),i("BinaryExpression",tt,"operator=operator, left>left, right>right"),i("LogicalExpression",tt,"operator=operator, left>left, right>right"),i("AssignmentExpression",rt,"operator=operator, left>left, right>right"),i("ConditionalExpression",nt,"test>condition, consequent>consequent, alternate>alternative"),i("NewExpression",Ge,"callee>expression, arguments@args"),i("CallExpression",We,"callee>expression, arguments@args"),a(we,function(e){return l("Program",e)}),a(Ce,function(e){return{type:"FunctionDeclaration",id:u(e.name),params:e.argnames.map(u),body:l("BlockStatement",e)}}),a(Ae,function(e){return{type:"FunctionExpression",id:u(e.name),params:e.argnames.map(u),body:l("BlockStatement",e)}}),a(ae,function(e){return{type:"ExpressionStatement",expression:{type:"Literal",value:e.value}}}),a(ue,function(e){return{type:"ExpressionStatement",expression:u(e.body)}}),a(Re,function(e){return{type:"SwitchCase",test:u(e.expression),consequent:e.body.map(u)}}),a(je,function(e){return{type:"TryStatement",block:c(e),handler:u(e.bcatch),guardedHandlers:[],finalizer:u(e.bfinally)}}),a(Ve,function(e){return{type:"CatchClause",param:u(e.argname),guard:null,body:c(e)}}),a(Ue,function(e){return{type:"VariableDeclaration",kind:e instanceof qe?"const":"var",declarations:e.definitions.map(u)}}),a(Ye,function(e){return{type:"SequenceExpression",expressions:e.to_array().map(u)}}),a(Xe,function(e){var t=e instanceof Je;return{type:"MemberExpression",object:u(e.expression),computed:t,property:t?u(e.property):{type:"Identifier",name:e.property}}}),a(Qe,function(e){return{type:"++"==e.operator||"--"==e.operator?"UpdateExpression":"UnaryExpression",operator:e.operator,prefix:e instanceof Ze,argument:u(e.expression)}}),a(tt,function(e){return{type:"&&"==e.operator||"||"==e.operator?"LogicalExpression":"BinaryExpression",left:u(e.left),operator:e.operator,right:u(e.right)}}),a(it,function(e){return{type:"ArrayExpression",elements:e.elements.map(u)}}),a(ot,function(e){return{type:"ObjectExpression",properties:e.properties.map(u)}}),a(st,function(e){var t,n={type:"Literal",value:e.key instanceof pt?e.key.name:e.key};return e instanceof at?t="init":e instanceof ct?t="get":e instanceof ut&&(t="set"),{type:"Property",kind:t,key:n,value:u(e.value)}}),a(lt,function(e){var t=e.definition();return{type:"Identifier",name:t?t.mangled_name||t.name:e.name}}),a(Ct,function(e){var t=e.value;return{type:"Literal",value:t,raw:t.toString(),regex:{pattern:t.source,flags:t.toString().match(/[gimuy]*$/)[0]}}}),a(kt,function(e){var t=e.value;return"number"==typeof t&&(t<0||0===t&&1/t<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-t,raw:e.start.raw}}:{type:"Literal",value:t,raw:e.start.raw}}),a(St,function(e){return{type:"Identifier",name:String(e.value)}}),Lt.DEFMETHOD("to_mozilla_ast",kt.prototype.to_mozilla_ast),Tt.DEFMETHOD("to_mozilla_ast",kt.prototype.to_mozilla_ast),Bt.DEFMETHOD("to_mozilla_ast",function(){return null}),ce.DEFMETHOD("to_mozilla_ast",le.prototype.to_mozilla_ast),ke.DEFMETHOD("to_mozilla_ast",Ae.prototype.to_mozilla_ast);var f=null;ie.from_mozilla_ast=function(e){var t=f;f=[];var n=o(e);return f=t,n}}(),n.Compressor=X,n.DefaultsError=c,n.Dictionary=k,n.JS_Parse_Error=V,n.MAP=ne,n.OutputStream=Y,n.SourceMap=K,n.TreeTransformer=H,n.TreeWalker=T,n.base54=rn,n.defaults=l,n.mangle_properties=Q,n.merge=p,n.parse=q,n.push_uniq=v,n.string_template=y,n.tokenizer=$,n.is_identifier=M,n.SymbolDef=W,n.sys=Z,n.MOZ_SourceMap=ee,n.UglifyJS=te,n.array_to_hash=r,n.slice=function(e,t){return Array.prototype.slice.call(e,t||0)},n.characters=i,n.member=o,n.find_if=s,n.repeat_string=a,n.configure_error_stack=u,n.DefaultsError=c,n.defaults=l,n.merge=p,n.noop=h,n.return_false=f,n.return_true=d,n.return_this=m,n.return_null=g,n.MAP=ne,n.push_uniq=v,n.string_template=y,n.remove=b,n.mergeSort=_,n.set_difference=function(e,t){return e.filter(function(e){return t.indexOf(e)<0})},n.set_intersection=function(e,t){return e.filter(function(e){return t.indexOf(e)>=0})},n.makePredicate=x,n.all=w,n.Dictionary=k,n.HOP=E,n.first_in_statement=A,n.DEFNODE=C,n.AST_Token=re,n.AST_Node=ie,n.AST_Statement=oe,n.AST_Debugger=se,n.AST_Directive=ae,n.AST_SimpleStatement=ue,n.walk_body=S,n.AST_Block=ce,n.AST_BlockStatement=le,n.AST_EmptyStatement=pe,n.AST_StatementWithBody=he,n.AST_LabeledStatement=fe,n.AST_IterationStatement=de,n.AST_DWLoop=me,n.AST_Do=ge,n.AST_While=ve,n.AST_For=ye,n.AST_ForIn=be,n.AST_With=_e,n.AST_Scope=xe,n.AST_Toplevel=we,n.AST_Lambda=ke,n.AST_Accessor=Ee,n.AST_Function=Ae,n.AST_Defun=Ce,n.AST_Jump=Se,n.AST_Exit=Te,n.AST_Return=Oe,n.AST_Throw=Fe,n.AST_LoopControl=Be,n.AST_Break=De,n.AST_Continue=Le,n.AST_If=Ne,n.AST_Switch=Me,n.AST_SwitchBranch=Re,n.AST_Default=Pe,n.AST_Case=Ie,n.AST_Try=je,n.AST_Catch=Ve,n.AST_Finally=ze,n.AST_Definitions=Ue,n.AST_Var=$e,n.AST_Const=qe,n.AST_VarDef=He,n.AST_Call=We,n.AST_New=Ge,n.AST_Seq=Ye,n.AST_PropAccess=Xe,n.AST_Dot=Ke,n.AST_Sub=Je,n.AST_Unary=Qe,n.AST_UnaryPrefix=Ze,n.AST_UnaryPostfix=et,n.AST_Binary=tt,n.AST_Conditional=nt,n.AST_Assign=rt,n.AST_Array=it,n.AST_Object=ot,n.AST_ObjectProperty=st,n.AST_ObjectKeyVal=at,n.AST_ObjectSetter=ut,n.AST_ObjectGetter=ct,n.AST_Symbol=lt,n.AST_SymbolAccessor=pt,n.AST_SymbolDeclaration=ht,n.AST_SymbolVar=ft,n.AST_SymbolConst=dt,n.AST_SymbolFunarg=mt,n.AST_SymbolDefun=gt,n.AST_SymbolLambda=vt,n.AST_SymbolCatch=yt,n.AST_Label=bt,n.AST_SymbolRef=_t,n.AST_LabelRef=xt,n.AST_This=wt,n.AST_Constant=kt,n.AST_String=Et,n.AST_Number=At,n.AST_RegExp=Ct,n.AST_Atom=St,n.AST_Null=Tt,n.AST_NaN=Ot,n.AST_Undefined=Ft,n.AST_Hole=Bt,n.AST_Infinity=Dt,n.AST_Boolean=Lt,n.AST_False=Nt,n.AST_True=Mt,n.TreeWalker=T,n.KEYWORDS=Rt,n.KEYWORDS_ATOM=Pt,n.RESERVED_WORDS=It,n.KEYWORDS_BEFORE_EXPRESSION=jt,n.OPERATOR_CHARS=Vt,n.RE_HEX_NUMBER=zt,n.RE_OCT_NUMBER=Ut,n.OPERATORS=$t,n.WHITESPACE_CHARS=qt,n.NEWLINE_CHARS=Ht,n.PUNC_BEFORE_EXPRESSION=Wt,n.PUNC_CHARS=Gt,n.REGEXP_MODIFIERS=Yt,n.UNICODE=Xt,n.is_letter=O,n.is_digit=F,n.is_alphanumeric_char=B,n.is_unicode_digit=D,n.is_unicode_combining_mark=L,n.is_unicode_connector_punctuation=N,n.is_identifier=M,n.is_identifier_start=R,n.is_identifier_char=P,n.is_identifier_string=I,n.parse_js_number=j,n.JS_Parse_Error=V,n.js_error=z,n.is_token=U,n.EX_EOF=Kt,n.tokenizer=$,n.UNARY_PREFIX=Jt,n.UNARY_POSTFIX=Qt,n.ASSIGNMENT=Zt,n.PRECEDENCE=en,n.STATEMENTS_WITH_LABELS=tn,n.ATOMIC_START_TOKEN=nn,n.parse=q,n.TreeTransformer=H,n.SymbolDef=W,n.base54=rn,n.EXPECT_DIRECTIVE=on,n.is_some_comments=G,n.OutputStream=Y,n.Compressor=X,n.SourceMap=K,n.find_builtins=J,n.mangle_properties=Q,n.AST_Node.warn_function=function(e){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e)},n.minify=function(e,n){n=te.defaults(n,{compress:{},fromString:!1,inSourceMap:null,mangle:{},mangleProperties:!1,nameCache:null,outFileName:null,output:null,outSourceMap:null,parse:{},sourceMapInline:!1,sourceMapUrl:null,sourceRoot:null,spidermonkey:!1,warnings:!1}),te.base54.reset();var r=n.inSourceMap;"string"==typeof r&&"inline"!=r&&(r=JSON.parse(fs.readFileSync(r,"utf8")));var i=null,o={};if(n.spidermonkey){if("inline"==r)throw new Error("inline source map only works with built-in parser");i=te.AST_Node.from_mozilla_ast(e)}else{function s(e,t){var s=n.fromString?e:fs.readFileSync(e,"utf8");"inline"==r&&(r=read_source_map(s)),o[t]=s,i=te.parse(s,{filename:t,toplevel:i,bare_returns:n.parse?n.parse.bare_returns:void 0})}if(!n.fromString&&(e=te.simple_glob(e),"inline"==r&&e.length>1))throw new Error("inline source map only works with singular input");[].concat(e).forEach(function(e,t){if("string"==typeof e)s(e,n.fromString?t:e);else for(var r in e)s(e[r],r)})}if(n.wrap&&(i=i.wrap_commonjs(n.wrap,n.exportAll)),n.compress){var a={warnings:n.warnings};te.merge(a,n.compress),i.figure_out_scope(n.mangle);var u=te.Compressor(a);i=u.compress(i)}(n.mangleProperties||n.nameCache)&&(n.mangleProperties.cache=te.readNameCache(n.nameCache,"props"),i=te.mangle_properties(i,n.mangleProperties),te.writeNameCache(n.nameCache,"props",n.mangleProperties.cache)),n.mangle&&(i.figure_out_scope(n.mangle),i.compute_char_frequency(n.mangle),i.mangle_names(n.mangle));var c={max_line_len:32e3};if((n.outSourceMap||n.sourceMapInline)&&(c.source_map=te.SourceMap({file:n.outFileName||("string"==typeof n.outSourceMap?n.outSourceMap.replace(/\.map$/i,""):null),orig:r,root:n.sourceRoot}),n.sourceMapIncludeSources))for(var l in o)o.hasOwnProperty(l)&&c.source_map.get().setSourceContent(l,o[l]);n.output&&te.merge(c,n.output);var p=te.OutputStream(c);i.print(p);var h=c.source_map;h&&(h+="");return n.sourceMapInline?p+="\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new t(h).toString("base64"):n.outSourceMap&&"string"==typeof n.outSourceMap&&!1!==n.sourceMapUrl&&(p+="\n//# sourceMappingURL="+("string"==typeof n.sourceMapUrl?n.sourceMapUrl:n.outSourceMap)),{code:p+"",map:h}},n.describe_ast=function(){function e(n){t.print("AST_"+n.TYPE);var r=n.SELF_PROPS.filter(function(e){return!/^\$/.test(e)});r.length>0&&(t.space(),t.with_parens(function(){r.forEach(function(e,n){n&&t.space(),t.print(e)})})),n.documentation&&(t.space(),t.print_string(n.documentation)),n.SUBCLASSES.length>0&&(t.space(),t.with_block(function(){n.SUBCLASSES.forEach(function(n,r){t.indent(),e(n),t.newline()})}))}var t=te.OutputStream({beautify:!0});return e(te.AST_Node),t+""}}).call(this,e("buffer").Buffer)},{buffer:11,"source-map":145,util:152}],148:[function(e,t,n){"use strict";function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(e,t,n){if(e&&s.isObject(e)&&e instanceof r)return e;var i=new r;return i.parse(e,t,n),i}var o=e("punycode"),s=e("./util");n.parse=i,n.resolve=function(e,t){return i(e,!1,!0).resolve(t)},n.resolveObject=function(e,t){return e?i(e,!1,!0).resolveObject(t):t},n.format=function(e){return s.isString(e)&&(e=i(e)),e instanceof r?e.format():r.prototype.format.call(e)},n.Url=r;var a=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),p=["'"].concat(l),h=["%","/","?",";","#"].concat(p),f=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=e("querystring");r.prototype.parse=function(e,t,n){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var r=e.indexOf("?"),i=-1!==r&&r<e.indexOf("#")?"?":"#",u=e.split(i);u[0]=u[0].replace(/\\/g,"/");var l=e=u.join(i);if(l=l.trim(),!n&&1===e.split("#").length){var _=c.exec(l);if(_)return this.path=l,this.href=l,this.pathname=_[1],_[2]?(this.search=_[2],this.query=t?b.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var x=a.exec(l);if(x){var w=(x=x[0]).toLowerCase();this.protocol=w,l=l.substr(x.length)}if(n||x||l.match(/^\/\/[^@\/]+@[^@\/]+/)){var k="//"===l.substr(0,2);!k||x&&v[x]||(l=l.substr(2),this.slashes=!0)}if(!v[x]&&(k||x&&!y[x])){for(var E=-1,A=0;A<f.length;A++)-1!==(T=l.indexOf(f[A]))&&(-1===E||T<E)&&(E=T);var C,S;-1!==(S=-1===E?l.lastIndexOf("@"):l.lastIndexOf("@",E))&&(C=l.slice(0,S),l=l.slice(S+1),this.auth=decodeURIComponent(C)),E=-1;for(A=0;A<h.length;A++){var T=l.indexOf(h[A]);-1!==T&&(-1===E||T<E)&&(E=T)}-1===E&&(E=l.length),this.host=l.slice(0,E),l=l.slice(E),this.parseHost(),this.hostname=this.hostname||"";var O="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!O)for(var F=this.hostname.split(/\./),A=0,B=F.length;A<B;A++){var D=F[A];if(D&&!D.match(d)){for(var L="",N=0,M=D.length;N<M;N++)D.charCodeAt(N)>127?L+="x":L+=D[N];if(!L.match(d)){var R=F.slice(0,A),P=F.slice(A+1),I=D.match(m);I&&(R.push(I[1]),P.unshift(I[2])),P.length&&(l="/"+P.join(".")+l),this.hostname=R.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),O||(this.hostname=o.toASCII(this.hostname));var j=this.port?":"+this.port:"",V=this.hostname||"";this.host=V+j,this.href+=this.host,O&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==l[0]&&(l="/"+l))}if(!g[w])for(var A=0,B=p.length;A<B;A++){var z=p[A];if(-1!==l.indexOf(z)){var U=encodeURIComponent(z);U===z&&(U=escape(z)),l=l.split(z).join(U)}}var $=l.indexOf("#");-1!==$&&(this.hash=l.substr($),l=l.slice(0,$));var q=l.indexOf("?");if(-1!==q?(this.search=l.substr(q),this.query=l.substr(q+1),t&&(this.query=b.parse(this.query)),l=l.slice(0,q)):t&&(this.search="",this.query={}),l&&(this.pathname=l),y[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var j=this.pathname||"",H=this.search||"";this.path=j+H}return this.href=this.format(),this},r.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(o=b.stringify(this.query));var a=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),a=a.replace("#","%23"),t+i+n+a+r},r.prototype.resolve=function(e){return this.resolveObject(i(e,!1,!0)).format()},r.prototype.resolveObject=function(e){if(s.isString(e)){var t=new r;t.parse(e,!1,!0),e=t}for(var n=new r,i=Object.keys(this),o=0;o<i.length;o++){var a=i[o];n[a]=this[a]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var u=Object.keys(e),c=0;c<u.length;c++){var l=u[c];"protocol"!==l&&(n[l]=e[l])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var p=Object.keys(e),h=0;h<p.length;h++){var f=p[h];n[f]=e[f]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(k=(e.pathname||"").split("/");k.length&&!(e.host=k.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==k[0]&&k.unshift(""),k.length<2&&k.unshift(""),n.pathname=k.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var d=n.pathname||"",m=n.search||"";n.path=d+m}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var g=n.pathname&&"/"===n.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),_=b||g||n.host&&e.pathname,x=_,w=n.pathname&&n.pathname.split("/")||[],k=e.pathname&&e.pathname.split("/")||[],E=n.protocol&&!y[n.protocol];if(E&&(n.hostname="",n.port=null,n.host&&(""===w[0]?w[0]=n.host:w.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===k[0]?k[0]=e.host:k.unshift(e.host)),e.host=null),_=_&&(""===k[0]||""===w[0])),b)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,w=k;else if(k.length)w||(w=[]),w.pop(),w=w.concat(k),n.search=e.search,n.query=e.query;else if(!s.isNullOrUndefined(e.search))return E&&(n.hostname=n.host=w.shift(),(F=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=F.shift(),n.host=n.hostname=F.shift())),n.search=e.search,n.query=e.query,s.isNull(n.pathname)&&s.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n;if(!w.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var A=w.slice(-1)[0],C=(n.host||e.host||w.length>1)&&("."===A||".."===A)||""===A,S=0,T=w.length;T>=0;T--)"."===(A=w[T])?w.splice(T,1):".."===A?(w.splice(T,1),S++):S&&(w.splice(T,1),S--);if(!_&&!x)for(;S--;S)w.unshift("..");!_||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),C&&"/"!==w.join("/").substr(-1)&&w.push("");var O=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(E){n.hostname=n.host=O?"":w.length?w.shift():"";var F=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");F&&(n.auth=F.shift(),n.host=n.hostname=F.shift())}return(_=_||n.host&&w.length)&&!O&&w.unshift(""),w.length?n.pathname=w.join("/"):(n.pathname=null,n.path=null),s.isNull(n.pathname)&&s.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var e=this.host,t=u.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},{"./util":149,punycode:131,querystring:134}],149:[function(e,t,n){"use strict";t.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},{}],150:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],151:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],152:[function(e,t,n){(function(t,r){function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(t)?r.showHidden=t:t&&n._extend(r,t),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,e,r.depth)}function o(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function s(e,t){return e}function a(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function u(e,t,r){if(e.customInspect&&t&&E(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(r,e);return y(i)||(i=u(e,i,r)),i}var o=c(e,t);if(o)return o;var s=Object.keys(t),m=a(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),k(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(t);if(0===s.length){if(E(t)){var g=t.name?": "+t.name:"";return e.stylize("[Function"+g+"]","special")}if(_(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(w(t))return e.stylize(Date.prototype.toString.call(t),"date");if(k(t))return l(t)}var v="",b=!1,x=["{","}"];if(d(t)&&(b=!0,x=["[","]"]),E(t)&&(v=" [Function"+(t.name?": "+t.name:"")+"]"),_(t)&&(v=" "+RegExp.prototype.toString.call(t)),w(t)&&(v=" "+Date.prototype.toUTCString.call(t)),k(t)&&(v=" "+l(t)),0===s.length&&(!b||0==t.length))return x[0]+v+x[1];if(r<0)return _(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var A;return A=b?p(e,t,r,m,s):s.map(function(n){return h(e,t,r,m,n,b)}),e.seen.pop(),f(A,v,x)}function c(e,t){if(b(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):m(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)T(t,String(s))?o.push(h(e,t,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,n,r,i,!0))}),o}function h(e,t,n,r,i,o){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),T(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=g(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),b(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function f(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function g(e){return null===e}function v(e){return"number"==typeof e}function y(e){return"string"==typeof e}function b(e){return void 0===e}function _(e){return x(e)&&"[object RegExp]"===A(e)}function x(e){return"object"==typeof e&&null!==e}function w(e){return x(e)&&"[object Date]"===A(e)}function k(e){return x(e)&&("[object Error]"===A(e)||e instanceof Error)}function E(e){return"function"==typeof e}function A(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}function S(){var e=new Date,t=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":");return[e.getDate(),D[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var O=/%[sdj%]/g;n.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,o=r.length,s=String(e).replace(O,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])g(a)||!x(a)?s+=" "+a:s+=" "+i(a);return s},n.deprecate=function(e,i){if(b(r.process))return function(){return n.deprecate(e,i).apply(this,arguments)};if(!0===t.noDeprecation)return e;var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),o=!0}return e.apply(this,arguments)}};var F,B={};n.debuglog=function(e){if(b(F)&&(F=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!B[e])if(new RegExp("\\b"+e+"\\b","i").test(F)){var r=t.pid;B[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else B[e]=function(){};return B[e]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=m,n.isNull=g,n.isNullOrUndefined=function(e){return null==e},n.isNumber=v,n.isString=y,n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=b,n.isRegExp=_,n.isObject=x,n.isDate=w,n.isError=k,n.isFunction=E,n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=e("./support/isBuffer");var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",S(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":151,_process:31,inherits:150}],153:[function(e,t,n){t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},{}],154:[function(e,t,n){"use strict";function r(e){return s.parse(e,{ecmaVersion:6,allowReturnOutsideFunction:!0})}function i(e,t){function n(t){return e.slice(t.start,t.end).join("")}function i(t,n){for(var r=t.start;r<t.end;r++)e[r]="";e[t.start]=n}var o,s=e,u=!1,c=r(e);if(e=e.split(""),1!==(o=c.body).length||"ExpressionStatement"!==(o=o[0]).type||"CallExpression"!==(o=o.expression).type||"MemberExpression"!==(o=o.callee).type||!1!==o.computed||"call"!==o.property.name||"FunctionExpression"!==(o=o.object).type)throw new Error("AST does not seem to represent a self-calling function");var l=o;return a.recursive(c,null,{Function:function(e,t,n){e===l&&n(e.body,t,"ScopeBody")},ReturnStatement:function(e){u=!0,i(e,"return {value: ("+(e.argument?n(e.argument):"undefined")+")};")}}),u?"var "+t+"="+e.join("")+";if ("+t+") return "+t+".value":s}var o=e("acorn-globals"),s=e("acorn"),a=e("acorn/dist/walk");t.exports=function(e,t,n){e+="",t+="",n=(n=n||[]).concat(o(e).map(function(e){return e.name}));var r=o(t).map(function(e){return e.name}).filter(function(e){return-1===n.indexOf(e)&&"undefined"!==e&&"this"!==e});if(0===r.length)return t;var s="",a="locals_for_with",u="result_of_with";if(/^[a-zA-Z0-9$_]+$/.test(e))a=e;else{for(;-1!=r.indexOf(a)||-1!=n.indexOf(a);)a+="_";s="var "+a+" = ("+e+")"}for(;-1!=r.indexOf(u)||-1!=n.indexOf(u);)u+="_";var c=r.map(function(e){return JSON.stringify(e)+" in "+a+"?"+a+"."+e+":typeof "+e+'!=="undefined"?'+e+":undefined"});return t="(function ("+r.join(", ")+") {"+t+"}.call(this"+c.map(function(e){return","+e}).join("")+"))",";"+s+";"+i(t,u)+";"}},{acorn:155,"acorn-globals":1,"acorn/dist/walk":156}],155:[function(e,t,n){arguments[4][14][0].apply(n,arguments)},{dup:14}],156:[function(e,t,n){arguments[4][15][0].apply(n,arguments)},{dup:15}],pug:[function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return n.reduce(function(e,n){return n[r]?n[r](e,t):e},e)}function i(e,t){var n=e.filter(function(e){return e[t]});if(n.length>1)throw new Error("Two or more plugins all implement "+t+" method.");return n.length?n[0][t].bind(n[0]):null}function o(e,t){var o={};o[t.filename]=e;var s=[],a=t.plugins||[],g=h.string(e,{filename:t.filename,basedir:t.basedir,lex:function(e,t){var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.plugins=a.filter(function(e){return!!e.lex}).map(function(e){return e.lex}),r(c(e,n),t,a,"postLex")},parse:function(e,t){e=e.map(function(e){return"path"===e.type&&""===u.extname(e.val)?{type:"path",line:e.line,col:e.col,val:e.val+".pug"}:e}),e=r(e=l(e,t),t,a,"preParse");var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.plugins=a.filter(function(e){return!!e.parse}).map(function(e){return e.parse}),r(r(p(e,n),t,a,"postParse"),t,a,"preLoad")},resolve:function(e,n,r){var o=i(a,"resolve");return o?o(e,n,t):h.resolve(e,n,r)},read:function(e,n){s.push(e);var u,c=i(a,"read"),l=r(u=c?c(e,t):h.read(e,n),{filename:e},a,"preLex");return o[e]=l,l}});g=r(g=r(g,t,a,"postLoad"),t,a,"preFilters");var v={};Object.keys(n.filters).forEach(function(e){v[e]=n.filters[e]}),t.filters&&Object.keys(t.filters).forEach(function(e){v[e]=t.filters[e]}),g=r(g=r(g=f.handleFilters(g,v,t.filterOptions,t.filterAliases),t,a,"postFilters"),t,a,"preLink"),g=r(g=r(g=d(g),t,a,"postLink"),t,a,"preCodeGen");var y=m(g,{pretty:t.pretty,compileDebug:t.compileDebug,doctype:t.doctype,inlineRuntimeFunctions:t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:!!t.includeSources&&o,templateName:t.templateName});return y=r(y,t,a,"postCodeGen"),t.debug&&console.error("\nCompiled Function:\n\n[90m%s[0m",y.replace(/^/gm,"  ")),{body:y,dependencies:s}}function s(e,t){var r=e.filename;if(e.cache&&n.cache[r])return n.cache[r];void 0===t&&(t=a.readFileSync(e.filename,"utf8"));var i=n.compile(t,e);return e.cache&&(n.cache[r]=i),i}var a=e("fs"),u=e("path"),c=e("pug-lexer"),l=e("pug-strip-comments"),p=e("pug-parser"),h=e("pug-load"),f=e("pug-filters"),d=e("pug-linker"),m=e("pug-code-gen"),g=e("pug-runtime"),v=e("pug-runtime/wrap");n.name="Pug",n.runtime=g,n.cache={},n.filters={},n.compile=function(e,t){var t=t||{},n=o(e=String(e),{compileDebug:!1!==t.compileDebug,filename:t.filename,basedir:t.basedir,pretty:t.pretty,doctype:t.doctype,inlineRuntimeFunctions:t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:!0===t.compileDebug,debug:t.debug,templateName:"template",filters:t.filters,filterOptions:t.filterOptions,filterAliases:t.filterAliases,plugins:t.plugins}),r=t.inlineRuntimeFunctions?new Function("",n.body+";return template;")():v(n.body);return r.dependencies=n.dependencies,r},n.compileClientWithDependenciesTracked=function(e,t){var t=t||{},n=o(e=String(e),{compileDebug:t.compileDebug,filename:t.filename,basedir:t.basedir,pretty:t.pretty,doctype:t.doctype,inlineRuntimeFunctions:!1!==t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:t.compileDebug,debug:t.debug,templateName:t.name||"template",filters:t.filters,filterOptions:t.filterOptions,filterAliases:t.filterAliases,plugins:t.plugins}),r=n.body;return t.module&&(!1===t.inlineRuntimeFunctions&&(r='var pug = require("pug-runtime");'+r),r+=" module.exports = "+(t.name||"template")+";"),{body:r,dependencies:n.dependencies}},n.compileClient=function(e,t){return n.compileClientWithDependenciesTracked(e,t).body},n.compileFile=function(e,t){return t=t||{},t.filename=e,s(t)},n.render=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof r){var i;try{i=n.render(e,t)}catch(e){return r(e)}return r(null,i)}if((t=t||{}).cache&&!t.filename)throw new Error('the "filename" option is required for caching');return s(t,e)(t)},n.renderFile=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof r){var i;try{i=n.renderFile(e,t)}catch(e){return r(e)}return r(null,i)}return t=t||{},t.filename=e,s(t)(t)},n.compileFileClient=function(e,t){var r=e+":client";if(t=t||{},t.filename=e,t.cache&&n.cache[r])return n.cache[r];var i=a.readFileSync(t.filename,"utf8"),o=n.compileClient(i,t);return t.cache&&(n.cache[r]=o),o},n.__express=function(e,r,i){void 0==r.compileDebug&&"production"===t.env.NODE_ENV&&(r.compileDebug=!1),n.renderFile(e,r,i)}}).call(this,e("_process"))},{_process:31,fs:9,path:30,"pug-code-gen":41,"pug-filters":43,"pug-lexer":130,"pug-linker":118,"pug-load":119,"pug-parser":120,"pug-runtime":123,"pug-runtime/wrap":127,"pug-strip-comments":128}]},{},[]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay\r\n\t.top\r\n\t\t.row\r\n\t\t\t.cell A\r\n\t\t\t.cell B\r\n\t\t\t.cell C\r\n\t\t.row\r\n\t\t\t.cell D\r\n\t\t\t.cell E\r\n\t\t\t.cell F\r\n\t.center\r\n\t\t.left\r\n\t\t\t.column\r\n\t\t\t\t.cell A\r\n\t\t\t\t.cell B\r\n\t\t\t\t.cell C\r\n\t\t\t.column\r\n\t\t\t\t.cell D\r\n\t\t\t\t.cell E\r\n\t\t\t\t.cell F\r\n\r\n\t\t.right\r\n\t\t\t.column\r\n\t\t\t\t.cell A\r\n\t\t\t\t.cell B\r\n\t\t\t\t.cell C\r\n\t\t\t.column\r\n\t\t\t\t.cell D\r\n\t\t\t\t.cell E\r\n\t\t\t\t.cell F\r\n\t.bottom\r\n\t\t.row\r\n\t\t\t.cell A\r\n\t\t\t.cell B\r\n\t\t\t.cell C\r\n\t\t.row\r\n\t\t\t.cell D\r\n\t\t\t.cell E\r\n\t\t\t.cell F\r\n");

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = {"root":"CustomExtension--FunctionBar","legendRow":"Row","legendCell":"Cell","topBar":"Top_FunctionBar","bottomBar":"Bottom_FunctionBar","leftBar":"Left_FunctionBar","rightBar":"Right_FunctionBar","_":""};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    static load(...args) { throw new Error("Module not implemented."); }
}
exports.Module = Module;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Glob {
    constructor(pattern) {
        this._globPattern = pattern;
        this._build_RegEx();
    }
    get pattern() { return this._globPattern; }
    get regEx() { return this._regexPattern; }
    match(path) {
        return (path.match(this._regEx)
            ? true
            : false);
    }
    _build_RegEx() {
        let pattern = _GLOB_TO_REGEX_MAP
            .reduce((pattern, { regEx, replacement }) => (pattern.replace(regEx, replacement)), this._globPattern);
        pattern = ("^" + pattern + "$");
        this._regexPattern = pattern;
        this._regEx = new RegExp(pattern);
    }
}
exports.Glob = Glob;
const _GLOB_TO_REGEX_MAP = [
    { regEx: /\\/g, replacement: "\\\\" },
    { regEx: /([^\\]+)\\\\\*\*\*$/g, replacement: "$1(\\\\.*$)?" },
    { regEx: /^\*\*\\\\\*$/g, replacement: ".*" },
    { regEx: /(?<!^)\\\\\*\*\\\\\*$/g, replacement: "\\\\.*" },
    { regEx: /^\*\*$/g, replacement: "[^\\\\\\\\]+" },
    { regEx: /^\*\*\\\\/g, replacement: ".*?\\\\" },
    { regEx: /\\\\\*\*/g, replacement: "\\\\[^\\\\\\\\]+" },
    { regEx: /^\*$/g, replacement: "[^\\\\]+" },
    { regEx: /\\\\\*$/g, replacement: "\\\\[^\\\\]+" },
];


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_emptyContainer_Indexes_1 = __webpack_require__(30);
const get_Rows_1 = __webpack_require__(11);
const get_Columns_1 = __webpack_require__(12);
const __Main__1 = __importDefault(__webpack_require__(10));
class default_1 {
    static allRows() { __Main__1.default.rows({ exclude: ["**\\*"] }); }
    static allColumns() { __Main__1.default.columns({ exclude: ["**\\*"] }); }
    static emptyRows() {
        const columns = get_Columns_1.get_Columns();
        _hide_Containers({
            containers: get_Rows_1.get_Rows(),
            emptyContainer_Indexes: get_emptyContainer_Indexes_1.get_EmptyRow_Indexes(columns),
        });
    }
    static emptyColumns() {
        const rows = get_Rows_1.get_Rows();
        _hide_Containers({
            containers: get_Columns_1.get_Columns(),
            emptyContainer_Indexes: get_emptyContainer_Indexes_1.get_EmptyColumn_Indexes(rows),
        });
    }
}
exports.default = default_1;
function _hide_Containers({ containers, emptyContainer_Indexes }) {
    containers.forEach(container => {
        const { descendants } = container;
        const has_Descendants = (descendants.length > 0);
        if (!_is_Empty(container, emptyContainer_Indexes)) { }
        else if ((!has_Descendants)
            || ((has_Descendants) && descendants.every(child => _is_Empty(child, emptyContainer_Indexes)))) {
            container.hide();
        }
    });
}
function _is_Empty(container, emptyContainer_Indexes) { return emptyContainer_Indexes.includes(container.modelIndex); }


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const KanbanTool_1 = __webpack_require__(2);
function get_EmptyRow_Indexes(columns) {
    const hiddenColumn_Indexes = columns
        .filter(column => column.is_Collapsed)
        .map(column => column.modelIndex);
    return _get_EmptyRow_Indexes(hiddenColumn_Indexes);
}
exports.get_EmptyRow_Indexes = get_EmptyRow_Indexes;
function get_EmptyColumn_Indexes(rows) {
    const hiddenRow_Indexes = rows
        .filter(row => row.is_Collapsed)
        .map(row => row.modelIndex);
    return _get_EmptyColumn_Indexes(hiddenRow_Indexes);
}
exports.get_EmptyColumn_Indexes = get_EmptyColumn_Indexes;
function _get_EmptyCell_Map() {
    const { rows, columns } = _get_Containers();
    const cellMap = Array.from({ length: rows.length })
        .map(x => []);
    rows.forEach((row, rowIndex) => {
        columns.forEach(column => {
            const is_Empty = _get_Cell_IsEmpty(row, column);
            cellMap[rowIndex].push(is_Empty);
        });
    });
    return cellMap;
}
function _get_Containers() {
    return {
        rows: KanbanTool_1.activeBoard.swimlanes().toArray(),
        columns: KanbanTool_1.activeBoard.workflowStages().toArray().splice(1),
    };
}
function _get_Cell_IsEmpty(row, column) {
    const tasks = _get_Tasks(row, column);
    return (tasks.length == 0);
}
function _get_Tasks(row, column) {
    return (KanbanTool_1.activeBoard.tasks()
        .filter(task => (task.swimlane() === row)
        && (task.workflowStage() === column)));
}
function _get_EmptyRow_Indexes(hiddenColumn_Indexes) {
    const emptyCell_Map = _get_EmptyCell_Map();
    const rowCount = emptyCell_Map.length;
    const emptyRows = [];
    hiddenColumn_Indexes.forEach(columnIndex => {
        emptyCell_Map.forEach(row => {
            row[columnIndex] = true;
        });
    });
    for (let rowIndex = 0; (rowIndex < rowCount); rowIndex++) {
        const row_IsEmpty = emptyCell_Map[rowIndex].every(is_Empty => (is_Empty == true));
        if (row_IsEmpty) {
            emptyRows.push(rowIndex);
        }
    }
    return emptyRows;
}
function _get_EmptyColumn_Indexes(hiddenRow_Indexes) {
    const emptyCell_Map = _get_EmptyCell_Map();
    const columnCount = emptyCell_Map[0].length;
    const emptyColumns = [];
    hiddenRow_Indexes.forEach(rowIndex => {
        emptyCell_Map[rowIndex] =
            emptyCell_Map[rowIndex].map(is_Empty => true);
    });
    for (let columnIndex = 0; (columnIndex < columnCount); columnIndex++) {
        const cells = emptyCell_Map.map(row => row[columnIndex]);
        const column_IsEmpty = cells.every(is_Empty => (is_Empty == true));
        if (column_IsEmpty) {
            emptyColumns.push(columnIndex);
        }
    }
    return emptyColumns;
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __Main__1 = __webpack_require__(1);
const { Entry, Position, Show, Hide } = __Main__1.FunctionBar;
exports.default = new __Main__1.FunctionBar({
    position: Position.Left,
    entryGroups: [
        [
            new Entry({
                name: "Show: All Rows",
                on_Load: () => {
                    Show.allRows();
                },
            }),
            new Entry({
                name: "Show: All Columns",
                on_Load: () => {
                    Show.allColumns();
                },
            }),
            new Entry({
                name: "Hide: Empty Rows",
                on_Load: () => {
                    Hide.emptyRows();
                },
            }),
            new Entry({
                name: "Hide: Empty Columns",
                on_Load: () => {
                    Hide.emptyColumns();
                },
            }),
        ],
    ],
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __Main__1 = __webpack_require__(1);
const { Entry, Position, Show, Hide } = __Main__1.FunctionBar;
exports.default = new __Main__1.FunctionBar({
    position: Position.Right,
    entryGroups: [
        [
            new Entry({
                name: "LOL",
                on_Load: () => {
                    Show.allRows();
                },
            }),
            new Entry({
                name: "WUT",
                on_Load: () => {
                    Show.allColumns();
                },
            }),
        ],
    ],
});


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __Main__1 = __webpack_require__(1);
const { Entry, Position, Show, Hide } = __Main__1.FunctionBar;
exports.default = new __Main__1.FunctionBar({
    position: Position.Top,
    autoMap_KeyBindings: true,
    keyBinding_Modifiers: ["alt"],
    entryGroups: [
        [
            new Entry({
                name: "Active",
                on_Load: () => {
                    Show.rows({ include: ["Routine", "Tasks.Active"] });
                    Show.allColumns();
                },
            }),
            new Entry({
                name: "Plan",
                on_Load: () => {
                    Show.allColumns();
                    Show.allRows();
                },
            }),
        ],
        [
            new Entry({
                name: "Routine",
                on_Load: () => {
                    Show.rows({ include: ["Routine"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
            new Entry({
                name: "Today",
                on_Load: () => {
                    Show.rows({ include: ["Tasks.Active"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
            new Entry({
                name: "Routine.Short",
                on_Load: () => {
                    Show.rows({ include: ["Routine.Short"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
        ],
    ],
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __Main__1 = __webpack_require__(1);
const { Entry, Position, Show, Hide } = __Main__1.FunctionBar;
exports.default = new __Main__1.FunctionBar({
    position: Position.Bottom,
    autoMap_KeyBindings: true,
    keyBinding_Modifiers: [],
    entryGroups: [
        [
            new Entry({
                name: "Active",
                on_Load: () => {
                    Show.rows({ include: ["Routine", "Tasks.Active"] });
                    Show.allColumns();
                },
            }),
            new Entry({
                name: "Plan",
                on_Load: () => {
                    Show.allColumns();
                    Show.allRows();
                },
            }),
        ],
        [
            new Entry({
                name: "Routine",
                on_Load: () => {
                    Show.rows({ include: ["Routine"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
            new Entry({
                name: "Today",
                on_Load: () => {
                    Show.rows({ include: ["Tasks.Active"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
            new Entry({
                name: "Routine.Short",
                on_Load: () => {
                    Show.rows({ include: ["Routine.Short"] });
                    Show.allColumns();
                    Hide.emptyColumns();
                },
            }),
        ],
        [
            new Entry({
                name: "Show.allRows",
                on_Load: () => {
                    Show.allRows();
                },
            }),
            new Entry({
                name: "Show.allColumns",
                on_Load: () => {
                    Show.allColumns();
                },
            }),
            new Entry({
                name: "Hide.emptyRows",
                on_Load: () => {
                    Hide.emptyRows();
                },
            }),
            new Entry({
                name: "Hide.emptyColumns",
                on_Load: () => {
                    Hide.emptyColumns();
                },
            }),
        ],
    ],
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __main__1 = __webpack_require__(6);
const jquery_1 = __importDefault(__webpack_require__(0));
const $ = jquery_1.default;
class FilterKeybindings {
    static focus_SearchField(event) {
        const searchField = $("#kt-board_search-q");
        searchField.focus();
    }
    static show_FilterMenu(event) {
        const filterMenu = $(".kt-board_search-filters_popover");
        const displayValue = (filterMenu.css("display") == "none")
            ? "block"
            : "none";
        filterMenu.css("display", displayValue);
    }
}
__decorate([
    __main__1.KeyBinding.add("Ctrl + F", { preventDefault: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FilterKeybindings, "focus_SearchField", null);
__decorate([
    __main__1.KeyBinding.add("Ctrl + Space", { preventDefault: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FilterKeybindings, "show_FilterMenu", null);


/***/ })
/******/ ]);