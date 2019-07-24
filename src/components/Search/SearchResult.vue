<template>
    <div>
        <media-list :medias="medias" :query="searchTerm" v-if="dataLoaded && !noResults"></media-list>
        <empty-media-list :query="searchTerm" v-if="noResults"></empty-media-list>
    </div>
</template>
<script>
    import MediaList from "@/MediaList/MediaList";
    import EmptyMediaList from "@/MediaList/EmptyMediaList";
    export default {
        name: 'SearchResult',
        components: {MediaList, EmptyMediaList},
        props: {
            medias: {
                type: Array,
                required: true
            },
            dataLoaded: {
                type: Boolean
            },
            searchTerm: {
                type: String
            }
        },
        computed: {
            noResults() {
                return this.dataLoaded && !this.medias.length
            }
        }
    }
</script>