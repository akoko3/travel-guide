class Category{
    constructor (des, l1, l2, l3, l4, l5){
        this.des = des;
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
        this.l4 = l4;
        this.l5 = l5;
    }
    locations(){
        return(`${this.des}  </br>
                 ${this.l1} </br>
                 ${this.l2} </br>
                 ${this.l3} </br>
                 ${this.l4} </br>
                 ${this.l5}`)
                }
};
let c1 = new Category('People who love discovering new landscapes, hiking, and adrenaline-filled activities.</br> Destinations: ','🏔️ New Zealand – Hiking, bungee jumping, glaciers', '🏜️ Peru (Machu Picchu) – Ancient ruins, trekking ', '🌋 Iceland – Volcanoes, Northern Lights, glacier caves ', '🐾 South Africa – Safari, wildlife exploration ', '🏞️ Canada (Banff, Rockies) – Outdoor adventures');

let c2 = new Category('For those who want to taste and experience authentic cuisine from different cultures. </br>Destinations:', '🍕 Italy – Pasta, pizza, gelato','🍣 Japan – Sushi, ramen, matcha desserts', '🌮 Mexico – Tacos, mole, street food', '🥖 France – Pastries, fine dining, wine', '🥘 Thailand – Spicy street food, Pad Thai');

let c3 = new Category('Perfect for honeymoons, wellness retreats, and extravagant getaways.</br>Destinations:', '🏝️ Maldives – Overwater villas, private islands', '🏜️ Dubai, UAE – 7-star hotels, desert resorts', '🌿 Bali, Indonesia – Yoga retreats, luxury villas', '🏖️ Hawaii, USA – Beaches, luxury resorts', '🏰 France (Provence, Côte dAzur) – Wine country, spa resorts');

let c4 = new Category('For travelers interested in history, museums, and local traditions.</br> Destinations:', '🎭 Italy (Rome, Florence, Venice) – Renaissance art, ancient ruins', '🏰 Egypt – Pyramids, ancient civilization', '🏯 Japan (Kyoto, Nara) – Temples, traditional tea culture', '🏛️ Greece (Athens, Santorini) – Mythology, ancient ruins', '🕌 Turkey (Istanbul, Cappadocia) – Ottoman history, mosques');

let c5 = new Category('Traveling to experience unique cultural festivals. </br>Destinations:','🎭 Brazil (Rio Carnival) – Biggest carnival in the world', '🏮 China (Chinese New Year, Harbin Ice Festival) – Lanterns, dragons, ice sculptures', '🕺 Spain (La Tomatina, Running of the Bulls) – Tomato fight, daring races', '🎊 India (Holi, Diwali) – Festival of colors, lights', '🌟 Germany (Oktoberfest) – Beer, Bavarian traditions');

let c6 = new Category('For sun, sand, and crystal-clear water</br>Destinations:','🌊 Maldives – Pristine white beaches', '🏖️ Hawaii, USA – Surfing, island vibes', '🏝️ Thailand (Phuket, Koh Samui) – Exotic beaches', '🏖️ Greece (Santorini, Mykonos) – Iconic blue waters', '🌅 Caribbean (Jamaica, Bahamas) – Relaxation & tropical beauty');

let c7 = new Category('For those who love skiing, snowboarding, or a cozy winter retrea </br>Destinations:', '⛷️ Switzerland (Zermatt, St. Moritz) – Luxury ski resorts', '🏔️ Canada (Whistler, Banff) – Winter sports', '❄️ Norway (Tromsø, Lofoten Islands) – Northern Lights', '🏔️ Austria (Innsbruck, Salzburg) – Snowy mountains & Christmas markets', '🌨️ Japan (Hokkaido) – Powder snow & ski resorts');

let c8 = new Category('For nature lovers who want to see animals in their natural habit Destinations:','🦓 Kenya & Tanzania (Serengeti, Maasai Mara) – Safari & wildlife', '🐨 Australia (Great Barrier Reef, Outback) – Marine life & exotic animals', '🐼 China (Chengdu) – Giant panda sanctuaries', '🦅 Costa Rica – Rainforests & eco-tourism', '🐧 Antarctica – Penguin watching & icy landscapes');

let c9 = new Category('For those who love bustling cities, nightlife, and luxury shoppin </br> Destinations:' , '🏙️ New York, USA – Broadway, shopping, skyscrapers', '🌆 London, UK – Museums, West End shows', '🏙️ Paris, France – Fashion, shopping, cafés', '🏙️ Dubai, UAE – High-end malls, futuristic skyscrapers', '🏙️ Tokyo, Japan – Anime, tech, urban experiences');

