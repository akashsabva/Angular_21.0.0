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
import { Login } from './login/login';
import { authGuard } from './auth/auth-guard';
import { canDeactivateGuard } from './auth/can-deactivate-guard';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: '', component: Dashboard },
    { path: 'counter', component: Counter },
    { path: 'mode', component: LightDarkMode },    
    { path: 'todo', loadComponent: () => import('./todo/todo').then(m => m.Todo) },
    { 
        path: 'forms', 
        component: Forms,
        children: [
            {path: 'template', component: TemplateForm},
            {path: 'reactive', component: ReactiveForm, canDeactivate: [canDeactivateGuard]},
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
    { path: 'color', component: ColorPicker, canActivate: [authGuard] },
    { path: 'review', component: Review, canActivate: [authGuard] },
    { path: '**', component: PageNotFound },
    { path: '', redirectTo: 'login', pathMatch: 'full' }

];
