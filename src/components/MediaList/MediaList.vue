<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3" v-for="image in medias">
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