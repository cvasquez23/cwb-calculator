// TARGET HEX MODIFIERS
//HEXSIDE MODIFIER
// Function to calculate hexside modifiers
function calculateHexsideMod() {
  // Get all the checkboxes inside the "hexsideMod" div
  const checkboxes = document.querySelectorAll('#hexsideMod input[type="checkbox"]');
  // Initialize a variable to store the total hexside modifier
  let totalModifier = 0;

  // Loop through each checkbox
  checkboxes.forEach((checkbox) => {
      // Check if the checkbox is checked
      if (checkbox.checked) {
          // Use a switch statement to determine the value of the checkbox and update the total modifier accordingly
          switch (checkbox.value) {
              case "Breastwork":
                  totalModifier -= 30;
                  break;
              case "Creek":
                  totalModifier -= 20;
                  break;
              case "Cut":
                  totalModifier += 50;
                  break;
              case "Embank":
                  totalModifier -= 70;
                  break;
              case "Fence":
                  totalModifier -= 20;
                  break;
              case "Stone":
                  totalModifier -= 40;
                  break;
              case "Stream":
                  totalModifier -= 10;
                  break;
              // Add more cases for other checkboxes if needed
          }
      }
  });

  // Get the output element where the total hexside modifier will be displayed
  const hexsideModifier = document.getElementById('hexsideModifier');
  // Update the text content of the output element with the total hexside modifier percentage
  hexsideModifier.textContent = totalModifier + '%';
}

// Attach the calculateHexsideMod function to checkbox change events
const checkboxes = document.querySelectorAll('#hexsideMod input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateHexsideMod);
});

// Calculate the initial value when the page loads
calculateHexsideMod();

//HEX MODIFIER
// Function to calculate hex modifiers
function calculateHexMod() {
  // Get all the checkboxes inside the "hex-mod" div
  const hexCheckboxes = document.querySelectorAll('#hex-mod input[type="checkbox"]');
  // Initialize a variable to store the total hex modifier
  let totalHexModifier = 0;

  // Loop through each checkbox
  hexCheckboxes.forEach((checkbox) => {
      // Check if the checkbox is checked
      if (checkbox.checked) {
          // Use a switch statement to determine the value of the checkbox and update the total modifier accordingly
          switch (checkbox.value) {
              case "Abatis":
                  totalHexModifier += 20;
                  break;
              case "Field":
                  totalHexModifier -= 10;
                  break;
              case "Forest":
                  totalHexModifier -= 40;
                  break;
              case "Orchard":
                  totalHexModifier -= 10;
                  break;
              case "Rough":
                  totalHexModifier -= 30;
                  break;
              case "Town":
                  totalHexModifier -= 30;
                  break;
              case "Trench":
                  totalHexModifier -= 60;
                  break;
              // Add more cases for other checkboxes if needed
          }
      }
  });

  // Get the output element where the total hex modifier will be displayed
  const hexModifier = document.getElementById('hexModifier');
  // Update the text content of the output element with the total hex modifier percentage
  hexModifier.textContent = totalHexModifier + '%';
}

// Attach the calculateHexMod function to checkbox change events
const hexCheckboxes = document.querySelectorAll('#hex-mod input[type="checkbox"]');
hexCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateHexMod);
});

// Calculate the initial value when the page loads
calculateHexMod();

// ADDITIONAL MODIFIERS
 // Function to calculate elevation modifier
 function calculateElevationMod() {
  // Get all the radio buttons inside the "elevationMod" div
  const elevationRadios = document.querySelectorAll('#elevationMod input[type="radio"]');
  // Initialize a variable to store the elevation modifier
  let elevationModifier = 0;

  // Loop through each radio button
  elevationRadios.forEach((radio) => {
      // Check if the radio button is checked
      if (radio.checked) {
          // Use a switch statement to determine the value of the radio button and update the elevation modifier accordingly
          switch (radio.value) {
              case 'elevationSame':
                  elevationModifier = 0;
                  break;
              case 'elevationOne':
                  elevationModifier = -20;
                  break;
              case 'elevationTwo':
                  elevationModifier = -40;
                  break;
          }
      }
  });

  // Get the output element where the elevation modifier will be displayed
  const elevationModifierOutput = document.getElementById('elevationModifier');
  // Update the text content of the output element with the elevation modifier percentage
  elevationModifierOutput.textContent = elevationModifier + '%';
  
  // Call the calculateAdditionalMods function to recalculate the total additional modifiers
  calculateAdditionalMods();
}

