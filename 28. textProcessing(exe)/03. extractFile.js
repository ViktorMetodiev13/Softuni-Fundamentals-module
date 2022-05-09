function extractFile(filePath) {
    let fileNameStartIndex = filePath.lastIndexOf('\\');
    let extentionStartIndex = filePath.lastIndexOf('.');

    let fileName = "";
    let extentionName = "";

    //Create fileName
    for (let i = fileNameStartIndex + 1; i < extentionStartIndex; i++) {
        fileName += filePath[i];
    }
    //Create extentionName
    for (let i = extentionStartIndex + 1; i < filePath.length; i++) {
        extentionName += filePath[i];
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extentionName}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bat.pptx');