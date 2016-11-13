# Rebuild lightGallery

A very simple hack of https://github.com/sachinchoolur/lightGallery to refresh lightGallery items while its gallery is opened.


## Why?

For some reasons, we want to add items loaded via ajax. Say, you have a list of images and has a load more function. Unfortunately, you need to destroy the `lightGallery` instance and re instantiate it.

## Installation

include after `.../lightgallery.js`.

## Usage

Just append the items to your list of items and simply execute below.

Lightgallery Initiation:

```js
$(function() {
	var $lg = $('.js-lightgallery');
	var ins;

	function instantiate() {
		if (ins) {
			ins.destroy(true);
		}
		$lg.lightGallery({
			pager: false,
			currentPagerPosition: 'middle'
		});

		// set instance
		ins = $lg.first().data('lightGallery');
	}

	// re instantiate when closed
	$lg.on('onCloseAfter.lg', function(event) {
		instantiate();
	});

	instantiate();
});
```

Call this whenever you update the items:

```js
	$('#lightgallery').rebuildLightGallery();
```


## Might not Work Properly

This simple hacks might not work properly on specific modules.

## Have much better work around?

Please let me know.
