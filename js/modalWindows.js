var $base = $("#modalBase"), //modal backdrop div id
	$modal = $(".popup"), //common class between modal windows
	exitButton = "./img/exitButton.png"; //filepath for exit button in modal windows
	
//Do not edit below this line
	
function showModal(x) {
	var $x = $('#'+x);
	$base.fadeIn(500)
	$x.fadeIn(500);
	$base.on("click",hideAllModals)
	if($('#'+x+' .exitButton').length) {;} //If exit button exists in this modal, do nothing.
	else {$x.prepend("<img src='"+exitButton+"' onclick='hideAllModals()' class='exitButton'></img>");} //Else, add exit button.
}

function hideAllModals() {
	$base.fadeOut(500);
	$modal.fadeOut(500);
}

$base.hide();
$modal.hide();