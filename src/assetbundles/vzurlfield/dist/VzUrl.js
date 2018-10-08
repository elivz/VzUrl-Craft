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
    this.$wrapper = this.$field.parent();
    this.$msg = this.$field.next(); // Check URLs whenever the field changes

    this.$field.on('keyup paste', this.checkField.bind(this)); // Store the debounced validation function

    this.validate = Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(delay, this._validate.bind(this)); // Check existing URLs when the page loads

    this.checkField();
  }

  _createClass(VzUrl, [{
    key: "queueAjax",
    value: function queueAjax() {
      return function () {
        var previous = new $.Deferred().resolve();
        return function (fn) {
          return previous = previous.then(fn);
        };
      }();
    }
  }, {
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
        this.queueAjax(function () {
          var safeUrl = url.replace('http', 'ht^tp'); // Mod_security doesn't like "http://" in posted data

          return Craft.postActionRequest('vzurl/validation/check', {
            url: safeUrl
          }).done(function (response) {
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
          }).fail(function () {
            data.status = 'invalid';
          }).always(function () {
            _this.setStatus(data);

            urlCache[url] = data;
          });
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
      this.$wrapper.removeClass('errors checking'); // Reset message

      this.$msg.empty();

      if (data.status === 'empty') {
        return;
      }

      if (data.status === 'invalid') {
        this.$msg.text(Craft.t('This URL appears to be invalid'));
        this.$wrapper.addClass('errors');
      } else if (data.status === 'redirect') {
        if (this.$field.hasClass('follow-redirects')) {
          this.$wrapper.addClass('errors');
          this.$msg.html("<span>".concat(Craft.t('Redirects to'), " ").concat(data.redirect, "</span>"));
          $('<a/>', {
            text: Craft.t('Update'),
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
          title: "".concat(Craft.t('Visit URL'), ": ").concat(this.$field.val())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lwLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aHJvdHRsZS1kZWJvdW5jZS9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RsZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3Z6dXJsZmllbGQvc3JjL2Nzcy9WelVybC5jc3M/OWExZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3Z6dXJsZmllbGQvc3JjL2pzL1Z6VXJsLmpzIl0sIm5hbWVzIjpbInVybENhY2hlIiwiZGVsYXkiLCJWelVybCIsImZpZWxkIiwiJGZpZWxkIiwiJCIsIiR3cmFwcGVyIiwicGFyZW50IiwiJG1zZyIsIm5leHQiLCJvbiIsImNoZWNrRmllbGQiLCJiaW5kIiwidmFsaWRhdGUiLCJkZWJvdW5jZSIsIl92YWxpZGF0ZSIsInByZXZpb3VzIiwiRGVmZXJyZWQiLCJyZXNvbHZlIiwiZm4iLCJ0aGVuIiwidmFsIiwic2V0U3RhdHVzIiwic3RhdHVzIiwidXJsIiwiZGF0YSIsImNoYXJBdCIsIkNyYWZ0IiwiYmFzZVVybCIsInJlcGxhY2UiLCJ1cmxUZXN0IiwiZXhhY3QiLCJ0ZXN0IiwicXVldWVBamF4Iiwic2FmZVVybCIsInBvc3RBY3Rpb25SZXF1ZXN0IiwiZG9uZSIsInJlc3BvbnNlIiwib3JpZ2luYWwiLCJodHRwX2NvZGUiLCJmaW5hbF91cmwiLCJyZWRpcmVjdCIsImZhaWwiLCJhbHdheXMiLCJwcmV2IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsInRleHQiLCJ0IiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImh0bWwiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcHBlbmRUbyIsIiR2aXNpdExpbmsiLCJocmVmIiwiY2xhc3MiLCJ0YXJnZXQiLCJ0aXRsZSIsImJlZm9yZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYiwwSEFBMEgsRUFBRTtBQUM1SCw4QkFBOEIsSUFBSSx1QkFBdUIsSUFBSSxLQUFLLElBQUk7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUU4Qjs7Ozs7Ozs7Ozs7O0FDNUg5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LE1BQU0sQ0FBQzdELEtBQVAsR0FBZUEsS0FBZixDIiwiZmlsZSI6IlZ6VXJsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY3ByZXNvdXJjZXMvdnp1cmwvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Fzc2V0YnVuZGxlcy92enVybGZpZWxkL3NyYy9qcy9WelVybC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHY0ID0gJyg/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkoPzpcXFxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18MVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkpezN9JztcbnZhciB2NiA9ICcoPzooPzpbMC05YS1mQS1GOl0pezEsNH0oPzooPzo6KD86WzAtOWEtZkEtRl0pezEsNH18OikpezIsN30pKyc7XG5cbnZhciBpcCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHJldHVybiBvcHRzLmV4YWN0ID8gbmV3IFJlZ0V4cCgnKD86XicgKyB2NCArICckKXwoPzpeJyArIHY2ICsgJyQpJykgOlxuXHQgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoJyg/OicgKyB2NCArICcpfCg/OicgKyB2NiArICcpJywgJ2cnKTtcbn07XG5cbmlwLnY0ID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHJldHVybiBvcHRzLmV4YWN0ID8gbmV3IFJlZ0V4cCgnXicgKyB2NCArICckJykgOiBuZXcgUmVnRXhwKHY0LCAnZycpO1xufTtcblxuaXAudjYgPSBmdW5jdGlvbiAob3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0cmV0dXJuIG9wdHMuZXhhY3QgPyBuZXcgUmVnRXhwKCdeJyArIHY2ICsgJyQnKSA6IG5ldyBSZWdFeHAodjYsICdnJyk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkLG5vLXBhcmFtLXJlYXNzaWduLG5vLXNoYWRvdyAqL1xuXG4vKipcbiAqIFRocm90dGxlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBFc3BlY2lhbGx5IHVzZWZ1bCBmb3IgcmF0ZSBsaW1pdGluZ1xuICogZXhlY3V0aW9uIG9mIGhhbmRsZXJzIG9uIGV2ZW50cyBsaWtlIHJlc2l6ZSBhbmQgc2Nyb2xsLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICAgZGVsYXkgICAgICAgICAgQSB6ZXJvLW9yLWdyZWF0ZXIgZGVsYXkgaW4gbWlsbGlzZWNvbmRzLiBGb3IgZXZlbnQgY2FsbGJhY2tzLCB2YWx1ZXMgYXJvdW5kIDEwMCBvciAyNTAgKG9yIGV2ZW4gaGlnaGVyKSBhcmUgbW9zdCB1c2VmdWwuXG4gKiBAcGFyYW0gIHtCb29sZWFufSAgIFtub1RyYWlsaW5nXSAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgbm9UcmFpbGluZyBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIG9ubHkgZXhlY3V0ZSBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcyB3aGlsZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZC4gSWYgbm9UcmFpbGluZyBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBiZSBleGVjdXRlZCBvbmUgZmluYWwgdGltZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCB0aHJvdHRsZWQtZnVuY3Rpb24gY2FsbC4gKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KVxuICogQHBhcmFtICB7RnVuY3Rpb259ICBjYWxsYmFjayAgICAgICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGRlbGF5IG1pbGxpc2Vjb25kcy4gVGhlIGB0aGlzYCBjb250ZXh0IGFuZCBhbGwgYXJndW1lbnRzIGFyZSBwYXNzZWQgdGhyb3VnaCwgYXMtaXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbZGVib3VuY2VNb2RlXSBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gKlxuICogQHJldHVybiB7RnVuY3Rpb259ICBBIG5ldywgdGhyb3R0bGVkLCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUgKCBkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSApIHtcblxuXHQvKlxuXHQgKiBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuXHQgKiBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcblx0ICogZGVib3VuY2UgbW9kZXMuXG5cdCAqL1xuXHR2YXIgdGltZW91dElEO1xuXG5cdC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblx0dmFyIGxhc3RFeGVjID0gMDtcblxuXHQvLyBgbm9UcmFpbGluZ2AgZGVmYXVsdHMgdG8gZmFsc3kuXG5cdGlmICggdHlwZW9mIG5vVHJhaWxpbmcgIT09ICdib29sZWFuJyApIHtcblx0XHRkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcblx0XHRjYWxsYmFjayA9IG5vVHJhaWxpbmc7XG5cdFx0bm9UcmFpbGluZyA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qXG5cdCAqIFRoZSBgd3JhcHBlcmAgZnVuY3Rpb24gZW5jYXBzdWxhdGVzIGFsbCBvZiB0aGUgdGhyb3R0bGluZyAvIGRlYm91bmNpbmdcblx0ICogZnVuY3Rpb25hbGl0eSBhbmQgd2hlbiBleGVjdXRlZCB3aWxsIGxpbWl0IHRoZSByYXRlIGF0IHdoaWNoIGBjYWxsYmFja2Bcblx0ICogaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB3cmFwcGVyICgpIHtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgZWxhcHNlZCA9IE51bWJlcihuZXcgRGF0ZSgpKSAtIGxhc3RFeGVjO1xuXHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0Ly8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXHRcdGZ1bmN0aW9uIGV4ZWMgKCkge1xuXHRcdFx0bGFzdEV4ZWMgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHQvKlxuXHRcdCAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSB0aGlzIGlzIHVzZWQgdG8gY2xlYXIgdGhlIGZsYWdcblx0XHQgKiB0byBhbGxvdyBmdXR1cmUgYGNhbGxiYWNrYCBleGVjdXRpb25zLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGNsZWFyICgpIHtcblx0XHRcdHRpbWVvdXRJRCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoIGRlYm91bmNlTW9kZSAmJiAhdGltZW91dElEICkge1xuXHRcdFx0Lypcblx0XHRcdCAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuXHRcdFx0ICogYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG5cdFx0XHQgKi9cblx0XHRcdGV4ZWMoKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dC5cblx0XHRpZiAoIHRpbWVvdXRJRCApIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuXHRcdH1cblxuXHRcdGlmICggZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgJiYgZWxhcHNlZCA+IGRlbGF5ICkge1xuXHRcdFx0Lypcblx0XHRcdCAqIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuXHRcdFx0ICogYGNhbGxiYWNrYC5cblx0XHRcdCAqL1xuXHRcdFx0ZXhlYygpO1xuXG5cdFx0fSBlbHNlIGlmICggbm9UcmFpbGluZyAhPT0gdHJ1ZSApIHtcblx0XHRcdC8qXG5cdFx0XHQgKiBJbiB0cmFpbGluZyB0aHJvdHRsZSBtb2RlLCBzaW5jZSBgZGVsYXlgIHRpbWUgaGFzIG5vdCBiZWVuXG5cdFx0XHQgKiBleGNlZWRlZCwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0byBleGVjdXRlIGBkZWxheWAgbXMgYWZ0ZXIgbW9zdFxuXHRcdFx0ICogcmVjZW50IGV4ZWN1dGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyB0cnVlIChhdCBiZWdpbiksIHNjaGVkdWxlIGBjbGVhcmAgdG8gZXhlY3V0ZVxuXHRcdFx0ICogYWZ0ZXIgYGRlbGF5YCBtcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgZGVib3VuY2VNb2RlYCBpcyBmYWxzZSAoYXQgZW5kKSwgc2NoZWR1bGUgYGNhbGxiYWNrYCB0b1xuXHRcdFx0ICogZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuXHRcdFx0ICovXG5cdFx0XHR0aW1lb3V0SUQgPSBzZXRUaW1lb3V0KGRlYm91bmNlTW9kZSA/IGNsZWFyIDogZXhlYywgZGVib3VuY2VNb2RlID09PSB1bmRlZmluZWQgPyBkZWxheSAtIGVsYXBzZWQgOiBkZWxheSk7XG5cdFx0fVxuXG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHdyYXBwZXIgZnVuY3Rpb24uXG5cdHJldHVybiB3cmFwcGVyO1xuXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCAqL1xuXG4vKipcbiAqIERlYm91bmNlIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uLiBEZWJvdW5jaW5nLCB1bmxpa2UgdGhyb3R0bGluZyxcbiAqIGd1YXJhbnRlZXMgdGhhdCBhIGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgYSBzaW5nbGUgdGltZSwgZWl0aGVyIGF0IHRoZVxuICogdmVyeSBiZWdpbm5pbmcgb2YgYSBzZXJpZXMgb2YgY2FsbHMsIG9yIGF0IHRoZSB2ZXJ5IGVuZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgZGVsYXkgICAgICAgICBBIHplcm8tb3ItZ3JlYXRlciBkZWxheSBpbiBtaWxsaXNlY29uZHMuIEZvciBldmVudCBjYWxsYmFja3MsIHZhbHVlcyBhcm91bmQgMTAwIG9yIDI1MCAob3IgZXZlbiBoaWdoZXIpIGFyZSBtb3N0IHVzZWZ1bC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICBbYXRCZWdpbl0gICAgIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBmYWxzZS4gSWYgYXRCZWdpbiBpcyBmYWxzZSBvciB1bnNwZWNpZmllZCwgY2FsbGJhY2sgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIGBkZWxheWAgbWlsbGlzZWNvbmRzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlciB0aGUgbGFzdCBkZWJvdW5jZWQtZnVuY3Rpb24gY2FsbC4gSWYgYXRCZWdpbiBpcyB0cnVlLCBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgYXQgdGhlIGZpcnN0IGRlYm91bmNlZC1mdW5jdGlvbiBjYWxsLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEFmdGVyIHRoZSB0aHJvdHRsZWQtZnVuY3Rpb24gaGFzIG5vdCBiZWVuIGNhbGxlZCBmb3IgYGRlbGF5YCBtaWxsaXNlY29uZHMsIHRoZSBpbnRlcm5hbCBjb3VudGVyIGlzIHJlc2V0KS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAgICAgIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZGVsYXkgbWlsbGlzZWNvbmRzLiBUaGUgYHRoaXNgIGNvbnRleHQgYW5kIGFsbCBhcmd1bWVudHMgYXJlIHBhc3NlZCB0aHJvdWdoLCBhcy1pcyxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGBjYWxsYmFja2Agd2hlbiB0aGUgZGVib3VuY2VkLWZ1bmN0aW9uIGlzIGV4ZWN1dGVkLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBkZWJvdW5jZSAoIGRlbGF5LCBhdEJlZ2luLCBjYWxsYmFjayApIHtcblx0cmV0dXJuIGNhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aHJvdHRsZShkZWxheSwgYXRCZWdpbiwgZmFsc2UpIDogdGhyb3R0bGUoZGVsYXksIGNhbGxiYWNrLCBhdEJlZ2luICE9PSBmYWxzZSk7XG59XG5cbmV4cG9ydCB7IHRocm90dGxlLCBkZWJvdW5jZSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbXG4gIFwiYWFhXCIsXG4gIFwiYWFycFwiLFxuICBcImFiYXJ0aFwiLFxuICBcImFiYlwiLFxuICBcImFiYm90dFwiLFxuICBcImFiYnZpZVwiLFxuICBcImFiY1wiLFxuICBcImFibGVcIixcbiAgXCJhYm9nYWRvXCIsXG4gIFwiYWJ1ZGhhYmlcIixcbiAgXCJhY1wiLFxuICBcImFjYWRlbXlcIixcbiAgXCJhY2NlbnR1cmVcIixcbiAgXCJhY2NvdW50YW50XCIsXG4gIFwiYWNjb3VudGFudHNcIixcbiAgXCJhY29cIixcbiAgXCJhY3RpdmVcIixcbiAgXCJhY3RvclwiLFxuICBcImFkXCIsXG4gIFwiYWRhY1wiLFxuICBcImFkc1wiLFxuICBcImFkdWx0XCIsXG4gIFwiYWVcIixcbiAgXCJhZWdcIixcbiAgXCJhZXJvXCIsXG4gIFwiYWV0bmFcIixcbiAgXCJhZlwiLFxuICBcImFmYW1pbHljb21wYW55XCIsXG4gIFwiYWZsXCIsXG4gIFwiYWZyaWNhXCIsXG4gIFwiYWdcIixcbiAgXCJhZ2FraGFuXCIsXG4gIFwiYWdlbmN5XCIsXG4gIFwiYWlcIixcbiAgXCJhaWdcIixcbiAgXCJhaWdvXCIsXG4gIFwiYWlyYnVzXCIsXG4gIFwiYWlyZm9yY2VcIixcbiAgXCJhaXJ0ZWxcIixcbiAgXCJha2RuXCIsXG4gIFwiYWxcIixcbiAgXCJhbGZhcm9tZW9cIixcbiAgXCJhbGliYWJhXCIsXG4gIFwiYWxpcGF5XCIsXG4gIFwiYWxsZmluYW56XCIsXG4gIFwiYWxsc3RhdGVcIixcbiAgXCJhbGx5XCIsXG4gIFwiYWxzYWNlXCIsXG4gIFwiYWxzdG9tXCIsXG4gIFwiYW1cIixcbiAgXCJhbWVyaWNhbmV4cHJlc3NcIixcbiAgXCJhbWVyaWNhbmZhbWlseVwiLFxuICBcImFtZXhcIixcbiAgXCJhbWZhbVwiLFxuICBcImFtaWNhXCIsXG4gIFwiYW1zdGVyZGFtXCIsXG4gIFwiYW5hbHl0aWNzXCIsXG4gIFwiYW5kcm9pZFwiLFxuICBcImFucXVhblwiLFxuICBcImFuelwiLFxuICBcImFvXCIsXG4gIFwiYW9sXCIsXG4gIFwiYXBhcnRtZW50c1wiLFxuICBcImFwcFwiLFxuICBcImFwcGxlXCIsXG4gIFwiYXFcIixcbiAgXCJhcXVhcmVsbGVcIixcbiAgXCJhclwiLFxuICBcImFyYWJcIixcbiAgXCJhcmFtY29cIixcbiAgXCJhcmNoaVwiLFxuICBcImFybXlcIixcbiAgXCJhcnBhXCIsXG4gIFwiYXJ0XCIsXG4gIFwiYXJ0ZVwiLFxuICBcImFzXCIsXG4gIFwiYXNkYVwiLFxuICBcImFzaWFcIixcbiAgXCJhc3NvY2lhdGVzXCIsXG4gIFwiYXRcIixcbiAgXCJhdGhsZXRhXCIsXG4gIFwiYXR0b3JuZXlcIixcbiAgXCJhdVwiLFxuICBcImF1Y3Rpb25cIixcbiAgXCJhdWRpXCIsXG4gIFwiYXVkaWJsZVwiLFxuICBcImF1ZGlvXCIsXG4gIFwiYXVzcG9zdFwiLFxuICBcImF1dGhvclwiLFxuICBcImF1dG9cIixcbiAgXCJhdXRvc1wiLFxuICBcImF2aWFuY2FcIixcbiAgXCJhd1wiLFxuICBcImF3c1wiLFxuICBcImF4XCIsXG4gIFwiYXhhXCIsXG4gIFwiYXpcIixcbiAgXCJhenVyZVwiLFxuICBcImJhXCIsXG4gIFwiYmFieVwiLFxuICBcImJhaWR1XCIsXG4gIFwiYmFuYW1leFwiLFxuICBcImJhbmFuYXJlcHVibGljXCIsXG4gIFwiYmFuZFwiLFxuICBcImJhbmtcIixcbiAgXCJiYXJcIixcbiAgXCJiYXJjZWxvbmFcIixcbiAgXCJiYXJjbGF5Y2FyZFwiLFxuICBcImJhcmNsYXlzXCIsXG4gIFwiYmFyZWZvb3RcIixcbiAgXCJiYXJnYWluc1wiLFxuICBcImJhc2ViYWxsXCIsXG4gIFwiYmFza2V0YmFsbFwiLFxuICBcImJhdWhhdXNcIixcbiAgXCJiYXllcm5cIixcbiAgXCJiYlwiLFxuICBcImJiY1wiLFxuICBcImJidFwiLFxuICBcImJidmFcIixcbiAgXCJiY2dcIixcbiAgXCJiY25cIixcbiAgXCJiZFwiLFxuICBcImJlXCIsXG4gIFwiYmVhdHNcIixcbiAgXCJiZWF1dHlcIixcbiAgXCJiZWVyXCIsXG4gIFwiYmVudGxleVwiLFxuICBcImJlcmxpblwiLFxuICBcImJlc3RcIixcbiAgXCJiZXN0YnV5XCIsXG4gIFwiYmV0XCIsXG4gIFwiYmZcIixcbiAgXCJiZ1wiLFxuICBcImJoXCIsXG4gIFwiYmhhcnRpXCIsXG4gIFwiYmlcIixcbiAgXCJiaWJsZVwiLFxuICBcImJpZFwiLFxuICBcImJpa2VcIixcbiAgXCJiaW5nXCIsXG4gIFwiYmluZ29cIixcbiAgXCJiaW9cIixcbiAgXCJiaXpcIixcbiAgXCJialwiLFxuICBcImJsYWNrXCIsXG4gIFwiYmxhY2tmcmlkYXlcIixcbiAgXCJibGFuY29cIixcbiAgXCJibG9ja2J1c3RlclwiLFxuICBcImJsb2dcIixcbiAgXCJibG9vbWJlcmdcIixcbiAgXCJibHVlXCIsXG4gIFwiYm1cIixcbiAgXCJibXNcIixcbiAgXCJibXdcIixcbiAgXCJiblwiLFxuICBcImJubFwiLFxuICBcImJucHBhcmliYXNcIixcbiAgXCJib1wiLFxuICBcImJvYXRzXCIsXG4gIFwiYm9laHJpbmdlclwiLFxuICBcImJvZmFcIixcbiAgXCJib21cIixcbiAgXCJib25kXCIsXG4gIFwiYm9vXCIsXG4gIFwiYm9va1wiLFxuICBcImJvb2tpbmdcIixcbiAgXCJib3NjaFwiLFxuICBcImJvc3Rpa1wiLFxuICBcImJvc3RvblwiLFxuICBcImJvdFwiLFxuICBcImJvdXRpcXVlXCIsXG4gIFwiYm94XCIsXG4gIFwiYnJcIixcbiAgXCJicmFkZXNjb1wiLFxuICBcImJyaWRnZXN0b25lXCIsXG4gIFwiYnJvYWR3YXlcIixcbiAgXCJicm9rZXJcIixcbiAgXCJicm90aGVyXCIsXG4gIFwiYnJ1c3NlbHNcIixcbiAgXCJic1wiLFxuICBcImJ0XCIsXG4gIFwiYnVkYXBlc3RcIixcbiAgXCJidWdhdHRpXCIsXG4gIFwiYnVpbGRcIixcbiAgXCJidWlsZGVyc1wiLFxuICBcImJ1c2luZXNzXCIsXG4gIFwiYnV5XCIsXG4gIFwiYnV6elwiLFxuICBcImJ2XCIsXG4gIFwiYndcIixcbiAgXCJieVwiLFxuICBcImJ6XCIsXG4gIFwiYnpoXCIsXG4gIFwiY2FcIixcbiAgXCJjYWJcIixcbiAgXCJjYWZlXCIsXG4gIFwiY2FsXCIsXG4gIFwiY2FsbFwiLFxuICBcImNhbHZpbmtsZWluXCIsXG4gIFwiY2FtXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2FtcFwiLFxuICBcImNhbmNlcnJlc2VhcmNoXCIsXG4gIFwiY2Fub25cIixcbiAgXCJjYXBldG93blwiLFxuICBcImNhcGl0YWxcIixcbiAgXCJjYXBpdGFsb25lXCIsXG4gIFwiY2FyXCIsXG4gIFwiY2FyYXZhblwiLFxuICBcImNhcmRzXCIsXG4gIFwiY2FyZVwiLFxuICBcImNhcmVlclwiLFxuICBcImNhcmVlcnNcIixcbiAgXCJjYXJzXCIsXG4gIFwiY2FydGllclwiLFxuICBcImNhc2FcIixcbiAgXCJjYXNlXCIsXG4gIFwiY2FzZWloXCIsXG4gIFwiY2FzaFwiLFxuICBcImNhc2lub1wiLFxuICBcImNhdFwiLFxuICBcImNhdGVyaW5nXCIsXG4gIFwiY2F0aG9saWNcIixcbiAgXCJjYmFcIixcbiAgXCJjYm5cIixcbiAgXCJjYnJlXCIsXG4gIFwiY2JzXCIsXG4gIFwiY2NcIixcbiAgXCJjZFwiLFxuICBcImNlYlwiLFxuICBcImNlbnRlclwiLFxuICBcImNlb1wiLFxuICBcImNlcm5cIixcbiAgXCJjZlwiLFxuICBcImNmYVwiLFxuICBcImNmZFwiLFxuICBcImNnXCIsXG4gIFwiY2hcIixcbiAgXCJjaGFuZWxcIixcbiAgXCJjaGFubmVsXCIsXG4gIFwiY2hhc2VcIixcbiAgXCJjaGF0XCIsXG4gIFwiY2hlYXBcIixcbiAgXCJjaGludGFpXCIsXG4gIFwiY2hyaXN0bWFzXCIsXG4gIFwiY2hyb21lXCIsXG4gIFwiY2hyeXNsZXJcIixcbiAgXCJjaHVyY2hcIixcbiAgXCJjaVwiLFxuICBcImNpcHJpYW5pXCIsXG4gIFwiY2lyY2xlXCIsXG4gIFwiY2lzY29cIixcbiAgXCJjaXRhZGVsXCIsXG4gIFwiY2l0aVwiLFxuICBcImNpdGljXCIsXG4gIFwiY2l0eVwiLFxuICBcImNpdHllYXRzXCIsXG4gIFwiY2tcIixcbiAgXCJjbFwiLFxuICBcImNsYWltc1wiLFxuICBcImNsZWFuaW5nXCIsXG4gIFwiY2xpY2tcIixcbiAgXCJjbGluaWNcIixcbiAgXCJjbGluaXF1ZVwiLFxuICBcImNsb3RoaW5nXCIsXG4gIFwiY2xvdWRcIixcbiAgXCJjbHViXCIsXG4gIFwiY2x1Ym1lZFwiLFxuICBcImNtXCIsXG4gIFwiY25cIixcbiAgXCJjb1wiLFxuICBcImNvYWNoXCIsXG4gIFwiY29kZXNcIixcbiAgXCJjb2ZmZWVcIixcbiAgXCJjb2xsZWdlXCIsXG4gIFwiY29sb2duZVwiLFxuICBcImNvbVwiLFxuICBcImNvbWNhc3RcIixcbiAgXCJjb21tYmFua1wiLFxuICBcImNvbW11bml0eVwiLFxuICBcImNvbXBhbnlcIixcbiAgXCJjb21wYXJlXCIsXG4gIFwiY29tcHV0ZXJcIixcbiAgXCJjb21zZWNcIixcbiAgXCJjb25kb3NcIixcbiAgXCJjb25zdHJ1Y3Rpb25cIixcbiAgXCJjb25zdWx0aW5nXCIsXG4gIFwiY29udGFjdFwiLFxuICBcImNvbnRyYWN0b3JzXCIsXG4gIFwiY29va2luZ1wiLFxuICBcImNvb2tpbmdjaGFubmVsXCIsXG4gIFwiY29vbFwiLFxuICBcImNvb3BcIixcbiAgXCJjb3JzaWNhXCIsXG4gIFwiY291bnRyeVwiLFxuICBcImNvdXBvblwiLFxuICBcImNvdXBvbnNcIixcbiAgXCJjb3Vyc2VzXCIsXG4gIFwiY3JcIixcbiAgXCJjcmVkaXRcIixcbiAgXCJjcmVkaXRjYXJkXCIsXG4gIFwiY3JlZGl0dW5pb25cIixcbiAgXCJjcmlja2V0XCIsXG4gIFwiY3Jvd25cIixcbiAgXCJjcnNcIixcbiAgXCJjcnVpc2VcIixcbiAgXCJjcnVpc2VzXCIsXG4gIFwiY3NjXCIsXG4gIFwiY3VcIixcbiAgXCJjdWlzaW5lbGxhXCIsXG4gIFwiY3ZcIixcbiAgXCJjd1wiLFxuICBcImN4XCIsXG4gIFwiY3lcIixcbiAgXCJjeW1ydVwiLFxuICBcImN5b3VcIixcbiAgXCJjelwiLFxuICBcImRhYnVyXCIsXG4gIFwiZGFkXCIsXG4gIFwiZGFuY2VcIixcbiAgXCJkYXRhXCIsXG4gIFwiZGF0ZVwiLFxuICBcImRhdGluZ1wiLFxuICBcImRhdHN1blwiLFxuICBcImRheVwiLFxuICBcImRjbGtcIixcbiAgXCJkZHNcIixcbiAgXCJkZVwiLFxuICBcImRlYWxcIixcbiAgXCJkZWFsZXJcIixcbiAgXCJkZWFsc1wiLFxuICBcImRlZ3JlZVwiLFxuICBcImRlbGl2ZXJ5XCIsXG4gIFwiZGVsbFwiLFxuICBcImRlbG9pdHRlXCIsXG4gIFwiZGVsdGFcIixcbiAgXCJkZW1vY3JhdFwiLFxuICBcImRlbnRhbFwiLFxuICBcImRlbnRpc3RcIixcbiAgXCJkZXNpXCIsXG4gIFwiZGVzaWduXCIsXG4gIFwiZGV2XCIsXG4gIFwiZGhsXCIsXG4gIFwiZGlhbW9uZHNcIixcbiAgXCJkaWV0XCIsXG4gIFwiZGlnaXRhbFwiLFxuICBcImRpcmVjdFwiLFxuICBcImRpcmVjdG9yeVwiLFxuICBcImRpc2NvdW50XCIsXG4gIFwiZGlzY292ZXJcIixcbiAgXCJkaXNoXCIsXG4gIFwiZGl5XCIsXG4gIFwiZGpcIixcbiAgXCJka1wiLFxuICBcImRtXCIsXG4gIFwiZG5wXCIsXG4gIFwiZG9cIixcbiAgXCJkb2NzXCIsXG4gIFwiZG9jdG9yXCIsXG4gIFwiZG9kZ2VcIixcbiAgXCJkb2dcIixcbiAgXCJkb2hhXCIsXG4gIFwiZG9tYWluc1wiLFxuICBcImRvdFwiLFxuICBcImRvd25sb2FkXCIsXG4gIFwiZHJpdmVcIixcbiAgXCJkdHZcIixcbiAgXCJkdWJhaVwiLFxuICBcImR1Y2tcIixcbiAgXCJkdW5sb3BcIixcbiAgXCJkdW5zXCIsXG4gIFwiZHVwb250XCIsXG4gIFwiZHVyYmFuXCIsXG4gIFwiZHZhZ1wiLFxuICBcImR2clwiLFxuICBcImR6XCIsXG4gIFwiZWFydGhcIixcbiAgXCJlYXRcIixcbiAgXCJlY1wiLFxuICBcImVjb1wiLFxuICBcImVkZWthXCIsXG4gIFwiZWR1XCIsXG4gIFwiZWR1Y2F0aW9uXCIsXG4gIFwiZWVcIixcbiAgXCJlZ1wiLFxuICBcImVtYWlsXCIsXG4gIFwiZW1lcmNrXCIsXG4gIFwiZW5lcmd5XCIsXG4gIFwiZW5naW5lZXJcIixcbiAgXCJlbmdpbmVlcmluZ1wiLFxuICBcImVudGVycHJpc2VzXCIsXG4gIFwiZXBvc3RcIixcbiAgXCJlcHNvblwiLFxuICBcImVxdWlwbWVudFwiLFxuICBcImVyXCIsXG4gIFwiZXJpY3Nzb25cIixcbiAgXCJlcm5pXCIsXG4gIFwiZXNcIixcbiAgXCJlc3FcIixcbiAgXCJlc3RhdGVcIixcbiAgXCJlc3VyYW5jZVwiLFxuICBcImV0XCIsXG4gIFwiZXRpc2FsYXRcIixcbiAgXCJldVwiLFxuICBcImV1cm92aXNpb25cIixcbiAgXCJldXNcIixcbiAgXCJldmVudHNcIixcbiAgXCJldmVyYmFua1wiLFxuICBcImV4Y2hhbmdlXCIsXG4gIFwiZXhwZXJ0XCIsXG4gIFwiZXhwb3NlZFwiLFxuICBcImV4cHJlc3NcIixcbiAgXCJleHRyYXNwYWNlXCIsXG4gIFwiZmFnZVwiLFxuICBcImZhaWxcIixcbiAgXCJmYWlyd2luZHNcIixcbiAgXCJmYWl0aFwiLFxuICBcImZhbWlseVwiLFxuICBcImZhblwiLFxuICBcImZhbnNcIixcbiAgXCJmYXJtXCIsXG4gIFwiZmFybWVyc1wiLFxuICBcImZhc2hpb25cIixcbiAgXCJmYXN0XCIsXG4gIFwiZmVkZXhcIixcbiAgXCJmZWVkYmFja1wiLFxuICBcImZlcnJhcmlcIixcbiAgXCJmZXJyZXJvXCIsXG4gIFwiZmlcIixcbiAgXCJmaWF0XCIsXG4gIFwiZmlkZWxpdHlcIixcbiAgXCJmaWRvXCIsXG4gIFwiZmlsbVwiLFxuICBcImZpbmFsXCIsXG4gIFwiZmluYW5jZVwiLFxuICBcImZpbmFuY2lhbFwiLFxuICBcImZpcmVcIixcbiAgXCJmaXJlc3RvbmVcIixcbiAgXCJmaXJtZGFsZVwiLFxuICBcImZpc2hcIixcbiAgXCJmaXNoaW5nXCIsXG4gIFwiZml0XCIsXG4gIFwiZml0bmVzc1wiLFxuICBcImZqXCIsXG4gIFwiZmtcIixcbiAgXCJmbGlja3JcIixcbiAgXCJmbGlnaHRzXCIsXG4gIFwiZmxpclwiLFxuICBcImZsb3Jpc3RcIixcbiAgXCJmbG93ZXJzXCIsXG4gIFwiZmx5XCIsXG4gIFwiZm1cIixcbiAgXCJmb1wiLFxuICBcImZvb1wiLFxuICBcImZvb2RcIixcbiAgXCJmb29kbmV0d29ya1wiLFxuICBcImZvb3RiYWxsXCIsXG4gIFwiZm9yZFwiLFxuICBcImZvcmV4XCIsXG4gIFwiZm9yc2FsZVwiLFxuICBcImZvcnVtXCIsXG4gIFwiZm91bmRhdGlvblwiLFxuICBcImZveFwiLFxuICBcImZyXCIsXG4gIFwiZnJlZVwiLFxuICBcImZyZXNlbml1c1wiLFxuICBcImZybFwiLFxuICBcImZyb2dhbnNcIixcbiAgXCJmcm9udGRvb3JcIixcbiAgXCJmcm9udGllclwiLFxuICBcImZ0clwiLFxuICBcImZ1aml0c3VcIixcbiAgXCJmdWppeGVyb3hcIixcbiAgXCJmdW5cIixcbiAgXCJmdW5kXCIsXG4gIFwiZnVybml0dXJlXCIsXG4gIFwiZnV0Ym9sXCIsXG4gIFwiZnlpXCIsXG4gIFwiZ2FcIixcbiAgXCJnYWxcIixcbiAgXCJnYWxsZXJ5XCIsXG4gIFwiZ2FsbG9cIixcbiAgXCJnYWxsdXBcIixcbiAgXCJnYW1lXCIsXG4gIFwiZ2FtZXNcIixcbiAgXCJnYXBcIixcbiAgXCJnYXJkZW5cIixcbiAgXCJnYlwiLFxuICBcImdiaXpcIixcbiAgXCJnZFwiLFxuICBcImdkblwiLFxuICBcImdlXCIsXG4gIFwiZ2VhXCIsXG4gIFwiZ2VudFwiLFxuICBcImdlbnRpbmdcIixcbiAgXCJnZW9yZ2VcIixcbiAgXCJnZlwiLFxuICBcImdnXCIsXG4gIFwiZ2dlZVwiLFxuICBcImdoXCIsXG4gIFwiZ2lcIixcbiAgXCJnaWZ0XCIsXG4gIFwiZ2lmdHNcIixcbiAgXCJnaXZlc1wiLFxuICBcImdpdmluZ1wiLFxuICBcImdsXCIsXG4gIFwiZ2xhZGVcIixcbiAgXCJnbGFzc1wiLFxuICBcImdsZVwiLFxuICBcImdsb2JhbFwiLFxuICBcImdsb2JvXCIsXG4gIFwiZ21cIixcbiAgXCJnbWFpbFwiLFxuICBcImdtYmhcIixcbiAgXCJnbW9cIixcbiAgXCJnbXhcIixcbiAgXCJnblwiLFxuICBcImdvZGFkZHlcIixcbiAgXCJnb2xkXCIsXG4gIFwiZ29sZHBvaW50XCIsXG4gIFwiZ29sZlwiLFxuICBcImdvb1wiLFxuICBcImdvb2RoYW5kc1wiLFxuICBcImdvb2R5ZWFyXCIsXG4gIFwiZ29vZ1wiLFxuICBcImdvb2dsZVwiLFxuICBcImdvcFwiLFxuICBcImdvdFwiLFxuICBcImdvdlwiLFxuICBcImdwXCIsXG4gIFwiZ3FcIixcbiAgXCJnclwiLFxuICBcImdyYWluZ2VyXCIsXG4gIFwiZ3JhcGhpY3NcIixcbiAgXCJncmF0aXNcIixcbiAgXCJncmVlblwiLFxuICBcImdyaXBlXCIsXG4gIFwiZ3JvY2VyeVwiLFxuICBcImdyb3VwXCIsXG4gIFwiZ3NcIixcbiAgXCJndFwiLFxuICBcImd1XCIsXG4gIFwiZ3VhcmRpYW5cIixcbiAgXCJndWNjaVwiLFxuICBcImd1Z2VcIixcbiAgXCJndWlkZVwiLFxuICBcImd1aXRhcnNcIixcbiAgXCJndXJ1XCIsXG4gIFwiZ3dcIixcbiAgXCJneVwiLFxuICBcImhhaXJcIixcbiAgXCJoYW1idXJnXCIsXG4gIFwiaGFuZ291dFwiLFxuICBcImhhdXNcIixcbiAgXCJoYm9cIixcbiAgXCJoZGZjXCIsXG4gIFwiaGRmY2JhbmtcIixcbiAgXCJoZWFsdGhcIixcbiAgXCJoZWFsdGhjYXJlXCIsXG4gIFwiaGVscFwiLFxuICBcImhlbHNpbmtpXCIsXG4gIFwiaGVyZVwiLFxuICBcImhlcm1lc1wiLFxuICBcImhndHZcIixcbiAgXCJoaXBob3BcIixcbiAgXCJoaXNhbWl0c3VcIixcbiAgXCJoaXRhY2hpXCIsXG4gIFwiaGl2XCIsXG4gIFwiaGtcIixcbiAgXCJoa3RcIixcbiAgXCJobVwiLFxuICBcImhuXCIsXG4gIFwiaG9ja2V5XCIsXG4gIFwiaG9sZGluZ3NcIixcbiAgXCJob2xpZGF5XCIsXG4gIFwiaG9tZWRlcG90XCIsXG4gIFwiaG9tZWdvb2RzXCIsXG4gIFwiaG9tZXNcIixcbiAgXCJob21lc2Vuc2VcIixcbiAgXCJob25kYVwiLFxuICBcImhvbmV5d2VsbFwiLFxuICBcImhvcnNlXCIsXG4gIFwiaG9zcGl0YWxcIixcbiAgXCJob3N0XCIsXG4gIFwiaG9zdGluZ1wiLFxuICBcImhvdFwiLFxuICBcImhvdGVsZXNcIixcbiAgXCJob3RlbHNcIixcbiAgXCJob3RtYWlsXCIsXG4gIFwiaG91c2VcIixcbiAgXCJob3dcIixcbiAgXCJoclwiLFxuICBcImhzYmNcIixcbiAgXCJodFwiLFxuICBcImh1XCIsXG4gIFwiaHVnaGVzXCIsXG4gIFwiaHlhdHRcIixcbiAgXCJoeXVuZGFpXCIsXG4gIFwiaWJtXCIsXG4gIFwiaWNiY1wiLFxuICBcImljZVwiLFxuICBcImljdVwiLFxuICBcImlkXCIsXG4gIFwiaWVcIixcbiAgXCJpZWVlXCIsXG4gIFwiaWZtXCIsXG4gIFwiaWthbm9cIixcbiAgXCJpbFwiLFxuICBcImltXCIsXG4gIFwiaW1hbWF0XCIsXG4gIFwiaW1kYlwiLFxuICBcImltbW9cIixcbiAgXCJpbW1vYmlsaWVuXCIsXG4gIFwiaW5cIixcbiAgXCJpbmR1c3RyaWVzXCIsXG4gIFwiaW5maW5pdGlcIixcbiAgXCJpbmZvXCIsXG4gIFwiaW5nXCIsXG4gIFwiaW5rXCIsXG4gIFwiaW5zdGl0dXRlXCIsXG4gIFwiaW5zdXJhbmNlXCIsXG4gIFwiaW5zdXJlXCIsXG4gIFwiaW50XCIsXG4gIFwiaW50ZWxcIixcbiAgXCJpbnRlcm5hdGlvbmFsXCIsXG4gIFwiaW50dWl0XCIsXG4gIFwiaW52ZXN0bWVudHNcIixcbiAgXCJpb1wiLFxuICBcImlwaXJhbmdhXCIsXG4gIFwiaXFcIixcbiAgXCJpclwiLFxuICBcImlyaXNoXCIsXG4gIFwiaXNcIixcbiAgXCJpc2VsZWN0XCIsXG4gIFwiaXNtYWlsaVwiLFxuICBcImlzdFwiLFxuICBcImlzdGFuYnVsXCIsXG4gIFwiaXRcIixcbiAgXCJpdGF1XCIsXG4gIFwiaXR2XCIsXG4gIFwiaXZlY29cIixcbiAgXCJpd2NcIixcbiAgXCJqYWd1YXJcIixcbiAgXCJqYXZhXCIsXG4gIFwiamNiXCIsXG4gIFwiamNwXCIsXG4gIFwiamVcIixcbiAgXCJqZWVwXCIsXG4gIFwiamV0enRcIixcbiAgXCJqZXdlbHJ5XCIsXG4gIFwiamlvXCIsXG4gIFwiamxjXCIsXG4gIFwiamxsXCIsXG4gIFwiam1cIixcbiAgXCJqbXBcIixcbiAgXCJqbmpcIixcbiAgXCJqb1wiLFxuICBcImpvYnNcIixcbiAgXCJqb2J1cmdcIixcbiAgXCJqb3RcIixcbiAgXCJqb3lcIixcbiAgXCJqcFwiLFxuICBcImpwbW9yZ2FuXCIsXG4gIFwianByc1wiLFxuICBcImp1ZWdvc1wiLFxuICBcImp1bmlwZXJcIixcbiAgXCJrYXVmZW5cIixcbiAgXCJrZGRpXCIsXG4gIFwia2VcIixcbiAgXCJrZXJyeWhvdGVsc1wiLFxuICBcImtlcnJ5bG9naXN0aWNzXCIsXG4gIFwia2Vycnlwcm9wZXJ0aWVzXCIsXG4gIFwia2ZoXCIsXG4gIFwia2dcIixcbiAgXCJraFwiLFxuICBcImtpXCIsXG4gIFwia2lhXCIsXG4gIFwia2ltXCIsXG4gIFwia2luZGVyXCIsXG4gIFwia2luZGxlXCIsXG4gIFwia2l0Y2hlblwiLFxuICBcImtpd2lcIixcbiAgXCJrbVwiLFxuICBcImtuXCIsXG4gIFwia29lbG5cIixcbiAgXCJrb21hdHN1XCIsXG4gIFwia29zaGVyXCIsXG4gIFwia3BcIixcbiAgXCJrcG1nXCIsXG4gIFwia3BuXCIsXG4gIFwia3JcIixcbiAgXCJrcmRcIixcbiAgXCJrcmVkXCIsXG4gIFwia3Vva2dyb3VwXCIsXG4gIFwia3dcIixcbiAgXCJreVwiLFxuICBcImt5b3RvXCIsXG4gIFwia3pcIixcbiAgXCJsYVwiLFxuICBcImxhY2FpeGFcIixcbiAgXCJsYWRicm9rZXNcIixcbiAgXCJsYW1ib3JnaGluaVwiLFxuICBcImxhbWVyXCIsXG4gIFwibGFuY2FzdGVyXCIsXG4gIFwibGFuY2lhXCIsXG4gIFwibGFuY29tZVwiLFxuICBcImxhbmRcIixcbiAgXCJsYW5kcm92ZXJcIixcbiAgXCJsYW54ZXNzXCIsXG4gIFwibGFzYWxsZVwiLFxuICBcImxhdFwiLFxuICBcImxhdGlub1wiLFxuICBcImxhdHJvYmVcIixcbiAgXCJsYXdcIixcbiAgXCJsYXd5ZXJcIixcbiAgXCJsYlwiLFxuICBcImxjXCIsXG4gIFwibGRzXCIsXG4gIFwibGVhc2VcIixcbiAgXCJsZWNsZXJjXCIsXG4gIFwibGVmcmFrXCIsXG4gIFwibGVnYWxcIixcbiAgXCJsZWdvXCIsXG4gIFwibGV4dXNcIixcbiAgXCJsZ2J0XCIsXG4gIFwibGlcIixcbiAgXCJsaWFpc29uXCIsXG4gIFwibGlkbFwiLFxuICBcImxpZmVcIixcbiAgXCJsaWZlaW5zdXJhbmNlXCIsXG4gIFwibGlmZXN0eWxlXCIsXG4gIFwibGlnaHRpbmdcIixcbiAgXCJsaWtlXCIsXG4gIFwibGlsbHlcIixcbiAgXCJsaW1pdGVkXCIsXG4gIFwibGltb1wiLFxuICBcImxpbmNvbG5cIixcbiAgXCJsaW5kZVwiLFxuICBcImxpbmtcIixcbiAgXCJsaXBzeVwiLFxuICBcImxpdmVcIixcbiAgXCJsaXZpbmdcIixcbiAgXCJsaXhpbFwiLFxuICBcImxrXCIsXG4gIFwibGxjXCIsXG4gIFwibG9hblwiLFxuICBcImxvYW5zXCIsXG4gIFwibG9ja2VyXCIsXG4gIFwibG9jdXNcIixcbiAgXCJsb2Z0XCIsXG4gIFwibG9sXCIsXG4gIFwibG9uZG9uXCIsXG4gIFwibG90dGVcIixcbiAgXCJsb3R0b1wiLFxuICBcImxvdmVcIixcbiAgXCJscGxcIixcbiAgXCJscGxmaW5hbmNpYWxcIixcbiAgXCJsclwiLFxuICBcImxzXCIsXG4gIFwibHRcIixcbiAgXCJsdGRcIixcbiAgXCJsdGRhXCIsXG4gIFwibHVcIixcbiAgXCJsdW5kYmVja1wiLFxuICBcImx1cGluXCIsXG4gIFwibHV4ZVwiLFxuICBcImx1eHVyeVwiLFxuICBcImx2XCIsXG4gIFwibHlcIixcbiAgXCJtYVwiLFxuICBcIm1hY3lzXCIsXG4gIFwibWFkcmlkXCIsXG4gIFwibWFpZlwiLFxuICBcIm1haXNvblwiLFxuICBcIm1ha2V1cFwiLFxuICBcIm1hblwiLFxuICBcIm1hbmFnZW1lbnRcIixcbiAgXCJtYW5nb1wiLFxuICBcIm1hcFwiLFxuICBcIm1hcmtldFwiLFxuICBcIm1hcmtldGluZ1wiLFxuICBcIm1hcmtldHNcIixcbiAgXCJtYXJyaW90dFwiLFxuICBcIm1hcnNoYWxsc1wiLFxuICBcIm1hc2VyYXRpXCIsXG4gIFwibWF0dGVsXCIsXG4gIFwibWJhXCIsXG4gIFwibWNcIixcbiAgXCJtY2tpbnNleVwiLFxuICBcIm1kXCIsXG4gIFwibWVcIixcbiAgXCJtZWRcIixcbiAgXCJtZWRpYVwiLFxuICBcIm1lZXRcIixcbiAgXCJtZWxib3VybmVcIixcbiAgXCJtZW1lXCIsXG4gIFwibWVtb3JpYWxcIixcbiAgXCJtZW5cIixcbiAgXCJtZW51XCIsXG4gIFwibWVvXCIsXG4gIFwibWVyY2ttc2RcIixcbiAgXCJtZXRsaWZlXCIsXG4gIFwibWdcIixcbiAgXCJtaFwiLFxuICBcIm1pYW1pXCIsXG4gIFwibWljcm9zb2Z0XCIsXG4gIFwibWlsXCIsXG4gIFwibWluaVwiLFxuICBcIm1pbnRcIixcbiAgXCJtaXRcIixcbiAgXCJtaXRzdWJpc2hpXCIsXG4gIFwibWtcIixcbiAgXCJtbFwiLFxuICBcIm1sYlwiLFxuICBcIm1sc1wiLFxuICBcIm1tXCIsXG4gIFwibW1hXCIsXG4gIFwibW5cIixcbiAgXCJtb1wiLFxuICBcIm1vYmlcIixcbiAgXCJtb2JpbGVcIixcbiAgXCJtb2JpbHlcIixcbiAgXCJtb2RhXCIsXG4gIFwibW9lXCIsXG4gIFwibW9pXCIsXG4gIFwibW9tXCIsXG4gIFwibW9uYXNoXCIsXG4gIFwibW9uZXlcIixcbiAgXCJtb25zdGVyXCIsXG4gIFwibW9wYXJcIixcbiAgXCJtb3Jtb25cIixcbiAgXCJtb3J0Z2FnZVwiLFxuICBcIm1vc2Nvd1wiLFxuICBcIm1vdG9cIixcbiAgXCJtb3RvcmN5Y2xlc1wiLFxuICBcIm1vdlwiLFxuICBcIm1vdmllXCIsXG4gIFwibW92aXN0YXJcIixcbiAgXCJtcFwiLFxuICBcIm1xXCIsXG4gIFwibXJcIixcbiAgXCJtc1wiLFxuICBcIm1zZFwiLFxuICBcIm10XCIsXG4gIFwibXRuXCIsXG4gIFwibXRyXCIsXG4gIFwibXVcIixcbiAgXCJtdXNldW1cIixcbiAgXCJtdXR1YWxcIixcbiAgXCJtdlwiLFxuICBcIm13XCIsXG4gIFwibXhcIixcbiAgXCJteVwiLFxuICBcIm16XCIsXG4gIFwibmFcIixcbiAgXCJuYWJcIixcbiAgXCJuYWRleFwiLFxuICBcIm5hZ295YVwiLFxuICBcIm5hbWVcIixcbiAgXCJuYXRpb253aWRlXCIsXG4gIFwibmF0dXJhXCIsXG4gIFwibmF2eVwiLFxuICBcIm5iYVwiLFxuICBcIm5jXCIsXG4gIFwibmVcIixcbiAgXCJuZWNcIixcbiAgXCJuZXRcIixcbiAgXCJuZXRiYW5rXCIsXG4gIFwibmV0ZmxpeFwiLFxuICBcIm5ldHdvcmtcIixcbiAgXCJuZXVzdGFyXCIsXG4gIFwibmV3XCIsXG4gIFwibmV3aG9sbGFuZFwiLFxuICBcIm5ld3NcIixcbiAgXCJuZXh0XCIsXG4gIFwibmV4dGRpcmVjdFwiLFxuICBcIm5leHVzXCIsXG4gIFwibmZcIixcbiAgXCJuZmxcIixcbiAgXCJuZ1wiLFxuICBcIm5nb1wiLFxuICBcIm5oa1wiLFxuICBcIm5pXCIsXG4gIFwibmljb1wiLFxuICBcIm5pa2VcIixcbiAgXCJuaWtvblwiLFxuICBcIm5pbmphXCIsXG4gIFwibmlzc2FuXCIsXG4gIFwibmlzc2F5XCIsXG4gIFwibmxcIixcbiAgXCJub1wiLFxuICBcIm5va2lhXCIsXG4gIFwibm9ydGh3ZXN0ZXJubXV0dWFsXCIsXG4gIFwibm9ydG9uXCIsXG4gIFwibm93XCIsXG4gIFwibm93cnV6XCIsXG4gIFwibm93dHZcIixcbiAgXCJucFwiLFxuICBcIm5yXCIsXG4gIFwibnJhXCIsXG4gIFwibnJ3XCIsXG4gIFwibnR0XCIsXG4gIFwibnVcIixcbiAgXCJueWNcIixcbiAgXCJuelwiLFxuICBcIm9iaVwiLFxuICBcIm9ic2VydmVyXCIsXG4gIFwib2ZmXCIsXG4gIFwib2ZmaWNlXCIsXG4gIFwib2tpbmF3YVwiLFxuICBcIm9sYXlhblwiLFxuICBcIm9sYXlhbmdyb3VwXCIsXG4gIFwib2xkbmF2eVwiLFxuICBcIm9sbG9cIixcbiAgXCJvbVwiLFxuICBcIm9tZWdhXCIsXG4gIFwib25lXCIsXG4gIFwib25nXCIsXG4gIFwib25sXCIsXG4gIFwib25saW5lXCIsXG4gIFwib255b3Vyc2lkZVwiLFxuICBcIm9vb1wiLFxuICBcIm9wZW5cIixcbiAgXCJvcmFjbGVcIixcbiAgXCJvcmFuZ2VcIixcbiAgXCJvcmdcIixcbiAgXCJvcmdhbmljXCIsXG4gIFwib3JpZ2luc1wiLFxuICBcIm9zYWthXCIsXG4gIFwib3RzdWthXCIsXG4gIFwib3R0XCIsXG4gIFwib3ZoXCIsXG4gIFwicGFcIixcbiAgXCJwYWdlXCIsXG4gIFwicGFuYXNvbmljXCIsXG4gIFwicGFuZXJhaVwiLFxuICBcInBhcmlzXCIsXG4gIFwicGFyc1wiLFxuICBcInBhcnRuZXJzXCIsXG4gIFwicGFydHNcIixcbiAgXCJwYXJ0eVwiLFxuICBcInBhc3NhZ2Vuc1wiLFxuICBcInBheVwiLFxuICBcInBjY3dcIixcbiAgXCJwZVwiLFxuICBcInBldFwiLFxuICBcInBmXCIsXG4gIFwicGZpemVyXCIsXG4gIFwicGdcIixcbiAgXCJwaFwiLFxuICBcInBoYXJtYWN5XCIsXG4gIFwicGhkXCIsXG4gIFwicGhpbGlwc1wiLFxuICBcInBob25lXCIsXG4gIFwicGhvdG9cIixcbiAgXCJwaG90b2dyYXBoeVwiLFxuICBcInBob3Rvc1wiLFxuICBcInBoeXNpb1wiLFxuICBcInBpYWdldFwiLFxuICBcInBpY3NcIixcbiAgXCJwaWN0ZXRcIixcbiAgXCJwaWN0dXJlc1wiLFxuICBcInBpZFwiLFxuICBcInBpblwiLFxuICBcInBpbmdcIixcbiAgXCJwaW5rXCIsXG4gIFwicGlvbmVlclwiLFxuICBcInBpenphXCIsXG4gIFwicGtcIixcbiAgXCJwbFwiLFxuICBcInBsYWNlXCIsXG4gIFwicGxheVwiLFxuICBcInBsYXlzdGF0aW9uXCIsXG4gIFwicGx1bWJpbmdcIixcbiAgXCJwbHVzXCIsXG4gIFwicG1cIixcbiAgXCJwblwiLFxuICBcInBuY1wiLFxuICBcInBvaGxcIixcbiAgXCJwb2tlclwiLFxuICBcInBvbGl0aWVcIixcbiAgXCJwb3JuXCIsXG4gIFwicG9zdFwiLFxuICBcInByXCIsXG4gIFwicHJhbWVyaWNhXCIsXG4gIFwicHJheGlcIixcbiAgXCJwcmVzc1wiLFxuICBcInByaW1lXCIsXG4gIFwicHJvXCIsXG4gIFwicHJvZFwiLFxuICBcInByb2R1Y3Rpb25zXCIsXG4gIFwicHJvZlwiLFxuICBcInByb2dyZXNzaXZlXCIsXG4gIFwicHJvbW9cIixcbiAgXCJwcm9wZXJ0aWVzXCIsXG4gIFwicHJvcGVydHlcIixcbiAgXCJwcm90ZWN0aW9uXCIsXG4gIFwicHJ1XCIsXG4gIFwicHJ1ZGVudGlhbFwiLFxuICBcInBzXCIsXG4gIFwicHRcIixcbiAgXCJwdWJcIixcbiAgXCJwd1wiLFxuICBcInB3Y1wiLFxuICBcInB5XCIsXG4gIFwicWFcIixcbiAgXCJxcG9uXCIsXG4gIFwicXVlYmVjXCIsXG4gIFwicXVlc3RcIixcbiAgXCJxdmNcIixcbiAgXCJyYWNpbmdcIixcbiAgXCJyYWRpb1wiLFxuICBcInJhaWRcIixcbiAgXCJyZVwiLFxuICBcInJlYWRcIixcbiAgXCJyZWFsZXN0YXRlXCIsXG4gIFwicmVhbHRvclwiLFxuICBcInJlYWx0eVwiLFxuICBcInJlY2lwZXNcIixcbiAgXCJyZWRcIixcbiAgXCJyZWRzdG9uZVwiLFxuICBcInJlZHVtYnJlbGxhXCIsXG4gIFwicmVoYWJcIixcbiAgXCJyZWlzZVwiLFxuICBcInJlaXNlblwiLFxuICBcInJlaXRcIixcbiAgXCJyZWxpYW5jZVwiLFxuICBcInJlblwiLFxuICBcInJlbnRcIixcbiAgXCJyZW50YWxzXCIsXG4gIFwicmVwYWlyXCIsXG4gIFwicmVwb3J0XCIsXG4gIFwicmVwdWJsaWNhblwiLFxuICBcInJlc3RcIixcbiAgXCJyZXN0YXVyYW50XCIsXG4gIFwicmV2aWV3XCIsXG4gIFwicmV2aWV3c1wiLFxuICBcInJleHJvdGhcIixcbiAgXCJyaWNoXCIsXG4gIFwicmljaGFyZGxpXCIsXG4gIFwicmljb2hcIixcbiAgXCJyaWdodGF0aG9tZVwiLFxuICBcInJpbFwiLFxuICBcInJpb1wiLFxuICBcInJpcFwiLFxuICBcInJtaXRcIixcbiAgXCJyb1wiLFxuICBcInJvY2hlclwiLFxuICBcInJvY2tzXCIsXG4gIFwicm9kZW9cIixcbiAgXCJyb2dlcnNcIixcbiAgXCJyb29tXCIsXG4gIFwicnNcIixcbiAgXCJyc3ZwXCIsXG4gIFwicnVcIixcbiAgXCJydWdieVwiLFxuICBcInJ1aHJcIixcbiAgXCJydW5cIixcbiAgXCJyd1wiLFxuICBcInJ3ZVwiLFxuICBcInJ5dWt5dVwiLFxuICBcInNhXCIsXG4gIFwic2FhcmxhbmRcIixcbiAgXCJzYWZlXCIsXG4gIFwic2FmZXR5XCIsXG4gIFwic2FrdXJhXCIsXG4gIFwic2FsZVwiLFxuICBcInNhbG9uXCIsXG4gIFwic2Ftc2NsdWJcIixcbiAgXCJzYW1zdW5nXCIsXG4gIFwic2FuZHZpa1wiLFxuICBcInNhbmR2aWtjb3JvbWFudFwiLFxuICBcInNhbm9maVwiLFxuICBcInNhcFwiLFxuICBcInNhcG9cIixcbiAgXCJzYXJsXCIsXG4gIFwic2FzXCIsXG4gIFwic2F2ZVwiLFxuICBcInNheG9cIixcbiAgXCJzYlwiLFxuICBcInNiaVwiLFxuICBcInNic1wiLFxuICBcInNjXCIsXG4gIFwic2NhXCIsXG4gIFwic2NiXCIsXG4gIFwic2NoYWVmZmxlclwiLFxuICBcInNjaG1pZHRcIixcbiAgXCJzY2hvbGFyc2hpcHNcIixcbiAgXCJzY2hvb2xcIixcbiAgXCJzY2h1bGVcIixcbiAgXCJzY2h3YXJ6XCIsXG4gIFwic2NpZW5jZVwiLFxuICBcInNjam9obnNvblwiLFxuICBcInNjb3JcIixcbiAgXCJzY290XCIsXG4gIFwic2RcIixcbiAgXCJzZVwiLFxuICBcInNlYXJjaFwiLFxuICBcInNlYXRcIixcbiAgXCJzZWN1cmVcIixcbiAgXCJzZWN1cml0eVwiLFxuICBcInNlZWtcIixcbiAgXCJzZWxlY3RcIixcbiAgXCJzZW5lclwiLFxuICBcInNlcnZpY2VzXCIsXG4gIFwic2VzXCIsXG4gIFwic2V2ZW5cIixcbiAgXCJzZXdcIixcbiAgXCJzZXhcIixcbiAgXCJzZXh5XCIsXG4gIFwic2ZyXCIsXG4gIFwic2dcIixcbiAgXCJzaFwiLFxuICBcInNoYW5ncmlsYVwiLFxuICBcInNoYXJwXCIsXG4gIFwic2hhd1wiLFxuICBcInNoZWxsXCIsXG4gIFwic2hpYVwiLFxuICBcInNoaWtzaGFcIixcbiAgXCJzaG9lc1wiLFxuICBcInNob3BcIixcbiAgXCJzaG9wcGluZ1wiLFxuICBcInNob3VqaVwiLFxuICBcInNob3dcIixcbiAgXCJzaG93dGltZVwiLFxuICBcInNocmlyYW1cIixcbiAgXCJzaVwiLFxuICBcInNpbGtcIixcbiAgXCJzaW5hXCIsXG4gIFwic2luZ2xlc1wiLFxuICBcInNpdGVcIixcbiAgXCJzalwiLFxuICBcInNrXCIsXG4gIFwic2tpXCIsXG4gIFwic2tpblwiLFxuICBcInNreVwiLFxuICBcInNreXBlXCIsXG4gIFwic2xcIixcbiAgXCJzbGluZ1wiLFxuICBcInNtXCIsXG4gIFwic21hcnRcIixcbiAgXCJzbWlsZVwiLFxuICBcInNuXCIsXG4gIFwic25jZlwiLFxuICBcInNvXCIsXG4gIFwic29jY2VyXCIsXG4gIFwic29jaWFsXCIsXG4gIFwic29mdGJhbmtcIixcbiAgXCJzb2Z0d2FyZVwiLFxuICBcInNvaHVcIixcbiAgXCJzb2xhclwiLFxuICBcInNvbHV0aW9uc1wiLFxuICBcInNvbmdcIixcbiAgXCJzb255XCIsXG4gIFwic295XCIsXG4gIFwic3BhY2VcIixcbiAgXCJzcGllZ2VsXCIsXG4gIFwic3BvcnRcIixcbiAgXCJzcG90XCIsXG4gIFwic3ByZWFkYmV0dGluZ1wiLFxuICBcInNyXCIsXG4gIFwic3JsXCIsXG4gIFwic3J0XCIsXG4gIFwic3RcIixcbiAgXCJzdGFkYVwiLFxuICBcInN0YXBsZXNcIixcbiAgXCJzdGFyXCIsXG4gIFwic3Rhcmh1YlwiLFxuICBcInN0YXRlYmFua1wiLFxuICBcInN0YXRlZmFybVwiLFxuICBcInN0YXRvaWxcIixcbiAgXCJzdGNcIixcbiAgXCJzdGNncm91cFwiLFxuICBcInN0b2NraG9sbVwiLFxuICBcInN0b3JhZ2VcIixcbiAgXCJzdG9yZVwiLFxuICBcInN0cmVhbVwiLFxuICBcInN0dWRpb1wiLFxuICBcInN0dWR5XCIsXG4gIFwic3R5bGVcIixcbiAgXCJzdVwiLFxuICBcInN1Y2tzXCIsXG4gIFwic3VwcGxpZXNcIixcbiAgXCJzdXBwbHlcIixcbiAgXCJzdXBwb3J0XCIsXG4gIFwic3VyZlwiLFxuICBcInN1cmdlcnlcIixcbiAgXCJzdXp1a2lcIixcbiAgXCJzdlwiLFxuICBcInN3YXRjaFwiLFxuICBcInN3aWZ0Y292ZXJcIixcbiAgXCJzd2lzc1wiLFxuICBcInN4XCIsXG4gIFwic3lcIixcbiAgXCJzeWRuZXlcIixcbiAgXCJzeW1hbnRlY1wiLFxuICBcInN5c3RlbXNcIixcbiAgXCJzelwiLFxuICBcInRhYlwiLFxuICBcInRhaXBlaVwiLFxuICBcInRhbGtcIixcbiAgXCJ0YW9iYW9cIixcbiAgXCJ0YXJnZXRcIixcbiAgXCJ0YXRhbW90b3JzXCIsXG4gIFwidGF0YXJcIixcbiAgXCJ0YXR0b29cIixcbiAgXCJ0YXhcIixcbiAgXCJ0YXhpXCIsXG4gIFwidGNcIixcbiAgXCJ0Y2lcIixcbiAgXCJ0ZFwiLFxuICBcInRka1wiLFxuICBcInRlYW1cIixcbiAgXCJ0ZWNoXCIsXG4gIFwidGVjaG5vbG9neVwiLFxuICBcInRlbFwiLFxuICBcInRlbGVjaXR5XCIsXG4gIFwidGVsZWZvbmljYVwiLFxuICBcInRlbWFzZWtcIixcbiAgXCJ0ZW5uaXNcIixcbiAgXCJ0ZXZhXCIsXG4gIFwidGZcIixcbiAgXCJ0Z1wiLFxuICBcInRoXCIsXG4gIFwidGhkXCIsXG4gIFwidGhlYXRlclwiLFxuICBcInRoZWF0cmVcIixcbiAgXCJ0aWFhXCIsXG4gIFwidGlja2V0c1wiLFxuICBcInRpZW5kYVwiLFxuICBcInRpZmZhbnlcIixcbiAgXCJ0aXBzXCIsXG4gIFwidGlyZXNcIixcbiAgXCJ0aXJvbFwiLFxuICBcInRqXCIsXG4gIFwidGptYXh4XCIsXG4gIFwidGp4XCIsXG4gIFwidGtcIixcbiAgXCJ0a21heHhcIixcbiAgXCJ0bFwiLFxuICBcInRtXCIsXG4gIFwidG1hbGxcIixcbiAgXCJ0blwiLFxuICBcInRvXCIsXG4gIFwidG9kYXlcIixcbiAgXCJ0b2t5b1wiLFxuICBcInRvb2xzXCIsXG4gIFwidG9wXCIsXG4gIFwidG9yYXlcIixcbiAgXCJ0b3NoaWJhXCIsXG4gIFwidG90YWxcIixcbiAgXCJ0b3Vyc1wiLFxuICBcInRvd25cIixcbiAgXCJ0b3lvdGFcIixcbiAgXCJ0b3lzXCIsXG4gIFwidHJcIixcbiAgXCJ0cmFkZVwiLFxuICBcInRyYWRpbmdcIixcbiAgXCJ0cmFpbmluZ1wiLFxuICBcInRyYXZlbFwiLFxuICBcInRyYXZlbGNoYW5uZWxcIixcbiAgXCJ0cmF2ZWxlcnNcIixcbiAgXCJ0cmF2ZWxlcnNpbnN1cmFuY2VcIixcbiAgXCJ0cnVzdFwiLFxuICBcInRydlwiLFxuICBcInR0XCIsXG4gIFwidHViZVwiLFxuICBcInR1aVwiLFxuICBcInR1bmVzXCIsXG4gIFwidHVzaHVcIixcbiAgXCJ0dlwiLFxuICBcInR2c1wiLFxuICBcInR3XCIsXG4gIFwidHpcIixcbiAgXCJ1YVwiLFxuICBcInViYW5rXCIsXG4gIFwidWJzXCIsXG4gIFwidWNvbm5lY3RcIixcbiAgXCJ1Z1wiLFxuICBcInVrXCIsXG4gIFwidW5pY29tXCIsXG4gIFwidW5pdmVyc2l0eVwiLFxuICBcInVub1wiLFxuICBcInVvbFwiLFxuICBcInVwc1wiLFxuICBcInVzXCIsXG4gIFwidXlcIixcbiAgXCJ1elwiLFxuICBcInZhXCIsXG4gIFwidmFjYXRpb25zXCIsXG4gIFwidmFuYVwiLFxuICBcInZhbmd1YXJkXCIsXG4gIFwidmNcIixcbiAgXCJ2ZVwiLFxuICBcInZlZ2FzXCIsXG4gIFwidmVudHVyZXNcIixcbiAgXCJ2ZXJpc2lnblwiLFxuICBcInZlcnNpY2hlcnVuZ1wiLFxuICBcInZldFwiLFxuICBcInZnXCIsXG4gIFwidmlcIixcbiAgXCJ2aWFqZXNcIixcbiAgXCJ2aWRlb1wiLFxuICBcInZpZ1wiLFxuICBcInZpa2luZ1wiLFxuICBcInZpbGxhc1wiLFxuICBcInZpblwiLFxuICBcInZpcFwiLFxuICBcInZpcmdpblwiLFxuICBcInZpc2FcIixcbiAgXCJ2aXNpb25cIixcbiAgXCJ2aXN0YVwiLFxuICBcInZpc3RhcHJpbnRcIixcbiAgXCJ2aXZhXCIsXG4gIFwidml2b1wiLFxuICBcInZsYWFuZGVyZW5cIixcbiAgXCJ2blwiLFxuICBcInZvZGthXCIsXG4gIFwidm9sa3N3YWdlblwiLFxuICBcInZvbHZvXCIsXG4gIFwidm90ZVwiLFxuICBcInZvdGluZ1wiLFxuICBcInZvdG9cIixcbiAgXCJ2b3lhZ2VcIixcbiAgXCJ2dVwiLFxuICBcInZ1ZWxvc1wiLFxuICBcIndhbGVzXCIsXG4gIFwid2FsbWFydFwiLFxuICBcIndhbHRlclwiLFxuICBcIndhbmdcIixcbiAgXCJ3YW5nZ291XCIsXG4gIFwid2FybWFuXCIsXG4gIFwid2F0Y2hcIixcbiAgXCJ3YXRjaGVzXCIsXG4gIFwid2VhdGhlclwiLFxuICBcIndlYXRoZXJjaGFubmVsXCIsXG4gIFwid2ViY2FtXCIsXG4gIFwid2ViZXJcIixcbiAgXCJ3ZWJzaXRlXCIsXG4gIFwid2VkXCIsXG4gIFwid2VkZGluZ1wiLFxuICBcIndlaWJvXCIsXG4gIFwid2VpclwiLFxuICBcIndmXCIsXG4gIFwid2hvc3dob1wiLFxuICBcIndpZW5cIixcbiAgXCJ3aWtpXCIsXG4gIFwid2lsbGlhbWhpbGxcIixcbiAgXCJ3aW5cIixcbiAgXCJ3aW5kb3dzXCIsXG4gIFwid2luZVwiLFxuICBcIndpbm5lcnNcIixcbiAgXCJ3bWVcIixcbiAgXCJ3b2x0ZXJza2x1d2VyXCIsXG4gIFwid29vZHNpZGVcIixcbiAgXCJ3b3JrXCIsXG4gIFwid29ya3NcIixcbiAgXCJ3b3JsZFwiLFxuICBcIndvd1wiLFxuICBcIndzXCIsXG4gIFwid3RjXCIsXG4gIFwid3RmXCIsXG4gIFwieGJveFwiLFxuICBcInhlcm94XCIsXG4gIFwieGZpbml0eVwiLFxuICBcInhpaHVhblwiLFxuICBcInhpblwiLFxuICBcIuCkleClieCkrlwiLCAvLyB4bi0tMTFiNGMzZFxuICBcIuOCu+ODvOODq1wiLCAvLyB4bi0tMWNrMmUxYlxuICBcIuS9m+WxsVwiLCAvLyB4bi0tMXFxdzIzYVxuICBcIuCyreCyvuCysOCypFwiLCAvLyB4bi0tMnNjcmo5Y1xuICBcIuaFiOWWhFwiLCAvLyB4bi0tMzBycjd5XG4gIFwi6ZuG5ZuiXCIsIC8vIHhuLS0zYnN0MDBtXG4gIFwi5Zyo57q/XCIsIC8vIHhuLS0zZHM0NDNnXG4gIFwi7ZWc6rWtXCIsIC8vIHhuLS0zZTBiNzA3ZVxuICBcIuCsreCsvuCssOCspFwiLCAvLyB4bi0tM2hjcmo5Y1xuICBcIuWkp+S8l+axvei9plwiLCAvLyB4bi0tM29xMTh2bDhwbjM2YVxuICBcIueCueeci1wiLCAvLyB4bi0tM3B4dThrXG4gIFwi4LiE4Lit4LihXCIsIC8vIHhuLS00MmMyZDlhXG4gIFwi4Kat4Ka+4Kew4KakXCIsIC8vIHhuLS00NWJyNWN5bFxuICBcIuCmreCmvuCmsOCmpFwiLCAvLyB4bi0tNDVicmo5Y1xuICBcIuWFq+WNplwiLCAvLyB4bi0tNDVxMTFjXG4gIFwi2YXZiNmC2LlcIiwgLy8geG4tLTRnYnJpbVxuICBcIuCmrOCmvuCmguCmsuCmvlwiLCAvLyB4bi0tNTRiN2Z0YTBjY1xuICBcIuWFrOebilwiLCAvLyB4bi0tNTVxdzQyZ1xuICBcIuWFrOWPuFwiLCAvLyB4bi0tNTVxeDVkXG4gIFwi6aaZ5qC86YeM5ouJXCIsIC8vIHhuLS01c3UzNGo5MzZiZ3NnXG4gIFwi572R56uZXCIsIC8vIHhuLS01dHptNWdcbiAgXCLnp7vliqhcIiwgLy8geG4tLTZmcno4MmdcbiAgXCLmiJHniLHkvaBcIiwgLy8geG4tLTZxcTk4NmIzeGxcbiAgXCLQvNC+0YHQutCy0LBcIiwgLy8geG4tLTgwYWR4aGtzXG4gIFwi0pvQsNC3XCIsIC8vIHhuLS04MGFvMjFhXG4gIFwi0LrQsNGC0L7Qu9C40LpcIiwgLy8geG4tLTgwYXFlY2RyMWFcbiAgXCLQvtC90LvQsNC50L1cIiwgLy8geG4tLTgwYXNlaGRiXG4gIFwi0YHQsNC50YJcIiwgLy8geG4tLTgwYXN3Z1xuICBcIuiBlOmAmlwiLCAvLyB4bi0tOHkwYTA2M2FcbiAgXCLRgdGA0LFcIiwgLy8geG4tLTkwYTNhY1xuICBcItCx0LNcIiwgLy8geG4tLTkwYWVcbiAgXCLQsdC10LtcIiwgLy8geG4tLTkwYWlzXG4gIFwi16fXldedXCIsIC8vIHhuLS05ZGJxMmFcbiAgXCLml7blsJpcIiwgLy8geG4tLTlldDUydVxuICBcIuW+ruWNmlwiLCAvLyB4bi0tOWtydDAwYVxuICBcIua3oemprOmUoVwiLCAvLyB4bi0tYjR3NjA1ZmVyZFxuICBcIuODleOCoeODg+OCt+ODp+ODs1wiLCAvLyB4bi0tYmNrMWI5YTVkcmU0Y1xuICBcItC+0YDQs1wiLCAvLyB4bi0tYzFhdmdcbiAgXCLgpKjgpYfgpJ9cIiwgLy8geG4tLWMyYnI3Z1xuICBcIuOCueODiOOColwiLCAvLyB4bi0tY2NrMmIzYlxuICBcIuyCvOyEsVwiLCAvLyB4bi0tY2c0YmtpXG4gIFwi4K6a4K6/4K6Z4K+N4K6V4K6q4K+N4K6q4K+C4K6w4K+NXCIsIC8vIHhuLS1jbGNoYzBlYTBiMmcyYTlnY2RcbiAgXCLllYbmoIdcIiwgLy8geG4tLWN6cjY5NGJcbiAgXCLllYblupdcIiwgLy8geG4tLWN6cnMwdFxuICBcIuWVhuWfjlwiLCAvLyB4bi0tY3pydTJkXG4gIFwi0LTQtdGC0LhcIiwgLy8geG4tLWQxYWNqM2JcbiAgXCLQvNC60LRcIiwgLy8geG4tLWQxYWxmXG4gIFwi0LXRjlwiLCAvLyB4bi0tZTFhNGNcbiAgXCLjg53jgqTjg7Pjg4hcIiwgLy8geG4tLWVja3ZkdGM5ZFxuICBcIuaWsOmXu1wiLCAvLyB4bi0tZWZ2eTg4aFxuICBcIuW3peihjFwiLCAvLyB4bi0tZXN0djc1Z1xuICBcIuWutumbu1wiLCAvLyB4bi0tZmN0NDI5a1xuICBcItmD2YjZhVwiLCAvLyB4bi0tZmhiZWlcbiAgXCLkuK3mlofnvZFcIiwgLy8geG4tLWZpcTIyOGM1aHNcbiAgXCLkuK3kv6FcIiwgLy8geG4tLWZpcTY0YlxuICBcIuS4reWbvVwiLCAvLyB4bi0tZmlxczhzXG4gIFwi5Lit5ZyLXCIsIC8vIHhuLS1maXF6OXNcbiAgXCLlqLHkuZBcIiwgLy8geG4tLWZqcTcyMGFcbiAgXCLosLfmrYxcIiwgLy8geG4tLWZsdzM1MWVcbiAgXCLgsK3gsL7gsLDgsKTgsY1cIiwgLy8geG4tLWZwY3JqOWMzZFxuICBcIuC2veC2guC2muC3j1wiLCAvLyB4bi0tZnpjMmM5ZTJjXG4gIFwi6Zu76KiK55uI56eRXCIsIC8vIHhuLS1menlzOGQ2OXV2Z21cbiAgXCLotK3nialcIiwgLy8geG4tLWcyeHg0OGNcbiAgXCLjgq/jg6njgqbjg4lcIiwgLy8geG4tLWdja3IzZjBmXG4gIFwi4Kqt4Kq+4Kqw4KqkXCIsIC8vIHhuLS1nZWNyajljXG4gIFwi6YCa6LKpXCIsIC8vIHhuLS1nazNhdDFlXG4gIFwi4KSt4KS+4KSw4KSk4KSu4KWNXCIsIC8vIHhuLS1oMmJyZWczZXZlXG4gIFwi4KSt4KS+4KSw4KSkXCIsIC8vIHhuLS1oMmJyajljXG4gIFwi4KSt4KS+4KSw4KWL4KSkXCIsIC8vIHhuLS1oMmJyajljOGNcbiAgXCLnvZHlupdcIiwgLy8geG4tLWh4dDgxNGVcbiAgXCLgpLjgpILgpJfgpKDgpKhcIiwgLy8geG4tLWkxYjZiMWE2YTJlXG4gIFwi6aSQ5Y6FXCIsIC8vIHhuLS1pbXI1MTNuXG4gIFwi572R57ucXCIsIC8vIHhuLS1pbzBhN2lcbiAgXCLQutC+0LxcIiwgLy8geG4tLWoxYWVmXG4gIFwi0YPQutGAXCIsIC8vIHhuLS1qMWFtaFxuICBcIummmea4r1wiLCAvLyB4bi0tajZ3MTkzZ1xuICBcIuivuuWfuuS6mlwiLCAvLyB4bi0tamxxNjF1OXc3YlxuICBcIumjn+WTgVwiLCAvLyB4bi0tanZyMTg5bVxuICBcIumjnuWIqea1plwiLCAvLyB4bi0ta2NyeDc3ZDF4NGFcbiAgXCLlj7Dmub5cIiwgLy8geG4tLWtwcncxM2RcbiAgXCLlj7DngaNcIiwgLy8geG4tLWtwcnk1N2RcbiAgXCLmiYvooahcIiwgLy8geG4tLWtwdTcxNmZcbiAgXCLmiYvmnLpcIiwgLy8geG4tLWtwdXQzaVxuICBcItC80L7QvVwiLCAvLyB4bi0tbDFhY2NcbiAgXCLYp9mE2KzYstin2KbYsVwiLCAvLyB4bi0tbGdiYmF0MWFkOGpcbiAgXCLYudmF2KfZhlwiLCAvLyB4bi0tbWdiOWF3YmZcbiAgXCLYp9ix2KfZhdmD2YhcIiwgLy8geG4tLW1nYmEzYTNlanRcbiAgXCLYp9uM2LHYp9mGXCIsIC8vIHhuLS1tZ2JhM2E0ZjE2YVxuICBcItin2YTYudmE2YrYp9mGXCIsIC8vIHhuLS1tZ2JhN2MwYmJuMGFcbiAgXCLYp9iq2LXYp9mE2KfYqlwiLCAvLyB4bi0tbWdiYWFrYzdkdmZcbiAgXCLYp9mF2KfYsdin2KpcIiwgLy8geG4tLW1nYmFhbTdhOGhcbiAgXCLYqNin2LLYp9ixXCIsIC8vIHhuLS1tZ2JhYjJiZFxuICBcItm+2Kfaqdiz2KrYp9mGXCIsIC8vIHhuLS1tZ2JhaTlhemdxcDZqXG4gIFwi2KfZhNin2LHYr9mGXCIsIC8vIHhuLS1tZ2JheWg3Z3BhXG4gIFwi2YXZiNio2KfZitmE2YpcIiwgLy8geG4tLW1nYmI5ZmJwb2JcbiAgXCLYqNin2LHYqlwiLCAvLyB4bi0tbWdiYmgxYVxuICBcItio2r7Yp9ix2KpcIiwgLy8geG4tLW1nYmJoMWE3MWVcbiAgXCLYp9mE2YXYutix2KhcIiwgLy8geG4tLW1nYmMwYTlhemNnXG4gIFwi2KfYqNmI2LjYqNmKXCIsIC8vIHhuLS1tZ2JjYTdkemRvXG4gIFwi2KfZhNiz2LnZiNiv2YrYqVwiLCAvLyB4bi0tbWdiZXJwNGE1ZDRhclxuICBcItqA2KfYsdiqXCIsIC8vIHhuLS1tZ2JndTgyYVxuICBcItmD2KfYq9mI2YTZitmDXCIsIC8vIHhuLS1tZ2JpNGVjZXhwXG4gIFwi2LPZiNiv2KfZhlwiLCAvLyB4bi0tbWdicGwyZmhcbiAgXCLZh9mF2LHYp9mHXCIsIC8vIHhuLS1tZ2J0M2RoZFxuICBcIti52LHYp9mCXCIsIC8vIHhuLS1tZ2J0eDJiXG4gIFwi2YXZhNmK2LPZitinXCIsIC8vIHhuLS1tZ2J4NGNkMGFiXG4gIFwi5r6z6ZaAXCIsIC8vIHhuLS1taXg4OTFmXG4gIFwi64u37Lu0XCIsIC8vIHhuLS1tazFidTQ0Y1xuICBcIuaUv+W6nFwiLCAvLyB4bi0tbXh0cTFtXG4gIFwi2LTYqNmD2KlcIiwgLy8geG4tLW5nYmM1YXpkXG4gIFwi2KjZitiq2YNcIiwgLy8geG4tLW5nYmU5ZTBhXG4gIFwi2LnYsdioXCIsIC8vIHhuLS1uZ2JyeFxuICBcIuGDkuGDlFwiLCAvLyB4bi0tbm9kZVxuICBcIuacuuaehFwiLCAvLyB4bi0tbnF2N2ZcbiAgXCLnu4Tnu4fmnLrmnoRcIiwgLy8geG4tLW5xdjdmczAwZW1hXG4gIFwi5YGl5bq3XCIsIC8vIHhuLS1ueXF5MjZhXG4gIFwi4LmE4LiX4LiiXCIsIC8vIHhuLS1vM2N3NGhcbiAgXCLYs9mI2LHZitipXCIsIC8vIHhuLS1vZ2JwZjhmbFxuICBcIuaLm+iBmFwiLCAvLyB4bi0tb3R1Nzk2ZFxuICBcItGA0YPRgVwiLCAvLyB4bi0tcDFhY2ZcbiAgXCLRgNGEXCIsIC8vIHhuLS1wMWFpXG4gIFwi54+g5a6dXCIsIC8vIHhuLS1wYnQ5NzdjXG4gIFwi2KrZiNmG2LNcIiwgLy8geG4tLXBnYnMwZGhcbiAgXCLlpKfmi79cIiwgLy8geG4tLXBzc3kydVxuICBcIuOBv+OCk+OBqlwiLCAvLyB4bi0tcTlqeWI0Y1xuICBcIuOCsOODvOOCsOODq1wiLCAvLyB4bi0tcWNrYTFwbWNcbiAgXCLOtc67XCIsIC8vIHhuLS1xeGFtXG4gIFwi5LiW55WMXCIsIC8vIHhuLS1yaHF2OTZnXG4gIFwi5pu457GNXCIsIC8vIHhuLS1yb3Z1ODhiXG4gIFwi4LSt4LS+4LSw4LSk4LSCXCIsIC8vIHhuLS1ydmMxZTBhbTNlXG4gIFwi4Kit4Ki+4Kiw4KikXCIsIC8vIHhuLS1zOWJyajljXG4gIFwi572R5Z2AXCIsIC8vIHhuLS1zZXM1NTRnXG4gIFwi64u364S3XCIsIC8vIHhuLS10NjBiNTZhXG4gIFwi44Kz44OgXCIsIC8vIHhuLS10Y2t3ZVxuICBcIuWkqeS4u+aVmVwiLCAvLyB4bi0tdGlxNDl4cXlqXG4gIFwi5ri45oiPXCIsIC8vIHhuLS11bnVwNHlcbiAgXCJ2ZXJtw7ZnZW5zYmVyYXRlclwiLCAvLyB4bi0tdmVybWdlbnNiZXJhdGVyLWN0YlxuICBcInZlcm3DtmdlbnNiZXJhdHVuZ1wiLCAvLyB4bi0tdmVybWdlbnNiZXJhdHVuZy1wd2JcbiAgXCLkvIHkuJpcIiwgLy8geG4tLXZocXV2XG4gIFwi5L+h5oGvXCIsIC8vIHhuLS12dXE4NjFiXG4gIFwi5ZiJ6YeM5aSn6YWS5bqXXCIsIC8vIHhuLS13NHI4NWVsOGZodTVkbnJhXG4gIFwi5ZiJ6YeMXCIsIC8vIHhuLS13NHJzNDBsXG4gIFwi2YXYtdixXCIsIC8vIHhuLS13Z2JoMWNcbiAgXCLZgti32LFcIiwgLy8geG4tLXdnYmw2YVxuICBcIuW5v+S4nFwiLCAvLyB4bi0teGhxNTIxYlxuICBcIuCuh+CusuCumeCvjeCuleCviFwiLCAvLyB4bi0teGtjMmFsM2h5ZTJhXG4gIFwi4K6H4K6o4K+N4K6k4K6/4K6v4K6+XCIsIC8vIHhuLS14a2MyZGwzYTVlZTBoXG4gIFwi1bDVodW1XCIsIC8vIHhuLS15OWEzYXFcbiAgXCLmlrDliqDlnaFcIiwgLy8geG4tLXlmcm80aTY3b1xuICBcItmB2YTYs9i32YrZhlwiLCAvLyB4bi0teWdiaTJhbW14XG4gIFwi5pS/5YqhXCIsIC8vIHhuLS16ZnIxNjRiXG4gIFwieHBlcmlhXCIsXG4gIFwieHh4XCIsXG4gIFwieHl6XCIsXG4gIFwieWFjaHRzXCIsXG4gIFwieWFob29cIixcbiAgXCJ5YW1heHVuXCIsXG4gIFwieWFuZGV4XCIsXG4gIFwieWVcIixcbiAgXCJ5b2RvYmFzaGlcIixcbiAgXCJ5b2dhXCIsXG4gIFwieW9rb2hhbWFcIixcbiAgXCJ5b3VcIixcbiAgXCJ5b3V0dWJlXCIsXG4gIFwieXRcIixcbiAgXCJ5dW5cIixcbiAgXCJ6YVwiLFxuICBcInphcHBvc1wiLFxuICBcInphcmFcIixcbiAgXCJ6ZXJvXCIsXG4gIFwiemlwXCIsXG4gIFwiemlwcG9cIixcbiAgXCJ6bVwiLFxuICBcInpvbmVcIixcbiAgXCJ6dWVyaWNoXCIsXG4gIFwiendcIlxuXTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGlwUmVnZXggPSByZXF1aXJlKCdpcC1yZWdleCcpO1xuY29uc3QgdGxkcyA9IHJlcXVpcmUoJ3RsZHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRzID0+IHtcblx0b3B0cyA9IE9iamVjdC5hc3NpZ24oe3N0cmljdDogdHJ1ZX0sIG9wdHMpO1xuXG5cdGNvbnN0IHByb3RvY29sID0gYCg/Oig/OlthLXpdKzopPy8vKSR7b3B0cy5zdHJpY3QgPyAnJyA6ICc/J31gO1xuXHRjb25zdCBhdXRoID0gJyg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyc7XG5cdGNvbnN0IGlwID0gaXBSZWdleC52NCgpLnNvdXJjZTtcblx0Y29uc3QgaG9zdCA9ICcoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKyknO1xuXHRjb25zdCBkb21haW4gPSAnKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqJztcblx0Y29uc3QgdGxkID0gYCg/OlxcXFwuJHtvcHRzLnN0cmljdCA/ICcoPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZl17Mix9KScgOiBgKD86JHt0bGRzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpLmpvaW4oJ3wnKX0pYH0pXFxcXC4/YDtcblx0Y29uc3QgcG9ydCA9ICcoPzo6XFxcXGR7Miw1fSk/Jztcblx0Y29uc3QgcGF0aCA9ICcoPzpbLz8jXVteXFxcXHNcIl0qKT8nO1xuXHRjb25zdCByZWdleCA9IGAoPzoke3Byb3RvY29sfXx3d3dcXFxcLikke2F1dGh9KD86bG9jYWxob3N0fCR7aXB9fCR7aG9zdH0ke2RvbWFpbn0ke3RsZH0pJHtwb3J0fSR7cGF0aH1gO1xuXG5cdHJldHVybiBvcHRzLmV4YWN0ID8gbmV3IFJlZ0V4cChgKD86XiR7cmVnZXh9JClgLCAnaScpIDogbmV3IFJlZ0V4cChyZWdleCwgJ2lnJyk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBWWiBVUkwgcGx1Z2luIGZvciBDcmFmdCBDTVNcbiAqXG4gKiBWelVybEZpZWxkIEZpZWxkIEpTXG4gKlxuICogQGF1dGhvciAgICBFbGkgVmFuIFpvZXJlblxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTggRWxpIFZhbiBab2VyZW5cbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2VsaXZ6XG4gKiBAcGFja2FnZSAgIFZ6VXJsXG4gKiBAc2luY2UgICAgIDIuMC4wVnpVcmxWelVybEZpZWxkXG4gKi9cblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICd0aHJvdHRsZS1kZWJvdW5jZSc7XG5pbXBvcnQgdXJsVGVzdCBmcm9tICd1cmwtcmVnZXgnO1xuaW1wb3J0ICcuLi9jc3MvVnpVcmwuY3NzJztcblxuLypcbiAqIEFqYXggbGluayB2YWxpZGF0b3IgZm9yIFZaIFVSTCBmaWVsZHR5cGVcbiAqIGJ5IEVsaSBWYW4gWm9lcmVuIC0gaHR0cDovL2VsaXZ6LmNvbVxuICpcbiAqIERlcGVuZHMgb246IGpRdWVyeSwgQ3JhZnRcbiAqL1xuXG5jb25zdCB1cmxDYWNoZSA9IHt9O1xuY29uc3QgZGVsYXkgPSA1MDA7XG5cbmNsYXNzIFZ6VXJsIHtcbiAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAvLyBTdG9yZSBlbGVtZW50cyB3ZSB3aWxsIHdvcmsgd2l0aFxuICAgIHRoaXMuJGZpZWxkID0gJChgIyR7ZmllbGR9YCk7XG4gICAgdGhpcy4kd3JhcHBlciA9IHRoaXMuJGZpZWxkLnBhcmVudCgpO1xuICAgIHRoaXMuJG1zZyA9IHRoaXMuJGZpZWxkLm5leHQoKTtcblxuICAgIC8vIENoZWNrIFVSTHMgd2hlbmV2ZXIgdGhlIGZpZWxkIGNoYW5nZXNcbiAgICB0aGlzLiRmaWVsZC5vbigna2V5dXAgcGFzdGUnLCB0aGlzLmNoZWNrRmllbGQuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBTdG9yZSB0aGUgZGVib3VuY2VkIHZhbGlkYXRpb24gZnVuY3Rpb25cbiAgICB0aGlzLnZhbGlkYXRlID0gZGVib3VuY2UoZGVsYXksIHRoaXMuX3ZhbGlkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gQ2hlY2sgZXhpc3RpbmcgVVJMcyB3aGVuIHRoZSBwYWdlIGxvYWRzXG4gICAgdGhpcy5jaGVja0ZpZWxkKCk7XG4gIH1cblxuICBxdWV1ZUFqYXgoKSB7XG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICBsZXQgcHJldmlvdXMgPSBuZXcgJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcbiAgICAgIHJldHVybiBmbiA9PiAocHJldmlvdXMgPSBwcmV2aW91cy50aGVuKGZuKSk7XG4gICAgfSkoKTtcbiAgfVxuXG4gIGNoZWNrRmllbGQoKSB7XG4gICAgLy8gRG9uJ3QgYm90aGVyIGNoZWNraW5nIGlmIGl0J3MgZW1wdHlcbiAgICBpZiAodGhpcy4kZmllbGQudmFsKCkgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXR1cyh7IHN0YXR1czogJ2VtcHR5JyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTaG93IHRoZSBcInNwaW5uZXJcIlxuICAgIHRoaXMuc2V0U3RhdHVzKHsgc3RhdHVzOiAnY2hlY2tpbmcnIH0pO1xuXG4gICAgdGhpcy52YWxpZGF0ZSh0aGlzLiRmaWVsZCk7XG4gIH1cblxuICAvKlxuICAgKiBBY3R1YWxseSBzZW5kIGEgcmVxdWVzdCB0aGUgdGhlIHRhcmdldCBVUkwgdG8gc2VlIGlmIGl0IGV4aXN0c1xuICAgKi9cbiAgX3ZhbGlkYXRlKCkge1xuICAgIGxldCB1cmwgPSB0aGlzLiRmaWVsZC52YWwoKTtcbiAgICBsZXQgZGF0YSA9IHt9O1xuXG4gICAgLy8gUHJlcGVuZCBzaXRlIGJhc2VVcmwgdG8gcmVsYXRpdmUgVVJJc1xuICAgIGlmICh1cmwuY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgIHVybCA9IENyYWZ0LmJhc2VVcmwucmVwbGFjZSgvXiguKz8pXFwvKj8kLywgJyQxJykgKyB1cmw7XG4gICAgfVxuXG4gICAgaWYgKHVybCBpbiB1cmxDYWNoZSkge1xuICAgICAgLy8gVXNlIHRoZSBjYWNoZWQgZGF0YVxuICAgICAgZGF0YSA9IHVybENhY2hlW3VybF07XG4gICAgfSBlbHNlIGlmICh1cmwuY2hhckF0KDApID09PSAnIycgfHwgdXJsLmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICAvLyBJbi1wYWdlIGxpbmtzIHNob3VsZCBhbHdheXMgYmUgY29uc2lkZXJlZCB2YWxpZFxuICAgICAgZGF0YS5zdGF0dXMgPSAndmFsaWQnO1xuICAgIH0gZWxzZSBpZiAoIXVybFRlc3QoeyBleGFjdDogdHJ1ZSB9KS50ZXN0KHVybCkpIHtcbiAgICAgIC8vIFRoYXQncyBub3QgZXZlbiBhIHJlYWwgVVJMXG4gICAgICBkYXRhLnN0YXR1cyA9ICdpbnZhbGlkJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWpheCBjYWxsIHRvIHByb3h5IHRvIGNoZWNrIHRoZSB1cmxcbiAgICAgIHRoaXMucXVldWVBamF4KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2FmZVVybCA9IHVybC5yZXBsYWNlKCdodHRwJywgJ2h0XnRwJyk7IC8vIE1vZF9zZWN1cml0eSBkb2Vzbid0IGxpa2UgXCJodHRwOi8vXCIgaW4gcG9zdGVkIGRhdGFcbiAgICAgICAgcmV0dXJuIENyYWZ0LnBvc3RBY3Rpb25SZXF1ZXN0KCd2enVybC92YWxpZGF0aW9uL2NoZWNrJywge1xuICAgICAgICAgIHVybDogc2FmZVVybCxcbiAgICAgICAgfSlcbiAgICAgICAgICAuZG9uZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIFVSTCB3ZSBhcmUgY2hlY2tpbmcgaXMgc3RpbGwgdGhlcmVcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcmlnaW5hbCAhPT0gdGhpcy4kZmllbGQudmFsKCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTaG93IG9yIGhpZGUgdGhlIGVycm9yIG1lc3NhZ2UsIGFzIG5lZWRlZFxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmh0dHBfY29kZSA+PSAyMDAgJiYgcmVzcG9uc2UuaHR0cF9jb2RlIDwgNDAwKSB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcmlnaW5hbCA9PT0gcmVzcG9uc2UuZmluYWxfdXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIFVSTCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgIGRhdGEuc3RhdHVzID0gJ3ZhbGlkJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgVVJMIGlzIGEgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXR1cyA9ICdyZWRpcmVjdCc7XG4gICAgICAgICAgICAgICAgZGF0YS5yZWRpcmVjdCA9IHJlc3BvbnNlLmZpbmFsX3VybDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS5zdGF0dXMgPSAnaW52YWxpZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmFpbCgoKSA9PiB7XG4gICAgICAgICAgICBkYXRhLnN0YXR1cyA9ICdpbnZhbGlkJztcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hbHdheXMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoZGF0YSk7XG4gICAgICAgICAgICB1cmxDYWNoZVt1cmxdID0gZGF0YTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnc3RhdHVzJyBpbiBkYXRhKSB7XG4gICAgICB0aGlzLnNldFN0YXR1cyhkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBTZXQgdGhlIHN0eWxpbmcgYW5kIGVycm9yIG1lc3NhZ2UgYXMgbmVlZGVkXG4gICAqL1xuICBzZXRTdGF0dXMoZGF0YSkge1xuICAgIC8vIFJlc2V0IGZpZWxkXG4gICAgdGhpcy4kZmllbGQucHJldigpLnJlbW92ZSgpO1xuICAgIHRoaXMuJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2Vycm9ycyBjaGVja2luZycpO1xuXG4gICAgLy8gUmVzZXQgbWVzc2FnZVxuICAgIHRoaXMuJG1zZy5lbXB0eSgpO1xuXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZW1wdHknKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnaW52YWxpZCcpIHtcbiAgICAgIHRoaXMuJG1zZy50ZXh0KENyYWZ0LnQoJ1RoaXMgVVJMIGFwcGVhcnMgdG8gYmUgaW52YWxpZCcpKTtcbiAgICAgIHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoJ2Vycm9ycycpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5zdGF0dXMgPT09ICdyZWRpcmVjdCcpIHtcbiAgICAgIGlmICh0aGlzLiRmaWVsZC5oYXNDbGFzcygnZm9sbG93LXJlZGlyZWN0cycpKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoJ2Vycm9ycycpO1xuICAgICAgICB0aGlzLiRtc2cuaHRtbChcbiAgICAgICAgICBgPHNwYW4+JHtDcmFmdC50KCdSZWRpcmVjdHMgdG8nKX0gJHtkYXRhLnJlZGlyZWN0fTwvc3Bhbj5gXG4gICAgICAgICk7XG4gICAgICAgICQoJzxhLz4nLCB7XG4gICAgICAgICAgdGV4dDogQ3JhZnQudCgnVXBkYXRlJyksXG4gICAgICAgICAgY2xpY2s6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGZpZWxkIHZhbHVlIHdpdGggdGhlIHJlZGlyZWN0IHRhcmdldFxuICAgICAgICAgICAgdGhpcy4kZmllbGQudmFsKGRhdGEucmVkaXJlY3QpO1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSh0aGlzLiRmaWVsZCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pLmFwcGVuZFRvKHRoaXMuJG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnN0YXR1cyA9ICd2YWxpZCc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2NoZWNraW5nJykge1xuICAgICAgdGhpcy4kd3JhcHBlci5hZGRDbGFzcygnY2hlY2tpbmcnKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYSBcIk9wZW4gUGFnZSBsaW5rXCJcbiAgICBpZiAoZGF0YS5zdGF0dXMgIT09ICdlbXB0eScgJiYgZGF0YS5zdGF0dXMgIT09ICdjaGVja2luZycpIHtcbiAgICAgIGNvbnN0ICR2aXNpdExpbmsgPSAkKCc8YS8+Jywge1xuICAgICAgICBocmVmOiB0aGlzLiRmaWVsZC52YWwoKSxcbiAgICAgICAgY2xhc3M6ICd2enVybC12aXNpdCcsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgIHRpdGxlOiBgJHtDcmFmdC50KCdWaXNpdCBVUkwnKX06ICR7dGhpcy4kZmllbGQudmFsKCl9YCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZmllbGQuYmVmb3JlKCR2aXNpdExpbmspO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuVnpVcmwgPSBWelVybDtcbiJdLCJzb3VyY2VSb290IjoiIn0=