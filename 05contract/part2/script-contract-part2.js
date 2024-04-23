
function addItemToDiv(item, div) {
  console.log('Adding item:', item, 'to div:', div);

  if (!div) {
      console.error('The div element is null. Check if the element exists and the ID is correct.');
      return;
  }

  const itemElement = document.createElement('div');
  itemElement.className = 'item';
  const text = document.createElement('span');
  text.textContent = item;
  const icon = document.createElement('span');
  icon.className = 'material-symbols-outlined icon';
  icon.textContent = 'check_box';
  itemElement.appendChild(icon);
  itemElement.appendChild(text);
  div.appendChild(itemElement);
}



      function displaySelectedItems() {
          const params = new URLSearchParams(window.location.search);
          const kitchenDmItems = params.getAll('kitchenDmItem');
          const ensuiteDmItems = params.getAll('ensuiteDmItem');
          const mainDmItems = params.getAll('mainDmItem');
          const powderDmItems = params.getAll('powderDmItem');

          const floorBed1DmItems = params.getAll('floorBed1DmItem');
          const floorBed2DmItems = params.getAll('floorBed2DmItem');
          const floorBed3DmItems = params.getAll('floorBed3DmItem');
          const floorLivingDiningDmItems = params.getAll('floorLivingDiningDmItem');
          const floorLivingDmItems = params.getAll('floorLivingDmItem');
          const floorDiningDmItems = params.getAll('floorDiningDmItem');
          const floorBreakfastDmItems = params.getAll('floorBreakfastDmItem');
          const floorDenDmItems = params.getAll('floorDenDmItem');
          const floorSolariumDmItems = params.getAll('floorSolariumDmItem');
          const floorLaundryDmItems = params.getAll('floorLaundryDmItem');
          const floorFoyerDmItems = params.getAll('floorFoyerDmItem');
          const floorHallwayDmItems = params.getAll('floorHallwayDmItem');

          const kitchenItems = params.getAll('kitchenItem');
          const ensuiteItems = params.getAll('ensuiteItem');
          const mainItems = params.getAll('mainItem');
          const powderItems = params.getAll('powderItem');

          const floorBed1Items = params.getAll('floorBed1Item');
          const floorBed2Items = params.getAll('floorBed2Item');
          const floorBed3Items = params.getAll('floorBed3Item');
          const floorLivingDiningItems = params.getAll('floorLivingDiningItem');
          const floorLivingItems = params.getAll('floorLivingItem');
          const floorDiningItems = params.getAll('floorDiningItem');
          const floorBreakfastItems = params.getAll('floorBreakfastItem');
          const floorDenItems = params.getAll('floorDenItem');
          const floorSolariumItems = params.getAll('floorSolariumItem');
          const floorLaundryItems = params.getAll('floorLaundryItem');
          const floorFoyerItems = params.getAll('floorFoyerItem');
          const floorHallwayItems = params.getAll('floorHallwayItem');

          const paintBed1Items = params.getAll('paintBed1Item');
          const paintBed2Items = params.getAll('paintBed2Item');
          const paintBed3Items = params.getAll('paintBed3Item');
          const paintLivingDiningItems = params.getAll('paintLivingDiningItem');
          const paintLivingItems = params.getAll('paintLivingItem');
          const paintDiningItems = params.getAll('paintDiningItem');
          const paintBreakfastItems = params.getAll('paintBreakfastItem');
          const paintDenItems = params.getAll('paintDenItem');
          const paintSolariumItems = params.getAll('paintSolariumItem');
          const paintLaundryItems = params.getAll('paintLaundryItem');
          const paintFoyerItems = params.getAll('paintFoyerItem');
          const paintHallwayItems = params.getAll('paintHallwayItem');

          const appRangeItems = params.getAll('appRangeItem');
          const appFridgeItems = params.getAll('appFridgeItem');
          const appDishwasherItems = params.getAll('appDishwasherItem');
          const appHoodfanItems = params.getAll('appHoodfanItem');
          const appCooktopItems = params.getAll('appCooktopItem');
          const appOvenItems = params.getAll('appOvenItem');
          const appOverRangeMicrowaveItems = params.getAll('appOverRangeMicrowaveItem');
          const appWasherItems = params.getAll('appWasherItem');
          const appDryerItems = params.getAll('appDryerItem');

          const otherKitchenItems = params.getAll('otherKitchenItem');
          const otherEnsuiteItems = params.getAll('otherEnsuiteItem');
          const otherMainItems = params.getAll('otherMainItem');
          const otherBed1Items = params.getAll('otherBed1Item');
          const otherBed2Items = params.getAll('otherBed2Item');
          const otherBed3Items = params.getAll('otherBed3Item');
          const otherLivingDiningItems = params.getAll('otherLivingDiningItem');
          const otherLivingItems = params.getAll('otherLivingItem');
          const otherDiningItems = params.getAll('otherDiningItem');
          const otherBreakfastItems = params.getAll('otherBreakfastItem');
          const otherDenItems = params.getAll('otherDenItem');
          const otherSolariumItems = params.getAll('otherSolariumItem');
          const otherLaundryItems = params.getAll('otherLaundryItem');
          const otherFoyerItems = params.getAll('otherFoyerItem');
          const otherHallwayItems = params.getAll('otherHallwayItem');



          const kitchenDmDiv = document.getElementById('kitchenDemolishItems');
          const ensuiteDmDiv = document.getElementById('ensuiteBathroomDemolishItems');
          const mainDmDiv = document.getElementById('mainBathroomDemolishItems');
          const powderDmDiv = document.getElementById('powderBathroomDemolishItems');


          const floorBed1DmDiv = document.getElementById('floorBed1DemolishItems');
          const floorBed2DmDiv = document.getElementById('floorBed2DemolishItems');
          const floorBed3DmDiv = document.getElementById('floorBed3DemolishItems');
          const floorLivingDiningDmDiv = document.getElementById('floorLivingDiningDemolishItems');
          const floorLivingDmDiv = document.getElementById('floorLivingDemolishItems');
          const floorDiningDmDiv = document.getElementById('floorDiningDemolishItems');
          const floorBreakfastDmDiv = document.getElementById('floorBreakfastDemolishItems');
          const floorDenDmDiv = document.getElementById('floorDenDemolishItems');
          const floorSolariumDmDiv = document.getElementById('floorSolariumDemolishItems');
          const floorLaundryDmDiv = document.getElementById('floorLaundryDemolishItems');
          const floorFoyerDmDiv = document.getElementById('floorFoyerDemolishItems');
          const floorHallwayDmDiv = document.getElementById('floorHallwayDemolishItems');


          const floorBed1Div = document.getElementById('floorBed1Items');
          const floorBed2Div = document.getElementById('floorBed2Items');
          const floorBed3Div = document.getElementById('floorBed3Items');
          const floorLivingDiningDiv = document.getElementById('floorLivingDiningItems');
          const floorLivingDiv = document.getElementById('floorLivingItems');
          const floorDiningDiv = document.getElementById('floorDiningItems');
          const floorBreakfastDiv = document.getElementById('floorBreakfastItems');
          const floorDenDiv = document.getElementById('floorDenItems');
          const floorSolariumDiv = document.getElementById('floorSolariumItems');
          const floorLaundryDiv = document.getElementById('floorLaundryItems');
          const floorFoyerDiv = document.getElementById('floorFoyerItems');
          const floorHallwayDiv = document.getElementById('floorHallwayItems');

          const paintBed1Div = document.getElementById('paintBed1Items');
          const paintBed2Div = document.getElementById('paintBed2Items');
          const paintBed3Div = document.getElementById('paintBed3Items');
          const paintLivingDiningDiv = document.getElementById('paintLivingDiningItems');
          const paintLivingDiv = document.getElementById('paintLivingItems');
          const paintDiningDiv = document.getElementById('paintDiningItems');
          const paintBreakfastDiv = document.getElementById('paintBreakfastItems');
          const paintDenDiv = document.getElementById('paintDenItems');
          const paintSolariumDiv = document.getElementById('paintSolariumItems');
          const paintLaundryDiv = document.getElementById('paintLaundryItems');
          const paintFoyerDiv = document.getElementById('paintFoyerItems');
          const paintHallwayDiv = document.getElementById('paintHallwayItems');

          const appRangeDiv = document.getElementById('appRangeItems');
          const appFridgeDiv = document.getElementById('appFridgeItems');
          const appDishwasherDiv = document.getElementById('appDishwasherItems');
          const appHoodfanDiv = document.getElementById('appHoodfanItems');
          const appCooktopDiv = document.getElementById('appCooktopItems');
          const appOvenDiv = document.getElementById('appOvenItems');
          const appOverRangeMicrowaveDiv = document.getElementById('appOverRangeMicrowaveItems');
          const appWasherDiv = document.getElementById('appWasherItems');
          const appDryerDiv = document.getElementById('appDryerItems');

          const otherKitchenDiv = document.getElementById('otherKitchenItems');
          const otherEnsuiteDiv = document.getElementById('otherEnsuiteItems');
          const otherMainDiv = document.getElementById('otherMainItems');
          const otherBed1Div = document.getElementById('otherBed1Items');
          const otherBed2Div = document.getElementById('otherBed2Items');
          const otherBed3Div = document.getElementById('otherBed3Items');
          const otherLivingDiningDiv = document.getElementById('otherLivingDiningItems');
          const otherLivingDiv = document.getElementById('otherLivingItems');
          const otherDiningDiv = document.getElementById('otherDiningItems');
          const otherBreakfastDiv = document.getElementById('otherBreakfastItems');
          const otherDenDiv = document.getElementById('otherDenItems');
          const otherSolariumDiv = document.getElementById('otherSolariumItems');
          const otherLaundryDiv = document.getElementById('otherLaundryItems');
          const otherFoyerDiv = document.getElementById('otherFoyerItems');
          const otherHallwayDiv = document.getElementById('otherHallwayItems');



          const kitchenDmBox = document.querySelector('.kitchenDmBox');
          const ensuiteDmBox = document.querySelector('.ensuiteDmBox');
          const mainDmBox = document.querySelector('.mainDmBox');
          const powderDmBox = document.querySelector('.powderDmBox');


          const floorBed1DmBox = document.querySelector('.floorBed1DmBox');
          const floorBed2DmBox = document.querySelector('.floorBed2DmBox');
          const floorBed3DmBox = document.querySelector('.floorBed3DmBox');
          const floorLivingDiningDmBox = document.querySelector('.floorLivingDiningDmBox');
          const floorLivingDmBox = document.querySelector('.floorLivingDmBox');
          const floorDiningDmBox = document.querySelector('.floorDiningDmBox');
          const floorBreakfastDmBox = document.querySelector('.floorBreakfastDmBox');
          const floorDenDmBox = document.querySelector('.floorDenDmBox');
          const floorSolariumDmBox = document.querySelector('.floorSolariumDmBox');
          const floorLaundryDmBox = document.querySelector('.floorLaundryDmBox');
          const floorFoyerDmBox = document.querySelector('.floorFoyerDmBox');
          const floorHallwayDmBox = document.querySelector('.floorHallwayDmBox');

          const floorBed1Box = document.querySelector('.floorBed1Box');
          const floorBed2Box = document.querySelector('.floorBed2Box');
          const floorBed3Box = document.querySelector('.floorBed3Box');
          const floorLivingDiningBox = document.querySelector('.floorLivingDiningBox');
          const floorLivingBox = document.querySelector('.floorLivingBox');
          const floorDiningBox = document.querySelector('.floorDiningBox');
          const floorBreakfastBox = document.querySelector('.floorBreakfastBox');
          const floorDenBox = document.querySelector('.floorDenBox');
          const floorSolariumBox = document.querySelector('.floorSolariumBox');
          const floorLaundryBox = document.querySelector('.floorLaundryBox');
          const floorFoyerBox = document.querySelector('.floorFoyerBox');
          const floorHallwayBox = document.querySelector('.floorHallwayBox');

          const paintBed1Box = document.querySelector('.paintBed1Box');
          const paintBed2Box = document.querySelector('.paintBed2Box');
          const paintBed3Box = document.querySelector('.paintBed3Box');
          const paintLivingDiningBox = document.querySelector('.paintLivingDiningBox');
          const paintLivingBox = document.querySelector('.paintLivingBox');
          const paintDiningBox = document.querySelector('.paintDiningBox');
          const paintBreakfastBox = document.querySelector('.paintBreakfastBox');
          const paintDenBox = document.querySelector('.paintDenBox');
          const paintSolariumBox = document.querySelector('.paintSolariumBox');
          const paintLaundryBox = document.querySelector('.paintLaundryBox');
          const paintFoyerBox = document.querySelector('.paintFoyerBox');
          const paintHallwayBox = document.querySelector('.paintHallwayBox');


          const appRangeBox = document.querySelector('.appRangeBox');
          const appFridgeBox = document.querySelector('.appFridgeBox');
          const appDishwasherBox = document.querySelector('.appDishwasherBox');
          const appHoodfanBox = document.querySelector('.appHoodfanBox');
          const appCooktopBox = document.querySelector('.appCooktopBox');
          const appOvenBox = document.querySelector('.appOvenBox');
          const appOverRangeMicrowaveBox = document.querySelector('.appOverRangeMicrowaveBox');
          const appWasherBox = document.querySelector('.appWasherBox');
          const appDryerBox = document.querySelector('.appDryerBox');

          const otherKitchenBox = document.querySelector('.otherKitchenBox');
          const otherEnsuiteBox = document.querySelector('.otherEnsuiteBox');
          const otherMainBox = document.querySelector('.otherMainBox');
          const otherBed1Box = document.querySelector('.otherBed1Box');
          const otherBed2Box = document.querySelector('.otherBed2Box');
          const otherBed3Box = document.querySelector('.otherBed3Box');
          const otherLivingDiningBox = document.querySelector('.otherLivingDiningBox');
          const otherLivingBox = document.querySelector('.otherLivingBox');
          const otherDiningBox = document.querySelector('.otherDiningBox');
          const otherBreakfastBox = document.querySelector('.otherBreakfastBox');
          const otherDenBox = document.querySelector('.otherDenBox');
          const otherSolariumBox = document.querySelector('.otherSolariumBox');
          const otherLaundryBox = document.querySelector('.otherLaundryBox');
          const otherFoyerBox = document.querySelector('.otherFoyerBox');
          const otherHallwayBox = document.querySelector('.otherHallwayBox');



          kitchenDmItems.forEach(item => addItemToDiv(item, kitchenDmDiv));
          ensuiteDmItems.forEach(item => addItemToDiv(item, ensuiteDmDiv));
          mainDmItems.forEach(item => addItemToDiv(item, mainDmDiv));
          powderDmItems.forEach(item => addItemToDiv(item, powderDmDiv));


          floorBed1DmItems.forEach(item => addItemToDiv(item, floorBed1DmDiv));
          floorBed2DmItems.forEach(item => addItemToDiv(item, floorBed2DmDiv));
          floorBed3DmItems.forEach(item => addItemToDiv(item, floorBed3DmDiv));
          floorLivingDiningDmItems.forEach(item => addItemToDiv(item, floorLivingDiningDmDiv));
          floorLivingDmItems.forEach(item => addItemToDiv(item, floorLivingDmDiv));
          floorDiningDmItems.forEach(item => addItemToDiv(item, floorDiningDmDiv));
          floorBreakfastDmItems.forEach(item => addItemToDiv(item, floorBreakfastDmDiv));
          floorDenDmItems.forEach(item => addItemToDiv(item, floorDenDmDiv));
          floorSolariumDmItems.forEach(item => addItemToDiv(item, floorSolariumDmDiv));
          floorLaundryDmItems.forEach(item => addItemToDiv(item, floorLaundryDmDiv));
          floorFoyerDmItems.forEach(item => addItemToDiv(item, floorFoyerDmDiv));
          floorHallwayDmItems.forEach(item => addItemToDiv(item, floorHallwayDmDiv));

          floorBed1Items.forEach(item => addItemToDiv(item, floorBed1Div));
          floorBed2Items.forEach(item => addItemToDiv(item, floorBed2Div));
          floorBed3Items.forEach(item => addItemToDiv(item, floorBed3Div));
          floorLivingDiningItems.forEach(item => addItemToDiv(item, floorLivingDiningDiv));
          floorLivingItems.forEach(item => addItemToDiv(item, floorLivingDiv));
          floorDiningItems.forEach(item => addItemToDiv(item, floorDiningDiv));
          floorBreakfastItems.forEach(item => addItemToDiv(item, floorBreakfastDiv));
          floorDenItems.forEach(item => addItemToDiv(item, floorDenDiv));
          floorSolariumItems.forEach(item => addItemToDiv(item, floorSolariumDiv));
          floorLaundryItems.forEach(item => addItemToDiv(item, floorLaundryDiv));
          floorFoyerItems.forEach(item => addItemToDiv(item, floorFoyerDiv));
          floorHallwayItems.forEach(item => addItemToDiv(item, floorHallwayDiv));

          paintBed1Items.forEach(item => addItemToDiv(item, paintBed1Div));
          paintBed2Items.forEach(item => addItemToDiv(item, paintBed2Div));
          paintBed3Items.forEach(item => addItemToDiv(item, paintBed3Div));
          paintLivingDiningItems.forEach(item => addItemToDiv(item, paintLivingDiningDiv));
          paintLivingItems.forEach(item => addItemToDiv(item, paintLivingDiv));
          paintDiningItems.forEach(item => addItemToDiv(item, paintDiningDiv));
          paintBreakfastItems.forEach(item => addItemToDiv(item, paintBreakfastDiv));
          paintDenItems.forEach(item => addItemToDiv(item, paintDenDiv));
          paintSolariumItems.forEach(item => addItemToDiv(item, paintSolariumDiv));
          paintLaundryItems.forEach(item => addItemToDiv(item, paintLaundryDiv));
          paintFoyerItems.forEach(item => addItemToDiv(item, paintFoyerDiv));
          paintHallwayItems.forEach(item => addItemToDiv(item, paintHallwayDiv));


          appRangeItems.forEach(item => addItemToDiv(item, appRangeDiv));
          appFridgeItems.forEach(item => addItemToDiv(item, appFridgeDiv));
          appDishwasherItems.forEach(item => addItemToDiv(item, appDishwasherDiv));
          appHoodfanItems.forEach(item => addItemToDiv(item, appHoodfanDiv));
          appCooktopItems.forEach(item => addItemToDiv(item, appCooktopDiv));
          appOvenItems.forEach(item => addItemToDiv(item, appOvenDiv));
          appOverRangeMicrowaveItems.forEach(item => addItemToDiv(item, appOverRangeMicrowaveDiv));
          appWasherItems.forEach(item => addItemToDiv(item, appWasherDiv));
          appDryerItems.forEach(item => addItemToDiv(item, appDryerDiv));

          otherKitchenItems.forEach(item => addItemToDiv(item, otherKitchenDiv));
          otherEnsuiteItems.forEach(item => addItemToDiv(item, otherEnsuiteDiv));
          otherMainItems.forEach(item => addItemToDiv(item, otherMainDiv));
          otherBed1Items.forEach(item => addItemToDiv(item, otherBed1Div));
          otherBed2Items.forEach(item => addItemToDiv(item, otherBed2Div));
          otherBed3Items.forEach(item => addItemToDiv(item, otherBed3Div));
          otherLivingDiningItems.forEach(item => addItemToDiv(item, otherLivingDiningDiv));
          otherLivingItems.forEach(item => addItemToDiv(item, otherLivingDiv));
          otherDiningItems.forEach(item => addItemToDiv(item, otherDiningDiv));
          otherBreakfastItems.forEach(item => addItemToDiv(item, otherBreakfastDiv));
          otherDenItems.forEach(item => addItemToDiv(item, otherDenDiv));
          otherSolariumItems.forEach(item => addItemToDiv(item, otherSolariumDiv));
          otherLaundryItems.forEach(item => addItemToDiv(item, otherLaundryDiv));
          otherFoyerItems.forEach(item => addItemToDiv(item, otherFoyerDiv));
          otherHallwayItems.forEach(item => addItemToDiv(item, otherHallwayDiv));



          kitchenDmBox.style.display = kitchenDmDiv.childElementCount > 0 ? 'block' : 'none';
          ensuiteDmBox.style.display = ensuiteDmDiv.childElementCount > 0 ? 'block' : 'none';
          mainDmBox.style.display = mainDmDiv.childElementCount > 0 ? 'block' : 'none';
          powderDmBox.style.display = powderDmDiv.childElementCount > 0 ? 'block' : 'none';


          floorBed1DmBox.style.display = floorBed1DmDiv.childElementCount > 0 ? 'block' : 'none';
          floorBed2DmBox.style.display = floorBed2DmDiv.childElementCount > 0 ? 'block' : 'none';
          floorBed3DmBox.style.display = floorBed3DmDiv.childElementCount > 0 ? 'block' : 'none';
          floorLivingDiningDmBox.style.display = floorLivingDiningDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorLivingDmBox.style.display = floorLivingDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorDiningDmBox.style.display = floorDiningDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorBreakfastDmBox.style.display = floorBreakfastDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorDenDmBox.style.display = floorDenDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorSolariumDmBox.style.display = floorSolariumDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorLaundryDmBox.style.display = floorLaundryDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorFoyerDmBox.style.display = floorFoyerDmDiv.childElementCount > 0 ? 'block' : 'none';
          floorHallwayDmBox.style.display = floorHallwayDmDiv.childElementCount > 0 ? 'block' : 'none';

          floorBed1Box.style.display = floorBed1Div.childElementCount > 0 ? 'block' : 'none';
          floorBed2Box.style.display = floorBed2Div.childElementCount > 0 ? 'block' : 'none';
          floorBed3Box.style.display = floorBed3Div.childElementCount > 0 ? 'block' : 'none';
          floorLivingDiningBox.style.display = floorLivingDiningDiv.childElementCount > 0 ? 'block' : 'none';
          floorLivingBox.style.display = floorLivingDiv.childElementCount > 0 ? 'block' : 'none';
          floorDiningBox.style.display = floorDiningDiv.childElementCount > 0 ? 'block' : 'none';
          floorBreakfastBox.style.display = floorBreakfastDiv.childElementCount > 0 ? 'block' : 'none';
          floorDenBox.style.display = floorDenDiv.childElementCount > 0 ? 'block' : 'none';
          floorSolariumBox.style.display = floorSolariumDiv.childElementCount > 0 ? 'block' : 'none';
          floorLaundryBox.style.display = floorLaundryDiv.childElementCount > 0 ? 'block' : 'none';
          floorFoyerBox.style.display = floorFoyerDiv.childElementCount > 0 ? 'block' : 'none';
          floorHallwayBox.style.display = floorHallwayDiv.childElementCount > 0 ? 'block' : 'none';

          paintBed1Box.style.display = paintBed1Div.childElementCount > 0 ? 'block' : 'none';
          paintBed2Box.style.display = paintBed2Div.childElementCount > 0 ? 'block' : 'none';
          paintBed3Box.style.display = paintBed3Div.childElementCount > 0 ? 'block' : 'none';
          paintLivingDiningBox.style.display = paintLivingDiningDiv.childElementCount > 0 ? 'block' : 'none';
          paintLivingBox.style.display = paintLivingDiv.childElementCount > 0 ? 'block' : 'none';
          paintDiningBox.style.display = paintDiningDiv.childElementCount > 0 ? 'block' : 'none';
          paintBreakfastBox.style.display = paintBreakfastDiv.childElementCount > 0 ? 'block' : 'none';
          paintDenBox.style.display = paintDenDiv.childElementCount > 0 ? 'block' : 'none';
          paintSolariumBox.style.display = paintSolariumDiv.childElementCount > 0 ? 'block' : 'none';
          paintLaundryBox.style.display = paintLaundryDiv.childElementCount > 0 ? 'block' : 'none';
          paintFoyerBox.style.display = paintFoyerDiv.childElementCount > 0 ? 'block' : 'none';
          paintHallwayBox.style.display = paintHallwayDiv.childElementCount > 0 ? 'block' : 'none';


          appRangeBox.style.display = appRangeDiv.childElementCount > 0 ? 'block' : 'none';
          appFridgeBox.style.display = appFridgeDiv.childElementCount > 0 ? 'block' : 'none';
          appDishwasherBox.style.display = appDishwasherDiv.childElementCount > 0 ? 'block' : 'none';
          appHoodfanBox.style.display = appHoodfanDiv.childElementCount > 0 ? 'block' : 'none';
          appCooktopBox.style.display = appCooktopDiv.childElementCount > 0 ? 'block' : 'none';
          appOvenBox.style.display = appOvenDiv.childElementCount > 0 ? 'block' : 'none';
          appOverRangeMicrowaveBox.style.display = appOverRangeMicrowaveDiv.childElementCount > 0 ? 'block' : 'none';
          appWasherBox.style.display = appWasherDiv.childElementCount > 0 ? 'block' : 'none';
          appDryerBox.style.display = appDryerDiv.childElementCount > 0 ? 'block' : 'none';


          otherKitchenBox.style.display = otherKitchenDiv.childElementCount > 0 ? 'block' : 'none';
          otherEnsuiteBox.style.display = otherEnsuiteDiv.childElementCount > 0 ? 'block' : 'none';
          otherMainBox.style.display = otherMainDiv.childElementCount > 0 ? 'block' : 'none';
          otherBed1Box.style.display = otherBed1Div.childElementCount > 0 ? 'block' : 'none';
          otherBed2Box.style.display = otherBed2Div.childElementCount > 0 ? 'block' : 'none';
          otherBed3Box.style.display = otherBed3Div.childElementCount > 0 ? 'block' : 'none';
          otherLivingDiningBox.style.display = otherLivingDiningDiv.childElementCount > 0 ? 'block' : 'none';
          otherLivingBox.style.display = otherLivingDiv.childElementCount > 0 ? 'block' : 'none';
          otherDiningBox.style.display = otherDiningDiv.childElementCount > 0 ? 'block' : 'none';
          otherBreakfastBox.style.display = otherBreakfastDiv.childElementCount > 0 ? 'block' : 'none';
          otherDenBox.style.display = otherDenDiv.childElementCount > 0 ? 'block' : 'none';
          otherSolariumBox.style.display = otherSolariumDiv.childElementCount > 0 ? 'block' : 'none';
          otherLaundryBox.style.display = otherLaundryDiv.childElementCount > 0 ? 'block' : 'none';
          otherFoyerBox.style.display = otherFoyerDiv.childElementCount > 0 ? 'block' : 'none';
          otherHallwayBox.style.display = otherHallwayDiv.childElementCount > 0 ? 'block' : 'none';





          const demolishBoxDiv = document.querySelector('.demolishBox');
          if (!demolishBoxDiv) {
              console.error('demolishBoxDiv not found in the document');
              return;
          }
          const dmRoomDivs = demolishBoxDiv.querySelectorAll('.dmRoomBox');
          let hasDmItem = false;
          dmRoomDivs.forEach(dmRoomDiv => {
              const dmItemDiv = dmRoomDiv.querySelector('.item-list');
              if (dmItemDiv && dmItemDiv.childElementCount > 0) {
                  hasDmItem = true;
              }
          });
          if (hasDmItem) {
              demolishBoxDiv.style.display = 'block';
          } else {
              demolishBoxDiv.style.display = 'none';
          }


          const floorDmBoxDiv = document.querySelector('.floorDmBox');
          const roomDivs = floorDmBoxDiv.querySelectorAll('.roomBox');
          let hasItems = false;
          roomDivs.forEach(roomDiv => {
              const itemDiv = roomDiv.querySelector('.item-list');
              // console.log(`Checking room: ${roomDiv.className}`);
              
              if (itemDiv.childElementCount > 0) {
                  hasItems = true;
                  // console.log(`roomDiv ${roomDiv.className} has items`);
              } else {
                  // console.log(`roomDiv ${roomDiv.className} has no items`);
              }
          });
              if (hasItems) {
                  floorDmBoxDiv.style.display = 'block';
                  // console.log('floorDmBox is set to display block');
              } else {
                  floorDmBoxDiv.style.display = 'none';
                  // console.log('floorDmBox is set to display none');
              }


          const floorBoxDiv = document.querySelector('.floorBox');
          const flRoomDivs = floorBoxDiv.querySelectorAll('.flRoomBox');
          let hasFlItems = false;
          flRoomDivs.forEach(flRoomDiv => {
              const flItemDiv = flRoomDiv.querySelector('.item-list');
              // console.log(`Checking room: ${flRoomDiv.className}`);
              
              if (flItemDiv.childElementCount > 0) {
                  hasFlItems = true;
                  // console.log(`flRoomDiv ${flRoomDiv.className} has items`);
              } else {
                  // console.log(`flRoomDiv ${flRoomDiv.className} has no items`);
              }
          });
              if (hasFlItems) {
                  floorBoxDiv.style.display = 'block';
                  // console.log('floorBox is set to display block');
              } else {
                  floorBoxDiv.style.display = 'none';
                  // console.log('floorBox is set to display none');
              }

          const paintBoxDiv = document.querySelector('.paintBox');
          const paRoomDivs = paintBoxDiv.querySelectorAll('.paRoomBox');
          let hasPaItems = false;
          paRoomDivs.forEach(paRoomDiv => {
              const paItemDiv = paRoomDiv.querySelector('.item-list');
              console.log(`Checking room: ${paRoomDiv.className}`);
              
              if (paItemDiv.childElementCount > 0) {
                  hasPaItems = true;
                  console.log(`paRoomDiv ${paRoomDiv.className} has items`);
              } else {
                  console.log(`paRoomDiv ${paRoomDiv.className} has no items`);
              }
          });
              if (hasPaItems) {
                  paintBoxDiv.style.display = 'block';
                  console.log('paintBox is set to display block');
              } else {
                  paintBoxDiv.style.display = 'none';
                  console.log('paintBox is set to display none');
              }

          
          const applianceBoxDiv = document.querySelector('.applianceBox');
          const apRoomDivs = applianceBoxDiv.querySelectorAll('.apRoomBox');
          let hasApItems = false;
          apRoomDivs.forEach(apRoomDiv => {
              const apItemDiv = apRoomDiv.querySelector('.item-list');
              console.log(`Checking room: ${apRoomDiv.className}`);
              
              if (apItemDiv.childElementCount > 0) {
                  hasApItems = true;
                  console.log(`apRoomDiv ${apRoomDiv.className} has items`);
              } else {
                  console.log(`apRoomDiv ${apRoomDiv.className} has no items`);
              }
          });
              if (hasApItems) {
                  applianceBoxDiv.style.display = 'block';
                  console.log('applianceBox is set to display block');
              } else {
                  applianceBoxDiv.style.display = 'none';
                  console.log('applianceBox is set to display none');
              }



          const kitchenDiv = document.getElementById('kitchenItems');
          const kitchenBox = document.querySelector('.kitchenBox');

          kitchenItems.forEach(item => addItemToDiv(item, kitchenDiv));


          console.log('Checking kitchenBox display condition:');
          console.log('kitchenDiv childElementCount:', kitchenDiv.childElementCount);
          if (kitchenDiv.childElementCount > 0) {
              kitchenBox.style.display = 'block';
              console.log('kitchenBox is set to display block');
          } else {
              kitchenBox.style.display = 'none';
              console.log('kitchenBox is set to display none');
          }



          const ensuiteDiv = document.getElementById('ensuiteItems');
          const ensuiteBox = document.querySelector('.ensuiteBox');
          ensuiteItems.forEach(item => addItemToDiv(item, ensuiteDiv));
          console.log('Checking ensuiteBox display condition:');
          console.log('ensuiteDiv childElementCount:', ensuiteDiv.childElementCount);
          if (ensuiteDiv.childElementCount > 0) {
              ensuiteBox.style.display = 'block';
              console.log('ensuiteBox is set to display block');
          } else {
              ensuiteBox.style.display = 'none';
              console.log('ensuiteBox is set to display none');
          }

          const mainDiv = document.getElementById('mainItems');
          const mainBox = document.querySelector('.mainBox');
          mainItems.forEach(item => addItemToDiv(item, mainDiv));
          console.log('Checking mainBox display condition:');
          console.log('mainDiv childElementCount:', mainDiv.childElementCount);
          if (mainDiv.childElementCount > 0) {
              mainBox.style.display = 'block';
              console.log('mainBox is set to display block');
          } else {
              mainBox.style.display = 'none';
              console.log('mainBox is set to display none');
          }


          const powderDiv = document.getElementById('powderItems');
          const powderBox = document.querySelector('.powderBox');
          powderItems.forEach(item => addItemToDiv(item, powderDiv));
          console.log('Checking powderBox display condition:');
          console.log('powderDiv childElementCount:', powderDiv.childElementCount);
          if (powderDiv.childElementCount > 0) {
              powderBox.style.display = 'block';
              console.log('powderBox is set to display block');
          } else {
              powderBox.style.display = 'none';
              console.log('powderBox is set to display none');
          }


          const otherBoxDiv = document.querySelector('.otherBox');
          const otRoomDivs = otherBoxDiv.querySelectorAll('.otRoomBox');
          let hasOtItems = false;
          otRoomDivs.forEach(otRoomDiv => {
              const otItemDiv = otRoomDiv.querySelector('.item-list');
              console.log(`Checking room: ${otRoomDiv.className}`);
              
              if (otItemDiv.childElementCount > 0) {
                  hasOtItems = true;
                  console.log(`otRoomDiv ${otRoomDiv.className} has items`);
              } else {
                  console.log(`otRoomDiv ${otRoomDiv.className} has no items`);
              }
          });
              if (hasOtItems) {
                  otherBoxDiv.style.display = 'block';
                  console.log('otherBox is set to display block');
              } else {
                  otherBoxDiv.style.display = 'none';
                  console.log('otherBox is set to display none');
              }



          console.log('Function displaySelectedItems execution completed');
      }

      window.onload = displaySelectedItems;
