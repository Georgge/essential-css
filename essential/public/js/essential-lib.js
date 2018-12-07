/* --- REDUX --- */
const state = {
  menuDisplacement: true,
};

const reducer = (state, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'MENU_ON':
      newState.menuDisplacement = false;
      return newState;
    case 'MENU_OFF':
      newState.menuDisplacement = true;
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer, state);

const actionMenuOn = {
  type: 'MENU_ON',
}

const actionMenuOff = {
  type: 'MENU_OFF',
}

const menuOn = () => {
  store.dispatch(actionMenuOn);
}

const menuOff = () => {
  store.dispatch(actionMenuOff);
}

const menuState = () => {
  return store.getState().menuDisplacement;
}

store.subscribe(menuState);

/* --- END REDUX --- */
/* --- MENU INTERACTION --- */

const menuButton = document.querySelector('.menu-js');
const menuButtonBack = document.querySelector('.menu-back-js');
const menuContainer = document.querySelector('.menu-container-js');

const menuInteraction = () => {
  if (menuState()) {
    menuOn();
    menuContainer.classList.add('menu-on');
  } else {
    menuOff();
    menuContainer.classList.remove('menu-on');
  }
};

menuButton.addEventListener('click', (e) => {
  menuInteraction();
});

menuButtonBack.addEventListener('click', (e) => {
  menuInteraction();
})