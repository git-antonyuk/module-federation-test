<template>
  <div>
    <div @click="click">
      Vite Content
    </div>
    <button @click="() => count++">Count: {{ count }}</button>
  </div>

</template>
<script>
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    click() {
      alert('im from Vite')
    }
  }
}
</script>
