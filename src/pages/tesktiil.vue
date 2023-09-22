<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">KASUTUSKÕLBLIK TEKSTIIL</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Kasutuskõlbliku tekstiili mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/riidedjalanoud.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>terved, puhtad ja kuivad riided, peakatted, vööd, kotid<br />terved, puhtad ja kuivad jalanõud<br />terve, puhas ja kuiv kodutekstiil, sh kardinad, voodipesu, rätikud, kangad</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kasutuskõlbliku tekstiili mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>määrdunud, katkised ja niisked riided, jalanõud ja kodutekstiil<br />muud kodutarbed<br />muud jäätmed</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Kasutuskõlbliku tekstiili kokku kogumisega tegelevad nii omavalitsused kui ka erinevad heategevusorganisatsioonid. Kasutuskõlbliku tekstiili puhul ei ole tegemist jäätmetega, seega pole kokku kogumiseks ja hilisemaks sorteerimiseks vajalik jäätmeluba. Kasutuskõlbliku tekstiili kogumiseks on mõnedes omavalitsustes olemas eraldi tekstiilikonteinerid. Kasutuskõlblikku tekstiili võetakse vastu ka mitmetes taaskasutuspoodides.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Korduskasutus</h1>
        </div>
        <div class="flex mt-4">
            <h1>Kasutuskõlbliku tekstiili edasi müümise või korduskasutusse andmisega tegelevad mitmed heategevusorganisatsioonid, näiteks:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Humana Sorteerimiskeskus OÜ<br />MTÜ Uuskasutuskeskus<br />Sõbralt sõbrale (EEKBL-Valduste OÜ)</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>