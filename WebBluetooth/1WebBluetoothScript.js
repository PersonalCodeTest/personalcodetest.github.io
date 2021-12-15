var deviceName = "Thingy"

//Check whether the browser supports navigator.bluetooth framework
function isWebBluetoothAPISupported()
{
	if(!navigator.bluetooth)
	{
		console.log("Web Bluetooth API is not supported.");
		return false;
	}
	
	return true;
}

//Show all devices
function getDeviceInfo()
{
	let options = { acceptAllDevices: true }
	
	/*
	let options = {
		filters: [{ name: deviceName }]
	}
	*/
		
	console.log("BLE devices: ");
	
	navigator.bluetooth.requestDevice(options)
	.then(devices => { console.log("Name: " + device.name)})
	.catch(error => { console.log("Request device error: " + error)})
}
	
//Catch submit event of button
document.querySelector("form")
.addEventListener("submit", function(event){
	event.stopPropagation();
	event.preventDefault();
	
	if(isWebBluetoothAPISupported)
	{
		getDeviceInfo();
	}
})