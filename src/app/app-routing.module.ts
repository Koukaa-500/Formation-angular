import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddplayerComponent} from './components/addplayer/addplayer.component';
import {AddteamComponent} from './components/addteam/addteam.component';
import {AddmatchComponent} from './components/addmatch/addmatch.component';
import {MatchesComponent} from './components/matches/matches.component';
import {PlayersComponent} from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';



const routes: Routes = [
  { path: 'players', component: PlayersComponent},
  {path: 'addplayer', component: AddplayerComponent},
  {path: 'addteam', component: AddteamComponent},
  {path: 'addmatch', component: AddmatchComponent},
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent },
  {path: 'matches', component: MatchesComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'match-info/:id', component:MatchInfoComponent},
  {path: 'teams', component:TeamsComponent}];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
