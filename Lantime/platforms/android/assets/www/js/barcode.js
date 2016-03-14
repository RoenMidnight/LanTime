function barCodeScan(){
	cordova.plugins.barcodeScanner.scan(function(barcodeData){	
		try{
			alert(barcodeData.text);
		}catch(err){
			alert(err);
		}
	}, 
	function(error){
		alert(error);
	});		
}

function ajaxScan(ender) {
	$.ajax({ url: ender,
			   type:"POST",
			   success: function(data){
					handleData(data);
					alert("Ponto registrado.");
				},
			   error: function(err){
					handleData(err);
					alert("Ponto não registrado.");
			   }
			});
}

function callimei() {
	
	window.plugins.imeiplugin.getImei(callback);
	
	try{
		function callback(imei) {
			alert("My Android IMEI :" + imei);
		}
	}catch(err){
		alert('Deu ruim');
	}
}

function takeLocation(){	
		
	var onSuccess = function(position) {
		
		alert('Latitude:' 				+ position.coords.latitude 			   + '\n' +
			   'Longitude:'				+ position.coords.longitude			   + '\n' +
			   'Altitude:'				+ position.coords.altitude			   + '\n' +
			   'Accuracy'				+ position.coords.accuracy			   + '\n' +
			   'Atltitude Accuracy' + position.coords.altitudeAccuracy + '\n' +
			   'Heading'				+ position.coords.heading			   + '\n' +
			   'Speed'					+ position.coords.speed				   + '\n' +
			   'Timestamp'			+ position.timestamp					   + '\n');
	
	};
	
	function onError(error) {
		alert('code: ' 		+ error.code 		 + '\n' +
			   'message: ' + error.message + ' \n' );
	}		
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);	

}










