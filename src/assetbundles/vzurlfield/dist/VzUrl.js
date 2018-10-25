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
/******/ 	__webpack_require__.p = "/cpresources/vzurl/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assetbundles/vzurlfield/src/js/VzUrl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ip-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/ip-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var v4 = '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}';
var v6 = '(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+';

var ip = module.exports = function (opts) {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)') :
	                    new RegExp('(?:' + v4 + ')|(?:' + v6 + ')', 'g');
};

ip.v4 = function (opts) {
	opts = opts || {};
	return opts.exact ? new RegExp('^' + v4 + '$') : new RegExp(v4, 'g');
};

ip.v6 = function (opts) {
	opts = opts || {};
	return opts.exact ? new RegExp('^' + v6 + '$') : new RegExp(v6, 'g');
};


/***/ }),

/***/ "./node_modules/throttle-debounce/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.esm.js ***!
  \*****************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle ( delay, noTrailing, callback, debounceMode ) {

	/*
	 * After wrapper has stopped being called, this timeout ensures that
	 * `callback` is executed at the proper times in `throttle` and `end`
	 * debounce modes.
	 */
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	/*
	 * The `wrapper` function encapsulates all of the throttling / debouncing
	 * functionality and when executed will limit the rate at which `callback`
	 * is executed.
	 */
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		/*
		 * If `debounceMode` is true (at begin) this is used to clear the flag
		 * to allow future `callback` executions.
		 */
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			/*
			 * Since `wrapper` is being called for the first time and
			 * `debounceMode` is true (at begin), execute `callback`.
			 */
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			/*
			 * In throttle mode, if `delay` time has been exceeded, execute
			 * `callback`.
			 */
			exec();

		} else if ( noTrailing !== true ) {
			/*
			 * In trailing throttle mode, since `delay` time has not been
			 * exceeded, schedule `callback` to execute `delay` ms after most
			 * recent execution.
			 *
			 * If `debounceMode` is true (at begin), schedule `clear` to execute
			 * after `delay` ms.
			 *
			 * If `debounceMode` is false (at end), schedule `callback` to
			 * execute after `delay` ms.
			 */
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

}

/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
function debounce ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./node_modules/tlds/index.js":
/*!************************************!*\
  !*** ./node_modules/tlds/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "ac",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "active",
  "actor",
  "ad",
  "adac",
  "ads",
  "adult",
  "ae",
  "aeg",
  "aero",
  "aetna",
  "af",
  "afamilycompany",
  "afl",
  "africa",
  "ag",
  "agakhan",
  "agency",
  "ai",
  "aig",
  "aigo",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "al",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "am",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "ao",
  "aol",
  "apartments",
  "app",
  "apple",
  "aq",
  "aquarelle",
  "ar",
  "arab",
  "aramco",
  "archi",
  "army",
  "arpa",
  "art",
  "arte",
  "as",
  "asda",
  "asia",
  "associates",
  "at",
  "athleta",
  "attorney",
  "au",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aw",
  "aws",
  "ax",
  "axa",
  "az",
  "azure",
  "ba",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "bd",
  "be",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bf",
  "bg",
  "bh",
  "bharti",
  "bi",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "biz",
  "bj",
  "black",
  "blackfriday",
  "blanco",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bm",
  "bms",
  "bmw",
  "bn",
  "bnl",
  "bnpparibas",
  "bo",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "br",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bs",
  "bt",
  "budapest",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "cartier",
  "casa",
  "case",
  "caseih",
  "cash",
  "casino",
  "cat",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "cc",
  "cd",
  "ceb",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfa",
  "cfd",
  "cg",
  "ch",
  "chanel",
  "channel",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "chrysler",
  "church",
  "ci",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "coop",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cr",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "csc",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "de",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doctor",
  "dodge",
  "dog",
  "doha",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "duck",
  "dunlop",
  "duns",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "dz",
  "earth",
  "eat",
  "ec",
  "eco",
  "edeka",
  "edu",
  "education",
  "ee",
  "eg",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epost",
  "epson",
  "equipment",
  "er",
  "ericsson",
  "erni",
  "es",
  "esq",
  "estate",
  "esurance",
  "et",
  "etisalat",
  "eu",
  "eurovision",
  "eus",
  "events",
  "everbank",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fi",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "fm",
  "fo",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "fr",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fujixerox",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "ga",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gea",
  "gent",
  "genting",
  "george",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "giving",
  "gl",
  "glade",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "gn",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodhands",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "gov",
  "gp",
  "gq",
  "gr",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "gs",
  "gt",
  "gu",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hk",
  "hkt",
  "hm",
  "hn",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "honeywell",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hr",
  "hsbc",
  "ht",
  "hu",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "id",
  "ie",
  "ieee",
  "ifm",
  "ikano",
  "il",
  "im",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "in",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "int",
  "intel",
  "international",
  "intuit",
  "investments",
  "io",
  "ipiranga",
  "iq",
  "ir",
  "irish",
  "is",
  "iselect",
  "ismaili",
  "ist",
  "istanbul",
  "it",
  "itau",
  "itv",
  "iveco",
  "iwc",
  "jaguar",
  "java",
  "jcb",
  "jcp",
  "je",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jlc",
  "jll",
  "jm",
  "jmp",
  "jnj",
  "jo",
  "jobs",
  "joburg",
  "jot",
  "joy",
  "jp",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "ke",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kg",
  "kh",
  "ki",
  "kia",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kosher",
  "kp",
  "kpmg",
  "kpn",
  "kr",
  "krd",
  "kred",
  "kuokgroup",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "ladbrokes",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "lancome",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "li",
  "liaison",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "lixil",
  "lk",
  "llc",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "lr",
  "ls",
  "lt",
  "ltd",
  "ltda",
  "lu",
  "lundbeck",
  "lupin",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mc",
  "mckinsey",
  "md",
  "me",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "meo",
  "merckmsd",
  "metlife",
  "mg",
  "mh",
  "miami",
  "microsoft",
  "mil",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mk",
  "ml",
  "mlb",
  "mls",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "mobile",
  "mobily",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mopar",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "movistar",
  "mp",
  "mq",
  "mr",
  "ms",
  "msd",
  "mt",
  "mtn",
  "mtr",
  "mu",
  "museum",
  "mutual",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nab",
  "nadex",
  "nagoya",
  "name",
  "nationwide",
  "natura",
  "navy",
  "nba",
  "nc",
  "ne",
  "nec",
  "net",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "newholland",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nf",
  "nfl",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nl",
  "no",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "obi",
  "observer",
  "off",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "om",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "onyourside",
  "ooo",
  "open",
  "oracle",
  "orange",
  "org",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "pa",
  "page",
  "panasonic",
  "panerai",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pe",
  "pet",
  "pf",
  "pfizer",
  "pg",
  "ph",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "piaget",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "pk",
  "pl",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "post",
  "pr",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "pro",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "ps",
  "pt",
  "pub",
  "pw",
  "pwc",
  "py",
  "qa",
  "qpon",
  "quebec",
  "quest",
  "qvc",
  "racing",
  "radio",
  "raid",
  "re",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "rightathome",
  "ril",
  "rio",
  "rip",
  "rmit",
  "ro",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rs",
  "rsvp",
  "ru",
  "rugby",
  "ruhr",
  "run",
  "rw",
  "rwe",
  "ryukyu",
  "sa",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sapo",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sb",
  "sbi",
  "sbs",
  "sc",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scjohnson",
  "scor",
  "scot",
  "sd",
  "se",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "sg",
  "sh",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "shriram",
  "si",
  "silk",
  "sina",
  "singles",
  "site",
  "sj",
  "sk",
  "ski",
  "skin",
  "sky",
  "skype",
  "sl",
  "sling",
  "sm",
  "smart",
  "smile",
  "sn",
  "sncf",
  "so",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "space",
  "spiegel",
  "sport",
  "spot",
  "spreadbetting",
  "sr",
  "srl",
  "srt",
  "st",
  "stada",
  "staples",
  "star",
  "starhub",
  "statebank",
  "statefarm",
  "statoil",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "swatch",
  "swiftcover",
  "swiss",
  "sx",
  "sy",
  "sydney",
  "symantec",
  "systems",
  "sz",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tc",
  "tci",
  "td",
  "tdk",
  "team",
  "tech",
  "technology",
  "tel",
  "telecity",
  "telefonica",
  "temasek",
  "tennis",
  "teva",
  "tf",
  "tg",
  "th",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tjmaxx",
  "tjx",
  "tk",
  "tkmaxx",
  "tl",
  "tm",
  "tmall",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tt",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tv",
  "tvs",
  "tw",
  "tz",
  "ua",
  "ubank",
  "ubs",
  "uconnect",
  "ug",
  "uk",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vana",
  "vanguard",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "vista",
  "vistaprint",
  "viva",
  "vivo",
  "vlaanderen",
  "vn",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "warman",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wed",
  "wedding",
  "weibo",
  "weir",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "ws",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम", // xn--11b4c3d
  "セール", // xn--1ck2e1b
  "佛山", // xn--1qqw23a
  "ಭಾರತ", // xn--2scrj9c
  "慈善", // xn--30rr7y
  "集团", // xn--3bst00m
  "在线", // xn--3ds443g
  "한국", // xn--3e0b707e
  "ଭାରତ", // xn--3hcrj9c
  "大众汽车", // xn--3oq18vl8pn36a
  "点看", // xn--3pxu8k
  "คอม", // xn--42c2d9a
  "ভাৰত", // xn--45br5cyl
  "ভারত", // xn--45brj9c
  "八卦", // xn--45q11c
  "موقع", // xn--4gbrim
  "বাংলা", // xn--54b7fta0cc
  "公益", // xn--55qw42g
  "公司", // xn--55qx5d
  "香格里拉", // xn--5su34j936bgsg
  "网站", // xn--5tzm5g
  "移动", // xn--6frz82g
  "我爱你", // xn--6qq986b3xl
  "москва", // xn--80adxhks
  "қаз", // xn--80ao21a
  "католик", // xn--80aqecdr1a
  "онлайн", // xn--80asehdb
  "сайт", // xn--80aswg
  "联通", // xn--8y0a063a
  "срб", // xn--90a3ac
  "бг", // xn--90ae
  "бел", // xn--90ais
  "קום", // xn--9dbq2a
  "时尚", // xn--9et52u
  "微博", // xn--9krt00a
  "淡马锡", // xn--b4w605ferd
  "ファッション", // xn--bck1b9a5dre4c
  "орг", // xn--c1avg
  "नेट", // xn--c2br7g
  "ストア", // xn--cck2b3b
  "삼성", // xn--cg4bki
  "சிங்கப்பூர்", // xn--clchc0ea0b2g2a9gcd
  "商标", // xn--czr694b
  "商店", // xn--czrs0t
  "商城", // xn--czru2d
  "дети", // xn--d1acj3b
  "мкд", // xn--d1alf
  "ею", // xn--e1a4c
  "ポイント", // xn--eckvdtc9d
  "新闻", // xn--efvy88h
  "工行", // xn--estv75g
  "家電", // xn--fct429k
  "كوم", // xn--fhbei
  "中文网", // xn--fiq228c5hs
  "中信", // xn--fiq64b
  "中国", // xn--fiqs8s
  "中國", // xn--fiqz9s
  "娱乐", // xn--fjq720a
  "谷歌", // xn--flw351e
  "భారత్", // xn--fpcrj9c3d
  "ලංකා", // xn--fzc2c9e2c
  "電訊盈科", // xn--fzys8d69uvgm
  "购物", // xn--g2xx48c
  "クラウド", // xn--gckr3f0f
  "ભારત", // xn--gecrj9c
  "通販", // xn--gk3at1e
  "भारतम्", // xn--h2breg3eve
  "भारत", // xn--h2brj9c
  "भारोत", // xn--h2brj9c8c
  "网店", // xn--hxt814e
  "संगठन", // xn--i1b6b1a6a2e
  "餐厅", // xn--imr513n
  "网络", // xn--io0a7i
  "ком", // xn--j1aef
  "укр", // xn--j1amh
  "香港", // xn--j6w193g
  "诺基亚", // xn--jlq61u9w7b
  "食品", // xn--jvr189m
  "飞利浦", // xn--kcrx77d1x4a
  "台湾", // xn--kprw13d
  "台灣", // xn--kpry57d
  "手表", // xn--kpu716f
  "手机", // xn--kput3i
  "мон", // xn--l1acc
  "الجزائر", // xn--lgbbat1ad8j
  "عمان", // xn--mgb9awbf
  "ارامكو", // xn--mgba3a3ejt
  "ایران", // xn--mgba3a4f16a
  "العليان", // xn--mgba7c0bbn0a
  "اتصالات", // xn--mgbaakc7dvf
  "امارات", // xn--mgbaam7a8h
  "بازار", // xn--mgbab2bd
  "پاکستان", // xn--mgbai9azgqp6j
  "الاردن", // xn--mgbayh7gpa
  "موبايلي", // xn--mgbb9fbpob
  "بارت", // xn--mgbbh1a
  "بھارت", // xn--mgbbh1a71e
  "المغرب", // xn--mgbc0a9azcg
  "ابوظبي", // xn--mgbca7dzdo
  "السعودية", // xn--mgberp4a5d4ar
  "ڀارت", // xn--mgbgu82a
  "كاثوليك", // xn--mgbi4ecexp
  "سودان", // xn--mgbpl2fh
  "همراه", // xn--mgbt3dhd
  "عراق", // xn--mgbtx2b
  "مليسيا", // xn--mgbx4cd0ab
  "澳門", // xn--mix891f
  "닷컴", // xn--mk1bu44c
  "政府", // xn--mxtq1m
  "شبكة", // xn--ngbc5azd
  "بيتك", // xn--ngbe9e0a
  "عرب", // xn--ngbrx
  "გე", // xn--node
  "机构", // xn--nqv7f
  "组织机构", // xn--nqv7fs00ema
  "健康", // xn--nyqy26a
  "ไทย", // xn--o3cw4h
  "سورية", // xn--ogbpf8fl
  "招聘", // xn--otu796d
  "рус", // xn--p1acf
  "рф", // xn--p1ai
  "珠宝", // xn--pbt977c
  "تونس", // xn--pgbs0dh
  "大拿", // xn--pssy2u
  "みんな", // xn--q9jyb4c
  "グーグル", // xn--qcka1pmc
  "ελ", // xn--qxam
  "世界", // xn--rhqv96g
  "書籍", // xn--rovu88b
  "ഭാരതം", // xn--rvc1e0am3e
  "ਭਾਰਤ", // xn--s9brj9c
  "网址", // xn--ses554g
  "닷넷", // xn--t60b56a
  "コム", // xn--tckwe
  "天主教", // xn--tiq49xqyj
  "游戏", // xn--unup4y
  "vermögensberater", // xn--vermgensberater-ctb
  "vermögensberatung", // xn--vermgensberatung-pwb
  "企业", // xn--vhquv
  "信息", // xn--vuq861b
  "嘉里大酒店", // xn--w4r85el8fhu5dnra
  "嘉里", // xn--w4rs40l
  "مصر", // xn--wgbh1c
  "قطر", // xn--wgbl6a
  "广东", // xn--xhq521b
  "இலங்கை", // xn--xkc2al3hye2a
  "இந்தியா", // xn--xkc2dl3a5ee0h
  "հայ", // xn--y9a3aq
  "新加坡", // xn--yfro4i67o
  "فلسطين", // xn--ygbi2ammx
  "政务", // xn--zfr164b
  "xperia",
  "xxx",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yt",
  "yun",
  "za",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zippo",
  "zm",
  "zone",
  "zuerich",
  "zw"
];


/***/ }),

