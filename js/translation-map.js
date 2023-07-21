function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,si,ta,fr,de,id,th,hi,ja',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
  var event;
  if (document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent('on' + event.eventType, event);
  }
}

jQuery('.lang-select').click(function() {
  var theLang = jQuery(this).attr('data-lang');
  var langName = jQuery(this).text();
  var flagSrc = jQuery(this).find('img').attr('src');

 
  jQuery('.ct-language').html('<i class="fa fa-globe" aria-hidden="true"></i> ' + langName + ' <i class="fa fa-caret-down"></i><img src="' + flagSrc + '" alt="' + langName + '" class="country-translate" />');

  jQuery('.goog-te-combo').val(theLang);

  window.location = jQuery(this).attr('href');
  location.reload();
});
