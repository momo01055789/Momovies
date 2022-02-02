<template>
    <div>
        <div v-for="item in details" :key="item.id" class="container">
            <div class="cover-img">
                <img :src="item.i.imageUrl" alt="">
                <span> {{ item.q }} </span>
            </div>
            <div class="title-description">
                <h3> {{ item.l }} </h3><span> Year of Production: {{ item.y }} </span>
                <p> <strong>Cast:</strong> {{ item.s }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            details:null
        }
    },
    mounted () {
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${this.$route.params.id}&i=${this.$route.params.id}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "b79122b34fmshdb8d3246fbb5248p15f9ddjsn3eee3e47c518"
                }
              })
              .then(res => res.json())
              .then(res => {
                  this.details = res.d
              })
    },
}
</script>

<style scoped>
.container{display: flex;margin-top:50px;min-height:80vh;}
.cover-img {border-radius:15px;display:flex;flex-direction: column;}
.cover-img img{
    width: 400px;
    padding: 7px;
    border-radius: 20px;
    background-color: #f8f9fa;
    box-shadow: 10px 10px 10px #eee;
}
.cover-img span{
    transform: translate(40px, -50px);
    background-color: #fff;
    width: 20%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 5px 5px 5px #ddd;
}
.title-description{display: flex;flex-direction: column;margin: 20px 20px;position:relative;width:700px;padding:25px;border-radius:8px;}
.title-description h3{color:#555;font-family: 'IBM Plex Serif';font-size:2rem;text-shadow: 5px 5px 5px #ccc;margin-bottom:20px;}
.title-description span{
    font-size: 20px;
    background-color: #eaeaea;
    border-radius: 20px;
    padding: 5px 13px;
    margin: 5px;
    width:40%;
    }
.title-description p{color:#555;margin-top:25px; font-size:32px;font-family: 'IBM Plex Serif';}

@media screen and (max-width:1200px) {
    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .title-description{
        background-color: #fff;
        box-shadow: 4px 4px 4px #999;
    }

}

@media screen and (max-width:800px) {
    .title-description{
        width:auto;
    }
    .title-description span{
        display: flex;
        justify-content: center;
        width:100%;
    }

}

@media screen and (max-width:800px) {
    .title-description{
        width:auto;
    }
    .title-description h3{
        font-size:1.5rem;
    }
    .title-description p{
        font-size:1.8rem;
    }
    .title-description span{
        display: flex;
        justify-content: center;
        width:100%;
    }

}

@media screen and (max-width:550px) {
    .title-description p{
        font-size:1.2rem;
    }

}

@media screen and (max-width:450px) {
    .cover-img{width:auto;}
    .cover-img img{width:100%;}
    .title-description{align-items:center;}
    .title-description h3{font-size:1.2rem}
    .title-description span{font-size:1rem;}
}

@media screen and (max-width:350px) {
    .title-description h3{
        font-size:1rem;
        font-weight:600;
    }
}
</style>