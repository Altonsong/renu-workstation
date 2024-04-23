function openWorkstation() {
  window.location.href = "../../workstation.html"
}

function getPart2() {

  const kitchenDmItems = [];
  const ensuiteDmItems = [];
  const mainDmItems = [];
  const powderDmItems = [];

  const floorBed1DmItems = [];
  const floorBed2DmItems = [];
  const floorBed3DmItems = [];
  const floorLivingDiningDmItems = [];
  const floorLivingDmItems = [];
  const floorDiningDmItems = [];
  const floorBreakfastDmItems = [];
  const floorDenDmItems = [];
  const floorSolariumDmItems = [];
  const floorLaundryDmItems = [];
  const floorFoyerDmItems = [];
  const floorHallwayDmItems = [];

  const kitchenItems = [];
  const ensuiteItems = [];
  const mainItems = [];
  const powderItems = [];

  const floorBed1Items = [];
  const floorBed2Items = [];
  const floorBed3Items = [];
  const floorLivingDiningItems = [];
  const floorLivingItems = [];
  const floorDiningItems = [];
  const floorBreakfastItems = [];
  const floorDenItems = [];
  const floorSolariumItems = [];
  const floorLaundryItems = [];
  const floorFoyerItems = [];
  const floorHallwayItems = [];

  const paintBed1Items = [];
  const paintBed2Items = [];
  const paintBed3Items = [];
  const paintLivingDiningItems = [];
  const paintLivingItems = [];
  const paintDiningItems = [];
  const paintBreakfastItems = [];
  const paintDenItems = [];
  const paintSolariumItems = [];
  const paintLaundryItems = [];
  const paintFoyerItems = [];
  const paintHallwayItems = [];

  const appRangeItems = [];
  const appFridgeItems = [];
  const appDishwasherItems = [];
  const appHoodfanItems = [];
  const appCooktopItems = [];
  const appOvenItems = [];
  const appOverRangeMicrowaveItems = [];
  const appWasherItems = [];
  const appDryerItems = [];

  const otherKitchenItems = [];
  const otherEnsuiteItems = [];
  const otherMainItems = [];
            
  const otherBed1Items = [];
  const otherBed2Items = [];
  const otherBed3Items = [];
  const otherLivingDiningItems = [];
  const otherLivingItems = [];
  const otherDiningItems = [];
  const otherBreakfastItems = [];
  const otherDenItems = [];
  const otherSolariumItems = [];
  const otherLaundryItems = [];
  const otherFoyerItems = [];
  const otherHallwayItems = [];


  document.querySelectorAll("#kitchenDemolishItem input[type='checkbox']:checked").forEach(checkbox => {
    kitchenDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#ensuiteBathroomDmItem input[type='checkbox']:checked").forEach(checkbox => {
    ensuiteDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#mainBathroomDmItem input[type='checkbox']:checked").forEach(checkbox => {
    mainDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#powderBathroomDmItem input[type='checkbox']:checked").forEach(checkbox => {
    powderDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorBed1DmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorBed1DmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorBed2DmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorBed2DmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorBed3DmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorBed3DmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorLivingDiningDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLivingDiningDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorLivingDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLivingDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorDiningDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorDiningDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorBreakfastDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorBreakfastDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorDenDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorDenDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorSolariumDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorSolariumDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorLaundryDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLaundryDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorFoyerDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorFoyerDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorHallwayDmItem input[type='checkbox']:checked").forEach(checkbox => {
    floorHallwayDmItems.push(checkbox.value);
  });

  document.querySelectorAll("#kitchenItem input[type='checkbox']:checked").forEach(checkbox => {
    kitchenItems.push(checkbox.value);
  });

  document.querySelectorAll("#ensuiteItem input[type='checkbox']:checked").forEach(checkbox => {
    ensuiteItems.push(checkbox.value);
  });

  document.querySelectorAll("#mainItem input[type='checkbox']:checked").forEach(checkbox => {
    mainItems.push(checkbox.value);
  });

  document.querySelectorAll("#powderItem input[type='checkbox']:checked").forEach(checkbox => {
    powderItems.push(checkbox.value);
  });

  //================================== floor document start

  document.querySelectorAll("#floorBed1Item input[type='checkbox']:checked").forEach(checkbox => {
    floorBed1Items.push(checkbox.value);
  });

  document.querySelectorAll("#floorBed2Item input[type='checkbox']:checked").forEach(checkbox => {
    floorBed2Items.push(checkbox.value);
  });

  document.querySelectorAll("#floorBed3Item input[type='checkbox']:checked").forEach(checkbox => {
    floorBed3Items.push(checkbox.value);
  });

  document.querySelectorAll("#floorLivingDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLivingDiningItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorLivingItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLivingItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    floorDiningItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorBreakfastItem input[type='checkbox']:checked").forEach(checkbox => {
    floorBreakfastItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorDenItem input[type='checkbox']:checked").forEach(checkbox => {
    floorDenItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorSolariumItem input[type='checkbox']:checked").forEach(checkbox => {
    floorSolariumItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorLaundryItem input[type='checkbox']:checked").forEach(checkbox => {
    floorLaundryItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorFoyerItem input[type='checkbox']:checked").forEach(checkbox => {
    floorFoyerItems.push(checkbox.value);
  });

  document.querySelectorAll("#floorHallwayItem input[type='checkbox']:checked").forEach(checkbox => {
    floorHallwayItems.push(checkbox.value);
  });

  //================================== floor document end

  //================================== paint document start

  document.querySelectorAll("#paintBed1Item input[type='checkbox']:checked").forEach(checkbox => {
    paintBed1Items.push(checkbox.value);
  });

  document.querySelectorAll("#paintBed2Item input[type='checkbox']:checked").forEach(checkbox => {
    paintBed2Items.push(checkbox.value);
  });

  document.querySelectorAll("#paintBed3Item input[type='checkbox']:checked").forEach(checkbox => {
    paintBed3Items.push(checkbox.value);
  });

  document.querySelectorAll("#paintLivingDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    paintLivingDiningItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintLivingItem input[type='checkbox']:checked").forEach(checkbox => {
    paintLivingItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    paintDiningItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintBreakfastItem input[type='checkbox']:checked").forEach(checkbox => {
    paintBreakfastItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintDenItem input[type='checkbox']:checked").forEach(checkbox => {
    paintDenItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintSolariumItem input[type='checkbox']:checked").forEach(checkbox => {
    paintSolariumItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintLaundryItem input[type='checkbox']:checked").forEach(checkbox => {
    paintLaundryItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintFoyerItem input[type='checkbox']:checked").forEach(checkbox => {
    paintFoyerItems.push(checkbox.value);
  });

  document.querySelectorAll("#paintHallwayItem input[type='checkbox']:checked").forEach(checkbox => {
    paintHallwayItems.push(checkbox.value);
  });

  //================================== paint document end

  //================================== appliance document start

  document.querySelectorAll("#appRangeItem input[type='checkbox']:checked").forEach(checkbox => {
    appRangeItems.push(checkbox.value);
  });

  document.querySelectorAll("#appFridgeItem input[type='checkbox']:checked").forEach(checkbox => {
    appFridgeItems.push(checkbox.value);
  });

  document.querySelectorAll("#appDishwasherItem input[type='checkbox']:checked").forEach(checkbox => {
    appDishwasherItems.push(checkbox.value);
  });

  document.querySelectorAll("#appHoodfanItem input[type='checkbox']:checked").forEach(checkbox => {
    appHoodfanItems.push(checkbox.value);
  });

  document.querySelectorAll("#appCooktopItem input[type='checkbox']:checked").forEach(checkbox => {
    appCooktopItems.push(checkbox.value);
  });

  document.querySelectorAll("#appOvenItem input[type='checkbox']:checked").forEach(checkbox => {
    appOvenItems.push(checkbox.value);
  });

  document.querySelectorAll("#appOverRangeMicrowaveItem input[type='checkbox']:checked").forEach(checkbox => {
    appOverRangeMicrowaveItems.push(checkbox.value);
  });

  document.querySelectorAll("#appWasherItem input[type='checkbox']:checked").forEach(checkbox => {
    appWasherItems.push(checkbox.value);
  });

  document.querySelectorAll("#appDryerItem input[type='checkbox']:checked").forEach(checkbox => {
    appDryerItems.push(checkbox.value);
  });

  //================================== appliance document end

  //================================== other document start

  document.querySelectorAll("#otherKitchenItem input[type='checkbox']:checked").forEach(checkbox => {
    otherKitchenItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherEnsuiteItem input[type='checkbox']:checked").forEach(checkbox => {
    otherEnsuiteItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherMainItem input[type='checkbox']:checked").forEach(checkbox => {
    otherMainItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherBed1Item input[type='checkbox']:checked").forEach(checkbox => {
    otherBed1Items.push(checkbox.value);
  });
  document.querySelectorAll("#otherBed2Item input[type='checkbox']:checked").forEach(checkbox => {
    otherBed2Items.push(checkbox.value);
  });
  document.querySelectorAll("#otherBed3Item input[type='checkbox']:checked").forEach(checkbox => {
    otherBed3Items.push(checkbox.value);
  });
  document.querySelectorAll("#otherLivingDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    otherLivingDiningItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherLivingItem input[type='checkbox']:checked").forEach(checkbox => {
    otherLivingItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherDiningItem input[type='checkbox']:checked").forEach(checkbox => {
    otherDiningItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherBreakfastItem input[type='checkbox']:checked").forEach(checkbox => {
    otherBreakfastItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherDenItem input[type='checkbox']:checked").forEach(checkbox => {
    otherDenItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherSolariumItem input[type='checkbox']:checked").forEach(checkbox => {
    otherSolariumItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherLaundryItem input[type='checkbox']:checked").forEach(checkbox => {
    otherLaundryItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherFoyerItem input[type='checkbox']:checked").forEach(checkbox => {
    otherFoyerItems.push(checkbox.value);
  });
  document.querySelectorAll("#otherHallwayItem input[type='checkbox']:checked").forEach(checkbox => {
    otherHallwayItems.push(checkbox.value);
  });

  //================================== other document end

  const urlParams = new URLSearchParams();

  kitchenDmItems.forEach(item => {
    urlParams.append("kitchenDmItem", item);
  });
  ensuiteDmItems.forEach(item => {
    urlParams.append("ensuiteDmItem", item);
  });
  mainDmItems.forEach(item => {
    urlParams.append("mainDmItem", item);
  });
  powderDmItems.forEach(item => {
    urlParams.append("powderDmItem", item);
  });
  floorBed1DmItems.forEach(item => {
    urlParams.append("floorBed1DmItem", item);
  });
  floorBed2DmItems.forEach(item => {
    urlParams.append("floorBed2DmItem", item);
  });
  floorBed3DmItems.forEach(item => {
    urlParams.append("floorBed3DmItem", item);
  });
  floorLivingDiningDmItems.forEach(item => {
    urlParams.append("floorLivingDiningDmItem", item);
  });
  floorLivingDmItems.forEach(item => {
    urlParams.append("floorLivingDmItem", item);
  });
  floorDiningDmItems.forEach(item => {
    urlParams.append("floorDiningDmItem", item);
  });
  floorBreakfastDmItems.forEach(item => {
    urlParams.append("floorBreakfastDmItem", item);
  });
  floorDenDmItems.forEach(item => {
    urlParams.append("floorDenDmItem", item);
  });
  floorSolariumDmItems.forEach(item => {
    urlParams.append("floorSolariumDmItem", item);
  });
  floorLaundryDmItems.forEach(item => {
    urlParams.append("floorLaundryDmItem", item);
  });
  floorFoyerDmItems.forEach(item => {
    urlParams.append("floorFoyerDmItem", item);
  });
  floorHallwayDmItems.forEach(item => {
    urlParams.append("floorHallwayDmItem", item);
  });
  kitchenItems.forEach(item => {
    urlParams.append("kitchenItem", item);
  });
  ensuiteItems.forEach(item => {
    urlParams.append("ensuiteItem", item);
  });
  mainItems.forEach(item => {
    urlParams.append("mainItem", item);
  });
  powderItems.forEach(item => {
    urlParams.append("powderItem", item);
  });

  //============================= floor forEach start

  floorBed1Items.forEach(item => {
    urlParams.append("floorBed1Item", item);
  });
  floorBed2Items.forEach(item => {
    urlParams.append("floorBed2Item", item);
  });
  floorBed3Items.forEach(item => {
    urlParams.append("floorBed3Item", item);
  });
  floorLivingDiningItems.forEach(item => {
    urlParams.append("floorLivingDiningItem", item);
  });
  floorLivingItems.forEach(item => {
    urlParams.append("floorLivingItem", item);
  });
  floorDiningItems.forEach(item => {
    urlParams.append("floorDiningItem", item);
  });
  floorBreakfastItems.forEach(item => {
    urlParams.append("floorBreakfastItem", item);
  });
  floorDenItems.forEach(item => {
    urlParams.append("floorDenItem", item);
  });
  floorSolariumItems.forEach(item => {
    urlParams.append("floorSolariumItem", item);
  });
  floorLaundryItems.forEach(item => {
    urlParams.append("floorLaundryItem", item);
  });
  floorFoyerItems.forEach(item => {
    urlParams.append("floorFoyerItem", item);
  });
  floorHallwayItems.forEach(item => {
    urlParams.append("floorHallwayItem", item);
  });

  //============================= floor forEach end

  //============================= paint forEach start

  paintBed1Items.forEach(item => {
    urlParams.append("paintBed1Item", item);
  });
  paintBed2Items.forEach(item => {
    urlParams.append("paintBed2Item", item);
  });
  paintBed3Items.forEach(item => {
    urlParams.append("paintBed3Item", item);
  });
  paintLivingDiningItems.forEach(item => {
    urlParams.append("paintLivingDiningItem", item);
  });
  paintLivingItems.forEach(item => {
    urlParams.append("paintLivingItem", item);
  });
  paintDiningItems.forEach(item => {
    urlParams.append("paintDiningItem", item);
  });
  paintBreakfastItems.forEach(item => {
    urlParams.append("paintBreakfastItem", item);
  });
  paintDenItems.forEach(item => {
    urlParams.append("paintDenItem", item);
  });
  paintSolariumItems.forEach(item => {
    urlParams.append("paintSolariumItem", item);
  });
  paintLaundryItems.forEach(item => {
    urlParams.append("paintLaundryItem", item);
  });
  paintFoyerItems.forEach(item => {
    urlParams.append("paintFoyerItem", item);
  });
  paintHallwayItems.forEach(item => {
    urlParams.append("paintHallwayItem", item);
  });

  //============================= paint forEach end

  //============================= appliance forEach start

  appRangeItems.forEach(item => {
    urlParams.append("appRangeItem", item);
  });
  appFridgeItems.forEach(item => {
    urlParams.append("appFridgeItem", item);
  });
  appDishwasherItems.forEach(item => {
    urlParams.append("appDishwasherItem", item);
  });
  appHoodfanItems.forEach(item => {
    urlParams.append("appHoodfanItem", item);
  });
  appCooktopItems.forEach(item => {
    urlParams.append("appCooktopItem", item);
  });
  appOvenItems.forEach(item => {
    urlParams.append("appOvenItem", item);
  });
  appOverRangeMicrowaveItems.forEach(item => {
    urlParams.append("appOverRangeMicrowaveItem", item);
  });
  appWasherItems.forEach(item => {
    urlParams.append("appWasherItem", item);
  });
  appDryerItems.forEach(item => {
    urlParams.append("appDryerItem", item);
  });

  //============================= appliance forEach end

  //============================= other forEach start

  otherKitchenItems.forEach(item => {
    urlParams.append("otherKitchenItem", item);
  });
  otherEnsuiteItems.forEach(item => {
    urlParams.append("otherEnsuiteItem", item);
  });            
  otherMainItems.forEach(item => {
    urlParams.append("otherMainItem", item);
  });     
  otherBed1Items.forEach(item => {
    urlParams.append("otherBed1Item", item);
  });     
  otherBed2Items.forEach(item => {
    urlParams.append("otherBed2Item", item);
  });     
  otherBed3Items.forEach(item => {
    urlParams.append("otherBed3Item", item);
  });     
  otherLivingDiningItems.forEach(item => {
    urlParams.append("otherLivingDiningItem", item);
  });     
  otherLivingItems.forEach(item => {
    urlParams.append("otherLivingItem", item);
  });     
  otherDiningItems.forEach(item => {
    urlParams.append("otherDiningItem", item);
  });     
  otherBreakfastItems.forEach(item => {
    urlParams.append("otherBreakfastItem", item);
  });     
  otherDenItems.forEach(item => {
    urlParams.append("otherDenItem", item);
  });     
  otherSolariumItems.forEach(item => {
    urlParams.append("otherSolariumItem", item);
  });     
  otherLaundryItems.forEach(item => {
    urlParams.append("otherLaundryItem", item);
  });     
  otherFoyerItems.forEach(item => {
    urlParams.append("otherFoyerItem", item);
  });     
  otherHallwayItems.forEach(item => {
    urlParams.append("otherHallwayItem", item);
  });     

  //============================= other forEach end

  window.open(`contract-part2.html?${urlParams.toString()}`, '_blank');
}


