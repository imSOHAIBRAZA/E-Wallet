
<template>
  <div id="app">
    <Top title="ADD A NEW BANK CARD" subTitle="New Card"/> 
    <Card title="E-WALLET" subTitle="New Cards"/> 
    <CardForm title="SOHAIB RAZA"/>
  </div>
</template>

<script>

import Top from './components/Top.vue';
import Card from './components/Card.vue';
import CardForm from './components/CardForm.vue';

export default {
  name: 'AddCard',
  components: {
    Top,
    Card,
    CardForm
  }
    };
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
