# Rebuild lightGallery

A very simple hack of https://github.com/sachinchoolur/lightGallery to refresh lightGallery items while its gallery is opened.


## Why?

For some reasons, we want to add items loaded via ajax. Say, you have a list of images and has a load more function. Unfortunately, you need to destroy the `lightGallery` instance and re instantiate it.

## Usage

Just append the items to your list of items and simply execute below.

```js
$('#lightgallery').rebuildLightGallery();
```

NOTE! Should be included after `lightGallery`.

## Might not Work Properly

This simple hacks work properly on the following modules of `lightGallery`:

- Thumbnail
- autoplay
- hash
- pager
- zoom

## Have much better work around?

Please let me know.
