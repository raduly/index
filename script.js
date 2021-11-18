var CONFIG = {	
	
	serverName: "OG Romania",
	serverLink: "",
	volume: 0.3,
	videoVolume: 0.1,
	
	backgroundCard: [
        { bg:'img/background_card/b-1.jpg', character:'img/background_card/char1.png', loadcolor:'rgb(230,230,176)' },
        { bg:'img/background_card/b-2.jpg', character:'img/background_card/char2.png', loadcolor:'rgb(226,71,77)'},
        { bg:'img/background_card/b-3.jpg', character:'img/background_card/char3.png', loadcolor:'rgb(177,132,199)'}
    ],
	
	audioList: [
        { name: 'OG RADIO', link:'music/lil_jon_alive.mp3' },
    ],
	
	contacts: [
        {avatar: 'img/avatars/1.jpg', discord:'rich?#9827', title:'Fondator', desc:'' },
	],
	
	news: [
        { img: 'img/news/2.gif', title:'Despre Comunitate', desc:'Aceasta comunitate este una foarte prietenoasa care detine un staff matur si competent.' },
        { img: '', title:'Cum vă activați Voice Chat-ul pe Joc ?', desc:'ESC -> Settings -> Voice-Chat -> Voice-Chat Enabled: ON + Voice-Chat Volume -> La Maxim în dreapta + SFX Volume during Voice-Chat -> La Maxim în dreapta.' },
        { img: '', title:'Cum vă activați Microfonul pe Joc ?', desc:'ESC -> Settings -> Voice-Chat -> Microphone Enabled: ON -> Voice-Chat Mode: Push To Talk + Microphone Volume -> La Maxim în dreapta + Microphone Sensitivity -> La Mijloc în dreapta.' },
        { img: 'img/news/1.jpg', title:'Ce tastă trebuie să apăsați ca să vorbiți ?', desc:'Normal, după ce ați urmărit pașii de mai sus, puteți vorbii apăsând tasta N.' },
        { img: '', title:'De ce nu mi-se încarcă texturiile ?', desc:'FiveM-ul nu este foarte bine optimizat de developeri și există o șansă destul de mare ca să nu se încarce texturiile. Pentru a prevenii această situație din a se întâmpla, trebuie să schimbați anumite setări grafice din Joc. Aveți mai jos pașii:ESC -> Settings -> Graphics -> Texture Quality: Normal + Shadow Quality: High + Reflection Quality: High sau Normal (depinde de specificațiile PC-ului dumneavoastră) ' },
		{ img: '', title:'Discord', desc:'Pentru mai multe informatii intra pe discord: discord.gg/OGrp' }
    ],
	
	rules: [
        { 
			title:'1. Meta-Gaming', 
			text:[
                {t:'Meta gaming-ul reprezinta utilizarea/folosirea informatiilor OOC (Out Of Character) în scopuri sau situatii IC (In Character)'},
            ]
		},
		{ 
			title:'2. Power-Gaming', 
			text:[
                {t:'Power gaming-ul reprezinta roleplay-ul supranatural al unui jucator sau fortarea unui jucator sa ia parte într-o actiune roleplay în care nu are sanse egale la actiunea pe care doriti sa o întretineti.'},
            ]
		},
		{ 
			title:'3. Mixing', 
			text:[
                {t:'Mixing-ul reprezinta transmiterea de informatii de pe un canal (IC sau OOC) pe canalul opus (când încurci chatul OOC cu cel IC sau invers). Totodata, este interzisa specificarea actiunilor pe care le face caracterul tau pe un chat IC.'},
            ]
		},
		{ 
			title:'4. Revenge Kill', 
			text:[
                {t:'Revenge kill-ul reprezinta uciderea sau tentativa de a ucide o persoana care te-a ucis cu putin timp în urma, într-o maniera RolePlay bineînteles, doar pentru a te razbuna. În momentul în care caracterul tau moare, se presupune ca si-a pierdut memoria, iar acest lucru înseamna ca nu mai poti tine minte persoana respectiva.Se considera Revenge Kill si daca te reintorci la locatia unde ai murit.'},
            ]
		},
		{ 
			title:'5. Car Surf', 
			text:[
                {t:'Car Surf-ul este atunci când te urci pe o masina si stai pe aceasta în timp ce se afla în deplasare, chiar daca ai facut RolePlay în prealabil ca esti introdus sau ca intri în portbagaj, cu exceptia situatiilor speciale.'},
            ]
		},
		{ 
			title:'6. Provoking', 
			text:[
                {t:'Provoking-ul este atunci cand provoci o Factiune (Politist/Mafiot) sa te urmareasca fara un Motiv IC bun intemeiat pentru a face un RolePlay.'},
            ]
		}
    ]
};

