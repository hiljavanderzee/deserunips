const fieldDef = {
    field: 'price',
    type: 'quantitative',
    bin: true // indicating that binning is applied
};

if (isTypedFieldDef(fieldDef) && isBinning(fieldDef.bin)) {
    console.log('Field definition is typed and binning is applied.');
    // Perform operations that rely on these conditions being true
} else {
    console.log('Either field definition is not typed or binning is not applied.');
}
