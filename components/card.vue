<template>
 <article>
  <nuxt-link v-bind:to="{ name: 'items-path', params: { path: path }}" class="wrapper">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img v-bind:src="image.fields.file.url"/>
        </figure>
      </div>
      <div class="card-content">
        <h1 class="card_title">{{ title }}</h1>
      </div>
    </div>
  </nuxt-link>
 </article>
</template>
<script>
export default {
 props: ['title', 'path', 'image']
}
</script>

<style>
.card {
  box-shadow: none;
  /* border: 2px solid #343c3d; */
  background-color: #282f2f;
  border-radius: 0.4em;
}

.card .card-image img {
  border-radius: 0.4em 0.4em 0 0;
  width: 500px;
  height: 250px;
  object-fit: cover;
}

.card-content {
  color: white;
}
</style>