function onKitchenDmCheckboxChange(event) {
  const kitchenDmItemDiv = document.getElementById("kitchenDemolishItem");
  if (event.target.checked) {
    kitchenDmItemDiv.style.display = "block";
    createDmItemCheckboxes(kitchenDmItemDiv, kitchenDmItem, "kitchenDmItem");
  } else {
    kitchenDmItemDiv.style.display = "none";
    kitchenDmItemDiv.innerHTML = "";
  }
}

function onEnsuiteBathDmCheckboxChange(event) {
  const ensuiteBathDmItemDiv = document.getElementById("ensuiteBathroomDmItem");
  if (event.target.checked) {
    ensuiteBathDmItemDiv.style.display = "block";
    createDmItemCheckboxes(ensuiteBathDmItemDiv, bathDmItem, "bathDmItem");
  } else {
    ensuiteBathDmItemDiv.style.display = "none";
    ensuiteBathDmItemDiv.innerHTML = "";
  }
}

function onMainBathDmCheckboxChange(event) {
  const mainBathDmItemDiv = document.getElementById("mainBathroomDmItem");
  if (event.target.checked) {
    mainBathDmItemDiv.style.display = "block";
    createDmItemCheckboxes(mainBathDmItemDiv, bathDmItem, "bathDmItem");
  } else {
    mainBathDmItemDiv.style.display = "none";
    mainBathDmItemDiv.innerHTML = "";
  }
}

