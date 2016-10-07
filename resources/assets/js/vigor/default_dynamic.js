
function ajaxSubmitCommentForm(){
	"use strict";

	var options = { 
		success: function(){
			$j("#commentform textarea").val("");
			$j("#commentform .success p").text("Comment has been sent!");
		}
	}; 
	
	$j('#commentform').submit(function() {
		$j(this).find('input[type="submit"]').next('.success').remove();
		$j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
		$j(this).ajaxSubmit(options); 
		return false; 
	}); 
}
var header_height = 105;
var min_header_height_scroll = 57;
var min_header_height_sticky = 60;
var scroll_amount_for_sticky = 85;
var min_header_height_fixed_hidden = 45;
var header_bottom_border_weight = 1;
var scroll_amount_for_fixed_hiding = 200;
var menu_item_margin = 0;
var large_menu_item_border = 0;
var element_appear_amount = -150;
var paspartu_width_init = 0.02;
var directionNavArrows = 'arrow_carrot-';
var directionNavArrowsTestimonials = 'fa fa-angle-';
var add_for_admin_bar = 0;





var logo_height = 130; // vigor logo height
var logo_width = 280; // vigor logo width
	    logo_width = 200;
    logo_height = 111;

	
	header_top_height = 0;
var loading_text;
loading_text = 'Loading new posts...';
var finished_text;
finished_text = 'No more posts';

var piechartcolor;
piechartcolor	= "#414a3b";

	piechartcolor = "#4c4c4c";



var no_ajax_pages = [];
var edgt_root = 'http://lifestudiosinc.com/';
var theme_root = 'http://lifestudiosinc.com/wp-content/themes/vigor/';
var header_style_admin = "";
if(typeof no_ajax_obj !== 'undefined') {
no_ajax_pages = no_ajax_obj.no_ajax_pages;
}