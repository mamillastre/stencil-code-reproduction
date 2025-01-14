<script setup>
import '@placid/core/loader'
import './public/style.css'

import HelloWorld from './src/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld :startCount="42" />
  </div>
</template>
