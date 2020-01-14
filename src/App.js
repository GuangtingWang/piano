import React from 'react';
import './App.css';

function App() {

  const noteC = new Audio('./note/1.wav');
  const noteCSharp = new Audio('./note/1-5.wav');
  const noteD = new Audio('./note/2.wav');
  const noteDSharp = new Audio('./note/2-5.wav');
  const noteE = new Audio('./note/3.wav');
  const noteF = new Audio('./note/4.wav');
  const noteFSharp = new Audio('./note/4-5.wav');
  const noteG = new Audio('./note/5.wav');
  const noteGSharp = new Audio('./note/5-5.wav');
  const noteA = new Audio('./note/6.wav');
  const noteASharp = new Audio('./note/6-5.wav');
  const noteB = new Audio('./note/7.wav');

  const notesMap = [noteC, noteCSharp, noteD, noteDSharp, noteE, noteF, noteFSharp, noteG, noteGSharp, noteA, noteASharp, noteB];

  document.addEventListener('keydown', e => {
    const k = e.keyCode;

    const pressedIndex = document.cookie.split('pressed')[1] && document.cookie.split('pressed')[1].split(';')[0];

    notesMap.forEach(e => {
      e.pause();
      // e.load();
    });    

    document.cookie = `pressed=${k};`;

    let majorElements = document.getElementsByClassName('majorKey');

    let minorElements = document.getElementsByClassName('minorKey');

    [...majorElements, ...minorElements].map(e => e.classList.remove('highlighted'));

    document.getElementById(String(k)) && document.getElementById(String(k)).classList.add('highlighted');

    switch(k) {
      // c
      case 67:
        noteC.play();
        return;
      // f
      case 70:
        noteCSharp.play();
        return;
      // v
      case 86:
        noteD.play()
        return;
      // g
      case 71:
        noteDSharp.play();
        return;
      // b
      case 66:
        noteE.play()
        return;
      // n
      case 78:
        noteF.play()
        return;
      // j
      case 74:
        noteFSharp.play();
        return;
      // m
      case 77:
        noteG.play()
        return;
      // k => a
      case 65:
        noteGSharp.play();
        return;
      // , => z
      case 90:
        noteA.play()
        return;
      // l => s
      case 83:
        noteASharp.play();
        return;
      // . => x
      case 88:
        noteB.play()
        return;
      default: 
        noteC.load();
        return;
    }
  })

  return (
    <div className="App"  >
      <h1 className='header'>GT'S HONKY TONK PIANO</h1>
      <div className='keyboard-container'>
        <div className='majorKey'></div>
        <div className='minorKey'></div>
        <div className='majorKey'></div>
        <div className='minorKey'></div>
        <div className='majorKey'></div>
        <div className='majorKey'></div>
        <div className='minorKey'></div>
        <div className='majorKey'></div>

        <div id='65' className='minorKey'></div>
        <div id='90' className='majorKey'></div>
        <div id='83' className='minorKey'></div>
        <div id='88' className='majorKey'></div>
        <div id='67' className='majorKey'></div>
        <div id='70' className='minorKey'></div>
        <div id='86' className='majorKey'></div>
        <div id='71' className='minorKey'></div>
        <div id='66' className='majorKey'></div>
        <div id='78' className='majorKey'></div>
        <div id='74' className='minorKey'></div>
        <div id='77' className='majorKey'></div>

        <div className='minorKey'></div>
        <div className='majorKey'></div>
        <div className='minorKey'></div>
        <div className='majorKey'></div>
        <div className='majorKey'></div>
      </div>
    </div>
  );
}

export default App;
