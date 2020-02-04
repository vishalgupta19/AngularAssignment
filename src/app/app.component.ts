import { Component, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { PostsDataModal } from "./models/posts-data.models";
import { PostsServiceApiService } from "./services/posts-service-api.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  public PostsData: Array<PostsDataModal>;
  unsubscribe$: Subject<void> = new Subject();
  clearIntervalVariable: any;
  constructor(
    private dataApi: PostsServiceApiService,
    private modalService: BsModalService
  ) {
    this.PostsData = new Array<PostsDataModal>();
  }
  ngOnInit() {
    this.getPostsData();
    this.clearIntervalVariable = setInterval(() => {
      this.getPostsData();
    }, 10000);
  }
  getPostsData() {
    this.dataApi
      .getPostsData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
          this.PostsData = res.hits;
        },
        err => {
          console.log(err);
        }
      );
  }
  openPostsDetailsModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnDestroy() {
    if (this.clearIntervalVariable) {
      clearInterval(this.clearIntervalVariable);
    }
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
