let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}  
else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'white'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'black'){
		document.getElementById('theme-style').href = 'black.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'yellow'){
		document.getElementById('theme-style').href = 'yellow.css'
	}

	localStorage.setItem('theme', mode)
}