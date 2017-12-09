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

  localStorage.setItem("accessOne", 0)
  localStorage.setItem("accessTwo", 0)
  localStorage.setItem("accessThree", 0)
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
    else if (localStorage.getItem('area') == 2 || localStorage.getItem('area') == 3)
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


}

function calculatePlayerHealth()
{
  var currentHealth = localStorage.getItem("playerHealth");

  currentHealth = currentHealth - enemyDamage

  if (currentHealth <= 0)
  {
    currentHealth = 0
    document.getElementById('pSprite').src="img/PR-001dead.png"
    document.getElementById('commanderText').innerHTML=" WARNING - SYSTEM ERROR - INCURSION ALERT - PRIMARY SYSTEMS DISABLED - SECONDARY SYSTEMS DISABLED - WEAPON SYSTEMS DISABLED - LIFE SUPPORT SYSTEMS DISABLED - SYSTEMS COMPROMISED - PROTOCOL 146 INITITED : SELF-DESTRUCT SEQUENCE INITIATED"
    alert("You have died, Refresh page to start again")
    document.getElementById('commanderText').style.color="red";
  }

  localStorage.setItem("playerHealth", currentHealth)

  document.getElementById("Health").innerHTML = currentHealth
}

function calculateEmemyHealth()
{
  var currentEnemyHealth = localStorage.getItem("enemyHealth");

  var playerDamageDealt = localStorage.getItem("playerDamage");

  currentEnemyHealth = currentEnemyHealth - playerDamageDealt

  if (currentEnemyHealth <= 0 && localStorage.getItem('area') == 1)
  {
    currentEnemyHealth = 0
    localStorage.setItem('enemyHealth', 0)
    document.getElementById('enemyHealth').innerHTML="0"
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('collectKeycard').disabled=false;
    document.getElementById('commanderText').innerHTML="Good job on that fight, get that KEYCARD and move onto the next area"
  }
  else if(currentEnemyHealth <= 0 && localStorage.getItem('area') == 2)
  {
    currentEnemyHealth = 0
    localStorage.setItem('enemyHealth', 0)
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('enterMines').disabled=false;
    document.getElementById('enterPrison').disabled=false;
    document.getElementById('enterFactory').disabled=false;
    document.getElementById('commanderText').innerHTML="Looks like we need to collect 3 ACCESS CARDS to reach the Power room. Lets clear the MINES, PRISON and FACTORY"

  }
  else if (currentEnemyHealth <= 0 && localStorage.getItem('area') == 3)
  {
    currentEnemyHealth = 0
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('collectAccessOne').disabled=false;
  }
  else if (currentEnemyHealth <= 0 && localStorage.getItem('area') == 4)
  {
    currentEnemyHealth = 0
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('collectAccessTwo').disabled=false;
  }
  else if (currentEnemyHealth <= 0 && localStorage.getItem('area') == 5)
  {
    currentEnemyHealth = 0
    document.getElementById('eSprite').src="img/Enemydead.png"
    document.getElementById('collectAccessThree').disabled=false;
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
  document.getElementById('areas').innerHTML = " - Inner Citadel"
  document.getElementById("commanderText").innerHTML="Another Mech, you know the drill"

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
  document.getElementById('enterPrison').disabled=true;
  document.getElementById('enterFactory').disabled=true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
  document.getElementById('areas').innerHTML = " - Mines"
}

function enterPrison()
{
  localStorage.setItem("area", 4)
  localStorage.setItem("enemyHealth", "120")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="110"
  document.getElementById('enemyMaxHealth').innerHTML="110"
  document.getElementById('enterMines').disabled = true;
  document.getElementById('enterPrison').disabled=true;
  document.getElementById('enterFactory').disabled=true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
  document.getElementById('areas').innerHTML = " - Prison"
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
  document.getElementById('enterPrison').disabled=true;
  document.getElementById('enterFactory').disabled=true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
  document.getElementById('areas').innerHTML = " - Factory"

}

function enterPowerRoom()
{
  localStorage.setItem("area", 6)
  localStorage.setItem("enemyHealth", "140")
  localStorage.setItem("playerHealth", "100")
  document.getElementById('eSprite').src="img/Enemy.png"
  document.getElementById('enemyHealth').innerHTML="140"
  document.getElementById('enemyMaxHealth').innerHTML="140"
  document.getElementById('enterMines').disabled = true;
  document.getElementById('enterPrison').disabled=true;
  document.getElementById('enterFactory').disabled=true;
  document.getElementById('enterPowerRoom').disabled=true;
  document.getElementById('Health').innerHTML="100"
  document.getElementById('attackButton').disabled=false;
  document.getElementById('areas').innerHTML = " - Power Room"
}

function backToCitadel()
{
    localStorage.setItem("area", 4)
    document.getElementById('enterMines').disabled=false;
    document.getElementById('enterPrison').disabled=false;
    document.getElementById('enterFactory').disabled=false;
    document.getElementById('backToCitadel').disabled=true;
    document.getElementById('areas').innerHTML="Citadel"


    if (localStorage.getItem('accessOne') == 1 && localStorage.getItem('accessTwo') == 1 && localStorage.getItem('accessThree') == 1)
    {
      document.getElementById('enterPower').disabled=false;
    }

}

function collectKeycard()
{
  document.getElementById('enterCitadel').disabled=false;
  document.getElementById('collectKeycard').disabled=true;
  document.getElementById('keycard').src="img/keycard.png"
}


function accessCardOne()
{
  localStorage.setItem("accessOne", 1)
  document.getElementById('backToCitadel').disabled=false;
  document.getElementById('collectAccessOne').disabled=true;
  document.getElementById('access1').src="img/accessOne.png"

}
function accessCardTwo()
{
  localStorage.setItem("accessTwo", 1)
  document.getElementById('backToCitadel').disabled=false;
  document.getElementById('collectAccessTwo').disabled=true;
  document.getElementById('access2').src="img/accessTwo.png"

}
function accessCardThree()
{
  localStorage.setItem("accessThree", 1)
  document.getElementById('backToCitadel').disabled=false;
  document.getElementById('collectAccessThree').disabled=true;
  document.getElementById('access3').src="img/accessThree.png"



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
