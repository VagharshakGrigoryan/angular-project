import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {

  @Input() card: Card | undefined
  cardDate:Date=new Date()

  title: string = 'My Card Title'
  text: string = ' My Simple text'

  textColor: string | undefined

  changeTitle() {

    this.title = 'Title has been changed'
  }


  ngOnInit() {
  }

  inputHandler({value}: { value: any }) {
    // const value = event.target.value
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