/***/ "./node_modules/url-regex/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-regex/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ipRegex = __webpack_require__(/*! ip-regex */ "./node_modules/ip-regex/index.js");
const tlds = __webpack_require__(/*! tlds */ "./node_modules/tlds/index.js");

module.exports = opts => {
	opts = Object.assign({strict: true}, opts);

	const protocol = `(?:(?:[a-z]+:)?//)${opts.strict ? '' : '?'}`;
	const auth = '(?:\\S+(?::\\S*)?@)?';
	const ip = ipRegex.v4().source;
	const host = '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)';
	const domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*';
	const tld = `(?:\\.${opts.strict ? '(?:[a-z\\u00a1-\\uffff]{2,})' : `(?:${tlds.sort((a, b) => b.length - a.length).join('|')})`})\\.?`;
	const port = '(?::\\d{2,5})?';
	const path = '(?:[/?#][^\\s"]*)?';
	const regex = `(?:${protocol}|www\\.)${auth}(?:localhost|${ip}|${host}${domain}${tld})${port}${path}`;

	return opts.exact ? new RegExp(`(?:^${regex}$)`, 'i') : new RegExp(regex, 'ig');
};


/***/ }),

/***/ "./src/assetbundles/vzurlfield/src/css/VzUrl.css":
/*!*******************************************************!*\
  !*** ./src/assetbundles/vzurlfield/src/css/VzUrl.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assetbundles/vzurlfield/src/js/VzUrl.js":
/*!*****************************************************!*\
  !*** ./src/assetbundles/vzurlfield/src/js/VzUrl.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.esm.js");
/* harmony import */ var url_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-regex */ "./node_modules/url-regex/index.js");
/* harmony import */ var url_regex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_regex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_VzUrl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/VzUrl.css */ "./src/assetbundles/vzurlfield/src/css/VzUrl.css");
/* harmony import */ var _css_VzUrl_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_VzUrl_css__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * VZ URL plugin for Craft CMS
 *
 * VzUrlField Field JS
 *
 * @author    Eli Van Zoeren
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 * @link      https://github.com/elivz
 * @package   VzUrl
 * @since     2.0.0VzUrlVzUrlField
 */



/*
 * Ajax link validator for VZ URL fieldtype
 * by Eli Van Zoeren - http://elivz.com
 *
 * Depends on: jQuery, Craft
 */

var urlCache = {};
var delay = 500;

