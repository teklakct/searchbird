<template>
    <div>
        <header id="mainhead" class="jumbotron text-white text-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <h1 class="mb-5">Find your favourite GIFs, Images and more!</h1>
                    </div>
                    <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <search-form :onSearch="searchMedia"></search-form>
                    </div>
                </div>
            </div>
        </header>

        <section>
            <div class="container">
                <search-result :medias="images" :dataLoaded="dataLoaded" :searchTerm="searchTerm"></search-result>
            </div>
        </section>
    </div>
</template>
<script>
    import SearchResult from "./Search/SearchResult";
    import SearchForm from "./Search/SearchForm";
    import MediaDAO from "../dao/MediaDAO";

    const mediaDAO = new MediaDAO();

    export default {
        name: 'TheSearch',
        components: {SearchForm, SearchResult},
        data() {
            return {
                images: [],
                dataLoaded: false,
                searchTerm: ''
            }
        },
        methods: {
            async searchMedia(string) {
                this.images = await mediaDAO.findImages(string)
                this.searchTerm = string
                this.dataLoaded = true
            },
        }
    }
</script>