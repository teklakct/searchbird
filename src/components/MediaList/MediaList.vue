<template>
    <div>
        <div class="col-12">
            <media-list-item></media-list-item>
        </div>
        <div class="col-12">
            <media-list-item></media-list-item>
        </div>
        <div class="col-12">
            <media-list-item></media-list-item>
        </div>
    </div>
</template>
<script>
    import MediaListItem from "./MediaListItem";

    export default {
        name: 'MediaList',
        components: {MediaListItem}
    }
</script>