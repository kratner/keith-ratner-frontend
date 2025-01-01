// src/config.ts
const isGitHubPages = window.location.hostname === "kratner.github.io";

const config = {
  // Always point to WordPress site
  studioUrl: "https://keithratner.live/studio",
  // Keep track of environment for other possible uses
  isGitHubPages,
};

export default config;