function onPowderBathDmCheckboxChange(event) {
  const powderBathDmItemDiv = document.getElementById("powderBathroomDmItem");
  if (event.target.checked) {
    powderBathDmItemDiv.style.display = "block";
    createDmItemCheckboxes(powderBathDmItemDiv, powderDmItem, "powderDmItem");
  } else {
    powderBathDmItemDiv.style.display = "none";
    powderBathDmItemDiv.innerHTML = "";
  }
}

function onFloorAreaDmCheckboxChange (event) {
  const floorDmAreaDiv = document.getElementById("floorDmArea");
  if (event.target.checked) {
    floorDmAreaDiv.style.display = "block"; 
  } else {
    floorDmAreaDiv.style.display = "none";
  }
}

function onFloorBed1DmCheckboxChange(event) {
  const floorBed1DmItemDiv = document.getElementById("floorBed1DmItem");
  if (event.target.checked) {
    floorBed1DmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed1DmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorBed1DmItemDiv.style.display = "none";
    floorBed1DmItemDiv.innerHTML = "";
  }
}

function onFloorBed2DmCheckboxChange(event) {
  const floorBed2DmItemDiv = document.getElementById("floorBed2DmItem");
  if (event.target.checked) {
    floorBed2DmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed2DmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorBed2DmItemDiv.style.display = "none";
    floorBed2DmItemDiv.innerHTML = "";
  }
}

