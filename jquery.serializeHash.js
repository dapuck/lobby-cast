jQuery.fn.extend({
  serializeHash : function() {
    var obj = {};
    this.map(function(i, el) {
      var elements = jQuery.prop(el, "elements");
      return elements ? jQuery.makeArray(elements) : el;
    })
    .filter(function(i,el) {
      var type = el.type;
      return el.name && !jQuery(el).is(":disabled") && 
        /^(?:input|select|textarea|keygen)/i.test(el.nodeName) && 
        !/^(?:submit|button|image|reset|file)$/i.test(type) && 
        (el.checked || !/^(?:checkbox|radio)$/i.test(type));
    })
    .each(function(i,el) {
      var k = el.name;
      var val = $(el).val();
      if(typeof obj[k] !== 'undefined') {
        if(!jQuery.isArray(obj[k])) {
          obj[k] = [ obj[k] ];
        }
        obj[k].push(val);
      } else {
        obj[k] = val;
      }
    });
    return obj;
  }
})