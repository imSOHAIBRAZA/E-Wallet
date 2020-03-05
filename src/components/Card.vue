<template>
  <div class="cardContainer cardColor">

  <div class="iconGroup">
  <img alt="Noun Wifi"  class="wifiLogo"   src="../assets/noun_wifi.png">
  <img alt="Chip"  class="chip"   src="../assets/chip.png">
  <p class="textNumber">1234 5678 9101 1123</p>
  <p class="cardNumber">CARDHOLDER NAME</p>
  <p class="cardValid">Valid thru</p>
  <p class="cardName">Christoffer Wallenberg</p>
  <p class="cardValidNumber">12/12</p>
  </div>
  <img alt="Bitcoin_logo"  class="cardLogo" src="../assets/Bitcoin_logo.png">
  
  

  
</div>
</template>

<script>
export default {
  name: 'Card',
   props: {
    title: String,
    subTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cardContainer{
    margin-left: 37%;
    position: absolute;
    width: 382px;
    height: 241px;
    left: 16px;
    top: 138px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

.cardColor{
    background: linear-gradient(237.41deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 99.07%), #FFAE34;
}

.cardLogo{
position: absolute;
left: 83.33%;
right: 10%;
top: 18.53%;
bottom: 77.16%;
}

.wifiLogo{
position: absolute;
width: 44px;
height: 44px;
left: 34px;
top: 161px;
opacity: 0.5;
transform: matrix(-1, 0, 0, 1, 0, 0);
}

.chip{
    position: absolute;
width: 50px;
height: 40px;
left: 32px;
top: 205px;
}
.iconGroup{
    position: absolute;
width: 50px;
height: 84px;
left: 0px;
top: -140px;
}

.textNumber{
    position: absolute;
width: 350px;
height: 42px;
left: 32px;
top: 258px;

font-family: PT Mono;
font-style: normal;
font-weight: normal;
font-size: 29px;
line-height: 32px;
letter-spacing: 0.03em;

color: #000000;
}

.cardNumber{
    position: absolute;
width: 251px;
height: 16px;
left: 32px;
top: 316px;

font-family: PT Mono;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 13px;
display: flex;
align-items: center;
text-transform: uppercase;

color: rgba(0, 0, 0, 0.8);
}

.cardValid{
    position: absolute;
width: 89px;
height: 16px;
left: 289px;
top: 316px;

font-family: PT Mono;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 13px;
display: flex;
align-items: center;
text-align: right;
text-transform: uppercase;

color: rgba(0, 0, 0, 0.8);

/* text effect */

text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.5), -0.5px -0.5px 0px rgba(255, 255, 255, 0.25);
}

.cardName{
    position: absolute;
width: 251px;
height: 32px;
left: 32px;
top: 330px;

font-family: PT Mono;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
text-transform: uppercase;

color: #000000;

}

.cardValidNumber{
    position: absolute;
width: 89px;
height: 32px;
left: 289px;
top: 330px;

font-family: PT Mono;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
text-align: right;
text-transform: uppercase;

color: #000000;

/* text effect */

text-shadow: 0.5px 0.5px 0px rgba(255, 255, 255, 0.5), -0.5px -0.5px 0px rgba(255, 255, 255, 0.25);
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