function onFloorBed3DmCheckboxChange(event) {
  const floorBed3DmItemDiv = document.getElementById("floorBed3DmItem");
  if (event.target.checked) {
    floorBed3DmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed3DmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorBed3DmItemDiv.style.display = "none";
    floorBed3DmItemDiv.innerHTML = "";
  }
}

function onFloorLivingDiningDmCheckboxChange(event) {
  const floorLivingDiningDmItemDiv = document.getElementById("floorLivingDiningDmItem");
  if (event.target.checked) {
    floorLivingDiningDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorLivingDiningDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorLivingDiningDmItemDiv.style.display = "none";
    floorLivingDiningDmItemDiv.innerHTML = "";
  }
}

function onFloorLivingDmCheckboxChange(event) {
  const floorLivingDmItemDiv = document.getElementById("floorLivingDmItem");
  if (event.target.checked) {
    floorLivingDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorLivingDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorLivingDmItemDiv.style.display = "none";
    floorLivingDmItemDiv.innerHTML = "";
  }
}

function onFloorBreakfastDmCheckboxChange(event) {
  const floorBreakfastDmItemDiv = document.getElementById("floorBreakfastDmItem");
  if (event.target.checked) {
    floorBreakfastDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBreakfastDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorBreakfastDmItemDiv.style.display = "none";
    floorBreakfastDmItemDiv.innerHTML = "";
  }
}

function onFloorDenDmCheckboxChange(event) {
  const floorDenDmItemDiv = document.getElementById("floorDenDmItem");
  if (event.target.checked) {
    floorDenDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorDenDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorDenDmItemDiv.style.display = "none";
    floorDenDmItemDiv.innerHTML = "";
  }
}

function onFloorSolariumDmCheckboxChange(event) {
  const floorSolariumDmItemDiv = document.getElementById("floorSolariumDmItem");
  if (event.target.checked) {
    floorSolariumDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorSolariumDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorSolariumDmItemDiv.style.display = "none";
    floorSolariumDmItemDiv.innerHTML = "";
  }
}

function onFloorLaundryDmCheckboxChange(event) {
  const floorLaundryDmItemDiv = document.getElementById("floorLaundryDmItem");
  if (event.target.checked) {
    floorLaundryDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorLaundryDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorLaundryDmItemDiv.style.display = "none";
    floorLaundryDmItemDiv.innerHTML = "";
  }
}

function onFloorFoyerDmCheckboxChange(event) {
  const floorFoyerDmItemDiv = document.getElementById("floorFoyerDmItem");
  if (event.target.checked) {
    floorFoyerDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorFoyerDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorFoyerDmItemDiv.style.display = "none";
    floorFoyerDmItemDiv.innerHTML = "";
  }
}

function onFloorHallwayDmCheckboxChange(event) {
  const floorHallwayDmItemDiv = document.getElementById("floorHallwayDmItem");
  if (event.target.checked) {
    floorHallwayDmItemDiv.style.display = "block";
    createDmItemCheckboxes(floorHallwayDmItemDiv, floorDmItem, "floorDmItem");
  } else {
    floorHallwayDmItemDiv.style.display = "none";
    floorHallwayDmItemDiv.innerHTML = "";
  }
}

