document.querySelector('button#open-media').addEventListener('click', () => 
{
	if (hasUserMedia()) {callUserMedia()}
	connect();	
});

// Define Variables ---------------------
var localstream = null;
var remotestream = null;

let hasUserMedia = () => 
{
	// Check for Media --------------------------
	return (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) ? true : false;
};

let callUserMedia = () => 
{
	if (hasUserMedia()) 
	{
		// Get Supported Browser Stream -------------
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia; 

		// Access User Media ------------------------
		navigator.getUserMedia({video: true, audio: true}, (stream) => {
			var conn = new RTCPeerConnection();
			conn.addStream(stream);

			document.querySelector('#local-frame').srcObject = stream;
		}, (err) => {console.log(err);});
	}
};

window.onload = () => 
{
	alert('Hello');
}