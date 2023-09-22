<script setup>
</script>

<template>
    <RouterView></RouterView>
    
    <div class="flex flex-col w-screen h-fit bg-[#cad4c5] p-4">
        <router-link to="/">Avaleht</router-link>
        <div class="w-screen text-center mt-8">
            <h1 class="text-xl font-bold">OHTLIKUD JÄÄTMED</h1>
        </div>

        <div class="flex flex-row mt-8">
            <h1 class="w-3/4 font-bold">Plast- ja metallpakendi ning joogikartongi mahutisse võib panna:</h1>
            <img class="w-1/4 ml-2 aspect-auto" src="images/ohtlikudjaatmed.png" alt="">
        </div>
        <div class="flex mt-4">
            <h1>Ohtlikke jäätmeid ei või omavahel kokku panna, vaid need tuleb koguda eraldi. Peamised kodumajapidamistes tekkivad ohtlikud jäätmed on:<br />vanad ravimid<br />asbesti sisaldavad ehitusjäätmed (sh asbesti sisaldav eterniit)<br />ohtlikke jäätmeid sisaldavad pakendid<br />värvid, lahustid, liimid ja vaigud<br />happed ja leelised<br />fotokemikaalid<br />pestitsiidid<br />luminestsentslambid ja muud elavhõbedat sisaldavad jäätmed<br />klorofluorosüsivesinikke sisaldavad kasutuselt kõrvaldatud seadmed<br />ohtlikke aineid sisaldav õli ja rasv<br />ohtlikke aineid sisaldavad pesuained<br />ohtlikke aineid sisaldav puit</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Kokku kogumine:</h1>
        </div>
        <div class="flex mt-4">
            <h1>Ohtlike jäätmete kokku kogumist korraldavad kohalikud omavalitsused. Enamasti võetakse ohtlikke jäätmeid vastu jäätmejaamades. Aeg-ajalt korraldatakse elanikele ohtlike jäätmete kogumisringe. Vanu ravimeid võetakse vastu apteekides.</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Edasine käitlemine</h1>
        </div>
        <div class="flex mt-4">
            <h1>Ohtlike jäätmete käitlemisega tegelevad näiteks:<br />AS Epler & Lorenz (ohtlike jäätmete põletamine)<br />Vaivara ohtlike jäätmete käitluskeskus (ohtlike jäätmete ladestamine)</h1>
        </div>
        <div class="flex font-bold w-3/4 mt-8">
            <h1>Ringlussevõtt</h1>
        </div>
        <div class="flex mt-4">
            <h1 class="mr-2 font-bold">Leia lähim jäätmekogumisjaam:</h1><a class="font-bold" href="https://kuhuviia.ee/">kuhuviia.ee</a>
        </div>
        
    </div>
</template>