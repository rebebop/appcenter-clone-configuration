import * as core from "@actions/core";

async function main(): Promise<void> {
  try {
    const appCenterToken = core.getInput("appcenter-api-token");
    const projectName = core.getInput("project-name");
    const sourceBranch = core.getInput("source-branch");
    const targetBranch = encodeURIComponent(core.getInput("target-branch"));

    const appCenterUrl = `https://api.appcenter.ms/v0.1/apps/${projectName}/branches/${targetBranch}/config`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Token": appCenterToken,
      },
      body: JSON.stringify({
        cloneFromBranch: sourceBranch,
      }),
    };

    const response = await fetch(appCenterUrl, options);
    console.log(response);
  } catch (error) {
    console.log(error);
    core.setFailed(error as Error);
  }
}

main();
