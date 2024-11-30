// Assuming we have a function that applies roles to elements
function applyRoleToElement(element, role) {
    element.setAttribute('data-role', role);
    // Additional logic for applying the role
}

// Example of using the LegendGradientRole in a visualization setup
const gradientElement = document.createElement('div');
applyRoleToElement(gradientElement, LegendGradientRole);
document.body.appendChild(gradientElement);
