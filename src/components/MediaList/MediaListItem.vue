<template>
    <img v-bind:src="image" class="img-fluid" alt="Responsive image">
</template>
<script>
    export default {
        name: 'MediaListItem',
        data() {
            return {
                image: 'https://cdn.pixabay.com/photo/2019/07/22/08/59/market-4354598__340.jpg'
            }
        }
    }
</script>