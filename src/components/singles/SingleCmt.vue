<template>
    <tr>
        <td>{{cmt.cmtBy.username}}</td>
        <td>{{cmt.content}}</td>
        <td>{{cmt.createdAt}}</td>
        <td>DELETE</td>
    </tr>
</template>

<script>
export default {
    name: 'SingleCmt',
    props: ["cmt"]

}
</script>

<style>

</style>