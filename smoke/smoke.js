var smoketimeout;
var smoke = {

	pageload: function(){
    window.addEventListener('load', function(){
    	smoke.bodyload();
    });
	},
	
	bodyload: function(){
		var ff = document.createElement('div');
				ff.setAttribute('id','smoke-out');
				ff.setAttribute('class','smoke-base');
				document.body.appendChild(ff);	
	},

	build: function(e,f){
	
		var prompt = '';
		if (f.type == 'prompt'){
			prompt = 
				'<div class="dialog-prompt">'+
						'<input id="dialog-input" type="text" />'+
					'</div>';
		}
		
		var buttons = '';
		if (f.type != 'signal'){
			buttons = '<div class="dialog-buttons">';
			if (f.type == 'alert'){
				buttons +=
					'<button id="alert-ok">OK</button>';
			}
			
			if (f.type == 'prompt' || f.type == 'confirm'){
				buttons +=
					'<button id="'+f.type+'-cancel" class="cancel">Cancel</button>'+
					'<button id="'+f.type+'-ok">OK</button>';
			}
			
			buttons += '</div>';
		}

		var box = 
		'<div id="smoke-bg"></div>'+
		'<div class="dialog smoke">'+
			'<div class="dialog-inner">'+
					e+
					prompt+
					buttons+			
			'</div>'+
		'</div>';


		var ff = document.getElementById('smoke-out');
				ff.innerHTML = box;
				ff.className = 'smoke-base smoke-visible';

		// clear the timeout if it's already been activated
		if (smoketimeout){
				clearTimeout(smoketimeout);
		}
		
		// close on background click
		var g = document.getElementById('smoke-bg');
				g.addEventListener("click",smoke.destroy);

		// call destruction...whatever, i'm tired
		var destroy = function(){
			smoke.destroy(f.type);
		};




		// listeners for button actions

		if (f.type == 'alert'){
			// return true
			var h = document.getElementById('alert-ok');
					h.addEventListener("click",destroy);		
		}
		
		if (f.type == 'confirm'){
			// return false
			var h = document.getElementById('confirm-cancel');
					h.addEventListener("click",function(){
								smoke.destroy(f.type);
								f.callback(false);
					});
			
			// return true
			var i = document.getElementById('confirm-ok');
					i.addEventListener("click",function(){
								smoke.destroy(f.type);
								f.callback(true);
					});
		}
		
		if (f.type == 'prompt'){
			// return false
			var h = document.getElementById('prompt-cancel');
					h.addEventListener("click",function(){
								smoke.destroy(f.type);
								f.callback(false);
					});

			// return	contents of input box
			var j = document.getElementById('dialog-input');
			var i = document.getElementById('prompt-ok');
					i.addEventListener("click",function(){
								smoke.destroy(f.type);
								f.callback(j.value);
					});
		}



		// close after f.timeout ms
		if (f.type == 'signal'){
			smoketimeout = setTimeout(destroy,f.timeout);
		}
		
	},
	
	destroy: function(type){				
		var box = document.getElementById('smoke-out');
				box.setAttribute('class','smoke-base');

			if (g = document.getElementById(type+'-ok')){
				g.removeEventListener("click");
			}
			
			if (h = document.getElementById(type+'-cancel')){

				h.removeEventListener("click");
			}
	},

	alert: function(e){
		smoke.build(e,{type:'alert'});
	},
	
	signal: function(e,f){
		if (typeof(f) == 'undefined'){
			f = 5000;
		}
		smoke.build(e,{type:'signal',timeout:f});
	},
	
	confirm: function(e,f){
		smoke.build(e,{type:'confirm',callback:f});
		
	},
	
	prompt: function(e,f){
		return smoke.build(e,{type:'prompt',callback:f});
	}
	
};

// and start this
smoke.pageload();




// fixit

	// destroy needs to remove event listeners (or don't write new ones if there already are ones)


// future
	// finish prompt functionality: prompt input submit on enter
		// return '' instad of false

	// autofocus "ok" on all
	
	// custom prefs
		// custom true/false button text options
		// decide what to autofocus on

	// maybe ie (8-) support (event handlers, mostly)