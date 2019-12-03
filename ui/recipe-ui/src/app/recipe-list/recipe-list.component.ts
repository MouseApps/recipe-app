import { AfterViewInit, Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RecipeService } from '../services/recipe.service';
import { RecipeDTO } from '../model/recipe-dto';
import { HasName } from '../model/has-name';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../shared/component/dialog/dialog.component';
import { AlertService } from '../shared/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  /**
   * paginator
   */
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  /**
   * sorter
   */
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  /**
   * table
   */
  @ViewChild(MatTable, {static: false}) table: MatTable<HasName>;
  /**
   * data source
   */
  dataSource: MatTableDataSource<HasName>  = new MatTableDataSource<RecipeDTO>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name'];

  constructor(private rs: RecipeService, private as: AlertService, public router: Router) {}



  /**
   * oninit
   */
  ngOnInit() {
    this.rs.getRecipes().subscribe(recipes => {
      // this.dataSource
      this.dataSource.data = recipes;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }, err => {
      this.as.openDialog({title: 'Unable to load recipes', content: err});
    });
    console.log(this.router.url.split('/'))
  }


}
