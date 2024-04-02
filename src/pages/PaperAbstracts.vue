<template>
    <div>
        <h3>Science Paper Abstracts</h3>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PaperAbstracts',
    data() {
        return {
            abstracts: [],
        }
    },
    methods: {
        getAbstracts() {
            axios.get('https://iopscience.iop.org/journal/2515-7655')
                .then((response) => {
                    console.log(response.data)
                    this.abstracts = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>