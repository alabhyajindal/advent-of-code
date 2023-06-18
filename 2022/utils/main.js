import * as path from 'https://deno.land/std/path/mod.ts';

export async function getInput(DEMO, dirname) {
  let input;
  if (DEMO) {
    input = await Deno.readTextFile(path.join(dirname + '/demoInput.txt'));
  } else {
    input = await Deno.readTextFile(path.join(dirname + '/input.txt'));
  }
  return input;
}
