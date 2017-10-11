$('figure pre code').children().each(reactPatcher);

function reactPatcher(key, val) {
  var html = $(val).html().replace('class', 'className');
  $(val).html(html);
}
