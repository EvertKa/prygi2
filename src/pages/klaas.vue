<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">KLAASPAKEND</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Plast- ja metallpakendi ning joogikartongi mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/klaaspakend.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>karastusjookide ja alkohoolsete jookide pudelid<br/>tühjad moosi-, supi- jm purgidklaasist õlipudelid<br/>klaasist lõhnaõli- ja kosmeetikapudelid<br/>tühjad klaasist toidulisandite pudelid ja purgid</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Plast- ja metallpakendi mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>aknaklaas, lehtklaas, peegelklaas<br />lambipirnid<br />keraamika, kristall, portselan ja savi<br />kuumuskindel klaas (ahjukindlad toidunõud), kohvikannud<br />optiline klaas</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Klaaspakendi koguvad kokku tootjavastutusorganisatsioonid koostöös kohalike omavalitsustega. Enamikes omavalitsustes on kogumisviisiks avalikud pakendikonteinerid või korraldatud jäätmeveo raames "koduukselt" kogumine vabatahtliku teenusena. Et teada saada, kuidas kõige mugavamalt pakendijäätmeid ära anda, pöördu oma omavalitsuse või tootjavastutusorganisatsioonide poole. Kõik tootjavastutusorganisatsioonid koguvad pakendijäätmeid kõikides omavalitsustes. Kuna pakendijäätmed kuuluvad laiendatud tootjavastutuse alla, toimub nende kokku kogumine lõpptarbijalt tasuta. Kui pakendijäätmeid kogutakse korraldatud jäätmeveo raames "koduukselt", võib pakendimahuti tühjendamiskorra eest küsida kuni 0,30 eurot. Eestis on kolm tootjavastutusorganisatsiooni, kes korraldavad pandita pakendijäätmete kokku kogumist ja käitlemist:
                Pakendiringlus OÜ<br />MTÜ Eesti Taaskasutusorganisatsioon<br />Tootjavastutusorganisatsioon OÜ
            </h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1>Liigiti kogutud pakendijäätmete prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Eestis tegelevad kokku kogutud klaaspakendijäätmetest uute toodete valmistamisega näiteks:</h1>
        </div>
        <div class="flex mt-4">
            <h1>O-I Estonia AS<br />Green Gravels OÜ</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>