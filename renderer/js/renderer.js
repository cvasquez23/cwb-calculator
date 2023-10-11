document.addEventListener("DOMContentLoaded", function () {
  const addEventListenerBySelector = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener(event, callback);
    });
  };

  const callMultipleFunctions =
    (...funcs) =>
    () =>
      funcs.forEach((func) => func());

  const addEventListenerById = (id, event, callback) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener(event, callback);
    }
  };

  const observeElementById = (id, callback) => {
    const element = document.getElementById(id);
    if (element) {
      new MutationObserver(callback).observe(element, { characterData: true, childList: true, subtree: true });
    }
  };

  // Inf event listeners
  addEventListenerBySelector("#target-size", "input", densityModifier);
  addEventListenerBySelector("#inf-fire-characteristics", "input", baseEfficiency);
  addEventListenerBySelector("#fire-mods", "change", standardFireValue);
  addEventListenerBySelector('input[name="quality"], input[name="fatigue"]', "change", infFireTotalModifier);
  addEventListenerBySelector(
    'input[name="hexside"], input[name="hex"], input[name="elevation"], input[name="other"]',
    "change",
    callMultipleFunctions(hexsideModifier, hexModifier, elevationModifier, otherModifiers, additionalModifiers, targetUnitTotalModifier, lowCombatValue, highCombatValue)
  );
  addEventListenerBySelector("[name='fire-mods']", "change", callMultipleFunctions(fireModifiers, lowCombatValue, highCombatValue));

  // Artillery event listeners
  addEventListenerById("art-firing-strength", "input", artBaseEfficiency);
  addEventListenerById("art-range", "change", artBaseEfficiency);
  addEventListenerBySelector('input[name="art-weapon"]', "change", artBaseEfficiency);
  addEventListenerBySelector('input[name="art-quality"]', "change", function () {
    artQualityModifier();
    artFireTotalModifier();
  });
  addEventListenerBySelector('input[name="art-fatigue"]', "change", function () {
    artFatigueModifier();
    artFireTotalModifier();
  });
  addEventListenerById("art-disrupted", "change", artFireModifiers);
  addEventListenerById("art-moved-fire", "change", artFireModifiers);
  addEventListenerById("art-disrupted", "change", artStandardFireValue);
  addEventListenerById("art-moved-fire", "change", artStandardFireValue);

  // MutationObservers
  observeElementById("art-base-efficiency", artStandardFireValue);
  observeElementById("density-modifier", artStandardFireValue);
  observeElementById("art-standard-fire-value", function () {
    artLowCombatValue();
    artHighCombatValue();
  });
  observeElementById("art-fire-mod", function () {
    artLowCombatValue();
    artHighCombatValue();
  });
  observeElementById("target-unit-total-modifier", function () {
    artLowCombatValue();
    artHighCombatValue();
  });

  document.getElementById("gameSelection").addEventListener("change", function () {
    baseEfficiency();
    artBaseEfficiency();
    densityModifier();
  });

  // Initialize values
  densityModifier();
  baseEfficiency();
  hexsideModifier();
  hexModifier();
  elevationModifier();
  otherModifiers();
  additionalModifiers();
  targetUnitTotalModifier();
  infFatigueModifier();
  infQualityModifier();
  infFireTotalModifier();
  fireModifiers();
  lowCombatValue();
  highCombatValue();
  artBaseEfficiency();
  artFireModifiers();
  artQualityModifier();
  artFatigueModifier();
  artFireTotalModifier();
  artStandardFireValue();
  artLowCombatValue();
  artHighCombatValue();

  // TARGET HEX FUNCTIONS
  // DENSITY MODIFIER
  async function densityModifier() {
    const selectedGame = document.getElementById("gameSelection").value;
    const targetSizeInput = document.getElementById("target-size");
    const stackValue = parseFloat(targetSizeInput.value);

    let maxStackValue;

    try {
      const response = await fetch("../databases/maxStack.json");
      const data = await response.json();
      const gameData = data[0]; // Since it's an array with one object
      maxStackValue = parseFloat(gameData[selectedGame]);
    } catch (error) {
      console.error("An error occurred while fetching maxStackValue:", error);
      return;
    }

    const stackValueRatio = stackValue / maxStackValue;
    let result;

    if (!isNaN(stackValue)) {
      if (stackValueRatio <= 0.67) {
        result = 1;
      } else if (stackValueRatio < 0.69) {
        result = 1.02;
      } else if (stackValueRatio < 0.7) {
        result = 1.03;
      } else if (stackValueRatio < 0.71) {
        result = 1.05;
      } else if (stackValueRatio < 0.72) {
        result = 1.06;
      } else if (stackValueRatio < 0.73) {
        result = 1.08;
      } else if (stackValueRatio < 0.74) {
        result = 1.09;
      } else if (stackValueRatio < 0.75) {
        result = 1.11;
      } else if (stackValueRatio < 0.76) {
        result = 1.12;
      } else if (stackValueRatio < 0.77) {
        result = 1.14;
      } else if (stackValueRatio < 0.78) {
        result = 1.15;
      } else if (stackValueRatio < 0.79) {
        result = 1.17;
      } else if (stackValueRatio < 0.8) {
        result = 1.18;
      } else if (stackValueRatio < 0.81) {
        result = 1.2;
      } else if (stackValueRatio < 0.82) {
        result = 1.21;
      } else if (stackValueRatio < 0.83) {
        result = 1.23;
      } else if (stackValueRatio < 0.84) {
        result = 1.24;
      } else if (stackValueRatio < 0.85) {
        result = 1.26;
      } else if (stackValueRatio < 0.86) {
        result = 1.27;
      } else if (stackValueRatio < 0.87) {
        result = 1.29;
      } else if (stackValueRatio < 0.88) {
        result = 1.3;
      } else if (stackValueRatio < 0.89) {
        result = 1.32;
      } else if (stackValueRatio < 0.9) {
        result = 1.33;
      } else if (stackValueRatio < 0.91) {
        result = 1.35;
      } else if (stackValueRatio < 0.92) {
        result = 1.36;
      } else if (stackValueRatio < 0.93) {
        result = 1.38;
      } else if (stackValueRatio < 0.94) {
        result = 1.39;
      } else if (stackValueRatio < 0.95) {
        result = 1.41;
      } else if (stackValueRatio < 0.967) {
        result = 1.42;
      } else if (stackValueRatio < 0.97) {
        result = 1.45;
      } else if (stackValueRatio < 0.98) {
        result = 1.45;
      } else if (stackValueRatio < 0.99) {
        result = 1.47;
      } else if (stackValueRatio < 1) {
        result = 1.48;
      } else if (stackValueRatio <= 1) {
        result = 1.5;
      }
    }

    const densityModifierOutput = document.getElementById("density-modifier");
    densityModifierOutput.textContent = result.toFixed(2);

    standardFireValue();
  }

  // TARGET UNIT MODIFIER = HEXSIDE MODIFIER + HEX MODIFIER + ADDITIONAL MODIFIERS
  // HEXSIDE MODIFIER
  function hexsideModifier() {
    const hexsideInputs = document.querySelectorAll('input[name="hexside"]:checked');
    let sum = 0;
    hexsideInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("hexside-modifier").textContent = (sum * 100).toFixed(0) + "%";
  }

  // HEX MODIFIER
  function hexModifier() {
    const hexInputs = document.querySelectorAll('input[name="hex"]:checked');
    let sum = 0;
    hexInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("hex-modifier").textContent = (sum * 100).toFixed(0) + "%";
  }

  // ELEVATION MODIFIER
  function elevationModifier() {
    const elevationInput = document.querySelector('input[name="elevation"]:checked');
    const value = parseFloat(elevationInput.value);
    document.getElementById("elevation-modifier").textContent = (value * 100).toFixed(0) + "%";
  }

  // OTHER MODIFIERS
  function otherModifiers() {
    const otherInputs = document.querySelectorAll('input[name="other"]:checked');
    let sum = 0;
    otherInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("other-modifiers").textContent = (sum * 100).toFixed(0) + "%";
  }

  // ADDITIONAL MODIFIERS = ELEVATION MODIFIER + OTHER MODIFIERS
  function additionalModifiers() {
    const elevationValue = parseFloat(document.getElementById("elevation-modifier").textContent) / 100 || 0;
    const otherValue = parseFloat(document.getElementById("other-modifiers").textContent) / 100 || 0;
    const total = elevationValue + otherValue;
    document.getElementById("additional-modifier").textContent = (total * 100).toFixed(0) + "%";
  }

  // TARGET UNIT MODIFIER
  function targetUnitTotalModifier() {
    const hexsideValue = parseFloat(document.getElementById("hexside-modifier").textContent) / 100 || 0;
    const hexValue = parseFloat(document.getElementById("hex-modifier").textContent) / 100 || 0;
    const additionalValue = parseFloat(document.getElementById("additional-modifier").textContent) / 100 || 0;
    const total = hexsideValue + hexValue + additionalValue;
    document.getElementById("target-unit-total-modifier").textContent = (total * 100).toFixed(0) + "%";
  }

  // INFANTRY FUNCTIONS
  // BASE EFFICIENCY
  async function baseEfficiency() {
    const selectedGame = document.getElementById("gameSelection").value;
    const selectedRange = document.getElementById("range").value;
    const selectedWeapon = document.querySelector('input[name="weapon"]:checked');
    let weaponEfficiency = 0;

    // Consider different game database files
    let gameDatabaseFile;
    switch (selectedGame) {
      case "ant":
        gameDatabaseFile = "../databases/antGun.json";
        break;
      case "cor":
        gameDatabaseFile = "../databases/corGun.json";
        break;
      case "shi":
        gameDatabaseFile = "../databases/shiGun.json";
        break;
      // Add more games as needed
      default:
        console.error("Unknown game selected");
        return;
    }

    if (selectedRange && selectedWeapon) {
      try {
        const response = await fetch(gameDatabaseFile);
        const data = await response.json();
        const result = data.find((item) => item.range === selectedRange);
        weaponEfficiency = result[selectedWeapon.value] || 0;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    document.getElementById("weapon-efficiency").textContent = weaponEfficiency;

    let firingStrength = parseFloat(document.getElementById("firing-strength").value);
    let calculatedBaseEfficiency = weaponEfficiency * firingStrength;

    document.getElementById("base-efficiency").textContent = calculatedBaseEfficiency;

    standardFireValue();
  }

  // FIRE MODIFIERS
  function fireModifiers() {
    let mod_building = document.getElementById("building").checked ? parseFloat(document.getElementById("building").value) : 1;
    let mod_dismounted = document.getElementById("dismounted").checked ? parseFloat(document.getElementById("dismounted").value) : 1;
    let mod_disrupted = document.getElementById("disrupted").checked ? parseFloat(document.getElementById("disrupted").value) : 1;
    let mod_moved = document.getElementById("moved-fire").checked ? parseFloat(document.getElementById("moved-fire").value) : 1;

    let totalModifier = mod_building * mod_dismounted * mod_disrupted * mod_moved;

    let percentageValue = (1 - totalModifier) * 100;
    document.getElementById("fire-modifier").textContent = `-${percentageValue.toFixed(2)}%`;
  }

  // STANDARD FIRE VALUE
  function standardFireValue() {
    let baseEfficiency = parseFloat(document.getElementById("base-efficiency").textContent);
    let densityModifier = parseFloat(document.getElementById("density-modifier").textContent);

    let mod_building = document.getElementById("building").checked ? parseFloat(document.getElementById("building").value) : 1;
    let mod_dismounted = document.getElementById("dismounted").checked ? parseFloat(document.getElementById("dismounted").value) : 1;
    let mod_disrupted = document.getElementById("disrupted").checked ? parseFloat(document.getElementById("disrupted").value) : 1;
    let mod_moved = document.getElementById("moved-fire").checked ? parseFloat(document.getElementById("moved-fire").value) : 1;

    let standardFireValue = baseEfficiency * densityModifier * mod_building * mod_dismounted * mod_disrupted * mod_moved;

    document.getElementById("standard-fire-value").textContent = standardFireValue.toFixed(2);

    lowCombatValue();
    highCombatValue();
  }

  // INFANTRY FIRE UNIT MODIFIER
  // QUALITY MODIFIER
  function infQualityModifier() {
    const selectedQuality = document.querySelector('input[name="quality"]:checked');
    const qualityValue = selectedQuality ? parseFloat(selectedQuality.value) : 0;
    const percentageValue = (qualityValue * 100).toFixed(0) + "%";

    document.getElementById("inf-quality-mod").textContent = percentageValue;

    return qualityValue;
  }

  // FATIGUE MODIFIER
  function infFatigueModifier() {
    const selectedFatigue = document.querySelector('input[name="fatigue"]:checked');
    const fatigueValue = selectedFatigue ? parseFloat(selectedFatigue.value) : 0;
    const percentageValue = (fatigueValue * 100).toFixed(0) + "%";

    document.getElementById("inf-fatigue-mod").textContent = percentageValue;

    return fatigueValue;
  }

  // INF FIRE TOTAL MODIFIER
  function infFireTotalModifier() {
    const totalQualityValue = infQualityModifier();
    const totalFatigueValue = infFatigueModifier();

    const totalModifier = totalQualityValue + totalFatigueValue;

    const percentageValue = (totalModifier * 100).toFixed(0) + "%";

    document.getElementById("inf-fire-mod").textContent = percentageValue;

    lowCombatValue();
    highCombatValue();
  }

  // FINAL CALCULATIONS
  // LOW COMBAT VALUE
  function lowCombatValue() {
    const standardFireValue = parseFloat(document.getElementById("standard-fire-value").textContent) || 0;
    const infFireTotalModifier = parseFloat(document.getElementById("inf-fire-mod").textContent) / 100 + 1 || 1;
    const targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-total-modifier").textContent) / 100 + 1 || 1;

    const result = (standardFireValue * infFireTotalModifier * targetUnitFireModifiers * 5) / 1000 || 0;

    document.getElementById("low-combat-value").textContent = result.toFixed(2);
  }

  // HIGH COMBAT VALUE
  function highCombatValue() {
    const standardFireValue = parseFloat(document.getElementById("standard-fire-value").textContent) || 0;
    const infFireTotalModifier = parseFloat(document.getElementById("inf-fire-mod").textContent) / 100 + 1 || 1;
    const targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-total-modifier").textContent) / 100 + 1 || 1;

    const result = (standardFireValue * infFireTotalModifier * targetUnitFireModifiers * 25) / 1000 || 0;

    document.getElementById("high-combat-value").textContent = result.toFixed(2);
  }

  // ARTILLERY FUNCTIONS
  // BASE EFFICIENCY
  async function artBaseEfficiency() {
    const selectedGame = document.getElementById("gameSelection").value;
    const selectedRange = document.getElementById("art-range").value;
    const selectedWeapon = document.querySelector('input[name="art-weapon"]:checked');
    let weaponEfficiency = 0;

    // Consider different game database files for artillery
    let gameDatabaseFile;
    switch (selectedGame) {
      case "ant":
        gameDatabaseFile = "../databases/antArt.json";
        break;
      case "cor":
        gameDatabaseFile = "../databases/corArt.json";
        break;
      case "shi":
        gameDatabaseFile = "../databases/shiArt.json";
        break;
      // Add more games as needed
      default:
        console.error("Unknown game selected");
        return;
    }

    if (selectedRange && selectedWeapon) {
      try {
        const response = await fetch(gameDatabaseFile);
        const data = await response.json();
        const result = data.find((item) => item.range === selectedRange);
        weaponEfficiency = result[selectedWeapon.value] || 0;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    document.getElementById("art-weapon-efficiency").textContent = weaponEfficiency;

    let firingStrength = parseFloat(document.getElementById("art-firing-strength").value);
    let calculatedBaseEfficiency = weaponEfficiency * firingStrength * 50;

    document.getElementById("art-base-efficiency").textContent = calculatedBaseEfficiency;

    artStandardFireValue();
  }

  // ARTILLERY FIRE MODIFIERS
  function artFireModifiers() {
    let mod_disrupted = document.getElementById("art-disrupted").checked ? parseFloat(document.getElementById("art-disrupted").value) : 1;
    let mod_moved = document.getElementById("art-moved-fire").checked ? parseFloat(document.getElementById("art-moved-fire").value) : 1;

    let totalModifier = mod_disrupted * mod_moved;

    let percentageValue = (1 - totalModifier) * 100;
    document.getElementById("art-fire-modifier").textContent = `-${percentageValue.toFixed(2)}%`;
  }

  // ARTILLERY FIRE UNIT MODIFIER
  // ARTILLERY QUALITY MODIFIER
  function artQualityModifier() {
    const selectedQuality = document.querySelector('input[name="art-quality"]:checked');
    const qualityValue = selectedQuality ? parseFloat(selectedQuality.value) : 0;
    const percentageValue = (qualityValue * 100).toFixed(0) + "%";

    document.getElementById("art-quality-mod").textContent = percentageValue;

    return qualityValue;
  }

  // ARTILLERY FATIGUE MODIFIER
  function artFatigueModifier() {
    const selectedFatigue = document.querySelector('input[name="art-fatigue"]:checked');
    const fatigueValue = selectedFatigue ? parseFloat(selectedFatigue.value) : 0;
    const percentageValue = (fatigueValue * 100).toFixed(0) + "%";

    document.getElementById("art-fatigue-mod").textContent = percentageValue;

    return fatigueValue;
  }

  // ARTILLERY FIRE TOTAL MODIFIER
  function artFireTotalModifier() {
    const totalQualityValue = artQualityModifier();
    const totalFatigueValue = artFatigueModifier();

    const totalModifier = totalQualityValue + totalFatigueValue;

    const percentageValue = (totalModifier * 100).toFixed(0) + "%";

    document.getElementById("art-fire-mod").textContent = percentageValue;

    // ENABLE WHEN HIGH/LOW FUNCTIONS ENABLED
    artLowCombatValue();
    artHighCombatValue();
  }

  // FINAL ART CALCULATIONS
  // ARTILLERY STANDARD FIRE VALUE
  function artStandardFireValue() {
    let baseEfficiency = parseFloat(document.getElementById("art-base-efficiency").textContent);
    let densityModifier = parseFloat(document.getElementById("density-modifier").textContent);

    let mod_disrupted = document.getElementById("art-disrupted").checked ? parseFloat(document.getElementById("art-disrupted").value) : 1;
    let mod_moved = document.getElementById("art-moved-fire").checked ? parseFloat(document.getElementById("art-moved-fire").value) : 1;

    let standardFireValue = baseEfficiency * densityModifier * mod_disrupted * mod_moved;

    document.getElementById("art-standard-fire-value").textContent = standardFireValue.toFixed(2);

    // ENABLE WHEN HIGH/LOW FUNCTIONS ENABLED
    artLowCombatValue();
    artHighCombatValue();
  }

  // LOW COMBAT VALUE
  function artLowCombatValue() {
    const artStandardFireValue = parseFloat(document.getElementById("art-standard-fire-value").textContent) || 0;
    const artFireTotalModifier = parseFloat(document.getElementById("art-fire-mod").textContent) / 100 + 1 || 1;
    const targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-total-modifier").textContent) / 100 + 1 || 1;

    const result = (artStandardFireValue * artFireTotalModifier * targetUnitFireModifiers * 5) / 1000 || 0;

    document.getElementById("art-low-combat-value").textContent = result.toFixed(2);
  }

  // HIGH COMBAT VALUE
  function artHighCombatValue() {
    const artStandardFireValue = parseFloat(document.getElementById("art-standard-fire-value").textContent) || 0;
    const artFireTotalModifier = parseFloat(document.getElementById("art-fire-mod").textContent) / 100 + 1 || 1;
    const targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-total-modifier").textContent) / 100 + 1 || 1;

    const result = (artStandardFireValue * artFireTotalModifier * targetUnitFireModifiers * 25) / 1000 || 0;

    document.getElementById("art-high-combat-value").textContent = result.toFixed(2);
  }
});
