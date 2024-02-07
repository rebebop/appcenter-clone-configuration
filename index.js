const core = require("@actions/core");

async function main() {
  try {
    const appCenterToken = core.getInput("appcenter-token");
    const projectName = core.getInput("project-name");
    const sourceBranch = core.getInput("source-branch");
    const targetBranch = encodeURIComponent(core.getInput("target-branch"));

    const appCenterUrl = `https://api.appcenter.ms/v0.1/apps/${projectName}/branches/${targetBranch}/config`;

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-token": appCenterToken,
      },
      body: JSON.stringify({
        cloneFromBranch: sourceBranch,
      }),
    };

    const response = await fetch(appCenterUrl, options);

    console.log(response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
