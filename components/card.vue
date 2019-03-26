<template>
 <article class="card">
   <nuxt-link v-bind:to="{ name: 'items-path', params: { path: path }}" class="wrapper">
     <img class="card_image" v-bind:src="image.fields.file.url"/>
     <h1 class="card_title">{{ title }}</h1>
   </nuxt-link>
 </article>
</template>
<script>
export default {
 props: ['title', 'path', 'image']
}
</script>
