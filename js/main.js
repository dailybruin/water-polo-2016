jQuery(document).ready(function($){
	// source file is https://docs.google.com/spreadsheets/d/13Hpv0NLNMfiqWfA1kXzBjioYD5oVXSN5frzBAwnsuBw/edit#gid=0

	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);
	setIcon(timelineBlocks);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	function setIcon(blocks) {
		blocks.each(function() {
			var check = $(this).find('cd-timeline-content h2').text();
			if(check.match('/*Cage*/')){
				$('#icon-image').attr("src","img/podcast.png");
			}
			else{
				$('#icon-image').attr("src","img/newspaper.png");
			}
		});
	}

});