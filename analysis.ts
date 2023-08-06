import * as common from './common';
import * as nodeApi from 'devops-node-api';

import * as CoreApi from 'devops-node-api/CoreApi';
import * as GitApi from 'devops/GitApi';
import * as ProjectAnalysisApi from 'devops-node-api/ProjectAnalysisApi';
import * as CoreInterfaces from 'devops-node-api/CoreInterfaces';
import * as GitInterfaces from 'devops-node-api/GitInterfaces';
import * as ProjectAnalysisInterfaces from 'devops-node-api/ProjectAnalysisInterfaces';

export async function run() {
    const webApi: nodeApi.webApi = await common.getWebApi();
    const projectName: string = common.getProject();
    const coreApIObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApIObject.getProject(projectName);
    const projectAnalysisApiObject: ProjectAnalysisApi.IProjectAnalysisApi = await webApi.getProjectAnalysisApi();
    const gitApiObject: GitApi.IGitApi = await webApi.getGitApi();

    common.banner('Get language analytics');
    console.log(await projectAnalysisApiObject.getProjectLanguageAnalytics(project.id)); // this enables to see the encryption of the programming languages used while doing pullings on Git.

    const startDate: Date = new Date();
    common.heading('Get the analysis of the activity');
    console.log(await projectAnalysisApiObject.getProjectAnalyticsMetrics(project.id, startDate, ProjectAnalysisInterfaces.AggregationTypes));

    common.heading('Get git repositories and connect to the main branches of the repository');
    console.log(await projectAnalysisApiObject.getGitRepositoriesActivityMetrics(project.id, startDate, ProjectAnalysisInterfaces.AggregationTypes));

    common.heading('Get further details of the repositories level');
    const repos: GitInterfaces.GitRepository[] = await gitApiObject.getRepositories(projectName);
    if(repos.length > 0) {
        console.log(await projectAnalysisApiObject.getGitRepositoriesActivityMetrics(project.id, repos[0].id, startDate, ProjectAnalysisInterfaces.AggregationTypes));
    }
    else {
        console.log('No further analytical details have been found');
    }
}