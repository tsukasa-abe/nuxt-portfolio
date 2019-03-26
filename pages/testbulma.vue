<template>
   <div>
       <section class="section">
           <div class="container">
               <div class="columns is-centered ">
                   <div class="column is-one-third ">
                       <test-card v-for="item in items" :key="item.title" :val="item"></test-card>
                   </div>
                   <div class="column is-one-third">
                       <test-card v-for="item in items2" :key="item.title" :val="item"></test-card>
                   </div>
                   <div class="column is-one-third">
                       <test-card v-for="item in items3" :key="item.title" :val="item"></test-card>
                   </div>
               </div>
           </div>
       </section>
   </div>
</template>

<script>
   import TestCard from '~/components/TestCard.vue'

   export default {
       components: {
           TestCard
       },
       data: () => ({
           items: [
               { title: 'test 1', subtitle: 'Program-01' },
               { title: 'test 2', subtitle: 'Program-02' },
               { title: 'test 3', subtitle: 'Program-03' }
           ],
           items2: [
               { title: 'test 4', subtitle: 'Program-1' }
           ],
           items3: [
               { title: 'test 5', subtitle: 'Program-1' }
         　]
       })
   }
</script>
