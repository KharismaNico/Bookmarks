/* translate the word "language" according to the browser's language setting. Ignores localization :/ */
(function($){
	$.fn.translateLanguageLabel = function(){
		// get language setting from browser ('en','pt-BR', etc.)
		// try navigator.languages (plural) first, for Chrome
		var browserLangsRaw = window.navigator.languages;
		if ( browserLangsRaw ){
			// trim response to 2 characters to standardize (ignoring localization)
			var browserLang = browserLangsRaw[0].substring(0,2);
		} else { // else fall back to navigator.language (singular) 
			var browserLangRaw = window.navigator.language;
			var browserLang = browserLangRaw.substring(0,2);
		}
		var langTranslations = {
			ar: "لغة",
			de: "Sprache",
			en: "Language",
			es: "Idioma",
			fr: "Langue",
			hi: "भाषा",
			id: "Bahasa",
			it: "Lingua",
			ja: "言語",
			nl: "Taal",
			pt: "Língua",
			ru: "язык",
			sv: "Språk",
			sw: "Lugha",
			tr: "Dil",
			vi: "Ngôn ngữ"
		};
		var translatedLabel = langTranslations[browserLang] ? langTranslations[browserLang] : null;
		// if translation exists, then replace the original text — if not, leave it alone
		if (translatedLabel){
			return this.each(function(){
				$(this).text(translatedLabel);
			});
		}
		return this;
	};
}(jQuery));

jQuery(document).ready(function($){
	$('.language-nav-label').translateLanguageLabel();
});