var VzUrl =
/*#__PURE__*/
function () {
  function VzUrl(field) {
    _classCallCheck(this, VzUrl);

    // Store elements we will work with
    this.$field = $("#".concat(field));
    this.$wrapper = this.$field.closest('.vzurl-wrapper');
    this.$msg = this.$wrapper.find('.vzurl-msg'); // Check URLs whenever the field changes

    this.$field.on('keyup paste', this.checkField.bind(this)); // Store the debounced validation function

    this.validate = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(delay, this._validate.bind(this));

    this.queueAjax = function () {
      var previous = new $.Deferred().resolve();
      return function (fn) {
        return previous = previous.then(fn);
      };
    }(); // Check existing URLs when the page loads


    this.checkField();
  }

  _createClass(VzUrl, [{
    key: "checkField",
    value: function checkField() {
      // Don't bother checking if it's empty
      if (this.$field.val() === '') {
        this.setStatus({
          status: 'empty'
        });
        return;
      } // Show the "spinner"


      this.setStatus({
        status: 'checking'
      });
      this.validate(this.$field);
    }
    /*
     * Actually send a request the the target URL to see if it exists
     */

  }, {
    key: "_validate",
    value: function _validate() {
      var _this = this;

      var url = this.$field.val();
      var data = {}; // Prepend site baseUrl to relative URIs

      if (url.charAt(0) === '/') {
        url = Craft.baseUrl.replace(/^(.+?)\/*?$/, '$1') + url;
      }

      if (url in urlCache) {
        // Use the cached data
        data = urlCache[url];
      } else if (url.charAt(0) === '#' || url.charAt(0) === '?') {
        // In-page links should always be considered valid
        data.status = 'valid';
      } else if (!url_regex__WEBPACK_IMPORTED_MODULE_1___default()({
        exact: true
      }).test(url)) {
        // That's not even a real URL
        data.status = 'invalid';
      } else {
        // Ajax call to proxy to check the url
        return Craft.postActionRequest('vzurl/validation/check', {
          url: url
        }, function (response, textStatus) {
          if (textStatus === 'success') {
            // Make sure the URL we are checking is still there
            if (response.original !== _this.$field.val()) {
              return;
            } // Show or hide the error message, as needed


            if (response.http_code >= 200 && response.http_code < 400) {
              if (response.original === response.final_url) {
                // The URL is valid
                data.status = 'valid';
              } else {
                // The URL is a redirect
                data.status = 'redirect';
                data.redirect = response.final_url;
              }
            } else {
              data.status = 'invalid';
            }
          } else {
            data.status = 'invalid';
          }

          _this.setStatus(data);

          urlCache[url] = data;
        });
      }

      if ('status' in data) {
        this.setStatus(data);
      }
    }
    /*
     * Set the styling and error message as needed
     */

  }, {
    key: "setStatus",
    value: function setStatus(data) {
      var _this2 = this;

      // Reset field
      this.$field.prev().remove();
      this.$wrapper.removeClass('errors redirect checking'); // Reset message

      this.$msg.empty();

      if (data.status === 'empty') {
        return;
      }

      if (data.status === 'invalid') {
        this.$msg.text(Craft.t('vzurl', 'This URL appears to be invalid'));
        this.$wrapper.addClass('errors');
      } else if (data.status === 'redirect') {
        if (this.$field.hasClass('follow-redirects')) {
          this.$wrapper.addClass('errors redirect');
          this.$msg.html("<span>".concat(Craft.t('vzurl', 'Redirects to'), " ").concat(data.redirect, "</span>"));
          $('<a/>', {
            text: Craft.t('vzurl', 'Update'),
            click: function click(event) {
              // Replace the field value with the redirect target
              _this2.$field.val(data.redirect);

              _this2.validate(_this2.$field);

              event.preventDefault();
            }
          }).appendTo(this.$msg);
        } else {
          data.status = 'valid';
        }
      } else if (data.status === 'checking') {
        this.$wrapper.addClass('checking');
      } // Add a "Open Page link"


      if (data.status !== 'empty' && data.status !== 'checking') {
        var $visitLink = $('<a/>', {
          href: this.$field.val(),
          class: 'vzurl-visit',
          target: '_blank',
          title: "".concat(Craft.t('vzurl', 'Visit URL'), ": ").concat(this.$field.val())
        });
        this.$field.before($visitLink);
      }
    }
  }]);

  return VzUrl;
}();

window.VzUrl = VzUrl;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lwLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RsZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3Z6dXJsZmllbGQvc3JjL2Nzcy9WelVybC5jc3M/OWExZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3Z6dXJsZmllbGQvc3JjL2pzL1Z6VXJsLmpzIl0sIm5hbWVzIjpbInVybENhY2hlIiwiZGVsYXkiLCJWelVybCIsImZpZWxkIiwiJGZpZWxkIiwiJCIsIiR3cmFwcGVyIiwiY2xvc2VzdCIsIiRtc2ciLCJmaW5kIiwib24iLCJjaGVja0ZpZWxkIiwiYmluZCIsInZhbGlkYXRlIiwiZGVib3VuY2UiLCJfdmFsaWRhdGUiLCJxdWV1ZUFqYXgiLCJwcmV2aW91cyIsIkRlZmVycmVkIiwicmVzb2x2ZSIsImZuIiwidGhlbiIsInZhbCIsInNldFN0YXR1cyIsInN0YXR1cyIsInVybCIsImRhdGEiLCJjaGFyQXQiLCJDcmFmdCIsImJhc2VVcmwiLCJyZXBsYWNlIiwidXJsVGVzdCIsImV4YWN0IiwidGVzdCIsInBvc3RBY3Rpb25SZXF1ZXN0IiwicmVzcG9uc2UiLCJ0ZXh0U3RhdHVzIiwib3JpZ2luYWwiLCJodHRwX2NvZGUiLCJmaW5hbF91cmwiLCJyZWRpcmVjdCIsInByZXYiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImVtcHR5IiwidGV4dCIsInQiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiaHRtbCIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZFRvIiwiJHZpc2l0TGluayIsImhyZWYiLCJjbGFzcyIsInRhcmdldCIsInRpdGxlIiwiYmVmb3JlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViLDBIQUEwSCxFQUFFO0FBQzVILDhCQUE4QixJQUFJLHVCQUF1QixJQUFJLEtBQUssSUFBSTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRThCOzs7Ozs7Ozs7Ozs7QUM1SDlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NwcmVzb3VyY2VzL3Z6dXJsL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hc3NldGJ1bmRsZXMvdnp1cmxmaWVsZC9zcmMvanMvVnpVcmwuanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2NCA9ICcoPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfDFbMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pKXszfSc7XG52YXIgdjYgPSAnKD86KD86WzAtOWEtZkEtRjpdKXsxLDR9KD86KD86Oig/OlswLTlhLWZBLUZdKXsxLDR9fDopKXsyLDd9KSsnO1xuXG52YXIgaXAgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRyZXR1cm4gb3B0cy5leGFjdCA/IG5ldyBSZWdFeHAoJyg/Ol4nICsgdjQgKyAnJCl8KD86XicgKyB2NiArICckKScpIDpcblx0ICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCcoPzonICsgdjQgKyAnKXwoPzonICsgdjYgKyAnKScsICdnJyk7XG59O1xuXG5pcC52NCA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHRyZXR1cm4gb3B0cy5leGFjdCA/IG5ldyBSZWdFeHAoJ14nICsgdjQgKyAnJCcpIDogbmV3IFJlZ0V4cCh2NCwgJ2cnKTtcbn07XG5cbmlwLnY2ID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHJldHVybiBvcHRzLmV4YWN0ID8gbmV3IFJlZ0V4cCgnXicgKyB2NiArICckJykgOiBuZXcgUmVnRXhwKHY2LCAnZycpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbbm9UcmFpbGluZ10gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlICggZGVsYXksIG5vVHJhaWxpbmcsIGNhbGxiYWNrLCBkZWJvdW5jZU1vZGUgKSB7XG5cblx0Lypcblx0ICogQWZ0ZXIgd3JhcHBlciBoYXMgc3RvcHBlZCBiZWluZyBjYWxsZWQsIHRoaXMgdGltZW91dCBlbnN1cmVzIHRoYXRcblx0ICogYGNhbGxiYWNrYCBpcyBleGVjdXRlZCBhdCB0aGUgcHJvcGVyIHRpbWVzIGluIGB0aHJvdHRsZWAgYW5kIGBlbmRgXG5cdCAqIGRlYm91bmNlIG1vZGVzLlxuXHQgKi9cblx0dmFyIHRpbWVvdXRJRDtcblxuXHQvLyBLZWVwIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgYGNhbGxiYWNrYCB3YXMgZXhlY3V0ZWQuXG5cdHZhciBsYXN0RXhlYyA9IDA7XG5cblx0Ly8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXHRpZiAoIHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicgKSB7XG5cdFx0ZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG5cdFx0Y2FsbGJhY2sgPSBub1RyYWlsaW5nO1xuXHRcdG5vVHJhaWxpbmcgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHQvKlxuXHQgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG5cdCAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG5cdCAqIGlzIGV4ZWN1dGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gd3JhcHBlciAoKSB7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIGVsYXBzZWQgPSBOdW1iZXIobmV3IERhdGUoKSkgLSBsYXN0RXhlYztcblx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuXHRcdC8vIEV4ZWN1dGUgYGNhbGxiYWNrYCBhbmQgdXBkYXRlIHRoZSBgbGFzdEV4ZWNgIHRpbWVzdGFtcC5cblx0XHRmdW5jdGlvbiBleGVjICgpIHtcblx0XHRcdGxhc3RFeGVjID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbikgdGhpcyBpcyB1c2VkIHRvIGNsZWFyIHRoZSBmbGFnXG5cdFx0ICogdG8gYWxsb3cgZnV0dXJlIGBjYWxsYmFja2AgZXhlY3V0aW9ucy5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjbGVhciAoKSB7XG5cdFx0XHR0aW1lb3V0SUQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCApIHtcblx0XHRcdC8qXG5cdFx0XHQgKiBTaW5jZSBgd3JhcHBlcmAgaXMgYmVpbmcgY2FsbGVkIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcblx0XHRcdCAqIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgZXhlY3V0ZSBgY2FsbGJhY2tgLlxuXHRcdFx0ICovXG5cdFx0XHRleGVjKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXQuXG5cdFx0aWYgKCB0aW1lb3V0SUQgKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dElEKTtcblx0XHR9XG5cblx0XHRpZiAoIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSApIHtcblx0XHRcdC8qXG5cdFx0XHQgKiBJbiB0aHJvdHRsZSBtb2RlLCBpZiBgZGVsYXlgIHRpbWUgaGFzIGJlZW4gZXhjZWVkZWQsIGV4ZWN1dGVcblx0XHRcdCAqIGBjYWxsYmFja2AuXG5cdFx0XHQgKi9cblx0XHRcdGV4ZWMoKTtcblxuXHRcdH0gZWxzZSBpZiAoIG5vVHJhaWxpbmcgIT09IHRydWUgKSB7XG5cdFx0XHQvKlxuXHRcdFx0ICogSW4gdHJhaWxpbmcgdGhyb3R0bGUgbW9kZSwgc2luY2UgYGRlbGF5YCB0aW1lIGhhcyBub3QgYmVlblxuXHRcdFx0ICogZXhjZWVkZWQsIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBgZGVsYXlgIG1zIGFmdGVyIG1vc3Rcblx0XHRcdCAqIHJlY2VudCBleGVjdXRpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGVcblx0XHRcdCAqIGFmdGVyIGBkZWxheWAgbXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksIHNjaGVkdWxlIGBjYWxsYmFja2AgdG9cblx0XHRcdCAqIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdCAqL1xuXHRcdFx0dGltZW91dElEID0gc2V0VGltZW91dChkZWJvdW5jZU1vZGUgPyBjbGVhciA6IGV4ZWMsIGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkID8gZGVsYXkgLSBlbGFwc2VkIDogZGVsYXkpO1xuXHRcdH1cblxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXHRyZXR1cm4gd3JhcHBlcjtcblxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQgKi9cblxuLyoqXG4gKiBEZWJvdW5jZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRGVib3VuY2luZywgdW5saWtlIHRocm90dGxpbmcsXG4gKiBndWFyYW50ZWVzIHRoYXQgYSBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIGEgc2luZ2xlIHRpbWUsIGVpdGhlciBhdCB0aGVcbiAqIHZlcnkgYmVnaW5uaW5nIG9mIGEgc2VyaWVzIG9mIGNhbGxzLCBvciBhdCB0aGUgdmVyeSBlbmQuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgIGRlbGF5ICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgW2F0QmVnaW5dICAgICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIGF0QmVnaW4gaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgb25seSBiZSBleGVjdXRlZCBgZGVsYXlgIG1pbGxpc2Vjb25kc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgZGVib3VuY2VkLWZ1bmN0aW9uIGNhbGwuIElmIGF0QmVnaW4gaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmx5IGF0IHRoZSBmaXJzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLCB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldCkuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIGRlYm91bmNlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UgKCBkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2sgKSB7XG5cdHJldHVybiBjYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhyb3R0bGUoZGVsYXksIGF0QmVnaW4sIGZhbHNlKSA6IHRocm90dGxlKGRlbGF5LCBjYWxsYmFjaywgYXRCZWdpbiAhPT0gZmFsc2UpO1xufVxuXG5leHBvcnQgeyB0aHJvdHRsZSwgZGVib3VuY2UgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gW1xuICBcImFhYVwiLFxuICBcImFhcnBcIixcbiAgXCJhYmFydGhcIixcbiAgXCJhYmJcIixcbiAgXCJhYmJvdHRcIixcbiAgXCJhYmJ2aWVcIixcbiAgXCJhYmNcIixcbiAgXCJhYmxlXCIsXG4gIFwiYWJvZ2Fkb1wiLFxuICBcImFidWRoYWJpXCIsXG4gIFwiYWNcIixcbiAgXCJhY2FkZW15XCIsXG4gIFwiYWNjZW50dXJlXCIsXG4gIFwiYWNjb3VudGFudFwiLFxuICBcImFjY291bnRhbnRzXCIsXG4gIFwiYWNvXCIsXG4gIFwiYWN0aXZlXCIsXG4gIFwiYWN0b3JcIixcbiAgXCJhZFwiLFxuICBcImFkYWNcIixcbiAgXCJhZHNcIixcbiAgXCJhZHVsdFwiLFxuICBcImFlXCIsXG4gIFwiYWVnXCIsXG4gIFwiYWVyb1wiLFxuICBcImFldG5hXCIsXG4gIFwiYWZcIixcbiAgXCJhZmFtaWx5Y29tcGFueVwiLFxuICBcImFmbFwiLFxuICBcImFmcmljYVwiLFxuICBcImFnXCIsXG4gIFwiYWdha2hhblwiLFxuICBcImFnZW5jeVwiLFxuICBcImFpXCIsXG4gIFwiYWlnXCIsXG4gIFwiYWlnb1wiLFxuICBcImFpcmJ1c1wiLFxuICBcImFpcmZvcmNlXCIsXG4gIFwiYWlydGVsXCIsXG4gIFwiYWtkblwiLFxuICBcImFsXCIsXG4gIFwiYWxmYXJvbWVvXCIsXG4gIFwiYWxpYmFiYVwiLFxuICBcImFsaXBheVwiLFxuICBcImFsbGZpbmFuelwiLFxuICBcImFsbHN0YXRlXCIsXG4gIFwiYWxseVwiLFxuICBcImFsc2FjZVwiLFxuICBcImFsc3RvbVwiLFxuICBcImFtXCIsXG4gIFwiYW1lcmljYW5leHByZXNzXCIsXG4gIFwiYW1lcmljYW5mYW1pbHlcIixcbiAgXCJhbWV4XCIsXG4gIFwiYW1mYW1cIixcbiAgXCJhbWljYVwiLFxuICBcImFtc3RlcmRhbVwiLFxuICBcImFuYWx5dGljc1wiLFxuICBcImFuZHJvaWRcIixcbiAgXCJhbnF1YW5cIixcbiAgXCJhbnpcIixcbiAgXCJhb1wiLFxuICBcImFvbFwiLFxuICBcImFwYXJ0bWVudHNcIixcbiAgXCJhcHBcIixcbiAgXCJhcHBsZVwiLFxuICBcImFxXCIsXG4gIFwiYXF1YXJlbGxlXCIsXG4gIFwiYXJcIixcbiAgXCJhcmFiXCIsXG4gIFwiYXJhbWNvXCIsXG4gIFwiYXJjaGlcIixcbiAgXCJhcm15XCIsXG4gIFwiYXJwYVwiLFxuICBcImFydFwiLFxuICBcImFydGVcIixcbiAgXCJhc1wiLFxuICBcImFzZGFcIixcbiAgXCJhc2lhXCIsXG4gIFwiYXNzb2NpYXRlc1wiLFxuICBcImF0XCIsXG4gIFwiYXRobGV0YVwiLFxuICBcImF0dG9ybmV5XCIsXG4gIFwiYXVcIixcbiAgXCJhdWN0aW9uXCIsXG4gIFwiYXVkaVwiLFxuICBcImF1ZGlibGVcIixcbiAgXCJhdWRpb1wiLFxuICBcImF1c3Bvc3RcIixcbiAgXCJhdXRob3JcIixcbiAgXCJhdXRvXCIsXG4gIFwiYXV0b3NcIixcbiAgXCJhdmlhbmNhXCIsXG4gIFwiYXdcIixcbiAgXCJhd3NcIixcbiAgXCJheFwiLFxuICBcImF4YVwiLFxuICBcImF6XCIsXG4gIFwiYXp1cmVcIixcbiAgXCJiYVwiLFxuICBcImJhYnlcIixcbiAgXCJiYWlkdVwiLFxuICBcImJhbmFtZXhcIixcbiAgXCJiYW5hbmFyZXB1YmxpY1wiLFxuICBcImJhbmRcIixcbiAgXCJiYW5rXCIsXG4gIFwiYmFyXCIsXG4gIFwiYmFyY2Vsb25hXCIsXG4gIFwiYmFyY2xheWNhcmRcIixcbiAgXCJiYXJjbGF5c1wiLFxuICBcImJhcmVmb290XCIsXG4gIFwiYmFyZ2FpbnNcIixcbiAgXCJiYXNlYmFsbFwiLFxuICBcImJhc2tldGJhbGxcIixcbiAgXCJiYXVoYXVzXCIsXG4gIFwiYmF5ZXJuXCIsXG4gIFwiYmJcIixcbiAgXCJiYmNcIixcbiAgXCJiYnRcIixcbiAgXCJiYnZhXCIsXG4gIFwiYmNnXCIsXG4gIFwiYmNuXCIsXG4gIFwiYmRcIixcbiAgXCJiZVwiLFxuICBcImJlYXRzXCIsXG4gIFwiYmVhdXR5XCIsXG4gIFwiYmVlclwiLFxuICBcImJlbnRsZXlcIixcbiAgXCJiZXJsaW5cIixcbiAgXCJiZXN0XCIsXG4gIFwiYmVzdGJ1eVwiLFxuICBcImJldFwiLFxuICBcImJmXCIsXG4gIFwiYmdcIixcbiAgXCJiaFwiLFxuICBcImJoYXJ0aVwiLFxuICBcImJpXCIsXG4gIFwiYmlibGVcIixcbiAgXCJiaWRcIixcbiAgXCJiaWtlXCIsXG4gIFwiYmluZ1wiLFxuICBcImJpbmdvXCIsXG4gIFwiYmlvXCIsXG4gIFwiYml6XCIsXG4gIFwiYmpcIixcbiAgXCJibGFja1wiLFxuICBcImJsYWNrZnJpZGF5XCIsXG4gIFwiYmxhbmNvXCIsXG4gIFwiYmxvY2tidXN0ZXJcIixcbiAgXCJibG9nXCIsXG4gIFwiYmxvb21iZXJnXCIsXG4gIFwiYmx1ZVwiLFxuICBcImJtXCIsXG4gIFwiYm1zXCIsXG4gIFwiYm13XCIsXG4gIFwiYm5cIixcbiAgXCJibmxcIixcbiAgXCJibnBwYXJpYmFzXCIsXG4gIFwiYm9cIixcbiAgXCJib2F0c1wiLFxuICBcImJvZWhyaW5nZXJcIixcbiAgXCJib2ZhXCIsXG4gIFwiYm9tXCIsXG4gIFwiYm9uZFwiLFxuICBcImJvb1wiLFxuICBcImJvb2tcIixcbiAgXCJib29raW5nXCIsXG4gIFwiYm9zY2hcIixcbiAgXCJib3N0aWtcIixcbiAgXCJib3N0b25cIixcbiAgXCJib3RcIixcbiAgXCJib3V0aXF1ZVwiLFxuICBcImJveFwiLFxuICBcImJyXCIsXG4gIFwiYnJhZGVzY29cIixcbiAgXCJicmlkZ2VzdG9uZVwiLFxuICBcImJyb2Fkd2F5XCIsXG4gIFwiYnJva2VyXCIsXG4gIFwiYnJvdGhlclwiLFxuICBcImJydXNzZWxzXCIsXG4gIFwiYnNcIixcbiAgXCJidFwiLFxuICBcImJ1ZGFwZXN0XCIsXG4gIFwiYnVnYXR0aVwiLFxuICBcImJ1aWxkXCIsXG4gIFwiYnVpbGRlcnNcIixcbiAgXCJidXNpbmVzc1wiLFxuICBcImJ1eVwiLFxuICBcImJ1enpcIixcbiAgXCJidlwiLFxuICBcImJ3XCIsXG4gIFwiYnlcIixcbiAgXCJielwiLFxuICBcImJ6aFwiLFxuICBcImNhXCIsXG4gIFwiY2FiXCIsXG4gIFwiY2FmZVwiLFxuICBcImNhbFwiLFxuICBcImNhbGxcIixcbiAgXCJjYWx2aW5rbGVpblwiLFxuICBcImNhbVwiLFxuICBcImNhbWVyYVwiLFxuICBcImNhbXBcIixcbiAgXCJjYW5jZXJyZXNlYXJjaFwiLFxuICBcImNhbm9uXCIsXG4gIFwiY2FwZXRvd25cIixcbiAgXCJjYXBpdGFsXCIsXG4gIFwiY2FwaXRhbG9uZVwiLFxuICBcImNhclwiLFxuICBcImNhcmF2YW5cIixcbiAgXCJjYXJkc1wiLFxuICBcImNhcmVcIixcbiAgXCJjYXJlZXJcIixcbiAgXCJjYXJlZXJzXCIsXG4gIFwiY2Fyc1wiLFxuICBcImNhcnRpZXJcIixcbiAgXCJjYXNhXCIsXG4gIFwiY2FzZVwiLFxuICBcImNhc2VpaFwiLFxuICBcImNhc2hcIixcbiAgXCJjYXNpbm9cIixcbiAgXCJjYXRcIixcbiAgXCJjYXRlcmluZ1wiLFxuICBcImNhdGhvbGljXCIsXG4gIFwiY2JhXCIsXG4gIFwiY2JuXCIsXG4gIFwiY2JyZVwiLFxuICBcImNic1wiLFxuICBcImNjXCIsXG4gIFwiY2RcIixcbiAgXCJjZWJcIixcbiAgXCJjZW50ZXJcIixcbiAgXCJjZW9cIixcbiAgXCJjZXJuXCIsXG4gIFwiY2ZcIixcbiAgXCJjZmFcIixcbiAgXCJjZmRcIixcbiAgXCJjZ1wiLFxuICBcImNoXCIsXG4gIFwiY2hhbmVsXCIsXG4gIFwiY2hhbm5lbFwiLFxuICBcImNoYXNlXCIsXG4gIFwiY2hhdFwiLFxuICBcImNoZWFwXCIsXG4gIFwiY2hpbnRhaVwiLFxuICBcImNocmlzdG1hc1wiLFxuICBcImNocm9tZVwiLFxuICBcImNocnlzbGVyXCIsXG4gIFwiY2h1cmNoXCIsXG4gIFwiY2lcIixcbiAgXCJjaXByaWFuaVwiLFxuICBcImNpcmNsZVwiLFxuICBcImNpc2NvXCIsXG4gIFwiY2l0YWRlbFwiLFxuICBcImNpdGlcIixcbiAgXCJjaXRpY1wiLFxuICBcImNpdHlcIixcbiAgXCJjaXR5ZWF0c1wiLFxuICBcImNrXCIsXG4gIFwiY2xcIixcbiAgXCJjbGFpbXNcIixcbiAgXCJjbGVhbmluZ1wiLFxuICBcImNsaWNrXCIsXG4gIFwiY2xpbmljXCIsXG4gIFwiY2xpbmlxdWVcIixcbiAgXCJjbG90aGluZ1wiLFxuICBcImNsb3VkXCIsXG4gIFwiY2x1YlwiLFxuICBcImNsdWJtZWRcIixcbiAgXCJjbVwiLFxuICBcImNuXCIsXG4gIFwiY29cIixcbiAgXCJjb2FjaFwiLFxuICBcImNvZGVzXCIsXG4gIFwiY29mZmVlXCIsXG4gIFwiY29sbGVnZVwiLFxuICBcImNvbG9nbmVcIixcbiAgXCJjb21cIixcbiAgXCJjb21jYXN0XCIsXG4gIFwiY29tbWJhbmtcIixcbiAgXCJjb21tdW5pdHlcIixcbiAgXCJjb21wYW55XCIsXG4gIFwiY29tcGFyZVwiLFxuICBcImNvbXB1dGVyXCIsXG4gIFwiY29tc2VjXCIsXG4gIFwiY29uZG9zXCIsXG4gIFwiY29uc3RydWN0aW9uXCIsXG4gIFwiY29uc3VsdGluZ1wiLFxuICBcImNvbnRhY3RcIixcbiAgXCJjb250cmFjdG9yc1wiLFxuICBcImNvb2tpbmdcIixcbiAgXCJjb29raW5nY2hhbm5lbFwiLFxuICBcImNvb2xcIixcbiAgXCJjb29wXCIsXG4gIFwiY29yc2ljYVwiLFxuICBcImNvdW50cnlcIixcbiAgXCJjb3Vwb25cIixcbiAgXCJjb3Vwb25zXCIsXG4gIFwiY291cnNlc1wiLFxuICBcImNyXCIsXG4gIFwiY3JlZGl0XCIsXG4gIFwiY3JlZGl0Y2FyZFwiLFxuICBcImNyZWRpdHVuaW9uXCIsXG4gIFwiY3JpY2tldFwiLFxuICBcImNyb3duXCIsXG4gIFwiY3JzXCIsXG4gIFwiY3J1aXNlXCIsXG4gIFwiY3J1aXNlc1wiLFxuICBcImNzY1wiLFxuICBcImN1XCIsXG4gIFwiY3Vpc2luZWxsYVwiLFxuICBcImN2XCIsXG4gIFwiY3dcIixcbiAgXCJjeFwiLFxuICBcImN5XCIsXG4gIFwiY3ltcnVcIixcbiAgXCJjeW91XCIsXG4gIFwiY3pcIixcbiAgXCJkYWJ1clwiLFxuICBcImRhZFwiLFxuICBcImRhbmNlXCIsXG4gIFwiZGF0YVwiLFxuICBcImRhdGVcIixcbiAgXCJkYXRpbmdcIixcbiAgXCJkYXRzdW5cIixcbiAgXCJkYXlcIixcbiAgXCJkY2xrXCIsXG4gIFwiZGRzXCIsXG4gIFwiZGVcIixcbiAgXCJkZWFsXCIsXG4gIFwiZGVhbGVyXCIsXG4gIFwiZGVhbHNcIixcbiAgXCJkZWdyZWVcIixcbiAgXCJkZWxpdmVyeVwiLFxuICBcImRlbGxcIixcbiAgXCJkZWxvaXR0ZVwiLFxuICBcImRlbHRhXCIsXG4gIFwiZGVtb2NyYXRcIixcbiAgXCJkZW50YWxcIixcbiAgXCJkZW50aXN0XCIsXG4gIFwiZGVzaVwiLFxuICBcImRlc2lnblwiLFxuICBcImRldlwiLFxuICBcImRobFwiLFxuICBcImRpYW1vbmRzXCIsXG4gIFwiZGlldFwiLFxuICBcImRpZ2l0YWxcIixcbiAgXCJkaXJlY3RcIixcbiAgXCJkaXJlY3RvcnlcIixcbiAgXCJkaXNjb3VudFwiLFxuICBcImRpc2NvdmVyXCIsXG4gIFwiZGlzaFwiLFxuICBcImRpeVwiLFxuICBcImRqXCIsXG4gIFwiZGtcIixcbiAgXCJkbVwiLFxuICBcImRucFwiLFxuICBcImRvXCIsXG4gIFwiZG9jc1wiLFxuICBcImRvY3RvclwiLFxuICBcImRvZGdlXCIsXG4gIFwiZG9nXCIsXG4gIFwiZG9oYVwiLFxuICBcImRvbWFpbnNcIixcbiAgXCJkb3RcIixcbiAgXCJkb3dubG9hZFwiLFxuICBcImRyaXZlXCIsXG4gIFwiZHR2XCIsXG4gIFwiZHViYWlcIixcbiAgXCJkdWNrXCIsXG4gIFwiZHVubG9wXCIsXG4gIFwiZHVuc1wiLFxuICBcImR1cG9udFwiLFxuICBcImR1cmJhblwiLFxuICBcImR2YWdcIixcbiAgXCJkdnJcIixcbiAgXCJkelwiLFxuICBcImVhcnRoXCIsXG4gIFwiZWF0XCIsXG4gIFwiZWNcIixcbiAgXCJlY29cIixcbiAgXCJlZGVrYVwiLFxuICBcImVkdVwiLFxuICBcImVkdWNhdGlvblwiLFxuICBcImVlXCIsXG4gIFwiZWdcIixcbiAgXCJlbWFpbFwiLFxuICBcImVtZXJja1wiLFxuICBcImVuZXJneVwiLFxuICBcImVuZ2luZWVyXCIsXG4gIFwiZW5naW5lZXJpbmdcIixcbiAgXCJlbnRlcnByaXNlc1wiLFxuICBcImVwb3N0XCIsXG4gIFwiZXBzb25cIixcbiAgXCJlcXVpcG1lbnRcIixcbiAgXCJlclwiLFxuICBcImVyaWNzc29uXCIsXG4gIFwiZXJuaVwiLFxuICBcImVzXCIsXG4gIFwiZXNxXCIsXG4gIFwiZXN0YXRlXCIsXG4gIFwiZXN1cmFuY2VcIixcbiAgXCJldFwiLFxuICBcImV0aXNhbGF0XCIsXG4gIFwiZXVcIixcbiAgXCJldXJvdmlzaW9uXCIsXG4gIFwiZXVzXCIsXG4gIFwiZXZlbnRzXCIsXG4gIFwiZXZlcmJhbmtcIixcbiAgXCJleGNoYW5nZVwiLFxuICBcImV4cGVydFwiLFxuICBcImV4cG9zZWRcIixcbiAgXCJleHByZXNzXCIsXG4gIFwiZXh0cmFzcGFjZVwiLFxuICBcImZhZ2VcIixcbiAgXCJmYWlsXCIsXG4gIFwiZmFpcndpbmRzXCIsXG4gIFwiZmFpdGhcIixcbiAgXCJmYW1pbHlcIixcbiAgXCJmYW5cIixcbiAgXCJmYW5zXCIsXG4gIFwiZmFybVwiLFxuICBcImZhcm1lcnNcIixcbiAgXCJmYXNoaW9uXCIsXG4gIFwiZmFzdFwiLFxuICBcImZlZGV4XCIsXG4gIFwiZmVlZGJhY2tcIixcbiAgXCJmZXJyYXJpXCIsXG4gIFwiZmVycmVyb1wiLFxuICBcImZpXCIsXG4gIFwiZmlhdFwiLFxuICBcImZpZGVsaXR5XCIsXG4gIFwiZmlkb1wiLFxuICBcImZpbG1cIixcbiAgXCJmaW5hbFwiLFxuICBcImZpbmFuY2VcIixcbiAgXCJmaW5hbmNpYWxcIixcbiAgXCJmaXJlXCIsXG4gIFwiZmlyZXN0b25lXCIsXG4gIFwiZmlybWRhbGVcIixcbiAgXCJmaXNoXCIsXG4gIFwiZmlzaGluZ1wiLFxuICBcImZpdFwiLFxuICBcImZpdG5lc3NcIixcbiAgXCJmalwiLFxuICBcImZrXCIsXG4gIFwiZmxpY2tyXCIsXG4gIFwiZmxpZ2h0c1wiLFxuICBcImZsaXJcIixcbiAgXCJmbG9yaXN0XCIsXG4gIFwiZmxvd2Vyc1wiLFxuICBcImZseVwiLFxuICBcImZtXCIsXG4gIFwiZm9cIixcbiAgXCJmb29cIixcbiAgXCJmb29kXCIsXG4gIFwiZm9vZG5ldHdvcmtcIixcbiAgXCJmb290YmFsbFwiLFxuICBcImZvcmRcIixcbiAgXCJmb3JleFwiLFxuICBcImZvcnNhbGVcIixcbiAgXCJmb3J1bVwiLFxuICBcImZvdW5kYXRpb25cIixcbiAgXCJmb3hcIixcbiAgXCJmclwiLFxuICBcImZyZWVcIixcbiAgXCJmcmVzZW5pdXNcIixcbiAgXCJmcmxcIixcbiAgXCJmcm9nYW5zXCIsXG4gIFwiZnJvbnRkb29yXCIsXG4gIFwiZnJvbnRpZXJcIixcbiAgXCJmdHJcIixcbiAgXCJmdWppdHN1XCIsXG4gIFwiZnVqaXhlcm94XCIsXG4gIFwiZnVuXCIsXG4gIFwiZnVuZFwiLFxuICBcImZ1cm5pdHVyZVwiLFxuICBcImZ1dGJvbFwiLFxuICBcImZ5aVwiLFxuICBcImdhXCIsXG4gIFwiZ2FsXCIsXG4gIFwiZ2FsbGVyeVwiLFxuICBcImdhbGxvXCIsXG4gIFwiZ2FsbHVwXCIsXG4gIFwiZ2FtZVwiLFxuICBcImdhbWVzXCIsXG4gIFwiZ2FwXCIsXG4gIFwiZ2FyZGVuXCIsXG4gIFwiZ2JcIixcbiAgXCJnYml6XCIsXG4gIFwiZ2RcIixcbiAgXCJnZG5cIixcbiAgXCJnZVwiLFxuICBcImdlYVwiLFxuICBcImdlbnRcIixcbiAgXCJnZW50aW5nXCIsXG4gIFwiZ2VvcmdlXCIsXG4gIFwiZ2ZcIixcbiAgXCJnZ1wiLFxuICBcImdnZWVcIixcbiAgXCJnaFwiLFxuICBcImdpXCIsXG4gIFwiZ2lmdFwiLFxuICBcImdpZnRzXCIsXG4gIFwiZ2l2ZXNcIixcbiAgXCJnaXZpbmdcIixcbiAgXCJnbFwiLFxuICBcImdsYWRlXCIsXG4gIFwiZ2xhc3NcIixcbiAgXCJnbGVcIixcbiAgXCJnbG9iYWxcIixcbiAgXCJnbG9ib1wiLFxuICBcImdtXCIsXG4gIFwiZ21haWxcIixcbiAgXCJnbWJoXCIsXG4gIFwiZ21vXCIsXG4gIFwiZ214XCIsXG4gIFwiZ25cIixcbiAgXCJnb2RhZGR5XCIsXG4gIFwiZ29sZFwiLFxuICBcImdvbGRwb2ludFwiLFxuICBcImdvbGZcIixcbiAgXCJnb29cIixcbiAgXCJnb29kaGFuZHNcIixcbiAgXCJnb29keWVhclwiLFxuICBcImdvb2dcIixcbiAgXCJnb29nbGVcIixcbiAgXCJnb3BcIixcbiAgXCJnb3RcIixcbiAgXCJnb3ZcIixcbiAgXCJncFwiLFxuICBcImdxXCIsXG4gIFwiZ3JcIixcbiAgXCJncmFpbmdlclwiLFxuICBcImdyYXBoaWNzXCIsXG4gIFwiZ3JhdGlzXCIsXG4gIFwiZ3JlZW5cIixcbiAgXCJncmlwZVwiLFxuICBcImdyb2NlcnlcIixcbiAgXCJncm91cFwiLFxuICBcImdzXCIsXG4gIFwiZ3RcIixcbiAgXCJndVwiLFxuICBcImd1YXJkaWFuXCIsXG4gIFwiZ3VjY2lcIixcbiAgXCJndWdlXCIsXG4gIFwiZ3VpZGVcIixcbiAgXCJndWl0YXJzXCIsXG4gIFwiZ3VydVwiLFxuICBcImd3XCIsXG4gIFwiZ3lcIixcbiAgXCJoYWlyXCIsXG4gIFwiaGFtYnVyZ1wiLFxuICBcImhhbmdvdXRcIixcbiAgXCJoYXVzXCIsXG4gIFwiaGJvXCIsXG4gIFwiaGRmY1wiLFxuICBcImhkZmNiYW5rXCIsXG4gIFwiaGVhbHRoXCIsXG4gIFwiaGVhbHRoY2FyZVwiLFxuICBcImhlbHBcIixcbiAgXCJoZWxzaW5raVwiLFxuICBcImhlcmVcIixcbiAgXCJoZXJtZXNcIixcbiAgXCJoZ3R2XCIsXG4gIFwiaGlwaG9wXCIsXG4gIFwiaGlzYW1pdHN1XCIsXG4gIFwiaGl0YWNoaVwiLFxuICBcImhpdlwiLFxuICBcImhrXCIsXG4gIFwiaGt0XCIsXG4gIFwiaG1cIixcbiAgXCJoblwiLFxuICBcImhvY2tleVwiLFxuICBcImhvbGRpbmdzXCIsXG4gIFwiaG9saWRheVwiLFxuICBcImhvbWVkZXBvdFwiLFxuICBcImhvbWVnb29kc1wiLFxuICBcImhvbWVzXCIsXG4gIFwiaG9tZXNlbnNlXCIsXG4gIFwiaG9uZGFcIixcbiAgXCJob25leXdlbGxcIixcbiAgXCJob3JzZVwiLFxuICBcImhvc3BpdGFsXCIsXG4gIFwiaG9zdFwiLFxuICBcImhvc3RpbmdcIixcbiAgXCJob3RcIixcbiAgXCJob3RlbGVzXCIsXG4gIFwiaG90ZWxzXCIsXG4gIFwiaG90bWFpbFwiLFxuICBcImhvdXNlXCIsXG4gIFwiaG93XCIsXG4gIFwiaHJcIixcbiAgXCJoc2JjXCIsXG4gIFwiaHRcIixcbiAgXCJodVwiLFxuICBcImh1Z2hlc1wiLFxuICBcImh5YXR0XCIsXG4gIFwiaHl1bmRhaVwiLFxuICBcImlibVwiLFxuICBcImljYmNcIixcbiAgXCJpY2VcIixcbiAgXCJpY3VcIixcbiAgXCJpZFwiLFxuICBcImllXCIsXG4gIFwiaWVlZVwiLFxuICBcImlmbVwiLFxuICBcImlrYW5vXCIsXG4gIFwiaWxcIixcbiAgXCJpbVwiLFxuICBcImltYW1hdFwiLFxuICBcImltZGJcIixcbiAgXCJpbW1vXCIsXG4gIFwiaW1tb2JpbGllblwiLFxuICBcImluXCIsXG4gIFwiaW5kdXN0cmllc1wiLFxuICBcImluZmluaXRpXCIsXG4gIFwiaW5mb1wiLFxuICBcImluZ1wiLFxuICBcImlua1wiLFxuICBcImluc3RpdHV0ZVwiLFxuICBcImluc3VyYW5jZVwiLFxuICBcImluc3VyZVwiLFxuICBcImludFwiLFxuICBcImludGVsXCIsXG4gIFwiaW50ZXJuYXRpb25hbFwiLFxuICBcImludHVpdFwiLFxuICBcImludmVzdG1lbnRzXCIsXG4gIFwiaW9cIixcbiAgXCJpcGlyYW5nYVwiLFxuICBcImlxXCIsXG4gIFwiaXJcIixcbiAgXCJpcmlzaFwiLFxuICBcImlzXCIsXG4gIFwiaXNlbGVjdFwiLFxuICBcImlzbWFpbGlcIixcbiAgXCJpc3RcIixcbiAgXCJpc3RhbmJ1bFwiLFxuICBcIml0XCIsXG4gIFwiaXRhdVwiLFxuICBcIml0dlwiLFxuICBcIml2ZWNvXCIsXG4gIFwiaXdjXCIsXG4gIFwiamFndWFyXCIsXG4gIFwiamF2YVwiLFxuICBcImpjYlwiLFxuICBcImpjcFwiLFxuICBcImplXCIsXG4gIFwiamVlcFwiLFxuICBcImpldHp0XCIsXG4gIFwiamV3ZWxyeVwiLFxuICBcImppb1wiLFxuICBcImpsY1wiLFxuICBcImpsbFwiLFxuICBcImptXCIsXG4gIFwiam1wXCIsXG4gIFwiam5qXCIsXG4gIFwiam9cIixcbiAgXCJqb2JzXCIsXG4gIFwiam9idXJnXCIsXG4gIFwiam90XCIsXG4gIFwiam95XCIsXG4gIFwianBcIixcbiAgXCJqcG1vcmdhblwiLFxuICBcImpwcnNcIixcbiAgXCJqdWVnb3NcIixcbiAgXCJqdW5pcGVyXCIsXG4gIFwia2F1ZmVuXCIsXG4gIFwia2RkaVwiLFxuICBcImtlXCIsXG4gIFwia2Vycnlob3RlbHNcIixcbiAgXCJrZXJyeWxvZ2lzdGljc1wiLFxuICBcImtlcnJ5cHJvcGVydGllc1wiLFxuICBcImtmaFwiLFxuICBcImtnXCIsXG4gIFwia2hcIixcbiAgXCJraVwiLFxuICBcImtpYVwiLFxuICBcImtpbVwiLFxuICBcImtpbmRlclwiLFxuICBcImtpbmRsZVwiLFxuICBcImtpdGNoZW5cIixcbiAgXCJraXdpXCIsXG4gIFwia21cIixcbiAgXCJrblwiLFxuICBcImtvZWxuXCIsXG4gIFwia29tYXRzdVwiLFxuICBcImtvc2hlclwiLFxuICBcImtwXCIsXG4gIFwia3BtZ1wiLFxuICBcImtwblwiLFxuICBcImtyXCIsXG4gIFwia3JkXCIsXG4gIFwia3JlZFwiLFxuICBcImt1b2tncm91cFwiLFxuICBcImt3XCIsXG4gIFwia3lcIixcbiAgXCJreW90b1wiLFxuICBcImt6XCIsXG4gIFwibGFcIixcbiAgXCJsYWNhaXhhXCIsXG4gIFwibGFkYnJva2VzXCIsXG4gIFwibGFtYm9yZ2hpbmlcIixcbiAgXCJsYW1lclwiLFxuICBcImxhbmNhc3RlclwiLFxuICBcImxhbmNpYVwiLFxuICBcImxhbmNvbWVcIixcbiAgXCJsYW5kXCIsXG4gIFwibGFuZHJvdmVyXCIsXG4gIFwibGFueGVzc1wiLFxuICBcImxhc2FsbGVcIixcbiAgXCJsYXRcIixcbiAgXCJsYXRpbm9cIixcbiAgXCJsYXRyb2JlXCIsXG4gIFwibGF3XCIsXG4gIFwibGF3eWVyXCIsXG4gIFwibGJcIixcbiAgXCJsY1wiLFxuICBcImxkc1wiLFxuICBcImxlYXNlXCIsXG4gIFwibGVjbGVyY1wiLFxuICBcImxlZnJha1wiLFxuICBcImxlZ2FsXCIsXG4gIFwibGVnb1wiLFxuICBcImxleHVzXCIsXG4gIFwibGdidFwiLFxuICBcImxpXCIsXG4gIFwibGlhaXNvblwiLFxuICBcImxpZGxcIixcbiAgXCJsaWZlXCIsXG4gIFwibGlmZWluc3VyYW5jZVwiLFxuICBcImxpZmVzdHlsZVwiLFxuICBcImxpZ2h0aW5nXCIsXG4gIFwibGlrZVwiLFxuICBcImxpbGx5XCIsXG4gIFwibGltaXRlZFwiLFxuICBcImxpbW9cIixcbiAgXCJsaW5jb2xuXCIsXG4gIFwibGluZGVcIixcbiAgXCJsaW5rXCIsXG4gIFwibGlwc3lcIixcbiAgXCJsaXZlXCIsXG4gIFwibGl2aW5nXCIsXG4gIFwibGl4aWxcIixcbiAgXCJsa1wiLFxuICBcImxsY1wiLFxuICBcImxvYW5cIixcbiAgXCJsb2Fuc1wiLFxuICBcImxvY2tlclwiLFxuICBcImxvY3VzXCIsXG4gIFwibG9mdFwiLFxuICBcImxvbFwiLFxuICBcImxvbmRvblwiLFxuICBcImxvdHRlXCIsXG4gIFwibG90dG9cIixcbiAgXCJsb3ZlXCIsXG4gIFwibHBsXCIsXG4gIFwibHBsZmluYW5jaWFsXCIsXG4gIFwibHJcIixcbiAgXCJsc1wiLFxuICBcImx0XCIsXG4gIFwibHRkXCIsXG4gIFwibHRkYVwiLFxuICBcImx1XCIsXG4gIFwibHVuZGJlY2tcIixcbiAgXCJsdXBpblwiLFxuICBcImx1eGVcIixcbiAgXCJsdXh1cnlcIixcbiAgXCJsdlwiLFxuICBcImx5XCIsXG4gIFwibWFcIixcbiAgXCJtYWN5c1wiLFxuICBcIm1hZHJpZFwiLFxuICBcIm1haWZcIixcbiAgXCJtYWlzb25cIixcbiAgXCJtYWtldXBcIixcbiAgXCJtYW5cIixcbiAgXCJtYW5hZ2VtZW50XCIsXG4gIFwibWFuZ29cIixcbiAgXCJtYXBcIixcbiAgXCJtYXJrZXRcIixcbiAgXCJtYXJrZXRpbmdcIixcbiAgXCJtYXJrZXRzXCIsXG4gIFwibWFycmlvdHRcIixcbiAgXCJtYXJzaGFsbHNcIixcbiAgXCJtYXNlcmF0aVwiLFxuICBcIm1hdHRlbFwiLFxuICBcIm1iYVwiLFxuICBcIm1jXCIsXG4gIFwibWNraW5zZXlcIixcbiAgXCJtZFwiLFxuICBcIm1lXCIsXG4gIFwibWVkXCIsXG4gIFwibWVkaWFcIixcbiAgXCJtZWV0XCIsXG4gIFwibWVsYm91cm5lXCIsXG4gIFwibWVtZVwiLFxuICBcIm1lbW9yaWFsXCIsXG4gIFwibWVuXCIsXG4gIFwibWVudVwiLFxuICBcIm1lb1wiLFxuICBcIm1lcmNrbXNkXCIsXG4gIFwibWV0bGlmZVwiLFxuICBcIm1nXCIsXG4gIFwibWhcIixcbiAgXCJtaWFtaVwiLFxuICBcIm1pY3Jvc29mdFwiLFxuICBcIm1pbFwiLFxuICBcIm1pbmlcIixcbiAgXCJtaW50XCIsXG4gIFwibWl0XCIsXG4gIFwibWl0c3ViaXNoaVwiLFxuICBcIm1rXCIsXG4gIFwibWxcIixcbiAgXCJtbGJcIixcbiAgXCJtbHNcIixcbiAgXCJtbVwiLFxuICBcIm1tYVwiLFxuICBcIm1uXCIsXG4gIFwibW9cIixcbiAgXCJtb2JpXCIsXG4gIFwibW9iaWxlXCIsXG4gIFwibW9iaWx5XCIsXG4gIFwibW9kYVwiLFxuICBcIm1vZVwiLFxuICBcIm1vaVwiLFxuICBcIm1vbVwiLFxuICBcIm1vbmFzaFwiLFxuICBcIm1vbmV5XCIsXG4gIFwibW9uc3RlclwiLFxuICBcIm1vcGFyXCIsXG4gIFwibW9ybW9uXCIsXG4gIFwibW9ydGdhZ2VcIixcbiAgXCJtb3Njb3dcIixcbiAgXCJtb3RvXCIsXG4gIFwibW90b3JjeWNsZXNcIixcbiAgXCJtb3ZcIixcbiAgXCJtb3ZpZVwiLFxuICBcIm1vdmlzdGFyXCIsXG4gIFwibXBcIixcbiAgXCJtcVwiLFxuICBcIm1yXCIsXG4gIFwibXNcIixcbiAgXCJtc2RcIixcbiAgXCJtdFwiLFxuICBcIm10blwiLFxuICBcIm10clwiLFxuICBcIm11XCIsXG4gIFwibXVzZXVtXCIsXG4gIFwibXV0dWFsXCIsXG4gIFwibXZcIixcbiAgXCJtd1wiLFxuICBcIm14XCIsXG4gIFwibXlcIixcbiAgXCJtelwiLFxuICBcIm5hXCIsXG4gIFwibmFiXCIsXG4gIFwibmFkZXhcIixcbiAgXCJuYWdveWFcIixcbiAgXCJuYW1lXCIsXG4gIFwibmF0aW9ud2lkZVwiLFxuICBcIm5hdHVyYVwiLFxuICBcIm5hdnlcIixcbiAgXCJuYmFcIixcbiAgXCJuY1wiLFxuICBcIm5lXCIsXG4gIFwibmVjXCIsXG4gIFwibmV0XCIsXG4gIFwibmV0YmFua1wiLFxuICBcIm5ldGZsaXhcIixcbiAgXCJuZXR3b3JrXCIsXG4gIFwibmV1c3RhclwiLFxuICBcIm5ld1wiLFxuICBcIm5ld2hvbGxhbmRcIixcbiAgXCJuZXdzXCIsXG4gIFwibmV4dFwiLFxuICBcIm5leHRkaXJlY3RcIixcbiAgXCJuZXh1c1wiLFxuICBcIm5mXCIsXG4gIFwibmZsXCIsXG4gIFwibmdcIixcbiAgXCJuZ29cIixcbiAgXCJuaGtcIixcbiAgXCJuaVwiLFxuICBcIm5pY29cIixcbiAgXCJuaWtlXCIsXG4gIFwibmlrb25cIixcbiAgXCJuaW5qYVwiLFxuICBcIm5pc3NhblwiLFxuICBcIm5pc3NheVwiLFxuICBcIm5sXCIsXG4gIFwibm9cIixcbiAgXCJub2tpYVwiLFxuICBcIm5vcnRod2VzdGVybm11dHVhbFwiLFxuICBcIm5vcnRvblwiLFxuICBcIm5vd1wiLFxuICBcIm5vd3J1elwiLFxuICBcIm5vd3R2XCIsXG4gIFwibnBcIixcbiAgXCJuclwiLFxuICBcIm5yYVwiLFxuICBcIm5yd1wiLFxuICBcIm50dFwiLFxuICBcIm51XCIsXG4gIFwibnljXCIsXG4gIFwibnpcIixcbiAgXCJvYmlcIixcbiAgXCJvYnNlcnZlclwiLFxuICBcIm9mZlwiLFxuICBcIm9mZmljZVwiLFxuICBcIm9raW5hd2FcIixcbiAgXCJvbGF5YW5cIixcbiAgXCJvbGF5YW5ncm91cFwiLFxuICBcIm9sZG5hdnlcIixcbiAgXCJvbGxvXCIsXG4gIFwib21cIixcbiAgXCJvbWVnYVwiLFxuICBcIm9uZVwiLFxuICBcIm9uZ1wiLFxuICBcIm9ubFwiLFxuICBcIm9ubGluZVwiLFxuICBcIm9ueW91cnNpZGVcIixcbiAgXCJvb29cIixcbiAgXCJvcGVuXCIsXG4gIFwib3JhY2xlXCIsXG4gIFwib3JhbmdlXCIsXG4gIFwib3JnXCIsXG4gIFwib3JnYW5pY1wiLFxuICBcIm9yaWdpbnNcIixcbiAgXCJvc2FrYVwiLFxuICBcIm90c3VrYVwiLFxuICBcIm90dFwiLFxuICBcIm92aFwiLFxuICBcInBhXCIsXG4gIFwicGFnZVwiLFxuICBcInBhbmFzb25pY1wiLFxuICBcInBhbmVyYWlcIixcbiAgXCJwYXJpc1wiLFxuICBcInBhcnNcIixcbiAgXCJwYXJ0bmVyc1wiLFxuICBcInBhcnRzXCIsXG4gIFwicGFydHlcIixcbiAgXCJwYXNzYWdlbnNcIixcbiAgXCJwYXlcIixcbiAgXCJwY2N3XCIsXG4gIFwicGVcIixcbiAgXCJwZXRcIixcbiAgXCJwZlwiLFxuICBcInBmaXplclwiLFxuICBcInBnXCIsXG4gIFwicGhcIixcbiAgXCJwaGFybWFjeVwiLFxuICBcInBoZFwiLFxuICBcInBoaWxpcHNcIixcbiAgXCJwaG9uZVwiLFxuICBcInBob3RvXCIsXG4gIFwicGhvdG9ncmFwaHlcIixcbiAgXCJwaG90b3NcIixcbiAgXCJwaHlzaW9cIixcbiAgXCJwaWFnZXRcIixcbiAgXCJwaWNzXCIsXG4gIFwicGljdGV0XCIsXG4gIFwicGljdHVyZXNcIixcbiAgXCJwaWRcIixcbiAgXCJwaW5cIixcbiAgXCJwaW5nXCIsXG4gIFwicGlua1wiLFxuICBcInBpb25lZXJcIixcbiAgXCJwaXp6YVwiLFxuICBcInBrXCIsXG4gIFwicGxcIixcbiAgXCJwbGFjZVwiLFxuICBcInBsYXlcIixcbiAgXCJwbGF5c3RhdGlvblwiLFxuICBcInBsdW1iaW5nXCIsXG4gIFwicGx1c1wiLFxuICBcInBtXCIsXG4gIFwicG5cIixcbiAgXCJwbmNcIixcbiAgXCJwb2hsXCIsXG4gIFwicG9rZXJcIixcbiAgXCJwb2xpdGllXCIsXG4gIFwicG9yblwiLFxuICBcInBvc3RcIixcbiAgXCJwclwiLFxuICBcInByYW1lcmljYVwiLFxuICBcInByYXhpXCIsXG4gIFwicHJlc3NcIixcbiAgXCJwcmltZVwiLFxuICBcInByb1wiLFxuICBcInByb2RcIixcbiAgXCJwcm9kdWN0aW9uc1wiLFxuICBcInByb2ZcIixcbiAgXCJwcm9ncmVzc2l2ZVwiLFxuICBcInByb21vXCIsXG4gIFwicHJvcGVydGllc1wiLFxuICBcInByb3BlcnR5XCIsXG4gIFwicHJvdGVjdGlvblwiLFxuICBcInBydVwiLFxuICBcInBydWRlbnRpYWxcIixcbiAgXCJwc1wiLFxuICBcInB0XCIsXG4gIFwicHViXCIsXG4gIFwicHdcIixcbiAgXCJwd2NcIixcbiAgXCJweVwiLFxuICBcInFhXCIsXG4gIFwicXBvblwiLFxuICBcInF1ZWJlY1wiLFxuICBcInF1ZXN0XCIsXG4gIFwicXZjXCIsXG4gIFwicmFjaW5nXCIsXG4gIFwicmFkaW9cIixcbiAgXCJyYWlkXCIsXG4gIFwicmVcIixcbiAgXCJyZWFkXCIsXG4gIFwicmVhbGVzdGF0ZVwiLFxuICBcInJlYWx0b3JcIixcbiAgXCJyZWFsdHlcIixcbiAgXCJyZWNpcGVzXCIsXG4gIFwicmVkXCIsXG4gIFwicmVkc3RvbmVcIixcbiAgXCJyZWR1bWJyZWxsYVwiLFxuICBcInJlaGFiXCIsXG4gIFwicmVpc2VcIixcbiAgXCJyZWlzZW5cIixcbiAgXCJyZWl0XCIsXG4gIFwicmVsaWFuY2VcIixcbiAgXCJyZW5cIixcbiAgXCJyZW50XCIsXG4gIFwicmVudGFsc1wiLFxuICBcInJlcGFpclwiLFxuICBcInJlcG9ydFwiLFxuICBcInJlcHVibGljYW5cIixcbiAgXCJyZXN0XCIsXG4gIFwicmVzdGF1cmFudFwiLFxuICBcInJldmlld1wiLFxuICBcInJldmlld3NcIixcbiAgXCJyZXhyb3RoXCIsXG4gIFwicmljaFwiLFxuICBcInJpY2hhcmRsaVwiLFxuICBcInJpY29oXCIsXG4gIFwicmlnaHRhdGhvbWVcIixcbiAgXCJyaWxcIixcbiAgXCJyaW9cIixcbiAgXCJyaXBcIixcbiAgXCJybWl0XCIsXG4gIFwicm9cIixcbiAgXCJyb2NoZXJcIixcbiAgXCJyb2Nrc1wiLFxuICBcInJvZGVvXCIsXG4gIFwicm9nZXJzXCIsXG4gIFwicm9vbVwiLFxuICBcInJzXCIsXG4gIFwicnN2cFwiLFxuICBcInJ1XCIsXG4gIFwicnVnYnlcIixcbiAgXCJydWhyXCIsXG4gIFwicnVuXCIsXG4gIFwicndcIixcbiAgXCJyd2VcIixcbiAgXCJyeXVreXVcIixcbiAgXCJzYVwiLFxuICBcInNhYXJsYW5kXCIsXG4gIFwic2FmZVwiLFxuICBcInNhZmV0eVwiLFxuICBcInNha3VyYVwiLFxuICBcInNhbGVcIixcbiAgXCJzYWxvblwiLFxuICBcInNhbXNjbHViXCIsXG4gIFwic2Ftc3VuZ1wiLFxuICBcInNhbmR2aWtcIixcbiAgXCJzYW5kdmlrY29yb21hbnRcIixcbiAgXCJzYW5vZmlcIixcbiAgXCJzYXBcIixcbiAgXCJzYXBvXCIsXG4gIFwic2FybFwiLFxuICBcInNhc1wiLFxuICBcInNhdmVcIixcbiAgXCJzYXhvXCIsXG4gIFwic2JcIixcbiAgXCJzYmlcIixcbiAgXCJzYnNcIixcbiAgXCJzY1wiLFxuICBcInNjYVwiLFxuICBcInNjYlwiLFxuICBcInNjaGFlZmZsZXJcIixcbiAgXCJzY2htaWR0XCIsXG4gIFwic2Nob2xhcnNoaXBzXCIsXG4gIFwic2Nob29sXCIsXG4gIFwic2NodWxlXCIsXG4gIFwic2Nod2FyelwiLFxuICBcInNjaWVuY2VcIixcbiAgXCJzY2pvaG5zb25cIixcbiAgXCJzY29yXCIsXG4gIFwic2NvdFwiLFxuICBcInNkXCIsXG4gIFwic2VcIixcbiAgXCJzZWFyY2hcIixcbiAgXCJzZWF0XCIsXG4gIFwic2VjdXJlXCIsXG4gIFwic2VjdXJpdHlcIixcbiAgXCJzZWVrXCIsXG4gIFwic2VsZWN0XCIsXG4gIFwic2VuZXJcIixcbiAgXCJzZXJ2aWNlc1wiLFxuICBcInNlc1wiLFxuICBcInNldmVuXCIsXG4gIFwic2V3XCIsXG4gIFwic2V4XCIsXG4gIFwic2V4eVwiLFxuICBcInNmclwiLFxuICBcInNnXCIsXG4gIFwic2hcIixcbiAgXCJzaGFuZ3JpbGFcIixcbiAgXCJzaGFycFwiLFxuICBcInNoYXdcIixcbiAgXCJzaGVsbFwiLFxuICBcInNoaWFcIixcbiAgXCJzaGlrc2hhXCIsXG4gIFwic2hvZXNcIixcbiAgXCJzaG9wXCIsXG4gIFwic2hvcHBpbmdcIixcbiAgXCJzaG91amlcIixcbiAgXCJzaG93XCIsXG4gIFwic2hvd3RpbWVcIixcbiAgXCJzaHJpcmFtXCIsXG4gIFwic2lcIixcbiAgXCJzaWxrXCIsXG4gIFwic2luYVwiLFxuICBcInNpbmdsZXNcIixcbiAgXCJzaXRlXCIsXG4gIFwic2pcIixcbiAgXCJza1wiLFxuICBcInNraVwiLFxuICBcInNraW5cIixcbiAgXCJza3lcIixcbiAgXCJza3lwZVwiLFxuICBcInNsXCIsXG4gIFwic2xpbmdcIixcbiAgXCJzbVwiLFxuICBcInNtYXJ0XCIsXG4gIFwic21pbGVcIixcbiAgXCJzblwiLFxuICBcInNuY2ZcIixcbiAgXCJzb1wiLFxuICBcInNvY2NlclwiLFxuICBcInNvY2lhbFwiLFxuICBcInNvZnRiYW5rXCIsXG4gIFwic29mdHdhcmVcIixcbiAgXCJzb2h1XCIsXG4gIFwic29sYXJcIixcbiAgXCJzb2x1dGlvbnNcIixcbiAgXCJzb25nXCIsXG4gIFwic29ueVwiLFxuICBcInNveVwiLFxuICBcInNwYWNlXCIsXG4gIFwic3BpZWdlbFwiLFxuICBcInNwb3J0XCIsXG4gIFwic3BvdFwiLFxuICBcInNwcmVhZGJldHRpbmdcIixcbiAgXCJzclwiLFxuICBcInNybFwiLFxuICBcInNydFwiLFxuICBcInN0XCIsXG4gIFwic3RhZGFcIixcbiAgXCJzdGFwbGVzXCIsXG4gIFwic3RhclwiLFxuICBcInN0YXJodWJcIixcbiAgXCJzdGF0ZWJhbmtcIixcbiAgXCJzdGF0ZWZhcm1cIixcbiAgXCJzdGF0b2lsXCIsXG4gIFwic3RjXCIsXG4gIFwic3RjZ3JvdXBcIixcbiAgXCJzdG9ja2hvbG1cIixcbiAgXCJzdG9yYWdlXCIsXG4gIFwic3RvcmVcIixcbiAgXCJzdHJlYW1cIixcbiAgXCJzdHVkaW9cIixcbiAgXCJzdHVkeVwiLFxuICBcInN0eWxlXCIsXG4gIFwic3VcIixcbiAgXCJzdWNrc1wiLFxuICBcInN1cHBsaWVzXCIsXG4gIFwic3VwcGx5XCIsXG4gIFwic3VwcG9ydFwiLFxuICBcInN1cmZcIixcbiAgXCJzdXJnZXJ5XCIsXG4gIFwic3V6dWtpXCIsXG4gIFwic3ZcIixcbiAgXCJzd2F0Y2hcIixcbiAgXCJzd2lmdGNvdmVyXCIsXG4gIFwic3dpc3NcIixcbiAgXCJzeFwiLFxuICBcInN5XCIsXG4gIFwic3lkbmV5XCIsXG4gIFwic3ltYW50ZWNcIixcbiAgXCJzeXN0ZW1zXCIsXG4gIFwic3pcIixcbiAgXCJ0YWJcIixcbiAgXCJ0YWlwZWlcIixcbiAgXCJ0YWxrXCIsXG4gIFwidGFvYmFvXCIsXG4gIFwidGFyZ2V0XCIsXG4gIFwidGF0YW1vdG9yc1wiLFxuICBcInRhdGFyXCIsXG4gIFwidGF0dG9vXCIsXG4gIFwidGF4XCIsXG4gIFwidGF4aVwiLFxuICBcInRjXCIsXG4gIFwidGNpXCIsXG4gIFwidGRcIixcbiAgXCJ0ZGtcIixcbiAgXCJ0ZWFtXCIsXG4gIFwidGVjaFwiLFxuICBcInRlY2hub2xvZ3lcIixcbiAgXCJ0ZWxcIixcbiAgXCJ0ZWxlY2l0eVwiLFxuICBcInRlbGVmb25pY2FcIixcbiAgXCJ0ZW1hc2VrXCIsXG4gIFwidGVubmlzXCIsXG4gIFwidGV2YVwiLFxuICBcInRmXCIsXG4gIFwidGdcIixcbiAgXCJ0aFwiLFxuICBcInRoZFwiLFxuICBcInRoZWF0ZXJcIixcbiAgXCJ0aGVhdHJlXCIsXG4gIFwidGlhYVwiLFxuICBcInRpY2tldHNcIixcbiAgXCJ0aWVuZGFcIixcbiAgXCJ0aWZmYW55XCIsXG4gIFwidGlwc1wiLFxuICBcInRpcmVzXCIsXG4gIFwidGlyb2xcIixcbiAgXCJ0alwiLFxuICBcInRqbWF4eFwiLFxuICBcInRqeFwiLFxuICBcInRrXCIsXG4gIFwidGttYXh4XCIsXG4gIFwidGxcIixcbiAgXCJ0bVwiLFxuICBcInRtYWxsXCIsXG4gIFwidG5cIixcbiAgXCJ0b1wiLFxuICBcInRvZGF5XCIsXG4gIFwidG9reW9cIixcbiAgXCJ0b29sc1wiLFxuICBcInRvcFwiLFxuICBcInRvcmF5XCIsXG4gIFwidG9zaGliYVwiLFxuICBcInRvdGFsXCIsXG4gIFwidG91cnNcIixcbiAgXCJ0b3duXCIsXG4gIFwidG95b3RhXCIsXG4gIFwidG95c1wiLFxuICBcInRyXCIsXG4gIFwidHJhZGVcIixcbiAgXCJ0cmFkaW5nXCIsXG4gIFwidHJhaW5pbmdcIixcbiAgXCJ0cmF2ZWxcIixcbiAgXCJ0cmF2ZWxjaGFubmVsXCIsXG4gIFwidHJhdmVsZXJzXCIsXG4gIFwidHJhdmVsZXJzaW5zdXJhbmNlXCIsXG4gIFwidHJ1c3RcIixcbiAgXCJ0cnZcIixcbiAgXCJ0dFwiLFxuICBcInR1YmVcIixcbiAgXCJ0dWlcIixcbiAgXCJ0dW5lc1wiLFxuICBcInR1c2h1XCIsXG4gIFwidHZcIixcbiAgXCJ0dnNcIixcbiAgXCJ0d1wiLFxuICBcInR6XCIsXG4gIFwidWFcIixcbiAgXCJ1YmFua1wiLFxuICBcInVic1wiLFxuICBcInVjb25uZWN0XCIsXG4gIFwidWdcIixcbiAgXCJ1a1wiLFxuICBcInVuaWNvbVwiLFxuICBcInVuaXZlcnNpdHlcIixcbiAgXCJ1bm9cIixcbiAgXCJ1b2xcIixcbiAgXCJ1cHNcIixcbiAgXCJ1c1wiLFxuICBcInV5XCIsXG4gIFwidXpcIixcbiAgXCJ2YVwiLFxuICBcInZhY2F0aW9uc1wiLFxuICBcInZhbmFcIixcbiAgXCJ2YW5ndWFyZFwiLFxuICBcInZjXCIsXG4gIFwidmVcIixcbiAgXCJ2ZWdhc1wiLFxuICBcInZlbnR1cmVzXCIsXG4gIFwidmVyaXNpZ25cIixcbiAgXCJ2ZXJzaWNoZXJ1bmdcIixcbiAgXCJ2ZXRcIixcbiAgXCJ2Z1wiLFxuICBcInZpXCIsXG4gIFwidmlhamVzXCIsXG4gIFwidmlkZW9cIixcbiAgXCJ2aWdcIixcbiAgXCJ2aWtpbmdcIixcbiAgXCJ2aWxsYXNcIixcbiAgXCJ2aW5cIixcbiAgXCJ2aXBcIixcbiAgXCJ2aXJnaW5cIixcbiAgXCJ2aXNhXCIsXG4gIFwidmlzaW9uXCIsXG4gIFwidmlzdGFcIixcbiAgXCJ2aXN0YXByaW50XCIsXG4gIFwidml2YVwiLFxuICBcInZpdm9cIixcbiAgXCJ2bGFhbmRlcmVuXCIsXG4gIFwidm5cIixcbiAgXCJ2b2RrYVwiLFxuICBcInZvbGtzd2FnZW5cIixcbiAgXCJ2b2x2b1wiLFxuICBcInZvdGVcIixcbiAgXCJ2b3RpbmdcIixcbiAgXCJ2b3RvXCIsXG4gIFwidm95YWdlXCIsXG4gIFwidnVcIixcbiAgXCJ2dWVsb3NcIixcbiAgXCJ3YWxlc1wiLFxuICBcIndhbG1hcnRcIixcbiAgXCJ3YWx0ZXJcIixcbiAgXCJ3YW5nXCIsXG4gIFwid2FuZ2dvdVwiLFxuICBcIndhcm1hblwiLFxuICBcIndhdGNoXCIsXG4gIFwid2F0Y2hlc1wiLFxuICBcIndlYXRoZXJcIixcbiAgXCJ3ZWF0aGVyY2hhbm5lbFwiLFxuICBcIndlYmNhbVwiLFxuICBcIndlYmVyXCIsXG4gIFwid2Vic2l0ZVwiLFxuICBcIndlZFwiLFxuICBcIndlZGRpbmdcIixcbiAgXCJ3ZWlib1wiLFxuICBcIndlaXJcIixcbiAgXCJ3ZlwiLFxuICBcIndob3N3aG9cIixcbiAgXCJ3aWVuXCIsXG4gIFwid2lraVwiLFxuICBcIndpbGxpYW1oaWxsXCIsXG4gIFwid2luXCIsXG4gIFwid2luZG93c1wiLFxuICBcIndpbmVcIixcbiAgXCJ3aW5uZXJzXCIsXG4gIFwid21lXCIsXG4gIFwid29sdGVyc2tsdXdlclwiLFxuICBcIndvb2RzaWRlXCIsXG4gIFwid29ya1wiLFxuICBcIndvcmtzXCIsXG4gIFwid29ybGRcIixcbiAgXCJ3b3dcIixcbiAgXCJ3c1wiLFxuICBcInd0Y1wiLFxuICBcInd0ZlwiLFxuICBcInhib3hcIixcbiAgXCJ4ZXJveFwiLFxuICBcInhmaW5pdHlcIixcbiAgXCJ4aWh1YW5cIixcbiAgXCJ4aW5cIixcbiAgXCLgpJXgpYngpK5cIiwgLy8geG4tLTExYjRjM2RcbiAgXCLjgrvjg7zjg6tcIiwgLy8geG4tLTFjazJlMWJcbiAgXCLkvZvlsbFcIiwgLy8geG4tLTFxcXcyM2FcbiAgXCLgsq3gsr7gsrDgsqRcIiwgLy8geG4tLTJzY3JqOWNcbiAgXCLmhYjlloRcIiwgLy8geG4tLTMwcnI3eVxuICBcIumbhuWbolwiLCAvLyB4bi0tM2JzdDAwbVxuICBcIuWcqOe6v1wiLCAvLyB4bi0tM2RzNDQzZ1xuICBcIu2VnOq1rVwiLCAvLyB4bi0tM2UwYjcwN2VcbiAgXCLgrK3grL7grLDgrKRcIiwgLy8geG4tLTNoY3JqOWNcbiAgXCLlpKfkvJfmsb3ovaZcIiwgLy8geG4tLTNvcTE4dmw4cG4zNmFcbiAgXCLngrnnnItcIiwgLy8geG4tLTNweHU4a1xuICBcIuC4hOC4reC4oVwiLCAvLyB4bi0tNDJjMmQ5YVxuICBcIuCmreCmvuCnsOCmpFwiLCAvLyB4bi0tNDVicjVjeWxcbiAgXCLgpq3gpr7gprDgpqRcIiwgLy8geG4tLTQ1YnJqOWNcbiAgXCLlhavljaZcIiwgLy8geG4tLTQ1cTExY1xuICBcItmF2YjZgti5XCIsIC8vIHhuLS00Z2JyaW1cbiAgXCLgpqzgpr7gpoLgprLgpr5cIiwgLy8geG4tLTU0YjdmdGEwY2NcbiAgXCLlhaznm4pcIiwgLy8geG4tLTU1cXc0MmdcbiAgXCLlhazlj7hcIiwgLy8geG4tLTU1cXg1ZFxuICBcIummmeagvOmHjOaLiVwiLCAvLyB4bi0tNXN1MzRqOTM2YmdzZ1xuICBcIue9keermVwiLCAvLyB4bi0tNXR6bTVnXG4gIFwi56e75YqoXCIsIC8vIHhuLS02ZnJ6ODJnXG4gIFwi5oiR54ix5L2gXCIsIC8vIHhuLS02cXE5ODZiM3hsXG4gIFwi0LzQvtGB0LrQstCwXCIsIC8vIHhuLS04MGFkeGhrc1xuICBcItKb0LDQt1wiLCAvLyB4bi0tODBhbzIxYVxuICBcItC60LDRgtC+0LvQuNC6XCIsIC8vIHhuLS04MGFxZWNkcjFhXG4gIFwi0L7QvdC70LDQudC9XCIsIC8vIHhuLS04MGFzZWhkYlxuICBcItGB0LDQudGCXCIsIC8vIHhuLS04MGFzd2dcbiAgXCLogZTpgJpcIiwgLy8geG4tLTh5MGEwNjNhXG4gIFwi0YHRgNCxXCIsIC8vIHhuLS05MGEzYWNcbiAgXCLQsdCzXCIsIC8vIHhuLS05MGFlXG4gIFwi0LHQtdC7XCIsIC8vIHhuLS05MGFpc1xuICBcIten15XXnVwiLCAvLyB4bi0tOWRicTJhXG4gIFwi5pe25bCaXCIsIC8vIHhuLS05ZXQ1MnVcbiAgXCLlvq7ljZpcIiwgLy8geG4tLTlrcnQwMGFcbiAgXCLmt6HpqazplKFcIiwgLy8geG4tLWI0dzYwNWZlcmRcbiAgXCLjg5XjgqHjg4Pjgrfjg6fjg7NcIiwgLy8geG4tLWJjazFiOWE1ZHJlNGNcbiAgXCLQvtGA0LNcIiwgLy8geG4tLWMxYXZnXG4gIFwi4KSo4KWH4KSfXCIsIC8vIHhuLS1jMmJyN2dcbiAgXCLjgrnjg4jjgqJcIiwgLy8geG4tLWNjazJiM2JcbiAgXCLsgrzshLFcIiwgLy8geG4tLWNnNGJraVxuICBcIuCumuCuv+CumeCvjeCuleCuquCvjeCuquCvguCusOCvjVwiLCAvLyB4bi0tY2xjaGMwZWEwYjJnMmE5Z2NkXG4gIFwi5ZWG5qCHXCIsIC8vIHhuLS1jenI2OTRiXG4gIFwi5ZWG5bqXXCIsIC8vIHhuLS1jenJzMHRcbiAgXCLllYbln45cIiwgLy8geG4tLWN6cnUyZFxuICBcItC00LXRgtC4XCIsIC8vIHhuLS1kMWFjajNiXG4gIFwi0LzQutC0XCIsIC8vIHhuLS1kMWFsZlxuICBcItC10Y5cIiwgLy8geG4tLWUxYTRjXG4gIFwi44Od44Kk44Oz44OIXCIsIC8vIHhuLS1lY2t2ZHRjOWRcbiAgXCLmlrDpl7tcIiwgLy8geG4tLWVmdnk4OGhcbiAgXCLlt6XooYxcIiwgLy8geG4tLWVzdHY3NWdcbiAgXCLlrrbpm7tcIiwgLy8geG4tLWZjdDQyOWtcbiAgXCLZg9mI2YVcIiwgLy8geG4tLWZoYmVpXG4gIFwi5Lit5paH572RXCIsIC8vIHhuLS1maXEyMjhjNWhzXG4gIFwi5Lit5L+hXCIsIC8vIHhuLS1maXE2NGJcbiAgXCLkuK3lm71cIiwgLy8geG4tLWZpcXM4c1xuICBcIuS4reWci1wiLCAvLyB4bi0tZmlxejlzXG4gIFwi5aix5LmQXCIsIC8vIHhuLS1manE3MjBhXG4gIFwi6LC35q2MXCIsIC8vIHhuLS1mbHczNTFlXG4gIFwi4LCt4LC+4LCw4LCk4LGNXCIsIC8vIHhuLS1mcGNyajljM2RcbiAgXCLgtr3gtoLgtprgt49cIiwgLy8geG4tLWZ6YzJjOWUyY1xuICBcIumbu+ioiuebiOenkVwiLCAvLyB4bi0tZnp5czhkNjl1dmdtXG4gIFwi6LSt54mpXCIsIC8vIHhuLS1nMnh4NDhjXG4gIFwi44Kv44Op44Km44OJXCIsIC8vIHhuLS1nY2tyM2YwZlxuICBcIuCqreCqvuCqsOCqpFwiLCAvLyB4bi0tZ2Vjcmo5Y1xuICBcIumAmuiyqVwiLCAvLyB4bi0tZ2szYXQxZVxuICBcIuCkreCkvuCksOCkpOCkruCljVwiLCAvLyB4bi0taDJicmVnM2V2ZVxuICBcIuCkreCkvuCksOCkpFwiLCAvLyB4bi0taDJicmo5Y1xuICBcIuCkreCkvuCksOCli+CkpFwiLCAvLyB4bi0taDJicmo5YzhjXG4gIFwi572R5bqXXCIsIC8vIHhuLS1oeHQ4MTRlXG4gIFwi4KS44KSC4KSX4KSg4KSoXCIsIC8vIHhuLS1pMWI2YjFhNmEyZVxuICBcIumkkOWOhVwiLCAvLyB4bi0taW1yNTEzblxuICBcIue9kee7nFwiLCAvLyB4bi0taW8wYTdpXG4gIFwi0LrQvtC8XCIsIC8vIHhuLS1qMWFlZlxuICBcItGD0LrRgFwiLCAvLyB4bi0tajFhbWhcbiAgXCLpppnmuK9cIiwgLy8geG4tLWo2dzE5M2dcbiAgXCLor7rln7rkuppcIiwgLy8geG4tLWpscTYxdTl3N2JcbiAgXCLpo5/lk4FcIiwgLy8geG4tLWp2cjE4OW1cbiAgXCLpo57liKnmtaZcIiwgLy8geG4tLWtjcng3N2QxeDRhXG4gIFwi5Y+w5rm+XCIsIC8vIHhuLS1rcHJ3MTNkXG4gIFwi5Y+w54GjXCIsIC8vIHhuLS1rcHJ5NTdkXG4gIFwi5omL6KGoXCIsIC8vIHhuLS1rcHU3MTZmXG4gIFwi5omL5py6XCIsIC8vIHhuLS1rcHV0M2lcbiAgXCLQvNC+0L1cIiwgLy8geG4tLWwxYWNjXG4gIFwi2KfZhNis2LLYp9im2LFcIiwgLy8geG4tLWxnYmJhdDFhZDhqXG4gIFwi2LnZhdin2YZcIiwgLy8geG4tLW1nYjlhd2JmXG4gIFwi2KfYsdin2YXZg9mIXCIsIC8vIHhuLS1tZ2JhM2EzZWp0XG4gIFwi2KfbjNix2KfZhlwiLCAvLyB4bi0tbWdiYTNhNGYxNmFcbiAgXCLYp9mE2LnZhNmK2KfZhlwiLCAvLyB4bi0tbWdiYTdjMGJibjBhXG4gIFwi2KfYqti12KfZhNin2KpcIiwgLy8geG4tLW1nYmFha2M3ZHZmXG4gIFwi2KfZhdin2LHYp9iqXCIsIC8vIHhuLS1tZ2JhYW03YThoXG4gIFwi2KjYp9iy2KfYsVwiLCAvLyB4bi0tbWdiYWIyYmRcbiAgXCLZvtin2qnYs9iq2KfZhlwiLCAvLyB4bi0tbWdiYWk5YXpncXA2alxuICBcItin2YTYp9ix2K/ZhlwiLCAvLyB4bi0tbWdiYXloN2dwYVxuICBcItmF2YjYqNin2YrZhNmKXCIsIC8vIHhuLS1tZ2JiOWZicG9iXG4gIFwi2KjYp9ix2KpcIiwgLy8geG4tLW1nYmJoMWFcbiAgXCLYqNq+2KfYsdiqXCIsIC8vIHhuLS1tZ2JiaDFhNzFlXG4gIFwi2KfZhNmF2LrYsdioXCIsIC8vIHhuLS1tZ2JjMGE5YXpjZ1xuICBcItin2KjZiNi42KjZilwiLCAvLyB4bi0tbWdiY2E3ZHpkb1xuICBcItin2YTYs9i52YjYr9mK2KlcIiwgLy8geG4tLW1nYmVycDRhNWQ0YXJcbiAgXCLagNin2LHYqlwiLCAvLyB4bi0tbWdiZ3U4MmFcbiAgXCLZg9in2KvZiNmE2YrZg1wiLCAvLyB4bi0tbWdiaTRlY2V4cFxuICBcItiz2YjYr9in2YZcIiwgLy8geG4tLW1nYnBsMmZoXG4gIFwi2YfZhdix2KfZh1wiLCAvLyB4bi0tbWdidDNkaGRcbiAgXCLYudix2KfZglwiLCAvLyB4bi0tbWdidHgyYlxuICBcItmF2YTZitiz2YrYp1wiLCAvLyB4bi0tbWdieDRjZDBhYlxuICBcIua+s+mWgFwiLCAvLyB4bi0tbWl4ODkxZlxuICBcIuuLt+y7tFwiLCAvLyB4bi0tbWsxYnU0NGNcbiAgXCLmlL/lupxcIiwgLy8geG4tLW14dHExbVxuICBcIti02KjZg9ipXCIsIC8vIHhuLS1uZ2JjNWF6ZFxuICBcItio2YrYqtmDXCIsIC8vIHhuLS1uZ2JlOWUwYVxuICBcIti52LHYqFwiLCAvLyB4bi0tbmdicnhcbiAgXCLhg5Lhg5RcIiwgLy8geG4tLW5vZGVcbiAgXCLmnLrmnoRcIiwgLy8geG4tLW5xdjdmXG4gIFwi57uE57uH5py65p6EXCIsIC8vIHhuLS1ucXY3ZnMwMGVtYVxuICBcIuWBpeW6t1wiLCAvLyB4bi0tbnlxeTI2YVxuICBcIuC5hOC4l+C4olwiLCAvLyB4bi0tbzNjdzRoXG4gIFwi2LPZiNix2YrYqVwiLCAvLyB4bi0tb2dicGY4ZmxcbiAgXCLmi5vogZhcIiwgLy8geG4tLW90dTc5NmRcbiAgXCLRgNGD0YFcIiwgLy8geG4tLXAxYWNmXG4gIFwi0YDRhFwiLCAvLyB4bi0tcDFhaVxuICBcIuePoOWunVwiLCAvLyB4bi0tcGJ0OTc3Y1xuICBcItiq2YjZhtizXCIsIC8vIHhuLS1wZ2JzMGRoXG4gIFwi5aSn5ou/XCIsIC8vIHhuLS1wc3N5MnVcbiAgXCLjgb/jgpPjgapcIiwgLy8geG4tLXE5anliNGNcbiAgXCLjgrDjg7zjgrDjg6tcIiwgLy8geG4tLXFja2ExcG1jXG4gIFwizrXOu1wiLCAvLyB4bi0tcXhhbVxuICBcIuS4lueVjFwiLCAvLyB4bi0tcmhxdjk2Z1xuICBcIuabuOexjVwiLCAvLyB4bi0tcm92dTg4YlxuICBcIuC0reC0vuC0sOC0pOC0glwiLCAvLyB4bi0tcnZjMWUwYW0zZVxuICBcIuCoreCovuCosOCopFwiLCAvLyB4bi0tczlicmo5Y1xuICBcIue9keWdgFwiLCAvLyB4bi0tc2VzNTU0Z1xuICBcIuuLt+uEt1wiLCAvLyB4bi0tdDYwYjU2YVxuICBcIuOCs+ODoFwiLCAvLyB4bi0tdGNrd2VcbiAgXCLlpKnkuLvmlZlcIiwgLy8geG4tLXRpcTQ5eHF5alxuICBcIua4uOaIj1wiLCAvLyB4bi0tdW51cDR5XG4gIFwidmVybcO2Z2Vuc2JlcmF0ZXJcIiwgLy8geG4tLXZlcm1nZW5zYmVyYXRlci1jdGJcbiAgXCJ2ZXJtw7ZnZW5zYmVyYXR1bmdcIiwgLy8geG4tLXZlcm1nZW5zYmVyYXR1bmctcHdiXG4gIFwi5LyB5LiaXCIsIC8vIHhuLS12aHF1dlxuICBcIuS/oeaBr1wiLCAvLyB4bi0tdnVxODYxYlxuICBcIuWYiemHjOWkp+mFkuW6l1wiLCAvLyB4bi0tdzRyODVlbDhmaHU1ZG5yYVxuICBcIuWYiemHjFwiLCAvLyB4bi0tdzRyczQwbFxuICBcItmF2LXYsVwiLCAvLyB4bi0td2diaDFjXG4gIFwi2YLYt9ixXCIsIC8vIHhuLS13Z2JsNmFcbiAgXCLlub/kuJxcIiwgLy8geG4tLXhocTUyMWJcbiAgXCLgrofgrrLgrpngr43grpXgr4hcIiwgLy8geG4tLXhrYzJhbDNoeWUyYVxuICBcIuCuh+CuqOCvjeCupOCuv+Cur+CuvlwiLCAvLyB4bi0teGtjMmRsM2E1ZWUwaFxuICBcItWw1aHVtVwiLCAvLyB4bi0teTlhM2FxXG4gIFwi5paw5Yqg5Z2hXCIsIC8vIHhuLS15ZnJvNGk2N29cbiAgXCLZgdmE2LPYt9mK2YZcIiwgLy8geG4tLXlnYmkyYW1teFxuICBcIuaUv+WKoVwiLCAvLyB4bi0temZyMTY0YlxuICBcInhwZXJpYVwiLFxuICBcInh4eFwiLFxuICBcInh5elwiLFxuICBcInlhY2h0c1wiLFxuICBcInlhaG9vXCIsXG4gIFwieWFtYXh1blwiLFxuICBcInlhbmRleFwiLFxuICBcInllXCIsXG4gIFwieW9kb2Jhc2hpXCIsXG4gIFwieW9nYVwiLFxuICBcInlva29oYW1hXCIsXG4gIFwieW91XCIsXG4gIFwieW91dHViZVwiLFxuICBcInl0XCIsXG4gIFwieXVuXCIsXG4gIFwiemFcIixcbiAgXCJ6YXBwb3NcIixcbiAgXCJ6YXJhXCIsXG4gIFwiemVyb1wiLFxuICBcInppcFwiLFxuICBcInppcHBvXCIsXG4gIFwiem1cIixcbiAgXCJ6b25lXCIsXG4gIFwienVlcmljaFwiLFxuICBcInp3XCJcbl07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBpcFJlZ2V4ID0gcmVxdWlyZSgnaXAtcmVnZXgnKTtcbmNvbnN0IHRsZHMgPSByZXF1aXJlKCd0bGRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0cyA9PiB7XG5cdG9wdHMgPSBPYmplY3QuYXNzaWduKHtzdHJpY3Q6IHRydWV9LCBvcHRzKTtcblxuXHRjb25zdCBwcm90b2NvbCA9IGAoPzooPzpbYS16XSs6KT8vLykke29wdHMuc3RyaWN0ID8gJycgOiAnPyd9YDtcblx0Y29uc3QgYXV0aCA9ICcoPzpcXFxcUysoPzo6XFxcXFMqKT9AKT8nO1xuXHRjb25zdCBpcCA9IGlwUmVnZXgudjQoKS5zb3VyY2U7XG5cdGNvbnN0IGhvc3QgPSAnKD86KD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspJztcblx0Y29uc3QgZG9tYWluID0gJyg/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKic7XG5cdGNvbnN0IHRsZCA9IGAoPzpcXFxcLiR7b3B0cy5zdHJpY3QgPyAnKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSknIDogYCg/OiR7dGxkcy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKS5qb2luKCd8Jyl9KWB9KVxcXFwuP2A7XG5cdGNvbnN0IHBvcnQgPSAnKD86OlxcXFxkezIsNX0pPyc7XG5cdGNvbnN0IHBhdGggPSAnKD86Wy8/I11bXlxcXFxzXCJdKik/Jztcblx0Y29uc3QgcmVnZXggPSBgKD86JHtwcm90b2NvbH18d3d3XFxcXC4pJHthdXRofSg/OmxvY2FsaG9zdHwke2lwfXwke2hvc3R9JHtkb21haW59JHt0bGR9KSR7cG9ydH0ke3BhdGh9YDtcblxuXHRyZXR1cm4gb3B0cy5leGFjdCA/IG5ldyBSZWdFeHAoYCg/Ol4ke3JlZ2V4fSQpYCwgJ2knKSA6IG5ldyBSZWdFeHAocmVnZXgsICdpZycpO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogVlogVVJMIHBsdWdpbiBmb3IgQ3JhZnQgQ01TXG4gKlxuICogVnpVcmxGaWVsZCBGaWVsZCBKU1xuICpcbiAqIEBhdXRob3IgICAgRWxpIFZhbiBab2VyZW5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE4IEVsaSBWYW4gWm9lcmVuXG4gKiBAbGluayAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGl2elxuICogQHBhY2thZ2UgICBWelVybFxuICogQHNpbmNlICAgICAyLjAuMFZ6VXJsVnpVcmxGaWVsZFxuICovXG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAndGhyb3R0bGUtZGVib3VuY2UnO1xuaW1wb3J0IHVybFRlc3QgZnJvbSAndXJsLXJlZ2V4JztcbmltcG9ydCAnLi4vY3NzL1Z6VXJsLmNzcyc7XG5cbi8qXG4gKiBBamF4IGxpbmsgdmFsaWRhdG9yIGZvciBWWiBVUkwgZmllbGR0eXBlXG4gKiBieSBFbGkgVmFuIFpvZXJlbiAtIGh0dHA6Ly9lbGl2ei5jb21cbiAqXG4gKiBEZXBlbmRzIG9uOiBqUXVlcnksIENyYWZ0XG4gKi9cblxuY29uc3QgdXJsQ2FjaGUgPSB7fTtcbmNvbnN0IGRlbGF5ID0gNTAwO1xuXG5jbGFzcyBWelVybCB7XG4gIGNvbnN0cnVjdG9yKGZpZWxkKSB7XG4gICAgLy8gU3RvcmUgZWxlbWVudHMgd2Ugd2lsbCB3b3JrIHdpdGhcbiAgICB0aGlzLiRmaWVsZCA9ICQoYCMke2ZpZWxkfWApO1xuICAgIHRoaXMuJHdyYXBwZXIgPSB0aGlzLiRmaWVsZC5jbG9zZXN0KCcudnp1cmwtd3JhcHBlcicpO1xuICAgIHRoaXMuJG1zZyA9IHRoaXMuJHdyYXBwZXIuZmluZCgnLnZ6dXJsLW1zZycpO1xuXG4gICAgLy8gQ2hlY2sgVVJMcyB3aGVuZXZlciB0aGUgZmllbGQgY2hhbmdlc1xuICAgIHRoaXMuJGZpZWxkLm9uKCdrZXl1cCBwYXN0ZScsIHRoaXMuY2hlY2tGaWVsZC5iaW5kKHRoaXMpKTtcblxuICAgIC8vIFN0b3JlIHRoZSBkZWJvdW5jZWQgdmFsaWRhdGlvbiBmdW5jdGlvblxuICAgIHRoaXMudmFsaWRhdGUgPSBkZWJvdW5jZShkZWxheSwgdGhpcy5fdmFsaWRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnF1ZXVlQWpheCA9ICgoKSA9PiB7XG4gICAgICBsZXQgcHJldmlvdXMgPSBuZXcgJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcbiAgICAgIHJldHVybiBmbiA9PiAocHJldmlvdXMgPSBwcmV2aW91cy50aGVuKGZuKSk7XG4gICAgfSkoKTtcblxuICAgIC8vIENoZWNrIGV4aXN0aW5nIFVSTHMgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIHRoaXMuY2hlY2tGaWVsZCgpO1xuICB9XG5cbiAgY2hlY2tGaWVsZCgpIHtcbiAgICAvLyBEb24ndCBib3RoZXIgY2hlY2tpbmcgaWYgaXQncyBlbXB0eVxuICAgIGlmICh0aGlzLiRmaWVsZC52YWwoKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKHsgc3RhdHVzOiAnZW1wdHknIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIFwic3Bpbm5lclwiXG4gICAgdGhpcy5zZXRTdGF0dXMoeyBzdGF0dXM6ICdjaGVja2luZycgfSk7XG5cbiAgICB0aGlzLnZhbGlkYXRlKHRoaXMuJGZpZWxkKTtcbiAgfVxuXG4gIC8qXG4gICAqIEFjdHVhbGx5IHNlbmQgYSByZXF1ZXN0IHRoZSB0aGUgdGFyZ2V0IFVSTCB0byBzZWUgaWYgaXQgZXhpc3RzXG4gICAqL1xuICBfdmFsaWRhdGUoKSB7XG4gICAgbGV0IHVybCA9IHRoaXMuJGZpZWxkLnZhbCgpO1xuICAgIGxldCBkYXRhID0ge307XG5cbiAgICAvLyBQcmVwZW5kIHNpdGUgYmFzZVVybCB0byByZWxhdGl2ZSBVUklzXG4gICAgaWYgKHVybC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgdXJsID0gQ3JhZnQuYmFzZVVybC5yZXBsYWNlKC9eKC4rPylcXC8qPyQvLCAnJDEnKSArIHVybDtcbiAgICB9XG5cbiAgICBpZiAodXJsIGluIHVybENhY2hlKSB7XG4gICAgICAvLyBVc2UgdGhlIGNhY2hlZCBkYXRhXG4gICAgICBkYXRhID0gdXJsQ2FjaGVbdXJsXTtcbiAgICB9IGVsc2UgaWYgKHVybC5jaGFyQXQoMCkgPT09ICcjJyB8fCB1cmwuY2hhckF0KDApID09PSAnPycpIHtcbiAgICAgIC8vIEluLXBhZ2UgbGlua3Mgc2hvdWxkIGFsd2F5cyBiZSBjb25zaWRlcmVkIHZhbGlkXG4gICAgICBkYXRhLnN0YXR1cyA9ICd2YWxpZCc7XG4gICAgfSBlbHNlIGlmICghdXJsVGVzdCh7IGV4YWN0OiB0cnVlIH0pLnRlc3QodXJsKSkge1xuICAgICAgLy8gVGhhdCdzIG5vdCBldmVuIGEgcmVhbCBVUkxcbiAgICAgIGRhdGEuc3RhdHVzID0gJ2ludmFsaWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBamF4IGNhbGwgdG8gcHJveHkgdG8gY2hlY2sgdGhlIHVybFxuICAgICAgcmV0dXJuIENyYWZ0LnBvc3RBY3Rpb25SZXF1ZXN0KFxuICAgICAgICAndnp1cmwvdmFsaWRhdGlvbi9jaGVjaycsXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgIH0sXG4gICAgICAgIChyZXNwb25zZSwgdGV4dFN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmICh0ZXh0U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgVVJMIHdlIGFyZSBjaGVja2luZyBpcyBzdGlsbCB0aGVyZVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9yaWdpbmFsICE9PSB0aGlzLiRmaWVsZC52YWwoKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNob3cgb3IgaGlkZSB0aGUgZXJyb3IgbWVzc2FnZSwgYXMgbmVlZGVkXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaHR0cF9jb2RlID49IDIwMCAmJiByZXNwb25zZS5odHRwX2NvZGUgPCA0MDApIHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9yaWdpbmFsID09PSByZXNwb25zZS5maW5hbF91cmwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgVVJMIGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0dXMgPSAndmFsaWQnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBVUkwgaXMgYSByZWRpcmVjdFxuICAgICAgICAgICAgICAgIGRhdGEuc3RhdHVzID0gJ3JlZGlyZWN0JztcbiAgICAgICAgICAgICAgICBkYXRhLnJlZGlyZWN0ID0gcmVzcG9uc2UuZmluYWxfdXJsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9ICdpbnZhbGlkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5zdGF0dXMgPSAnaW52YWxpZCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZGF0YSk7XG4gICAgICAgICAgdXJsQ2FjaGVbdXJsXSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCdzdGF0dXMnIGluIGRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFNldCB0aGUgc3R5bGluZyBhbmQgZXJyb3IgbWVzc2FnZSBhcyBuZWVkZWRcbiAgICovXG4gIHNldFN0YXR1cyhkYXRhKSB7XG4gICAgLy8gUmVzZXQgZmllbGRcbiAgICB0aGlzLiRmaWVsZC5wcmV2KCkucmVtb3ZlKCk7XG4gICAgdGhpcy4kd3JhcHBlci5yZW1vdmVDbGFzcygnZXJyb3JzIHJlZGlyZWN0IGNoZWNraW5nJyk7XG5cbiAgICAvLyBSZXNldCBtZXNzYWdlXG4gICAgdGhpcy4kbXNnLmVtcHR5KCk7XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdlbXB0eScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdpbnZhbGlkJykge1xuICAgICAgdGhpcy4kbXNnLnRleHQoQ3JhZnQudCgndnp1cmwnLCAnVGhpcyBVUkwgYXBwZWFycyB0byBiZSBpbnZhbGlkJykpO1xuICAgICAgdGhpcy4kd3JhcHBlci5hZGRDbGFzcygnZXJyb3JzJyk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3JlZGlyZWN0Jykge1xuICAgICAgaWYgKHRoaXMuJGZpZWxkLmhhc0NsYXNzKCdmb2xsb3ctcmVkaXJlY3RzJykpIHtcbiAgICAgICAgdGhpcy4kd3JhcHBlci5hZGRDbGFzcygnZXJyb3JzIHJlZGlyZWN0Jyk7XG4gICAgICAgIHRoaXMuJG1zZy5odG1sKFxuICAgICAgICAgIGA8c3Bhbj4ke0NyYWZ0LnQoJ3Z6dXJsJywgJ1JlZGlyZWN0cyB0bycpfSAke2RhdGEucmVkaXJlY3R9PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICAgICAgJCgnPGEvPicsIHtcbiAgICAgICAgICB0ZXh0OiBDcmFmdC50KCd2enVybCcsICdVcGRhdGUnKSxcbiAgICAgICAgICBjbGljazogZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgZmllbGQgdmFsdWUgd2l0aCB0aGUgcmVkaXJlY3QgdGFyZ2V0XG4gICAgICAgICAgICB0aGlzLiRmaWVsZC52YWwoZGF0YS5yZWRpcmVjdCk7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKHRoaXMuJGZpZWxkKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkuYXBwZW5kVG8odGhpcy4kbXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuc3RhdHVzID0gJ3ZhbGlkJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuc3RhdHVzID09PSAnY2hlY2tpbmcnKSB7XG4gICAgICB0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdjaGVja2luZycpO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIFwiT3BlbiBQYWdlIGxpbmtcIlxuICAgIGlmIChkYXRhLnN0YXR1cyAhPT0gJ2VtcHR5JyAmJiBkYXRhLnN0YXR1cyAhPT0gJ2NoZWNraW5nJykge1xuICAgICAgY29uc3QgJHZpc2l0TGluayA9ICQoJzxhLz4nLCB7XG4gICAgICAgIGhyZWY6IHRoaXMuJGZpZWxkLnZhbCgpLFxuICAgICAgICBjbGFzczogJ3Z6dXJsLXZpc2l0JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgdGl0bGU6IGAke0NyYWZ0LnQoJ3Z6dXJsJywgJ1Zpc2l0IFVSTCcpfTogJHt0aGlzLiRmaWVsZC52YWwoKX1gLFxuICAgICAgfSk7XG4gICAgICB0aGlzLiRmaWVsZC5iZWZvcmUoJHZpc2l0TGluayk7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5WelVybCA9IFZ6VXJsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==