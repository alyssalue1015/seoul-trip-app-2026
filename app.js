const RATE_KEY = "seoulTripRate";
const DAUGHTER_KEY = "seoulTripDaughterExpenses";
const FAMILY_KEY = "seoulTripFamilyExpenses";
const DEFAULT_RATE = 0.023;
const DAUGHTER_BUDGET = 10000;

const itinerary = [
  {
    day: 1,
    date: "7/22 星期三",
    title: "初探明洞與百萬夜景",
    area: "仁川機場、明洞、南山",
    theme: "抵達、入住、明洞採買、首爾塔夜景",
    events: [
      event("04:30", "起床與機場接送", "提前預約機場接送，最晚 05:55 抵達桃園機場櫃台。", ["桃園機場"]),
      event("07:55", "CI160 TPE - ICN", "華航 07:55 起飛，11:25 抵達仁川。未填 e-arrival card 時可索取紙本入境卡。", ["仁川國際機場 第一航廈"]),
      event("13:00", "入境與 SES 通關註冊", "領行李後找 SES 註冊中心綁定指紋，回程可自動通關。", ["인천공항 SES 등록센터"]),
      event("14:00", "買氣候同行卡", "在機場 CU 或 GS25 購買 3 張氣候同行卡；AREX 直達車需另外購票。", ["인천공항 CU", "인천공항 GS25"]),
      event("16:00", "明洞商圈初探", "Hotel Midcity Myeongdong 放行李，逛新世界百貨、樂天百貨與美妝服飾。記得護照退稅與記帳。", ["Hotel Midcity Myeongdong", "신세계백화점 본점", "롯데백화점 본점"]),
      event("17:30", "晚餐：王妃家明洞店", "專人代烤韓牛或美國牛排骨。", ["왕비집 명동본점"]),
      event("19:30", "南山首爾塔", "看首爾夜景，建議吃飽後直接叫車至南山纜車搭乘處。", ["남산 케이블카", "N Seoul Tower", "롯데마트 서울역점"])
    ],
    phrases: [
      phrase("請給我三張氣候卡。", "기후동행카드 세 장 주세요.", "gi-hu-dong-haeng ka-deu se jang ju-se-yo", "Please give me three Climate Cards.", "pleez giv mee three KLY-mit kards"),
      phrase("這個有大一點的尺寸嗎？", "이거 더 큰 사이즈 있나요?", "i-geo deo keun sa-i-jeu it-na-yo", "Do you have this in a larger size?", "doo yoo hav this in uh LAR-jer size"),
      phrase("請給我退稅單。", "택스리펀 영수증 주세요.", "taek-seu-ri-peon yeong-su-jeung ju-se-yo", "Please give me a tax refund receipt.", "pleez giv mee uh tax REE-fund ri-SEET"),
      phrase("請給我們骰子牛跟炸醬麵。", "깍둑소고기랑 짜장면 주세요.", "kkak-duk so-go-gi-rang jja-jang-myeon ju-se-yo", "Please give us cubed beef and jajangmyeon.", "pleez giv us kyubd beef and ja-jang-MYUN")
    ]
  },
  {
    day: 2,
    date: "7/23 星期四",
    title: "穿越古今的韓服大片",
    area: "景福宮、安國、成均館、明洞",
    theme: "韓服、古宮、復古街區、大學巡禮",
    events: [
      event("早餐", "Luft Coffee", "早上可先在明洞附近喝咖啡吃早餐。", ["Luft Coffee Myeongdong"]),
      event("09:30", "景福宮與韓服體驗", "穿韓服可免門票，搭地鐵 3 號線至景福宮站，準備陽傘風扇。", ["경복궁", "경복궁역"]),
      event("12:30", "午餐：土俗村蔘雞湯", "首爾知名蔘雞湯，從景福宮步行約 10 分鐘。", ["토속촌 삼계탕"]),
      event("14:30", "安國站商圈與益善洞", "逛復古街道與文青咖啡廳，從土俗村搭車約 7 分鐘。", ["안국역", "익선동"]),
      event("16:30", "成均館大學巡禮", "歷史悠久的校園與明倫堂，建議 Kakao T 至正門。", ["성균관대학교 정문", "명륜당"]),
      event("晚餐", "回明洞晚餐候選", "柳家辣炒雞排、百濟蔘雞湯、Nobizib 烤肉店、明洞餃子。", ["유가네닭갈비 명동", "백제삼계탕", "노비집", "명동교자"])
    ],
    phrases: [
      phrase("請載我們到成均館大學正門。", "성균관대학교 정문으로 가주세요.", "seong-gyun-gwan dae-hak-gyo jeong-mun-eu-ro ga-ju-se-yo", "Please take us to Sungkyunkwan University main gate.", "pleez tayk us too sung-kyun-kwan yoo-ni-VER-si-tee main gayt"),
      phrase("請給我四碗蔘雞湯。", "삼계탕 네 그릇 주세요.", "sam-gye-tang ne geu-reut ju-se-yo", "Four samgyetang, please.", "for sam-gye-tang pleez"),
      phrase("請問明倫堂怎麼走？", "명륜당 가는 길을 알려주세요.", "myeong-nyun-dang ga-neun gil-eul al-lyeo-ju-se-yo", "How do I get to Myeongnyundang?", "how doo eye get too myung-nyun-dang")
    ]
  },
  {
    day: 3,
    date: "7/24 星期五",
    title: "HYBE 朝聖、漢南洞與江南星空",
    area: "龍山、漢南洞、COEX",
    theme: "追星、潮流購物、星空圖書館",
    events: [
      event("10:00", "HYBE 公司朝聖", "BTS、TXT、SVT 經紀公司大樓，地鐵至新龍山站，後巷有應援咖啡廳。", ["HYBE 용산", "신용산역"]),
      event("12:00", "漢南洞潮流購物", "Mardi Mercredi、Rockfish 等，週五避開週末排隊。", ["한남동", "Mardi Mercredi Hannam", "Rockfish Weatherwear Hannam"]),
      event("16:00", "COEX Mall 與星空圖書館", "地鐵至奉恩寺站，拍照勿停留於手扶梯出入口。", ["코엑스몰", "별마당 도서관", "봉은사역"])
    ],
    phrases: [
      phrase("這個有全新的庫存嗎？", "이거 새 상품 있나요?", "i-geo sae sang-pum it-na-yo", "Do you have a brand-new one in stock?", "doo yoo hav uh brand noo wun in stok"),
      phrase("請載我們到 COEX Mall。", "코엑스몰로 가주세요.", "ko-ek-seu-mol-lo ga-ju-se-yo", "Please take us to COEX Mall.", "pleez tayk us too koh-ex mall"),
      phrase("星空圖書館在哪裡？", "별마당 도서관이 어디인가요?", "byeol-ma-dang do-seo-gwan-i eo-di-in-ga-yo", "Where is Starfield Library?", "wair iz star-feeld LYE-brer-ee")
    ]
  },
  {
    day: 4,
    date: "7/25 星期六",
    title: "江華島斜坡滑車極速一日遊",
    area: "江華島、東大門",
    theme: "Luge、復古咖啡廳、DDP 夜景、飾品批發",
    events: [
      event("08:00", "江華島一日遊", "依 Klook 或 KKday 憑證至指定地點集合，玩斜坡滑車與朝陽紡織咖啡廳。", ["강화씨사이드리조트 루지", "조양방직"]),
      event("12:00", "江華島特色午餐", "依一日遊方案決定當地美食。", ["강화도 맛집"]),
      event("18:30", "東大門 DDP 與不夜城購物", "回程可選東大門下車，看 DDP 夜景與 nyu nyu 飾品批發。晚餐可選 Shake Shack 或橋村。", ["동대문디자인플라자", "nyu nyu 동대문", "Shake Shack Doota", "교촌치킨 동대문"])
    ],
    phrases: [
      phrase("請問集合地點在哪裡？", "미팅 장소가 어디인가요?", "mi-ting jang-so-ga eo-di-in-ga-yo", "Where is the meeting point?", "wair iz thuh MEE-ting point"),
      phrase("請算我便宜一點！", "조금 깎아주세요.", "jo-geum kkak-ka-ju-se-yo", "Please give me a small discount.", "pleez giv mee uh small DIS-count"),
      phrase("請問要等多久？", "얼마나 기다려야 하나요?", "eol-ma-na gi-da-ryeo-ya ha-na-yo", "How long do we need to wait?", "how long doo wee need too wayt")
    ]
  },
  {
    day: 5,
    date: "7/26 星期日",
    title: "大學巡禮、聖水洞與弘大",
    area: "聖水、梨大、新村、弘大",
    theme: "潮流快閃、女兒指定午餐、大學商圈、兒子主場",
    events: [
      event("10:00", "首爾林與聖水洞商圈", "舊工廠改造潮流區，快閃店若需韓國門號可請店員協助。", ["서울숲", "성수동", "성수역"]),
      event("12:00", "午餐：朝朝刀削麵聖水店", "女兒指定蛤蜊刀削麵與海鮮煎餅，抵達聖水先抽號碼牌。", ["조조칼국수 성수"]),
      event("14:00", "梨花女子大學", "最美校園與 ECC 下沉式建築，周邊有服飾小店、唱片行、雪冰與孔陵一隻雞。", ["이화여자대학교", "이대역", "M2U Record 신촌", "공릉닭한마리 신촌"]),
      event("15:50", "弘大商圈與 AK Plaza", "兒子的主場，5F Animate 先衝。也可逛 Ader Error、Musinsa、望遠市場。", ["홍대입구역", "AK PLAZA 홍대", "Animate Hongdae", "ADERERROR Hongdae", "Musinsa Standard Hongdae", "망원시장"]),
      event("17:30", "Super Coffee", "西橋洞 486 2F，無草莓可點西瓜果汁。", ["Super Coffee 서교동 486"]),
      event("19:30", "晚餐：申美京辣炒雞排", "巨大鐵板翻炒雞肉與起司，無豬肉；也可選橋村炸雞。", ["신미경 홍대닭갈비", "교촌치킨 홍대"])
    ],
    phrases: [
      phrase("請問 ECC 建築怎麼走？", "ECC 건물이 어디에 있나요?", "i-si-si geon-mul-i eo-di-e it-na-yo", "Where is the ECC building?", "wair iz thuh ee-see-see BIL-ding"),
      phrase("請問怎麼抽號碼牌候位？", "웨이팅 등록 어떻게 하나요?", "wei-ting deung-rok eo-tteo-ke ha-na-yo", "How do I register for the waitlist?", "how doo eye REH-ji-ster for thuh WAYT-list"),
      phrase("請給我四杯西瓜汁。", "수박 주스 네 잔 주세요.", "su-bak ju-seu ne jan ju-se-yo", "Four watermelon juices, please.", "for WAW-ter-mel-un JOO-siz pleez")
    ]
  },
  {
    day: 6,
    date: "7/27 星期一",
    title: "樂天世界與高空宮廷饗宴",
    area: "蠶室、樂天世界塔",
    theme: "遊樂園、Seoul Sky、韓定食、超市採買",
    events: [
      event("10:00", "樂天世界", "適合玩室外魔幻島刺激設施，地鐵直達蠶室站，遇雨先玩室內。", ["롯데월드", "잠실역", "Magic Island Lotte World"]),
      event("16:30", "樂天世界塔 Seoul Sky", "韓國第一高樓，建議 18:30 上塔收集日夜景。", ["서울스카이", "롯데월드타워"]),
      event("18:30", "晚餐：大長今韓定食", "Lotte World Mall 5 樓，精緻小菜與烤牛排骨。", ["대장금 롯데월드몰"]),
      event("20:00", "樂天超市大採買", "伴手禮集中購買，戰利品多建議叫 Kakao T 大型計程車回飯店。", ["롯데마트 제타플렉스 서울역점", "Hotel Midcity Myeongdong"])
    ],
    phrases: [
      phrase("室外魔幻島怎麼走？", "매직아일랜드 가는 길을 알려주세요.", "mae-jik a-il-laen-deu ga-neun gil-eul al-lyeo-ju-se-yo", "How do I get to Magic Island?", "how doo eye get too MA-jik EYE-land"),
      phrase("請載我們到明洞城中區飯店。", "호텔 미드시티 명동으로 가주세요.", "ho-tel mi-deu-si-ti myeong-dong-eu-ro ga-ju-se-yo", "Please take us to Hotel Midcity Myeongdong.", "pleez tayk us too ho-TEL mid-si-tee myung-dong"),
      phrase("請問有泡菜嗎？在哪裡？", "김치 어디에 있나요?", "kim-chi eo-di-e it-na-yo", "Where is the kimchi?", "wair iz thuh KIM-chee")
    ]
  },
  {
    day: 7,
    date: "7/28 星期二",
    title: "汝矣島百貨冷氣採買與滿載而歸",
    area: "汝矣島、明洞、仁川機場",
    theme: "The Hyundai Seoul、室內美食、最後採買、退稅、回台",
    events: [
      event("09:30", "The Hyundai Seoul 汝矣島現代百貨", "改成冷氣室內行程，適合最後一天避暑、拍照、吃早午餐與慢慢採買。", ["더현대 서울", "The Hyundai Seoul"]),
      event("10:45", "百貨美食與最後採買", "可逛 B1 美食街、甜點咖啡、服飾與美妝。女兒購物請同步記到預算帳。", ["더현대서울 지하1층", "The Hyundai Seoul food court"]),
      event("11:45", "IFC Mall 或百貨咖啡休息", "若 The Hyundai Seoul 人潮太多，可轉往相連的 IFC Mall 休息、用餐或補買伴手禮。", ["IFC Mall Seoul", "여의도 IFC몰"]),
      event("14:00", "回飯店拿行李", "回 Hotel Midcity Myeongdong 整理戰利品與棉被。", ["Hotel Midcity Myeongdong"]),
      event("15:30", "前往仁川機場", "最遲 16:00 必須從市區出發；先找機台退稅，勿帶肉品回台。", ["인천공항 제1터미널"]),
      event("20:05", "CI161 ICN - TPE", "20:05 起飛，21:40 抵達桃園。", ["인천공항 제1터미널"])
    ],
    phrases: [
      phrase("請問 The Hyundai Seoul 怎麼走？", "더현대 서울 가는 길을 알려주세요.", "deo-hyeon-dae seo-ul ga-neun gil-eul al-lyeo-ju-se-yo", "How do I get to The Hyundai Seoul?", "how doo eye get too thuh hyun-day soh-uhl"),
      phrase("請問美食街在哪裡？", "푸드코트가 어디에 있나요?", "pu-deu-ko-teu-ga eo-di-e it-na-yo", "Where is the food court?", "wair iz thuh food kort"),
      phrase("這個可以退稅嗎？", "이거 택스리펀 되나요?", "i-geo taek-seu-ri-peon doe-na-yo", "Can I get a tax refund for this?", "kan eye get uh tax REE-fund for this"),
      phrase("請載我們到仁川機場第一航廈。", "인천공항 제1터미널로 가주세요.", "in-cheon-gong-hang je-il teo-mi-neol-lo ga-ju-se-yo", "Please take us to Incheon Airport Terminal 1.", "pleez tayk us too IN-chun AIR-port TER-mi-nal wun")
    ]
  }
];

