import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { staticData } from '../../data/staticData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ""
  contentTitle:string = ""
  contentDescripton:string = ""
  contentText:string = ""

  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // capturar valor da propriedade id recuprada no parâmetro da rota
    this.route.paramMap.subscribe(
      // associando o valor do id à propriedade id desta classe
      value => this.id = (value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent (id:string | null){
    const result = staticData.filter( article => article.id == id )[0]

    this.contentTitle = result.title
    this.contentDescripton = result.description
    this.photoCover = result.photo
    this.contentText = result.content

  }

}
