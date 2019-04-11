import Vue from "vue";
import FilePreview from "./FilePreview.vue";

const Components = {
  FilePreview
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
