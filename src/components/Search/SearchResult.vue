<template>
    <media-list :medias="medias"></media-list>
</template>
<script>
    import MediaList from "@/MediaList/MediaList";
    export default {
        name: 'SearchResult',
        components: {MediaList},
        props: {
            medias: {
                type: Array,
                required: true
            }
        }
    }
</script>