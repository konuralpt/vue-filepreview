<template>
  <div class="container" :style="container_style" ref="container">
    <div class="image-container">
      <img class="image" :src="getBase64"/>
    </div>
    <div class="title-container">
      <span class="title">{{this.title}}</span>
    </div>
  </div>
</template>

<script>
// import * as icons from '!raw-loader!../assets/pdf.txt';

export default {
  name: 'FilePreview',
  props: {
    file_type: String,
    height: String,
    title: String,
    background_color: {type: String , default: "white"}
  },
  computed: {
    container_style () {
      return 'width: ' + this.height + 'px;height: '+this.height+'px;' + "background-color:"+this.background_color;
    },
    getBase64 () {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + this.file_type + ".png")
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  border: 1px solid #E5E5E5;
  position: relative;
}
.image-container {
    height: 70%;
    width: 100%;
    text-align: center;
    margin-top: 7%;
}
.image {
    vertical-align: center;
    height: 100%;
}
.title-container {
  width: 100%;
  text-align: center; /* optional */
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #F5F5F5;
  border-top: 1px solid #E5E5E5;
  position: absolute;
  bottom: 0;

}
.title {
   font-family: "Trebuchet MS", Helvetica, sans-serif;
   font-size: 13px;
}
</style>
