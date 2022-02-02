<template>
    <div class="card" style="width: 15rem;">
        <img :src="data.i.imageUrl" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ data.l }}</h5>
            <p class="card-text">{{ data.s }}.</p>
            <router-link :to="{name:'details',params:{id:data.id}}" class="btn btn-primary">See more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style>
.card{margin:10px;transition: all .5s ease-in;box-shadow: 10px 10px 10px #ccc;}
.card:hover{transform: translatez(30px);}

@media screen and (max-width:700px) {
    .card:hover{transform: translatez(5px);}
}
</style>