var BG = {
	
	onLoadPage: function()
    {
		document.querySelectorAll('.servername').forEach((elem) => { elem.innerText = CONFIG.serverName;});
		serverLink.innerText = CONFIG.serverLink;
		musicVolumeSlider.value = CONFIG.volume;
		
		videoOne.volume = CONFIG.videoVolume;
		
		BG.onLoadContent();
		BG.effectCard();
		
		window.addEventListener('message', (e) => 
		{
			(LOAD.handlers[e.data.eventName] || function() { })(e.data);
		});
		
		window.addEventListener('mousemove', function(e) 
		{
			cursor.style.left = e.clientX + "px"; 
			cursor.style.top = e.clientY + "px";
		});
    },
	
	onLoadContent: function()
    {
		let idx = BG.getRandomInRange(0, CONFIG.backgroundCard.length - 1);
		cardCharacter.src = CONFIG.backgroundCard[idx].character;
		progressBar.style.backgroundColor = CONFIG.backgroundCard[idx].loadcolor;
		
		document.querySelectorAll('.background-img').forEach((elem) => { elem.src = CONFIG.backgroundCard[idx].bg;});
		idx = BG.getRandomInRange(0, CONFIG.audioList.length - 1);
		audioblock.src = CONFIG.audioList[idx].link;
		musicDesc.innerText = CONFIG.audioList[idx].name;

        CONFIG.news.forEach((element) => 
		{
			let img = element.img == '' ? `` : `<img class="news-img" src="${element.img}"/>`
			newsContainer.innerHTML += `<div class="warp-news-item">							
							<div class="news-item">
								${img}
								<div class="news-info">
									<div class="news-title">${element.title}</div>
									<div class="news-desc">${element.desc}</div>
								</div>
							</div>
						</div>`;
		});
				
		CONFIG.rules.forEach((element) =>
		{
			rulesContainer.innerHTML += `<div class="item-rules"><div class="rules-tittle">${element.title}</div>` + BG.resultText(element.text); +`</div>`;
		});
		
        CONFIG.contacts.forEach((element) => 
		{
			contactContainer.innerHTML += `<div class="content-item">
							<img class="contact-avatar" src="${element.avatar}"/>
							<div style="width: 20px;"></div>
							<div class="content-info">
								<div class="contact-discord">${element.discord}</div>
								<div class="contact-title">${element.title}</div>
								<div class="contact-desc">${element.desc}</div>
							</div>
						</div>`;
		});
		
		V.onChangeVolume(CONFIG.volume);
    },
	
	onClickPageMenu: function(data, page)
    {		
		document.querySelectorAll('.menu-item').forEach((elem) => {elem.classList.remove('menu-item-active');});
		data.classList.add("menu-item-active");
		document.querySelectorAll('.content-page').forEach((elem) => {elem.style.display = 'none'; });
		let p = document.getElementById(`page_${page}`);
		p.style.display = 'flex';
		
		if (VIDEO.isPlayOne == true) 
		{
			videoOne.pause();
			VIDEO.isPlayOne = false;
			V.onUnmuted();
		}
    },
	
	effectCard: function()
	{
		banner.addEventListener('mousemove', e => 
		{
			let mouseCoord = {x: e.offsetX, y: e.offsetY};
			mouseCoord.x = mouseCoord.x < 0 ? 0 : mouseCoord.x;
			mouseCoord.x = mouseCoord.x > banner.scrollWidth ? banner.scrollWidth : mouseCoord.x;
			mouseCoord.y = mouseCoord.y < 0 ? 0 : mouseCoord.y;
			mouseCoord.y = mouseCoord.y > banner.scrollHeight ? banner.scrollHeight : mouseCoord.y;

			let transformCard = "scale3d(1.08, 1.08, 1.08) perspective(700px)";
			transformCard += "rotateX(" + ((mouseCoord.y / banner.scrollHeight) * 6 - 3) + "deg)";
			transformCard += "rotateY(" + ((mouseCoord.x / banner.scrollWidth) * 8 - 4) * -1 + "deg)";
			transformCard += "translateX(" + ((mouseCoord.x / banner.scrollWidth) * 2 - 1) + "px)";
			transformCard += "translateY(" + ((mouseCoord.y / banner.scrollHeight) * 3 - 1.5) + "px)";			
			banner.style.transform = transformCard;

			let transformCardImage = "rotateX("+((mouseCoord.y/banner.scrollHeight) * 3 - 1.5) * - 1 + "deg)";
			transformCardImage += "rotateY("+((mouseCoord.x/banner.scrollWidth) * 8 - 4) * - 1 + "deg)";
			cardBackground.style.transform = transformCardImage;

			let backgroundShineLayerOpacity = (mouseCoord.y / banner.scrollHeight) * 0.05;
			let backgroundShineLayerDegree = (Math.atan2(mouseCoord.y - banner.scrollHeight / 2, mouseCoord.x - banner.scrollWidth / 2) * 180) / Math.PI - 90;
			backgroundShineLayerDegree =  backgroundShineLayerDegree < 0 ? (backgroundShineLayerDegree += 360) : backgroundShineLayerDegree;
			let backgroundShineLayer = "linear-gradient(" + backgroundShineLayerDegree+"deg, rgba(255,255,255,"+backgroundShineLayerOpacity+") 0%, rgba(255,255,255,0) 80%)";
			overlayShine.style.background = backgroundShineLayer;
		});
		
		banner.addEventListener('mouseenter', e => 
		{
			banner.classList.remove("overlay-gray");
		});
		
		banner.addEventListener('mouseleave', e => 
		{
			banner.classList.add("overlay-gray");
			banner.style.transform = 'scale3d(1, 1, 1)';
			cardBackground.style.transform = '';
			
			overlayShine.style.background = "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%)";
		});
	},
	
	resultText: function(elText)
	{
		let result = '';
        for (let i = 0; i < elText.length; i++) result += `<div class="rules-text">${elText[i].t}</div>`;
		return result;
	},
	
	getRandomInRange: function(min,max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

var VIDEO = {
	
	isPlayOne: false,
	isPlayTwo: false,
	
	onClickPlay: function(data, idx)
	{
		console.log("onClickPlay");
		
		if (idx == 0)
		{
			if(VIDEO.isPlayTwo == true)
			{
				VIDEO.isPlayTwo = false;
				videoTwo.pause();
			}
			
			if(VIDEO.isPlayOne == false) videoOne.play();
			else videoOne.pause();
			VIDEO.isPlayOne = !VIDEO.isPlayOne;
		}
		else
		{
			if(VIDEO.isPlayOne == true)
			{
				VIDEO.isPlayOne = false;
				videoOne.pause();
			}
			
			if(VIDEO.isPlayTwo == false) videoTwo.play();
			else videoTwo.pause();
			VIDEO.isPlayTwo = !VIDEO.isPlayTwo;
		}
		
		if (VIDEO.isPlayOne == true || VIDEO.isPlayTwo == true) V.onMuted();
		else V.onUnmuted();
	}
};

var V = {
	
	isMuted: false,
	
	onClickMute: function()
	{
		if (V.isMuted)V.onUnmuted();
		else V.onMuted();
	},
	
	onMuted: function()
	{
		CONFIG.volume = musicVolumeSlider.value;
		
		musicVolumeSlider.value = 0;
		audioblock.volume = 0;

		musicVolumeIcon.src = "img/icons/volume-mute.png"
		V.isMuted = true;
	},
	
	onUnmuted: function()
	{
		musicVolumeSlider.value = CONFIG.volume;
		audioblock.volume = CONFIG.volume;

		V.updateIcon();
		V.isMuted = false;
	},
	
	updateIcon: function()
	{
		if (CONFIG.volume <= 0) musicVolumeIcon.src = "img/icons/volume-mute.png";
		else if(CONFIG.volume < 0.5) musicVolumeIcon.src = "img/icons/volume-low.png";
		else musicVolumeIcon.src = "img/icons/volume-loud.png";
	},
	
	onChangeVolume: function(value)
	{
        CONFIG.volume = value;
        audioblock.volume = value;
		if(V.isMuted == true && value > 0) V.isMuted = false;
		audioblock.play(); // debug
		V.updateIcon();
	},
	
	onChangeVolumeMouseSlider: function(value)
    {
		if(event.buttons == 1) V.onChangeVolume(value);
    }
};

var LOAD = {
	
	count: 0,
	thisCount: 0,
	
	handlers: {
		
		startInitFunctionOrder(data) 
		{
			LOAD.count = data.count;
		},
		
		initFunctionInvoking(data) 
		{
			let localdata = ((data.idx / LOAD.count) * 100);
			LOAD.updateProgress(localdata);
		},
		
		startDataFileEntries(data) 
		{
			LOAD.count = data.count;
		},
		
		performMapLoadFunction(data) 
		{
			++LOAD.thisCount;
			let localdata = ((LOAD.thisCount / LOAD.count) * 100);
			LOAD.updateProgress(localdata);
		}
	},
	
	updateProgress: function(data)
	{
        progressBar.style.left = '0%';
        progressBar.style.width = data + '%';
		//console.log(data+"%");
	}
};
