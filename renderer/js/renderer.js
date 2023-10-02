document.addEventListener("DOMContentLoaded", function () {
  // Event listeners
  document.getElementById("target-size").addEventListener("input", densityModifier);
  document.getElementById("fire-characteristics").addEventListener("input", baseEfficiency);
  document.getElementById("fire-mods").addEventListener("change", standardFireValue);
  document.querySelectorAll('input[name="quality"]').forEach((radio) => {
    radio.addEventListener("change", infFireTotalModifier);
  });
  document.querySelectorAll('input[name="fatigue"]').forEach((radio) => {
    radio.addEventListener("change", infFireTotalModifier);
  });
  document.querySelectorAll('input[name="hexside"], input[name="hex"], input[name="elevation"], input[name="other"]').forEach((input) => {
    input.addEventListener("change", function () {
      hexsideModifier();
      hexModifier();
      elevationModifier();
      otherModifiers();
      additionalModifiers();
      targetUnitTotalModifier();
    });
  });

  const checkboxes = document.querySelectorAll("[name='fire-mods']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", fireModifiers);
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
  fireModifiers();

  function densityModifier() {
    // Get stackValue from the input element id "target-size"
    const targetSizeInput = document.getElementById("target-size");
    const stackValue = parseFloat(targetSizeInput.value);

    // Will be replaced with a fetch to a json file
    const maxStackValue = 1000;

    // Calculate stackValueRatio
    const stackValueRatio = stackValue / maxStackValue;

    let result;

    // Check stackValueRatio against specific ranges and update result accordingly
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

    // Set the result in the HTML element with id "density-modifier"
    const densityModifierOutput = document.getElementById("density-modifier");
    densityModifierOutput.textContent = result.toFixed(2); // Assuming you want 2 decimal places

    standardFireValue();
  }

  async function baseEfficiency() {
    const selectedRange = document.getElementById("range").value;
    const selectedWeapon = document.querySelector('input[name="weapon"]:checked');
    let weaponEfficiency = 0;

    if (selectedRange && selectedWeapon) {
      try {
        const response = await fetch("../databases/antGun.json");
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

  function fireModifiers() {
    // Fetch the values of the checkboxes, using 1 as a default if unchecked
    let mod_building = document.getElementById("building").checked ? parseFloat(document.getElementById("building").value) : 1;
    let mod_dismounted = document.getElementById("dismounted").checked ? parseFloat(document.getElementById("dismounted").value) : 1;
    let mod_disrupted = document.getElementById("disrupted").checked ? parseFloat(document.getElementById("disrupted").value) : 1;
    let mod_moved = document.getElementById("moved-fire").checked ? parseFloat(document.getElementById("moved-fire").value) : 1;

    // Calculate the total fire modifier by multiplying all individual modifiers together
    let totalModifier = mod_building * mod_dismounted * mod_disrupted * mod_moved;

    // Output the result to the designated element, converting it to a percentage for presentation
    let percentageValue = (1 - totalModifier) * 100; // Converting the modifier to a readable percentage reduction
    document.getElementById("fire-modifier").textContent = `-${percentageValue.toFixed(2)}%`; // Display the result as a percentage with two decimal places
  }

  // STANDARD FIRE VALUE
  function standardFireValue() {
    let baseEfficiency = parseFloat(document.getElementById("base-efficiency").textContent);
    let densityModifier = parseFloat(document.getElementById("density-modifier").textContent);

    // Fetching each modifier
    let mod_building = document.getElementById("building").checked ? parseFloat(document.getElementById("building").value) : 1;
    let mod_dismounted = document.getElementById("dismounted").checked ? parseFloat(document.getElementById("dismounted").value) : 1;
    let mod_disrupted = document.getElementById("disrupted").checked ? parseFloat(document.getElementById("disrupted").value) : 1;
    let mod_moved = document.getElementById("moved-fire").checked ? parseFloat(document.getElementById("moved-fire").value) : 1;

    // Calculate the standardFireValue using the given formula
    let standardFireValue = baseEfficiency * densityModifier * mod_building * mod_dismounted * mod_disrupted * mod_moved;

    // Update the content of the element with the calculated value
    document.getElementById("standard-fire-value").textContent = standardFireValue.toFixed(2); // Rounded to two decimal places for presentation
  }

  // INFANTRY FIRE UNIT MODIFIER
  // 1. Function to compute the Infantry Quality Modifier
  function infQualityModifier() {
    // Get the selected radio button for quality
    const selectedQuality = document.querySelector('input[name="quality"]:checked');

    // If a radio button is selected, parse its value; otherwise, default to 0
    const qualityValue = selectedQuality ? parseFloat(selectedQuality.value) : 0;

    // Convert the result to a percentage for display
    const percentageValue = (qualityValue * 100).toFixed(0) + "%";

    // Update the DOM element with the computed value
    document.getElementById("inf-quality-mod").textContent = percentageValue;

    // Return the raw value for use in other calculations
    return qualityValue;
  }

  // 2. Function to compute the Infantry Fatigue Modifier
  function infFatigueModifier() {
    // Get the selected radio button for fatigue
    const selectedFatigue = document.querySelector('input[name="fatigue"]:checked');

    // If a radio button is selected, parse its value; otherwise, default to 0
    const fatigueValue = selectedFatigue ? parseFloat(selectedFatigue.value) : 0;

    // Convert the result to a percentage for display
    const percentageValue = (fatigueValue * 100).toFixed(0) + "%";

    // Update the DOM element with the computed value
    document.getElementById("inf-fatigue-mod").textContent = percentageValue;

    // Return the raw value for use in other calculations
    return fatigueValue;
  }

  // 3. Function to compute the Total Infantry Fire Modifier
  function infFireTotalModifier() {
    // Get the result of quality and fatigue functions
    const totalQualityValue = infQualityModifier();
    const totalFatigueValue = infFatigueModifier();

    // Compute the total modifier by adding quality and fatigue modifiers
    const totalModifier = totalQualityValue + totalFatigueValue;

    // Convert the result to a percentage for display
    const percentageValue = (totalModifier * 100).toFixed(0) + "%";

    // Update the DOM element with the computed total value
    document.getElementById("inf-fire-mod").textContent = percentageValue;
  }

  infFireTotalModifier();

  function hexsideModifier() {
    const hexsideInputs = document.querySelectorAll('input[name="hexside"]:checked');
    let sum = 0;
    hexsideInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("hexside-modifier").textContent = (sum * 100).toFixed(0) + "%";
  }

  function hexModifier() {
    const hexInputs = document.querySelectorAll('input[name="hex"]:checked');
    let sum = 0;
    hexInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("hex-modifier").textContent = (sum * 100).toFixed(0) + "%";
  }

  function elevationModifier() {
    const elevationInput = document.querySelector('input[name="elevation"]:checked');
    const value = parseFloat(elevationInput.value);
    document.getElementById("elevation-modifier").textContent = (value * 100).toFixed(0) + "%";
  }

  function otherModifiers() {
    const otherInputs = document.querySelectorAll('input[name="other"]:checked');
    let sum = 0;
    otherInputs.forEach((input) => {
      sum += parseFloat(input.value);
    });
    document.getElementById("other-modifiers").textContent = (sum * 100).toFixed(0) + "%";
  }

  function additionalModifiers() {
    const elevationValue = parseFloat(document.getElementById("elevation-modifier").textContent) / 100 || 0;
    const otherValue = parseFloat(document.getElementById("other-modifiers").textContent) / 100 || 0;
    const total = elevationValue + otherValue;
    document.getElementById("additional-modifier").textContent = (total * 100).toFixed(0) + "%";
  }

  function targetUnitTotalModifier() {
    const hexsideValue = parseFloat(document.getElementById("hexside-modifier").textContent) / 100 || 0;
    const hexValue = parseFloat(document.getElementById("hex-modifier").textContent) / 100 || 0;
    const additionalValue = parseFloat(document.getElementById("additional-modifier").textContent) / 100 || 0;
    const total = hexsideValue + hexValue + additionalValue;
    document.getElementById("target-unit-total-modifier").textContent = (total * 100).toFixed(0) + "%";
  }

  function lowCombatValue() {
    let standardFireValue = parseFloat(document.getElementById("standard-fire-value").textContent);
    let infFireTotalModifier = parseFloat(document.getElementById("inf-fire-total-modifier").textContent);
    let targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-fire-modifiers").textContent);

    let result = (standardFireValue * infFireTotalModifier * targetUnitFireModifiers * 5) / 1000;

    // Update the output
    document.getElementById("low-combat-value").textContent = result.toFixed(2); // To format to two decimal places
  }

  function highCombatValue() {
    let standardFireValue = parseFloat(document.getElementById("standard-fire-value").textContent);
    let infFireTotalModifier = parseFloat(document.getElementById("inf-fire-total-modifier").textContent);
    let targetUnitFireModifiers = parseFloat(document.getElementById("target-unit-fire-modifiers").textContent);

    let result = (standardFireValue * infFireTotalModifier * targetUnitFireModifiers * 25) / 1000;

    // Update the output
    document.getElementById("high-combat-value").textContent = result.toFixed(2); // To format to two decimal places
  }
});
