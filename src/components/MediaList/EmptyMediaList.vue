<template>
    <div class="row">
        <div class="col-md-10 col-lg-8">
            <h3>
                We did not find any results for the query: "{{ query }}"
            </h3>
            <ul>
                <li>Check spelling.</li>
                <li>Try to use a simpler search.</li>
                <li><span>Are you still having problems? <a href="https://github.com/teklakct" target="_blank">Contact us</a></span></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'EmptyMediaList',
        components: {},
        props: {
            query: {
                type: String,
                required: true
            }
        }
    }
</script>