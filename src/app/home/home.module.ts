import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/singup.component';
import { SignUpService } from './singup/signup.service';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule { }
