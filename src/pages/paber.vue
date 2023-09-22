<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">PABER- JA KARTONG- PAKEND</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Paber- ja kartongpakendi mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/pappjapaberpakend.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>pappkastid- ja karbid, sh kleeplintidega pappkastidpaberkotidpakkepaberpuhtad toidu papp- ja paberpakendid</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Paber- ja kartongpakendi mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>väga määrdunud ja vettinud papist või paberist pakendajalehed, ajakirjad raamatud, kontoripabertapeetpehmepaberfooliumi või kilet sisaldav paber- ja kartongpakend, sh mahlapakidmunakarbid</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Paber- ja kartongpakendit koguvad kokku tootjavastutusorganisatsioonid koostöös kohalike omavalitsustega. Enamikes omavalitsustes on kogumisviisiks avalikud pakendikonteinerid või korraldatud jäätmeveo raames "koduukselt" kogumine vabatahtliku lisateenusena. Et teada saada, kuidas kõige mugavamalt pakendijäätmeid ära anda, pöördu oma omavalitsuse või tootjavastutusorganisatsioonide poole. Kõik tootjavastutusorganisatsioonid koguvad pakendijäätmeid kõikides omavalitsustes. Kuna pakendijäätmed kuuluvad laiendatud tootjavastutuse alla, toimub nende kokku kogumine lõpptarbijalt tasuta. Kui pakendijäätmeid kogutakse korraldatud jäätmeveo raames "koduukselt", võib pakendimahuti tühjendamiskorra eest küsida kuni 0,30 eurot.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1>Liigiti kogutud pakendijäätmete prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Eestis tegeleb kokku kogutud paber- ja kartongpakendist uute toodete valmistamisega näiteks:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Räpina paberivabrik AS<br />Werrowool OÜ</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>