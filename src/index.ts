import * as core from "@actions/core";

async function main(): Promise<void> {
  try {
    const appCenterToken = core.getInput("appcenter-api-token");
    const projectName = core.getInput("project-name");
    const sourceBranch = core.getInput("source-branch");
    const targetBranch = encodeURIComponent(core.getInput("target-branch"));
    const startBuild = core.getInput("start-build");

    const headers = {
      "Content-Type": "application/json",
      "X-API-Token": appCenterToken,
    };
    const appCenterConfUrl = `https://api.appcenter.ms/v0.1/apps/${projectName}/branches/${targetBranch}/config`;

    // Check whether the configuration already exists
    const configExists = await fetch(appCenterConfUrl, {
      method: "GET",
      headers,
    });

    if (configExists.ok) {
      console.log("Configuration for this branch already exists on AppCenter");
    } else {
      // Only create the configuration if one does not already exists
      const cloneConfiguration = await fetch(appCenterConfUrl, {
        headers,
        method: "POST",
        body: JSON.stringify({
          cloneFromBranch: sourceBranch,
        }),
      });

      console.log(cloneConfiguration);
    }

    // Start the build if it is enabled
    if (startBuild === "yes") {
      const appCenterBuildUrl = `https://api.appcenter.ms/v0.1/apps/${projectName}/branches/${targetBranch}/builds`;

      const startBuild = await fetch(appCenterBuildUrl, {
        headers,
        method: "POST",
      });

      console.log(startBuild);
    }
  } catch (error) {
    console.log(error);
    core.setFailed(error as Error);
  }
}

main();
