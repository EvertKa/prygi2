<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">KASUTUSKÕLBMATU TEKSTIIL</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Kasutuskõlbmatu tekstiili mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/kasutuskolbmatudriidedjalanoud.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>Katkised, oluliselt kulunud või määrdunud rõivad, peakatted, vööd<br />Katkised, oluliselt kulunud või määrdunud jalanõud<br />katkine, oluliselt kulunud või määrdunud kodutekstiil</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kasutuskõlbmatu tekstiili mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>kasutuskõlblikud ja kvaliteetsed rõivad, jalanõud ja kodutekstiil<br />muud jäätmed</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Kasutuskõlbmatu tekstiili kokku kogumisega tegelevad kohalikud omavalitsused. Enamikes omavalitsustes on tekstiilijäätmete vastuvõtt korraldatud jäätmejaamades.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1>Liigiti kogutud tekstiilijäätmete prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Eestis puuduvad hetkel rajatised, kus toimuks kasutuskõlbmatu tarbijajärgse tekstiili ringlussevõtt. Teistes Euroopa riikides on aga tekstiilijäätmete ringlussevõtuks erinevaid rajatisi juba loodud.</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>