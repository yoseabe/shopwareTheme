console.log("HELLO WORLD HAHAHA");

const logo = document.querySelector('.col-12.col-lg-auto.header-logo-col');
const logoOriginalPos = logo.parentNode;
const navs = document.querySelector('.row.g-0');

const burgerDiv = document.querySelector('.menu-button');
const search = document.querySelector('.col-auto.d-sm-none');
const searchOriginalPos = search.parentNode;


const accLogo = document.querySelector('.account-menu');
const accLogoOriginalPos = accLogo.parentNode;
const cartLogo = document.querySelector('.header-cart');

const logoTablet = document.querySelector('.header-logo-main');
const navBarTablet = document.querySelector('.row.align-items-center.header-row');
const position = 1;


const badDivMobile = navs.children[3];
badDivMobile.style.display = "none";
const goodDivMobile = navs.children[2];
const goodDivMobileOriginalPos = goodDivMobile.parentNode;
const badCartDiv = document.querySelector('.header-cart');
const cartBtn = document.querySelector('a.btn.header-cart-btn.header-actions-btn');
const accountBtn = document.querySelector('.account-menu');

//produkt page
const produktTitelDiv = document.querySelector('.col.product-heading-name-container');
if(produktTitelDiv){

	const produktTitelOriginalPos = produktTitelDiv.parentNode;
	const priseDiv = document.querySelector('.product-detail-price-container');
	priseDiv.insertBefore(produktTitelDiv, priseDiv.firstChild);
        

}





function setNavbarForMobile(){
 if (window.innerWidth <= 575) {
	burgerDiv.appendChild(search);
	cartLogo.appendChild(accLogo);
	navs.insertBefore(logo, navs.children[position]);
	
	badDivMobile.style.display = "none";
	goodDivMobile.appendChild(accountBtn);
	goodDivMobile.appendChild(cartBtn);
	//const badCartDiv = navs.children[3];
	//navs.removeChild(badCartDiv);


	
}
else{
	badDivMobile.style.display = "block";
	if(logo.parentNode !== logoOriginalPos){
		logoOriginalPos.appendChild(logo);
	}

	if(accLogo.parentNode !== accLogoOriginalPos){ 
                accLogoOriginalPos.appendChild(accLogo);
        }

	if(search.parentNode !== searchOriginalPos){ 
                searchOriginalPos.appendChild(search);
        }
	if(goodDivMobile.parentNode !== goodDivMobileOriginalPos){
                goodDivMobileOriginalPos.appendChild(goodDivMobile);
        }




}


}

setNavbarForMobile();
window.addEventListener('resize', setNavbarForMobile);

//if (window.innerWidth >= 576){
	//burgerDiv.appendChild(search);
        //cartLogo.appendChild(accLogo);
        //navs.insertBefore(logo, navs.children[position]);
//}

