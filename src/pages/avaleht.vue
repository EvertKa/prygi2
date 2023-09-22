<script setup>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'

</script>

<template>
    <RouterView></RouterView>
    <div class="w-full h-screen bg-[#fcfdd3] flex justify-center">
    <div class="w-4/5 h-fit m-2 bg-[#ded9ad]">
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md ">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        BIOLAGUNEVAD KÖÖGIJÄÄTMED
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        <div>
            <h1 class="font-bold">Tohib panna:</h1>
            <li>riknenud toit ja toidujäätmed</li>
            <li>muna- ja pähklikoored</li>
            <li>pabermassist munarestid</li>
            <li>liha- ja kalajäätmed</li>
            <li>riknenud puu- ja köögiviljad</li>
            <li>majapidamispaber</li>
            <br>
            <h1 class="font-bold text-red-500">ei tohi panna:</h1>
            <li>suitsukonid</li>
            <li>mähkmed</li>
            <li>vedelad toidujäägid</li>
            <li>kassiliiv</li>
            <router-link to="/bio" >Bio</router-link>
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        BIOLAGUNEVAD AIAJÄÄTMED
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        <div>
            <h1></h1>
        Biolagunevate aiajäätmete mahutisse võib panna:
  kokku riisutud lehed
  pügatud muru
  umbrohud
  ülejäänud või riknenud aedviljad
  väiksed oksad
  lõikelilled
  
  Biolagunevate aiajäätmete mahutisse ei sobi:
  taimede sidumiseks kasutatud sünteetiline nöör
  katteloor, linnuvõrk
  kilemultš
  istutuspotid
    </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        KLAASPAKEND
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Klaaspakendi mahutisse võib panna:
  karastusjookide ja alkohoolsete jookide pudelid
  tühjad moosi-, supi- jm purgid
  klaasist õlipudelid
  klaasist lõhnaõli- ja kosmeetikapudelid
  tühjad klaasist toidulisandite pudelid ja purgid
  
  Klaaspakendi mahutisse ei sobi:
  aknaklaas, lehtklaas, peegelklaas
  lambipirnid
  keraamika, kristall, portselan ja savi
  kuumuskindel klaas (ahjukindlad toidunõud), kohvikannud
  optiline klaas
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        VANAPABER
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Vanapaberi mahutisse võib panna:
  ajalehed, ajakirjad, kataloogid, reklaamlehed
  kilekaanteta vihikud, kaustikud
  kontoripaber
  papp 
  jõupaber
  kileaknata ümbrikud
  vanad raamatud
  
  Vanapaberi mahutisse ei sobi:
  määrdunud või vettinud paber ja papp
  majapidamispaber
  kasutatud pabernõud
  kopeerpaber
  kleepsildid, teibid
  foolium, võipaber
  kommipaberid, jäätisepaberid
  tapeet, lamineeritud või kiletatud paber
  joogikartong ehk tetrapakendid
  munakarbid
  
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        KASUTUSKÕLBMATU TEKSTIIL
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Kasutuskõlbmatu tekstiili mahutisse võib panna:
  Katkised, oluliselt kulunud või määrdunud rõivad, peakatted, vööd
  Katkised, oluliselt kulunud või määrdunud jalanõud
  katkine, oluliselt kulunud või määrdunud kodutekstiil
  
  Kasutuskõlbmatu tekstiili mahutisse ei sobi:
  kasutuskõlblikud ja kvaliteetsed rõivad, jalanõud ja kodutekstiil
  muud jäätmed
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        KASUTUSKÕLBLIK TEKSTIIL
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Kasutuskõlbliku tekstiili mahutisse võib panna:
  terved, puhtad ja kuivad riided, peakatted, vööd, kotid
  terved, puhtad ja kuivad jalanõud
  terve, puhas ja kuiv kodutekstiil, sh kardinad, voodipesu, rätikud, kangad
  
  Kasutuskõlbliku tekstiili mahutisse ei sobi:
  määrdunud, katkised ja niisked riided, jalanõud ja kodutekstiil
  muud kodutarbed
  muud jäätmed
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div  class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        OHTLIKUD JÄÄTMED
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Ohtlike jäätmete liigiti kogumine
  Ohtlikke jäätmeid ei või omavahel kokku panna, vaid need tuleb koguda eraldi. Peamised kodumajapidamistes tekkivad ohtlikud jäätmed on:
  vanad ravimid
  asbesti sisaldavad ehitusjäätmed (sh asbesti sisaldav eterniit)
  ohtlikke jäätmeid sisaldavad pakendid
  värvid, lahustid, liimid ja vaigud
  happed ja leelised
  fotokemikaalid
  pestitsiidid
  luminestsentslambid ja muud elavhõbedat sisaldavad jäätmed
  klorofluorosüsivesinikke sisaldavad kasutuselt kõrvaldatud seadmed
  ohtlikke aineid sisaldav õli ja rasv
  ohtlikke aineid sisaldavad pesuained
  ohtlikke aineid sisaldav puit
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        PLAST- JA METALLPAKEND
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Plast- ja metallpakendi ning joogikartongi mahutisse võib panna:
  kilekotid, pakkekile, pakkenöörid, pakketeibid
  toote ümber olnud penoplast ja vahtplasti graanulid
  kosmeetika- ja hooldustoodete ning tarbekaupade pakendid
  leiva- ja saiakotid, salatikarbid, konservikarbid, ketšupipudelid jms toidupakendid
  alumiiniumpurgid
  metallist ja plastist korgid ja kaaned
  piima-, mahla-, jogurti-, veini- jms pakendid, sh komposiitpakendid
  plastkanistrid
  
  Plast- ja metallpakendi mahutisse ei sobi:
  toodet sisaldav pakend
  küpsetuspaber
  plastist mänguasjad
  kemikaale sisaldavad pakendid
  mähkmed, hügieenisidemed
  pandimärgiga pudelid
  plastist ja kummist tooted, mis ei ole pakendid
  ehitusmaterjalid
      </DisclosurePanel>
    </Disclosure>
    </div>
    <div class="border border-black m-4 bg-[#d3e6b3] rounded-md">
    <Disclosure>
      <DisclosureButton class="py-2 w-full">
        PABER- JA KARTONGPAKED
      </DisclosureButton>
      <DisclosurePanel class="text-gray-800 p-2">
        Paber- ja kartongpakendi mahutisse võib panna:
  pappkastid- ja karbid, sh kleeplintidega pappkastid
  paberkotid
  pakkepaber
  puhtad toidu papp- ja paberpakendid
  
  Paber- ja kartongpakendi mahutisse ei sobi:
  väga määrdunud ja vettinud papist või paberist pakend
  ajalehed, ajakirjad raamatud, kontoripaber
  tapeet
  pehmepaber
  fooliumi või kilet sisaldav paber- ja kartongpakend, sh mahlapakid
  munakarbid
      </DisclosurePanel>
    </Disclosure>
    </div>
    </div>
    </div>
  </template>