function onKitchenCheckboxChange(event) {
  const kitchenItemDiv = document.getElementById("kitchenItem");
  if (event.target.checked) {
    kitchenItemDiv.style.display = "block";
    createDmItemCheckboxes(kitchenItemDiv, kitchenItem, "kitchenItem");
  } else {
    kitchenItemDiv.style.display = "none";
    kitchenItemDiv.innerHTML = "";
  }
}

function onEnsuiteCheckboxChange(event) {
  const ensuiteItemDiv = document.getElementById("ensuiteItem");
  if (event.target.checked) {
    ensuiteItemDiv.style.display = "block";
    createDmItemCheckboxes(ensuiteItemDiv, bathItem, "bathItem");
  } else {
    ensuiteItemDiv.style.display = "none";
    ensuiteItemDiv.innerHTML = "";
  }
}

function onMainCheckboxChange(event) {
  const mainItemDiv = document.getElementById("mainItem");
  if (event.target.checked) {
    mainItemDiv.style.display = "block";
    createDmItemCheckboxes(mainItemDiv, bathItem, "bathItem");
  } else {
    mainItemDiv.style.display = "none";
    mainItemDiv.innerHTML = "";
  }
}

function onPowderCheckboxChange(event) {
  const powderItemDiv = document.getElementById("powderItem");
  if (event.target.checked) {
    powderItemDiv.style.display = "block";
    createDmItemCheckboxes(powderItemDiv, powderItem, "powderItem");
  } else {
    powderItemDiv.style.display = "none";
    powderItemDiv.innerHTML = "";
  }
}

//============================= floor function start

function onFloorAreaCheckboxChange (event) {
  const floorAreaDiv = document.getElementById("floorArea");
  if (event.target.checked) {
    floorAreaDiv.style.display = "block";
  } else {
    floorAreaDiv.style.display = "none";
  }
}

function onFloorBed1CheckboxChange(event) {
  const floorBed1ItemDiv = document.getElementById("floorBed1Item");
  if (event.target.checked) {
    floorBed1ItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed1ItemDiv, floorItem, "floorItem");
  } else {
    floorBed1ItemDiv.style.display = "none";
    floorBed1ItemDiv.innerHTML = "";
  }
}

function onFloorBed2CheckboxChange(event) {
  const floorBed2ItemDiv = document.getElementById("floorBed2Item");
  if (event.target.checked) {
    floorBed2ItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed2ItemDiv, floorItem, "floorItem");
  } else {
    floorBed2ItemDiv.style.display = "none";
    floorBed2ItemDiv.innerHTML = "";
  }
}

function onFloorBed3CheckboxChange(event) {
  const floorBed3ItemDiv = document.getElementById("floorBed3Item");
  if (event.target.checked) {
    floorBed3ItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBed3ItemDiv, floorItem, "floorItem");
  } else {
    floorBed3ItemDiv.style.display = "none";
    floorBed3ItemDiv.innerHTML = "";
  }
}

function onFloorLivingDiningCheckboxChange(event) {
  const floorLivingDiningItemDiv = document.getElementById("floorLivingDiningItem");
  if (event.target.checked) {
    floorLivingDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(floorLivingDiningItemDiv, floorItem, "floorItem");
  } else {
    floorLivingDiningItemDiv.style.display = "none";
    floorLivingDiningItemDiv.innerHTML = "";
  }
}

function onFloorLivingCheckboxChange(event) {
  const floorLivingItemDiv = document.getElementById("floorLivingItem");
  if (event.target.checked) {
  floorLivingItemDiv.style.display = "block";
  createDmItemCheckboxes(floorLivingItemDiv, floorItem, "floorItem");
  } else {
  floorLivingItemDiv.style.display = "none";
  floorLivingItemDiv.innerHTML = "";
  }
}

function onFloorDiningCheckboxChange(event) {
  const floorDiningItemDiv = document.getElementById("floorDiningItem");
  if (event.target.checked) {
    floorDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(floorDiningItemDiv, floorItem, "floorItem");
  } else {
    floorDiningItemDiv.style.display = "none";
    floorDiningItemDiv.innerHTML = "";
  }
}


function onFloorBreakfastCheckboxChange(event) {
  const floorBreakfastItemDiv = document.getElementById("floorBreakfastItem");
  if (event.target.checked) {
    floorBreakfastItemDiv.style.display = "block";
    createDmItemCheckboxes(floorBreakfastItemDiv, floorItem, "floorItem");
  } else {
    floorBreakfastItemDiv.style.display = "none";
    floorBreakfastItemDiv.innerHTML = "";
  }
}

function onFloorDenCheckboxChange(event) {
  const floorDenItemDiv = document.getElementById("floorDenItem");
  if (event.target.checked) {
    floorDenItemDiv.style.display = "block";
    createDmItemCheckboxes(floorDenItemDiv, floorItem, "floorItem");
  } else {
    floorDenItemDiv.style.display = "none";
    floorDenItemDiv.innerHTML = "";
  }
}

function onFloorSolariumCheckboxChange(event) {
  const floorSolariumItemDiv = document.getElementById("floorSolariumItem");
  if (event.target.checked) {
    floorSolariumItemDiv.style.display = "block";
    createDmItemCheckboxes(floorSolariumItemDiv, floorItem, "floorItem");
  } else {
    floorSolariumItemDiv.style.display = "none";
    floorSolariumItemDiv.innerHTML = "";
  }
}

function onFloorLaundryCheckboxChange(event) {
  const floorLaundryItemDiv = document.getElementById("floorLaundryItem");
  if (event.target.checked) {
    floorLaundryItemDiv.style.display = "block";
    createDmItemCheckboxes(floorLaundryItemDiv, floorItem, "floorItem");
  } else {
    floorLaundryItemDiv.style.display = "none";
    floorLaundryItemDiv.innerHTML = "";
  }
}

function onFloorFoyerCheckboxChange(event) {
  const floorFoyerItemDiv = document.getElementById("floorFoyerItem");
  if (event.target.checked) {
    floorFoyerItemDiv.style.display = "block";
    createDmItemCheckboxes(floorFoyerItemDiv, floorItem, "floorItem");
  } else {
    floorFoyerItemDiv.style.display = "none";
    floorFoyerItemDiv.innerHTML = "";
  }
}

