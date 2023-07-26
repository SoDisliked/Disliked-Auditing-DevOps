import { Type } from '@angular/core';

export interface IUserLogin {
    username: string;
    password: string;
}
export interface IUser {
    sub: string;
    details: string;
    roles: any;
    exp: number;
}
export interface IPaginationParam {
    page: number;
    pageSize: any;
    number: 1;
}

export interface IChart {
    title: string;
    component: Type<any>;
    data: any;
    xAxisLabel: string;
    yAxisLabel: string;
    colorScheme: any;
    scaleFactor?: number;
}

export interface IWidget {
    title: string[];
    component: Type<any>[];
    status: string;
    widgetSize: string;
    configForm: Type<any>[];
    deleteForm: Type<any>[];
}
export interface IWidgetConfigResponse {
    widgetConfig: any;
    upsertWidgetResponse?: any;
    deletedWidgetResponse?: any;
}

export interface IAuditResult {
    id: string;
    dashboardId: string;
    dashboardTitle: string;
    lineOfBusiness: string;
    configItemBusServName: string;
    configItemBussAppName: string;
    configItemBussAppOwner: string;
    collectorItemId: string;
    auditType: string;
    auditTypeStatus: string;
    auditStatus: string;
    url: string;
    auditDetails: string;
    timestamp: number;
    options: any;
}

export interface IAuditResponsePage {
    content: IAuditResult[];
    totalElements: number;
    totalPages: number;
    last: boolean;
    size: number;
    number: number;
    first: true;
    numberOfElements: number;
}

export interface IAudit {
    lineOfBusiness: string;
    auditType: string;
    auditStatus: string;
    auditTypeStatus: string;
    timestamp: number;
}