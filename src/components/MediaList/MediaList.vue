<template>
    <div>
        <div class="col-12 mb-3" v-for="image in medias">
            <media-list-item :image-src="image.URL()"></media-list-item>
        </div>
    </div>
</template>
<script>
    import MediaListItem from "./MediaListItem";

    export default {
        name: 'MediaList',
        components: {MediaListItem},
        props: {
            medias: {
                type: Array,
                required: true
            }
        }
    }
</script>