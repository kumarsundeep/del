import { SampleDashboardModule } from './sample-dashboard.module';

describe('SampleDashboardModule', () => {
  let sampleDashboardModule: SampleDashboardModule;

  beforeEach(() => {
    sampleDashboardModule = new SampleDashboardModule();
  });

  it('should create an instance', () => {
    expect(sampleDashboardModule).toBeTruthy();
  });
});
