<template>
  <div class="main">
    <h1>Host app Vue 3 + Webpack 5+. Remote app Vue 3 + Vite</h1>
    <div class="webpack-content">
      <Content/>
    </div>
    <div class="vite-content">
      <viteContent/>
    </div>
  </div>

</template>

<script>
import Content from "./components/Content.vue";
import viteContent from 'vite-side/Content';
export default {
  components: {
    Content,
    viteContent
  },
};
</script>
<style>
  body, html {
    background-color: #00bcd4;
  }
</style>
<style scoped>
.main {
  text-align: center;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 10px;
  padding: 10px;
}

.vite-content {
  background-color:#42b983 ;
  text-align: center;
  text-justify: distribute-center-last;
  min-height: 200px;
  padding: 20px;
}

.webpack-content {
  min-height: 200px;
  padding: 20px;
  background-color: #00bcd4;
  text-align: center;
  text-justify: distribute-center-last;
}
</style>
