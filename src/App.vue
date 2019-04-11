<template>
  <div id="app">
    <FilePreview height="100" file_type="pdf" title="Merhaba" />
  </div>
</template>

<script>
import FilePreview from './components/FilePreview.vue'

export default {
  name: 'app',
  components: {
    FilePreview
  }
}
</script>
