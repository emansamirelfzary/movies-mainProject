import { Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
isScrolled:boolean=false
searchQuery: string = '';

constructor(private router: Router) {}

@HostListener('window:scroll',[])
onWindowScroll(){
  this.isScrolled=window.pageYOffset !== 0 }

  search() {
    if (this.searchQuery.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
      this.searchQuery=''
    }
  }

}


