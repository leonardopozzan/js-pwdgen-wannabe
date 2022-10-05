/********** lista variabili ************/
let nome = ''
let cognome = ''
let etaString = ''
let colorePreferito = ''
let eta = 0
let password = ''

/********** assegnazioni delle variabili ************/

//per evitare eventuali errori di battitura ho introdotto le funzioni
//trim e replace per togliere tutti gli spazi

nome = prompt('Qual è il tuo nome?').trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '')
cognome = prompt('Qual è il tuo cognome?').trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '')
etaString = prompt('Quanti anni hai?').trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '')
colorePreferito = prompt('Qual è il tuo colore preferito?').trim().toLowerCase().replace(' ', '').replace('  ', '').replace('   ', '')
eta = parseInt(etaString)
// hon itrodotto la variabile eta in intero per un eventuale uso futuro

/********** creazione e stampa password ************/
password = `${nome}${cognome}${etaString}${colorePreferito}`

document.getElementById('my-password').innerHTML = password