const prepCards = [
  ["入境", "事先申請 e-arrival card，加速通關；若沒填，機上索取紙本入境卡。"],
  ["資金", "建議準備 ₩30 萬現金，加上台幣海外刷卡額度約 5 萬。"],
  ["行李", "箱中箱加提前加購行李最方便，最後一天集中採買更省力。"],
  ["保險", "旅平險與不便險一起保，航班延誤與行李問題比較安心。"],
  ["必裝 App", "Papago 翻譯、Naver Map 導航、Kakao T 叫車先下載好。"],
  ["交通", "氣候同行卡適合首爾市區；AREX 機場快線直達車需另外購票。"],
  ["禮儀", "地鐵靠右站、不講電話、不飲食；公車前門上車後門下車，上下車都刷卡。"],
  ["購物避雷", "明洞常較貴，Olive Young 先註冊 APP 拿折扣，超大組合包先想清楚。"],
  ["計程車", "一般車多為銀橘色，黑色模範車較貴；深夜與機場優先用 Kakao T。"]
];

const foodAreas = [
  ["飯店早餐與明洞", ["河東館 明洞本店", "Egg Drop 明洞店", "武橋洞乾明太魚湯", "本粥 明洞店", "Isaac Toast Myeongdong", "明洞餃子", "香港飯店0410 明洞"]],
  ["景福宮 / 安國", ["土俗村蔘雞湯", "江南麵屋 仁寺洞店"]],
  ["聖水 / 弘大", ["祖傳三代馬鈴薯排骨湯", "朝朝刀削麵 聖水店", "申美京辣炒雞排 弘大店", "橋村炸雞 弘大", "BHC 치킨 홍대"]],
  ["汝矣島 / The Hyundai Seoul", ["The Hyundai Seoul B1 美食街", "IFC Mall Seoul 餐廳街", "The Hyundai Seoul 咖啡甜點"]]
];

