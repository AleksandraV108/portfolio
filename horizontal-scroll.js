const xscroll = document.querySelector(".xscroll");
console.log(xscroll.offsetWidth)

function getScrollAmount() {
	let xscrollWidth = xscroll.scrollWidth;
	return -(xscrollWidth - window.innerWidth);
}

const tween = gsap.to(xscroll, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".xscrollWrapper",
	start:"top -10%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	
});




