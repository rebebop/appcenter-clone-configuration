# Cloning a configuration from AppCenter to another branch

This action clones a build configuration
from a source branch to a target branch in AppCenter.

You can use this to setup an automatic build configuration
on each pull request as shown in the example.

## Inputs

### `appcenter-token`

**Required** "AppCenter API token, you can generate it from your profile page". https://docs.microsoft.com/en-us/appcenter/api-docs/#creating-an-app-center-app-api-token.

### `project-name`

**Required** "Name of project e.g: org/project_name"

### `source-branch`

**Required** "Name of the branch to be cloned" (cloneFromBranch) (https://openapi.appcenter.ms/#/build/branchConfigurations_create).

### `target-branch`

**Required** "Name of the target branch on which the configuration is applied"

## Example usage

```
uses: rebebop/appcenter-clone-configuration@1.0
with:
  appcenter-token: '${{ secrets.APP_CENTER_TOKEN }}'
  source-branch: 'master'
  target-branch: 'feature/exciting-feature'
  project-name: 'rebebop/excitingApp-ios'
```
