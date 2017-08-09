# jQuery deserialize

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`deserialize` is the counterpart to jQuery's [serialize](https://api.jQuery.com/serialize/) method.

I did not write the `deserialize` method, it evolved on [StackOverflow](http://stackoverflow.com/a/11156405/553865).
I just renamed it to `deserialize`.

## Quick Review of jQuery's serialize Method
The `serialize()` method creates a text string in standard URL-encoded notation.
Typically the `serialize()` method is used to serialize an entire `<form>`.

Here is an example of serializing form data into a string:

    var serializedFormData = $("#myForm").serialize();

In the following example, jQuery sends a POST to `url`, containing data serialized from
the form with id `myForm`.
The server's response (assumed to be HTML for the sake of this example) to the POST is used to inflate the `<div>` with id `myDiv`:

```
var url = "http://blah.com/whatever";
$.post(
    url,
    $("#myForm").serialize(),
    function(data) {
      $("#myDiv").html(data);
    },
  ).fail(function(jqXHR, textStatus, errorThrown) {
    alert(textStatus + ": " + errorThrown);
  }
);
```

## Using Deserialize
Use the `deserialize` method provided by `deserialize.js` to populate a form from a serialized string.
This code example shows how an Ajax call to `url` that returns data with `Content-Type: application/x-www-form-urlencoded` populates the form fields in the form with id `myForm`:

```
var url = "http://blah.com/whatever";
$.get(url, function(data) {
      $("#myForm").deserialize(data)
    },
  ).fail(function(jqXHR, textStatus, errorThrown) {
    alert(textStatus + ": " + errorThrown);
  }
);
```

## Why Not Add This to jQuery?

Seems like the jQuery committers [probably don't want to do this](https://github.com/jQuery/jQuery/issues?utf8=%E2%9C%93&q=is%3Aissue%20serialize%20).

## Why Not Make This Into a jQuery Plugin?
I don't have the time or the energy.
If someone else forked this repo and moved forward with such a plugin, however,
I would be delighted!

![delighted](http://2.bp.blogspot.com/-x0u-yRoIOk0/T9IJA11dJ9I/AAAAAAAABBI/YGfm5Z0mW8M/s1600/delight.jpg)
