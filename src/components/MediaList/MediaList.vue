<template>
    <div>
        <div class="col-12" v-for="image in images">
            <media-list-item :src="image"></media-list-item>
        </div>
    </div>
</template>
<script>
    import MediaListItem from "./MediaListItem";

    export default {
        name: 'MediaList',
        components: {MediaListItem},
        data() {
            return {
                images: [
                    'https://cdn.pixabay.com/photo/2019/07/22/08/59/market-4354598__340.jpg',
                    'https://cdn.pixabay.com/photo/2019/07/22/16/13/children-4355469__340.jpg',
                    'https://cdn.pixabay.com/photo/2019/06/13/05/15/elephant-4270753__340.jpg',
                ]
            }
        }
    }
</script>