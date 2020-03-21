 let header = document.getElementById("header");
 let headerHeight = header.offsetHeight;

 document.addEventListener("scroll", onScroll);

 function onScroll() {
 	if(window.scrollY > headerHeight) {
 		header.style.width = "100%";
 		header.style.height = '50px';
 		header.style.position = 'fixed';
 	} else {
 		header.style.height = '89px';
 		header.style.position = 'static';
 	}
 }