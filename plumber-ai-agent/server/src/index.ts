import app from "./app.js";
import { env } from "./env.js";

const port = env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});

