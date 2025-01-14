const arrayBufferToB64 = async (data) => {
  // Use a FileReader to generate a base64 data URI
  const base64url = await new Promise((r) => {
    const reader = new FileReader();
    reader.onload = () => r(reader.result);
    reader.readAsDataURL(new Blob([data]));
  });

  /*
  The result looks like 
  "data:application/octet-stream;base64,<your base64 data>", 
  so we split off the beginning:
  */
  return base64url;
};

const b64ToArrayBuffer = async (data) => {
  const newArrayBuffer = (await fetch(data)).arrayBuffer();
  return newArrayBuffer;
};

export { b64ToArrayBuffer, arrayBufferToB64 };
