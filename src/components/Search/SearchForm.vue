<template>
    <form v-on:submit.prevent="submit">
        <div class="form-row">
            <div class="col-12 col-md-8 col-lg-9">
                <input type="text" v-model="searchString"
                       class="form-control form-control-lg"
                       v-bind:class="{ 'is-invalid': errorMsg, 'mb-4': !errorMsg }"
                       placeholder="Enter what are you looking for?">
                <div v-if="errorMsg" class="invalid-feedback">{{ errorMsg }}</div>
            </div>
            <div class="col-12 col-md-4 col-lg-3 ">
                <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'SearchForm',
        props: {
            onSearch: {
                type: Function,
                required: true
            },
        },
        data() {
            return {
                searchString: '',
                errorMsg: null
            }
        },
        methods: {
            submit() {
                if (this.searchString.length === 0) {
                    this.errorMsg = 'Please provide some text'
                    return;
                }

                if (this.searchString.length < 3) {
                    this.errorMsg = 'Please type at least 3 characters'
                    return;
                }

                this.errorMsg = null
                this.onSearch(this.searchString)
            }
        }
    }
</script>