function onFloorHallwayCheckboxChange(event) {
  const floorHallwayItemDiv = document.getElementById("floorHallwayItem");
  if (event.target.checked) {
    floorHallwayItemDiv.style.display = "block";
    createDmItemCheckboxes(floorHallwayItemDiv, floorItem, "floorItem");
  } else {
    floorHallwayItemDiv.style.display = "none";
    floorHallwayItemDiv.innerHTML = "";
  }
}

//============================= floor function end

//============================= paint function start

function onPaintAreaCheckboxChange (event) {
  const paintAreaDiv = document.getElementById("paintArea");
  if (event.target.checked) {
    paintAreaDiv.style.display = "block";
  } else {
    paintAreaDiv.style.display = "none";
  }
}

function onPaintBed1CheckboxChange(event) {
  const paintBed1ItemDiv = document.getElementById("paintBed1Item");
  if (event.target.checked) {
    paintBed1ItemDiv.style.display = "block";
    createDmItemCheckboxes(paintBed1ItemDiv, paintItem, "paintItem");
  } else {
    paintBed1ItemDiv.style.display = "none";
    paintBed1ItemDiv.innerHTML = "";
  }
}

function onPaintBed2CheckboxChange(event) {
  const paintBed2ItemDiv = document.getElementById("paintBed2Item");
  if (event.target.checked) {
    paintBed2ItemDiv.style.display = "block";
    createDmItemCheckboxes(paintBed2ItemDiv, paintItem, "paintItem");
  } else {
    paintBed2ItemDiv.style.display = "none";
    paintBed2ItemDiv.innerHTML = "";
  }
}

function onPaintBed3CheckboxChange(event) {
  const paintBed3ItemDiv = document.getElementById("paintBed3Item");
  if (event.target.checked) {
    paintBed3ItemDiv.style.display = "block";
    createDmItemCheckboxes(paintBed3ItemDiv, paintItem, "paintItem");
  } else {
    paintBed3ItemDiv.style.display = "none";
    paintBed3ItemDiv.innerHTML = "";
}
}

function onPaintLivingDiningCheckboxChange(event) {
  const paintLivingDiningItemDiv = document.getElementById("paintLivingDiningItem");
  if (event.target.checked) {
    paintLivingDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(paintLivingDiningItemDiv, paintItem, "paintItem");
  } else {
    paintLivingDiningItemDiv.style.display = "none";
    paintLivingDiningItemDiv.innerHTML = "";
  }
}

function onPaintLivingCheckboxChange(event) {
  const paintLivingItemDiv = document.getElementById("paintLivingItem");
  if (event.target.checked) {
    paintLivingItemDiv.style.display = "block";
    createDmItemCheckboxes(paintLivingItemDiv, paintItem, "paintItem");
  } else {
    paintLivingItemDiv.style.display = "none";
    paintLivingItemDiv.innerHTML = "";
  }
}

function onPaintDiningCheckboxChange(event) {
  const paintDiningItemDiv = document.getElementById("paintDiningItem");
  if (event.target.checked) {
    paintDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(paintDiningItemDiv, paintItem, "paintItem");
  } else {
    paintDiningItemDiv.style.display = "none";
    paintDiningItemDiv.innerHTML = "";
  }
}


function onPaintBreakfastCheckboxChange(event) {
  const paintBreakfastItemDiv = document.getElementById("paintBreakfastItem");
  if (event.target.checked) {
    paintBreakfastItemDiv.style.display = "block";
    createDmItemCheckboxes(paintBreakfastItemDiv, paintItem, "paintItem");
  } else {
    paintBreakfastItemDiv.style.display = "none";
    paintBreakfastItemDiv.innerHTML = "";
  }
}

function onPaintDenCheckboxChange(event) {
  const paintDenItemDiv = document.getElementById("paintDenItem");
  if (event.target.checked) {
    paintDenItemDiv.style.display = "block";
    createDmItemCheckboxes(paintDenItemDiv, paintItem, "paintItem");
  } else {
    paintDenItemDiv.style.display = "none";
    paintDenItemDiv.innerHTML = "";
  }
}

function onPaintSolariumCheckboxChange(event) {
  const paintSolariumItemDiv = document.getElementById("paintSolariumItem");
  if (event.target.checked) {
    paintSolariumItemDiv.style.display = "block";
    createDmItemCheckboxes(paintSolariumItemDiv, paintItem, "paintItem");
  } else {
    paintSolariumItemDiv.style.display = "none";
    paintSolariumItemDiv.innerHTML = "";
  }
}

function onPaintLaundryCheckboxChange(event) {
  const paintLaundryItemDiv = document.getElementById("paintLaundryItem");
  if (event.target.checked) {
    paintLaundryItemDiv.style.display = "block";
    createDmItemCheckboxes(paintLaundryItemDiv, paintItem, "paintItem");
  } else {
    paintLaundryItemDiv.style.display = "none";
    paintLaundryItemDiv.innerHTML = "";
  }
}

function onPaintFoyerCheckboxChange(event) {
  const paintFoyerItemDiv = document.getElementById("paintFoyerItem");
  if (event.target.checked) {
    paintFoyerItemDiv.style.display = "block";
    createDmItemCheckboxes(paintFoyerItemDiv, paintItem, "paintItem");
  } else {
    paintFoyerItemDiv.style.display = "none";
    paintFoyerItemDiv.innerHTML = "";
  }
}

function onPaintHallwayCheckboxChange(event) {
  const paintHallwayItemDiv = document.getElementById("paintHallwayItem");
  if (event.target.checked) {
    paintHallwayItemDiv.style.display = "block";
    createDmItemCheckboxes(paintHallwayItemDiv, paintItem, "paintItem");
  } else {
    paintHallwayItemDiv.style.display = "none";
    paintHallwayItemDiv.innerHTML = "";
  }
}