let c10 = new Category('For pilgrims and those seeking spiritual enlightenmen</br>Destinations:', '⛩️ India (Varanasi, Rishikesh, Bodh Gaya) – Hindu & Buddhist pilgrimage sites', '🕍 Israel (Jerusalem, Bethlehem) – Religious significance for Christianity, Judaism, and Islam', '🕌 Saudi Arabia (Mecca, Medina) – Islamic pilgrimage (Hajj)', '🏛️ Greece (Mount Athos, Meteora) – Monasteries, Orthodox Christianity', '🛕 Nepal (Lumbini) – Birthplace of Buddha');

let c11 = new Category('For those who seek the weird, mysterious, or out-of-this-world places <br/>Destinations:', '🌋 Easter Island, Chile – Mysterious stone statues', '🏜️ Bolivia (Salar de Uyuni) – Largest salt flat, mirror effect', '🌌 Norway & Finland – Sleeping under the Northern Lights', '🏰 Transylvania, Romania – Dracula’s Castle', '🌵 USA (Roswell, Area 51, Nevada) – UFO tourism'); 

function clearAll() {
    for (let i = 1; i <= 11; i++) {
        let element = document.getElementById(`btp${i}`);
        if (element) {
            element.innerHTML = '';
        } 
    }

    for (let i = 1; i <= 11; i++) {
        let button = document.getElementById(`btn${i}`);
        if (button) {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
        } 
    }
}


function btc1(){
    clearAll();
    document.getElementById('btn1').style.backgroundColor = '#14517B';
    document.body.style.backgroundColor = '#14517B';
    document.getElementById('btp1').style.color = '#E0F4F9';
    document.getElementById('btn1').style.color = '#E0F4F9';
    document.getElementById('btp1').innerHTML = c1.locations();
    document.getElementById('displayImage').src = 'images/adventure.jpg';
}

function btc2(){
    clearAll();
    document.getElementById('btn2').style.backgroundColor = '#E6034A';
    document.body.style.backgroundColor = '#E6034A';
    document.getElementById('btp2').innerHTML = c2.locations();
    document.getElementById('displayImage').src = 'images/FOOD.jpg';
}

function btc3(){
    clearAll();
    document.getElementById('btn3').style.backgroundColor = '#F7E7CE';
    document.body.style.backgroundColor = '#F7E7CE';
    document.getElementById('btp3').innerHTML = c3.locations();
    document.getElementById('displayImage').src = 'images/luxury.jpg';
}

function btc4(){
    clearAll();
    document.getElementById('btn4').style.backgroundColor = '#C5A253';
    document.body.style.backgroundColor = '#C5A253';
    document.getElementById('btp4').innerHTML = c4.locations();
    document.getElementById('displayImage').src = 'images/cultural.jpg';
}

function btc5(){
    clearAll();
    document.getElementById('btn5').style.backgroundColor = '#E12C2C';
    document.body.style.backgroundColor = '#E12C2C';
    document.getElementById('btp5').innerHTML = c5.locations();
    document.getElementById('displayImage').src = 'images/festival.jpg';
}

function btc6(){
    clearAll();
    document.getElementById('btn6').style.backgroundColor = '#40E0D0';
    document.body.style.backgroundColor = '#40E0D0';
    document.getElementById('btp6').innerHTML = c6.locations();
    document.getElementById('displayImage').src = 'images/beach.jpg';
}

function btc7(){
    clearAll();
    document.getElementById('btn7').style.backgroundColor = '#E0F7FA';
    document.body.style.backgroundColor = '#E0F7FA';
    document.getElementById('btp7').innerHTML = c7.locations();
    document.getElementById('displayImage').src = 'images/winter.jpg';
}

function btc8(){
    clearAll();
    document.getElementById('btn8').style.backgroundColor = '#6B8E23';
    document.body.style.backgroundColor = '#6B8E23';
    document.getElementById('btp8').innerHTML = c8.locations();
    document.getElementById('displayImage').src = 'images/wildlife.jpg';
}

function btc9(){
    clearAll();
    document.getElementById('btn9').style.backgroundColor = '#191970';
    document.body.style.backgroundColor = '#191970';
    document.getElementById('btp9').style.color = '#F8F8FF';
    document.getElementById('btn9').style.color = '#F8F8FF';
    document.getElementById('btp9').innerHTML = c9.locations();
    document.getElementById('displayImage').src = 'images/city life.jpg';
}

function btc10(){
    clearAll();
    document.getElementById('btn10').style.backgroundColor = '#D4AF37';
    document.body.style.backgroundColor = '#D4AF37';
    document.getElementById('btp10').innerHTML = c10.locations();
}

function btc11(){
    clearAll();
    document.getElementById('btn11').style.backgroundColor = '#6A0DAD';
    document.body.style.backgroundColor = '#6A0DAD';
    document.getElementById('btp11').innerHTML = c11.locations();
    document.getElementById('displayImage').src = 'images/unusual.jpg';

}
