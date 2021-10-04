(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"EXERCICIO MUNDIAL_atlas_", frames: [[0,3425,143,124],[0,0,1196,1595],[0,2351,712,770],[0,3123,970,300],[1198,0,210,96],[0,1597,1408,752]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.artista = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.azeite = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.churrasco = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confete = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frase = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.queijo = function() {
	this.spriteSheet = ss["EXERCICIO MUNDIAL_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.confete();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,728,225.2), null);


(lib.Interpolação11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.churrasco();
	this.instance.parent = this;
	this.instance.setTransform(-41.6,-45,0.117,0.117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-45,83.2,90);


(lib.Interpolação10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.churrasco();
	this.instance.parent = this;
	this.instance.setTransform(-41.6,-45,0.117,0.117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-45,83.2,90);


(lib.Interpolação9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.azeite();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-36.6,0.046,0.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-36.6,55,73.4);


(lib.Interpolação8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.azeite();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-36.7,0.046,0.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-36.7,55,73.4);


(lib.Interpolação7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.queijo();
	this.instance.parent = this;
	this.instance.setTransform(-74.9,-40,0.106,0.106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-40,149.8,80);


(lib.Interpolação6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.queijo();
	this.instance.parent = this;
	this.instance.setTransform(-74.9,-40,0.106,0.106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-40,149.8,80);


(lib.Interpolação5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.frase();
	this.instance.parent = this;
	this.instance.setTransform(-54.7,-25,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-25,109.4,50);


(lib.Interpolação4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.frase();
	this.instance.parent = this;
	this.instance.setTransform(-54.7,-25,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-25,109.4,50);


(lib.Interpolação3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.artista();
	this.instance.parent = this;
	this.instance.setTransform(-49,-42.5,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-42.5,98,85);


(lib.Interpolação2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.artista();
	this.instance.parent = this;
	this.instance.setTransform(-49,-42.5,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-42.5,98,85);


(lib.Interpolação1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.confete();
	this.instance.parent = this;
	this.instance.setTransform(-364,-112.5,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-112.5,728,225.2);


// stage content:
(lib.EXERCICIOMUNDIAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// queijo
	this.instance = new lib.Interpolação6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(806.9,46);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolação7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(534.9,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance_1}]},5).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({_off:true,x:534.9},5).wait(11));

	// azeite
	this.instance_2 = new lib.Interpolação8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.5,-43.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolação9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(346.5,45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},9).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,y:45.7},9).wait(17));

	// churrasco
	this.instance_4 = new lib.Interpolação10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(245.6,137);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolação11("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(245.6,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},5).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true,y:45},5).wait(26));

	// frase
	this.instance_6 = new lib.Interpolação4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.3,150);

	this.instance_7 = new lib.Interpolação5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(117.7,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:117.7,y:37},9).wait(31));

	// artista
	this.instance_8 = new lib.Interpolação2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(48,132.5);

	this.instance_9 = new lib.Interpolação3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(48,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:47.5},9).wait(31));

	// confete
	this.instance_10 = new lib.Símbolo1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(364,-22.4,1,1,0,0,0,364,112.6);

	this.instance_11 = new lib.Interpolação1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(364,113.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},39).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,regX:0,regY:0,y:113.6,mode:"synched",startPosition:0},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293,-90,799,310);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EXERCICIO MUNDIAL_atlas_.png", id:"EXERCICIO MUNDIAL_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;