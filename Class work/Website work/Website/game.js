function OnLoad()
{
  var playerHealth = 100

  localStorage.setItem("playerHealth", "100")

  var enemyHealth = 100

  localStorage.setItem("enemyHealth", "100")

  var area = 1

  localStorage.setItem("area", 1)

  var isWeaponCharged = 1;

  localStorage.setItem("isWeaponCharged", 1)
}


function Attack()
{
  do
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
          localStorage.setItem('isWeaponCharged', 1)
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
          var damage = 0
          document.getElementById('heavyWeapon').innerHTML = "Charging"

        }

        localStorage.setItem("playerDamage", damage)

      }
      if (localStorage.getItem('area') == 1)
      {
        enemyDamage = Math.floor((Math.random() * 10) + 1);

        if (enemyDamage > 5)
        {
          enemyAnimationHeavy()
        }

        else
        {
          enemyAnimationLight()
        }
      }
      else if (localStorage.getItem('area') == 2)
      {
        enemyDamage = Math.floor((Math.random() * 15) + 1);
          localStorage.setItem("enemyDamage", enemyDamage)

        if (enemyDamage > 7)
        {
          enemyAnimationHeavy()
        }

        else
        {
          enemyAnimationLight()
        }
      }
      calculatePlayerHealth()
      calculateEmemyHealth()
      console.log(enemyDamage, damage)
    }
    else if (localStorage.getItem('playerHealth') <= 0)
    {
      document.getElementById('pSprite').src="img/PR-001dead.png"
    }
    else if (localStorage.getItem('enemyHealth') <= 0)
    {
      if (localStorage.getItem('area') == 1)
      {
        document.getElementById('eSprite').src="img/Enemydead.png"
        document.getElementById('enterCitadel').disabled=false;
      }
      else if (localStorage.getItem('area') == 2)
      {
        document.getElementById('eSprite').src="img/Enemydead.png"
        document.getElementById('enterMines').disabled=false;
        document.getElementById('enterPrison').disabled=false;
        document.getElementById('enterFactory').disabled=false;
      }
    }
  }
  while(localStorage.getItem(''))
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

  if (currentEnemyHealth < 0 && area == 1)
  {
    localStorage.setItem('enemyHealth', 0)
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('enterCitadel').disabled=false;
  }
  else if(currentEnemyHealth < 0 && area == 2)
  {
    currentEnemyHealth = 0
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('enterMines').disabled=false;
  }

  localStorage.setItem("enemyHealth", currentEnemyHealth)

  document.getElementById("enemyHealth").innerHTML = currentEnemyHealth
}

function citadelEntrance()
{
  localStorage.setItem("area", 2)
  localStorage.setItem("enemyHealth", "110")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="110"
  document.getElementById('enemyMaxHealth').innerHTML="110"
  document.getElementById('enterCitadel').disabled = true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;

}

function enterMines()
{
  localStorage.setItem("area", 3)
  localStorage.setItem("enemyHealth", "110")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="110"
  document.getElementById('enemyMaxHealth').innerHTML="110"
  document.getElementById('enterMines').disabled = true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
  document.getElementById('enterCitadel').disabled = true;
  document.getElementById('areas').innerHTML = "Inner Citadel"
}

function enterPrison()
{
  localStorage.setItem("area", 4)
  localStorage.setItem("enemyHealth", "120")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="110"
  document.getElementById('enemyMaxHealth').innerHTML="110"
  document.getElementById('enterPrison').disabled = true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;

}
function enterFactory()
{
  localStorage.setItem("area", 5)
  localStorage.setItem("enemyHealth", "110")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="110"
  document.getElementById('enemyMaxHealth').innerHTML="110"
  document.getElementById('enterMines').disabled = true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
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
