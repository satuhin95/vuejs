<template lang="">
    <div class="backdrop">
        <div class="modal">
            <h1>{{heading}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["heading", "text"],
}
</script>
<style>
    .backdrop{
        background: rgba(0,0,0,0.5);
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .modal{
        width: 400px;
        margin: 100px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
    }
</style>