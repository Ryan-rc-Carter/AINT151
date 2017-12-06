function OnLoad()
{
  var playerHealth = 100

  localStorage.setItem("playerHealth", "100")

  var enemyHealth = 100

  localStorage.setItem("enemyHealth", "100")

  var area = 1

  localStorage.setItem("area", area)

  var isWeaponCharged = 1;

  localStorage.setItem("isWeaponCharged", 1)
}

function Attack()
{
  if(localStorage.getItem('playerHealth') > 0 && localStorage.getItem('enemyHealth') > 0)
  {
    var attacktype = document.getElementById('playerAttack').value;

    if (attacktype == 1)
    {

      var damage = Math.floor((Math.random() * 15) + 5);
      playerAnimationLight()

      if (localStorage.getItem('isWeaponCharged') == 0)
      {
        isWeaponCharged = 1
        document.getElementById('heavyWeapon').innerHTML = "Ready"
      }

      localStorage.setItem("playerDamage", damage)
    }
    else if (attacktype == 2)
    {
      if (localStorage.getItem('isWeaponCharged') == 1)
      {
        var damage = Math.floor((Math.random() * 40) + 10);;
        playerAnimationHeavy()
        localStorage.setItem('isWeaponCharged', 0)
        document.getElementById('heavyWeapon').innerHTML = "Charging"

      }
      else if (localStorage.getItem('isWeaponCharged') == 0)
      {
        document.getElementById('heavyWeapon').innerHTML = "Charging"
        var damage = 0
      }

      localStorage.setItem("playerDamage", damage)
    }
    enemyDamage = Math.floor((Math.random() * 10) + 1);

    if (localStorage.getItem('isWeaponCharged') == 0 )
    {
      if (enemyDamage > 5)
      {
        enemyAnimationHeavy()
      }
      else
      {
        enemyAnimationLight()
      }
    }

    localStorage.setItem("enemyDamage", enemyDamage)

    calculatePlayerHealth()
    calculateEmemyHealth()
  }
  else if (localStorage.getItem('playerHealth') <= 0)
  {
    document.getElementById('pSprite').src="img/PR-001dead.png"
  }
  else if (localStorage.getItem('enemyHealth') <= 0)
  {
    document.getElementById('eSprite').src="img/Enemydead.png"
  }
}

function calculatePlayerHealth()
{
  var currentHealth = localStorage.getItem("playerHealth");

  currentHealth = currentHealth - enemyDamage

  if (currentHealth < 0)
  {
    currentHealth = 0
    document.getElementById('pSprite').src="img/PR-001dead.png"
  }

  localStorage.setItem("playerHealth", currentHealth)

  document.getElementById("Health").innerHTML = currentHealth
}

function calculateEmemyHealth()
{
  var currentEnemyHealth = localStorage.getItem("enemyHealth");

  var playerDamageDealt = localStorage.getItem("playerDamage");

  currentEnemyHealth = currentEnemyHealth - playerDamageDealt

  if (currentEnemyHealth < 0)
  {
    currentEnemyHealth = 0
    document.getElementById('eSprite').src="img/Enemydead.png"
  }

  localStorage.setItem("enemyHealth", currentEnemyHealth)

  document.getElementById("enemyHealth").innerHTML = currentEnemyHealth

}


/*Animations for sprites*/
function playerAnimationLight()
{
  document.getElementById('pSprite').src="img/PR-001firingLIGHT.gif"
}
function playerAnimationHeavy()
{
  document.getElementById('pSprite').src="img/PR-001firingHEAVY.gif"
}

function enemyAnimationLight()
{
  document.getElementById('eSprite').src="img/EnemyfiringLIGHT.gif"
}
function enemyAnimationHeavy()
{
  document.getElementById('eSprite').src="img/EnemyfiringHEAVY.gif"
}
