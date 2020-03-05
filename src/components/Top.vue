<template>
  <div class="hello">
    <h1 class="heading">{{ title }}</h1>
    <p class="subHeading">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Top',
   props: {
    title: String,
    subTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.heading{
font-family: Source Sans Pro;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 100%;
/* or 35px */

align-items: center;
text-align: center;
text-transform: uppercase;
color: #222222;
}

.subHeading{
    font-family: Source Sans Pro;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
align-items: center;
text-align: center;
text-transform: uppercase;

color: rgba(34, 34, 34, 0.6);
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
