// =====================================================================
// Travel Picks data. Add a city by copying the Taipei block below.
// Each place: cat (one category id), tags (any from that city's tag lists),
// map: M("<google place_id>") or Q("<search text>").
// =====================================================================
const M = id => "https://www.google.com/maps/place/?q=place_id:" + id;
const Q = q  => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

window.PICKS = {
  // Shared by every city. A city only shows the categories it has places in.
  categories: [
    {id:"food",   label:"Food"},
    {id:"sweet",  label:"Desserts & Tea"},
    {id:"market", label:"Night Markets"},
    {id:"sight",  label:"Sights"},
    {id:"hike",   label:"Hiking"},
    {id:"spring", label:"Hot Springs"}
  ],

  cities: [
  {
    id: "taipei",            // used in the link: .../#taipei
    name: "Taipei", zh: "台北",
    intro: "Places I recommend in Taipei. Filter by category or tag, and tap Open in Maps for directions.",
    blurbs: {
      food:   "Restaurants and stalls. Lu rou fan (braised pork rice) is the one to try everywhere.",
      sweet:  "Taro balls, shaved ice and a teahouse with a view.",
      market: "One market per night is plenty. Use the tags to see the best stalls in each.",
      sight:  "Landmarks, temples and old streets.",
      hike:   "From a 20-minute stair climb to a proper volcano hike.",
      spring: "Beitou has both a cheap local bath and a quiet resort."
    },
    tags: {
      Where: ["Beitou & Yangmingshan","Near 101","Shifen & Jiufen","Raohe","Ningxia","Linjiang","Shilin","Ximen & Wanhua","Dadaocheng"],
      What:  ["Lu Rou Fan","Must-try","Street food","Views","Sunset","Budget","Splurge","Late night"]
    },
    places: [
    {cat:"hike",   name:"Mt. Datun Trailhead", zh:"大屯山登山口", area:"Yangmingshan", tags:["Beitou & Yangmingshan"], note:"Start of the climb up the volcanic peak.", map:M("ChIJV_RQkKmxQjQROf62reT-KWI")},
    {cat:"hike",   name:"Mt. Datun Peak", zh:"大屯山主峰", area:"Yangmingshan", tags:["Beitou & Yangmingshan","Views"], note:"Wide views over Taipei and the coast on a clear day.", map:M("ChIJ8cpsFu-xQjQRsX7e0OTPChg")},
    {cat:"spring", name:"Longnice Bathhouse", zh:"瀧乃湯", area:"Beitou", tags:["Beitou & Yangmingshan","Budget"], note:"Historic public bath, local and no-frills.", map:M("ChIJEYWemESuQjQRj--Qjr_uDT8")},
    {cat:"spring", name:"Grand View Resort Beitou", zh:"北投大地酒店", area:"Beitou", tags:["Beitou & Yangmingshan","Splurge"], note:"High-end hot spring if you want private rooms and calm.", map:M("ChIJ6TCF5WmuQjQRm9DanoDx2Mc")},

    {cat:"hike",   name:"Elephant Mountain Trail", zh:"象山步道", area:"Xinyi", tags:["Near 101","Views","Sunset","Must-try"], note:"About 20 minutes of stairs to the best Taipei 101 view.", tip:"Go before sunset and stay for the lights.", map:M("ChIJmWpDVqyrQjQRygtysSJz5Ws")},
    {cat:"sight",  name:"Taipei 101", zh:"台北101", area:"Xinyi", tags:["Near 101","Views"], note:"Observatory, mall, and the city's landmark.", map:M("ChIJh8s4AuGrQjQRIw2M8SmpDIw")},
    {cat:"food",   name:"Din Tai Fung (101)", zh:"鼎泰豐 101店", area:"Xinyi", tags:["Near 101","Must-try"], note:"Xiao long bao. Long queues, but it moves.", tip:"Grab a number first, then wander the mall.", map:M("ChIJQXcl6LarQjQRGUMnQ18F0lE")},
    {cat:"food",   name:"Takemura Izakaya", zh:"竹村居酒屋", area:"Xinyi", tags:["Near 101"], note:"Tiny izakaya with a great photo spot.", map:M("ChIJdaD1zrKrQjQRHed7jVcNXKo")},

    {cat:"sight",  name:"Shifen Old Street", zh:"十分老街", area:"Pingxi", tags:["Shifen & Jiufen","Must-try"], note:"Write a wish on a sky lantern and release it by the train tracks.", map:M("ChIJ_____y9RXTQRvnNyOkDE3vY")},
    {cat:"sight",  name:"Shifen Waterfall", zh:"十分瀑布", area:"Pingxi", tags:["Shifen & Jiufen","Views"], note:"Short walk from the old street.", map:M("ChIJ8Z5my_JQXTQRSSmYoOP3EbA")},
    {cat:"sight",  name:"Jiufen Old Street", zh:"九份老街", area:"Ruifang", tags:["Shifen & Jiufen","Sunset","Street food"], note:"Lantern-lit hillside lanes, snacks all the way up.", tip:"Busy on weekends. Late afternoon into dusk is best.", map:M("ChIJcZT7-hdFXTQR0qekplqCFV8")},
    {cat:"sweet",  name:"A-MEI Tea House", zh:"阿妹茶樓", area:"Jiufen", tags:["Shifen & Jiufen","Views"], note:"The famous teahouse view, best when the lanterns are on.", map:M("ChIJsSYt4BdFXTQRquCsN8eG7BE")},
    {cat:"sweet",  name:"Ah Gan Yi Taro Balls", zh:"阿柑姨芋圓", area:"Jiufen", tags:["Shifen & Jiufen","Views"], note:"Chewy taro balls with a view over the valley.", map:M("ChIJYVuwzn1FXTQRecRlXVIRuA4")},

    {cat:"market", name:"Raohe Street Night Market", zh:"饒河街觀光夜市", area:"Songshan", tags:["Raohe"], note:"One straight lane of street food, easy to do in an hour.", map:M("ChIJg6W0DZyrQjQR9vZdgYMRoj0")},
    {cat:"sight",  name:"Ciyou Temple", zh:"松山慈祐宮", area:"Songshan", tags:["Raohe"], note:"Ornate temple right at the market entrance.", map:M("ChIJy55HbZyrQjQRgTcmZb7QnQ4")},
    {cat:"food",   name:"Fuzhou Ancestral Pepper Bun", zh:"福州世祖胡椒餅", area:"Songshan", tags:["Raohe","Street food","Must-try"], note:"Peppery pork buns baked on the wall of a clay oven.", tip:"Bite carefully, the soup inside is hot.", map:M("ChIJ5w5U9purQjQRJAjF-Pc-FfY")},

    {cat:"market", name:"Ningxia Night Market", zh:"寧夏夜市", area:"Datong", tags:["Ningxia","Must-try"], note:"Small and food-focused, the one locals recommend most.", map:Q("寧夏夜市 台北")},
    {cat:"food",   name:"Liu Yu Zi Taro Balls", zh:"劉芋仔", area:"Datong", tags:["Ningxia","Street food","Must-try"], note:"Deep-fried taro balls with salted egg yolk inside.", map:Q("劉芋仔 寧夏夜市")},
    {cat:"food",   name:"Fang Family Chicken Rice", zh:"方家雞肉飯", area:"Datong", tags:["Ningxia","Budget"], note:"Shredded chicken rice, simple and very good.", map:Q("方家雞肉飯 寧夏")},

    {cat:"market", name:"Linjiang Street Night Market", zh:"臨江街夜市（通化夜市）", area:"Da'an", tags:["Linjiang","Near 101"], note:"Local feel, close to Taipei 101. Easy after Elephant Mountain.", map:Q("臨江街觀光夜市")},
    {cat:"sweet",  name:"Yu Pin Yuan Ice-Fire Dumplings", zh:"御品元冰火湯圓", area:"Da'an", tags:["Linjiang","Near 101"], note:"Hot sesame rice balls over shaved ice.", map:M("ChIJjWjxbMurQjQRKPVrEtnfdZs")},
    {cat:"food",   name:"Liang's Chilled Lu Wei", zh:"梁記滷味", area:"Da'an", tags:["Linjiang","Street food"], note:"Cold braised duck wings, chicken necks and gizzards.", map:Q("梁記滷味 臨江街")},
    {cat:"food",   name:"Shanghai Pan-fried Buns", zh:"上海生煎包", area:"Da'an", tags:["Linjiang","Street food"], note:"Crispy-bottomed pork buns and potstickers, nothing else.", map:Q("上海生煎包 臨江街夜市")},

    {cat:"market", name:"Shilin Night Market", zh:"士林夜市", area:"Shilin", tags:["Shilin"], note:"The biggest and most famous. Touristy and crowded, but worth seeing once.", tip:"Go on a weeknight if you can.", map:Q("士林夜市")},
    {cat:"food",   name:"Hai You Herbal Pork Ribs", zh:"海友十全排骨", area:"Shilin", tags:["Shilin"], note:"Pork ribs in a dark herbal soup. Also does braised pork rice.", map:Q("海友十全排骨 士林")},
    {cat:"food",   name:"Zhong Cheng Oyster Omelette", zh:"忠誠號蚵仔煎", area:"Shilin", tags:["Shilin","Street food"], note:"Classic oyster omelette with sweet-savory sauce.", map:Q("忠誠號蚵仔煎 士林")},

    {cat:"food",   name:"Tian Tian Li", zh:"天天利美食坊", area:"Ximen", tags:["Ximen & Wanhua","Lu Rou Fan","Must-try","Budget"], note:"Classic Ximending braised pork rice stop.", tip:"Ask for a fried egg on top.", map:M("ChIJsTvfsg6pQjQRCk_3ZI36rk0")},
    {cat:"food",   name:"Jin Feng", zh:"金峰魯肉飯", area:"Zhongzheng", tags:["Lu Rou Fan","Late night","Budget"], note:"Near CKS Memorial Hall, open late.", map:M("ChIJ-6uctZ6pQjQRbOssmdGcz9k")},
    {cat:"food",   name:"Yijiazi Snack", zh:"一甲子餐飲", area:"Wanhua", tags:["Ximen & Wanhua","Lu Rou Fan"], note:"Old-school Wanhua braised pork rice shop.", map:M("ChIJT81rBaipQjQR6Jc9USFITI8")},
    {cat:"food",   name:"Wang's Broth", zh:"小王煮瓜", area:"Wanhua", tags:["Ximen & Wanhua","Lu Rou Fan"], note:"Inside Huaxi Street Night Market.", map:M("ChIJGaiHCqmpQjQReQD8Dmqjdvk")},
    {cat:"food",   name:"San Yuan Hao", zh:"三元號", area:"Datong", tags:["Dadaocheng","Lu Rou Fan"], note:"Dadaocheng institution, leaner pork style.", map:M("ChIJtcnRU2upQjQRGVSLiVLRQmk")},
    {cat:"food",   name:"Formosa Chang (Ningxia)", zh:"鬍鬚張 寧夏店", area:"Datong", tags:["Ningxia","Lu Rou Fan"], note:"The braised pork rice chain everyone knows.", map:M("ChIJm8KF3mqpQjQR2qzgxoqiSyM")},
    {cat:"food",   name:"Jin Da Braised Pork Rice", zh:"", area:"Sanchong", tags:["Lu Rou Fan"], note:"Very local and very popular across the river.", map:M("ChIJyxws_B-pQjQR-OlL3aVgbIo")}
]
  }
  ]
};
