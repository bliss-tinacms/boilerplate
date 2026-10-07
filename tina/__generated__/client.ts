import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/tmp/boilerplate-clone/tina/__generated__/.cache/1791361498369', url: 'http://localhost:4001/graphql', token: '6a5378a0fcd649b38871a0698d2a4573c08c4b48', queries,  });
export default client;
  