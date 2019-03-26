<template>
   <div class="card">
       <div class="card-content">
           <h2 class="title">&ldquo;{{ val.title }}&rdquo;</h2>
           <h3 class="subtitle">{{ val.subtitle }}</h3>
       </div>
       <div class="card-footer">
     <span class="card-footer-item">
       <a href="#" class="button is-primary">
         <i class="fa fa-thumbs-o-up"></i>
       </a>
     </span>
           <span class="card-footer-item">
       <a href="#" class="button is-danger">
         <i class="fa fa-thumbs-o-down"></i>
       </a>
     </span>
           <span class="card-footer-item">
       <a href="#" class="button is-info">
         <i class="fa fa-retweet"></i>
       </a>
     </span>
       </div>
   </div>
</template>

<script>
   export default {
       props: ['val']
   }
</script>

<style scoped>
   .card {
       margin-bottom: 8px;
   }
</style>
