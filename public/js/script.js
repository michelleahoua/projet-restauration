var bouttonDiner = document.querySelector('.diner')
var matin = document.querySelector('.matin')
var midi = document.querySelector('.midi')
var soir = document.querySelector('.soir')
var bouttonPtitDej = document.querySelector('.petitDejeuner')
var bouttonDejeuner = document.querySelector('.dejeuner')
var cover = document.querySelector('.cover')
var quitter = document.getElementById('quitter')
var Quitter = document.getElementById('Quitter')
var sInscrire = document.querySelector('.inscrit')
var formulaire = document.querySelector('.Form')

sInscrire.addEventListener('click', function(){
		formulaire.classList.remove('desactive');
		formulaire.classList.add('active')
})
bouttonPtitDej.addEventListener('click', function(){
	cover.classList.remove('desactive')
	matin.classList.remove('desactive')
	
	midi.classList.remove('active')
	soir.classList.remove('active')
	midi.classList.add('desactive')
	soir.classList.add('desactive')

	cover.classList.add('active')
	matin.classList.add('active')
})

bouttonDejeuner.addEventListener('click', function(){
	cover.classList.remove('desactive')
	midi.classList.remove('desactive')

	matin.classList.remove('active')
	soir.classList.remove('active')
	matin.classList.add('desactive')
	soir.classList.add('desactive')

	cover.classList.add('active')
	midi.classList.add('active')
})

bouttonDiner.addEventListener('click', function(){
	cover.classList.remove('desactive')
	cover.classList.add('active')
	
	matin.classList.remove('active')
	midi.classList.remove('active')
	matin.classList.add('desactive')
	midi.classList.add('desactive')

	soir.classList.remove('desactive')
	soir.classList.add('active')
})

quitter.addEventListener('click', function(){
	cover.classList.add('desactive')
	cover.classList.remove('active')
})

Quitter.addEventListener('click', function(){
	formulaire.classList.add('desactive')
	formulaire.classList.remove('active')
})