// Attach the calculateElevationMod function to radio button change events
const elevationRadios = document.querySelectorAll('#elevationMod input[type="radio"]');
elevationRadios.forEach((radio) => {
  radio.addEventListener('change', calculateElevationMod);
});

// Calculate the initial value when the page loads
calculateElevationMod();

// Function to calculate other modifiers
function calculateOtherMods() {
  // Get the checkboxes for the other modifiers
  const infantryColumnCheckbox = document.getElementById('infantryColumn');
  const limberedArtCheckbox = document.getElementById('limberedArt');
  const mountedCheckbox = document.getElementById('mounted');
  const enfiladedCheckbox = document.getElementById('enfiladed');

  // Initialize a variable to store the other modifiers
  let otherModifiers = 0;

  // Check each checkbox and add the appropriate modifier if checked
  if (infantryColumnCheckbox.checked) {
      otherModifiers += 40;
  }

  if (limberedArtCheckbox.checked) {
      otherModifiers += 40;
  }

  if (mountedCheckbox.checked) {
      otherModifiers += 40;
  }

  if (enfiladedCheckbox.checked) {
      otherModifiers += 40;
  }

  // Get the output element where the other modifiers will be displayed
  const otherModifierOutput = document.getElementById('otherModifier');
  // Update the text content of the output element with the other modifiers percentage
  otherModifierOutput.textContent = otherModifiers + '%';
  
  // Call the calculateAdditionalMods function to recalculate the total additional modifiers
  calculateAdditionalMods();
}

// Attach the calculateOtherMods function to checkbox change events
const otherModCheckboxes = document.querySelectorAll('#otherMods input[type="checkbox"]');
otherModCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateOtherMods);
});

// Calculate the initial value when the page loads
calculateOtherMods();

// Function to calculate additional modifiers
function calculateAdditionalMods() {
  // Get the current elevation modifier
  const elevationModifier = parseFloat(document.getElementById('elevationModifier').textContent);
  // Get the current other modifiers
  const otherModifiers = parseFloat(document.getElementById('otherModifier').textContent);

  // Calculate the total additional modifiers by summing up elevation and other modifiers
  const totalAdditionalModifiers = elevationModifier + otherModifiers;

  // Get the output element where the total additional modifiers will be displayed
  const totalAddModifierOutput = document.getElementById('totalAddModifier');
  // Update the text content of the output element with the total additional modifiers percentage
  totalAddModifierOutput.textContent = totalAdditionalModifiers + '%';
}

// Calculate the initial value when the page loads
calculateAdditionalMods();

// DENSITY MODIFIER
// Initialize the content of the "densityModifier" element when the page loads
window.addEventListener("load", function () {
  calculateDensityMod();
});

// const densityValue = new Array ();
// densityValue["unit1MenFiring"]="";
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

// FINAL TARGET HEX MODIFIER
// Function to calculate the total modifiers
function calculateTargetHexModifiers() {
  // Calculate the total modifiers here
  const hexsideModifier = parseFloat(document.getElementById('hexsideModifier').textContent);
  const hexModifier = parseFloat(document.getElementById('hexModifier').textContent);
  const elevationModifier = parseFloat(document.getElementById('elevationModifier').textContent);
  const otherModifier = parseFloat(document.getElementById('otherModifier').textContent);

  // Calculate the complete total of all modifiers
  const totalModifiers = hexsideModifier + hexModifier + elevationModifier + otherModifier;

  // Update the output element with the total modifiers
  const targetTotalModOutput = document.getElementById('targetTotalMod');
  targetTotalModOutput.textContent = totalModifiers;
}

// Attach the function to relevant change events (checkboxes, radios, input)
const allInputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"], #targetSize');
allInputs.forEach((input) => {
  input.addEventListener('change', calculateTargetHexModifiers);
});

// Initially calculate and display the total modifiers when the page loads
calculateTargetHexModifiers();


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

// Add event listeners
document.getElementById("range").addEventListener("input", calculateBaseEfficiency);
const weaponInputs = document.querySelectorAll('input[name="weapon"]');
weaponInputs.forEach(input => {
  input.addEventListener("change", calculateBaseEfficiency);
});

// Initial calculation when the page loads
calculateBaseEfficiency();

