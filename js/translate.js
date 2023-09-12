function googleTranslateElementInit() {
  var googleTranslateElement = new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,si,ta,fr,de,id,th,hi,ja',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');

  // Event handler for language change
  googleTranslateElement.addEventListener('googletranslateload', function(event) {
    var iframe = document.querySelector('.goog-te-menu-frame');
    var styleClass = iframe.contentDocument.documentElement.className;
    document.querySelector('.goog-te-banner-frame').className = styleClass;
  });
}
