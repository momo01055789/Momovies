<template>
    <div>
         <div class="header">
           <div class="text text-light">
                <h1><span>Mo</span>movies</h1>
                <input @keyup.enter="search" v-model="query" type="text" placeholder="What's on your mind?">
           </div>
         </div>
        <div class="overlay"></div>
          <div class="cards container justify-content-evenly">
            <mobody v-for="(item,index) in data" :key="index" :data="data[index]"/>
          </div>
    </div>
</template>

<script>
import Mobody from './Mobody'
export default {
  components: { Mobody },
    data() {
        return {
            query:'',
            data:''
        }
    },
    methods: {
        search(e) {
            if (e.key == 'Enter' && this.query != '') {
                fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${this.query}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "b79122b34fmshdb8d3246fbb5248p15f9ddjsn3eee3e47c518"
                }
              })
              .then(res => res.json())
              .then(res => {
                  this.data = res.d
                  this.query = ''
              })
            }
        }
    },
    mounted () {
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=cinema`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key": "b79122b34fmshdb8d3246fbb5248p15f9ddjsn3eee3e47c518"
                }
              })
              .then(res => res.json())
              .then(res => {
                  this.data = res.d
              })
    },
}
</script>

<style scoped>
 .overlay{
    position: absolute; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 500px; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(45 30 30 / 50%); 
    opacity:.8;
} 
.header{
    background:url("../../valery-tenevoy-oKq3eo74YWI-unsplash.jpg");
    width:100%;
    height:500px;
    position: relative;
    background-position: center;
    background-size:cover;
    margin-bottom:50px;
}
.text{
    text-align:center;
    font-family:'IBM Plex Serif', serif;
    position:relative;
    z-index:3;
    transform:translateY(81px);
    height:400px;
}
.text img{transform: translate(-279px, 102px);}
.text input{
    padding: 5px;
    border-radius: 10px;
    outline: 1px solid #ccc;
    border: none;
    width: 40%;
    margin-top: 25px;
    color: #767676;
    font-size: 25px;
    box-shadow: 10px 10px 10px #666;
}
.text h1{font-size:100px;text-shadow:5px 5px 5px #999;margin-left:25px}
.text span{color:#e03e3e}
.cards{display:flex;flex-wrap:wrap;perspective:500px;}

@media screen and (max-width:1200px) {
    .container{flex-direction:row;}
    .text{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;
        }
    .text h1{font-size:10rem;}
    .text input{ width:80%; }
}

@media screen and (max-width:900px){
    .text h1{font-size:8.5rem;}
}

@media screen and (max-width:750px) {
    .text h1{font-size:6rem;}
    .text input{ width:80%; }
}

@media screen and (max-width:550px) {
    .text h1{font-size:5rem;}
}

@media screen and (max-width:450px) {
    .text h1{font-size:4rem;}
}

@media screen and (max-width:350px) {
    .text h1{font-size:3rem;margin:0}
}

    
</style>