// FIRE MODIFIERS
// Function to calculate and update the Inf Fire Unit Modifiers
function calculateInfFireUnitMod() {
  // Get the selected quality and fatigue radio buttons
  const qualityRadio = document.querySelector('input[name="quality"]:checked');
  const fatigueRadio = document.querySelector('input[name="fatigue"]:checked');

  // Define modifier values based on radio button selections
  const qualityModifiers = {
    qualityAB: 0.10,
    qualityC: 0.00,
    qualityEF: -0.10
  };

  const fatigueModifiers = {
    fatigueLow: 0.00,
    fatigueMed: -0.10,
    fatigueHigh: -0.20,
    fatigueMax: -0.40
  };

  // Initialize total modifier to 0
  let totalModifier = 0;

  // Calculate quality modifier
  if (qualityRadio) {
    const qualityValue = qualityRadio.value;
    totalModifier += qualityModifiers[qualityValue];
  }

  // Calculate fatigue modifier
  if (fatigueRadio) {
    const fatigueValue = fatigueRadio.value;
    totalModifier += fatigueModifiers[fatigueValue];
  }

  // Display the total modifier in the output element
  const infFireModOutput = document.getElementById('infFireMod');
  infFireModOutput.textContent = (totalModifier * 100).toFixed(2) + '%';
}

// Add event listeners to the quality and fatigue radio buttons
const qualityRadios = document.querySelectorAll('input[name="quality"]');
const fatigueRadios = document.querySelectorAll('input[name="fatigue"]');

qualityRadios.forEach((radio) => {
  radio.addEventListener('change', calculateInfFireUnitMod);
});

fatigueRadios.forEach((radio) => {
  radio.addEventListener('change', calculateInfFireUnitMod);
});

// CALCULATE STANDARD FIRE VALUE
// Function to calculate the Standard Fire Value
function calculateStandardFireValue() {
  // Get the firing strength value from the input element with id "firingStrength"
  const firingStrengthInput = document.getElementById("firingStrength");
  const firingStrength = parseInt(firingStrengthInput.value);

  // Call the calculateBaseEfficiency function to get the base efficiency value
  const baseEfficiency = parseFloat(document.getElementById("baseEfficiency").textContent);

  // Get the density modifier value calculated by the calculateDensityMod function
  const densityModifier = parseFloat(document.getElementById("densityModifier").textContent);

  // Get the checkbox values for "building," "dismounted," "disrupted," and "movedFire"
  const isBuildingChecked = document.getElementById("building").checked;
  const isDismountedChecked = document.getElementById("dismounted").checked;
  const isDisruptedChecked = document.getElementById("disrupted").checked;
  const isMovedFireChecked = document.getElementById("movedFire").checked;

  // Define modifier values based on checkbox states
  const buildingModifier = isBuildingChecked ? 0.30 : 1.00;
  const dismountedModifier = isDismountedChecked ? 0.25 : 1.00;
  const disruptedModifier = isDisruptedChecked ? 0.50 : 1.00;
  const movedFireModifier = isMovedFireChecked ? 0.50 : 1.00;

  // Calculate the Standard Fire Value using the provided formula
  let standardFireValue = (firingStrength * baseEfficiency * densityModifier) *
                          buildingModifier * dismountedModifier *
                          disruptedModifier * movedFireModifier;

  // Check if the result is NaN, and set it to 0 if NaN
  if (isNaN(standardFireValue)) {
    standardFireValue = 0;
  }

  // Display the calculated Standard Fire Value in the output element with id "standardFireValue"
  const standardFireValueOutput = document.getElementById("standardFireValue");
  standardFireValueOutput.textContent = standardFireValue.toFixed(2); // Set the text content
}

// Add event listeners to relevant input elements and input names
const firingStrengthInput = document.getElementById("firingStrength");
firingStrengthInput.addEventListener("input", () => {
  calculateStandardFireValue(); // Call calculateStandardFireValue when firingStrength changes
});

const rangeInput = document.getElementById("range");
rangeInput.addEventListener("input", () => {
  calculateBaseEfficiency(); // Call calculateBaseEfficiency when range changes
  calculateStandardFireValue(); // Call calculateStandardFireValue when range changes
});

const weaponSelectionInputs = document.querySelectorAll('input[name="weapon"]');
weaponSelectionInputs.forEach(input => {
  input.addEventListener("change", () => {
    calculateBaseEfficiency(); // Call calculateBaseEfficiency when weapon changes
    calculateStandardFireValue(); // Call calculateStandardFireValue when weapon changes
  });
});

const fireModCheckboxes = document.querySelectorAll('input[name="fireMods"]');
fireModCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", calculateStandardFireValue);
});

// Initial calculation when the page loads
calculateBaseEfficiency(); // Calculate base efficiency on page load
calculateStandardFireValue(); // Calculate standard fire value on page load