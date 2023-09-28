// TARGET HEX MODIFIERS
//HEXSIDE MODIFIER
// Function to calculate the total modifier
function calculateModifier() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let totalModifier = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
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

  // Update the output element with the total modifier
  const hexsideModifierOutput = document.getElementById('hexsideModifier');
  hexsideModifierOutput.textContent = totalModifier;
}

// Attach the function to the change event of checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateModifier);
});

// Initially calculate and display the modifier based on checked checkboxes
calculateModifier();

//HEX MODIFIER
// Function to calculate the total modifier for Hex Modifiers
function calculateHexModifier() {
  const hexCheckboxes = document.querySelectorAll('#hex-mod input[type="checkbox"]');
  let totalHexModifier = 0;

  hexCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
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

  // Update the output element with the total Hex Modifier
  const hexModifierOutput = document.getElementById('hexModifier');
  hexModifierOutput.textContent = totalHexModifier;
}

// Attach the function to the change event of Hex Modifiers checkboxes
const hexCheckboxes = document.querySelectorAll('#hex-mod input[type="checkbox"]');
hexCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateHexModifier);
});

// Initially calculate and display the Hex Modifier based on checked checkboxes
calculateHexModifier();

// ADDITIONAL MODIFIERS
// Function to calculate the total additional modifiers
function calculateAdditionalModifiers() {
  // Get the selected radio button value for elevation
  const elevationRadios = document.getElementsByName('elevation');
  let elevationModifier = 0;

  elevationRadios.forEach((radio) => {
    if (radio.checked) {
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

  // Get the selected checkbox values for other modifiers
  const infantryColumnCheckbox = document.getElementById('infantryColumn');
  const limberedArtCheckbox = document.getElementById('limberedArt');
  const mountedCheckbox = document.getElementById('mounted');
  const enfiladedCheckbox = document.getElementById('enfiladed');

  let otherModifiers = 0;

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

  // Calculate the total additional modifiers
  const totalAdditionalModifiers = elevationModifier + otherModifiers;

  // Update the output elements
  const elevationModifierOutput = document.getElementById('elevationModifier');
  elevationModifierOutput.textContent = elevationModifier;

  const otherModifierOutput = document.getElementById('otherModifier');
  otherModifierOutput.textContent = otherModifiers;

  const totalAddModifierOutput = document.getElementById('totalAddModifier');
  totalAddModifierOutput.textContent = totalAdditionalModifiers;
}

// Attach the function to the change event of radio buttons and checkboxes
const elevationRadios = document.getElementsByName('elevation');
const addCheckboxes = document.querySelectorAll('#other-mods input[type="checkbox"]');

elevationRadios.forEach((radio) => {
  radio.addEventListener('change', calculateAdditionalModifiers);
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateAdditionalModifiers);
});

// Initially calculate and display the additional modifiers when the page loads
calculateAdditionalModifiers();

// DENSITY MODIFIER
// Initialize the content of the "densityModifier" element when the page loads
window.addEventListener("load", function () {
  densityMod();
});

// const densityValue = new Array ();
// densityValue["unit1MenFiring"]="";
function densityMod() {
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
targetSizeInput.addEventListener("input", densityMod);

// FINAL TARGET HEX MODIFIER
// Function to calculate the total modifiers
function calculateTotalModifiers() {
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
  input.addEventListener('change', calculateTotalModifiers);
});

// Initially calculate and display the total modifiers when the page loads
calculateTotalModifiers();


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
// Get references to the checkboxes and the output element
const buildingCheckbox = document.getElementById("building");
const dismountedCheckbox = document.getElementById("dismounted");
const disruptedCheckbox = document.getElementById("disrupted");
const movedFireCheckbox = document.getElementById("movedFire");
const infFireModifiersOutput = document.getElementById("infFireModifiers");

// Add event listeners to the checkboxes to calculate the total when they change
const infFireCheckboxes = [buildingCheckbox, dismountedCheckbox, disruptedCheckbox, movedFireCheckbox];
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", calculateTotalFireModifiers);
});

// Function to calculate the total fire modifiers and update the output element
function calculateTotalFireModifiers() {
  let totalModifiers = 0;

  if (buildingCheckbox.checked) {
    totalModifiers -= 30;
  }
  if (dismountedCheckbox.checked) {
    totalModifiers -= 75;
  }
  if (disruptedCheckbox.checked) {
    totalModifiers -= 50;
  }
  if (movedFireCheckbox.checked) {
    totalModifiers -= 50;
  }

  // Update the output element with the calculated total
  infFireModifiersOutput.textContent = totalModifiers + "%";
}