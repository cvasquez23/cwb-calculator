document.addEventListener("DOMContentLoaded", function () {
  // Event listeners
  document.getElementById("target-size").addEventListener("input", densityModifier);
  document.getElementById("fire-characteristics").addEventListener("input", baseEfficiency);
  document.getElementById("fire-mods").addEventListener("change", standardFireValue);

  // Initialize values
  densityModifier();
  baseEfficiency();
  standardFireValue();

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

  // STANDARD FIRE VALUE
  function standardFireValue() {
    let baseEfficiency = parseFloat(document.getElementById("base-efficiency").textContent);
    let densityModifier = parseFloat(document.getElementById("density-modifier").textContent);

    let modifiers = 1;
    modifiers *= document.getElementById("building").checked ? parseFloat(document.getElementById("building").value) : 1;
    modifiers *= document.getElementById("dismounted").checked ? parseFloat(document.getElementById("dismounted").value) : 1;
    modifiers *= document.getElementById("disrupted").checked ? parseFloat(document.getElementById("disrupted").value) : 1;
    modifiers *= document.getElementById("moved-fire").checked ? parseFloat(document.getElementById("moved-fire").value) : 1;

    let standardFireValue = baseEfficiency * densityModifier * modifiers;

    document.getElementById("standard-fire-value").textContent = standardFireValue.toFixed(2);
  }

  // DENSITY MODIFIER
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

      standardFireValue();
    }

    // Set the result in the HTML element with id "density-modifier"
    const densityModifierOutput = document.getElementById("density-modifier");
    densityModifierOutput.textContent = result.toFixed(2); // Assuming you want 2 decimal places
  }
});
