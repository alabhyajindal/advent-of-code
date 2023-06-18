import * as path from 'https://deno.land/std/path/mod.ts';

export async function getInput() {
  const inputFile = Deno.args[0];
  const dirname = path.dirname(path.fromFileUrl(import.meta.url));
  let filePath;
  if (inputFile === 'example') {
    filePath = path.join(dirname, 'example.txt');
  } else if (inputFile === 'test') {
    filePath = path.join(dirname, 'test.txt');
  }
  const input = await Deno.readTextFile(filePath);
  return input;
}
