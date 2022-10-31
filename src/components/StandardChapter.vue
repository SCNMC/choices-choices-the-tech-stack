
<script>
import { RouterLink, routerViewLocationKey } from 'vue-router';
export default {
    props: {
        chapterTitle: String,
    },
};
</script>

<template>

 <routerlink to="/">
<p>{{chapterTitle}}</p>
</routerlink>

</template>

<style scoped>
p {
    padding: 0.5rem 0;
}
</style>