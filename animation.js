document.addEventListener("DOMContentLoaded", function(){
	'use strict';
	
gsap.registerPlugin(ScrollTrigger);
	
	let workInfoItems = document.querySelectorAll('.work-photo-item');
	workInfoItems.forEach(function(item, index){
		item.style.zIndex = workInfoItems.length - index;
	});
	
	gsap.set(".work-photo-item",{
		clipPath: function () {
			return "inset(0px 0px 0px 0px)"
		}
	});
	const animation = gsap.to('.work-photo-item:not(:last-child)',{
		clipPath: function () {
			return "inset(0px 0px 100% 0px)"
		},
		stagger: .5,
		ease: "none"
	});
	ScrollTrigger.create({
		trigger: '.work',
		start: 'top top',
		end: 'bottom bottom',
		animation: animation,
		scrub:1
	});
});
