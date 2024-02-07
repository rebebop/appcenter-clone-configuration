# Setup AppCenter build

This action clones a build configuration
from a source branch to a target branch in AppCenter.
It can also optionally start a new build.

If a build configuration already exists it will not create a new one.

## Inputs

### `appcenter-api-token`

**Required** "AppCenter API token, you can generate it from your profile page". https://docs.microsoft.com/en-us/appcenter/api-docs/#creating-an-app-center-app-api-token.

### `project-name`

**Required** "Name of project e.g: org/project_name"

### `target-branch`

**Required** "Name of the target branch on which the configuration is applied"

### `source-branch`

"Name of the branch to be cloned" (cloneFromBranch) (https://openapi.appcenter.ms/#/build/branchConfigurations_create).

### `start-build`

Whether or not the action should start the build as well. ("yes"/"no")

## Example usage

```
uses: rebebop/appcenter-clone-configuration@main
with:
  appcenter-token: '${{ secrets.APP_CENTER_TOKEN }}'
  source-branch: 'master'
  target-branch: 'feature/exciting-feature'
  project-name: 'rebebop/excitingApp-ios'
  start-build: "yes"
```
