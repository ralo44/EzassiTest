import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ezassi } from '../../models/ezassi';
import { EzassiService } from '../../services/ezassi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Form: FormGroup
  list: any[] = []
  id: number;
  titulo: 'Agregar'
  constructor(private fb: FormBuilder,
    private ezassiService: EzassiService,
    config: NgbModalConfig,
    private modalService: NgbModal,) {
    

    this.Form = this.fb.group({
      asignee: ['', [Validators.required]],
      workflow: ['', [Validators.required]],
      score: ['0.00', [Validators.required]],
      summary: ['', [Validators.required]],
      user: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
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
        // this.readData()
      }, error => {
      })
    } else {
      ezassi._id = this.id;
      this.ezassiService.update(this.id, ezassi).subscribe(data => {
        console.log(data);
        this.Form.reset();
        // this.readData()
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
      // this.readData()
    }, error => {
      console.log(error);
    })
  }


}
