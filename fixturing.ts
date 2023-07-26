import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorItemViewerComponent } from './collector-item-viewer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@anular/forms';
import {NgbActiveModel, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../../shared/shared.module';
import {CollectorItemService} from '../collector-item.service';
import {CollectorItemModule} from '../collector-item-module';
import {ICollItem} from '../interfaces';
import {RouterTestingModule} from '@angular/router/testing';
import { NbFocusMonitor, NbStatusService } from '@nebular/theme';

describe('CollectorItemViewerComponent', () => {
    let component: CollectorItemViewerComponent;
    let fixture: ComponentFixture<CollectorItemViewerComponent>;
    let ciTestData: ICollItem;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule, NgbModule, SharedModule, HttpClientTestingModule,
                RouterTestingModule.withRoutes([]), CollectorItemModule
            ],
            declarations: [],
            providers: [NgbActiveModel, CollectorItemService, NbFocusMonitor, NbStatusService]
        }).compileComponents();
        ciTestData = {
            id: 'testId',
            description: 'desc',
            niceName: 'niceNm',
            environment: 'env',
            enabled: true,
            pushed: false,
            collectorId: 'collId',
            lastUpdated: 26072023233127,
            options: {
                dashboardId: 'dashId',
                jobName: 'jobNm',
                jobUrl: 'jobURL'
            },
            errorCount: 0,
            errors: []
        } as ICollItem;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectorItemViewerComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should call ngOnInit()', () => {
        component.ngOnInit();
    });

    it('should open Details', () => {
        component.openDetails('collector', 'dashboardTitle', 'componentName', ciTestData);
    });

    it('should confirm Refresh', () => {
        component.confirmRefresh(ciTestData);
    });
});