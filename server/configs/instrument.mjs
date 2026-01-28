import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://44684615d0034e3b372cdbebaab1b369@o4510784034111488.ingest.de.sentry.io/4510784042434640",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
