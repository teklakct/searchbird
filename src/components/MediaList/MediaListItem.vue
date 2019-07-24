<template>
    <img v-bind:src="imageSrc" class="img-fluid" alt="Responsive image">
</template>
<script>
    export default {
        name: 'MediaListItem',
        props: {
            imageSrc: {
                type: String,
                required: true
            }
        }
    }
</script>