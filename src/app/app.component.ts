import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  Posts = [
    new Post('Mon premier post',
            'Haec quaesita reperiuntur in sacris Israelis scriptionibus, at insunt etiam scriptis Veda necnon Avesta' +
            'Secundum hodie vigentem interpretationem carmina hunc in Librum inclusa primitus fuerunt cantus ',
            1,
            null),
    new Post('Mon deuxième post',
      'Haec quaesita reperiuntur in sacris Israelis scriptionibus, at insunt etiam scriptis Veda necnon Avesta' +
      'Secundum hodie vigentem interpretationem carmina hunc in Librum inclusa primitus fuerunt cantus ',
      -1,
      null),
    new Post('Mon dernier post',
      'Haec quaesita reperiuntur in sacris Israelis scriptionibus, at insunt etiam scriptis Veda necnon Avesta' +
      'Secundum hodie vigentem interpretationem carmina hunc in Librum inclusa primitus fuerunt cantus .',
      0,
      null)
  ];
}
export class Post {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public created_at: Date
  ) {
    this.created_at = new Date();
  }
}

