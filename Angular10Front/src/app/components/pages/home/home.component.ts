import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {  NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { EzassiService } from 'src/app/shared/services/ezassi.service';
import { Ezassi } from 'src/app/shared/models/ezassi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Forms
  Form: FormGroup
  list: any[] = []
  id: number;
  titulo: string = 'Agregar'

  //Infinity scroll
  showGoUpButton = false
  throttle = 100;
  scrollDistance = 5;
  scrollUpDistance = 2;
  pageNum= 1
  private hideScrollHeight= 200
  private showScrollHeight=500

  // ngmodel
  closeResult = '';

    constructor( 
              @Inject(DOCUMENT) private document:Document,
              private fb: FormBuilder,
              private ezassiService:EzassiService, 
              private modalService: NgbModal, 
              ){
      //declare form
      this.Form = this.fb.group({
        asignee: ['', [Validators.required]],
        workflow: ['', [Validators.required]],
        score: ['0.00', [Validators.required]],
        summary: ['',],
        user: ['',],
        image: ['']
      })
  }

  ngOnInit():void{
    this.readData()
  }

//infinity scroll
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const yOffSet = window.pageYOffset
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true
    }else if(this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = false
    }
  }
  onScrollDown():void{
      console.log('Scrolldown');
      this.readData()
  }
  onScrollTop():void{
    console.log('ScrollUp');
    this.document.body.scrollTop = 0
    this.document.documentElement.scrollTop = 0 
  }

  //openmodalform
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // CRUD
  readData():void{
    this.ezassiService.getData().subscribe(res =>{
      console.log(res);
      this.list = res
    }, error =>{
      console.log(error);
    })
  }
  createData(): void {
    const ezassi: Ezassi = {
      asignee: this.Form.get('asignee')?.value,
      workflow: this.Form.get('workflow')?.value,
      score: this.Form.get('score')?.value,
      summary: this.Form.get('summary')?.value,
      user: this.Form.get('user')?.value,
      image: this.Form.get('image')?.value,
    }
    if (this.id == undefined) {
      console.log(ezassi);

      this.ezassiService.create(ezassi).subscribe(data => {
        console.log(data);
        this.Form.reset()
        this.readData()
      }, error => {
        console.log(error);
      })
    } else {
      ezassi._id = this.id;
      console.log(ezassi._id);
      this.ezassiService.update(this.id, ezassi).subscribe(data => {
        console.log(data);
        this.Form.reset();
        this.readData()
        this.titulo = 'Editar'
      }, error =>{
        console.log(error);
      })

    }
  }
  updateData(ezassi: any): void {
    this.id = ezassi.id
    this.Form.patchValue({
      asignee: ezassi.asignee,
      workflow: ezassi.workflow,
      score: ezassi.score,
      summary: ezassi.summary,
      user: ezassi.user,
      image: ezassi.image
    })

  }
  deleteData(id: number): void {
    this.ezassiService.delete(id).subscribe(res => {
      console.log('registry deleted');
      this.readData()
    }, error => {
      console.log(error);
    })
  }


}
