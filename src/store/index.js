import { createStore } from 'redux';

const initialState = {
    count: 0,
    timer: 0,
    selectedId: 0,
    selectedObjId: 0,
    player_name: "",
    finish: false,
    list: [
        { id: 1, imageCopyId: 1, name: 'https://vignette.wikia.nocookie.net/underworld/images/0/06/Gunn.gif/revision/latest?cb=20120116211704', active: false },
        { id: 2, imageCopyId: 1, name: 'https://vignette.wikia.nocookie.net/underworld/images/0/06/Gunn.gif/revision/latest?cb=20120116211704', active: false },
        { id: 3, imageCopyId: 2, name: 'http://24.media.tumblr.com/2e1c73154efc96375787fe279760d22c/tumblr_mete3plDTd1rz819ro1_250.gif', active: false },
        { id: 4, imageCopyId: 2, name: 'http://24.media.tumblr.com/2e1c73154efc96375787fe279760d22c/tumblr_mete3plDTd1rz819ro1_250.gif', active: false },
        { id: 5, imageCopyId: 3, name: 'https://www.picgifs.com/graphics/s/screensaver-mobile/graphics-screensaver-mobile-346487.gif', active: false },
        { id: 6, imageCopyId: 3, name: 'https://www.picgifs.com/graphics/s/screensaver-mobile/graphics-screensaver-mobile-346487.gif', active: false },
        { id: 7, imageCopyId: 4, name: 'http://gifimage.net/wp-content/uploads/2017/12/judy-hopps-gif-13.gif', active: false },
        { id: 8, imageCopyId: 4, name: 'http://gifimage.net/wp-content/uploads/2017/12/judy-hopps-gif-13.gif', active: false },
        { id: 9, imageCopyId: 5, name: 'https://media1.tenor.com/images/e3fa3bdf47ee8f775a7ebb894fdfa803/tenor.gif?itemid=9878601', active: false },
        { id: 10, imageCopyId: 5, name: 'https://media1.tenor.com/images/e3fa3bdf47ee8f775a7ebb894fdfa803/tenor.gif?itemid=9878601', active: false },
        { id: 11, imageCopyId: 6, name: 'http://albums.tapuz.co.il/mfhp-webbuilder/a/9/6/4/796821801.gif', active: false },
        { id: 12, imageCopyId: 6, name: 'http://albums.tapuz.co.il/mfhp-webbuilder/a/9/6/4/796821801.gif', active: false },
        { id: 13, imageCopyId: 7, name: 'https://media3.giphy.com/media/xUA7bbAIKF18F0h00E/giphy-preview.gif', active: false },
        { id: 14, imageCopyId: 7, name: 'https://media3.giphy.com/media/xUA7bbAIKF18F0h00E/giphy-preview.gif', active: false },
        { id: 15, imageCopyId: 8, name: 'https://media1.giphy.com/media/sdWMiWdToUoak/giphy-preview.gif', active: false },
        { id: 16, imageCopyId: 8, name: 'https://media1.giphy.com/media/sdWMiWdToUoak/giphy-preview.gif', active: false },
        { id: 17, imageCopyId: 9, name: 'https://media2.giphy.com/media/l2QDPStBfVQjHXSOk/giphy-preview.gif', active: false },
        { id: 18, imageCopyId: 9, name: 'https://media2.giphy.com/media/l2QDPStBfVQjHXSOk/giphy-preview.gif', active: false },
        { id: 19, imageCopyId: 10, name: 'http://img.jetbitts.com/screensavers/down/animals/monkeyluck_ftzhntw5.gif', active: false },
        { id: 20, imageCopyId: 10, name: 'http://img.jetbitts.com/screensavers/down/animals/monkeyluck_ftzhntw5.gif', active: false },
      ]
}

var interval;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT':
        clearInterval(interval);
        state.list.map(function (obj, index) {
                obj.active = false;
            return obj;
        })
        return Object.assign({}, state, initialState);
        case 'PLAYER NAME':
        interval = setInterval(function () {
                store.dispatch({
                    type: 'INCREMENT_TIMER'
                })
            }, 1000)
            return Object.assign({}, state, { player_name: action.player_name });
        case 'INCREMENT_TIMER':
            return Object.assign({}, state, { timer: state.timer + 1 });
        case 'RANDOM':
            return Object.assign({}, state, { list: shuffle(state.list.slice()) });
        case 'CARD CLICK':

            //change bg color
            let list = state.list.map(function (obj, index) {
                if (obj.id === action.cardObj.id)
                    obj.active = !obj.active;
                return obj;
            })


            //second click with the same id
            if (state.selectedId !== 0 && state.selectedId === action.cardObj.imageCopyId) {
                console.log('second click with the same id');
                //find action.cardObj.imageCopyId in list and remove
                /* state.list = state.list.filter(function (obj) {
                     return obj.imageCopyId !== action.cardObj.imageCopyId;
                 });*/

                let finish = true;
                state.list.map(function (obj, index) {
                    if (!obj.active)
                        finish = false;
                })
                return Object.assign({}, state, { list: list.slice(), selectedId: 0, selectedObjId: action.cardObj.id, finish: finish , result:state.count*state.timer/0.01 });

            }
            //second click without same id
            else if (state.selectedId !== 0 && state.selectedId !== action.cardObj.imageCopyId) {

                list = state.list.map(function (obj, index) {
                    if (obj.imageCopyId === action.cardObj.imageCopyId || obj.imageCopyId === state.selectedId) {
                        obj.active = false;
                    }
                    return obj;
                })
                return Object.assign({}, state, { list: list.slice(), selectedId: 0, selectedObjId: action.cardObj.id, count: state.count + 1 });
            }
            //first click
            else {
                return Object.assign({}, state, { list: list.slice(), selectedId: action.cardObj.imageCopyId, selectedObjId: action.cardObj.id, count: state.count + 1 });
            }

        default: return state
    }

}

const store = createStore(reducer);

export default store;



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}