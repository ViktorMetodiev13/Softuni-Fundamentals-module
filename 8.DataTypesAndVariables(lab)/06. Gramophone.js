function gramophone(bandName, albumName, songName) {
    let rotateFormula = (albumName.length * bandName.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil((rotateFormula / 2.5))} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')