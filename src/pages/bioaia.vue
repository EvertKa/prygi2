<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">BIOLAGUNEVAD AIAJÄÄTMED</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Biolagunevate aiajäätmete mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/biolagunevadaiajaatmed.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>kokku riisutud lehed<br />pügatud muru<br />umbrohud<br />ülejäänud või riknenud aedviljad<br />väiksed oksad<br />lõikelilled</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Biolagunevate aiajäätmete mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>taimede sidumiseks kasutatud sünteetiline nöör<br />katteloor, linnuvõrk<br />kilemultš<br />istutuspotid</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Biolagunevate aiajäätmete kokku kogumist korraldab kohalik omavalitsus. Biojäätmed tuleb liigiti koguda kõikidel kinnistutel ja panna samal kinnistul asuvasse kompostikasti või biojäätmete mahutisse. Osades omavalitsustes kogutakse biolagunevaid aiajäätmeid ja köögijäätmeid koos, st mõlemad võib panna samasse mahutisse. Osades omavalitsustes kogutakse aiajäätmeid eraldi kottidesse. Täpsem info on leitav omavalitsuse veebilehelt.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1>Liigiti kogutud biolagunevate aiajäätmete prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Biojäätmetest toodetakse kompostimise teel kompostmulda. Biojäätmete ringlussevõtuga tegelevad Eestis näiteks:</h1>
        </div>
        <div class="flex mt-4">
            <h1>EKT Ecobio OÜ<br />Tallinna Jäätmete Taaskasutuskeskus AS<br />AS Väätsa Prügila<br />Paikre OÜ</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>