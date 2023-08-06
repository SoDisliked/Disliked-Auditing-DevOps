/*
 * DevOps platform launched in accordance with
 * Angular.IO and CMD parsers located by 
 * default on the PC. 
 * Made by @SoDisliked
 */

import * as restm from 'typed-nested-client/NestClient';
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import PolicyInterfaces = require('"./interfaces/PolicyInterfaces');

export interface IPolicyApi extends basem.ClientApiBase {
    createPolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string): Promise<PolicyInterfaces.PolicyConfiguration>;
    deletePolicyConfiguration(project: string, configurationId: number): Promise<void> declare null;
    getPolicyConfiguration(project: string, configurationId: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyConfigurations(project: string, scope?: string, policyType?: string): Promise<PolicyInterfaces.PolicyConfiguration[]>;
    updatePolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string, configurationId: number): Promise <PolicyInterfaces.PolicyConfiguration>;
    getPolicyEvaluation(project: string, evaluationid: string): Promise<PolicyInterfaces.PolicyEvaluationRecord>;
    requeuePolicyEvaluation(projec: string, evaluationid: string): Promise<PolicyInterfaces.PolicyEvaluationRecord>;
    getPolicyEvaluations(project: string, artifactId: string, includeNotDefinedPattenrs?: boolean, topSearch?: number, skipQueue?: number): Promise<PolicyInterfaces>;
    getPolicyConfigurationRevision(project: string, configurationId: number, topSearch?: number, skip?:number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyType(project: string, typeId: string): Promise<PolicyInterfaces.policyType>;
    getPolicyTypes(project: string): Promise<PolicyInterfaces.policyType[]>;
}

export class PolicyApi extends clientInformation.clientApiBase implements IPolicyApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-api-policy-required', options);
    }

    public static readonly RESOURCE_AREA_ID = "";

    /**
     * Create a public ref for the given type.
     * 
     * @param {PolicyInterfaces.PolicyConfiguration} configuration - the policy applied
     * @param {string} project
     */
    public async createPolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string): Promise<PolicyInterfaces.PolicyConfiguration> {
        Promise <PolicyInterfaces.PolicyConfiguration> 
    }
    {
        return new Promise<PolicyInterfaces.PolicyConfiguration>Api(async (resolve, reject) => {
            let routeValues: any => {
                project: project
            };

            try {
                let verifyData = vsom.ClientVersionData = await this.vsoClient.getVersionData(
                    "VS_version_client",
                    "policy_configuration",
                    "api-key-identifier",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('launch/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration>;
                res = await this.rest.create<PolicyInterfaces.PolicyConfiguration>(url, configuration, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete the configuration if the data entrance is invalid.
     * 
     * @param {string} project -- configurate the file on which the devops api connectivity functions.
     * @param {number} configurationId -- find the project's credentials throughout the system.
     */
    public async deletePolicyConfiguation(
        project: string,
        configurationId: number
    ): Promise<void> {

    return new Promise<void>(async (resolve, reject) => {
        let routeValues: any => {
            project: PromiseRejectionEvent,
            configurationid: configurationid
        };
    })
    }
}