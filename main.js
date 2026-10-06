import { parse } from "jsr:@std/yaml";

const timestamp = Date.now();
const config = parse(await Deno.readTextFile("config.yaml"));

for (const target of config.targets.http) {
  const result = await fetch(target.url);
  const data = result.status.toString();
  const dir = `${config.root}/data/http/${target.name}`;

  await Deno.mkdir(dir, { recursive: true });
  await Deno.writeTextFile(`${dir}/${timestamp}`, data);
}
