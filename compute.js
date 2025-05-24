mircoRes = 7
tizyRes = 7
gabriRes = 5
robertoRes = 6

gabriele = [[1, 2], [0, 1], [2, 1], [1, 0], [0, 1], [1, 1]]
roberto = [[1, 1], [0, 2], [1, 1], [0, 2], [1, 2], [1, 0]]

mirco = [[1, 1], [0, 2], [3, 1], [1, 0], [0, 1], [1, 0]]
tizy = [[1, 2], [0, 2], [2, 2], [1, 1], [1, 2], [1, 0]]

puntiMirco = 80
puntiGab = 82
secchiMirco = 48
secchiGab = 46

function setResults() {
    var el = document.getElementById('mircoRes');
    el.innerHTML = mircoRes;

    var el = document.getElementById('tizyRes');
    el.innerHTML = tizyRes;

    var el = document.getElementById('gabriRes');
    el.innerHTML = gabriRes;

    var el = document.getElementById('robertoRes');
    el.innerHTML = robertoRes;
}

function setPoints () {

}

function setStanding() {
    firstMan = ''
    secondMan = ''

    if(puntiMirco > puntiGab) {

        firstMan = 'Mirco'
        secondMan = 'Gabriele'

    } else if(puntiMirco < puntiGab) {

        firstMan = 'Gabriele'
        secondMan = 'Mirco'

    } else {
        if (secchiGab > secchiMirco) {
            firstMan = 'Gabriele'
            secondMan = 'Mirco'
        } else if (secchiGab < secchiMirco) {
            firstMan = 'Mirco'
            secondMan = 'Gabriele'
        } else {
            firstMan = 'Mirco'
            secondMan = 'Gabriele'
        }
    }

    var el = document.getElementById('winner');
    el.innerHTML = firstMan;

}

document.getElementById('formRisultati').addEventListener('submit', function(e) {
  e.preventDefault();

  for (let i = 1; i <= 6; i++) {
    const gol1 = document.querySelector(`[name="gol1_${i}"]`).value;
    const gol2 = document.querySelector(`[name="gol2_${i}"]`).value;

    /////////

    const gol1Gab = gabriele[i-1][0];
    const gol2Gab = gabriele[i-1][1];

    segnoReal = (gol1 > gol2) ? 1 : (gol1 < gol2 ? 2 : 0);
    segnoGab = (gol1Gab > gol2Gab) ? 1 : (gol1Gab < gol2Gab ? 2 : 0);

    if( gol1 == gol1Gab && gol2 == gol2Gab ){
        gabriRes += 3
        secchiGab += 1
    } else if(segnoReal == segnoGab) {
        gabriRes += 1
    }

    /////////

    const gol1Rob = roberto[i-1][0];
    const gol2Rob = roberto[i-1][1];

    segnoReal = (gol1 > gol2) ? 1 : (gol1 < gol2 ? 2 : 0);
    segnoRob = (gol1Rob > gol2Rob) ? 1 : (gol1Rob < gol2Rob ? 2 : 0);

    if( gol1 == gol1Rob && gol2 == gol2Rob ){
        robertoRes += 3
    } else if(segnoReal == segnoRob) {
        robertoRes += 1
    }

    
    /////////

    const gol1Mirc = mirco[i-1][0];
    const gol2Mirc = mirco[i-1][1];

    segnoReal = (gol1 > gol2) ? 1 : (gol1 < gol2 ? 2 : 0);
    segnoMirc = (gol1Mirc > gol2Rob) ? 1 : (gol2Mirc < gol2Rob ? 2 : 0);

    if( gol1 == gol1Mirc && gol2 == gol2Mirc ){
        mircoRes += 3
        secchiMirco += 1
    } else if(segnoReal == segnoMirc) {
        mircoRes += 1
    }

    /////////

    const gol1Tiz = tizy[i-1][0];
    const gol2Tiz = tizy[i-1][1];

    segnoReal = (gol1 > gol2) ? 1 : (gol1 < gol2 ? 2 : 0);
    segnoTiz = (gol1Tiz > gol2Tiz) ? 1 : (gol2Tiz < gol2Tiz ? 2 : 0);

    if( gol1 == gol1Tiz && gol2 == gol2Tiz ){
        tizyRes += 3
    } else if(segnoReal == segnoTiz) {
        tizyRes += 1
    }
  }

  if(mircoRes >= 10) {
    puntiMirco += 1
  }

  if(gabriRes >= 10){
    puntiGab += 1
  }

  if(mircoRes > tizyRes){
    puntiMirco += 3
  } else if(mircoRes == tizyRes){
    puntiMirco += 1
  } 

  if(gabriRes > robertoRes){
    puntiGab += 3
  } else if(gabriRes == robertoRes){
    puntiGab += 1
  } 

  setStanding()
  setResults()

});

setResults()
setStanding()