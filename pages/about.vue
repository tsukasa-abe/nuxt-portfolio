<template>
 <section class=“content”>
   <h1 class="content_title">
     About
   </h1>
   <vue-markdown>
   # 自己紹介
   マークダウン で自己紹介を書いていきます。
   - できること
       - HTML
       - CSS
       - PHP
       - Vue.js
       - Nuxt.js  
         
   - 好きなもの
       - カレー
   Web制作をしています。
   </vue-markdown>
 </section>
</template>
<style scoped>
.content {
 max-width: 800px;
 margin: 0 auto;
}
.content_title {
 font-size: 2.0rem;
 font-weight: bolder;
}
.content_date {
 font-size: 1.0rem;
 color: rgb(57, 72, 85);
 text-align: right;
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  transition: 'slide-left',
  components: {
    VueMarkdown
  }
}
</script>
