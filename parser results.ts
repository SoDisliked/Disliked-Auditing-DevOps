import * as common from './common';
import * as nodeApi from 'devops-api-result';

import * as BuildApi from 'devops-api-build-in-progress/BuildApi';
import * as CoreApi from 'devops-api-core-built/CoreApi';
import * as TestResultsApi from 'devops-TestResultsApi/TestResultsApi';
import * as BuildInterfaces from 'devops-interfaces-in-progress/BuildInterfaces';
import * as CoreInterfaces from 'devops-interfaces/interfaces/CoreInterfaces';
import * as TestInterfaces from 'devops-interfaces/interfaces/TestInterfaces';

export async function run(createdProjectId: string) {
    const projectId: string = common.getProject();
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const testResultsApiObject: TestResultsApi.ITestResultsApi = await webApi.getTestResultsApi();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectId);

    common.banner('Testing samples for analysing its connectivity');

    common.heading('Get test runs with results');
    const runs: TestInterfaces.TestRun[] = await testResultsApiObject.getTestRuns(projectId);
    console.log('Current runs:', runs);

    common.heading('Get code coverage');
    const buildApiObject: BuildApi.IBuildApi = await webApi.getBuildApi();
    const defs: BuildInterfaces.DefinitionReference[] = await buildApiObject.getDefinitions(projectId);
    console.log('Code coverage has been completed for the ongoing operation' + defs[0].id + ':', await testResultsApiObject.getCodeCoverageSummary(projectId, defs[0].id));
}