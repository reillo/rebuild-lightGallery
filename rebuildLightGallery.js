(function() {
	$.fn.rebuildLightGallery = function() {

		var getItems = function(ins) {
			if (ins.s.dynamic) {
				return ins.s.dynamicEl;
			} else {
				if (ins.s.selector === 'this') {
					return ins.$el;
				} else if (ins.s.selector !== '') {
					if (ins.s.selectWithin) {
						return $(ins.s.selectWithin).find(ins.s.selector);
					} else {
						return ins.$el.find($(ins.s.selector));
					}
				} else {
					return ins.$el.children();
				}
			}
		};

		return this.each(function() {
			var ins = $(this).data('lightGallery');

			var lglength = ins.$items.length;
			var cc = getItems(ins);

			if (lglength != cc.length) {
				ins.$items = cc;

				// rebuild counter
				$('#lg-counter').remove();
				ins.counter();

				// add missing lg-item
				for (i = lglength; i < ins.$items.length; i++) {
					$('.lg-inner').append('<div class="lg-item"></div>');
				}

				// recount slides
				ins.$slide = ins.$outer.find('.lg-item');

				// reset specific modules
				if (ins.modules.Thumbnail) {
					ins.modules['Thumbnail'].destroy();
					ins.modules['Thumbnail'] = new $.fn.lightGallery.modules['Thumbnail'](ins.el);
				}
			}
		});
	};
})();