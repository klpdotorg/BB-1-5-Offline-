Game.grade2_1AScore=function(game){

};
var background4;
var replay;
var click0;
Game.grade2_1AScore.prototype={
	create:function(game){

		_this = this;
		
		this.bg = this.add.tileSprite(0,-80,this.world.width,this.world.height,'CommonBackground');
         this.bg.scale.setTo(1,1.5);          
        		
		var homeBtn = this.add.button(this.world.centerX-170,this.world.centerY,'CommonHomeBtn',function(){
			var click = this.add.audio('ClickSound');
            click.play();
			if(grade2Selected == false)
                  _this.state.start('grade1levelSelectionScreen',true,false); 
                else
                  _this.state.start('grade2levelSelectionScreen',true,false); 
		},this,1,0,2);
		homeBtn.scale.setTo(1);
		homeBtn.anchor.setTo(0.5);

		_this.shareBtn = _this.add.sprite(_this.world.centerX-56,_this.world.centerY,'shareIconScore');
		_this.shareBtn.scale.setTo(1);
		_this.shareBtn.anchor.setTo(0.5);
		_this.shareBtn.inputEnabled = true;
		_this.shareBtn.events.onInputDown.add(function(){
			//_this.shareBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            nativeApp.ShareApp();
			
			},_this);
		
		var nextBtn = this.add.button(this.world.centerX+170,this.world.centerY,'CommonNextBtn',function(){
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade2_1Blevel1');
		},this,1,0,2);
         
		nextBtn.scale.setTo(1);
        nextBtn.anchor.setTo(0.5);
		
		//var bottomLine = this.add.sprite(this.world.centerX,this.world.centerY,'bottomLine');
        //bottomLine.anchor.setTo(0.5,0.5);
        //bottomLine.y = this.world.centerY+280;
		
//		
//		scoretext = this.add.text(this.world.centerX-50, this.world.centerY, selctedLang.TotalScore+' : '+score);
//		scoretext.scale.setTo(1.5);
//		scoretext.anchor.setTo(0.5);
//		scoretext.align = 'center';
//
//		scoretext.font = 'Comic Sans MS';
//		scoretext.fontSize = 40;
//		//text.fontWeight = 'bold';
//		scoretext.fill = '#FFFFFF';
//
//		scoretext.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
//        
//                var scoretext6 = this.add.text(this.world.centerX, 200, selctedLang.End);
//
//				 scoretext6.anchor.set(0.5);
//				 scoretext6.align = 'center';
//
//				 scoretext6.font = 'Arial Black';
//				 scoretext6.fontSize = 70;
//				 scoretext6.fontWeight = 'bold';
//				 scoretext6.fill = '#FFFFFF';
//
//				 scoretext6.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
        
                
                replay = this.add.button(this.world.centerX+56,this.world.centerY,'CommonReplayBtn',null,this,0,1,2);
		        replay.scale.setTo(1);
		        replay.anchor.setTo(0.5);
                replay.inputEnabled = true;
		        replay.input.useHandCursor = true; 
                replay.events.onInputDown.add(function(){
                click0 = this.add.audio('ClickSound');
                click0.play();
                    this.state.start('grade2_1Alevel1');
                 },this);
//        
//        scoretext7 = this.add.text(this.world.centerX-10, 300, selctedLang.Replay);
//
//				 scoretext7.anchor.set(0.5);
//				 scoretext7.align = 'center';
//
//				 scoretext7.font = 'Arial Black';
//				 scoretext7.fontSize = 25;
//				 //scoretext7.fontWeight = 'bold';
//				 scoretext7.fill = '#FFFFFF';
//
//				 scoretext7.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);

		
		//localStorage.setItem('Score', JSON.stringify(score));
                   
	},

	update:function(){

	},

};