//============================= paint function end

//============================= appliance function start

function onApplianceAreaCheckboxChange (event) {
  const applianceAreaDiv = document.getElementById("applianceArea");
  if (event.target.checked) {
    applianceAreaDiv.style.display = "block";
  } else {
    applianceAreaDiv.style.display = "none";
  }
}

function onOtherAreaCheckboxChange (event) {
  const otherAreaDiv = document.getElementById("otherArea");
  if (event.target.checked) {
    otherAreaDiv.style.display = "block";
  } else {
    otherAreaDiv.style.display = "none";
  }
}





function onAppRangeCheckboxChange(event) {
  const appRangeItemDiv = document.getElementById("appRangeItem");
  if (event.target.checked) {
    appRangeItemDiv.style.display = "block";
    createDmItemCheckboxes(appRangeItemDiv, applianceItem, "applianceItem");
  } else {
    appRangeItemDiv.style.display = "none";
    appRangeItemDiv.innerHTML = "";
  }
}

function onAppFridgeCheckboxChange(event) {
  const appFridgeItemDiv = document.getElementById("appFridgeItem");
  if (event.target.checked) {
    appFridgeItemDiv.style.display = "block";
    createDmItemCheckboxes(appFridgeItemDiv, applianceItem, "applianceItem");
  } else {
    appFridgeItemDiv.style.display = "none";
    appFridgeItemDiv.innerHTML = "";
  }
}

function onAppDishwasherCheckboxChange(event) {
  const appDishwasherItemDiv = document.getElementById("appDishwasherItem");
  if (event.target.checked) {
    appDishwasherItemDiv.style.display = "block";
    createDmItemCheckboxes(appDishwasherItemDiv, applianceItem, "applianceItem");
  } else {
    appDishwasherItemDiv.style.display = "none";
    appDishwasherItemDiv.innerHTML = "";
  }
}

function onAppHoodfanCheckboxChange(event) {
  const appHoodfanItemDiv = document.getElementById("appHoodfanItem");
  if (event.target.checked) {
    appHoodfanItemDiv.style.display = "block";
    createDmItemCheckboxes(appHoodfanItemDiv, applianceItem, "applianceItem");
  } else {
    appHoodfanItemDiv.style.display = "none";
    appHoodfanItemDiv.innerHTML = "";
  }
}

function onAppCooktopCheckboxChange(event) {
  const appCooktopItemDiv = document.getElementById("appCooktopItem");
  if (event.target.checked) {
    appCooktopItemDiv.style.display = "block";
    createDmItemCheckboxes(appCooktopItemDiv, applianceItem, "applianceItem");
  } else {
    appCooktopItemDiv.style.display = "none";
    appCooktopItemDiv.innerHTML = "";
  }
}

function onAppOvenCheckboxChange(event) {
  const appOvenItemDiv = document.getElementById("appOvenItem");
  if (event.target.checked) {
    appOvenItemDiv.style.display = "block";
    createDmItemCheckboxes(appOvenItemDiv, applianceItem, "applianceItem");
  } else {
    appOvenItemDiv.style.display = "none";
    appOvenItemDiv.innerHTML = "";
  }
}

function onAppOverRangeMicrowaveItemsCheckboxChange(event) {
  const appOverRangeMicrowaveItemsItemDiv = document.getElementById("appOverRangeMicrowaveItemsItem");
  if (event.target.checked) {
    appOverRangeMicrowaveItemsItemDiv.style.display = "block";
    createDmItemCheckboxes(appOverRangeMicrowaveItemsItemDiv, applianceItem, "applianceItem");
  } else {
    appOverRangeMicrowaveItemsItemDiv.style.display = "none";
    appOverRangeMicrowaveItemsItemDiv.innerHTML = "";
  }
}

function onAppWasherCheckboxChange(event) {
  const appWasherItemDiv = document.getElementById("appWasherItem");
  if (event.target.checked) {
    appWasherItemDiv.style.display = "block";
    createDmItemCheckboxes(appWasherItemDiv, applianceItem, "applianceItem");
  } else {
    appWasherItemDiv.style.display = "none";
    appWasherItemDiv.innerHTML = "";
  }
}

function onAppDryerCheckboxChange(event) {
  const appDryerItemDiv = document.getElementById("appDryerItem");
  if (event.target.checked) {
    appDryerItemDiv.style.display = "block";
    createDmItemCheckboxes(appDryerItemDiv, applianceItem, "applianceItem");
  } else {
    appDryerItemDiv.style.display = "none";
    appDryerItemDiv.innerHTML = "";
  }
}



//============================= appliance function end


//============================= other function start

function onOtherKitchenCheckboxChange(event) {
  const otherKitchenItemDiv = document.getElementById("otherKitchenItem");
  if (event.target.checked) {
    otherKitchenItemDiv.style.display = "block";
    createDmItemCheckboxes(otherKitchenItemDiv, otherItem, "otherItem");
  } else {
    otherKitchenItemDiv.style.display = "none";
    otherKitchenItemDiv.innerHTML = "";
  }
}

function onOtherEnsuiteCheckboxChange(event) {
  const otherEnsuiteItemDiv = document.getElementById("otherEnsuiteItem");
  if (event.target.checked) {
    otherEnsuiteItemDiv.style.display = "block";
    createDmItemCheckboxes(otherEnsuiteItemDiv, otherItem, "otherItem");
  } else {
    otherEnsuiteItemDiv.style.display = "none";
    otherEnsuiteItemDiv.innerHTML = "";
  }
}

function onOtherMainCheckboxChange(event) {
  const otherMainItemDiv = document.getElementById("otherMainItem");
  if (event.target.checked) {
    otherMainItemDiv.style.display = "block";
    createDmItemCheckboxes(otherMainItemDiv, otherItem, "otherItem");
  } else {
    otherMainItemDiv.style.display = "none";
    otherMainItemDiv.innerHTML = "";
  }
}

