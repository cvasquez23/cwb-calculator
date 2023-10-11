document.addEventListener("DOMContentLoaded", function () {
  // OLD EVENT LISTENER CODE
  // Utility function to add event listeners to elements by selector
  const addEventListenerBySelector = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener(event, callback);
    });
  };

  // Utility function for calling multiple functions
  const callMultipleFunctions =
    (...funcs) =>
    () =>
      funcs.forEach((func) => func());

  // Add event listeners
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

  // Add event listener for firing strength input
  document.getElementById("art-firing-strength").addEventListener("input", artBaseEfficiency);
  // Add event listener for range dropdown
  document.getElementById("art-range").addEventListener("change", artBaseEfficiency);
  // Add event listener for weapon radio buttons
  const weapons = document.querySelectorAll('input[name="art-weapon"]');
  weapons.forEach((weapon) => {
    weapon.addEventListener("change", artBaseEfficiency);
  });
  // Event listeners for artillery quality radio buttons
  const qualityRadioButtons = document.querySelectorAll('input[name="art-quality"]');
  qualityRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      artQualityModifier(); // You can optionally call this here since artFireTotalModifier() also calls it.
      artFireTotalModifier();
    });
  });

  // Event listeners for artillery fatigue radio buttons
  const fatigueRadioButtons = document.querySelectorAll('input[name="art-fatigue"]');
  fatigueRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      artFatigueModifier(); // You can optionally call this here since artFireTotalModifier() also calls it.
      artFireTotalModifier();
    });
  });

  // Add event listener for 'disrupted' checkbox
  document.getElementById("art-disrupted").addEventListener("change", artFireModifiers);

  // Add event listener for 'moved-fire' checkbox
  document.getElementById("art-moved-fire").addEventListener("change", artFireModifiers);
  const baseEfficiencyElement = document.getElementById("art-base-efficiency");
  new MutationObserver(artStandardFireValue).observe(baseEfficiencyElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in density-modifier content
  const densityModifierElement = document.getElementById("density-modifier");
  new MutationObserver(artStandardFireValue).observe(densityModifierElement, { characterData: true, childList: true, subtree: true });

  // Event listener for the art-disrupted checkbox
  document.getElementById("art-disrupted").addEventListener("change", artStandardFireValue);

  // Event listener for the art-moved-fire checkbox
  document.getElementById("art-moved-fire").addEventListener("change", artStandardFireValue);
  // Event listener for changes in art-standard-fire-value content
  const standardFireValueElement = document.getElementById("art-standard-fire-value");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(standardFireValueElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in art-fire-mod content
  const fireModElement = document.getElementById("art-fire-mod");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(fireModElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in target-unit-total-modifier content
  const targetUnitModifierElement = document.getElementById("target-unit-total-modifier");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(targetUnitModifierElement, { characterData: true, childList: true, subtree: true });
  // END OLD EVENT LISTENER CODE

  // Add event listener for firing strength input
  document.getElementById("art-firing-strength").addEventListener("input", artBaseEfficiency);
  // Add event listener for range dropdown
  document.getElementById("art-range").addEventListener("change", artBaseEfficiency);
  // Add event listener for weapon radio buttons
  const weapons = document.querySelectorAll('input[name="art-weapon"]');
  weapons.forEach((weapon) => {
    weapon.addEventListener("change", artBaseEfficiency);
  });
  // Event listeners for artillery quality radio buttons
  const qualityRadioButtons = document.querySelectorAll('input[name="art-quality"]');
  qualityRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      artQualityModifier(); // You can optionally call this here since artFireTotalModifier() also calls it.
      artFireTotalModifier();
    });
  });

  // Event listeners for artillery fatigue radio buttons
  const fatigueRadioButtons = document.querySelectorAll('input[name="art-fatigue"]');
  fatigueRadioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      artFatigueModifier(); // You can optionally call this here since artFireTotalModifier() also calls it.
      artFireTotalModifier();
    });
  });

  // Add event listener for 'disrupted' checkbox
  document.getElementById("art-disrupted").addEventListener("change", artFireModifiers);

  // Add event listener for 'moved-fire' checkbox
  document.getElementById("art-moved-fire").addEventListener("change", artFireModifiers);
  const baseEfficiencyElement = document.getElementById("art-base-efficiency");
  new MutationObserver(artStandardFireValue).observe(baseEfficiencyElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in density-modifier content
  const densityModifierElement = document.getElementById("density-modifier");
  new MutationObserver(artStandardFireValue).observe(densityModifierElement, { characterData: true, childList: true, subtree: true });

  // Event listener for the art-disrupted checkbox
  document.getElementById("art-disrupted").addEventListener("change", artStandardFireValue);

  // Event listener for the art-moved-fire checkbox
  document.getElementById("art-moved-fire").addEventListener("change", artStandardFireValue);
  // Event listener for changes in art-standard-fire-value content
  const standardFireValueElement = document.getElementById("art-standard-fire-value");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(standardFireValueElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in art-fire-mod content
  const fireModElement = document.getElementById("art-fire-mod");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(fireModElement, { characterData: true, childList: true, subtree: true });

  // Event listener for changes in target-unit-total-modifier content
  const targetUnitModifierElement = document.getElementById("target-unit-total-modifier");
  new MutationObserver(function () {
    artLowCombatValue();
    artHighCombatValue();
  }).observe(targetUnitModifierElement, { characterData: true, childList: true, subtree: true });

  // Initialize the values
  artBaseEfficiency();
  artFireModifiers();
  artQualityModifier();
  artFatigueModifier();
  artFireTotalModifier();
  artStandardFireValue();
  artLowCombatValue();
  artHighCombatValue();

  // ARTILLERY FUNCTIONS
  // BASE EFFICIENCY
  async function artBaseEfficiency() {
    const selectedRange = document.getElementById("art-range").value;
    const selectedWeapon = document.querySelector('input[name="art-weapon"]:checked');
    let weaponEfficiency = 0;

    if (selectedRange && selectedWeapon) {
      try {
        const response = await fetch("../databases/antArt.json");
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

    // Enable when artStandardFireValue(): is live
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
