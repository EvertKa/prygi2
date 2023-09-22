<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">BIOLAGUNEVAD KÖÖGIJÄÄTMED</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Biojäätmete (biolagunevate köögijäätmete) mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/biojaatmed.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>riknenud toit ja toidujäätmedtahked riknenud puu- ja köögiviljad, nende kooredliha- ja kalajäätmed, kalaluudmuna- ja pähklikooredpabermassist munarestidmajapidamispaber, pabersalvrätidkohvipaks, paberfiltridlõikelilled, ilma potita toataimed</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Biojäätmete mahutisse ei sobi:</h1>
        </div>
        <div class="flex mt-4">
            <h1>tavalised kilekotid, toidupakendid<br />kassiliiv, tuhk, suitsukonid<br />vedelad toidujäägid, toiduõli<br />suured kondid<br />kiletatud või vahatatud pinnaga või kileaknaga paberkotid<br />küpsetuspaber<br />vanad ravimid<br />mähkmed, hügieenisidemed<br />tolmuimejakotid<br />kunstlilled, küünlad<br />lille- ja salatipotid</h1>
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
            <h1>Liigiti kogutud biojäätmete prügilasse ladestamine või põletamine Iru jäätmepõletustehases ei ole lubatud. Biojäätmetest toodetakse kompostimise teel kompostmulda või kääritamise teel biogaasi ja digestaati. Biojäätmete ringlussevõtuga tegelevad Eestis näiteks:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Tallinna Jäätmete Taaskasutuskeskus AS<br />AS Väätsa Prügila<br />Paikre OÜ</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>