// To serialize into a string: var s = $('form').first().serialize();
// To restore based on that string: $('form').first().deserialize(s);
// See http://stackoverflow.com/a/11156405/553865
$.fn.deserialize = function (data) {
  var inps = $(this).find(":input").get();
  if (typeof data !== "object") {
    data = {};
    $.each(inps, function () {
      if (this.name && (this.checked
        || /select|textarea/i.test(this.nodeName)
        || /text|hidden|password/i.test(this.type))) {
        data[this.name] = $(this).val();
      }
    });
    return data;
  } else {
    $.each(inps, function () {
      if (this.name && data[this.name]) {
        if (this.type === "checkbox" || this.type === "radio") {
          $(this).prop("checked", (data[this.name] === $(this).val()));
        } else {
          $(this).val(data[this.name]);
        }
      } else if (this.type === "checkbox") {
        $(this).prop("checked", false);
      }
    });
    return $(this);
  }
};
