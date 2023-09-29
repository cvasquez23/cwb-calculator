function calculateStandardFireValue() {
  // Get the input values
  const firingStrength = parseFloat(document.getElementById("firingStrength").value);
  const baseEfficiency = parseFloat(document.getElementById("baseEfficiency").textContent);
  const densityModifier = parseFloat(document.getElementById("densityModifier").textContent);
  const buildingChecked = document.getElementById("building").checked;
  const dismountedChecked = document.getElementById("dismounted").checked;
  const disruptedChecked = document.getElementById("disrupted").checked;
  const movedFireChecked = document.getElementById("movedFire").checked;

  // Calculate the standard fire value based on the formula
  let standardFireValue = firingStrength * baseEfficiency * densityModifier;

  // Apply modifiers
  if (buildingChecked) {
    standardFireValue *= 1 - 0.30;
  }

  if (dismountedChecked) {
    standardFireValue *= 1 - 0.75;
  }

  if (disruptedChecked) {
    standardFireValue *= 1 - 0.50;
  }

  if (movedFireChecked) {
    standardFireValue *= 1 - 0.50;
  }

  // Check if the result is NaN and set it to 0
  if (isNaN(standardFireValue)) {
    standardFireValue = 0;
  }

  // Update the output element with the calculated value
  const standardFireValueOutput = document.getElementById("standardFireValue");
  standardFireValueOutput.textContent = standardFireValue;

  // FIRING CHARACTERISTICS
  // Function to calculate base efficiency
  async function calculateBaseEfficiency() {
    // Get the selected range and weapon values
    const selectedRange = document.getElementById("range").value;
    const selectedWeapon = document.querySelector('input[name="weapon"]:checked');

    // Check if both range and weapon are selected
    if (selectedRange && selectedWeapon) {
      try {
        // Fetch the JSON data from the file
        const response = await fetch("../databases/antGun.json");
        const data = await response.json();

        // Find the corresponding value in the JSON data
        const result = data.find(item => item.range === selectedRange);
        const baseEfficiency = result[selectedWeapon.value];

        // Update the output tag
        const outputElement = document.getElementById("baseEfficiency");
        outputElement.textContent = baseEfficiency || "0"; // Set to "0" if baseEfficiency is falsy
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      // If either range or weapon is not selected, set baseEfficiency to 0
      const outputElement = document.getElementById("baseEfficiency");
      outputElement.textContent = "0";
    }
  }

  // Initial calculation when the page loads
  calculateBaseEfficiency();
  calculateDensityMod(); // Also trigger the density modifier calculation initially

  // DENSITY MODIFIER
  // Initialize the content of the "densityModifier" element when the page loads
  calculateDensityMod();

  // Function to calculate density modifier
  function calculateDensityMod() {
    // Get stackValue from the input element id "targetSize"
    const targetSizeInput = document.getElementById("targetSize");
    const stackValue = parseFloat(targetSizeInput.value);

    const maxStackValue = 1000;

    let result;

    if (isNaN(stackValue)) {
      result = 1;
    } else if (stackValue / maxStackValue <= 0.67) {
      result = 1;
    } else if (stackValue / maxStackValue >= 0.68 && stackValue / maxStackValue < 0.69) {
      result = 1.02;
    } else if (stackValue / maxStackValue >= 0.69 && stackValue / maxStackValue < 0.70) {
      result = 1.03;
    } else if (stackValue / maxStackValue >= 0.70 && stackValue / maxStackValue < 0.71) {
      result = 1.05;
    } else if (stackValue / maxStackValue >= 0.71 && stackValue / maxStackValue < 0.72) {
      result = 1.06;
    } else if (stackValue / maxStackValue >= 0.72 && stackValue / maxStackValue < 0.73) {
      result = 1.08;
    } else if (stackValue / maxStackValue >= 0.73 && stackValue / maxStackValue < 0.74) {
      result = 1.09;
    } else if (stackValue / maxStackValue >= 0.74 && stackValue / maxStackValue < 0.75) {
      result = 1.11;
    } else if (stackValue / maxStackValue >= 0.75 && stackValue / maxStackValue < 0.76) {
      result = 1.12;
    } else if (stackValue / maxStackValue >= 0.76 && stackValue / maxStackValue < 0.77) {
      result = 1.14;
    } else if (stackValue / maxStackValue >= 0.77 && stackValue / maxStackValue < 0.78) {
      result = 1.15;
    } else if (stackValue / maxStackValue >= 0.78 && stackValue / maxStackValue < 0.79) {
      result = 1.17;
    } else if (stackValue / maxStackValue >= 0.79 && stackValue / maxStackValue < 0.80) {
      result = 1.18;
    } else if (stackValue / maxStackValue >= 0.80 && stackValue / maxStackValue < 0.81) {
      result = 1.20;
    } else if (stackValue / maxStackValue >= 0.81 && stackValue / maxStackValue < 0.82) {
      result = 1.21;
    } else if (stackValue / maxStackValue >= 0.82 && stackValue / maxStackValue < 0.83) {
      result = 1.23;
    } else if (stackValue / maxStackValue >= 0.83 && stackValue / maxStackValue < 0.84) {
      result = 1.24;
    } else if (stackValue / maxStackValue >= 0.84 && stackValue / maxStackValue < 0.85) {
      result = 1.26;
    } else if (stackValue / maxStackValue >= 0.85 && stackValue / maxStackValue < 0.86) {
      result = 1.27;
    } else if (stackValue / maxStackValue >= 0.86 && stackValue / maxStackValue < 0.87) {
      result = 1.29;
    } else if (stackValue / maxStackValue >= 0.87 && stackValue / maxStackValue < 0.88) {
      result = 1.30;
    } else if (stackValue / maxStackValue >= 0.88 && stackValue / maxStackValue < 0.89) {
      result = 1.32;
    } else if (stackValue / maxStackValue >= 0.89 && stackValue / maxStackValue < 0.90) {
      result = 1.33;
    } else if (stackValue / maxStackValue >= 0.90 && stackValue / maxStackValue < 0.91) {
      result = 1.35;
    } else if (stackValue / maxStackValue >= 0.91 && stackValue / maxStackValue < 0.92) {
      result = 1.36;
    } else if (stackValue / maxStackValue >= 0.92 && stackValue / maxStackValue < 0.93) {
      result = 1.38;
    } else if (stackValue / maxStackValue >= 0.93 && stackValue / maxStackValue < 0.94) {
      result = 1.39;
    } else if (stackValue / maxStackValue >= 0.94 && stackValue / maxStackValue < 0.95) {
      result = 1.41;
    } else if (stackValue / maxStackValue >= 0.95 && stackValue / maxStackValue < 0.967) {
      result = 1.42;
    } else if (stackValue / maxStackValue >= 0.967 && stackValue / maxStackValue < 0.97) {
      result = 1.450;
    } else if (stackValue / maxStackValue >= 0.97 && stackValue / maxStackValue < 0.98) {
      result = 1.45;
    } else if (stackValue / maxStackValue >= 0.98 && stackValue / maxStackValue < 0.99) {
      result = 1.47;
    } else if (stackValue / maxStackValue >= 0.99 && stackValue / maxStackValue < 1) {
      result = 1.48;
    } else {
      result = 1.5;
    }

    // Update the content of the output tag with id "densityModifier"
    document.getElementById("densityModifier").textContent = result;
  }

  // Attach an event listener to the input element to trigger the calculation when the input changes.
  const targetSizeInput = document.getElementById("targetSize");
  targetSizeInput.addEventListener("input", calculateDensityMod);

}

// Call calculateStandardFireValue to initialize it when the page loads
calculateStandardFireValue();