Game.grade5NumberOperation=function(game){
	
};

Game.grade5NumberOperation.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}

		document.addEventListener("online", _this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			//absdsjsapi.syncTelemetryData();
		}
	},
	
	create:function(game){

		 nativeApp.screenViewStringPass("Practice_activity_list","grade4ShapeScreen");
		
		_this = this;

		this.game.input.enabled = false;

		 grade1ShapesSenseSelected = false;
		 grade2ShapesSenseSelected = false;
		 grade3ShapesSenseSelected = false;
		 grade4ShapesSenseSelected = false;
		 grade5ShapesSenseSelected = false;

		 grade1NumberSenseSelected = false;
		 grade1NumberOperationSelected = false;
		 grade1MeasurementSelected = false;

		
		 grade2NumberSenseSelected = false;
		 grade2NumberOperationSelected = false;
		 grade2MeasurementSelected = false;

		 
		 grade3NumberSenseSelected = false;
		 grade3NumberOperationSelected = false;
		 grade3MeasurementSelected = false;

		 grade4MeasurementSelected = false;
		 grade4NumberSenseSelected = false;
		 grade5NumberSenseSelected = false;

		 grade4NumberOperationSelected = false;
		 grade5NumberOperationSelected = true;


		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(-5,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            grade5NumberOperationSelected = false;
			
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);


		this.gameModeShareBtn = game.add.image(920,18,'shareIcon');
        		this.gameModeShareBtn.anchor.setTo(0.5);
        		this.gameModeShareBtn.scale.setTo(0.75);
        		this.gameModeShareBtn.inputEnabled = true;
        		this.gameModeShareBtn.input.priorityID = 1;
        		this.gameModeShareBtn.input.useHandCursor = true;
        		this.gameModeShareBtn.events.onInputDown.add(function()
        		{
        			this.clickSound = this.add.audio('ClickSound');
                	this.clickSound.play();
        			//if(appConfig.cordova && !appConfig.browser)
        			//{
        				nativeApp.ShareApp();
        			//}

        		},this);
		
		
		_this.spatialRelationshipGroup = _this.add.group();
		_this.spatialRelationshipGroup2 = _this.add.group();
		
		
		
		
		_this.spatialRelationshipTopic();
		_this.spatialRelationshipTopic2();
		

		_this.spatialRelationshipGroup.x = 0;
		_this.spatialRelationshipGroup.y = 0;

		_this.spatialRelationshipGroup2.x = 0;
		_this.spatialRelationshipGroup2.y = 250;

	
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xD957A0, 0);
		_this.graphicsBg.drawRect(0,0,960,4000);
		_this.graphicsBg.boundsPadding = 0;
		
		
		
		_this.mask = _this.add.graphics();
        _this.mask.position.x = 0;   
        _this.mask.position.y = 35;   
        _this.mask.beginFill(0, 1);   
        _this.mask.moveTo(0, 0);   
        _this.mask.lineTo(960, 0);   
        _this.mask.lineTo(960, 505);   
        _this.mask.lineTo(0, 505);   
        _this.mask.lineTo(0, 0);   
        _this.mask.endFill();   
        _this.graphicsBg.mask = _this.mask;
		
	
		_this.graphicsBg.addChild(_this.spatialRelationshipGroup);
		_this.graphicsBg.addChild(_this.spatialRelationshipGroup2);
		
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });

			_this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           _this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			_this.mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-1570)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -1570;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, _this);
					
					_this.tween.onUpdateCallback(function(){
						tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
			//	}
			});

			_this.input.onDown.add(function(){
				if(_this.tween)
				{
					if(_this.tween.isRunning)
					{
						_this.tween.stop();
						//_this.tween = null;
					}
				}
			
			},_this);
		
		_this.input.onTap.add(function(){
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(300, function(){
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			},_this);
		},_this);

		
	
		this.game.input.enabled = true;
	},
	
	
	spatialRelationshipTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.divisionTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.spatialRelationship1 = _this.add.sprite(100,120,'longdivision1');
		
		_this.bgGraphic1 = this.add.graphics(210,175);
		_this.bgGraphic1.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic1.beginFill(0x493A19, 1);
		_this.bgGraphic1.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic1.boundsPadding = 0;

		_this.spatialRelationship1Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.spatialRelationship1Txt.anchor.setTo(0.5);
		_this.spatialRelationship1Txt.align = 'center';
		
				
		_this.spatialRelationship1Txt.font = 'gradefont';
		_this.spatialRelationship1Txt.fontSize = 20;
		_this.spatialRelationship1Txt.fontWeight = 'normal';
		_this.spatialRelationship1Txt.fill = 'white';

		_this.spatialRelationship1Txt.wordWrap = true;
		_this.spatialRelationship1Txt.wordWrapWidth = 500;
		

		_this.spatialRelationship1.inputEnabled = true;
		_this.spatialRelationship1.input.useHandCursor = true;
		_this.spatialRelationship1.name = "Fractions 1.1 A";
		_this.spatialRelationship1.events.onInputDown.add(function(target){
			
			if(this.video==null)
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/newGames/longdivision1.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					//this.video.mute = true;

					/*if(window.languageSelected == "Kannada" || window.languageSelected == "Gujarati")
					{
						this.video.playbackRate = 0.8;
					}*/
					
					this.time.events.add(1500, function(){
                //distribute coin equally
				 this.a1=1;
				 this.a2=0;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(5500, function(){
                //blue coins are tens
				 this.a1=0;
				 this.a2=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(8000, function(){
                //yellow coins are ones
				 this.a2=0;
				 this.a3=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(10900, function(){
                //how many tens in each abacus
				 this.a3=0;
				 this.a4=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(14900, function(){
                //how many tens in all abacus
				 this.a4=0;
				 this.a5=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(19000, function(){
                //how many tens remaining
				 this.a5=0;
				 this.a6=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(24000, function(){
                //exchange the tens to ones
				 this.a6=0;
				 this.a7=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(28500, function(){
                //how many ones are there
				 this.a7=0;
				 this.a8=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(34500, function(){
                //distibute all the ones equally
				 this.a8=0;
				 this.a9=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(48000, function(){
                //how many ones did you distribute to each abacus
				 this.a9=0;
				 this.a10=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(53000, function(){
                //how many total ones did you distribute 
				 this.a10=0;
				 this.a11=1;
				 this.playDemoVideos1();
				 }, this);
            this.time.events.add(57000, function(){
                //how many total ones are remaining
				 this.a11=0;
				 this.a12=1;
				 this.playDemoVideos1();
				 }, this);
			this.time.events.add(1000, function(){
				this.skipDemos = this.add.sprite(113,415,'skipDemoVideos');
				document.getElementById('phaser_canvas').style.pointerEvents = "initial";
				this.skipDemos.inputEnabled = true;
				this.skipDemos.events.onInputDown.add(function(){
					//this.video.stop(false);
					this.video.play(true);
					this.video = null;
                    this.stopVoice();
					this.state.start('longdivision1');
				},this);
            },this);
			 this.video.onComplete.add(function(){
				this.video = null;
                 this.stopVoice();
					 this.state.start('longdivision1');
				},this);
            /****************************************************/
					
				}
			},_this);
			
		},_this);

		
		


		
	
		
		
		_this.spatialRelationshipGroup.add(_this.topicTxtBg);
		_this.spatialRelationshipGroup.add(_this.topicTitleText);
		_this.spatialRelationshipGroup.add(_this.topicBg);

		_this.spatialRelationshipGroup.add(_this.spatialRelationship1);
		_this.spatialRelationshipGroup.add(_this.bgGraphic1);
		_this.spatialRelationshipGroup.add(_this.spatialRelationship1Txt);

		


		
		
	},

	spatialRelationshipTopic2:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xA24098, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,250,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		
		_this.topicTitleText = this.add.text(220, 85, ' \n '+window.selctedLang.multiplicationTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'white';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xA24098, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		

		_this.spatialRelationship5 = _this.add.sprite(100,120,'longdivision5');
		//_this.fractions1_2BScreenTxt = _this.add.sprite(175,250,'pinwheel1_1A');
		//_this.fractions1_2BScreenTxt.anchor.setTo(0.5);

		_this.bgGraphic5 = this.add.graphics(210,175);
		_this.bgGraphic5.lineStyle(0, 0xFFFFFF, 0.8);
		_this.bgGraphic5.beginFill(0x493A19, 1);
		_this.bgGraphic5.drawRoundedRect(0,0,30,30,10);
		_this.bgGraphic5.boundsPadding = 0;

		_this.spatialRelationship5Txt = this.add.text(225, 192, ' \n 1 \n ');
		_this.spatialRelationship5Txt.anchor.setTo(0.5);
		_this.spatialRelationship5Txt.align = 'center';
		
				
		_this.spatialRelationship5Txt.font = 'gradefont';
		_this.spatialRelationship5Txt.fontSize = 20;
		_this.spatialRelationship5Txt.fontWeight = 'normal';
		_this.spatialRelationship5Txt.fill = 'white';

		_this.spatialRelationship5Txt.wordWrap = true;
		_this.spatialRelationship5Txt.wordWrapWidth = 500;
	

		_this.spatialRelationship5.inputEnabled = true;
		_this.spatialRelationship5.input.useHandCursor = true;
		_this.spatialRelationship5.name = "Fractions 1.1 A";
		_this.spatialRelationship5.events.onInputDown.add(function(target){
			
			{	
				this.video = this.add.video('demo7_1_1');
				
			}
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();

					_this.spatialRelationshipGroup.setAll("inputEnabled",false);
					document.getElementById('phaser_canvas').style.pointerEvents = "none";

					this.video.play(false);
					
					this.video.changeSource(window.baseUrl+"assets/newGames/longdivision5.mp4");

					
					//this.video.addToWorld(0,0,0,0,1.25,1.32);
					this.video.addToWorld();
					
					this.video.play(false);
					
					this.time.events.add(1000, function(){
                this.skipDemos = this.add.sprite(820,400,'skipDemoVideos');
                document.getElementById('phaser_canvas').style.pointerEvents = "initial";
				this.skipDemos.inputEnabled = true;
                
				if(window.languageSelected == "Tamil")
				{
					this.video.playbackRate = 0.8;
					this.Voice1();
				this.time.events.add(7000, function(){
					this.Voice2(); 
				this.time.events.add(8200, function(){
					this.Voice3(); 
				this.time.events.add(8200, function(){
					this.Voice4(); 
						 },this);
						},this);
					  },this);	
				}
				else
				{
					this.Voice1();
				this.time.events.add(7000, function(){
					this.Voice2(); 
				this.time.events.add(6000, function(){
					this.Voice3(); 
				this.time.events.add(6000, function(){
					this.Voice4(); 
						 },this);
						},this);
					  },this);	
				}
				this.skipDemos.events.onInputDown.add(function(){
                    //this.video.stop(false);
                    this.stopVoice();
                    this.video.play(true);
					this.video = null;
					this.state.start('longdivision5');
				},this);
            },this);
             this.video.onComplete.add(function(){
             this.video = null;
			this.state.start('longdivision5');
                    },this);
     
            /****************************************************/
					
				}
			},_this);
			
		},_this);


		
		_this.spatialRelationshipGroup2.add(_this.topicTxtBg);
		_this.spatialRelationshipGroup2.add(_this.topicTitleText);
		_this.spatialRelationshipGroup2.add(_this.topicBg);

		
		_this.spatialRelationshipGroup2.add(_this.spatialRelationship5);
		_this.spatialRelationshipGroup2.add(_this.bgGraphic5);
		_this.spatialRelationshipGroup2.add(_this.spatialRelationship5Txt);

	
	},


	Voice1:function(target){
        
        this.playQuestionSound = document.createElement('audio');

        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_1.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_1.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    
    Voice2:function(target){
        
        this.playQuestionSound = document.createElement('audio');

        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_2.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_2.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    Voice3:function(target){
        
        this.playQuestionSound = document.createElement('audio');

        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_3.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_3.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    
    Voice4:function(target){
        
        this.playQuestionSound = document.createElement('audio');

        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/English/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Hindi/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Kannada/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Gujarati/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Marathi/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Odiya/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Tamil/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Telugu/nolmg1.4_4.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLM/Urdu/nolmg1.4_4.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },

	playDemoVideos2:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        this.src = document.createElement('source');
		if(this.a1==1)
		{
			if(window.languageSelected == "English")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/English/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/dhdtg1.4_1.mp3");
                    }
                    else if(window.languageSelected == "Gujrati")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujrati/dhdtg1.4_1.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/dhdtg1.4_1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/dhdtg1.4_1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/dhdtg1.4_1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/dhdtg1.4_1.mp3");
                    }
                    else
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/dhdtg1.4_1.mp3");  
                    }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_1_eng.mp3");
		}
         else if(this.a2==1)
		 {
			 if(window.languageSelected == "English")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/English/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/dhdtg1.4_2.mp3");
                    }
                    else if(window.languageSelected == "Gujrati")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujrati/dhdtg1.4_2.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/dhdtg1.4_2.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/dhdtg1.4_2.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/dhdtg1.4_2.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/dhdtg1.4_2.mp3");
                    }
                    else
                    {
                        this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/dhdtg1.4_2.mp3");  
                    }
		//this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
		 }			 
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },


	playDemoVideos1:function(target){
        // console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
        
        this.src = document.createElement('source');
        if(this.a1==1)
        {
                        if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/distcoinequally.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/distcoinequally.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/distcoinequally.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/distcoinequally.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_1_eng.mp3");
        }
         else if(this.a2==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/bluecoinsareten.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/bluecoinsareten.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/bluecoinsareten.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/bluecoinsareten.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }  
        else if(this.a3==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/yellowcoinsareone.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/yellowcoinsareone.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/yellowcoinsareone.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/yellowcoinsareone.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a4==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytens.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytens.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanytens.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytens.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a5==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytotal.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytotal.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanytotal.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytotal.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a6==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyremain.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyremain.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyremain.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyremain.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a7==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/exchangeremaining.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/exchangeremaining.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/exchangeremaining.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/exchangeremaining.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a8==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyones.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyones.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyones.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyones.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
         else if(this.a9==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/distributeallones.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/distributeallones.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/distributeallones.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/distributeallones.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }  
        else if(this.a10==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyonesdisteach.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyonesdisteach.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyonesdisteach.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyonesdisteach.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a11==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanytotalonesdist.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanytotalonesdist.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanytotalonesdist.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanytotalonesdist.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }
        else if(this.a12==1)
         {
             if(window.languageSelected == "English")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/English/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Hindi/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Kannada/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Gujarathi/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Marathi")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Marathi/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Tamil")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Tamil/howmanyonesareremai.mp3");
                            }
                            else if(window.languageSelected == "Telugu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Telugu/howmanyonesareremai.mp3");
                            }
							else if(window.languageSelected == "Urdu")
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Urdu/howmanyonesareremai.mp3");
                            }
                            else
                            {
                                this.src.setAttribute("src", window.baseUrl+"questionSounds/NOLDG1_4_5/Odiya/howmanyonesareremai.mp3");
                                //this.amplify = this.amplifyMedia(this.playQuestionSound, 3);
                            }
        //this.src.setAttribute("src", window.baseUrl+"questionSounds/English/dhdtg1.4_2_eng.mp3");
         }       
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
	
	
	stopVoice:function()
	{		
		// _timer1.stop();
		if(this.playQuestionSound)
		{
			if(this.playQuestionSound.contains(this.src))
			{
				this.playQuestionSound.removeChild(this.src);
				this.src = null;
			}
			if(!this.playQuestionSound.paused)
			{
				this.playQuestionSound.pause();
				this.playQuestionSound.currentTime = 0.0;
			}
			this.playQuestionSound = null;
			this.src = null;
		}
			
		if(this.celebrationSound)
		{
			if(this.celebrationSound.isPlaying)
			{
				this.celebrationSound.stop();
				this.celebrationSound = null;
			}
		}

		if(this.amplify!=null)
		{
			this.amplify.context.close();
			this.amplify = null;
		}

	},

	firstVoice2:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/Fill_the_boxes.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/Fill_the_boxes.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },

    secondVoice2:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/Drag_the_pictures.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/Drag_the_pictures.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },


	firstVoice:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/Drag_objects.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/Drag_objects.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    secondVoice:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/How_many_objects.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/How_many_objects.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    thirdVoice:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/Represent_in_graph.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/Represent_in_graph.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
    fourthVoice:function(target){
		// console.log("QQQQQQQQQQQQQQQQQQQQQQ "+target);
        //_this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		
        if(window.languageSelected=="English")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/English/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Hindi/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Kannada/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Gujarati/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Marathi")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Marathi/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Odiya")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Odiya/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Tamil")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Tamil/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Telugu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Telugu/Which_is_most.mp3");
        }
        else if(window.languageSelected=="Urdu")
        {
            this.src = document.createElement('source');
            this.src.setAttribute("src",window.baseUrl+"questionSounds/Urdu/Which_is_most.mp3");
        }
                    
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
    },
	
	
	
	shutdown:function()
	{
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);
		
		
	}
	
};