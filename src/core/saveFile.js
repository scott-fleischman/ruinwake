export async function compressSave(jsonString) {
  const blob = new Blob([jsonString]);
  const stream = blob.stream().pipeThrough(new CompressionStream('gzip'));
  return new Response(stream).blob();
}

export async function decompressSave(blob) {
  const stream = blob.stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).text();
}

export async function downloadSaveFile(jsonString, filename = 'ruinwake-save.json.gz') {
  const compressed = await compressSave(jsonString);
  const url = URL.createObjectURL(compressed);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function uploadSaveFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json.gz,.gz';
    input.onchange = async () => {
      if (!input.files || input.files.length === 0) {
        reject(new Error('No file selected'));
        return;
      }
      const blob = input.files[0];
      const json = await decompressSave(blob);
      resolve(json);
    };
    input.click();
  });
}
