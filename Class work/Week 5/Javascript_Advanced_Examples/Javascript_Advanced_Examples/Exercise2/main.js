
function StorePlayerData()
{
	var playerName = document.forms[0]["playername"].value;
	//var playerHealth = document.getElementById('number').value;
	//var playerColour = document.getElementById('color').value



	localStorage.setItem("playername", playerName);
	//localStorage.setItem("health", playerHealth);
	//localStorage.setItem("colour", playerColour);

}
