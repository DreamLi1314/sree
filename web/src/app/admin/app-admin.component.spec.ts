import { TestBed, async } from "@angular/core/testing";
import { AppAdminComponent } from "./app-admin.component";
describe("AppReportComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppAdminComponent
      ],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title "app"`, async(() => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app");
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppAdminComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Welcome to Admin!");
  }));
});
