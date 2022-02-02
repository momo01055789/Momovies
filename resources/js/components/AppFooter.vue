<template>
    <div>
        <div class="footer">
            <div class="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3507/3507076.png" width="35px" height="35px" alt=""><h1>Momovies</h1>
            </div>
            <div class="me">&copy; 2022 Mohamed Elhadidy</div>
            <div class="social">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" width="35px" height="35px" alt="">
                <img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" width="35px" height="35px" alt="">
                <img src="https://cdn-icons.flaticon.com/png/512/3669/premium/3669688.png?token=exp=1643720628~hmac=aa1a3c0ce959622f771a28556cb37900" width="35px" height="35px" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.footer{
    width:100%;
    background-color:#000;
    height: 90px;
    padding:15px;
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer .logo{display:flex;justify-content:center;align-items:center;}
.footer .logo img{
    background-color:#eee;
    border-radius: 20px;
}
.footer .social img{
    background-color:#eee;
    border-radius: 20px;
    margin-top: 20px;
}
.footer h1{
    color: white;
    margin: 20px 0;
    font-family: cursive;
}
.footer .me{
    color: #eee;
    font-size: 1.5rem;
    margin-top: 20px;
}

@media screen and (max-width:700px) {
    .footer{flex-direction:column;height:auto;}
}

@media screen and (max-width:400px) {
    .footer .me{font-size:.8rem;}
}
</style>