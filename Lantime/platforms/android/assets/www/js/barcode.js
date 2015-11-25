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

function callImei() {
	window.plugins.imeiplugin.getImei(callback);
	
	function callback(imei) {
		console.log("My Android IMEI"+imei);
	}
}