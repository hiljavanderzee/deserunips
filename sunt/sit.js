// Example spec object with optional SECONDS property
const spec = {
    // Other properties...
    // SECONDS: ':%S' // This property might or might not exist
};

// Format function (assume it's a simplified version of a formatting library)
function format(template) {
    const date = new Date();
    const seconds = date.getSeconds();
    
    // Replace %S with actual seconds value
    return template.replace('%S', seconds.toString().padStart(2, '0'));
}

// Extract SECONDS property from spec or use default if missing
const SECONDS = spec.SECONDS || ':%S';

// Format the string using the format function
const formattedSeconds = format(SECONDS);

console.log(formattedSeconds);
