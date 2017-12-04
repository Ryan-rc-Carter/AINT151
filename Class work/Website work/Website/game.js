function OnLoad()
{
  var playerHealth = 100

  localStorage.setItem("playerHealth", playerHealth)
}

function Attack()
{
  var attacktype = document.getElementById('playerAttack').value;

  if (attacktype == 1)
  {
    var damage = 3
  }
  else if (attacktype == 2)
  {
    var damage = 6
  }



  enemyDamage = Math.floor((Math.random() * 3) + 1);



  document.getElementById("Health").innerHTML = localStorage.getItem("playerHealth")

  localStorage.setItem("playerDamage", damage)
  localStorage.setItem("enemyDamage", enemyDamage)

}

function ThatsALottaDamage()
{

}