function event(time, title, note, places) {
  return { time, title, note, places };
}

function phrase(zh, ko, roman, en, enPron) {
  return { zh, ko, roman, en, enPron };
}

function naverUrl(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function formatTwd(value) {
  return `NT$${Math.round(value || 0).toLocaleString("zh-TW")}`;
}

function formatRaw(value, currency) {
  const prefix = currency === "KRW" ? "₩" : "NT$";
  return `${prefix}${Number(value || 0).toLocaleString("zh-TW")}`;
}

function toTwd(amount, currency) {
  const rate = Number(localStorage.getItem(RATE_KEY) || DEFAULT_RATE);
  return currency === "KRW" ? Number(amount) * rate : Number(amount);
}

function readList(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function addExpense(key, data) {
  const list = readList(key);
  list.unshift({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...data });
  writeList(key, list);
}

function removeExpense(key, id) {
  writeList(key, readList(key).filter((item) => item.id !== id));
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab, .view").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.view).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderDayOptions() {
  const options = itinerary.map((day) => `<option value="${day.day}">Day ${day.day} ${day.date}</option>`).join("");
  document.getElementById("daySelect").innerHTML = options;
  document.getElementById("phraseDaySelect").innerHTML = options;
  document.getElementById("familyDay").innerHTML = options;
}

function renderDay(dayNumber = 1) {
  const day = itinerary.find((item) => item.day === Number(dayNumber));
  document.getElementById("daySummary").innerHTML = [
    ["日期", day.date],
    ["主題", day.title],
    ["區域", day.area]
  ].map(([label, value]) => `<article class="summary-card"><span>${label}</span><strong>${value}</strong></article>`).join("");

  document.getElementById("scheduleList").innerHTML = day.events.map((item) => `
    <article class="event">
      <div class="time">${item.time}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.note}</p>
        <div class="tag-row">
          ${item.places.map((place) => `<a class="pill place" href="${naverUrl(place)}" target="_blank" rel="noopener">導航 ${place}</a>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderPhrases(dayNumber = 1) {
  const day = itinerary.find((item) => item.day === Number(dayNumber));
  document.getElementById("phraseList").innerHTML = day.phrases.map((item) => `
    <article class="phrase-card">
      <h3>${item.zh}</h3>
      <p class="phrase-main">${item.ko}</p>
      <div class="phrase-meta">
        <span>韓語發音：${item.roman}</span>
        <span>英文：${item.en}</span>
        <span>英文發音：${item.enPron}</span>
      </div>
      <div class="speak-row">
        <button class="speak-btn" data-speak="${escapeAttr(item.ko)}" data-lang="ko-KR" type="button">播放韓語</button>
        <button class="speak-btn secondary" data-speak="${escapeAttr(item.en)}" data-lang="en-US" type="button">播放英文</button>
      </div>
    </article>
  `).join("");
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderPrep() {
  document.getElementById("prepList").innerHTML = prepCards.map(([title, body]) => `
    <article class="info-card"><h3>${title}</h3><p>${body}</p></article>
  `).join("");

  document.getElementById("foodList").innerHTML = foodAreas.map(([area, places]) => `
    <div class="food-area">
      <strong>${area}</strong>
      ${places.map((place) => `<a href="${naverUrl(place)}" target="_blank" rel="noopener">${place}</a>`).join("")}
    </div>
  `).join("");
}

function renderExpenses() {
  const daughter = readList(DAUGHTER_KEY);
  const family = readList(FAMILY_KEY);
  const daughterSpent = daughter.reduce((sum, item) => sum + toTwd(item.amount, item.currency), 0);
  const familySpent = family.reduce((sum, item) => sum + toTwd(item.amount, item.currency), 0);
  const percent = Math.min(100, (daughterSpent / DAUGHTER_BUDGET) * 100);

  document.getElementById("daughterSpent").textContent = formatTwd(daughterSpent);
  document.getElementById("daughterLeft").textContent = daughterSpent <= DAUGHTER_BUDGET
    ? `剩餘 ${formatTwd(DAUGHTER_BUDGET - daughterSpent)}`
    : `超支 ${formatTwd(daughterSpent - DAUGHTER_BUDGET)}`;
  document.getElementById("daughterMeter").style.width = `${percent}%`;
  document.getElementById("familyTotal").textContent = formatTwd(familySpent);

  renderExpenseList("daughterList", DAUGHTER_KEY, daughter);
  renderExpenseList("familyList", FAMILY_KEY, family);
}

function renderExpenseList(targetId, key, list) {
  const target = document.getElementById(targetId);
  if (!list.length) {
    target.innerHTML = document.getElementById("emptyState").innerHTML;
    return;
  }

  target.innerHTML = list.map((item) => `
    <article class="expense-item">
      <div>
        <h3>${item.item}</h3>
        <p>${item.category}${item.day ? ` · Day ${item.day}` : ""} · ${formatRaw(item.amount, item.currency)} · 約 ${formatTwd(toTwd(item.amount, item.currency))}</p>
      </div>
      <button class="delete-btn" data-key="${key}" data-id="${item.id}" aria-label="刪除 ${item.item}">刪</button>
    </article>
  `).join("");
}

function bindForms() {
  document.getElementById("daughterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    addExpense(DAUGHTER_KEY, data);
    event.currentTarget.reset();
    renderExpenses();
  });

  document.getElementById("familyForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    addExpense(FAMILY_KEY, data);
    event.currentTarget.reset();
    renderExpenses();
  });

  document.body.addEventListener("click", (event) => {
    const speak = event.target.closest("[data-speak]");
    if (speak) {
      speakText(speak.dataset.speak, speak.dataset.lang);
      return;
    }

    const button = event.target.closest(".delete-btn");
    if (button) {
      removeExpense(button.dataset.key, button.dataset.id);
      renderExpenses();
    }

    const reset = event.target.closest("[data-reset]");
    if (reset && confirm("確定要清空這本帳嗎？")) {
      localStorage.removeItem(reset.dataset.reset === "daughter" ? DAUGHTER_KEY : FAMILY_KEY);
      renderExpenses();
    }
  });

  document.getElementById("daySelect").addEventListener("change", (event) => renderDay(event.target.value));
  document.getElementById("phraseDaySelect").addEventListener("change", (event) => renderPhrases(event.target.value));

  const rateInput = document.getElementById("rateInput");
  rateInput.value = localStorage.getItem(RATE_KEY) || DEFAULT_RATE;
  updateRatePreview();
  rateInput.addEventListener("input", () => {
    localStorage.setItem(RATE_KEY, rateInput.value || DEFAULT_RATE);
    updateRatePreview();
    renderExpenses();
  });
}

function speakText(text, lang) {
  if (!("speechSynthesis" in window)) {
    alert("這台手機瀏覽器不支援直接播放發音，請改用 Safari 或 Chrome。");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = lang === "ko-KR" ? 0.82 : 0.9;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const matchingVoice = voices.find((voice) => voice.lang === lang) ||
    voices.find((voice) => voice.lang && voice.lang.startsWith(lang.slice(0, 2)));
  if (matchingVoice) utterance.voice = matchingVoice;

  window.speechSynthesis.speak(utterance);
}

function updateRatePreview() {
  const rate = Number(document.getElementById("rateInput").value || DEFAULT_RATE);
  document.getElementById("ratePreview").textContent = Math.round(10000 * rate).toLocaleString("zh-TW");
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

document.getElementById("hotelNav").href = naverUrl("Hotel Midcity Myeongdong");
renderTabs();
renderDayOptions();
renderDay(1);
renderPhrases(1);
renderPrep();
bindForms();
renderExpenses();
registerServiceWorker();
