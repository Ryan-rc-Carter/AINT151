function CreatePlayer()
{
  var playerName = document.getElementById('playername').value;
  var playerColour = document.getElementById('playercolour').value;
  var playerHealth = document.getElementById('playerhealth').value;
  var playerWeapon = document.getElementById('playerweapon').value;

  console.log(playerName)
  console.log(playerWeapon)
  console.log(playerColour)

  if (playerWeapon == 1)
  {
    var weaponType = 'Crossbow of much hurting'
  }
  else if (playerWeapon == 2)
  {
    var weaponType = 'Broadsword of so slicing'
  }
  else
  {
    var weaponType = 'Wand of amaze magics'
  }

  document.getElementById('name').innerHTML = playerName;
  document.getElementById('colour').style.backgroundColor = playerColour;
  document.getElementById('health').innerHTML = playerHealth;
  document.getElementById('weapon').innerHTML = weaponType;



}
