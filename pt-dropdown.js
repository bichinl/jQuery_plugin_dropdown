/**
 * Created by samuel on 17/08/16.
 */

(function ( $ ) {

	var ptcolor = '#ff00ff';

	$.fn.ptdropdown = function(options, callback) {

		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			title: "Default",
			open: false,
			checklist: false,
			callback: function() {}
		}, options );

		$(this).removeAttr('id');

		var list = $(this);

		// WRAP WITH div.pt-dropdown
		list.wrap('<div class="pt-dropdown"></div>');
		if (settings.checklist){
			list.addClass('checklist');

			list.children('li').children('a').on('click', function(e){
				$(this).parent('li').toggleClass('checked');
			});
		}
		if (settings.open){
			list.addClass('show');
		}

		list.children('li').children('a').on('click', function(e){
			e.preventDefault();
			settings.callback(e);
		});

		// GET RECENT WRAPPED TAG
		var ptdropdown = list.parent('.pt-dropdown');

		// ADD BUTTON WITH TITLE
		ptdropdown.append('<button><i class="fa '+ settings.icon +'"></i>'+settings.title+'<span class="fa fa-caret-down"></span></button>');

		// ADD UL LIST AFTER BUTTON
		ptdropdown.append(list);

		var button = ptdropdown.children('button');

		button.on('click', function(e){
			list.toggleClass('show');
		});

		return this;
	};

}( jQuery ));
