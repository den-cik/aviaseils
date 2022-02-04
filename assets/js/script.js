var elTabNames = document.getElementsByClassName('tab_name');
var elInformation = document.getElementsByClassName('information');

var templatePreloader = '<div class="preloader_container"><div class="preloader_box"><div class="preloader">&#xe982;</div><div class="preloader__text">Загрузка...</div></div></div>';


for(i=1; i< elTabNames.length; i++){
  elTabNames[i].addEventListener('click', onPreloader, false);
};


function onPreloader() {
	var widthElIformation = elInformation[0].offsetWidth; 
	var heightElIformation = elInformation[0].offsetHeight; 
	elInformation[0].style.width = widthElIformation + 'px';
	elInformation[0].style.height = heightElIformation + 'px';
	elInformation[0].innerHTML = templatePreloader;

	var elPreloader = document.getElementsByClassName('preloader')[0];
	setTimeout(function() {elPreloader.style.transform = 'rotate(90000deg)';},200);

	setTimeout(notFound,2000);
}

function notFound() {
	var elPreloader = document.getElementsByClassName('preloader')[0];

	elPreloader.style.display = 'none';

	var elPreloaderText = document.getElementsByClassName('preloader__text')[0];
	elPreloaderText.innerHTML = 'Ничего не найдено!<br><br><small> Возможно потому что это просто макет?</small>';
}