function onOtherBed1CheckboxChange(event) {
  const otherBed1ItemDiv = document.getElementById("otherBed1Item");
  if (event.target.checked) {
    otherBed1ItemDiv.style.display = "block";
    createDmItemCheckboxes(otherBed1ItemDiv, otherItem, "otherItem");
  } else {
    otherBed1ItemDiv.style.display = "none";
    otherBed1ItemDiv.innerHTML = "";
  }
}

function onOtherBed2CheckboxChange(event) {
  const otherBed2ItemDiv = document.getElementById("otherBed2Item");
  if (event.target.checked) {
    otherBed2ItemDiv.style.display = "block";
    createDmItemCheckboxes(otherBed2ItemDiv, otherItem, "otherItem");
  } else {
    otherBed2ItemDiv.style.display = "none";
    otherBed2ItemDiv.innerHTML = "";
  }
}

function onOtherBed3CheckboxChange(event) {
  const otherBed3ItemDiv = document.getElementById("otherBed3Item");
  if (event.target.checked) {
    otherBed3ItemDiv.style.display = "block";
    createDmItemCheckboxes(otherBed3ItemDiv, otherItem, "otherItem");
  } else {
    otherBed3ItemDiv.style.display = "none";
    otherBed3ItemDiv.innerHTML = "";
  }
}

function onOtherLivingDiningCheckboxChange(event) {
  const otherLivingDiningItemDiv = document.getElementById("otherLivingDiningItem");
  if (event.target.checked) {
    otherLivingDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(otherLivingDiningItemDiv, otherItem, "otherItem");
  } else {
    otherLivingDiningItemDiv.style.display = "none";
    otherLivingDiningItemDiv.innerHTML = "";
  }
}

function onOtherLivingCheckboxChange(event) {
  const otherLivingItemDiv = document.getElementById("otherLivingItem");
  if (event.target.checked) {
    otherLivingItemDiv.style.display = "block";
    createDmItemCheckboxes(otherLivingItemDiv, otherItem, "otherItem");
  } else {
    otherLivingItemDiv.style.display = "none";
    otherLivingItemDiv.innerHTML = "";
  }
}

function onOtherDiningCheckboxChange(event) {
  const otherDiningItemDiv = document.getElementById("otherDiningItem");
  if (event.target.checked) {
    otherDiningItemDiv.style.display = "block";
    createDmItemCheckboxes(otherDiningItemDiv, otherItem, "otherItem");
  } else {
    otherDiningItemDiv.style.display = "none";
    otherDiningItemDiv.innerHTML = "";
  }
}

function onOtherBreakfastCheckboxChange(event) {
  const otherBreakfastItemDiv = document.getElementById("otherBreakfastItem");
  if (event.target.checked) {
    otherBreakfastItemDiv.style.display = "block";
    createDmItemCheckboxes(otherBreakfastItemDiv, otherItem, "otherItem");
  } else {
    otherBreakfastItemDiv.style.display = "none";
    otherBreakfastItemDiv.innerHTML = "";
  }
}

function onOtherDenCheckboxChange(event) {
  const otherDenItemDiv = document.getElementById("otherDenItem");
  if (event.target.checked) {
    otherDenItemDiv.style.display = "block";
    createDmItemCheckboxes(otherDenItemDiv, otherItem, "otherItem");
  } else {
    otherDenItemDiv.style.display = "none";
    otherDenItemDiv.innerHTML = "";
  }
}

function onOtherSolariumCheckboxChange(event) {
  const otherSolariumItemDiv = document.getElementById("otherSolariumItem");
  if (event.target.checked) {
    otherSolariumItemDiv.style.display = "block";
    createDmItemCheckboxes(otherSolariumItemDiv, otherItem, "otherItem");
  } else {
    otherSolariumItemDiv.style.display = "none";
    otherSolariumItemDiv.innerHTML = "";
  }
}

function onOtherLaundryCheckboxChange(event) {
  const otherLaundryItemDiv = document.getElementById("otherLaundryItem");
  if (event.target.checked) {
    otherLaundryItemDiv.style.display = "block";
    createDmItemCheckboxes(otherLaundryItemDiv, otherItem, "otherItem");
  } else {
    otherLaundryItemDiv.style.display = "none";
    otherLaundryItemDiv.innerHTML = "";
  }
}

function onOtherFoyerCheckboxChange(event) {
  const otherFoyerItemDiv = document.getElementById("otherFoyerItem");
  if (event.target.checked) {
    otherFoyerItemDiv.style.display = "block";
    createDmItemCheckboxes(otherFoyerItemDiv, otherItem, "otherItem");
  } else {
    otherFoyerItemDiv.style.display = "none";
    otherFoyerItemDiv.innerHTML = "";
  }
}

function onOtherHallwayCheckboxChange(event) {
  const otherHallwayItemDiv = document.getElementById("otherHallwayItem");
  if (event.target.checked) {
    otherHallwayItemDiv.style.display = "block";
    createDmItemCheckboxes(otherHallwayItemDiv, otherItem, "otherItem");
  } else {
    otherHallwayItemDiv.style.display = "none";
    otherHallwayItemDiv.innerHTML = "";
  }
}

//============================= other function end

function createDmItemCheckboxes(container, itemArray, name) {
  // 清空容器内容
  container.innerHTML = "";

  // 设置容器样式
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  // 遍历项目数组
  itemArray.forEach((item, index) => {
  // 创建复选框的唯一 ID
  const uniqueId = `${name}_${index}`;

  // 创建包装元素
  const wrapper = document.createElement("div");
  wrapper.className = 'wrapper';

  // 创建复选框
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = uniqueId;
  checkbox.name = name;
  checkbox.value = item;

  // 创建标签
  const label = document.createElement("label");
  label.htmlFor = uniqueId;
  label.textContent = item;

  // 添加事件监听器，阻止点击标签时的默认行为
  label.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认行为
  });

  // 将复选框和标签添加到包装元素中
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  // 将包装元素添加到容器中
  container.appendChild(wrapper);
  });
}
