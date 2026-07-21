import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { Dashboard } from './dashboard/dashboard';
import { Forms } from './forms/forms';
import { Counter } from './counter/counter';
import { LightDarkMode } from './light-dark-mode/light-dark-mode';
import { TemplateForm } from './forms/template-form/template-form';
import { ReactiveForm } from './forms/reactive-form/reactive-form';
import { PageNotFound } from './page-not-found/page-not-found';
import { Products } from './products/products';
import { SignalForm } from './forms/signal-form/signal-form';
import { Api } from './api/api';
import { Subscribe } from './api/subscribe/subscribe';
import { SignalApi } from './api/signal-api/signal-api';
import { ColorPicker } from './color-picker/color-picker';
import { Review } from './review/review';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'counter', component: Counter },
    { path: 'mode', component: LightDarkMode },    
    { path: 'todo', component: Todo },
    { 
        path: 'forms', 
        component: Forms,
        children: [
            {path: 'template', component: TemplateForm},
            {path: 'reactive', component: ReactiveForm},
            {path: 'signal', component: SignalForm}
        ] 
    },
    { path: 'products', component: Products },
    { 
        path: 'api', 
        component: Api,
        children: [
            {path: 'subscribeapi', component: Subscribe},
            {path: 'signalapi', component: SignalApi}
        ]
    },
    { path: 'color', component: ColorPicker },
    { path: 'review', component: Review },
    { path: '**', component: PageNotFound }

];
