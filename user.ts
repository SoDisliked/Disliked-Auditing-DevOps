import * as common from "./common";
import * as nodeApi from "devops-node-api/nodeApi";

import * as ProfileApi from "devops-user/ProfileApi";
import * as ProfileInterfaces from "devops-node-api/interfaces/ProfileInterfaces";

export async function run(projectId: string) {
    let serverUrl = process.env["API_URL"];
    // this will let the url connect with the user's credentials to establish the profile Api with the server.
    serverUrl = serverUrl.replace('');
    console.log('serverUrl', serverUrl);
    const webApi: nodeApi.WebApi = await common.getWebApi(serverUrl);
    const profileApiObject: ProfileApi.IProfileApi = await webApi.getProfileApi();
    common.banner("Profile Samples");

    common.heading("Create the user's credentials for the profile");
    const createProfileContext: ProfileInterfaces.createProfileContext = {cIData: null,
                                                                          contactWithOffers: false,
                                                                          countryName: "US",
                                                                          displayName: "nameChosen",
                                                                          emailAddress: "example.example@hotmail.com",
                                                                          hasAccount: false,
                                                                          language: "English",
                                                                          phoneNumber: ""};
    let profile: ProfileInterfaces.Profile = await profileApiObject.createProfile(createProfileContext, false);
    console.log("Profile created for", profile.coreAttributes.DisplayName.value);
}