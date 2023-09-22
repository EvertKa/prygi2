<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">VANAPABER</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Vanapaberi mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/vanapaber.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>ajalehed, ajakirjad, kataloogid, reklaamlehed<br />kilekaanteta vihikud, kaustikud<br />kontoripaber<br />papp <br />jõupaber<br />kileaknata ümbrikud<br />vanad raamatud</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Vanapaberi mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>määrdunud või vettinud paber ja papp<br />majapidamispaber<br />kasutatud pabernõud<br />kopeerpaber<br />kleepsildid, teibid<br />foolium, võipaber<br />kommipaberid, jäätisepaberid<br />tapeet, lamineeritud või kiletatud paber<br />joogikartong ehk tetrapakendid<br />munakarbid</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Vanapaberi kokku kogumist korraldab kohalik omavalitsus. Enamikes omavalitsustes kogutakse vanapaberit korraldatud jäätmeveo raames ja võetakse vastu jäätmejaamades. Mõnes omavalitsuses on olemas avalikuks kasutuseks mõeldud vanapaberi konteinerid. NB! Vanapaberit ei tohiks panna paber- ja kartongpakendi konteinerisse. Konteineril oleval kleebisel on täpsemalt kirjas, mida selle konteineriga kogutakse.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1>Liigiti kogutud vanapaberi prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Eestis tegeleb kokku kogutud vanapaberist uute toodete valmistamisega mitu ettevõtet.</h1>
        </div>
        <div class="flex mt-4">
            <h1>Räpina paberivabrik AS<br />Werrowool OÜ</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>